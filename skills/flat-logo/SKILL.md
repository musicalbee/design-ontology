---
name: flat-logo
description: "Apply the Flat 2010s mark style (2012–now) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: flat logo, flat design, app icon logo, material design logo, colourful simple logo, tech logo."
domain: logo
era: screen-identity
triggers:
  - "flat logo"
  - "flat design"
  - "app icon logo"
  - "material design logo"
  - "colourful simple logo"
  - "tech logo"
vector_profile:
  abstraction: 4
  geometry: 5
  ornament: 1
  letter_dominance: 2
  dimensionality: 1
---

# Flat 2010s mark

> On a screen honesty is flat colour: a mark is a set of clean shapes that read at icon size and scale with no loss.

The gloss goes away. A simple symbol or a geometric sans word in 2–4 bright flat colours, with no gradient, no shadow and no bevel, drawn to work as a 24 px app icon first.

**Period:** 2012–now · **Era:** Screen identity · **Domain:** Logo · **Also called:** Flat logo, Flat design mark, Material-era logo

## When to load this skill

Load it when the user asks for: "flat logo", "flat design", "app icon logo", "material design logo", "colourful simple logo", "tech logo".

Good for: apps and software products, start-ups and platforms, favicons and app icons, digital services.

Do not use it when:
- The brief asks for heritage, luxury or craft.
- The brand must look different from software brands.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Flat 2010s mark, you MUST:

1. Fill each shape with one flat colour; no gradient, no shadow, no highlight.
2. Use 2–4 bright colours of the same lightness, side by side, or one colour on white.
3. Build the symbol from squares, circles and rounded rectangles on a 24 or 48 unit icon grid.
4. Round corners at 8–20% of the shape size, or use none, but use the same rule for every corner.
5. Set any letters in a geometric sans with a single-storey a and round dots, at one weight.
6. Draw a 24 px icon version first, then scale up; each part must be at least 2 px at 24 px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gloss, bevel or drop shadow.
- **NEVER:** Gradients, except as a later trend.
- **NEVER:** Fine serif or script lettering.
- **NEVER:** Thin strokes under 1/12 of the icon size.
- **NEVER:** More than 4 hues.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■■□` 4/5 | a literal picture of a thing | a pure abstract form |
| Geometry | `■■■■■` 5/5 | freehand, drawn by eye | ruler and compass on a grid |
| Ornament | `■□□□□` 1/5 | bare form, no decoration | dense decoration and frames |
| Letter dominance | `■■□□□` 2/5 | a symbol with no letters | letters only |
| Dimensionality | `■□□□□` 1/5 | flat, one plane | modelled volume, light and depth |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Construction

- **Grid:** A square icon grid of 24 or 48 units with a 2-unit safe area; key shapes fit a circle, a square or a 4:3 rectangle in it.
- **Geometry:** Circles, squares and rounded rectangles; angles at 0°, 45° and 90°.
- **Stroke contrast ratio:** 1
- **Stroke rule:** Solid fills; where a stroke is used it is 1/12 of the icon size (2 units on a 24 grid).
- **Symmetry:** A 2×2 or a radial arrangement is common; colour, not form, breaks the symmetry.
- **Detail floor:** No part under 1/12 of the icon height, so the icon reads at 24 px.

## Form and lettering

- **Mark type:** symbol
- **Silhouette:** A square at 1:1 for the icon; a wordmark beside it fits a 3:1 to 5:1 bar.
- **Ornament:** No ornament of any kind.
- **Letterforms:** A geometric sans, often custom, with circular bowls, a single-storey a or g and a weight near regular to medium.

## Colour

- **Strategy:** Primary-bright hues of near-equal lightness, each in its own shape, on white or on a dark ground.
- **Colour count min:** 1
- **Colour count max:** 4
- **One colour reversal:** yes
- **Reversal rule:** Each shape becomes white on one dark ground; the gaps between the shapes keep the form.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Blue | `#4285F4` | lead hue |
| Red | `#EA4335` | second hue |
| Yellow | `#FBBC05` | third hue |
| Green | `#34A853` | fourth hue |
| Orange red | `#F25022` | alternative hue |
| White | `#FFFFFF` | ground |

## Reproduction

- **Min size px:** 16
- **Min size mm:** 5
- **Clear space ratio:** 0.25
- **Clear space:** A quarter of the symbol height on each side; on an icon, the safe area of the grid.
- **Media:** Screens first: app icons, favicons, UI; then print and signs.

## Prompt primer

- **Positive:** flat design logo symbol · solid flat colours · four bright hues · squares and circles · white ground · app icon style · no gradient · crisp vector shapes · 2010s tech mark
- **Negative:** letters · text · words · slogan · watermark · gradient · gloss · drop shadow · bevel · 3D

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Construction grid (process)

Letters and marks drawn on a fixed grid of squares and circles, so that each glyph in a set has the same size, weight and corner. Origin: typeface, Nuremberg, 1525.

- Fix one live area inside a square canvas; on a 24 unit canvas, keep a 2 unit margin.
- Define 4 keyline shapes (circle, square, tall and wide rectangle) and fit each glyph to the one that suits it.
- Cut every angle to 45° or 90°, or to one other fixed angle.
- Use one stroke weight for the full set, for example 2 units on a 24 unit canvas.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Dribbble** (platform, web, 2009–now), published the style. A web site where designers post small shots of interface work. Several interface trends, neumorphism among them, spread from shots that were posted there.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #4285F4 | #4285F4, #EA4335, #FBBC05, #34A853 | colour |
| Colour count (`colour_count`) | 4 | 1–4 | colour, reproduction |
| Stroke weight (`stroke_weight`) | 8 | 6–10 % of mark height | form |
| Container (`container`) | square | square, circle, none | construction |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more depth**: move toward [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md) (Gradient 3D and glass). Keep the shapes and the hues; add a top-lit gradient and a soft shadow under the mark.
- If the user asks for **more serious**: move toward [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md) (Swiss modernist corporate mark). Keep the grid; reduce to one colour and black, and replace rounded corners with square ones.

- **Came from (go here for a more orthodox version):** [`geometric-symbol`](../geometric-symbol/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md)
- **Mixes well with:** [`minimal-wordmark`](../minimal-wordmark/SKILL.md)
- **Kin in another domain:** [`flat-design`](../flat-design/SKILL.md), [`material-design`](../material-design/SKILL.md), [`metro-ui`](../metro-ui/SKILL.md)
- **Nearest by vector profile:** [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md), [`geometric-symbol`](../geometric-symbol/SKILL.md), [`emblem-badge`](../emblem-badge/SKILL.md)

## Emotional target

Friendly clarity: the viewer sees bright, simple shapes and feels a tool that is easy and open.

**Keywords:** friendly, clear, bright, simple, digital · **Brand archetypes:** everyman, creator, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Microsoft logo, 2012](https://commons.wikimedia.org/wiki/File:Microsoft_logo_(2012).svg): image, Public domain. Microsoft Corporation; file on Wikimedia Commons
- [Google logotype, 2015](https://commons.wikimedia.org/wiki/File:Google_2015_logo.svg): image, Public domain. Google LLC; file on Wikimedia Commons

## Sources

- [Wikipedia: Flat design](https://en.wikipedia.org/wiki/Flat_design)
- [Wikipedia: Logo](https://en.wikipedia.org/wiki/Logo)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/flat-logo.json`](../../data/logo/styles/flat-logo.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
