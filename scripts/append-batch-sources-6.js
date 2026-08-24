#!/usr/bin/env node
/**
 * Sixth batch: big-city tools (crime maps, development trackers, tax lookups),
 * provincial registries and wait times, military/intelligence and oversight,
 * transport-safety and regulatory databases, Indigenous data, elections and
 * political finance, genealogy/heritage, and research infrastructure.
 * All URLs verified live at add time.
 */

const fs = require('fs');
const path = require('path');
const { CATEGORY_IDS } = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

const BATCH = [
  {
    "name": "Vancouver — GeoDASH Crime Map",
    "level": "Municipal",
    "jurisdiction": "Vancouver",
    "category": "safety",
    "type": "Interactive crime map",
    "description": "Map crimes reported to Vancouver Police, filtering by neighbourhood, crime type and date range, with statistical reports updated every 24 hours.",
    "url": "https://geodash.vpd.ca/",
    "tags": [
      "crime",
      "police",
      "map",
      "statistics",
      "vancouver"
    ]
  },
  {
    "name": "Edmonton — Neighbourhood Crime Mapping",
    "level": "Municipal",
    "jurisdiction": "Edmonton",
    "category": "safety",
    "type": "Interactive crime map",
    "description": "Click any Edmonton neighbourhood to plot eight crime types (assault, break and enter, vehicle theft, more) on a map for any date range up to 60 days.",
    "url": "https://www.edmontonpolice.ca/CrimeFiles/NeighbourhoodCrimeMapping",
    "tags": [
      "crime",
      "police",
      "map",
      "neighbourhood",
      "edmonton"
    ]
  },
  {
    "name": "Calgary — Police Community Safety Dashboard",
    "level": "Municipal",
    "jurisdiction": "Calgary",
    "category": "safety",
    "type": "Crime statistics dashboard",
    "description": "Explore Calgary crime and disorder trends back to 2018 in an interactive dashboard filterable by community, ward or police district, updated monthly.",
    "url": "https://www.calgarypolice.ca/transparency-and-accountability/crime-statistics.html",
    "tags": [
      "crime",
      "police",
      "dashboard",
      "statistics",
      "calgary"
    ]
  },
  {
    "name": "Ottawa — Police Community Safety Data Portal",
    "level": "Municipal",
    "jurisdiction": "Ottawa",
    "category": "safety",
    "type": "Crime maps and open data",
    "description": "Browse Ottawa Police crime maps (year-to-date and historical), shootings, overdose calls by neighbourhood, and download 340k+ criminal offence records.",
    "url": "https://data.ottawapolice.ca/",
    "tags": [
      "crime",
      "police",
      "open data",
      "map",
      "ottawa"
    ]
  },
  {
    "name": "Halifax — Police Crime Mapping",
    "level": "Municipal",
    "jurisdiction": "Halifax",
    "category": "safety",
    "type": "Interactive crime map",
    "description": "See recent Halifax crimes on a map updated daily — search five crime types by street name or community for the last day, four days or week.",
    "url": "https://www.halifax.ca/safety-security/police/crime-mapping",
    "tags": [
      "crime",
      "police",
      "map",
      "halifax"
    ]
  },
  {
    "name": "Peel Region — Police Community Safety Data Portal",
    "level": "Municipal",
    "jurisdiction": "Peel",
    "category": "safety",
    "type": "Crime map and open data portal",
    "description": "Map 36 months of crime in Mississauga and Brampton by type, date, street and ward, with hotspot layers, and download Peel police datasets.",
    "url": "https://peel-regional-police-community-safety-data-portal-peelpolice.hub.arcgis.com/",
    "tags": [
      "crime",
      "police",
      "map",
      "mississauga",
      "brampton",
      "open data"
    ]
  },
  {
    "name": "York Region — Police Community Safety Data Portal",
    "level": "Municipal",
    "jurisdiction": "York Region",
    "category": "safety",
    "type": "Crime map and dashboards",
    "description": "Track crime in Markham, Vaughan, Richmond Hill and the rest of York Region with an interactive safety map, auto-theft trend dashboard and stats by municipality.",
    "url": "https://community-safety-portal-datayrp.hub.arcgis.com/",
    "tags": [
      "crime",
      "police",
      "map",
      "dashboard",
      "york region"
    ]
  },
  {
    "name": "Saskatoon — Police Crime Map",
    "level": "Municipal",
    "jurisdiction": "Saskatoon",
    "category": "safety",
    "type": "Interactive crime map",
    "description": "View approximate locations of crimes and traffic collisions reported to Saskatoon Police on an interactive city map, by neighbourhood or citywide.",
    "url": "https://map.saskatoonpolice.ca/",
    "tags": [
      "crime",
      "police",
      "map",
      "collisions",
      "saskatoon"
    ]
  },
  {
    "name": "Hamilton — Police Online Crime Mapping Tool",
    "level": "Municipal",
    "jurisdiction": "Hamilton",
    "category": "safety",
    "type": "Interactive crime map",
    "description": "Search where break-ins, robberies, vehicle thefts and homicides occurred in Hamilton over the past 60 days, with hotspot maps and email crime alerts.",
    "url": "https://hamiltonpolice.on.ca/how-to/online-crime-mapping-tool",
    "tags": [
      "crime",
      "police",
      "map",
      "alerts",
      "hamilton"
    ]
  },
  {
    "name": "Montréal — Vue sur la sécurité publique",
    "level": "Municipal",
    "jurisdiction": "Montreal",
    "category": "safety",
    "type": "Crime data visualization",
    "description": "Visualize SPVM police data on Montreal crime since 2015 through an interactive map and charts, by borough, category and time period.",
    "url": "https://ville.montreal.qc.ca/vuesurlasecuritepublique/",
    "tags": [
      "crime",
      "police",
      "spvm",
      "map",
      "montreal"
    ]
  },
  {
    "name": "Montréal — Vue sur les contrats",
    "level": "Municipal",
    "jurisdiction": "Montreal",
    "category": "budget",
    "type": "Contract visualization tool",
    "description": "Search and visualize every contract and subsidy granted by the City of Montreal since 2012 — filter by supplier, department, amount and year, with an API.",
    "url": "https://ville.montreal.qc.ca/vuesurlescontrats/",
    "tags": [
      "contracts",
      "procurement",
      "transparency",
      "api",
      "montreal"
    ]
  },
  {
    "name": "Calgary — Development Map (DMap)",
    "level": "Municipal",
    "jurisdiction": "Calgary",
    "category": "planning-zoning",
    "type": "Development application map",
    "description": "Search Calgary development permits and land-use redesignations by address, permit number or community, view proposals in 3D, and comment on applications.",
    "url": "https://dmap.calgary.ca/",
    "tags": [
      "development",
      "permits",
      "planning",
      "map",
      "calgary"
    ]
  },
  {
    "name": "Toronto — T.O. INview Infrastructure Map",
    "level": "Municipal",
    "jurisdiction": "Toronto",
    "category": "transport-roads",
    "type": "Construction projects map",
    "description": "Map planned and current construction in Toronto's right of way — road, sewer, water, utility, TTC and Metrolinx projects — searchable by year, location and type.",
    "url": "https://map.toronto.ca/toinview/",
    "tags": [
      "construction",
      "infrastructure",
      "capital projects",
      "map",
      "toronto"
    ]
  },
  {
    "name": "Toronto — Property Tax Lookup",
    "level": "Municipal",
    "jurisdiction": "Toronto",
    "category": "taxes",
    "type": "Property tax account tool",
    "description": "Check your Toronto property tax balance, payment history, instalment due dates and PDF bills online using the roll number and customer number from your bill.",
    "url": "https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax/property-tax-lookup/",
    "tags": [
      "property tax",
      "lookup",
      "billing",
      "toronto"
    ]
  },
  {
    "name": "Calgary — Assessment Search (myTax)",
    "level": "Municipal",
    "jurisdiction": "Calgary",
    "category": "taxes",
    "type": "Property assessment search",
    "description": "Look up City of Calgary property assessments by address or roll number, review value history, and access detailed assessment and tax tools via secure login.",
    "url": "https://assessmentsearch.calgary.ca/",
    "tags": [
      "assessment",
      "property tax",
      "search",
      "calgary"
    ]
  },
  {
    "name": "Winnipeg — Property Assessment Search",
    "level": "Municipal",
    "jurisdiction": "Winnipeg",
    "category": "taxes",
    "type": "Property assessment search",
    "description": "Search assessed values and property details for any address in Winnipeg through the Assessment and Taxation Department's public online search.",
    "url": "https://www.winnipeg.ca/city-governance/taxes/property-assessment/property-assessment-search",
    "tags": [
      "assessment",
      "property tax",
      "search",
      "winnipeg"
    ]
  },
  {
    "name": "Edmonton — MyProperty",
    "level": "Municipal",
    "jurisdiction": "Edmonton",
    "category": "taxes",
    "type": "Property assessment and tax portal",
    "description": "See what makes up your Edmonton property's assessed value, compare it with similar properties in your neighbourhood, and view your tax account details.",
    "url": "https://myproperty.edmonton.ca/",
    "tags": [
      "assessment",
      "property tax",
      "portal",
      "edmonton"
    ]
  },
  {
    "name": "Surrey — COSMOS Online Mapping System",
    "level": "Municipal",
    "jurisdiction": "Surrey",
    "category": "open-data",
    "type": "Interactive GIS map",
    "description": "Query and print 200+ map layers for Surrey — zoning, utilities, parks, underground infrastructure near your property, and aerial photos back to 1949.",
    "url": "https://cosmos.surrey.ca/",
    "tags": [
      "gis",
      "map",
      "zoning",
      "aerial photos",
      "surrey"
    ]
  },
  {
    "name": "Toronto — SwimSafe Beach Water Quality",
    "level": "Municipal",
    "jurisdiction": "Toronto",
    "category": "health",
    "type": "Beach water quality tracker",
    "description": "Check daily E. coli test results and swimming advisories for Toronto's supervised beaches, plus inspection results for public pools, wading pools and splash pads.",
    "url": "https://www.toronto.ca/community-people/health-wellness-care/health-inspections-monitoring/swimsafe/",
    "tags": [
      "beaches",
      "water quality",
      "public health",
      "swimming",
      "toronto"
    ]
  },
  {
    "name": "Vancouver — Shape Your City Rezoning Applications",
    "level": "Municipal",
    "jurisdiction": "Vancouver",
    "category": "planning-zoning",
    "type": "Rezoning application tracker",
    "description": "Browse active and archived Vancouver rezoning and development applications on a map, read application documents, and submit comments on proposals.",
    "url": "https://www.shapeyourcity.ca/rezoning",
    "tags": [
      "rezoning",
      "development",
      "planning",
      "engagement",
      "vancouver"
    ]
  },
  {
    "name": "Calgary — Traffic Information Map",
    "level": "Municipal",
    "jurisdiction": "Calgary",
    "category": "transport-roads",
    "type": "Live traffic map",
    "description": "See real-time Calgary traffic incidents, road closures, construction detours and live camera images on one interactive map before you drive.",
    "url": "https://maps.calgary.ca/TrafficInformation/",
    "tags": [
      "traffic",
      "road closures",
      "cameras",
      "real-time",
      "calgary"
    ]
  },
  {
    "name": "Edmonton — Current Traffic Disruptions Map",
    "level": "Municipal",
    "jurisdiction": "Edmonton",
    "category": "transport-roads",
    "type": "Road disruption map",
    "description": "Plan routes around Edmonton road construction, closures, detours and event-related delays with the city's continuously updated traffic disruptions map.",
    "url": "https://www.edmonton.ca/transportation/current-traffic-disruptions",
    "tags": [
      "traffic",
      "construction",
      "road closures",
      "map",
      "edmonton"
    ]
  },
  {
    "name": "Winnipeg — Know Your Zone",
    "level": "Municipal",
    "jurisdiction": "Winnipeg",
    "category": "transport-roads",
    "type": "Snow zone lookup",
    "description": "Look up your street's snow-clearing zone and get alerts on residential parking bans during Winnipeg plowing operations via address search or the mobile app.",
    "url": "https://www.winnipeg.ca/services-programs/transportation-roads-parking/road-boulevard-maintenance/know-your-zone-app",
    "tags": [
      "snow",
      "parking ban",
      "winter",
      "lookup",
      "winnipeg"
    ]
  },
  {
    "name": "Toronto — Fire Active Incidents",
    "level": "Municipal",
    "jurisdiction": "Toronto",
    "category": "safety",
    "type": "Live incident feed",
    "description": "Watch active incidents dispatched by Toronto Fire Services in near real time, pulled from the CAD dispatch system and refreshed every five minutes.",
    "url": "https://www.toronto.ca/community-people/public-safety-alerts/alerts-notifications/toronto-fire-active-incidents/",
    "tags": [
      "fire",
      "dispatch",
      "real-time",
      "emergency",
      "toronto"
    ]
  },
  {
    "name": "Quebec City — Carte interactive",
    "level": "Municipal",
    "jurisdiction": "Quebec City",
    "category": "open-data",
    "type": "Interactive city map",
    "description": "Explore Quebec City's official interactive map with layers for roadwork and traffic obstructions, snow removal operations, zoning and municipal services.",
    "url": "https://www.ville.quebec.qc.ca/carteinteractive/",
    "tags": [
      "map",
      "roadwork",
      "snow removal",
      "zoning",
      "quebec city"
    ]
  },
  {
    "name": "Gatineau — Atlas de Gatineau",
    "level": "Municipal",
    "jurisdiction": "Gatineau",
    "category": "open-data",
    "type": "Interactive GIS atlas",
    "description": "Explore Gatineau geospatial data — toggle map layers, view aerial photography, and overlay your own Shapefile, CSV or KML data on the city's interactive atlas.",
    "url": "https://www.gatineau.ca/portail/default.aspx?p=publications_cartes_statistiques_donnees_ouvertes%2Fcartes%2Fcarte_interactive_atlas_gatineau",
    "tags": [
      "gis",
      "map",
      "aerial photos",
      "gatineau"
    ]
  },
  {
    "name": "Laval — Interactive Map",
    "level": "Municipal",
    "jurisdiction": "Laval",
    "category": "open-data",
    "type": "Interactive city map",
    "description": "Browse Ville de Laval's Geoweb interactive maps to view municipal data layers — properties, services, infrastructure and territory information — by address.",
    "url": "https://www.laval.ca/en/interactive-map/",
    "tags": [
      "gis",
      "map",
      "municipal services",
      "laval"
    ]
  },
  {
    "name": "Vancouver — Street Trees Dataset",
    "level": "Municipal",
    "jurisdiction": "Vancouver",
    "category": "environment",
    "type": "Tree inventory dataset",
    "description": "Map and download Vancouver's inventory of 150,000+ public boulevard trees, with species, height, diameter and coordinates, refreshed daily on weekdays.",
    "url": "https://opendata.vancouver.ca/explore/dataset/street-trees/",
    "tags": [
      "trees",
      "urban forest",
      "open data",
      "map",
      "vancouver"
    ]
  },
  {
    "name": "Montréal — 311 Service Requests Dataset",
    "level": "Municipal",
    "jurisdiction": "Montreal",
    "category": "gov-services",
    "type": "311 open dataset",
    "description": "Download geolocated 311 service requests, complaints and comments submitted to the City of Montreal from 2014 to present, in CSV format.",
    "url": "https://donnees.montreal.ca/dataset/requete-311",
    "tags": [
      "311",
      "service requests",
      "open data",
      "montreal"
    ]
  },
  {
    "name": "Mississauga — Active Development Applications Map",
    "level": "Municipal",
    "jurisdiction": "Mississauga",
    "category": "planning-zoning",
    "type": "Development application map",
    "description": "Track Mississauga development applications on a real-time map — view renderings of proposed buildings, submission documents and upcoming public meetings.",
    "url": "https://www.mississauga.ca/services-and-programs/planning-and-development/development-applications/active-development-applications/",
    "tags": [
      "development",
      "planning",
      "map",
      "applications",
      "mississauga"
    ]
  },
  {
    "name": "British Columbia — GWELLS Groundwater Wells and Aquifers",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "environment",
    "type": "Searchable well database",
    "description": "Search BC water well records by owner, address, well tag or map, view aquifer details, and pull public well data through a REST API.",
    "url": "https://apps.nrs.gov.bc.ca/gwells/",
    "tags": [
      "groundwater",
      "wells",
      "aquifers",
      "api",
      "bc"
    ]
  },
  {
    "name": "British Columbia — Mineral Titles Online",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "environment",
    "type": "Tenure registry and map viewer",
    "description": "Map viewers and search tools for every mineral, placer and coal claim or lease in BC — locate tenures, check holders and status, and view reserve boundaries.",
    "url": "https://www.mtonline.gov.bc.ca/",
    "tags": [
      "mineral titles",
      "mining",
      "claims",
      "map",
      "bc"
    ]
  },
  {
    "name": "British Columbia — CPSBC Registrant Directory",
    "level": "Agency",
    "jurisdiction": "British Columbia",
    "category": "health",
    "type": "Licence registry search",
    "description": "Look up any BC physician, surgeon or podiatrist to confirm their licence, specialty, practice location, and any conditions or disciplinary actions.",
    "url": "https://www.cpsbc.ca/public/registrant-directory",
    "tags": [
      "physicians",
      "licence verification",
      "registry",
      "bc"
    ]
  },
  {
    "name": "British Columbia — ParcelMap BC Search (LTSA)",
    "level": "Agency",
    "jurisdiction": "British Columbia",
    "category": "housing",
    "type": "Parcel map search",
    "description": "Search LTSA's authoritative map of all titled and surveyed Crown parcels in BC by address, PID or map click to view parcel boundaries and legal descriptions.",
    "url": "https://maps.ltsa.ca/",
    "tags": [
      "land titles",
      "parcels",
      "property",
      "map",
      "bc"
    ]
  },
  {
    "name": "British Columbia — Court Services Online",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "justice",
    "type": "Court records search",
    "description": "E-search BC Provincial and Supreme civil, traffic and criminal court files by party name or file number, view daily court lists, and e-file documents.",
    "url": "https://justice.gov.bc.ca/cso/index.do",
    "tags": [
      "courts",
      "case search",
      "court lists",
      "bc"
    ]
  },
  {
    "name": "British Columbia — Surgery Wait Times",
    "level": "Provincial",
    "jurisdiction": "British Columbia",
    "category": "health",
    "type": "Wait-time lookup",
    "description": "Compare scheduled-surgery wait times in BC by procedure, hospital and surgeon — see the wait to consult a surgeon and the wait for surgery, updated bi-monthly.",
    "url": "https://swt.hlth.gov.bc.ca/",
    "tags": [
      "wait times",
      "surgery",
      "hospitals",
      "bc"
    ]
  },
  {
    "name": "British Columbia — BC Unclaimed Money Search",
    "level": "Agency",
    "jurisdiction": "British Columbia",
    "category": "finance",
    "type": "Unclaimed property search",
    "description": "Search over $210 million in unclaimed BC funds from banks, courts and government by name, then file a claim online to recover money owed to you.",
    "url": "https://www.bcunclaimed.ca/search",
    "tags": [
      "unclaimed money",
      "claims",
      "search",
      "bc"
    ]
  },
  {
    "name": "Ontario — CPSO Physician Register",
    "level": "Agency",
    "jurisdiction": "Ontario",
    "category": "health",
    "type": "Licence registry search",
    "description": "Search Ontario's official physician register by name or CPSO number to verify a doctor's licence status, specialty, hospital privileges and disciplinary history.",
    "url": "https://register.cpso.on.ca/",
    "tags": [
      "physicians",
      "licence verification",
      "registry",
      "ontario"
    ]
  },
  {
    "name": "Ontario — Drug Benefit Formulary Search",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "health",
    "type": "Drug coverage search",
    "description": "Search any drug to see if it is covered by the Ontario Drug Benefit program, with interchangeable products, prices and limited-use criteria.",
    "url": "https://www.formulary.health.gov.on.ca/formulary/",
    "tags": [
      "drugs",
      "formulary",
      "coverage",
      "ontario"
    ]
  },
  {
    "name": "Ontario — OCT Find a Teacher Register",
    "level": "Agency",
    "jurisdiction": "Ontario",
    "category": "education",
    "type": "Licence registry search",
    "description": "Search the public register of every certified Ontario teacher by name or OCT number to see qualifications, certification status and any disciplinary findings.",
    "url": "https://apps.oct.ca/findateacher/members",
    "tags": [
      "teachers",
      "certification",
      "registry",
      "ontario"
    ]
  },
  {
    "name": "Ontario — WSIB eClearance",
    "level": "Agency",
    "jurisdiction": "Ontario",
    "category": "employment",
    "type": "Clearance certificate lookup",
    "description": "Verify a contractor's WSIB clearance certificate online — search by business name, account or clearance number (up to 200 at once) before hiring.",
    "url": "https://clearances.wsib.ca/Clearances/eclearance/start?lang=en",
    "tags": [
      "wsib",
      "clearance",
      "contractors",
      "workers compensation",
      "ontario"
    ]
  },
  {
    "name": "Ontario — Ontario Health Wait Times",
    "level": "Agency",
    "jurisdiction": "Ontario",
    "category": "health",
    "type": "Wait-time lookup",
    "description": "Search wait times for surgeries, MRI/CT scans and breast screening by procedure and postal code, with a map of nearby hospitals and their current waits.",
    "url": "https://www.ontariohealth.ca/public-reporting/wait-times",
    "tags": [
      "wait times",
      "surgery",
      "diagnostic imaging",
      "ontario"
    ]
  },
  {
    "name": "Ontario — Archives of Ontario Collection Search",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "heritage",
    "type": "Archives database search",
    "description": "Search descriptions of Ontario's archival, library and art collections — records, photographs and maps — then request items or order reproductions.",
    "url": "https://aims.archives.gov.on.ca/",
    "tags": [
      "archives",
      "history",
      "genealogy",
      "search",
      "ontario"
    ]
  },
  {
    "name": "Alberta — AHS Emergency Department Wait Times",
    "level": "Agency",
    "jurisdiction": "Alberta",
    "category": "health",
    "type": "Live wait-time dashboard",
    "description": "Check live estimated emergency department and urgent care wait times at hospitals in Calgary, Edmonton and other Alberta cities before you go.",
    "url": "https://www.albertahealthservices.ca/waittimes/waittimes.aspx",
    "tags": [
      "emergency",
      "wait times",
      "hospitals",
      "alberta"
    ]
  },
  {
    "name": "Alberta — Water Well Information Database",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "environment",
    "type": "Searchable well database",
    "description": "Search roughly 500,000 Alberta water well drilling reports, chemistry analyses and pump tests by owner name, well ID, legal land location or map selection.",
    "url": "https://groundwater.alberta.ca/waterwells/d/",
    "tags": [
      "groundwater",
      "wells",
      "drilling reports",
      "alberta"
    ]
  },
  {
    "name": "Saskatchewan — ISC Land Titles Search",
    "level": "Agency",
    "jurisdiction": "Saskatchewan",
    "category": "housing",
    "type": "Land registry search",
    "description": "Find any Saskatchewan land title by parcel number, title number, land description or owner name, with a free map search tool and historical title lookups.",
    "url": "https://www.saskregistries.ca/landtitles/findtitle",
    "tags": [
      "land titles",
      "property",
      "registry",
      "saskatchewan"
    ]
  },
  {
    "name": "Saskatchewan — Drug Plan Formulary Search",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "health",
    "type": "Drug coverage search",
    "description": "Search which medications the Saskatchewan Drug Plan covers, with coverage status, exception drug criteria and formulary bulletins.",
    "url": "https://formulary.drugplan.ehealthsask.ca/",
    "tags": [
      "drugs",
      "formulary",
      "coverage",
      "saskatchewan"
    ]
  },
  {
    "name": "Saskatchewan — Provincial Archives Collection Search",
    "level": "Provincial",
    "jurisdiction": "Saskatchewan",
    "category": "heritage",
    "type": "Archives database search",
    "description": "Search hundreds of thousands of descriptions in Saskatchewan's Permanent Collection — photos, maps, local histories, film and government records back to the Territorial era.",
    "url": "https://search.saskarchives.com/",
    "tags": [
      "archives",
      "history",
      "photographs",
      "saskatchewan"
    ]
  },
  {
    "name": "Manitoba — Manitoba Laws",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "justice",
    "type": "Legislation database",
    "description": "Browse and search official consolidated Manitoba statutes (C.C.S.M.) and regulations, updated as amendments come into force, with annual chapters back to 1985.",
    "url": "https://web2.gov.mb.ca/laws/index.php",
    "tags": [
      "legislation",
      "statutes",
      "regulations",
      "manitoba"
    ]
  },
  {
    "name": "Manitoba — Health Wait Time Information",
    "level": "Provincial",
    "jurisdiction": "Manitoba",
    "category": "health",
    "type": "Wait-time dashboard",
    "description": "Look up Manitoba wait times for emergency departments, MRI, CT, ultrasound and surgical and cancer services by facility and region.",
    "url": "https://www.gov.mb.ca/health/waittime/index.html",
    "tags": [
      "wait times",
      "emergency",
      "diagnostics",
      "manitoba"
    ]
  },
  {
    "name": "Quebec — Registre foncier du Québec en ligne",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "housing",
    "type": "Land registry search",
    "description": "Consult Quebec's land register online by cadastral lot number to trace a property's full transaction history, registered rights and legal documents.",
    "url": "https://www.registrefoncier.gouv.qc.ca/",
    "tags": [
      "land registry",
      "property",
      "cadastre",
      "quebec"
    ]
  },
  {
    "name": "Quebec — Register of Unclaimed Property (Revenu Québec)",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "finance",
    "type": "Unclaimed property search",
    "description": "Search Revenu Québec's register free of charge for unclaimed successions, inactive financial assets and other property, then start a claim online.",
    "url": "https://www.revenuquebec.ca/en/unclaimed-property/searches/register-of-unclaimed-property/",
    "tags": [
      "unclaimed property",
      "successions",
      "search",
      "quebec"
    ]
  },
  {
    "name": "Quebec — LégisQuébec",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "justice",
    "type": "Legislation database",
    "description": "Search official consolidated Quebec statutes and regulations in French and English, with historical point-in-time versions and annual laws in PDF since 1996.",
    "url": "https://www.legisquebec.gouv.qc.ca/en",
    "tags": [
      "legislation",
      "statutes",
      "regulations",
      "quebec"
    ]
  },
  {
    "name": "Nova Scotia — Wait Time Information",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "health",
    "type": "Wait-time lookup",
    "description": "Compare wait times for 150+ surgical procedures, MRI/CT scans, cancer care and mental health services across Nova Scotia to find the shortest-wait locations.",
    "url": "https://waittimes.novascotia.ca/",
    "tags": [
      "wait times",
      "surgery",
      "diagnostics",
      "nova scotia"
    ]
  },
  {
    "name": "Nova Scotia — RJSC Connect Business Search",
    "level": "Provincial",
    "jurisdiction": "Nova Scotia",
    "category": "business",
    "type": "Business registry search",
    "description": "Search Nova Scotia's Registry of Joint Stock Companies by name or Registry ID to see any business, society or non-profit's status, addresses and filing dates.",
    "url": "https://rjsc.novascotia.ca/search",
    "tags": [
      "business registry",
      "corporations",
      "search",
      "nova scotia"
    ]
  },
  {
    "name": "Newfoundland and Labrador — Companies and Deeds Online (CADO)",
    "level": "Provincial",
    "jurisdiction": "Newfoundland and Labrador",
    "category": "business",
    "type": "Registry search",
    "description": "Search NL's registry of companies, co-operatives, condos, deeds and mechanics liens electronically, with records from 1982 to present.",
    "url": "https://cado.eservices.gov.nl.ca/",
    "tags": [
      "business registry",
      "deeds",
      "liens",
      "newfoundland"
    ]
  },
  {
    "name": "PEI — Business / Corporate Registry Search",
    "level": "Provincial",
    "jurisdiction": "PEI",
    "category": "business",
    "type": "Business registry search",
    "description": "Search PEI's corporate and business names registry free of charge for corporations, non-profits, co-ops and trade names, and order full profile reports.",
    "url": "https://www.princeedwardisland.ca/en/feature/pei-business-corporate-registry",
    "tags": [
      "business registry",
      "corporations",
      "search",
      "pei"
    ]
  },
  {
    "name": "Yukon — Corporate Online Registry (YCOR)",
    "level": "Provincial",
    "jurisdiction": "Yukon",
    "category": "business",
    "type": "Business registry search",
    "description": "Search Yukon's corporate registry for any business or non-profit and view summary information free, with fee-based entity profiles, certificates and filings.",
    "url": "https://ycor-reey.gov.yk.ca/",
    "tags": [
      "business registry",
      "corporations",
      "search",
      "yukon"
    ]
  },
  {
    "name": "Northwest Territories — Corporate Registries Online (CROS)",
    "level": "Provincial",
    "jurisdiction": "Northwest Territories",
    "category": "business",
    "type": "Business registry search",
    "description": "Search NWT-registered corporations, business names, partnerships, societies and co-ops — legal name, status and type are free; full profiles cost $4.",
    "url": "https://www.justice.gov.nt.ca/app/cros-rsel/search",
    "tags": [
      "business registry",
      "corporations",
      "search",
      "nwt"
    ]
  },
  {
    "name": "Nunavut — NNI Registered Business Search",
    "level": "Provincial",
    "jurisdiction": "Nunavut",
    "category": "business",
    "type": "Business directory search",
    "description": "Search the Government of Nunavut's database of NNI-registered Nunavut and Inuit-owned businesses eligible for procurement preferences, by name, community or type.",
    "url": "https://nni.gov.nu.ca/business/search",
    "tags": [
      "business directory",
      "procurement",
      "inuit firms",
      "nunavut"
    ]
  },
  {
    "name": "DND/CAF — Current Operations List",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Operations tracker",
    "description": "Filterable list of every current Canadian Armed Forces operation at home and abroad, with mission details, locations, and start dates.",
    "url": "https://www.canada.ca/en/department-national-defence/services/operations/military-operations/current-operations/list.html",
    "tags": [
      "military",
      "operations",
      "caf",
      "deployments",
      "defence"
    ]
  },
  {
    "name": "DRDC — Defence Research Reports",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research database",
    "description": "Search 16,000+ unclassified Defence Research and Development Canada reports and download full-text PDFs of Canadian defence science and technology research.",
    "url": "https://pubs.drdc-rddc.gc.ca/pubdocs/pcow1_e.html",
    "tags": [
      "defence",
      "research",
      "science",
      "publications",
      "drdc"
    ]
  },
  {
    "name": "NSIRA — Reports and Publications",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Report library",
    "description": "Read unclassified NSIRA review reports and annual reports scrutinizing the national security activities of CSIS, CSE, the RCMP, and other federal agencies.",
    "url": "https://nsira-ossnr.gc.ca/en/publications/",
    "tags": [
      "intelligence",
      "oversight",
      "national security",
      "accountability",
      "reports"
    ]
  },
  {
    "name": "NSICOP — Committee Reports",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Report library",
    "description": "Download annual and special reports from Parliament's security-cleared committee, including reviews of foreign interference, lawful access, and defence intelligence.",
    "url": "https://www.nsicop-cpsnr.ca/reports-rapports-en.html",
    "tags": [
      "intelligence",
      "oversight",
      "parliament",
      "national security",
      "foreign interference"
    ]
  },
  {
    "name": "Office of the Intelligence Commissioner — Decisions",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Decisions registry",
    "description": "Read declassified quasi-judicial decisions approving or rejecting ministerial authorizations for CSIS and CSE intelligence activities.",
    "url": "https://www.canada.ca/en/intelligence-commissioner/decisions.html",
    "tags": [
      "intelligence",
      "oversight",
      "decisions",
      "csis",
      "cse"
    ]
  },
  {
    "name": "CSIS — Public Reports",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Report library",
    "description": "Download every annual CSIS Public Report — the unclassified assessment of threats to Canada from terrorism, espionage, and foreign interference.",
    "url": "https://publications.gc.ca/site/eng/9.505816/publication.html",
    "tags": [
      "intelligence",
      "national security",
      "csis",
      "threat assessment",
      "reports"
    ]
  },
  {
    "name": "CSE — Annual Reports",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Report library",
    "description": "Read the Communications Security Establishment's unclassified annual reports on signals intelligence, cyber defence, and foreign cyber operations, back to 2019-20.",
    "url": "https://www.cse-cst.gc.ca/en/accountability/transparency/reports",
    "tags": [
      "intelligence",
      "cyber",
      "signals intelligence",
      "transparency",
      "reports"
    ]
  },
  {
    "name": "CPIC — Stolen Vehicle and Bike Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Public database search",
    "description": "Check whether a vehicle (by VIN) or bicycle (by serial number) has been reported stolen anywhere in Canada, against national police data updated daily.",
    "url": "https://cpic-cipc.ca/index-eng.htm",
    "tags": [
      "police",
      "stolen property",
      "vehicles",
      "bicycles",
      "search"
    ]
  },
  {
    "name": "RCMP — Canada's Missing",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Case database",
    "description": "Search police-published profiles of missing persons and unidentified remains cases across Canada, with photos, descriptions, and tip submission.",
    "url": "https://canadasmissing.ca/index-eng.htm",
    "tags": [
      "missing persons",
      "police",
      "rcmp",
      "cold cases",
      "search"
    ]
  },
  {
    "name": "CBSA — Enforcement Action Statistics",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Statistics dashboard",
    "description": "Quarterly statistics on CBSA seizures of drugs, firearms, currency, and intercepted stolen vehicles, broken down by category and fiscal year.",
    "url": "https://www.cbsa-asfc.gc.ca/security-securite/seizure-saisie-eng.html",
    "tags": [
      "border",
      "seizures",
      "enforcement",
      "statistics",
      "cbsa"
    ]
  },
  {
    "name": "CISC — Public Report on Organized Crime",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Report series",
    "description": "Download the annual Criminal Intelligence Service Canada public report assessing hundreds of organized crime groups and their national threat levels.",
    "url": "https://publications.gc.ca/site/eng/9.506134/publication.html",
    "tags": [
      "organized crime",
      "intelligence",
      "police",
      "threat assessment",
      "reports"
    ]
  },
  {
    "name": "FINTRAC — Strategic Intelligence Publications",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "finance",
    "type": "Report library",
    "description": "Read FINTRAC operational alerts, briefs, and assessments listing concrete indicators of money laundering, terrorist financing, and sanctions evasion.",
    "url": "https://fintrac-canafe.canada.ca/intel/sintel-eng",
    "tags": [
      "money laundering",
      "financial intelligence",
      "terrorist financing",
      "sanctions",
      "indicators"
    ]
  },
  {
    "name": "Public Safety Canada — Listed Terrorist Entities",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "safety",
    "type": "Registry",
    "description": "Official registry of every entity listed under the Criminal Code as a terrorist entity, with background summaries and listing dates for each group.",
    "url": "https://www.publicsafety.gc.ca/cnt/ntnl-scrt/cntr-trrrsm/lstd-ntts/crrnt-lstd-ntts-en.aspx",
    "tags": [
      "terrorism",
      "national security",
      "registry",
      "criminal code"
    ]
  },
  {
    "name": "Project '44 — WWII Interactive Map",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Interactive map",
    "description": "Follow Canadian units across WWII Europe day by day — 150,000+ mapped unit positions traced from digitized war diaries, from D-Day to VE Day.",
    "url": "https://project44.ca/",
    "tags": [
      "military history",
      "wwii",
      "maps",
      "war diaries",
      "remembrance"
    ]
  },
  {
    "name": "Library and Archives Canada — First World War Personnel Records",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Records database",
    "description": "Search roughly 622,000 digitized First World War service files of the Canadian Expeditionary Force by name, regimental number, or place of enlistment.",
    "url": "https://library-archives.canada.ca/eng/collection/research-help/military-heritage/first-world-war/Pages/fww-personnel.aspx",
    "tags": [
      "military history",
      "wwi",
      "genealogy",
      "service records",
      "archives"
    ]
  },
  {
    "name": "Veterans Affairs Canada — Books of Remembrance Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Memorial search",
    "description": "Search the names inscribed in Canada's Books of Remembrance and view the digitized page where each of the fallen is commemorated in the Peace Tower.",
    "url": "https://www.veterans.gc.ca/en/remembrance/memorials/books-remembrance/search-books-remembrance",
    "tags": [
      "remembrance",
      "military history",
      "memorial",
      "fallen",
      "search"
    ]
  },
  {
    "name": "Canadian Heraldic Authority — Public Register of Arms, Flags and Badges",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Searchable register",
    "description": "Search 6,700+ officially granted Canadian coats of arms, flags, and military badges, with images and blazons, from the Canadian Heraldic Authority.",
    "url": "https://pubreg.gg.ca/",
    "tags": [
      "heraldry",
      "badges",
      "register",
      "military",
      "heritage"
    ]
  },
  {
    "name": "DND — Official Military Lineages",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Reference database",
    "description": "Look up the official lineage, battle honours, badge, motto, and marches of every authorized Canadian Armed Forces unit since 1855, maintained by DND historians.",
    "url": "https://www.canada.ca/en/department-national-defence/services/military-history/history-heritage/official-military-history-lineages.html",
    "tags": [
      "military history",
      "regiments",
      "lineages",
      "battle honours",
      "heritage"
    ]
  },
  {
    "name": "Canadian Military Journal — Archive",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "veterans",
    "type": "Journal archive",
    "description": "Read the CAF and DND's quarterly professional journal online, with a full back-issue archive of peer-reviewed articles on defence and security since 2000.",
    "url": "https://www.journal.forces.gc.ca/index-eng.asp",
    "tags": [
      "military",
      "journal",
      "defence",
      "research",
      "archive"
    ]
  },
  {
    "name": "National Defence — Open Data Datasets",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "Open data collection",
    "description": "Browse and download National Defence datasets on the Open Government portal — personnel statistics, pay scales, performance indicators, and more, many in CSV.",
    "url": "https://open.canada.ca/data/en/organization/dnd-mdn",
    "tags": [
      "open data",
      "defence",
      "military",
      "datasets",
      "personnel"
    ]
  },
  {
    "name": "Court Martial Appeal Court of Canada — Decisions",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "justice",
    "type": "Court decisions",
    "description": "Read the reasons for judgment of the superior court that hears appeals from Canadian courts martial, published in both official languages.",
    "url": "https://www.cmac-cacm.ca/en/pages/decisions-and-law-reports",
    "tags": [
      "courts",
      "military justice",
      "decisions",
      "appeals"
    ]
  },
  {
    "name": "Office of the Correctional Investigator — Reports",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "justice",
    "type": "Report library",
    "description": "Read annual and special investigation reports from the federal prison ombudsman on conditions, treatment, and systemic issues in Canadian penitentiaries.",
    "url": "https://oci-bec.gc.ca/en/reports",
    "tags": [
      "corrections",
      "ombudsman",
      "prisons",
      "oversight",
      "reports"
    ]
  },
  {
    "name": "Correctional Service Canada — Research Publications",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "justice",
    "type": "Research library",
    "description": "Browse CSC research reports and summaries by topic — recidivism, mental health, Indigenous corrections, women offenders, substance use, and more.",
    "url": "https://www.csc-scc.gc.ca/research/005008-2000-en.shtml",
    "tags": [
      "corrections",
      "research",
      "criminal justice",
      "recidivism",
      "reports"
    ]
  },
  {
    "name": "Transport Canada — CADORS Aviation Occurrence Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Searchable incident database",
    "description": "Search 300,000+ daily aviation occurrence reports (incidents, laser strikes, near misses) by date, aerodrome, aircraft, or occurrence type since 1985.",
    "url": "https://wwwapps.tc.gc.ca/saf-sec-sur/2/cadors-screaq/qs.aspx?lang=eng",
    "tags": [
      "aviation",
      "safety",
      "incidents",
      "search",
      "transport-canada"
    ]
  },
  {
    "name": "Transport Canada — Canadian Civil Aircraft Register Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Searchable registry",
    "description": "Look up any Canadian-registered aircraft by mark, owner, manufacturer, or model, and download the full civil aircraft register as a data file.",
    "url": "https://wwwapps.tc.gc.ca/saf-sec-sur/2/ccarcs-riacc/RchSimp.aspx",
    "tags": [
      "aviation",
      "aircraft",
      "registry",
      "search"
    ]
  },
  {
    "name": "Transport Canada — Airworthiness Directives Search (CAWIS)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Searchable regulatory database",
    "description": "Search airworthiness directives and service difficulty reports applicable to Canadian aircraft, engines, and propellers in the Continuing Airworthiness Web Information System.",
    "url": "https://wwwapps.tc.gc.ca/saf-sec-sur/2/cawis-swimn/",
    "tags": [
      "aviation",
      "airworthiness",
      "safety",
      "regulation",
      "search"
    ]
  },
  {
    "name": "Transport Canada — Vessel Registration Query System",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Searchable registry",
    "description": "Look up any vessel on the Canadian Register of Vessels by name, official number, or owner, including tonnage, dimensions, and registration status.",
    "url": "https://wwwapps.tc.gc.ca/Saf-Sec-Sur/4/vrqs-srib/eng/vessel-registrations",
    "tags": [
      "marine",
      "vessels",
      "registry",
      "search"
    ]
  },
  {
    "name": "Transport Canada — Grade Crossings Inventory",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Open dataset",
    "description": "Download the location and safety characteristics of every railway grade crossing in Canada, the dataset used by the Railway Safety Oversight Program, updated annually.",
    "url": "https://open.canada.ca/data/en/dataset/d0f54727-6c0b-4e5a-aa04-ea1463cf9f4c",
    "tags": [
      "rail",
      "safety",
      "open-data",
      "crossings"
    ]
  },
  {
    "name": "Transportation Safety Board — Aviation Investigation Reports",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Investigation report database",
    "description": "Browse and search TSB air transportation safety investigation reports, active investigations, and safety recommendations dating back to 1991.",
    "url": "https://www.tsb.gc.ca/eng/rapports-reports/aviation/index.html",
    "tags": [
      "aviation",
      "safety",
      "investigations",
      "tsb",
      "reports"
    ]
  },
  {
    "name": "Transportation Safety Board — Aviation Occurrence Data",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Monthly dataset (CSV)",
    "description": "Download the TSB's full aviation occurrence database as CSV tables covering accidents and incidents since 1995, refreshed monthly, plus annual safety statistics.",
    "url": "https://www.tsb.gc.ca/eng/stats/aviation/index.html",
    "tags": [
      "aviation",
      "safety",
      "open-data",
      "statistics",
      "tsb"
    ]
  },
  {
    "name": "Transportation Safety Board — Marine Occurrence Data",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Monthly dataset (CSV)",
    "description": "Download the TSB's marine occurrence database as CSV tables covering shipping accidents and incidents since 1995, refreshed monthly, plus marine safety statistics.",
    "url": "https://www.tsb.gc.ca/eng/stats/marine/index.html",
    "tags": [
      "marine",
      "safety",
      "open-data",
      "statistics",
      "tsb"
    ]
  },
  {
    "name": "Transportation Safety Board — Rail Occurrence Data",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "aviation-marine",
    "type": "Monthly dataset (CSV)",
    "description": "Download the TSB's rail occurrence database as CSV tables covering derailments, collisions, and crossing accidents since 1983, refreshed monthly.",
    "url": "https://www.tsb.gc.ca/eng/stats/rail/index.html",
    "tags": [
      "rail",
      "safety",
      "open-data",
      "statistics",
      "tsb"
    ]
  },
  {
    "name": "OSB — Bankruptcy and Insolvency Records Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Searchable records database",
    "description": "Search every bankruptcy and proposal filed in Canada since 1978, receiverships since 1993, and CCAA records (free); other searches cost $8 per name.",
    "url": "https://www.ic.gc.ca/app/scr/bsf-osb/ins/login.html",
    "tags": [
      "insolvency",
      "bankruptcy",
      "records",
      "search",
      "osb"
    ]
  },
  {
    "name": "OSB — Licensed Insolvency Trustee Registry",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Licence registry",
    "description": "Look up every Licensed Insolvency Trustee in Canada — active, semi-active, and inactive — to verify a trustee's licence before engaging them.",
    "url": "https://www.ic.gc.ca/app/scr/tds/web/complete",
    "tags": [
      "insolvency",
      "trustees",
      "registry",
      "licensing"
    ]
  },
  {
    "name": "Canada Tariff Finder",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Tariff lookup tool",
    "description": "Find the customs tariff for a specific product in any country Canada has a free trade agreement with, and compare rates across up to three products or markets.",
    "url": "https://www.tariffinder.ca/en/",
    "tags": [
      "trade",
      "tariffs",
      "export",
      "import",
      "tool"
    ]
  },
  {
    "name": "Statistics Canada — Canadian International Merchandise Trade Web App",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Interactive data application",
    "description": "Explore monthly Canadian import and export data by HS commodity code, trading partner, and province, with charts, time series, and top-25 commodity rankings.",
    "url": "https://www150.statcan.gc.ca/n1/pub/71-607-x/71-607-x2021004-eng.htm",
    "tags": [
      "trade",
      "imports",
      "exports",
      "statistics",
      "data"
    ]
  },
  {
    "name": "Health Canada — Canada Vigilance Adverse Reaction Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Searchable safety database",
    "description": "Search suspected adverse reaction (side effect) reports for drugs and health products submitted to Health Canada, with an interactive dashboard and data downloads.",
    "url": "https://cvp-pcv.hc-sc.gc.ca/",
    "tags": [
      "health",
      "drugs",
      "adverse-reactions",
      "safety",
      "search"
    ]
  },
  {
    "name": "Health Canada — Drug and Health Product Inspections Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Inspection results database",
    "description": "Search results and compliance ratings of Health Canada inspections of drug, medical device, and clinical trial establishments in Canada and abroad since 2012.",
    "url": "https://www.drug-inspections.canada.ca/gmp/index-en.html",
    "tags": [
      "health",
      "inspections",
      "compliance",
      "enforcement",
      "search"
    ]
  },
  {
    "name": "Health Canada — Drug and Health Products Portal",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Regulatory decisions database",
    "description": "Search Health Canada's regulatory decision summaries, safety reviews, and clinical information for authorized drugs, biologics, and medical devices.",
    "url": "https://dhpp.hpfb-dgpsa.ca/",
    "tags": [
      "health",
      "drugs",
      "regulatory",
      "decisions",
      "search"
    ]
  },
  {
    "name": "Health Canada — Pesticide Product and Label Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "health",
    "type": "Searchable product registry",
    "description": "Search all pesticide products registered in Canada by name, registrant, or active ingredient, including full label text and reported incident data.",
    "url": "https://pest-control.canada.ca/pesticide-registry/en/product-search.html",
    "tags": [
      "pesticides",
      "registry",
      "labels",
      "search",
      "pmra"
    ]
  },
  {
    "name": "Canada Energy Regulator — Interactive Pipeline Map",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "utilities",
    "type": "Interactive map",
    "description": "Explore the location of federally regulated pipelines on an interactive map alongside every reported incident since 2008, filterable by substance and severity.",
    "url": "https://www.cer-rec.gc.ca/en/safety-environment/industry-performance/interactive-pipeline/",
    "tags": [
      "pipelines",
      "energy",
      "incidents",
      "map",
      "safety"
    ]
  },
  {
    "name": "Canadian Nuclear Safety Commission — Nuclear Event Reports",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "utilities",
    "type": "Event report listing",
    "description": "Browse reportable safety events and incidents at Canadian nuclear power plants, research reactors, and other major nuclear facilities, with dates and descriptions.",
    "url": "https://www.cnsc-ccsn.gc.ca/eng/acts-and-regulations/event-reports-for-major-nuclear-facilities/",
    "tags": [
      "nuclear",
      "safety",
      "incidents",
      "regulation",
      "cnsc"
    ]
  },
  {
    "name": "CRTC — Decisions, Notices and Orders",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Regulatory decisions index",
    "description": "Search and browse daily-updated indexes of CRTC broadcasting, telecom, and enforcement decisions, notices, and orders dating back to 1984.",
    "url": "https://crtc.gc.ca/eng/dno.htm",
    "tags": [
      "telecom",
      "broadcasting",
      "decisions",
      "regulation",
      "crtc"
    ]
  },
  {
    "name": "CIPO — Canadian Industrial Designs Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Searchable IP database",
    "description": "Search all registered Canadian industrial designs by title, owner, classification, or registration date, with drawings and status for each design.",
    "url": "https://www.ic.gc.ca/app/opic-cipo/id/bscSrch.do?lang=eng",
    "tags": [
      "intellectual-property",
      "designs",
      "search",
      "cipo"
    ]
  },
  {
    "name": "Measurement Canada — Find an Authorized Service Provider",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "consumer",
    "type": "Search tool",
    "description": "Find companies authorized by Measurement Canada to inspect and certify scales, gas pumps, and other measuring devices in your area, with their approved inspection scope.",
    "url": "https://ised-isde.canada.ca/site/measurement-canada/en/authorized-service-providers/find-authorized-service-provider",
    "tags": [
      "measurement",
      "inspections",
      "certification",
      "search"
    ]
  },
  {
    "name": "Competition Bureau — Report of Merger Reviews",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "business",
    "type": "Enforcement register",
    "description": "Browse the weekly-updated register of ongoing and concluded merger reviews under the Competition Act, including pre-merger notifications and advance ruling requests.",
    "url": "https://competition-bureau.canada.ca/en/mergers-and-acquisitions/report-concluded-merger-reviews",
    "tags": [
      "competition",
      "mergers",
      "enforcement",
      "register"
    ]
  },
  {
    "name": "Indigenous Services Canada — Drinking Water Advisories Map",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "Interactive map",
    "description": "Map and table of lifted and active long-term drinking water advisories on public water systems on reserve, browsable by community, region and status.",
    "url": "https://www.sac-isc.gc.ca/eng/1620925418298/1620925434679",
    "tags": [
      "water",
      "first nations",
      "advisories",
      "map",
      "infrastructure"
    ]
  },
  {
    "name": "Indigenous Services Canada — First Nations Financial Transparency Act Search",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "Searchable database",
    "description": "Search audited consolidated financial statements and schedules of remuneration filed by First Nations governments under the First Nations Financial Transparency Act.",
    "url": "https://services.sac-isc.gc.ca/fnp/main/Search/SearchFF.aspx?lang=eng",
    "tags": [
      "first nations",
      "transparency",
      "finance",
      "governance"
    ]
  },
  {
    "name": "NCTR — National Residential School Memorial Register",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "Searchable register",
    "description": "Search the National Centre for Truth and Reconciliation's memorial register by student name or school to honour children who died in the residential school system.",
    "url": "https://memorial.nctr.ca/",
    "tags": [
      "residential schools",
      "truth and reconciliation",
      "memorial",
      "register"
    ]
  },
  {
    "name": "Specific Claims Tribunal — Decisions Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "Decisions database",
    "description": "Full-text search of final and binding Specific Claims Tribunal decisions on First Nations monetary claims against the Crown over lands, assets and treaty obligations.",
    "url": "https://decisions.sct-trp.ca/sct/en/nav.do",
    "tags": [
      "claims",
      "tribunal",
      "decisions",
      "first nations",
      "treaties"
    ]
  },
  {
    "name": "Statistics Canada — Statistics on Indigenous Peoples",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "Data portal",
    "description": "Browse census and survey data products on First Nations people, Métis and Inuit — communities, health, education, income and the Indigenous Population Profile.",
    "url": "https://www.statcan.gc.ca/en/subjects-start/indigenous_peoples",
    "tags": [
      "statcan",
      "census",
      "indigenous",
      "demographics",
      "data"
    ]
  },
  {
    "name": "Natural Resources Canada — Aboriginal Lands of Canada Legislative Boundaries",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "GIS dataset",
    "description": "Download GIS boundaries (SHP, KML, WMS) of Indian reserves, land claim settlement lands and Indian lands across Canada from the Canada Lands Survey System.",
    "url": "https://open.canada.ca/data/en/dataset/522b07b9-78e2-4819-b736-ad9208eb1067",
    "tags": [
      "gis",
      "reserves",
      "land claims",
      "boundaries",
      "open data"
    ]
  },
  {
    "name": "Indigenous Services Canada — Community Well-Being Index",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "indigenous",
    "type": "Dataset and map",
    "description": "Visualize and download Community Well-Being index scores (education, labour, income, housing) for First Nations, Inuit and other Canadian communities, 1981–2021.",
    "url": "https://app.geo.ca/en-ca/map-browser/record/56578f58-a775-44ea-9cc5-9bf7c78410e6",
    "tags": [
      "well-being",
      "socio-economic",
      "first nations",
      "inuit",
      "dataset"
    ]
  },
  {
    "name": "Ontario — Map of Ontario Treaties and Reserves",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "indigenous",
    "type": "Interactive map",
    "description": "Search an interactive map to find which of Ontario's 40+ treaties covers any location and click reserves to learn about First Nation communities.",
    "url": "https://www.ontario.ca/page/map-ontario-treaties-and-reserves",
    "tags": [
      "treaties",
      "reserves",
      "map",
      "first nations",
      "ontario"
    ]
  },
  {
    "name": "BC Treaty Commission — Interactive Map",
    "level": "Agency",
    "jurisdiction": "British Columbia",
    "category": "indigenous",
    "type": "Interactive map",
    "description": "Explore First Nations in BC treaty negotiations and modern treaty nations, with layers for traditional territories, shared areas and negotiation stages.",
    "url": "https://bctreaty.ca/map/",
    "tags": [
      "treaties",
      "negotiations",
      "first nations",
      "map",
      "bc"
    ]
  },
  {
    "name": "Elections Canada — Federal Electoral Districts Boundary Files (2023)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "elections",
    "type": "GIS dataset",
    "description": "Download digital boundary files (shapefile, KMZ, GDB) of the 343 federal electoral districts proclaimed by the 2023 Representation Order.",
    "url": "https://open.canada.ca/data/en/dataset/18bf3ea7-1940-46ec-af52-9ba3f77ed708",
    "tags": [
      "gis",
      "electoral districts",
      "boundaries",
      "redistribution",
      "open data"
    ]
  },
  {
    "name": "Elections Ontario — Official Results Data Explorer",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "elections",
    "type": "Results database",
    "description": "Filter official Ontario election and referendum results by year, electoral district, party or candidate, with interactive charts and CSV/PDF downloads.",
    "url": "https://results.elections.on.ca/en/",
    "tags": [
      "results",
      "turnout",
      "csv",
      "elections",
      "ontario"
    ]
  },
  {
    "name": "Elections Alberta — Financial Disclosure Database",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "elections",
    "type": "Searchable database",
    "description": "Search registrations, financial reports and contributions over $250 for Alberta parties, candidates, constituency associations and leadership contests since 2004.",
    "url": "https://efpublic.elections.ab.ca/",
    "tags": [
      "campaign finance",
      "contributions",
      "disclosure",
      "alberta"
    ]
  },
  {
    "name": "Élections Québec — Research on Contributors",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "elections",
    "type": "Searchable database",
    "description": "Search political contributions made to Quebec provincial and municipal parties and candidates by contributor name, political entity or year.",
    "url": "https://www.electionsquebec.qc.ca/en/financing-expenses-and-contributions/research-on-contributors/",
    "tags": [
      "campaign finance",
      "contributions",
      "donors",
      "quebec"
    ]
  },
  {
    "name": "Ontario — Municipal Election Results Dataset",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "elections",
    "type": "Open dataset",
    "description": "Download post-election data for every Ontario municipality — eligible voters, turnout, voting methods and election statistics — from the provincial data catalogue.",
    "url": "https://data.ontario.ca/dataset/municipal-election-results",
    "tags": [
      "municipal",
      "turnout",
      "results",
      "open data",
      "ontario"
    ]
  },
  {
    "name": "Toronto — Elections Official Results Dataset",
    "level": "Municipal",
    "jurisdiction": "Toronto",
    "category": "elections",
    "type": "Open dataset",
    "description": "Download poll-level official results for Toronto municipal elections from 2003 onward and by-elections from 2012 onward via the city's open data portal.",
    "url": "https://open.toronto.ca/dataset/election-results-official/",
    "tags": [
      "results",
      "municipal",
      "open data",
      "toronto"
    ]
  },
  {
    "name": "Toronto — Elections Financial Disclosure Search",
    "level": "Municipal",
    "jurisdiction": "Toronto",
    "category": "elections",
    "type": "Searchable database",
    "description": "Search campaign contributions and expenses from financial statements filed by Toronto election candidates and registered third-party advertisers.",
    "url": "https://app.toronto.ca/EFD/jsf/main/home.xhtml",
    "tags": [
      "campaign finance",
      "contributions",
      "disclosure",
      "toronto"
    ]
  },
  {
    "name": "Ottawa — 2022 Elections Official Results",
    "level": "Municipal",
    "jurisdiction": "Ottawa",
    "category": "elections",
    "type": "Open dataset",
    "description": "Download poll-by-poll official results of Ottawa's 2022 municipal elections from the Open Ottawa portal.",
    "url": "https://open.ottawa.ca/documents/2022-elections-official-results",
    "tags": [
      "results",
      "municipal",
      "open data",
      "ottawa"
    ]
  },
  {
    "name": "Elections Calgary — Results and Disclosures",
    "level": "Municipal",
    "jurisdiction": "Calgary",
    "category": "elections",
    "type": "Results and disclosure hub",
    "description": "Browse official Calgary municipal election results by ward and voting station, plus candidate campaign finance disclosure statements.",
    "url": "https://www.electionscalgary.ca/results.html",
    "tags": [
      "results",
      "campaign finance",
      "municipal",
      "calgary"
    ]
  },
  {
    "name": "Edmonton — 2025 Official Election Results by Voting Station",
    "level": "Municipal",
    "jurisdiction": "Edmonton",
    "category": "elections",
    "type": "Open dataset",
    "description": "Query and download station-level official results from Edmonton's 2025 municipal election; datasets for earlier elections are on the same portal.",
    "url": "https://data.edmonton.ca/Elected-Officials/2025-Official-Edmonton-Election-Results-by-Voting-/32te-6grv",
    "tags": [
      "results",
      "municipal",
      "open data",
      "edmonton"
    ]
  },
  {
    "name": "Winnipeg — Election Results Dataset",
    "level": "Municipal",
    "jurisdiction": "Winnipeg",
    "category": "elections",
    "type": "Open dataset",
    "description": "Query and download Winnipeg mayoral, councillor and school trustee election results dating back to 1966 from the city's open data portal.",
    "url": "https://data.winnipeg.ca/Council-Services/Winnipeg-Election-Results/7753-3fjc",
    "tags": [
      "results",
      "municipal",
      "open data",
      "winnipeg"
    ]
  },
  {
    "name": "Library and Archives Canada — Passenger Lists (1865–1935)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Genealogy database",
    "description": "Search 4.8 million names from ship passenger lists arriving at Quebec, Halifax, Saint John, Vancouver and Victoria, 1865–1935 — core records of immigrant arrivals.",
    "url": "https://www.canada.ca/en/library-archives/collection/research-help/genealogy-family-history/immigration/passenger-lists-1865-1935.html",
    "tags": [
      "genealogy",
      "immigration",
      "passenger lists",
      "lac",
      "archives"
    ]
  },
  {
    "name": "Library and Archives Canada — Naturalization Records (1915–1951)",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Genealogy database",
    "description": "Search 200,000+ people who became naturalized Canadians between 1915 and 1951 by name or country of origin, with digitized Canada Gazette pages and file references.",
    "url": "https://bac-lac.gc.ca/eng/discover/immigration/citizenship-naturalization-records/naturalized-records-1915-1951/Pages/introduction.aspx",
    "tags": [
      "genealogy",
      "citizenship",
      "naturalization",
      "immigration",
      "lac"
    ]
  },
  {
    "name": "Library and Archives Canada — Land Grants of Western Canada",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Genealogy database",
    "description": "Search 670,000+ letters patent for homestead land grants in Manitoba, Saskatchewan, Alberta and the BC railway belt (1870–1930) by name, location or keyword.",
    "url": "https://www.bac-lac.gc.ca/eng/discover/land/land-grants-western-canada-1870-1930/Pages/land-grants-western-canada.aspx",
    "tags": [
      "genealogy",
      "land grants",
      "homesteads",
      "prairies",
      "lac"
    ]
  },
  {
    "name": "Library and Archives Canada — Theses Canada",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Theses portal",
    "description": "Search 425,000+ Canadian university theses and dissertations back to 1965 and read 200,000+ of them free in full text.",
    "url": "https://library-archives.canada.ca/eng/services/services-libraries/theses/Pages/search-theses-canada.aspx",
    "tags": [
      "theses",
      "dissertations",
      "research",
      "universities",
      "lac"
    ]
  },
  {
    "name": "Parks Canada — Directory of Federal Heritage Designations",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "heritage",
    "type": "Heritage designations database",
    "description": "Search 3,600+ federal designations — national historic sites, persons, events, heritage railway stations, lighthouses and federal heritage buildings — with plaque texts and photos.",
    "url": "https://www.pc.gc.ca/apps/dfhd/search-recherche_eng.aspx",
    "tags": [
      "heritage",
      "historic sites",
      "designations",
      "parks canada"
    ]
  },
  {
    "name": "Ingenium — Collection Online",
    "level": "Crown Corp",
    "jurisdiction": "Canada",
    "category": "culture",
    "type": "Museum collections database",
    "description": "Search digital records and images from Canada's national science and technology collection — 150,000+ artifacts across the science, aviation and agriculture museums.",
    "url": "https://collection.ingenium.ca/en/",
    "tags": [
      "museums",
      "artifacts",
      "science history",
      "collections",
      "open access"
    ]
  },
  {
    "name": "BAnQ numérique",
    "level": "Provincial",
    "jurisdiction": "Quebec",
    "category": "culture",
    "type": "Digital heritage portal",
    "description": "Browse and download Quebec's digitized heritage — newspapers, maps, photos, civil registers and notarial archives — including 100,000+ freely reusable public-domain documents.",
    "url": "https://numerique.banq.qc.ca/",
    "tags": [
      "quebec",
      "archives",
      "digitized heritage",
      "newspapers",
      "genealogy"
    ]
  },
  {
    "name": "Alberta Register of Historic Places (HeRMIS)",
    "level": "Provincial",
    "jurisdiction": "Alberta",
    "category": "heritage",
    "type": "Heritage register",
    "description": "Search or map-browse every Provincial and Municipal Historic Resource in Alberta, with statements of significance, locations and photos.",
    "url": "https://hermis.alberta.ca/ARHP/",
    "tags": [
      "alberta",
      "heritage",
      "historic places",
      "register"
    ]
  },
  {
    "name": "Ontario Heritage Trust — Online Plaque Guide",
    "level": "Provincial",
    "jurisdiction": "Ontario",
    "category": "heritage",
    "type": "Plaque database",
    "description": "Search nearly 1,300 blue-and-gold provincial plaques by keyword, theme or municipality, with full plaque texts, locations and an open-data inventory.",
    "url": "https://www.heritagetrust.on.ca/en/online-plaque-guide",
    "tags": [
      "ontario",
      "plaques",
      "heritage",
      "history"
    ]
  },
  {
    "name": "NSERC — Awards Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research grants database",
    "description": "Search every NSERC grant and scholarship awarded since 1991 by researcher, institution, program, year or keyword.",
    "url": "https://www.nserc-crsng.gc.ca/ase-oro/index_eng.asp",
    "tags": [
      "research funding",
      "grants",
      "nserc",
      "science"
    ]
  },
  {
    "name": "CIHR — Funding Decisions Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research grants database",
    "description": "Search funded health-research grants and awards by researcher, institution, competition or keyword, with dollar amounts committed over the life of each grant.",
    "url": "https://webapps.cihr-irsc.gc.ca/decisions/p/main.html?lang=en",
    "tags": [
      "research funding",
      "health research",
      "cihr",
      "grants"
    ]
  },
  {
    "name": "SSHRC — Awards Search Engine",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research grants database",
    "description": "Look up SSHRC grant and fellowship payments back to 1998 by applicant, institution, program or discipline.",
    "url": "https://www.sshrc-crsh.gc.ca/results-resultats/award_search-recherche_attributions/index-eng.aspx",
    "tags": [
      "research funding",
      "social sciences",
      "humanities",
      "grants"
    ]
  },
  {
    "name": "Canada Research Chairs — Chairholders Database",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Expert directory",
    "description": "Find any of roughly 2,000 Canada Research Chairs by name, institution, discipline or province and read their research profiles to locate an expert.",
    "url": "https://www.chairs-chaires.gc.ca/chairholders-titulaires/index-eng.aspx",
    "tags": [
      "research chairs",
      "experts",
      "universities",
      "research"
    ]
  },
  {
    "name": "FRDR — Federated Research Data Repository",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research data repository",
    "description": "Search and download large Canadian research datasets, or deposit your own for DOI-backed publication, in the Digital Research Alliance of Canada's curated national repository.",
    "url": "https://www.frdr-dfdr.ca/repo/",
    "tags": [
      "research data",
      "repository",
      "datasets",
      "open science"
    ]
  },
  {
    "name": "Borealis — Canadian Dataverse Repository",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Research data repository",
    "description": "Discover, explore and download DOI-issued research datasets from 65+ Canadian universities and research organizations — no login needed to search.",
    "url": "https://borealisdata.ca/",
    "tags": [
      "research data",
      "dataverse",
      "datasets",
      "universities"
    ]
  },
  {
    "name": "Lunaris — Canadian Research Data Discovery",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Data discovery service",
    "description": "Search 80,000+ Canadian research datasets held in 100+ academic and government repositories from one bilingual keyword and map interface.",
    "url": "https://www.lunaris.ca/",
    "tags": [
      "research data",
      "discovery",
      "datasets",
      "search"
    ]
  },
  {
    "name": "CFI — Research Facilities Navigator",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "science",
    "type": "Facilities directory",
    "description": "Search 850+ university, college, hospital and government research labs open to collaboration, filtered by capability, equipment and location.",
    "url": "https://navigator.innovation.ca/en",
    "tags": [
      "research infrastructure",
      "labs",
      "facilities",
      "collaboration"
    ]
  },
  {
    "name": "Government of Canada — GitHub Organization",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Open source code",
    "description": "Browse, fork and reuse 70+ official open-source repositories — the Canada.ca design system, the domain-security Tracker, and the Open Resource Exchange.",
    "url": "https://github.com/canada-ca",
    "tags": [
      "open source",
      "github",
      "code",
      "digital government"
    ]
  },
  {
    "name": "Canadian Digital Service — GitHub Organization",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "telecom",
    "type": "Open source code",
    "description": "Nearly 300 open-source repositories behind GC Notify, GC Forms and GC Design System components — read, fork and reuse real production government service code.",
    "url": "https://github.com/cds-snc",
    "tags": [
      "open source",
      "github",
      "cds",
      "digital government"
    ]
  },
  {
    "name": "GC API Store",
    "level": "Federal",
    "jurisdiction": "Canada",
    "category": "open-data",
    "type": "API catalogue",
    "description": "Discover and try Government of Canada APIs in one catalogue, with documentation and self-serve access for building apps on government data and services.",
    "url": "https://api.canada.ca/en/homepage",
    "tags": [
      "api",
      "developers",
      "open data",
      "digital government"
    ]
  },
  {
    "name": "Open North — Represent Civic Information API",
    "level": "Agency",
    "jurisdiction": "Canada",
    "category": "elections",
    "type": "Civic API",
    "description": "Free REST API to look up elected officials and electoral district boundaries for any Canadian address or postal code, at every level of government.",
    "url": "https://represent.opennorth.ca/",
    "tags": [
      "api",
      "elections",
      "representatives",
      "boundaries",
      "civic tech"
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
  console.log(`Batch 6 — Added: ${added}, Skipped duplicates: ${skipped}, Total: ${existing.length}`);
}

main();
