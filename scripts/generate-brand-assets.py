#!/usr/bin/env python3
"""Generate PNG brand assets (og-image, apple-touch-icon) without external deps.

The mark is a stylized maple leaf in the site's amber accent colour, drawn as a
polygon and rasterized with supersampled point-in-polygon fill. The same
polygon is used by site/favicon.svg — keep them in sync.

Usage: python3 scripts/generate-brand-assets.py
Writes: site/og-image.png, site/apple-touch-icon.png
"""

import os
import struct
import zlib

# Leaf polygon in a 0..100 unit box, mirror-symmetric about x=50.
LEAF = [
    (50, 4), (57, 18), (66, 13), (63, 26), (76, 22), (72, 34), (88, 32),
    (83, 44), (94, 50), (72, 62), (77, 74), (58, 68), (56, 84), (52, 82),
    (52, 96), (48, 96), (48, 82), (44, 84), (42, 68), (23, 74), (28, 62),
    (6, 50), (17, 44), (12, 32), (28, 34), (24, 22), (37, 26), (34, 13),
    (43, 18),
]

AMBER = (212, 162, 74)      # --color-amber
WARM_WHITE = (250, 250, 248)  # --color-warm-white
CREAM = (245, 242, 237)     # --color-cream

SITE = os.path.join(os.path.dirname(__file__), '..', 'site')


def point_in_poly(x, y, poly):
    inside = False
    j = len(poly) - 1
    for i in range(len(poly)):
        xi, yi = poly[i]
        xj, yj = poly[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            inside = not inside
        j = i
    return inside


def write_png(path, width, height, pixels):
    """pixels: list of rows, each row a bytes/bytearray of RGB triples."""
    raw = b''.join(b'\x00' + bytes(row) for row in pixels)

    def chunk(tag, data):
        c = tag + data
        return struct.pack('>I', len(data)) + c + struct.pack('>I', zlib.crc32(c))

    ihdr = struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)
    png = (b'\x89PNG\r\n\x1a\n'
           + chunk(b'IHDR', ihdr)
           + chunk(b'IDAT', zlib.compress(raw, 9))
           + chunk(b'IEND', b''))
    with open(path, 'wb') as f:
        f.write(png)


def render(width, height, bg, leaf_cx, leaf_cy, leaf_h, panels=None, ss=2):
    """Render background (+ optional vertical side panels) and the leaf.

    panels: (panel_width, colour) draws flag-style bars on both edges.
    ss: supersampling factor per axis.
    """
    scale = leaf_h / 100.0
    ox = leaf_cx - 50 * scale
    oy = leaf_cy - 50 * scale
    rows = []
    for py in range(height):
        row = bytearray()
        for px in range(width):
            # background / panels
            base = bg
            if panels and (px < panels[0] or px >= width - panels[0]):
                base = panels[1]
            hits = 0
            total = ss * ss
            for sy in range(ss):
                for sx in range(ss):
                    x = (px + (sx + 0.5) / ss - ox) / scale
                    y = (py + (sy + 0.5) / ss - oy) / scale
                    if 0 <= x <= 100 and 0 <= y <= 100 and point_in_poly(x, y, LEAF):
                        hits += 1
            if hits == 0:
                row += bytes(base)
            else:
                a = hits / total
                row += bytes(round(AMBER[c] * a + base[c] * (1 - a)) for c in range(3))
        rows.append(row)
    return rows


def main():
    og = render(1200, 630, WARM_WHITE, 600, 300, 460, panels=(300, CREAM))
    write_png(os.path.join(SITE, 'og-image.png'), 1200, 630, og)
    print('wrote site/og-image.png')

    icon = render(180, 180, WARM_WHITE, 90, 88, 148)
    write_png(os.path.join(SITE, 'apple-touch-icon.png'), 180, 180, icon)
    print('wrote site/apple-touch-icon.png')


if __name__ == '__main__':
    main()
