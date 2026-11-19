---
name: solid-glyph-icon
description: "Apply the Solid glyph icon style (2012–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: solid icon, filled icon, glyph icon, font awesome, icon font, heroicons solid."
domain: icon
era: vector-system
triggers:
  - "solid icon"
  - "filled icon"
  - "glyph icon"
  - "font awesome"
  - "icon font"
  - "heroicons solid"
  - "bold icon"
vector_profile:
  realism: 1
  fill: 5
  corner_softness: 3
  detail_density: 2
  colour_count: 1
---

# Solid glyph icon

> An icon is a single solid mark, and a silhouette with cut-out details reads best at small sizes and on any ground.

Icons as solid, one-colour silhouettes, like the glyphs of a bold typeface. Inner details are cut out of the fill as gaps. The style began with icon fonts and stays the default for small, high-contrast UI.

**Period:** 2012–present · **Era:** Vector system · **Domain:** Icons · **Also called:** Filled icon, Glyph icon, Icon font glyph

## When to load this skill

Load it when the user asks for: "solid icon", "filled icon", "glyph icon", "font awesome", "icon font", "heroicons solid", "bold icon".

Good for: toolbars and tab bars, buttons and small UI at 12–16 px, maps and wayfinding pictograms, active state of an outline set.

Do not use it when:
- The UI is light and airy and the icons must recede.
- The icon is the hero of a page and needs depth.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Solid glyph icon, you MUST:

1. Draw a solid silhouette on a 24 × 24 px grid, or on the em square of an icon font.
2. Cut inner details out of the fill as gaps of 1.5–2 px at 24 px.
3. Use one colour per icon; the icon takes the text colour.
4. Keep the visual weight even: each icon covers 40–60% of its live area.
5. Give rectangles a corner radius of 1–2 px at 24 px.
6. Align the glyph to the text baseline when it is set in a line of text.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Thin outlines next to solid shapes.
- **NEVER:** More than one colour in a UI glyph.
- **NEVER:** Gradients and shadows.
- **NEVER:** Gaps under 1 px at 24 px.
- **NEVER:** Uneven visual weight across the set.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■□□□□` 1/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■■■` 5/5 | stroke only | solid fill only |
| Corner softness | `■■■□□` 3/5 | square, sharp corners | round, soft corners |
| Detail density | `■■□□□` 2/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■□□□□` 1/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 24
- **Live area px:** 20
- **Padding px:** 2
- **Keylines:** A circle of 20 px and a square of 18 px; for a font, the glyph fills the em height with a sidebearing of 1/16 em.

**Sizes px**

|  |
||
|  |
|  |
|  |
|  |
|  |

## Stroke

- **Caps:** none
- **Joins:** none
- **Rule:** No stroke. The form is the fill; inner lines are negative gaps of 1.5–2 px.

## Shape & corners

- **Corner radius px:** 1.5
- **Primitives:** Solid silhouettes from circles, rectangles and rounded rectangles; gaps cut at 0°, 45° or 90°.
- **Optical size:** At 12–16 px, close small gaps and keep the outer silhouette; at 24 px and above, open the gaps.

## Colour

- **Count max:** 1
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** One colour, currentColor; the ground gives the contrast.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Ink | `#1A1A1A` | glyph on light ground |
| Paper | `#FFFFFF` | ground and gap |
| Brand accent | `#2563EB` | active state |

## Perspective & light

- **View:** front orthographic
- **Light:** No light model.
- **Shadow:** No shadow; the glyph is flat on the ground.

## Metaphor

- **Typical:** A house, a bell, a user, a trash can, a star, a heart and a magnifier.
- **Treatment:** The silhouette of the object with 1 or 2 cut-out details.

## Prompt primer

- **Positive:** solid filled icon · glyph icon · single colour silhouette · icon font style · cut-out details · bold UI icons · Font Awesome style · high contrast pictogram
- **Negative:** outlines only · gradients · multiple colours · 3D shading · thin hairlines

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
| Grid size (`grid_size`) | 24 | 12–24 px | grid |
| Stroke width (`stroke_width`) | 0 | 0–0 px | stroke |
| Corner radius (`corner_radius`) | 1.5 | 0–2 px | shape |
| Fill mode (`fill_mode`) | solid | solid | colour, shape |
| Base colour (`base_colour`) | #1A1A1A | #1A1A1A, #2563EB | colour |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter**: move toward [`outline-icon`](../outline-icon/SKILL.md) (Outline icon). Keep the silhouette and the grid; draw the edge as a 2 px stroke with round caps, and drop the fill.
- If the user asks for **more nuanced**: move toward [`duotone-icon`](../duotone-icon/SKILL.md) (Duotone icon). Keep the solid main shape; set the secondary parts at 20–40% opacity of the same colour.

- **Came from (go here for a more orthodox version):** [`flat-icon`](../flat-icon/SKILL.md), [`pixel-icon`](../pixel-icon/SKILL.md)
- **Led to (go here for a newer version):** [`duotone-icon`](../duotone-icon/SKILL.md), [`material-symbols-icon`](../material-symbols-icon/SKILL.md)
- **Mixes well with:** [`outline-icon`](../outline-icon/SKILL.md)
- **Kin in another domain:** [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`material-symbols-icon`](../material-symbols-icon/SKILL.md), [`duotone-icon`](../duotone-icon/SKILL.md), [`pixel-icon`](../pixel-icon/SKILL.md)

## Emotional target

Firm and clear: the user finds the action at once.

**Keywords:** bold, clear, direct, solid · **Brand archetypes:** hero, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Font Awesome Free: house (solid)](https://github.com/FortAwesome/Font-Awesome) (Fonticons): icon-set, CC BY 4.0. Font Awesome Free 6.7.2; icons under CC BY 4.0
- [Font Awesome Free: bell (solid)](https://github.com/FortAwesome/Font-Awesome) (Fonticons): icon-set, CC BY 4.0. Font Awesome Free 6.7.2; icons under CC BY 4.0
- [Heroicons: home (24 solid)](https://github.com/tailwindlabs/heroicons) (Tailwind Labs): icon-set, MIT. Heroicons 2.1.5, 24 px solid
- [Phosphor: house (fill)](https://github.com/phosphor-icons/core) (Helena Zhang and Tobias Fried): icon-set, MIT. Phosphor Icons core 2.1.1, fill weight

## Sources

- [Font Awesome repository](https://github.com/FortAwesome/Font-Awesome)
- [Heroicons repository](https://github.com/tailwindlabs/heroicons)

---

Generated from [`data/icon/styles/solid-glyph-icon.json`](../../data/icon/styles/solid-glyph-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
