---
name: flat-icon
description: "Apply the Flat icon style (2010–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: flat icon, flat design icon, flat colour icon, long shadow icon, metro icon, ios 7 icon."
domain: icon
era: vector-system
triggers:
  - "flat icon"
  - "flat design icon"
  - "flat colour icon"
  - "long shadow icon"
  - "metro icon"
  - "ios 7 icon"
vector_profile:
  realism: 2
  fill: 5
  corner_softness: 3
  detail_density: 2
  colour_count: 4
---

# Flat icon

> An icon is a sign, not a picture, and flat shapes in clear colour carry the meaning faster than material and light.

Icons in flat, solid colour shapes with no gradient, no texture and no light model. A simple object sits on a coloured ground, often a circle or a rounded square. Flat icons replaced skeuomorphic icons in the early 2010s.

**Period:** 2010–present · **Era:** Vector system · **Domain:** Icons · **Also called:** Flat colour icon, Long-shadow icon, Flat design icon

## When to load this skill

Load it when the user asks for: "flat icon", "flat design icon", "flat colour icon", "long shadow icon", "metro icon", "ios 7 icon".

Good for: marketing pages and feature lists, onboarding screens, app icons for simple tools, presentations and infographics.

Do not use it when:
- The icon must sit in a dense UI in one colour.
- The brand needs a tactile or luxury tone.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Flat icon, you MUST:

1. Build each icon from basic shapes: circles, rectangles and rounded rectangles.
2. Fill each shape with one flat colour; no gradient and no texture.
3. Use 2 to 5 colours in one icon, from a palette of 8 to 12 hues for the set.
4. Use a front or a pure side view; no perspective.
5. Place the object on a coloured circle or rounded square that fills 100% of the grid, with the object at 50–65%.
6. If a shadow is used, make it a flat long shadow at 45° in a 10–20% darker tone of the ground.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gradients and glossy highlights.
- **NEVER:** Soft drop shadows.
- **NEVER:** Texture of leather, wood or metal.
- **NEVER:** Perspective views.
- **NEVER:** Outlines around every shape.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■■□□□` 2/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■■■` 5/5 | stroke only | solid fill only |
| Corner softness | `■■■□□` 3/5 | square, sharp corners | round, soft corners |
| Detail density | `■■□□□` 2/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■■■■□` 4/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 48
- **Live area px:** 44
- **Padding px:** 2
- **Keylines:** A circle of 44 px and a rounded square of 40 px with a radius of 8 px.

**Sizes px**

|  |
||
|  |
|  |
|  |
|  |

## Stroke

- **Caps:** none
- **Joins:** none
- **Rule:** No stroke. Shapes meet edge to edge, and a gap of 1–2 px separates two parts of the same colour.

## Shape & corners

- **Corner radius px:** 4
- **Primitives:** Circles, rectangles and rounded rectangles; angles at 0°, 45° and 90°.
- **Optical size:** At 24 px, drop the ground shape and keep the object; at 64 px, add one more part.

## Colour

- **Count max:** 5
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** Flat, bright and medium-saturation hues; each icon takes 2 to 5 of them.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Flat red | `#E74C3C` | alert and heart |
| Flat orange | `#E67E22` | accent |
| Flat yellow | `#F1C40F` | highlight |
| Flat green | `#2ECC71` | success |
| Flat blue | `#3498DB` | ground and link |
| Midnight | `#2C3E50` | dark part |
| Cloud | `#ECF0F1` | light part |

## Perspective & light

- **View:** front orthographic
- **Light:** No light model; all faces have their own flat colour.
- **Shadow:** None, or a flat long shadow at 45° in a 10–20% darker tone.

## Metaphor

- **Typical:** A house, an envelope, a camera, a calendar, a gear, a bell and a folder.
- **Treatment:** Reduced objects: the silhouette plus 1 to 3 inner parts.

## Prompt primer

- **Positive:** flat design icon · flat colour shapes · no gradients · circle background · long shadow · simple geometric shapes · bright flat palette · vector app icon
- **Negative:** gradients · glossy highlights · soft drop shadows · realistic texture · perspective

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Silhouette (motif)

A form shown as one solid shape with no inner line, read only from its outer edge. Origin: painting, Corinth, c. 700 BCE.

- Fill the shape with one colour on a plain ground.
- Choose the most typical side view, so that the edge alone names the object.
- Cut inner detail as gaps of at least 1/16 of the shape width, not as lines.
- Keep the contrast between shape and ground high.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Grid size (`grid_size`) | 48 | 24–64 px | grid |
| Stroke width (`stroke_width`) | 0 | 0–0 px | stroke |
| Corner radius (`corner_radius`) | 4 | 0–8 px | shape |
| Fill mode (`fill_mode`) | solid | solid | colour, shape |
| Base colour (`base_colour`) | #3498DB | #3498DB, #E74C3C, #2ECC71, #2C3E50 | colour |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **thinner and calmer**: move toward [`outline-icon`](../outline-icon/SKILL.md) (Outline icon). Keep the shapes; remove the fills and draw the edges as a 2 px stroke on a 24 px grid.
- If the user asks for **more depth**: move toward [`clay-3d-icon`](../clay-3d-icon/SKILL.md) (3D clay icon). Keep the colours and the shapes; add soft volume, a matte material and a soft shadow.

- **Led to (go here for a newer version):** [`material-symbols-icon`](../material-symbols-icon/SKILL.md), [`outline-icon`](../outline-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md)
- **Was rejected by:** [`clay-3d-icon`](../clay-3d-icon/SKILL.md)
- **Mixes well with:** [`duotone-icon`](../duotone-icon/SKILL.md), [`isometric-icon`](../isometric-icon/SKILL.md)
- **Kin in another domain:** [`flat-design`](../flat-design/SKILL.md), [`metro-ui`](../metro-ui/SKILL.md)
- **Nearest by vector profile:** [`isometric-icon`](../isometric-icon/SKILL.md), [`pixel-icon`](../pixel-icon/SKILL.md), [`clay-3d-icon`](../clay-3d-icon/SKILL.md)

## Emotional target

Quick, cheerful clarity: the user reads the icon at once and the screen feels light.

**Keywords:** clean, bright, simple, friendly, modern · **Brand archetypes:** everyman, innocent

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Fluent Emoji: house (flat)](https://github.com/microsoft/fluentui-emoji) (Microsoft): icon-set, MIT. Fluent Emoji at commit 1ffb34c, flat set
- [Tabler Icons: home (filled)](https://github.com/tabler/tabler-icons) (Paweł Kuna): icon-set, MIT. Tabler Icons 3.24.0, filled set

## Sources

- [Flat design, Wikipedia](https://en.wikipedia.org/wiki/Flat_design)
- [Metro (design language), Wikipedia](https://en.wikipedia.org/wiki/Metro_(design_language))

---

Generated from [`data/icon/styles/flat-icon.json`](../../data/icon/styles/flat-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
