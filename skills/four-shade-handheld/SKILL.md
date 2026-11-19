---
name: four-shade-handheld
description: "Apply the Four-shade handheld style (1989–1998) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: game boy, four shades of green, dmg palette, monochrome pixel art, handheld retro."
domain: game
era: tile-and-sprite
triggers:
  - "game boy"
  - "four shades of green"
  - "dmg palette"
  - "monochrome pixel art"
  - "handheld retro"
vector_profile:
  render_fidelity: 1
  spatial_depth: 1
  stylisation: 5
  lighting_drama: 1
  surface_density: 1
---

# Four-shade handheld

> Four values of one colour are enough for a world, if the pattern and the outline carry the form.

A 160×144 screen with four shades of one olive-green hue. Every house and room is drawn from 8×8 tiles in light, two mid tones and dark, so form lives only in value and pattern.

**Period:** 1989–1998 · **Era:** Tile and sprite · **Domain:** Video game · **Also called:** Game Boy look, DMG green, Four-shade monochrome

## When to load this skill

Load it when the user asks for: "game boy", "four shades of green", "dmg palette", "monochrome pixel art", "handheld retro".

Good for: one-colour pixel graphics, screen-printed tiles and textiles, monochrome wayfinding, small-screen interfaces.

Do not use it when:
- The brief needs hue contrast between areas.
- The scene must show depth.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Four-shade handheld, you MUST:

1. Use exactly 4 shades: lightest for the ground, darkest for outlines.
2. Draw at 160×144 pixels on an 8×8 tile grid.
3. Separate materials with dither and hatch patterns, not with hue.
4. Keep large areas in the lightest shade so the screen stays readable.
5. Outline every object in the darkest shade, 1 px.
6. Make a character 16×16 px, with a top-down or side view.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Any second hue.
- **NEVER:** Gradients or more than 4 values.
- **NEVER:** Large dark areas that smear on the slow screen.
- **NEVER:** Detail smaller than 1 px.
- **NEVER:** Perspective views.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■□□□□` 1/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■□□□□` 1/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■■` 5/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■□□□□` 1/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■□□□□` 1/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** top-down
- **Camera:** Flips screen by screen or scrolls with the player.
- **Field of view:** orthographic
- **Framing:** 20 tiles across and 18 down; the player near the centre.

## Geometry & shape

- **Primitive:** An 8×8 tile; sprites of 8×8 or 8×16.
- **Budget:** 40 sprites, 10 on one line; 384 tiles in memory.
- **Edge rule:** Hard 1 px steps.
- **Proportion:** A character is 2 tiles high; a house is 4 by 4 tiles.

## Surface & texture

- **Texture rule:** Materials are 2-shade patterns: dots for grass, lines for wood, checks for stone.
- **Texel density:** about 16 px for each metre
- **Filtering:** Nearest neighbour.
- **Material model:** Painted pattern only.

## Palette

- **Strategy:** One hue in 4 values, set by the screen, not by the artist.
- **Colour depth:** 2 bits for each pixel
- **On screen colours:** 4 shades

**Colours**

| Name | Hex | Role |
|---|---|---|
| Lightest | `#9BBC0F` | ground |
| Light | `#8BAC0F` | fills |
| Dark | `#306230` | shadow and pattern |
| Darkest | `#0F380F` | outline |

## Light & atmosphere

- **Model:** None; value is painted into the tiles.
- **Shadows:** A darkest-shade strip under a roof or a tree.
- **Atmosphere:** The slight blur of the slow liquid-crystal screen.
- **Time of day:** Not shown, or a palette swap toward darker values.

## World & space

- **Scale:** A room is one screen; a town is 4 to 9 screens.
- **Interiors:** Top-down rooms with walls as a 1-tile border, a rug and a table as tiles.
- **Exteriors:** Roofs seen from above, paths of patterned tiles between them.
- **Threshold:** Step on a door tile; fade to the room screen.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Draw a door 1 tile wide and a character 2 tiles high. | door = 1 tile |
| circulation | Keep paths at least 2 tiles wide so the player moves without a stop. | ≥ 2 tiles |
| focal-point | Mark the door with the darkest shade so the eye finds it first. | 1 dark accent per screen |

## Interface

- **Placement:** A text box on the bottom 4 tile rows, or a 1-row strip.
- **Type and icons:** An 8×8 pixel font; icons as single tiles.
- **Diegesis:** On top of the world.

## Prompt primer

- **Positive:** Game Boy pixel art · four shades of olive green · monochrome green palette · 160x144 resolution · top-down tile map · dithered patterns · 1 pixel dark outlines · handheld LCD look · 8x8 tile grid
- **Negative:** full colour · gradient · 3D render · photoreal · smooth shading · blur

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Tetris | Nintendo | 1989 |
| The Legend of Zelda: Link's Awakening | Nintendo | 1993 |
| Pokémon Red and Blue | Game Freak | 1996 |
| Super Mario Land | Nintendo | 1989 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle; clear width of a main path for a following camera (m of world scale): ≥ 3, or ≥ 2 tiles in a tile game |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Pixel grid (process)

A picture or a letter built from square cells that are each on or off, or one flat colour, with no curve and no smooth edge. Origin: film & video, Bell Labs, New Jersey, c. 1963.

- Draw an icon on a grid of 16 or 32 cells a side; fill each cell with one colour or leave it empty.
- Limit the palette to 1 to 16 colours; do not blend two colours inside one cell.
- Draw a diagonal as a stair of equal steps, for example 2 cells across for each 1 cell up.
- Show the image at an integer scale (2x, 3x, 4x) so that no cell blurs.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Nintendo R&D1** (studio, Kyoto, 1970–2004), launched the style. The Nintendo hardware and game team that designed the Game Boy and its first games.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 144 | 144–144 px | surface, geometry |
| Colour depth (`colour_depth`) | 2 | 2–2 bit/px | palette |
| Camera projection (`camera_projection`) | top-down | top-down, side-view | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 2 | 1–4 | lighting, surface |
| Texel density (`texel_density`) | 16 | 8–16 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colour**: move toward [`eight-bit-tile`](../eight-bit-tile/SKILL.md) (8-bit tile graphics). Keep the tiles; move to a fixed palette of about 25 colours.
- If the user asks for **more depth**: move toward [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md) (Isometric pixel world). Keep the small palette; turn the grid 45° into an isometric view.

- **Came from (go here for a more orthodox version):** [`eight-bit-tile`](../eight-bit-tile/SKILL.md)
- **Kin in another domain:** [`pixel-icon`](../pixel-icon/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md)
- **Nearest by vector profile:** [`eight-bit-tile`](../eight-bit-tile/SKILL.md), [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md), [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md)

## Emotional target

A quiet, pocket-sized focus: the viewer leans in to a small green world.

**Keywords:** quiet, nostalgic, compact, humble, focused · **Brand archetypes:** innocent, everyman

## Sources

- [Wikipedia: Game Boy](https://en.wikipedia.org/wiki/Game_Boy)
- [Wikipedia: Gunpei Yokoi](https://en.wikipedia.org/wiki/Gunpei_Yokoi)
- [Wikipedia: Pixel art](https://en.wikipedia.org/wiki/Pixel_art)

---

Generated from [`data/game/styles/four-shade-handheld.json`](../../data/game/styles/four-shade-handheld.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
