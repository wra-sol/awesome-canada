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
    "name": "MiWay — Mississauga Transit",
    "level": "Municipal",
    "jurisdiction": "Mississauga",
    "category": "transit",
    "type": "Transit",
    "description": "MiWay bus routes, schedules, and real-time info for Mississauga",
    "url": "https://www.mississauga.ca/miway",
    "tags": ["transit", "Mississauga"]
  },
  {
    "name": "Ontario — Driver's Licence",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "transport-roads",
    "type": "Service",
    "description": "Apply for, renew, or replace an Ontario driver's licence and access related services",
    "url": "https://www.ontario.ca/page/drivers-licence",
    "tags": ["Ontario", "drivers", "licence"]
  },
  {
    "name": "Travel.gc.ca — Consent Letter for Children Travelling Abroad",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "gov-services",
    "type": "Service",
    "description": "Template and guidance for consent letters when children travel abroad without both parents",
    "url": "https://travel.gc.ca/travelling/children/consent-letter",
    "tags": ["travel", "children", "consent"]
  },
  {
    "name": "FluWatch — National Influenza Surveillance",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Surveillance",
    "description": "National influenza surveillance program tracking flu activity across Canada",
    "url": "https://www.canada.ca/en/public-health/services/diseases/flu-influenza.html",
    "tags": ["health", "flu", "surveillance"]
  },
  {
    "name": "Celebrate Being Canadian",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Civic engagement",
    "description": "Resources and events to celebrate Canadian citizenship, culture, and national identity",
    "url": "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/celebrate-being-canadian.html",
    "tags": ["citizenship", "culture", "events"]
  },
  {
    "name": "Canada.ca — Benefits Payment Calendar",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "benefits",
    "type": "Calendar",
    "description": "Official payment dates for CPP, OAS, EI, and other Government of Canada benefits",
    "url": "https://www.canada.ca/en/services/benefits/calendar.html",
    "tags": ["benefits", "payments", "calendar"]
  },
  {
    "name": "CRA — Express Notice of Assessment (NOA)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "taxes",
    "type": "Service",
    "description": "Fast online delivery of your Notice of Assessment after filing your tax return",
    "url": "https://www.canada.ca/en/revenue-agency/services/e-services/about-express-noa.html",
    "tags": ["taxes", "NOA", "CRA"]
  },
  {
    "name": "Ontario — Licence Plate Sticker Renewal",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "transport-roads",
    "type": "Service",
    "description": "Renew your Ontario licence plate sticker online and check renewal status",
    "url": "https://www.ontario.ca/page/renew-licence-plate-sticker",
    "tags": ["Ontario", "vehicles", "registration"]
  },
];
