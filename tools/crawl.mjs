import { mkdir, writeFile } from 'node:fs/promises';

const ORIGIN = 'https://workshop.codes';
const { CF_CLEARANCE, USER_AGENT } = process.env;
if (!CF_CLEARANCE || !USER_AGENT) throw new Error('Set CF_CLEARANCE and USER_AGENT.');
const OUT = new URL('../data/', import.meta.url).pathname;
const PAGE_SIZE = 24;
const MAX_PAGES = 100;
const DELAY_MS = 300;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(path) {
  const res = await fetch(`${ORIGIN}${path}`, {
    headers: { accept: 'application/json', 'user-agent': USER_AGENT, cookie: `cf_clearance=${CF_CLEARANCE}` },
  });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

const asList = (raw) =>
  Array.isArray(raw) ? raw : (raw.data ?? raw.items ?? raw.articles ?? Object.values(raw).find(Array.isArray) ?? []);

const index = new Map();
for (let n = 1; n <= MAX_PAGES; n += 1) {
  const items = asList(await getJson(`/wiki/articles.json?page=${n}`));
  const before = index.size;
  for (const item of items) if (item.slug) index.set(item.slug, item);
  console.log(`index page ${n}: ${items.length} items, ${index.size} total`);
  if (items.length < PAGE_SIZE || index.size === before) break;
  await sleep(DELAY_MS);
}

await mkdir(OUT, { recursive: true });
await writeFile(`${OUT}wiki.json`, JSON.stringify([...index.values()], null, 2));
console.log(`saved ${index.size} articles to ${OUT}wiki.json`);
