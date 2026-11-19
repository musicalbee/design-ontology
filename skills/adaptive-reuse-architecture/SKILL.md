---
name: adaptive-reuse-architecture
description: "Apply the Adaptive Reuse style (1964–present) when designing, describing or rendering buildings and interiors. Load when the user asks for: adaptive reuse, building conversion, converted warehouse, converted factory, tate modern, carlo scarpa castelvecchio."
domain: architecture
era: modern-movement
triggers:
  - "adaptive reuse"
  - "building conversion"
  - "converted warehouse"
  - "converted factory"
  - "tate modern"
  - "carlo scarpa castelvecchio"
  - "musée d'orsay"
  - "retrofit"
  - "reuse of old buildings"
vector_profile:
  ornamentation: 2
  structural_expression: 4
  geometric_rigidity: 3
  material_rawness: 5
  monumentality: 4
---

# Adaptive Reuse

> An existing building has value in its fabric and its memory, so keep it, change its use and let the new work be clearly new beside the old.

Old buildings given a new use. Scarpa, Aulenti and Herzog and de Meuron keep the shell of a castle, station or power plant, and add a clear new layer that tells old from new.

**Period:** 1964–present · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** Building reuse, Conversion architecture, Retrofit and reuse

## When to load this skill

Load it when the user asks for: "adaptive reuse", "building conversion", "converted warehouse", "converted factory", "tate modern", "carlo scarpa castelvecchio", "musée d'orsay", "retrofit", "reuse of old buildings".

Good for: museums in old industrial buildings, housing and offices from old factories, station and power-plant conversions, heritage extension briefs.

Do not use it when:
- The site is empty and the brief asks for a new landmark.
- The old fabric is unsafe and cannot be kept.

## System directives

When designing, describing or rendering buildings and interiors in Adaptive Reuse, you MUST:

1. Keep the existing structure and shell, and record its condition before you plan the new use.
2. Show the old and the new as two layers, with a gap or a joint of 20 to 100mm between them.
3. Choose a new material that contrasts with the old in tone and finish: glass, steel, or pale timber against brick and stone.
4. Keep the big old volume, such as a hall, a nave or a turbine hall of 10 to 35m, and insert new floors inside it.
5. Cut new openings only where the use needs them, and frame them so the old wall stays readable.
6. Leave marks of the former use on show, such as rails, stains, crane beams and chimneys.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A complete demolition behind a retained front.
- **NEVER:** A fake historical copy that blurs old and new.
- **NEVER:** New work in the same material and style as the old.
- **NEVER:** Covering the old fabric with thick cladding.
- **NEVER:** A new use that needs the walls to be gutted.
- **NEVER:** A sealed insertion that does not touch the old.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■■□` 4/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■□□` 3/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■■■■` 5/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** The existing building stays as the main mass, and a new roof, stair or inserted volume sits inside or on top of it.
- **Proportion:** The original proportions, often a tall hall of 10 to 35m, are kept, with 20 to 40% new floor area.
- **Roof:** The old roof is kept or repaired, and a new lightweight addition of glass or steel rises 1 to 3 storeys on it.
- **Relation to ground:** The old plinth and ground relation are kept, and a new entrance or ramp is added.

## Structure

- **System:** The old masonry, steel or concrete frame is kept, and a new steel or timber frame is added.
- **Span and module:** The old module of 4 to 10m is kept; new floors span 6 to 12m; the new frame stands 20 to 100mm clear of the old.
- **Expression:** The old and new structures read as two layers, and a joint, a reveal or a bracket tells them apart.

## Materials

- **Primary:** existing brick · existing stone · steel · glass
- **Secondary:** timber · weathering steel · concrete · lime plaster
- **Finish:** Layered and honest: patinated old brick and stone next to clean steel, glass and pale timber.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Old brick | `#8F5B45` | existing walls |
| Soot grey | `#5B5A57` | existing steel and stone |
| New steel | `#9BA2A6` | insertions |
| Pale timber | `#D6BC91` | new floors and fittings |
| Clear glass | `#BFD6D9` | new glazing |

## Facade

- **Composition:** The old facade stays as it was; the new openings and the new layer are set in it and framed clearly.
- **Openings:** Old openings are kept and new ones are cut; the window-to-wall ratio is 20 to 45%.
- **Solid to void:** Mostly solid: 55–80% solid.

## Light & space

- **Daylight:** The old tall windows and roof lights bring in light, and the new glass inserts bring it deep into the plan.
- **Spatial sequence:** A grand old hall, a new stair or bridge across it, then rooms of the new use.
- **Interior character:** A ceiling of 4 to 20m with old trusses and crane beams, exposed brick, and new floors and light fittings.

## Ornament

- **Attitude:** The marks of use and age are the ornament: patina, scars and old fittings, and the new layer stays plain.
- **Details:** exposed old brick · crane beams and rails · patina and stains · new steel stair · timber insert

## Composition rules

- **Symmetry:** asymmetric
- **Axis count:** 0
- **Rhythm module m:** 6

**Rules**

| Principle | Rule | Value |
|---|---|---|
| contrast | Set clean new steel and glass against old brick and stone. | 2 layers |
| layering-depth | Hold a gap or a reveal between the old fabric and the new. | gap 20–100mm |
| scale | Keep the old hall and set the human new floors inside it. | hall 10–35m |
| focal-point | Make one new insertion, such as a stair, a bridge or a roof, the focus. | 1 insertion |
| sightlines | Keep the long view down the old hall open. | 1 long axis |
| circulation | Lead the visitor through the old threshold into a new route. | 1 route |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Tate Modern, London | King of Hearts | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Tate_Modern_London_June_2016.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | light reflectance value difference between adjacent planes (LRV points): 30 or more for a visible edge |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | standing eye height (cm): 150–165; seated eye height (cm): 110–120; obstruction on the main sightline (cm of height): 0, or below 75 for low furniture |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** converted power station, exposed old brick, new steel insertion, timber floor in a hall, old crane beams, glass roof extension, patina and stains, clear joint between old and new, turbine hall
- **Exclude:** fake historical copy, full demolition, painted over brick, same style old and new, mirrored curtain wall, suburban pastiche

Reference works:

| Work | Maker | Year |
|---|---|---|
| Castelvecchio Museum, Verona | Carlo Scarpa | 1964 |
| Musée d'Orsay, Paris | Gae Aulenti | 1986 |
| Tate Modern, London | Herzog and de Meuron | 2000 |
| High Line, New York | Diller Scofidio + Renfro | 2009 |
| Zeitz Museum of Contemporary Art Africa, Cape Town | Heatherwick Studio | 2017 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Shadow gap (process)

A narrow recessed joint between two surfaces that casts a shadow, so that each surface seems to float apart from the next. Origin: architecture, Verona, c. 1958.

- Cut the gap 10 to 25mm wide and 10 to 20mm deep.
- Hold the gap at a constant width along its full length.
- Use it where new meets old: between a wall and a ceiling, a floor and a skirting, or a new insert and a historic wall.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 4.5 | 3.5–8 m | massing, facade |
| Structural grid (`structural_grid`) | 6 | 4–12 m | structure |
| Glazing ratio (`glazing_ratio`) | 35 | 20–45 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 30 | 0–50 deg | massing |
| Base material (`base_material`) | brick | brick, stone, steel, concrete, glass | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more industrial**: move toward [`industrial-loft-interior`](../industrial-loft-interior/SKILL.md) (Industrial loft). Strip the finishes back to brick, steel and concrete, and show the old services.
- If the user asks for **more contemporary**: move toward [`high-tech-architecture`](../high-tech-architecture/SKILL.md) (High-tech). Make the new layer a light steel and glass frame with exposed services.

- **Rejects (the opposite pole; do not blend):** [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Kin in another domain:** [`industrial-loft-interior`](../industrial-loft-interior/SKILL.md)
- **Nearest by vector profile:** [`critical-regionalism-architecture`](../critical-regionalism-architecture/SKILL.md), [`brutalist-architecture`](../brutalist-architecture/SKILL.md), [`mass-timber-architecture`](../mass-timber-architecture/SKILL.md)

## Emotional target

Respect and curiosity: the viewer feels the memory of the old building and the energy of its new life.

**Keywords:** layered, memory, honest, reused, contrast · **Brand archetypes:** sage, explorer

## Sources

- Liliane Wong, Adaptive Reuse: Extending the Lives of Buildings (Birkhäuser, 2017)

---

Generated from [`data/architecture/styles/adaptive-reuse-architecture.json`](../../data/architecture/styles/adaptive-reuse-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
