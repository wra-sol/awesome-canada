#!/usr/bin/env node
/**
 * Third batch: depth over portals — GTFS feeds, registries, heritage, budget datasets.
 * All entries are Municipal, Provincial, or Regional to improve M/P/R share.
 */

const fs = require('fs');
const path = require('path');
const { CATEGORY_IDS } = require('./categories');

const DATA = path.join(__dirname, '..', 'data', 'resources.json');

const BATCH = [
  // --- planning-zoning ---
  {
    name: 'Toronto Application Information Centre',
    level: 'Municipal',
    jurisdiction: 'Toronto',
    category: 'planning-zoning',
    type: 'Development application search',
    description:
      'Map-based search for active and closed development applications, Committee of Adjustment minor variances, rezonings, and site plan control with downloadable supporting documents.',
    url: 'https://www.toronto.ca/city-government/planning-development/application-information-centre/',
    tags: ['toronto', 'planning', 'committee of adjustment', 'development applications'],
  },
  {
    name: 'Vancouver Issued Building Permits',
    level: 'Municipal',
    jurisdiction: 'Vancouver',
    category: 'planning-zoning',
    type: 'Building permits dataset',
    description:
      'All building permits issued since 2017 with permit type, dates, address, and processing elapsed days — export CSV/JSON or query via open data API.',
    url: 'https://opendata.vancouver.ca/explore/dataset/issued-building-permits/',
    tags: ['vancouver', 'building permits', 'open data', 'api'],
  },
  {
    name: 'Hamilton Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'planning-zoning',
    type: 'Building permits dataset',
    description:
      'Issued building permits and related planning datasets on Open Hamilton — filter, map, and download via ArcGIS Hub.',
    url: 'https://open.hamilton.ca/datasets?q=building%20permit',
    tags: ['hamilton', 'building permits', 'open data', 'arcgis'],
  },
  {
    name: 'Hamilton Development Applications Open Data',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'planning-zoning',
    type: 'Development applications',
    description:
      'Active development applications and planning status layers published on the City of Hamilton open data portal.',
    url: 'https://open.hamilton.ca/datasets?q=development%20application',
    tags: ['hamilton', 'development applications', 'planning', 'open data'],
  },
  {
    name: 'Edmonton Development Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Edmonton',
    category: 'planning-zoning',
    type: 'Development permits',
    description:
      'Development permit records on the Edmonton Open Data Portal — search by community, permit type, and status with Socrata API export.',
    url: 'https://data.edmonton.ca/browse?category=Planning+%26+Development',
    tags: ['edmonton', 'development permits', 'planning', 'open data'],
  },
  {
    name: 'Winnipeg Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Winnipeg',
    category: 'planning-zoning',
    type: 'Building permits',
    description:
      'Building permit datasets on Winnipeg Open Data — issued permits with addresses, values, and permit categories for download.',
    url: 'https://data.winnipeg.ca/browse?category=Planning%2C+Property+%26+Development',
    tags: ['winnipeg', 'building permits', 'open data'],
  },
  {
    name: 'Victoria Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Victoria',
    category: 'planning-zoning',
    type: 'Building permits',
    description:
      'Issued building and development permits on the City of Victoria open data catalogue with map and CSV export.',
    url: 'https://opendata.victoria.ca/browse?category=Planning',
    tags: ['victoria', 'bc', 'building permits', 'open data'],
  },
  {
    name: 'Kelowna Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Kelowna',
    category: 'planning-zoning',
    type: 'Building permits',
    description:
      'Building permit issuance data for Kelowna on the municipal open data hub — filter by date, type, and neighbourhood.',
    url: 'https://opendata.kelowna.ca/',
    tags: ['kelowna', 'bc', 'building permits', 'open data'],
  },
  // --- council ---
  {
    name: 'Brampton Council and Committees — eScribe',
    level: 'Municipal',
    jurisdiction: 'Brampton',
    category: 'council',
    type: 'Council meetings portal',
    description:
      'Search Brampton City Council and committee agendas, minutes, attachments, and video on the eScribe public meetings portal.',
    url: 'https://pub-brampton.escribemeetings.com/',
    tags: ['brampton', 'council', 'agendas', 'minutes', 'escribe'],
  },
  {
    name: 'Victoria Council Meetings and Agendas',
    level: 'Municipal',
    jurisdiction: 'Victoria',
    category: 'council',
    type: 'Council meetings',
    description:
      'City of Victoria council and committee meeting calendars, agendas, minutes, and webcasts for current and archived sessions.',
    url: 'https://www.victoria.ca/city-government/council-committees/council-meetings',
    tags: ['victoria', 'bc', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Kelowna Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Kelowna',
    category: 'council',
    type: 'Council meetings',
    description:
      'Kelowna City Council meeting schedules, agendas, minutes, and video recordings for council and standing committees.',
    url: 'https://www.kelowna.ca/city-hall/council/council-meetings',
    tags: ['kelowna', 'bc', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Saskatoon Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Saskatoon',
    category: 'council',
    type: 'Council meetings',
    description:
      'Saskatoon City Council and committee agendas, minutes, and meeting videos with calendar search.',
    url: 'https://www.saskatoon.ca/city-hall/mayor-city-council/city-council-meetings',
    tags: ['saskatoon', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Regina Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Regina',
    category: 'council',
    type: 'Council meetings',
    description:
      'Regina City Council meeting agendas, minutes, and video for council and board sessions.',
    url: 'https://www.regina.ca/city-government/city-council/council-meetings/',
    tags: ['regina', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Windsor Council Meetings — eScribe',
    level: 'Municipal',
    jurisdiction: 'Windsor',
    category: 'council',
    type: 'Council meetings portal',
    description:
      'Windsor City Council and standing committee agendas, minutes, and attachments on the public eScribe portal.',
    url: 'https://pub-windsor.escribemeetings.com/',
    tags: ['windsor', 'council', 'escribe', 'agendas'],
  },
  {
    name: 'Region of Waterloo Council Meetings',
    level: 'Regional',
    jurisdiction: 'Waterloo',
    category: 'council',
    type: 'Regional council meetings',
    description:
      'Regional Municipality of Waterloo council and committee agendas, minutes, and webcasts.',
    url: 'https://www.regionofwaterloo.ca/en/regional-government/council-meetings.aspx',
    tags: ['waterloo region', 'council', 'regional', 'agendas'],
  },
  {
    name: 'Halifax Regional Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Halifax',
    category: 'council',
    type: 'Council meetings',
    description:
      'Halifax Regional Municipality council and committee agendas, minutes, and live meeting streams.',
    url: 'https://www.halifax.ca/city-hall/mayor-council/regional-council',
    tags: ['halifax', 'council', 'agendas', 'minutes'],
  },
  // --- budget ---
  {
    name: 'Calgary Open Budget',
    level: 'Municipal',
    jurisdiction: 'Calgary',
    category: 'budget',
    type: 'Budget open data',
    description:
      'Approved operating and capital budget lines for the City of Calgary — filter by department, fund, and year with CSV/API export from Open Calgary.',
    url: 'https://data.calgary.ca/Government/Calgary-Open-Budget/fqax-i3nz',
    tags: ['calgary', 'budget', 'open data', 'transparency'],
  },
  {
    name: 'Edmonton Open Budget',
    level: 'Municipal',
    jurisdiction: 'Edmonton',
    category: 'budget',
    type: 'Budget dashboard',
    description:
      'Interactive operating and capital budget explorer for City of Edmonton with revenues, expenditures, and year-over-year comparisons.',
    url: 'https://budget.edmonton.ca/',
    tags: ['edmonton', 'budget', 'transparency', 'open data'],
  },
  {
    name: 'Edmonton Approved Operating Budget — Expenses',
    level: 'Municipal',
    jurisdiction: 'Edmonton',
    category: 'budget',
    type: 'Budget dataset',
    description:
      'Machine-readable approved operating budget expense lines by branch and service — download CSV or query Socrata API.',
    url: 'https://data.edmonton.ca/Financial/Approved-Operating-Budget-Expenses/da9s-v9j8',
    tags: ['edmonton', 'budget', 'expenses', 'csv', 'api'],
  },
  {
    name: 'Vancouver Financial Transparency',
    level: 'Municipal',
    jurisdiction: 'Vancouver',
    category: 'budget',
    type: 'Financial reports',
    description:
      'City of Vancouver financial transparency hub with annual reports, statements, and open financial datasets.',
    url: 'https://vancouver.ca/your-government/financial-transparency.aspx',
    tags: ['vancouver', 'budget', 'financial transparency', 'reports'],
  },
  {
    name: 'Ottawa Spending and Budget Open Data',
    level: 'Municipal',
    jurisdiction: 'Ottawa',
    category: 'budget',
    type: 'Budget open data',
    description:
      'City of Ottawa budget, spending, and financial datasets on the open data portal — operating and capital budget tables with API access.',
    url: 'https://open.ottawa.ca/browse?category=Budget+%26+Finance',
    tags: ['ottawa', 'budget', 'spending', 'open data'],
  },
  {
    name: 'Mississauga Procurement Awards Open Data',
    level: 'Municipal',
    jurisdiction: 'Mississauga',
    category: 'budget',
    type: 'Procurement awards',
    description:
      'Awarded contracts and procurement results published on the Mississauga open data catalogue for vendor transparency.',
    url: 'https://data.mississauga.ca/browse?category=Finance',
    tags: ['mississauga', 'procurement', 'contracts', 'open data'],
  },
  {
    name: 'Halifax Budget and Financial Plans',
    level: 'Municipal',
    jurisdiction: 'Halifax',
    category: 'budget',
    type: 'Municipal budget',
    description:
      'Halifax Regional Municipality budget documents, business plans, and financial performance reporting.',
    url: 'https://www.halifax.ca/city-hall/budget-financial-reports',
    tags: ['halifax', 'budget', 'financial reports'],
  },
  // --- lobbyist ---
  {
    name: 'Ontario Lobbyist Registry — Public Search',
    level: 'Provincial',
    jurisdiction: 'Ontario',
    category: 'lobbyist',
    type: 'Lobbyist registry search',
    description:
      'Search registered Ontario lobbyists by name, client, subject matter, ministry, and filing date — active and inactive registrations.',
    url: 'https://lobbyist.oico.on.ca/Pages/Public/PublicSearch/',
    tags: ['ontario', 'lobbyists', 'registry', 'search', 'transparency'],
  },
  {
    name: 'Carrefour Lobby Québec',
    level: 'Provincial',
    jurisdiction: 'Quebec',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description:
      'Quebec public lobbyist registry — search mandates, institutions contacted, and lobbying subjects under the Lobbying Transparency and Ethics Act.',
    url: 'https://www.carrefourlobby.quebec/',
    tags: ['quebec', 'lobbyists', 'registry', 'transparency'],
  },
  {
    name: 'New Brunswick Registry of Lobbyists',
    level: 'Provincial',
    jurisdiction: 'New Brunswick',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description:
      'Search lobbyist registrations and returns filed with the Office of the Commissioner of Lobbyist Registration in New Brunswick.',
    url: 'https://www.lobbyistsnb.ca/',
    tags: ['new brunswick', 'lobbyists', 'registry', 'search'],
  },
  {
    name: 'Nova Scotia Lobbyist Registry',
    level: 'Provincial',
    jurisdiction: 'Nova Scotia',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description:
      'Public registry of lobbyists registered under Nova Scotia’s Lobbyists Registration Act — search by lobbyist, client, and subject.',
    url: 'https://lobbyistregistry.novascotia.ca/',
    tags: ['nova scotia', 'lobbyists', 'registry', 'search'],
  },
  // --- heritage ---
  {
    name: 'Hamilton Heritage Properties — Open Data',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'heritage',
    type: 'Heritage register dataset',
    description:
      'Designated and listed heritage properties in Hamilton as a downloadable GIS dataset on Open Hamilton.',
    url: 'https://open.hamilton.ca/datasets/heritage-properties',
    tags: ['hamilton', 'heritage', 'open data', 'gis'],
  },
  {
    name: 'London Register of Cultural Heritage Resources — CityMap',
    level: 'Municipal',
    jurisdiction: 'London',
    category: 'heritage',
    type: 'Heritage register map',
    description:
      'Interactive map of London’s Register of Cultural Heritage Resources — designated properties, listed properties, and heritage conservation districts.',
    url: 'https://maps.london.ca/WebDocuments/MapGallery/MapGallery/Index',
    tags: ['london', 'heritage', 'register', 'map'],
  },
  {
    name: 'Kingston Heritage Register',
    level: 'Municipal',
    jurisdiction: 'Kingston',
    category: 'heritage',
    type: 'Heritage register',
    description:
      'City of Kingston heritage property register under the Ontario Heritage Act — designated, listed, and conservation district properties.',
    url: 'https://www.cityofkingston.ca/building-and-renovating/heritage-property-conservation/heritage-register/',
    tags: ['kingston', 'heritage', 'register', 'ontario heritage act'],
  },
  {
    name: 'Burlington Heritage Register',
    level: 'Municipal',
    jurisdiction: 'Burlington',
    category: 'heritage',
    type: 'Heritage register',
    description:
      'Burlington municipal heritage register of designated and listed properties with conservation district information.',
    url: 'https://www.burlington.ca/en/building-and-renovating/heritage.aspx',
    tags: ['burlington', 'heritage', 'register'],
  },
  {
    name: 'Ottawa Heritage Register',
    level: 'Municipal',
    jurisdiction: 'Ottawa',
    category: 'heritage',
    type: 'Heritage register',
    description:
      'City of Ottawa heritage register and mapping of designated properties and heritage conservation districts.',
    url: 'https://ottawa.ca/en/planning-development-and-construction/heritage-conservation/heritage-register',
    tags: ['ottawa', 'heritage', 'register', 'conservation'],
  },
  {
    name: 'Calgary Heritage Inventory Open Data',
    level: 'Municipal',
    jurisdiction: 'Calgary',
    category: 'heritage',
    type: 'Heritage inventory',
    description:
      'Calgary heritage inventory and historic resources datasets on Open Calgary for mapping and research.',
    url: 'https://data.calgary.ca/browse?category=Heritage',
    tags: ['calgary', 'heritage', 'inventory', 'open data'],
  },
  // --- school-board ---
  {
    name: 'TDSB Open Data',
    level: 'Municipal',
    jurisdiction: 'Toronto',
    category: 'school-board',
    type: 'School board open data',
    description:
      'Toronto District School Board open data policy portal — research datasets, census results, and public reports where publishable.',
    url: 'https://www.tdsb.on.ca/Open-Data',
    tags: ['tdsb', 'toronto', 'schools', 'open data', 'education'],
  },
  {
    name: 'Peel District School Board — Schools Open Data',
    level: 'Regional',
    jurisdiction: 'Peel',
    category: 'school-board',
    type: 'School locations',
    description:
      'Peel Region open data for school and facility locations within the regional open data catalogue.',
    url: 'https://data.peelregion.ca/',
    tags: ['peel', 'schools', 'open data', 'education'],
  },
  {
    name: 'Calgary Board of Education — School Directory',
    level: 'Municipal',
    jurisdiction: 'Calgary',
    category: 'school-board',
    type: 'School directory',
    description:
      'Search Calgary Board of Education schools by program, grade, and community with contact and boundary information.',
    url: 'https://www.cbe.ab.ca/schools/Pages/default.aspx',
    tags: ['calgary', 'cbe', 'schools', 'directory'],
  },
  {
    name: 'Vancouver School Board — School Information',
    level: 'Municipal',
    jurisdiction: 'Vancouver',
    category: 'school-board',
    type: 'School directory',
    description:
      'Vancouver School District school finder with programs, catchments, and facility information for public schools.',
    url: 'https://www.vsb.bc.ca/schools',
    tags: ['vancouver', 'vsb', 'schools', 'directory'],
  },
  {
    name: 'Ontario School Board Boundaries — Scholars GeoPortal',
    level: 'Provincial',
    jurisdiction: 'Ontario',
    category: 'school-board',
    type: 'Boundary shapefiles',
    description:
      'English and French public and separate school board boundary shapefiles for Ontario — download via Scholars GeoPortal.',
    url: 'http://geo.scholarsportal.info/#r/details/_uri@=1011603538',
    tags: ['ontario', 'school boards', 'boundaries', 'shapefile', 'gis'],
  },
  // --- health-region ---
  {
    name: 'Fraser Health — Restaurant Inspection Reports',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'health-region',
    type: 'Food inspection search',
    description:
      'Search restaurant and food premises inspection reports across Fraser Health communities in Metro Vancouver and the Fraser Valley.',
    url: 'https://www.fraserhealth.ca/health-topics-a-to-z/food-safety/restaurant-inspection-reports',
    tags: ['fraser health', 'bc', 'food safety', 'inspections'],
  },
  {
    name: 'Interior Health — Food Facility Inspections',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'health-region',
    type: 'Food inspection search',
    description:
      'Food facility inspection disclosure for Interior Health region — search by establishment name and community.',
    url: 'https://www.interiorhealth.ca/health-and-wellness/food-safety/inspection-reports',
    tags: ['interior health', 'bc', 'food safety', 'inspections'],
  },
  {
    name: 'Toronto Public Health — Open Data Catalogue',
    level: 'Municipal',
    jurisdiction: 'Toronto',
    category: 'health-region',
    type: 'Public health open data',
    description:
      'Toronto Public Health datasets on the City open data portal — DineSafe, respiratory outbreaks, and other health indicators.',
    url: 'https://open.toronto.ca/catalogue/?organization=toronto-public-health',
    tags: ['toronto', 'public health', 'open data', 'dinesafe'],
  },
  {
    name: 'Middlesex-London Health Unit — Inspection Reports',
    level: 'Regional',
    jurisdiction: 'London',
    category: 'health-region',
    type: 'Food inspection search',
    description:
      'Food premise inspection reports for London and Middlesex County from the Middlesex-London Health Unit.',
    url: 'https://www.healthunit.com/food-safety/inspection-reports',
    tags: ['london', 'middlesex', 'food safety', 'inspections'],
  },
  {
    name: 'Ottawa Public Health — Inspection Connection',
    level: 'Municipal',
    jurisdiction: 'Ottawa',
    category: 'health-region',
    type: 'Food inspection search',
    description:
      'Search food establishment inspection results and compliance history from Ottawa Public Health.',
    url: 'https://www.ottawapublichealth.ca/en/public-health-topics/inspection-connection.aspx',
    tags: ['ottawa', 'food safety', 'inspections', 'public health'],
  },
  // --- transit (GTFS and developer feeds) ---
  {
    name: 'Grand River Transit — GTFS Open Data',
    level: 'Regional',
    jurisdiction: 'Waterloo',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'GRT static GTFS plus real-time vehicle positions, trip updates, and service alerts from the Region of Waterloo open data portal.',
    url: 'https://www.grt.ca/about-grt/open-data/',
    tags: ['grt', 'waterloo', 'gtfs', 'open data', 'real-time'],
  },
  {
    name: 'York Region Transit — GTFS Open Data',
    level: 'Regional',
    jurisdiction: 'York Region',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'YRT/Viva GTFS and real-time GTFS packages for developers — request download after accepting the open data licence.',
    url: 'https://www.yrt.ca/en/about-us/open-data.aspx',
    tags: ['yrt', 'york region', 'gtfs', 'open data'],
  },
  {
    name: 'MiWay — GTFS Developer Download',
    level: 'Municipal',
    jurisdiction: 'Mississauga',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'MiWay scheduled GTFS and GTFS-Realtime feeds (vehicle positions, trip updates, alerts) for third-party transit apps.',
    url: 'https://www.mississauga.ca/miway-transit/developer-download/',
    tags: ['miway', 'mississauga', 'gtfs', 'real-time'],
  },
  {
    name: 'Durham Region Transit — GTFS',
    level: 'Regional',
    jurisdiction: 'Ontario/GTA',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'DRT static GTFS schedule package for Durham Region bus routes — direct ZIP download from regional open data.',
    url: 'https://maps.durham.ca/OpenDataGTFS/GTFS_Durham_TXT.zip',
    tags: ['drt', 'durham', 'gtfs', 'open data'],
  },
  {
    name: 'Transit Windsor — GTFS',
    level: 'Municipal',
    jurisdiction: 'Windsor',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Static GTFS feed for Windsor Transit routes, stops, and schedules from the City of Windsor open data portal.',
    url: 'https://opendata.citywindsor.ca/Uploads/google_transit.zip',
    tags: ['windsor', 'transit', 'gtfs', 'open data'],
  },
  {
    name: 'Guelph Transit — GTFS Open Data',
    level: 'Municipal',
    jurisdiction: 'Guelph',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Guelph Transit GTFS schedule data published on the City open data catalogue for app developers.',
    url: 'http://data.open.guelph.ca/dataset/guelph-transit-gtfs',
    tags: ['guelph', 'transit', 'gtfs', 'open data'],
  },
  {
    name: 'Burlington Transit — GTFS',
    level: 'Municipal',
    jurisdiction: 'Burlington',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Burlington Transit GTFS feed for routes, stops, and schedules from the municipal open data program.',
    url: 'https://www.burlington.ca/en/news/open-data.aspx',
    tags: ['burlington', 'transit', 'gtfs', 'open data'],
  },
  {
    name: 'Brampton Transit — GTFS (GeoHub)',
    level: 'Municipal',
    jurisdiction: 'Brampton',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Brampton Transit schedule GTFS ZIP on the City GeoHub — routes, stops, stop times, and shapes for Züm and local service.',
    url: 'https://geohub.brampton.ca/datasets/a355aabd5a8c490186bdce559c9c75fb',
    tags: ['brampton', 'transit', 'gtfs', 'geohub'],
  },
  {
    name: 'STO — GTFS Open Data (Gatineau)',
    level: 'Municipal',
    jurisdiction: 'Quebec',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Société de transport de l’Outaouais planned GTFS download plus GTFS-Realtime API key registration for alerts and vehicle positions.',
    url: 'https://www.sto.ca/en/business/developer-space-open-data/',
    tags: ['sto', 'gatineau', 'gtfs', 'quebec', 'open data'],
  },
  {
    name: 'RTC Québec — GTFS Open Data',
    level: 'Municipal',
    jurisdiction: 'Quebec City',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Réseau de transport de la Capitale GTFS schedules and route shapes for Quebec City transit — direct download from RTC open data.',
    url: 'https://www.rtcquebec.ca/en/open-data',
    tags: ['rtc', 'quebec city', 'gtfs', 'open data'],
  },
  {
    name: 'BC Transit — Developer GTFS Portal',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'transit',
    type: 'GTFS feeds',
    description:
      'Provincial GTFS feeds for BC Transit systems outside Metro Vancouver — Victoria, Kelowna, and other municipal routes.',
    url: 'https://www.bctransit.com/open-data',
    tags: ['bc transit', 'gtfs', 'provincial', 'open data'],
  },
  {
    name: 'Halifax Transit — Open Data GTFS',
    level: 'Municipal',
    jurisdiction: 'Halifax',
    category: 'transit',
    type: 'GTFS feed',
    description:
      'Halifax Transit GTFS and open transit datasets on the municipal open data portal for schedules and stops.',
    url: 'https://www.halifax.ca/transportation/halifax-transit/open-data',
    tags: ['halifax', 'transit', 'gtfs', 'open data'],
  },
  // --- weather (distinct from environment category duplicates) ---
  {
    name: 'Air Quality Health Index (AQHI) — Observations Map',
    level: 'Federal',
    jurisdiction: 'Canada',
    category: 'weather',
    type: 'Air quality observations',
    description:
      'Current AQHI readings and health risk levels at monitoring stations across Canada — map and station-level observations.',
    url: 'https://weather.gc.ca/airquality/pages/index_e.html',
    tags: ['canada', 'air quality', 'aqhi', 'health'],
  },
  {
    name: 'MSC GeoMet — AQHI Observations API',
    level: 'Federal',
    jurisdiction: 'Canada',
    category: 'weather',
    type: 'Air quality API',
    description:
      'OGC API collection for Air Quality Health Index observations — query station AQHI values programmatically via GeoMet.',
    url: 'https://api.weather.gc.ca/collections/aqhi-observations',
    tags: ['canada', 'aqhi', 'api', 'geomet', 'air quality'],
  },
  {
    name: 'Manitoba Flood Information',
    level: 'Provincial',
    jurisdiction: 'Manitoba',
    category: 'weather',
    type: 'Flood monitoring',
    description:
      'Provincial flood outlooks, river levels, and emergency flood updates for Manitoba watersheds.',
    url: 'https://www.gov.mb.ca/flooding/',
    tags: ['manitoba', 'flood', 'hydrology', 'warnings'],
  },
  {
    name: 'Alberta River Basins — Flow and Forecast',
    level: 'Provincial',
    jurisdiction: 'Alberta',
    category: 'weather',
    type: 'Hydrometric monitoring',
    description:
      'Real-time river flows, basin conditions, and flood advisories for Alberta river systems.',
    url: 'https://rivers.alberta.ca/',
    tags: ['alberta', 'rivers', 'flood', 'hydrology'],
  },
  {
    name: 'Ontario Low Water Response',
    level: 'Provincial',
    jurisdiction: 'Ontario',
    category: 'weather',
    type: 'Drought monitoring',
    description:
      'Provincial low water level advisories and drought status by conservation authority watershed in Ontario.',
    url: 'https://www.ontario.ca/page/low-water-response-program',
    tags: ['ontario', 'drought', 'water levels', 'conservation'],
  },
  // --- open-data (specific datasets, not homepages) ---
  {
    name: 'Hamilton Red Light Camera Locations',
    level: 'Municipal',
    jurisdiction: 'Hamilton',
    category: 'open-data',
    type: 'Traffic safety dataset',
    description:
      'Red light camera intersection locations and related traffic safety datasets on Open Hamilton.',
    url: 'https://open.hamilton.ca/datasets?q=red%20light',
    tags: ['hamilton', 'traffic', 'safety', 'open data'],
  },
  {
    name: 'Winnipeg Crime Stat — Open Data',
    level: 'Municipal',
    jurisdiction: 'Winnipeg',
    category: 'open-data',
    type: 'Crime statistics',
    description:
      'Winnipeg Police Service crime statistics datasets on the municipal open data portal — filter and export by type and district.',
    url: 'https://data.winnipeg.ca/browse?category=Public+Safety',
    tags: ['winnipeg', 'crime', 'police', 'open data'],
  },
  {
    name: 'Saskatoon Open Data — Building and Development',
    level: 'Municipal',
    jurisdiction: 'Saskatoon',
    category: 'open-data',
    type: 'Planning datasets',
    description:
      'Saskatoon planning and development datasets including zoning and development activity on the city open data hub.',
    url: 'https://opendata-saskatoon.spatial.epicore.com/',
    tags: ['saskatoon', 'planning', 'open data', 'development'],
  },
  {
    name: 'Regina Open Data Catalogue',
    level: 'Municipal',
    jurisdiction: 'Regina',
    category: 'open-data',
    type: 'Open data catalogue',
    description:
      'City of Regina CKAN open data with civic datasets including parcels, infrastructure, and community indicators.',
    url: 'https://opendata.regina.ca/',
    tags: ['regina', 'open data', 'ckan'],
  },
  {
    name: 'Victoria Open Data — Parks and Recreation',
    level: 'Municipal',
    jurisdiction: 'Victoria',
    category: 'open-data',
    type: 'Parks dataset',
    description:
      'Parks, trails, and recreation facility datasets on the City of Victoria open data portal.',
    url: 'https://opendata.victoria.ca/browse?category=Parks+%26+Recreation',
    tags: ['victoria', 'parks', 'open data', 'recreation'],
  },
  {
    name: 'Kelowna Open Data — Transportation',
    level: 'Municipal',
    jurisdiction: 'Kelowna',
    category: 'open-data',
    type: 'Transportation datasets',
    description:
      'Kelowna transportation and traffic datasets including road networks and active transportation on the open data hub.',
    url: 'https://opendata.kelowna.ca/',
    tags: ['kelowna', 'transportation', 'open data'],
  },
  {
    name: 'Peel Region — Open Data Portal',
    level: 'Regional',
    jurisdiction: 'Peel',
    category: 'open-data',
    type: 'Regional open data',
    description:
      'Peel Region open data catalogue with health, planning, and community datasets for Brampton, Mississauga, and Caledon.',
    url: 'https://data.peelregion.ca/',
    tags: ['peel', 'open data', 'regional', 'gta'],
  },
  {
    name: 'York Region — Open Data',
    level: 'Regional',
    jurisdiction: 'York Region',
    category: 'open-data',
    type: 'Regional open data',
    description:
      'York Region open data portal with regional datasets on demographics, health, and municipal services.',
    url: 'https://www.york.ca/en/about-the-region/open-data.aspx',
    tags: ['york region', 'open data', 'regional', 'gta'],
  },
  // --- additional M/P/R to reach >60% share ---
  {
    name: 'Newfoundland and Labrador Lobbyist Registry Search',
    level: 'Provincial',
    jurisdiction: 'Newfoundland and Labrador',
    category: 'lobbyist',
    type: 'Lobbyist registry search',
    description:
      'Free public search of registered lobbyists in Newfoundland and Labrador via the CADO portal — filter by lobbyist, client, and activity dates.',
    url: 'https://cado.eservices.gov.nl.ca/Lobbyist/LobbyistSearch.aspx',
    tags: ['newfoundland', 'lobbyists', 'registry', 'search'],
  },
  {
    name: 'Montreal Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Montreal',
    category: 'planning-zoning',
    type: 'Building permits dataset',
    description:
      'Construction, transformation, and demolition permits issued by Montreal boroughs — download CSV, GeoJSON, or SHP from Données Montréal.',
    url: 'https://donnees.montreal.ca/dataset/permis-construction',
    tags: ['montreal', 'building permits', 'open data', 'quebec'],
  },
  {
    name: 'Laval Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Laval',
    category: 'council',
    type: 'Council meetings',
    description:
      'Ville de Laval council session agendas, minutes, and video for municipal council meetings.',
    url: 'https://www.laval.ca/Pages/Fr/Citoyens/conseil-municipal/seances-du-conseil.aspx',
    tags: ['laval', 'quebec', 'council', 'agendas'],
  },
  {
    name: 'Barrie Council Meetings — eScribe',
    level: 'Municipal',
    jurisdiction: 'Barrie',
    category: 'council',
    type: 'Council meetings portal',
    description:
      'Barrie City Council and committee agendas, minutes, and attachments on the public eScribe portal.',
    url: 'https://pub-barrie.escribemeetings.com/',
    tags: ['barrie', 'council', 'escribe', 'agendas'],
  },
  {
    name: 'Winnipeg Council Meetings — eScribe',
    level: 'Municipal',
    jurisdiction: 'Winnipeg',
    category: 'council',
    type: 'Council meetings portal',
    description:
      'Winnipeg City Council and standing policy committee agendas, minutes, and video on eScribe.',
    url: 'https://pub-winnipeg.escribemeetings.com/',
    tags: ['winnipeg', 'council', 'escribe', 'agendas'],
  },
  {
    name: 'Thunder Bay Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Thunder Bay',
    category: 'council',
    type: 'Council meetings',
    description:
      'Thunder Bay City Council meeting agendas, minutes, and webcasts.',
    url: 'https://www.thunderbay.ca/en/city-hall/council/council-meetings.aspx',
    tags: ['thunder bay', 'council', 'agendas', 'minutes'],
  },
  {
    name: 'Montreal Heritage Sites Open Data',
    level: 'Municipal',
    jurisdiction: 'Montreal',
    category: 'heritage',
    type: 'Heritage dataset',
    description:
      'Montreal heritage buildings and sites dataset on Données Montréal for mapping protected cultural properties.',
    url: 'https://donnees.montreal.ca/dataset/heritage',
    tags: ['montreal', 'heritage', 'open data', 'quebec'],
  },
  {
    name: 'Quebec City Building Permits Open Data',
    level: 'Municipal',
    jurisdiction: 'Quebec City',
    category: 'planning-zoning',
    type: 'Building permits',
    description:
      'Quebec City construction and renovation permits on the municipal open data portal.',
    url: 'https://www.donneesquebec.ca/recherche/dataset?organization=ville-de-quebec',
    tags: ['quebec city', 'building permits', 'open data'],
  },
  {
    name: 'Manitoba Lobbyist Registry',
    level: 'Provincial',
    jurisdiction: 'Manitoba',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description:
      'Manitoba public registry of lobbyists registered under the Lobbyists Registration Act.',
    url: 'https://www.manitobalobbyistsregistry.ca/',
    tags: ['manitoba', 'lobbyists', 'registry'],
  },
  {
    name: 'Prince Edward Island Lobbyist Registry',
    level: 'Provincial',
    jurisdiction: 'Prince Edward Island',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description:
      'PEI lobbyist registration search under the Lobbyist Registration Act.',
    url: 'https://www.princeedwardisland.ca/en/information/executive-council-office/lobbyist-registration',
    tags: ['pei', 'lobbyists', 'registry'],
  },
  {
    name: 'St. John\'s Council Meetings',
    level: 'Municipal',
    jurisdiction: 'St. John\'s',
    category: 'council',
    type: 'Council meetings',
    description:
      'St. John\'s City Council meeting agendas, minutes, and webcasts for council sessions.',
    url: 'https://www.stjohns.ca/city-hall/city-council/council-meetings',
    tags: ['st johns', 'newfoundland', 'council', 'agendas'],
  },
  {
    name: 'Interior Health — Community Health Data',
    level: 'Provincial',
    jurisdiction: 'British Columbia',
    category: 'health-region',
    type: 'Health data',
    description:
      'Interior Health population health and community health data reports for BC Interior health authority communities.',
    url: 'https://www.interiorhealth.ca/about-us/accountability/health-data',
    tags: ['interior health', 'bc', 'health data', 'population health'],
  },
  {
    name: 'Longueuil Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Longueuil',
    category: 'council',
    type: 'Council meetings',
    description:
      'Ville de Longueuil municipal council session agendas, minutes, and video.',
    url: 'https://www.longueuil.quebec/fr/seances-du-conseil',
    tags: ['longueuil', 'quebec', 'council', 'agendas'],
  },
  {
    name: 'Sherbrooke Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Sherbrooke',
    category: 'council',
    type: 'Council meetings',
    description:
      'Ville de Sherbrooke council meeting agendas, minutes, and webcasts.',
    url: 'https://www.sherbrooke.ca/fr/vie-municipale/conseil-municipal/seances-du-conseil',
    tags: ['sherbrooke', 'quebec', 'council', 'agendas'],
  },
  {
    name: 'Fredericton Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Fredericton',
    category: 'council',
    type: 'Council meetings',
    description:
      'City of Fredericton council meeting agendas, minutes, and video.',
    url: 'https://www.fredericton.ca/en/your-government/mayor-council/council-meetings',
    tags: ['fredericton', 'council', 'new brunswick', 'agendas'],
  },
  {
    name: 'Moncton Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Moncton',
    category: 'council',
    type: 'Council meetings',
    description:
      'City of Moncton council and committee meeting agendas and minutes.',
    url: 'https://www.moncton.ca/city-hall/mayor-council/council-meetings',
    tags: ['moncton', 'council', 'new brunswick', 'agendas'],
  },
  {
    name: 'Saskatchewan Lobbyist Registry',
    level: 'Provincial',
    jurisdiction: 'Saskatchewan',
    category: 'lobbyist',
    type: 'Lobbyist registry',
    description:
      'Saskatchewan public lobbyist registry search under the Lobbyists Act.',
    url: 'https://www.sasklobbyistregistry.ca/',
    tags: ['saskatchewan', 'lobbyists', 'registry', 'search'],
  },
  {
    name: 'Alberta Health Services — Zone Maps and Data',
    level: 'Provincial',
    jurisdiction: 'Alberta',
    category: 'health-region',
    type: 'Health authority data',
    description:
      'Alberta Health Services zone boundaries, facility locations, and public health data resources.',
    url: 'https://www.albertahealthservices.ca/about/Page13218.aspx',
    tags: ['alberta', 'ahs', 'health regions', 'data'],
  },
  {
    name: 'Northwest Territories Open Data',
    level: 'Provincial',
    jurisdiction: 'Northwest Territories',
    category: 'open-data',
    type: 'Territorial open data',
    description:
      'GNWT open data catalogue with territorial datasets on infrastructure, environment, and community services.',
    url: 'https://www.opendata.gov.nt.ca/',
    tags: ['nwt', 'open data', 'territorial'],
  },
  {
    name: 'Nunavut Open Data Portal',
    level: 'Provincial',
    jurisdiction: 'Nunavut',
    category: 'open-data',
    type: 'Territorial open data',
    description:
      'Government of Nunavut open data portal for territorial datasets and spatial information.',
    url: 'https://www.gov.nu.ca/information/open-data',
    tags: ['nunavut', 'open data', 'territorial'],
  },
  {
    name: 'Cape Breton Regional Municipality Council',
    level: 'Municipal',
    jurisdiction: 'Cape Breton',
    category: 'council',
    type: 'Council meetings',
    description:
      'CBRM council meeting agendas, minutes, and video for the Cape Breton Regional Municipality.',
    url: 'https://www.cbrm.ns.ca/municipal-government/mayor-council/council-meetings',
    tags: ['cape breton', 'council', 'nova scotia', 'agendas'],
  },
  {
    name: 'Red Deer City Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Red Deer',
    category: 'council',
    type: 'Council meetings',
    description:
      'Red Deer City Council agendas, minutes, and meeting video.',
    url: 'https://www.reddeer.ca/city-government/mayor-council/council-meetings/',
    tags: ['red deer', 'alberta', 'council', 'agendas'],
  },
  {
    name: 'Medicine Hat City Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Medicine Hat',
    category: 'council',
    type: 'Council meetings',
    description:
      'Medicine Hat City Council agendas, minutes, and meeting schedules.',
    url: 'https://www.medicinehat.ca/en/government/city-council/council-meetings.aspx',
    tags: ['medicine hat', 'alberta', 'council', 'agendas'],
  },
  {
    name: 'Brandon City Council Meetings',
    level: 'Municipal',
    jurisdiction: 'Brandon',
    category: 'council',
    type: 'Council meetings',
    description:
      'Brandon City Council agendas, minutes, and meeting video.',
    url: 'https://www.brandon.ca/government/mayor-council/council-meetings',
    tags: ['brandon', 'manitoba', 'council', 'agendas'],
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
  console.log(`Batch 3 — Added: ${added}, Skipped duplicates: ${skipped}, Total: ${existing.length}`);
}

main();
