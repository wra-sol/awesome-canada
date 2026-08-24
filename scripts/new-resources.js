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
    "name": "Saint John — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Saint John",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Saint John with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-saintjohn.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "saintjohn"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "St. John's Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "St. John's",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for St. John's with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owners at stjohns.ca, ~200 datasets. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://stjohns.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "stjohns",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Selkirk Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Selkirk",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Selkirk with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — City of Selkirk staff accounts, 3,300+ datasets. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://selkirk.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "selkirk",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Thompson Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Thompson",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Thompson with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — City of Thompson accounts (cot-*), 16 datasets incl. Thompson Utilities layers. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://thompson.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "thompson",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Shawinigan Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Shawinigan",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Shawinigan with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — French-language municipal layers incl. waste collection routes and overnight parking bans, 12 datasets. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://shawinigan.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "shawinigan",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Summerside Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Summerside",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Summerside with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner Cityofsside, 25 datasets incl. the City of Summerside Electrical Circuit Map. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://summerside.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "summerside",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Bathurst Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Bathurst",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Bathurst with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — bilingual municipal GIS layers incl. Daly Point trails, Nepisiguit trail, pothole reports, and surplus property maps, 155 datasets. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://bathurst.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "bathurst",
      "datasets",
      "gis",
      "open data",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Woodstock — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Woodstock",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe portal for Woodstock, Ontario council and committee meetings, including the Woodstock Accessibility Advisory Committee and Woodstock Hydro Fund Advisory Committee, with downloadable PDF agendas and minutes.",
    "url": "https://pub-woodstock.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "woodstock"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Vaughan — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Vaughan",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Vaughan with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-vaughan.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "vaughan"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Brampton Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Brampton",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Brampton with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner BramptonMaps, ~2,700 datasets incl. ward boundaries. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://brampton.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "brampton",
      "datasets",
      "gis",
      "open data",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Caledon — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Caledon",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Caledon with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-caledon.escribemeetings.com/",
    "tags": [
      "agendas",
      "caledon",
      "council",
      "escribe",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Chilliwack — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Chilliwack",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Chilliwack with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-chilliwack.escribemeetings.com/",
    "tags": [
      "agendas",
      "chilliwack",
      "council",
      "escribe",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Clarington — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Clarington",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Clarington with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-clarington.escribemeetings.com/",
    "tags": [
      "agendas",
      "clarington",
      "council",
      "escribe",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Haldimand County — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Haldimand County",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Haldimand County with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-haldimandcounty.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "haldimandcounty",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Greater Sudbury — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Greater Sudbury",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Greater Sudbury with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-greatersudbury.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "greatersudbury",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Guelph — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Guelph",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Guelph with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-guelph.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "guelph",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Longueuil Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Longueuil",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Longueuil with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner VilleLongueuil, ~890 datasets incl. 311 container tracking. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://longueuil.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "longueuil",
      "open data",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Markham — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Markham",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Markham with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-markham.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "markham",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Milton — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Milton",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Milton with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-milton.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "milton",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Norfolk County — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Norfolk County",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Norfolk County with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-norfolkcounty.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "norfolkcounty"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Lloydminster — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Lloydminster",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Lloydminster with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-lloydminster.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "lloydminster",
      "minutes"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Prince Albert Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Prince Albert",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Prince Albert with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner princealbert, municipal boundary and zoning layers. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://princealbert.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "princealbert",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Oakville — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Oakville",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Oakville with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-oakville.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "oakville"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Repentigny Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Repentigny",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Repentigny with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner georepentigny, ~430 datasets. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://repentigny.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "repentigny",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "North Bay — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "North Bay",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for North Bay with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-northbay.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "northbay"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Rimouski Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Rimouski",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Rimouski with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner Geo_Rimouski, 129 datasets incl. the five-year development plan and boil-water notices. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://rimouski.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "open data",
      "rimouski",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Okotoks — Council Agendas & Minutes (eScribe)",
    "level": "Municipal",
    "jurisdiction": "Okotoks",
    "category": "council",
    "type": "Council portal",
    "description": "Searchable eScribe meeting portal for Okotoks with downloadable PDF agendas, minutes, and supporting documents for regular, special, and committee meetings. Verified live. Discovered via the documented pub-[city].escribemeetings.com pattern and verified live.",
    "url": "https://pub-okotoks.escribemeetings.com/",
    "tags": [
      "agendas",
      "council",
      "escribe",
      "minutes",
      "okotoks"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Okotoks Open Data Portal (ArcGIS Hub)",
    "level": "Municipal",
    "jurisdiction": "Okotoks",
    "category": "open-data",
    "type": "Open data hub",
    "description": "ArcGIS Hub open data portal for Okotoks with downloadable GIS datasets (CSV, GeoJSON, Shapefile) and REST/OGC API access — owner VR1_okotoks, 150 datasets incl. address points and waste collection zones. Verified live via the OGC items API returning HTTP 200.",
    "url": "https://okotoks.opendata.arcgis.com/",
    "tags": [
      "arcgis hub",
      "datasets",
      "gis",
      "okotoks",
      "open data",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Orillia — Council Agendas & Minutes (CivicWeb)",
    "level": "Municipal",
    "jurisdiction": "Orillia",
    "category": "council",
    "type": "Council portal",
    "description": "CivicWeb document portal for Orillia council and committee meetings with a meeting calendar and downloadable PDF agendas and minutes. Verified live. Discovered via the documented [city].civicweb.net pattern and verified live.",
    "url": "https://orillia.civicweb.net/Portal/",
    "tags": [
      "agendas",
      "civicweb",
      "council",
      "minutes",
      "orillia"
    ],
    "dateAdded": "2026-08-24"
  }
];
