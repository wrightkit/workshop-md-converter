import { HttpError } from '../core/errors';
import { fetchJson } from '../source/fetch-json';
import { extractArticles, normalizeWorkshopArticle } from '../source/workshop-adapter';
import { markdownResponse } from '../http/response';
import { toFrontMatter } from '../utils/yaml';
import { estimateTokens } from '../transform/tokens';
import { sha256Hex } from '../utils/hash';
import type { Env } from '../env';
import type { WorkshopArticleRaw, WorkshopCategoryRaw } from '../core/types';
import type { FetchJsonResult } from '../source/fetch-json';
import { resolvePublicBaseUrl } from './markdown';

const CATEGORY_PAGE_SIZE = 24;
const MAX_CATEGORY_PAGES = 100;

export type CategoryRouteKind =
  | { kind: 'index' }
  | { kind: 'category'; slug: string }
  | { kind: 'none' };

export function resolveCategoryRoute(pathname: string): CategoryRouteKind {
  if (pathname.endsWith('.json')) return { kind: 'none' };
  if (pathname === '/wiki/categories.md' || pathname === '/wiki/categories') return { kind: 'index' };
  const match = pathname.match(/^\/wiki\/categories\/([^/]+?)(?:\.md)?$/);
  return match ? { kind: 'category', slug: match[1] } : { kind: 'none' };
}

function extractCategories(raw: unknown): WorkshopCategoryRaw[] {
  if (Array.isArray(raw)) return raw as WorkshopCategoryRaw[];
  if (raw && typeof raw === 'object') {
    const candidate = Object.values(raw as Record<string, unknown>).find(Array.isArray);
    if (Array.isArray(candidate)) return candidate as WorkshopCategoryRaw[];
  }
  return [];
}

function categorySlug(raw: WorkshopCategoryRaw): string | undefined {
  return typeof raw.slug === 'string' && raw.slug.trim() ? raw.slug.trim() : undefined;
}

function categoryTitle(raw: WorkshopCategoryRaw, slug: string): string {
  return typeof raw.title === 'string' && raw.title.trim() ? raw.title : slug;
}

function categoryUrl(base: string, slug: string): string {
  return new URL(`/wiki/categories/${slug}`, base).toString();
}

function renderCategoryIndex(raw: unknown, publicBaseUrl: string): string {
  const categories: Array<{ slug: string; title: string; description?: unknown }> = [];
  for (const item of extractCategories(raw)) {
    const slug = categorySlug(item);
    if (slug) categories.push({ slug, title: categoryTitle(item, slug), description: item.description });
  }
  categories.sort((a, b) => a.slug.localeCompare(b.slug));
  const lines = [
    toFrontMatter({
      title: 'Workshop.code wiki categories index',
      source: 'workshop',
      content_type: 'wiki-category-index',
      count: categories.length,
    }),
    '',
    '# Workshop.code Wiki Categories',
    '',
  ];
  for (const category of categories) {
    lines.push(`- [${category.title}](${categoryUrl(publicBaseUrl, category.slug)})`);
    if (typeof category.description === 'string' && category.description.trim()) lines.push(`  - ${category.description}`);
  }
  return `${lines.join('\n')}\n`;
}

function renderCategory(raw: unknown, slug: string, publicBaseUrl: string, upstreamBaseUrl: string): string {
  const rawArticles = extractArticles(raw as { [key: string]: unknown });
  const articles = rawArticles
    .map((item: WorkshopArticleRaw) => normalizeWorkshopArticle(item, publicBaseUrl, upstreamBaseUrl))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  const category = rawArticles.find((item) => item.category && typeof item.category === 'object')?.category as
    | WorkshopCategoryRaw
    | undefined;
  const title = category ? categoryTitle(category, slug) : articles[0]?.category || slug;
  const description = category?.description;
  const lines = [
    toFrontMatter({
      title: `Workshop.code wiki category: ${title}`,
      source: 'workshop',
      content_type: 'wiki-category',
      slug,
      count: articles.length,
      description: typeof description === 'string' ? description : undefined,
    }),
    '',
    `# ${title}`,
    '',
    '## Articles',
    '',
  ];
  for (const article of articles) {
    lines.push(`- [${article.title}](${article.url})`);
    if (article.updatedAt) lines.push(`  - updated_at: ${article.updatedAt}`);
  }
  return `${lines.join('\n')}\n`;
}

export async function categoryRoute(request: Request, env: Env, ctx?: ExecutionContext): Promise<Response> {
  const route = resolveCategoryRoute(new URL(request.url).pathname);
  if (route.kind === 'none') throw new HttpError(404, 'Category route not found');
  const publicBaseUrl = resolvePublicBaseUrl(request, env);
  const upstream = route.kind === 'index'
    ? await fetchJson<unknown>(env, '/wiki/categories.json', ctx)
    : await fetchAllCategoryPages(env, route.slug, ctx);
  const markdown = route.kind === 'index'
    ? renderCategoryIndex(upstream.data, publicBaseUrl)
    : renderCategory(upstream.data, route.slug, publicBaseUrl, env.UPSTREAM_BASE_URL);
  const response = markdownResponse({ markdown, tokens: estimateTokens(markdown), etag: `"${await sha256Hex(markdown)}"`, env });
  response.headers.set('x-upstream-url', upstream.upstreamUrl);
  response.headers.set('x-upstream-bytes', String(upstream.bytesIn));
  response.headers.set('x-upstream-cache', upstream.fromCache ? 'HIT' : 'MISS');
  return response;
}

async function fetchAllCategoryPages(
  env: Env,
  slug: string,
  ctx?: ExecutionContext,
): Promise<FetchJsonResult<unknown>> {
  const articles: WorkshopArticleRaw[] = [];
  let lastPage: FetchJsonResult<unknown> | undefined;
  let bytesIn = 0;

  for (let page = 1; page <= MAX_CATEGORY_PAGES; page += 1) {
    const current = await fetchJson<unknown>(env, `/wiki/categories/${slug}.json?page=${page}`, ctx);
    lastPage = current;
    bytesIn += current.bytesIn;
    const pageArticles = Array.isArray(current.data) ? current.data as WorkshopArticleRaw[] : [];
    articles.push(...pageArticles);
    if (pageArticles.length < CATEGORY_PAGE_SIZE) break;
  }

  if (!lastPage) throw new HttpError(502, 'Failed to fetch category pages');
  return { ...lastPage, data: articles, bytesIn };
}
