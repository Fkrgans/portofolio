from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
p = Path('public/portofolio2.png')
img = Image.new('RGB', (1200, 800), color=(20, 50, 120))
d = ImageDraw.Draw(img)
try:
    f = ImageFont.truetype('arial.ttf', 96)
except Exception:
    f = ImageFont.load_default()
text = 'Portofolio 2'
box = d.textbbox((0, 0), text, font=f)
w = box[2] - box[0]
h = box[3] - box[1]
d.text(((1200-w)/2, (800-h)/2), text, fill=(255,255,255), font=f)
img.save(p, 'PNG')
print('updated', p.exists(), p.stat().st_size)
