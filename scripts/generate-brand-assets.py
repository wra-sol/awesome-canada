#!/usr/bin/env python3
"""Generate PNG brand assets (og-image, apple-touch-icon).

Requires Pillow (available on this machine; this script is run manually,
not part of the Pages build). The leaf polygon must stay in sync with
site/favicon.svg and the inline SVG path in the HTML templates.

Usage: python3 scripts/generate-brand-assets.py
Writes: site/og-image.png, site/apple-touch-icon.png
"""

import os
from PIL import Image, ImageDraw, ImageFont

# Leaf polygon in a 0..100 unit box, mirror-symmetric about x=50.
# Raised side arms, downward-angled lower lobes, deep separating notches.
LEAF = [
    (50, 4), (55, 15), (65, 9), (61.5, 23), (77, 14), (72.5, 30), (90, 33),
    (73, 45), (85, 62), (61, 55), (63, 73), (55, 65), (54, 82), (53, 96),
    (47, 96), (46, 82), (45, 65), (37, 73), (39, 55), (15, 62), (27, 45),
    (10, 33), (27.5, 30), (23, 14), (38.5, 23), (35, 9), (45, 15),
]

AMBER = (212, 162, 74)        # --color-amber
AMBER_DEEP = (184, 136, 52)
CHARCOAL = (26, 26, 26)       # --color-charcoal
SLATE = (90, 101, 112)        # --color-slate
WARM_WHITE = (250, 250, 248)  # --color-warm-white
CREAM = (245, 242, 237)       # --color-cream
BORDER = (26, 26, 26, 22)     # --color-border-ish

FONTS = '/usr/share/fonts/truetype/dejavu'
SITE = os.path.join(os.path.dirname(__file__), '..', 'site')


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def leaf_img(height, colour=AMBER, ss=4):
    """Render the leaf into a transparent RGBA image, supersampled."""
    w = h = height * ss
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    scale = (w - 2 * ss) / 100.0
    d.polygon([(ss + x * scale, ss + y * scale) for x, y in LEAF], fill=colour)
    return img.resize((height, height), Image.LANCZOS)


def rounded_card(w, h, radius, fill, outline=None, ow=2):
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, w - 1, h - 1], radius=radius, fill=fill,
                        outline=outline, width=ow)
    return img


def fake_card(w=300, h=210, angle=0):
    """A stylized directory card: leaf glyph, title bar, text lines, badge."""
    card = rounded_card(w, h, 22, CREAM, BORDER, 2)
    d = ImageDraw.Draw(card)
    glyph = leaf_img(44)
    card.alpha_composite(glyph, (24, 24))
    d.rounded_rectangle([84, 34, w - 28, 52], 9, fill=(26, 26, 26, 200))
    d.rounded_rectangle([84, 60, w - 90, 72], 6, fill=(26, 26, 26, 70))
    d.rounded_rectangle([24, 96, w - 40, 106], 5, fill=(26, 26, 26, 55))
    d.rounded_rectangle([24, 118, w - 90, 128], 5, fill=(26, 26, 26, 55))
    d.rounded_rectangle([24, 140, w - 140, 150], 5, fill=(26, 26, 26, 55))
    d.rounded_rectangle([24, 168, 118, 192], 12, fill=(212, 162, 74, 230))
    d.rounded_rectangle([36, 176, 106, 184], 4, fill=(255, 255, 255, 230))
    if angle:
        card = card.rotate(angle, expand=True, resample=Image.BICUBIC)
    return card


def shadow_for(img, blur_radius=0, offset=(0, 10), alpha=28):
    """Soft drop shadow: silhouette blurred, tinted charcoal."""
    from PIL import ImageFilter
    sil = Image.new('RGBA', img.size, (0, 0, 0, 0))
    mask = img.split()[3]
    sil.putalpha(mask.point(lambda a: alpha if a else 0))
    sil = sil.filter(ImageFilter.GaussianBlur(blur_radius))
    out = Image.new('RGBA', (img.width + 60, img.height + 70), (0, 0, 0, 0))
    out.alpha_composite(sil, (30 + offset[0], 30 + offset[1]))
    out.alpha_composite(img, (30, 30))
    return out


def build_og():
    W, H = 1200, 630
    og = Image.new('RGBA', (W, H), WARM_WHITE + (255,))

    # right-side fanned card cluster
    cluster_x = 760
    og.alpha_composite(shadow_for(fake_card(300, 210, -7)), (cluster_x - 60, 90))
    og.alpha_composite(shadow_for(fake_card(300, 210, 4)), (cluster_x + 40, 200))
    og.alpha_composite(shadow_for(fake_card(310, 215, -2)), (cluster_x - 10, 330))

    # left column
    og.alpha_composite(leaf_img(120), (90, 64))
    d = ImageDraw.Draw(og)
    d.text((88, 216), 'Awesome', font=font('DejaVuSans-Bold.ttf', 92), fill=CHARCOAL)
    d.text((88, 312), 'Canada', font=font('DejaVuSans-Bold.ttf', 92), fill=CHARCOAL)
    d.text((90, 430), '1,200+ official government tools, maps', font=font('DejaVuSans.ttf', 33), fill=SLATE)
    d.text((90, 474), '& open data — curated and link-checked daily', font=font('DejaVuSans.ttf', 33), fill=SLATE)

    # domain pill
    pill_text = 'awesome-canada.ca'
    pf = font('DejaVuSans-Bold.ttf', 34)
    tw = d.textlength(pill_text, font=pf)
    px, py, ph = 90, 540, 62
    d.rounded_rectangle([px, py, px + tw + 72, py + ph], ph // 2, fill=AMBER)
    d.text((px + 36, py + 11), pill_text, font=pf, fill=(255, 255, 255))

    # amber baseline strip
    d.rectangle([0, H - 10, W, H], fill=AMBER)

    og.convert('RGB').save(os.path.join(SITE, 'og-image.png'), 'PNG', optimize=True)
    print('wrote site/og-image.png')


def build_apple_icon():
    icon = Image.new('RGBA', (180, 180), WARM_WHITE + (255,))
    icon.alpha_composite(leaf_img(150), (15, 14))
    icon.convert('RGB').save(os.path.join(SITE, 'apple-touch-icon.png'), 'PNG', optimize=True)
    print('wrote site/apple-touch-icon.png')


if __name__ == '__main__':
    build_og()
    build_apple_icon()
