---
name: vertical-short-form
description: "Apply the Vertical short-form style (2016–today) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: tiktok, reels, shorts, vertical video, 9:16, short form."
domain: film
era: platform-video
triggers:
  - "tiktok"
  - "reels"
  - "shorts"
  - "vertical video"
  - "9:16"
  - "short form"
  - "hook"
  - "phone video"
vector_profile:
  camera_mobility: 4
  cutting_rate: 5
  staging: 3
  grade_stylisation: 3
  frame_width: 1
---

# Vertical short-form

> A viewer swipes in 1 to 2 s, so every second must earn the next: the hook, the cut and the caption are the whole design.

A full-screen 9:16 clip of 15 to 45 s, shot on a phone and cut every 1.5 to 3 s. A hook in the first second, burned-in captions and a sound that can loop. The feed decides each rule.

**Period:** 2016–today · **Era:** Platform and creator video · **Domain:** Film & Video · **Also called:** TikTok style, Reels style, Shorts style, 9:16 video

## When to load this skill

Load it when the user asks for: "tiktok", "reels", "shorts", "vertical video", "9:16", "short form", "hook", "phone video".

Good for: social ads and paid creative, creator and brand channels, product demos under 30 s, video prompts for a vertical clip.

Do not use it when:
- The brief needs a cinema screen, a wide frame or a slow mood.
- The piece must hold a long argument of over 60 s.

## System directives

When planning, shooting, prompting, editing or grading moving images in Vertical short-form, you MUST:

1. Frame in 9:16 at 1080 × 1920 px, 30 fps (24 or 60 allowed), 180° shutter, and fill the screen edge to edge.
2. Put the hook in the first 1 to 2 s: a face, a movement or a text line; the first cut comes by 3 s.
3. Cut or change the picture every 1.5 to 3 s: new angle, new scale, a punch-in of 10% to 20% or a new caption.
4. Keep faces and captions inside the safe zone: leave the bottom 20% and the top 7% of the height and the right 12% of the width clear for the interface.
5. Burn in captions of 1 to 6 words for each beat, at 48 px or larger on a 1080 px wide frame, 2 lines at most.
6. Shoot the main camera at 24mm (35mm format) at 0.3 to 1.5 m from the subject, with a ring light or a window at 5600K.
7. End so the clip loops: match the last frame to the first, and keep the run time at 15 to 45 s.
8. Mix to −14 LUFS integrated with the voice over a trending or looped sound.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A horizontal 16:9 clip with black bars above and below.
- **NEVER:** A slow intro or a logo before the hook.
- **NEVER:** Captions under the platform interface or in the safe-zone margin.
- **NEVER:** A wide establishing shot held for more than 3 s.
- **NEVER:** A cinematic letterbox with a 2.39:1 crop.
- **NEVER:** A voice with no captions on a feed that plays muted.
- **NEVER:** A clip longer than 60 s with no change of angle.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■□` 4/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■■■` 5/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■□□` 3/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■■□□` 3/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■□□□□` 1/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A full-screen 9:16 frame; the subject fills 40% to 70% of the height, with the face in the upper half.
- **Staging in depth:** The subject within 0.3 to 1.5 m, a simple background at 2 to 3 m; one layer of text on top.
- **Subject placement:** Centred or on the vertical axis, with the eyes at 30% to 40% of the height from the top.

## Camera & movement

- **Movement:** Handheld selfie arm, a push-in, a whip pan or a spin as a transition; the phone is a part of the act.
- **Support:** Handheld selfie arm, phone gimbal or a tripod with a clip
- **Camera height:** At the eye or slightly above, 1.5 to 1.8 m; low for dance
- **Move speed:** Whip pan 180° per second; push-in 0.5 m/s

## Lens & format

- **Aspect ratio:** 9:16 (1080 × 1920 px)
- **Frame rate:** 30 fps (24 or 60 fps allowed)
- **Shutter angle:** 180° (1/60 s at 30 fps)
- **Focal length:** Phone main camera, 24mm (35mm format); ultra-wide 13mm for movement
- **Aperture:** Fixed, f/1.6 to f/1.9
- **Resolution:** 4K capture, 1080 × 1920 px delivery
- **Focus:** Face autofocus; the phone gives a soft, computed background in portrait mode.
- **Equipment:** smartphone · ring light · phone tripod or gimbal

## Light

- **Quality:** Soft and frontal: a ring light, a window or a screen, with an even face.
- **Direction:** From the front and slightly above, with a bright face on a darker ground.
- **Key to fill ratio:** 1.5:1 to 2:1
- **Colour temperature:** 5600K daylight or a 5000K to 5600K ring light
- **Source:** Ring light, window or LED panel

## Colour & grade

- **Treatment:** Bright and punchy, with a clear face and a high-contrast, saturated image that survives compression.
- **Grade recipe:**
  - Set the black point at 4% and the white point at 98%.
  - Add contrast of +15% and keep skin at 60% to 75% luma.
  - Raise saturation by +15% and vibrance by +20%; the colour must survive heavy compression.
  - Sharpen at 20% and apply a built-in filter at no more than 50% strength.
  - Add no grain and no letterbox.
- **Texture:** Clean phone image with sharpening; noise under 3%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Bright skin | `#E8B99B` | face |
| Clean white | `#F6F4EF` | backgrounds |
| Pop colour | `#FF3D6E` | caption and accent |
| Deep ground | `#1B1B24` | dark background |
| Electric blue | `#2D6BFF` | accent |

## Editing & rhythm

- **Average shot length:** 1.5 to 3 s
- **Shot length range:** 0.3 s for a beat cut to 6 s for a payoff
- **Cutting logic:** Cut on the beat of the sound and on each new line. Change the picture at least every 3 s, and cut on movement.
- **Transitions:** Hard cut, a whip, a spin or an object wipe of 4 to 8 frames; no slow dissolve.
- **Runtime:** 15 to 45 s; loop at the end

## Sound

- **Approach:** The sound leads the edit: a trending track, a voice-over or a sound bite. Captions cover the muted viewer.
- **Dialogue:** Direct address of 150 to 200 words per minute, or lip-sync to a sound.
- **Music:** A looped track of 15 to 30 s with a drop at 2 to 5 s; keep it under the voice by 12 to 18 dB.
- **Loudness:** −14 LUFS integrated, −1 dBTP true peak

## Titles & graphics

- **Treatment:** Burned-in captions with one highlighted word, stickers and arrows, and a text hook at 0 to 2 s.
- **Type:** Bold sans-serif at 48 px or larger on a 1080 px frame, white with a 3 px outline or on a colour bar; inside the safe zone.

## Shot primer

- **Opening:** A face or a movement fills the frame at 0 s with a text hook in 6 words or fewer; the first cut comes by 3 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Hook to camera | close-up | 24mm | handheld arm | 2 |
| Punch-in beat | close-up | 24mm | 15% punch-in | 2 |
| Detail or demo | close-up | 24mm | static | 2.5 |
| Whip transition | medium | 13mm | whip pan 180°/s | 0.5 |
| Payoff | medium | 24mm | handheld | 3 |
| Loop frame | close-up | 24mm | handheld arm | 2 |

## Video prompt primer

- **Positive:** vertical 9:16 short video · phone footage · hook in the first second · fast cuts every two seconds · burned-in captions · ring light on the face · punch-in zoom · whip pan transition · bright saturated colour · loopable ending
- **Negative:** horizontal letterbox · slow intro · long establishing shot · cinematic 2.39:1 · film grain · muted colour · captions in the interface zone

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Renegade dance clip | Jalaiah Harmon | 2019 |
| Wordless life-hack reaction clips | Khaby Lame | 2020 |
| M to the B | Bella Poarch | 2020 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Jump cut (montage)

A cut inside one continuous shot that removes time and leaves the jump in view. Origin: film & video, Paris, 1960.

- Remove 0.3 to 2 seconds inside one shot and keep the framing within 10% of the frame width, so that the jump shows.
- In a talk to camera, cut on the word and not on the action: one cut every 2 to 4 seconds.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more cinematic**: move toward [`cinematic-fpv`](../cinematic-fpv/SKILL.md) (Cinematic FPV). Keep the vertical frame only if needed; move to one long flowing shot of 20 s or more and a graded look.
- If the user asks for **more lo-fi**: move toward [`camcorder-revival`](../camcorder-revival/SKILL.md) (Camcorder revival). Keep the hook and the 9:16 frame; add a tape look, a date stamp and on-camera sound, and slow the cut to 3 to 6 s.

- **Came from (go here for a more orthodox version):** [`creator-vlog`](../creator-vlog/SKILL.md)
- **Mixes well with:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`cinematic-fpv`](../cinematic-fpv/SKILL.md), [`creator-vlog`](../creator-vlog/SKILL.md)
- **Nearest by vector profile:** [`soviet-montage`](../soviet-montage/SKILL.md), [`creator-vlog`](../creator-vlog/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)

## Emotional target

A quick hit of surprise and belonging: the viewer is in on the joke inside 3 s.

**Keywords:** fast, punchy, playful, immediate, social · **Brand archetypes:** jester, everyman

## Sources

- [Wikidata Q59688552: vertical video](https://www.wikidata.org/wiki/Q59688552)
- [Wikidata Q48938223: TikTok](https://www.wikidata.org/wiki/Q48938223)
- [Wikidata Q125420621: Instagram reel](https://www.wikidata.org/wiki/Q125420621)
- [Loudness reference: ITU-R BS.1770 and EBU R128 (levels in LUFS)](https://tech.ebu.ch/loudness)
- Platform creative guides (TikTok, Instagram, YouTube): safe zones change by app version, so check the current guide

---

Generated from [`data/film/styles/vertical-short-form.json`](../../data/film/styles/vertical-short-form.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
