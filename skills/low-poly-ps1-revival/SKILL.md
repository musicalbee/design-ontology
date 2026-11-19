---
name: low-poly-ps1-revival
description: "Apply the Low-poly PS1 revival style (2018–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: ps1 horror, psx style, retro 3d horror, haunted ps1, lo-fi 3d."
domain: game
era: physically-based-and-indie
triggers:
  - "ps1 horror"
  - "psx style"
  - "retro 3d horror"
  - "haunted ps1"
  - "lo-fi 3d"
vector_profile:
  render_fidelity: 2
  spatial_depth: 4
  stylisation: 4
  lighting_drama: 4
  surface_density: 2
---

# Low-poly PS1 revival

> An old limit, chosen on purpose, makes a modern world feel like a half-remembered dream.

Small indie teams copy the limits of the first 3D consoles on purpose: low polygons, warped low-res textures, vertex jitter, dither and dense fog. The look serves dread and nostalgia, often in empty houses and night streets.

**Period:** 2018–now · **Era:** Physically based and indie · **Domain:** Video game · **Also called:** PSX horror, Retro 3D revival, Haunted PS1 look

## When to load this skill

Load it when the user asks for: "ps1 horror", "psx style", "retro 3d horror", "haunted ps1", "lo-fi 3d".

Good for: horror attractions, music videos, lo-fi art installations, indie game scenes.

Do not use it when:
- The brief needs a clean or sales-grade image.
- The tone must be bright and safe.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Low-poly PS1 revival, you MUST:

1. Render at 240–480 px height and scale up with no filter.
2. Snap vertices to a coarse grid so the geometry jitters.
3. Use affine texture mapping so textures warp on large faces.
4. Use textures of 64–128 px with colour-reduced, dithered colour.
5. Close the view with thick fog at 10–30 m.
6. Light scenes dimly, with one lamp or a flashlight.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean modern anti-aliasing.
- **NEVER:** High-resolution textures.
- **NEVER:** Bright, open vistas.
- **NEVER:** Physically based gloss.
- **NEVER:** Long draw distance.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■□□□` 2/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■□` 4/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■□` 4/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■■■□` 4/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■□□□` 2/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** first-person
- **Camera:** First-person or fixed horror angles.
- **Field of view:** about 60–80
- **Framing:** Eye height; short views into fog or darkness.

## Geometry & shape

- **Primitive:** A low-poly triangle with snapped vertices.
- **Budget:** 200–1,000 triangles for a character; rooms of simple boxes.
- **Edge rule:** Hard facets and visible jitter.
- **Proportion:** Near real scale, slightly off; narrow corridors.

## Surface & texture

- **Texture rule:** Small photo-sourced textures, colour-reduced and dithered.
- **Texel density:** about 32–64 px for each metre
- **Filtering:** Nearest neighbour with affine warp.
- **Material model:** Vertex-lit diffuse only.

## Palette

- **Strategy:** Dark, muddy palettes with one sick accent colour; dither in place of gradients.
- **Colour depth:** 15 bits, dithered
- **On screen colours:** a few thousand, visibly dithered

**Colours**

| Name | Hex | Role |
|---|---|---|
| Fog black | `#121212` | distance |
| Wallpaper ochre | `#7A6A3A` | walls |
| Bruise purple | `#3A2A40` | shadow |
| Sick green | `#6A8A3A` | accent |
| Flashlight | `#E8DCA0` | light |
| Blood red | `#6A1A1A` | accent |

## Light & atmosphere

- **Model:** Vertex lighting with a few point lights or a flashlight.
- **Shadows:** Few; darkness and fog carry the mood.
- **Atmosphere:** Thick fog, film grain, scan lines or a CRT filter.
- **Time of day:** Night, or an empty grey day.

## World & space

- **Scale:** Near real, with tight corridors and low ceilings.
- **Interiors:** Empty houses, motels and offices with sparse, wrong-feeling props.
- **Exteriors:** Night streets, forests and car parks closed by fog.
- **Threshold:** A door opens onto darkness; a cut or a short load.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| sightlines | End every view in fog or darkness within 10–30 m. | 10–30 m |
| lighting-layers | Use 1 or 2 layers: a dim ambient and one lamp or a flashlight. | 1–2 layers |
| focal-point | Light one object or doorway as the only bright point. | 1 lit point |

## Interface

- **Placement:** Minimal; sometimes a retro menu or a CRT frame.
- **Type and icons:** Pixel or 1990s bitmap fonts.
- **Diegesis:** Mostly in the world: notes, tapes and signs.

## Prompt primer

- **Positive:** PS1 style horror game · low poly 3D · affine texture warping · vertex jitter · dithered colours · thick dark fog · low resolution render · empty house at night · flashlight beam · CRT scanlines
- **Negative:** high poly · 4K textures · bright daylight · clean render · anti-aliasing · photoreal

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Haunted PS1 Demo Disc | Haunted PS1 | 2020 |
| Dusk | David Szymanski | 2018 |
| Iron Lung | David Szymanski | 2022 |
| Signalis | rose-engine | 2022 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera eye height in a first-person game view (cm of world scale): 160–170; the view ends in fog or a wall within 10–40 m in a closed level |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Affine texture warp (technology)

Texture mapping with no perspective correction: the texture is spread in a straight line across each triangle, so it bends and swims as the camera moves. Origin: video game, Sony, Tokyo, 1994.

- Map textures in screen space with no division by depth.
- Snap vertices to whole pixels so geometry jitters.
- Split large faces into smaller triangles to limit the warp.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Haunted PS1** (club, online, 2018–now), gathered the style. A community of indie developers who make horror games in the style of the first PlayStation.
- **itch.io** (platform, online, 2013–now), sold the style. An open store for independent games, where most PS1-style revival games are published.
- **Puppet Combo** (studio, the United States, ?–now), made the style. An American indie studio that makes low-poly horror games with a VHS and PS1 look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 240 | 144–480 px | surface, geometry |
| Colour depth (`colour_depth`) | 15 | 8–16 bit/px | palette |
| Camera projection (`camera_projection`) | first-person | first-person, fixed-camera, third-person | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 8 | 2–32 | lighting, surface |
| Texel density (`texel_density`) | 48 | 16–64 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **less eerie**: move toward [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md) (Fifth-generation low poly). Keep the polygons; open the fog and use brighter period colours.
- If the user asks for **more real**: move toward [`pbr-photoreal`](../pbr-photoreal/SKILL.md) (PBR photoreal). Keep the empty spaces; render with physical light and materials.

- **Came from (go here for a more orthodox version):** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`pbr-photoreal`](../pbr-photoreal/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`film-grain-revival`](../film-grain-revival/SKILL.md), [`found-footage`](../found-footage/SKILL.md)
- **Nearest by vector profile:** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md), [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md), [`vector-display-arcade`](../vector-display-arcade/SKILL.md)

## Emotional target

Uneasy nostalgia: the viewer feels a familiar old world that is wrong in some way.

**Keywords:** eerie, nostalgic, lo-fi, dark, dreamlike · **Brand archetypes:** outlaw, magician

## Sources

- [Wikipedia: Haunted PS1](https://en.wikipedia.org/wiki/Haunted_PS1)
- [Haunted PS1 on itch.io](https://hauntedps1.itch.io/)
- [Wikipedia: Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation)

---

Generated from [`data/game/styles/low-poly-ps1-revival.json`](../../data/game/styles/low-poly-ps1-revival.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
