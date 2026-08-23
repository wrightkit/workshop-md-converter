import { afterEach, describe, expect, it, vi } from 'vitest';
import worker from '../../src/index';
import { resolveCategoryRoute } from '../../src/routes/categories';

const env = {
  UPSTREAM_BASE_URL: 'https://workshop.codes',
  UPSTREAM_ARTICLES_PATH: '/wiki/articles.json',
  RENDERER_VERSION: 'v1',
  CACHE_TTL_SECONDS: '300',
  PUBLIC_BASE_URL: 'https://md.example',
};

describe('category routes', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('resolves the category index and slug routes', () => {
    expect(resolveCategoryRoute('/wiki/categories.md')).toEqual({ kind: 'index' });
    expect(resolveCategoryRoute('/wiki/categories/actions')).toEqual({ kind: 'category', slug: 'actions' });
    expect(resolveCategoryRoute('/wiki/categories/actions.json')).toEqual({ kind: 'none' });
  });

  it('renders the upstream category index as a Markdown directory', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify([
      { title: 'Constants', slug: 'constants', description: 'Static values.' },
      { title: 'Actions', slug: 'actions', description: 'Workshop actions.' },
    ]), { headers: { 'content-type': 'application/json' } })));

    const response = await worker.fetch(new Request('https://worker.test/wiki/categories.md'), env as never);
    const text = await response.text();

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/markdown');
    expect(text).toContain('# Workshop.code Wiki Categories');
    expect(text.indexOf('/wiki/categories/actions.md')).toBeLessThan(text.indexOf('/wiki/categories/constants.md'));
  });

  it('renders a category as links to exact article Markdown routes', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify([
      {
        title: 'Abort',
        slug: 'abort',
        category: { title: 'Actions', slug: 'actions', description: 'Workshop actions.' },
        updated_at: '2026-08-23T00:00:00.000Z',
      },
    ]), { headers: { 'content-type': 'application/json' } })));

    const response = await worker.fetch(new Request('https://worker.test/wiki/categories/actions.md'), env as never);
    const text = await response.text();

    expect(response.status).toBe(200);
    expect(text).toContain('title: "Workshop.code wiki category: Actions"');
    expect(text).toContain('- [Abort](https://md.example/wiki/articles/abort.md)');
    expect(text).not.toContain('content:');
  });
});
