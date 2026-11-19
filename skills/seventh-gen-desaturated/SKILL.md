---
name: seventh-gen-desaturated
description: "Apply the Seventh-generation desaturated bloom style (2005–2013) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: gritty hd, brown and grey, bloom heavy, 2008 game graphics, desaturated realism."
domain: game
era: programmable-shader
triggers:
  - "gritty hd"
  - "brown and grey"
  - "bloom heavy"
  - "2008 game graphics"
  - "desaturated realism"
vector_profile:
  render_fidelity: 4
  spatial_depth: 5
  stylisation: 2
  lighting_drama: 4
  surface_density: 4
---

# Seventh-generation desaturated bloom

> Realism is grit: a serious world is grey, worn and wet, and light blooms out of the dark.

The first HD consoles push normal maps, bloom and HDR light, and art direction answers with grey, brown and teal: desaturated ruins, heavy contrast, glowing windows and wet, specular surfaces.

**Period:** 2005–2013 · **Era:** Programmable shader · **Domain:** Video game · **Also called:** Brown and grey era, Gritty HD, Bloom and brown

## When to load this skill

Load it when the user asks for: "gritty hd", "brown and grey", "bloom heavy", "2008 game graphics", "desaturated realism".

Good for: industrial and post-apocalyptic themes, escape rooms, military or survival attractions, period game references.

Do not use it when:
- The brief needs warmth or a family tone.
- The space must sell as bright and new.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Seventh-generation desaturated bloom, you MUST:

1. Desaturate the palette to browns, greys and a teal or a sepia grade.
2. Use normal maps on every surface for cracks, bolts and grime.
3. Let bright areas bloom: windows and sky glow past their edges.
4. Make surfaces wet and specular, with sharp highlights.
5. Use high contrast: crushed shadows and blown highlights.
6. Fill spaces with debris, cover and ruins.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Saturated, cheerful colour.
- **NEVER:** Flat or drawn shading.
- **NEVER:** Clean, empty surfaces.
- **NEVER:** Soft, even light.
- **NEVER:** Stylised proportions.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■■■□` 4/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■■` 5/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■□□□` 2/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■■■□` 4/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■■□` 4/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** third-person
- **Camera:** Over the shoulder, low and close.
- **Field of view:** about 60–70
- **Framing:** Player at the left third; heavy cover in the foreground.

## Geometry & shape

- **Primitive:** A normal-mapped polygon mesh.
- **Budget:** 10,000–20,000 triangles for a character; dense debris.
- **Edge rule:** Hard edges hidden by normal-map bevels; visible aliasing at 720p.
- **Proportion:** Realistic to bulky: wide shoulders and big armour.

## Surface & texture

- **Texture rule:** Normal, diffuse and specular maps with grime, cracks and wet patches.
- **Texel density:** about 256–512 px for each metre
- **Filtering:** Trilinear or anisotropic.
- **Material model:** Blinn-Phong with normal and specular maps; strong rim light.

## Palette

- **Strategy:** Desaturated browns and greys with a teal or a sepia grade on the whole frame.
- **Colour depth:** 24 bits, HDR tone-mapped
- **On screen colours:** full colour, graded down

**Colours**

| Name | Hex | Role |
|---|---|---|
| Concrete grey | `#6E6A64` | walls |
| Mud brown | `#5A4A38` | ground |
| Gun metal | `#3A3E44` | metal |
| Teal grade | `#4A6A6E` | shadow grade |
| Bloom white | `#F4EAD0` | highlights |
| Sodium orange | `#D88A3A` | fire and lamps |

## Light & atmosphere

- **Model:** Per-pixel dynamic light with HDR tone mapping and bloom.
- **Shadows:** Sharp shadow maps with visible steps; screen-space ambient occlusion.
- **Atmosphere:** Bloom, dust, smoke, lens flare and god rays.
- **Time of day:** Overcast, dusk or a stormy grey day.

## World & space

- **Scale:** Real scale with oversized cover objects.
- **Interiors:** Ruined rooms, warehouses and bunkers with debris and broken walls.
- **Exteriors:** Bombed streets, grey squares and wet alleys.
- **Threshold:** A door kicked open, or a continuous walk with no load.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| lighting-layers | Use 3 layers: grey ambient, a blooming window or sky key, and fire accents. | 3 layers |
| circulation | Lay out paths as lanes between cover objects. | cover every 5–8 m |
| layering-depth | Put debris in the foreground, the player in the middle, a bright opening behind. | 3 planes |

## Interface

- **Placement:** Minimal, grey and translucent in the corners, about 5% of the screen.
- **Type and icons:** Thin military sans fonts and simple line icons.
- **Diegesis:** Some on the weapon or in the world; the rest on top.

## Prompt primer

- **Positive:** seventh generation console graphics · desaturated brown and grey · heavy bloom · HDR lighting · normal mapped surfaces · wet specular highlights · teal colour grade · gritty ruined street · 2008 video game screenshot
- **Negative:** saturated colour · cartoon · cel shading · clean surfaces · pastel · flat lighting

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Gears of War | Epic Games | 2006 |
| Fallout 3 | Bethesda Game Studios | 2008 |
| Call of Duty 4: Modern Warfare | Infinity Ward | 2007 |
| Killzone 2 | Guerrilla Games | 2009 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `circulation` | Circulation | The routes through a space and the clear widths that they keep free of furniture. | main route clear width (cm): 90–120; secondary route clear width (cm): 60–75; seat edge to low table (cm): 35–50; wheelchair route (cm): 90 or more; 150 turning circle; clear width of a main path for a following camera (m of world scale): ≥ 3, or ≥ 2 tiles in a tile game |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Bloom and HDR (technology)

Render light in a high dynamic range, map it down to the screen, and let the brightest areas glow past their edges as on a camera lens. Origin: video game, Valve, Bellevue, Washington, 2005.

- Render in a floating-point buffer; keep sky and lamps 10–100 times brighter than walls.
- Blur pixels above a threshold and add them back as a glow.
- Map the range to the screen with a tone curve and eye adaptation.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Epic Games** (studio, Cary, North Carolina, 1991–now), made the style. An American studio and engine maker: the gritty HD shooters of the 2000s, then physically based Unreal Engine.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 720 | 600–1080 px | surface, geometry |
| Colour depth (`colour_depth`) | 24 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | third-person | third-person, first-person | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 256 | 128–256 | lighting, surface |
| Texel density (`texel_density`) | 384 | 128–512 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more real**: move toward [`pbr-photoreal`](../pbr-photoreal/SKILL.md) (PBR photoreal). Keep the realism; replace bloom and grime with physical materials and balanced light.
- If the user asks for **cheerful**: move toward [`hand-painted-texture`](../hand-painted-texture/SKILL.md) (Hand-painted texture). Raise saturation and paint warm light into the surfaces.

- **Came from (go here for a more orthodox version):** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Led to (go here for a newer version):** [`pbr-photoreal`](../pbr-photoreal/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md)
- **Was rejected by:** [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md), [`voxel-block-world`](../voxel-block-world/SKILL.md)
- **Kin in another domain:** [`brutalist-architecture`](../brutalist-architecture/SKILL.md), [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md), [`industrial-loft-interior`](../industrial-loft-interior/SKILL.md)
- **Nearest by vector profile:** [`pbr-photoreal`](../pbr-photoreal/SKILL.md), [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md), [`pre-rendered-backgrounds`](../pre-rendered-backgrounds/SKILL.md)

## Emotional target

Grim tension: the viewer feels weight, danger and a world worn down.

**Keywords:** gritty, heavy, tense, serious, bleak · **Brand archetypes:** hero, outlaw

## Sources

- [Wikipedia: Seventh generation of video game consoles](https://en.wikipedia.org/wiki/Seventh_generation_of_video_game_consoles)
- [Wikipedia: Bloom (shader effect)](https://en.wikipedia.org/wiki/Bloom_(shader_effect))
- [Wikipedia: High-dynamic-range rendering](https://en.wikipedia.org/wiki/High-dynamic-range_rendering)

---

Generated from [`data/game/styles/seventh-gen-desaturated.json`](../../data/game/styles/seventh-gen-desaturated.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
