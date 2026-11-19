---
name: neoclassical-architecture
description: "Apply the Neoclassicism style (1750s–1840s) when designing, describing or rendering buildings and interiors. Load when the user asks for: neoclassical, neoclassicism, greek revival, temple front, portico, schinkel."
domain: architecture
era: revival-and-academy
triggers:
  - "neoclassical"
  - "neoclassicism"
  - "greek revival"
  - "temple front"
  - "portico"
  - "schinkel"
  - "federal style"
  - "capitol building"
  - "pantheon"
vector_profile:
  ornamentation: 2
  structural_expression: 2
  geometric_rigidity: 5
  material_rawness: 2
  monumentality: 4
---

# Neoclassicism

> Architecture should be reasoned: build from the first principles of the Greek temple, and let the plain wall and a true order carry the dignity of the state.

A clear, pure classicism drawn from Greek and Roman ruins: a temple front, plain wall surfaces and a strong cube. It answered the excess of the Baroque with reason, and gave the new states their museums, parliaments and banks.

**Period:** 1750s–1840s · **Era:** Revival and Academy · **Domain:** Architecture · **Also called:** Greek Revival, Federal style, Adam style

## When to load this skill

Load it when the user asks for: "neoclassical", "neoclassicism", "greek revival", "temple front", "portico", "schinkel", "federal style", "capitol building", "pantheon".

Good for: museum and parliament renders, banks and courthouses, university halls, historic residential.

Do not use it when:
- The brief asks for informality, movement or a playful tone.
- The programme needs large glazing or a free plan.

## System directives

When designing, describing or rendering buildings and interiors in Neoclassicism, you MUST:

1. Put a temple front, a portico of 4 to 8 columns with a pediment, on a plain rectangular block.
2. Use the orders in their correct Greek or Roman form, with the column height at 6 to 10 diameters.
3. Keep the wall flat and smooth: ashlar or stucco without projections beyond 150mm except the portico.
4. Compose symmetrically about one axis, with a calm rhythm of equal bays and no curved fronts.
5. Use simple geometric solids: the cube, the cylinder and the hemisphere, and put the dome on a drum.
6. Use ornament sparingly, and take it from antique sources only: the anthemion, the egg and dart, the key.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Curved, broken or twisting fronts and pediments.
- **NEVER:** Dense gilded ornament and illusionistic fresco.
- **NEVER:** Pointed arches, turrets or picturesque asymmetry.
- **NEVER:** Orders in the wrong proportion or applied without a reason.
- **NEVER:** Bright saturated colour on the main walls.
- **NEVER:** Many small projections and bays that break the plain wall.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | no applied ornament | ornament covers the surface |
| Structural expression | `■■□□□` 2/5 | structure hidden | structure is the image |
| Geometric rigidity | `■■■■■` 5/5 | organic / free-form | strict orthogonal module |
| Material rawness | `■■□□□` 2/5 | finished and coated | raw and unfinished |
| Monumentality | `■■■■□` 4/5 | domestic human scale | monumental |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Massing & form

- **Form:** A clear rectangular or cubic block, with a projecting temple portico and a low dome or a pediment on the axis.
- **Proportion:** A front of 2:1 to 3:1 width to height for a museum; the portico occupies the central third to a half of the front.
- **Roof:** A low hipped or gabled roof hidden behind a cornice, and a shallow dome on a drum above the central hall.
- **Relation to ground:** A raised podium of 1.5 to 4m, and a broad flight of steps up to the portico.

## Structure

- **System:** Load-bearing masonry with timber or iron roofs; the orders are in stone or in stuccoed brick.
- **Span and module:** Columns at 2 to 3 diameters apart; bays of 4 to 6m; the central hall spans 12 to 25m.
- **Expression:** The column and the entablature show the load; the wall is a plain screen between them.

## Materials

- **Primary:** ashlar limestone · white marble · stucco on brick
- **Secondary:** granite · cast iron · slate · mahogany
- **Finish:** Smooth, pale and matt; joints are fine and flush, and the wall is a clear surface.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Pale stone | `#E2DCCB` | walls and orders |
| White marble | `#F4F2EC` | portico and steps |
| Slate | `#4F5660` | roof |
| Pompeian red | `#8E3B32` | interior walls |
| Antique green | `#4E6B57` | doors and railings |

## Facade

- **Composition:** A calm symmetric front: a temple portico on the axis, and plain wings with equal bays and a simple cornice.
- **Openings:** Rectangular windows with a plain architrave, set evenly in a plain wall; the window-to-wall ratio is 15 to 25%.
- **Solid to void:** Solid leads: 75–85% opaque.

## Light & space

- **Daylight:** Even daylight from rooflights and a central oculus; each room is a clear shape.
- **Spatial sequence:** A clear axial route: portico, vestibule, a domed rotunda or stair hall, then the rooms in rows on each side.
- **Interior character:** Pale walls with a few painted panels, coffered domes, white marble columns and a geometric floor.

## Ornament

- **Attitude:** Ornament is restrained and archaeological: it appears only where an antique building would have it.
- **Details:** Greek key frieze · egg-and-dart moulding · anthemion · fluted columns · coffered dome · relief panels in the pediment

## Composition rules

- **Symmetry:** bilateral
- **Axis count:** 1
- **Rhythm module m:** 5

**Rules**

| Principle | Rule | Value |
|---|---|---|
| symmetry-axis | Place the portico on the one axis of a symmetric front. | 1 axis |
| proportion | Build the order to its canon: column height 6 to 10 diameters. | 6–10 diameters |
| rhythm | Space the columns and windows at an even, calm interval. | bay 4–6m |
| negative-space | Leave the wall plain around the portico, with nothing beyond the cornice. | wall 75–85% plain |
| unity-variety | Use one order and one material over the whole front. | 1 order |
| balance | Weigh the wings equally on both sides of the central block. | wings equal |

## Reference images

**Images**

| Title | Credit | Licence | Url |
|---|---|---|---|
| Altes Museum, Berlin | Ansgar Koreng | CC BY 4.0 | https://commons.wikimedia.org/wiki/File:Altes_Museum,_Berlin-Mitte,_170117,_ako.jpg |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `proportion` | Proportion | The ratio of one dimension to another, and of a part to the whole. A style holds one ratio or one series of ratios through the room, the facade or the picture. | governing ratio (ratio): 1:1, 2:3, 1:1.414, 1:1.618, 1:2; module series (series): Modulor, tatami 91 x 182 cm, 60 cm kitchen module |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty floor area (% of floor): 40–80 in a room; empty wall area (% of wall): 50–95; empty frame area (% of image): 30–70 |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |

## Vocabulary primer

Use these terms in a brief, an image prompt or a 3D scene description.

- **Use:** temple front portico, pediment, fluted columns, plain smooth wall, symmetric facade, low shallow dome, broad stone steps, pale ashlar, rotunda hall
- **Exclude:** curved baroque front, gold ornament, asymmetry, pointed arch, bright colour, glass curtain wall

Reference works:

| Work | Maker | Year |
|---|---|---|
| Panthéon, Paris | Jacques-Germain Soufflot | 1790 |
| Brandenburg Gate, Berlin | Carl Gotthard Langhans | 1791 |
| Virginia State Capitol, Richmond | Thomas Jefferson | 1788 |
| Altes Museum, Berlin | Karl Friedrich Schinkel | 1830 |
| British Museum, London | Robert Smirke | 1852 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Fluting and reeding (motif)

Parallel grooves (flutes) or ridges (reeds) on a column, a panel, a leg or a sheet of glass. Origin: architecture, Greece, c. 600 BCE.

- Cut 16 to 24 flutes round a column, or set the grooves at 15 to 40mm centres on a flat panel.
- Run the flutes vertical to make a surface look taller.
- Use one fluted surface in each room as an accent.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Académie royale d'architecture** (school, Paris, 1671–1816), taught the style. The royal academy of architecture in France. It taught the classical orders and sent its best students to study in Rome.
- **Society of Dilettanti** (club, London, 1734–now), published the style. A club of gentlemen who studied Greek and Roman art. It paid for the survey books of ancient buildings that architects then copied.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Storey height (`storey_height`) | 5 | 4–7 m | massing, facade |
| Structural grid (`structural_grid`) | 5 | 4–6 m | structure |
| Glazing ratio (`glazing_ratio`) | 20 | 15–25 % | facade, light_and_space |
| Roof pitch (`roof_pitch`) | 20 | 10–30 deg | massing |
| Base material (`base_material`) | stone | stone, brick | materials |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more ornate**: move toward [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md) (Beaux-Arts). Add sculpture groups, a mansard roof and paired columns; keep the symmetry and the axis.

- **Led to (go here for a newer version):** [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`baroque-architecture`](../baroque-architecture/SKILL.md)
- **Was rejected by:** [`arts-and-crafts-architecture`](../arts-and-crafts-architecture/SKILL.md)
- **Kin in another domain:** [`didone-serif`](../didone-serif/SKILL.md), [`empire-line-dress`](../empire-line-dress/SKILL.md), [`georgian-neoclassical-manufacture`](../georgian-neoclassical-manufacture/SKILL.md), [`transitional-serif`](../transitional-serif/SKILL.md)
- **Nearest by vector profile:** [`renaissance-architecture`](../renaissance-architecture/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`art-deco-architecture`](../art-deco-architecture/SKILL.md)

## Emotional target

Dignity and reason: the viewer feels a calm, lasting state that rests on law and not on show.

**Keywords:** rational, dignified, pure, civic, calm · **Brand archetypes:** ruler, sage

## Sources

- Robin Middleton and David Watkin, Neoclassical and 19th Century Architecture (Abrams, 1980)

---

Generated from [`data/architecture/styles/neoclassical-architecture.json`](../../data/architecture/styles/neoclassical-architecture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
