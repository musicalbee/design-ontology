---
name: material-symbols-icon
description: "Apply the Material Symbols style (2014–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: material icons, material symbols, google icons, android icons, material design icon, variable icon font."
domain: icon
era: vector-system
triggers:
  - "material icons"
  - "material symbols"
  - "google icons"
  - "android icons"
  - "material design icon"
  - "variable icon font"
vector_profile:
  realism: 1
  fill: 3
  corner_softness: 3
  detail_density: 1
  colour_count: 1
---

# Material Symbols

> An icon system is a set of tokens: one grid and four variable axes let one glyph serve every size, weight and state.

Google's open icon system: geometric glyphs on a 24 dp grid with keyline shapes. Material Icons (2014) gave five themes; Material Symbols (2022) is a variable font with axes for fill, weight, grade and optical size.

**Period:** 2014–present · **Era:** Vector system · **Domain:** Icons · **Also called:** Material Icons, Google Material icon system

## When to load this skill

Load it when the user asks for: "material icons", "material symbols", "google icons", "android icons", "material design icon", "variable icon font".

Good for: Android and Material web apps, admin and back-office tools, design systems that need fill and weight states, prototypes.

Do not use it when:
- The brand must not look like Google or Android.
- The design needs a hand-made or retro voice.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Material Symbols, you MUST:

1. Draw on a 24 × 24 dp grid with a live area of 20 × 20 dp and 2 dp of padding.
2. Fit each glyph to a keyline: a circle of 20 dp, a square of 18 dp, a portrait rectangle of 16 × 20 dp or a landscape rectangle of 20 × 16 dp.
3. Set the stroke at 2 dp for weight 400, from 100 to 700 on the weight axis.
4. Use the fill axis (0 or 1) for state: outline for inactive, filled for active.
5. Set the optical size axis to the render size (20, 24, 40 or 48 dp).
6. Use a corner radius of 2 dp for the rounded style and 0 dp for the sharp style; the outlined style uses 0–1 dp.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Glyphs off the keyline shapes.
- **NEVER:** Stroke weights that differ inside one screen.
- **NEVER:** Decorative colour inside a system glyph.
- **NEVER:** Perspective or 3D effects.
- **NEVER:** Fill state changes without meaning.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■□□□□` 1/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■□□` 3/5 | stroke only | solid fill only |
| Corner softness | `■■■□□` 3/5 | square, sharp corners | round, soft corners |
| Detail density | `■□□□□` 1/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■□□□□` 1/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 24
- **Live area px:** 20
- **Padding px:** 2
- **Keylines:** Circle 20 dp, square 18 dp, portrait 16 × 20 dp, landscape 20 × 16 dp.

**Sizes px**

|  |
||
|  |
|  |
|  |
|  |

## Stroke

- **Width px:** 2
- **Caps:** butt
- **Joins:** miter
- **Rule:** 2 dp at weight 400; outlined and sharp styles use butt caps and miter joins, the rounded style uses round caps and joins.

## Shape & corners

- **Corner radius px:** 2
- **Primitives:** Geometric primitives on the keylines; angles at 0°, 45° and 90°.
- **Optical size:** The optical size axis thickens the stroke and opens counters at 20 dp, and thins it at 48 dp.

## Colour

- **Count max:** 1
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** One colour from the theme: on-surface for default, primary for active.

**Colours**

| Name | Hex | Role |
|---|---|---|
| On surface | `#1D1B20` | default glyph |
| Primary | `#6750A4` | active glyph |
| Surface | `#FEF7FF` | ground |
| On surface variant | `#49454F` | inactive glyph |

## Perspective & light

- **View:** front orthographic
- **Light:** No light model.
- **Shadow:** No shadow; the glyph is flat on the ground.

## Metaphor

- **Typical:** A home, a mail, a photo camera, a calendar, a settings gear, a notification bell, a search glass, a favourite heart and a folder.
- **Treatment:** Reduced, geometric metaphors with the standard Google names, one per action.

## Prompt primer

- **Positive:** Material Symbols icon · Material Design icons · 24 dp grid · keyline shapes · geometric glyph · outlined and filled states · Google system icons · 2 dp stroke
- **Negative:** skeuomorphic detail · gradients · hand drawn lines · multicolour glyphs · perspective

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

- **Google Fonts** (platform, web, 2010–now), published the style. A free library of web fonts and icons. It serves the Material Symbols icon font and many open sans and serif families.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Grid size (`grid_size`) | 24 | 20–48 px | grid |
| Stroke width (`stroke_width`) | 2 | 1–3 px | stroke |
| Corner radius (`corner_radius`) | 2 | 0–2 px | shape |
| Fill mode (`fill_mode`) | outline | outline, solid | colour, shape |
| Base colour (`base_colour`) | #1D1B20 | #1D1B20, #6750A4, #49454F | colour |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **rounder and friendlier**: move toward [`outline-icon`](../outline-icon/SKILL.md) (Outline icon). Keep the 24 px grid; use round caps and joins and a 2 px corner radius on every shape.
- If the user asks for **bolder**: move toward [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md) (Solid glyph icon). Set fill 1 and weight 600–700, and keep the keylines.

- **Came from (go here for a more orthodox version):** [`flat-icon`](../flat-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)
- **Mixes well with:** [`outline-icon`](../outline-icon/SKILL.md)
- **Kin in another domain:** [`material-design`](../material-design/SKILL.md)
- **Nearest by vector profile:** [`duotone-icon`](../duotone-icon/SKILL.md), [`outline-icon`](../outline-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)

## Emotional target

Systematic confidence: the UI feels consistent and familiar to any Android user.

**Keywords:** systematic, consistent, neutral, clear · **Brand archetypes:** sage, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Material Symbols: home (outlined, weight 400)](https://github.com/google/material-design-icons) (Google): icon-set, Apache-2.0. Material Symbols; npm package @material-symbols/svg-400 0.25.0
- [Material Symbols: home (rounded, fill 1)](https://github.com/google/material-design-icons) (Google): icon-set, Apache-2.0. Material Symbols; npm package @material-symbols/svg-400 0.25.0
- [Material Symbols: home (sharp)](https://github.com/google/material-design-icons) (Google): icon-set, Apache-2.0. Material Symbols; npm package @material-symbols/svg-400 0.25.0
- [Material Icons: home (filled)](https://github.com/google/material-design-icons) (Google, 2014): icon-set, Apache-2.0. Material Icons, google/material-design-icons at commit 10ecc14

## Sources

- [Material Symbols guide, Google Fonts](https://developers.google.com/fonts/docs/material_symbols)
- [google/material-design-icons repository](https://github.com/google/material-design-icons)

---

Generated from [`data/icon/styles/material-symbols-icon.json`](../../data/icon/styles/material-symbols-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
