---
name: baroque-architecture
description: "Apply the Baroque style (17th–mid 18th century) when designing, describing or rendering buildings and interiors. Load when the user asks for: baroque architecture, bernini, borromini, oval church, broken pediment, gilded stucco."
domain: architecture
era: early-modern
triggers:
  - "baroque architecture"
  - "bernini"
  - "borromini"
  - "oval church"
  - "broken pediment"
  - "gilded stucco"
  - "trompe l'oeil ceiling"
  - "grand staircase"
  - "palace of versailles"
vector_profile:
  ornamentation: 5
  structural_expression: 2
  geometric_rigidity: 2
  material_rawness: 1
  monumentality: 5
---

# Baroque

> Architecture should move the viewer: curve, depth, light and ornament make one dramatic effect, in the service of church and crown.

Classical orders bent into curves: oval plans, convex and concave fronts, doubled columns and light that drops from hidden windows. Bernini, Borromini and the court architects built it as theatre to move the viewer.

**Period:** 17th–mid 18th century · **Era:** Early Modern · **Domain:** Architecture · **Also called:** Roman Baroque, High Baroque, Austrian Baroque

## When to load this skill

Load it when the user asks for: "baroque architecture", "bernini", "borromini", "oval church", "broken pediment", "gilded stucco", "trompe l'oeil ceiling", "grand staircase", "palace of versailles".

Good for: church and palace renders, opera houses and theatres, grand hotel lobbies, fantasy and period environments.

Do not use it when:
- The brief asks for restraint, a low budget or a quiet, modest building.
- The design needs a flat, repeatable and modular facade.

## System directives

When designing, describing or rendering buildings and interiors in Baroque, you MUST:

1. Replace the circle and the square by the oval, and the straight front by a convex or concave wall of 1 to 3m curve depth.
2. Use the giant order, a column or pilaster of 2 to 3 storeys, and double or group the columns in pairs.
3. Break the entablature and the pediment forward and back at each bay, so that the cornice casts a deep shadow.
4. Light the focal point from a hidden source: a lantern, a concealed window or a gilded burst above the altar.
5. Lead the eye on a strong axis, with a series of rooms or a stair that grows in richness toward a climax.
6. Unite architecture, sculpture and painting: a ceiling fresco, stucco figures and gilding in one surface.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat, calm fronts that keep every part in one plane.
- **NEVER:** Plain unornamented walls with no sculpture or fresco.
- **NEVER:** Pointed Gothic arches or thin skeletal structure.
- **NEVER:** Strict small-module grids with no curve.
- **NEVER:** Even, shadowless light from large plain windows.
- **NEVER:** A single order stacked in equal bays with no central emphasis.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■□□□` 2/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■□□□` 2/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■□□□□` 1/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■■` 5/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A sculpted block with a curved front, a central dome or lantern, and projecting wings; plans use ovals and interlocking curves.
- **Proportion:** A front of 1:1 to 3:2, with a central bay 1.5 to 2 times wider than its neighbours and rising above them.
- **Roof:** A tall dome on a drum with a lantern, or a mansard roof with sculpted dormers and statues on the balustrade.
- **Relation to ground:** A sweeping flight of steps, a piazza or a cour d'honneur that draws the visitor on to the central door.

## Structure

- **System:** Load-bearing masonry with brick and stone vaults and domes, hidden behind plaster and stucco.
- **Span and module:** Bays of 4 to 6m, with piers of 1 to 1.5m; oval naves of 15 to 25m on the long axis.
- **Expression:** The structure is hidden. Orders and curves express movement and not load.

## Materials

- **Primary:** travertine and limestone · stucco and plaster · marble · gilded wood
- **Secondary:** fresco · bronze · scagliola · wrought iron
- **Finish:** Rich and sculpted: polished marble, gilding, painted ceilings and moulded stucco on every surface.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Travertine | `#D8C9A8` | walls and orders |
| Gold leaf | `#C9A227` | gilding |
| Oxblood marble | `#6F2A2E` | altars and floors |
| Sky fresco | `#7FA3C7` | ceiling paintings |
| Stucco white | `#F1ECE0` | mouldings and putti |

## Facade

- **Composition:** A front that swells and recedes in a convex or concave curve, with paired columns, a broken pediment and a central niche or window.
- **Openings:** Windows framed by pediments of alternating triangle and arc, with deep reveals; the window-to-wall ratio is 15 to 30%.
- **Solid to void:** Solid leads: 70–85% opaque, modelled by deep shadow.

## Light & space

- **Daylight:** Light from hidden windows and the lantern falls on the altar or the stair, and the rest of the room stays in shadow.
- **Spatial sequence:** A sequence of growing richness: portal, oval nave, then the high altar or the state stair at the climax of the axis.
- **Interior character:** Fresco vaults that open to a painted sky, gilded stucco, curved galleries and polished coloured marble.

## Ornament

- **Attitude:** Ornament is abundant and dramatic: sculpture, gilding and painting fuse with the structure to make one rich effect.
- **Details:** broken pediments · paired and twisted columns · putti and stucco figures · illusionistic ceiling frescoes · gilded cartouches · scrolled volutes

## Composition rules

- **Symmetry:** bilateral
- **Axis count:** 1
- **Rhythm module m:** 5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Draw all lines to one climax, the altar or the central stair, and light it from a hidden source. | 1 focal point |
| lighting-layers | Hide the light source in a lantern or a concealed window, and keep the walls dim. | 1 hidden source |
| layering-depth | Build the front in 3 to 5 planes that project and recede. | 3–5 planes |
| rhythm | Pair the columns and swell the bays to a strong beat. | bay 4–6m |
| symmetry-axis | Hold bilateral symmetry on the axis, and bend the walls inside it. | 1 axis |
| scale | Use the giant order over 2 to 3 storeys to overwhelm the viewer. | order 2–3 storeys |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Karlskirche, Vienna | Martin Falbisoner | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Karlskirche_Vienna,_September_2016.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** curved convex concave facade, oval plan church, paired columns, broken pediment, gilded stucco, ceiling fresco open to the sky, dramatic light from a hidden lantern, grand staircase, travertine and marble
- **Exclude:** flat plain wall, pointed arch, glass curtain wall, minimal detail, even flat light, thin steel frame

Reference works:

| Work | Maker | Year |
|---|---|---|
| San Carlo alle Quattro Fontane, Rome | Francesco Borromini | 1641 |
| Sant'Andrea al Quirinale, Rome | Gian Lorenzo Bernini | 1658 |
| Palace of Versailles, Hall of Mirrors | Jules Hardouin-Mansart | 1684 |
| Würzburg Residence | Balthasar Neumann | 1744 |
| Karlskirche, Vienna | Johann Bernhard Fischer von Erlach | 1737 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md) (Neoclassicism). Straighten the front into one plane, replace the paired columns by a single portico, and cut the gilding and sculpture.

- **Came from (go here for a more orthodox version):** [`renaissance-architecture`](../renaissance-architecture/SKILL.md)
- **Led to (go here for a newer version):** [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md)
- **Was rejected by:** [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Kin in another domain:** [`baroque-painting`](../baroque-painting/SKILL.md)
- **Nearest by vector profile:** [`art-deco-architecture`](../art-deco-architecture/SKILL.md), [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md), [`parametricism-architecture`](../parametricism-architecture/SKILL.md)

## Emotional target

Wonder and awe: the viewer feels carried up and in by a staged, overflowing display of power and faith.

**Keywords:** dramatic, curved, opulent, theatrical, dynamic · **Brand archetypes:** ruler, magician

## Sources

- Rudolf Wittkower, Art and Architecture in Italy 1600–1750 (Yale University Press, 1958)

---

Generated from [`data/architecture/styles/baroque-architecture.json`](../../data/architecture/styles/baroque-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
