import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  fetchAllListPages,
  MAX_UPSTREAM_LIST_PAGES,
  UPSTREAM_LIST_PAGE_SIZE,
} from '../../src/source/paginated-list';
import type { WorkshopArticleRaw } from '../../src/core/types';

const ENV = {
  UPSTREAM_BASE_URL: 'https://workshop.codes',
  UPSTREAM_ARTICLES_PATH: '/wiki/articles.json',
  RENDERER_VERSION: 'v1',
  CACHE_TTL_SECONDS: '300',
};

function pageOf(size: number, prefix: string): WorkshopArticleRaw[] {
  return Array.from({ length: size }, (_, index) => ({
    title: `${prefix} ${index + 1}`,
    slug: `${prefix}-${index + 1}`,
  }));
}

function stubPages(pages: WorkshopArticleRaw[][]) {
  const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
    const url = new URL(String(input));
    const page = Number(url.searchParams.get('page') ?? '1');
    return new Response(JSON.stringify(pages[page - 1] ?? []), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

describe('fetchAllListPages', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('aggregates every upstream page until the first short page', async () => {
    const fetchMock = stubPages([
      pageOf(UPSTREAM_LIST_PAGE_SIZE, 'a'),
      pageOf(UPSTREAM_LIST_PAGE_SIZE, 'b'),
      [{ title: 'Last', slug: 'last' }],
    ]);

    const result = await fetchAllListPages(ENV as never, ENV.UPSTREAM_ARTICLES_PATH);

    expect(result.data).toHaveLength(2 * UPSTREAM_LIST_PAGE_SIZE + 1);
    expect(result.data.at(-1)?.slug).toBe('last');
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(String(fetchMock.mock.calls[0]?.[0])).toBe('https://workshop.codes/wiki/articles.json?page=1');
    expect(String(fetchMock.mock.calls[2]?.[0])).toBe('https://workshop.codes/wiki/articles.json?page=3');
    expect(result.upstreamUrl).toBe('https://workshop.codes/wiki/articles.json');
    expect(result.fromCache).toBe(false);
  });

  it('keeps fetching when a page returns more than the upstream page size', async () => {
    const fetchMock = stubPages([
      pageOf(UPSTREAM_LIST_PAGE_SIZE + 6, 'wide'),
      pageOf(2, 'tail'),
    ]);

    const result = await fetchAllListPages(ENV as never, ENV.UPSTREAM_ARTICLES_PATH);

    expect(result.data).toHaveLength(UPSTREAM_LIST_PAGE_SIZE + 8);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('deduplicates entries by slug across overlapping pages', async () => {
    const overlap = pageOf(UPSTREAM_LIST_PAGE_SIZE, 'a');
    const fetchMock = stubPages([
      overlap,
      [overlap[UPSTREAM_LIST_PAGE_SIZE - 1]!, { title: 'New', slug: 'new' }],
    ]);

    const result = await fetchAllListPages(ENV as never, ENV.UPSTREAM_ARTICLES_PATH);

    expect(result.data).toHaveLength(UPSTREAM_LIST_PAGE_SIZE + 1);
    const slugs = result.data.map((item) => item.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('stops at the page cap when upstream never returns a short page', async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const page = Number(new URL(String(input)).searchParams.get('page') ?? '1');
      return new Response(JSON.stringify(pageOf(UPSTREAM_LIST_PAGE_SIZE, `p${page}`)), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await fetchAllListPages(ENV as never, ENV.UPSTREAM_ARTICLES_PATH);

    expect(result.data).toHaveLength(UPSTREAM_LIST_PAGE_SIZE * MAX_UPSTREAM_LIST_PAGES);
    expect(fetchMock).toHaveBeenCalledTimes(MAX_UPSTREAM_LIST_PAGES);
    expect(String(fetchMock.mock.calls.at(-1)?.[0])).toContain(`page=${MAX_UPSTREAM_LIST_PAGES}`);
  });

  it('returns an empty list when the first page is empty', async () => {
    const fetchMock = stubPages([[]]);

    const result = await fetchAllListPages(ENV as never, ENV.UPSTREAM_ARTICLES_PATH);

    expect(result.data).toEqual([]);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
