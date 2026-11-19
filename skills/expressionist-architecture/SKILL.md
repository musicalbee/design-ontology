---
name: expressionist-architecture
description: "Apply the Expressionist Architecture style (1910–1925) when designing, describing or rendering buildings and interiors. Load when the user asks for: expressionist architecture, expressionism architecture, mendelsohn, einstein tower, chilehaus, glass chain."
domain: architecture
era: fin-de-siecle
triggers:
  - "expressionist architecture"
  - "expressionism architecture"
  - "mendelsohn"
  - "einstein tower"
  - "chilehaus"
  - "glass chain"
  - "bruno taut"
  - "hans poelzig"
  - "sculptural brick"
  - "crystal building"
vector_profile:
  ornamentation: 3
  structural_expression: 3
  geometric_rigidity: 1
  material_rawness: 4
  monumentality: 4
---

# Expressionist Architecture

> A building should carry an inner feeling in its form: the architect sculpts one dynamic mass, and the plan and the facade follow that gesture.

Buildings shaped as one plastic gesture of feeling. After the First World War, Mendelsohn, Taut, Poelzig and Höger used brick, concrete and glass to make crystals, caves and flowing masses.

**Period:** 1910–1925 · **Era:** Fin de Siècle · **Domain:** Architecture · **Also called:** Architectural Expressionism, German Expressionism in architecture, Glass Chain

## When to load this skill

Load it when the user asks for: "expressionist architecture", "expressionism architecture", "mendelsohn", "einstein tower", "chilehaus", "glass chain", "bruno taut", "hans poelzig", "sculptural brick", "crystal building".

Good for: film set and game environment design, observatory and laboratory renders, brick office buildings, theatre and hall concepts.

Do not use it when:
- The brief needs a modular grid or a flexible plan.
- The brief asks for calm, neutral architecture.

## System directives

When designing, describing or rendering buildings and interiors in Expressionist Architecture, you MUST:

1. Model the building as one continuous sculptural mass, with curved corners of radius 2 to 8m and no flat repeating wall.
2. Slope and fold the walls in diagonals of 60 to 80 degrees, so that the form seems to move.
3. Use brick, concrete or glass as a plastic material: cast, stacked or faceted, with no applied style.
4. Cut the openings as slots, triangles or bands that follow the form, not a grid.
5. Make an expressive crown or prow, 3 to 8m, that gives the building a single recognisable silhouette.
6. Treat daylight as a material: tint, split and concentrate it with glass, ribs and deep reveals.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A flat repeating grid of identical windows.
- **NEVER:** Applied classical columns and cornices.
- **NEVER:** A plain rectangular box with a flat roof.
- **NEVER:** Decoration pasted on a neutral wall.
- **NEVER:** Thin, even curtain-wall glazing.
- **NEVER:** Right-angled corners with sharp edges everywhere.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■□□` 3/5 | structure hidden | structure is the image |
| Geometric rigidity | `■□□□□` 1/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■■■□` 4/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** One sculpted mass of curved, folded and stepped volumes, with a crown or prow as the focus.
- **Proportion:** Heavy and low or crystalline and tall, never a regular box; the plan is 1.5 to 3 times the height.
- **Roof:** A moulded or stepped crown, a dome, a spire or a rolled parapet, without a plain flat roof.
- **Relation to ground:** Rooted in a broad base of 1 to 2m, with the walls swelling out of the ground.

## Structure

- **System:** Brick, reinforced concrete or steel frame with a plastic skin, shaped by formwork and bricklayers.
- **Span and module:** A span of 6 to 15m; a brick course of 0.07m; a column or rib every 3 to 4m.
- **Expression:** The structure disappears into the form: the surface is the sculpture and the frame is hidden.

## Materials

- **Primary:** clinker brick · cast concrete · stucco · coloured glass
- **Secondary:** steel · copper · tile · oak
- **Finish:** Plastic and heavy: dark brick, rendered concrete and tinted glass, shaped by hand and mould.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Clinker brick | `#4E2C23` | walls |
| Concrete grey | `#8E8C86` | masses and base |
| Prussian blue | `#1F3F5B` | glass and shadow |
| Crystal white | `#E9EEF0` | render and light |
| Amber | `#C98B2E` | glow and accents |

## Facade

- **Composition:** A single sweeping surface: the facade bends, folds or steps, and brick or render runs without a break.
- **Openings:** Slots, triangles and bands that follow the curve; the window-to-wall ratio is 15 to 35%.
- **Solid to void:** Mostly solid and heavy: 65–85% solid.

## Light & space

- **Daylight:** Light falls through tinted glass, ribbed domes and slit windows, and makes a dim, coloured, theatrical space.
- **Spatial sequence:** A compressed entry opens into a high sculpted hall or stair, with curving ceilings and ribs.
- **Interior character:** A ceiling of 4 to 12m, curved walls and vault-like surfaces, stalactite plaster and coloured light.

## Ornament

- **Attitude:** The form is the ornament: the mass, the brick pattern and the curved line carry all the expression.
- **Details:** stalactite vaults · patterned clinker brick · crystal glass facets · curved corners · stepped crowns · tinted glass

## Composition rules

- **Symmetry:** free
- **Axis count:** 0
- **Rhythm module m:** 3.5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Give the building one crown or prow that the eye reaches first. | 1 crown |
| leading-lines | Bend the brick courses and the ribs along the curve of the mass. | 60–80° diagonals |
| scale | Make the mass heavy and monumental against the street. | height 15–40m |
| unity-variety | Hold one material and one gesture over the whole form. | 1 material |
| lighting-layers | Place tinted glass and slots to light the main hall from above. | 3 light sources |
| contrast | Set the dark solid mass against bright glass and render. | solid 65–85% |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Einstein Tower, Potsdam | Ideophagous | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Einstein_Tower_(27086).jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** sculptural brick mass, curved corners, stalactite vault, crystal glass dome, stepped crown, diagonal ribs, dark clinker brick, tinted glass slits, dramatic silhouette
- **Exclude:** flat grid of windows, classical columns, plain white box, curtain wall, pitched tile roof, pastel colours

Reference works:

| Work | Maker | Year |
|---|---|---|
| Glass Pavilion, Cologne | Bruno Taut | 1914 |
| First Goetheanum, Dornach | Rudolf Steiner | 1913 |
| Grosses Schauspielhaus, Berlin | Hans Poelzig | 1919 |
| Einstein Tower, Potsdam | Erich Mendelsohn | 1921 |
| Hat Factory, Luckenwalde | Erich Mendelsohn | 1923 |
| Chilehaus, Hamburg | Fritz Höger | 1924 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Crystal facet (motif)

A form broken into flat planes that meet at sharp angles, so that it reads as a crystal or a shard. Origin: painting, Horta de Ebro, La Roche-Guyon and Paris, c. 1909.

- Cut each mass into flat planes; most planes meet at angles between 30° and 120°.
- Use one plane size family: 3 to 5 sizes, with no curve.
- Let the light break on each plane, so that adjacent planes differ in tone by one or two steps.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 4 | 3.2–6 m | massing, facade |
| Structural grid (`structural_grid`) | 9 | 6–15 m | structure |
| Glazing ratio (`glazing_ratio`) | 25 | 15–35 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 20 | 0–60 deg | massing |
| Base material (`base_material`) | brick | brick, concrete, steel | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **less sculptural**: move toward [`bauhaus-architecture`](../bauhaus-architecture/SKILL.md) (Bauhaus Architecture). Straighten the curves into planes, open the walls to a rational grid and drop the dark brick for white render.
- If the user asks for **more ornate**: move toward [`art-deco-architecture`](../art-deco-architecture/SKILL.md) (Art Deco). Replace the plastic mass with stepped, symmetric forms and gilded geometric relief.

- **Came from (go here for a more orthodox version):** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md)
- **Kin in another domain:** [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md)
- **Nearest by vector profile:** [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md), [`arts-and-crafts-architecture`](../arts-and-crafts-architecture/SKILL.md), [`organic-architecture`](../organic-architecture/SKILL.md)

## Emotional target

Awe and unease: the viewer feels a charged, dramatic form that seems alive.

**Keywords:** dramatic, sculptural, heavy, crystalline, visionary, theatrical · **Brand archetypes:** magician, creator

## Sources

- Wolfgang Pehnt, Expressionist Architecture (Thames and Hudson, 1973)

---

Generated from [`data/architecture/styles/expressionist-architecture.json`](../../data/architecture/styles/expressionist-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
