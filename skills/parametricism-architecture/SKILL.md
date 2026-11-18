---
name: parametricism-architecture
description: "Apply the Parametricism style (2008–present) when designing, describing or rendering buildings and interiors. Load when the user asks for: parametricism, parametric architecture, zaha hadid, patrik schumacher, heydar aliyev center, algorithmic design."
domain: architecture
era: postmodern-and-after
triggers:
  - "parametricism"
  - "parametric architecture"
  - "zaha hadid"
  - "patrik schumacher"
  - "heydar aliyev center"
  - "algorithmic design"
  - "double-curved facade"
  - "generative architecture"
  - "fluid form building"
vector_profile:
  ornamentation: 3
  structural_expression: 2
  geometric_rigidity: 1
  material_rawness: 1
  monumentality: 4
---

# Parametricism

> A design is a system of linked parameters, so every part can differ and follow the others in a smooth gradient: one fluid field replaces the rigid, repeated element.

Buildings drawn by algorithm: continuous curved skins, smooth transitions and no repeated part. Zaha Hadid Architects and Patrik Schumacher made one flowing field of the façade, roof and floor, built with digital fabrication.

**Period:** 2008–present · **Era:** Postmodern and After · **Domain:** Architecture · **Also called:** Parametric architecture, Algorithmic architecture, Digital fluidity

## When to load this skill

Load it when the user asks for: "parametricism", "parametric architecture", "zaha hadid", "patrik schumacher", "heydar aliyev center", "algorithmic design", "double-curved facade", "generative architecture", "fluid form building".

Good for: cultural buildings and stadiums, airport and station terminals, pavilions and installations, concept renders and game environments.

Do not use it when:
- The brief asks for a low budget or a simple, buildable box.
- The setting is historic and asks for a quiet, contextual infill.

## System directives

When designing, describing or rendering buildings and interiors in Parametricism, you MUST:

1. Replace the rigid, repeated element with a continuous surface: roof, wall and floor fold into one another without an edge.
2. Drive the form by parameters: structure, daylight, flow of people and fabrication limits set the shape by script.
3. Differentiate the parts in a smooth gradient, so each panel, mullion and node differs a little from its neighbour.
4. Use a double-curved skin of panels with a typical size of 1.5 to 3m, and a hidden steel space frame under it.
5. Make the plan a field: paths, rooms and the landscape flow together, and the route has no sharp corner.
6. Design with digital tools from first sketch to fabrication, so the model is also the shop drawing.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Orthogonal boxes, repeated identical bays and flat facades.
- **NEVER:** Applied historical ornament or a symbolic pastiche.
- **NEVER:** Sharp, unrelated shards with no continuity of surface.
- **NEVER:** Random blob forms with no link to a parameter.
- **NEVER:** A single repeated module over the whole skin.
- **NEVER:** Visible joints and edges that break the flow of the surface.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■□□□` 2/5 | structure hidden | structure is the image |
| Geometric rigidity | `■□□□□` 1/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■□□□□` 1/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A single flowing volume that rises from the ground plane and folds into wall and roof, with no clear division between them.
- **Proportion:** Free: the shape follows the field; typical plan spans of 60 to 200m with a height of 20 to 50m.
- **Roof:** The roof is part of the skin: it curves down into the walls and into the plaza without a parapet or eave.
- **Relation to ground:** The ground plane lifts and folds to become the building; plazas and ramps are part of one surface.

## Structure

- **System:** A steel space frame or a shell of glass-fibre-reinforced concrete, with a free double-curved skin carried on a hidden frame.
- **Span and module:** Column-free spans of 40 to 90m; skin panels of 1.5 to 3m, each one different; columns are few and leaning.
- **Expression:** The structure is hidden to keep the surface pure; the form itself shows the flow of forces.

## Materials

- **Primary:** glass-fibre-reinforced concrete (GFRC) · glass-fibre-reinforced plastic (GFRP) · steel space frame · glass
- **Secondary:** aluminium cladding · white paint or gel coat · polished concrete · laminated timber
- **Finish:** Seamless and smooth: white, joint-free surfaces, or a glass skin with fine, even mullions.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Gel white | `#F4F4F2` | skin and walls |
| Fluid grey | `#B8BCC2` | ground plane and shadows |
| Glass blue | `#8FB4D1` | glazed bands |
| Polished concrete | `#9A9A96` | floors |
| Signal accent | `#E34A33` | interior highlight |

## Facade

- **Composition:** One continuous double-curved surface with a gradient of panels; the glazed zones open and close along the curve.
- **Openings:** Windows are cut as slits or gradient bands inside the skin; the window-to-wall ratio is 20 to 50%.
- **Solid to void:** Variable: 50–80% opaque, changing along the surface.

## Light & space

- **Daylight:** Light enters through cuts and slits in the skin and gives soft gradients over the curved white walls.
- **Spatial sequence:** A continuous flow: the plaza lifts into the entry, then a vast curved atrium with ramps and stairs and no hard threshold.
- **Interior character:** White curving walls and soffits, floating stairs, long smooth ramps and indirect, even light.

## Ornament

- **Attitude:** Form is the ornament: the pattern comes from the algorithm and the gradient of the surface, not from applied decoration.
- **Details:** gradient panel patterns · double-curved skin · ribbed shell lines · continuous ramps · folded plane edges · slit windows

## Composition rules

- **Symmetry:** free
- **Axis count:** 0
- **Rhythm module m:** 2

**Rules**

| Principle | Rule | Value |
|---|---|---|
| unity-variety | Vary every panel in a smooth gradient inside one continuous skin. | 1 skin, 1000s of panels |
| circulation | Make the route a continuous flow with no sharp corner and no hard threshold. | min. radius 3m |
| layering-depth | Fold the ground, wall and roof into one surface. | 1 surface |
| scale | Span 40 to 90m without columns to give a vast, open interior. | span 40–90m |
| rhythm | Let the rhythm be a gradient, not a fixed beat: the panel size changes slowly. | panel 1.5–3m |

## Reference images

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** flowing curved white skin, continuous surface folding from ground to roof, double-curved facade, gradient panels, no sharp corners, ramp and floating stair, slit windows, smooth plaza that lifts into the building
- **Exclude:** rectangular box, repeated identical bays, classical ornament, sharp jagged shards, exposed joints, brick

Reference works:

| Work | Maker | Year |
|---|---|---|
| Guangzhou Opera House | Zaha Hadid Architects | 2010 |
| Galaxy Soho, Beijing | Zaha Hadid Architects | 2012 |
| Heydar Aliyev Center, Baku | Zaha Hadid Architects | 2012 |
| Beijing Daxing International Airport | Zaha Hadid Architects with ADP Ingénierie | 2019 |
| Morpheus Hotel, Macau | Zaha Hadid Architects | 2018 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more fragmented**: move toward [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md) (Deconstructivism). Break the continuous skin into colliding, angular shards and show the joints.

- **Came from (go here for a more orthodox version):** [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Nearest by vector profile:** [`baroque-architecture`](../baroque-architecture/SKILL.md), [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md), [`postmodern-architecture`](../postmodern-architecture/SKILL.md)

## Emotional target

Fluid futurism: the viewer feels a building in motion, without edges, from a digital age.

**Keywords:** fluid, seamless, futuristic, sculptural, computational · **Brand archetypes:** creator, explorer

## Sources

- Patrik Schumacher, The Autopoiesis of Architecture, vol. 2 (Wiley, 2012)

---

Generated from [`data/architecture/styles/parametricism-architecture.json`](../../data/architecture/styles/parametricism-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
