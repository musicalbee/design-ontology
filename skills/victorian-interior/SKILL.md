---
name: victorian-interior
description: "Apply the Victorian style (1837–1901) when planning, describing or rendering a room. Load when the user asks for: victorian, victorian parlour, victorian interior, gothic parlour, dark academia room, 19th century interior."
domain: interior
era: industrial-century
triggers:
  - "victorian"
  - "victorian parlour"
  - "victorian interior"
  - "gothic parlour"
  - "dark academia room"
  - "19th century interior"
  - "cluttered antique room"
vector_profile:
  ornamentation: 5
  density: 5
  formality: 4
  material_naturalness: 3
  chromatic_intensity: 4
---

# Victorian

> A home shows the taste, the travels and the respectability of its family; more objects and more pattern mean more comfort.

The middle-class room of the industrial century. Machine-made pattern covers walls, floors and furniture; dark, saturated colours, heavy curtains and many objects make a dense, enclosed parlour around the hearth.

**Period:** 1837–1901 · **Era:** Industrial century · **Domain:** Interior · **Also called:** Victorian interior, Victorian parlour, High Victorian

## When to load this skill

Load it when the user asks for: "victorian", "victorian parlour", "victorian interior", "gothic parlour", "dark academia room", "19th century interior", "cluttered antique room".

Good for: period restoration, bars and members clubs, themed hotels, film and stage sets, libraries.

Do not use it when:
- The room is small and dark already.
- The brief asks for calm, air or rooms that are easy to clean.

## System directives

When planning, describing or rendering a room in Victorian, you MUST:

1. Divide the wall into dado, filling and frieze, each with its own paper or paint.
2. Use deep, saturated colours: crimson, bottle green, plum and brown, with gold.
3. Layer textiles: a fitted carpet, a rug on it, a tablecloth on the table and a fringed cover on the mantel.
4. Group chairs in several conversation circles, not one; the room holds many zones.
5. Display collections on the mantel, on whatnots and in cabinets.
6. Hang pictures close together on a picture rail, frame to frame.
7. Filter the daylight through three layers at the window: blind, lace and heavy drapes.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Bare walls with no pattern.
- **NEVER:** White or pale walls in the main rooms.
- **NEVER:** A single centred group of furniture with empty floor around it.
- **NEVER:** Bright, unfiltered daylight.
- **NEVER:** Thin, low modern furniture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■■■■■` 5/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■■■□` 4/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■■□□` 3/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■■■■□` 4/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** A closed room with the hearth on a side wall. Several furniture groups fill the floor; a centre table stands under a gasolier.
- **Focal point:** The hearth with an overmantel mirror and a crowded mantelpiece on the left wall.
- **Symmetry:** bilateral
- **Axis count:** 1
- **Focal wall:** left
- **Focal position:** 0.5
- **Rhythm module (cm):** 30
- **Depth layers:** 4

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Make the hearth the focal point and frame it with an overmantel and a dense mantel display. | 1 hearth, mantel of 7–15 objects |
| layering-depth | Layer the window in 3 textiles and the floor in 2; set furniture in front of furniture. | 4 depth planes |
| unity-variety | Mix many patterns, but keep them in one family of deep colours. | 3–5 patterns, 1 colour family |
| hierarchy | Divide the wall into dado, filling and frieze, each with a different paper. | 3 horizontal bands |
| grouping | Group chairs in several small circles and objects in dense clusters. | 2–4 groups of seats |
| symmetry-axis | Mirror the overmantel, the vases and the chairs about the hearth only. | 1 local axis |
| colour-distribution | Give the walls a deep pattern, the woodwork and furniture brown, and gold and crimson the accents. | 55/30/15 |
| lighting-layers | Light pools from a gasolier over the centre table and from shaded lamps; leave the corners dim. | 60 lux ambient, 300 lux task, 2200 K |
| scale | Use large, heavy furniture with deep upholstery; chairs are broad and button-backed. | seat 44 cm, depth 60 cm |
| circulation | Leave narrow routes between the groups. | 75 cm main, 55 cm secondary |
| camera-station | Shoot the room level, with a three-quarter view from the door toward the hearth. | 28 mm at 140 cm, level |

## Zoning & circulation

- **Zones:** hearth group · centre table · window seat · piano or cabinet corner
- **Circulation:** Narrow, curved routes between dense furniture groups.
- **Main path clear (cm):** 75
- **Secondary path clear (cm):** 55
- **Seat to table (cm):** 40
- **Conversation diameter (cm):** 220
- **Floor coverage (%):** 70
- **Wall coverage (%):** 75

## Palette & colour distribution

- **Distribution:** Deep patterned wallpaper on the filling, dark wood on the dado and furniture, and crimson, gold and green in textiles and frames.
- **Dominant (%):** 55
- **Secondary (%):** 30
- **Accent (%):** 15

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Bottle green | `#2F4A3A` | dominant | wallpaper filling |
| Oxblood | `#6E1F23` | secondary | carpet, curtains, upholstery |
| Burnt umber | `#5A3D2B` | wood | dado, furniture, doors |
| Old gold | `#B08D3E` | metal | frames, gasolier, fringes |
| Plum | `#5B3050` | accent | cushions, glass |
| Ivory lace | `#E7DFC8` | accent | lace curtains, antimacassars |

## Lighting layers

- **Strategy:** A low, warm interior. A central gasolier and many shaded lamps give separate pools of light; the walls and corners stay dark.
- **Daylight:** Daylight passes a roller blind, lace and heavy drapes; the room is dim by day.
- **Ambient (lux):** 60
- **Task (lux):** 300
- **Accent ratio:** 5
- **Colour temperature (K):** 2200
- **Evening colour temperature (K):** 1900
- **Minimum CRI:** 90

**Layers**

| Layer | Source | Position |
|---|---|---|
| decorative | brass gasolier with glass shades | over the centre table |
| task | oil-style table lamp with a fringed shade | on side tables beside chairs |
| accent | picture lights or candle sconces | either side of the overmantel |
| daylight | bay window behind lace and drapes | window wall |

## Materials & finishes

- **Primary:** walnut and mahogany · patterned wallpaper · wool carpet
- **Secondary:** velvet · plush · marble · brass · cast iron · lace · stained glass
- **Finish:** Polished dark wood, glossy tiles in the hearth, deep-pile textiles.
- **Texture contrast:** Soft, deep-pile textiles against polished wood and glazed tile, at about 1:1.

## Furniture

- **Silhouette:** Heavy, curved and carved pieces with deep button upholstery, turned legs and fringes.
- **Arrangement:** Several groups across the floor; small tables, footstools and whatnots fill the gaps.
- **Seat height (cm):** 44
- **Key pieces:** button-back chesterfield or chaise · balloon-back chairs · round centre table with a cloth · overmantel mirror · whatnot · upright piano · glass-fronted display cabinet

## Textiles

- **Fabrics:** velvet · plush · wool damask · lace · chenille
- **Pattern:** Dense florals, damask and Turkey carpets; pattern on pattern in one colour family.
- **Windows:** Three layers: a roller blind, lace curtains and heavy velvet drapes with a pelmet and tie-backs.

## Objects & decor

- **Approach:** Many objects show the family's taste and travels: collections, souvenirs, plants and portraits.
- **Grouping:** Dense clusters on the mantel, on shelves and on tables; pictures frame to frame.
- **Max per surface:** 15
- **Hang centre (cm):** 170
- **Items:** overmantel mirror · mantel clock under a glass dome · pair of Staffordshire figures · aspidistra or fern · portrait photographs · shell or fern collection

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** A dim parlour with bottle-green damask paper above a dark wood dado. A marble hearth with an overmantel mirror and a crowded mantel stands on the left wall; a button-back sofa, balloon-back chairs and a round clothed table sit on a Turkey carpet under a brass gasolier.
- **Image prompt:** Victorian parlour, dark bottle green damask wallpaper above a brown wood dado, black marble fireplace with a tall gilt overmantel mirror and crowded mantelpiece, button-back crimson velvet sofa, balloon-back chairs, round table with a fringed cloth, Turkey carpet, brass gasolier with glass shades, lace and heavy velvet curtains, ferns, framed pictures close together, warm dim light, rich and cluttered, interior photograph
- **Negative prompt:** White walls, minimal, empty floor, bright daylight, modern furniture, chrome.
- **Camera:** 28 mm lens at 140 cm, three-quarter view from the door toward the hearth.
- **3D scene:** Room 500 x 450 cm, ceiling 330 cm. Daylight through lace at transmission 0.3; one 2200 K gasolier at 230 cm and three 1900 K table lamps.
- **Furniture list:** chesterfield 200 x 90 x 75 cm, seat 44 cm · 2 balloon-back chairs · round table 110 cm · overmantel mirror 120 x 150 cm · display cabinet 100 x 40 x 190 cm · Turkey carpet 300 x 400 cm
- **Material list:** damask wallpaper, bottle green · walnut, polished · black marble · velvet, oxblood · brass · wool carpet

**References**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Gothic Library (1859) | The Metropolitan Museum of Art, Gift of Mrs. Hamilton Fish, 1977 | CC0 | https://www.metmuseum.org/art/collection/search/4136 |
| Secretary from the Jay Gould House, Herter Brothers (1882) | The Metropolitan Museum of Art, Gift of Paul Martini, 1969 | CC0 | https://www.metmuseum.org/art/collection/search/7366 |
| Laminated rosewood sofa, John Henry Belter (1850–60) | The Metropolitan Museum of Art, Purchase, Friends of the American Wing Fund and Lila Acheson Wallace Gift, 1999 | CC0 | https://www.metmuseum.org/art/collection/search/7586 |
| Dining Room Elevation in a Simplified Third Pompeian Style (ca. 1870–90) | The Metropolitan Museum of Art, Dodge and Fletcher Funds, 1967 | CC0 | https://www.metmuseum.org/art/collection/search/363532 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `camera-station` | Camera station | The position, height, lens and aim of the camera for one view. It sets the perspective of the room in the image: the horizon, the fall of the verticals and the shares of floor, wall and ceiling in the frame. | lens focal length (mm, full-frame equivalent): 24–35; 17–20 only in a room narrower than 2.5 m; camera height (cm above the floor): 100–150; 100–120 for a seated view; vertical convergence (degrees): 0: the camera is level, and lens shift (not tilt) moves the frame; ceiling share of the frame (% of the frame height): 20 or less, unless the ceiling is the subject; object cut by the frame edge (% of the object inside the frame): 66 or more, or the object is out of the frame |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** Victorian parlour, damask wallpaper, overmantel mirror, button-back sofa, Turkey carpet, brass gasolier, heavy velvet drapes, crowded mantelpiece, ferns and aspidistra, dark polished wood
- **Exclude:** minimal, white walls, empty floor, bright light, chrome

Reference works:

| Work | Maker | Year |
|---|---|---|
| Leighton House Arab Hall | George Aitchison | 1881 |
| 18 Stafford Terrace | Edward Linley Sambourne | 1875 |
| The Grammar of Ornament | Owen Jones | 1856 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter and simpler**: move toward [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md) (Arts and Crafts). Remove most objects, replace the damask with one handmade pattern, show the oak structure; keep the hearth.
- If the user asks for **today and playful**: move toward [`grandmillennial-interior`](../grandmillennial-interior/SKILL.md) (Grandmillennial). Lighten the walls to a soft colour, keep the chintz and the collections, add skirted tables and humour.

- **Came from (go here for a more orthodox version):** [`georgian-interior`](../georgian-interior/SKILL.md)
- **Led to (go here for a newer version):** [`grandmillennial-interior`](../grandmillennial-interior/SKILL.md)
- **Was rejected by:** [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md), [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md)
- **Kin in another domain:** [`pictorialism`](../pictorialism/SKILL.md)
- **Nearest by vector profile:** [`grandmillennial-interior`](../grandmillennial-interior/SKILL.md), [`hollywood-regency-interior`](../hollywood-regency-interior/SKILL.md), [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md)

## Emotional target

Enclosure: the viewer feels sheltered and a little overwhelmed, inside a warm, dim, crowded room.

**Keywords:** opulent, dense, enclosed, sentimental, dark, layered · **Brand archetypes:** caregiver, ruler

## Sources

- Charles Eastlake, Hints on Household Taste (London, 1868)
- Judith Flanders, The Victorian House (HarperCollins, 2003)
- [Wikidata Q2865875: Victorian decorative arts](https://www.wikidata.org/wiki/Q2865875)
- [Getty AAT 300021232](https://vocab.getty.edu/page/aat/300021232)

---

Generated from [`data/interior/styles/victorian-interior.json`](../../data/interior/styles/victorian-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
