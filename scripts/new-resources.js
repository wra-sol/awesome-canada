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
    "name": "Business Development Bank of Canada (BDC)",
    "level": "Crown Corp",
    "jurisdiction": "Canada",
    "category": "finance",
    "type": "Business financing",
    "description": "Federal crown corporation providing financing, advisory services, and venture capital to Canadian businesses",
    "url": "https://www.bdc.ca/",
    "tags": ["BDC", "business", "financing", "crown corporation", "SME"]
  },
  {
    "name": "NSERC — Natural Sciences and Engineering Research Council",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research funding",
    "description": "Federal agency that funds natural sciences and engineering research at Canadian universities and colleges",
    "url": "https://www.nserc-crsng.gc.ca/",
    "tags": ["NSERC", "research", "funding", "science", "engineering", "federal"]
  },
  {
    "name": "Farm Credit Canada",
    "level": "Crown Corp",
    "jurisdiction": "Canada",
    "category": "agriculture",
    "type": "Agricultural financing",
    "description": "Federal crown corporation providing financing, insurance, and software to Canadian farmers and agribusinesses",
    "url": "https://www.fcc-fac.ca/",
    "tags": ["FCC", "agriculture", "farm", "financing", "crown corporation", "rural"]
  },
  {
    "name": "Agriculture and Agri-Food Canada",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "agriculture",
    "type": "Government department",
    "description": "Federal department supporting Canadian agriculture through research, policies, market development, and producer programs",
    "url": "https://agriculture.canada.ca/en",
    "tags": ["AAFC", "agriculture", "federal", "policy", "research", "food"]
  },
];
