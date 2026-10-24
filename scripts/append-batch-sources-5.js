#!/usr/bin/env node
/**
 * Fifth batch: Quebec municipal depth (Données Québec, council) and Atlantic
 * GIS hubs (Truro, Moncton catalogue, CBRM REST, NL geospatial).
 */

const fs = require('fs');
const path = require('path');
const { CATEGORY_IDS } = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

const BATCH = [
  // --- Québec: Données Québec catalogues ---
  {
    name: 'Ville de Lévis — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Lévis',
    category: 'open-data',
    type: 'Open data catalogue',
    description:
      'Lévis municipal datasets on Données Québec — zonage, adresses, infrastructures with CSV, SHP, GeoJSON, and FGDB download.',
    url: 'https://www.donneesquebec.ca/recherche/organization/ville-de-levis',
    tags: ['lévis', 'quebec', 'open data', 'données québec', 'geojson'],
  },
  {
    name: 'Lévis Zonage — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Lévis',
    category: 'planning-zoning',
    type: 'Zoning dataset',
    description:
      'Municipal zoning boundaries for Lévis — download GeoJSON, shapefile, or FGDB; updated on Données Québec with CC-BY licence.',
    url: 'https://www.donneesquebec.ca/recherche/fr/dataset/6cd041e3-902c-469e-a863-e54f4df966f2',
    tags: ['lévis', 'zonage', 'zoning', 'geojson', 'shapefile'],
  },
  {
    name: 'Ville de Trois-Rivières — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Trois-Rivières',
    category: 'open-data',
    type: 'Open data catalogue',
    description:
      'Trois-Rivières datasets on Données Québec — zoning, roads, buildings, and infrastructure in CSV, SHP, and GeoJSON with weekly updates.',
    url: 'https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-trois-rivieres',
    tags: ['trois-rivières', 'quebec', 'open data', 'données québec'],
  },
  {
    name: 'Trois-Rivières Zonage — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Trois-Rivières',
    category: 'planning-zoning',
    type: 'Zoning dataset',
    description:
      'Municipal zoning layer for Trois-Rivières — export CSV, GeoJSON, or shapefile from Données Québec; aligns with urban planning by-law.',
    url: 'https://www.donneesquebec.ca/recherche/fr/dataset/85fa8f51-28f6-4163-9d96-eab0b185ec10',
    tags: ['trois-rivières', 'zonage', 'zoning', 'csv', 'geojson'],
  },
  {
    name: 'Ville de Saguenay — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Saguenay',
    category: 'open-data',
    type: 'Open data catalogue',
    description:
      'Saguenay open data on Données Québec — zoning, buildings, roads, parks, addresses, and tree inventory with CSV/SHP/GeoJSON export.',
    url: 'https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-saguenay',
    tags: ['saguenay', 'quebec', 'open data', 'données québec'],
  },
  {
    name: 'Saguenay Zonage — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Saguenay',
    category: 'planning-zoning',
    type: 'Zoning dataset',
    description:
      'Saguenay municipal zoning polygons — weekly-updated CSV, GeoJSON, and shapefile downloads via Données Québec.',
    url: 'https://www.donneesquebec.ca/recherche/dataset/sag_zonage',
    tags: ['saguenay', 'zonage', 'zoning', 'geojson', 'csv'],
  },
  {
    name: 'Saguenay Bâtiments — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Saguenay',
    category: 'open-data',
    type: 'Buildings dataset',
    description:
      'Municipal building footprints for Saguenay — download as CSV, GeoJSON, or shapefile from the provincial open data portal.',
    url: 'https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-saguenay&q=b%C3%A2timent',
    tags: ['saguenay', 'buildings', 'open data', 'geojson', 'shapefile'],
  },

  // --- Québec: council ---
  {
    name: 'Lévis — Ordres du jour du conseil',
    level: 'Municipal',
    jurisdiction: 'Lévis',
    category: 'council',
    type: 'Council agendas',
    description:
      'PDF agendas for City of Lévis council meetings — subscribe to email alerts when new agendas are published.',
    url: 'https://www.ville.levis.qc.ca/la-ville/conseil-municipal/ordres-du-jour/',
    tags: ['lévis', 'council', 'agendas', 'quebec'],
  },
  {
    name: 'Lévis — Procès-verbaux du conseil',
    level: 'Municipal',
    jurisdiction: 'Lévis',
    category: 'council',
    type: 'Council minutes',
    description:
      'Council minutes and decision summaries for Lévis — published the Wednesday after each council meeting with linked decision briefs.',
    url: 'https://www.ville.levis.qc.ca/la-ville/conseil-municipal/proces-verbaux/',
    tags: ['lévis', 'council', 'minutes', 'transparency'],
  },
  {
    name: 'Trois-Rivières — Ordres du jour et procès-verbaux',
    level: 'Municipal',
    jurisdiction: 'Trois-Rivières',
    category: 'council',
    type: 'Council agendas and minutes',
    description:
      'Archive of Trois-Rivières council and executive committee agendas, minutes, and adopted bylaws — posted by noon the day before regular meetings.',
    url: 'https://www.v3r.net/a-propos-de-la-ville/vie-democratique/ordres-du-jour-et-proces-verbaux',
    tags: ['trois-rivières', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Saguenay — Documents des conseils',
    level: 'Municipal',
    jurisdiction: 'Saguenay',
    category: 'council',
    type: 'Council documents',
    description:
      'Saguenay municipal and borough council agendas, minutes, and livestream archives for Chicoutimi, Jonquière, and La Baie.',
    url: 'https://ville.saguenay.ca/la-ville-et-vie-democratique/publications/documents-des-conseils-et-avis-publics/documents-des-conseils',
    tags: ['saguenay', 'council', 'agendas', 'minutes', 'borough'],
  },

  // --- Gatineau depth ---
  {
    name: 'Gatineau — Ordres du jour',
    level: 'Municipal',
    jurisdiction: 'Gatineau',
    category: 'council',
    type: 'Council agendas',
    description:
      'Browse Gatineau municipal council and committee agendas by year and month — includes CCU and commission meetings.',
    url: 'https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fordres_jour',
    tags: ['gatineau', 'council', 'agendas', 'quebec'],
  },
  {
    name: 'Gatineau — Procès-verbaux',
    level: 'Municipal',
    jurisdiction: 'Gatineau',
    category: 'council',
    type: 'Council minutes',
    description:
      'Gatineau council and committee minutes archive searchable by meeting date and body.',
    url: 'https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fproces_verbaux',
    tags: ['gatineau', 'council', 'minutes', 'transparency'],
  },
  {
    name: 'Gatineau — Liste de contrats',
    level: 'Municipal',
    jurisdiction: 'Gatineau',
    category: 'budget',
    type: 'Contracts list',
    description:
      'Published list of municipal contracts awarded by Ville de Gatineau — procurement transparency for vendors and researchers.',
    url: 'https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fliste_contrats',
    tags: ['gatineau', 'procurement', 'contracts', 'budget', 'transparency'],
  },
  {
    name: 'Gatineau — Statistiques sur les permis de construction',
    level: 'Municipal',
    jurisdiction: 'Gatineau',
    category: 'planning-zoning',
    type: 'Building permit statistics',
    description:
      'Annual and monthly building permit statistics published by Gatineau — counts and values for construction activity tracking.',
    url: 'https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fstatistiques_permis_construction',
    tags: ['gatineau', 'building permits', 'statistics', 'construction'],
  },
  {
    name: 'Gatineau — Rémunération des élus',
    level: 'Municipal',
    jurisdiction: 'Gatineau',
    category: 'budget',
    type: 'Elected officials remuneration',
    description:
      'Councillor and mayor salary and expense disclosure for Gatineau elected officials — published remuneration reports.',
    url: 'https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fremuneration_elus',
    tags: ['gatineau', 'salary disclosure', 'council', 'budget'],
  },

  // --- Lévis GIS ---
  {
    name: 'Lévis Flood Zone Map Service',
    level: 'Municipal',
    jurisdiction: 'Lévis',
    category: 'environment',
    type: 'Flood zone map service',
    description:
      'Lévis flood plain and inundation zones via municipal ArcGIS MapServer — query JSON/GeoJSON for hazard mapping.',
    url: 'https://cartes.ville.levis.qc.ca/arcgis/rest/services/Gociteweb/Hydrographie/MapServer/10',
    tags: ['lévis', 'flood', 'environment', 'arcgis', 'geojson'],
  },

  // --- Atlantic: open data ---
  {
    name: 'Interactive Truro — Open Data Hub',
    level: 'Municipal',
    jurisdiction: 'Truro',
    category: 'open-data',
    type: 'Open Data Portal',
    description:
      'Town of Truro ArcGIS Hub — maps, apps, and downloadable GIS datasets including building footprints and local layers.',
    url: 'https://interactive-truro-townoftruro.hub.arcgis.com/',
    tags: ['truro', 'nova scotia', 'open data', 'arcgis hub'],
  },
  {
    name: 'Moncton Open Data Catalogue (ArcGIS Hub)',
    level: 'Municipal',
    jurisdiction: 'Moncton',
    category: 'open-data',
    type: 'Open Data Catalogue',
    description:
      'City of Moncton GIS catalogue on ArcGIS Hub — zoning, transit, trails, parking, and environmental sensor datasets with export.',
    url: 'https://catalogue-moncton.hub.arcgis.com/',
    tags: ['moncton', 'new brunswick', 'open data', 'arcgis hub'],
  },
  {
    name: 'CBRM GIS REST Services',
    level: 'Municipal',
    jurisdiction: 'Cape Breton',
    category: 'open-data',
    type: 'ArcGIS REST services',
    description:
      'Cape Breton Regional Municipality ArcGIS Server — planning, parcels, public works, transit, and utilities layers queryable via REST API.',
    url: 'https://gis2.cbrm.ns.ca/server/rest/services',
    tags: ['cape breton', 'sydney', 'nova scotia', 'arcgis', 'api'],
  },
  {
    name: 'CBRM Parcel Finder',
    level: 'Municipal',
    jurisdiction: 'Cape Breton',
    category: 'planning-zoning',
    type: 'Parcel map service',
    description:
      'Cape Breton Regional Municipality parcel and property lookup via municipal GIS ParcelFinder map services.',
    url: 'https://gis2.cbrm.ns.ca/server/rest/services/ParcelFinder',
    tags: ['cape breton', 'parcels', 'property', 'gis'],
  },
  {
    name: 'Newfoundland and Labrador Geospatial Open Data',
    level: 'Provincial',
    jurisdiction: 'Newfoundland and Labrador',
    category: 'open-data',
    type: 'Provincial geospatial catalogue',
    description:
      'NL provincial geospatial datasets — municipal boundaries, health regions, and spatial layers in KML, shapefile, and other formats.',
    url: 'https://opendata.gov.nl.ca/public/opendata/page/?page-id=datasets-spatial',
    tags: ['newfoundland', 'labrador', 'open data', 'geospatial', 'shapefile'],
  },
  {
    name: 'Corner Brook Land Use Planning Registry',
    level: 'Municipal',
    jurisdiction: 'Newfoundland and Labrador',
    category: 'planning-zoning',
    type: 'Planning registry',
    description:
      'Corner Brook municipal plan, zoning maps (PDF/KMZ), and development regulations via the provincial land use planning registry.',
    url: 'https://www.gov.nl.ca/mca/registry/community/corner-brook/',
    tags: ['corner brook', 'newfoundland', 'zoning', 'municipal plan', 'kmz'],
  },
  {
    name: 'Nova Scotia Open Data Portal',
    level: 'Provincial',
    jurisdiction: 'Nova Scotia',
    category: 'open-data',
    type: 'Provincial open data portal',
    description:
      'Government of Nova Scotia open data catalogue — 500+ datasets including geospatial layers exportable for GIS and web mapping.',
    url: 'https://data.novascotia.ca/',
    tags: ['nova scotia', 'open data', 'provincial', 'socrata'],
  },
  {
    name: 'Prince Edward Island Open Data Portal',
    level: 'Provincial',
    jurisdiction: 'Prince Edward Island',
    category: 'open-data',
    type: 'Provincial open data portal',
    description:
      'PEI government open data — schools, environment, health, and community datasets downloadable in CSV and other formats.',
    url: 'https://data.princeedwardisland.ca/',
    tags: ['pei', 'prince edward island', 'open data', 'provincial'],
  },

  // --- Atlantic: council / depth ---
  {
    name: 'Moncton Development Applications Map',
    level: 'Municipal',
    jurisdiction: 'Moncton',
    category: 'planning-zoning',
    type: 'Development applications map',
    description:
      'Interactive ArcGIS web map of Moncton development applications and planning layers for public review.',
    url: 'https://moncton.maps.arcgis.com/apps/webappviewer/index.html?id=c402455fb01445c7aefd359d59f11b63',
    tags: ['moncton', 'development applications', 'planning', 'arcgis'],
  },
  {
    name: 'CBRM Planning GIS Services',
    level: 'Municipal',
    jurisdiction: 'Cape Breton',
    category: 'planning-zoning',
    type: 'Planning map services',
    description:
      'CBRM planning department GIS map services — zoning and land-use layers via ArcGIS REST for Cape Breton Regional Municipality.',
    url: 'https://gis2.cbrm.ns.ca/server/rest/services/Planning',
    tags: ['cape breton', 'planning', 'zoning', 'arcgis'],
  },
  {
    name: 'Saguenay Réseau routier — Données Québec',
    level: 'Municipal',
    jurisdiction: 'Saguenay',
    category: 'transport-roads',
    type: 'Road network dataset',
    description:
      'Saguenay municipal road centreline network — CSV, GeoJSON, and shapefile download from Données Québec.',
    url: 'https://www.donneesquebec.ca/recherche/dataset/?organization=ville-de-saguenay&q=r%C3%A9seau+routier',
    tags: ['saguenay', 'roads', 'transport', 'open data', 'geojson'],
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
  console.log(`Batch 5 — Added: ${added}, Skipped duplicates: ${skipped}, Total: ${existing.length}`);
}

main();
