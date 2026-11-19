---
name: hd-2d-diorama
description: "Apply the HD-2D diorama style (2018–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: hd-2d, octopath style, pixel diorama, tilt-shift pixel art, miniature rpg."
domain: game
era: physically-based-and-indie
triggers:
  - "hd-2d"
  - "octopath style"
  - "pixel diorama"
  - "tilt-shift pixel art"
  - "miniature rpg"
vector_profile:
  render_fidelity: 3
  spatial_depth: 4
  stylisation: 4
  lighting_drama: 4
  surface_density: 4
---

# HD-2D diorama

> Old pixel sprites inside modern light and depth of field read as a lovingly built miniature.

Pixel-art sprites stand in a 3D world built like a miniature model, seen from a high camera with strong depth of field, bloom and modern light. The world looks like a toy diorama lit at golden hour.

**Period:** 2018–now · **Era:** Physically based and indie · **Domain:** Video game · **Also called:** HD-2D, Pixel diorama, Tilt-shift pixel 3D

## When to load this skill

Load it when the user asks for: "hd-2d", "octopath style", "pixel diorama", "tilt-shift pixel art", "miniature rpg".

Good for: model-like city visuals, warm marketing scenes, interior vignettes in miniature, game environments.

Do not use it when:
- The brief needs eye-level immersion.
- The client needs a true-to-life image.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in HD-2D diorama, you MUST:

1. Keep characters as 2D pixel sprites of 32–64 px.
2. Build the world in 3D with pixel-art textures on simple geometry.
3. Use a high, slightly tilted camera and strong depth of field: sharp middle, blurred top and bottom.
4. Light with modern dynamic light: lamps, bloom and soft shadows.
5. Add particles: dust, embers, light shafts.
6. Grade toward warm golden hours or deep blue nights.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A flat 2D view with no depth.
- **NEVER:** High-poly characters.
- **NEVER:** Sharp focus across the whole frame.
- **NEVER:** Flat even light.
- **NEVER:** Photo textures.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■■□□` 3/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■□` 4/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■□` 4/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■■■□` 4/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■■□` 4/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** third-person
- **Camera:** High fixed or slow-tracking camera, tilted down 30–45°.
- **Field of view:** about 25–40, long lens
- **Framing:** A miniature view: rooftops and streets in frame, sharp band in the middle.

## Geometry & shape

- **Primitive:** Pixel sprites on billboards in a simple 3D mesh world.
- **Budget:** Low-to-mid poly world; 2D sprites of 32–64 px.
- **Edge rule:** Pixel edges on sprites; smooth 3D edges blurred by depth of field.
- **Proportion:** Miniature: chunky buildings and small figures.

## Surface & texture

- **Texture rule:** Pixel-art textures on 3D geometry, with modern normal maps on some surfaces.
- **Texel density:** about 32–64 px for each metre on pixel faces
- **Filtering:** Nearest on sprites; smooth on 3D surfaces.
- **Material model:** Modern lit materials with pixel-art albedo.

## Palette

- **Strategy:** Warm, saturated golden light against deep blue shadows; colour comes from the light.
- **Colour depth:** 24 bits, HDR
- **On screen colours:** full colour

**Colours**

| Name | Hex | Role |
|---|---|---|
| Golden hour | `#F8B860` | key light |
| Deep blue | `#1E2A5A` | shadow |
| Brick | `#A84A30` | walls |
| Moss | `#5A7A3A` | ground |
| Ember | `#FF7A30` | lamps |
| Mist | `#C8D8E8` | haze |

## Light & atmosphere

- **Model:** Real-time dynamic light with bloom and point lights.
- **Shadows:** Soft dynamic shadows from lamps and the sun.
- **Atmosphere:** Depth of field, bloom, light shafts, dust and embers.
- **Time of day:** Golden hour, lantern-lit night or a misty dawn.

## World & space

- **Scale:** Miniature: a street fits in the frame like a model.
- **Interiors:** Rooms seen from above at an angle, warm lamps, pixel furniture.
- **Exteriors:** Town squares with fountains, steps and rooftops in a tilt-shift view.
- **Threshold:** A fade to a room scene.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| layering-depth | Blur the top and bottom bands; keep a sharp middle band of about 30% of the height. | sharp band ≈ 30% |
| lighting-layers | Use 3 layers: golden key, blue ambient, warm lamp points. | 3 layers |
| focal-point | Light the player area with the warmest light. | 1 warm pool |
| scale | Make buildings chunky and figures small, as in a 1:87 model. | miniature |

## Interface

- **Placement:** Framed boxes and menus on the sides, 10–20% of the screen.
- **Type and icons:** Classic serif and pixel-inspired fonts.
- **Diegesis:** On top, in ornate frames.

## Prompt primer

- **Positive:** HD-2D diorama · pixel art sprites in 3D world · tilt-shift depth of field · miniature town · golden hour lighting · bloom · high angle camera · lantern light · dust particles · deep blue shadows
- **Negative:** flat 2D · high poly characters · sharp focus everywhere · flat lighting · photoreal people

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Octopath Traveler | Square Enix and Acquire | 2018 |
| Triangle Strategy | Square Enix and Artdink | 2022 |
| Live A Live remake | Square Enix | 2022 |
| Dragon Quest III HD-2D Remake | Square Enix | 2024 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Bloom and HDR (technology)

Render light in a high dynamic range, map it down to the screen, and let the brightest areas glow past their edges as on a camera lens. Origin: video game, Valve, Bellevue, Washington, 2005.

- Render in a floating-point buffer; keep sky and lamps 10–100 times brighter than walls.
- Blur pixels above a threshold and add them back as a glow.
- Map the range to the screen with a tone curve and eye adaptation.

### Tilt-shift (tool)

Lens or camera movements that keep vertical lines parallel and move the plane of focus; a building stands upright and sharp. Origin: photography, Vienna, 1904.

- Keep the back of the camera vertical and shift the lens up by 10 to 20 mm, so that vertical lines stay parallel.
- Tilt the lens by 2° to 8° to turn the plane of focus along the ground for depth at a small stop.
- Close the lens to f/11 to f/22 for full depth of field.
- In an editor, use a narrow band of focus and a strong blur outside it to fake a miniature.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Famitsu** (magazine, Tokyo, 1986–now), published the style. A Japanese weekly game magazine that reviews and previews games, from 8-bit to current hardware.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 1080 | 720–2160 px | surface, geometry |
| Colour depth (`colour_depth`) | 24 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | third-person | third-person, isometric | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 64 | 16–256 | lighting, surface |
| Texel density (`texel_density`) | 48 | 32–64 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **flatter**: move toward [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md) (16-bit sprite and parallax). Drop the 3D and the depth of field; keep the sprites and parallax.
- If the user asks for **more real**: move toward [`pbr-photoreal`](../pbr-photoreal/SKILL.md) (PBR photoreal). Replace the sprites with 3D figures and physical materials.

- **Came from (go here for a more orthodox version):** [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md)
- **Mixes well with:** [`pbr-photoreal`](../pbr-photoreal/SKILL.md)
- **Kin in another domain:** [`new-topographics`](../new-topographics/SKILL.md), [`planimetric-symmetry`](../planimetric-symmetry/SKILL.md)
- **Nearest by vector profile:** [`pre-rendered-backgrounds`](../pre-rendered-backgrounds/SKILL.md), [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md), [`hand-painted-texture`](../hand-painted-texture/SKILL.md)

## Emotional target

Tender nostalgia: the viewer sees a precious miniature world in warm light.

**Keywords:** nostalgic, warm, magical, miniature, cinematic · **Brand archetypes:** magician, explorer, innocent

## Sources

- [Wikipedia: HD-2D](https://en.wikipedia.org/wiki/HD-2D)
- [Wikipedia: Octopath Traveler](https://en.wikipedia.org/wiki/Octopath_Traveler)
- [Wikipedia: Tilt–shift photography](https://en.wikipedia.org/wiki/Tilt–shift_photography)

---

Generated from [`data/game/styles/hd-2d-diorama.json`](../../data/game/styles/hd-2d-diorama.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
