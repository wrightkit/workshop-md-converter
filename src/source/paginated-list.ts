import { normalizeUpstreamUrl } from '../core/config';
import type { Env } from '../env';
import type { WorkshopArticleRaw, WorkshopListRaw } from '../core/types';
import { fetchJson, type FetchJsonResult } from './fetch-json';
import { extractArticles, workshopArticleSlug } from './workshop-adapter';

export const UPSTREAM_LIST_PAGE_SIZE = 24;
export const MAX_UPSTREAM_LIST_PAGES = 100;

/**
 * Fetch every page of a paginated upstream list endpoint (`?page=N`, 24 items
 * per upstream page). Pagination stops at the first short page (fewer than
 * UPSTREAM_LIST_PAGE_SIZE items) or after MAX_UPSTREAM_LIST_PAGES, whichever
 * comes first. Items are deduplicated by normalized slug so overlapping pages
 * cannot emit duplicate entries.
 */
export async function fetchAllListPages(
  env: Env,
  path: string,
  ctx?: ExecutionContext,
): Promise<FetchJsonResult<WorkshopArticleRaw[]>> {
  const separator = path.includes('?') ? '&' : '?';
  const seen = new Set<string>();
  const items: WorkshopArticleRaw[] = [];
  let bytesIn = 0;
  let fromCache = true;

  for (let page = 1; page <= MAX_UPSTREAM_LIST_PAGES; page += 1) {
    const current = await fetchJson<WorkshopListRaw | WorkshopArticleRaw[]>(env, `${path}${separator}page=${page}`, ctx);
    bytesIn += current.bytesIn;
    fromCache = fromCache && current.fromCache;
    const pageItems = extractArticles(current.data);
    for (const item of pageItems) {
      const slug = workshopArticleSlug(item);
      if (seen.has(slug)) continue;
      seen.add(slug);
      items.push(item);
    }
    if (pageItems.length < UPSTREAM_LIST_PAGE_SIZE) break;
  }

  return {
    data: items,
    bytesIn,
    upstreamUrl: new URL(path, normalizeUpstreamUrl(env)).toString(),
    fromCache,
  };
}
