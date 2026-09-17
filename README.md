# workshop-md-converter

Cloudflare Worker that converts Workshop.code wiki JSON into stable, agent-friendly Markdown for API consumers.

## Overview

This service provides Markdown-first wiki access with predictable routes.

## Available Endpoints

- `GET /` (Markdown onboarding guide)
- `GET /healthz`
- `GET /manifest.json` (machine-readable document manifest)
- `GET /wiki/categories`
- `GET /wiki/categories/:slug`
- `GET /wiki/articles`
- `GET /wiki/articles/:slug`
- `.md` suffixes remain supported as explicit Markdown aliases

## Quick Usage

```bash
# Root onboarding guide
curl https://md.wrightkit.dev/

# Machine-readable document manifest (JSON, metadata only)
curl https://md.wrightkit.dev/manifest.json

# Article index as markdown
curl https://md.wrightkit.dev/wiki/articles
# Workshop documentation category index
curl https://md.wrightkit.dev/wiki/categories/actions

# Exact document
curl https://md.wrightkit.dev/wiki/articles/hero-color-reference-table
```

## Output Behavior

- Responses are served as Markdown (`text/markdown; charset=utf-8`) on article, index, and category routes.
- Article routes first try `/wiki/articles/:slug.json`; only on 404 they fall back to `/wiki/articles.json`. Index rendering remains list-only.
- Article output includes YAML front matter with core metadata, including a `content_hash` (SHA-256 of the rendered document) for provenance and change detection.
- `GET /manifest.json` returns a compact, metadata-only document list (schema version, deterministic slug ordering, markdown/source URLs, conservative aliases). It never includes article bodies or content hashes; exact hashes come from the article route.
- Body conversion uses minimal cleaning only.
- Existing markdown structures (such as headings, code blocks, tables, and lists) are preserved.
- `<style>` and `<script>` tags are removed.
- Missing articles return Markdown 404 pages.
- Upstream fetch failures return Markdown error pages.

## Revision & Conditional Requests

- Article and manifest `ETag` values are content-derived: articles use the SHA-256 hash of the rendered document, so unchanged content keeps a stable ETag regardless of Worker version.
- Conditional requests are honored: a matching `If-None-Match` (or `If-Modified-Since` where `Last-Modified` applies) returns `304 Not Modified` with an empty body.

## Caching

- Generated Markdown (article index, article, and category routes) is cached with the named Workers Cache API. Its keys use canonical routes, renderer version, and the output/source URL scope, so `.md` aliases share inner generated-cache entries and different request-origin fallbacks cannot reuse incorrect content. Writes use `ctx.waitUntil()`, and generated-cache hit/miss is observable via `x-cache-status` (`HIT`/`MISS`).
- Upstream Workshop.codes JSON subrequests are cached separately: success for `UPSTREAM_CACHE_TTL_SECONDS` (default 60s), 404 for 60s, and 5xx never. `x-upstream-cache` (`HIT`/`MISS`) reports upstream cache state at generation time.
- 404 responses use a short TTL; 5xx responses are `no-store` and never cached.
- Worker Caching is enabled for the HTTP response layer as well. `Cf-Cache-Status` reports whether Cloudflare served the response without invoking the Worker; `x-cache-status` remains the inner generated-response cache status when the Worker runs.
- The named Cache API is local to the originating data center and is not a durable store. Worker Caching is a separate Cloudflare cache layer with lower and upper tiers, so an upper-tier hit may serve requests from another data center without invoking the Worker.
- Generation stays on demand and bounded: the article index and manifest are metadata-only; no bulk rendering or hashing of article bodies is performed. See `docs/ADR-002-caching-strategy.md` for the full strategy.

## Agent / Machine Consumers

The service exposes a small, stable machine surface for coding agents. The full
contract (covering schema, slug rules, revision/hash semantics, caching,
conditional requests, error handling, and compatibility guarantees) is defined in
`docs/MACHINE-CONSUMER-CONTRACT.md`. The backend is model/harness-neutral: it
performs no search, ranking, or embeddings; consumers implement retrieval locally
against the manifest.

Minimal flow:

```bash
# 1. Discover documents via the manifest (metadata only, no article bodies)
curl -s https://md.wrightkit.dev/manifest.json | jq '.documents[0]'

# 2. Fetch an exact document using its markdownUrl
curl -s https://md.wrightkit.dev/wiki/articles/hero-color-reference-table

# 3. Cache safely: the ETag is the content hash, so refetch conditionally
curl -s -D - -o /dev/null -H 'If-None-Match: "<etag from step 2>"' \
  https://md.wrightkit.dev/wiki/articles/hero-color-reference-table
# → 304 Not Modified while the document is unchanged
```

## Maintainer Note

For local development and runtime configuration, use the repository scripts and `wrangler.jsonc` as the source of truth. GitHub Actions validates changes; production and branch-preview deployments are owned by Cloudflare Workers Builds through the repository's Git integration.

## License & Content Ownership

- This converter code is licensed under `AGPL-3.0-only` (see `LICENSE`).
- Workshop.codes wiki content rendered by this project is not part of this repository's codebase and is not re-licensed under this project's AGPL license.
- Use and redistribution of Workshop.codes content must follow Workshop.codes Terms of Service: <https://workshop.codes/tos>.
