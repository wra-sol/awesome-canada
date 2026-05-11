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
 */
module.exports = [
  {
    name: "ISED API Catalogue",
    level: "Federal",
    jurisdiction: "Canada",
    category: "open-data",
    type: "API catalogue",
    description: "Catalogue of APIs published by Innovation, Science and Economic Development Canada, including corporations, patents, and business data.",
    url: "https://api.ised-isde.canada.ca/en",
    tags: ["api", "open data", "business", "federal"]
  },
  {
    name: "Government of Canada Employee Directory (GEDS)",
    level: "Federal",
    jurisdiction: "Canada",
    category: "gov-services",
    type: "Directory",
    description: "Government of Canada Employee Directory (GEDS) — search for federal public servant contact information and organizational structure.",
    url: "https://geds-sage.gc.ca/en/GEDS?pgid=002",
    tags: ["directory", "public service", "federal", "contacts"]
  },
  {
    name: "Ontario Courts Public Portal",
    level: "Provincial",
    jurisdiction: "Ontario",
    category: "justice",
    type: "Court portal",
    description: "Ontario's digital court portal for filing documents, accessing case information, and managing court matters online.",
    url: "https://www.ontario.ca/page/ontario-courts-public-portal",
    tags: ["Ontario", "courts", "justice", "digital service"]
  },
  {
    name: "GEO.ca",
    level: "Federal",
    jurisdiction: "Canada",
    category: "open-data",
    type: "Geospatial portal",
    description: "Canada's federal geospatial data portal, providing open access to authoritative geospatial information, maps, and datasets from federal sources.",
    url: "https://geo.ca/",
    tags: ["geospatial", "maps", "open data", "federal"]
  },
  {
    name: "Connected Services BC",
    level: "Provincial",
    jurisdiction: "British Columbia",
    category: "gov-services",
    type: "Digital service",
    description: "British Columbia's initiative to build connected, people-centred digital government services and improve cross-government service delivery.",
    url: "https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/central-government-agencies/csbc",
    tags: ["British Columbia", "digital service", "government", "connected services"]
  },
  {
    name: "Civic Tech Fredericton",
    level: "Municipal",
    jurisdiction: "New Brunswick",
    category: "elections",
    type: "Civic tech",
    description: "Fredericton-based civic tech community working on projects that improve government services, transparency, and democratic participation.",
    url: "https://www.civictechfredericton.com/",
    tags: ["civic tech", "Fredericton", "democracy", "community"]
  },
  {
    name: "Civic Tech Toronto",
    level: "Municipal",
    jurisdiction: "Toronto",
    category: "elections",
    type: "Civic tech",
    description: "Toronto-based civic tech community working on projects that improve government services, transparency, and democratic participation.",
    url: "https://civictech.ca/",
    tags: ["civic tech", "Toronto", "democracy", "community"]
  },
  {
    name: "Project Browser — Global Affairs Canada",
    level: "Federal",
    jurisdiction: "Canada",
    category: "open-data",
    type: "Data portal",
    description: "Browse and search Government of Canada international development and humanitarian assistance projects around the world.",
    url: "https://w05.international.gc.ca/projectbrowser-banqueprojets/",
    tags: ["international", "projects", "aid", "federal", "open data"]
  },
];
