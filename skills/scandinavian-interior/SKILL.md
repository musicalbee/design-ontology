---
name: scandinavian-interior
description: "Apply the Scandinavian interior style (1950s–present) when planning, describing or rendering a room. Load when the user asks for: scandinavian, scandi, nordic, danish design, hygge, light wood."
domain: interior
era: post-war-modern
triggers:
  - "scandinavian"
  - "scandi"
  - "nordic"
  - "danish design"
  - "hygge"
  - "light wood"
  - "white and oak"
  - "scandinavian living room"
vector_profile:
  ornamentation: 1
  density: 2
  formality: 3
  material_naturalness: 4
  chromatic_intensity: 1
---

# Scandinavian interior

> A home for a long dark winter must be bright, warm in material and made of few good things that last.

The bright, light-wood room of Denmark, Sweden, Norway and Finland. White walls and pale floors catch the short northern daylight; solid-wood furniture with visible joints and wool textiles stand in small groups, and many small lamps replace one ceiling light.

**Period:** 1950s–present · **Era:** Post-war modern · **Domain:** Interior · **Also called:** Scandi, Nordic interior, Scandinavian Modern

## When to load this skill

Load it when the user asks for: "scandinavian", "scandi", "nordic", "danish design", "hygge", "light wood", "white and oak", "scandinavian living room".

Good for: family homes, small flats, cafés, hotel rooms, rental interiors.

Do not use it when:
- The brief asks for drama, luxury or strong colour.
- The room has hot direct sun all day and needs shade more than reflected light.

## System directives

When planning, describing or rendering a room in Scandinavian interior, you MUST:

1. Paint walls and ceiling white or pale grey at a light reflectance value of 80 or more, and lay a pale wood floor.
2. Use one light wood species, oak, ash or birch, for floor and furniture, oiled or soaped to a matt finish.
3. Light each room with 3–5 small sources at different heights, not one ceiling light: a pendant, a floor lamp, a table lamp and candles.
4. Keep window sills and the top 30 cm of the window free of curtains, so that the most daylight enters.
5. Group a sofa and two chairs around a round or oval table on one wool rug.
6. Add warmth with texture, not colour: wool, sheepskin, linen and a knitted throw on the seats.
7. Limit accents to 5% of the surface, in muted blue, sage, ochre or black.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Dark walls or dark floors that absorb the daylight.
- **NEVER:** Heavy drapes that cover the window head.
- **NEVER:** One bright ceiling light as the only source.
- **NEVER:** Gloss lacquer, chrome and mirrored surfaces.
- **NEVER:** Saturated colour on more than one large surface.
- **NEVER:** Ornate or carved furniture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■■□□□` 2/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■■□□` 3/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■■■□` 4/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■□□□□` 1/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** Small furniture groups around low tables. The room stays open toward the windows, and the wall opposite the window holds the storage.
- **Focal point:** The window and its daylight, or a wood stove; the eye goes to the brightest plane of the room.
- **Symmetry:** asymmetric
- **Axis count:** 1
- **Focal wall:** window
- **Focal position:** 0.5
- **Rhythm module (cm):** 15
- **Depth layers:** 2

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Make the window the focal point. Put the main seats so that they face it or stand at 90 degrees to it. | 1 focal point: daylight |
| balance | Balance a sofa on one side with two light chairs and a floor lamp on the other. | moment ratio 0.8–1.25 |
| rhythm | Show the repeat of the floorboards and of the wood battens or chair spindles. | board width 15 cm |
| contrast | Keep the contrast between walls and floor low; one black line, such as a lamp or a frame, gives the edge. | wall to floor LRV difference 30 or less |
| grouping | Group lamps, candles and plants in clusters of 3 at different heights. | groups of 3 |
| layering-depth | Layer textiles on the seats: a throw, a cushion and a sheepskin in different weaves of one colour family. | 2 planes, 3 textile layers |
| negative-space | Leave the walls mostly bare and the floor open between the groups. | 60% bare floor, 85% bare wall |
| zoning | Mark each zone with a rug and a pendant: sit, eat, read. | 2–3 zones |
| circulation | Keep the route from the door to the window clear. | 90 cm clear |
| sightlines | Keep the window wall free of tall furniture, so that the view from the door ends in daylight. | 0 tall pieces on the window wall |
| colour-distribution | Give white and pale grey the walls, pale wood and grey wool the secondary share, and one muted colour the accents. | 70/25/5 |
| lighting-layers | Use 3–5 low sources per room at warm white, with glare-free shades. | 100 lux ambient, 400 lux task, 2700 K |
| unity-variety | Use one wood species for floor and furniture; vary the textiles only. | 1 wood, 3–4 textiles |

## Zoning & circulation

- **Zones:** sofa group · dining table · reading chair
- **Circulation:** One route from the door to the window and a loop around the dining table.
- **Main path clear (cm):** 90
- **Secondary path clear (cm):** 70
- **Seat to table (cm):** 40
- **Conversation diameter (cm):** 260
- **Floor coverage (%):** 40
- **Wall coverage (%):** 15

## Palette & colour distribution

- **Distribution:** White walls and ceiling; pale oak floor and furniture; grey and off-white wool textiles; one muted accent on a cushion, a vase or a print; black in thin lines.
- **Dominant (%):** 70
- **Secondary (%):** 25
- **Accent (%):** 5

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Snow white | `#F6F5F1` | dominant | walls and ceiling |
| Pale grey | `#D9D8D3` | secondary | sofa, rug |
| Light oak | `#C8A97E` | wood | floor and furniture |
| Black | `#222222` | metal | lamp, frame, candle holder |
| Dusty blue | `#8DA3B4` | accent | cushion, ceramics |
| Sage | `#9CAF88` | accent | plants, throw |

## Lighting layers

- **Strategy:** Many small warm sources at different heights make pools of light. Shades hide the lamp and stop glare.
- **Daylight:** Large windows with bare heads and white reveals; sheer linen at most. Window glass is 20% of the floor area.
- **Ambient (lux):** 100
- **Task (lux):** 400
- **Accent ratio:** 2
- **Colour temperature (K):** 2700
- **Evening colour temperature (K):** 2200
- **Minimum CRI:** 90

**Layers**

| Layer | Source | Position |
|---|---|---|
| daylight | large window, sheer linen | one or two walls |
| ambient | multi-shade glare-free pendant | over the dining table |
| task | floor lamp with a fabric shade | beside the reading chair |
| decorative | candles and a table lamp | sill, sideboard, table |

## Materials & finishes

- **Primary:** oak · ash · birch
- **Secondary:** wool · linen · sheepskin · paper cord · white-painted brick · black steel
- **Finish:** White oil or soap on wood, matt paint on walls. Nothing is glossy.
- **Texture contrast:** Smooth pale wood against soft wool and knit, at about 2:1 by area.

## Furniture

- **Silhouette:** Light frames of solid wood with rounded edges and visible joints; spindle and paper-cord seats; legs on show.
- **Arrangement:** A sofa with two chairs around a round or oval low table on a wool rug; a dining table with mixed chairs under a pendant.
- **Seat height (cm):** 42
- **Key pieces:** paper-cord wishbone chair · spindle-back dining chair · glare-free pendant · oak dining table · low oak bench · wool throw · sheepskin

## Textiles

- **Fabrics:** wool · linen · sheepskin · cotton knit
- **Pattern:** Plain weaves and soft texture; one simple stripe or check on a rug or a throw at most.
- **Windows:** Bare windows or light linen sheers that leave the window head free.

## Objects & decor

- **Approach:** Few, useful and hand-made objects: ceramics, candle holders, a plant, a stack of books.
- **Grouping:** Groups of 3 at different heights on a sill or a sideboard; one leaning print on a picture ledge.
- **Max per surface:** 4
- **Hang centre (cm):** 145
- **Items:** candle holders · stoneware vase · plants · picture ledge with prints · wool throw

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** A white living room with a pale oak floor and a large window. A grey wool sofa and two paper-cord chairs stand around a round oak table on a pale rug; a glare-free pendant, a floor lamp and candles light the room.
- **Image prompt:** Scandinavian living room, white walls, pale oak floorboards, large window with bare head and sheer linen, light grey wool sofa, two wishbone chairs with paper-cord seats, round oak coffee table, pale wool rug, sheepskin, glare-free pendant lamp, candles on the sill, plants, soft northern daylight, calm, editorial photograph
- **Negative prompt:** Dark walls, heavy drapes, gloss, chrome, saturated colour, clutter, ornate furniture, single harsh ceiling light.
- **Camera:** 28 mm lens, camera at 130 cm, two-point view toward the window at 20–30 degrees.
- **3D scene:** Room 550 x 420 cm, ceiling 260 cm. Overcast sky through one 200 x 180 cm window; 4 point lights at 2700 K at 45, 75, 140 and 180 cm.
- **Furniture list:** sofa 210 x 90 cm · 2 paper-cord chairs · round coffee table 80 cm · dining table 180 x 90 cm · bench · rug 200 x 300 cm
- **Material list:** white matt paint · oak boards, white oil · wool bouclé, grey · linen, natural · sheepskin · black steel

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge; text on its field (luminance ratio): 4.5:1 or more |
| `grouping` | Grouping | Elements close to each other read as one group. The gap inside a group is smaller than the gap between groups. | gap between groups to gap inside a group (ratio): 2:1 or more; elements in a group (count): 3 or 5 for an informal group, pairs for a formal group |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `zoning` | Zoning | A space divides into areas with one activity each. A rug, a light, a ceiling change or a group of furniture marks a zone without a wall. | zones in one open room (count): 2 to 4; zone marker (kind): rug, pendant, floor level, ceiling level, furniture back |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** Scandinavian living room, white walls, pale oak floor, paper-cord wishbone chair, grey wool sofa, sheepskin, glare-free pendant lamp, candles, soft northern daylight, plants
- **Exclude:** dark walls, heavy drapes, gloss, chrome, saturated colour, ornate furniture

Reference works:

| Work | Maker | Year |
|---|---|---|
| Villa Mairea, Noormarkku | Alvar and Aino Aalto | 1939 |
| Finn Juhl's House, Ordrup | Finn Juhl | 1942 |
| Wishbone chair CH24 | Hans J. Wegner | 1949 |
| PH5 pendant | Poul Henningsen | 1958 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Japanese**: move toward [`japandi-interior`](../japandi-interior/SKILL.md) (Japandi). Lower the furniture to 38 cm seats, add one dark wood and stoneware, reduce objects to 1–3 per surface; keep the pale walls and the natural textiles.
- If the user asks for **more retro**: move toward [`mid-century-modern-interior`](../mid-century-modern-interior/SKILL.md) (Mid-century modern interior). Change oak to teak, add a mustard or teal accent and an arc lamp; keep the legs on show.
- If the user asks for **more colour**: move toward [`dopamine-decor`](../dopamine-decor/SKILL.md) (Dopamine decor). Paint one wall and its trim in a saturated hue and raise accents to 25%; keep the wood floor.

- **Came from (go here for a more orthodox version):** [`shaker-interior`](../shaker-interior/SKILL.md)
- **Led to (go here for a newer version):** [`japandi-interior`](../japandi-interior/SKILL.md)
- **Was rejected by:** [`dopamine-decor`](../dopamine-decor/SKILL.md), [`grandmillennial-interior`](../grandmillennial-interior/SKILL.md)
- **Mixes well with:** [`mid-century-modern-interior`](../mid-century-modern-interior/SKILL.md)
- **Kin in another domain:** [`nordic-modernism-architecture`](../nordic-modernism-architecture/SKILL.md), [`nordic-national-romanticism-painting`](../nordic-national-romanticism-painting/SKILL.md), [`scandinavian-interior-photography`](../scandinavian-interior-photography/SKILL.md)
- **Nearest by vector profile:** [`japandi-interior`](../japandi-interior/SKILL.md), [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md), [`minimalist-interior`](../minimalist-interior/SKILL.md)

## Emotional target

Bright calm: the viewer feels a light, tidy home that is warm to touch and easy to live in.

**Keywords:** bright, calm, natural, cosy, honest, light · **Brand archetypes:** innocent, everyman, caregiver

## Sources

- Charlotte and Peter Fiell, Scandinavian Design (Taschen, 2002)
- Design in Scandinavia: An Exhibition of Objects for the Home (travelling exhibition catalogue, United States and Canada, 1954–1957)
- [Wikidata Q1793969: Scandinavian design](https://www.wikidata.org/wiki/Q1793969)
- [Getty AAT 300266638](https://vocab.getty.edu/page/aat/300266638)

---

Generated from [`data/interior/styles/scandinavian-interior.json`](../../data/interior/styles/scandinavian-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
