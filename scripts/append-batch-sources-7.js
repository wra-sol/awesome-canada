#!/usr/bin/env node
/**
 * Seventh batch: ISED portfolio deep dive (CIPO databases, industry
 * statistics, importer/benchmarking tools, ExploreIP, Nuans, spectrum REL)
 * and digital government across jurisdictions — open.canada.ca proactive
 * disclosure searches, GC service inventory, and the federal, Ontario, BC,
 * Alberta, and Quebec design systems. All URLs verified live at add time.
 */

const fs = require('fs');
const path = require('path');
const { CATEGORY_IDS } = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

const BATCH = [
  {
    "name": "CIPO — Canadian Copyrights Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Searchable database",
    "description": "Search Canadian copyright registrations from 1991 onward by title, owner name, or registration number and view registration details.",
    "url": "https://www.ic.gc.ca/app/opic-cipo/cpyrghts/dsplySrch.do?lang=eng",
    "tags": [
      "copyright",
      "intellectual-property",
      "cipo",
      "search",
      "registrations"
    ]
  },
  {
    "name": "CIPO — Goods and Services Manual",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Trademark filing tool",
    "description": "Search CIPO's pre-approved goods and services terms and use the Classify List feature to assign Nice classes before filing a Canadian trademark application.",
    "url": "https://www.ic.gc.ca/app/scr/ic/cgs/ext/home.html",
    "tags": [
      "trademarks",
      "intellectual-property",
      "cipo",
      "nice-classification",
      "search"
    ]
  },
  {
    "name": "CPATA — Public Register of Patent and Trademark Agents",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Professional register",
    "description": "Look up any licensed Canadian patent or trademark agent by name, city, or employer and verify their current licence status with the College's regulator register.",
    "url": "https://registre-public-register.cpata-cabamc.ca/",
    "tags": [
      "patents",
      "trademarks",
      "agents",
      "register",
      "licensing"
    ]
  },
  {
    "name": "ISED — Radio Equipment List (REL)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Certification database",
    "description": "Search all radio equipment certified for sale and use in Canada by certification number, company, or model to confirm a device meets ISED radio standards.",
    "url": "https://sms-sgs.ic.gc.ca/equipmentSearch/searchRadioEquipments?lang=en",
    "tags": [
      "spectrum",
      "certification",
      "radio",
      "wireless",
      "devices"
    ]
  },
  {
    "name": "Corporations Canada — Nuans Name Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Name search service",
    "description": "Run pre-searches and order official Nuans reports comparing a proposed corporate name against Canada's database of existing corporate names and trademarks.",
    "url": "https://ised-isde.canada.ca/site/nuans-corporate-name-trademark-reports/en/nuansr-corporate-name-and-trademark-reports",
    "tags": [
      "business-names",
      "incorporation",
      "trademarks",
      "search",
      "nuans"
    ]
  },
  {
    "name": "ISED — Canadian Importers Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Searchable database",
    "description": "Look up which companies import specific goods into Canada — search by product, city, or country to get lists of major importers based on CBSA customs data.",
    "url": "https://ised-isde.canada.ca/app/ixb/cid-bdic/searchProduct.html",
    "tags": [
      "imports",
      "trade",
      "companies",
      "supply-chain",
      "search"
    ]
  },
  {
    "name": "ISED — Canadian Industry Statistics",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Statistics tool",
    "description": "Generate industry snapshots by NAICS code or keyword — GDP, employment, number of businesses, trade, and financial performance trends for any Canadian industry.",
    "url": "https://ised-isde.canada.ca/app/ixb/cis/search-recherche",
    "tags": [
      "industry",
      "naics",
      "gdp",
      "employment",
      "statistics"
    ]
  },
  {
    "name": "ISED — Financial Performance Data (SME Benchmarking)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Benchmarking tool",
    "description": "Build financial benchmark reports for 1,000+ industries — revenues, expenses, profit margins, and balance-sheet ratios — and compare your small business against industry averages.",
    "url": "https://ised-isde.canada.ca/site/financial-performance-data/en",
    "tags": [
      "small-business",
      "benchmarking",
      "finance",
      "industry",
      "ratios"
    ]
  },
  {
    "name": "ISED — ExploreIP: Canada's IP Marketplace",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Searchable marketplace",
    "description": "Search thousands of patents held by Canadian governments, universities, and hospitals that are available to license or commercialize, and contact the IP holders directly.",
    "url": "https://ised-isde.canada.ca/ipm-mcpi/",
    "tags": [
      "patents",
      "licensing",
      "intellectual-property",
      "innovation",
      "commercialization"
    ]
  },
  {
    "name": "NRC — Certified Reference Materials Catalogue",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Catalogue and store",
    "description": "Browse and order NRC's SI-traceable certified reference materials for food, environment, health, and critical-minerals lab work, with certificates for each material.",
    "url": "https://nrc.canada.ca/en/certifications-evaluations-standards/certified-reference-materials/list",
    "tags": [
      "metrology",
      "laboratory",
      "standards",
      "chemistry",
      "nrc"
    ]
  },
  {
    "name": "Open Government — Completed Access to Information Requests Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Search tool",
    "description": "Search summaries of completed ATI requests across federal institutions since 2020 and informally request a free copy of any released records package.",
    "url": "https://open.canada.ca/en/access-to-information",
    "tags": [
      "access-to-information",
      "ati",
      "transparency",
      "records",
      "search"
    ]
  },
  {
    "name": "Open Government — Open Resource Exchange",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Code catalogue",
    "description": "Search open source code, software, and standards used or developed by Canadian federal, provincial, and municipal governments, with links to each project's repository.",
    "url": "https://code.open.canada.ca/en/index.html",
    "tags": [
      "open-source",
      "code",
      "software",
      "developers",
      "catalogue"
    ]
  },
  {
    "name": "Canada.ca Design System — Templates and Patterns",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Design system",
    "description": "Download user-tested Canada.ca page templates, design patterns, and style specifications to build compliant Government of Canada web content.",
    "url": "https://design.canada.ca/",
    "tags": [
      "design-system",
      "templates",
      "web",
      "developers",
      "accessibility"
    ]
  },
  {
    "name": "TBS — GC Service Inventory Dataset",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Open dataset",
    "description": "Download CSVs listing every service federal departments deliver — volumes, online availability, service standards, and performance results from 2018 onward.",
    "url": "https://open.canada.ca/data/en/dataset/3ac0d080-6149-499a-8b06-7ce5f00ec56c",
    "tags": [
      "services",
      "performance",
      "digital-government",
      "dataset",
      "tbs"
    ]
  },
  {
    "name": "Open Government — Portal Analytics Dashboard",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Analytics dashboard",
    "description": "Explore monthly statistics on open.canada.ca usage — portal visits by region, top 25 downloaded datasets, and dataset growth since 2013.",
    "url": "https://open.canada.ca/en/content/open-government-analytics",
    "tags": [
      "analytics",
      "open-data",
      "downloads",
      "dashboard",
      "transparency"
    ]
  },
  {
    "name": "Open Government — Government Travel Expenses Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "budget",
    "type": "Search tool",
    "description": "Search proactively disclosed travel expense reports of ministers, senior officials, and staff across federal institutions by name, department, and date.",
    "url": "https://search.open.canada.ca/travel/",
    "tags": [
      "expenses",
      "travel",
      "transparency",
      "proactive-disclosure",
      "spending"
    ]
  },
  {
    "name": "Open Government — Briefing Note Titles Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Search tool",
    "description": "Search titles and reference numbers of briefing notes sent to federal ministers and deputy heads since 2019 — then file an ATI request for any of interest.",
    "url": "https://search.open.canada.ca/briefing_titles/",
    "tags": [
      "briefing-notes",
      "transparency",
      "proactive-disclosure",
      "search",
      "ati"
    ]
  },
  {
    "name": "CRTC — Registered Telecommunications Providers List",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Registration list",
    "description": "Look up companies registered with the CRTC to provide telecom services in Canada, including carriers, resellers, and high-speed internet resellers.",
    "url": "https://applications.crtc.gc.ca/portail-portal/eng/listes-lists/registration/5",
    "tags": [
      "telecom",
      "providers",
      "registration",
      "carriers",
      "internet"
    ]
  },
  {
    "name": "Ontario — Ontario Design System",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "telecom",
    "type": "Design system",
    "description": "Use Ontario government web components, styles, and Figma kits — installable via npm or CDN — to build accessible ontario.ca-consistent digital services.",
    "url": "https://designsystem.ontario.ca/",
    "tags": [
      "design-system",
      "components",
      "developers",
      "accessibility",
      "web"
    ]
  },
  {
    "name": "British Columbia — B.C. Design System",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "telecom",
    "type": "Design system",
    "description": "Grab B.C. government design tokens and React components (npm, Figma, Storybook) to prototype and build accessible provincial digital products.",
    "url": "https://designsystem.gov.bc.ca/",
    "tags": [
      "design-system",
      "components",
      "react",
      "developers",
      "accessibility"
    ]
  },
  {
    "name": "British Columbia — BC Address Geocoder API",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "open-data",
    "type": "REST API",
    "description": "Standardize, validate, and geocode any B.C. address in real time via a free REST API — includes reverse geocoding, intersections, and parcel lookups.",
    "url": "https://www2.gov.bc.ca/gov/content/data/geographic-data-services/location-services/geocoder",
    "tags": [
      "geocoding",
      "api",
      "addresses",
      "gis",
      "developers"
    ]
  },
  {
    "name": "Alberta — Government of Alberta Design System",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "telecom",
    "type": "Design system",
    "description": "Build Alberta government services with the GoA design system's component libraries for web components, React, and Angular, plus usage and accessibility guidance.",
    "url": "https://design.alberta.ca/",
    "tags": [
      "design-system",
      "components",
      "developers",
      "accessibility",
      "web"
    ]
  },
  {
    "name": "Quebec — Système de design gouvernemental",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "telecom",
    "type": "Design system",
    "description": "Download Québec.ca-aligned UI components, page models, and the HTML/CSS/JS development kit to build accessible Quebec government interfaces.",
    "url": "https://design.quebec.ca/",
    "tags": [
      "design-system",
      "components",
      "developers",
      "accessibility",
      "quebec-ca"
    ]
  },
  {
    "name": "Quebec — Tableau de bord des projets en ressources informationnelles",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "budget",
    "type": "Public dashboard",
    "description": "Track the health, cost, and schedule of every Quebec government IT project over $500,000 in a dashboard updated daily, filterable by department and portfolio.",
    "url": "https://www.tableaudebordprojetsri.gouv.qc.ca/tableau-de-bord",
    "tags": [
      "it-projects",
      "transparency",
      "dashboard",
      "digital-government",
      "spending"
    ]
  }
];

function normalizeUrl(url) {
  return String(url || '').toLowerCase().replace(/\/+$/, '');
}

function orderedEntry(e) {
  return {
    name: e.name,
    level: e.level,
    jurisdiction: e.jurisdiction,
    category: e.category,
    type: e.type,
    description: e.description,
    url: e.url,
    tags: e.tags,
  };
}

function main() {
  for (const e of BATCH) {
    if (!CATEGORY_IDS.has(e.category)) {
      throw new Error(`Unknown category '${e.category}' for '${e.name}'`);
    }
  }

  const existing = JSON.parse(fs.readFileSync(DATA, 'utf8'));
  const byUrl = new Map();
  for (const e of existing) {
    byUrl.set(normalizeUrl(e.url), e);
  }

  let added = 0;
  let skipped = 0;
  for (const e of BATCH) {
    const key = normalizeUrl(e.url);
    if (byUrl.has(key)) {
      skipped++;
      continue;
    }
    existing.push(e);
    byUrl.set(key, e);
    added++;
  }

  const levelRank = {
    Federal: 0,
    'Crown Corp': 1,
    Agency: 2,
    Provincial: 3,
    Regional: 4,
    Municipal: 5,
  };
  existing.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    const la = levelRank[a.level] ?? 99;
    const lb = levelRank[b.level] ?? 99;
    if (la !== lb) return la - lb;
    if (a.jurisdiction !== b.jurisdiction) return a.jurisdiction.localeCompare(b.jurisdiction);
    return a.name.localeCompare(b.name);
  });

  fs.writeFileSync(DATA, JSON.stringify(existing.map(orderedEntry), null, 2) + '\n', 'utf8');
  console.log(`Batch 7 — Added: ${added}, Skipped duplicates: ${skipped}, Total: ${existing.length}`);
}

main();
