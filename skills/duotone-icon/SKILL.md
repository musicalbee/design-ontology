---
name: duotone-icon
description: "Apply the Duotone icon style (2019–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: duotone icon, two tone icon, bicolour icon, phosphor duotone, soft fill icon, two layer icon."
domain: icon
era: vector-system
triggers:
  - "duotone icon"
  - "two tone icon"
  - "bicolour icon"
  - "phosphor duotone"
  - "soft fill icon"
  - "two layer icon"
vector_profile:
  realism: 1
  fill: 3
  corner_softness: 4
  detail_density: 2
  colour_count: 2
---

# Duotone icon

> One colour in two strengths gives an icon a figure and a ground, so the meaning reads first and the detail second.

Icons in two tones of one colour: a main shape at full strength and a secondary layer at 20–40% opacity. The second tone gives hierarchy and a little depth, but the icon stays a flat glyph.

**Period:** 2019–present · **Era:** Vector system · **Domain:** Icons · **Also called:** Two-tone icon, Bicolour icon

## When to load this skill

Load it when the user asks for: "duotone icon", "two tone icon", "bicolour icon", "phosphor duotone", "soft fill icon", "two layer icon".

Good for: SaaS marketing pages, empty states and feature cards, dashboards with a soft brand, settings and onboarding.

Do not use it when:
- The icon is a 12–16 px control in a dense UI.
- The print process has one ink with no tint.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Duotone icon, you MUST:

1. Split each icon into a primary layer and a secondary layer.
2. Set the primary layer at 100% opacity and the secondary layer at 20–40% opacity of the same colour.
3. Make the secondary layer the larger, simpler area: a body, a ground or a fill under the outline.
4. Use the 24 px grid with a 2 px stroke or a solid primary shape; keep the weight of the base set.
5. Keep the two layers aligned; the secondary layer never offsets from the primary.
6. Use one hue for both layers; a second hue only as a deliberate brand choice.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Two unrelated hues in one icon.
- **NEVER:** Secondary layer at more than 50% opacity.
- **NEVER:** Gradients between the tones.
- **NEVER:** Drop shadows.
- **NEVER:** Secondary layer offset from the outline.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■□□□□` 1/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■□□` 3/5 | stroke only | solid fill only |
| Corner softness | `■■■■□` 4/5 | square, sharp corners | round, soft corners |
| Detail density | `■■□□□` 2/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■■□□□` 2/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 24
- **Live area px:** 20
- **Padding px:** 2
- **Keylines:** The keylines of the base set: a circle of 20 px and a square of 18 px.

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
- **Rule:** The primary layer keeps the 2 px stroke of the base set; the secondary layer is a fill with no stroke.

## Shape & corners

- **Corner radius px:** 2
- **Primitives:** The shapes of the base outline set; the secondary fill follows the closed shapes.
- **Optical size:** At 16 px, drop the secondary layer if it adds noise; at 32 px and above, keep both layers.

## Colour

- **Count max:** 2
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** One hue in two strengths: 100% for the figure, 20–40% for the secondary layer.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Primary | `#1E3A8A` | outline and main shape |
| Secondary | `#93A8DD` | fill at 30% (shown flat) |
| Paper | `#FFFFFF` | ground |

## Perspective & light

- **View:** front orthographic
- **Light:** No light model; the light tone works as a soft fill, not as light.
- **Shadow:** No shadow; the two layers are flat.

## Metaphor

- **Typical:** A house, an envelope, a folder, a chart and a shield.
- **Treatment:** The outline of the object plus a soft fill in the main body.

## Prompt primer

- **Positive:** duotone icon · two tone icon · outline with soft fill · primary and secondary layer · 30 percent opacity fill · single hue · 24 px grid · Phosphor duotone style
- **Negative:** two clashing colours · gradients · drop shadows · photorealistic detail · offset print layers

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Halftone (process)

Tone printed as dots of different size or spacing; at a distance the dots merge into grey or colour. Origin: graphic & ui design, New York, 1879.

- Set the screen at 10 to 30 lines per cm for a print grain, or enlarge the dots to 4 to 8mm for a Pop effect.
- Turn each colour screen to its own angle: cyan 15°, magenta 75°, yellow 0°, black 45°.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Font Awesome** (platform, web, 2012–now), published the style. An icon font and toolkit for the web. It ships solid, outline and duotone sets of the same icons.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Grid size (`grid_size`) | 24 | 16–32 px | grid |
| Stroke width (`stroke_width`) | 2 | 1.5–2 px | stroke |
| Corner radius (`corner_radius`) | 2 | 1–3 px | shape |
| Fill mode (`fill_mode`) | duotone | duotone | colour, shape |
| Base colour (`base_colour`) | #1E3A8A | #1E3A8A, #93A8DD | colour |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **plainer**: move toward [`outline-icon`](../outline-icon/SKILL.md) (Outline icon). Keep the 2 px stroke; remove the secondary layer.
- If the user asks for **more colour**: move toward [`flat-icon`](../flat-icon/SKILL.md) (Flat icon). Keep the two layers; give each its own flat hue at 100% and drop the stroke.

- **Came from (go here for a more orthodox version):** [`outline-icon`](../outline-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)
- **Mixes well with:** [`flat-icon`](../flat-icon/SKILL.md)
- **Kin in another domain:** [`risograph-print`](../risograph-print/SKILL.md)
- **Nearest by vector profile:** [`material-symbols-icon`](../material-symbols-icon/SKILL.md), [`outline-icon`](../outline-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md)

## Emotional target

Friendly order: the icon feels soft and a little rich, and still calm.

**Keywords:** soft, layered, friendly, polished · **Brand archetypes:** caregiver, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Phosphor: house (duotone)](https://github.com/phosphor-icons/core) (Helena Zhang and Tobias Fried): icon-set, MIT. Phosphor Icons core 2.1.1, duotone weight
- [Phosphor: envelope (duotone)](https://github.com/phosphor-icons/core) (Helena Zhang and Tobias Fried): icon-set, MIT. Phosphor Icons core 2.1.1, duotone weight

## Sources

- [Phosphor Icons core repository](https://github.com/phosphor-icons/core)
- [Phosphor Icons homepage](https://phosphoricons.com)

---

Generated from [`data/icon/styles/duotone-icon.json`](../../data/icon/styles/duotone-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
