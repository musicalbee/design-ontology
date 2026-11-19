---
name: renaissance-architecture
description: "Apply the Renaissance style (15th–16th century) when designing, describing or rendering buildings and interiors. Load when the user asks for: renaissance architecture, palladian, brunelleschi, alberti, palazzo, villa rotonda."
domain: architecture
era: early-modern
triggers:
  - "renaissance architecture"
  - "palladian"
  - "brunelleschi"
  - "alberti"
  - "palazzo"
  - "villa rotonda"
  - "classical orders"
  - "domed rotunda"
  - "tempietto"
vector_profile:
  ornamentation: 3
  structural_expression: 2
  geometric_rigidity: 5
  material_rawness: 2
  monumentality: 4
---

# Renaissance

> Beauty is number: a building is right when each part is a simple ratio of the whole, as in the human body and in music.

The Roman orders, the round arch and the dome return, set by number. Brunelleschi, Alberti and Palladio made proportion into a rule: each part is a simple fraction of the whole, and the building is a calm, symmetric order.

**Period:** 15th–16th century · **Era:** Early Modern · **Domain:** Architecture · **Also called:** Italian Renaissance, Quattrocento architecture, Palladian (late phase)

## When to load this skill

Load it when the user asks for: "renaissance architecture", "palladian", "brunelleschi", "alberti", "palazzo", "villa rotonda", "classical orders", "domed rotunda", "tempietto".

Good for: villa and palace renders, civic and bank buildings, garden pavilions, period film sets.

Do not use it when:
- The brief asks for curves, drama or movement in the facade.
- The programme needs a free plan or a glass skin.

## System directives

When designing, describing or rendering buildings and interiors in Renaissance, you MUST:

1. Set every room and opening in a simple ratio: 1:1, 1:2, 2:3, 3:4 or 4:5, and use the same ratio again in the elevation.
2. Use the classical orders in their order of weight: Tuscan or Doric at the base, Ionic above, Corinthian at the top.
3. Compose the front on one central axis, with a bilateral balance and a central entrance or pediment.
4. Use the semicircular arch and the hemispherical dome; the dome diameter equals the height from the floor to the springing.
5. Make the column diameter the module, and set the bay at 3 to 5 modules; the storey height at 8 to 10 modules.
6. Rank the floors: a rusticated base, a tall piano nobile with the largest windows, and a shorter attic.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pointed arches or ribbed vaults.
- **NEVER:** Asymmetric fronts with no central axis.
- **NEVER:** Curved, broken or twisting classical elements.
- **NEVER:** Dense surface ornament that hides the order.
- **NEVER:** Proportions chosen by eye with no ratio.
- **NEVER:** Steel or glass skins with no orders and no wall.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■□□□` 2/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■■` 5/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■□□□` 2/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A compact cube or a square-plan palace around a courtyard; a central-plan church of a square or circle under a dome.
- **Proportion:** A palace front of 2:1 to 3:2 width to height; a villa is a cube, with a central block and a portico.
- **Roof:** A low hipped roof behind a cornice, or a hemispherical dome on a drum; a pediment marks the centre.
- **Relation to ground:** A rusticated base of one storey, 4 to 6m high, a flight of steps to the portico, and an axial approach.

## Structure

- **System:** Load-bearing masonry in brick and stone, with barrel and groin vaults and domes on pendentives.
- **Span and module:** The column diameter is the module; bays of 3 to 5 modules, rooms of 1:1 to 3:2 and spans of 5 to 9m.
- **Expression:** The orders show the load: pilasters, entablatures and arches state where the wall carries its weight.

## Materials

- **Primary:** stuccoed brick · pietra serena and limestone · marble
- **Secondary:** terracotta · fresco plaster · timber coffering · bronze
- **Finish:** Calm and matt: smooth stucco in warm white, with grey or white stone for the orders.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Warm stucco | `#E8DCC0` | wall fields |
| Pietra serena | `#8A8F8A` | orders and arches |
| Terracotta | `#B5603C` | roof tile |
| Carrara white | `#F2F0EA` | pediments and sculpture |
| Fresco blue | `#3E5C7E` | painted ceilings |

## Facade

- **Composition:** A flat, symmetric front in horizontal tiers, with an order for each tier and one central doorway or portico.
- **Openings:** Round-headed or pedimented windows, 1:2 in ratio, in regular rows; the window-to-wall ratio is 15 to 25%.
- **Solid to void:** Solid leads: 75–85% opaque wall.

## Light & space

- **Daylight:** Even, soft daylight from regular windows and a central oculus or lantern.
- **Spatial sequence:** An axial route from the portico through the hall to a central domed room; each room is a simple solid.
- **Interior character:** Coffered ceilings, frescoed walls, pilasters and a marble floor in a geometric pattern.

## Ornament

- **Attitude:** Ornament is the classical order itself: the column, the entablature and the pediment, used with measure and restraint.
- **Details:** pilasters and entablatures · rusticated base · pedimented windows · coffered vaults · cornice with modillions

## Composition rules

- **Symmetry:** bilateral
- **Axis count:** 1
- **Rhythm module m:** 5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| proportion | Fix every dimension by simple ratios: 1:1, 1:2, 2:3, 3:4. | ratios 1:1 to 3:4 |
| symmetry-axis | Compose the plan and the front about one central axis. | 1 axis |
| rhythm | Set the bays at an equal interval, and use the column spacing as the module. | bay 4–6m |
| hierarchy | Stack the orders by weight: Tuscan or Doric below, Ionic then Corinthian above. | 3 tiers |
| unity-variety | Derive the openings, the arcades and the rooms from one module. | 1 module |
| scale | Fit the height of the room to the human figure and the width of the room. | room height = width |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Tempietto of San Pietro in Montorio, Rome | Labicanense | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Tempietto_di_San_Pietro_in_Montorio.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** symmetric facade, classical orders, semicircular arch, hemispherical dome, rusticated base, pedimented portico, warm stucco with pale stone, coffered ceiling, central courtyard
- **Exclude:** pointed arch, asymmetric composition, curved baroque front, glass curtain wall, exposed steel, neon colour

Reference works:

| Work | Maker | Year |
|---|---|---|
| Ospedale degli Innocenti, Florence | Filippo Brunelleschi | 1427 |
| Palazzo Rucellai, Florence | Leon Battista Alberti | 1450 |
| Tempietto, Rome | Donato Bramante | 1502 |
| Villa Capra "La Rotonda", Vicenza | Andrea Palladio | 1570 |
| Basilica of San Giorgio Maggiore, Venice | Andrea Palladio | 1610 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Arch (motif)

A curved head over an opening that carries load as compression; inside, a soft frame for a door, a mirror or a niche. Origin: architecture, Rome, c. 200 BCE.

- Use a semicircular head: the rise is half the span.
- Keep the ratio of height to width of the opening at 1.6:1 to 2:1.
- In a room, repeat the arch in 2 or 3 places, for example a door, a mirror and a niche, and no more.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Opera di Santa Maria del Fiore** (workshop, Florence, ?–now), made the style. The works office of Florence Cathedral. It ran the competition and the building site for the dome of Brunelleschi.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 5 | 4–6 m | massing, facade |
| Structural grid (`structural_grid`) | 6 | 5–9 m | structure |
| Glazing ratio (`glazing_ratio`) | 20 | 15–25 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 20 | 10–30 deg | massing |
| Base material (`base_material`) | stone | stone, brick | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more dramatic**: move toward [`baroque-architecture`](../baroque-architecture/SKILL.md) (Baroque). Bend the front into convex and concave curves, break the pediment, double the columns and raise the light contrast.

- **Led to (go here for a newer version):** [`baroque-architecture`](../baroque-architecture/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`gothic-architecture`](../gothic-architecture/SKILL.md)
- **Kin in another domain:** [`garalde-old-style`](../garalde-old-style/SKILL.md), [`renaissance-painting`](../renaissance-painting/SKILL.md)
- **Nearest by vector profile:** [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md), [`art-deco-architecture`](../art-deco-architecture/SKILL.md), [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md)

## Emotional target

Harmony and calm: the viewer feels a clear human order, measured and in balance.

**Keywords:** harmonious, symmetric, measured, humanist, serene · **Brand archetypes:** sage, ruler

## Sources

- Rudolf Wittkower, Architectural Principles in the Age of Humanism (Warburg Institute, 1949)
- Andrea Palladio, I quattro libri dell'architettura (1570)

---

Generated from [`data/architecture/styles/renaissance-architecture.json`](../../data/architecture/styles/renaissance-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
