#!/usr/bin/env python3
import json
import urllib.request
import ssl
from concurrent.futures import ThreadPoolExecutor, as_completed

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'identity',
    'Connection': 'keep-alive',
}

def check_url(url, method='HEAD', timeout=15):
    try:
        req = urllib.request.Request(url, method=method, headers=headers)
        response = urllib.request.urlopen(req, context=ctx, timeout=timeout)
        return response.status, response.geturl()
    except urllib.error.HTTPError as e:
        return e.code, e.geturl()
    except Exception as e:
        return f"ERR:{type(e).__name__}", str(e)

with open('data/resources.json') as f:
    data = json.load(f)

# Check only broken ones from first pass + some 403s
urls_to_check = [
    # 404s
    ("Cornwall Council Minutes Open Data", "https://www.cornwall.ca/en/city-hall/open-data.aspx"),
    ("Cape Breton Regional Municipality Council", "https://www.cbrm.ns.ca/municipal-government/mayor-council/council-meetings"),
    ("Regina Council Meetings", "https://www.regina.ca/city-government/city-council/council-meetings/"),
    ("Thunder Bay Council Meetings", "https://www.thunderbay.ca/en/city-hall/council/council-meetings.aspx"),
    ("North Bay Drinking Water Quality Reports", "https://www.northbay.ca/en/living-here/water-quality.aspx"),
    ("Burlington Heritage Register", "https://www.burlington.ca/en/your-city/heritage.aspx"),
    ("New Brunswick Registry of Lobbyists", "https://www.snb.ca/e/1000/lobbyists.htm"),
    ("Nova Scotia Lobbyist Registry", "https://www.novascotia.ca/snsmr/access/lobbyist.asp"),
    ("Niagara Falls Open Data", "https://www.niagarafalls.ca/services/open/data"),
    ("Ottawa-Carleton District School Board School Locator", "https://ocdsb.ca/school-locator"),
    ("Burlington Transit GTFS", "https://www.burlington.ca/en/news/open-data.aspx"),
    # 405s
    ("Banff Open Data", "http://www.banffopendata.ca/"),
    ("Vancouver School Board", "https://www.vsb.bc.ca/schools/find-a-school"),
    ("Louis Riel School Division", "https://www.lrsd.net/locate-a-school"),
    ("Pembina Trails School Division", "https://www.pembinatrails.ca/school-locator"),
    # 500s
    ("Elections Canada — Electoral Districts Map", "https://www.elections.ca/content2.aspx"),
    ("Elections Canada — Results Tool", "https://www.elections.ca/content.aspx?section=res&dir=cir/list&document=index&lang=e"),
    ("Elections Canada — Voter Information Service", "https://www.elections.ca/content.aspx"),
    # 503
    ("Utilities Consumer Advocate Alberta", "https://ucahelps.alberta.ca/"),
    # URLError
    ("Tribunal administratif du logement (TAL) Quebec", "https://www.tal.gouv.qc.ca/en"),
    ("Winnipeg School Division", "https://winnipegsd.ca/find-a-school"),
    ("Peel Region Food Check", "https://opendata.peelregion.ca/"),
    # Some 403s to verify
    ("Kelowna Council Meetings", "https://www.kelowna.ca/city-hall/council/council-meetings"),
    ("London Council and Committee Meetings", "https://www.london.ca/city-hall/mayor-council/council-committee-meetings"),
    ("Toronto Public Library Digital Archive", "https://digitalarchive.tpl.ca/"),
    ("Vancouver Heritage Register", "https://vancouver.ca/home-property-development/heritage-register.aspx"),
    ("London Open Data", "https://london.ca/open-data"),
    ("Norfolk County Open Data", "http://opendata.norfolkcounty.ca/"),
    ("Ottawa Heritage Register", "https://ottawa.ca/en/planning-development-and-construction/heritage-conservation/heritage-register"),
    ("Nunavut Open Data Portal", "https://www.gov.nu.ca/information/open-data"),
    ("Barrie Planning Map", "https://gispublic.barrie.ca/arcgis/rest/services/Public/PlanningDevelopment_SM_Dynamic/MapServer"),
    ("Caledon Trails", "https://maps.caledon.ca/calgis/rest/services/External/Trails/MapServer"),
    ("CanLII", "https://www.canlii.org/"),
    ("Carrefour Lobby Quebec", "https://www.carrefourlobby.quebec/"),
    ("Revenu Quebec", "https://www.revenuquebec.ca/en/online-services/online-services"),
    ("TransLink GTFS", "https://www.translink.ca/about-us/doing-business-with-translink/app-developer-resources"),
    ("Regina Transit", "https://www.regina.ca/transportation-roads-parking/transit/"),
    ("Yukon Driver Licensing", "https://yukon.ca/en/driving-and-transportation/driver-licensing"),
    ("OPG Dam Safety", "https://www.opg.com/power-safety/dams/"),
    ("OPG Nuclear", "https://www.opg.com/power-generation/nuclear/"),
]

print("Re-checking with GET and better headers...")
for name, url in urls_to_check:
    for method in ['HEAD', 'GET']:
        status, info = check_url(url, method=method)
        print(f"[{method}] {status} | {name} | {url}")
        if str(status).startswith('2') or str(status) in ('301','302','303','307','308'):
            break
    print()
