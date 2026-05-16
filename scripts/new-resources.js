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
    "name": "Canadian Food Inspection Agency (CFIA)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "agriculture",
    "type": "Regulator",
    "description": "Federal food safety, plant and animal health regulator — recalls, inspections, and standards",
    "url": "https://inspection.canada.ca/",
    "tags": ["food safety", "regulator", "agriculture", "federal"]
  },
  {
    "name": "Canadian Intellectual Property Office (CIPO)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Service",
    "description": "Search and apply for patents, trademarks, copyrights, and industrial designs in Canada",
    "url": "https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en",
    "tags": ["patents", "trademarks", "intellectual property", "innovation"]
  },
  {
    "name": "Canadian Museum for Human Rights",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Museum",
    "description": "National museum in Winnipeg dedicated to the evolution, celebration, and future of human rights in Canada",
    "url": "https://humanrights.ca/",
    "tags": ["museum", "human rights", "Winnipeg", "education"]
  },
  {
    "name": "Canadian War Museum",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Museum",
    "description": "Canada's national museum of military history, covering conflicts from earliest times to the present",
    "url": "https://www.warmuseum.ca/",
    "tags": ["museum", "military history", "veterans", "remembrance"]
  },
  {
    "name": "Canadian Museum of Immigration at Pier 21",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Museum",
    "description": "National museum in Halifax exploring the immigrant experience and contributions to Canada's cultural mosaic",
    "url": "https://pier21.ca/",
    "tags": ["museum", "immigration", "Halifax", "heritage"]
  },
];
