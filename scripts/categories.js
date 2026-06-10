/**
 * Canonical list of functional categories and region ordering for awesome-canada.
 * Top-level organization is by FUNCTION. Within each function, entries are
 * grouped by REGION.
 *
 * The CATEGORIES array is ordered for display in the README.
 */

const CATEGORIES = [
  { id: 'open-data',        title: 'Open Data & Statistics',       icon: '📊' },
  { id: 'planning-zoning',  title: 'Planning, Zoning & Development', icon: '🏗️' },
  { id: 'council',          title: 'Council, Democracy & Transparency', icon: '🏛️' },
  { id: 'budget',           title: 'Budget, Finance & Procurement', icon: '💳' },
  { id: 'gov-services',     title: 'Government Services & ID',     icon: '🪪' },
  { id: 'taxes',            title: 'Taxes & Revenue',              icon: '💰' },
  { id: 'finance',          title: 'Finance, Banking & Economy',   icon: '🏦' },
  { id: 'business',         title: 'Business & Procurement',       icon: '🏢' },
  { id: 'employment',       title: 'Employment & Labour',          icon: '💼' },
  { id: 'education',        title: 'Education & Student Aid',      icon: '🎓' },
  { id: 'school-board',     title: 'Schools, Education & Boards',  icon: '🎒' },
  { id: 'immigration',      title: 'Immigration & Citizenship',    icon: '🛂' },
  { id: 'health',           title: 'Health & Wellness',            icon: '🩺' },
  { id: 'health-region',    title: 'Health Regions & Local Health', icon: '🏥' },
  { id: 'benefits',         title: 'Benefits & Social Services',   icon: '🤝' },
  { id: 'housing',          title: 'Housing & Real Estate',        icon: '🏠' },
  { id: 'transport-roads',  title: 'Transportation & Roads',       icon: '🛣️' },
  { id: 'transit',          title: 'Transit & Mobility',           icon: '🚌' },
  { id: 'aviation-marine',  title: 'Aviation, Marine & Rail',      icon: '✈️' },
  { id: 'parks',            title: 'Parks, Trails & Outdoors',     icon: '🌲' },
  { id: 'environment',      title: 'Environment, Climate & Monitoring', icon: '🌍' },
  { id: 'weather',          title: 'Weather & Climate',              icon: '🌦️' },
  { id: 'utilities',        title: 'Energy & Utilities',           icon: '⚡' },
  { id: 'agriculture',      title: 'Agriculture, Food & Drink',    icon: '🌾' },
  { id: 'science',          title: 'Science, Research & Space',    icon: '🔬' },
  { id: 'culture',          title: 'Heritage, Culture & Arts',     icon: '🎭' },
  { id: 'heritage',         title: 'Heritage Registers & Public Art', icon: '🖼️' },
  { id: 'lobbyist',         title: 'Lobbyists, Ethics & Disclosure', icon: '📋' },
  { id: 'safety',           title: 'Emergency, Safety & Alerts',   icon: '🚨' },
  { id: 'justice',          title: 'Justice, Courts & Legal',      icon: '⚖️' },
  { id: 'consumer',         title: 'Consumer Protection & Privacy', icon: '🛡️' },
  { id: 'indigenous',       title: 'Indigenous Services & Treaties', icon: '🪶' },
  { id: 'veterans',         title: 'Veterans & Military',          icon: '🎖️' },
  { id: 'elections',        title: 'Elections & Democracy',        icon: '🗳️' },
  { id: 'telecom',          title: 'Telecommunications & Digital', icon: '📡' },
];

const CATEGORY_IDS = new Set(CATEGORIES.map(c => c.id));

/**
 * Region groups (in display order). Each jurisdiction maps to one region.
 */
const REGIONS = [
  { id: 'federal',   title: 'Federal / National' },
  { id: 'bc',        title: 'British Columbia' },
  { id: 'ab',        title: 'Alberta' },
  { id: 'sk',        title: 'Saskatchewan' },
  { id: 'mb',        title: 'Manitoba' },
  { id: 'on',        title: 'Ontario' },
  { id: 'qc',        title: 'Quebec' },
  { id: 'atlantic',  title: 'Atlantic Canada (NB, NS, PE, NL)' },
  { id: 'north',     title: 'Northern Canada (YT, NT, NU)' },
];

const JURISDICTION_TO_REGION = {
  'Canada':                    'federal',
  'Parks Canada':              'federal',

  'British Columbia':          'bc',
  'Vancouver':                 'bc',
  'Victoria':                  'bc',
  'Kelowna':                   'bc',
  'Metro Vancouver':           'bc',
  'Abbotsford':                'bc',
  'Burnaby':                   'bc',
  'Surrey':                    'bc',
  'Nanaimo':                   'bc',
  'Kamloops':                  'bc',
  'Prince George':             'bc',
  'Whistler':                  'bc',
  'New Westminster':           'bc',
  'Saanich':                   'bc',
  'Coquitlam':                 'bc',
  'Langley':                   'bc',
  'Courtenay':                 'bc',
  'White Rock':                'bc',
  'Maple Ridge':               'bc',

  'Alberta':                   'ab',
  'Calgary':                   'ab',
  'Edmonton':                  'ab',
  'Lethbridge':                'ab',
  'Airdrie':                   'ab',
  'Red Deer':                  'ab',
  'Strathcona County':         'ab',
  'St. Albert':                'ab',
  'Grande Prairie':            'ab',
  'Medicine Hat':              'ab',
  'Banff':                     'ab',
  'Canmore':                   'ab',

  'Saskatchewan':              'sk',
  'Regina':                    'sk',
  'Saskatoon':                 'sk',
  'Moose Jaw':                 'sk',

  "Brandon":                   'mb',
  "Winnipeg":                  'mb',
  "Thompson":                  'mb',
  "Manitoba":                  'mb',

  'Ontario':                   'on',
  'Ontario/GTA':               'on',
  'Toronto':                   'on',
  'Toronto Region':            'on',
  'Ottawa':                    'on',
  'Mississauga':               'on',
  'Brampton':                  'on',
  'Hamilton':                  'on',
  'Kitchener':                 'on',
  'Waterloo':                  'on',
  'London':                    'on',
  'Windsor':                   'on',
  'Burlington':                'on',
  'Oakville':                  'on',
  'Guelph':                    'on',
  'Grand River Watershed':     'on',
  'Lake Simcoe':               'on',
  'Halton':                    'on',
  'Credit Valley':             'on',
  'Niagara':                   'on',
  'Mississippi River':         'on',
  'York Region':               'on',
  'Durham':                    'on',
  'Peel':                      'on',
  'Barrie':                    'on',
  'Richmond Hill':             'on',
  'Markham':                   'on',
  'Vaughan':                   'on',
  'Kingston':                  'on',
  'Thunder Bay':               'on',
  'Cambridge':                 'on',
  'Oshawa':                    'on',
  'Greater Sudbury':           'on',
  'Brantford':                 'on',
  'Pickering':                 'on',
  'Ajax':                      'on',
  'Peterborough':              'on',
  'Milton':                    'on',
  'Haldimand County':          'on',
  'Norfolk County':            'on',
  'Huron County':              'on',
  'Grey County':               'on',
  'Newmarket':                 'on',
  'Welland':                   'on',
  'Niagara Falls':             'on',
  'St. Catharines':            'on',
  'Sarnia':                    'on',
  'North Bay':                 'on',
  'Belleville':                'on',
  'Cornwall':                  'on',
  'Whitby':                    'on',
  'Woodstock':                 'on',
  'Orillia':                   'on',
  'Timmins':                   'on',
  'Caledon':                   'on',
  'Sault Ste. Marie':          'on',
  'St. Thomas':                'on',
  'Clarington':                'on',

  'Quebec':                    'qc',
  'Quebec City':               'qc',
  'Montreal':                  'qc',
  'Gatineau':                  'qc',
  'Lévis':                     'qc',
  'Trois-Rivières':            'qc',
  'Saguenay':                  'qc',
  'Laval':                     'qc',
  'Longueuil':                 'qc',
  'Sherbrooke':                'qc',
  'Shawinigan':                'qc',
  'Rimouski':                  'qc',
  'Repentigny':                'qc',
  'Rouyn-Noranda':             'qc',

  'New Brunswick':             'atlantic',
  'Nova Scotia':               'atlantic',
  'PEI':                       'atlantic',
  'Prince Edward Island':      'atlantic',
  "Newfoundland and Labrador": 'atlantic',
  "Newfoundland":              'atlantic',
  "St. John's":                'atlantic',
  "Paradise":                  'atlantic',
  "Mount Pearl":               'atlantic',
  "Corner Brook":              'atlantic',
  "Gander":                    'atlantic',
  "Grand Falls-Windsor":       'atlantic',
  "Halifax":                   'atlantic',
  'Fredericton':               'atlantic',
  'Moncton':                   'atlantic',
  'Saint John':                'atlantic',
  'Charlottetown':             'atlantic',
  'Cape Breton':               'atlantic',
  'East Hants':                'atlantic',
  'Miramichi':                 'atlantic',
  'Truro':                     'atlantic',

  'Yukon':                     'north',
  'Northwest Territories':     'north',
  'Nunavut':                   'north',
  'Whitehorse':                'north',
  'Yellowknife':               'north',
  'Iqaluit':                   'north',
};

/**
 * Heuristic categorizer: returns a category id for a resource.
 * Rules use explicit maps first (name/URL matching), then fall back to
 * keyword matching on name/type/description/tags.
 */
function categorize(entry) {
  const n    = (entry.name || '').toLowerCase();
  const d    = (entry.description || '').toLowerCase();
  const t    = (entry.type || '').toLowerCase();
  const url  = (entry.url || '').toLowerCase();
  const tags = (entry.tags || []).map(s => s.toLowerCase());
  const hay  = `${n} ${d} ${t} ${tags.join(' ')} ${url}`;

  const has = (...words) => words.some(w => hay.includes(w));

  if (entry.jurisdiction === 'Parks Canada') {
    if (has('historic', 'canal', 'heritage', 'fort ', 'fortress', 'battlefield', 'monument', 'culture'))
      return 'culture';
    return 'parks';
  }

  if (has('elections', 'voter', 'electoral district', 'hansard', 'legislature', 'parliament',
          'consultation', 'participate', 'civic', 'democracy', 'open government partnership',
          'canada gazette', 'legisinfo'))
    return 'elections';

  if (has('veterans', 'my vac', 'cfmws', 'canadian forces', 'military history',
          'remembrance', 'war memorial', 'project \'44'))
    return 'veterans';

  if (has('indigenous', 'first nation', 'first nations', 'inuit', 'm\u00e9tis', 'metis',
          'treaty', 'treaties', 'nctr', 'jordan\'s principle'))
    return 'indigenous';

  if (has('ferry', 'ferries', 'navcanada', 'nav canada', 'aeronautical', 'flight planning',
          'via rail', 'marine atlantic', 'coast guard', 'port authority', 'aviation',
          'airport authority', 'airport'))
    return 'aviation-marine';

  if (has('transit', 'go transit', 'translink', 'prest', 'triplinx', 'bike share',
          'subway', 'ctrain', 'o-train', 'lrt', 'bus ', 'trip planner'))
    return 'transit';

  if (has('road', '511', 'drivebc', 'driver', 'driver\'s licence', 'drivers licence',
          'vehicle registration', 'plate', 'registrar of motor vehicles', 'icbc',
          'saaq', 'highway', 'dmv', 'snow plow', 'traffic', 'parking', 'road ban',
          'cameras', 'road conditions'))
    return 'transport-roads';

  if (has('outage', 'hydro', 'electric', 'power outage', 'epcor', 'enmax', 'atco',
          'fortis', 'natural gas', 'gas outage', 'nuclear', 'dam safety',
          'water quality', 'utility', 'utilities'))
    return 'utilities';

  if (has('agriculture', 'farm', 'beef', 'dairy', 'grain', 'wine', 'vqa', 'foodland',
          'liquor control', 'lcbo', 'saq', 'nslc', 'cfia', 'canadian food inspection',
          'pari-mutuel'))
    return 'agriculture';

  if (has('parks canada', 'national park', 'provincial park', 'park finder',
          'albertaparks', 'bc parks', 'ontario parks', 'saskparks', 'camp', 'camping',
          'recreation site', 'trails', 'trail', 'outdoor', 'recreation map',
          'fishing licence', 'hunting licence', 'public land use') &&
      !has('transit'))
    return 'parks';

  if (has('wildlife', 'species at risk', 'hinterland', 'great lakes', 'climate atlas',
          'water office', 'ice service', 'weather', 'aqhi', 'air quality',
          'environment', 'environmental assessment', 'contaminated site',
          'freshwater', 'geogratis', 'water monitoring'))
    return 'environment';

  if (has('wildfire', 'disaster', 'earthquake', 'recall', 'safety alert', 'alertready',
          'emergency', 'tsunami', 'flood warning', 'search and rescue'))
    return 'safety';

  if (has('space agency', 'csa', 'nrc ', 'national research council', 'research council',
          'triumf', 'perimeter institute', 'snolab', 'genome canada', 'polar knowledge',
          'ocean networks'))
    return 'science';

  if (has('library and archives', 'virtual museum', 'museum', 'gallery', 'heritage register',
          'historica', 'nfb', 'national film', 'mint', 'arts council', 'historic sites',
          'historic site', 'heritage property', 'heritage place', 'archives',
          'genealog', 'fort york', 'walk of fame', 'hockey hall'))
    return 'culture';

  if (has('court', 'tribunal', 'canlii', 'decisions', 'appeal', 'justice',
          'public prosecution', 'ombuds', 'legal aid', 'law society'))
    return 'justice';

  if (has('competition bureau', 'privacy commissioner', 'anti-spam', 'consumer protection',
          'report a problem', 'crtc', 'telemarketing', 'do not call',
          'report broadband', 'consumer complaint'))
    return 'consumer';

  if (has('immigration', 'ircc', 'express entry', 'citizenship test', 'citizenship',
          'visa application', 'come to canada', 'refugee', 'pgp', 'work permit',
          'study permit', 'provincial nominee'))
    return 'immigration';

  if (has('job bank', 'wages', 'labour market', 'esa', 'employment standards',
          'wsib', 'roe web', 'service canada', 'occupation', 'noc', 'apprenticeship',
          'red seal'))
    return 'employment';

  if (has('osap', 'student loan', 'student aid', 'canada learning bond', 'resp',
          'ouac', 'applyalberta', 'educanet', 'apprenticeship', 'red seal',
          'school board', 'ministry of education', 'post-secondary'))
    return 'education';

  if (has('health card', 'ohip', 'msp', 'nl health line', '8-1-1', '811 ',
          'telehealth', 'hospital', 'wait time', 'cancer care', 'vaccine',
          'drug product', 'clinical trial', 'infoway', 'cihi', 'mental health',
          'public health'))
    return 'health';

  if (has('benefits finder', 'child and family benefits', 'retirement income calculator',
          'cpp ', 'old age security', 'gis ', 'oas', 'seniors', 'disability tax',
          'canada child benefit', 'benefits'))
    return 'benefits';

  if (has('housing', 'cmhc', 'rental', 'tenant', 'land registry', 'land titles',
          'property assessment', 'mpac', 'bc assessment', 'property tax calculator',
          'teranet', 'real estate', 'mortgage', 'ltb'))
    return 'housing';

  if (has('property tax', 'land transfer tax', 'cra ', 'revenue agency', 'tax portal',
          'gst/hst', 'tax credit', 'tax brackets', 'tfsa', 'rrsp', 'netfile',
          'disability tax credit', 'charities listing', 'taxpayer'))
    return 'taxes';

  if (has('bank of canada', 'inflation calculator', 'exchange rate', 'cdic',
          'sedar', 'osc ', 'bcsc', 'asc ', 'securities commission', 'fcac',
          'financial consumer', 'bdc', 'edc', 'export development', 'economy'))
    return 'finance';

  if (has('procurement', 'merx', 'buyandsell', 'buy and sell', 'business registry',
          'corporate registry', 'corporations canada', 'ccc', 'ccc.ca', 'tenders'))
    return 'business';

  if (has('open data', 'geohub', 'mapper', 'geospatial', 'gis', 'vanmap', 'geoottawa',
          'datacatalogue', 'data catalogue', 'statistics', 'statcan', 'census',
          'budget explorer', 'budget portal', 'open maps', 'opendata',
          'municipal data', 'data hub'))
    return 'open-data';

  if (has('serviceontario', 'servicebc', 'service alberta', 'service canada',
          'vital statistics', 'health card', 'driver\'s licence', 'drivers licence',
          'photo card', 'digital id', 'onekey', 'ghost auth', '311'))
    return 'gov-services';

  if (has('crtc', 'broadband', 'coverage map', 'wireless', 'spectrum'))
    return 'telecom';

  return 'gov-services';
}

module.exports = {
  CATEGORIES,
  CATEGORY_IDS,
  REGIONS,
  JURISDICTION_TO_REGION,
  categorize,
};
