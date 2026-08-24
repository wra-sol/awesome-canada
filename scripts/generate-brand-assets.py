#!/usr/bin/env python3
"""Generate brand assets from the constellation leaf graph (scripts/brand-graph.json).

The graph was extracted from media/brand/logo-mark.png (Grok-generated
constellation maple leaf) and is the canonical brand mark. This script emits:

  site/favicon.svg         — bold constellation, transparent bg
  site/apple-touch-icon.png— 180x180, black tile, amber constellation
  site/og-image.png        — 1200x630 social card with the constellation hero

Also prints the inline <svg> snippet used by the HTML templates (header brand
mark + empty state). Requires Pillow; run manually, not part of CI.

Usage: python3 scripts/generate-brand-assets.py [--snippet]
"""

import json
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

GRAPH = json.load(open(os.path.join(os.path.dirname(__file__), 'brand-graph.json')))
NODES = GRAPH['nodes']
EDGES = GRAPH['edges']
VB_W = max(x for x, _ in NODES)          # graph is normalised to height 100

AMBER = (212, 162, 74)
AMBER_DEEP = (184, 136, 52)
CHARCOAL = (26, 26, 26)
SLATE = (90, 101, 112)
WARM_WHITE = (250, 250, 248)
CREAM = (245, 242, 237)
BORDER = (26, 26, 26, 22)

FONTS = '/usr/share/fonts/truetype/dejavu'
SITE = os.path.join(os.path.dirname(__file__), '..', 'site')


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def draw_constellation(d, size, ox, oy, scale, colour, line_w, dot_r):
    """Draw the constellation into PIL draw context at given placement."""
    for i, j in EDGES:
        d.line([
            (ox + NODES[i][0] * scale, oy + NODES[i][1] * scale),
            (ox + NODES[j][0] * scale, oy + NODES[j][1] * scale),
        ], fill=colour, width=line_w)
    for x, y in NODES:
        cx, cy = ox + x * scale, oy + y * scale
        d.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=colour)


def constellation_img(height, colour, line_w=None, dot_r=None, bg=None, ss=3):
    """Render the constellation to an RGBA (or bg-coloured RGB) image, height px."""
    lw = line_w if line_w is not None else max(2, round(height * 0.011))
    dr = dot_r if dot_r is not None else max(3, round(height * 0.016))
    w = round(height * VB_W / 100)
    img = Image.new('RGBA', (w * ss, height * ss), (0, 0, 0, 0) if bg is None else bg + (255,))
    d = ImageDraw.Draw(img)
    draw_constellation(d, height, ss / 2, ss / 2, height * ss / 100.0, colour, lw * ss, dr * ss)
    out = img.resize((w, height), Image.LANCZOS)
    return out


def svg_constellation(stroke_w, dot_r, colour='currentColor'):
    lines = '\n'.join(
        f'    <line x1="{NODES[i][0]:.1f}" y1="{NODES[i][1]:.1f}" x2="{NODES[j][0]:.1f}" y2="{NODES[j][1]:.1f}"/>'
        for i, j in EDGES)
    dots = '\n'.join(
        f'    <circle cx="{x:.1f}" cy="{y:.1f}" r="{dot_r}"/>'
        for x, y in NODES)
    return (f'<svg viewBox="0 0 {VB_W:.0f} 100" aria-hidden="true" focusable="false">\n'
            f'  <g stroke="{colour}" stroke-width="{stroke_w}" fill="{colour}" stroke-linecap="round">\n'
            f'{lines}\n{dots}\n  </g>\n</svg>')


def build_favicon_svg():
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '
           f'{VB_W:.0f} 100">'
           '\n  <g stroke="#D4A24A" stroke-width="3" fill="#D4A24A" stroke-linecap="round">\n'
           + '\n'.join(
               f'  <line x1="{NODES[i][0]:.1f}" y1="{NODES[i][1]:.1f}" x2="{NODES[j][0]:.1f}" y2="{NODES[j][1]:.1f}"/>'
               for i, j in EDGES)
           + '\n' + '\n'.join(
               f'  <circle cx="{x:.1f}" cy="{y:.1f}" r="2.4"/>'
               for x, y in NODES)
           + '\n  </g>\n</svg>\n')
    with open(os.path.join(SITE, 'favicon.svg'), 'w') as f:
        f.write(svg)
    print('wrote site/favicon.svg')


def build_apple_icon():
    icon = Image.new('RGBA', (180, 180), CHARCOAL + (255,))
    mark = constellation_img(150, AMBER, line_w=3, dot_r=4)
    icon.alpha_composite(mark, ((180 - mark.width) // 2, 15))
    icon.convert('RGB').save(os.path.join(SITE, 'apple-touch-icon.png'), 'PNG', optimize=True)
    print('wrote site/apple-touch-icon.png')


def fake_card(w=300, h=210, angle=0):
    """A stylized directory card: mark glyph, title bar, text lines, badge."""
    card = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(card)
    d.rounded_rectangle([0, 0, w - 1, h - 1], 22, fill=CREAM + (255,), outline=BORDER, width=2)
    glyph = constellation_img(46, AMBER, line_w=2, dot_r=3)
    card.alpha_composite(glyph, (24, 22))
    d.rounded_rectangle([92, 34, w - 28, 52], 9, fill=(26, 26, 26, 200))
    d.rounded_rectangle([92, 60, w - 90, 72], 6, fill=(26, 26, 26, 70))
    d.rounded_rectangle([24, 96, w - 40, 106], 5, fill=(26, 26, 26, 55))
    d.rounded_rectangle([24, 118, w - 90, 128], 5, fill=(26, 26, 26, 55))
    d.rounded_rectangle([24, 140, w - 140, 150], 5, fill=(26, 26, 26, 55))
    d.rounded_rectangle([24, 168, 118, 192], 12, fill=(212, 162, 74, 230))
    d.rounded_rectangle([36, 176, 106, 184], 4, fill=(255, 255, 255, 230))
    if angle:
        card = card.rotate(angle, expand=True, resample=Image.BICUBIC)
    return card


def shadow_for(img, offset=(0, 10), alpha=28):
    sil = Image.new('RGBA', img.size, (0, 0, 0, 0))
    sil.putalpha(img.split()[3].point(lambda a: alpha if a else 0))
    sil = sil.filter(ImageFilter.GaussianBlur(6))
    out = Image.new('RGBA', (img.width + 60, img.height + 70), (0, 0, 0, 0))
    out.alpha_composite(sil, (30 + offset[0], 30 + offset[1]))
    out.alpha_composite(img, (30, 30))
    return out


def build_og():
    W, H = 1200, 630
    og = Image.new('RGBA', (W, H), WARM_WHITE + (255,))

    cluster_x = 760
    og.alpha_composite(shadow_for(fake_card(300, 210, -7)), (cluster_x - 60, 90))
    og.alpha_composite(shadow_for(fake_card(300, 210, 4)), (cluster_x + 40, 200))
    og.alpha_composite(shadow_for(fake_card(310, 215, -2)), (cluster_x - 10, 330))

    hero = constellation_img(150, AMBER, line_w=4, dot_r=6)
    og.alpha_composite(hero, (90, 50))

    d = ImageDraw.Draw(og)
    d.text((88, 216), 'Awesome', font=font('DejaVuSans-Bold.ttf', 92), fill=CHARCOAL)
    d.text((88, 312), 'Canada', font=font('DejaVuSans-Bold.ttf', 92), fill=CHARCOAL)
    d.text((90, 430), '1,200+ official government tools, maps', font=font('DejaVuSans.ttf', 33), fill=SLATE)
    d.text((90, 474), '& open data — curated and link-checked daily', font=font('DejaVuSans.ttf', 33), fill=SLATE)

    pill_text = 'awesome-canada.ca'
    pf = font('DejaVuSans-Bold.ttf', 34)
    tw = d.textlength(pill_text, font=pf)
    px, py, ph = 90, 540, 62
    d.rounded_rectangle([px, py, px + tw + 72, py + ph], ph // 2, fill=AMBER)
    d.text((px + 36, py + 11), pill_text, font=pf, fill=(255, 255, 255))
    d.rectangle([0, H - 10, W, H], fill=AMBER)

    og.convert('RGB').save(os.path.join(SITE, 'og-image.png'), 'PNG', optimize=True)
    print('wrote site/og-image.png')


if __name__ == '__main__':
    build_favicon_svg()
    build_apple_icon()
    build_og()
    if '--snippet' in __import__('sys').argv:
        print(svg_constellation(stroke_w=2.2, dot_r=1.8))
