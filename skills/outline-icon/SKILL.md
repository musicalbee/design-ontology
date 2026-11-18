---
name: outline-icon
description: "Apply the Outline icon style (2013–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: outline icon, line icon, stroke icon, feather icons, lucide, tabler icons."
domain: icon
era: vector-system
triggers:
  - "outline icon"
  - "line icon"
  - "stroke icon"
  - "feather icons"
  - "lucide"
  - "tabler icons"
  - "thin icons"
  - "minimal icons"
vector_profile:
  realism: 1
  fill: 1
  corner_softness: 4
  detail_density: 1
  colour_count: 1
---

# Outline icon

> An icon set is a typeface of objects: one stroke, one grid and one corner radius make hundreds of glyphs read as one family.

Icons drawn as one even stroke on a 24 px grid, with round caps and joins and no fill. The set reads like a light typeface: the same line weight, the same corner radius and the same live area for every glyph.

**Period:** 2013–present · **Era:** Vector system · **Domain:** Icons · **Also called:** Line icon, Stroke icon, Feather-style icon

## When to load this skill

Load it when the user asks for: "outline icon", "line icon", "stroke icon", "feather icons", "lucide", "tabler icons", "thin icons", "minimal icons".

Good for: web and app UI, dashboards and admin tools, documentation sites, navigation bars.

Do not use it when:
- The icon must read at 12 px or less.
- The brand is loud and colourful.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Outline icon, you MUST:

1. Draw on a 24 × 24 px grid with a live area of 20 × 20 px and 2 px of padding on each side.
2. Use one stroke width for the whole set: 2 px at 24 px (1.5 px for a light set).
3. Set round caps and round joins on every path.
4. Give rectangles a corner radius of 2 px; circles and arcs keep the same stroke.
5. Keep a gap of at least 2 px between two parallel strokes.
6. Align strokes to the pixel grid so that a 2 px line covers whole pixels at 1× and 2×.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Mixed stroke widths in one set.
- **NEVER:** Solid fills inside the glyph.
- **NEVER:** Square caps next to round caps.
- **NEVER:** Detail closer than 2 px at 24 px.
- **NEVER:** Colour inside a UI glyph.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■□□□□` 1/5 | abstract glyph | rendered object with material and light |
| Fill | `■□□□□` 1/5 | stroke only | solid fill only |
| Corner softness | `■■■■□` 4/5 | square, sharp corners | round, soft corners |
| Detail density | `■□□□□` 1/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■□□□□` 1/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 24
- **Live area px:** 20
- **Padding px:** 2
- **Keylines:** A circle of 20 px, a square of 18 px, a portrait rectangle of 16 × 20 px and a landscape rectangle of 20 × 16 px.

**Sizes px**

|  |
||
|  |
|  |
|  |
|  |

## Stroke

- **Width px:** 2
- **Caps:** round
- **Joins:** round
- **Rule:** One 2 px stroke for the full set at 24 px; scale the stroke with the icon, and use 1.5 px at 16 px when hinted.

## Shape & corners

- **Corner radius px:** 2
- **Primitives:** Lines, arcs, circles and rounded rectangles; angles at 0°, 45° and 90° where possible.
- **Optical size:** At 16 px, remove inner parts and keep the silhouette; the stroke stays 1.5–2 px.

## Colour

- **Count max:** 1
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** One colour: currentColor, so that the icon takes the colour of the text next to it.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Ink | `#1F2328` | stroke on light ground |
| Paper | `#FFFFFF` | ground |
| Muted ink | `#6E7781` | inactive state |

## Perspective & light

- **View:** front orthographic
- **Light:** No light model.
- **Shadow:** No shadow; the glyph is flat on the ground.

## Metaphor

- **Typical:** A house, an envelope, a camera, a calendar, a gear, a bell, a magnifier, a heart and a folder.
- **Treatment:** Reduced to the outline of the object plus 1 or 2 inner lines; no texture.

## Prompt primer

- **Positive:** outline icon set · line icons · 2px stroke · round line caps · 24 by 24 grid · monoline glyphs · minimal UI icons · Feather icon style
- **Negative:** filled shapes · gradients · multiple colours · drop shadows · variable line width

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **bolder and heavier**: move toward [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md) (Solid glyph icon). Keep the 24 px grid and the shapes; fill the closed shapes and cut inner details as 2 px gaps.
- If the user asks for **two tones**: move toward [`duotone-icon`](../duotone-icon/SKILL.md) (Duotone icon). Keep the 2 px stroke; add a fill at 20% opacity in the same colour inside the main shape.

- **Came from (go here for a more orthodox version):** [`flat-icon`](../flat-icon/SKILL.md)
- **Led to (go here for a newer version):** [`duotone-icon`](../duotone-icon/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md)
- **Mixes well with:** [`material-symbols-icon`](../material-symbols-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)
- **Kin in another domain:** [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`material-symbols-icon`](../material-symbols-icon/SKILL.md), [`duotone-icon`](../duotone-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)

## Emotional target

Calm precision: the UI feels light, ordered and quiet.

**Keywords:** minimal, light, precise, calm, neutral · **Brand archetypes:** sage, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Feather: home](https://github.com/feathericons/feather) (Cole Bemis, 2017): icon-set, MIT. Feather icons 4.29.2
- [Lucide: house](https://lucide.dev) (Lucide contributors): icon-set, ISC. Lucide, a community fork of Feather; lucide-static 0.460.0
- [Lucide: camera](https://lucide.dev) (Lucide contributors): icon-set, ISC. Lucide; lucide-static 0.460.0
- [Tabler Icons: home (outline)](https://github.com/tabler/tabler-icons) (Paweł Kuna): icon-set, MIT. Tabler Icons 3.24.0, outline set
- [Heroicons: home (24 outline)](https://github.com/tailwindlabs/heroicons) (Tailwind Labs): icon-set, MIT. Heroicons 2.1.5, 24 px outline

## Sources

- [Feather icons repository](https://github.com/feathericons/feather)
- [Lucide icon design guide](https://lucide.dev/guide/design/icon-design-guide)
- [Tabler Icons repository](https://github.com/tabler/tabler-icons)

---

Generated from [`data/icon/styles/outline-icon.json`](../../data/icon/styles/outline-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
