#!/usr/bin/env python3
"""Generate brand assets from the constellation leaf graph (scripts/brand-graph.json).

The graph was extracted from media/brand/logo-mark.png (Grok-generated
constellation maple leaf) and is the canonical brand mark. This script emits:

  site/favicon.svg         — bold constellation, transparent bg
  site/apple-touch-icon.png— 180x180, black tile, amber constellation
  site/og-image.png        — 1200x630 social card: dark hero with the full
                             Grok mark (media/brand/logo-mark.png) + glow

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
CHARCOAL = (26, 26, 26)
WARM_WHITE = (250, 250, 248)

FONTS = '/usr/share/fonts/truetype/dejavu'
SITE = os.path.join(os.path.dirname(__file__), '..', 'site')
LOGO_MARK = os.path.join(os.path.dirname(__file__), '..', 'media', 'brand', 'logo-mark.png')


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


def radial_glow(w, h, colour, max_alpha):
    """Soft radial glow: solid colour whose alpha fades from centre to edge."""
    grad = Image.radial_gradient('L').point(lambda v: 255 - v)
    alpha = grad.resize((w, h), Image.LANCZOS).point(lambda v: v * max_alpha // 255)
    layer = Image.new('RGBA', (w, h), colour + (0,))
    layer.putalpha(alpha)
    return layer


def build_og():
    W, H = 1200, 630
    og = Image.new('RGB', (W, H))
    d = ImageDraw.Draw(og)
    top, bottom = (28, 28, 28), (15, 15, 15)
    for y in range(H):
        t = y / (H - 1)
        d.line([(0, y), (W, y)],
               fill=tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)))

    # hero — the Grok constellation mark on its native dark ground
    leaf = Image.open(LOGO_MARK).convert('RGBA')
    leaf = leaf.crop(leaf.getchannel('A').getbbox())
    LH = 540
    leaf = leaf.resize((round(leaf.width * LH / leaf.height), LH), Image.LANCZOS)
    lx, ly = W - leaf.width - 64, (H - LH) // 2

    halo = radial_glow(860, 860, AMBER, 26)
    og.paste(halo, (lx + leaf.width // 2 - 430, H // 2 - 430), halo)
    glow_a = leaf.getchannel('A').filter(ImageFilter.GaussianBlur(22)).point(lambda v: v * 45 // 255)
    glow = Image.new('RGBA', leaf.size, AMBER + (0,))
    glow.putalpha(glow_a)
    og.paste(glow, (lx, ly), glow)
    og.paste(leaf, (lx, ly), leaf)

    d = ImageDraw.Draw(og)

    def tracked(pos, text, f, fill, spacing):
        x, y = pos
        for ch in text:
            d.text((x, y), ch, font=f, fill=fill)
            x += d.textlength(ch, font=f) + spacing

    tracked((90, 138), 'CURATED · LINK-CHECKED DAILY',
            font('DejaVuSans-Bold.ttf', 21), AMBER, 7)

    title_f = font('DejaVuSans-Bold.ttf', 96)
    d.text((86, 178), 'Awesome', font=title_f, fill=WARM_WHITE)
    d.text((86, 284), 'Canada', font=title_f, fill=AMBER)

    tag_f = font('DejaVuSans.ttf', 30)
    tag_c = (163, 172, 184)
    tag_lines = ['1,400+ official government tools,',
                 'maps & open data for every level']
    for i, line in enumerate(tag_lines):
        w = d.textlength(line, font=tag_f)
        assert 90 + w < lx - 20, f'tagline collides with leaf: "{line}" ends at {90 + w:.0f}, leaf at {lx}'
        d.text((90, 418 + i * 42), line, font=tag_f, fill=tag_c)

    pill_text = 'awesome-canada.ca'
    pf = font('DejaVuSans-Bold.ttf', 34)
    tw = d.textlength(pill_text, font=pf)
    px, py, ph = 90, 528, 62
    d.rounded_rectangle([px, py, px + tw + 72, py + ph], ph // 2, fill=AMBER)
    d.text((px + 36, py + 13), pill_text, font=pf, fill=(20, 20, 20))
    d.rectangle([0, H - 10, W, H], fill=AMBER)

    og.save(os.path.join(SITE, 'og-image.png'), 'PNG', optimize=True)
    print('wrote site/og-image.png')


if __name__ == '__main__':
    argv = set(__import__('sys').argv[1:])
    if '--og-only' not in argv:
        build_favicon_svg()
        build_apple_icon()
    build_og()
    if '--snippet' in argv:
        print(svg_constellation(stroke_w=2.2, dot_r=1.8))
