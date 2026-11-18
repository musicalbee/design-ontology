---
name: de-stijl-painting
description: "Apply the De Stijl painting style (1917–1931) when making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover. Load when the user asks for: de stijl, mondrian, neoplasticism, primary colours grid, geometric abstraction, rietveld."
domain: painting
era: avant-garde
triggers:
  - "de stijl"
  - "mondrian"
  - "neoplasticism"
  - "primary colours grid"
  - "geometric abstraction"
  - "rietveld"
  - "red blue yellow"
  - "black grid lines"
vector_profile:
  abstraction: 5
  brushwork_visibility: 1
  chromatic_intensity: 4
  depth_illusion: 1
  line_dominance: 5
---

# De Stijl painting

> A picture shows universal order when it uses only the horizontal and the vertical, the three primaries and the three non-colours, balanced without symmetry.

A picture reduced to straight black lines, rectangles of primary colour and white or grey, in asymmetric balance. Mondrian and van Doesburg wanted a universal language of pure relations that could also order a room or a city.

**Period:** 1917–1931 · **Era:** Avant-garde · **Domain:** Painting · **Also called:** Neoplasticism, Mondrian grid

## When to load this skill

Load it when the user asks for: "de stijl", "mondrian", "neoplasticism", "primary colours grid", "geometric abstraction", "rietveld", "red blue yellow", "black grid lines".

Good for: identity and packaging graphics, layout and dashboard grid inspiration, poster and album art, textile and tile pattern.

Do not use it when:
- The brief asks for emotion, a story or a human subject.
- The brief needs a soft, organic or ornamental mood.

## System directives

When making, prompting or art-directing a picture: a painting, an illustration, an image-generation prompt or a cover in De Stijl painting, you MUST:

1. Use only horizontal and vertical lines, with no diagonal and no curve.
2. Limit colour to red, yellow and blue, plus white, black and grey.
3. Draw black lines of 1–3% of the picture width, and extend each line to the edge or to another line.
4. Let white or grey cover 60–75% of the area, so that the colour is rare and strong.
5. Make each colour field a rectangle, and make no two fields the same size.
6. Balance the picture asymmetrically: a large red field against several small fields of blue, yellow and grey.
7. Hold the lines and fields flat and opaque, so that the picture is a plane with no space behind it.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Diagonal or curved lines, except in the rotated lozenge format.
- **NEVER:** Secondary colours, tints and gradients.
- **NEVER:** Symmetric, centred compositions.
- **NEVER:** Depth, shadow, texture or visible brush gesture.
- **NEVER:** Recognisable objects, figures or landscape.
- **NEVER:** Ornament and decorative pattern.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Abstraction | `■■■■■` 5/5 | illusionistic depiction | pure abstraction |
| Brushwork visibility | `■□□□□` 1/5 | no trace of the hand | each stroke and gesture shown |
| Chromatic intensity | `■■■■□` 4/5 | muted, tonal | saturated, high-key |
| Depth illusion | `■□□□□` 1/5 | flat picture plane | deep perspectival space |
| Line dominance | `■■■■■` 5/5 | colour and mass carry the image | line carries the image |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Layout:** An orthogonal grid of 4–8 black lines that cross unevenly and divide the canvas into 8–16 rectangles of different sizes; lines run to or past the edge.
- **Focal point:** One large colour field, usually red, at 15–25% of the area, set off-centre in the upper left or lower right quadrant.
- **Format:** A square canvas, or a square rotated 45° (the lozenge); a rectangle is allowed at ratios close to 1:1.

**Principles**

| Principle | Rule |
|---|---|
| balance | Balance the picture asymmetrically: weight of the large red field equals the weight of 3–4 small colour fields and the black line mass. |
| proportion | Divide the canvas in unequal proportions near 1:2, 2:3 or 3:5, and avoid the exact half. |
| negative-space | Set white and grey fields at 60–75% of the area as the quiet ground against which colour acts. |
| hierarchy | Use three levels: one dominant colour field, 2–3 secondary fields, and many white cells. |
| colour-distribution | Spend the primaries at 10–25% of the area in total, in the ratio of about 3 red to 2 blue to 1 yellow. |

## Palette

- **Strategy:** Three primaries, three non-colours and nothing else; each colour is pure, flat and opaque, and the white is slightly warm.
- **Distribution:** White and pale grey 60–75%, primaries together 10–25%, black lines 5–10%.
- **Ground:** A white-primed canvas, painted with an off-white (not pure white) for the ground cells.

**Colours**

| Name | Hex | Pigment | Role |
|---|---|---|---|
| Primary red | `#D3202A` | cadmium red | the dominant colour field |
| Primary blue | `#1D3F8C` | cobalt or ultramarine | small and mid colour field |
| Primary yellow | `#F2C300` | cadmium yellow | small colour field |
| Off-white | `#F4F1E6` | zinc and lead white | the main ground cells |
| Pale grey | `#CFCFCB` | mixed grey | alternate ground cell |
| Black | `#151515` | ivory black | the grid lines |

## Brushwork & medium

- **Medium:** Oil paint, applied in thin, even layers.
- **Support:** Square, tightly stretched canvas on a plain stretcher.
- **Brushwork:** No stroke shows; all marks run in one direction in each field, and the painter masks the lines for a sharp edge.
- **Paint handling:** 2–4 layers of flat, opaque colour; the black lines are laid last or between the fields, with 1–3mm width.
- **Edges:** Perfectly hard edges, straight to within 0.5mm.

## Light & modelling

- **Light:** No depicted light; the picture itself is bright and even.
- **Modelling:** None. Each field is a single flat value.
- **Shadow:** None. A slight difference between two whites or greys is the only tonal step.
- **Temperature:** Warm red and yellow against cool blue and neutral white, balanced by area.

## Subject

- **Typical:** No subject; a relation of lines and fields. Early studies abstract a tree, a pier or a church tower.
- **Figure scale:** Not applicable: the unit is the field, from 2% to 25% of the area.
- **Treatment:** Pure, impersonal and rule-bound; the hand of the artist is hidden.

## Surface

- **Finish:** Matt to satin, perfectly even.
- **Texture:** Smooth, with a faint canvas weave; the paint edge may stand a fraction of a millimetre above the next field.

## Reference works

- **Note:** Object ids were checked against the Art Institute of Chicago API (CC0 data). The Farm near Duivendrecht is a pre-De Stijl work and shows the path to abstraction. Look at the museum page for the image and its licence.

**Works**

| Work | Artist | Date | Museum | Object id | Public domain |
|---|---|---|---|---|---|
| Lozenge Composition with Yellow, Black, Blue, Red, and Gray | Piet Mondrian | 1921 | Art Institute of Chicago | 109819 | true |
| Composition (No. 1) Gray-Red | Piet Mondrian | 1935 | Art Institute of Chicago | 65821 | true |
| Farm near Duivendrecht | Piet Mondrian | c. 1916 | Art Institute of Chicago | 144467 | true |

## Prompt primer

- **Positive:** De Stijl neoplasticism · Mondrian grid · black horizontal and vertical lines · flat primary red blue yellow fields · white and grey cells · asymmetric balance · square canvas · hard straight edges · no brush texture · pure geometric abstraction
- **Negative:** diagonal lines · curves · gradient · shadow · texture · recognisable objects · symmetry

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more expressive**: move toward [`abstract-expressionism`](../abstract-expressionism/SKILL.md) (Abstract Expressionism). Keep the flat colour and the large fields; drop the straight line and the grid, loosen the edges, and make the stroke visible at 50–150mm.
- If the user asks for **less strict**: move toward [`cubism-painting`](../cubism-painting/SKILL.md) (Cubism). Keep the flat planes and the narrow palette; allow the diagonal and the tilted plane, and bring back an object clue such as a guitar or a bottle.

- **Came from (go here for a more orthodox version):** [`cubism-painting`](../cubism-painting/SKILL.md)
- **Was rejected by:** [`abstract-expressionism`](../abstract-expressionism/SKILL.md)
- **Kin in another domain:** [`bauhaus`](../bauhaus/SKILL.md), [`bauhaus-interior`](../bauhaus-interior/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`cubism-painting`](../cubism-painting/SKILL.md), [`pop-art-painting`](../pop-art-painting/SKILL.md), [`ukiyo-e`](../ukiyo-e/SKILL.md)

## Emotional target

Clarity and rational calm: the viewer feels a system in balance, with nothing to add or remove.

**Keywords:** rational, pure, balanced, geometric, precise · **Brand archetypes:** sage, creator

## Sources

- [Wikidata Q207445 (De Stijl)](https://www.wikidata.org/wiki/Q207445)
- [Getty AAT 300021259 (De Stijl) and 300021262 (Neoplasticism)](https://vocab.getty.edu/page/aat/300021259)
- [Art Institute of Chicago API (CC0 data)](https://api.artic.edu/docs/)
- Piet Mondrian, Neo-Plasticism: the General Principle of Plastic Equivalence (1920)

---

Generated from [`data/painting/styles/de-stijl-painting.json`](../../data/painting/styles/de-stijl-painting.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
