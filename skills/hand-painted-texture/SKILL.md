---
name: hand-painted-texture
description: "Apply the Hand-painted texture style (2004–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: hand painted, stylised game art, warcraft style, painterly 3d, fantasy village."
domain: game
era: programmable-shader
triggers:
  - "hand painted"
  - "stylised game art"
  - "warcraft style"
  - "painterly 3d"
  - "fantasy village"
vector_profile:
  render_fidelity: 3
  spatial_depth: 5
  stylisation: 4
  lighting_drama: 2
  surface_density: 3
---

# Hand-painted texture

> A painter's hand can carry the light of a world, so a small engine budget still gives a warm, rich place.

Mid-poly models with textures painted by hand: light, shadow, wear and colour shifts are in the paint, not in the engine. Chunky, exaggerated buildings and bright, saturated colour read clearly at a distance.

**Period:** 2004–now · **Era:** Programmable shader · **Domain:** Video game · **Also called:** Painted 3D, Stylised hand-painted, Painterly low poly

## When to load this skill

Load it when the user asks for: "hand painted", "stylised game art", "warcraft style", "painterly 3d", "fantasy village".

Good for: themed hospitality interiors, fantasy environments, children's attractions, stylised real-time scenes.

Do not use it when:
- The brief needs a real material sample.
- The tone must be minimal.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Hand-painted texture, you MUST:

1. Paint light from above into each texture: lighter top edges, darker bottoms.
2. Exaggerate shapes: thick walls, big beams, crooked roofs.
3. Use saturated, warm colours with cool hue-shifted shadows.
4. Paint edge wear as bright strokes on corners.
5. Keep the polygon count moderate and the silhouette strong.
6. Avoid photo sources; every pixel of texture is painted.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Photo textures.
- **NEVER:** Normal-map micro detail.
- **NEVER:** Grey, desaturated palettes.
- **NEVER:** Thin, realistic proportions.
- **NEVER:** Specular gloss on every surface.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■■□□` 3/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■■■` 5/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■□` 4/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■□□□` 2/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■□□` 3/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** third-person
- **Camera:** Free orbit camera behind the player.
- **Field of view:** about 60–90
- **Framing:** Wide vistas with landmarks; the player small in a big world.

## Geometry & shape

- **Primitive:** A mid-poly mesh with chunky bevels.
- **Budget:** 2,000–10,000 triangles for a character; buildings in modular sets.
- **Edge rule:** Soft silhouettes with bevelled, chunky edges.
- **Proportion:** Exaggerated and heroic: big shoulders, oversized doors and lanterns.

## Surface & texture

- **Texture rule:** Diffuse-only textures painted by hand with light, shadow and wear in them.
- **Texel density:** about 128–256 px for each metre
- **Filtering:** Smooth with mipmaps.
- **Material model:** Diffuse only, or a simple specular; light is mostly in the paint.

## Palette

- **Strategy:** Warm, saturated hues; shadows shift to purple or blue, highlights to yellow.
- **Colour depth:** 24 bits
- **On screen colours:** full colour

**Colours**

| Name | Hex | Role |
|---|---|---|
| Timber brown | `#7A4A2A` | beams |
| Thatch gold | `#D8A84A` | roofs |
| Moss green | `#5A9A3A` | grass |
| Lantern orange | `#F8A030` | lights |
| Shadow purple | `#4A3A6A` | shadows |
| Sky teal | `#58B0C8` | sky |

## Light & atmosphere

- **Model:** Simple dynamic light on top of the light painted into textures.
- **Shadows:** Soft blob or simple shadow maps.
- **Atmosphere:** Coloured fog, floating motes and god rays as painted cards.
- **Time of day:** A day cycle that tints the sky and fog.

## World & space

- **Scale:** Heroic: doors and lanterns 1.3–1.5 times real size.
- **Interiors:** Taverns and halls full of barrels, beams and warm lamps.
- **Exteriors:** Villages with crooked half-timbered houses, paths and big trees.
- **Threshold:** A door opens into a room with no load in later games; a short load in early ones.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Make doors and props 1.3–1.5 times real scale so they read from the camera. | 1.3–1.5× |
| lighting-layers | Paint 3 layers: sky light, warm lamps and painted ambient occlusion. | 3 layers |
| focal-point | Put a landmark (a tower, a big tree) in every vista. | 1 landmark per view |

## Interface

- **Placement:** Ornate frames along the bottom and the corners, 10–20% of the screen.
- **Type and icons:** Fantasy serif fonts and painted icons.
- **Diegesis:** On top, in a fantasy frame.

## Prompt primer

- **Positive:** hand-painted textures · stylised 3D game art · painterly low poly · chunky exaggerated buildings · warm saturated colours · purple shadows · half-timbered village · fantasy tavern · soft painted light
- **Negative:** photoreal · photo texture · grey palette · gritty · realistic proportions · film grain

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| World of Warcraft | Blizzard Entertainment | 2004 |
| Torchlight | Runic Games | 2009 |
| League of Legends | Riot Games | 2009 |
| Sea of Thieves | Rare | 2018 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Hand-painted texture (skill, invented here)

Paint the colour, light, shadow and wear of a surface by hand into its texture, so the material reads with little help from the engine. Origin: video game, Irvine, California, c. 2004.

- Paint light from above: lighter top edges and darker bottoms on each element.
- Shift shadows toward cool hues and highlights toward warm hues.
- Paint wear as bright strokes 2–4 px wide on edges.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Blizzard Entertainment** (studio, Irvine, California, 1991–now), made the style. An American studio known for chunky, hand-painted fantasy worlds.
- **Polycount** (platform, online, ?–now), gathered the style. An online forum and wiki for game artists, with much shared practice on hand-painted and PBR texture work.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 1080 | 720–2160 px | surface, geometry |
| Colour depth (`colour_depth`) | 24 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | third-person | third-person, isometric, top-down | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 16 | 4–64 | lighting, surface |
| Texel density (`texel_density`) | 192 | 64–512 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more drawn**: move toward [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md) (Cel-shaded 3D). Add ink outlines and flatten the shade into 2 steps.
- If the user asks for **more real**: move toward [`pbr-photoreal`](../pbr-photoreal/SKILL.md) (PBR photoreal). Keep the layout; replace painted light with physical materials.

- **Came from (go here for a more orthodox version):** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Mixes well with:** [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md)
- **Kin in another domain:** [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md), [`impressionism`](../impressionism/SKILL.md)
- **Nearest by vector profile:** [`cel-shaded-3d`](../cel-shaded-3d/SKILL.md), [`voxel-block-world`](../voxel-block-world/SKILL.md), [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)

## Emotional target

Warm adventure: the viewer sees a cosy, heroic world and wants to step in.

**Keywords:** warm, cosy, heroic, colourful, inviting · **Brand archetypes:** explorer, hero, caregiver

## Sources

- [Wikipedia: World of Warcraft](https://en.wikipedia.org/wiki/World_of_Warcraft)
- [Wikipedia: Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping)
- [Wikipedia: Blizzard Entertainment](https://en.wikipedia.org/wiki/Blizzard_Entertainment)

---

Generated from [`data/game/styles/hand-painted-texture.json`](../../data/game/styles/hand-painted-texture.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
