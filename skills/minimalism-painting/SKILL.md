---
name: minimalism-painting
description: "Apply the Minimalism style (1959–1975) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: minimalism, minimalist painting, frank stella, agnes martin, stripes, hard edge."
domain: painting
era: avant-garde
triggers:
  - "minimalism"
  - "minimalist painting"
  - "frank stella"
  - "agnes martin"
  - "stripes"
  - "hard edge"
  - "serial grid"
  - "shaped canvas"
  - "less is more"
vector_profile:
  abstraction: 5
  brushwork_visibility: 1
  chromatic_intensity: 2
  depth_illusion: 1
  line_dominance: 4
---

# Minimalism

> A picture is a plain object: what you see is what is there, so that form is reduced to the fewest parts and no illusion, gesture or story remains.

Flat, exact, repeated forms: stripes, grids and bare shapes in one or two colours. The picture is an object with no story and no hand, and the viewer sees what is there.

**Period:** 1959–1975 · **Era:** Avant-garde · **Domain:** Painting · **Also called:** Minimal art, ABC art, Hard-edge minimalism

## When to load this skill

Load it when the user asks for: "minimalism", "minimalist painting", "frank stella", "agnes martin", "stripes", "hard edge", "serial grid", "shaped canvas", "less is more".

Good for: interface and brand systems built on grids, architecture, furniture and gallery identity, packaging with one hue and one rule, wall graphics and print covers.

Do not use it when:
- The brief needs warmth, story, a figure or a hand-made touch.
- The picture must show rich colour or texture.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in Minimalism, you MUST:

1. Reduce the picture to 1–3 elements: a stripe, a grid, a bar or a single shape.
2. Repeat one unit, such as a stripe of 40–80mm, 8–40 times, in a strict order.
3. Paint flat, even coats with no stroke, and keep the edge sharp to under 1mm.
4. Limit the colour to 1–3 hues, or to black, grey and white, with no mixing and no gradient.
5. Let the shape of the canvas follow the pattern: a notched, shaped or very wide support is fine.
6. Fix the system before the painting starts, and follow it with no change by taste.
7. Give the picture no title that tells a story and no sign of the hand.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A gesture, a drip or a visible stroke.
- **NEVER:** A figure, an object or a landscape.
- **NEVER:** A soft, blended or glowing edge.
- **NEVER:** A rich, many-hued or decorative palette.
- **NEVER:** An off-centre, free, intuitive layout.
- **NEVER:** A title that tells a story or a feeling.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■■■` 5/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■□□□□` 1/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■□□□` 2/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■□□□□` 1/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■■□` 4/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** A repeated stripe or grid on a flat support, in a fixed order, with an even spacing and no focal centre.
- **Focal point:** None: the field is even; the eye goes to the edge of the support and to the single change in the pattern.
- **Format:** A square or very wide canvas, or a shaped support, of 1.5m or more on one side.

**Principles**

| Principle | Rule |
|---|---|
| rhythm | Repeat one stripe or unit 8–40 times at an exact step, with a tolerance of 1mm. |
| symmetry-axis | Make the pattern symmetric about the centre axis, or repeat it with a shift of one step. |
| unity-variety | Hold 1 unit width and 1–2 hues across the picture, and allow a change of only one variable at a time. |
| negative-space | Leave 0–20% as bare ground, with an even strip of 5–20mm between the units. |
| contrast | Keep a value gap of 20% or less between neighbouring units, or 80% or more for a black and white pair. |
| proportion | Set the unit width to a simple ratio, such as 1:2 or 1:3, of the gap and of the canvas. |

## Palette

- **Strategy:** One to three flat hues or neutrals, used as they come, in strict order; grey, black and white are as strong as colour.
- **Distribution:** 1–2 main hues 80–95%, a ground or a gap 5–20%, no accent.
- **Ground:** Primed white or raw canvas, left bare in the gap.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Flat black | `#1A1A1C` | enamel black | stripe and band |
| Mid grey | `#8A8D91` | grey enamel | stripe and field |
| Warm white | `#EFEDE6` | zinc white | ground and gap |
| Industrial red | `#B5302A` | cadmium red | single hue |
| Aluminium | `#B7BBC0` | aluminium paint | metal stripe |
| Pencil grey | `#6A6C70` | graphite | fine grid line |

## Brushwork & medium

- **Medium:** Enamel, house paint, acrylic and thin oil; graphite for a fine grid.
- **Support:** Primed canvas, a shaped stretcher or a flat panel, 1.5m or more wide.
- **Brushwork:** None in view: flat, even coats with a roller or a brush, and masked edges.
- **Paint handling:** 2–3 even coats; no texture, no glaze, no correction in view.
- **Edges:** Sharp, masked, with a tolerance of 1mm; the edge of the stripe is the line.

## Light & modelling

- **Light:** Even and neutral; the picture is lit like a wall.
- **Modelling:** None; each unit is a flat colour.
- **Shadow:** None; the shaped support may cast a real shadow on the wall.
- **Temperature:** Neutral; a single warm or cool hue in the whole picture.

## Subject

- **Typical:** Concentric stripes, parallel bands, a grid of fine pencil lines, a notched shape, a single bar.
- **Figure scale:** No figure; the unit is a stripe of 40–80mm repeated across the picture.
- **Treatment:** Plain, exact and cool; the picture is an object, and the title is a number or a place.

## Surface

- **Finish:** Matt to satin and even.
- **Texture:** Smooth and flat; a faint grain of the canvas in view; graphite lines of 0.2mm.

## Reference works

- **Note:** Object ids were checked against the Art Institute of Chicago API. None of the three works is flagged as public domain by the museum: the ids identify them only. Look at the museum page for the image and its licence; do not copy it.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| De la nada vida a la nada muerte | Frank Stella | 1965 | Art Institute of Chicago | 25671 | false |
| Hatra I | Frank Stella | 1967 | Art Institute of Chicago | 34852 | false |
| Untitled | Agnes Martin | 1961 | Art Institute of Chicago | 159982 | false |

## Prompt primer

- **Positive:** minimalist painting · repeated stripes · hard sharp edges · flat even paint · strict grid · one or two flat colours · shaped canvas · Stella and Agnes Martin style · no gesture · plain object
- **Negative:** gestural brush · figure or landscape · soft glowing edge · rich decorative palette · free intuitive layout · story title

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Serial repetition (process)

One motif or one frame, repeated with small changes in a set of works, so that the viewer reads the change and not the object. Origin: painting, Paris, 1891.

- Fix the motif, the format and the viewpoint; change one variable only, such as the hour, the colour or the stripe width.
- Make at least 5 works in the set and show them in one row at one height.
- Keep the spacing between works equal to a fixed unit, such as 10 cm or one panel width.
- Remove the hand: use a mechanical edge, a stencil or a plain lens.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Leo Castelli Gallery** (gallery, New York, 1957–now), exhibited the style. The gallery of the dealer Leo Castelli. It showed Pop Art and then Minimalism.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key colour (`key_colour`) | #1A1A1C | #1A1A1C, #8A8D91, #B5302A | palette |
| Value contrast (`value_contrast`) | 0.5 | 0.1–0.9 | light_and_modelling, palette |
| Brush size (`brush_size`) | 0 | 0–0.1 % of canvas width | brushwork_and_medium |
| Canvas ratio (`canvas_ratio`) | 1:1 | 1:1, 16:9 | surface, composition |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colour and glow**: move toward [`colour-field-painting`](../colour-field-painting/SKILL.md) (Colour Field Painting). Soften the edge to 20–60mm, enlarge the field to 2m or more, saturate the hue, and stain the paint into raw cloth.
- If the user asks for **more floating and spiritual**: move toward [`suprematism`](../suprematism/SKILL.md) (Suprematism). Drop the repeat; use 1–5 tilted shapes at 10–45° on a white field, and keep 50–70% of the picture empty.

- **Came from (go here for a more orthodox version):** [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`suprematism`](../suprematism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`abstract-expressionism`](../abstract-expressionism/SKILL.md)
- **Kin in another domain:** [`japandi-interior`](../japandi-interior/SKILL.md), [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`suprematism`](../suprematism/SKILL.md), [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`cubism-painting`](../cubism-painting/SKILL.md)

## Emotional target

Stillness and clarity: the viewer sees the thing as it is, and feels order without a message.

**Keywords:** exact, reduced, cool, serial, neutral · **Brand archetypes:** sage, ruler, creator

## Sources

- [Wikidata Q173436 (Minimalism)](https://www.wikidata.org/wiki/Q173436)
- [Getty AAT 300065758 (Minimalism)](https://vocab.getty.edu/page/aat/300065758)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)
- Donald Judd, Specific Objects (Arts Yearbook 8, 1965)

---

Generated from [`data/painting/styles/minimalism-painting.json`](../../data/painting/styles/minimalism-painting.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
