from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
root=Path(__file__).resolve().parents[1]
class P(HTMLParser):
 def __init__(self): super().__init__(); self.links=[]
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  for k in ('href','src'):
   if k in d:self.links.append(d[k])
errors=[];count=0
for f in root.rglob('*.html'):
 p=P()
 try:p.feed(f.read_text(encoding='utf-8',errors='ignore'))
 except Exception as ex:errors.append((f,'parse',str(ex)));continue
 for link in p.links:
  if not link or link.startswith(('#','mailto:','tel:','javascript:','data:','http://','https://')):continue
  path=unquote(urlparse(link).path)
  target=(f.parent/path).resolve()
  try:target.relative_to(root.resolve())
  except ValueError:continue
  count+=1
  if not target.exists():errors.append((f.relative_to(root),link,'missing'))
print(f'Checked {count} local links/assets across HTML files.')
if errors:
 print(f'{len(errors)} errors:')
 for x in errors[:100]:print(x)
 raise SystemExit(1)
print('All checked local links/assets exist.')
