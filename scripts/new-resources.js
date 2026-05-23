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
    "name": "Ontario.ca Developer Hub",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "gov-services",
    "type": "Developer portal",
    "description": "Ontario government developer hub with APIs, technical documentation, and code samples for building digital services",
    "url": "https://developer.ontario.ca/",
    "tags": ["Ontario", "developer portal", "API", "open data"]
  },
  {
    "name": "Alberta Open Government Portal",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "open-data",
    "type": "Open data portal",
    "description": "Alberta's open government portal providing open data, publications, and reports for researchers, developers, and citizens",
    "url": "https://open.alberta.ca/",
    "tags": ["Alberta", "open data", "government", "transparency"]
  },
  {
    "name": "Termium Plus",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "gov-services",
    "type": "Terminology database",
    "description": "Government of Canada's terminology and linguistic data bank — over 4 million terms in English, French, Spanish, and other languages",
    "url": "https://www.btb.termiumplus.gc.ca/",
    "tags": ["terminology", "translation", "language", "federal", "bilingualism"]
  },
  {
    "name": "Code for Canada",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "gov-services",
    "type": "Civic tech organization",
    "description": "Canadian nonprofit that helps government and communities design and build better digital services through technology and design partnerships",
    "url": "https://codefor.ca/",
    "tags": ["civic tech", "digital services", "nonprofit", "federal", "design"]
  },
  {
    "name": "Open North",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Civic tech nonprofit",
    "description": "Canadian nonprofit building open data standards and civic technology tools to help governments and communities share information and engage citizens",
    "url": "https://opennorth.ca/",
    "tags": ["open data", "civic tech", "standards", "nonprofit", "transparency"]
  },
];
