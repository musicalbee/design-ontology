---
name: gothic-architecture
description: "Apply the Gothic style (13th–early 16th century) when designing, describing or rendering buildings and interiors. Load when the user asks for: gothic architecture, gothic cathedral, pointed arch, rib vault, flying buttress, rose window."
domain: architecture
era: medieval
triggers:
  - "gothic architecture"
  - "gothic cathedral"
  - "pointed arch"
  - "rib vault"
  - "flying buttress"
  - "rose window"
  - "tracery"
  - "chartres"
  - "medieval cathedral"
vector_profile:
  ornamentation: 4
  structural_expression: 5
  geometric_rigidity: 3
  material_rawness: 3
  monumentality: 5
---

# Gothic

> A building is a stone skeleton that lifts the eye to heaven: the thrust of each vault is caught by a buttress, so that walls can dissolve into light.

Pointed arches, ribbed vaults and flying buttresses turn the stone wall into a skeleton, and the freed walls become coloured glass. Chartres, Reims and Amiens set the height record that every later cathedral tried to beat.

**Period:** 13th–early 16th century · **Era:** Medieval · **Domain:** Architecture · **Also called:** High Gothic, Rayonnant, Perpendicular

## When to load this skill

Load it when the user asks for: "gothic architecture", "gothic cathedral", "pointed arch", "rib vault", "flying buttress", "rose window", "tracery", "chartres", "medieval cathedral".

Good for: cathedral and church renders, fantasy and game environments, university and library buildings, period film sets.

Do not use it when:
- The brief asks for a low, light, modern building or a flat roof.
- The budget cannot pay for hand-carved stone and stained glass.

## System directives

When designing, describing or rendering buildings and interiors in Gothic, you MUST:

1. Draw every opening as a pointed arch, with a rise of 1.0 to 1.5 times the span, so that the thrust goes down and not out.
2. Cover each bay with a rib vault, and carry the ribs down on clustered shafts so that the vault line reaches the floor.
3. Catch the thrust of the high vault with flying buttresses outside the aisle roof, at about 45° to the wall.
4. Raise the nave to a height of 2 to 3.5 times its width, from 30 to 48m under the vault, in three tiers: arcade, triforium, clerestory.
5. Give the upper wall to glass: windows fill 60 to 80% of the clerestory wall, divided by stone tracery.
6. Repeat the bay at 5 to 7m along the whole nave, so that the eye is led to the altar by the rhythm of the piers.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Round arches and heavy plain walls with small openings.
- **NEVER:** Flat ceilings or timber trusses left open over the nave.
- **NEVER:** Classical orders, pediments or symmetrical Roman porticos.
- **NEVER:** Wide, low proportions that stop the vertical lift.
- **NEVER:** Smooth, bare stone with no moulding or tracery.
- **NEVER:** Clear plain glass with no tracery or colour.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■■■` 5/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■□□` 3/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■■□□` 3/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■■` 5/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A long cross-shaped plan with a high nave, lower aisles and a polygonal apse; twin west towers of 60 to 120m and a crossing spire.
- **Proportion:** Strongly vertical: the nave is 2 to 3.5 times higher than wide, and spires add a further 1 to 2 times the tower width.
- **Roof:** A steep timber roof of 50 to 60° under lead or slate, with pinnacles, gables and a lead-covered spire.
- **Relation to ground:** The building sits on a stepped plinth in the town square; three deep portals open the west front, with a rose window above.

## Structure

- **System:** Load-bearing stone masonry with rib vaults, pointed arches and external flying buttresses.
- **Span and module:** A nave bay of 5 to 7m wide and 6 to 8m long under a rib vault; the nave span is 12 to 16m.
- **Expression:** Every thrust path is shown: ribs, shafts, buttresses and pinnacles are the structure and the decoration at once.

## Materials

- **Primary:** limestone ashlar · stained and painted glass · oak roof timber
- **Secondary:** lead sheeting · polychrome paint · wrought iron ties · tile floor
- **Finish:** Carved by hand and weathered: sharp tracery in pale stone, and glass in deep reds and blues.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Pale limestone | `#CFC6B2` | walls and tracery |
| Weathered grey | `#8E8A80` | buttresses and shadow |
| Cobalt glass | `#27479B` | stained glass |
| Ruby glass | `#9B1F2B` | stained glass |
| Lead grey | `#5C6168` | roofs and spires |

## Facade

- **Composition:** A west front in three vertical bays with three portals, a gallery of kings and a rose window, framed by two towers.
- **Openings:** Pointed lancets, rose windows and traceried windows, with the glass share of the upper wall at 60 to 80%.
- **Solid to void:** On the nave wall, 25–40% solid; on the west front, 55–70% solid.

## Light & space

- **Daylight:** Coloured light falls from the clerestory and the rose window, and fills the dim nave with moving patches of red and blue.
- **Spatial sequence:** A dark narthex opens to a tall nave, then the crossing, the choir and the bright apse: the route runs east, to the light.
- **Interior character:** Clustered columns, rib vaults, a triforium gallery, carved capitals and a stone floor; the eye goes up.

## Ornament

- **Attitude:** Ornament is structure made visible and made holy: tracery, crockets and carved figures grow out of the load path.
- **Details:** window tracery · crocketed pinnacles · gargoyles · portal sculpture · ribbed vault bosses · rose windows

## Composition rules

- **Symmetry:** bilateral
- **Axis count:** 1
- **Rhythm module m:** 6.5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| proportion | Make the nave height 2 to 3 times its width, and set the bay on a ratio of 1:2 in plan. | nave 1:2.5 to 1:3 |
| rhythm | Repeat the bay, with its pier, arch and window, along the nave at a fixed module. | bay 6–7m |
| symmetry-axis | Put the portal, the nave and the high altar on one east–west axis, with a twin-tower west front. | 1 axis |
| lighting-layers | Fill the clerestory and the rose window with stained glass, and keep the aisles dim. | glass 30–50% of the wall |
| hierarchy | Rank the central portal and rose above the side portals, and the nave above the aisles. | 3 portals, central 1.5× |
| scale | Make the interior tower over the person: vault heights of 30 to 48m. | vault 30–48m |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Chartres Cathedral, central portal of the west façade | Anne C. Richardson, Jim Womack (Vanderbilt ACT) | Public domain | https://commons.wikimedia.org/wiki/File:Chartres_Cathedral;_Christ_in_Majesty;_central_portal,_west_facade_-_Vanderbilt_ACT_-_00000043.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** pointed arches, ribbed vault, flying buttresses, stained glass rose window, tall slender piers, traceried windows, twin west towers, pale limestone, light falling through coloured glass
- **Exclude:** round arch, flat roof, classical portico, plain glass curtain wall, low horizontal massing, smooth render

Reference works:

| Work | Maker | Year |
|---|---|---|
| Chartres Cathedral | unknown master masons | 1220 |
| Sainte-Chapelle, Paris | attributed to Pierre de Montreuil | 1248 |
| Amiens Cathedral | Robert de Luzarches | 1270 |
| Salisbury Cathedral | Elias of Dereham | 1258 |
| King's College Chapel, Cambridge | Reginald Ely and John Wastell | 1515 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Stained glass (material, invented here)

Pieces of coloured glass held in lead strips, so that a window becomes a picture of coloured light. Origin: architecture, Saint-Denis, France, 1144.

- Cut each piece to one colour; join the pieces with H-section lead 4 to 8 mm wide.
- Paint the lines of faces and folds in dark grisaille and fire them onto the glass.
- Use deep blue and red for the field; keep the clear or yellow pieces under 20% of the window.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Veneranda Fabbrica del Duomo di Milano** (workshop, Milan, 1387–now), made the style. The works office that builds and keeps Milan Cathedral. Its masons and stone workshops made the Gothic cathedral over centuries and still keep it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 7 | 5–8 m | massing, facade |
| Structural grid (`structural_grid`) | 6 | 5–7 m | structure |
| Glazing ratio (`glazing_ratio`) | 50 | 30–75 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 55 | 50–60 deg | massing |
| Base material (`base_material`) | stone | stone, brick | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more classical**: move toward [`renaissance-architecture`](../renaissance-architecture/SKILL.md) (Renaissance). Swap the pointed arch for a semicircle, the rib vault for a barrel or dome, and the tracery for orders on a ratio of 1:2 or 2:3.

- **Led to (go here for a newer version):** [`arts-and-crafts-architecture`](../arts-and-crafts-architecture/SKILL.md)
- **Was rejected by:** [`renaissance-architecture`](../renaissance-architecture/SKILL.md)
- **Kin in another domain:** [`blackletter`](../blackletter/SKILL.md)
- **Nearest by vector profile:** [`adaptive-reuse-architecture`](../adaptive-reuse-architecture/SKILL.md), [`critical-regionalism-architecture`](../critical-regionalism-architecture/SKILL.md), [`expressionist-architecture`](../expressionist-architecture/SKILL.md)

## Emotional target

Awe and elevation: the viewer feels small under a stone sky that is full of coloured light.

**Keywords:** soaring, luminous, intricate, sacred, vertical · **Brand archetypes:** sage, ruler

## Sources

- Paul Frankl, Gothic Architecture (Yale University Press, 2000; rev. Paul Crossley)

---

Generated from [`data/architecture/styles/gothic-architecture.json`](../../data/architecture/styles/gothic-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
