---
name: cel-shaded-3d
description: "Apply the Cel-shaded 3D style (2000–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: cel shaded, toon shader, anime 3d, cartoon 3d, wind waker style."
domain: game
era: programmable-shader
triggers:
  - "cel shaded"
  - "toon shader"
  - "anime 3d"
  - "cartoon 3d"
  - "wind waker style"
vector_profile:
  render_fidelity: 3
  spatial_depth: 5
  stylisation: 5
  lighting_drama: 2
  surface_density: 2
---

# Cel-shaded 3D

> Real-time 3D does not need to imitate a photograph; it can imitate a drawing and keep its clarity at any angle.

3D models drawn to look like a cartoon or an animation cel: light falls in 2 or 3 flat steps, black outlines trace each shape, and colours stay bright and flat. A full 3D world looks hand drawn.

**Period:** 2000–now · **Era:** Programmable shader · **Domain:** Video game · **Also called:** Toon shading, Cel shading, Anime 3D

## When to load this skill

Load it when the user asks for: "cel shaded", "toon shader", "anime 3d", "cartoon 3d", "wind waker style".

Good for: playful brand worlds, kids' and family spaces, animated explainers, stylised visualisation of a concept.

Do not use it when:
- The brief needs material truth for a client sale.
- The tone must be serious or luxury.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Cel-shaded 3D, you MUST:

1. Light each surface in 2 or 3 flat value steps with a hard edge between them.
2. Draw an outline of 1–4 px around each silhouette and inner crease.
3. Use saturated flat base colours; add texture only as painted strokes.
4. Keep shapes simple and exaggerated: big heads, chunky buildings.
5. Use a bright, clear sky with stylised clouds.
6. Keep the outline weight the same at any distance from the camera.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth gradient shading.
- **NEVER:** Photographic textures.
- **NEVER:** Thin or missing outlines.
- **NEVER:** Grey, desaturated palettes.
- **NEVER:** Realistic proportions.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■■□□` 3/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■■` 5/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■■` 5/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■□□□` 2/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■□□□` 2/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** third-person
- **Camera:** A free or a following camera in a full 3D world.
- **Field of view:** about 50–70
- **Framing:** Wide, clear views with the player at a third of the frame.

## Geometry & shape

- **Primitive:** A polygon mesh with flat normals for clean shading steps.
- **Budget:** 5,000–30,000 triangles for a character.
- **Edge rule:** Black or dark-hue ink lines on silhouettes and creases.
- **Proportion:** Exaggerated: big hands, round shapes, chunky buildings.

## Surface & texture

- **Texture rule:** Flat colour fills with a few painted strokes; no photo texture.
- **Texel density:** about 64–256 px for each metre
- **Filtering:** Smooth, with mipmaps.
- **Material model:** A step ramp: the light value is mapped to 2 or 3 flat tones.

## Palette

- **Strategy:** Bright, saturated base colours with a cool shadow tone of the same hue family.
- **Colour depth:** 24 bits
- **On screen colours:** full colour, used in flat areas

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sky blue | `#5EC8F0` | sky |
| Grass green | `#6CC04A` | ground |
| Roof orange | `#F07838` | roofs |
| Cream wall | `#F5E6C4` | walls |
| Shadow violet | `#5A5490` | shadow tone |
| Ink | `#1A1A24` | outline |

## Light & atmosphere

- **Model:** Per-pixel light quantised into 2 or 3 steps.
- **Shadows:** Hard-edged cast shadows in one flat tone.
- **Atmosphere:** Stylised clouds, sparkles and speed lines; little fog.
- **Time of day:** Swaps of the light and shadow tones: warm for dusk, blue for night.

## World & space

- **Scale:** Slightly enlarged and simplified: wide doors, round buildings.
- **Interiors:** Simple rooms with a few iconic props, bright walls and clean floors.
- **Exteriors:** Open squares and streets with bold silhouettes and big trees.
- **Threshold:** A door opens with no break, or a short fade.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Mark the goal with the highest colour contrast in the frame. | 1 saturated accent |
| scale | Make doors and props 1.2–1.5 times real scale. | 1.2–1.5× |
| lighting-layers | Use 2 layers: one sun and one flat ambient tone. | 2 layers |

## Interface

- **Placement:** Bold shapes in the corners, about 5–10% of the screen.
- **Type and icons:** Rounded display fonts and outlined icons that match the world.
- **Diegesis:** Mostly on top, drawn in the same ink style.

## Prompt primer

- **Positive:** cel-shaded 3D · toon shading · bold black outlines · flat colour shading steps · anime style 3D world · bright saturated colours · hard-edged shadows · stylised clouds · cartoon proportions
- **Negative:** photoreal · gradient shading · gritty texture · desaturated · realistic proportions · film grain

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Jet Set Radio | Smilebit | 2000 |
| The Legend of Zelda: The Wind Waker | Nintendo | 2002 |
| Ōkami | Clover Studio | 2006 |
| Genshin Impact | miHoYo | 2020 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Cel shading (technology, invented here)

A render method that maps the light on a 3D surface to 2 or 3 flat tones and draws ink outlines, so 3D looks like a drawn animation cel. Origin: video game, Tokyo, 2000.

- Quantise the light value into 2 or 3 bands with a hard edge.
- Draw outlines 1–4 px wide on silhouettes, by an inverted hull or an edge filter.
- Keep base colours flat; carry the shape with the bands and the lines.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Smilebit** (studio, Tokyo, 2000–2004), launched the style. A Sega studio that made Jet Set Radio, an early cel-shaded 3D game.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 1080 | 480–2160 px | surface, geometry |
| Colour depth (`colour_depth`) | 24 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | third-person | third-person, first-person, isometric | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 2 | 2–3 | lighting, surface |
| Texel density (`texel_density`) | 128 | 32–512 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **softer and painted**: move toward [`hand-painted-texture`](../hand-painted-texture/SKILL.md) (Hand-painted texture). Drop the outlines; paint light and shade into the textures.
- If the user asks for **flatter**: move toward [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md) (Flat geometric isometric). Lock the camera to isometric and remove the outlines for pastel flat faces.

- **Came from (go here for a more orthodox version):** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Was rejected by:** [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md)
- **Mixes well with:** [`hand-painted-texture`](../hand-painted-texture/SKILL.md)
- **Kin in another domain:** [`flat-design`](../flat-design/SKILL.md), [`pop-art-painting`](../pop-art-painting/SKILL.md), [`ukiyo-e`](../ukiyo-e/SKILL.md)
- **Nearest by vector profile:** [`hand-painted-texture`](../hand-painted-texture/SKILL.md), [`voxel-block-world`](../voxel-block-world/SKILL.md), [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)

## Emotional target

Joyful clarity: the viewer sees a drawn world that is light, bright and easy to read.

**Keywords:** joyful, bright, playful, clear, animated · **Brand archetypes:** jester, hero, innocent

## Sources

- [Wikipedia: Cel shading](https://en.wikipedia.org/wiki/Cel_shading)
- [Wikipedia: Jet Set Radio](https://en.wikipedia.org/wiki/Jet_Set_Radio)
- [Wikipedia: The Legend of Zelda: The Wind Waker](https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_The_Wind_Waker)

---

Generated from [`data/game/styles/cel-shaded-3d.json`](../../data/game/styles/cel-shaded-3d.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
