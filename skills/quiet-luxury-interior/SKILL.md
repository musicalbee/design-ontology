---
name: quiet-luxury-interior
description: "Apply the Quiet luxury style (2022–present) when planning, describing or rendering a room. Load when the user asks for: quiet luxury, stealth wealth, old money interior, understated luxury, tonal interior, travertine and bouclé."
domain: interior
era: networked-home
triggers:
  - "quiet luxury"
  - "stealth wealth"
  - "old money interior"
  - "understated luxury"
  - "tonal interior"
  - "travertine and bouclé"
  - "neutral luxury"
  - "the row aesthetic"
vector_profile:
  ornamentation: 2
  density: 2
  formality: 4
  material_naturalness: 4
  chromatic_intensity: 1
---

# Quiet luxury

> Real luxury is the quality of the material and the work, and it does not need to show a name.

A tonal room of costly materials and no logos. One hue family in cream, oatmeal, taupe and chocolate covers walls and seats; texture, not colour, gives the variety; pairs of chairs and lamps mirror about the fireplace, and hidden light washes the plaster.

**Period:** 2022–present · **Era:** Networked home · **Domain:** Interior · **Also called:** Stealth wealth interior, Old money interior, Understated luxury

## When to load this skill

Load it when the user asks for: "quiet luxury", "stealth wealth", "old money interior", "understated luxury", "tonal interior", "travertine and bouclé", "neutral luxury", "the row aesthetic".

Good for: high-end residences, hotel suites, luxury retail, private members' clubs, show flats.

Do not use it when:
- The budget does not reach real stone, wool and solid wood; cheap copies break the style.
- The brief asks for colour, personality or play.

## System directives

When planning, describing or rendering a room in Quiet luxury, you MUST:

1. Use one hue family in 3–5 values, from cream to chocolate; the accent is a darker value of the same hue, not a new hue.
2. Vary texture, not colour: put at least 4 textures, such as bouclé, cashmere, travertine and walnut, in the seating group.
3. Mirror pairs of chairs, lamps and side tables about one axis through the fireplace or the bed.
4. Choose few, large pieces: a deep low sofa of 260–300 cm and a rug of 300 x 400 cm that holds the whole group.
5. Hide the light sources: cove light, picture light and lamps with opaque shades; no bare bulb is in view.
6. Use honed, brushed and matt finishes; satin is the highest sheen.
7. Keep clear routes of 110 cm or more, so that the room never feels full.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Visible logos, monograms or branded objects.
- **NEVER:** Saturated colour or a second hue family.
- **NEVER:** Gloss lacquer, mirror chrome or high-shine marble.
- **NEVER:** Many small objects and souvenirs on show.
- **NEVER:** Bare bulbs or cool white light.
- **NEVER:** Small, light furniture in a large room.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■■□□□` 2/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■■■□` 4/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■■■□` 4/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■□□□□` 1/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** One axis through the fireplace or the bed. Pairs of pieces mirror about it, and one large rug holds the whole group.
- **Focal point:** A stone fireplace or a large abstract painting centred on the axis, lit by a hidden accent.
- **Symmetry:** bilateral
- **Axis count:** 1
- **Focal wall:** back
- **Focal position:** 0.5
- **Rhythm module (cm):** 60
- **Depth layers:** 3

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Centre the fireplace or one large painting on the axis and light it with a hidden accent. | 1 focal point, accent 5:1 |
| symmetry-axis | Mirror chairs, lamps and side tables about the axis on the focal wall. | 1 axis, 100% mirrored at the focal wall |
| colour-distribution | Give cream the walls, oatmeal and taupe the seats and the rug, and chocolate the accents. | 70/25/5, one hue family |
| contrast | Step the values in small, even steps; no hard black edge. | LRV steps of 10–20 |
| unity-variety | Hold one hue family and vary the texture of each surface. | 1 hue, 4 or more textures |
| scale | Choose few, oversized, low pieces. | sofa 260–300 cm, rug 300 x 400 cm |
| proportion | Divide the wall panels and the fireplace surround in golden rectangles. | 1:1.618 |
| rhythm | Repeat a wall panel or a moulding at one module. | 60 cm panel |
| layering-depth | Compose three planes: a pair of chairs in front, the sofa and table in the middle, the lit focal wall behind. | 3 planes |
| sightlines | Put the focal point on the axis of the entrance, so that the view from the door ends on it. | door, axis and focal point on 1 line |
| negative-space | Leave wide floor around the group and bare wall around the one painting. | 55% bare floor, 85% bare wall |
| circulation | Keep generous routes around the rug and behind the sofa. | 110 cm main, 80 cm secondary |
| lighting-layers | Wash the walls with a hidden cove, light the art with a picture light, and use a pair of lamps at the sofa; dim all layers. | 150 lux ambient, 400 lux task, accent 5:1, 2700 K |

## Zoning & circulation

- **Zones:** fireplace seating group · reading pair · dining or bar
- **Circulation:** A wide loop around the rug and behind the sofa; no route crosses the seating group.
- **Main path clear (cm):** 110
- **Secondary path clear (cm):** 80
- **Seat to table (cm):** 45
- **Conversation diameter (cm):** 300
- **Floor coverage (%):** 45
- **Wall coverage (%):** 15

## Palette & colour distribution

- **Distribution:** Cream plaster on walls and ceiling; oatmeal and taupe on the sofa, chairs and rug; walnut and brushed brass in small amounts; chocolate on one chair, a throw or a vessel.
- **Dominant (%):** 70
- **Secondary (%):** 25
- **Accent (%):** 5

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Cream | `#EFE8DC` | dominant | limewash walls and ceiling |
| Oatmeal | `#D6CBB8` | secondary | sofa, rug |
| Taupe | `#A39382` | secondary | chairs, curtains |
| Chocolate | `#4E3B2F` | accent | one chair, throw, vessel |
| Walnut | `#6B4A33` | wood | side tables, panels |
| Brushed brass | `#B39A6B` | metal | lamp bases, picture light |

## Lighting layers

- **Strategy:** Hidden sources wash the walls and pick out the art. All layers dim; no bulb is in view.
- **Daylight:** Floor-to-ceiling linen sheers on a hidden ceiling track soften the daylight to an even glow.
- **Ambient (lux):** 150
- **Task (lux):** 400
- **Accent ratio:** 5
- **Colour temperature (K):** 2700
- **Evening colour temperature (K):** 2200
- **Minimum CRI:** 95

**Layers**

| Layer | Source | Position |
|---|---|---|
| ambient | concealed cove LED | ceiling perimeter |
| accent | brass picture light | over the painting on the axis |
| task | pair of ceramic table lamps | side tables, mirrored |
| decorative | alabaster pendant | over the dining table |
| daylight | linen sheers | full window wall |

## Materials & finishes

- **Primary:** travertine · walnut · bouclé wool
- **Secondary:** cashmere · linen · suede · brushed brass · limewash plaster · alabaster
- **Finish:** Honed stone, brushed metal, oiled wood and limewash. Satin is the highest sheen; no gloss.
- **Texture contrast:** Smooth honed stone and wood against soft bouclé and cashmere, at about 1:2.

## Furniture

- **Silhouette:** Low, deep pieces in rounded rectangles; plinth bases or short hidden legs; large sizes and soft edges.
- **Arrangement:** Two sofas face each other across the axis of the fireplace, or one sofa faces it with two mirrored lounge chairs.
- **Seat height (cm):** 42
- **Key pieces:** deep low sofa · travertine coffee table · pair of lounge chairs · pair of ceramic table lamps · wool rug 300 x 400 cm · large abstract painting · walnut side tables

## Textiles

- **Fabrics:** bouclé · cashmere · linen · suede · wool
- **Pattern:** No prints. Texture only: bouclé, herringbone weave, rib knit.
- **Windows:** Floor-to-ceiling linen sheers on a hidden ceiling track, with a fullness of 2 to 2.5 times the window width.

## Objects & decor

- **Approach:** Few and costly: one sculpture, art books, a large ceramic or stone vessel. No logos.
- **Grouping:** Pairs on the axis; groups of 3 off the axis, low to high.
- **Max per surface:** 3
- **Hang centre (cm):** 150
- **Items:** large abstract painting · stone vessel · art books · small bronze sculpture · cashmere throw

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** A cream limewash room with a travertine fireplace on the axis. A deep oatmeal bouclé sofa faces it across a travertine table, with two taupe lounge chairs mirrored on the sides; a picture light shows one large abstract painting.
- **Image prompt:** Quiet luxury living room, cream limewash walls, travertine fireplace centred on the axis, deep low oatmeal bouclé sofa, travertine coffee table, pair of taupe lounge chairs mirrored, pair of ceramic table lamps, large wool rug, one large abstract painting with a brass picture light, floor-to-ceiling linen sheers, tonal palette, soft hidden cove light, architectural digest photograph
- **Negative prompt:** Logos, saturated colour, gloss, chrome, clutter, bare bulbs, cool light, small furniture, pattern.
- **Camera:** 35 mm lens, camera at 130 cm, one-point view on the axis from the entrance toward the fireplace.
- **3D scene:** Room 700 x 550 cm, ceiling 300 cm. 2700 K cove light at the ceiling perimeter; 5:1 spot on the painting; 2 lamps at 2200 K; soft daylight through linen at transmission 0.4.
- **Furniture list:** sofa 280 x 105 x 70 cm · 2 lounge chairs · travertine table 140 x 80 x 35 cm · 2 walnut side tables · rug 300 x 400 cm · painting 150 x 120 cm
- **Material list:** limewash, cream · travertine, honed · walnut, oiled · bouclé, oatmeal · cashmere · brushed brass

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge; text on its field (luminance ratio): 4.5:1 or more |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** quiet luxury interior, tonal cream and taupe palette, travertine fireplace, deep bouclé sofa, mirrored pair of lounge chairs, limewash walls, linen sheers, hidden cove light, picture light on abstract art, walnut and brushed brass
- **Exclude:** logos, saturated colour, gloss, chrome, clutter, bare bulbs

Reference works:

| Work | Maker | Year |
|---|---|---|
| Salon of the Hôtel de Noailles, Paris | Jean-Michel Frank | 1926 |
| Kanaal, Wijnegem | Axel Vervoordt | 2017 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more natural and calm**: move toward [`japandi-interior`](../japandi-interior/SKILL.md) (Japandi). Lower the furniture, change travertine to oak and plaster, break the mirror symmetry; keep the tonal palette and matt finishes.
- If the user asks for **more colour**: move toward [`dopamine-decor`](../dopamine-decor/SKILL.md) (Dopamine decor). Drench one wall in a saturated hue and add 3 more hues as accents; keep the large, soft pieces.

- **Came from (go here for a more orthodox version):** [`japandi-interior`](../japandi-interior/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`dopamine-decor`](../dopamine-decor/SKILL.md)
- **Mixes well with:** [`neo-deco-interior`](../neo-deco-interior/SKILL.md)
- **Nearest by vector profile:** [`scandinavian-interior`](../scandinavian-interior/SKILL.md), [`georgian-interior`](../georgian-interior/SKILL.md), [`minimalist-interior`](../minimalist-interior/SKILL.md)

## Emotional target

Assured calm: the viewer feels quality in every surface and the confidence of a room that does not need to impress.

**Keywords:** understated, refined, tonal, tactile, assured, calm · **Brand archetypes:** ruler, sage, lover

## Sources

- Pierre-Emmanuel Martin-Vivier, Jean-Michel Frank: The Strange and Subtle Luxury of the Parisian Haute-Monde in the Art Deco Period (Rizzoli, 2008)
- Trend evidence, cite only: fashion and interior press used the term from 2022 and 2023
- [Wikidata Q123452708: Quiet luxury](https://www.wikidata.org/wiki/Q123452708)

---

Generated from [`data/interior/styles/quiet-luxury-interior.json`](../../data/interior/styles/quiet-luxury-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
