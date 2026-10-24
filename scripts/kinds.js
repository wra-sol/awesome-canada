/**
 * Resource "kind" taxonomy — a small, fixed facet describing WHAT a resource
 * is (its format/interaction model), orthogonal to `category` (topic) and the
 * free-form `type` label.
 *
 * Kinds:
 *   tool      — interactive: calculators, estimators, lookups, searchable databases
 *   map       — interactive maps and GIS viewers
 *   data      — raw data: datasets, open data portals/hubs, GTFS, bulk downloads
 *   api       — programmatic interfaces and machine-readable feeds
 *   documents — document collections: budgets, agendas/minutes, reports, archives
 *   website   — informational portals, services, and general official sites
 *
 * classify() derives a kind from existing metadata for entries that don't set
 * one explicitly. An explicit `kind` in resources.json always wins — the rules
 * here are a fallback, not an authority.
 */

const KINDS = {
  tool: 'Interactive tool',
  map: 'Interactive map',
  data: 'Raw data',
  api: 'API / feed',
  documents: 'Documents & reports',
  website: 'Website / portal',
};

const KIND_IDS = new Set(Object.keys(KINDS));

// Ordered rules: within each matching stage, first rule to match wins.
const RULES = [
  ['data', /open data|dataset|\bgtfs\b|raw data|research data|data hub|data portal|data catalogue|data download|census data|monitoring data|bulk data|hydrometric data|live grid data|real-?time data|open budget/],
  ['map', /interactive map|live map|map viewer|\bgis\b|atlas|geospatial|outage map|wildfire map|conditions map|flood maps?|boundary map|parcel map|zoning map|web map|trail map|mapping/],
  ['tool', /calculator|estimator|estimateur|look.?up|finder|wizard|checker|comparat|comparison|planner|booking|reservation|converter|web clock|eligibility|\bsearch\b|tracker|databases?\b|registry|directory|locator|simulator|\btool\b|data visualization|dashboard|burial|voter/],
  ['documents', /budget documents|agendas?|minutes|meeting|financial statement|financial report|financial documents|annual report|publications?\b|archive|gazette|bylaws|disclosure|crop report|monitoring report|proactive publication/],
];

function matchStage(text) {
  for (const [kind, re] of RULES) {
    if (re.test(text)) return kind;
  }
  return null;
}

function classify(resource) {
  if (resource.kind && KIND_IDS.has(resource.kind)) return resource.kind;

  const type = (resource.type || '').toLowerCase();
  const name = (resource.name || '').toLowerCase();
  const tags = (resource.tags || []).join(' ').toLowerCase();

  // APIs are declared in the curated type/name, never inferred from tags —
  // an "api" tag usually just means the resource ALSO offers an API.
  if (/\bapi\b|web service|datamart|\bwds\b|geomet|rest service/.test(`${type} ${name}`)) return 'api';

  // Stage by signal quality: the curated type label is most reliable, then
  // the name, then tags. A weak-stage match never overrides a stronger stage.
  return matchStage(type) || matchStage(name) || matchStage(tags) || 'website';
}

module.exports = { KINDS, KIND_IDS, classify };
