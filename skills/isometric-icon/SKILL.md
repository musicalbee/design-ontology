---
name: isometric-icon
description: "Apply the Isometric icon style (1995–present) when drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite. Load when the user asks for: isometric icon, isometric, 2.5d icon, 3d flat icon, axonometric icon, infographic icon."
domain: icon
era: rendered
triggers:
  - "isometric icon"
  - "isometric"
  - "2.5d icon"
  - "3d flat icon"
  - "axonometric icon"
  - "infographic icon"
vector_profile:
  realism: 3
  fill: 4
  corner_softness: 2
  detail_density: 3
  colour_count: 4
---

# Isometric icon

> An icon can show an object as a solid in space and keep it exact, because parallel projection keeps every edge at a true angle.

Icons drawn as small objects in a parallel isometric view: three faces at once, edges at 30° to the horizontal, no vanishing point. Flat colour fills give each face its own tone.

**Period:** 1995–present · **Era:** Rendered · **Domain:** Icons · **Also called:** Isometric pictogram, 2.5D icon

## When to load this skill

Load it when the user asks for: "isometric icon", "isometric", "2.5d icon", "3d flat icon", "axonometric icon", "infographic icon".

Good for: cloud and infrastructure diagrams, landing page feature illustrations, infographics and explainers, game and simulation UI.

Do not use it when:
- The icon sits inline with text at 16–24 px.
- The brief asks for a flat, front-view system.

## System directives

When drawing, choosing or prompting an icon or an icon set: a UI glyph, an app icon, a pictogram or a sprite in Isometric icon, you MUST:

1. Draw on an isometric grid with edges at 30° and 150° to the horizontal and vertical edges at 90°.
2. Show three faces: a top face in the light tone, a left face in the mid tone and a right face in the dark tone.
3. Use 3 tones of one hue for each object, 15–25% apart in lightness.
4. Keep all parallel edges parallel; no vanishing point and no foreshortening.
5. Fit the object into a hexagonal keyline that fills 80–90% of the grid.
6. Use a 1–1.5 px stroke at 48 px only when the faces need separation.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Vanishing-point perspective.
- **NEVER:** Front-only flat views.
- **NEVER:** Faces that share one tone.
- **NEVER:** Edges off the 30° grid.
- **NEVER:** Photographic texture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Realism | `■■■□□` 3/5 | abstract glyph | rendered object with material and light |
| Fill | `■■■■□` 4/5 | stroke only | solid fill only |
| Corner softness | `■■□□□` 2/5 | square, sharp corners | round, soft corners |
| Detail density | `■■■□□` 3/5 | one idea in few strokes | many parts, texture and highlights |
| Colour count | `■■■■□` 4/5 | one colour | full colour with gradients |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Grid & live area

- **Base px:** 64
- **Live area px:** 56
- **Padding px:** 4
- **Keylines:** A hexagon that holds an isometric cube of 56 px across, with its centre on the grid centre.

**Sizes px**

|  |
||
|  |
|  |
|  |
|  |

## Stroke

- **Width px:** 1.5
- **Caps:** round
- **Joins:** round
- **Rule:** An optional 1–1.5 px outline at 64 px, in the darkest tone of the object; the faces carry the form.

## Shape & corners

- **Corner radius px:** 2
- **Primitives:** Isometric boxes, cylinders and planes; edges at 30°, 90° and 150° only.
- **Optical size:** At 32 px, drop small parts and keep the three faces; at 128 px, add one level of detail such as a screen or a label.

## Colour

- **Count max:** 9
- **Gradients:** no — the values here translate a print style for screen
- **Strategy:** 3 tones for each hue, with 2 to 3 hues in one icon; the top face is the lightest.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Top face | `#8FB8F2` | light face |
| Left face | `#4F86D9` | mid face |
| Right face | `#2D5BA8` | dark face |
| Accent top | `#FFC857` | second object, light |
| Accent side | `#E09F1F` | second object, dark |
| Ground | `#EEF1F6` | ground plane |

## Perspective & light

- **View:** isometric
- **Light:** A fixed light from the top; the light sets the tone of each face, not a gradient.
- **Shadow:** A flat parallelogram on the ground plane in a darker tone at 10–20% opacity, or none.

## Metaphor

- **Typical:** A server, a box, a laptop, a document stack, a building and a chart.
- **Treatment:** Objects shown as small solids; a process is a group of solids on one ground plane.

## Prompt primer

- **Positive:** isometric icon · 30 degree isometric grid · three visible faces · flat colour faces · three tones of one hue · 2.5D pictogram · clean vector illustration · no vanishing point
- **Negative:** vanishing point perspective · photorealistic texture · front view only · soft gradients · hand-drawn lines

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Isometric projection (process)

A drawing with three axes at equal angles and one scale, with no vanishing point, so that sizes can be measured. Origin: architecture, Cambridge, 1822.

- Draw the three axes at 120° to each other; on a pixel grid, use a 2:1 slope (26.57°).
- Keep one scale on all three axes and draw no vanishing point.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`flat-icon`](../flat-icon/SKILL.md) (Flat icon). Keep the colours; turn the object to a front view and merge the three faces into one flat fill.
- If the user asks for **more realistic**: move toward [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md) (Skeuomorphic icon). Keep the solid form; add gradients, a highlight and a soft cast shadow.

- **Came from (go here for a more orthodox version):** [`pixel-icon`](../pixel-icon/SKILL.md)
- **Mixes well with:** [`flat-icon`](../flat-icon/SKILL.md), [`skeuomorphic-icon`](../skeuomorphic-icon/SKILL.md)
- **Kin in another domain:** [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md), [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md)
- **Nearest by vector profile:** [`flat-icon`](../flat-icon/SKILL.md), [`pixel-icon`](../pixel-icon/SKILL.md), [`clay-3d-icon`](../clay-3d-icon/SKILL.md)

## Emotional target

Clarity with depth: the viewer sees a system as a small, ordered model.

**Keywords:** technical, ordered, dimensional, clear · **Brand archetypes:** sage, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [toicon isometric: search](https://commons.wikimedia.org/wiki/File:Toicon-icon-isometric-search.svg) (Jo Szczepanska): icon-set, CC BY 4.0. toicon.com; file on Wikimedia Commons
- [toicon isometric: save](https://commons.wikimedia.org/wiki/File:Toicon-icon-isometric-save.svg) (Jo Szczepanska): icon-set, CC BY 4.0. toicon.com; file on Wikimedia Commons

## Sources

- [Isometric projection, Wikipedia](https://en.wikipedia.org/wiki/Isometric_projection)
- [toicon isometric icons on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Toicon-icon-isometric-search.svg)

---

Generated from [`data/icon/styles/isometric-icon.json`](../../data/icon/styles/isometric-icon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
