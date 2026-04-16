# Contributing to Awesome Canada

Thanks for your interest! The list is organized by **function first, then region**. Every entry lives in [`data/resources.json`](data/resources.json) — that file is the source of truth and the `README.md` is generated from it.

## How to add a resource

1. **Check for duplicates** — search `data/resources.json` for the URL or name.
2. **Verify the source** — it should be an official government body (federal, provincial, territorial, regional, municipal), a Crown corporation, or a non-partisan public-interest agency (e.g. CanLII, NCTR).
3. **Add an entry** to `data/resources.json` matching the schema below.
4. **Validate**: `node scripts/validate.js`
5. **Regenerate**: `node scripts/generate-readme.js`
6. Commit both the JSON and README changes.

## Schema

```json
{
  "name": "Resource Name",
  "level": "Federal | Provincial | Municipal | Regional | Agency | Crown Corp",
  "jurisdiction": "Canada | <Province/Territory> | <City> | <Region>",
  "category": "one of the category ids in scripts/categories.js",
  "type": "Short human-readable type (e.g. Calculator, Map, Open data portal)",
  "description": "1–2 sentence description of what it does",
  "url": "https://...",
  "tags": ["lowercase", "tags"]
}
```

### `level`

| Level | Examples |
|-------|----------|
| Federal | Government of Canada, Statistics Canada, Parks Canada |
| Provincial | Any provincial/territorial government body |
| Municipal | Cities and towns |
| Regional | TransLink, Metrolinx, Conservation Authorities, Durham Region |
| Agency | Arm's-length body (e.g. CRTC, Competition Bureau, CanLII, NCTR) |
| Crown Corp | CMHC, Canada Post, CBC, BDC, SaskPower, Hydro-Québec |

### `jurisdiction`

Use the exact name from the list in [`scripts/categories.js`](scripts/categories.js). For federal resources use `Canada` (or `Parks Canada` for Parks Canada properties). Use full province/territory names. For regional bodies pick the closest named region (e.g. `Ontario/GTA`, `Metro Vancouver`, `Grand River Watershed`).

### `category`

Pick the single best **functional** category id from [`scripts/categories.js`](scripts/categories.js):

`open-data`, `gov-services`, `taxes`, `finance`, `business`, `employment`, `education`, `immigration`, `health`, `benefits`, `housing`, `transport-roads`, `transit`, `aviation-marine`, `parks`, `environment`, `utilities`, `agriculture`, `science`, `culture`, `safety`, `justice`, `consumer`, `indigenous`, `veterans`, `elections`, `telecom`.

If a resource would fit multiple categories, pick the one a user is most likely to look under first.

### `description`

- 1–2 sentences, ideally under 200 characters
- Describe what it does, not what it "is"
- Avoid marketing language

### `tags`

- Lowercase
- Include a short topical keyword plus the region (e.g. `["Ontario", "tenant"]`)

## Scripts

| Command | Purpose |
|--------|---------|
| `node scripts/validate.js` | Validate JSON, schema, URLs, categories, and duplicate URLs |
| `node scripts/generate-readme.js` | Regenerate `README.md` from JSON |
| `node scripts/migrate.js` | One-shot helper that re-categorizes missing entries and appends curated batches from `scripts/new-resources.js` |

## Questions?

Open an issue before a large PR so we can confirm scope and categorization.
