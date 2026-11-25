---
name: fantasy-console-pixel
description: "Apply the Fantasy console pixel style (2015–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: pico-8, fantasy console, 128x128 pixel art, 16 colour pixel game, game jam pixel."
domain: game
era: tile-and-sprite
triggers:
  - "pico-8"
  - "fantasy console"
  - "128x128 pixel art"
  - "16 colour pixel game"
  - "game jam pixel"
vector_profile:
  render_fidelity: 1
  spatial_depth: 1
  stylisation: 5
  lighting_drama: 1
  surface_density: 2
---

# Fantasy console pixel

> If a tool fixes the limits of an imagined console, every maker shares one palette and one pixel scale, and the limits become a common style.

A made-up console sets the limits: a 128×128 pixel screen, a fixed palette of 16 colours and small 8×8 sprites. Makers choose the 8-bit look as a rule of the tool, not as a limit of old hardware.

**Period:** 2015–now · **Era:** Tile and sprite · **Domain:** Video game · **Also called:** Fantasy console look, 128×128 pixel art, Virtual console pixel art

## When to load this skill

Load it when the user asks for: "pico-8", "fantasy console", "128x128 pixel art", "16 colour pixel game", "game jam pixel".

Good for: game jam entries, small indie game prototypes, retro-styled social cards, teaching pixel art.

Do not use it when:
- The brief needs more than 16 colours or a high-resolution screen.
- The audience expects realistic art.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Fantasy console pixel, you MUST:

1. Draw on a screen of 128×128 pixels and keep every shape on whole pixels.
2. Pick colours only from the one shared palette of 16 colours.
3. Build sprites and tiles from 8×8 pixel cells.
4. Show a whole room or a small level on one screen, or scroll a map in tile steps.
5. Keep the user interface in the same pixel font and the same palette as the game.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Colours outside the shared palette.
- **NEVER:** Smooth scaling or filters.
- **NEVER:** Resolutions above 128 pixels.
- **NEVER:** Gradients and soft light.
- **NEVER:** Sprites with sub-pixel motion.

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
- **Camera:** Locked on one screen, or scrolls in whole tiles; top-down views are also common.
- **Field of view:** orthographic
- **Framing:** A square of 16×16 tiles of 8 px; the whole play area is visible at once.

## Geometry & shape

- **Primitive:** An 8×8 pixel cell; sprites of 8×8 or a multiple of it.
- **Budget:** One shared sprite sheet and one tile map; a small game holds a few hundred sprites.
- **Edge rule:** Hard pixel steps; diagonals in clean 1:1 or 2:1 runs.
- **Proportion:** A character is 1 tile high; a door is 1 to 2 tiles; a room fills one screen.

## Surface & texture

- **Texture rule:** A material is a 2- or 3-colour pattern inside one 8×8 tile, repeated.
- **Texel density:** 1 tile of 8 px for each metre at the scale of the character
- **Filtering:** Nearest neighbour; the 128 px screen is scaled by whole numbers.
- **Material model:** Painted: each material is a fixed tile with its colours in it.

## Palette

- **Strategy:** One shared palette of 16 colours for every game; shade by moving to the next colour of the same hue family.
- **Colour depth:** 4 bits for each pixel, from a fixed palette of 16
- **On screen colours:** 16

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | outline and night |
| Dark blue | `#1D2B53` | shadow |
| Dark purple | `#7E2553` | shade |
| Dark green | `#008751` | leaves |
| Brown | `#AB5236` | wood and ground |
| Dark grey | `#5F574F` | stone |
| Light grey | `#C2C3C7` | metal |
| White | `#FFF1E8` | highlight |

## Light & atmosphere

- **Model:** Painted into the tiles; no light engine.
- **Shadows:** A dark blue or dark purple tile under an object.
- **Atmosphere:** None, or a palette swap for fog and night.
- **Time of day:** A swap of the sky colour; night uses black and dark blue.

## World & space

- **Scale:** A door is 1 to 2 tiles high for a character of 1 tile.
- **Interiors:** A room is one 16×16 tile screen with furniture as single sprites.
- **Exteriors:** A level is a row of screens or a scrolled tile map under a flat sky colour.
- **Threshold:** Walk off the screen edge or into a door and cut to the next screen.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Draw a door 2 tiles high for a character of 1 tile. | door = 2× character |
| layering-depth | Use 2 planes: a tile map and sprites in front. | 2 planes |
| focal-point | Keep the player in the middle third of the 128 px screen. | centre third |

## Interface

- **Placement:** Text and counters in the corners of the 128×128 screen, about 8% of the height.
- **Type and icons:** A small built-in pixel font; icons are single 8×8 sprites in the shared palette.
- **Diegesis:** Mostly on top; the user interface of the tool uses the same palette.

## Prompt primer

- **Positive:** 128x128 pixel screen · 16 colour fixed palette · 8x8 pixel sprites · fantasy console pixel art · hard pixel edges · tile map one screen · small pixel font · nearest-neighbour scale
- **Negative:** smooth gradients · high resolution · anti-aliasing · photoreal · more than 16 colours · soft shadows

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| PICO-8 | Lexaloffle Games | 2015 |
| Celeste Classic | Maddy Thorson and Noel Berry | 2015 |

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

- **Lexaloffle Games** (studio, unknown, ?–now), launched the style. The small studio of Joseph White that made the PICO-8 fantasy console. The tool fixes a 128×128 pixel screen and a 16-colour palette for every game made with it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 144 | 144–144 px | surface, geometry |
| Colour depth (`colour_depth`) | 4 | 4–5 bit/px | palette |
| Camera projection (`camera_projection`) | side-view | side-view, top-down | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 2 | 1–3 | lighting, surface |
| Texel density (`texel_density`) | 8 | 8–8 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colour**: move toward [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md) (16-bit sprite and parallax). Widen the palette to 256 colours on a 256×224 screen with parallax layers.
- If the user asks for **cleaner**: move toward [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md) (Flat geometric isometric). Drop the pixel grid; use flat pastel faces in an isometric view.

- **Kin in another domain:** [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Nearest by vector profile:** [`eight-bit-tile`](../eight-bit-tile/SKILL.md), [`four-shade-handheld`](../four-shade-handheld/SKILL.md), [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md)

## Emotional target

Warm nostalgia with a maker's pride: the viewer sees a small, complete world made within strict limits.

**Keywords:** nostalgic, playful, compact, handmade, limited · **Brand archetypes:** creator, jester, everyman

## Sources

- [Wikipedia: PICO-8](https://en.wikipedia.org/wiki/PICO-8)
- [Wikidata Q28456260: PICO-8](https://www.wikidata.org/wiki/Q28456260)
- [Wikipedia: Celeste (video game)](https://en.wikipedia.org/wiki/Celeste_(video_game))
- [PICO-8 manual (Lexaloffle): Specifications](https://www.lexaloffle.com/dl/docs/pico-8_manual.html)
- [PICO-8 wiki: Palette](https://pico-8.fandom.com/wiki/Palette)

---

Generated from [`data/game/styles/fantasy-console-pixel.json`](../../data/game/styles/fantasy-console-pixel.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
