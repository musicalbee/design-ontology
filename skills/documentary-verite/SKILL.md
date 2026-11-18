---
name: documentary-verite
description: "Apply the Direct cinema and vérité style (1960–1975) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: cinema verite, direct cinema, observational documentary, fly on the wall, handheld 16mm, maysles."
domain: film
era: new-waves
triggers:
  - "cinema verite"
  - "direct cinema"
  - "observational documentary"
  - "fly on the wall"
  - "handheld 16mm"
  - "maysles"
  - "pennebaker"
  - "rouch"
vector_profile:
  camera_mobility: 4
  cutting_rate: 2
  staging: 1
  grade_stylisation: 1
  frame_width: 2
---

# Direct cinema and vérité

> Light gear and sync sound let the camera watch people in real time, so the film is made of what happens and not of what is staged.

A handheld 16mm camera and a synchronised tape recorder stay with real people. No script, no set and no lamps. The camera sits in the room and waits. The picture is rough, and the sound is complete.

**Period:** 1960–1975 · **Era:** Portable cameras and the new waves · **Domain:** Film & Video · **Also called:** Cinéma vérité, Direct cinema, Observational documentary

## When to load this skill

Load it when the user asks for: "cinema verite", "direct cinema", "observational documentary", "fly on the wall", "handheld 16mm", "maysles", "pennebaker", "rouch".

Good for: documentary and brand-story interviews, concert and backstage films, video prompts for a real-event look, oral-history and campaign films.

Do not use it when:
- The brief needs a staged hero shot or a controlled colour.
- The piece needs a narrator to explain a complex argument.

## System directives

When planning, shooting, prompting, editing or grading moving images in Direct cinema and vérité, you MUST:

1. Shoot with a handheld 16mm camera and a synchronised tape recorder, with a crew of 2 to 3 people.
2. Use the available light only, with a fast stock pushed 1 to 2 stops, and let a window blow out to white.
3. Frame in 1.33:1 or 1.37:1 at eye level, with a 10mm to 25mm zoom or a 9.5mm to 25mm lens, and let the subject move out of focus for 1 to 3 s.
4. Hold a take of 20 to 120 s and cut at an average shot length of 8 to 15 s, with no cutaway to hide a seam.
5. Never stage or ask for a repeat; follow the event at 1 to 1.5 m/s and arrive after it begins.
6. Record the real sound of the room and let people talk over each other; leave the voice-over out or limit it to 5% of the runtime.
7. Interview in the street or at home, and keep the question and the interviewer's voice in the cut.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A staged, re-enacted scene.
- **NEVER:** A voice-of-God narration over every shot.
- **NEVER:** Studio lighting with a key and a fill.
- **NEVER:** A tripod and a polished dolly move.
- **NEVER:** A score laid over the events.
- **NEVER:** A tidy interview in a set.
- **NEVER:** A cutaway that hides a jump.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■□` 4/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■□□□` 2/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■□□□□` 1/5 | found, unplanned | fully constructed |
| Grade stylisation | `■□□□□` 1/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A loose, shifting 1.33:1 frame; heads touch the edge, a back blocks the view, and the camera re-frames in the take.
- **Staging in depth:** Whatever the room gives: 2 to 4 planes of people, with a foreground shoulder or a door that cuts the frame.
- **Subject placement:** Wherever the person is; the frame follows by 0.3 to 0.8 s late and then corrects.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| framing | Shoot a loose 1.33:1 frame at eye level and let a head or a shoulder cut the frame. | 1.33:1 to 1.37:1, camera at 1.5 to 1.7 m |
| focal-point | Follow the person who speaks or acts, and let the frame find them a little late. | 0.3 to 0.8 s lag |
| layering-depth | Work in the room as it is: a foreground shoulder, the speaker and a window behind. | 2 to 4 planes, as found |
| lighting-layers | Use only the light in the room or the street, with no added lamp. | 0 added lamps, 2:1 or less key to fill |
| rhythm | Hold the take until the exchange ends, and cut at the end of an action. | 8 to 15 s average shot, takes of 20 to 120 s |

## Camera & movement

- **Movement:** A handheld follow with a pan and a zoom to find a face; the camera stays close, re-frames and breathes with the person.
- **Support:** Shoulder-mounted 16mm camera, handheld; a car or a chair for a ride
- **Camera height:** 1.3 to 1.7 m, eye level
- **Move speed:** Walking pace 1.0 to 1.5 m/s; a zoom over 1 to 3 s

## Lens & format

- **Aspect ratio:** 1.33:1 (16mm) or 1.37:1
- **Frame rate:** 24 fps (25 fps in Europe)
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** 9.5mm to 25mm (16mm format), equal to about 20mm to 60mm in 35mm format; zoom 12mm to 120mm
- **Aperture:** f/1.9 to f/4 with a fast stock pushed by 1 to 2 stops
- **Resolution:** 16mm negative; scan at 2K
- **Focus:** A hand-held focus that drifts; the subject can go soft for 1 to 3 s.
- **Equipment:** Éclair NPR or Arriflex 16mm camera · Nagra synchronous tape recorder · a zoom lens · fast 16mm stock pushed by 1 to 2 stops

## Light

- **Quality:** Whatever the place gives: window light, a bare bulb and street lamps, with deep shadows and burned highlights.
- **Direction:** From the window or a lamp in the frame; no key and no fill.
- **Key to fill ratio:** 2:1 or lower, left as found
- **Colour temperature:** Daylight 5600K or tungsten 3200K, left as found
- **Source:** Windows, bare bulbs and street lamps

## Colour & grade

- **Treatment:** Black and white with a rough, grainy full grey scale, or a plain colour print with no grade; the print shows its stock.
- **Grade recipe:**
  - Convert to black and white and set the black point at 5% and the white point at 97%.
  - Keep a plain contrast curve of +10% and let the windows clip.
  - Add grain at 25% to 35% to match 16mm stock pushed 2 stops.
  - Add 0.5% to 1% of frame jitter and a flash frame at the cut of a roll.
  - Do not add a tint, a LUT or a vignette.
- **Texture:** Coarse 16mm grain at 25% to 35%, with frame weave and flash frames

**Palette**

| Name | Hex | Role |
|---|---|---|
| Tape black | `#171717` | blacks |
| Room grey | `#74736F` | midtones |
| Face grey | `#B7B4AC` | skin |
| Window white | `#F0EEE6` | burned highlights |

## Editing & rhythm

- **Average shot length:** 8 to 15 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 1 s for a cutaway of a face to 120 s for a long take
- **Cutting logic:** Cut at the end of an action or a line, and keep the take as it ran, so the viewer sees a real event. Keep the jump when the camera runs out of film.
- **Transitions:** Hard cut, a flash frame at a roll change, a short black of 1 s and no dissolve.
- **Runtime:** 60 to 120 min

## Sound

- **Approach:** Synchronous location sound, with a boom or a lavalier; all noise of the place stays in the track.
- **Dialogue:** Unrehearsed and overlapping; the interviewer's question stays in the track and subtitles are used for translation only.
- **Music:** Only the music that is in the room: a band, a radio or a song on stage; no score.
- **Loudness:** −23 LUFS integrated for a restoration, with a wide dynamic range

## Titles & graphics

- **Treatment:** A plain title card in white on black or over the first shot; the date and the place in a lower-third caption.
- **Type:** A plain sans-serif in white upper case, 2 to 4 s for the title, 1 to 2 s for a caption.

## Shot primer

- **Opening:** Open in the middle of an event with sound already running; the first cut comes after 10 to 20 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Follow into a room | medium | 12mm (16mm format) | handheld follow 1.2 m/s | 25 |
| Long take of a conversation | medium | 25mm (16mm format) | handheld, zoom over 2 s | 60 |
| Face during a pause | close-up | 25mm (16mm format) | handheld | 6 |
| Crowd and stage | wide | 10mm (16mm format) | handheld pan 20° per second | 15 |
| Interview in the street | medium | 12mm (16mm format) | handheld | 20 |
| Flash frame and roll change | medium | 12mm (16mm format) | none | 1 |

## Video prompt primer

- **Positive:** 1960s observational documentary · handheld 16mm · available light · sync sound on location · grainy black and white · 1.33:1 frame · zoom to find a face · unscripted conversation · burned-out window · flash frame at a roll change
- **Negative:** staged scene · studio lighting · voice-of-god narration · score · tripod · colour grade · smooth gimbal

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Primary | Robert Drew and Richard Leacock | 1960 |
| Chronicle of a Summer | Jean Rouch and Edgar Morin | 1961 |
| Dont Look Back | D. A. Pennebaker | 1967 |
| Salesman | Albert and David Maysles | 1969 |
| Gimme Shelter | Albert and David Maysles | 1970 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | ambient illuminance (lux): 50–300 in a home; task illuminance (lux): 300–750; accent to ambient (ratio): 3:1 to 10:1; correlated colour temperature (kelvin): 2200–4000 in a home; key to fill (ratio): 2:1 to 8:1 in photography |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more story**: move toward [`italian-neorealism`](../italian-neorealism/SKILL.md) (Italian Neorealism). Keep the location and the plain light; write the scene, cast non-professionals and move the camera on a slow dolly.
- If the user asks for **more rhythm**: move toward [`soviet-montage`](../soviet-montage/SKILL.md) (Soviet montage). Keep the black and white; shorten the average shot to 2 to 3 s and join shots by contrast, not by the order of events.

- **Came from (go here for a more orthodox version):** [`soviet-montage`](../soviet-montage/SKILL.md)
- **Mixes well with:** [`french-new-wave`](../french-new-wave/SKILL.md)
- **Kin in another domain:** [`street-photography`](../street-photography/SKILL.md)
- **Nearest by vector profile:** [`italian-neorealism`](../italian-neorealism/SKILL.md), [`dogme-95`](../dogme-95/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)

## Emotional target

Presence and doubt: the viewer is in the room with real people and feels that nothing is arranged.

**Keywords:** raw, present, unscripted, intimate, urgent · **Brand archetypes:** everyman, explorer

## Sources

- [Wikidata Q1092621: Cinéma vérité](https://www.wikidata.org/wiki/Q1092621)
- [Wikidata Q1323308: Direct cinema](https://www.wikidata.org/wiki/Q1323308)
- [Wikidata Q1242182: Dont Look Back](https://www.wikidata.org/wiki/Q1242182)
- Stephen Mamber, Cinema Verite in America: Studies in Uncontrolled Documentary (MIT Press, 1974)
- Erik Barnouw, Documentary: A History of the Non-Fiction Film (Oxford University Press, 2nd ed., 1993)

---

Generated from [`data/film/styles/documentary-verite.json`](../../data/film/styles/documentary-verite.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
