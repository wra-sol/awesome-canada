#!/usr/bin/env node
/**
 * Second batch: remaining municipal portals, weather APIs, and category depth.
 */

const fs = require('fs');
const path = require('path');
const { CATEGORY_IDS } = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

const BATCH = [
  // --- weather (category was empty; use distinct actionable URLs from environment-adjacent) ---
  {
    name: 'MSC GeoMet — Weather and Climate API',
    level: 'Federal',
    jurisdiction: 'Canada',
    category: 'weather',
    type: 'Weather API',
    description: 'OGC API for Environment Canada weather, climate, and hydrometric layers — query forecasts, alerts, and station data programmatically.',
    url: 'https://api.weather.gc.ca/',
    tags: ['canada', 'weather', 'api', 'climate', 'geomet'],
  },
  {
    name: 'Environment Canada — Datamart (MSC)',
    level: 'Federal',
    jurisdiction: 'Canada',
    category: 'weather',
    type: 'Raw data feeds',
    description: 'FTP/HTTPS directory of raw weather model, radar, and observation files for bulk download and research pipelines.',
    url: 'https://dd.weather.gc.ca/',
    tags: ['canada', 'weather', 'data', 'radar', 'bulk download'],
  },
  {
    name: 'Historical Climate Data — ECCC',
    level: 'Federal',
    jurisdiction: 'Canada',
    category: 'weather',
    type: 'Climate observations',
    description: 'Search and download daily, monthly, and hourly climate observations from federal weather stations across Canada.',
    url: 'https://climate.weather.gc.ca/',
    tags: ['canada', 'weather', 'climate', 'historical', 'csv'],
  },
  {
    name: 'BC River Forecast Centre — Open Data',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'weather',
    type: 'Hydrometric data',
    description: 'Snowpack, streamflow, and flood forecasting data for British Columbia watersheds — maps and downloadable hydrometric datasets.',
    url: 'https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/drought-flooding-dikes-dams/river-forecast-centre',
    tags: ['bc', 'flood', 'hydrology', 'forecast', 'open data'],
  },
  {
    name: 'Ontario Flood Forecasting and Warning',
    level: 'Provincial',
    jurisdiction: 'Ontario',
    category: 'weather',
    type: 'Flood monitoring',
    description: 'Provincial flood outlooks, watershed condition reports, and real-time flood messages for Ontario conservation authorities.',
    url: 'https://www.ontario.ca/floodforecast/',
    tags: ['ontario', 'flood', 'forecast', 'warnings'],
  },
  // --- planning-zoning (more cities) ---
  {
    name: 'Coquitlam Planning and Development Open Data',
    level: 'Municipal',
    jurisdiction: 'Coquitlam',
    category: 'planning-zoning',
    type: 'Planning datasets',
    description: 'Zoning, development permit areas, neighbourhood plans, and planning boundaries for Coquitlam — download via ArcGIS Hub.',
    url: 'https://data.coquitlam.ca/datasets/Coquitlam::planning-and-development-1',
    tags: ['coquitlam', 'zoning', 'planning', 'development', 'arcgis'],
  },
  {
    name: 'Mississauga Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Mississauga',
    category: 'planning-zoning',
    type: 'Building permits',
    description: 'Search and download Mississauga building permit data from the open data catalogue with API access.',
    url: 'https://data.mississauga.ca/browse?category=Building+Permits',
    tags: ['mississauga', 'building permits', 'open data', 'api'],
  },
  {
    name: 'Vancouver Building Permits Issued',
    level: 'Municipal',
    jurisdiction: 'Vancouver',
    category: 'planning-zoning',
    type: 'Building permits dataset',
    description: 'Open data on issued building permits in Vancouver with project type, value, and address fields.',
    url: 'https://opendata.vancouver.ca/explore/dataset/issued-building-permits/',
    tags: ['vancouver', 'building permits', 'construction', 'csv'],
  },
  // --- council ---
  {
    name: 'Mississauga Council and Committees — eScribe',
    level: 'Municipal',
    jurisdiction: 'Mississauga',
    category: 'council',
    type: 'Agendas and minutes',
    description: 'Search council and committee agendas, minutes, and video for City of Mississauga meetings.',
    url: 'https://pub-mississauga.escribemeetings.com/',
    tags: ['mississauga', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Hamilton Council Meetings and Agendas',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'council',
    type: 'Agendas and minutes',
    description: 'Council and committee agendas, minutes, and live meeting streams for the City of Hamilton.',
    url: 'https://www.hamilton.ca/city-council/meetings-agendas',
    tags: ['hamilton', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'London Council and Committee Meetings',
    level: 'Municipal',
    jurisdiction: 'London',
    category: 'council',
    type: 'Agendas and minutes',
    description: 'Browse London City Council and standing committee agendas, minutes, and video recordings.',
    url: 'https://www.london.ca/city-hall/mayor-council/council-committee-meetings',
    tags: ['london', 'council', 'agendas', 'minutes'],
  },
  // --- health-region ---
  {
    name: 'Hamilton Public Health — Food Safety Inspections',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'health-region',
    type: 'Food inspection search',
    description: 'Search food premises inspection results for Hamilton under Hamilton Public Health Services.',
    url: 'https://www.hamilton.ca/public-health/food-safety/food-premises-inspections',
    tags: ['hamilton', 'food safety', 'inspections', 'public health'],
  },
  {
    name: 'Winnipeg Food Establishment Inspections',
    level: 'Municipal',
    jurisdiction: 'Winnipeg',
    category: 'health-region',
    type: 'Food inspection data',
    description: 'Food establishment inspection records on Winnipeg open data — search results and facility compliance history.',
    url: 'https://data.winnipeg.ca/Health/Food-Establishment-Inspections/ibwh-36tr',
    tags: ['winnipeg', 'food safety', 'inspections', 'open data'],
  },
  {
    name: 'Vancouver Coastal Health — Restaurant Inspections',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'health-region',
    type: 'Inspection reports',
    description: 'VCH restaurant and food service inspection reports for Vancouver Coastal region facilities.',
    url: 'https://www.vch.ca/en/health-topics/environmental-health-inspections/reports',
    tags: ['bc', 'vancouver', 'food safety', 'inspections'],
  },
  // --- school-board ---
  {
    name: 'Alberta Education — School Directory and Maps',
    level: 'Provincial',
    jurisdiction: 'Alberta',
    category: 'school-board',
    type: 'School directory',
    description: 'Alberta school authority listings, school locations, and jurisdictional boundary information for public schools.',
    url: 'https://www.alberta.ca/school-authority-contact-list',
    tags: ['alberta', 'schools', 'directory', 'education'],
  },
  {
    name: 'BC Schools — Open Data (GeoBC)',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'school-school-board',
    type: 'School locations',
    description: 'BC public school point locations and related education geospatial layers from provincial open data.',
    url: 'https://catalogue.data.gov.bc.ca/dataset/gtfs-stops-for-bc-transit',
    tags: ['bc', 'schools', 'geojson'],
  },
  // --- heritage ---
  {
    name: 'Calgary Heritage Inventory',
    level: 'Municipal',
    jurisdiction: 'Calgary',
    category: 'heritage',
    type: 'Heritage inventory',
    description: 'Inventory of evaluated heritage resources in Calgary — search historic buildings and sites on Open Calgary.',
    url: 'https://data.calgary.ca/Land-Use-Planning/Heritage-Inventory/xfh5-6p7w',
    tags: ['calgary', 'heritage', 'historic buildings', 'open data'],
  },
  {
    name: 'Toronto Heritage Register (Map)',
    level: 'Municipal',
    jurisdiction: 'Toronto',
    category: 'heritage',
    type: 'Heritage map',
    description: 'Interactive map of properties on the City of Toronto Heritage Register — search by address for listed and designated sites.',
    url: 'https://www.toronto.ca/city-government/planning-development/heritage-preservation/heritage-register/',
    tags: ['toronto', 'heritage', 'register', 'map'],
  },
  {
    name: 'Edmonton Register of Historic Resources',
    level: 'Municipal',
    jurisdiction: 'Edmonton',
    category: 'heritage',
    type: 'Heritage register',
    description: 'Search Edmonton\'s Register of Historic Resources for municipally designated and inventoried heritage properties.',
    url: 'https://www.edmonton.ca/city_government/urban_planning_and_design/heritage-resources',
    tags: ['edmonton', 'heritage', 'historic resources', 'register'],
  },
  // --- lobbyist ---
  {
    name: 'Saskatchewan Lobbyist Registry',
    level: 'Provincial',
    jurisdiction: 'Saskatchewan',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description: 'Public search of registered lobbyists and lobbying activities in Saskatchewan under The Lobbyists Act.',
    url: 'https://registry.saskatchewanlobbyists.ca/',
    tags: ['saskatchewan', 'lobbyists', 'registry', 'search'],
  },
  {
    name: 'Manitoba Lobbyists Registry',
    level: 'Provincial',
    jurisdiction: 'Manitoba',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description: 'Search Manitoba lobbyist registrations and returns filed with the Office of the Integrity Commissioner.',
    url: 'https://www.manitobalobbyistsregistry.ca/',
    tags: ['manitoba', 'lobbyists', 'registry'],
  },
  // --- budget ---
  {
    name: 'BC Bid — Contract Awards',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'budget',
    type: 'Procurement awards',
    description: 'Search awarded BC public sector contracts and standing offers on BC Bid — filter by ministry, vendor, and date.',
    url: 'https://bcbid.gov.bc.ca/page.aspx/en/buy/contract-award',
    tags: ['bc', 'procurement', 'contracts', 'awards'],
  },
  {
    name: 'City of Toronto Vendor Payments (Open Data)',
    level: 'Municipal',
    jurisdiction: 'Toronto',
    category: 'budget',
    type: 'Vendor payments',
    description: 'Quarterly open data releases of City of Toronto payments to vendors over reporting thresholds.',
    url: 'https://open.toronto.ca/dataset/payments-to-vendors/',
    tags: ['toronto', 'payments', 'vendors', 'csv', 'transparency'],
  },
  // --- transit GTFS ---
  {
    name: 'Hamilton Street Railway GTFS',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'transit',
    type: 'GTFS feed',
    description: 'HSR GTFS static schedule data for Hamilton transit routes and stops.',
    url: 'https://www.hamilton.ca/city-initiatives/strategies-actions/open-data-catalogue',
    tags: ['hamilton', 'gtfs', 'transit', 'hsr'],
  },
  {
    name: 'London Transit Commission GTFS',
    level: 'Municipal',
    jurisdiction: 'London',
    category: 'transit',
    type: 'GTFS feed',
    description: 'LTC GTFS feed download for London, Ontario bus routes, stops, and schedules.',
    url: 'https://www.londontransit.ca/open-data/',
    tags: ['london', 'gtfs', 'transit', 'ontario'],
  },
  {
    name: 'Winnipeg Transit GTFS',
    level: 'Municipal',
    jurisdiction: 'Winnipeg',
    category: 'transit',
    type: 'GTFS feed',
    description: 'Winnipeg Transit GTFS static feed and developer documentation on the open data portal.',
    url: 'https://data.winnipeg.ca/Transportation/Transit-GTFS-Static-Feed/g4wx-2p3b',
    tags: ['winnipeg', 'gtfs', 'transit', 'open data'],
  },
  {
    name: 'Halifax Transit GTFS',
    level: 'Regional',
    jurisdiction: 'Halifax',
    category: 'transit',
    type: 'GTFS feed',
    description: 'Halifax Transit GTFS schedule data available from the HRM open data catalogue.',
    url: 'https://www.halifax.ca/transportation/halifax-transit/open-data',
    tags: ['halifax', 'gtfs', 'transit', 'open data'],
  },
  {
    name: 'Exo GTFS (Montreal Region)',
    level: 'Regional',
    jurisdiction: 'Montreal',
    category: 'transit',
    type: 'GTFS feed',
    description: 'Exo commuter rail and bus GTFS feeds for Greater Montreal suburbs on Données Québec.',
    url: 'https://exo.quebec/en/about/open-data',
    tags: ['montreal', 'exo', 'gtfs', 'commuter', 'quebec'],
  },
  // --- municipal open data (remaining plan cities) ---
  {
    name: 'Coquitlam Open Data Portal',
    level: 'Municipal',
    jurisdiction: 'Coquitlam',
    category: 'open-data',
    type: 'Open data portal',
    description: 'City of Coquitlam open data portal with planning, parks, transportation, and civic datasets.',
    url: 'https://data.coquitlam.ca/',
    tags: ['coquitlam', 'bc', 'open data', 'arcgis'],
  },
  {
    name: 'Township of Langley Open Data',
    level: 'Municipal',
    jurisdiction: 'Langley',
    category: 'open-data',
    type: 'Open data hub',
    description: 'Township of Langley ArcGIS open data with property, parks, and municipal infrastructure layers.',
    url: 'https://data-tol.opendata.arcgis.com/',
    tags: ['langley', 'bc', 'open data', 'arcgis'],
  },
  {
    name: 'Milton Open Data Hub',
    level: 'Municipal',
    jurisdiction: 'Milton',
    category: 'open-data',
    type: 'Open data hub',
    description: 'Discover Milton ArcGIS Hub with civic datasets including property, zoning, and recreation — CSV and shapefile download.',
    url: 'https://discover-milton.hub.arcgis.com/',
    tags: ['milton', 'ontario', 'open data', 'arcgis'],
  },
  {
    name: 'Medicine Hat Open Data',
    level: 'Municipal',
    jurisdiction: 'Medicine Hat',
    category: 'open-data',
    type: 'Open data portal',
    description: 'City of Medicine Hat open data portal with GIS and civic datasets for southeastern Alberta.',
    url: 'http://data.medicinehat.ca/',
    tags: ['medicine hat', 'alberta', 'open data'],
  },
  {
    name: 'Banff Open Data',
    level: 'Municipal',
    jurisdiction: 'Banff',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Town of Banff open data including trails, zoning, and municipal spatial datasets.',
    url: 'http://www.banffopendata.ca/',
    tags: ['banff', 'alberta', 'open data', 'parks'],
  },
  {
    name: 'Canmore Open Data',
    level: 'Municipal',
    jurisdiction: 'Canmore',
    category: 'open-data',
    type: 'Open data hub',
    description: 'Town of Canmore ArcGIS open data with recreation, trails, and planning datasets.',
    url: 'http://opendata-canmore.opendata.arcgis.com/',
    tags: ['canmore', 'alberta', 'open data', 'arcgis'],
  },
  {
    name: 'Courtenay Open Data',
    level: 'Municipal',
    jurisdiction: 'Courtenay',
    category: 'open-data',
    type: 'Open data hub',
    description: 'City of Courtenay ArcGIS open data portal with civic and planning datasets.',
    url: 'https://data-courtenay.opendata.arcgis.com/',
    tags: ['courtenay', 'bc', 'open data', 'arcgis'],
  },
  {
    name: 'White Rock Open Data',
    level: 'Municipal',
    jurisdiction: 'White Rock',
    category: 'open-data',
    type: 'Open data portal',
    description: 'City of White Rock CKAN open data catalogue with municipal GIS datasets.',
    url: 'http://data.whiterockcity.ca/',
    tags: ['white rock', 'bc', 'open data', 'ckan'],
  },
  {
    name: 'Maple Ridge OpenGov',
    level: 'Municipal',
    jurisdiction: 'Maple Ridge',
    category: 'open-data',
    type: 'Open data portal',
    description: 'District of Maple Ridge open government data with parks, property, and infrastructure downloads.',
    url: 'https://opengov.mapleridge.ca/',
    tags: ['maple ridge', 'bc', 'open data'],
  },
  {
    name: 'Haldimand County Open Data',
    level: 'Municipal',
    jurisdiction: 'Haldimand County',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Haldimand County open data portal with property, roads, and municipal GIS layers.',
    url: 'http://opendata.haldimandcounty.on.ca/',
    tags: ['haldimand', 'ontario', 'open data'],
  },
  {
    name: 'Norfolk County Open Data',
    level: 'Municipal',
    jurisdiction: 'Norfolk County',
    category: 'open-data',
    type: 'Open data hub',
    description: 'Norfolk County ArcGIS open data including building footprints and civic datasets.',
    url: 'http://opendata.norfolkcounty.ca/',
    tags: ['norfolk', 'ontario', 'open data', 'arcgis'],
  },
  {
    name: 'Huron County Open Data',
    level: 'Municipal',
    jurisdiction: 'Huron County',
    category: 'open-data',
    type: 'Open data hub',
    description: 'County of Huron ArcGIS open data with libraries, buildings, and municipal boundaries.',
    url: 'http://data-huron.opendata.arcgis.com/',
    tags: ['huron', 'ontario', 'open data', 'arcgis'],
  },
  {
    name: 'Grey County Open Data',
    level: 'Municipal',
    jurisdiction: 'Grey County',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Grey County open GIS data portal with civic and planning datasets for southwestern Ontario.',
    url: 'http://opendata.grey.ca/',
    tags: ['grey county', 'ontario', 'open data', 'gis'],
  },
  {
    name: 'Newmarket Open Data',
    level: 'Municipal',
    jurisdiction: 'Newmarket',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Town of Newmarket open data navigator with property, recreation, and civic datasets.',
    url: 'http://open.newmarket.ca/',
    tags: ['newmarket', 'ontario', 'open data'],
  },
  {
    name: 'Welland Open Data',
    level: 'Municipal',
    jurisdiction: 'Welland',
    category: 'open-data',
    type: 'Open data portal',
    description: 'City of Welland open data portal with civic and GIS datasets for Niagara Region.',
    url: 'https://www.welland.ca/open/Opendata.asp',
    tags: ['welland', 'ontario', 'open data', 'niagara'],
  },
  {
    name: 'Niagara Falls Open Data',
    level: 'Municipal',
    jurisdiction: 'Niagara Falls',
    category: 'open-data',
    type: 'Open data portal',
    description: 'City of Niagara Falls open data service with downloadable municipal datasets.',
    url: 'https://www.niagarafalls.ca/services/open/data',
    tags: ['niagara falls', 'ontario', 'open data'],
  },
  {
    name: 'St. Catharines Open Data (Niagara)',
    level: 'Municipal',
    jurisdiction: 'St. Catharines',
    category: 'open-data',
    type: 'Open data portal',
    description: 'St. Catharines datasets on Niagara Open Data — property, recreation, and civic layers.',
    url: 'https://niagaraopendata.ca/organization/city-of-st-catharines',
    tags: ['st. catharines', 'ontario', 'open data', 'niagara'],
  },
  {
    name: 'Rimouski Open Data (Données Québec)',
    level: 'Municipal',
    jurisdiction: 'Rimouski',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Ville de Rimouski municipal datasets on Données Québec including buildings and civic infrastructure.',
    url: 'https://www.donneesquebec.ca/fr/organisation/ville-de-rimouski/',
    tags: ['rimouski', 'quebec', 'open data'],
  },
  {
    name: 'Repentigny Open Data (Données Québec)',
    level: 'Municipal',
    jurisdiction: 'Repentigny',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Ville de Repentigny open datasets on Données Québec — buildings, parks, and municipal services.',
    url: 'https://www.donneesquebec.ca/fr/organisation/ville-de-repentigny/',
    tags: ['repentigny', 'quebec', 'open data'],
  },
  {
    name: 'Rouyn-Noranda Open Data (Données Québec)',
    level: 'Municipal',
    jurisdiction: 'Rouyn-Noranda',
    category: 'open-data',
    type: 'Open data portal',
    description: 'Ville de Rouyn-Noranda datasets on Données Québec with civic and geospatial downloads.',
    url: 'https://www.donneesquebec.ca/fr/organisation/ville-de-rouyn-noranda/',
    tags: ['rouyn-noranda', 'quebec', 'open data'],
  },
  {
    name: 'East Hants Open Data',
    level: 'Municipal',
    jurisdiction: 'East Hants',
    category: 'open-data',
    type: 'Open data hub',
    description: 'Municipality of East Hants ArcGIS open data with planning and civic spatial datasets.',
    url: 'http://data.easthants.opendata.arcgis.com/',
    tags: ['east hants', 'nova scotia', 'open data', 'arcgis'],
  },
  {
    name: 'Miramichi Open Data',
    level: 'Municipal',
    jurisdiction: 'Miramichi',
    category: 'open-data',
    type: 'Open data hub',
    description: 'City of Miramichi ArcGIS open data portal for northeastern New Brunswick.',
    url: 'http://data.gis-sigmiramichi.opendata.arcgis.com/',
    tags: ['miramichi', 'new brunswick', 'open data', 'arcgis'],
  },
  {
    name: 'York Region Public Health — Food Safety Inspections',
    level: 'Regional',
    jurisdiction: 'York Region',
    category: 'health-region',
    type: 'Food inspection data',
    description: 'York Region food premises inspection disclosure data for restaurants and food facilities.',
    url: 'https://www.york.ca/health/food-safety/inspection-results',
    tags: ['york region', 'food safety', 'inspections', 'ontario'],
  },
];

// Fix typo in one entry
const bcSchools = BATCH.find((e) => e.category === 'school-school-board');
if (bcSchools) bcSchools.category = 'school-board';
if (bcSchools) {
  bcSchools.name = 'BC Public Schools — Location Data';
  bcSchools.url = 'https://catalogue.data.gov.bc.ca/dataset/bc-schools';
  bcSchools.description = 'Point locations of BC public schools from provincial open data — download for mapping catchments and facility analysis.';
}

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

  let existing = JSON.parse(fs.readFileSync(DATA, 'utf8'));

  // Remove duplicate Hamilton Open Data (http vs https variants)
  const hamiltonOd = existing.filter(
    (e) => e.name === 'Hamilton Open Data' && e.jurisdiction === 'Hamilton'
  );
  if (hamiltonOd.length > 1) {
    const keep = hamiltonOd.find((e) => e.url.startsWith('https://')) || hamiltonOd[0];
    existing = existing.filter(
      (e) => !(e.name === 'Hamilton Open Data' && e.jurisdiction === 'Hamilton' && e !== keep)
    );
  }

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
  console.log(`Batch 2 — Added: ${added}, Skipped duplicates: ${skipped}, Total: ${existing.length}`);
}

main();
