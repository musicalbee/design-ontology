---
name: ai-hyperreal
description: "Apply the AI hyperreal image style (2022–today) when making, briefing, prompting or grading photographs. Load when the user asks for: ai photo look, hyperreal, midjourney look, generated photo, too perfect skin, ai gloss."
domain: photography
era: digital-and-grade
triggers:
  - "ai photo look"
  - "hyperreal"
  - "midjourney look"
  - "generated photo"
  - "too perfect skin"
  - "ai gloss"
vector_profile:
  staging: 5
  tonal_contrast: 3
  colour_saturation: 4
  depth_of_field: 4
  proximity: 3
---

# AI hyperreal image

> A generated image can pass for a photograph at a glance, and its tells are the numbers that no real camera and no real scene would give together.

A recognisable look of images made by generative models: smooth, evenly lit, over-detailed and glossy. The look is named here so that a brief can ask for it or, more often, avoid it.

**Period:** 2022–today · **Era:** Digital and the grade · **Domain:** Photography · **Also called:** AI photo look, Generated gloss

## When to load this skill

Load it when the user asks for: "ai photo look", "hyperreal", "midjourney look", "generated photo", "too perfect skin", "ai gloss".

Good for: naming the look in a brief so that a team can avoid it, labelled concept art and mock-ups, teaching how to spot generated images, a negative prompt block for real photo styles.

Do not use it when:
- The image must be true: news, evidence, documentary or a product as sold.
- The brief asks to pass the image as a real photograph.

## System directives

When making, briefing, prompting or grading photographs in AI hyperreal image, you MUST:

1. Name the tells: skin with no pores at 100%, hair as a smooth mass, and eyes with a perfect catchlight.
2. Name the light: a soft wrap with a key-to-fill ratio of 1.5:1 or less, and no clear light source.
3. Name the lens: a claimed 85mm f/1.4 look at all distances, with a blur that has no stepped depth.
4. Name the grade: glossy, saturated, a teal-orange split and no grain.
5. Name the failures: hands with extra or merged fingers, text that reads as nonsense and reflections that do not match.
6. Use the look on purpose, in a label, or avoid it in a brief by adding the real numbers of a style.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Passing a generated image as a documentary photograph.
- **NEVER:** Skin smoothing past the point of pores.
- **NEVER:** Impossible lens blur that ignores distance.
- **NEVER:** Text in the image that is not checked.
- **NEVER:** Using the look for a scene that must be true, such as news or evidence.
- **NEVER:** Copying the face or the style of a living artist by name.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Staging | `■■■■■` 5/5 | found, unplanned | fully constructed |
| Tonal contrast | `■■■□□` 3/5 | flat, narrow range | hard, black to white |
| Colour saturation | `■■■■□` 4/5 | monochrome or muted | saturated |
| Depth of field | `■■■■□` 4/5 | deep, all sharp | shallow, subject isolated |
| Proximity | `■■■□□` 3/5 | distant, context first | intimate, close to the subject |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** Centred and complete; the subject is clear and placed to read at thumbnail size.
- **Viewpoint:** Eye height or slightly low, at a claimed 1m to 3m.
- **Geometry:** Smooth curves and symmetric forms; the background has dense, repeated detail.
- **Subject placement:** Centred or on a third by rule, with a busy, glowing background.

**Principles**

| Principle | Rule |
|---|---|
| focal-point | Let 1 subject take 40–70% of the frame, lit to the highest contrast in the image. |
| symmetry-axis | Place the face axis at 0.5 of the width, within 0.05. |
| colour-distribution | Set 50% in one dominant hue, 30% in its complement and 20% in neutrals, with a glow at the edge. |
| layering-depth | Use 2 planes only: a sharp subject and a blurred background that has no stepped depth. |
| contrast | Hold the scene range at 4 to 5 stops, with no crushed blacks and no clipped highlights. |

## Light

- **Quality:** Soft, wrapped and shadowless; a glow without a source.
- **Direction:** Frontal wrap with a rim at 135°; no clear cast shadow.
- **Key to fill ratio:** 1.5:1 or less (under 1 stop)
- **Colour temperature:** 5600K key with a 3200K rim
- **Time of day:** Not set; a permanent golden hour

## Lens & camera

- **Format:** None: the look imitates full frame
- **Focal length:** 85mm look at every distance
- **Aperture:** f/1.4 look
- **Shutter:** 1/200s look
- **Film speed:** ISO 100 look
- **Focus:** The eyes are sharp; the blur grows evenly, with no true depth steps.
- **Support:** None
- **Equipment:** a generative image model · a prompt of 8 to 12 phrases

## Colour & grade

- **Treatment:** Glossy, saturated and clean with a teal-orange split and no grain.
- **Grade recipe:**
  - Set the saturation at +25% and the vibrance at +20%.
  - Split-tone shadows to teal (hue 190, saturation 20%) and highlights to orange (hue 30, saturation 25%).
  - Lift the black point to 3% and the white point to 99%.
  - Apply a +25% clarity and +15% texture on the whole frame.
  - Add no grain.
  - To avoid the look: drop saturation by −20%, add grain at 25% and add a hard shadow.
- **Grain:** None; to avoid the look, add Tri-X grain at 25%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Glow teal | `#2E8E94` | background |
| Skin gloss | `#E2A27C` | skin |
| Rim amber | `#F2B45A` | rim light |
| Deep navy | `#14202E` | depth |

## Subject & staging

- **Subjects:** portraits with glowing skin · fantasy and sci-fi scenes · product renders · food and fashion mock-ups · landscapes with glow
- **Staging:** None in the real world. The scene is prompted: subject, mood, lens and light in 8 to 12 phrases.
- **Direction:** Check every hand, every text and every reflection before use; label the image as generated.

## Post-processing

- **Workflow:** Generate 4 to 16 variants. · Check hands, text, reflections and symmetry. · Upscale to 2048px or more and correct the colour. · Label the file as AI-generated in its metadata.
- **Output:** A glossy file at 1:1, 4:5 or 16:9, with a label that says it was generated.

## Prompt primer

- **Positive:** ultra detailed · hyperrealistic · 85mm f/1.4 look · soft studio light · glowing skin · cinematic teal and orange · 8k · sharp eyes · smooth bokeh · glossy finish
- **Negative:** extra fingers · garbled text · plastic skin · mismatched reflections · oversaturated glow · fake bokeh · watermark

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Théâtre D'opéra Spatial | Jason Allen with Midjourney | 2022 |
| The Pope in a white puffer jacket | Pablo Xavier with Midjourney | 2023 |
| Zarya of the Dawn | Kris Kashtanova with Midjourney | 2022 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `symmetry-axis` | Symmetry and axis | An axis is a line that orders a composition. Symmetry places equal elements at equal distances on the two sides of the axis, or around a centre. | ordering axes (count): 0 to 3; mirrored mass about the axis (% of visual weight): 90–100 formal, 0–50 informal; type (kind): bilateral, radial, none |
| `colour-distribution` | Colour distribution | Each colour takes a planned share of the visible area: a dominant colour, a secondary colour and an accent. | dominant / secondary / accent share (% of visible surface): 60/30/10 as the default; 70/25/5 calm; 40/35/25 bold; accents (count): 1 to 3 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Diffusion model (tool)

A model that learns to turn noise into an image step by step, and makes a new image from a text prompt. Origin: photography, Stanford and Berkeley, 2015.

- Start from pure noise and remove it over 20 to 50 steps.
- Steer the result with a text prompt and a guidance scale of 5 to 10.
- Expect smooth skin, even light and a glossy, over-detailed finish when the prompt gives no flaw.
- Add a concrete flaw to the prompt, such as grain, a lens fault or a cluttered ground, to break the sheen.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more like a real photograph**: move toward [`documentary-photography`](../documentary-photography/SKILL.md) (Documentary photography). Say 35mm lens, available light, f/5.6, grain at 15% and a real place with clutter; remove the glow and the polish.
- If the user asks for **more like film**: move toward [`film-grain-revival`](../film-grain-revival/SKILL.md) (Film grain revival). Say shot on Portra 400, halation at 20%, lifted blacks at 5% and visible grain at 35%; cut the saturation by 20%.

- **Came from (go here for a more orthodox version):** [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md), [`fashion-editorial`](../fashion-editorial/SKILL.md)
- **Nearest by vector profile:** [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md), [`fashion-editorial`](../fashion-editorial/SKILL.md), [`food-photography`](../food-photography/SKILL.md)

## Emotional target

First, wonder at the polish; then, on a second look, unease at a surface with no source.

**Keywords:** glossy, smooth, over-detailed, synthetic, uncanny · **Brand archetypes:** magician, creator

## Sources

- [Wikidata Q138781852: Artificial intelligence art](https://www.wikidata.org/wiki/Q138781852)
- [Wikidata Q65066631: artificial intelligence visual art](https://www.wikidata.org/wiki/Q65066631)
- U.S. Copyright Office, Copyright Registration Guidance: Works Containing Material Generated by Artificial Intelligence (2023)
- Coalition for Content Provenance and Authenticity, C2PA Technical Specification

---

Generated from [`data/photography/styles/ai-hyperreal.json`](../../data/photography/styles/ai-hyperreal.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
