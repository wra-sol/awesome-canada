# Deployment

The site deploys to **Cloudflare Pages** (`awesome-canada.pages.dev`) via
Cloudflare's **git-connected builds**: Cloudflare watches this repository
directly and builds on every push — no GitHub Action in the deploy path.

This matters because pushes made by automation with the default
`GITHUB_TOKEN` (issue processors, scheduled jobs) do **not** trigger other
GitHub Actions workflows, but they *do* reach Cloudflare's webhook. With
git-connected builds, every change to `master` deploys, no matter who or
what pushed it. PRs also get free preview deployments at unique URLs.

## One-time setup (Cloudflare dashboard)

Done once by an account owner — this is an OAuth flow that can't be scripted:

1. Cloudflare dashboard → **Workers & Pages** → project **awesome-canada**
   → **Settings** → **Builds & deployments** → **Connect to Git**
   (for a fresh project: **Create** → **Pages** → **Connect to Git**).
2. Authorize the Cloudflare GitHub App for `wra-sol/awesome-canada`.
3. Build settings:
   - **Production branch:** `master`
   - **Build command:** `node scripts/validate.js && node scripts/build-site.js`
   - **Build output directory:** `site`
   - No framework preset; no environment variables needed.

Node version comes from `.nvmrc` (22). There is no `package.json` — the
build scripts are dependency-free — so the install step is a no-op.

Putting `validate.js` in the build command means a broken `resources.json`
fails the build and the previous deploy stays live.

## Manual fallback

`.github/workflows/deploy-cloudflare.yml` is kept as a manually triggered
fallback (`workflow_dispatch`) using `wrangler pages deploy` with the
`CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets. Use it only if
the git connection is down; day-to-day deploys are Cloudflare-side.

## Scheduled jobs (2026-08-24 — hard rule: no GitHub Actions except tests)

Nightly maintenance runs on the `awesome-canada-maintenance` Cloudflare Worker
(`worker/`, cron triggers 04:00 + 05:00 UTC) instead of GitHub Actions:

- **04:00 UTC clean** — checks every URL, removes entries failing 2 consecutive
  hard checks (bot-blocks are soft), merges staged research entries, regenerates
  README, single atomic commit to master → git integration deploys.
- **05:00 UTC research** — deterministic probes (eScribe/CivicWeb/AllNetMeetings/
  ArcGIS Hub OGC/Questica), stages verified candidates on the `research/staged`
  branch and opens/updates the review PR.

Secrets (`wrangler secret put`, run in `worker/`): `GH_TOKEN` (fine-grained PAT,
Contents RW + Pull requests RW), `MAINTENANCE_TOKEN` (manual HTTP trigger auth).
Manual smoke test without waiting for cron:

    curl -X POST "https://awesome-canada-maintenance.<subdomain>.workers.dev/run/clean?limit=10&dry-run=1&token=$TOKEN"

If `scripts/categories.js` changes, re-run `node scripts/sync-worker-catalog.js`;
CI fails when the worker snapshot goes stale.

## Likes API (2026-08-24)

`functions/api/likes/[[path]].js` is a Pages Function deployed automatically by
the git integration (no build changes, no Actions). Storage is D1 database
`awesome-canada-likes`, bound as `LIKES_DB` in the root `wrangler.toml`;
visitor hashing needs the Pages secret `LIKES_SALT`.

Routes (same-origin only):

    POST /api/likes            {url} — like; 24h re-like cooldown, 30/hour burst cap
    GET  /api/likes/all        {counts:{url:total}, totalLikes}
    GET  /api/likes/top        ?window=hour|day|month|all&limit=N

One-time setup already done 2026-08-24 (repeat only for a new account;
account ID for this project lives in CLIPBOARD.md):

    CLOUDFLARE_ACCOUNT_ID=<your-account-id>
    wrangler d1 create awesome-canada-likes
    wrangler d1 execute awesome-canada-likes --remote --file=schema.sql
    wrangler pages secret put LIKES_SALT --project-name awesome-canada

Local dev: `.dev.vars` holds a dummy `LIKES_SALT`; apply the schema locally
with `wrangler d1 execute awesome-canada-likes --local --file=schema.sql`,
then `wrangler pages dev site`. Unit tests: `node --test`.
Note: preview deployments share the production D1 database.
