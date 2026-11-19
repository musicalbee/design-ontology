---
name: found-footage
description: "Apply the Found footage style (1999–2020) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: found footage, blair witch, handheld camcorder horror, night vision, faux documentary, shaky cam horror."
domain: film
era: digital-cinema
triggers:
  - "found footage"
  - "blair witch"
  - "handheld camcorder horror"
  - "night vision"
  - "faux documentary"
  - "shaky cam horror"
vector_profile:
  camera_mobility: 5
  cutting_rate: 2
  staging: 2
  grade_stylisation: 1
  frame_width: 2
---

# Found footage

> If a character holds the camera, the frame shows only what that person can see, so the viewer cannot look away from the dark edge of the picture.

A film that claims to be real recordings of a camera, left behind by people who vanished. The camera is in the hand of a character. It shakes, loses focus, runs out of light and records the fear in real time.

**Period:** 1999–2020 · **Era:** Lightweight digital and the manifesto · **Domain:** Film & Video · **Also called:** Faux-documentary horror, Camcorder horror

## When to load this skill

Load it when the user asks for: "found footage", "blair witch", "handheld camcorder horror", "night vision", "faux documentary", "shaky cam horror".

Good for: horror video prompts, viral and alternate-reality marketing, game and app teasers with a real look, student and indie shorts.

Do not use it when:
- The brief needs a clean, beautiful or premium frame.
- The viewer must follow a clear action in a fight.

## System directives

When planning, shooting, prompting, editing or grading moving images in Found footage, you MUST:

1. Give the camera to a character, and let the character say why they film.
2. Shoot handheld with a consumer camera at 4:3 or 16:9 with a 1/50 s shutter, and keep every shot as a long take of 30 to 180 s.
3. Light with the lamp on the camera, a torch or a night-vision mode, and let 50% or more of the frame go dark.
4. Keep the sound to what the camera microphone hears, with wind noise, clipped peaks and breath.
5. Hold the monster off screen or at the frame edge until the last 1 to 3 min.
6. Show the camera's own signs: a date stamp, a battery icon and a tape glitch.
7. Add no score and no cut that the character could not make.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A score laid over the scene.
- **NEVER:** A tripod and a smooth dolly.
- **NEVER:** A perfect, well-lit frame.
- **NEVER:** A cut to a view that no camera has.
- **NEVER:** A visible monster in the first reel.
- **NEVER:** A polished studio colour grade.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■■` 5/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■□□□` 2/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■□□□` 2/5 | found, unplanned | fully constructed |
| Grade stylisation | `■□□□□` 1/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A shaky 4:3 or 16:9 frame at eye or chest height, with a torch circle, the date stamp and the black edge.
- **Staging in depth:** 2 planes: a face close to the lens and a dark room or a forest behind it.
- **Subject placement:** Wherever the camera points; the face often sits off the centre and cut at the edge.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| framing | Let the head and the body cut at the frame edge, and keep a timestamp in a corner. | head cuts 5% to 15%, 1 stamp |
| contrast | Let the torch or the lamp make a bright disc in a black frame. | 6 to 8 stops, torch to black |
| negative-space | Leave a dark part of the frame where the threat may sit. | 40% to 60% black frame |
| sightlines | Hold the lens at the height of the hand or the chest of the character. | 1.2 to 1.6 m, no cut to a view that no camera has |
| rhythm | Hold each take until the camera stops, falls or is cut off. | 30 to 180 s per take, 40 s or more average |

## Camera & movement

- **Movement:** A handheld walk, run and fall; a pan to a noise; a whip to the face; a lens that hunts for focus.
- **Support:** Handheld consumer camcorder or a phone, a body mount or a car dash
- **Camera height:** 1.2 to 1.6 m, chest or eye level
- **Move speed:** Walk 1.0 to 1.5 m/s, run 3 to 5 m/s

## Lens & format

- **Aspect ratio:** 4:3 or 16:9
- **Frame rate:** 24 fps, 25 fps or 30 fps
- **Shutter angle:** 180° to 360° (1/50 s or slower)
- **Focal length:** a fixed zoom lens of 28mm to 40mm equivalent
- **Aperture:** Auto exposure, f/2.8 to f/5.6
- **Resolution:** 480p to 1080p consumer video
- **Focus:** Autofocus that hunts, and a night-shot mode
- **Equipment:** consumer camcorder or phone · an on-camera lamp · an infrared night mode · a handheld torch

## Light

- **Quality:** Harsh, direct and from the camera or from a torch; a deep black beyond the beam.
- **Direction:** Along the lens axis, from the camera or from the hand.
- **Key to fill ratio:** 10:1 or higher
- **Colour temperature:** Daylight 5600K or the camera's 3200K lamp, left as found
- **Source:** Camera lamp, torch, a night-vision mode and a screen

## Colour & grade

- **Treatment:** No grade: the camera's own colour, with a green or white night mode and blown highlights.
- **Grade recipe:**
  - Set the white balance as the camera sets it and do not correct it.
  - Clip the highlights at 100% and crush the blacks at 5%.
  - Add video noise of 15% to 25% in the dark.
  - Add a date stamp and a battery icon at 2% of the frame height.
  - Add a compression artefact in dark areas, and do not add grain.
- **Texture:** Video noise, block compression and a timestamp

**Palette**

| Name | Hex | Role |
|---|---|---|
| Tape black | `#0C0D0C` | shadow |
| Night green | `#4D9B5A` | night mode |
| Torch white | `#F4F1DC` | beam |
| Wood brown | `#6B5640` | forest and house |

## Editing & rhythm

- **Average shot length:** 40 to 120 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 5 s for a cut-off to 10 min for one night
- **Cutting logic:** Cut only where the camera is turned off, dropped or lost, and keep time continuous in a take.
- **Transitions:** Hard cut at a camera stop, a flash of white and a glitch.
- **Runtime:** 75 to 95 min

## Sound

- **Approach:** One camera microphone: wind, clipping, breath, a far scream and a long silence.
- **Dialogue:** Overlapping, unscripted and loud; people talk to the camera.
- **Music:** None, or a sound source in the scene, such as a radio.
- **Loudness:** −20 LUFS integrated with clipped peaks and a wide dynamic range

## Titles & graphics

- **Treatment:** A black card with a plain white text that says the tapes were found; no credits until the end.
- **Type:** A plain sans-serif or a monospace in white, 3 to 5 s per card.

## Shot primer

- **Opening:** Open on a title card that says the footage was found, then cut to a camera check of 20 to 40 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Camera check with a name and a date | medium | 30mm | handheld | 20 |
| Walk in a forest at dusk | wide | 28mm | handheld follow 1.2 m/s | 60 |
| Night tent with a torch | close-up | 35mm | handheld | 30 |
| Run, camera swings | wide | 28mm | handheld 4 m/s | 15 |
| Night-vision face | close-up | 30mm | handheld, night mode | 20 |
| Camera falls and rests on its side | medium | 28mm | static, tilted 90° | 10 |

## Video prompt primer

- **Positive:** found footage horror · handheld camcorder look · timestamp in a corner · torch light in a dark forest · night vision green · shaky long take · wind noise on the microphone · 4:3 frame · video compression noise
- **Negative:** film score · tripod · dolly move · teal and orange · studio light · monster in full view

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| The Blair Witch Project | Daniel Myrick and Eduardo Sánchez | 1999 |
| Cloverfield | Matt Reeves | 2008 |
| [REC] | Jaume Balagueró and Paco Plaza | 2007 |
| Paranormal Activity | Oren Peli | 2007 |
| Cannibal Holocaust | Ruggero Deodato | 1980 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera height (cm): 120–170 at eye level; under 100 for a low angle; crossings of the line of action in one scene (count): 0 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Handheld camera (tool)

A camera that the operator carries on the body, with no tripod or dolly; the shake of the body shows in the frame. Origin: film & video, Paris, c. 1960.

- Use a light camera and a wide lens of 18mm to 35mm so that the shake stays small in the frame.
- Follow the action at the pace of a walking person and let the frame move 2% to 5% off the subject.
- Do not stabilise in post; accept a late refocus and a missed frame as part of the take.
- Shoot long takes of 30 seconds or more, so that the camera seems to live in the room.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 1.33:1 | 1.33:1, 1.85:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 30 | 24–30 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 60 | 40–120 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 5600 | 3200–5600 K | colour_and_grade, light |
| Grain (`grain`) | 0.2 | 0.15–0.25 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polish**: move toward [`documentary-verite`](../documentary-verite/SKILL.md) (Direct cinema and vérité). Keep the handheld, but light the scene, steady the frame and add a clear sync sound.
- If the user asks for **more screen life**: move toward [`camcorder-revival`](../camcorder-revival/SKILL.md) (Camcorder revival). Keep the tape look and add a warm, nostalgic home video grade and a date stamp.

- **Came from (go here for a more orthodox version):** [`documentary-verite`](../documentary-verite/SKILL.md)
- **Mixes well with:** [`dogme-95`](../dogme-95/SKILL.md)
- **Kin in another domain:** [`y2k-digicam`](../y2k-digicam/SKILL.md)
- **Nearest by vector profile:** [`documentary-verite`](../documentary-verite/SKILL.md), [`dogme-95`](../dogme-95/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)

## Emotional target

Unease and presence: the viewer is in the dark with a person who holds the camera and cannot leave.

**Keywords:** raw, unnerving, claustrophobic, amateur, real-time · **Brand archetypes:** outlaw, everyman

## Sources

- [Found footage (film technique)](https://en.wikipedia.org/wiki/Found_footage_(film_technique))
- Alexandra Heller-Nicholas, Found Footage Horror Films: A Fear Reading (McFarland, 2014)
- [Cinemetrics database](https://www.cinemetrics.lv/)

---

Generated from [`data/film/styles/found-footage.json`](../../data/film/styles/found-footage.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
