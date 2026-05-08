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
    name: "GC Notify",
    level: "Federal",
    jurisdiction: "Canada",
    category: "gov-services",
    type: "Notification service",
    description: "Government of Canada notification service for sending emails and text messages to users — built by Canadian Digital Service",
    url: "https://notification.canada.ca/",
    tags: ["notifications", "CDS", "digital service"]
  },
  {
    name: "GC Design System",
    level: "Federal",
    jurisdiction: "Canada",
    category: "gov-services",
    type: "Design system",
    description: "Official production-ready design system for Government of Canada websites and digital products — components, patterns, and guidance",
    url: "https://design-system.canada.ca/en/",
    tags: ["design system", "components", "CDS", "frontend"]
  },
  {
    name: "GC Forms",
    level: "Federal",
    jurisdiction: "Canada",
    category: "gov-services",
    type: "Form builder",
    description: "Secure, accessible, bilingual form-building platform for Government of Canada services — no coding required",
    url: "https://articles.alpha.canada.ca/forms-formulaires/",
    tags: ["forms", "CDS", "digital service", "no-code"]
  },
  {
    name: "B.C. Government DevHub",
    level: "Provincial",
    jurisdiction: "British Columbia",
    category: "gov-services",
    type: "Developer portal",
    description: "British Columbia government developer hub with technical documentation, code samples, APIs, and community knowledge bases",
    url: "https://developer.gov.bc.ca/",
    tags: ["developer portal", "API", "BC", "documentation"]
  },
  {
    name: "B.C. API Gateway",
    level: "Provincial",
    jurisdiction: "British Columbia",
    category: "open-data",
    type: "API portal",
    description: "British Columbia government API gateway for discovering, accessing, and managing provincial APIs and data services",
    url: "https://api.gov.bc.ca/",
    tags: ["API", "gateway", "BC", "open data"]
  },
];
