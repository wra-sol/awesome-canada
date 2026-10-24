#!/usr/bin/env node
/**
 * Fourth batch: Ontario mid-size city gap fill — open data hubs, datasets,
 * council portals, school boards, and regional GIS for cities missing from catalog.
 */

const fs = require('fs');
const path = require('path');
const { CATEGORY_IDS } = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

const BATCH = [
  // --- open-data: Ontario mid-size hubs ---
  {
    name: 'Sarnia GeoHub',
    level: 'Municipal',
    jurisdiction: 'Sarnia',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'ArcGIS Hub for City of Sarnia GIS layers — zoning, transportation, infrastructure, and interactive community maps with CSV/GeoJSON export.',
    url: 'https://city-of-sarnia.hub.arcgis.com/',
    tags: ['sarnia', 'open data', 'arcgis hub', 'gis'],
  },
  {
    name: 'Explore North Bay GIS Portal',
    level: 'Municipal',
    jurisdiction: 'North Bay',
    category: 'open-data',
    type: 'GIS Open Data Portal',
    description:
      'City of North Bay ArcGIS Hub — zoning, transportation, public art, and community statistics with downloadable map layers and REST API access.',
    url: 'https://data-northbaygis.hub.arcgis.com/',
    tags: ['north bay', 'open data', 'arcgis hub', 'gis'],
  },
  {
    name: 'City of Belleville Open Data',
    level: 'Municipal',
    jurisdiction: 'Belleville',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Belleville GIS open data on ArcGIS Hub — parcels, road network, and planning layers with shapefile/GeoJSON download and API.',
    url: 'https://opendata-bellevillegis.hub.arcgis.com/',
    tags: ['belleville', 'open data', 'arcgis hub', 'parcels'],
  },
  {
    name: 'City of Cornwall Open Data',
    level: 'Municipal',
    jurisdiction: 'Cornwall',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Cornwall municipal open data catalogue — address points, buildings, watermains, official plan land use, and heritage sites with CSV/GeoJSON export.',
    url: 'https://data-cornwallcity.opendata.arcgis.com/',
    tags: ['cornwall', 'open data', 'arcgis hub', 'geojson'],
  },
  {
    name: 'Whitby GeoHub',
    level: 'Municipal',
    jurisdiction: 'Whitby',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Town of Whitby open data portal — municipal facilities, parks, trails, and planning datasets searchable and downloadable via ArcGIS Hub.',
    url: 'https://geohub-whitby.hub.arcgis.com/',
    tags: ['whitby', 'open data', 'arcgis hub', 'durham'],
  },
  {
    name: 'Town of Caledon Open Data',
    level: 'Municipal',
    jurisdiction: 'Caledon',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Caledon open data on ArcGIS Hub — trails, tourism, broadband coverage, and municipal GIS layers with bulk download and REST services.',
    url: 'https://data-caledon.opendata.arcgis.com/',
    tags: ['caledon', 'open data', 'arcgis hub', 'peel'],
  },
  {
    name: 'City of Orillia Open Data',
    level: 'Municipal',
    jurisdiction: 'Orillia',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Orillia municipal open data portal — addresses, zoning, and planning schedules with dataset download and map services.',
    url: 'https://data.orillia.ca/',
    tags: ['orillia', 'open data', 'simcoe'],
  },
  {
    name: 'City of Timmins Open Data',
    level: 'Municipal',
    jurisdiction: 'Timmins',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Timmins municipal open data portal — infrastructure, planning, and community GIS datasets on ArcGIS Hub with export and API access.',
    url: 'https://opendata.timmins.ca/',
    tags: ['timmins', 'open data', 'northern ontario', 'arcgis'],
  },

  // --- planning-zoning ---
  {
    name: 'Sarnia Residential Development Pipeline Dashboard',
    level: 'Municipal',
    jurisdiction: 'Sarnia',
    category: 'planning-zoning',
    type: 'Development pipeline dashboard',
    description:
      'Interactive dashboard of Council-approved residential units via zoning amendments, OPA, and site plan — filter by project status and map location.',
    url: 'https://www.sarnia.ca/business-planning-and-development/residential-development-pipeline/',
    tags: ['sarnia', 'development applications', 'zoning', 'housing units'],
  },
  {
    name: 'Cornwall Official Plan Land Use Open Data',
    level: 'Municipal',
    jurisdiction: 'Cornwall',
    category: 'planning-zoning',
    type: 'Land use dataset',
    description:
      'Official Plan Schedule 1 land-use polygons for Cornwall — download shapefile/GeoJSON or query via ArcGIS REST from the open data catalogue.',
    url: 'https://data-cornwallcity.opendata.arcgis.com/datasets/official-plan-schedule1-landuse',
    tags: ['cornwall', 'official plan', 'land use', 'zoning', 'shapefile'],
  },
  {
    name: 'Belleville Parcels Open Data',
    level: 'Municipal',
    jurisdiction: 'Belleville',
    category: 'planning-zoning',
    type: 'Parcel dataset',
    description:
      'City of Belleville property parcel layer with roll and addressing attributes — export CSV/GeoJSON or use ArcGIS Hub API.',
    url: 'https://opendata-bellevillegis.hub.arcgis.com/datasets/parcels-1',
    tags: ['belleville', 'parcels', 'property', 'open data'],
  },
  {
    name: 'Orillia Zone Mapping Feature Service',
    level: 'Municipal',
    jurisdiction: 'Orillia',
    category: 'planning-zoning',
    type: 'Zoning map service',
    description:
      'Orillia zoning by-law zone polygons via County of Simcoe ArcGIS FeatureServer — query JSON/GeoJSON or export for GIS analysis.',
    url: 'https://maps.simcoe.ca/arcgis/rest/services/Orillia/Zone_Mapping/FeatureServer',
    tags: ['orillia', 'zoning', 'arcgis', 'featureserver', 'geojson'],
  },
  {
    name: 'Oxford County Zoning Open Data (Woodstock)',
    level: 'Municipal',
    jurisdiction: 'Woodstock',
    category: 'planning-zoning',
    type: 'Zoning map service',
    description:
      'Consolidated lower-tier municipal zoning for Oxford County including Woodstock — query MapServer layer or download via Oxford County Open Data Hub.',
    url: 'https://public.oxfordcounty.ca/gis/rest/services/OpenData/OXFORD_OpenData/MapServer/2',
    tags: ['woodstock', 'oxford county', 'zoning', 'arcgis', 'open data'],
  },
  {
    name: 'Oxford County Open Data Hub',
    level: 'Regional',
    jurisdiction: 'Woodstock',
    category: 'open-data',
    type: 'Regional open data portal',
    description:
      'Oxford County GIS open data serving Woodstock and area municipalities — parcels, zoning, addressing, and infrastructure with REST API and downloads.',
    url: 'https://public-oxfordcounty.opendata.arcgis.com/',
    tags: ['woodstock', 'oxford county', 'open data', 'arcgis hub'],
  },
  {
    name: 'Clarington Municipal Planning Data Reports',
    level: 'Municipal',
    jurisdiction: 'Clarington',
    category: 'planning-zoning',
    type: 'Planning application statistics',
    description:
      'Quarterly PDF reports of planning applications received and decided, housing units proposed and approved — per Ontario Regulation 73/23.',
    url: 'https://www.clarington.net/planning-and-development/municipal-planning-data-report/',
    tags: ['clarington', 'durham', 'development applications', 'housing', 'planning'],
  },
  {
    name: 'Durham Region Open Data',
    level: 'Regional',
    jurisdiction: 'Clarington',
    category: 'open-data',
    type: 'Regional open data portal',
    description:
      'Regional Municipality of Durham open data — boundaries, infrastructure, and regional datasets covering Clarington and other lower-tier municipalities.',
    url: 'https://opendata.durham.ca/',
    tags: ['durham', 'clarington', 'open data', 'arcgis hub', 'regional'],
  },

  // --- council ---
  {
    name: 'Belleville CivicWeb Council Portal',
    level: 'Municipal',
    jurisdiction: 'Belleville',
    category: 'council',
    type: 'Council agendas and minutes',
    description:
      'Searchable council and committee agendas, minutes, and attachments for City of Belleville — subscribe to meeting email alerts.',
    url: 'https://citybellevilleon.civicweb.net/Portal/MeetingTypeList.aspx',
    tags: ['belleville', 'council', 'agendas', 'minutes', 'civicweb'],
  },
  {
    name: 'Timmins CivicWeb Council Portal',
    level: 'Municipal',
    jurisdiction: 'Timmins',
    category: 'council',
    type: 'Council agendas and minutes',
    description:
      'City of Timmins council calendar, agendas, minutes, resolutions, and by-laws — email subscription for new meeting packages.',
    url: 'https://timmins.civicweb.net/Portal/',
    tags: ['timmins', 'council', 'agendas', 'minutes', 'civicweb'],
  },
  {
    name: 'Cornwall Council Minutes Open Data',
    level: 'Municipal',
    jurisdiction: 'Cornwall',
    category: 'council',
    type: 'Council minutes archive',
    description:
      'Council minute archives from 1970 to present on Cornwall open data — searchable metadata with document links for accountability research.',
    url: 'https://www.cornwall.ca/en/city-hall/open-data.aspx',
    tags: ['cornwall', 'council', 'minutes', 'open data'],
  },

  // --- heritage ---
  {
    name: 'Cornwall Heritage Designated Sites Open Data',
    level: 'Municipal',
    jurisdiction: 'Cornwall',
    category: 'heritage',
    type: 'Heritage register dataset',
    description:
      'GIS layer of Heritage Cornwall designated properties — map, filter, and download designated sites with by-law references via open data portal.',
    url: 'https://data-cornwallcity.opendata.arcgis.com/datasets/7e4d2ad84e584cceb938711fec2f9f2c_0',
    tags: ['cornwall', 'heritage', 'designated properties', 'open data', 'geojson'],
  },
  {
    name: 'SooMaps Heritage Sites Data',
    level: 'Municipal',
    jurisdiction: 'Sault Ste. Marie',
    category: 'heritage',
    type: 'Heritage sites dataset',
    description:
      'Weekly-refreshed CSV/JSON extracts of Sault Ste. Marie heritage sites from official GIS — sourced from city SooMaps open data program.',
    url: 'https://cityssm.github.io/soomaps-data/',
    tags: ['sault ste marie', 'heritage', 'csv', 'json', 'open data'],
  },

  // --- open-data: Sault Ste. Marie ---
  {
    name: 'SooMaps Open GIS Data Downloads',
    level: 'Municipal',
    jurisdiction: 'Sault Ste. Marie',
    category: 'open-data',
    type: 'GIS data extracts',
    description:
      'Official City of Sault Ste. Marie GIS extracts — addresses, streets, wards, bus stops, playgrounds, and heritage as CSV/JSON refreshed weekly.',
    url: 'https://github.com/cityssm/soomaps-data',
    tags: ['sault ste marie', 'open data', 'csv', 'json', 'addresses', 'wards'],
  },
  {
    name: 'Sault Ste. Marie Ward Finder',
    level: 'Municipal',
    jurisdiction: 'Sault Ste. Marie',
    category: 'elections',
    type: 'Ward lookup tool',
    description:
      'Look up municipal ward by street address using official address GIS data — powered by city open data extracts.',
    url: 'https://cityssm.github.io/ward-finder/',
    tags: ['sault ste marie', 'wards', 'elections', 'address lookup'],
  },

  // --- school-board ---
  {
    name: 'YRDSB School Locator',
    level: 'Regional',
    jurisdiction: 'York Region',
    category: 'school-board',
    type: 'School boundary lookup',
    description:
      'Enter a York Region street address to find designated elementary and secondary schools with links to boundary map PDFs.',
    url: 'https://schoollocator.yrdsb.ca/',
    tags: ['yrdsb', 'york region', 'school boundaries', 'catchment', 'locator'],
  },
  {
    name: 'Peel District School Board School Finder',
    level: 'Regional',
    jurisdiction: 'Peel',
    category: 'school-board',
    type: 'School boundary lookup',
    description:
      'Search Peel Region addresses to find assigned PDSB schools — links to Directions boundary maps for elementary and secondary catchments.',
    url: 'https://www.peelschools.org/school-finder',
    tags: ['peel', 'pdsb', 'school boundaries', 'mississauga', 'brampton'],
  },
  {
    name: 'Toronto District School Board Find Your School',
    level: 'Municipal',
    jurisdiction: 'Toronto',
    category: 'school-board',
    type: 'School boundary lookup',
    description:
      'TDSB address-based school finder for elementary and secondary designated schools within Toronto.',
    url: 'https://www.tdsb.on.ca/Find-your/School',
    tags: ['tdsb', 'toronto', 'school boundaries', 'catchment'],
  },
  {
    name: 'Ottawa-Carleton District School Board School Locator',
    level: 'Municipal',
    jurisdiction: 'Ottawa',
    category: 'school-board',
    type: 'School boundary lookup',
    description:
      'OCDSB interactive school locator — find elementary and secondary schools by home address within Ottawa.',
    url: 'https://www.ocdsb.ca/schools/our_schools/school_locator',
    tags: ['ocdsb', 'ottawa', 'school boundaries', 'locator'],
  },

  // --- health-region ---
  {
    name: 'Hastings Prince Edward Public Health Inspection Search',
    level: 'Regional',
    jurisdiction: 'Belleville',
    category: 'health-region',
    type: 'Food safety inspection search',
    description:
      'Search food premises inspection results and compliance history for Belleville, Quinte West, and Hastings-Prince Edward region.',
    url: 'https://www.hpepublichealth.ca/en/health-topics/inspections.aspx',
    tags: ['belleville', 'public health', 'food inspection', 'hastings prince edward'],
  },
  {
    name: 'North Bay Parry Sound District Health Unit Data',
    level: 'Regional',
    jurisdiction: 'North Bay',
    category: 'health-region',
    type: 'Public health data',
    description:
      'North Bay Parry Sound District Health Unit reports and local health data — outbreaks, immunization, and community health indicators.',
    url: 'https://www.myhealthunit.ca/en/health-topics/resources-and-reports.asp',
    tags: ['north bay', 'public health', 'health unit', 'reports'],
  },

  // --- environment ---
  {
    name: 'North Bay Drinking Water Quality Reports',
    level: 'Municipal',
    jurisdiction: 'North Bay',
    category: 'environment',
    type: 'Water quality reports',
    description:
      'Annual and summary drinking water quality test results for City of North Bay municipal water system — PDF reports by year.',
    url: 'https://www.northbay.ca/your-city-hall/departments/water-wastewater/drinking-water-quality/',
    tags: ['north bay', 'water quality', 'drinking water', 'environment'],
  },

  // --- parks ---
  {
    name: 'Caledon Trails Open Data',
    level: 'Municipal',
    jurisdiction: 'Caledon',
    category: 'parks',
    type: 'Trails GIS dataset',
    description:
      'Caledon trail network GIS layers on open data — download paths and recreation routes or query via municipal map services.',
    url: 'https://maps.caledon.ca/calgis/rest/services/External/Trails/MapServer',
    tags: ['caledon', 'trails', 'parks', 'gis', 'arcgis'],
  },

  // --- business / procurement ---
  {
    name: 'County of Elgin GeoHub (St. Thomas area)',
    level: 'Regional',
    jurisdiction: 'St. Thomas',
    category: 'open-data',
    type: 'County open data portal',
    description:
      'Elgin County GIS open data covering St. Thomas and surrounding municipalities — parcels, roads, and planning layers via ArcGIS Hub.',
    url: 'https://geohub.elgin.ca/',
    tags: ['st thomas', 'elgin county', 'open data', 'arcgis hub'],
  },

  // --- additional datasets ---
  {
    name: 'Cornwall Address Points Open Data',
    level: 'Municipal',
    jurisdiction: 'Cornwall',
    category: 'open-data',
    type: 'Address dataset',
    description:
      'Municipal address point layer for Cornwall — geocoded civic addresses with export to CSV, Shapefile, or GeoJSON.',
    url: 'https://data-cornwallcity.opendata.arcgis.com/datasets/134ac6de89ff493484541b6d8a326e62_34',
    tags: ['cornwall', 'addresses', 'geocoded', 'open data', 'csv'],
  },
  {
    name: 'Simcoe County Open Data Hub (Orillia region)',
    level: 'Regional',
    jurisdiction: 'Orillia',
    category: 'open-data',
    type: 'County open data portal',
    description:
      'County of Simcoe regional open data — shared GIS layers and datasets for Orillia, Barrie, and Simcoe municipalities.',
    url: 'https://data-simcoe.opendata.arcgis.com/',
    tags: ['orillia', 'simcoe county', 'open data', 'arcgis hub'],
  },
  {
    name: 'St. Thomas Heritage Properties',
    level: 'Municipal',
    jurisdiction: 'St. Thomas',
    category: 'heritage',
    type: 'Heritage property listing',
    description:
      'Searchable listing of designated and listed heritage properties in St. Thomas with location and designation details.',
    url: 'https://www.stthomas.ca/visiting_us/heritage_properties',
    tags: ['st thomas', 'heritage', 'designated properties'],
  },
  {
    name: 'St. Thomas CMAP Interactive City Maps',
    level: 'Municipal',
    jurisdiction: 'St. Thomas',
    category: 'planning-zoning',
    type: 'Interactive zoning map',
    description:
      'CartoVista web map for St. Thomas — zoning, property, and city map layers for parcel and planning lookups.',
    url: 'https://cmap2.stthomas.ca/CartoVistaServer/maps/view',
    tags: ['st thomas', 'zoning', 'maps', 'planning'],
  },
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
  console.log(`Batch 4 — Added: ${added}, Skipped duplicates: ${skipped}, Total: ${existing.length}`);
}

main();
