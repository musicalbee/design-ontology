---
name: y2k-digicam
description: "Apply the Y2K digicam style (1999–2009) when making, briefing, prompting or grading photographs. Load when the user asks for: y2k digicam, digicam, early digital camera, ccd, 2000s photo, point and shoot."
domain: photography
era: digital-and-grade
triggers:
  - "y2k digicam"
  - "digicam"
  - "early digital camera"
  - "ccd"
  - "2000s photo"
  - "point and shoot"
  - "nostalgic digital"
  - "cybershot"
vector_profile:
  staging: 2
  tonal_contrast: 3
  colour_saturation: 3
  depth_of_field: 1
  proximity: 3
---

# Y2K digicam

> The flaws of a cheap early sensor are the style: they mark a moment in time and read as honest.

The look of a 2 to 5 megapixel CCD compact: deep focus from a tiny sensor, blown highlights, a hard on-camera flash, over-sharpened edges and clumsy white balance. It is a record of a device and now a deliberate nostalgia.

**Period:** 1999–2009 · **Era:** Digital and the grade · **Domain:** Photography · **Also called:** Early digital compact, CCD compact look

## When to load this skill

Load it when the user asks for: "y2k digicam", "digicam", "early digital camera", "ccd", "2000s photo", "point and shoot", "nostalgic digital", "cybershot".

Good for: fashion and music campaigns with a nostalgic tone, social media content, album and zine artwork, image prompts for 2000s scenes.

Do not use it when:
- The brief needs a clean, premium or technical image.
- Detail must be legible at a large print size.

## System directives

When making, briefing, prompting or grading photographs in Y2K digicam, you MUST:

1. Emulate a small sensor (1/2.7 in, crop factor about 6) with a real focal length of 5.8mm, which is 35mm in 35mm format, and a deep focus from 0.5m to infinity.
2. Clip the highlights: set the white point at 100% and let skies and skin go to pure white.
3. Use the pop-up flash on every indoor shot, with a ratio to ambient of 6:1 and a hard, flat face.
4. Limit the image to 1600×1200 px (2MP) or 2048×1536 px (3MP), saved as a compressed JPEG at quality 60–75.
5. Add the sensor faults: chroma noise at ISO 200 and above, purple fringing at high-contrast edges and a slight green or magenta cast.
6. Sharpen with a coarse radius of 1.5 to 2px at amount 150%, as the camera's own processor did.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Shallow depth of field and creamy bokeh.
- **NEVER:** Clean, high-dynamic-range tonal rendering.
- **NEVER:** Natural, accurate white balance.
- **NEVER:** Medium or large file sizes with fine detail and smooth gradients.
- **NEVER:** Film grain instead of sensor noise.
- **NEVER:** A carefully composed, evenly lit frame.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Staging | `■■□□□` 2/5 | found, unplanned | fully constructed |
| Tonal contrast | `■■■□□` 3/5 | flat, narrow range | hard, black to white |
| Colour saturation | `■■■□□` 3/5 | monochrome or muted | saturated |
| Depth of field | `■□□□□` 1/5 | deep, all sharp | shallow, subject isolated |
| Proximity | `■■■□□` 3/5 | distant, context first | intimate, close to the subject |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A 4:3 frame, held at arm's length, with the subject centred and a lot of headroom or a cut-off head.
- **Viewpoint:** Arm's length at chest or face height, 1 to 3m; often tilted.
- **Geometry:** Casual and unplanned; the horizon tilts and the flash casts a hard shadow on the wall behind.
- **Subject placement:** Centred, because the focus point is in the middle of the screen.

**Principles**

| Principle | Rule |
|---|---|
| focal-point | Centre the subject at 0.5 ± 0.1 of the width, where the single autofocus point sits. |
| negative-space | Leave 20–40% of the height as headroom or a cut-off head. |
| framing | Tilt the horizon by 0° to 10°; no edge control. |
| contrast | Hold the flash-lit face at 3 stops above the background. |

## Light

- **Quality:** Built-in flash or direct sun; small, hard and flat.
- **Direction:** From the camera axis, which flattens the face and throws a shadow edge behind the subject.
- **Key to fill ratio:** 6:1 (2.6 stops), flash to ambient
- **Colour temperature:** Flash 5500K; auto white balance drifts between 4000K and 6500K
- **Time of day:** Any; often a night out or a bright day

## Lens & camera

- **Format:** 1/2.7 in CCD, 2–5 megapixels, 4:3
- **Focal length:** 5.8mm real (35mm in 35mm format); zoom to 17mm real (105mm)
- **Aperture:** f/2.8 to f/5.6, with an effective depth of field from 0.5m to infinity
- **Shutter:** 1/30s to 1/125s
- **Film speed:** ISO 50–200 (noisy above 400)
- **Focus:** Fixed deep focus; autofocus hunts in low light and the macro mode starts at 5cm.
- **Support:** Handheld
- **Equipment:** compact CCD camera · pop-up flash · small LCD of 1.5 in

## Colour & grade

- **Treatment:** Slightly cool or magenta, over-saturated and over-sharpened, with a coarse sensor noise and clipped highlights.
- **Grade recipe:**
  - Resize to 1600×1200 px, then export as JPEG at quality 65.
  - Set the white point at 100% with a clip of 2% of the highlights.
  - Raise saturation by +25% and shift the white balance by +300K cool and +8 magenta.
  - Add chroma noise of 12% at 2px and luminance noise of 6%.
  - Sharpen at radius 1.8px, amount 150%, to make halos at edges.
  - Add purple fringing: shift the blue channel by 1px at high-contrast edges.
- **Grain:** Chroma and luminance noise, no film grain; JPEG blocks visible at 200%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Clipped white | `#FFFFFF` | blown highlights |
| Flash skin | `#E8B9A0` | faces under flash |
| CCD blue | `#3E6FB0` | sky and shadow cast |
| Magenta cast | `#9B4F86` | white balance error |
| Crushed black | `#0A0A12` | background falloff |

## Subject & staging

- **Subjects:** friends indoors · party and night out · holiday landmarks · bedrooms and desks · cars and street · pets
- **Staging:** None; the photographer shows the moment to friends on the small LCD at once.
- **Direction:** Subjects mug for the camera, look at the lens and pose with a peace sign; no art direction.

## Post-processing

- **Workflow:**
  - Import from a memory card with no raw file.
  - Use the camera's own sharpening and auto white balance.
  - Add no edits, or a quick auto-contrast in the bundled software.
  - Share as a small JPEG of 640×480 px for the web.
- **Output:** A small, over-sharpened JPEG at 640 to 1600 px on the long side, or a 4×6 in lab print.

## Prompt primer

- **Positive:** early 2000s digital camera photo · CCD sensor · direct on-camera flash · blown highlights · chroma noise · purple fringing · oversharpened · 2 megapixel · deep focus · slightly off white balance · jpeg compression artifacts
- **Negative:** bokeh · shallow depth of field · HDR · film grain · cinematic grade · medium format

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Coolpix 950 | Nikon | 1999 |
| PowerShot S100 Digital ELPH | Canon | 2000 |
| Cyber-shot DSC-P1 | Sony | 2000 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Direct flash (tool)

A flash on the camera that fires straight at the subject, so that faces are bright, shadows are hard and the background goes dark. Origin: photography, Germany, 1929.

- Put the flash on the camera axis; do not bounce it.
- Stand 1 to 3 m from the subject; let the background fall 2 to 4 stops darker.
- Keep the red eye, the shine on skin and the hard shadow behind the subject.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Myspace** (platform, web, 2003–now), published the style. A social network of profile pages. Users posted flash digicam photos and filled their pages with glitter, gloss and custom code.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Colour temperature (`colour_temperature`) | 5500 | 4000–6500 K | colour_and_grade, light |
| Contrast (`contrast`) | 1.2 | 1.1–1.4 | colour_and_grade, post_processing |
| Grain (`grain`) | 100 | 50–400 ISO | process, post_processing |
| Focal length (`focal_length`) | 35 | 35–105 mm | lens_and_camera, composition |
| Aspect ratio (`aspect_ratio`) | 3:4 | 3:4 | composition |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more nightlife and edge**: move toward [`party-flash`](../party-flash/SKILL.md) (Party flash). Raise the flash ratio to 10:1, drop the ambient two stops and clip the background to black; keep the small sensor and the hard flash.
- If the user asks for **cleaner**: move toward [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md) (Cinematic teal and orange). Replace the clipped highlights with a rolled shoulder at 92%, use a full-frame sensor at f/2 and add a graded look; keep the digital colour.

- **Came from (go here for a more orthodox version):** [`new-colour`](../new-colour/SKILL.md)
- **Led to (go here for a newer version):** [`party-flash`](../party-flash/SKILL.md)
- **Was rejected by:** [`film-grain-revival`](../film-grain-revival/SKILL.md)
- **Mixes well with:** [`party-flash`](../party-flash/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`found-footage`](../found-footage/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Nearest by vector profile:** [`new-colour`](../new-colour/SKILL.md), [`documentary-photography`](../documentary-photography/SKILL.md), [`film-grain-revival`](../film-grain-revival/SKILL.md)

## Emotional target

Nostalgia and ease: the viewer feels a night that was not planned and that everyone remembers.

**Keywords:** nostalgic, casual, lo-fi, candid, flashy · **Brand archetypes:** jester, everyman

## Sources

- [Wikidata Q106646709: compact digital camera](https://www.wikidata.org/wiki/Q106646709)
- [Wikidata Q173095: digital photography](https://www.wikidata.org/wiki/Q173095)
- [Wikidata Q130484971: Y2K (internet aesthetic)](https://www.wikidata.org/wiki/Q130484971)
- [Getty AAT 300266792: digital cameras (ODC-By 1.0)](https://vocab.getty.edu/aat/300266792)
- [Getty AAT 300134745: snapshots (ODC-By 1.0)](https://vocab.getty.edu/aat/300134745)
- [Wikidata Q7547374: snapshot aesthetic](https://www.wikidata.org/wiki/Q7547374)

---

Generated from [`data/photography/styles/y2k-digicam.json`](../../data/photography/styles/y2k-digicam.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
