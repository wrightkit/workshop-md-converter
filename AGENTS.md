# Workshop Markdown Mirror: Agent Work Guide

## Repository boundary

- This repository publishes `md.wrightkit.dev`: a static Nimbus (Astro) docs site that mirrors the Workshop.codes wiki as Markdown.
- Workshop.codes is the upstream source. Do not modify upstream services or deployment state unless the user asks.
- Cloudflare Workers Builds deploys `main` through the repository's Git integration. Do not run `wrangler deploy` by hand.

## Content

- `src/content/docs/<category>/<slug>.md`, `public/_redirects`, `public/_legacy/`, and `public/manifest.json` are the committed source. Edit them directly.
- `pnpm crawl` fetches the wiki into `out/wiki.json` (gitignored). It needs `CF_CLEARANCE` and `USER_AGENT` from a browser session.
- `pnpm convert` rewrites all of the files above from `out/wiki.json`. It overwrites manual edits. Review the diff before committing.
- Articles over the size guard are split into `<slug>/index.md` plus one page per part. See `SPLIT` in `tools/convert.ts`.

## Route contract

[`docs/MACHINE-CONSUMER-CONTRACT.md`](docs/MACHINE-CONSUMER-CONTRACT.md) defines the legacy routes that machine consumers use. Keep them working. They are generated as redirects in `public/_redirects`.

## Checks

- `pnpm typecheck` and `pnpm build` run in CI.
- `pnpm build` enforces frontmatter and internal-link rules.
