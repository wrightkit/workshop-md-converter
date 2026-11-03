# Workshop Markdown Mirror: Agent Work Guide

## Repository boundary

- This repository publishes `md.wrightkit.dev`: a static Nimbus (Astro) docs site that mirrors the Workshop.codes wiki as Markdown.
- Workshop.codes is the upstream source. Do not modify upstream services or deployment state unless the user asks.
- Cloudflare Workers Builds deploys `main` through the repository's Git integration. Do not run `wrangler deploy` by hand.

## Content pipeline

1. `pnpm crawl` fetches the wiki into `data/wiki.json`. It needs `CF_CLEARANCE` and `USER_AGENT` from a browser session. Commit the file. CI cannot crawl.
2. `pnpm convert` (run by `dev`, `build`, and `typecheck`) writes `src/content/docs/<category>/<slug>.md`, `public/_redirects`, `public/_legacy/`, and `public/manifest.json`. These files are gitignored.

Do not edit generated files. Change `tools/convert.ts`.

## Route contract

[`docs/MACHINE-CONSUMER-CONTRACT.md`](docs/MACHINE-CONSUMER-CONTRACT.md) defines the legacy routes that machine consumers use. Keep them working. They are generated as redirects in `public/_redirects`.

## Checks

- `pnpm typecheck` and `pnpm build` run in CI.
- `pnpm build` enforces frontmatter and internal-link rules.
