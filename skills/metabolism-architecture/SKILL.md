---
name: metabolism-architecture
description: "Apply the Metabolism style (1960s–early 1970s) when designing, describing or rendering buildings and interiors. Load when the user asks for: metabolism, metabolist, capsule tower, nakagin, plug-in capsule, kurokawa."
domain: architecture
era: modern-movement
triggers:
  - "metabolism"
  - "metabolist"
  - "capsule tower"
  - "nakagin"
  - "plug-in capsule"
  - "kurokawa"
  - "kikutake"
  - "megastructure"
vector_profile:
  ornamentation: 1
  structural_expression: 5
  geometric_rigidity: 4
  material_rawness: 3
  monumentality: 4
---

# Metabolism

> A city lives like an organism, so its long-life cores must stand fixed and its short-life cells must change.

A Japanese style of fixed concrete cores that carry replaceable capsules. Its architects drew the city as a living body that grows, changes and renews its cells.

**Period:** 1960s–early 1970s · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** Japanese Metabolism, Metabolist architecture

## When to load this skill

Load it when the user asks for: "metabolism", "metabolist", "capsule tower", "nakagin", "plug-in capsule", "kurokawa", "kikutake", "megastructure".

Good for: concept renders, sci-fi sets, urban futures, product-like micro housing.

Do not use it when:
- The brief asks for a low, warm, hand-built domestic place.
- The scene needs a flat grid with no central tower.

## System directives

When designing, describing or rendering buildings and interiors in Metabolism, you MUST:

1. Separate the fixed structure from the units that people replace.
2. Plan for growth: leave the frame open at the end and on top.
3. Hang prefabricated capsules on a core of services and stairs.
4. Show the core as a monumental concrete tower and the capsules as small machines.
5. Treat the unit as a product that a factory makes and a crane lifts.
6. Lift the city above the ground, the sea or old streets on huge platforms.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A closed, finished building that cannot grow.
- **NEVER:** Capsules that look like part of the wall and hide their joints.
- **NEVER:** Applied ornament or historical motifs.
- **NEVER:** Fixed room layouts that tie the user to one plan.
- **NEVER:** Low, spread-out forms with no central core.
- **NEVER:** Rough, hand-built finishes on the capsule.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■■■` 5/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■□` 4/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■■□□` 3/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A tall concrete core or a pair of cores with many small boxes fixed to its sides; the boxes stack at different heights.
- **Proportion:** Vertical towers dominate, and the small cells make a rough, jagged edge on the main shape.
- **Roof:** Flat roofs; the core ends in a plain parapet or a plant room.
- **Relation to ground:** The core stands on a raised base, on pilotis or over water, so that the cells float above the street.

## Structure

- **System:** A reinforced concrete core or megastructure frame with steel or precast cells that bolt to it.
- **Span and module:** A cell of about 2.5 by 4m is the module, and the cores sit about 10 to 20m apart.
- **Expression:** Cores, bolts, ducts and crane hooks stay visible, and the joints between core and cell are the main detail.

## Materials

- **Primary:** in-situ reinforced concrete · prefabricated steel capsule
- **Secondary:** galvanised steel · glass · aluminium cladding
- **Finish:** The core keeps a bare concrete finish, and the capsules have a smooth, factory-made metal skin with a round window.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Raw concrete | `#8C8A84` | core and platform |
| Capsule white | `#E8E6E0` | capsule skin |
| Steel grey | `#5A5F66` | bolts and frames |
| Night blue | `#1F2A3A` | shadow and window glass |
| Signal red | `#C8372D` | small accents on doors and lifts |

## Facade

- **Composition:** Plain cores with clusters of identical capsules, each with one round or square window.
- **Openings:** One circular porthole window of about 1.3m in each cell.
- **Solid to void:** Solid dominates: windows cover 10–25% of the elevation.

## Light & space

- **Daylight:** Each cell gets light from one window, and the core has narrow slots and stair windows.
- **Spatial sequence:** The route runs through the core by lift and stair, and then the visitor enters a small cell with a fixed plan.
- **Interior character:** The cell is a tight, built-in room of about 10 square metres, with a bed, a desk and a bath moulded in one unit.

## Ornament

- **Attitude:** No applied ornament; the repeated capsule and the exposed bolt form the pattern.
- **Details:** round porthole windows · exposed bolt heads · crane hooks · service ducts on the core · built-in unit furniture

## Composition rules

- **Symmetry:** asymmetric
- **Axis count:** 0
- **Rhythm module m:** 2.5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| hierarchy | Give the fixed core the first place and the cells the second. | core 3–10 times the cell height |
| rhythm | Repeat the same cell around the core with small shifts. | cell 2.5 × 4m |
| grouping | Cluster the cells in groups on the core, not in a flat row. | 8–40 cells on one core |
| contrast | Set the smooth capsule against the raw concrete. | 1 capsule skin, 1 core finish |
| circulation | Run all routes through the core and lift. | 1–2 cores |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Capsules of the Nakagin Capsule Tower | Dllu | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Capsules_of_the_Nakagin_Capsule_Tower_dllu.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** fixed concrete core tower, prefabricated capsule units, round porthole windows, exposed bolts and joints, cells hanging on a core, raised megastructure, tight modular housing, futurist Japanese city
- **Exclude:** pitched roof, classical ornament, glass curtain wall, hand-built brick, pastel paint, spread-out low villa

Reference works:

| Work | Maker | Year |
|---|---|---|
| Sky House | Kiyonori Kikutake | 1958 |
| Yamanashi Press and Broadcasting Center | Kenzo Tange | 1966 |
| Master plan of Expo 70 | Kenzo Tange | 1970 |
| Nakagin Capsule Tower | Kisho Kurokawa | 1972 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Plug-in capsule (process, invented here)

A factory-made living cell that a crane lifts and bolts to a fixed core, so that the owner can swap the cell and keep the structure. Origin: architecture, Tokyo, 1972.

- Build a fixed core of concrete or steel that holds the stairs, lifts and services.
- Make the cell as one prefabricated unit with its bath, bed and fittings.
- Fix the cell to the core with a small number of bolts, such as 4, so that a crane can swap it.
- Place the cells at different heights and angles around the core to show growth.
- Give each cell one round window and keep the cell skin smooth.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Metabolists** (collective, Tokyo, 1960–now), launched the style. A Japanese group of young architects and a critic who saw the city as a living body. They drew cities of replaceable capsules on fixed cores, and showed them first in Tokyo in 1960.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 3 | 2.6–3.6 m | massing, facade |
| Structural grid (`structural_grid`) | 10 | 6–20 m | structure |
| Glazing ratio (`glazing_ratio`) | 15 | 8–30 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 0 | 0–3 deg | massing |
| Base material (`base_material`) | concrete | concrete, steel | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **rougher**: move toward [`brutalist-architecture`](../brutalist-architecture/SKILL.md) (Brutalism). Make the cells from board-marked concrete, deepen the windows and remove the smooth metal skin.

- **Came from (go here for a more orthodox version):** [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Nearest by vector profile:** [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`mass-timber-architecture`](../mass-timber-architecture/SKILL.md), [`critical-regionalism-architecture`](../critical-regionalism-architecture/SKILL.md)

## Emotional target

Wonder at a city that changes: the viewer feels a machine for the future that has cells like a body.

**Keywords:** futurist, modular, growing, compact, technological · **Brand archetypes:** creator, explorer

## Sources

- [Wikipedia: Metabolism (architecture)](https://en.wikipedia.org/wiki/Metabolism_(architecture))
- Kisho Kurokawa, Metabolism in Architecture (Studio Vista, 1977)

---

Generated from [`data/architecture/styles/metabolism-architecture.json`](../../data/architecture/styles/metabolism-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
