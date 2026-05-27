# Contributing to Awesome Canada

Thanks for your interest! This list **prioritizes municipal and provincial data sources** that are actionable, hard to find, and genuinely useful. Federal resources are included where they provide unique datasets or tools not available elsewhere. We focus on datasets, APIs, and tools — not broad "official website" links.

The list is organized by **function first, then region**. Every entry lives in [`data/resources.json`](data/resources.json) — that file is the source of truth.

## What We're Looking For

**Yes (Priority):**
- Municipal open data portals with actual downloadable datasets
- Planning & zoning tools (interactive maps, permit trackers, development applications)
- Council democracy tools (searchable agendas, vote trackers, meeting archives)
- Budget transparency (checkbook explorers, salary disclosures, procurement databases)
- Transit GTFS feeds and real-time APIs
- Environmental monitoring stations and datasets
- Health region data dashboards
- School board data (boundaries, enrollment, facility reports)
- Lobbyist registries and ethics disclosures
- Provincial data catalogs with bulk download or API access

**Yes (Federal — if unique value):**
- Census data and geospatial portals (StatCan, GEO.ca)
- Parliamentary tools (Hansard, committee trackers, election results)
- Specialized datasets not available provincially/municipally (space, military, research)
- Regulatory and legal databases (CanLII, CRTC, Competition Bureau)

**No:**
- Broad "official website" links (e.g., "City of X homepage")
- Information-only pages with no data download or API
- Federal duplicates already well-covered (general Canada.ca pages, not dataset-specific tools)
- Crown corporation retail pages (LCBO, SAQ already covered)

**Quality bar:** Every entry should answer: *"What can I do with this link?"*

## How to add a resource

1. **Check for duplicates** — search `data/resources.json` for the URL or name.
2. **Verify the source** — it should be an official government body (federal, provincial, territorial, regional, municipal), a Crown corporation, or a non-partisan public-interest agency (e.g. CanLII, NCTR).
3. **Confirm it's not already well-covered** — StatCan, Canada.ca, and major federal agencies are already represented. Focus on gaps.
4. **Add an entry** to `data/resources.json` matching the schema below.
5. **Validate**: `node scripts/validate.js`
6. **Regenerate**: `node scripts/generate-readme.js`
7. Commit both the JSON and README changes.

## Schema

```json
{
  "name": "Resource Name",
  "level": "Federal | Provincial | Municipal | Regional | Agency | Crown Corp",
  "jurisdiction": "Canada | <Province/Territory> | <City> | <Region>",
  "category": "one of the category ids in scripts/categories.js",
  "type": "Short human-readable type (e.g. GTFS Feed, Open Data Portal, Zoning Map)",
  "description": "1–2 sentence description of what you can DO with it",
  "url": "https://...",
  "tags": ["lowercase", "tags"]
}
```

### `level`

| Level | Examples |
|-------|----------|
| Federal | Government of Canada, Statistics Canada, Parks Canada |
| Provincial | Any provincial/territorial government body |
| Municipal | Cities, towns, townships, villages |
| Regional | TransLink, Metrolinx, Conservation Authorities, Durham Region |
| Agency | Arm's-length body (e.g. CRTC, Competition Bureau, CanLII, NCTR) |
| Crown Corp | CMHC, Canada Post, CBC, BDC, SaskPower, Hydro-Québec |

### `jurisdiction`

Use the exact name from the list in [`scripts/categories.js`](scripts/categories.js). For federal resources use `Canada` (or `Parks Canada` for Parks Canada properties). Use full province/territory names. For cities, use `City, Province` format (e.g., `Guelph, Ontario`).

### `category`

Pick the single best **functional** category id from [`scripts/categories.js`](scripts/categories.js).

New priority categories: `planning-zoning`, `council`, `budget`, `health-region`, `school-board`, `lobbyist`, `heritage`.

If a resource would fit multiple categories, pick the one a user is most likely to look under first.

### `description`

- 1–2 sentences, ideally under 200 characters
- Describe **what you can do with it**, not what it "is"
- Include data format if relevant (CSV, GeoJSON, GTFS, API)
- Avoid marketing language

**Good:** "CSV download of building permits 2015-present, geocoded to address with permit type and value. Updated monthly."
**Bad:** "The City of Guelph's building permit information page."

### `tags`

- Lowercase
- Include a short topical keyword plus the region (e.g., `["guelph", "building permits", "csv", "geocoded"]`)
- Include data format tags (`csv`, `geojson`, `gtfs`, `api`, `shapefile`) when applicable

## Scripts

| Command | Purpose |
|--------|---------|
| `node scripts/validate.js` | Validate JSON, schema, URLs, categories, and duplicate URLs |
| `node scripts/generate-readme.js` | Regenerate `README.md` from JSON |
| `node scripts/migrate.js` | One-shot helper that re-categorizes missing entries and appends curated batches from `scripts/new-resources.js` |

## Questions?

Open an issue before a large PR so we can confirm scope and categorization.
See [`docs/DATA-SCOUTING-STRATEGY.md`](docs/DATA-SCOUTING-STRATEGY.md) for detailed discovery techniques.
