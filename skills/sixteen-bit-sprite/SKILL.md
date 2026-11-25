---
name: sixteen-bit-sprite
description: "Apply the 16-bit sprite and parallax style (1988–1997) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: 16-bit, snes style, mega drive look, jrpg pixel art, parallax pixel art."
domain: game
era: tile-and-sprite
triggers:
  - "16-bit"
  - "snes style"
  - "mega drive look"
  - "jrpg pixel art"
  - "parallax pixel art"
vector_profile:
  render_fidelity: 2
  spatial_depth: 2
  stylisation: 4
  lighting_drama: 2
  surface_density: 3
---

# 16-bit sprite and parallax

> A richer palette and stacked layers let pixel art paint light, air and distance without a 3D engine.

Pixel art at 256×224 with up to 256 colours on screen from a 32,768-colour range. Several scrolling layers give parallax depth, sprites carry 15 colours and soft ramps, and skies get gradients made of colour bands.

**Period:** 1988–1997 · **Era:** Tile and sprite · **Domain:** Video game · **Also called:** 16-bit pixel art, SNES-era graphics, Fourth-generation console look

## When to load this skill

Load it when the user asks for: "16-bit", "snes style", "mega drive look", "jrpg pixel art", "parallax pixel art".

Good for: retro game art, pixel murals, illustrated wayfinding, nostalgic marketing visuals.

Do not use it when:
- The brief needs real 3D space.
- The design must look current and clean.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in 16-bit sprite and parallax, you MUST:

1. Use 2 to 4 background layers that scroll at different speeds for depth.
2. Shade each sprite with ramps of 3 to 5 steps of one hue, lit from the top left.
3. Use 15 colours plus transparent in each sprite.
4. Paint skies as horizontal bands of 4 to 8 colours, not a smooth gradient.
5. Use selective outlines: dark on the outside, coloured inside.
6. Make a character 24 to 48 px high.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth photographic gradients.
- **NEVER:** Pillow shading from the centre.
- **NEVER:** Filtered or blurred scaling.
- **NEVER:** Inconsistent light directions between sprites.
- **NEVER:** 3D polygon objects.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■□□□` 2/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■□□□` 2/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■□` 4/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■□□□` 2/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■□□` 3/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** side-view
- **Camera:** Scrolls with the player; far layers move slower than near layers.
- **Field of view:** orthographic
- **Framing:** 16 by 14 tiles of 16 px; the horizon sits at 40–60% of the height.

## Geometry & shape

- **Primitive:** 8×8 tiles in 2 to 4 layers; sprites up to 64×64.
- **Budget:** 128 sprites, 32 on one line; up to 4 background layers.
- **Edge rule:** Hard pixel edges, with hand-placed anti-alias pixels on curves.
- **Proportion:** A character is 1.5 to 3 tiles of 16 px; a door is 2 to 3 tiles.

## Surface & texture

- **Texture rule:** Brick, wood and leaves drawn pixel by pixel with 3- to 5-step ramps.
- **Texel density:** about 24 px for each metre
- **Filtering:** Nearest neighbour; sometimes a rotate and scale layer for floors.
- **Material model:** Painted: light and shade are in the pixels.

## Palette

- **Strategy:** Rich, saturated ramps; each layer has its own sub-palettes of 16 colours.
- **Colour depth:** 15 bits for each palette entry, 4 or 8 bits for each pixel
- **On screen colours:** up to 256

**Colours**

| Name | Hex | Role |
|---|---|---|
| Dusk violet | `#584898` | far sky |
| Warm orange | `#F89850` | horizon band |
| Roof red | `#B83820` | buildings |
| Moss green | `#408830` | trees |
| Stone grey | `#8890A0` | walls |
| Lamp yellow | `#F8E080` | window light |
| Ink navy | `#202040` | outline |

## Light & atmosphere

- **Model:** Painted ramps with a fixed light from the top left; colour math for half-transparent layers.
- **Shadows:** Painted cast shadows; a dark oval under each character.
- **Atmosphere:** Colour-band skies, clouds and fog as a half-transparent layer.
- **Time of day:** Palette swaps per area: day, dusk and night versions of the same tiles.

## World & space

- **Scale:** Rooms 1 to 2 screens wide; towns several screens with 3 to 6 houses.
- **Interiors:** Top-down 3/4 view rooms with visible back and side walls, furniture as sprites.
- **Exteriors:** Streets with parallax mountains and clouds behind; house fronts in 3/4 view.
- **Threshold:** Walk through a door; fade out and in to the room.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| layering-depth | Stack 3 to 4 layers: sky, far land, mid buildings, near ground. | 3–4 planes |
| scale | Make a door 1.5 times the height of the character. | door ≈ 1.5× character |
| lighting-layers | Paint 2 light layers: the sky band and warm window light. | 2 layers |
| focal-point | Put the warm window light near the player. | 1 warm accent |

## Interface

- **Placement:** Framed boxes in the corners or along the bottom, 10–25% of the screen.
- **Type and icons:** A pixel font with lower case; small icons of 16 px with outlines.
- **Diegesis:** On top; frames are blue gradients or stone borders.

## Prompt primer

- **Positive:** 16-bit pixel art · SNES-era game graphics · parallax scrolling layers · rich pixel colour ramps · colour-banded sky gradient · hand-placed pixel shading · 3/4 view town · selective outlines · 256 colours · detailed sprite work
- **Negative:** smooth gradient · 3D render · photoreal · blur · vector art · modern UI

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Chrono Trigger | Square | 1995 |
| Sonic the Hedgehog | Sega | 1991 |
| Final Fantasy VI | Square | 1994 |
| Secret of Mana | Square | 1993 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Multiplane parallax (animation)

Flat layers move at different speeds by their distance, so that a flat picture gets depth. Origin: film & video, The Old Mill, 1937.

- Move each layer at a speed in proportion to its distance: a far layer at 20% to 50% of the speed of the front layer.
- Use 3 to 5 layers; more layers add load and no depth.
- Give a reduced-motion setting that stops the shift of the layers.

### Pixel grid (process)

A picture or a letter built from square cells that are each on or off, or one flat colour, with no curve and no smooth edge. Origin: film & video, Bell Labs, New Jersey, c. 1963.

- Draw an icon on a grid of 16 or 32 cells a side; fill each cell with one colour or leave it empty.
- Limit the palette to 1 to 16 colours; do not blend two colours inside one cell.
- Draw a diagonal as a stair of equal steps, for example 2 cells across for each 1 cell up.
- Show the image at an integer scale (2x, 3x, 4x) so that no cell blurs.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Electronic Gaming Monthly** (magazine, the United States, 1989–now), published the style. An American game magazine that covered the 16-bit console years with screens and reviews.
- **Nintendo Power** (magazine, Redmond, Washington, 1988–2012), published the style. A monthly magazine from Nintendo of America that printed maps, sprite art and screens of its games.
- **Sega** (studio, Tokyo, 1960–now), made the style. A Japanese game and hardware company that made the Mega Drive and fast parallax side-scrollers.
- **Square** (studio, Tokyo, 1986–2003), made the style. A Japanese game studio known for role-playing games with rich 16-bit pixel art and pre-rendered 3D rooms.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 224 | 224–240 px | surface, geometry |
| Colour depth (`colour_depth`) | 8 | 4–15 bit/px | palette |
| Camera projection (`camera_projection`) | side-view | side-view, top-down | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 4 | 3–6 | lighting, surface |
| Texel density (`texel_density`) | 24 | 16–32 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more depth**: move toward [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md) (HD-2D diorama). Keep the sprites; put them in a 3D diorama with depth of field and real light.
- If the user asks for **simpler**: move toward [`eight-bit-tile`](../eight-bit-tile/SKILL.md) (8-bit tile graphics). Cut the palette to about 25 colours and drop the parallax.

- **Came from (go here for a more orthodox version):** [`eight-bit-tile`](../eight-bit-tile/SKILL.md)
- **Led to (go here for a newer version):** [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md), [`pre-rendered-backgrounds`](../pre-rendered-backgrounds/SKILL.md)
- **Was rejected by:** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Kin in another domain:** [`pixel-art-web`](../pixel-art-web/SKILL.md), [`ukiyo-e`](../ukiyo-e/SKILL.md)
- **Nearest by vector profile:** [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md), [`eight-bit-tile`](../eight-bit-tile/SKILL.md), [`fantasy-console-pixel`](../fantasy-console-pixel/SKILL.md)

## Emotional target

A warm, rich nostalgia: the viewer sees a painted world with air in it and wants to explore.

**Keywords:** warm, rich, adventurous, nostalgic, painterly · **Brand archetypes:** explorer, hero, creator

## Sources

- [Wikipedia: Super Nintendo Entertainment System](https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System)
- [Wikipedia: Parallax scrolling](https://en.wikipedia.org/wiki/Parallax_scrolling)
- [Wikipedia: Pixel art](https://en.wikipedia.org/wiki/Pixel_art)

---

Generated from [`data/game/styles/sixteen-bit-sprite.json`](../../data/game/styles/sixteen-bit-sprite.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
