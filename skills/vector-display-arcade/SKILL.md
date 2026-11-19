---
name: vector-display-arcade
description: "Apply the Vector display arcade style (1979–1985) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: vector graphics game, wireframe arcade, glowing line art, vector monitor, neon wireframe."
domain: game
era: arcade-age
triggers:
  - "vector graphics game"
  - "wireframe arcade"
  - "glowing line art"
  - "vector monitor"
  - "neon wireframe"
vector_profile:
  render_fidelity: 1
  spatial_depth: 3
  stylisation: 5
  lighting_drama: 3
  surface_density: 1
---

# Vector display arcade

> A world can be drawn with light alone: a few sharp glowing lines on black are enough for the eye to build space.

The beam of the tube draws lines, not pixels. Bright monochrome or colour outlines glow on pure black, with no fill, no texture and a world built from wire shapes.

**Period:** 1979–1985 · **Era:** Arcade age · **Domain:** Video game · **Also called:** Vector graphics arcade, Glowing line arcade

## When to load this skill

Load it when the user asks for: "vector graphics game", "wireframe arcade", "glowing line art", "vector monitor", "neon wireframe".

Good for: retro-futurist title screens, light installations, night-time wayfinding concepts, sci-fi interiors with line lighting.

Do not use it when:
- The brief needs material, texture or warmth.
- The scene needs many small objects.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Vector display arcade, you MUST:

1. Draw every object as an outline of straight line segments; use no filled area.
2. Keep the ground pure black; it is the space between the lines.
3. Make the lines bright and let them bloom by 1–3 px into the dark.
4. Use 1 to 4 colours of full saturation, one for each class of object.
5. Show depth with perspective wireframes and a vanishing point, not with shading.
6. Keep each shape under about 30 segments so it reads at a glance.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Filled or textured surfaces.
- **NEVER:** A grey or coloured background.
- **NEVER:** Soft gradients or painted shading.
- **NEVER:** Dense detail that the beam cannot draw in one frame.
- **NEVER:** Pixel steps on a diagonal line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■□□□□` 1/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■□□` 3/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■■■` 5/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■■□□` 3/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■□□□□` 1/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** first-person
- **Camera:** Locked, or a slow fly-through down a tube or a grid.
- **Field of view:** about 60, a strong vanishing point
- **Framing:** The whole field of play on one screen, with the player at the bottom or the centre.

## Geometry & shape

- **Primitive:** A straight line segment between two points on a 1024 by 768 addressable field.
- **Budget:** A few hundred segments for each frame on the whole screen.
- **Edge rule:** Perfect straight lines with no steps; the ends of lines glow a little brighter.
- **Proportion:** Abstract: a ship, a rock and a city are all the same order of size.

## Surface & texture

- **Texture rule:** No texture; a surface is its outline.
- **Texel density:** none
- **Filtering:** None; the beam draws the line in analogue.
- **Material model:** No material; every line is a light source.

## Palette

- **Strategy:** Light on black: white or one hue on a monochrome tube, up to 7 saturated hues on a colour tube.
- **Colour depth:** 1 to 3 bits: on or off for each colour gun
- **On screen colours:** 1 to 7

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | ground |
| Phosphor white | `#E8F4FF` | lines |
| Vector green | `#3CFF5A` | player |
| Electric blue | `#2E6BFF` | grid |
| Magenta | `#FF2EC8` | enemy |
| Yellow | `#FFE53C` | shots |

## Light & atmosphere

- **Model:** None; each line emits light.
- **Shadows:** No shadows: a line casts none.
- **Atmosphere:** A soft glow around each line from the phosphor of the tube.
- **Time of day:** Always night: black ground.

## World & space

- **Scale:** One screen is the whole world; the scale is symbolic.
- **Interiors:** A room is a wireframe box in perspective, its edges only.
- **Exteriors:** A street is a perspective grid that runs to one vanishing point, with wire buildings at the sides.
- **Threshold:** A cut to a new screen.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Put the player shape at the bottom centre or the screen centre; every line leads there. | 1 focal point |
| layering-depth | Show depth with 3 to 6 nested outlines that shrink toward the vanishing point. | 3–6 depth planes |
| lighting-layers | Use one light layer only: the lines themselves. | 1 layer |

## Interface

- **Placement:** A score in the top corners in the same vector lines, about 5% of the screen.
- **Type and icons:** Stroke letters built from 5 to 10 segments.
- **Diegesis:** None; the score sits on top of the black ground.

## Prompt primer

- **Positive:** vector display graphics · glowing neon wireframe lines · pure black background · no filled surfaces · phosphor glow · perspective wireframe grid · outline buildings · 1980 arcade monitor · saturated line colours · minimal line art scene
- **Negative:** texture · filled shapes · gradient sky · photoreal · pixel art · soft shading

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Asteroids | Atari | 1979 |
| Battlezone | Atari | 1980 |
| Tempest | Atari | 1981 |
| Star Wars | Atari | 1983 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Vector display (technology)

A cathode-ray tube whose beam draws straight lines from point to point, not a raster of pixels. Lines are sharp at any angle and glow on a black ground. Origin: video game, MIT, Cambridge, Massachusetts, 1962.

- Draw each object as a list of line segments; keep a whole frame under a few thousand segments.
- Keep the ground black; only the lines emit light.
- Use full beam brightness for the player and half for the background.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Atari, Inc.** (studio, Sunnyvale, California, 1972–1984), made the style. The arcade and console company that made the first hit vector-display games.
- **Warner Communications** (company, New York, ?–now), funded the style. US media company. It bought Atari in 1976 for 28 million dollars and co-owned MTV through Warner-Amex.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 768 | 480–1024 px | surface, geometry |
| Colour depth (`colour_depth`) | 1 | 1–3 bit/px | palette |
| Camera projection (`camera_projection`) | first-person | first-person, side-view, top-down | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 1 | 1–2 | lighting, surface |
| Texel density (`texel_density`) | 4 | 4–4 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more retro colour**: move toward [`eight-bit-tile`](../eight-bit-tile/SKILL.md) (8-bit tile graphics). Fill the shapes with a small flat palette and move to a tile grid.
- If the user asks for **more solid**: move toward [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md) (Fifth-generation low poly). Keep the perspective; fill the wireframes with flat-shaded polygons.

- **Led to (go here for a newer version):** [`eight-bit-tile`](../eight-bit-tile/SKILL.md), [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Kin in another domain:** [`cassette-futurism`](../cassette-futurism/SKILL.md), [`electronic-and-digital-watch`](../electronic-and-digital-watch/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md)
- **Nearest by vector profile:** [`impossible-isometric-mobile`](../impossible-isometric-mobile/SKILL.md), [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md), [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md)

## Emotional target

A cold, exact wonder: the player sees a world made of light lines and fills in the rest.

**Keywords:** electric, exact, cold, futurist, minimal · **Brand archetypes:** magician, explorer

## Sources

- [Wikipedia: Vector monitor](https://en.wikipedia.org/wiki/Vector_monitor)
- [Wikipedia: Asteroids (video game)](https://en.wikipedia.org/wiki/Asteroids_(video_game))
- [Wikipedia: Tempest (video game)](https://en.wikipedia.org/wiki/Tempest_(video_game))

---

Generated from [`data/game/styles/vector-display-arcade.json`](../../data/game/styles/vector-display-arcade.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
