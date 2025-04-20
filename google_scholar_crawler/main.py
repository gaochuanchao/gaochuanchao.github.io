from scholarly import scholarly
import time
import jsonpickle
import json
from datetime import datetime
import os

print("[INFO] Starting Scholar fetch...")
start = time.time()
try:
    author: dict = scholarly.search_author_id(os.environ['GOOGLE_SCHOLAR_ID'])
except Exception as e:
    print(f"[ERROR] Error during author search: {e}")
    exit(1)
print(f"[INFO] Author search completed in {time.time() - start} seconds")

print("[INFO] Filling author data...")
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
print("[INFO] Successfully fetched author info.")

name = author['name']
author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
print(json.dumps(author, indent=2))
os.makedirs('results', exist_ok=True)
with open(f'results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(f'results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)
