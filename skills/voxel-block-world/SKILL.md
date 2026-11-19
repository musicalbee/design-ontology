---
name: voxel-block-world
description: "Apply the Voxel block world style (2009–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: voxel, blocky, minecraft style, cube world, block building."
domain: game
era: programmable-shader
triggers:
  - "voxel"
  - "blocky"
  - "minecraft style"
  - "cube world"
  - "block building"
vector_profile:
  render_fidelity: 2
  spatial_depth: 5
  stylisation: 4
  lighting_drama: 2
  surface_density: 2
---

# Voxel block world

> If the world is a grid of equal blocks, anyone can build in it, and the grid itself becomes the style.

The world is a grid of 1 m cubes, each with a 16×16 pixel texture on its faces. Every house, room and hill is built block by block, with nearest-neighbour pixels and simple face light.

**Period:** 2009–now · **Era:** Programmable shader · **Domain:** Video game · **Also called:** Blocky voxel, Block-building look, Cube world

## When to load this skill

Load it when the user asks for: "voxel", "blocky", "minecraft style", "cube world", "block building".

Good for: participatory design workshops, children's spaces, modular furniture concepts, massing studies.

Do not use it when:
- The brief needs curves or real materials.
- The audience expects luxury.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Voxel block world, you MUST:

1. Build every surface from cubes of 1 m on a 3D grid.
2. Texture each face with 16×16 px pixel art, scaled with no filter.
3. Light each face by its direction: top brightest, sides mid, bottom darkest.
4. Keep characters blocky: a body of rectangular boxes.
5. Use clear, saturated material colours: grass green, dirt brown, stone grey.
6. Let builds read as stacked blocks; avoid hiding the grid.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth curves or bevelled edges.
- **NEVER:** High-resolution or filtered textures.
- **NEVER:** Objects off the block grid.
- **NEVER:** Realistic characters.
- **NEVER:** Photographic materials.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■□□□` 2/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■■` 5/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■□` 4/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■□□□` 2/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■□□□` 2/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** first-person
- **Camera:** Free first-person, or third-person behind the player.
- **Field of view:** about 70–90
- **Framing:** Eye level at 1.6 blocks; wide views over hills of blocks.

## Geometry & shape

- **Primitive:** A cube voxel of 1 m on each side.
- **Budget:** Chunks of 16×16 columns; a view of hundreds of thousands of blocks.
- **Edge rule:** Hard 90° edges; every edge is on the grid.
- **Proportion:** A character is 1.8 blocks high and 0.6 wide; a door is 1 by 2 blocks.

## Surface & texture

- **Texture rule:** A 16×16 px tile for each material face, with simple noise in pixel art.
- **Texel density:** 16 px for each metre
- **Filtering:** Nearest neighbour.
- **Material model:** No material model; face light and smooth ambient occlusion only.

## Palette

- **Strategy:** Natural, saturated material colours; each block is one recognisable material.
- **Colour depth:** 24 bits, used in small pixel palettes
- **On screen colours:** full colour

**Colours**

| Name | Hex | Role |
|---|---|---|
| Grass | `#5D9B3A` | top faces |
| Dirt | `#8A5A3A` | ground |
| Stone | `#7F7F7F` | rock |
| Oak plank | `#B08A50` | buildings |
| Water | `#3A5AE0` | water |
| Sky | `#8AB4FF` | sky |
| Torch | `#FFD24A` | light |

## Light & atmosphere

- **Model:** Light levels from 0 to 15 that spread block by block from the sky and torches.
- **Shadows:** Darker blocks under cover; no sharp cast shadows by default.
- **Atmosphere:** Distance fog and square clouds.
- **Time of day:** A full day cycle with a square sun and moon.

## World & space

- **Scale:** 1 block = 1 m; ceilings of 3 blocks are common.
- **Interiors:** Rooms built from planks and stone with block furniture.
- **Exteriors:** Villages of block houses on blocky hills, paths of gravel blocks.
- **Threshold:** A 1×2 door block opens with no break.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Make a door 1 block wide and 2 blocks high for a figure 1.8 blocks high. | door = 1×2 m |
| circulation | Keep paths 2–3 blocks wide. | 2–3 m |
| lighting-layers | Use 2 layers: sky light and torch light. | 2 layers |

## Interface

- **Placement:** A bar of item slots at the bottom centre, about 5% of the screen.
- **Type and icons:** A pixel font and pixel-art item icons.
- **Diegesis:** On top; signs in the world are blocks.

## Prompt primer

- **Positive:** voxel block world · cube blocks · 16x16 pixel textures · blocky terrain · block house · nearest-neighbour pixels · face-shaded cubes · square clouds · blocky character
- **Negative:** smooth curves · high resolution textures · photoreal · rounded edges · realistic people · blur

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Infiniminer | Zachtronics | 2009 |
| Minecraft | Mojang | 2011 |
| Cube World | Picroma | 2013 |
| Teardown | Tuxedo Labs | 2022 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle; clear width of a main path for a following camera (m of world scale): ≥ 3, or ≥ 2 tiles in a tile game |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Voxel (technology)

A value on a regular 3D grid: the volume version of a pixel. A world of voxels is built, lit and changed cell by cell. Origin: video game, NovaLogic, Calabasas, California, 1992.

- Fix one cell size for the whole world, for example 1 m.
- Keep every surface on the grid; no free rotation.
- Light each cell by the light level of its neighbours.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **itch.io** (platform, online, 2013–now), sold the style. An open store for independent games, where most PS1-style revival games are published.
- **Microsoft** (company, Redmond, ?–now), funded the style. US software company. It bought Mojang in 2014 for 2.5 billion dollars and put billions of dollars into OpenAI from 2019.
- **Mojang Studios** (studio, Stockholm, 2009–now), made the style. A Swedish studio that makes Minecraft.
- **TIGSource** (platform, online, ?–now), gathered the style. An online forum for independent game makers where many early block and pixel games were shown.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 1080 | 480–2160 px | surface, geometry |
| Colour depth (`colour_depth`) | 24 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | first-person | first-person, third-person, isometric | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 4 | 3–16 | lighting, surface |
| Texel density (`texel_density`) | 16 | 16–32 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md) (Flat geometric isometric). Keep the cubes; use flat pastel faces and an isometric camera.
- If the user asks for **more retro**: move toward [`eight-bit-tile`](../eight-bit-tile/SKILL.md) (8-bit tile graphics). Collapse to a 2D side view on an 8×8 tile grid.

- **Came from (go here for a more orthodox version):** [`eight-bit-tile`](../eight-bit-tile/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md)
- **Kin in another domain:** [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Nearest by vector profile:** [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md), [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md), [`hand-painted-texture`](../hand-painted-texture/SKILL.md)

## Emotional target

Open creative play: the viewer sees a world that invites them to build.

**Keywords:** creative, playful, simple, open, modular · **Brand archetypes:** creator, explorer, everyman

## Sources

- [Wikipedia: Voxel](https://en.wikipedia.org/wiki/Voxel)
- [Wikipedia: Minecraft](https://en.wikipedia.org/wiki/Minecraft)
- [Wikipedia: Infiniminer](https://en.wikipedia.org/wiki/Infiniminer)

---

Generated from [`data/game/styles/voxel-block-world.json`](../../data/game/styles/voxel-block-world.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
