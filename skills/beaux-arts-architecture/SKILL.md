---
name: beaux-arts-architecture
description: "Apply the Beaux-Arts style (1860s–1910s) when designing, describing or rendering buildings and interiors. Load when the user asks for: beaux-arts, beaux arts architecture, opera garnier, grand central terminal, mansard roof, paired columns."
domain: architecture
era: revival-and-academy
triggers:
  - "beaux-arts"
  - "beaux arts architecture"
  - "opera garnier"
  - "grand central terminal"
  - "mansard roof"
  - "paired columns"
  - "gilded age"
  - "city hall"
  - "grand staircase hall"
vector_profile:
  ornamentation: 4
  structural_expression: 1
  geometric_rigidity: 4
  material_rawness: 1
  monumentality: 5
---

# Beaux-Arts

> A great building is planned first: the parti is a clear sequence of axes, rooms and routes, and classical ornament and sculpture crown the plan.

A grand classical system taught at the École des Beaux-Arts in Paris: a clear plan on axes, a rich sculpted front with paired columns and a mansard roof. It made the opera house, the station and the city hall into public palaces.

**Period:** 1860s–1910s · **Era:** Revival and Academy · **Domain:** Architecture · **Also called:** Second Empire, Academic classicism, American Renaissance

## When to load this skill

Load it when the user asks for: "beaux-arts", "beaux arts architecture", "opera garnier", "grand central terminal", "mansard roof", "paired columns", "gilded age", "city hall", "grand staircase hall".

Good for: opera house and station renders, city halls and libraries, grand hotels and banks, period film and game sets.

Do not use it when:
- The brief asks for a minimal, modern or low-key building.
- The plan has no room for a main axis and a grand hall.

## System directives

When designing, describing or rendering buildings and interiors in Beaux-Arts, you MUST:

1. Start from the plan: a main axis, one or two cross axes, and rooms in a hierarchy of size from the entrance hall to the grand salon.
2. Compose the front as a symmetric tripartite order: a base, a colonnade or giant order, and an attic or mansard roof.
3. Mark the central pavilion and the end pavilions by projecting 0.5 to 2m and by a higher roof.
4. Use paired columns and a rich classical entablature on the main storey, with sculpture groups on the attic.
5. Make a grand stair or hall of 15 to 25m height as the climax of the plan, in marble and gilding.
6. Join the building to the city: a front on a square or an avenue, with the axis continued by the street.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Plans without an axis or a clear hierarchy of rooms.
- **NEVER:** Bare undecorated walls and flat roofs without sculpture.
- **NEVER:** Asymmetric, picturesque compositions.
- **NEVER:** Exposed steel frames and visible industrial structure on the front.
- **NEVER:** Gothic or Romanesque motifs in the main order.
- **NEVER:** Small, modest rooms in the main sequence.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■□□□□` 1/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■□` 4/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■□□□□` 1/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■■` 5/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A symmetric block with a central pavilion, end pavilions and a long colonnade between, on a raised base.
- **Proportion:** A front of 3:1 to 5:1; the central pavilion is 1.3 to 1.6 times the height of the wings.
- **Roof:** A mansard roof in slate or copper with sculpted dormers, or a low dome over the central hall, and a balustrade with statues.
- **Relation to ground:** A rusticated base of one storey, a wide flight of steps, and a forecourt on the axis of an avenue.

## Structure

- **System:** A steel or iron frame with a stone cladding, or load-bearing masonry; the orders and the sculpture are stone.
- **Span and module:** Bays of 4.5 to 6m; the central hall spans 18 to 30m; the storey height of the piano nobile is 5 to 8m.
- **Expression:** The frame is hidden under the stone; the orders state the order of the plan, not the load.

## Materials

- **Primary:** limestone · marble · slate and copper roofing
- **Secondary:** gilded bronze · granite · cast iron and glass (hidden skylights) · mosaic
- **Finish:** Polished and carved: pale cut stone with rich marble, bronze and gilding inside.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream limestone | `#E4D9BD` | front and orders |
| Slate | `#4B515C` | mansard roof |
| Verdigris copper | `#6C9A8B` | domes and cresting |
| Gilt | `#C9A227` | sculpture and interior details |
| Rouge marble | `#7A2B2B` | stair and columns |

## Facade

- **Composition:** A symmetric front in three vertical tiers and three horizontal parts, with central and end pavilions, and sculpture groups.
- **Openings:** Tall round-headed arches on the base, tall pedimented windows on the main floor; the window-to-wall ratio is 20 to 35%.
- **Solid to void:** Solid leads: 65–80% opaque.

## Light & space

- **Daylight:** Light enters from roof-lights and tall windows; the grand hall is lit from above by a glass dome.
- **Spatial sequence:** A planned sequence on the axis: vestibule, grand stair, foyer, then the main hall; the cross axis links the side halls.
- **Interior character:** Marble stairs, gilded balustrades, painted ceilings, sculpture in niches and a mosaic floor.

## Ornament

- **Attitude:** Ornament is a rich public language: classical orders, sculpture and allegory tell the city what the building is for.
- **Details:** paired columns · sculpture groups on the attic · carved keystones · swags and garlands · mansard dormers · gilded balustrades

## Composition rules

- **Symmetry:** bilateral
- **Axis count:** 2
- **Rhythm module m:** 5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| symmetry-axis | Plan on a main axis and a cross axis, and continue the axis into the street. | 2 axes |
| hierarchy | Rank rooms by size from the vestibule to the grand salon. | 3–4 ranks |
| zoning | Group the public halls on the piano nobile and the services below and behind. | public / service |
| circulation | Lead the visitor along the axis by a grand stair to the main hall. | 1 ceremonial route |
| grouping | Group the front in a central pavilion and two end pavilions with a colonnade between. | 3 pavilions |
| focal-point | End the axis in the great hall under a glass dome. | 1 hall, 18–30m |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Façade of the Opéra Garnier, Paris | Jastrow | Public domain | https://commons.wikimedia.org/wiki/File:Facade_opera_Garnier.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `zoning` | Zoning | A space divides into areas with one activity each. A rug, a light, a ceiling change or a group of furniture marks a zone without a wall. | zones in one open room (count): 2 to 4; zone marker (kind): rug, pendant, floor level, ceiling level, furniture back |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** symmetric grand facade, paired columns, mansard roof, sculpture groups, central pavilion, grand marble staircase, glass dome, limestone and copper, avenue axis
- **Exclude:** asymmetry, bare plain wall, flat roof, exposed steel frame, neon colour, informal composition

Reference works:

| Work | Maker | Year |
|---|---|---|
| Palais Garnier, Paris | Charles Garnier | 1875 |
| Boston Public Library, McKim Building | McKim, Mead and White | 1895 |
| Library of Congress, Jefferson Building | John L. Smithmeyer and Paul J. Pelz | 1897 |
| Petit Palais, Paris | Charles Girault | 1900 |
| Grand Central Terminal, New York | Reed and Stem; Warren and Wetmore | 1913 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Arch (motif)

A curved head over an opening that carries load as compression; inside, a soft frame for a door, a mirror or a niche. Origin: architecture, Rome, c. 200 BCE.

- Use a semicircular head: the rise is half the span.
- Keep the ratio of height to width of the opening at 1.6:1 to 2:1.
- In a room, repeat the arch in 2 or 3 places, for example a door, a mirror and a niche, and no more.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **École des Beaux-Arts** (school, Paris, 1648–now), taught the style. The state school of fine arts in Paris. Its architecture course taught axial plans and classical composition to students from many countries.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 5.5 | 4.5–8 m | massing, facade |
| Structural grid (`structural_grid`) | 5 | 4.5–6 m | structure |
| Glazing ratio (`glazing_ratio`) | 28 | 20–35 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 35 | 0–60 deg | massing |
| Base material (`base_material`) | stone | stone, steel, brick | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **plainer**: move toward [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md) (Neoclassicism). Strip the mansard, the sculpture groups and the paired columns; keep the symmetry, the portico and the pale stone.

- **Came from (go here for a more orthodox version):** [`baroque-architecture`](../baroque-architecture/SKILL.md), [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Was rejected by:** [`expressionist-architecture`](../expressionist-architecture/SKILL.md)
- **Kin in another domain:** [`garland-style-jewellery`](../garland-style-jewellery/SKILL.md)
- **Nearest by vector profile:** [`art-deco-architecture`](../art-deco-architecture/SKILL.md), [`postmodern-architecture`](../postmodern-architecture/SKILL.md), [`renaissance-architecture`](../renaissance-architecture/SKILL.md)

## Emotional target

Civic pride and grandeur: the viewer feels that the city offers a palace to every citizen.

**Keywords:** grand, ceremonial, symmetric, opulent, civic · **Brand archetypes:** ruler, caregiver

## Sources

- Arthur Drexler (ed.), The Architecture of the École des Beaux-Arts (Museum of Modern Art, 1977)

---

Generated from [`data/architecture/styles/beaux-arts-architecture.json`](../../data/architecture/styles/beaux-arts-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
