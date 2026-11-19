---
name: impossible-isometric-mobile
description: "Apply the Flat geometric isometric style (2014–now) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: monument valley style, flat isometric, pastel geometric, impossible architecture, low poly pastel."
domain: game
era: physically-based-and-indie
triggers:
  - "monument valley style"
  - "flat isometric"
  - "pastel geometric"
  - "impossible architecture"
  - "low poly pastel"
vector_profile:
  render_fidelity: 2
  spatial_depth: 3
  stylisation: 5
  lighting_drama: 1
  surface_density: 1
---

# Flat geometric isometric

> Architecture reduced to pure faces and an orthographic view becomes a calm puzzle that a hand can turn.

Clean geometric architecture in an orthographic isometric view, coloured in flat pastel faces with no texture. Stairs, arches and towers are built like a paper model, and the space can fold into impossible shapes.

**Period:** 2014–now · **Era:** Physically based and indie · **Domain:** Video game · **Also called:** Impossible isometric, Pastel geometric 3D, Low-poly flat mobile

## When to load this skill

Load it when the user asks for: "monument valley style", "flat isometric", "pastel geometric", "impossible architecture", "low poly pastel".

Good for: architectural concept art, brand illustrations, calm interactive installations, wayfinding art.

Do not use it when:
- The brief needs real materials or textures.
- The scene needs eye-level immersion.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Flat geometric isometric, you MUST:

1. Use an orthographic isometric camera with no perspective.
2. Colour each face direction in its own flat pastel tone: top light, sides darker.
3. Build with cubes, arches, stairs and columns only; no texture.
4. Keep generous empty space around the structure.
5. Use a soft gradient sky in one hue as the ground.
6. Make the figure tiny and simple against the structure.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Textures or noise.
- **NEVER:** Perspective views.
- **NEVER:** Cluttered props.
- **NEVER:** Dark, saturated palettes.
- **NEVER:** Realistic figures.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■□□□` 2/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■□□` 3/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■■` 5/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■□□□□` 1/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■□□□□` 1/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** isometric
- **Camera:** Fixed orthographic; the player rotates the structure, not the camera.
- **Field of view:** orthographic
- **Framing:** One structure centred in a portrait or a landscape frame with wide margins.

## Geometry & shape

- **Primitive:** Clean low-poly cubes, arches and stairs.
- **Budget:** A few thousand triangles for a whole level.
- **Edge rule:** Crisp edges with no outlines; faces separate by tone.
- **Proportion:** A figure is 1/10 to 1/20 of the structure height.

## Surface & texture

- **Texture rule:** No texture; flat colour per face.
- **Texel density:** none; flat colour
- **Filtering:** Not used: faces have no texture.
- **Material model:** Unlit or a fixed 3-tone face shade.

## Palette

- **Strategy:** Pastel, harmonious hues; one palette for each level, a gradient sky.
- **Colour depth:** 24 bits
- **On screen colours:** 8 to 16 flat tones

**Colours**

| Name | Hex | Role |
|---|---|---|
| Blush pink | `#F2B8B0` | top faces |
| Coral | `#E07A6A` | side faces |
| Dusty teal | `#6AA8A8` | structure |
| Sand | `#F0DDB8` | light faces |
| Plum | `#5A3A5A` | shadow faces |
| Sky gradient | `#F8D8C0` | ground |

## Light & atmosphere

- **Model:** Fixed tones per face direction; no dynamic light.
- **Shadows:** None, or flat shapes in a darker tone.
- **Atmosphere:** A soft gradient sky; a few floating particles.
- **Time of day:** A palette per level: dawn pinks, night blues.

## World & space

- **Scale:** Monumental: the figure is tiny against towers and stairs.
- **Interiors:** Courtyards and rooms open to the sky, cut away like a model.
- **Exteriors:** A single tower or a floating island of stairs and arches.
- **Threshold:** A door is a dark rectangle; the figure walks in and out with no cut.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| scale | Make the figure 1/10 to 1/20 of the structure height. | 1:10–1:20 |
| focal-point | Mark the goal with the one saturated tone in the scene. | 1 accent |
| sightlines | Align paths so the camera sees each step; hide nothing behind a wall. | 0 hidden paths |

## Interface

- **Placement:** Almost none; a small pause icon in a corner.
- **Type and icons:** Thin geometric sans and simple line icons.
- **Diegesis:** Nearly all in the world: levers and paths are part of the structure.

## Prompt primer

- **Positive:** flat geometric isometric · pastel colour faces · orthographic architecture · minimal low poly · impossible geometry · paper model look · gradient sky · tiny figure · clean untextured surfaces
- **Negative:** texture · perspective · photoreal · clutter · dark gritty · outlines

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Monument Valley | ustwo games | 2014 |
| Monument Valley 2 | ustwo games | 2017 |
| Hitman GO | Square Enix Montreal | 2014 |
| Lara Croft GO | Square Enix Montreal | 2015 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | door height against the player character (ratio): 1.2–2.0, larger than real for a following camera |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera eye height in a first-person game view (cm of world scale): 160–170; the view ends in fog or a wall within 10–40 m in a closed level |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Isometric projection (process)

A drawing with three axes at equal angles and one scale, with no vanishing point, so that sizes can be measured. Origin: architecture, Cambridge, 1822.

- Draw the three axes at 120° to each other; on a pixel grid, use a 2:1 slope (26.57°).
- Keep one scale on all three axes and draw no vanishing point.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **App Store** (platform, online, 2008–now), sold the style. Apple's store for iPhone and iPad apps, where premium mobile games with a clean art style found a large public.
- **Edge** (magazine, Bath, England, 1993–now), published the style. A British game magazine with a focus on design and art direction since the first polygon consoles.
- **ustwo** (studio, London, 2004–now), made the style. A British digital studio whose games team made Monument Valley.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 1080 | 720–2160 px | surface, geometry |
| Colour depth (`colour_depth`) | 24 | 24–32 bit/px | palette |
| Camera projection (`camera_projection`) | isometric | isometric | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 3 | 2–4 | lighting, surface |
| Texel density (`texel_density`) | 4 | 4–4 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more retro**: move toward [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md) (Isometric pixel world). Keep the angle; redraw in pixel art with 3-tone faces.
- If the user asks for **more depth**: move toward [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md) (HD-2D diorama). Add depth of field, light and texture as in a miniature.

- **Came from (go here for a more orthodox version):** [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md)
- **Kin in another domain:** [`flat-design`](../flat-design/SKILL.md), [`isometric-icon`](../isometric-icon/SKILL.md), [`postmodern-architecture`](../postmodern-architecture/SKILL.md), [`surrealism-painting`](../surrealism-painting/SKILL.md)
- **Nearest by vector profile:** [`four-shade-handheld`](../four-shade-handheld/SKILL.md), [`vector-display-arcade`](../vector-display-arcade/SKILL.md), [`eight-bit-tile`](../eight-bit-tile/SKILL.md)

## Emotional target

Serene wonder: the viewer feels calm, curious and a little dreamy.

**Keywords:** serene, dreamy, elegant, minimal, curious · **Brand archetypes:** magician, sage, innocent

## Sources

- [Wikipedia: Monument Valley (video game)](https://en.wikipedia.org/wiki/Monument_Valley_(video_game))
- [Wikipedia: Ustwo](https://en.wikipedia.org/wiki/Ustwo)
- [Wikipedia: Isometric video game graphics](https://en.wikipedia.org/wiki/Isometric_video_game_graphics)

---

Generated from [`data/game/styles/impossible-isometric-mobile.json`](../../data/game/styles/impossible-isometric-mobile.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
