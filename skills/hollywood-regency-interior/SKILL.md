---
name: hollywood-regency-interior
description: "Apply the Hollywood Regency style (1935–1965; revival from 2005) when planning, describing or rendering a room. Load when the user asks for: hollywood regency, regency moderne, dorothy draper, old hollywood, glam interior, lacquered walls."
domain: interior
era: post-war-modern
triggers:
  - "hollywood regency"
  - "regency moderne"
  - "dorothy draper"
  - "old hollywood"
  - "glam interior"
  - "lacquered walls"
  - "checkerboard floor"
vector_profile:
  ornamentation: 4
  density: 3
  formality: 4
  material_naturalness: 2
  chromatic_intensity: 4
---

# Hollywood Regency

> A room is a stage set: bold colour, gloss and symmetry make the people in it look their best.

The decorator's room of the film stars. Regency and neoclassical forms meet lacquer colour, bold stripes and mirror; a symmetric plan around a centre piece, white plaster and gilt make each room ready for a camera.

**Period:** 1935–1965; revival from 2005 · **Era:** Post-war modern · **Domain:** Interior · **Also called:** Hollywood Regency, Regency moderne, Hollywood glamour

## When to load this skill

Load it when the user asks for: "hollywood regency", "regency moderne", "dorothy draper", "old hollywood", "glam interior", "lacquered walls", "checkerboard floor".

Good for: hotel lobbies and bars, dressing rooms, beauty and fashion retail, restaurants, event spaces.

Do not use it when:
- The brief asks for calm or natural materials.
- The room has no centre, such as a narrow corridor.

## System directives

When planning, describing or rendering a room in Hollywood Regency, you MUST:

1. Plan the room around one centre piece, such as a round table or an ottoman, with seats in pairs about it.
2. Use one saturated colour boldly, often lacquered, against white or black.
3. Add mirror and gilt for sparkle: mirrored furniture, gilt frames and brass fittings.
4. Use bold graphic pattern on one surface: wide stripes, trellis or a black and white floor.
5. Mix Regency and neoclassical forms, such as klismos chairs and pagodas, with modern comfort.
6. Make the room photogenic: warm light that flatters faces and a clear view of each pair.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Matt, rustic or raw surfaces.
- **NEVER:** Muted earth palettes with no contrast.
- **NEVER:** Asymmetric informal groups.
- **NEVER:** Bare, cold light.
- **NEVER:** Many small patterns at once.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | plain surfaces, no applied decoration | pattern and ornament on every surface |
| Density | `■■■□□` 3/5 | few objects, wide empty floor | full floor, full walls, layered objects |
| Formality | `■■■■□` 4/5 | free asymmetric placement | axial, mirrored placement |
| Material naturalness | `■■□□□` 2/5 | synthetic, lacquered, plastic | raw wood, stone, linen, clay |
| Chromatic intensity | `■■■■□` 4/5 | neutral, low chroma | saturated colour fields |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial composition

- **Plan logic:** A symmetric plan around a centre piece. Pairs of sofas, chairs and lamps face each other across it; a lacquer or mirror wall closes the axis.
- **Focal point:** A round centre table or tufted ottoman under a chandelier in the middle of the room.
- **Symmetry:** radial
- **Axis count:** 2
- **Focal wall:** centre
- **Focal position:** 0.5
- **Rhythm module (cm):** 40
- **Depth layers:** 3

**Rules**

| Principle | Rule | Value |
|---|---|---|
| symmetry-axis | Arrange pairs of seats and lamps on two axes that cross at the centre piece. | 2 axes, mirror pairs |
| focal-point | Put the focal point in the centre of the floor under the chandelier. | 1 centre piece |
| contrast | Set one lacquered saturated colour against white plaster and black accents. | LRV difference 50–70 |
| rhythm | Repeat one bold stripe or trellis on one surface only. | stripes 10–20 cm |
| balance | Balance each piece with its twin across the centre. | moment ratio 1.0 |
| hierarchy | Make the centre piece and the chandelier the richest; the walls stay plain. | 3 levels |
| colour-distribution | Give white and the lacquer colour the main shares and gilt and black the accents. | 50/35/15 |
| lighting-layers | Light the faces with warm lamps in pairs and a crystal chandelier; avoid downlight. | 150 lux ambient, 300 lux task, 2700 K |
| sightlines | Keep the view from the door to the centre piece open. | furniture on the axis below 80 cm |
| circulation | Keep a ring route around the centre group. | 100 cm main, 75 cm secondary |

## Zoning & circulation

- **Zones:** centre conversation group · bar cart · vanity or writing desk · window banquette
- **Circulation:** A ring route around the centre group and two straight routes on the axes.
- **Main path clear (cm):** 100
- **Secondary path clear (cm):** 75
- **Seat to table (cm):** 40
- **Conversation diameter (cm):** 280
- **Floor coverage (%):** 50
- **Wall coverage (%):** 40

## Palette & colour distribution

- **Distribution:** White plaster and one lacquered colour (emerald, coral or peacock blue) on walls or furniture; black on a floor or trim; gilt and mirror for the accents.
- **Dominant (%):** 50
- **Secondary (%):** 35
- **Accent (%):** 15

**Colours**

| Name | Hex | Role | Surface |
|---|---|---|---|
| Plaster white | `#F4F1EA` | dominant | walls, ceiling |
| Emerald lacquer | `#0F6B4F` | secondary | walls or cabinets |
| Coral | `#E2735E` | secondary | upholstery, lamps |
| Gloss black | `#111111` | accent | floor tiles, trims, frames |
| Gilt | `#C9A246` | metal | mirrors, frames, hardware |
| Mirror | `#D7DCDF` | metal | mirrored furniture and panels |

## Lighting layers

- **Strategy:** Warm light that flatters faces. Pairs of lamps at face height and a crystal chandelier give sparkle; mirrors double each source.
- **Daylight:** Tall windows with full curtains on gilt poles; daylight reflects from mirror and lacquer.
- **Ambient (lux):** 150
- **Task (lux):** 300
- **Accent ratio:** 3
- **Colour temperature (K):** 2700
- **Evening colour temperature (K):** 2400
- **Minimum CRI:** 95

**Layers**

| Layer | Source | Position |
|---|---|---|
| decorative | crystal chandelier | over the centre piece |
| task | pairs of tall lamps with pleated shades | on side tables at each end of the sofas |
| accent | picture lights and mirrored sconces | on the lacquer wall |
| daylight | tall windows with full curtains | window wall |

## Materials & finishes

- **Primary:** lacquer · plaster · mirror glass
- **Secondary:** gilt wood · brass · velvet · silk · marble · faux bamboo
- **Finish:** High-gloss lacquer, mirror and polished brass.
- **Texture contrast:** Gloss and mirror against tufted velvet, at about 2:1 in favour of gloss.

## Furniture

- **Silhouette:** Neoclassical and Regency forms in clean, smooth lines: klismos chairs, tufted sofas, pagoda and faux-bamboo pieces.
- **Arrangement:** Matched pairs face each other across a round centre table or ottoman.
- **Seat height (cm):** 44
- **Key pieces:** tufted ottoman · pair of tufted sofas · klismos chairs · mirrored chest · lacquer étagère · crystal chandelier · pair of pagoda lamps

## Textiles

- **Fabrics:** velvet · silk · satin · chinoiserie print
- **Pattern:** One bold graphic pattern: wide stripe, trellis or chinoiserie.
- **Windows:** Full silk or satin curtains with a shaped pelmet, on gilt poles.

## Objects & decor

- **Approach:** Glamorous pieces in pairs: porcelain, gilt, crystal and framed portraits.
- **Grouping:** Pairs and symmetric sets.
- **Max per surface:** 4
- **Hang centre (cm):** 160
- **Items:** pair of porcelain foo dogs · gilt sunburst mirror · crystal obelisks · framed portrait · lacquer tray

## Implementation primer: brief, image prompt, 3D scene

- **Brief:** A white plaster room with an emerald lacquered back wall and a black and white floor. Two tufted coral sofas face each other across a round tufted ottoman under a crystal chandelier; pagoda lamps, a mirrored chest and gilt mirrors stand in pairs.
- **Image prompt:** Hollywood Regency living room, symmetrical, white plaster walls and an emerald green lacquered wall, black and white checkerboard floor, two coral velvet tufted sofas facing each other, round tufted ottoman in the centre, crystal chandelier, pair of pagoda lamps, mirrored chest, gilt sunburst mirrors, glossy and glamorous, 1950s Los Angeles, interior photograph
- **Negative prompt:** Rustic, matt earth tones, asymmetric, cold light, clutter, raw wood.
- **Camera:** 24 mm lens at 140 cm, frontal view on the cross axis through the centre piece.
- **3D scene:** Room 650 x 550 cm, ceiling 300 cm. One 2700 K crystal chandelier at 220 cm; four 2700 K lamps at 130 cm; lacquer roughness 0.05.
- **Furniture list:** 2 sofas 210 x 90 x 80 cm, seat 44 cm · round ottoman 110 cm · mirrored chest 90 x 45 x 80 cm · 2 klismos chairs · chandelier 80 cm
- **Material list:** emerald lacquer · white plaster · black and white marble tiles · coral velvet · gilt wood · mirror glass

**References**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Regency source: gilded-wood bench designed by Thomas Hope (before 1807) | The Metropolitan Museum of Art, Purchase, The James Parker Charitable Foundation Gift, 2014 | CC0 | https://www.metmuseum.org/art/collection/search/631133 |
| Regency source: Thomas Hope, Household Furniture and Interior Decoration (1807) | The Metropolitan Museum of Art, Harris Brisbane Dick Fund, 1930 | CC0 | https://www.metmuseum.org/art/collection/search/351777 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge; text on its field (luminance ratio): 4.5:1 or more |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |
| `hierarchy` | Hierarchy | The elements of a composition rank by importance through size, position, contrast or isolation. The viewer reads them in that order. | levels of rank (count): 2 to 3; size ratio between adjacent levels (ratio): 1.5:1 or more |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** Hollywood Regency interior, lacquered walls, checkerboard floor, tufted ottoman, crystal chandelier, pagoda lamps, mirrored furniture, gilt sunburst mirror, emerald and coral, symmetry
- **Exclude:** rustic, earth tones, asymmetric, cold light, raw wood

Reference works:

| Work | Maker | Year |
|---|---|---|
| Greenbrier Hotel interiors | Dorothy Draper | 1948 |
| Interiors for film stars in Los Angeles | William Haines | 1935 |
| Carlyle Hotel interiors | Dorothy Draper | 1930 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **darker and more geometric**: move toward [`art-deco-interior`](../art-deco-interior/SKILL.md) (Art Deco). Replace the lacquer colour with black lacquer and veneer, add stepped and fan forms and cove light.
- If the user asks for **softer and today**: move toward [`neo-deco-interior`](../neo-deco-interior/SKILL.md) (Neo-deco). Replace the gloss with fluted wood and bouclé, round all corners and warm the palette.

- **Came from (go here for a more orthodox version):** [`art-deco-interior`](../art-deco-interior/SKILL.md), [`georgian-interior`](../georgian-interior/SKILL.md)
- **Kin in another domain:** [`art-deco-web`](../art-deco-web/SKILL.md)
- **Nearest by vector profile:** [`neo-deco-interior`](../neo-deco-interior/SKILL.md), [`art-deco-interior`](../art-deco-interior/SKILL.md), [`grandmillennial-interior`](../grandmillennial-interior/SKILL.md)

## Emotional target

Delight: the viewer feels glamorous and on show, as on a film set.

**Keywords:** glamorous, bold, theatrical, glossy, symmetric, witty · **Brand archetypes:** lover, ruler

## Sources

- Dorothy Draper, Decorating Is Fun! (Doubleday, 1939)
- Peter Schifando and Jean H. Mathison, Class Act: William Haines, Legendary Hollywood Decorator (Pointed Leaf Press, 2005)
- [Wikidata Q25312912: Hollywood Regency](https://www.wikidata.org/wiki/Q25312912)
- [Getty AAT 300374864](https://vocab.getty.edu/page/aat/300374864)

---

Generated from [`data/interior/styles/hollywood-regency-interior.json`](../../data/interior/styles/hollywood-regency-interior.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
