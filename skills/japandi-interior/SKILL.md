---
name: japandi-interior
description: "Apply the Japandi style (2016–present) when planning, describing or rendering a room. Load when the user asks for: japandi, japanese scandinavian, japanordic, zen minimal, wabi-sabi light, low furniture."
domain: interior
era: networked-home
triggers:
  - "japandi"
  - "japanese scandinavian"
  - "japanordic"
  - "zen minimal"
  - "wabi-sabi light"
  - "low furniture"
  - "calm natural interior"
  - "slatted screen"
vector_profile:
  ornamentation: 1
  density: 1
  formality: 3
  material_naturalness: 5
  chromatic_intensity: 1
---

# Japandi

> Calm comes from emptiness and from a few natural things made by hand and placed with care.

A blend of the Scandinavian room and the Japanese room. Low, heavy wood furniture in pale and dark tones stands in a warm off-white room with wide empty floor; paper light, linen, stoneware and slatted screens give texture, and the tatami ratio of 1:2 orders the plan.

**Period:** 2016–present · **Era:** Networked home · **Domain:** Interior · **Also called:** Japanese-Scandinavian, Japanordic

## When to load this skill

Load it when the user asks for: "japandi", "japanese scandinavian", "japanordic", "zen minimal", "wabi-sabi light", "low furniture", "calm natural interior", "slatted screen".

Good for: bedrooms, living rooms, spas and wellness, boutique hotels, yoga and tea rooms.

Do not use it when:
- The users have many objects that must stay in view.
- The brief asks for energy, colour or a party room.

## System directives

When planning, describing or rendering a room in Japandi, you MUST:

1. Keep furniture low: seats at 38–40 cm and tables at 35–40 cm, so that the eye level of the room drops.
2. Leave 70% of the floor and 85% of the walls empty.
3. Hold the ratio 1:2 in rugs, panels, bed platforms and screens, after the tatami mat of 91 x 182 cm.
4. Pair pale oak or ash with one dark element, such as charred or black-stained wood, at a reflectance difference of 40–50 points.
5. Use only matt finishes: oiled wood, lime or clay plaster, unglazed or matt-glazed ceramics.
6. Divide zones with slatted screens of 3 cm battens at 3 cm gaps, not with walls.
7. Show 1 or 3 objects per surface, asymmetric, with one tall element such as a branch.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gloss lacquer, chrome or mirror surfaces.
- **NEVER:** Saturated colour on any surface larger than an object.
- **NEVER:** Tall furniture above 90 cm in the middle of the room.
- **NEVER:** Collections of small objects on open shelves.
- **NEVER:** Printed pattern on textiles or walls.
- **NEVER:** Bright cool light above 3500 K.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■□□□□` 1/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■■□□` 3/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■■■■` 5/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■□□□□` 1/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** A strict orthogonal plan of low pieces with wide gaps. Rugs and platforms follow the 1:2 tatami ratio, and slatted screens divide the zones.
- **Focal point:** One low piece, such as a platform bed or a stoneware vessel on a plinth, or a window with a branch, placed on a third.
- **Symmetry:** asymmetric
- **Axis count:** 1
- **Focal wall:** back
- **Focal position:** 0.33
- **Rhythm module (cm):** 6
- **Depth layers:** 2

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Show one focal object on a third of the back wall, with empty wall around it. | 1 focal point on a third |
| proportion | Hold the tatami ratio in the plan: rugs, platforms and screens. | 1:2 (91 x 182 cm) |
| scale | Lower all furniture, so that the room reads from a seated or floor eye level. | seats 38–40 cm, tables 35–40 cm |
| negative-space | Leave the floor and the walls empty; the empty space is the main element of the room. | 70% bare floor, 85% bare wall |
| rhythm | Repeat slats in screens, wall panels and bed heads at one pitch. | 6 cm pitch (3 cm slat, 3 cm gap) |
| contrast | Pair pale wood with one dark element in each view. | LRV difference 40–50 |
| balance | Balance a low long mass, such as a sofa or a bed, with one tall slim element, such as a lamp or a branch, on the other third. | moment ratio 0.8–1.25 |
| layering-depth | Use a slatted screen or a paper panel as a translucent plane between zones. | 2 planes, 1 translucent |
| grouping | Show objects in groups of 1 or 3 at different heights; never in pairs. | 1 or 3 objects |
| sightlines | Keep every piece in the middle of the room below 90 cm, so that the full wall and window read from the door. | under 90 cm |
| circulation | Keep wide clear routes between the low pieces. | 100 cm main, 75 cm secondary |
| colour-distribution | Give warm off-white the walls, greige textiles and pale and dark wood the secondary share, and clay or black the accents. | 70/25/5 |
| lighting-layers | Use paper shades and low lamps below 120 cm; hide strip lights under shelves and platforms. | 80 lux ambient, 300 lux task, 2700 K |

## Zoning & circulation

- **Zones:** low sofa or floor seat · dining or tea table · sleep platform
- **Circulation:** Wide straight routes along the 1:2 grid; screens let a route pass without a door.
- **Main path clear (cm):** 100
- **Secondary path clear (cm):** 75
- **Seat to table (cm):** 35
- **Conversation diameter (cm):** 240
- **Floor coverage (%):** 30
- **Wall coverage (%):** 10

## Palette & colour distribution

- **Distribution:** Warm off-white plaster on walls and ceiling; greige linen; pale oak floor and furniture; one dark wood piece; a clay or black accent on a vessel or a lamp.
- **Dominant (%):** 70
- **Secondary (%):** 25
- **Accent (%):** 5

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Rice paper | `#EFEBE3` | dominant | plaster walls and ceiling |
| Greige linen | `#CFC6B8` | secondary | sofa, bedding, curtains |
| Pale oak | `#C9A87C` | wood | floor, table, platform |
| Charred ash | `#3A3631` | wood | one cabinet or screen |
| Clay | `#A86F4C` | accent | stoneware vessel |
| Ink black | `#1C1C1C` | accent | lamp base, frame |

## Lighting layers

- **Strategy:** Soft, low and diffuse. Paper shades and hidden strips give pools of light near the floor; shadow is part of the room.
- **Daylight:** Diffuse daylight through linen or paper blinds; the light falls soft on the plaster and no hard sun patch lies on the floor.
- **Ambient (lux):** 80
- **Task (lux):** 300
- **Accent ratio:** 3
- **Colour temperature (K):** 2700
- **Evening colour temperature (K):** 2200
- **Minimum CRI:** 95

**Layers**

| Layer | Source | Position |
|---|---|---|
| daylight | linen or paper blinds | window wall |
| ambient | paper lantern pendant | low over the table, 70 cm above it |
| task | low floor lamp with a paper shade | beside the sofa, below 120 cm |
| accent | concealed LED strip | under a floating shelf or a bed platform |

## Materials & finishes

- **Primary:** white oak · ash · lime plaster
- **Secondary:** linen · washi paper · stoneware · bamboo · jute · black steel
- **Finish:** Matt everywhere: oiled or soaped wood, limewash or clay plaster, matt-glazed ceramics.
- **Texture contrast:** Planed wood against rough plaster and woven fibre, at about 1:1.

## Furniture

- **Silhouette:** Low, heavy, rectilinear pieces with thick tops and solid bases; soft edges of 5–10 mm radius; no visible hardware.
- **Arrangement:** Pieces stand against the walls or on one 1:2 rug in the centre; 2–4 pieces per room.
- **Seat height (cm):** 38
- **Key pieces:** low platform bed · low sofa on a wood frame · low oak table · paper lantern · slatted screen · stoneware vase · floor cushion

## Textiles

- **Fabrics:** linen · cotton · wool · jute
- **Pattern:** Plain weaves and slub texture only; one quiet stripe or a sashiko stitch at most.
- **Windows:** Linen sheers or paper blinds that diffuse the daylight.

## Objects & decor

- **Approach:** Objects show the hand of the maker: one stoneware vase, one branch, a stack of 3 books.
- **Grouping:** 1 or 3 objects per surface, asymmetric, with one tall element.
- **Max per surface:** 3
- **Hang centre (cm):** 140
- **Items:** stoneware vase · single branch · paper lantern · linen cushion · wood tray

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** A warm off-white room with a pale oak floor. A low linen sofa on an oak frame and a low oak table stand on a 1:2 jute rug; a slatted screen divides the room, a paper lantern hangs low, and one stoneware vase with a branch stands on a third.
- **Image prompt:** Japandi living room, warm off-white lime plaster walls, pale oak floor, low linen sofa on a solid oak frame, low oak coffee table, rectangular jute rug, charred black wood cabinet, vertical oak slatted screen, paper lantern pendant hung low, one stoneware vase with a single branch, wide empty floor, soft diffuse daylight through linen blinds, calm, matt, minimal, architectural photograph
- **Negative prompt:** Gloss, chrome, saturated colour, clutter, pattern, tall furniture, cool light, plastic.
- **Camera:** 35 mm lens, camera at 100 cm (low seated eye), frontal view with the focal object on the left third.
- **3D scene:** Room 550 x 450 cm, ceiling 250 cm. Overcast sky through linen at transmission 0.5; one 2700 K paper lantern at 150 cm; one 2200 K LED strip under a platform.
- **Furniture list:** low sofa 220 x 90 x 65 cm, seat 38 cm · low table 120 x 60 x 35 cm · slatted screen 90 x 200 cm · dark wood cabinet 160 x 40 x 60 cm · jute rug 180 x 360 cm · paper lantern 60 cm
- **Material list:** lime plaster, warm white · white oak, oiled · charred ash · linen, greige · jute · stoneware, matt

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge; text on its field (luminance ratio): 4.5:1 or more |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** Japandi interior, low oak furniture, warm off-white plaster, paper lantern, slatted oak screen, linen and jute, stoneware vase with a branch, charred black wood accent, wide empty floor, soft diffuse light
- **Exclude:** gloss, chrome, saturated colour, clutter, printed pattern, cool light

Reference works:

| Work | Maker | Year |
|---|---|---|
| Akari light sculptures | Isamu Noguchi | 1951 |
| Hiroshima armchair | Naoto Fukasawa | 2008 |
| Karimoku Case Study collection | Norm Architects | 2019 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **brighter and more Nordic**: move toward [`scandinavian-interior`](../scandinavian-interior/SKILL.md) (Scandinavian interior). Raise seat height to 42 cm, add white walls, wool textiles and 3–5 lamps; keep the matt natural materials.
- If the user asks for **more luxurious**: move toward [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md) (Quiet luxury). Add travertine, bouclé and a mirrored pair of lamps on one axis; keep the tonal palette and the matt finish.

- **Came from (go here for a more orthodox version):** [`scandinavian-interior`](../scandinavian-interior/SKILL.md)
- **Led to (go here for a newer version):** [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md)
- **Was rejected by:** [`dopamine-decor`](../dopamine-decor/SKILL.md)
- **Kin in another domain:** [`ukiyo-e`](../ukiyo-e/SKILL.md)
- **Nearest by vector profile:** [`scandinavian-interior`](../scandinavian-interior/SKILL.md), [`shaker-interior`](../shaker-interior/SKILL.md), [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md)

## Emotional target

Stillness: the viewer breathes out and feels the quiet of a room with nothing extra in it.

**Keywords:** serene, grounded, natural, restrained, crafted, quiet · **Brand archetypes:** sage, innocent

## Sources

- Jun'ichirō Tanizaki, In Praise of Shadows (1933; English translation, Leete's Island Books, 1977)
- Trend evidence, cite only: the term spread on image platforms and in retail catalogues from about 2016
- [Wikidata Q106092136: Japandi](https://www.wikidata.org/wiki/Q106092136)

---

Generated from [`data/interior/styles/japandi-interior.json`](../../data/interior/styles/japandi-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
