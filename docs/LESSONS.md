# Lessons

Short review queue of reusable failure classes from merged workshop-md-converter work. Each entry names a prevention action and the evidence behind it. Promote an entry into a regression test, an owner contract, or an existing engineering standard, then remove it here. The procedure is the `wrightkit-retro` skill in `wrightkit/.agents`.

### Fetch paginated upstream collections to the boundary

- **Rule:** When an upstream endpoint paginates, fetch until the terminating short or empty page — a single-page read of a list endpoint is a truncation bug. Cover multi-page upstreams in tests.
- **Why:** The manifest and article index listed 24 of 632 articles (~4%) — the documented machine-discovery surface silently truncated the wiki.
- **Prevention home:** multi-page upstream fixtures (added in #64).
- **Incidents:** [#64](https://github.com/wrightkit/workshop-md-converter/pull/64) (fixes #61) — observed 2026-10-03

### Cache-facing fields derive from content, not render time

- **Rule:** Any field feeding an ETag or conditional-request path must be a deterministic function of the source content; a wall-clock stamp inside hashed output makes every render distinct and silently breaks caching.
- **Why:** Restoring `generated_at` as `new Date().toISOString()` gave an unchanged index a fresh ETag on every render — caught in review and fixed by deriving the revision from source timestamps.
- **Prevention home:** coverage asserting a stable ETag for unchanged content (added in #53).
- **Incidents:** [#53](https://github.com/wrightkit/workshop-md-converter/pull/53) — observed 2026-09-17

### A check that CI never runs is not a gate

- **Rule:** When adding PR validation, enumerate the repository's existing checks and wire each in; a strict check that runs only by hand gates nothing.
- **Why:** The CI added in #55 covered the route-document guard, tests, and a dry-run build but not the repository's existing strict `tsc --noEmit` — a change could reach green CI without type-checking (open #65).
- **Prevention home:** issue #65 — expose the check as a package script and run it in PR CI.
- **Incidents:** [#55](https://github.com/wrightkit/workshop-md-converter/pull/55) + issue [#65](https://github.com/wrightkit/workshop-md-converter/issues/65) — observed 2026-09-17

### A durable claim must be checked against its authority, not written from assumption

- **Rule:** Claims about an external platform or product in durable docs must be checked against the authority they describe — here, Cloudflare's documented caching model.
- **Why:** The machine-consumer contract described Workers Caching as PoP-local like the Cache API; Cloudflare's model differs, and the document would have taught consumers a wrong caching assumption. Review caught it before merge.
- **Prevention home:** workspace documentation-synchronization invariant; reviewer entry point wrightkit/.github#83. Cross-repo class escalation: wrightkit/.github#99; same class decided in wrightkit/opy-rs#556.
- **Incidents:** [#53](https://github.com/wrightkit/workshop-md-converter/pull/53) — observed 2026-09-17
