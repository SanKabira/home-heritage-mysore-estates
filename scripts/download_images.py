#!/usr/bin/env python3
import html
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path
from shutil import copyfile
from urllib.parse import urlparse, parse_qs

PAGE_URL = 'https://readdy.link/preview/7d7af771-afaf-4a10-ae44-a599bc7d8b7f/1644828'
DEST = Path(__file__).resolve().parents[1] / 'public' / 'images'
DEST.mkdir(parents=True, exist_ok=True)

UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
HEADERS = {
    'User-Agent': UA,
    'Accept': 'image/avif,image/webp,image/apng,image/*;q=0.8,*/*;q=0.5',
    'Referer': PAGE_URL,
}

print(f'Downloading HTML from {PAGE_URL}')
req = urllib.request.Request(PAGE_URL, headers={'User-Agent': UA})
with urllib.request.urlopen(req, timeout=30) as r:
    raw = r.read().decode('utf-8', errors='ignore')
text = html.unescape(raw)

urls = set()
# Extract URLs from <img src="..."> and CSS url('...') patterns
patterns = [
    r'src\s*=\s*\"(https?://[^\"]*readdy\.ai/api/search-image[^\"]*)\"',
    r"src\s*=\s*\'(https?://[^\']*readdy\.ai/api/search-image[^\']*)\'",
    r'url\(\s*\"(https?://[^\"]*readdy\.ai/api/search-image[^\"]*)\"\s*\)',
    r"url\(\s*\'(https?://[^\']*readdy\.ai/api/search-image[^\']*)\'\s*\)",
]
for patt in patterns:
    for u in re.findall(patt, text, flags=re.I):
        u2 = u.strip().strip('"\'')
        urls.add(u2)

if not urls:
    print('No image URLs found')
else:
    print(f'Found {len(urls)} candidate image URLs')

EXT_BY_CT = {
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/gif': '.gif',
    'image/svg+xml': '.svg',
}

ok = 0
for idx, u in enumerate(sorted(urls)):
    try:
        r = urllib.request.Request(u, headers=HEADERS)
        with urllib.request.urlopen(r, timeout=12) as resp:
            data = resp.read()
            ct = (resp.headers.get('Content-Type') or '').split(';', 1)[0].strip().lower()
            ext = EXT_BY_CT.get(ct or 'image/jpeg', '.jpg')
            q = parse_qs(urlparse(u).query)
            stem = q.get('seq', [''])[0] or f'image-{idx+1:02d}'
            out = DEST / f'{stem}{ext}'
            out.write_bytes(data)
            ok += 1
            print(f'Saved {out.name} ({ct or "unknown"})')
    except urllib.error.HTTPError as e:
        print(f'HTTP {e.code} for {u}')
    except Exception as e:
        print(f'Error for {u}: {e}')

print(f'Downloaded {ok} images.')

# Create expected filenames used by the app components when possible
mapping = {
    'hero-drone.jpg': 'mysore-caricature-hero',
    'newspaper-frontpage.jpg': 'newspaper-caricature',
    'short1.jpg': 'palace-interior-caricature',
    'short2.jpg': 'cityscape-caricature',
    'short3.jpg': 'restoration-caricature',
    'caricature1.jpg': 'palace-caricature',
    'caricature2.jpg': 'villa-caricature',
    'caricature3.jpg': 'tipu-mansion-caricature',
}
existing = {p.stem: p for p in DEST.glob('*') if p.is_file()}
for target, stem in mapping.items():
    src = existing.get(stem)
    if not src:
        continue
    target_path = DEST / target
    if not target_path.exists():
        copyfile(src, target_path)
        print(f'Created {target} from {src.name}')

print('Done.')