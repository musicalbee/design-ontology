---
name: phone-cinema
description: "Apply the Phone cinema style (2015–today) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: shot on iphone, phone cinema, smartphone film, tangerine sean baker, mobile filmmaking, gimbal phone."
domain: film
era: platform-video
triggers:
  - "shot on iphone"
  - "phone cinema"
  - "smartphone film"
  - "tangerine sean baker"
  - "mobile filmmaking"
  - "gimbal phone"
vector_profile:
  camera_mobility: 4
  cutting_rate: 3
  staging: 3
  grade_stylisation: 2
  frame_width: 3
---

# Phone cinema

> A phone is light, cheap and always present, so a crew of 3 can shoot a feature in real streets and fix the look with an app and a grade.

A feature film or a brand film shot on a phone. The lens is wide and close. The camera slips into places a big rig cannot reach. Gimbal, clip-on lens and app give a controlled look at small cost.

**Period:** 2015–today · **Era:** Platform and creator video · **Domain:** Film & Video · **Also called:** Shot on iPhone, Smartphone filmmaking, Mobile cinema

## When to load this skill

Load it when the user asks for: "shot on iphone", "phone cinema", "smartphone film", "tangerine sean baker", "mobile filmmaking", "gimbal phone".

Good for: brand and product films that show a phone look, indie films and shorts on a low budget, street and travel films, video prompts for a close, wide-lens look.

Do not use it when:
- The brief needs a shallow, large-sensor depth of field.
- The scene needs a long telephoto lens.

## System directives

When planning, shooting, prompting, editing or grading moving images in Phone cinema, you MUST:

1. Shoot on a phone with a fixed, manual setting: 24 fps, 1/48 s shutter, low ISO and a locked white balance.
2. Use the main lens at 24mm to 26mm equivalent, and a clip-on anamorphic adapter for a 2.39:1 crop.
3. Shoot in log or the highest bit-depth mode, and grade in post to match a cinema look.
4. Mount the phone on a gimbal at 0.5 to 1.5 m/s, or hold it still on a clamp.
5. Use available light and small LED panels, and avoid the night noise with a 0.5 to 1 stop push only.
6. Fix the focus and the exposure on the face and lock them before the take.
7. Record the sound on a separate lavalier or recorder, and sync it in post.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A phone at auto exposure.
- **NEVER:** A shaky, unstabilised handheld clip.
- **NEVER:** The default phone colour with a heavy sharpening.
- **NEVER:** A vertical frame for a cinema release.
- **NEVER:** A sensor crop that digital zooms.
- **NEVER:** Phone microphone sound for the dialogue.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■□` 4/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■□□` 3/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■□□` 3/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■□□□` 2/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■■□□` 3/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A 16:9 or a 2.39:1 frame with a wide lens at 1 to 2 m from the subject; a street or a room fills the edges.
- **Staging in depth:** 3 planes: a close foreground, the figure and a street behind, with a wide lens that exaggerates depth.
- **Subject placement:** Off the centre at 1/3, with 10% to 20% headroom.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| focal-point | Lock the focus and the exposure on the face. | 1 focal point, 3:1 over its surround |
| framing | Crop to 2.39:1 with a clip-on anamorphic lens or in post. | frame area 100%, 2.39:1 crop |
| layering-depth | Use the wide lens to put a close object in front of the figure. | 3 planes, 1 close object at 10% of the frame |
| lighting-layers | Use one practical source and one small LED fill. | key to fill 3:1 to 4:1 |
| rhythm | Cut at the pace of the scene and hold each take. | 4 to 8 s average shot |

## Camera & movement

- **Movement:** A gimbal follow, a low or a tight angle in a small space, a car mount and a handheld walk.
- **Support:** Gimbal, clamp, small tripod and a car mount
- **Camera height:** 0.3 to 1.7 m; low angles are easy
- **Move speed:** 0.5 to 1.5 m/s on a gimbal

## Lens & format

- **Aspect ratio:** 16:9, 1.85:1 or 2.39:1 (a crop or an anamorphic adapter)
- **Frame rate:** 24 fps
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** 24mm to 26mm main lens equivalent; 48mm to 77mm for a close-up
- **Aperture:** f/1.5 to f/2.8 (fixed on the phone)
- **Resolution:** 4K at 24 fps in a high bit-depth or log mode
- **Focus:** Deep field on the main lens; a locked focus on the face
- **Equipment:** a phone with a log or a pro-res mode · a clip-on anamorphic adapter · a gimbal · a small LED panel · a lavalier microphone

## Light

- **Quality:** Soft, natural and practical light, with a small LED panel for the fill; a clean, even exposure.
- **Direction:** From a window or a lamp, and from the front or the side for the face.
- **Key to fill ratio:** 3:1 to 4:1
- **Colour temperature:** Daylight 5600K or 3200K lamps, locked on the phone
- **Source:** Windows, practical lamps and a small LED panel

## Colour & grade

- **Treatment:** A clean cinema grade made in post: a neutral colour, a soft contrast and a film-like roll-off on the highlights.
- **Grade recipe:**
  - Convert from log to Rec.709 with a standard LUT.
  - Set the black point at 3% and roll off the highlights above 90%.
  - Reduce the sharpening by 50% to 100%.
  - Add grain at 10% to 15% to hide the phone noise.
  - Add a soft bloom of 5% to 8% on the highlights.
- **Texture:** Light grain over a clean, small-sensor image

**Palette**

| Name | Hex | Role |
|---|---|---|
| Shadow blue | `#15202A` | shadow |
| Street grey | `#6C7076` | midtones |
| Skin tone | `#D3A98C` | faces |
| Highlight cream | `#F3EEE2` | highlights |

## Editing & rhythm

- **Average shot length:** 4 to 8 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 1 s for a cutaway to 2 min for a long gimbal take
- **Cutting logic:** Cut at the pace of the scene; use long gimbal takes and small camera positions that a big rig cannot reach.
- **Transitions:** Hard cut, a short dissolve and a fade to black.
- **Runtime:** 85 to 120 min

## Sound

- **Approach:** Separate sound on a lavalier or a boom, synced in post; a clean room tone.
- **Dialogue:** Natural and close; no phone microphone for the main take.
- **Music:** A score or a licensed track; a source song in the scene.
- **Loudness:** −23 LUFS integrated

## Titles & graphics

- **Treatment:** A clean title card and an end card; a small 'Shot on' line in a lower-left card for a brand film.
- **Type:** A clean sans-serif in white, 2 to 4 s per card.

## Shot primer

- **Opening:** Open on a gimbal move or a close, wide-lens shot of a street within the first 10 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Walk on a street, gimbal | wide | 24mm | gimbal follow 1.2 m/s | 20 |
| Face in a car | close-up | 48mm | static clamp | 8 |
| Low angle on a stair | wide | 24mm | gimbal rise 0.5 m/s | 6 |
| Two people in a small room | two-shot | 24mm | static | 15 |
| A phone screen insert | insert | 24mm | static | 3 |
| Night street, push of 1 stop | wide | 24mm | handheld | 8 |

## Video prompt primer

- **Positive:** shot on a smartphone, cinema look · wide 24mm lens at close range · gimbal follow · 2.39:1 anamorphic crop · soft natural light · locked exposure on the face · light film grain over a clean image · low angle in a tight space · neutral cinema grade
- **Negative:** vertical frame · auto exposure flicker · oversharpened phone image · digital zoom · shaky unstabilised clip · phone microphone sound

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Tangerine | Sean Baker | 2015 |
| Unsane | Steven Soderbergh | 2018 |
| High Flying Bird | Steven Soderbergh | 2019 |
| Shot on iPhone (campaign) | Apple | 2015 |
| Scary Fast (event film) | Apple | 2023 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | key to fill (ratio): 2:1 flat and natural; 4:1 glamour; 8:1 or more for deep shadow |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Handheld camera (tool)

A camera that the operator carries on the body, with no tripod or dolly; the shake of the body shows in the frame. Origin: film & video, Paris, c. 1960.

- Use a light camera and a wide lens of 18mm to 35mm so that the shake stays small in the frame.
- Follow the action at the pace of a walking person and let the frame move 2% to 5% off the subject.
- Do not stabilise in post; accept a late refocus and a missed frame as part of the take.
- Shoot long takes of 30 seconds or more, so that the camera seems to live in the room.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Sundance Film Festival** (salon, Park City, Utah, 1978–now), exhibited the style. A festival of independent film. The Blair Witch Project and the iPhone feature Tangerine had their premieres here.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 2.39:1 | 1.85:1, 2.39:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 24 | 24–24 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 6 | 4–8 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 5600 | 3200–5600 K | colour_and_grade, light |
| Grain (`grain`) | 0.12 | 0.1–0.15 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more vertical**: move toward [`vertical-short-form`](../vertical-short-form/SKILL.md) (Vertical short-form). Keep the phone; crop to 9:16, move the subject to the safe zone and cut at 2 to 4 s.
- If the user asks for **more cinema**: move toward [`dogme-95`](../dogme-95/SKILL.md) (Dogme 95). Keep the digital image and the real rooms; add a strict set of rules for light and sound.

- **Came from (go here for a more orthodox version):** [`dogme-95`](../dogme-95/SKILL.md), [`mumblecore`](../mumblecore/SKILL.md)
- **Mixes well with:** [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`french-new-wave`](../french-new-wave/SKILL.md), [`creator-vlog`](../creator-vlog/SKILL.md), [`found-footage`](../found-footage/SKILL.md)

## Emotional target

Immediacy and intimacy: the viewer feels close to the street and the face, and sees how little gear a film needs.

**Keywords:** immediate, intimate, lightweight, street-level, accessible · **Brand archetypes:** everyman, explorer

## Sources

- [Tangerine (2015 film)](https://en.wikipedia.org/wiki/Tangerine_(film))
- [Unsane](https://en.wikipedia.org/wiki/Unsane)
- [Shot on iPhone (Apple campaign)](https://www.apple.com/iphone/shot-on-iphone/)

---

Generated from [`data/film/styles/phone-cinema.json`](../../data/film/styles/phone-cinema.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
