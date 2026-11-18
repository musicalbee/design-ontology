---
name: art-nouveau-architecture
description: "Apply the Art Nouveau style (1890s–1910s) when designing, describing or rendering buildings and interiors. Load when the user asks for: art nouveau, jugendstil, whiplash curve, horta, guimard, gaudí."
domain: architecture
era: fin-de-siecle
triggers:
  - "art nouveau"
  - "jugendstil"
  - "whiplash curve"
  - "horta"
  - "guimard"
  - "gaudí"
  - "modernisme"
  - "organic ironwork"
  - "stained-glass stair hall"
vector_profile:
  ornamentation: 5
  structural_expression: 3
  geometric_rigidity: 1
  material_rawness: 2
  monumentality: 2
---

# Art Nouveau

> A building should grow like a plant: structure, ornament and furniture follow one organic line, and iron and glass are shown as the new materials of the age.

Whiplash curves, plant forms and exposed iron on the street front and in the stair hall. Horta in Brussels, Guimard in Paris and Gaudí in Barcelona made the total work of art: one line from the facade to the door handle.

**Period:** 1890s–1910s · **Era:** Fin de Siècle · **Domain:** Architecture · **Also called:** Jugendstil, Modernisme, Style Nouille, Stile Liberty

## When to load this skill

Load it when the user asks for: "art nouveau", "jugendstil", "whiplash curve", "horta", "guimard", "gaudí", "modernisme", "organic ironwork", "stained-glass stair hall".

Good for: townhouse and hotel renders, metro and rail entrances, cafés and shopfronts, period set design.

Do not use it when:
- The brief asks for a repeatable, low-cost grid or industrial production.
- The budget does not allow craft work in iron, glass and tile.

## System directives

When designing, describing or rendering buildings and interiors in Art Nouveau, you MUST:

1. Draw one continuous line, a whiplash curve, through the facade, the railing, the window bars and the interior fittings.
2. Show wrought iron and glass as structure: columns, stair stringers and roof ribs stay slender, 150 to 250mm in section, and are left visible.
3. Take ornament from plants, stems, tendrils and insects, and let it grow out of the structure instead of sitting on it.
4. Break the facade into asymmetric bays: bay widths differ, and the window heads are arched or ogee, not straight.
5. Design the whole room as one work: floor mosaic, ceiling, lamp, balustrade and wall paint share one motif.
6. Light the stair hall from above through a stained-glass rooflight, so that the stair is the main space of the house.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Straight, rigid orthogonal grids that ignore the curve.
- **NEVER:** Classical orders, pediments or symmetrical portico fronts.
- **NEVER:** Plain unornamented walls with no plant or line motif.
- **NEVER:** Raw concrete or unfinished surfaces.
- **NEVER:** Ornament cut in plaster and bought as stock, not drawn for the building.
- **NEVER:** Heavy dark colour schemes that hide the glass and iron.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■□□` 3/5 | structure hidden | structure is the image |
| Geometric rigidity | `■□□□□` 1/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■□□□` 2/5 | finished and coated | raw and unfinished |
| Monumentality | `■■□□□` 2/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** Narrow townhouse or apartment block with a soft, bulging front; bay windows and balconies swell out 0.5 to 1.2m from the wall plane.
- **Proportion:** Vertical, on a plot 6 to 9m wide; storey heights of 3.2 to 4m, with the tallest floor at the piano nobile.
- **Roof:** A pitched or mansard roof with a wavy parapet, dormers and chimneys shaped as part of the sculpture; flat roofs only behind a curved parapet.
- **Relation to ground:** The ground floor is a shopfront or a rusticated base in stone; the entrance is marked by an iron canopy or a tall arched door.

## Structure

- **System:** A cast-iron or steel frame with brick infill, and stone or stucco cladding on the street front.
- **Span and module:** Irregular bays of 3 to 6m; the iron frame lets interior spans reach 6 to 8m and frees the plan from cross-walls.
- **Expression:** Iron columns and beams stay visible in halls and stairs, and bend into the ornament; on the facade the frame is hidden, but its lines run through the window bars.

## Materials

- **Primary:** wrought and cast iron · glazed brick and ceramic tile · stained and etched glass · carved stone
- **Secondary:** stucco · oak and walnut joinery · mosaic · copper
- **Finish:** Crafted and polished: glaze, enamel, lacquer and patina. Every surface shows the hand of the maker.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream stone | `#E6DCC3` | facade walls |
| Verdigris | `#5E8B7E` | iron and copper |
| Moss green | `#6B7A3A` | tile and glass |
| Amber glass | `#D69A2D` | rooflight and lamps |
| Oxblood | `#6E2A2A` | joinery and doors |

## Facade

- **Composition:** An asymmetric front with a curved line that links the windows, balconies and door; the eye follows the line, not a grid.
- **Openings:** Arched, horseshoe or ogee windows with curved iron or timber bars; the window-to-wall ratio is 25 to 40% and the largest window sits off the axis.
- **Solid to void:** Balanced: 60–75% solid, with ornamented panels between the windows.

## Light & space

- **Daylight:** Light falls from a stained-glass rooflight down the stair well, and the colour of the glass tints the walls.
- **Spatial sequence:** A small entrance opens to a stair hall of two to four storeys; rooms flow into each other without a strict axis.
- **Interior character:** Curved partitions, built-in furniture, mosaic floors and one plant motif repeated in each fitting.

## Ornament

- **Attitude:** Ornament is the structure made visible as a living line: it is drawn for the building and never added from a catalogue.
- **Details:** whiplash iron railings · stained-glass rooflights · ceramic tile friezes · floral mosaic floors · curved stair stringers · ogee window heads

## Composition rules

- **Symmetry:** asymmetric
- **Axis count:** 0
- **Rhythm module m:** 1.5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| rhythm | Let the whiplash curve repeat in ironwork, plaster and glass, with a varied beat. | curve radius 0.3–1m |
| unity-variety | Design the whole house as one work, with one plant motif. | 1 motif |
| leading-lines | Run the stair rail and the ceiling line in one flowing curve. | 1 flowing line |
| lighting-layers | Light the stair hall from a skylight and tint it with coloured glass. | 1 skylight |
| circulation | Make the stair the spine and the vertical centre of the plan. | 1 stair spine |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Stairway of the Hôtel Tassel, Brussels | Henry Townsend | Public domain | https://commons.wikimedia.org/wiki/File:Tassel_House_stairway.JPG |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** whiplash curved ironwork, organic plant motifs, stained glass rooflight, asymmetric facade, ogee arched windows, glazed ceramic tile, bulging bay window, mosaic floor, carved stone tendrils
- **Exclude:** straight orthogonal grid, classical portico, raw concrete, flat unornamented wall, pastel paint, plain glass curtain wall

Reference works:

| Work | Maker | Year |
|---|---|---|
| Hôtel Tassel, Brussels | Victor Horta | 1893 |
| Castel Béranger, Paris | Hector Guimard | 1898 |
| Majolikahaus, Vienna | Otto Wagner | 1899 |
| Palau de la Música Catalana, Barcelona | Lluís Domènech i Montaner | 1908 |
| Casa Batlló, Barcelona | Antoni Gaudí | 1906 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more geometric**: move toward [`art-deco-architecture`](../art-deco-architecture/SKILL.md) (Art Deco). Replace the curve with the zigzag and the chevron, keep the rich materials and the total-work idea, and add a stepped silhouette.

- **Led to (go here for a newer version):** [`art-deco-architecture`](../art-deco-architecture/SKILL.md)
- **Kin in another domain:** [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md), [`art-nouveau-web`](../art-nouveau-web/SKILL.md)
- **Nearest by vector profile:** [`parametricism-architecture`](../parametricism-architecture/SKILL.md), [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md), [`nordic-modernism-architecture`](../nordic-modernism-architecture/SKILL.md)

## Emotional target

Delight and intimacy: the viewer feels a living, crafted object that belongs to a city of artists.

**Keywords:** organic, sinuous, crafted, decorative, romantic · **Brand archetypes:** creator, lover

## Sources

- [Wikidata Q1295040, Art Nouveau architecture (CC0)](https://www.wikidata.org/wiki/Q1295040)
- [Getty AAT 300021430, Art Nouveau (ODC-By 1.0)](https://vocab.getty.edu/page/aat/300021430)
- Frank Russell (ed.), Art Nouveau in Architecture (Arcade, 1979)

---

Generated from [`data/architecture/styles/art-nouveau-architecture.json`](../../data/architecture/styles/art-nouveau-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
