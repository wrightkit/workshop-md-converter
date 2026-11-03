import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

interface Category {
  slug: string;
  title: string;
  description: string | null;
}
interface Article {
  title: string;
  updated_at: string;

  subtitle: string | null;
  content: string;
  slug: string;
  category: Category;
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = join(root, 'src/content/docs');
const publicDir = join(root, 'public');
const ORIGIN = 'https://md.wrightkit.dev';
const articles: Article[] = JSON.parse(await readFile(join(root, 'data/wiki.json'), 'utf8'));

const bySlug = new Map(articles.map((a) => [a.slug, a]));
const byTitle = new Map(articles.map((a) => [a.title.toLowerCase(), a]));
const categories = new Map(articles.map((a) => [a.category.slug, a.category]));

const href = (a: Article) => `/${a.category.slug}/${a.slug}/`;

function resolve(target: string): string | null {
  const [path, hash = ''] = target.split('#');
  const category = path.match(/^\/wiki\/categories\/([^/]+)$/)?.[1];
  if (category) return categories.has(category) ? `/${category}/` : null;
  const key = decodeURIComponent(path.replace(/^\/wiki\/articles\//, '').replaceAll('+', ' ')).toLowerCase();
  const hit = bySlug.get(key) ?? byTitle.get(key);
  return hit ? href(hit) + (hash && `#${hash}`) : null;
}

function convert(content: string): string {
  return content
    .replaceAll('\r\n', '\n')
    .replaceAll('\f', '')
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '')
    .replace(/\[([^\]]*)\]\((\/wiki\/[^)\s]*)\)/g, (_, text: string, target: string) => {
      const next = resolve(target.replaceAll('%2B', '+'));
      return next ? `[${text}](${next})` : text;
    });
}

const frontmatter = (fields: Record<string, string | null>) =>
  `---\n${Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n')}\n---\n\n`;

for (const a of articles) {
  const file = join(docsDir, a.category.slug, `${a.slug}.md`);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, frontmatter({ title: a.title, description: a.subtitle }) + convert(a.content).trim() + '\n');
}

for (const c of categories.values()) {
  await writeFile(
    join(docsDir, c.slug, 'index.md'),
    frontmatter({ title: c.title, description: c.description }) +
      articles
        .filter((a) => a.category.slug === c.slug)
        .sort((x, y) => x.title.localeCompare(y.title))
        .map((a) => `- [${a.title}](${href(a)})`)
        .join('\n') +
      '\n',
  );
}

// Legacy md.wrightkit.dev routes: /wiki/articles/:slug[.md] and /wiki/categories[/:slug].
const legacyLinks = (list: Article[]) =>
  list.map((a) => `- [${a.title}](/wiki/articles/${a.slug})`).join('\n') + '\n';
const sorted = [...articles].sort((x, y) => x.slug.localeCompare(y.slug));
const legacy = join(publicDir, '_legacy');
await mkdir(join(legacy, 'categories'), { recursive: true });
await writeFile(join(legacy, 'articles.md'), '# Articles\n\n' + legacyLinks(sorted));
await writeFile(
  join(legacy, 'categories.md'),
  '# Categories\n\n' + [...categories.values()].map((c) => `- [${c.title}](/wiki/categories/${c.slug})`).join('\n') + '\n',
);
for (const c of categories.values()) {
  await writeFile(
    join(legacy, 'categories', `${c.slug}.md`),
    `# ${c.title}\n\n` + legacyLinks(sorted.filter((a) => a.category.slug === c.slug)),
  );
}
await writeFile(
  join(publicDir, '_redirects'),
  [
    '/wiki/articles /_legacy/articles.md 301',
    '/wiki/categories /_legacy/categories.md 301',
    ...[...categories.keys()].map((c) => `/wiki/categories/${c} /_legacy/categories/${c}.md 301`),
    ...sorted.flatMap((a) => [`/wiki/articles/${a.slug}`, `/wiki/articles/${a.slug}.md`].map((from) => `${from} ${href(a)}index.md 301`)),
  ].join('\n') + '\n',
);
await writeFile(
  join(publicDir, 'manifest.json'),
  JSON.stringify({
    schemaVersion: 1,
    documents: sorted.map((a) => ({
      title: a.title,
      slug: a.slug,
      category: a.category.title,
      markdownUrl: `${ORIGIN}/wiki/articles/${a.slug}`,
      sourceUrl: `https://workshop.codes/wiki/articles/${a.slug}`,
      updatedAt: a.updated_at,
      aliases: [...new Set([a.title, a.slug])],
    })),
  }),
);

console.log(`${articles.length} articles, ${categories.size} categories`);
