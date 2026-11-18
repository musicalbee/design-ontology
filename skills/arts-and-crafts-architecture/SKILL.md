---
name: arts-and-crafts-architecture
description: "Apply the Arts and Crafts style (1859–1914) when designing, describing or rendering buildings and interiors. Load when the user asks for: arts and crafts, arts and crafts house, william morris, red house, voysey, baillie scott."
domain: architecture
era: fin-de-siecle
triggers:
  - "arts and crafts"
  - "arts and crafts house"
  - "william morris"
  - "red house"
  - "voysey"
  - "baillie scott"
  - "craftsman house"
  - "inglenook"
  - "leaded casement windows"
  - "hand-made brick house"
vector_profile:
  ornamentation: 3
  structural_expression: 3
  geometric_rigidity: 2
  material_rawness: 4
  monumentality: 2
---

# Arts and Crafts

> A building should be made by skilled hands from local material, planned for the life inside it, and its construction should be seen and enjoyed.

Houses built by honest craft from local brick, oak and tile. Webb, Voysey and Baillie Scott planned from the inside out and let steep roofs, deep porches and hand work show how the house was made.

**Period:** 1859–1914 · **Era:** Fin de Siècle · **Domain:** Architecture · **Also called:** Arts and Crafts movement, Domestic Revival, Free Style

## When to load this skill

Load it when the user asks for: "arts and crafts", "arts and crafts house", "william morris", "red house", "voysey", "baillie scott", "craftsman house", "inglenook", "leaded casement windows", "hand-made brick house".

Good for: house and cottage renders, garden suburb studies, village hall and church scenes, heritage restoration.

Do not use it when:
- The brief asks for a tall block or a glass curtain wall.
- The brief asks for a formal symmetric front.

## System directives

When designing, describing or rendering buildings and interiors in Arts and Crafts, you MUST:

1. Plan from the rooms outward: set each room by its use and light, and let the plan decide the elevation.
2. Use local brick, stone, oak and clay tile, and show the joints, pegs and tool marks.
3. Cover the house with a steep roof of 45 to 55 degrees, with deep eaves of 0.4 to 0.8m and tall chimneys.
4. Group casement windows in timber frames with small leaded panes, in 2 to 4 lights.
5. Place a deep porch or inglenook of 1.5 to 2.5m as the heart of arrival and home.
6. Make fittings by hand: latches, hinges, tiles and built-in settles belong to the design.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Factory-made ornament applied to a plain wall.
- **NEVER:** Perfect symmetry and a classical portico.
- **NEVER:** Large plate-glass windows without glazing bars.
- **NEVER:** Smooth stucco that hides brick and timber.
- **NEVER:** Flat roofs and thin parapets.
- **NEVER:** Machine-cut stone with sharp, even arrises.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■□□` 3/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■□□□` 2/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■■■□` 4/5 | finished and coated | raw and unfinished |
| Monumentality | `■■□□□` 2/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A free, irregular group of gables, wings and bays, with one or more tall chimneys as anchors.
- **Proportion:** Two to two and a half storeys, 1.2 to 1.8 times wider than high, with a roof as tall as the walls.
- **Roof:** A steep gable or hipped roof of 45 to 55 degrees in clay tile or slate, with 0.4 to 0.8m eaves.
- **Relation to ground:** A low brick or stone plinth of 0.3 to 0.6m, with the garden and terrace tied to the house.

## Structure

- **System:** Load-bearing brick or stone walls of 0.34 to 0.45m with oak floors and exposed roof timbers.
- **Span and module:** A room span of 4 to 6m; oak beams of 0.2 to 0.3m; window lights of 0.4 to 0.6m wide.
- **Expression:** Oak pegs, tie beams, chimney stacks and brick arches carry the roof and show it.

## Materials

- **Primary:** red brick · oak · clay tile · local stone
- **Secondary:** leaded glass · wrought iron · limewash · green slate
- **Finish:** Natural and hand-worked: unpainted brick, limewash, oiled oak and wrought iron, left to weather.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Red brick | `#A5472F` | walls |
| Tile orange | `#C2693A` | roof |
| Oiled oak | `#6B4A2B` | joinery |
| Limewash | `#E7E0CB` | plaster and render |
| Leaf green | `#4F6B3A` | doors and garden |

## Facade

- **Composition:** An irregular front of gables and bays: the plan decides each window and porch, and no two sides match.
- **Openings:** Casement windows in oak frames with leaded panes; the window-to-wall ratio is 15 to 30%.
- **Solid to void:** Mostly solid: 70–85% solid.

## Light & space

- **Daylight:** Light enters through small leaded casements and deep bays, and the inglenook stays dim and warm.
- **Spatial sequence:** A low porch leads to a hall, then to rooms of different ceiling heights around a fireplace.
- **Interior character:** Ceilings of 2.4 to 2.7m with oak beams, panelled walls, inglenooks, window seats and built-in settles.

## Ornament

- **Attitude:** Ornament comes from the work: pegs, tile patterns, hinges and carved bargeboards show the hand of the maker.
- **Details:** exposed oak pegs · decorative tile hanging · wrought-iron hinges · leaded casements · carved bargeboards · inglenook seats

## Composition rules

- **Symmetry:** asymmetric
- **Axis count:** 0
- **Rhythm module m:** 1.2

**Rules**

| Principle | Rule | Value |
|---|---|---|
| rhythm | Repeat small casement lights in groups of 2 to 4 along the front. | lights 0.4–0.6m |
| proportion | Make the roof as tall as the wall below it. | roof 45–55° |
| focal-point | Set the porch and the chimney as the two anchors of the front. | 1 porch + 1 chimney |
| zoning | Plan the rooms by use around the hall and hearth, and place the services in a wing. | 1 hearth core |
| unity-variety | Vary the gables and bays, and repeat one material and one detail. | 2–3 gables |
| layering-depth | Layer plinth, wall, tile hanging and deep eave. | 4 layers |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Red House, Bexleyheath | Ethan Doyle White | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:Philip_Webb%27s_Red_House_in_Upton.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `zoning` | Zoning | A space divides into areas with one activity each. A rug, a light, a ceiling change or a group of furniture marks a zone without a wall. | zones in one open room (count): 2 to 4; zone marker (kind): rug, pendant, floor level, ceiling level, furniture back |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** steep clay tile roof, red brick gables, tall brick chimneys, leaded casement windows, oak porch, tile hanging, inglenook, cottage garden, hand-made details
- **Exclude:** glass curtain wall, flat roof, white stucco box, classical portico, neon sign, chrome trim

Reference works:

| Work | Maker | Year |
|---|---|---|
| Red House, Bexleyheath | Philip Webb | 1860 |
| Perrycroft, Colwall | C. F. A. Voysey | 1894 |
| Standen, East Grinstead | Philip Webb | 1894 |
| The Orchard, Chorleywood | C. F. A. Voysey | 1899 |
| Blackwell, Bowness | M. H. Baillie Scott | 1900 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more modern**: move toward [`prairie-school-architecture`](../prairie-school-architecture/SKILL.md) (Prairie School). Flatten the roof to a low hip, stretch the plan into horizontal bands and keep the hearth and the craft detail.
- If the user asks for **more ornate**: move toward [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md) (Art Nouveau). Replace the hand-made pegs and tiles with curving iron and glass and flowing plant lines.

- **Came from (go here for a more orthodox version):** [`gothic-architecture`](../gothic-architecture/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Kin in another domain:** [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md)
- **Nearest by vector profile:** [`organic-architecture`](../organic-architecture/SKILL.md), [`nordic-modernism-architecture`](../nordic-modernism-architecture/SKILL.md), [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md)

## Emotional target

Warmth and belonging: the viewer feels a made, lived-in home that grew from its place.

**Keywords:** crafted, warm, rooted, homely, honest · **Brand archetypes:** caregiver, creator

## Sources

- Gillian Naylor, The Arts and Crafts Movement (Studio Vista, 1971)

---

Generated from [`data/architecture/styles/arts-and-crafts-architecture.json`](../../data/architecture/styles/arts-and-crafts-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
