---
name: eight-bit-tile
description: "Apply the 8-bit tile graphics style (1983–1992) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: 8-bit, nes style, retro pixel art, chiptune era, 8-bit game look."
domain: game
era: tile-and-sprite
triggers:
  - "8-bit"
  - "nes style"
  - "retro pixel art"
  - "chiptune era"
  - "8-bit game look"
vector_profile:
  render_fidelity: 1
  spatial_depth: 1
  stylisation: 5
  lighting_drama: 1
  surface_density: 2
---

# 8-bit tile graphics

> A small grid and a small palette force each object into its clearest silhouette, so a house in 16 pixels reads at once.

A world drawn from 8×8 pixel tiles on a 256×240 screen, with 3 colours plus transparency in each sprite and a fixed hardware palette of about 54 colours. Black outlines and flat fills make each house and tree a small icon.

**Period:** 1983–1992 · **Era:** Tile and sprite · **Domain:** Video game · **Also called:** 8-bit pixel art, NES-era graphics, Third-generation console look

## When to load this skill

Load it when the user asks for: "8-bit", "nes style", "retro pixel art", "chiptune era", "8-bit game look".

Good for: retro game art, playful wayfinding, pixel-art murals and tiles, kids' rooms and play areas.

Do not use it when:
- The brief needs depth, light or real material.
- The space must feel calm and adult.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in 8-bit tile graphics, you MUST:

1. Build every background from 8×8 or 16×16 tiles that repeat on a grid.
2. Give each sprite 3 colours plus transparent; outline it in black or a dark hue.
3. Use flat fills; show volume with one highlight row and one shadow row, never a gradient.
4. Keep the screen at 256×240 pixels and scale it up with hard nearest-neighbour edges.
5. Use a sky of one flat colour, often light blue or black.
6. Make a character 16 to 32 pixels high, with a large head.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth gradients or anti-aliased edges.
- **NEVER:** More than 4 colours in one 16×16 area.
- **NEVER:** Sub-pixel detail or filtered scaling.
- **NEVER:** Perspective that breaks the tile grid.
- **NEVER:** Photographic texture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■□□□□` 1/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■□□□□` 1/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■■` 5/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■□□□□` 1/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■□□□` 2/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** side-view
- **Camera:** Scrolls left and right, or flips screen by screen.
- **Field of view:** orthographic
- **Framing:** About 16 tiles across and 15 down; the ground line sits in the lower third.

## Geometry & shape

- **Primitive:** An 8×8 pixel tile; sprites of 8×8 or 8×16.
- **Budget:** 64 sprites, no more than 8 on one scan line; 256 distinct background tiles.
- **Edge rule:** Hard pixel steps; diagonals in clean 1:1 or 2:1 runs.
- **Proportion:** A character is 1 to 2 tiles high; a door is 2 tiles; a house front is 4 to 6 tiles.

## Surface & texture

- **Texture rule:** A brick or a leaf is a 2- or 3-colour pattern inside one tile, repeated.
- **Texel density:** about 16 px for each metre at the scale of the character
- **Filtering:** Nearest neighbour; every pixel is a hard square.
- **Material model:** Painted: each material is a fixed tile with its colours in it.

## Palette

- **Strategy:** A fixed hardware palette; each 16×16 area takes one 3-colour sub-palette plus the shared background colour.
- **Colour depth:** a 54-colour master palette, 4 sub-palettes of 3 colours
- **On screen colours:** about 25

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sky blue | `#5C94FC` | sky |
| Brick red | `#C84C0C` | buildings |
| Ground brown | `#AC7C00` | ground |
| Leaf green | `#00A800` | trees |
| Black | `#000000` | outline |
| Skin | `#FCBCB0` | character |
| White | `#FCFCFC` | highlight |

## Light & atmosphere

- **Model:** Painted into the tiles; no light engine.
- **Shadows:** A dark tile row under an object, or none.
- **Atmosphere:** None; the air is clear and flat.
- **Time of day:** A swap of the sky colour: light blue for day, black for night.

## World & space

- **Scale:** Doors are twice the height of the character; streets are one screen long.
- **Interiors:** A room is a separate screen with a flat back wall, a floor line and furniture as single sprites.
- **Exteriors:** A street is a row of house fronts on one ground line, with the sky above.
- **Threshold:** Walk into a door and cut to a new screen.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Draw a door 2 tiles high for a character of 1 to 1.5 tiles. | door = 2× character |
| layering-depth | Use 2 planes: background tiles and sprites in front. | 2 planes |
| focal-point | Keep the player near the left third of the screen in the scroll direction. | x ≈ 0.33 of screen width |

## Interface

- **Placement:** A strip at the top or the bottom, about 10–15% of the screen, on black.
- **Type and icons:** An 8×8 pixel font in capitals; icons are single tiles.
- **Diegesis:** Mostly on top; signs in the world are tiles with no readable text.

## Prompt primer

- **Positive:** 8-bit pixel art · NES-era video game · 256x240 resolution · limited 25-colour palette · flat colour fills · black pixel outlines · tile-based background · side-scrolling view · hard pixel edges · flat sky colour
- **Negative:** smooth gradient · anti-aliasing · 3D render · photoreal · blur · high resolution detail

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Super Mario Bros. | Nintendo | 1985 |
| The Legend of Zelda | Nintendo | 1986 |
| Mega Man 2 | Capcom | 1988 |
| Castlevania | Konami | 1986 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |
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

- **Famitsu** (magazine, Tokyo, 1986–now), published the style. A Japanese weekly game magazine that reviews and previews games, from 8-bit to current hardware.
- **Nintendo Power** (magazine, Redmond, Washington, 1988–2012), published the style. A monthly magazine from Nintendo of America that printed maps, sprite art and screens of its games.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 240 | 192–240 px | surface, geometry |
| Colour depth (`colour_depth`) | 4 | 2–6 bit/px | palette |
| Camera projection (`camera_projection`) | side-view | side-view, top-down | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 2 | 1–3 | lighting, surface |
| Texel density (`texel_density`) | 16 | 8–24 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colour**: move toward [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md) (16-bit sprite and parallax). Keep the tiles; widen the palette to 256 colours and add 2 to 4 parallax layers.
- If the user asks for **fewer colours**: move toward [`four-shade-handheld`](../four-shade-handheld/SKILL.md) (Four-shade handheld). Keep the grid; reduce the palette to 4 shades of one hue.

- **Led to (go here for a newer version):** [`four-shade-handheld`](../four-shade-handheld/SKILL.md), [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md), [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md), [`voxel-block-world`](../voxel-block-world/SKILL.md)
- **Kin in another domain:** [`pixel-art-web`](../pixel-art-web/SKILL.md), [`pixel-icon`](../pixel-icon/SKILL.md)
- **Nearest by vector profile:** [`four-shade-handheld`](../four-shade-handheld/SKILL.md), [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md), [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md)

## Emotional target

A bright, toy-like confidence: the viewer reads each thing at once and feels a world small enough to master.

**Keywords:** playful, bright, clear, nostalgic, toy-like · **Brand archetypes:** jester, innocent, hero

## Sources

- [Wikipedia: Nintendo Entertainment System](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System)
- [Wikipedia: Pixel art](https://en.wikipedia.org/wiki/Pixel_art)
- [Wikipedia: Tile-based video game](https://en.wikipedia.org/wiki/Tile-based_video_game)

---

Generated from [`data/game/styles/eight-bit-tile.json`](../../data/game/styles/eight-bit-tile.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
