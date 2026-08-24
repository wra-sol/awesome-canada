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
  },
  {
    "name": "Bank of Canada — Valet API",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "finance",
    "type": "API",
    "description": "Free REST API for Bank of Canada datasets: policy interest rate, exchange rates, CPI, money markets, and macro indicators with JSON/CSV output and interactive series builder.",
    "url": "https://www.bankofcanada.ca/valet/",
    "tags": [
      "api",
      "bank of canada",
      "cpi",
      "exchange rates",
      "interest rates"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Office of the Commissioner of Lobbying — Lobbyist Registry",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "lobbyist",
    "type": "Lobbyist registry",
    "description": "Searchable federal registry of in-house and consultant lobbyists: who is lobbying which officials, on what subject, for whom, and when. Note: site blocks automated requests; browse manually.",
    "url": "https://lobbycanada.gc.ca/",
    "tags": [
      "federal",
      "lobbying",
      "registry",
      "transparency"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Parliamentary Budget Officer — Reports & Costings",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "budget",
    "type": "Budget watchdog",
    "description": "Independent budget analysis for Parliament: election platform costings, fiscal projections, departmental spending analyses, and custom costing requests. Complements the absence of federal line-by-line budget data tools.",
    "url": "https://www.pbo-dpb.gc.ca/",
    "tags": [
      "budget",
      "costings",
      "fiscal",
      "parliament",
      "pbo"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "LEGISinfo — Federal Bill Tracker",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "council",
    "type": "Legislation tracker",
    "description": "Tracks every federal bill through Parliament: full text at each stage, sponsor, legislative summaries, votes, coming-into-force data, with JSON/XML/RSS exports back to the 35th Parliament (1994).",
    "url": "https://www.parl.ca/legisinfo/en/bills",
    "tags": [
      "bills",
      "legislation",
      "open data",
      "parliament",
      "rss"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Elections Canada — Political Contributions Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "elections",
    "type": "Contributions database",
    "description": "Searchable database of contributions to federal political parties, riding associations, and candidates — donor names, amounts, and dates, as reviewed by Elections Canada.",
    "url": "https://www.elections.ca/wpapps/WPF/EN/CCS/Index?returntype=1",
    "tags": [
      "campaign finance",
      "contributions",
      "donors",
      "elections"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Elections Canada — Political Financing Open Data",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "elections",
    "type": "Dataset bundle",
    "description": "Bulk CSV downloads of political financing data dating back to 1993: reviewed and as-filed contribution details for all political entities, plus financial returns.",
    "url": "https://www.elections.ca/content.aspx?section=fin&dir=oda&document=index&lang=e",
    "tags": [
      "bulk download",
      "campaign finance",
      "csv",
      "elections"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Elections Canada — Political Entity Registry",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "elections",
    "type": "Registry",
    "description": "Current and historical registry of federal political parties, riding associations, candidates, and third parties registered with Elections Canada.",
    "url": "https://www.elections.ca/WPAPPS/WPR/EN",
    "tags": [
      "elections",
      "political parties",
      "registry",
      "third parties"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Canadian Hydrographic Service — Tides & Water Levels Archive",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Monitoring data",
    "description": "Historical, downloadable observed water-level data from 968 CHS gauges across Canada, plus real-time observations and predictions via the IWLS API, benchmarks, and Great Lakes monthly means since 1918.",
    "url": "https://www.tides.gc.ca/en/tides-and-water-levels-data-archive",
    "tags": [
      "coastal",
      "great lakes",
      "hydrography",
      "tides",
      "water levels"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Health Canada — Recalls & Safety Alerts",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Alerts database",
    "description": "Searchable national database of consumer product, food, and health product recalls and safety alerts, filterable by category, date, and brand.",
    "url": "https://healthycanadians.gc.ca/recall-alert-rappel-avis/index-eng.php",
    "tags": [
      "consumer products",
      "food safety",
      "health",
      "recalls"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Impact Assessment Agency — Canadian Impact Assessment Registry",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Project registry",
    "description": "Official registry of federally designated projects under the Impact Assessment Act: proposals, assessments in progress, conditions, and decisions, searchable by region, type, and status.",
    "url": "https://iaac-aeic.gc.ca/050/evaluations",
    "tags": [
      "environment",
      "impact assessment",
      "major projects",
      "regulatory"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Canadian Register of Historic Places",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Heritage register",
    "description": "Pan-Canadian register (federal-provincial partnership) documenting 12,000+ recognized historic places: federal heritage designations, provincial registers, and municipal landmarks with statements of significance.",
    "url": "https://www.historicplaces.ca/en/pages/1_home.aspx",
    "tags": [
      "conservation",
      "heritage",
      "historic places",
      "register"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "CRTC — Internet & Broadband Coverage",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Coverage data",
    "description": "Regulatory data and maps on Canadian broadband availability, speeds, and service quality — the basis for CRTC connectivity targets and funding decisions.",
    "url": "https://crtc.gc.ca/eng/internet/internet.htm",
    "tags": [
      "broadband",
      "coverage",
      "crtc",
      "internet",
      "telecom"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Canada's Business Registries (ISED)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Business registry search",
    "description": "Free cross-provincial business lookup aggregating the official registries of AB, BC, MB, NS, ON, QC, SK, and Corporations Canada — one search across jurisdictions.",
    "url": "https://ised-isde.canada.ca/cbr-rec/",
    "tags": [
      "business registry",
      "corporations",
      "cross-provincial",
      "search"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Ontario — Environmental Registry (ERO)",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "environment",
    "type": "Decision registry",
    "description": "Official public notice and comment registry for Ontario environmentally significant proposals: policies, permits (incl. water takings), and regulations open for comment, with ministry decisions posted.",
    "url": "https://ero.ontario.ca/",
    "tags": [
      "environment",
      "permits",
      "public comments",
      "regulation"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Ontario Land Tribunal — Decisions",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "planning-zoning",
    "type": "Tribunal decisions",
    "description": "Full-text decisions of the OLT and predecessors (OMB, LPAT, ERT) on land-use planning appeals, zoning by-laws, official plan amendments, and heritage disputes; searchable by municipality and keyword. Case status portal covers active files.",
    "url": "https://olt.gov.on.ca/decisions/",
    "tags": [
      "decisions",
      "olt",
      "omb",
      "planning appeals",
      "zoning"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Ontario — Political Contributions Search",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "elections",
    "type": "Contributions database",
    "description": "Searchable register of provincial political contributions (414,000+ records) — donors to Ontario parties, candidates, and associations with downloadable results.",
    "url": "https://finances.elections.on.ca/en/contributions",
    "tags": [
      "campaign finance",
      "donors",
      "elections",
      "ontario"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "British Columbia — Political Contributions Search (FRPC)",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "elections",
    "type": "Contributions database",
    "description": "Elections BC's Financial Reports and Political Contributions system: combined contribution searches over $250 by contributor class (individual, corporation, union) with bulk download options.",
    "url": "https://contributions.electionsbc.gov.bc.ca/pcs/sa1asearch.aspx",
    "tags": [
      "bc",
      "campaign finance",
      "donors",
      "elections"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Saskatchewan — Contribution Search Tool",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "elections",
    "type": "Contributions database",
    "description": "Elections Saskatchewan's searchable political contribution tool with per-party, per-year filtering and downloadable fiscal-period returns from 2016 onward.",
    "url": "https://www.elections.sk.ca/reports-data/candidate-political-party-finances/contribution-search-tool/",
    "tags": [
      "campaign finance",
      "donors",
      "elections",
      "saskatchewan"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "GeoNova — Nova Scotia Geospatial Data",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "open-data",
    "type": "Geospatial portal",
    "description": "Nova Scotia's provincial geospatial data clearinghouse: property-related fabric, topographic layers, imagery, and administrative boundaries with WMS/WFS services and downloads.",
    "url": "https://geonova.novascotia.ca/",
    "tags": [
      "geospatial",
      "gis",
      "maps",
      "nova scotia"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Ontario — OnLand Property Records",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "housing",
    "type": "Land registry",
    "description": "Ontario's official electronic land registration system: title searches, parcel registers, and property imagery for land titles and registry act properties across the province.",
    "url": "https://www.onland.ca/",
    "tags": [
      "land titles",
      "ontario",
      "property records",
      "title search"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Québec — Registre des entreprises",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "business",
    "type": "Business registry",
    "description": "Quebec's official enterprise registry: search corporations, sole proprietorships, and nonprofits by name or NEQ number for status, directors, and filings. Note: site blocks automated requests; browse manually.",
    "url": "https://www.registreentreprises.gouv.qc.ca/",
    "tags": [
      "corporations",
      "entreprises",
      "quebec",
      "registry"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "ISED Spectrum Management System",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Licence database",
    "description": "Public access to Canada's radio spectrum licensing: search radio licences by frequency, location, or licensee, browse spectrum auction results, and download site data for every licensed transmitter in the country.",
    "url": "https://sms-sgs.ic.gc.ca/eic/site/sms-sgs-prod.nsf/eng/home",
    "tags": [
      "ised",
      "radio licences",
      "spectrum",
      "telecom"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Canada's Connectivity Strategy — Project Map & Reports",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Program data",
    "description": "Federal broadband program transparency: funded connectivity projects, target speeds, households connected, and progress reporting toward universal rural internet.",
    "url": "https://ised-isde.canada.ca/site/canada-connectivity-strategy/en",
    "tags": [
      "broadband",
      "connectivity",
      "funding",
      "rural internet"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Canadian Virtual War Memorial",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Memorial registry",
    "description": "Searchable registry of Canada's war dead — over 120,000 records with photographs, service numbers, units, and burial locations, maintained by Veterans Affairs. Community photo submissions accepted.",
    "url": "https://www.veterans.gc.ca/eng/remembrance/memorials/canadian-virtual-war-memorial",
    "tags": [
      "genealogy",
      "military history",
      "remembrance",
      "war memorial"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Meteorological Service of Canada — GeoMet Open Data API",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "weather",
    "type": "API",
    "description": "Open geospatial API serving Environment Canada weather radar, satellite layers, air quality, and climate archives as OGC standards (WMS/WFS) — free for apps, maps, and analysis without key registration.",
    "url": "https://api.weather.gc.ca/",
    "tags": [
      "api",
      "ogc",
      "open data",
      "radar",
      "weather"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "MSC Datamart — Raw Weather Data Server",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "weather",
    "type": "Bulk data server",
    "description": "Environment Canada's bulk distribution server: raw observations, forecasts, radar imagery, lightning, and hydrometric bulletins across hundreds of directories — the firehose behind weather.gc.ca.",
    "url": "https://dd.weather.gc.ca/",
    "tags": [
      "bulk download",
      "forecasts",
      "meteorology",
      "observations"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Water Survey of Canada — Real-time Hydrometric Data",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "environment",
    "type": "Monitoring network",
    "description": "Live and historical water level and flow data for ~2,800 hydrometric stations nationwide, with real-time map views, CSV downloads, and station metadata.",
    "url": "https://wateroffice.ec.gc.ca/",
    "tags": [
      "hydrology",
      "monitoring",
      "river flow",
      "water levels"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "BC River Forecast Centre",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "weather",
    "type": "Flood forecasting",
    "description": "Snowpack bulletins (84 snow courses + 60 pillows), freshet forecasts, 7-day streamflow hazard outlooks, and live flood warnings/advisories for BC rivers — with model forecast maps (CLEVER, COFFEE, ELF).",
    "url": "https://www2.gov.bc.ca/gov/content/environment/air-land-water/water/drought-flooding-dikes-dams/river-forecast-centre",
    "tags": [
      "british columbia",
      "flood",
      "freshet",
      "snowpack",
      "streamflow"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Alberta Rivers — Flood & Drought Forecasting",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "weather",
    "type": "Forecasting portal",
    "description": "Provincial river forecasting platform: flood advisories, water supply outlooks, station data, and basin conditions for Alberta's major river systems.",
    "url": "https://rivers.alberta.ca/",
    "tags": [
      "alberta",
      "drought",
      "flood",
      "river basins"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "GeologyOntario — Ontario Geological Survey Database",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "science",
    "type": "Research database",
    "description": "Massive geoscience archive: bedrock and surficial mapping, drill core logs, assessment report files, and mineral occurrence databases for Ontario — free downloads spanning a century of survey work.",
    "url": "https://www.geologyontario.mndm.gov.on.ca/",
    "tags": [
      "geology",
      "mapping",
      "minerals",
      "ontario",
      "research"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "SIGEOM — Québec Geoscientific Data",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "science",
    "type": "Research database",
    "description": "Québec's mineral deposit, drilling, geochemistry, and geological map database — full government assessment files downloadable since the 1800s; the backbone of northern mining exploration research.",
    "url": "https://sigeom.mines.gouv.qc.ca/",
    "tags": [
      "geology",
      "geoscience",
      "mining",
      "quebec"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Alberta Geological Survey — AGS Data & Maps",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "science",
    "type": "Research database",
    "description": "Geological mapping, groundwater, landslide, and energy-resource geology datasets for Alberta, including interactive maps and open-file reports.",
    "url": "https://ags.aer.ca/",
    "tags": [
      "alberta",
      "energy",
      "geology",
      "groundwater"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "BC Geological Survey",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "science",
    "type": "Research database",
    "description": "Provincial geoscience publications, mineral occurrence database (MINFILE), assessment reports, and interactive MapPlace mapping for British Columbia's rocks and resources.",
    "url": "https://www2.gov.bc.ca/gov/content/industry/mineral-exploration-mining/british-columbia-geological-survey",
    "tags": [
      "bc",
      "geology",
      "mapping",
      "minfile",
      "mining"
    ],
    "dateAdded": "2026-08-24"
  },
  {
    "name": "Répertoire du patrimoine culturel du Québec",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "heritage",
    "type": "Heritage register",
    "description": "Official register of Quebec's cultural heritage: classified and recognized buildings, archaeological sites, heritage districts, and intangible heritage, with legal status maps per municipality.",
    "url": "https://www.patrimoine-culturel.gouv.qc.ca/rpcq/",
    "tags": [
      "bilingual",
      "heritage register",
      "patrimoine",
      "quebec"
    ],
    "dateAdded": "2026-08-24"
  }
];
