---
name: mid-century-modern-interior
description: "Apply the Mid-century modern interior style (1945–1969) when planning, describing or rendering a room. Load when the user asks for: mid-century modern, mid-century, mcm, 1950s living room, eames, teak sideboard."
domain: interior
era: post-war-modern
triggers:
  - "mid-century modern"
  - "mid-century"
  - "mcm"
  - "1950s living room"
  - "eames"
  - "teak sideboard"
  - "atomic age"
  - "case study house"
vector_profile:
  ornamentation: 2
  density: 2
  formality: 2
  material_naturalness: 3
  chromatic_intensity: 3
---

# Mid-century modern interior

> The modern home joins the room to the landscape, and good design made in series can be warm as well as rational.

The open-plan post-war home of the United States and Europe. Low teak and moulded-plywood furniture on tapered legs stands in front of a glass wall to the garden; a stone fireplace or the view is the focal point, and a few saturated accents warm a neutral room.

**Period:** 1945–1969 · **Era:** Post-war modern · **Domain:** Interior · **Also called:** MCM interior, Mid-century, Atomic-age interior

## When to load this skill

Load it when the user asks for: "mid-century modern", "mid-century", "mcm", "1950s living room", "eames", "teak sideboard", "atomic age", "case study house".

Good for: living rooms, open-plan homes, boutique hotels, offices, film sets for the 1950s and 1960s.

Do not use it when:
- The room has no view and no fireplace to face.
- The brief asks for a formal or traditional room.

## System directives

When planning, describing or rendering a room in Mid-century modern interior, you MUST:

1. Keep furniture low: sofa backs at 70–75 cm and sideboards at 75 cm, so that one horizon line runs under the window sill.
2. Lift each piece on tapered splayed legs of 15–25 cm, so that the floor shows under it.
3. Make the glass wall to the garden or a stone fireplace the focal point, and face the main sofa toward it.
4. Group the seats on one area rug around a low table; the rug holds at least the front legs of each seat.
5. Repeat the structural bay of the house, near 240 cm, in the window mullions, the ceiling beams and the length of the sideboard.
6. Use warm wood for 25–35% of the visible surface, and set one rough plane of stone or brick against it.
7. Limit saturated colour to 10%: cushions, one chair, a lamp or a print in mustard, orange or teal.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Heavy furniture that sits on the floor without visible legs.
- **NEVER:** Tall cabinets or high-back sofas in front of the windows.
- **NEVER:** Historical mouldings, panelling or carved ornament.
- **NEVER:** A formal mirrored layout about a centre line.
- **NEVER:** Cold blue-white light above 4000 K.
- **NEVER:** Gloss lacquer on large wood surfaces.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■■□□□` 2/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■□□□` 2/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■■□□` 3/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■■■□□` 3/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** An open plan on a structural bay. Low furniture islands define the zones, and one long horizontal line ties the room to the glass wall.
- **Focal point:** The view through a full-height glass wall, or a stone fireplace, on a third of the long wall.
- **Symmetry:** asymmetric
- **Axis count:** 1
- **Focal wall:** window
- **Focal position:** 0.67
- **Rhythm module (cm):** 240
- **Depth layers:** 3

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Face the main sofa toward the glass wall or the fireplace. Light the fireplace stone with an accent. | 1 focal point on a third |
| hierarchy | Keep every piece in front of the window below the sill, so the view ranks first and the furniture second. | furniture under 75 cm |
| balance | Balance the long sofa with one heavy object on the opposite third: a fireplace, a lounge chair or a large plant. | moment ratio 0.8–1.25 |
| rhythm | Repeat the structural bay in mullions, beams and cabinet lengths. | 240 cm bay |
| proportion | Make long, low pieces: the length of a sofa or a sideboard is 3 or more times its height. | length to height 3:1 or more |
| layering-depth | Compose three planes from the seat: the furniture, the glass wall, the garden. | 3 planes |
| grouping | Put all seats of the group on one rug around the low table, with a smaller gap inside the group than between groups. | gap ratio 2:1 |
| sightlines | Keep seat backs below the seated eye, so that a seated person sees the garden over the furniture. | backs under 80 cm, eye at 115 cm |
| negative-space | Leave the floor between the furniture islands bare; the legs show the floor under each piece. | 55% bare floor |
| zoning | Mark the sit, eat and work zones with a rug, a pendant and a low divider such as a sideboard. | 3 zones in one open room |
| circulation | Keep the route along the glass wall open, between the furniture and the glass. | 100 cm clear |
| colour-distribution | Give warm white or pale grey the walls, wood the secondary share, and saturated mustard, orange or teal the accents. | 60/30/10 |
| lighting-layers | Use one sculptural lamp per zone: an arc floor lamp over the sofa, a paper or metal pendant over the table. | 150 lux ambient, 400 lux task, 2700 K |

## Zoning & circulation

- **Zones:** conversation group · dining · work or hi-fi wall
- **Circulation:** One route along the glass wall and one across the plan between the conversation group and the dining zone.
- **Main path clear (cm):** 100
- **Secondary path clear (cm):** 75
- **Seat to table (cm):** 40
- **Conversation diameter (cm):** 280
- **Floor coverage (%):** 45
- **Wall coverage (%):** 20

## Palette & colour distribution

- **Distribution:** Warm white walls and a light ceiling; teak or walnut furniture and one wood wall; charcoal or oatmeal upholstery; mustard, orange or teal on cushions, one chair and one print.
- **Dominant (%):** 60
- **Secondary (%):** 30
- **Accent (%):** 10

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Warm white | `#F3EFE6` | dominant | walls and ceiling |
| Teak | `#8B5A2B` | wood | sideboard, table, wall panel |
| Charcoal | `#4A4A48` | secondary | sofa upholstery |
| Mustard | `#D4A017` | accent | lounge chair or cushions |
| Burnt orange | `#C8642A` | accent | cushions, ceramics |
| Teal | `#2E7D7A` | accent | print, vase |
| Brass | `#B08D57` | metal | lamp, sabots |

## Lighting layers

- **Strategy:** Daylight from the glass wall by day. After dark, a sculptural lamp for each zone and an accent on the fireplace stone.
- **Daylight:** A full-height glass wall to a garden or patio, with a roof overhang of 60–120 cm that cuts the high summer sun.
- **Ambient (lux):** 150
- **Task (lux):** 400
- **Accent ratio:** 3
- **Colour temperature (K):** 2700
- **Evening colour temperature (K):** 2400
- **Minimum CRI:** 90

**Layers**

| Layer | Source | Position |
|---|---|---|
| daylight | full-height glass wall | long wall to the garden |
| ambient | paper or spun-metal pendant | over the dining table at 75 cm above it |
| task | arc floor lamp | over the sofa |
| accent | adjustable spot | aimed at the fireplace stone or a sculpture |

## Materials & finishes

- **Primary:** teak · walnut · moulded plywood
- **Secondary:** fibreglass · fieldstone · brick · terrazzo · brass · wool tweed
- **Finish:** Oiled teak and walnut at a satin sheen; moulded shells in satin or gloss; matt painted walls.
- **Texture contrast:** Smooth veneer against one rough plane of stone or brick, at about 4:1 by area.

## Furniture

- **Silhouette:** Low and long pieces on tapered splayed legs; moulded organic shells; slim arms; open frames of wood or steel rod.
- **Arrangement:** The sofa faces the glass wall or the fireplace, and two lounge chairs close the group at 90 degrees.
- **Seat height (cm):** 41
- **Key pieces:** plywood and leather lounge chair · teak sideboard · low tapered-leg sofa · glass coffee table on a wood base · moulded plastic side chairs · arc floor lamp · paper lantern

## Textiles

- **Fabrics:** wool tweed · bouclé · linen · leather
- **Pattern:** Abstract atomic prints of circles and boomerangs on one cushion set or one curtain; plain weaves elsewhere.
- **Windows:** Full-height sheer curtains on a ceiling track, open by day, so the frame of the glass wall stays visible.

## Objects & decor

- **Approach:** A few sculptural objects: studio ceramics, a sunburst clock, a large plant in a planter on legs.
- **Grouping:** Groups of 3 on the sideboard, in a rise from low to high toward the focal side.
- **Max per surface:** 3
- **Hang centre (cm):** 145
- **Items:** sunburst clock · studio ceramics · fiddle-leaf fig · abstract print · record player

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** An open living room with a full-height glass wall to a garden. A low charcoal sofa faces the view; two lounge chairs and a glass coffee table stand on a wool rug; a teak sideboard runs below a long abstract print.
- **Image prompt:** Mid-century modern living room 1958, full-height glass wall to a garden, low charcoal sofa on tapered teak legs, moulded plywood lounge chair, glass coffee table, long teak sideboard, fieldstone fireplace wall, arc floor lamp, mustard and burnt orange cushions, warm white walls, post-and-beam ceiling, late afternoon sun, Kodachrome photograph
- **Negative prompt:** Ornament, mouldings, tall cabinets in front of windows, heavy skirted sofas, cold blue light, gloss lacquer, clutter.
- **Camera:** 24 mm lens, camera at 110 cm (seated eye), two-point view from the room toward the glass wall at 30 degrees.
- **3D scene:** Room 800 x 500 cm, ceiling 260 cm with beams at 240 cm centres. Sun at 35 degrees through the glass wall; one 2700 K arc lamp; one 2400 K pendant.
- **Furniture list:** sofa 220 x 85 x 72 cm · 2 lounge chairs · coffee table 120 x 60 x 38 cm · sideboard 240 x 45 x 75 cm · dining table 180 x 90 cm · 4 shell chairs
- **Material list:** teak, oiled · walnut veneer · fieldstone · wool tweed, charcoal · brass · clear glass

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `zoning` | Zoning | A space divides into areas with one activity each. A rug, a light, a ceiling change or a group of furniture marks a zone without a wall. | zones in one open room (count): 2 to 4; zone marker (kind): rug, pendant, floor level, ceiling level, furniture back |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** mid-century modern living room, full-height glass wall, low sofa on tapered legs, teak sideboard, moulded plywood lounge chair, fieldstone fireplace, arc floor lamp, post-and-beam ceiling, mustard and teal accents, indoor plant
- **Exclude:** ornament, tall cabinets, skirted sofa, cold light, mouldings, gloss lacquer

Reference works:

| Work | Maker | Year |
|---|---|---|
| Eames House (Case Study House No. 8), Pacific Palisades | Charles and Ray Eames | 1949 |
| Lounge chair and ottoman | Charles and Ray Eames | 1956 |
| Miller House, Columbus, Indiana | Eero Saarinen and Alexander Girard | 1957 |
| Stahl House (Case Study House No. 22), Los Angeles | Pierre Koenig | 1960 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter and more Nordic**: move toward [`scandinavian-interior`](../scandinavian-interior/SKILL.md) (Scandinavian interior). Change teak to pale oak and the accents to muted blue or sage, add textiles; keep the low pieces on legs.
- If the user asks for **more colour and fun**: move toward [`memphis-interior`](../memphis-interior/SKILL.md) (Memphis interior). Raise the accent share to 25% and add pattern laminate; keep the free placement on one rug.
- If the user asks for **stricter**: move toward [`bauhaus-interior`](../bauhaus-interior/SKILL.md) (Bauhaus interior). Change wood to chrome tube and glass, remove the rug and the cushions; keep the asymmetric plan.

- **Came from (go here for a more orthodox version):** [`bauhaus-interior`](../bauhaus-interior/SKILL.md)
- **Was rejected by:** [`memphis-interior`](../memphis-interior/SKILL.md)
- **Mixes well with:** [`scandinavian-interior`](../scandinavian-interior/SKILL.md)
- **Kin in another domain:** [`international-style-architecture`](../international-style-architecture/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)
- **Nearest by vector profile:** [`bauhaus-interior`](../bauhaus-interior/SKILL.md), [`scandinavian-interior`](../scandinavian-interior/SKILL.md), [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md)

## Emotional target

Optimistic ease: the viewer feels a modern, warm home where the garden comes into the room.

**Keywords:** optimistic, warm, relaxed, modern, open · **Brand archetypes:** everyman, explorer, creator

## Sources

- Cara Greenberg, Mid-Century Modern: Furniture of the 1950s (Harmony Books, 1984)
- Elizabeth A. T. Smith, Case Study Houses (Taschen, 2002)
- [Wikidata Q6840667: Mid-century modern](https://www.wikidata.org/wiki/Q6840667)
- [Getty AAT 300343610](https://vocab.getty.edu/page/aat/300343610)

---

Generated from [`data/interior/styles/mid-century-modern-interior.json`](../../data/interior/styles/mid-century-modern-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
