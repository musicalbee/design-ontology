---
name: brutalist-architecture
description: "Apply the Brutalism style (1950s–1970s) when designing, describing or rendering buildings and interiors. Load when the user asks for: brutalist, brutalism, béton brut, raw concrete, barbican, monolithic."
domain: architecture
era: modern-movement
triggers:
  - "brutalist"
  - "brutalism"
  - "béton brut"
  - "raw concrete"
  - "barbican"
  - "monolithic"
  - "fortress-like"
  - "concrete megastructure"
vector_profile:
  ornamentation: 1
  structural_expression: 5
  geometric_rigidity: 4
  material_rawness: 5
  monumentality: 5
---

# Brutalism

> A building is honest when its material, its structure and its use are legible from the street.

Heavy masses of board-marked concrete with the structure, the services and the circulation shown on the outside. It grew from Le Corbusier's late work and from British post-war housing, and it built the universities and town halls of the welfare state.

**Period:** 1950s–1970s · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** New Brutalism, Béton brut

## When to load this skill

Load it when the user asks for: "brutalist", "brutalism", "béton brut", "raw concrete", "barbican", "monolithic", "fortress-like", "concrete megastructure".

Good for: concept renders, cultural buildings, university campuses, set and game environments, interior moodboards.

Do not use it when:
- The brief asks for lightness, transparency or a domestic welcome.
- The climate is wet and the budget has no allowance for concrete detailing that sheds water.

## System directives

When designing, describing or rendering buildings and interiors in Brutalism, you MUST:

1. Leave the primary material unfinished: cast concrete keeps the marks of its timber formwork, and brick stays unrendered.
2. Show the structure: express frames, cross-walls, beams and cantilevers as the main image of the facade.
3. Compose with a few large repeated masses, and let each mass state one function such as a stair tower or an auditorium.
4. Set windows deep in the wall, at least 300mm behind the face, so that shadow and not glass draws the elevation.
5. Put services, stair cores and walkways on the outside of the volume where a visitor can read them.
6. Use one dominant material for more than 70% of the visible surface.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth render, paint or cladding panels over the concrete.
- **NEVER:** Curtain walls of flush glass that hide the floor slabs.
- **NEVER:** Applied ornament, mouldings or historical motifs.
- **NEVER:** Thin, light profiles that make the building look weightless.
- **NEVER:** A hidden entrance or a structure that cannot be read from outside.
- **NEVER:** Bright decorative colour on the primary mass.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■■■` 5/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■□` 4/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■■■■` 5/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■■` 5/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** Blocky interlocked volumes with deep cantilevers and top-heavy silhouettes; the upper floors often project 2 to 6m beyond the base.
- **Proportion:** Horizontal bands dominate, and vertical stair or service towers punctuate them at regular intervals.
- **Roof:** Flat roofs with heavy parapets; plant rooms and lift overruns stand as sculpted volumes on top.
- **Relation to ground:** The mass sits on pilotis, a podium or a raised deck, and ramps or bridges carry pedestrians above the street.

## Structure

- **System:** In-situ reinforced concrete frames and cross-walls, with precast panels on later and larger schemes.
- **Span and module:** A repeated structural bay of 3 to 7m sets the rhythm of the facade and the size of each room.
- **Expression:** Beams, columns, corbels and waffle slabs stay visible inside and outside, and joints between pours are drawn as lines.

## Materials

- **Primary:** board-marked in-situ concrete · bush-hammered concrete
- **Secondary:** dark brick · rough timber · steel-framed glazing · quarry tile
- **Finish:** Unfinished and matt; the surface keeps formwork grain, tie holes and weather stains, and nothing is polished or painted.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Raw concrete | `#8C8A84` | primary mass |
| Weathered concrete | `#5F5D58` | shadow and stain |
| Engineering brick | `#4A332B` | infill walls |
| Timber | `#7A5A3A` | handrails and doors |
| Signal orange | `#D9541E` | small accents on doors and signs |

## Facade

- **Composition:** A deep relief of repeated modules such as egg-crate grids, projecting window boxes or ribbed panels, without a decorative skin.
- **Openings:** Recessed strip or punched windows in dark frames, shaded by concrete fins or brise-soleil.
- **Solid to void:** Solid dominates: 60–80% of the elevation is opaque wall.

## Light & space

- **Daylight:** Light arrives from clerestories, deep slots and rooflights, and rakes across rough surfaces to show their texture.
- **Spatial sequence:** A low compressed entrance opens to a tall central hall; ramps, bridges and open stairs make the route a visible event.
- **Interior character:** The interior repeats the exterior materials: exposed concrete soffits, brick floors, built-in timber benches and little applied finish.

## Ornament

- **Attitude:** No applied ornament; the texture of the formwork and the pattern of the structure do the work of decoration.
- **Details:** board-marked surfaces · exposed tie holes · concrete gargoyles and spouts · cast-in signage · ribbed corduroy panels

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** board-marked raw concrete, massive cantilevered volumes, deep recessed windows, exposed structural frame, repeating modular facade, elevated walkways, overcast diffuse light, weathered matt surfaces, monumental civic scale
- **Exclude:** glass curtain wall, polished surfaces, classical ornament, pitched tiled roof, pastel paint, thin steel filigree

Reference works:

| Work | Maker | Year |
|---|---|---|
| Unité d'Habitation, Marseille | Le Corbusier | 1952 |
| Hunstanton School | Alison and Peter Smithson | 1954 |
| Yale Art and Architecture Building | Paul Rudolph | 1963 |
| Barbican Estate, London | Chamberlin, Powell and Bon | 1976 |
| National Theatre, London | Denys Lasdun | 1976 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter**: move toward [`international-style-architecture`](../international-style-architecture/SKILL.md) (International Style). Thin the frame, raise the glazing share above 50% and smooth the concrete; keep the flat roof and the repeated module.

- **Came from (go here for a more orthodox version):** [`international-style-architecture`](../international-style-architecture/SKILL.md)
- **Was rejected by:** [`postmodern-architecture`](../postmodern-architecture/SKILL.md)
- **Kin in another domain:** [`abstract-expressionism`](../abstract-expressionism/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md), [`dogme-95`](../dogme-95/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`new-topographics`](../new-topographics/SKILL.md)
- **Nearest by vector profile:** [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`bauhaus-architecture`](../bauhaus-architecture/SKILL.md)

## Emotional target

Weight and permanence: the viewer feels a civic institution that will not move and has nothing to hide.

**Keywords:** monumental, honest, severe, protective, uncompromising · **Brand archetypes:** ruler, outlaw

## Sources

- Reyner Banham, The New Brutalism: Ethic or Aesthetic? (Architectural Press, 1966)

---

Generated from [`data/architecture/styles/brutalist-architecture.json`](../../data/architecture/styles/brutalist-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
