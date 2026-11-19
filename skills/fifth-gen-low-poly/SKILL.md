---
name: fifth-gen-low-poly
description: "Apply the Fifth-generation low poly style (1994–2001) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: ps1 graphics, n64 style, low poly 90s, retro 3d, playstation one look."
domain: game
era: early-polygon
triggers:
  - "ps1 graphics"
  - "n64 style"
  - "low poly 90s"
  - "retro 3d"
  - "playstation one look"
vector_profile:
  render_fidelity: 2
  spatial_depth: 4
  stylisation: 3
  lighting_drama: 2
  surface_density: 2
---

# Fifth-generation low poly

> A world of few polygons can still be entered: a box with a picture on each face becomes a room the camera walks into.

Real-time 3D at about 320×240: characters of a few hundred polygons, small textures of 64 or 128 px, vertex lighting and fog at the far plane. On one console the textures warp and the vertices jitter; on another they blur.

**Period:** 1994–2001 · **Era:** Early polygon · **Domain:** Video game · **Also called:** PS1 look, N64 look, 32/64-bit 3D

## When to load this skill

Load it when the user asks for: "ps1 graphics", "n64 style", "low poly 90s", "retro 3d", "playstation one look".

Good for: retro 3D scenes, music videos and covers, uncanny interior visuals, low-cost real-time demos.

Do not use it when:
- The brief needs a sales-grade realistic render.
- The client expects clean modern 3D.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Fifth-generation low poly, you MUST:

1. Build characters from 300 to 1,000 triangles and rooms from simple boxes.
2. Use textures of 64×64 to 128×128 px, with detail painted in.
3. Light with per-vertex colour; bake shadows into the textures.
4. End the draw distance in fog of one colour.
5. Keep the frame at 320×240 or similar, and accept stepped edges.
6. Use a free or a following third-person camera.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** High polygon counts or smooth curves.
- **NEVER:** Normal maps or per-pixel light.
- **NEVER:** Large, sharp textures.
- **NEVER:** Long clear views to the horizon.
- **NEVER:** Physically based materials.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■□□□` 2/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■□` 4/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■□□` 3/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■□□□` 2/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■□□□` 2/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** third-person
- **Camera:** Follows the player behind the shoulder, or is fixed per room.
- **Field of view:** about 60–75
- **Framing:** Player at 1/4 to 1/3 of the frame height; fog closes the far distance.

## Geometry & shape

- **Primitive:** A flat-shaded or Gouraud-shaded triangle.
- **Budget:** About 300–1,000 triangles for a character; a few thousand in view.
- **Edge rule:** Hard polygon facets; no anti-alias on the console with warp, soft blur on the console with a filter.
- **Proportion:** Large heads and hands; doors and rooms 1.5 times real scale for the camera.

## Surface & texture

- **Texture rule:** Small textures painted with brick, wood and dirt; the same texture tiles across large walls.
- **Texel density:** about 32–64 px for each metre
- **Filtering:** Nearest with affine warp (PlayStation) or 3-point blur (N64).
- **Material model:** No material model; a texture times a vertex colour.

## Palette

- **Strategy:** Muted, slightly dirty colours in the textures; fog in one tone fills the distance.
- **Colour depth:** 15 or 16 bits, with dither
- **On screen colours:** thousands, with visible dither

**Colours**

| Name | Hex | Role |
|---|---|---|
| Fog grey | `#8A8F96` | distance |
| Concrete | `#77706A` | walls |
| Rust | `#8C4A2E` | accents |
| Grass | `#4E6B32` | ground |
| Sodium lamp | `#E8B060` | light |
| Night blue | `#1E2638` | sky |

## Light & atmosphere

- **Model:** Per-vertex colour; a light is a brighter set of vertex colours.
- **Shadows:** A dark blob under each character; shadows baked into textures.
- **Atmosphere:** Distance fog in one colour; few particles.
- **Time of day:** A change of fog colour and vertex tint.

## World & space

- **Scale:** Rooms and doors 1.5 times real size so the camera fits.
- **Interiors:** Box rooms with tiled textures, few props, low ceilings for the draw distance.
- **Exteriors:** Small open areas walled by cliffs or buildings, closed by fog.
- **Threshold:** A door plays a short load animation, or a cut.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Build doors and corridors 1.5 times real size so the following camera fits. | 1.5× real scale |
| sightlines | Close long views with a wall, a turn or fog within about 40 m. | ≤ 40 m view |
| circulation | Make corridors at least 3 m wide for the camera. | ≥ 3 m |

## Interface

- **Placement:** Small icons and bars in the corners, 5–10% of the screen.
- **Type and icons:** Bitmap fonts with bevels; icons as small textured quads.
- **Diegesis:** On top; some maps and notes as objects in the world.

## Prompt primer

- **Positive:** PS1-era low poly 3D · low resolution textures · affine texture warping · vertex jitter · distance fog · 320x240 render · flat polygons · 1990s 3D game · dithered colours · baked lighting
- **Negative:** high poly · photoreal · ray tracing · sharp 4K textures · smooth shading · depth of field

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Super Mario 64 | Nintendo | 1996 |
| Metal Gear Solid | Konami | 1998 |
| The Legend of Zelda: Ocarina of Time | Nintendo | 1998 |
| Silent Hill | Konami | 1999 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera eye height in a first-person game view (cm of world scale): 160–170; the view ends in fog or a wall within 10–40 m in a closed level |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle; clear width of a main path for a following camera (m of world scale): ≥ 3, or ≥ 2 tiles in a tile game |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Affine texture warp (technology)

Texture mapping with no perspective correction: the texture is spread in a straight line across each triangle, so it bends and swims as the camera moves. Origin: video game, Sony, Tokyo, 1994.

- Map textures in screen space with no division by depth.
- Snap vertices to whole pixels so geometry jitters.
- Split large faces into smaller triangles to limit the warp.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Edge** (magazine, Bath, England, 1993–now), published the style. A British game magazine with a focus on design and art direction since the first polygon consoles.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 240 | 224–480 px | surface, geometry |
| Colour depth (`colour_depth`) | 16 | 15–16 bit/px | palette |
| Camera projection (`camera_projection`) | third-person | third-person, fixed-camera, first-person | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 8 | 2–32 | lighting, surface |
| Texel density (`texel_density`) | 48 | 16–64 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more retro and eerie**: move toward [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md) (Low-poly PS1 revival). Keep the polygons; push the fog, the jitter and the dark palette.
- If the user asks for **more polished**: move toward [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md) (Cel-shaded 3D). Keep the shapes; add outlines and a 2-step light ramp.

- **Led to (go here for a newer version):** [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md), [`hand-painted-texture`](../hand-painted-texture/SKILL.md), [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md), [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md)
- **Mixes well with:** [`pre-rendered-backgrounds`](../pre-rendered-backgrounds/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Nearest by vector profile:** [`voxel-block-world`](../voxel-block-world/SKILL.md), [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md), [`hand-painted-texture`](../hand-painted-texture/SKILL.md)

## Emotional target

A strange, half-solid world: the viewer feels a place that is real enough to enter and a little uncanny.

**Keywords:** uncanny, nostalgic, raw, blocky, foggy · **Brand archetypes:** explorer, outlaw

## Sources

- [Wikipedia: PlayStation (console)](https://en.wikipedia.org/wiki/PlayStation_(console))
- [Wikipedia: Nintendo 64](https://en.wikipedia.org/wiki/Nintendo_64)
- [Wikipedia: Fifth generation of video game consoles](https://en.wikipedia.org/wiki/Fifth_generation_of_video_game_consoles)

---

Generated from [`data/game/styles/fifth-gen-low-poly.json`](../../data/game/styles/fifth-gen-low-poly.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
