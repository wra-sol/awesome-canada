---
name: ministry-sweep
description: Fan out sub-agents across Canadian government ministries and departments (6 federal clusters + 10 provinces + territories) to find, verify, and stage new awesome-canada resources. Use when asked to "fan out across ministries", run a "ministry sweep", hunt for government-department/ministry resources, or do a federal/provincial portfolio gap-fill.
---

# Ministry Sweep

Research lens for awesome-canada: organize a scouting fan-out **by government ministry/department** instead of by city or category. Each sub-agent owns one ministry cluster (federal) or one whole government (provincial/territorial), hunts for addable resources in its portfolio, verifies URLs live, and returns schema-conformant JSON candidates.

## Inputs (confirm with user if unspecified)

| Parameter | Default |
|---|---|
| Scope | Full sweep (federal + provincial + territorial) |
| Cap per agent | ≤5 candidates, ranked strongest first |
| Delivery | Full local pipeline (stage → migrate → README → validate); never commit/push unless asked |

## Fan-out roster

Launch parallel sub-agents (`general` type — `explore` is codebase-only). Two waves keep result-handling manageable.

### Wave A — Federal clusters (level `Federal`, jurisdiction `Canada` unless noted)

| # | Cluster | Ministries/bodies to sweep | Likely categories |
|---|---|---|---|
| 1 | Natural Resources & Energy | NRCan geoscience/energy data, Canada Energy Regulator, CNSC | open-data, science, environment, utilities |
| 2 | Environment, Oceans & Fisheries | ECCC (indicators, env registries), DFO, Coast Guard data | environment, weather, open-data, aviation-marine |
| 3 | Transport, Infrastructure & Housing | Transport Canada data, Infrastructure Canada, CMHC (housing data/research) | transport-roads, aviation-marine, housing, transit |
| 4 | Health, Social & Indigenous | Health Canada, PHAC, CIHI, ESDC, IRCC open gov, Crown-Indigenous Relations | health, health-region, benefits, immigration, indigenous, employment |
| 5 | Finance, Business & Innovation | CRA gaps (not covered calculators/portals), ISED gaps, OSFI, FINTRAC, Competition Bureau | taxes, finance, business, consumer |
| 6 | Heritage, Science & Culture | Library & Archives Canada, CSA, NRC gaps, Canadian Conservation Institute, Canadian Museums data | science, culture, heritage, education |

### Wave B — Provincial/territorial governments (level `Provincial`)

One agent per jurisdiction — it sweeps **all ministries of that government** (Health; Education; Transportation; Environment & Parks; Energy/Natural Resources; Agriculture; Justice/Attorney General; Municipal Affairs/Housing; Finance/Treasury Board; Labour; Public Safety/Solicitor General; Economic Development; Indigenous Relations; Tourism/Culture).

Jurisdiction keys (exact, from `scripts/categories.js`): `British Columbia`, `Alberta`, `Saskatchewan`, `Manitoba`, `Ontario`, `Quebec`, `New Brunswick`, `Nova Scotia`, `PEI`, `Newfoundland and Labrador`. Territories combined in one agent: `Yukon`, `Northwest Territories`, `Nunavut`.

## Sub-agent prompt template

Fill the bracketed slots. Send verbatim otherwise.

```
You are researching official Canadian government web resources for the
awesome-canada directory. This is WEB RESEARCH + local-file dedupe, not code work.
Repo: /home/nathaniel-arfin/Documents/awesome-canada

SCOPE: [ministries/bodies] for jurisdiction(s) [exact key(s)] (level "[Federal|Provincial]").

STEP 1 — Dedupe list. Run:
  python3 -c "import json;d=json.load(open('data/resources.json'));[print(e['url'],'|',e['name']) for e in d if e.get('jurisdiction') in ([...keys...])]"
Treat this as the forbidden list. Skip any candidate whose URL matches, AND skip concept
duplicates (same dataset/tool under a different URL — e.g. a portal already covered via its
main entry, or a body whose flagship lookup is already catalogued). When unsure, check how
the existing entry is described in data/resources.json.

STEP 2 — Research. For each ministry in scope, find its ACTIONABLE digital resources:
datasets with real downloads (CSV/GeoJSON/API), interactive dashboards/maps, lookup/search
tools, registers/registries. Prioritize what docs/DATA-SCOUTING-STRATEGY.md calls Tier 1/2.
Use websearch + webfetch.

STEP 3 — Verify EVERY candidate URL live with webfetch before proposing it:
 - Content must substantively match the description (200 + real content).
 - Known traps that auto-reject: *.openbook.questica.com wildcard DNS (302→branded
   missing.html @ 200; only direct-200 + city-name-in-body is real); ArcGIS Hub roots
   return 200 even when unconfigured — require 200 on
   /api/search/v1/collections/all/items?limit=1 (401 GWM_0003 = placeholder hub);
   transitland.io now needs an API key (don't propose anonymous links).
 - Some gov sites bot-block fetchers (403). If search results strongly confirm the page,
   you may propose it but set "verified": false and say why. Otherwise verified must be true.

STEP 4 — Return ONLY a fenced json block: a single array of AT MOST 5 objects, ranked.
Schema (validator-enforced):
  name         short specific title ("Ministry X — Dataset Name")
  level        "Federal" | "Provincial"
  jurisdiction exact key from above
  category     one id from scripts/categories.js (see likely categories above; full list
               in that file — pick the single best functional fit)
  type         short human type ("Open data portal", "Dashboard", "Lookup tool")
  description  ≤200 chars, WHAT YOU CAN DO with it + format (CSV/GeoJSON/API)
  url          https://...
  tags         lowercase array incl. format tags; non-empty
  dateAdded    today's date YYYY-MM-DD
  verified     true/false (your live-check result)
No prose outside the json block. If nothing survives verification, return [].
```

## Merge procedure (orchestrator)

1. Collect all agent arrays. Reject malformed entries (missing required fields, invalid
   category/jurisdiction — check against `scripts/categories.js`).
2. Cross-agent dedupe on normalized URL (lowercase, strip trailing `/`) plus a concept pass
   (read names/descriptions side by side; drop near-duplicates, keep the stronger entry).
3. **Append** (never clobber) to `scripts/candidates.json` — it may hold pending entries not
   yet staged. Then run `node scripts/stage-candidates.js` (dedupes vs staging queue by URL)
   → `node scripts/migrate.js` (merges into `data/resources.json`, skips catalog dupes) →
   `node scripts/generate-readme.js` → `node scripts/validate.js`.
4. Expect some attrition at each step; report final accepted count, not raw proposals.

## Repo gotchas (from CLIPBOARD.md — re-read it each session)

- `README.md` is fully generated — never hand-edit; regenerate via script.
- No GitHub Actions for scheduled jobs (Cloudflare Worker runs those). Nothing here needs Actions.
- Taxonomy edits (categories/jurisdictions) would require `sync-worker-catalog.js` — ministry sweeps should NOT need them; reject agents that invent new jurisdiction strings instead of fixing the prompt.
- Parallel agents commit to master — always fetch+reconcile before any push (only if asked).
- Pre-flight every batch against the catalog by URL AND concept; sources hide in unexpected
  categories (e.g. MSC GeoMet = weather, WSC Water Office = utilities).
- 401/403/429 are soft-fail signals for the nightly cleaner — don't hard-drop otherwise-good entries over a bot-block alone.

## Reporting

End with: per-wave agent counts, proposals received / after cross-dedupe / after migrate / validation status, category×jurisdiction breakdown of additions, and any rejected-with-reason notables.
