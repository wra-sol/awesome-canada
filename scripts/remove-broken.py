import json
import sys

DATA = '/data/hermes/awesome-canada/data/resources.json'

broken_urls = [
    "https://www.ourcommons.ca/",
    "https://www.quebec.ca/en/family-and-support-for-individuals/financial-assistance/social-assistance-social-solidarity",
    "https://www.ontario.ca/page/apply-ohip-card",
    "https://affordablehousingonline.com/reduced-rent/canada",
    "https://www2.snb.ca/content/snb/en/sites/rentalsman.html",
    "https://beta.novascotia.ca/apply-residential-tenancy-dispute-hearing",
    "https://www.mississauga.ca/en/transit",
    "https://www.stjohns.ca/en/city-services/transit.aspx",
    "https://www.saultstemarie.ca/city-hall/departments/transit/",
    "https://www.ontario.ca/page/services-related-drivers-licences",
]

with open(DATA, 'r') as f:
    data = json.load(f)

removed = 0
new_data = []
for entry in data:
    if entry.get('url') in broken_urls:
        removed += 1
        print(f"Removing: {entry['name']} ({entry['url']})")
    else:
        new_data.append(entry)

with open(DATA, 'w') as f:
    json.dump(new_data, f, indent=2)
    f.write('\n')

print(f"Removed {removed} entries. Total now: {len(new_data)}")
