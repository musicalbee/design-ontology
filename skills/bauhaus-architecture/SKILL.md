---
name: bauhaus-architecture
description: "Apply the Bauhaus Architecture style (1919–1933) when designing, describing or rendering buildings and interiors. Load when the user asks for: bauhaus architecture, bauhaus building, dessau, gropius, hannes meyer, pinwheel plan."
domain: architecture
era: modern-movement
triggers:
  - "bauhaus architecture"
  - "bauhaus building"
  - "dessau"
  - "gropius"
  - "hannes meyer"
  - "pinwheel plan"
  - "form follows function"
  - "glass workshop wing"
vector_profile:
  ornamentation: 1
  structural_expression: 4
  geometric_rigidity: 5
  material_rawness: 2
  monumentality: 2
---

# Bauhaus Architecture

> Form follows use: each function gets its own volume, and the plan is the generator of the building, not the facade.

A functional building of asymmetric wings, each wing sized by its use, joined by bridges and glazed on the work side. Gropius and Meyer taught building as the last step of a workshop education that joined art, craft and industry.

**Period:** 1919–1933 · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** Bauhaus building, Neues Bauen (Bauhaus strand)

## When to load this skill

Load it when the user asks for: "bauhaus architecture", "bauhaus building", "dessau", "gropius", "hannes meyer", "pinwheel plan", "form follows function", "glass workshop wing".

Good for: school and campus renders, social housing studies, workshop and studio buildings, didactic design diagrams.

Do not use it when:
- The brief asks for a ceremonial, symmetric or monumental front.
- The programme is a single hall, which gives no functions to separate into wings.

## System directives

When designing, describing or rendering buildings and interiors in Bauhaus Architecture, you MUST:

1. Divide the programme into separate wings by function, and size each wing by its use: workshop, studio, school, dwelling.
2. Arrange the wings in a pinwheel or an L around a pivot, with no central axis and no principal front.
3. Glaze the work side: a full-height curtain wall of 3 to 4 storeys on the workshop wing, and ribbon windows on the dwelling wing.
4. Keep the frame in concrete or steel, with infill walls in white render and a flat roof with an internal drain.
5. Set the module by use: a 1.1 to 1.25m grid for dwelling cells, and 5 to 6m bays for workshops.
6. Use primary colour only to mark function, in flat planes inside the building: red, yellow and blue, plus black, white and grey.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A symmetric front on one ceremonial axis.
- **NEVER:** Pitched roofs, gables or dormers.
- **NEVER:** Applied ornament, mouldings or decorative tile.
- **NEVER:** Wings or rooms sized by the facade and not by use.
- **NEVER:** Plan forms that hide the function of each volume.
- **NEVER:** Rough, hand-textured or historicist surfaces.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■■□` 4/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■■` 5/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■□□□` 2/5 | finished and coated | raw and unfinished |
| Monumentality | `■■□□□` 2/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** Interlocking cuboid wings of different heights, 2 to 5 storeys, linked by a bridge or a covered passage.
- **Proportion:** Long horizontal bars cross each other at right angles; the tallest wing is at most 2.5 times the lowest.
- **Roof:** Flat roof, 0 to 3° fall to an inner gutter; roof terraces for dwelling wings.
- **Relation to ground:** The building sits on the ground or on a low plinth; a bridge may span a public road at first-floor level.

## Structure

- **System:** A reinforced-concrete frame with mushroom columns in the workshop wing, and brick infill rendered white.
- **Span and module:** Bays of 4.5 to 6m in the workshop wing; room cells based on a 1.1 to 1.25m planning grid.
- **Expression:** The glass wall hangs in front of the slab edges, so the frame is clear at the corners and the plan is legible from outside.

## Materials

- **Primary:** white-rendered brick and concrete · steel-framed glazing · plate glass
- **Secondary:** linoleum · tubular steel furniture · painted steel balconies · clinker brick on the base
- **Finish:** Smooth and flat; render is white or light grey, and every surface is free of moulding or texture.

**Palette**

| Name | Hex | Role |
|---|---|---|
| White render | `#F2F1EC` | walls |
| Bauhaus red | `#C0392B` | doors and interior function planes |
| Bauhaus yellow | `#E8B923` | signage and accents |
| Bauhaus blue | `#1F4E8C` | interior planes |
| Steel black | `#1A1A1A` | frames and lettering |

## Facade

- **Composition:** Asymmetric: a glass curtain wall on one wing, ribbon windows and balcony slabs on another, and plain white wall on the third.
- **Openings:** Full-height glazing in the work wing, 2 to 3m ribbon windows in the dwelling wing; the window-to-wall ratio is 40 to 90% by wing.
- **Solid to void:** Varies by function: 15–30% solid on the glass wing and 60–70% solid on the dwelling wing.

## Light & space

- **Daylight:** Workshop wings are lit on one side by the full curtain wall; the north side is kept for studios.
- **Spatial sequence:** A pinwheel route: bridge, hall, then workshop or studio; corridors are short and have a window at the end.
- **Interior character:** White walls, coloured function planes, tubular-steel furniture, built-in storage and bare bulbs; nothing is hung only for decoration.

## Ornament

- **Attitude:** No ornament. Typography, colour planes and the precision of joints carry the identity of the building.
- **Details:** sans-serif building lettering · primary-colour interior planes · tubular steel railings · glazed stair towers · bridge links

## Composition rules

- **Symmetry:** asymmetric
- **Axis count:** 0
- **Rhythm module m:** 3

**Rules**

| Principle | Rule | Value |
|---|---|---|
| balance | Balance the wings of different volumes about a pivot, not about a mirror axis. | asymmetric, 3 wings |
| grouping | Group the functions in separate blocks linked by a bridge. | 3–4 blocks |
| rhythm | Use a regular structural grid and a ribbon window band. | module 3m |
| negative-space | Keep the white wall plain and unornamented. | 0 applied ornament |
| zoning | Place each function in its own volume: workshops, studios, living. | function per block |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Bauhaus building, Dessau | Cethegus (Wikimedia Commons, PD-self) | Public domain | https://commons.wikimedia.org/wiki/File:Bauhaus-Dessau_main_building.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `zoning` | Zoning | A space divides into areas with one activity each. A rug, a light, a ceiling change or a group of furniture marks a zone without a wall. | zones in one open room (count): 2 to 4; zone marker (kind): rug, pendant, floor level, ceiling level, furniture back |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** asymmetric wings, pinwheel plan, glass curtain wall workshop, white rendered walls, flat roof, bridge link between wings, ribbon windows, primary colour accents, sans-serif lettering
- **Exclude:** symmetric portico, pitched roof, ornament, brick detailing, rustic stone, arches

Reference works:

| Work | Maker | Year |
|---|---|---|
| Bauhaus Building, Dessau | Walter Gropius | 1926 |
| Masters' Houses, Dessau | Walter Gropius | 1926 |
| Törten Estate, Dessau | Walter Gropius | 1928 |
| ADGB Trade Union School, Bernau | Hannes Meyer and Hans Wittwer | 1930 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Cantilever (process)

A beam or slab fixed at one end that carries load beyond its support, so that it seems to hang in the air. Origin: architecture, Northern Europe, c. 1300.

- Fix the beam at one end and anchor it with a back span of at least 1 part to every 2 parts of the overhang.
- Keep the free end thin; a depth of 1/8 to 1/10 of the span suits steel and concrete.
- Repeat the horizontal line in a run of 2 or 3 projecting planes to give a strong shadow.

### Curtain wall (technology)

A thin outer wall of glass and metal that hangs on the frame of the building and carries no floor load. Origin: architecture, San Francisco, United States, 1918.

- Carry the floors on columns set 1 to 3 m back from the facade line.
- Hang the glass in a grid of mullions at 1.2 to 1.5 m centres.
- Keep the glass part of the facade above 60%.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Bauhaus** (school, Weimar, Dessau, Berlin, 1919–1933), taught the style. A school of art, craft and design that joined the workshop to the studio. Its teachers and students set the forms of modern design, interiors and building.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 3.3 | 3–4 m | massing, facade |
| Structural grid (`structural_grid`) | 5.5 | 4.5–6 m | structure |
| Glazing ratio (`glazing_ratio`) | 60 | 40–90 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 0 | 0–3 deg | massing |
| Base material (`base_material`) | concrete | concrete, glass, steel, brick | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more corporate**: move toward [`international-style-architecture`](../international-style-architecture/SKILL.md) (International Style). Merge the wings into one slab on a 7.2m grid, run the curtain wall around all sides, and drop the colour planes.

- **Mixes well with:** [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Kin in another domain:** [`architectural-photography`](../architectural-photography/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md), [`bauhaus-interior`](../bauhaus-interior/SKILL.md), [`bauhaus-product`](../bauhaus-product/SKILL.md), [`geometric-sans`](../geometric-sans/SKILL.md), [`new-objectivity`](../new-objectivity/SKILL.md)
- **Nearest by vector profile:** [`international-style-architecture`](../international-style-architecture/SKILL.md), [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`mid-century-modern-architecture`](../mid-century-modern-architecture/SKILL.md)

## Emotional target

Purpose and openness: the viewer feels a place where every part has a reason.

**Keywords:** functional, asymmetric, didactic, rational, open · **Brand archetypes:** creator, sage

## Sources

- [Wikidata Q124354, Bauhaus (CC0)](https://www.wikidata.org/wiki/Q124354)
- [Getty AAT 300021432, Bauhaus (ODC-By 1.0)](https://vocab.getty.edu/page/aat/300021432)
- Walter Gropius, Bauhausbauten Dessau (Bauhausbücher 12, 1930)

---

Generated from [`data/architecture/styles/bauhaus-architecture.json`](../../data/architecture/styles/bauhaus-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
