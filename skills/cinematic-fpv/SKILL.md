---
name: cinematic-fpv
description: "Apply the Cinematic FPV style (2019–today) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: fpv, fpv drone, drone dive, one take flight, cinewhoop, flythrough."
domain: film
era: platform-video
triggers:
  - "fpv"
  - "fpv drone"
  - "drone dive"
  - "one take flight"
  - "cinewhoop"
  - "flythrough"
  - "first person view"
  - "oner"
vector_profile:
  camera_mobility: 5
  cutting_rate: 1
  staging: 3
  grade_stylisation: 3
  frame_width: 4
---

# Cinematic FPV

> A camera that can go anywhere should not cut: one unbroken flight turns space itself into the story.

One continuous flight through a place: a small drone with an ultra-wide camera dives, banks and threads gaps at 15 to 35 m/s. The camera moves like a bird, and the cut hides inside a wipe.

**Period:** 2019–today · **Era:** Platform and creator video · **Domain:** Film & Video · **Also called:** FPV drone, Drone dive, Cinewhoop and freestyle FPV

## When to load this skill

Load it when the user asks for: "fpv", "fpv drone", "drone dive", "one take flight", "cinewhoop", "flythrough", "first person view", "oner".

Good for: automotive and sport launch films, real estate and travel flythroughs, music video with a one-take flight, video prompts for a drone fly-through.

Do not use it when:
- The brief needs a still, formal frame or a face at close range.
- The site is indoors with people and no flight permission or safety plan.

## System directives

When planning, shooting, prompting, editing or grading moving images in Cinematic FPV, you MUST:

1. Fly one continuous shot of 20 to 60 s and hide each cut in a wipe: pass behind a pillar, a tree or a wall at 0 to 2 frames of black.
2. Shoot at 4K 60 fps with a 180° shutter (1/120 s) and conform to 24 or 30 fps for a slow-motion drift of 40% to 50% speed in the slow parts.
3. Use an ultra-wide lens of 150° to 170° field of view (about 14mm equivalent) and hold a subject at 3 to 10 m from the lens for scale.
4. Fly at 15 to 35 m/s on a dive and at 3 to 8 m/s for a reveal, and keep the camera uptilt at 25° to 45°.
5. Fit an ND filter of ND8 to ND16 in daylight so that the shutter stays at 180°.
6. Shoot in a flat log profile and grade with one LUT at a gain of 60% to 80%, saturation +10%.
7. Match each speed change to the music on a beat of 90 to 130 bpm and mix at −14 LUFS.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A cut every 2 s on a rapid-fire montage.
- **NEVER:** A slow, high-altitude orbit at 5 m/s.
- **NEVER:** A shaky, unstabilised shot with a rolling-shutter wobble.
- **NEVER:** A shutter faster than 1/500 s that makes the flight look stuttered.
- **NEVER:** A flat, eye-level pan with no change of altitude.
- **NEVER:** A flight that ignores the subject and only shows the sky.
- **NEVER:** A clip with the on-screen display left in.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■■` 5/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■□□□□` 1/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■□□` 3/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■■□□` 3/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■■■□` 4/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A wide 16:9 or 2.39:1 crop; the subject or the gap fills 15% to 30% of the frame, and the horizon tilts with the bank.
- **Staging in depth:** A layered path: foreground obstacle at 1 to 3 m, subject at 5 to 20 m and the open space beyond.
- **Subject placement:** On a third line; the path leads from the bottom corner to the subject on a curve.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| leading-lines | Fly along a line in the scene, such as a ridge, a stair or a rail, and let it lead the eye through the shot. | 1 leading line per shot |
| layering-depth | Pass an object in the foreground to give a 3-plane parallax: near, mid and far. | 3 planes, near pass at 0.5 to 2 m |
| scale | Fly through an opening that is only a little wider than the drone to show size by tension. | gap 1.2 to 2 times the drone width |
| rhythm | Hold one fast flight line of 15 to 40 s with one cut, and avoid cutting inside the dive. | 1 to 3 cuts per 60 s |
| focal-point | Aim the nose at the target and keep it on the third line as the camera dives. | target on the upper or lower third |

## Camera & movement

- **Movement:** A single flight line with dives, banks, flips and gap threads; the speed changes by 3 to 5 times along the path.
- **Support:** 5-inch or 3-inch FPV drone with an action camera or a cinema camera
- **Camera height:** 0.5 to 50 m, changing along the path
- **Move speed:** Dive 25 to 35 m/s; cruise 15 m/s; reveal 3 to 8 m/s

## Lens & format

- **Aspect ratio:** 16:9 (3840 × 2160 px); crop to 2.39:1 for a cinema piece
- **Frame rate:** 60 fps capture, conform to 24 or 30 fps
- **Shutter angle:** 180° (1/120 s at 60 fps)
- **Focal length:** Ultra-wide, about 14mm (35mm format), 150° to 170° field of view
- **Aperture:** f/2.5 to f/2.8 with ND8 to ND16
- **Resolution:** 4K at 60 fps, 10-bit where the camera allows
- **Focus:** Fixed, deep focus from 1 m to infinity; no focus pulls in flight.
- **Equipment:** FPV drone · action camera or compact cinema camera · ND filter set · goggles and a spotter

## Light

- **Quality:** Natural light at golden hour or in soft overcast; a hard noon sun is allowed when a shadow gives scale.
- **Direction:** Side or back light on the subject, so that edges and spray glow; keep the sun out of the lens by 30° or more.
- **Key to fill ratio:** Natural, 3:1 to 5:1
- **Colour temperature:** Daylight 5600K; golden hour 3500K to 4500K
- **Source:** Sun and sky

## Colour & grade

- **Treatment:** A clean log-to-LUT grade. Saturation and contrast are up a little, so that sky and speed read at once.
- **Grade recipe:**
  - Set the base to the flat log profile and add a conversion LUT at 70% strength.
  - Set the black point at 3% and the white point at 98%.
  - Add an S-curve of +20% contrast and a highlight roll-off from 85%.
  - Raise saturation by +10% and pull the sky to hue 215°, a little deeper.
  - Add motion-matched sharpening at 10% and no grain.
- **Texture:** Clean 10-bit image; mild sharpening of 10%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Sky blue | `#4F8FD6` | sky |
| Deep shadow | `#10161F` | shadow and tunnels |
| Golden light | `#F0B35A` | sun and edges |
| Concrete grey | `#8A8F95` | buildings |
| Foliage green | `#4C7A3E` | trees |

## Editing & rhythm

- **Average shot length:** 20 to 60 s for a one-take; 6 to 12 s in a sequence of linked flights
- **Shot length range:** 4 s to 120 s
- **Cutting logic:** Cut only on a wipe: match the object that fills the frame, and join the flights by that object and by the beat of the music.
- **Transitions:** Object wipe of 0 to 2 frames, speed ramp of 0.5 to 1 s, match on a flip or a dive.
- **Runtime:** 60 to 180 s

## Sound

- **Approach:** Music leads. The prop and wind noise of the drone mix in at −20 to −26 dB under the score for a feel of speed.
- **Dialogue:** None, or a short voice-over of 1 to 2 lines.
- **Music:** A driving electronic or cinematic score at 90 to 130 bpm; each speed ramp lands on a beat.
- **Loudness:** −14 LUFS integrated, −1 dBTP true peak

## Titles & graphics

- **Treatment:** None in the flight. A lower-third place name or a title card of 1.5 to 2 s at the end.
- **Type:** Light, wide-tracked sans-serif, white, at 4% of frame height.

## Shot primer

- **Opening:** Open on a fast move toward a gap or a drop in the first 2 s; no hold on a static frame.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Gap approach | wide | 14mm | flight 15 m/s, uptilt 30° | 6 |
| Dive down a face | wide | 14mm | dive 30 m/s | 8 |
| Pass behind a pillar (wipe) | wide | 14mm | flight 12 m/s | 3 |
| Orbit the subject | wide | 14mm | banking arc 8 m/s | 10 |
| Slow reveal | wide | 14mm | flight 4 m/s, 2x slow motion | 8 |
| Pull up to the sky | wide | 14mm | climb 15 m/s | 5 |

## Video prompt primer

- **Positive:** FPV drone shot · single continuous take · ultra-wide 150 degree lens · fast dive and bank · threading a gap · golden hour light · speed ramp on the beat · smooth stabilised footage · motion blur at 180 degree shutter · object wipe transition
- **Negative:** static tripod shot · slow orbit at height · fast cuts every two seconds · shaky rolling shutter · on-screen display · flat grey sky · fish-eye distortion with no horizon

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Burj Khalifa FPV dive | Johnny FPV | 2020 |
| Drive 2 Extremes: Taycan Cross Turismo | Johnny FPV for Porsche | 2021 |
| Red Bull FPV drone at the Las Vegas Grand Prix | Johnny FPV | 2023 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | seat height (cm): 38–46; largest piece to room width (ratio): 0.3–0.6; ceiling height to door height (ratio): 1.2–1.5 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repeated interval (cm or px): style module; repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more stable**: move toward [`french-new-wave`](../french-new-wave/SKILL.md) (French New Wave). Replace the flight with a handheld follow at 1.2 m/s and keep the single long take of 20 to 60 s.
- If the user asks for **shorter**: move toward [`vertical-short-form`](../vertical-short-form/SKILL.md) (Vertical short-form). Keep the dive; cut the flight to 15 to 30 s in 9:16 and add a caption hook in the first 2 s.

- **Mixes well with:** [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`new-hollywood`](../new-hollywood/SKILL.md), [`camcorder-revival`](../camcorder-revival/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)

## Emotional target

Exhilaration and weightlessness: the viewer flies through a space no camera could reach.

**Keywords:** exhilarating, fluid, immersive, kinetic, vertiginous · **Brand archetypes:** explorer, hero

## Sources

- [Wikidata Q22907956: drone racing](https://www.wikidata.org/wiki/Q22907956)
- [Wikidata Q25212003: one-shot film](https://www.wikidata.org/wiki/Q25212003)
- [Porsche Newsroom: Drive 2 Extremes, Taycan Cross Turismo with Johnny FPV (2021)](https://newsroom.porsche.com/christophorus/ja/2021/399/drive-2-extremes-taycan-cross-turismo-johnny-fpv.html)
- [DroneDJ: FPV dive the Burj Khalifa (2021 report on the 2020 video)](https://dronedj.com/2021/01/12/fpv-dive-the-burj-khalifa-the-tallest-building-in-the-world/)

---

Generated from [`data/film/styles/cinematic-fpv.json`](../../data/film/styles/cinematic-fpv.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
