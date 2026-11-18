---
name: international-style-architecture
description: "Apply the International Style style (1920s–1960s) when designing, describing or rendering buildings and interiors. Load when the user asks for: international style, modernist architecture, miesian, glass box, white villa, pilotis."
domain: architecture
era: modern-movement
triggers:
  - "international style"
  - "modernist architecture"
  - "miesian"
  - "glass box"
  - "white villa"
  - "pilotis"
  - "less is more"
  - "curtain wall"
vector_profile:
  ornamentation: 1
  structural_expression: 3
  geometric_rigidity: 5
  material_rawness: 2
  monumentality: 3
---

# International Style

> A building is a volume enclosed by a thin skin, and industrial methods make one rational form valid in every place.

Light rectilinear volumes of steel, glass and white render, with flat roofs, ribbon windows and free plans. The Bauhaus, Le Corbusier and Mies van der Rohe defined it in the 1920s, and it became the global language of the office tower.

**Period:** 1920s–1960s · **Era:** Modern Movement · **Domain:** Architecture · **Also called:** Modern Movement, Neues Bauen, Functionalism

## When to load this skill

Load it when the user asks for: "international style", "modernist architecture", "miesian", "glass box", "white villa", "pilotis", "less is more", "curtain wall".

Good for: concept renders, office buildings, private villas, gallery interiors, product showrooms.

Do not use it when:
- The brief asks for local character, craft or a strong response to climate.
- The site needs heavy thermal mass or small openings.

## System directives

When designing, describing or rendering buildings and interiors in International Style, you MUST:

1. Treat the building as volume, not mass: wrap a structural frame in a thin, flat skin of glass or render.
2. Carry the loads on a regular grid of slender columns, so that walls are free partitions and the plan is open.
3. Order the facade by the regularity of the structural bay, not by axial symmetry.
4. Use horizontal ribbon windows or full-height glazing set flush with the wall plane.
5. Keep the roof flat and usable, and keep the eaves line free of cornices.
6. Remove applied ornament and rely on proportion and the precision of standard parts.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pitched roofs, gables, cornices or dormers.
- **NEVER:** Applied ornament, classical orders or regional motifs.
- **NEVER:** Thick load-bearing walls with small punched windows.
- **NEVER:** Symmetric compositions around a ceremonial central axis.
- **NEVER:** Rough, hand-made or strongly textured surfaces.
- **NEVER:** Curved or free-form volumes that ignore the structural grid.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■■□□` 3/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■■` 5/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■□□□` 2/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■□□` 3/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** Simple orthogonal prisms, single or intersecting, with smooth planes and sharp arrises.
- **Proportion:** Long horizontal bodies for houses and slabs; a regular bay of 4 to 7m repeated without a central emphasis.
- **Roof:** Flat roof, often a terrace or roof garden, with a parapet that is level with the wall plane.
- **Relation to ground:** The volume stands free on pilotis or on a recessed glass ground floor, so that the ground continues under it.

## Structure

- **System:** A steel or reinforced-concrete skeleton with non-load-bearing curtain walls and partitions.
- **Span and module:** A column grid of 4 to 9m, set back from the facade so that the skin runs past the columns without a break.
- **Expression:** The grid is legible but restrained: slim mullions, expressed slab edges or steel I-sections mark the module.

## Materials

- **Primary:** plate glass · painted steel · white render on concrete
- **Secondary:** travertine · chrome · glass block · polished stone veneer
- **Finish:** Smooth, precise and machine-made; surfaces are painted, polished or glazed and show no trace of the hand.

**Palette**

| Name | Hex | Role |
|---|---|---|
| White render | `#F4F3EE` | primary wall planes |
| Black steel | `#1C1C1C` | frames and mullions |
| Glass | `#A9C1C9` | curtain wall |
| Travertine | `#D8CDB8` | floors and podium |
| Primary red | `#C8281E` | one accent plane or door |

## Facade

- **Composition:** A flat taut skin divided by a regular module; no part of the elevation projects more than the depth of a mullion.
- **Openings:** Continuous ribbon windows, corner glazing or a full curtain wall, with frames as thin as the technology allows.
- **Solid to void:** Void dominates on later work: 50–90% glass; early white villas hold about 30–40% glass in long bands.

## Light & space

- **Daylight:** Even, abundant daylight from floor-to-ceiling glazing; the interior reads as bright and shadowless.
- **Spatial sequence:** A free plan: space flows between screens and cores without closed corridors, and the inside continues to the outside through glass.
- **Interior character:** White planes, exposed slender columns, built-in storage and tubular-steel furniture; few objects, placed with precision.

## Ornament

- **Attitude:** Ornament is rejected; the quality of proportion, joints and materials replaces it.
- **Details:** cruciform chrome columns · flush joints · cantilevered slab edges · book-matched stone · tubular steel handrails

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** white rectilinear volumes, flat roof, ribbon windows, glass curtain wall, slender steel columns, pilotis, open free plan, crisp shadows, minimal detailing
- **Exclude:** ornament, pitched roof, rough concrete, arches, brick detailing, symmetry around a portico

Reference works:

| Work | Architect | Year |
|---|---|---|
| Bauhaus Building, Dessau | Walter Gropius | 1926 |
| Barcelona Pavilion | Ludwig Mies van der Rohe | 1929 |
| Villa Savoye, Poissy | Le Corbusier | 1931 |
| Seagram Building, New York | Ludwig Mies van der Rohe | 1958 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **heavier**: move toward [`brutalist-architecture`](../brutalist-architecture/SKILL.md) (Brutalism). Thicken the frame, leave the concrete raw and set the windows deep; keep the flat roof and the regular bay.

- **Led to (go here for a newer version):** [`brutalist-architecture`](../brutalist-architecture/SKILL.md), [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`mid-century-modern-architecture`](../mid-century-modern-architecture/SKILL.md)
- **Was rejected by:** [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md), [`postmodern-architecture`](../postmodern-architecture/SKILL.md)
- **Mixes well with:** [`bauhaus-architecture`](../bauhaus-architecture/SKILL.md)
- **Kin in another domain:** [`bauhaus`](../bauhaus/SKILL.md), [`bauhaus-interior`](../bauhaus-interior/SKILL.md), [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md), [`mid-century-modern-interior`](../mid-century-modern-interior/SKILL.md), [`new-topographics`](../new-topographics/SKILL.md), [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md), [`straight-photography`](../straight-photography/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`bauhaus-architecture`](../bauhaus-architecture/SKILL.md), [`high-tech-architecture`](../high-tech-architecture/SKILL.md), [`mid-century-modern-architecture`](../mid-century-modern-architecture/SKILL.md)

## Emotional target

Clarity and progress: the viewer feels a rational, weightless order that belongs to no single place.

**Keywords:** rational, light, universal, precise, optimistic · **Brand archetypes:** sage, ruler

## Sources

- Henry-Russell Hitchcock and Philip Johnson, The International Style (W. W. Norton, 1932)

---

Generated from [`data/architecture/styles/international-style-architecture.json`](../../data/architecture/styles/international-style-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
