---
name: dogme-95
description: "Apply the Dogme 95 style (1995–2005) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: dogme, dogme 95, vow of chastity, handheld naturalism, no lighting, raw handheld drama."
domain: film
era: digital-cinema
triggers:
  - "dogme"
  - "dogme 95"
  - "vow of chastity"
  - "handheld naturalism"
  - "no lighting"
  - "raw handheld drama"
  - "festen look"
  - "von trier"
vector_profile:
  camera_mobility: 5
  cutting_rate: 3
  staging: 1
  grade_stylisation: 1
  frame_width: 2
---

# Dogme 95

> A fixed set of prohibitions removes illusion, polish and the director's taste, so that the truth of the scene remains.

A film made under a written vow: handheld camera, real locations, available light and the sound of the scene. The rules remove the tools that fake the world, so the actors and the room carry the film.

**Period:** 1995–2005 · **Era:** Lightweight digital and the manifesto · **Domain:** Film & Video · **Also called:** Dogma 95, Vow of Chastity

## When to load this skill

Load it when the user asks for: "dogme", "dogme 95", "vow of chastity", "handheld naturalism", "no lighting", "raw handheld drama", "festen look", "von trier".

Good for: a drama on one location, documentary-style brand story, actor-led short film, video prompts for a raw family scene.

Do not use it when:
- The brief needs a polished product or a hero shot.
- The piece must look good at a glance on a phone feed.

## System directives

When planning, shooting, prompting, editing or grading moving images in Dogme 95, you MUST:

1. Shoot on location with the props that are already there; bring in no set piece.
2. Hold the camera in the hand for every shot; keep the camera at 1.4 to 1.7 m and let it search, with reframes every 3 to 8 s.
3. Light only with the available light; if the room is too dark, fix one lamp to the camera and nothing else.
4. Shoot in colour at 4:3 or Academy 1.37:1, at 25 fps (PAL) or 24 fps, with a 180° shutter and no filter.
5. Record sound with the picture; add no music unless it plays in the room where the scene is shot.
6. Cut at an average shot length of 4 to 8 s (estimate; check Cinemetrics for each title) with jump cuts that stay in the film.
7. Use no genre and no superficial action: no murder, no weapon; keep the time and place of the story in the here and now.
8. Leave the director out of the credits.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A tripod, a dolly or a crane.
- **NEVER:** Added music or sound effects laid under a scene.
- **NEVER:** Studio lighting, a lit set or a coloured filter.
- **NEVER:** Optical effects and a post-produced colour grade.
- **NEVER:** A genre film with set-piece action.
- **NEVER:** A director credit and a signature style.
- **NEVER:** A period setting.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■■` 5/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■□□` 3/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■□□□□` 1/5 | found, unplanned | fully constructed |
| Grade stylisation | `■□□□□` 1/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A loose 4:3 frame; a head can touch the edge and a back can block the view for 1 to 3 s.
- **Staging in depth:** The camera moves through the room among 3 to 8 people; the foreground is often an obstruction.
- **Subject placement:** Wherever the actor stands; the frame follows, late by 0.2 to 0.5 s, and then corrects.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| framing | Shoot a 4:3 frame by hand and let the head or the back cut the frame for 1 to 3 s. | head or back cuts 10% to 25% of the frame for 1 to 3 s |
| focal-point | Let the frame follow the actor late by 0.2 to 0.5 s and then correct, so the subject is never fixed. | 0.2 to 0.5 s lag |
| layering-depth | Put the camera in the room among the people, with the foreground as an obstruction. | 3 to 8 people in frame |
| lighting-layers | Use only the light in the room: no added lamp, no filter. | 0 added lamps |
| unity-variety | Hold one handheld, un-graded look for the whole film, with no optical effect. | 0 optical effects |

## Camera & movement

- **Movement:** Handheld at all times, with a visible search for the action: a late pan, a jerk, a reframe. No stabiliser.
- **Support:** Handheld; shoulder or hand
- **Camera height:** 1.4 to 1.7 m, eye level
- **Move speed:** Walking pace, 1.0 to 1.5 m/s; reframe pans of 30° to 90° in under 1 s

## Lens & format

- **Aspect ratio:** 4:3 (video) or Academy 1.37:1
- **Frame rate:** 25 fps (PAL) or 24 fps
- **Shutter angle:** 180° (1/50 s at 25 fps)
- **Focal length:** Zoom on a small camcorder, about 35mm to 60mm (35mm format) at the wide-to-mid end
- **Aperture:** Auto, f/2.0 to f/4
- **Resolution:** Standard-definition DV, 720 × 576 px
- **Focus:** Autofocus that hunts; focus loss is part of the film.
- **Equipment:** consumer MiniDV camcorder · camera-mounted lamp (one) · on-camera microphone

## Light

- **Quality:** Available light only: window, lamp and street. Faces drop into shadow and highlights clip.
- **Direction:** Wherever the room puts it; the actor can be against the window.
- **Key to fill ratio:** Uncontrolled, 2:1 to 8:1
- **Colour temperature:** Mixed 3200K tungsten and 5600K daylight, left uncorrected
- **Source:** Room lights, windows, one lamp fixed to the camera

## Colour & grade

- **Treatment:** Un-graded colour. Mixed white balance and the limits of the DV sensor are the look.
- **Grade recipe:**
  - Keep the camera white balance; set no LUT.
  - Correct only exposure: set the black point at 5% and the white point at 100%.
  - Leave the mixed colour temperature: 3200K and 5600K in one frame.
  - Keep the noise and the compression; add no grain.
  - Add no vignette and no sharpening beyond the camera default.
- **Texture:** DV compression blocks and sensor noise, amount 8% to 12%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Tungsten amber | `#B9803F` | room lamps |
| Window blue | `#8FA3B8` | daylight spill |
| Skin | `#C99A7C` | faces |
| Wall beige | `#CDBFA6` | interiors |
| Shadow | `#2A2622` | dark room |

## Editing & rhythm

- **Average shot length:** 4 to 8 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 1 s to 90 s for a long scene take
- **Cutting logic:** Cut on the performance. Cover a scene with 1 to 3 takes and keep the lost focus and the shake.
- **Transitions:** Hard cut and jump cut only; no dissolve, no fade, no effect.
- **Runtime:** 90 to 110 min

## Sound

- **Approach:** Sound and picture are recorded together; no sound is made apart from the image.
- **Dialogue:** Overlapping, natural, with room tone; no post-dubbing.
- **Music:** Only music that plays in the room, such as a radio or a band at a party.
- **Loudness:** −23 LUFS integrated (EBU R128), no limiter pumping

## Titles & graphics

- **Treatment:** A plain card with the title and the Dogme certificate number; no director credit.
- **Type:** White sans-serif on black, 1 to 3 s, no animation.

## Shot primer

- **Opening:** Open inside the room with the camera already moving; no establishing shot and no music.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Arrival in the hall | medium | 35mm | handheld follow 1.2 m/s | 8 |
| Table speech | medium close-up | 50mm | handheld, reframe every 4 s | 45 |
| Reaction | close-up | 50mm | handheld | 3 |
| Corridor argument | medium | 35mm | handheld follow 1.3 m/s | 30 |
| Window face | close-up | 50mm | handheld | 6 |

## Video prompt primer

- **Positive:** Dogme 95 film · handheld camera · available light only · 4:3 standard-definition video look · real location with no set dressing · jump cut · focus hunting
- **Negative:** tripod or dolly · dramatic lighting · film score · colour grade or LUT · visual effects · genre action · smooth gimbal

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Festen (The Celebration) | Thomas Vinterberg | 1998 |
| The Idiots | Lars von Trier | 1998 |
| Mifune | Søren Kragh-Jacobsen | 1999 |
| Julien Donkey-Boy | Harmony Korine | 1999 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | key to fill (ratio): 2:1 flat and natural; 4:1 glamour; 8:1 or more for deep shadow |
| `unity-variety` | Unity and variety | Repeated materials, colours and shapes join the parts into one whole. A small, planned number of deviations keeps the whole alive. | materials or hues that repeat (count): 2 to 4; deliberate deviations (count): 1 to 2 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polished**: move toward [`french-new-wave`](../french-new-wave/SKILL.md) (French New Wave). Keep the handheld camera and the location; move to 35mm black and white at 24 fps, add a bounce light and allow a music cue.
- If the user asks for **more everyday**: move toward [`creator-vlog`](../creator-vlog/SKILL.md) (Creator vlog). Keep the handheld camera and the room tone; address the lens, shoot 16:9 and allow cuts to remove every pause.

- **Led to (go here for a newer version):** [`mumblecore`](../mumblecore/SKILL.md), [`phone-cinema`](../phone-cinema/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`french-new-wave`](../french-new-wave/SKILL.md)
- **Was rejected by:** [`planimetric-symmetry`](../planimetric-symmetry/SKILL.md)
- **Mixes well with:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`found-footage`](../found-footage/SKILL.md)
- **Kin in another domain:** [`brutalist-architecture`](../brutalist-architecture/SKILL.md), [`documentary-photography`](../documentary-photography/SKILL.md), [`straight-photography`](../straight-photography/SKILL.md)
- **Nearest by vector profile:** [`documentary-verite`](../documentary-verite/SKILL.md), [`found-footage`](../found-footage/SKILL.md), [`mumblecore`](../mumblecore/SKILL.md)

## Emotional target

Discomfort and honesty: the viewer is in the room and cannot look away.

**Keywords:** raw, honest, uncomfortable, intimate, unpolished · **Brand archetypes:** outlaw, everyman

## Sources

- [Wikidata Q211481: Dogme 95](https://www.wikidata.org/wiki/Q211481)
- [Wikidata Q841958: The Celebration](https://www.wikidata.org/wiki/Q841958)
- [Dogme 95 manifesto and Vow of Chastity (Lars von Trier and Thomas Vinterberg, 1995)](https://en.wikipedia.org/wiki/Dogme_95)
- [Danish Film Institute: Dogme Revisited](https://www.dfi.dk/en/node/43387)

---

Generated from [`data/film/styles/dogme-95.json`](../../data/film/styles/dogme-95.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
