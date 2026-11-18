---
name: slow-cinema
description: "Apply the Slow cinema style (1994–today) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: slow cinema, long take, contemplative film, béla tarr, tsai ming-liang, apichatpong."
domain: film
era: digital-cinema
triggers:
  - "slow cinema"
  - "long take"
  - "contemplative film"
  - "béla tarr"
  - "tsai ming-liang"
  - "apichatpong"
  - "real time film"
  - "art house long shot"
vector_profile:
  camera_mobility: 2
  cutting_rate: 1
  staging: 3
  grade_stylisation: 1
  frame_width: 3
---

# Slow cinema

> Time is the material of film, so a shot is held until the viewer sees the place and the person and feels the hours pass.

A cinema of duration. Few cuts, a still or slow camera, ordinary tasks shown in real time and little plot. The viewer's attention does the work that the cut usually does.

**Period:** 1994–today · **Era:** Lightweight digital and the manifesto · **Domain:** Film & Video · **Also called:** Contemplative cinema, Long-take cinema

## When to load this skill

Load it when the user asks for: "slow cinema", "long take", "contemplative film", "béla tarr", "tsai ming-liang", "apichatpong", "real time film", "art house long shot".

Good for: festival short films, gallery and installation video, video prompts for a quiet scene, ambient and meditative product films.

Do not use it when:
- The piece must hold a viewer under 15 s on a feed.
- The brief needs a clear plot, a hook or a call to action.

## System directives

When planning, shooting, prompting, editing or grading moving images in Slow cinema, you MUST:

1. Hold each shot for 30 to 180 s and cut at an average shot length of 30 s or more, with a whole scene in one take.
2. Lock the camera on a tripod, or move it at a walking pace of 0.2 to 0.5 m/s along a path that the person sets.
3. Frame in a wide shot with 40% to 70% of the picture left to a landscape, a room or a sky, and keep the person at 10% to 30% of the height.
4. Use the available light, a key-to-fill ratio of 2:1 or lower, with long daylight shots from dawn to dusk.
5. Shoot ordinary work, such as a walk, a meal or a wait, in real time and leave no plot reason for it.
6. Record the sound of the place, with wind, rain and an engine, at a level that carries the scene, and use little music or none.
7. Keep the dialogue under 10 lines in a scene and let a pause run 5 to 15 s.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Fast cutting under 5 s average shot length.
- **NEVER:** A score that tells the viewer how to feel.
- **NEVER:** A shot and reverse shot coverage of each line.
- **NEVER:** An expository line that explains the plot.
- **NEVER:** A hero with a clear goal and a finish.
- **NEVER:** A camera move for spectacle.
- **NEVER:** A cutaway that releases the tension of a long wait.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■□□□` 2/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■□□□□` 1/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■□□` 3/5 | found, unplanned | fully constructed |
| Grade stylisation | `■□□□□` 1/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■■□□` 3/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A wide, level frame with the horizon at the lower or upper third; the person is small and the place is large.
- **Staging in depth:** A deep, still space of 3 planes: a foreground edge, the person in the middle ground and a distant line of land or a wall.
- **Subject placement:** Small, off centre, often seen from behind or from the side; a figure walks into the depth along a diagonal or a straight line.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| negative-space | Leave most of the frame to the sky, the field or the room, and keep the person small in it. | 40% to 70% of the frame empty |
| scale | Show the person at a small share of the frame height so that the place outweighs the figure. | 10% to 30% of the frame height |
| rhythm | Hold each shot well past its plot point, and cut only when the viewer's attention has settled. | 30 to 180 s per shot |
| rule-of-thirds | Set the horizon on the lower or the upper third line, and the figure on a vertical third. | horizon at 33% or 67% of the height |
| framing | Keep the frame level and fixed, with no cut-in, for the whole of a scene. | 0 cut-ins in a scene, locked off for 90% or more of the shots |

## Camera & movement

- **Movement:** Locked-off for most shots. A slow track or a pan, at 0.2 to 0.5 m/s, follows a person through a space, or a long push-in over 60 to 120 s.
- **Support:** Tripod or a slow dolly; a long-take rig on a car or a track
- **Camera height:** 1.2 to 1.6 m, eye level; a low tripod at 0.8 m in a field
- **Move speed:** Track 0.2 to 0.5 m/s; pan 2° to 5° per second

## Lens & format

- **Aspect ratio:** 1.66:1, 1.85:1 or 2.39:1; 1.37:1 for a few titles
- **Frame rate:** 24 fps
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** 28mm to 50mm (35mm format); a wide lens for a long shot
- **Aperture:** f/5.6 to f/11 for deep focus
- **Resolution:** 35mm negative, 16mm or 4K digital; scan at 2K or 4K
- **Focus:** Deep focus: the person, the room and the far land are all readable.
- **Equipment:** tripod · slow dolly · prime lens set · natural-light shoot, no lamp

## Light

- **Quality:** Soft, natural and low in contrast, as the day and the weather give it; a lamp or a window in the frame.
- **Direction:** From the window or the sky; the light changes slowly in a long shot and is kept.
- **Key to fill ratio:** 2:1 or lower (1 stop or lower)
- **Colour temperature:** Daylight 5600K, or a window and a tungsten lamp 3200K left uncorrected
- **Source:** The sun, the sky, windows and practical lamps

## Colour & grade

- **Treatment:** A natural, muted colour or black and white. Greys and earth tones; no stylised grade, and the light is allowed to change.
- **Grade recipe:**
  - Set the black point at 4% and the white point at 94% with a gentle contrast of +5%.
  - Keep saturation at 80% to 90% of the original; do not tint.
  - Hold the skin at the natural 12% to 14% to the vectorscope skin line.
  - Add grain at 8% to 12% to match 16mm or 35mm.
  - Do not add a vignette, a flare or a LUT.
- **Texture:** Fine grain at 8% to 12%, with natural noise in the dark

**Palette**

| Name | Hex | Role |
|---|---|---|
| Shadow grey | `#2B2D2C` | shadows |
| Mud brown | `#6B5A45` | earth and wood |
| Overcast grey | `#A9ADAB` | sky and walls |
| Field green | `#6C7A55` | fields |
| Pale sky | `#D8DCD8` | highlights |

## Editing & rhythm

- **Average shot length:** 30 to 180 s (Sátántangó is reported at about 150 shots in 7 h, check Cinemetrics for each title)
- **Shot length range:** 10 s for a short shot to 10 min for a long take
- **Cutting logic:** Cut only to change the place or the time. Let the action run out, and hold the empty frame for 3 to 10 s after the person has left.
- **Transitions:** Hard cut, a long fade of 2 to 4 s to black and no effect.
- **Runtime:** 120 to 450 min

## Sound

- **Approach:** The sound of the place at its real level, with wind, rain, an engine, a clock, and an off-screen voice.
- **Dialogue:** Sparse and flat, fewer than 10 lines in a scene, with pauses of 5 to 15 s.
- **Music:** Almost none: one diegetic song or a low drone, used once or twice in the whole film.
- **Loudness:** −26 to −23 LUFS integrated, with a wide dynamic range

## Titles & graphics

- **Treatment:** A bare title card in white on black, a short credit list; subtitles in a plain white sans-serif.
- **Type:** A plain sans-serif or serif in white lower case, 4 to 6 s for the title.

## Shot primer

- **Opening:** Open on a wide, still shot of a landscape or a room and let it run 60 s or more before a person enters.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Empty landscape | wide | 35mm | locked off | 90 |
| Person walks away | wide | 28mm | locked off | 75 |
| Meal in a kitchen | medium | 40mm | locked off | 120 |
| Long track along a road | wide | 35mm | dolly 0.3 m/s | 150 |
| Waiting at a window | medium | 50mm | locked off | 60 |
| Empty room after | wide | 28mm | locked off | 20 |

## Video prompt primer

- **Positive:** slow cinema long take · locked-off wide shot · ordinary person in a vast landscape · natural light · real-time scene · deep focus · 2.39:1 frame · muted natural colour · 60 second take · film grain
- **Negative:** fast cuts · dramatic score · shot reverse shot · camera shake · teal and orange grade · explanatory dialogue · lens flare · spectacle

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles | Chantal Akerman | 1975 |
| Sátántangó | Béla Tarr | 1994 |
| Goodbye, Dragon Inn | Tsai Ming-liang | 2003 |
| Uncle Boonmee Who Can Recall His Past Lives | Apichatpong Weerasethakul | 2010 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | subject height to frame or canvas height (% of frame height): 10–30 in a wide shot; 40–80 in a close-up |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |
| `rule-of-thirds` | Rule of thirds | Two horizontal and two vertical lines divide the view into nine equal parts. The focal point sits on one of the four crossings, and a horizon sits on one of the two horizontal lines. | focal point position (fraction of width and height): 0.33 or 0.67, tolerance 0.05; horizon position (fraction of height): 0.33 or 0.67 |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more event**: move toward [`hong-kong-action`](../hong-kong-action/SKILL.md) (Hong Kong action). Keep the wide frame and the single take; add a choreographed fight or a chase inside the take, with a move of 1 to 3 m/s.
- If the user asks for **more observation**: move toward [`documentary-verite`](../documentary-verite/SKILL.md) (Direct cinema and vérité). Keep the long take and the sound of the place; drop the staging, shoot handheld on location and let the subject address the camera.

- **Came from (go here for a more orthodox version):** [`italian-neorealism`](../italian-neorealism/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`classical-hollywood`](../classical-hollywood/SKILL.md)
- **Kin in another domain:** [`new-topographics`](../new-topographics/SKILL.md)
- **Nearest by vector profile:** [`italian-neorealism`](../italian-neorealism/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md), [`documentary-verite`](../documentary-verite/SKILL.md)

## Emotional target

Stillness and attention: the viewer slows down, notices small things and feels time as a weight.

**Keywords:** still, patient, austere, meditative, ordinary · **Brand archetypes:** sage, explorer

## Sources

- [Wikidata Q7542092: Slow cinema](https://www.wikidata.org/wiki/Q7542092)
- Matthew Flanagan, Towards an Aesthetic of Slow in Contemporary Cinema (16:9, 2008)
- Tiago de Luca and Nuno Barradas Jorge (eds.), Slow Cinema (Edinburgh University Press, 2016)
- [Cinemetrics: shot-length database](https://www.cinemetrics.lv/)

---

Generated from [`data/film/styles/slow-cinema.json`](../../data/film/styles/slow-cinema.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
