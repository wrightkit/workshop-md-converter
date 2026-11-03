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
const articles: Article[] = JSON.parse(await readFile(join(root, 'out/wiki.json'), 'utf8'));

const bySlug = new Map(articles.map((a) => [a.slug, a]));
const byTitle = new Map(articles.map((a) => [a.title.toLowerCase(), a]));
const categories = new Map(articles.map((a) => [a.category.slug, a.category]));

const href = (a: Article) => `/${a.category.slug}/${a.slug}/`;

function resolve(target: string): string | null {
  const [path, hash = ''] = target.replaceAll('%2B', '+').split('#');
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
    .replace(/\[([^\]]*)\]\(((?:https?:\/\/workshop\.codes)?\/wiki\/[^)\s]*)\)/g, (_, text: string, target: string) => {
      const next = resolve(target);
      return next ? `[${text}](${next})` : text;
    })
    .replace(/href="(?:https?:\/\/workshop\.codes)?(\/wiki\/[^"]*)"/g, (all, target: string) => {
      const next = resolve(target);
      return next ? `href="${next}"` : all;
    });
}

const frontmatter = (fields: Record<string, string | null>) =>
  `---\n${Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join('\n')}\n---\n\n`;

// Drops trailing whitespace. A Markdown hard break (two trailing spaces) becomes a backslash break.
function tidy(text: string): string {
  let fenced = false;
  const lines = text.split('\n').map((line) => line.replace(/^ +\t/, '\t'));
  return lines
    .map((line, i) => {
      const trimmed = line.trimEnd();
      if (/^\s*```/.test(trimmed)) fenced = !fenced;
      const hardBreak = !fenced && / {2,}$/.test(line) && !/^\s*[<|]/.test(trimmed) && lines[i + 1]?.trim();
      return hardBreak ? `${trimmed}\\` : trimmed;
    })
    .join('\n');
}

// Articles over the repository size limit are split into one page per part, under <slug>/.
const SPLIT: Record<string, RegExp> = {
  'health-packs-locations': /^(?=# )/m,
  'comparisons-and-truth': /^(?=<details>)/m,
};
const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function writePage(file: string, fields: Record<string, string | null>, body: string) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, frontmatter(fields) + tidy(body.trim()) + '\n');
}

for (const a of articles) {
  const dir = join(docsDir, a.category.slug);
  const body = convert(a.content);
  const split = SPLIT[a.slug];
  if (!split) {
    await writePage(join(dir, `${a.slug}.md`), { title: a.title, description: a.subtitle }, body);
    continue;
  }
  const [intro, ...parts] = body.split(split);
  const pages = parts.map((part) => {
    const title = part.match(/^# (.+)$/m)?.[1] ?? part.match(/<summary>(.*?)<\/summary>/)?.[1] ?? '';
    return { title, slug: slugify(title), body: part.replace(/^# .*\n/, '') };
  });
  for (const page of pages) await writePage(join(dir, a.slug, `${page.slug}.md`), { title: page.title }, page.body);
  const links = pages.map((page) => `- [${page.title}](${href(a)}${page.slug}/)`).join('\n');
  await writePage(join(dir, a.slug, 'index.md'), { title: a.title, description: a.subtitle }, `${intro}\n\n${links}`);
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
