---
name: pbr-photoreal
description: "Apply the PBR photoreal style (2013–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: photoreal, unreal engine, pbr, current gen graphics, real-time realism."
domain: game
era: physically-based-and-indie
triggers:
  - "photoreal"
  - "unreal engine"
  - "pbr"
  - "current gen graphics"
  - "real-time realism"
vector_profile:
  render_fidelity: 5
  spatial_depth: 5
  stylisation: 1
  lighting_drama: 4
  surface_density: 5
---

# PBR photoreal

> If every material obeys the same physics of light, the world looks real from any angle and at any hour.

Materials follow physics: albedo, roughness and metalness answer one light model, so wood, stone and metal look right in any light. Scanned surfaces, global illumination and ray-traced reflections push game worlds close to architectural renders.

**Period:** 2013–now · **Era:** Physically based and indie · **Domain:** Video game · **Also called:** Physically based realism, Current-gen photoreal, Unreal photoreal

## When to load this skill

Load it when the user asks for: "photoreal", "unreal engine", "pbr", "current gen graphics", "real-time realism".

Good for: real-time architectural visualisation, interior walk-throughs, virtual showrooms, film previs.

Do not use it when:
- The brief wants a clear stylised identity.
- The budget does not allow scanned materials.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in PBR photoreal, you MUST:

1. Author every material as albedo, roughness, metalness and normal in calibrated ranges.
2. Use scanned or measured surfaces for stone, wood and fabric.
3. Light with physical units: a sun in lux, lamps in lumens, a real sky.
4. Use global illumination so light bounces between surfaces.
5. Grade the frame with a filmic tone curve, not a heavy colour cast.
6. Add small imperfections: dust, smudges, uneven wear.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Light painted into textures.
- **NEVER:** Albedo values outside the physical range.
- **NEVER:** Uniform gloss on every surface.
- **NEVER:** Heavy colour grading.
- **NEVER:** Stylised proportions.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■■■■` 5/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■■` 5/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■□□□□` 1/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■■■□` 4/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■■■` 5/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** third-person
- **Camera:** Free camera with physical lens: focal length, aperture and exposure.
- **Field of view:** about 60–90
- **Framing:** Cinematic, at eye height; architectural views in photo modes.

## Geometry & shape

- **Primitive:** A dense polygon mesh, or virtualised micro-polygons.
- **Budget:** Millions of triangles in view; 50,000–200,000 for a hero character.
- **Edge rule:** Smooth, anti-aliased silhouettes with real bevels.
- **Proportion:** Real scale; architectural accuracy.

## Surface & texture

- **Texture rule:** Scanned or procedural PBR sets with micro detail and wear.
- **Texel density:** about 512–2,048 px for each metre
- **Filtering:** Anisotropic; temporal anti-aliasing and upscaling.
- **Material model:** Physically based: metal-roughness or specular-gloss with energy conservation.

## Palette

- **Strategy:** Natural material colours under a neutral or a filmic grade; colour comes from light and material, not from a cast.
- **Colour depth:** HDR, 10 bits for each channel on output
- **On screen colours:** full HDR colour

**Colours**

| Name | Hex | Role |
|---|---|---|
| Limestone | `#C9C1B2` | walls |
| Oak | `#8A6440` | wood |
| Slate | `#4A4E52` | roof |
| Evening sky | `#7A8FB0` | sky |
| Warm lamp | `#FFC27A` | interior light |
| Moss | `#5A6A3A` | vegetation |

## Light & atmosphere

- **Model:** Physically based light with global illumination and ray-traced or screen-space reflections.
- **Shadows:** Soft, area-light shadows with contact hardening.
- **Atmosphere:** Volumetric fog, light shafts, physical sky.
- **Time of day:** A full physical day and weather cycle.

## World & space

- **Scale:** Real architectural scale.
- **Interiors:** Fully dressed rooms with real furniture, light and wear.
- **Exteriors:** Detailed streets and squares, scanned stone and dense vegetation.
- **Threshold:** Continuous; doors open into rooms with exposure adaptation.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| lighting-layers | Layer sky light, sun, practical lamps and bounce light. | 4 layers |
| sightlines | Set the camera at 160–170 cm in walk modes. | 160–170 cm |
| scale | Build at 1:1 real scale; a door is 2.0–2.1 m high. | 1:1 |
| layering-depth | Use volumetric fog to separate foreground, middle ground and distance. | 3 planes |

## Interface

- **Placement:** Minimal and contextual; fades when not in use.
- **Type and icons:** Clean sans fonts and thin icons.
- **Diegesis:** More in the world: lights, maps and devices.

## Prompt primer

- **Positive:** photoreal game engine render · physically based materials · global illumination · ray traced reflections · volumetric light · scanned stone and wood textures · filmic tone mapping · current-gen video game · real architectural scale · dusk light through windows
- **Negative:** cartoon · cel shading · pixel art · low poly · painted light · oversaturated

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Ryse: Son of Rome | Crytek | 2013 |
| The Last of Us Part II | Naughty Dog | 2020 |
| Red Dead Redemption 2 | Rockstar Games | 2018 |
| Unreal Engine 5 demo | Epic Games | 2020 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera eye height in a first-person game view (cm of world scale): 160–170; the view ends in fog or a wall within 10–40 m in a closed level |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Physically based rendering (technology)

A render model in which each material has measured albedo, roughness and metalness and conserves energy, so it looks right under any light. Origin: film & video, Walt Disney Animation Studios, Burbank, 2012.

- Keep albedo in a physical range: about 30–240 sRGB for non-metals.
- Set roughness and metalness from measured or scanned samples.
- Light with physical units and a real sky; let light bounce.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Epic Games** (studio, Cary, North Carolina, 1991–now), made the style. An American studio and engine maker: the gritty HD shooters of the 2000s, then physically based Unreal Engine.
- **Polycount** (platform, online, ?–now), gathered the style. An online forum and wiki for game artists, with much shared practice on hand-painted and PBR texture work.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 2160 | 1080–2160 px | surface, geometry |
| Colour depth (`colour_depth`) | 30 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | third-person | third-person, first-person | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 256 | 256–256 | lighting, surface |
| Texel density (`texel_density`) | 1024 | 512–2048 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more stylised**: move toward [`hand-painted-texture`](../hand-painted-texture/SKILL.md) (Hand-painted texture). Keep the layout; paint light into textures and push the shapes.
- If the user asks for **miniature**: move toward [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md) (HD-2D diorama). Add strong depth of field and a high camera, with pixel sprites.

- **Came from (go here for a more orthodox version):** [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md)
- **Was rejected by:** [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md)
- **Mixes well with:** [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md)
- **Kin in another domain:** [`ai-hyperreal`](../ai-hyperreal/SKILL.md), [`architectural-photography`](../architectural-photography/SKILL.md), [`photorealism`](../photorealism/SKILL.md)
- **Nearest by vector profile:** [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md), [`pre-rendered-backgrounds`](../pre-rendered-backgrounds/SKILL.md), [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md)

## Emotional target

Presence: the viewer forgets the screen and feels in the place.

**Keywords:** real, immersive, rich, cinematic, tactile · **Brand archetypes:** explorer, ruler

## Sources

- [Wikipedia: Physically based rendering](https://en.wikipedia.org/wiki/Physically_based_rendering)
- [Wikipedia: Unreal Engine](https://en.wikipedia.org/wiki/Unreal_Engine)
- [Karis, Real Shading in Unreal Engine 4, SIGGRAPH 2013](https://blog.selfshadow.com/publications/s2013-shading-course/)

---

Generated from [`data/game/styles/pbr-photoreal.json`](../../data/game/styles/pbr-photoreal.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
