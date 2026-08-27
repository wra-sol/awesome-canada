/**
 * New resources to append to data/resources.json.
 * Each entry follows the schema (name, level, jurisdiction, category, type,
 * description, url, tags). Categories come from scripts/categories.js.
 *
 * To add new resources:
 *   1. Add entries to this array
 *   2. Run: node scripts/migrate.js
 *   3. Run: node scripts/generate-readme.js
 *   4. Commit and push
 *
 * Resources already in data/resources.json by URL are automatically skipped.
 *
 * Queue emptied 2026-08-27 (2nd time) — the 45-entry thin-category sweep batch
 * (telecom/weather/taxes/agriculture/veterans/lobbyist/education/immigration/
 * benefits/consumer/health-region) was merged via migrate.js along with the 248
 * backlog from candidates.json (46 added, 247 skipped as already present).
 * Live backlog lives in scripts/candidates.json.
 */
module.exports = [];