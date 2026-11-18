---
name: swiss-modernist-mark
description: "Apply the Swiss modernist corporate mark style (1955–1985) when drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark. Load when the user asks for: swiss logo, modernist logo, corporate identity, graphics standards manual, railway logo, 1960s logo."
domain: logo
era: modernist-identity
triggers:
  - "swiss logo"
  - "modernist logo"
  - "corporate identity"
  - "graphics standards manual"
  - "railway logo"
  - "1960s logo"
  - "grid logo"
vector_profile:
  abstraction: 4
  geometry: 5
  ornament: 1
  letter_dominance: 2
  dimensionality: 1
---

# Swiss modernist corporate mark

> A mark is a tool of a system: it must be objective, reproducible in any medium, and the same at 5 mm and at 5 m.

A mark for a whole organisation: a reduced symbol on a grid, one or two colours, a neo-grotesque or a custom sans logotype, and a manual that fixes every size, space and colour. Railways, airlines and state agencies led the style.

**Period:** 1955–1985 · **Era:** Modernist identity · **Domain:** Logo · **Also called:** International Style trademark, Corporate identity mark, Modernist logo

## When to load this skill

Load it when the user asks for: "swiss logo", "modernist logo", "corporate identity", "graphics standards manual", "railway logo", "1960s logo", "grid logo".

Good for: transport and infrastructure, public agencies, engineering and industrial firms, wayfinding systems.

Do not use it when:
- The brief asks for warmth, craft or a personal voice.
- The product sells on nostalgia or luxury.

## System directives

When drawing, prompting or art-directing a logo: a symbol, a monogram, a wordmark, an emblem or a full identity mark in Swiss modernist corporate mark, you MUST:

1. Draw the symbol on a square grid of 8–16 units; every edge lands on a unit line or on a 45° step.
2. Use strokes of one weight, at 12–20% of the symbol height, with no contrast.
3. Limit the mark to 1–2 flat colours: one strong brand colour and black or white.
4. Set the logotype in a neo-grotesque or a custom sans, with a cap height of 35–50% of the symbol height.
5. Fix the lock-up of symbol and logotype in a manual, with the gap between them equal to one grid unit times 2–4.
6. Define clear space as a module of the mark: often the stroke width times 2, or half the symbol height.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pictorial or illustrative symbols.
- **NEVER:** Ornament, shading or texture.
- **NEVER:** More than 2 colours in the master mark.
- **NEVER:** Serif or script lettering.
- **NEVER:** A mark redrawn by hand for each use.

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

- **Grid:** A square grid of 8–16 units over the symbol; arcs have centres on grid points and radii of whole units.
- **Geometry:** Straight lines at 0°, 45° and 90°, and arcs from a compass; no freehand curve.
- **Stroke contrast ratio:** 1
- **Stroke rule:** One stroke weight at 12–20% of the symbol height for all parts of the symbol.
- **Symmetry:** Rotational or mirror symmetry is common; a directional mark uses two opposed arrows of equal weight.
- **Detail floor:** No gap under 6% of the symbol height, so the mark prints at 5 mm and on a rail car.

## Form and lettering

- **Mark type:** combination
- **Silhouette:** A symbol that fits a square or a 2:1 rectangle, locked up left of or above a horizontal logotype.
- **Ornament:** No ornament of any kind.
- **Letterforms:** A neo-grotesque sans (Helvetica class) or a custom monoline sans in medium to bold weight, upper and lower case or all capitals, with tracking from 0 to 5%.

## Colour

- **Strategy:** One saturated brand colour, red, blue or yellow, with black or white; the mark also works in one colour on any ground.
- **Colour count min:** 1
- **Colour count max:** 2
- **One colour reversal:** yes
- **Reversal rule:** The master mark is one colour, so white on the brand colour and black on white are both standard versions.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Signal red | `#EB0000` | brand colour |
| Rail grey | `#5F6B73` | secondary |
| Black | `#000000` | logotype |
| White | `#FFFFFF` | ground or knock-out |

## Reproduction

- **Min size px:** 16
- **Min size mm:** 5
- **Clear space ratio:** 0.5
- **Clear space:** Half the symbol height on each side, as fixed in the graphics manual.
- **Media:** Offset print, signs, vehicle livery, uniforms and timetables; later the screen.

## Prompt primer

- **Positive:** Swiss modernist logo · geometric symbol on a grid · monoline strokes · one flat red colour · white ground · 45 degree angles · reduced corporate mark · 1960s graphic design · objective and precise
- **Negative:** letters · text · words · slogan · watermark · gradient · shadow · ornament · illustration

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **bolder**: move toward [`geometric-symbol`](../geometric-symbol/SKILL.md) (Geometric abstract symbol). Keep the grid and the flat colour; make the symbol one heavy abstract shape with no logotype beside it.
- If the user asks for **lighter**: move toward [`minimal-wordmark`](../minimal-wordmark/SKILL.md) (Wordmark-led minimal). Keep the sans and the one colour; drop the symbol and let the word carry the mark.

- **Led to (go here for a newer version):** [`geometric-symbol`](../geometric-symbol/SKILL.md), [`minimal-wordmark`](../minimal-wordmark/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`emblem-badge`](../emblem-badge/SKILL.md), [`victorian-trademark`](../victorian-trademark/SKILL.md)
- **Was rejected by:** [`glossy-3d-logo`](../glossy-3d-logo/SKILL.md)
- **Kin in another domain:** [`international-style-architecture`](../international-style-architecture/SKILL.md), [`japanese-graphic-modernism`](../japanese-graphic-modernism/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`flat-logo`](../flat-logo/SKILL.md), [`geometric-symbol`](../geometric-symbol/SKILL.md), [`emblem-badge`](../emblem-badge/SKILL.md)

## Emotional target

Confidence in a system: the viewer trusts that the organisation runs on time and on rules.

**Keywords:** rational, reliable, public, precise, neutral · **Brand archetypes:** sage, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [British Rail double arrow](https://commons.wikimedia.org/wiki/File:British_Rail_Emblem.png) (Gerald Barney, Design Research Unit, 1965): image, CC0. Redrawn by Scaleboard99 on Wikimedia Commons
- [Swiss Federal Railways mark](https://commons.wikimedia.org/wiki/File:SBB_CFF_FFS_logo.svg): image, Public domain. Swiss Federal Railways; file on Wikimedia Commons
- [Lufthansa logotype, 1964](https://commons.wikimedia.org/wiki/File:Lufthansa_Logo_1964.svg): image, Public domain. Deutsche Lufthansa AG; file on Wikimedia Commons

## Sources

- [Wikipedia: International Typographic Style](https://en.wikipedia.org/wiki/International_Typographic_Style)
- [Wikipedia: Corporate identity](https://en.wikipedia.org/wiki/Corporate_identity)
- [Wikipedia: Otl Aicher](https://en.wikipedia.org/wiki/Otl_Aicher)
- [Wikimedia Commons API: licence read from imageinfo extmetadata, 2026-11](https://commons.wikimedia.org/w/api.php)

---

Generated from [`data/logo/styles/swiss-modernist-mark.json`](../../data/logo/styles/swiss-modernist-mark.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
