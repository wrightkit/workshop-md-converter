import { HttpError } from './core/errors';
import { logRequest } from './core/logger';
import { NOT_FOUND_CACHE_TTL_SECONDS, getCacheTtlSeconds } from './core/config';
import type { Env } from './env';
import { negotiateMarkdown } from './http/negotiate';
import { maybeNotModified } from './http/conditional';
import { buildCacheKey } from './http/cache-key';
import { cacheLookup, cacheStore, generatedCacheUrl } from './cache/cache-api';
import { isJsonBypass } from './routes/api';
import { healthRoute } from './routes/health';
import { homeRoute } from './routes/home';
import { manifestErrorResponse, manifestRoute, resolveManifestRoute } from './routes/manifest';
import { markdownErrorResponse, markdownRoute, resolveMarkdownRoute, resolvePublicBaseUrl } from './routes/markdown';
import { categoryRoute, resolveCategoryRoute } from './routes/categories';
import { normalizeArticleRef } from './source/workshop-adapter';

function canonicalGeneratedPathname(pathname: string): string {
  const markdownRoute = resolveMarkdownRoute(pathname);
  if (markdownRoute.kind === 'index') return '/wiki/articles';
  if (markdownRoute.kind === 'article') return `/wiki/articles/${normalizeArticleRef(markdownRoute.ref)}`;

  const categoryRoute = resolveCategoryRoute(pathname);
  if (categoryRoute.kind === 'index') return '/wiki/categories';
  if (categoryRoute.kind === 'category') return `/wiki/categories/${categoryRoute.slug}`;

  return pathname;
}

function generatedCacheScope(request: Request, env: Env): string {
  return [resolvePublicBaseUrl(request, env), env.UPSTREAM_BASE_URL, env.UPSTREAM_ARTICLES_PATH].join('|');
}

function generatedCacheKey(request: Request, env: Env, pathname: string, variant: string): string {
  return buildCacheKey(
    canonicalGeneratedPathname(pathname),
    variant,
    env.RENDERER_VERSION,
    generatedCacheScope(request, env),
  );
}

async function serveManifest(request: Request, env: Env, ctx?: ExecutionContext): Promise<Response> {
  const startedAt = Date.now();
  const cacheKey = generatedCacheKey(request, env, '/manifest.json', 'json');
  const cacheUrl = generatedCacheUrl(cacheKey);

  const cached = await cacheLookup(cacheUrl);
  if (cached) {
    cached.headers.set('x-cache-key', cacheKey);
    cached.headers.set('x-cache-status', 'HIT');
    return maybeNotModified(request, cached) ?? cached;
  }

  try {
    const response = await manifestRoute(request, env, ctx);
    logRequest({
      traceId: crypto.randomUUID(),
      route: '/manifest.json',
      upstreamUrl: response.headers.get('x-upstream-url') ?? undefined,
      status: response.status,
      cacheStatus: 'miss',
      upstreamCache: response.headers.get('x-upstream-cache') ?? undefined,
      transformMs: Date.now() - startedAt,
      bytesOut: Number(response.headers.get('content-length') ?? 0),
      rendererVersion: env.RENDERER_VERSION,
    });
    if (ctx) ctx.waitUntil(cacheStore(cacheUrl, response.clone(), getCacheTtlSeconds(env)));
    response.headers.set('x-cache-key', cacheKey);
    response.headers.set('x-cache-status', 'MISS');
    return maybeNotModified(request, response) ?? response;
  } catch (error) {
    const message = error instanceof HttpError ? error.message : 'Failed to generate manifest';
    return manifestErrorResponse(502, 'Upstream Error', message, env);
  }
}

export default {
  async fetch(request: Request, env: Env, ctx?: ExecutionContext): Promise<Response> {
    const startedAt = Date.now();
    const url = new URL(request.url);

    const health = healthRoute(url.pathname);
    if (health) return health;

    const home = homeRoute(url.pathname, env);
    if (home) return home;

    const manifest = resolveManifestRoute(url.pathname);
    if (manifest.kind === 'manifest') {
      return serveManifest(request, env, ctx);
    }

    if (isJsonBypass(url.pathname)) {
      return fetch(request);
    }

    const wantsMarkdown = negotiateMarkdown(request, url.pathname);
    const category = resolveCategoryRoute(url.pathname);
    const categoryMarkdown = category.kind !== 'none';
    const route = resolveMarkdownRoute(url.pathname);

    if (route.kind === 'none' && !categoryMarkdown && !wantsMarkdown) {
      return fetch(request);
    }

    const traceId = crypto.randomUUID();
    const cacheKey = generatedCacheKey(request, env, url.pathname, 'markdown');
    const cacheUrl = generatedCacheUrl(cacheKey);

    const cached = await cacheLookup(cacheUrl);
    if (cached) {
      cached.headers.set('vary', 'Accept');
      cached.headers.set('x-cache-key', cacheKey);
      cached.headers.set('x-cache-status', 'HIT');
      logRequest({
        traceId,
        route: url.pathname,
        status: cached.status,
        cacheStatus: 'hit',
        rendererVersion: env.RENDERER_VERSION,
      });
      return maybeNotModified(request, cached) ?? cached;
    }

    try {
      const response = categoryMarkdown ? await categoryRoute(request, env, ctx) : await markdownRoute(request, env, ctx);
      logRequest({
        traceId,
        route: url.pathname,
        upstreamUrl: response.headers.get('x-upstream-url') ?? undefined,
        articleSlug: response.headers.get('x-article-slug') ?? undefined,
        status: response.status,
        cacheStatus: 'miss',
        upstreamCache: response.headers.get('x-upstream-cache') ?? undefined,
        transformMs: Date.now() - startedAt,
        bytesIn: Number(response.headers.get('x-upstream-bytes') ?? 0),
        bytesOut: Number(response.headers.get('content-length') ?? 0),
        tokenEstimate: Number(response.headers.get('x-markdown-tokens') ?? 0),
        rendererVersion: env.RENDERER_VERSION,
      });
      if (ctx) ctx.waitUntil(cacheStore(cacheUrl, response.clone(), getCacheTtlSeconds(env)));
      response.headers.set('x-cache-key', cacheKey);
      response.headers.set('x-cache-status', 'MISS');
      return maybeNotModified(request, response) ?? response;
    } catch (error) {
      if (error instanceof HttpError) {
        const response = markdownErrorResponse(
          error.status,
          error.status === 404 ? (categoryMarkdown ? 'Category Not Found' : 'Article Not Found') : 'Upstream Error',
          error.message,
          env,
        );
        logRequest({
          traceId,
          route: url.pathname,
          status: response.status,
          cacheStatus: 'miss',
          transformMs: Date.now() - startedAt,
          rendererVersion: env.RENDERER_VERSION,
        });
        if (ctx && error.status === 404) {
          ctx.waitUntil(cacheStore(cacheUrl, response.clone(), NOT_FOUND_CACHE_TTL_SECONDS));
        }
        response.headers.set('x-cache-key', cacheKey);
        response.headers.set('x-cache-status', 'MISS');
        return response;
      }

      const response = markdownErrorResponse(500, 'Internal Error', 'Failed to render markdown', env);
      logRequest({
        traceId,
        route: url.pathname,
        status: response.status,
        cacheStatus: 'miss',
        transformMs: Date.now() - startedAt,
        rendererVersion: env.RENDERER_VERSION,
      });
      response.headers.set('x-cache-key', cacheKey);
      response.headers.set('x-cache-status', 'MISS');
      return response;
    }
  },
};
