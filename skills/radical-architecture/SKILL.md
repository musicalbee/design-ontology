---
name: radical-architecture
description: "Apply the Radical architecture style (1960s–1980s) when designing, describing or rendering buildings and interiors. Load when the user asks for: radical architecture, archigram, superstudio, archizoom, continuous monument, no-stop city."
domain: architecture
era: postmodern-and-after
triggers:
  - "radical architecture"
  - "archigram"
  - "superstudio"
  - "archizoom"
  - "continuous monument"
  - "no-stop city"
  - "paper architecture"
  - "plug-in city"
  - "walking city"
vector_profile:
  ornamentation: 2
  structural_expression: 4
  geometric_rigidity: 4
  material_rawness: 1
  monumentality: 4
---

# Radical architecture

> The drawing is the act: if the real city serves the market, the architect must draw a city that no market can build.

Architecture that lives on paper, in collage and in film. Groups in London, Florence and Moscow drew endless grids, walking cities and impossible houses to attack the market and the state.

**Period:** 1960s–1980s · **Era:** Postmodern and After · **Domain:** Architecture · **Also called:** Architettura radicale, Radical design

## When to load this skill

Load it when the user asks for: "radical architecture", "archigram", "superstudio", "archizoom", "continuous monument", "no-stop city", "paper architecture", "plug-in city", "walking city".

Good for: concept art, speculative design, poster and collage, sci-fi worlds.

Do not use it when:
- The brief asks for a buildable, detailed, site-specific design.
- The scene needs warm material craft.

## System directives

When designing, describing or rendering buildings and interiors in Radical architecture, you MUST:

1. Draw the project as a collage, a film still or an etching, not as a plan.
2. Set one huge, simple form against an ordinary landscape.
3. Use the endless grid as a neutral frame for life.
4. Borrow images from pop culture, machines and advertising.
5. Make the project a critique that readers must decode.
6. Keep the scale impossible: cities that walk or monuments that circle the earth.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A buildable, budget-ready scheme.
- **NEVER:** Warm, handmade detail.
- **NEVER:** Historical ornament.
- **NEVER:** A single, finished object with a client brief.
- **NEVER:** Careful realism in the image.
- **NEVER:** A pitched roof or a house-like shape.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■■□` 4/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■□` 4/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■□□□□` 1/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** Huge, simple forms: a grid, a mirror block, a plug-in frame or a walking body, set on a flat plain.
- **Proportion:** Extreme: horizontal grids that run to the horizon, or tall frames that dwarf the people.
- **Roof:** Flat or absent; the top is a plain plane or a crane.
- **Relation to ground:** The form sits on the land as a foreign object, or it floats above it on legs.

## Structure

- **System:** A frame, a grid or a machine body, shown as a plain diagram with no detail.
- **Span and module:** A square grid of about 1 to 3m is the base module in the drawings.
- **Expression:** The frame is the image; the joints and services are shown as lines and arrows.

## Materials

- **Primary:** white laminate grid · mirrored glass · steel frame
- **Secondary:** photo-collage · screen print · plastic · felt-tip colour
- **Finish:** Smooth, flat and graphic; the surfaces look like print, with no weathering.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper white | `#F4F2EC` | grid and ground |
| Grid black | `#1B1B1D` | lines |
| Pop red | `#E03A3E` | accent shape |
| Sky blue | `#7FB3E0` | sky in collage |
| Desert ochre | `#C9A66B` | landscape |

## Facade

- **Composition:** A plain grid or a mirror skin with no front; the face is a pattern.
- **Openings:** No openings, or regular square cells in a grid.
- **Solid to void:** Balanced: a flat grid pattern of 40–60% void.

## Light & space

- **Daylight:** Flat, even light, as in a photo collage; no deep shadow.
- **Spatial sequence:** There is no route: the space is an endless room, a field or a frame to be inhabited.
- **Interior character:** A neutral, lit, featureless room where furniture and people are the only objects.

## Ornament

- **Attitude:** Ornament is the image: the collage and the print carry all the meaning.
- **Details:** photomontage · grid lines · pop colour planes · drawn figures · captions and arrows

## Composition rules

- **Symmetry:** free
- **Axis count:** 0
- **Rhythm module m:** 2

**Rules**

| Principle | Rule | Value |
|---|---|---|
| scale | Set a vast form against a small human figure. | form 100–1000 times the figure |
| rhythm | Repeat a single grid cell without change. | cell 1–3m |
| negative-space | Leave the plain landscape empty around the form. | 60% empty ground |
| contrast | Set a hard geometric mass against a soft natural scene. | 1 mass, 1 landscape |
| leading-lines | Run the grid lines to the horizon. | 1 vanishing point |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| No-Stop City cover | Archizoom Associati | Public domain | https://commons.wikimedia.org/wiki/File:No-Stop-City-cover.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge |
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** endless white grid, photomontage collage, huge mirrored monument in a desert, plug-in frame with capsules, walking city on legs, pop colour planes, flat even light, impossible scale
- **Exclude:** pitched roof, brick detail, classical ornament, realistic weathering, warm timber, small cottage

Reference works:

| Work | Maker | Year |
|---|---|---|
| Plug-in City | Peter Cook (Archigram) | 1964 |
| Walking City | Ron Herron (Archigram) | 1964 |
| Continuous Monument | Superstudio | 1969 |
| No-Stop City | Archizoom Associati | 1970 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Photomontage (montage)

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: graphic movements, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Archigram** (crew, London, 1960–1974), shaped the style. A group of six young London architects who published a magazine of cities as machines. They drew walking cities, plug-in frames and living pods, but built almost nothing.
- **Archizoom Associati** (crew, Florence, 1966–1974), launched the style. A Florence group that mixed pop colour with a critique of the market. It drew No-Stop City, a city as one endless room, and made furniture for Poltronova.
- **Global Tools** (collective, Florence, 1973–1975), gathered the style. A network of Italian radical groups and designers who ran a counter-school of workshops on the body, play and craft. It met for about two years.
- **Soviet paper architects** (collective, Moscow, 1981–now), shaped the style. A scene of young Moscow architects who drew impossible buildings for international competitions and could not build them. Their etchings made the Soviet paper dream known in the West.
- **Superstudio** (crew, Florence, 1966–1978), launched the style. A Florence group that drew the endless grid as a critique of consumer society. Its collages show one monument that wraps the whole earth.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 4 | 2.4–8 m | massing, facade |
| Structural grid (`structural_grid`) | 12 | 3–30 m | structure |
| Glazing ratio (`glazing_ratio`) | 40 | 0–100 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 0 | 0–10 deg | massing |
| Base material (`base_material`) | steel | steel, glass, concrete | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more built**: move toward [`high-tech-architecture`](../high-tech-architecture/SKILL.md) (High-tech). Turn the frame into a real steel structure with exposed services and show its joints.

- **Rejects (the opposite pole; do not blend):** [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Mixes well with:** [`high-tech-architecture`](../high-tech-architecture/SKILL.md)
- **Kin in another domain:** [`memphis-design`](../memphis-design/SKILL.md), [`pop-art-painting`](../pop-art-painting/SKILL.md)
- **Nearest by vector profile:** [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`metabolism-architecture`](../metabolism-architecture/SKILL.md)

## Emotional target

Dizzy doubt: the viewer sees a clear, calm picture of a world that cannot be, and asks who built the real one.

**Keywords:** ironic, utopian, critical, graphic, cool · **Brand archetypes:** outlaw, magician

## Sources

- [Wikipedia: Archigram](https://en.wikipedia.org/wiki/Archigram)
- [Wikipedia: Superstudio](https://en.wikipedia.org/wiki/Superstudio)
- [Wikipedia: Archizoom Associati](https://en.wikipedia.org/wiki/Archizoom_Associati)

---

Generated from [`data/architecture/styles/radical-architecture.json`](../../data/architecture/styles/radical-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
