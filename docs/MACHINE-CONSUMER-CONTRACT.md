# Machine-Consumer Contract

This document lists the routes of `md.wrightkit.dev` that coding agents, evaluation harnesses, and retrieval tools can rely on. The site is static. It performs no search, ranking, or embedding.

## Routes

| Route | Result |
| --- | --- |
| `GET /manifest.json` | JSON manifest of all articles (`schemaVersion: 1`) |
| `GET /wiki/articles` | 301 to a Markdown index of all articles |
| `GET /wiki/articles/:slug` | 301 to the article Markdown (`/<category>/<slug>/index.md`) |
| `GET /wiki/articles/:slug.md` | Same as above |
| `GET /wiki/categories` | 301 to a Markdown index of categories |
| `GET /wiki/categories/:slug` | 301 to a Markdown list of the articles in one category |
| `GET /llms.txt` | Nimbus documentation index |

Clients must follow redirects (`curl -L`).

## Identity

- The slug identifies an article. Slugs are unique.
- Index lists link to `/wiki/articles/:slug`.
- Article bodies link to site pages (`/<category>/<slug>/`).

## Manifest

`documents` is sorted by `slug`. Each entry has `title`, `slug`, `category`, `markdownUrl`, `sourceUrl`, `updatedAt`, and `aliases` (`[title, slug]`, deduplicated). It contains no article bodies.

## Freshness

The content is a snapshot from `pnpm crawl`. It does not follow upstream changes until the snapshot is regenerated and merged.
