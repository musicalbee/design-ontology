---
name: googie-architecture
description: "Apply the Googie style (1940s–1970s) when designing, describing or rendering buildings and interiors. Load when the user asks for: googie, diner, coffee shop, space age roadside, boomerang, starburst."
domain: architecture
era: modern-movement
triggers:
  - "googie"
  - "diner"
  - "coffee shop"
  - "space age roadside"
  - "boomerang"
  - "starburst"
  - "1950s motel"
  - "neon sign"
vector_profile:
  ornamentation: 4
  structural_expression: 3
  geometric_rigidity: 2
  material_rawness: 1
  monumentality: 2
---

# Googie

> A roadside building must be a sign: it must show a driver at 50 km/h what it sells and why it is new.

The roadside style of the American car age. Coffee shops, motels and car washes got upswept roofs, bright signs and space-age shapes to catch a driver at speed.

**Period:** 1940s–1970s · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** Populuxe architecture, Coffee-shop modern

## When to load this skill

Load it when the user asks for: "googie", "diner", "coffee shop", "space age roadside", "boomerang", "starburst", "1950s motel", "neon sign".

Good for: retro-future scenes, roadside sets, signage studies, diner and motel moodboards.

Do not use it when:
- The brief asks for quiet, restrained or domestic mid-century living.
- The scene is an urban or monumental civic place.

## System directives

When designing, describing or rendering buildings and interiors in Googie, you MUST:

1. Lift the roof in a bold slope or a fold so that it reads from the road.
2. Tie the sign to the building and make it as big as the roof.
3. Use space-age forms such as boomerangs, starbursts, atoms and saucers.
4. Fill the front with glass so that the interior is the show.
5. Cantilever the roof past the walls to give a feeling of flight.
6. Use bright colour and neon so that the building works at night.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A plain box with a small sign.
- **NEVER:** Historical or rustic styling.
- **NEVER:** Heavy masonry walls with few windows.
- **NEVER:** Muted, earthy colour.
- **NEVER:** Hidden or low-slung roofs.
- **NEVER:** Restrained, quiet detailing.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■□□` 3/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■□□□` 2/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■□□□□` 1/5 | finished and coated | raw and unfinished |
| Monumentality | `■■□□□` 2/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A low pavilion under a large, dynamic roof; the roof and the sign are the main shapes.
- **Proportion:** Wide and low, with a tall sign or spire that stands higher than the roof.
- **Roof:** Upswept, folded or butterfly roofs of steel, often with a strong tilt of 10 to 30 degrees.
- **Relation to ground:** The building sits on a slab beside a parking lot, with its glass front open to the road.

## Structure

- **System:** Light steel frames and thin concrete shells; the roof is a cantilever carried by few slim columns.
- **Span and module:** A bay of 4 to 6m, with a roof overhang of 2 to 4m.
- **Expression:** Slim steel columns, bold rafters and folded plates show the lightness; the stone work is a thin accent.

## Materials

- **Primary:** steel frame · plate glass · plastered block
- **Secondary:** flagstone · neon tube · plastic laminate · terrazzo
- **Finish:** Smooth and bright; plaster, enamel and chrome, with neon and painted signs for effect.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Aqua turquoise | `#2FB5B0` | roof and sign |
| Sunset orange | `#F06A2A` | accent and neon |
| Cream | `#F2E8CF` | walls |
| Chrome | `#C9CED3` | trim |
| Night black | `#16161A` | sky and shadow |

## Facade

- **Composition:** A glass front under a bold roof edge, with a sign tower or a boomerang pylon at one side.
- **Openings:** Large plate-glass walls, often 60% of the front, with thin steel frames.
- **Solid to void:** Void dominates: glass covers 50–70% of the front.

## Light & space

- **Daylight:** Glass lets in strong daylight, and at night the neon and the interior light make the building glow.
- **Spatial sequence:** The driver sees the sign, parks, and enters directly from the car park into an open room.
- **Interior character:** A bright open room with a counter, booths and bold laminate; the ceiling follows the shape of the roof.

## Ornament

- **Attitude:** Ornament is a sign: the shape of the roof and the lettering carry the message.
- **Details:** starburst and atom motifs · boomerang shapes · neon script signs · exposed rafters · flagstone planters

## Composition rules

- **Symmetry:** asymmetric
- **Axis count:** 0
- **Rhythm module m:** 4.5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Make the sign or the roof the focal point. | 1 sign pylon, 1 roof |
| contrast | Set the bright colour against dark night sky. | 1 accent colour |
| leading-lines | Slope the roof line toward the road. | 10–30 degrees |
| scale | Make the sign taller than the roof edge. | sign 6–12m |
| framing | Frame the interior with a long glass wall. | glazing 50–70% |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| LAX Theme Building and moon | Junkyardsparkle | CC0 | https://commons.wikimedia.org/wiki/File:LAX_Theme_Building_and_moon_from_northwest_2016-07-21.jpg |
| Norms Restaurant on La Cienega | Wikimedia Commons contributor | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:NormsRestaurant_LaCienega.JPG |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge |
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** upswept cantilevered roof, boomerang shaped sign, starburst motif, neon signage, plate-glass front, bright turquoise and orange, 1950s roadside diner, space-age pylon
- **Exclude:** heavy masonry, historical ornament, muted earth palette, pitched tile roof, small windows, rustic timber cabin

Reference works:

| Work | Maker | Year |
|---|---|---|
| Googie's Coffee Shop | John Lautner | 1949 |
| Norms La Cienega | Armet and Davis (Eldon Davis) | 1957 |
| LAX Theme Building | Pereira and Luckman | 1961 |
| Space Needle | John Graham and Company | 1962 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Cantilever (process)

A beam or slab fixed at one end that carries load beyond its support, so that it seems to hang in the air. Origin: architecture, Northern Europe, c. 1300.

- Fix the beam at one end and anchor it with a back span of at least 1 part to every 2 parts of the overhang.
- Keep the free end thin; a depth of 1/8 to 1/10 of the span suits steel and concrete.
- Repeat the horizontal line in a run of 2 or 3 projecting planes to give a strong shadow.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Armet & Davis** (studio, Los Angeles, 1947–now), made the style. A Californian architecture firm that designed hundreds of coffee shops and diners. Its roadside buildings with flying roofs and big signs defined Googie.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 3.6 | 3–5 m | massing, facade |
| Structural grid (`structural_grid`) | 5 | 4–8 m | structure |
| Glazing ratio (`glazing_ratio`) | 60 | 40–80 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 15 | 5–35 deg | massing |
| Base material (`base_material`) | steel | steel, stone, concrete | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`mid-century-modern-architecture`](../mid-century-modern-architecture/SKILL.md) (Mid-century Modern). Lower the roof slope, remove the sign pylon and use timber and brick with a muted palette.

- **Came from (go here for a more orthodox version):** [`art-deco-architecture`](../art-deco-architecture/SKILL.md)
- **Kin in another domain:** [`space-age`](../space-age/SKILL.md), [`space-age-pop-product`](../space-age-pop-product/SKILL.md)
- **Nearest by vector profile:** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md), [`postmodern-architecture`](../postmodern-architecture/SKILL.md), [`parametricism-architecture`](../parametricism-architecture/SKILL.md)

## Emotional target

Excitement and optimism: the viewer feels a roadside rocket that promises a fast, bright future.

**Keywords:** optimistic, futuristic, playful, flashy, roadside · **Brand archetypes:** jester, explorer

## Sources

- [Wikipedia: Googie architecture](https://en.wikipedia.org/wiki/Googie_architecture)
- Alan Hess, Googie: Fifties Coffee Shop Architecture (Chronicle Books, 1985)

---

Generated from [`data/architecture/styles/googie-architecture.json`](../../data/architecture/styles/googie-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
