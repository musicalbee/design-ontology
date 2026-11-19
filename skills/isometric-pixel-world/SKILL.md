---
name: isometric-pixel-world
description: "Apply the Isometric pixel world style (1984–2002) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: isometric pixel art, isometric game, 2.5d view, cut-away room, dimetric."
domain: game
era: tile-and-sprite
triggers:
  - "isometric pixel art"
  - "isometric game"
  - "2.5d view"
  - "cut-away room"
  - "dimetric"
vector_profile:
  render_fidelity: 2
  spatial_depth: 3
  stylisation: 4
  lighting_drama: 2
  surface_density: 3
---

# Isometric pixel world

> A fixed 2:1 diagonal gives depth with no perspective, so a room can be read whole like an architect's axonometric drawing.

The world is seen from above at a fixed angle with 2:1 pixel diagonals. Rooms become boxes cut open on two sides, so a player reads walls, floor and furniture at once.

**Period:** 1984–2002 · **Era:** Tile and sprite · **Domain:** Video game · **Also called:** Isometric pixel art, 2.5D isometric, Filmation look

## When to load this skill

Load it when the user asks for: "isometric pixel art", "isometric game", "2.5d view", "cut-away room", "dimetric".

Good for: floor-plan illustrations, space-planning visuals, game maps, explainer graphics of a building.

Do not use it when:
- The brief asks for an eye-level, immersive view.
- Scale must change with distance.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Isometric pixel world, you MUST:

1. Draw every edge at 2:1 (about 26.6°) or vertical.
2. Build floors from diamond tiles 2 times as wide as they are high.
3. Cut walls open on the two near sides so the inside shows.
4. Light each block from one side: top light, left mid, right dark.
5. Keep the same scale in the whole scene; nothing shrinks with distance.
6. Sort objects back to front by their floor position.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Vanishing points or perspective shrink.
- **NEVER:** Edges at angles other than 2:1 and vertical.
- **NEVER:** Walls that hide the player.
- **NEVER:** Light from different sides on different objects.
- **NEVER:** Free camera rotation.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■□□□` 2/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■□□` 3/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■□` 4/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■□□□` 2/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■□□` 3/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** isometric
- **Camera:** Fixed angle; flips room by room or scrolls diagonally.
- **Field of view:** orthographic, 2:1 dimetric
- **Framing:** One room or a block of 4 to 9 streets in the frame.

## Geometry & shape

- **Primitive:** A diamond floor tile of 32×16 or 64×32 px and cube blocks.
- **Budget:** A room of 8×8 to 16×16 floor tiles.
- **Edge rule:** Clean 2:1 pixel stairs on every diagonal.
- **Proportion:** A character is about 1 tile wide and 1.5 to 2 tiles high.

## Surface & texture

- **Texture rule:** Pixel patterns on each face, with 3 values for the 3 visible faces.
- **Texel density:** about 32 px for each metre
- **Filtering:** Nearest neighbour.
- **Material model:** Painted, with one value for each face direction.

## Palette

- **Strategy:** Each material in 3 values for top, left and right faces; limited palettes on early machines, 256 colours later.
- **Colour depth:** 1 to 8 bits
- **On screen colours:** 2 to 256

**Colours**

| Name | Hex | Role |
|---|---|---|
| Floor stone | `#B8A890` | top faces |
| Wall mid | `#806850` | left faces |
| Wall dark | `#4A3828` | right faces |
| Grass | `#58A040` | ground |
| Water | `#3870C0` | water |
| Lamp | `#F8D070` | accent light |

## Light & atmosphere

- **Model:** Fixed face values: one light direction for the whole world.
- **Shadows:** Painted diagonal shadows on the floor, or none.
- **Atmosphere:** None, or a dark edge outside the room box.
- **Time of day:** A palette shift of the whole scene.

## World & space

- **Scale:** A room shows as a whole box; a town shows as a city block.
- **Interiors:** A cut-open box: back two walls up, near two walls down or gone, furniture on the floor tiles.
- **Exteriors:** A block of streets and roofs in diamond tiles, like an architect's model.
- **Threshold:** A door in a back wall leads to the next room box.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| circulation | Keep a 1-tile path from each door to each other door. | ≥ 1 tile clear |
| sightlines | Keep the two near walls low or absent so no object hides the player. | near walls ≤ 0.25 of height |
| scale | Keep one scale for every object; a chair is 1 tile. | 1 tile = 1 m |

## Interface

- **Placement:** A panel at one side or the bottom, 15–25% of the screen.
- **Type and icons:** A pixel font and small icons drawn in the same isometric angle.
- **Diegesis:** On top, in a frame.

## Prompt primer

- **Positive:** isometric pixel art · 2:1 dimetric projection · cut-away room box · diamond floor tiles · fixed light direction · three-tone faces · architectural model view · 1990s computer game · crisp pixel edges
- **Negative:** perspective · vanishing point · photoreal · blur · smooth gradient · fisheye

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Zaxxon | Sega | 1982 |
| Knight Lore | Ultimate Play the Game | 1984 |
| SimCity 2000 | Maxis | 1993 |
| Diablo | Blizzard North | 1996 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle; clear width of a main path for a following camera (m of world scale): ≥ 3, or ≥ 2 tiles in a tile game |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera eye height in a first-person game view (cm of world scale): 160–170; the view ends in fog or a wall within 10–40 m in a closed level |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Isometric projection (process)

A drawing with three axes at equal angles and one scale, with no vanishing point, so that sizes can be measured. Origin: architecture, Cambridge, 1822.

- Draw the three axes at 120° to each other; on a pixel grid, use a 2:1 slope (26.57°).
- Keep one scale on all three axes and draw no vanishing point.

### Pixel grid (process)

A picture or a letter built from square cells that are each on or off, or one flat colour, with no curve and no smooth edge. Origin: film & video, Bell Labs, New Jersey, c. 1963.

- Draw an icon on a grid of 16 or 32 cells a side; fill each cell with one colour or leave it empty.
- Limit the palette to 1 to 16 colours; do not blend two colours inside one cell.
- Draw a diagonal as a stair of equal steps, for example 2 cells across for each 1 cell up.
- Show the image at an integer scale (2x, 3x, 4x) so that no cell blurs.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Sega** (studio, Tokyo, 1960–now), made the style. A Japanese game and hardware company that made the Mega Drive and fast parallax side-scrollers.
- **Ultimate Play the Game** (studio, Ashby-de-la-Zouch, England, 1982–1988), launched the style. A British studio whose isometric room engine set a look for home computer games.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 240 | 192–600 px | surface, geometry |
| Colour depth (`colour_depth`) | 8 | 1–8 bit/px | palette |
| Camera projection (`camera_projection`) | isometric | isometric | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 3 | 2–4 | lighting, surface |
| Texel density (`texel_density`) | 32 | 16–64 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md) (Flat geometric isometric). Keep the angle; drop the pixels for flat pastel vector faces.
- If the user asks for **more solid**: move toward [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md) (Fifth-generation low poly). Keep the room box; build it in textured polygons and free the camera.

- **Came from (go here for a more orthodox version):** [`eight-bit-tile`](../eight-bit-tile/SKILL.md)
- **Led to (go here for a newer version):** [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md)
- **Kin in another domain:** [`architectural-photography`](../architectural-photography/SKILL.md), [`isometric-icon`](../isometric-icon/SKILL.md)
- **Nearest by vector profile:** [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md), [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md), [`hand-painted-texture`](../hand-painted-texture/SKILL.md)

## Emotional target

Calm control: the viewer sees the whole space at once, like a planner over a model.

**Keywords:** ordered, legible, miniature, calm, strategic · **Brand archetypes:** sage, ruler, creator

## Sources

- [Wikipedia: Isometric video game graphics](https://en.wikipedia.org/wiki/Isometric_video_game_graphics)
- [Wikipedia: Knight Lore](https://en.wikipedia.org/wiki/Knight_Lore)
- [Wikipedia: Zaxxon](https://en.wikipedia.org/wiki/Zaxxon)

---

Generated from [`data/game/styles/isometric-pixel-world.json`](../../data/game/styles/isometric-pixel-world.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
