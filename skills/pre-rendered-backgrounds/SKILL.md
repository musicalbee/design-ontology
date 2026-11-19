---
name: pre-rendered-backgrounds
description: "Apply the Pre-rendered backgrounds style (1993–2002) when art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through. Load when the user asks for: pre-rendered, fixed camera, myst style, 90s cgi, survival horror rooms."
domain: game
era: early-polygon
triggers:
  - "pre-rendered"
  - "fixed camera"
  - "myst style"
  - "90s cgi"
  - "survival horror rooms"
vector_profile:
  render_fidelity: 3
  spatial_depth: 3
  stylisation: 3
  lighting_drama: 4
  surface_density: 4
---

# Pre-rendered backgrounds

> If the camera does not move, each view can be a finished render, composed like a film frame.

Rooms and streets are rendered offline in 3D software and shown as still images at fixed camera angles. The player moves as a low-poly figure, or as a cursor, over a scene with far more light and detail than the console can draw.

**Period:** 1993–2002 · **Era:** Early polygon · **Domain:** Video game · **Also called:** Pre-rendered 3D, Fixed camera with rendered scenes, Myst-like stills

## When to load this skill

Load it when the user asks for: "pre-rendered", "fixed camera", "myst style", "90s cgi", "survival horror rooms".

Good for: moody interior stills, escape-room design, storyboards for spaces, narrative installations.

Do not use it when:
- The brief needs a free walk-through.
- The look must be clean and bright.

## System directives

When art-directing, prompting or building the look of a game world: its camera, geometry, surfaces, palette, light and the rooms and streets the player moves through in Pre-rendered backgrounds, you MUST:

1. Compose each view as a still: a fixed camera with a strong diagonal or a low angle.
2. Render the background offline with soft shadows and many lights.
3. Match the real-time figure to the background with the same light direction.
4. Use dramatic camera angles: high, low, through a doorway.
5. Cut between views when the player crosses an edge.
6. Paint depth masks so the figure goes behind a table or a pillar.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A free camera.
- **NEVER:** Backgrounds that the figure does not match in light.
- **NEVER:** Flat eye-level views with no composition.
- **NEVER:** Real-time textures on the background.
- **NEVER:** Empty rooms with no props.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Render fidelity | `■■■□□` 3/5 | a few pixels or lines that suggest a thing | a photoreal surface and light |
| Spatial depth | `■■■□□` 3/5 | one flat plane | a free camera in a full 3D world |
| Stylisation | `■■■□□` 3/5 | natural proportion, colour and light | drawn, exaggerated shapes and colour |
| Lighting drama | `■■■■□` 4/5 | flat, even or unlit | hard contrast, volumetric beams and deep shadow |
| Surface density | `■■■■□` 4/5 | bare, clean surfaces | dense detail, props and clutter |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Projection & camera

- **Projection:** fixed-camera
- **Camera:** A set of fixed cameras; the view cuts as the player moves.
- **Field of view:** about 40–90, chosen for each view
- **Framing:** Cinematic frames: high corners, low angles, views through doors.

## Geometry & shape

- **Primitive:** An offline 3D render as a 2D image; a low-poly character on top.
- **Budget:** No limit for the background; 500–1,500 triangles for the figure.
- **Edge rule:** Soft, anti-aliased edges in the render; hard edges on the figure.
- **Proportion:** Real-scale rooms with full props.

## Surface & texture

- **Texture rule:** Detail from offline renders: wood grain, stone, stained wallpaper.
- **Texel density:** about 64–128 px for each metre at the screen size
- **Filtering:** Smooth; the image is a bitmap.
- **Material model:** Offline shaders of the 1990s: Phong, reflections, soft shadows.

## Palette

- **Strategy:** Moody, film-like colour with a warm or a cold cast for each room.
- **Colour depth:** 15 to 24 bits
- **On screen colours:** thousands

**Colours**

| Name | Hex | Role |
|---|---|---|
| Oak brown | `#5A3A22` | wood |
| Brass | `#B08D4A` | fittings |
| Teal shadow | `#20403F` | shadow |
| Candle amber | `#F0A848` | lamp light |
| Plaster | `#C8B89A` | walls |
| Deep red | `#6A1E1E` | fabric |

## Light & atmosphere

- **Model:** Offline raytraced or radiosity light, baked into the image.
- **Shadows:** Soft cast shadows in the render; a simple blob under the figure.
- **Atmosphere:** Dust in light shafts, mist and haze baked in.
- **Time of day:** One fixed time for each scene, often dusk or night.

## World & space

- **Scale:** Real scale; rooms full of furniture and objects.
- **Interiors:** Fully dressed rooms: libraries, halls, offices, each one view.
- **Exteriors:** Streets and courtyards framed like establishing shots.
- **Threshold:** A cut to the next camera as the figure walks through the door.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Place the door or the path forward at a third of the frame. | 1 focal point on a third |
| sightlines | Frame the view through a door or between columns to lead the eye. | 1 frame inside the frame |
| lighting-layers | Use 3 layers: ambient, a key from a lamp or a window, and accent spots. | 3 layers |
| layering-depth | Put props in foreground, middle ground and background. | 3 planes |

## Interface

- **Placement:** Small; often only a cursor or a menu called up on demand.
- **Type and icons:** Serif or bitmap fonts in framed boxes.
- **Diegesis:** Much is in the world: notes, books and switches in the render.

## Prompt primer

- **Positive:** pre-rendered 3D background · fixed camera angle · 1990s CGI render · cinematic composition · dramatic high angle · soft raytraced shadows · dressed interior · moody lamp light · dust in light beams
- **Negative:** real-time 3D · low poly · pixel art · flat lighting · empty room · free camera

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Myst | Cyan | 1993 |
| Alone in the Dark | Infogrames | 1992 |
| Resident Evil | Capcom | 1996 |
| Final Fantasy VII | Square | 1997 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third; saturated or bright accents that mark the goal in one frame (count): 1 |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera eye height in a first-person game view (cm of world scale): 160–170; the view ends in fog or a wall within 10–40 m in a closed level |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40; parallax or depth planes in one frame (count): 2–4 in 2D, 3 with fog in 3D |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Pre-rendered background (process, invented here)

Render a room or a street offline in 3D software, then show it as a fixed image behind a real-time figure or a cursor. Origin: video game, Spokane, Washington, 1993.

- Fix the camera for each view and compose it like a film frame.
- Render the background with offline light: soft shadows and many lamps.
- Paint a depth mask so that the figure can pass behind props.
- Match the figure's light direction to the render.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Broderbund** (publisher, Novato, ?–now), funded the style. US software publisher. It released Myst for Mac OS in 1993. Myst became its best selling title.
- **Cyan Worlds** (studio, Mead, Washington, 1987–now), launched the style. An American studio that made Myst from pre-rendered still images.
- **Square** (studio, Tokyo, 1986–2003), made the style. A Japanese game studio known for role-playing games with rich 16-bit pixel art and pre-rendered 3D rooms.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Render resolution (`render_resolution`) | 480 | 240–480 px | surface, geometry |
| Colour depth (`colour_depth`) | 16 | 15–24 bit/px | palette |
| Camera projection (`camera_projection`) | fixed-camera | fixed-camera, first-person | projection_and_camera, world_and_space |
| Shading steps (`shading_steps`) | 128 | 64–256 | lighting, surface |
| Texel density (`texel_density`) | 96 | 64–128 px/m | surface |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more real**: move toward [`pbr-photoreal`](../pbr-photoreal/SKILL.md) (PBR photoreal). Keep the composed angles; render with physical materials and modern global light.
- If the user asks for **more retro**: move toward [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md) (Fifth-generation low poly). Replace the render with real-time low-poly boxes and fog.

- **Came from (go here for a more orthodox version):** [`sixteen-bit-sprite`](../sixteen-bit-sprite/SKILL.md)
- **Mixes well with:** [`fifth-gen-low-poly`](../fifth-gen-low-poly/SKILL.md)
- **Kin in another domain:** [`architectural-photography`](../architectural-photography/SKILL.md), [`classical-hollywood`](../classical-hollywood/SKILL.md), [`film-noir`](../film-noir/SKILL.md)
- **Nearest by vector profile:** [`hd-2d-diorama`](../hd-2d-diorama/SKILL.md), [`seventh-gen-desaturated`](../seventh-gen-desaturated/SKILL.md), [`isometric-pixel-world`](../isometric-pixel-world/SKILL.md)

## Emotional target

Suspense and wonder: the viewer looks at a composed, richly lit place and expects something behind the next door.

**Keywords:** cinematic, mysterious, moody, rich, suspenseful · **Brand archetypes:** magician, explorer, sage

## Sources

- [Wikipedia: Pre-rendering](https://en.wikipedia.org/wiki/Pre-rendering)
- [Wikipedia: Myst](https://en.wikipedia.org/wiki/Myst)
- [Wikipedia: Resident Evil (1996 video game)](https://en.wikipedia.org/wiki/Resident_Evil_(1996_video_game))

---

Generated from [`data/game/styles/pre-rendered-backgrounds.json`](../../data/game/styles/pre-rendered-backgrounds.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
