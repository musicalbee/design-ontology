---
name: pixel-icon
description: "Apply the Pixel icon style (1981–present (revival from 2015)) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: pixel icon, bitmap icon, 8-bit icon, pixel art icons, retro os icons, 1-bit icon."
domain: icon
era: bitmap
triggers:
  - "pixel icon"
  - "bitmap icon"
  - "8-bit icon"
  - "pixel art icons"
  - "retro os icons"
  - "1-bit icon"
  - "16px pixel"
vector_profile:
  realism: 2
  fill: 4
  corner_softness: 1
  detail_density: 2
  colour_count: 2
---

# Pixel icon

> An icon is a set of square pixels on a fixed grid, and the grid is part of the look, not a limit to hide.

Icons drawn on a hard pixel grid, one square at a time. Each pixel is on or off, edges are stairs, and the set has 1 to 16 colours. The style began with low screen resolution and returns now as a retro choice.

**Period:** 1981–present (revival from 2015) · **Era:** Bitmap · **Domain:** Icons · **Also called:** Bitmap icon, Pixel-art icon

## When to load this skill

Load it when the user asks for: "pixel icon", "bitmap icon", "8-bit icon", "pixel art icons", "retro os icons", "1-bit icon", "16px pixel".

Good for: retro games and game UI, developer tools with a playful voice, pixel-art brand campaigns, terminal and indie web pages.

Do not use it when:
- The product needs a calm, premium or medical tone.
- The icon must scale to any fraction of its size.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Pixel icon, you MUST:

1. Draw on a grid of 16 × 16 or 32 × 32 px, and place every edge on a whole pixel.
2. Use straight runs and 1:1, 1:2 or 2:1 steps for diagonals; a curve is a sequence of these steps.
3. Keep the outline 1 px wide at 16 px and 2 px wide at 32 px.
4. Use 1 to 4 colours for a UI glyph and at most 16 for an app icon, with no anti-alias.
5. Scale only by whole multiples (2×, 3×, 4×) with nearest-neighbour sampling.
6. Leave a 1 px clear margin inside the grid on each side.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Anti-aliased, soft edges.
- **NEVER:** Pixels at half-pixel positions.
- **NEVER:** Smooth vector curves on a pixel grid.
- **NEVER:** Gradients and soft shadows.
- **NEVER:** Scale by a fraction such as 1.5×.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■■□□□` 2/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■■□` 4/5 | stroke only | solid fill only |
| Corner softness | `■□□□□` 1/5 | square, sharp corners | round, soft corners |
| Detail density | `■■□□□` 2/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■■□□□` 2/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 24
- **Live area px:** 22
- **Padding px:** 1
- **Keylines:** One square keyline of 22 × 22 px; no circle keyline, because a circle becomes a stair shape.

**Sizes px**

|  |
||
|  |
|  |
|  |

## Stroke

- **Caps:** none
- **Joins:** none
- **Rule:** No vector stroke. A line is a run of whole pixels, 1 px wide at 16 px and 2 px wide at 32 px.

## Shape & corners

- **Corner radius px:** 0
- **Primitives:** Squares, straight runs and stair steps of 1:1, 1:2 or 2:1 px; no curve except a stair curve.
- **Optical size:** Redraw each size by hand: a 16 px icon has fewer parts than a 32 px icon, never a scaled copy.

## Colour

- **Count max:** 4
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** One ink colour for a UI glyph; 4 to 16 flat colours for an app icon, from a fixed system palette.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Pixel black | `#111111` | outline and glyph |
| Screen white | `#F4F4F0` | ground |
| System grey | `#8A8A8A` | shade step |
| Accent blue | `#2A5BD7` | one accent |

## Perspective & light

- **View:** front orthographic
- **Light:** No light model; one shade step of 1 px may mark a lower or right edge.
- **Shadow:** None, or a 1 px offset shadow in one darker colour.

## Metaphor

- **Typical:** A disk, a folder, a trash can, a document, a clock and a hand cursor.
- **Treatment:** Literal office objects reduced to their silhouette at 16 or 32 px.

## Prompt primer

- **Positive:** pixel art icon set · 16 by 16 pixel grid · hard square pixels · no anti-aliasing · 1-bit black and white · stair-step diagonals · retro operating system icons · nearest-neighbour scale
- **Negative:** smooth vector curves · gradients · soft shadows · blurred edges · photographic detail

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Pixel grid (process)

A picture or a letter built from square cells that are each on or off, or one flat colour, with no curve and no smooth edge. Origin: film & video, Bell Labs, New Jersey, c. 1963.

- Draw an icon on a grid of 16 or 32 cells a side; fill each cell with one colour or leave it empty.
- Limit the palette to 1 to 16 colours; do not blend two colours inside one cell.
- Draw a diagonal as a stair of equal steps, for example 2 cells across for each 1 cell up.
- Show the image at an integer scale (2x, 3x, 4x) so that no cell blurs.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Grid size (`grid_size`) | 24 | 16–32 px | grid |
| Stroke width (`stroke_width`) | 1 | 1–2 px | stroke |
| Corner radius (`corner_radius`) | 0 | 0–0 px | shape |
| Fill mode (`fill_mode`) | solid | solid | colour, shape |
| Base colour (`base_colour`) | #111111 | #111111, #2A5BD7 | colour |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **smoother and modern**: move toward [`outline-icon`](../outline-icon/SKILL.md) (Outline icon). Keep the silhouette and the 24 px grid; trace it as a 2 px vector stroke with round caps and a 2 px corner radius.
- If the user asks for **more depth**: move toward [`isometric-icon`](../isometric-icon/SKILL.md) (Isometric icon). Keep the hard pixel look; rotate the object to an isometric view with 2:1 pixel diagonals.

- **Led to (go here for a newer version):** [`isometric-icon`](../isometric-icon/SKILL.md), [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)
- **Kin in another domain:** [`eight-bit-tile`](../eight-bit-tile/SKILL.md), [`four-shade-handheld`](../four-shade-handheld/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Nearest by vector profile:** [`isometric-icon`](../isometric-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md), [`material-symbols-icon`](../material-symbols-icon/SKILL.md)

## Emotional target

Warm recognition of early computers: the icons feel exact, small and a little playful.

**Keywords:** retro, exact, playful, nerdy, honest · **Brand archetypes:** jester, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Pixelarticons: home](https://github.com/halfmage/pixelarticons) (Gerrit Halfmann): icon-set, MIT. Pixelarticons 1.8.1
- [Pixelarticons: mail](https://github.com/halfmage/pixelarticons) (Gerrit Halfmann): icon-set, MIT. Pixelarticons 1.8.1
- [Pixel Icon Library: home](https://github.com/hackernoon/pixel-icon-library) (HackerNoon): icon-set, CC BY 4.0. HackerNoon Pixel Icon Library at commit 5fe05c9; icon files under CC BY 4.0

## Sources

- [Susan Kare, icon work for the Apple Macintosh (1984), as described in the Wikipedia article](https://en.wikipedia.org/wiki/Susan_Kare)
- [Pixelarticons repository](https://github.com/halfmage/pixelarticons)
- [HackerNoon Pixel Icon Library](https://github.com/hackernoon/pixel-icon-library)

---

Generated from [`data/icon/styles/pixel-icon.json`](../../data/icon/styles/pixel-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
