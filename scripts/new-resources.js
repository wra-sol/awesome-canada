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
    name: "Canadian Centre for Cyber Security",
    level: "Federal",
    jurisdiction: "Canada",
    category: "safety",
    type: "Cyber security",
    description: "Government of Canada lead for cyber security, providing guidance, tools, incident reporting, and threat intelligence for citizens and organizations",
    url: "https://cyber.gc.ca/en",
    tags: ["cyber security", "alerts", "threats", "federal"]
  },
  {
    name: "Ontario Business Registry",
    level: "Provincial",
    jurisdiction: "Ontario",
    category: "business",
    type: "Business registry",
    description: "Register, search, and manage Ontario business names, corporations, and partnerships online",
    url: "https://www.ontario.ca/page/ontario-business-registry",
    tags: ["Ontario", "business", "registry"]
  },
  {
    name: "Yukon Open Data",
    level: "Provincial",
    jurisdiction: "Yukon",
    category: "open-data",
    type: "Open data portal",
    description: "Yukon government open data catalogue with datasets on environment, infrastructure, health, and demographics",
    url: "https://open.yukon.ca/",
    tags: ["Yukon", "open data", "datasets"]
  },
  {
    name: "Newfoundland and Labrador Open Data",
    level: "Provincial",
    jurisdiction: "Newfoundland and Labrador",
    category: "open-data",
    type: "Open data portal",
    description: "Provincial open data portal for Newfoundland and Labrador providing government datasets across multiple sectors",
    url: "https://opendata.gov.nl.ca/",
    tags: ["Newfoundland", "open data", "datasets"]
  },
  {
    name: "Newfoundland and Labrador Statistics Agency",
    level: "Provincial",
    jurisdiction: "Newfoundland and Labrador",
    category: "open-data",
    type: "Statistics portal",
    description: "Official provincial statistics on population, economy, labour market, and social indicators for Newfoundland and Labrador",
    url: "https://stats.gov.nl.ca/",
    tags: ["Newfoundland", "statistics", "data"]
  },
  {
    name: "Prince Edward Island Open Data Portal",
    level: "Provincial",
    jurisdiction: "PEI",
    category: "open-data",
    type: "Open data portal",
    description: "PEI government open data catalogue with datasets on agriculture, environment, health, and transportation",
    url: "https://data.princeedwardisland.ca/",
    tags: ["PEI", "open data", "datasets"]
  },
];
