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
    name: "Canadian Institute for Health Information (CIHI)",
    level: "Federal",
    jurisdiction: "Canada",
    category: "health",
    type: "Health data",
    description: "Independent, not-for-profit organization providing essential health data and information to inform policy, research, and system improvement across Canada",
    url: "https://www.cihi.ca/en",
    tags: ["health", "data", "statistics", "federal"]
  },
  {
    name: "Ontario Energy Board",
    level: "Provincial",
    jurisdiction: "Ontario",
    category: "utilities",
    type: "Regulator",
    description: "Independent regulator of the electricity and natural gas sectors in Ontario, including utility rate decisions, consumer protection, and energy policy",
    url: "https://www.oeb.ca/",
    tags: ["Ontario", "energy", "regulator", "utilities"]
  },
  {
    name: "Alberta Energy Regulator",
    level: "Provincial",
    jurisdiction: "Alberta",
    category: "utilities",
    type: "Regulator",
    description: "Regulates the upstream oil, gas, and coal development in Alberta, including licensing, compliance, and environmental monitoring",
    url: "https://www.aer.ca/",
    tags: ["Alberta", "energy", "regulator", "oil and gas"]
  },
  {
    name: "Canadian Nuclear Safety Commission",
    level: "Federal",
    jurisdiction: "Canada",
    category: "safety",
    type: "Regulator",
    description: "Federal regulator of nuclear power and materials in Canada, overseeing licensing, compliance, and public health and safety around nuclear facilities",
    url: "https://www.cnsc-ccsn.gc.ca/eng/",
    tags: ["nuclear", "safety", "regulator", "federal"]
  },
  {
    name: "GCcollab",
    level: "Federal",
    jurisdiction: "Canada",
    category: "gov-services",
    type: "Collaboration platform",
    description: "Government of Canada's professional networking and collaboration platform for public servants and external partners to share knowledge and work together",
    url: "https://gccollab.ca/",
    tags: ["collaboration", "public service", "federal", "networking"]
  },
  {
    name: "ServiceOntario",
    level: "Provincial",
    jurisdiction: "Ontario",
    category: "gov-services",
    type: "Service portal",
    description: "Ontario government's one-stop portal for driver’s licences, health cards, birth certificates, business registrations, and other provincial services",
    url: "https://www.ontario.ca/page/serviceontario",
    tags: ["Ontario", "services", "ID", "portal"]
  },
  {
    name: "Port of Prince Rupert",
    level: "Crown Corp",
    jurisdiction: "British Columbia",
    category: "aviation-marine",
    type: "Port authority",
    description: "Canada's second-largest port and a key trade gateway connecting Asia and North America, with real-time vessel tracking and trade data",
    url: "https://www.rupertport.com/",
    tags: ["British Columbia", "port", "trade", "marine", "shipping"]
  },
];
