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
  },
  {
    "name": "Burlington — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Burlington",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Burlington — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://burlington.openbook.questica.com/",
    "tags": [
      "budget",
      "burlington",
      "capital",
      "finance",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Cambridge — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Cambridge",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Cambridge — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://cambridge.openbook.questica.com/",
    "tags": [
      "budget",
      "cambridge",
      "capital",
      "finance",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Coquitlam — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Coquitlam",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Coquitlam — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://coquitlam.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "coquitlam",
      "finance",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Grey County — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Grey County",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Grey County — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://greycounty.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "finance",
      "greycounty",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Haldimand County — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Haldimand County",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Haldimand County — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://haldimandcounty.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "finance",
      "haldimandcounty",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Hamilton — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Hamilton",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Hamilton — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://hamilton.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "finance",
      "hamilton",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Kitchener — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Kitchener",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Kitchener — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://kitchener.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "finance",
      "kitchener",
      "open book",
      "operating",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Orillia — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Orillia",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Orillia — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://orillia.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "finance",
      "open book",
      "operating",
      "orillia",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Oshawa — OpenBook Budget Explorer (Questica)",
    "level": "Municipal",
    "jurisdiction": "Oshawa",
    "category": "budget",
    "type": "Budget transparency portal",
    "description": "Interactive Questica OpenBook budget transparency portal for Oshawa — explore operating and capital budgets by department, project, and year, with drill-down visuals and CSV export. Verified live (direct 200, city-named tenant; wildcard placeholders redirect and were rejected).",
    "url": "https://oshawa.openbook.questica.com/",
    "tags": [
      "budget",
      "capital",
      "finance",
      "open book",
      "operating",
      "oshawa",
      "questica",
      "verified"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Airdrie — Airdrie Land Use Districts",
    "level": "Municipal",
    "jurisdiction": "Airdrie",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Airdrie Land Use Districts — Feature Service on the Airdrie open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-airdrie.opendata.arcgis.com/datasets/5dd3c1196f4248e5ac218674c7513a5d/about",
    "tags": [
      "airdrie",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Brampton — Current Zoning Final",
    "level": "Municipal",
    "jurisdiction": "Brampton",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Current Zoning Final — Feature Service on the Brampton open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://brampton.opendata.arcgis.com/datasets/227cea1df40a452d80211352510522e7/about",
    "tags": [
      "brampton",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Burlington — Zoning ByLaw",
    "level": "Municipal",
    "jurisdiction": "Burlington",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning ByLaw — Feature Service on the Burlington open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://navburl-burlington.opendata.arcgis.com/datasets/41ddbd93d8d14293b4608ac9a7fc1bd4/about",
    "tags": [
      "burlington",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Canmore — Canmore_Land_Use_Districts",
    "level": "Municipal",
    "jurisdiction": "Canmore",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Canmore_Land_Use_Districts — Feature Service on the Canmore open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://opendata-canmore.opendata.arcgis.com/datasets/a0117c599e95492e97d67a8a26e60e13/about",
    "tags": [
      "canmore",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Courtenay — Zoning",
    "level": "Municipal",
    "jurisdiction": "Courtenay",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning — Feature Service on the Courtenay open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-courtenay.opendata.arcgis.com/datasets/bd116205a44543848799b311f5740098/about",
    "tags": [
      "courtenay",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Delta — Building Permits",
    "level": "Municipal",
    "jurisdiction": "Delta",
    "category": "planning-zoning",
    "type": "Building permits dataset",
    "description": "Building Permits — Feature Service on the Delta open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://opendata-deltabc.hub.arcgis.com/datasets/11be3157551143288da19b4a3f14b301/about",
    "tags": [
      "delta",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Halifax — Zoning Boundaries",
    "level": "Municipal",
    "jurisdiction": "Halifax",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning Boundaries — Feature Service on the Halifax open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-hrm.hub.arcgis.com/datasets/11adc4e1e52a45b5b9f6bc63ef6e0883/about",
    "tags": [
      "halifax",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Huron County — Planning_Zoning",
    "level": "Municipal",
    "jurisdiction": "Huron County",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Planning_Zoning — Feature Service on the Huron County open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-huron.opendata.arcgis.com/datasets/6b395e0a540043b5a1780618ea8b5d22/about",
    "tags": [
      "huroncounty",
      "land use",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Langley — Zoning",
    "level": "Municipal",
    "jurisdiction": "Langley",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning — Feature Service on the Langley open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-tol.opendata.arcgis.com/datasets/053600a55cd24e91aea299efda1fba4b/about",
    "tags": [
      "land use",
      "langley",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Milton — Rural Zoning (By-law 144-2003)",
    "level": "Municipal",
    "jurisdiction": "Milton",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Rural Zoning (By-law 144-2003) — Feature Service on the Milton open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://discover-milton.hub.arcgis.com/datasets/48a3f0c2ddb143acb2d8b36d99606f4e/about",
    "tags": [
      "land use",
      "milton",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Oakville — Zoning By Law 2014-014",
    "level": "Municipal",
    "jurisdiction": "Oakville",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning By Law 2014-014 — Feature Service on the Oakville open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://portal-exploreoakville.opendata.arcgis.com/datasets/54d77fc2abd34bc694b4ea1e57e2fa1c/about",
    "tags": [
      "land use",
      "oakville",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Oshawa — Oshawa Zoning",
    "level": "Municipal",
    "jurisdiction": "Oshawa",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Oshawa Zoning — Feature Service on the Oshawa open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://city-oshawa.opendata.arcgis.com/datasets/dee9180066de48c684a34ab6c35ac62a/about",
    "tags": [
      "land use",
      "oshawa",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Peterborough — Zoning",
    "level": "Municipal",
    "jurisdiction": "Peterborough",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning — Feature Service on the Peterborough open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-ptbo.opendata.arcgis.com/datasets/05dd127dbd1a4a3b83566d0fde6b576b/about",
    "tags": [
      "land use",
      "peterborough",
      "planning",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Prince George — Zoning Bylaw 7850 Class",
    "level": "Municipal",
    "jurisdiction": "Prince George",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning Bylaw 7850 Class — Feature Service on the Prince George open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://data-cityofpg.opendata.arcgis.com/datasets/88d25f411d9647e692ddf4da01fa1b8a/about",
    "tags": [
      "land use",
      "planning",
      "princegeorge",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Rouyn-Noranda — Plan de zonage",
    "level": "Municipal",
    "jurisdiction": "Rouyn-Noranda",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Plan de zonage — Feature Service on the Rouyn-Noranda open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://donnees-ouvertes-vrn.opendata.arcgis.com/datasets/4a69c2484a2540de9f9eb58b908d4d0f/about",
    "tags": [
      "land use",
      "planning",
      "rouyn-noranda",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Summerside — Zoning View",
    "level": "Municipal",
    "jurisdiction": "Summerside",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning View — Feature Service on the Summerside open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://summerside.opendata.arcgis.com/datasets/f6357d6615734a7cb5d895b159eccdc5/about",
    "tags": [
      "land use",
      "planning",
      "summerside",
      "verified",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Whistler — Zoning",
    "level": "Municipal",
    "jurisdiction": "Whistler",
    "category": "planning-zoning",
    "type": "Zoning dataset",
    "description": "Zoning — Feature Service on the Whistler open data hub (CSV, GeoJSON, Shapefile export where available; queryable via REST API). Verified live via the hub OGC items API.",
    "url": "https://portal-rmow.opendata.arcgis.com/datasets/c2e167bd30f44bd0a95e9d91c37aa65f/about",
    "tags": [
      "land use",
      "planning",
      "verified",
      "whistler",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  }
];
