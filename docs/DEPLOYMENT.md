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

## Submit / Report API (2026-08-24 — no-account submissions)

`functions/api/submit.js` + `functions/api/report.js` (shared code in
`functions/api/_submissions.js`, the `_` prefix keeps it un-routed) let
visitors submit links and report broken ones **without a GitHub account**.
The endpoints validate input, rate-limit, then open a GitHub issue that the
existing `process-issues.mjs` automation triages — issue bodies reuse the
issue templates' `### Field` markdown format, so both issue origins parse
identically.

One-time setup already done 2026-08-24 (repeat only for a new account):

    CLOUDFLARE_ACCOUNT_ID=ad5ec479b9a421faa2ed06c3d1c2b23a
    wrangler d1 execute awesome-canada-likes --remote --file=schema.sql   # adds submission_log
    wrangler pages secret put GITHUB_ISSUE_TOKEN --project-name awesome-canada

`GITHUB_ISSUE_TOKEN` is a fine-grained PAT with **Issues: Read & write** on
`wra-sol/awesome-canada` (separate from the worker's `GH_TOKEN`, which is
Contents/PRs scoped). Until the secret is set, the endpoints answer 503 and
the forms degrade gracefully: they open GitHub with the visitor's answers
pre-filled, exactly like the old flow.

Anti-spam: honeypot `website` field (bots get a fake success, nothing is
stored), per-visitor limits of 2 submissions + 3 reports per hour
(5/10 per day) and a 40/hour global cap, all logged in the `submission_log`
D1 table. Visitors are the same salted SHA-256(IP+UA) hash the likes API
uses; no raw IPs or emails are stored. Category ids in `_submissions.js`
mirror `scripts/categories.js` — `tests/submissions.test.js` fails CI if
they drift.
