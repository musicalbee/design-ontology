---
name: shaker-interior
description: "Apply the Shaker style (1820s–1860s) when planning, describing or rendering a room. Load when the user asks for: shaker, shaker style, peg rail, ladder-back chair, shaker kitchen, plain and simple."
domain: interior
era: industrial-century
triggers:
  - "shaker"
  - "shaker style"
  - "peg rail"
  - "ladder-back chair"
  - "shaker kitchen"
  - "plain and simple"
  - "utopian simplicity"
  - "built-in drawers"
vector_profile:
  ornamentation: 1
  density: 1
  formality: 4
  material_naturalness: 5
  chromatic_intensity: 2
---

# Shaker

> A room is beautiful when each object in it is useful, well made and in its place.

The rooms of the United Society of Believers in Christ's Second Appearing in New England, New York and Kentucky. Built-in storage, a peg rail around the walls, light wood furniture and bare floor give a room that is ordered for work and easy to clean.

**Period:** 1820s–1860s · **Era:** Industrial century · **Domain:** Interior · **Also called:** Shaker style, Shaker plain style

## When to load this skill

Load it when the user asks for: "shaker", "shaker style", "peg rail", "ladder-back chair", "shaker kitchen", "plain and simple", "utopian simplicity", "built-in drawers".

Good for: kitchens, bedrooms, boot rooms, small cottages, period room studies.

Do not use it when:
- The brief asks for display, luxury or status.
- The room must hold a large collection of objects on show.

## System directives

When planning, describing or rendering a room in Shaker, you MUST:

1. Build the storage into the wall: one case of drawers and cupboards from floor to ceiling on one wall, with no free-standing chests.
2. Run a peg rail around the room at 180–190 cm above the floor, with a turned peg each 30 cm, and hang chairs, clothes and tools on it.
3. Place doors, windows and pairs of furniture in mirror pairs about the centre line of the room.
4. Leave 70–80% of the floor bare, so that the floor is easy to sweep.
5. Use one wood species and one paint colour for all woodwork in a room.
6. Make each drawer in a case 10–15% taller than the drawer above it.
7. Keep each piece light: a ladder-back chair weighs 4–5 kg and one person can lift it onto the peg rail.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Carved, gilded or veneered ornament on furniture or trim.
- **NEVER:** Hung pictures, mirrors with frames or display shelves of ornaments.
- **NEVER:** Printed wallpaper or patterned upholstery.
- **NEVER:** Heavy upholstered sofas and armchairs that stay on the floor.
- **NEVER:** Furniture placed at an angle to the walls.
- **NEVER:** More than one accent paint colour in one room.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■□□□□` 1/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■■■□` 4/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■■■■` 5/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■■□□□` 2/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** An orthogonal room with one centre line. Built-in storage fills one wall, and furniture stands parallel to the other walls.
- **Focal point:** The built-in wall of drawers and cupboards on the centre line, or a cast-iron stove on the axis in front of it.
- **Symmetry:** bilateral
- **Axis count:** 1
- **Focal wall:** back
- **Focal position:** 0.5
- **Rhythm module (cm):** 30
- **Depth layers:** 2

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Make the built-in case the single focal point. Hang nothing above it and put nothing in front of it. | 1 focal point |
| symmetry-axis | Put the door, the windows and each pair of beds or chairs in mirror pairs about the centre line. | 1 axis, 90% mirrored |
| rhythm | Run the peg rail at one height around the full room, and space the pegs equally. | peg each 30 cm at 185 cm |
| proportion | Graduate the drawers of a case from the top down. | height step 1.10–1.15 |
| scale | Keep chairs and tables light and slender: legs of 3–4 cm section, seats at chair height. | seat 42 cm, chair 4–5 kg |
| negative-space | Keep the centre of the floor empty. Hang the chairs on the rail when the room is not in use. | 70–80% bare floor |
| layering-depth | Show two planes only: the furniture against the walls, and the walls themselves. | 2 planes |
| zoning | Give each room one use. Put the work, rest and storage zones along the walls, not in the centre. | 1 use per room |
| circulation | Keep a straight clear path from the door to the window. | 100 cm clear |
| sightlines | Align the door with a window in the opposite wall, so that the view from the entrance ends in daylight. | door and window on 1 line |
| colour-distribution | Paint the plaster white or cream. Give the wood and the painted built-ins the secondary share, and one accent paint to a door or a box. | 70/25/5 |
| lighting-layers | Light the room by day from two walls of sash windows. After dark, use one low ambient layer and one task lamp at the work table. | 100 lux ambient, 300 lux task, 2700 K |
| unity-variety | Use one wood species and one woodwork colour per room. The only deviation is the accent paint. | 1 wood, 1 paint, 1 accent |

## Zoning & circulation

- **Zones:** built-in storage wall · work table · stove · sleep or rest
- **Circulation:** One straight route from the door to the window, and a perimeter band of 70 cm in front of the built-ins and the peg rail.
- **Main path clear (cm):** 100
- **Secondary path clear (cm):** 70
- **Seat to table (cm):** 30
- **Conversation diameter (cm):** 250
- **Floor coverage (%):** 25
- **Wall coverage (%):** 30

## Palette & colour distribution

- **Distribution:** White or cream plaster on walls and ceiling; honey wood on floor and furniture; one painted colour on all woodwork; one accent on a door, a box or a cupboard.
- **Dominant (%):** 70
- **Secondary (%):** 25
- **Accent (%):** 5

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Lime white | `#F2EEE3` | dominant | plaster walls and ceiling |
| Pine | `#C9A06B` | wood | wide-board floor |
| Cherry | `#9A5B34` | wood | chairs, tables, case fronts |
| Meetinghouse blue | `#3F5A73` | secondary | woodwork, peg rail, trim |
| Red ochre | `#9C4A2F` | accent | one door or one oval box |
| Black iron | `#2B2B2B` | metal | stove and hinges |

## Lighting layers

- **Strategy:** Daylight is the main light. After dark, a few small sources at table height give a low, even light without a centre fixture.
- **Daylight:** Tall double-hung sash windows of 12 over 12 panes in two walls. White walls spread the light; window glass is 15–20% of the floor area.
- **Ambient (lux):** 100
- **Task (lux):** 300
- **Accent ratio:** 2
- **Colour temperature (K):** 2700
- **Evening colour temperature (K):** 2200
- **Minimum CRI:** 95

**Layers**

| Layer | Source | Position |
|---|---|---|
| daylight | sash windows, 12 over 12 panes | two walls, sill at 75 cm |
| ambient | tin or iron wall sconces | on the peg rail, 2 per wall |
| task | candle-form table lamp | on the work table |

## Materials & finishes

- **Primary:** cherry · maple · eastern white pine
- **Secondary:** woven cotton tape · lime plaster · milk paint · wrought iron · tin
- **Finish:** Thin oil, shellac or milk paint at a matt to satin sheen. No veneer, no gilding, no varnish build-up.
- **Texture contrast:** Planed wood against matt plaster, at close to 1:1. The woven tape seat is the only coarse texture.

## Furniture

- **Silhouette:** Slender turned posts and tapered legs. Ladder-back chairs with 3 or 4 arched slats; tables with plain aprons and no stretchers in view.
- **Arrangement:** Each piece stands against a wall and parallel to it. Chairs hang upside down on the peg rail when the floor is cleaned.
- **Seat height (cm):** 42
- **Key pieces:** ladder-back side chair · rocking chair · trestle table · built-in case of drawers · candle stand · oval boxes · peg rail · cast-iron stove

## Textiles

- **Fabrics:** woven cotton tape · linen · wool rag rug
- **Pattern:** Plain cloth, checks and stripes in one or two colours. Chair tapes weave a checkerboard of two colours.
- **Windows:** Plain roller blinds or short cotton curtains on a rod inside the frame. The window frame stays visible.

## Objects & decor

- **Approach:** Only useful objects are on show: boxes, baskets, brooms and tools hang on the rail or stand on a shelf.
- **Grouping:** Oval boxes stand in graduated stacks of 3 to 5. Tools and clothes hang in one row on the peg rail.
- **Max per surface:** 3
- **Hang centre (cm):** 0
- **Items:** oval boxes · woven baskets · flat broom · wall sconce · chair on the peg rail

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** A plain room of white plaster and honey wood. One wall is a built-in case of graduated drawers; a peg rail runs around the room; two ladder-back chairs and a table stand against the walls.
- **Image prompt:** Shaker interior, symmetrical room, white lime plaster walls, built-in cherry case of graduated drawers on the back wall, blue-painted peg rail at head height around the room, ladder-back chairs hung on the rail, wide pine floorboards, bare floor, tall twelve-over-twelve sash windows, soft north daylight, no decoration, documentary photograph
- **Negative prompt:** Carved ornament, sofa, rug pattern, framed pictures, mirrors, clutter, chrome, plastic, coloured light, gloss.
- **Camera:** 35 mm lens, camera at 150 cm, one-point view square to the built-in wall from the door on the centre line.
- **3D scene:** Room 500 x 400 cm, ceiling 270 cm. Sun and sky through two sash windows in the side walls; one 2200 K point light at 75 cm on the table for night.
- **Furniture list:** built-in case 300 x 45 x 240 cm · trestle table 180 x 75 cm · 2 ladder-back chairs · rocking chair · cast-iron stove · peg rail with 30 cm pitch
- **Material list:** lime plaster, matt · cherry, oiled · pine boards 30 cm wide · milk paint, blue · cotton tape, two colours

**References**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Retiring Room, North Family Dwelling, Mount Lebanon, New York (c. 1830–40) | The Metropolitan Museum of Art, Purchase, Emily Crane Chadbourne Bequest, 1972 | CC0 | https://www.metmuseum.org/art/collection/search/134 |
| Shaker side chair | The Metropolitan Museum of Art, Friends of the American Wing Fund, 1966 | CC0 | https://www.metmuseum.org/art/collection/search/1866 |
| Shaker rocking chair | The Metropolitan Museum of Art, Friends of the American Wing Fund, 1966 | CC0 | https://www.metmuseum.org/art/collection/search/6871 |
| Shaker double counter | The Metropolitan Museum of Art, Friends of the American Wing Fund, 1966 | CC0 | https://www.metmuseum.org/art/collection/search/3385 |
| Shaker cupboard | The Metropolitan Museum of Art, Friends of the American Wing Fund, 1966 | CC0 | https://www.metmuseum.org/art/collection/search/2973 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `zoning` | Zoning | A space divides into areas with one activity each. A rug, a light, a ceiling change or a group of furniture marks a zone without a wall. | zones in one open room (count): 2 to 4; zone marker (kind): rug, pendant, floor level, ceiling level, furniture back |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** Shaker retiring room, built-in case of graduated drawers, peg rail at head height, ladder-back chair, oval boxes, lime-washed plaster, wide pine floorboards, sash windows, milk-paint blue woodwork, bare floor
- **Exclude:** carved ornament, upholstered sofa, framed pictures, patterned wallpaper, gilding, clutter

Reference works:

| Work | Architect | Year |
|---|---|---|
| Retiring room, North Family Dwelling, Mount Lebanon, New York | Shaker community | 1830 |
| Centre Family Dwelling, Pleasant Hill, Kentucky | Micajah Burnett | 1834 |
| Ladder-back chairs, Mount Lebanon chair factory | Robert M. Wagan | 1873 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **warmer and more modern**: move toward [`scandinavian-interior`](../scandinavian-interior/SKILL.md) (Scandinavian interior). Change the wood to pale oak, add a wool rug, a sofa and 3–5 small lamps; keep the bare walls and the single focal wall.
- If the user asks for **more minimal**: move toward [`japandi-interior`](../japandi-interior/SKILL.md) (Japandi). Lower the furniture to 38 cm seats, remove the peg rail, and add one stoneware vessel; keep one wood and the bare floor.

- **Led to (go here for a newer version):** [`scandinavian-interior`](../scandinavian-interior/SKILL.md)
- **Nearest by vector profile:** [`japandi-interior`](../japandi-interior/SKILL.md), [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md), [`scandinavian-interior`](../scandinavian-interior/SKILL.md)

## Emotional target

Calm order: the viewer sees that everything has a place and that the room asks for nothing more.

**Keywords:** ordered, plain, honest, quiet, useful, clean · **Brand archetypes:** sage, caregiver

## Sources

- June Sprigg, Shaker Design (Whitney Museum of American Art and W. W. Norton, 1986)
- John Kassay, The Book of Shaker Furniture (University of Massachusetts Press, 1980)
- [Wikidata Q1475417: Shaker furniture](https://www.wikidata.org/wiki/Q1475417)
- [Getty AAT 300444352](https://vocab.getty.edu/page/aat/300444352)

---

Generated from [`data/interior/styles/shaker-interior.json`](../../data/interior/styles/shaker-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
