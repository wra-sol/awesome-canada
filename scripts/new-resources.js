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
    "name": "Canada Dental Care Plan",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "benefits",
    "type": "Health benefit",
    "description": "Apply for the national dental care plan providing coverage for uninsured Canadians with household incomes under $90,000",
    "url": "https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html",
    "tags": ["dental", "health", "benefits", "CDCP"]
  },
  {
    "name": "Canada Greener Homes Initiative",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "housing",
    "type": "Grant and loan",
    "description": "Federal grants and loans for home energy evaluations, retrofits, and renewable energy upgrades to reduce emissions",
    "url": "https://www.canada.ca/en/environment-climate-change/services/energy-efficiency/greener-homes-initiative.html",
    "tags": ["housing", "energy efficiency", "climate", "retrofit", "grants"]
  },
  {
    "name": "Canada Housing Benefit",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "benefits",
    "type": "Rental assistance",
    "description": "One-time top-up and ongoing rental assistance for low-income renters, administered with provinces and territories",
    "url": "https://www.canada.ca/en/services/benefits/housing/canada-housing-benefit.html",
    "tags": ["housing", "rental assistance", "benefits", "low income"]
  },
  {
    "name": "Saskatchewan eHealth",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "health",
    "type": "Health records",
    "description": "Electronic health records, patient portals, and provincial health information services for Saskatchewan residents",
    "url": "https://www.ehealthsask.ca/",
    "tags": ["Saskatchewan", "health records", "eHealth", "digital health"]
  },
  {
    "name": "Canada Student Loans and Grants",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "education",
    "type": "Financial aid",
    "description": "Apply for federal student loans and grants, manage your loan, and explore repayment assistance options",
    "url": "https://www.canada.ca/en/services/benefits/education/student-aid.html",
    "tags": ["students", "loans", "grants", "education", "federal"]
  },
  {
    "name": "Canada Workers Benefit",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "benefits",
    "type": "Tax benefit",
    "description": "Refundable tax credit for low-income workers and families to help offset employment costs",
    "url": "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html",
    "tags": ["workers", "tax credit", "low income", "benefits"]
  },
  {
    "name": "CPP Retirement Hub",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "benefits",
    "type": "Information hub",
    "description": "Central hub for Canada Pension Plan retirement planning — contributions, applying, and combining with other income",
    "url": "https://www.canada.ca/en/services/benefits/publicpensions/cpp/retirement-hub.html",
    "tags": ["CPP", "retirement", "pensions", "seniors"]
  },
  {
    "name": "FedDev Ontario",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Economic development",
    "description": "Federal economic development agency supporting business growth, innovation, and community economic development in southern Ontario",
    "url": "https://feddev-ontario.canada.ca/",
    "tags": ["Ontario", "business", "innovation", "federal", "economic development"]
  },
];
