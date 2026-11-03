# Workshop Markdown Mirror

Source of `md.wrightkit.dev`: the Workshop.codes wiki as Markdown, built with [Nimbus](https://nimbus-docs.com/) (Astro) and served as static assets by Cloudflare.

- Agent-facing routes: [`docs/MACHINE-CONSUMER-CONTRACT.md`](docs/MACHINE-CONSUMER-CONTRACT.md)
- Content pipeline and rules: [`AGENTS.md`](AGENTS.md)

## Commands

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # static build into dist/
pnpm typecheck
```

## Refresh the content

```bash
CF_CLEARANCE=... USER_AGENT=... pnpm crawl
pnpm convert
```

Commit the changed Markdown. Cloudflare Workers Builds deploys `main`.
