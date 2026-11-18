---
name: straight-photography
description: "Apply the Straight photography style (1915–1950) when making, briefing, prompting or grading photographs. Load when the user asks for: straight photography, f/64, large format, zone system, ansel adams, edward weston."
domain: photography
era: art-photography
triggers:
  - "straight photography"
  - "f/64"
  - "large format"
  - "zone system"
  - "ansel adams"
  - "edward weston"
  - "sharp black and white"
  - "fine art landscape"
vector_profile:
  staging: 2
  tonal_contrast: 4
  colour_saturation: 1
  depth_of_field: 1
  proximity: 3
---

# Straight photography

> Photography is an art of its own when it shows the world with the full detail and tonal range that only a camera can record.

A sharp, unmanipulated print of a real thing, made on a large camera at a small aperture. The beauty comes from the medium itself: fine detail, a long tonal scale and exact focus from front to back.

**Period:** 1915–1950 · **Era:** Photography as art · **Domain:** Photography · **Also called:** Pure photography, Group f/64 look

## When to load this skill

Load it when the user asks for: "straight photography", "f/64", "large format", "zone system", "ansel adams", "edward weston", "sharp black and white", "fine art landscape".

Good for: landscape and nature prints, still life and product art, book and gallery imagery, architecture detail.

Do not use it when:
- The brief needs a candid, moving subject or a quick snapshot feel.
- Colour is the message.

## System directives

When making, briefing, prompting or grading photographs in Straight photography, you MUST:

1. Stop down to f/32–f/64 on a view camera so that detail is sharp from the front to the horizon.
2. Previsualise the print: place the deepest shadow with detail on Zone III and the brightest textured highlight on Zone VII.
3. Fill the range: the print holds a true black (Dmax) and a clean paper white, with 8 to 10 steps between.
4. Choose a form that has its own pattern, such as a pepper, a dune or a shell, and fill the frame with it.
5. Print at full frame by contact, with no cropping, dodging beyond 1 stop or retouching.
6. Light the subject with clear, directional daylight at a ratio of 4:1 to 8:1 to model form.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Soft-focus lenses, diffusion or brushed pigment.
- **NEVER:** Tricks of the darkroom that change the scene, such as montage.
- **NEVER:** Cropping a negative to rescue a weak composition.
- **NEVER:** Muddy mid-grey prints with no true black or white.
- **NEVER:** Sentimental or anecdotal subjects.
- **NEVER:** Warm sepia toning that hides the silver.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Staging | `■■□□□` 2/5 | found, unplanned | fully constructed |
| Tonal contrast | `■■■■□` 4/5 | flat, narrow range | hard, black to white |
| Colour saturation | `■□□□□` 1/5 | monochrome or muted | saturated |
| Depth of field | `■□□□□` 1/5 | deep, all sharp | shallow, subject isolated |
| Proximity | `■■■□□` 3/5 | distant, context first | intimate, close to the subject |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** Full-frame contact print; the format is 8×10 and the crop is the edge of the negative.
- **Viewpoint:** Close and frontal on natural forms, or a clean distant view of a landscape at eye or tripod height.
- **Geometry:** Strong patterns and repeated textures; edge-to-edge tonal balance, with no empty sky.
- **Subject placement:** Centred or filling the frame for objects; on a third for landscapes, with a clear foreground.

## Light

- **Quality:** Hard to medium, directional daylight that models form and shows texture.
- **Direction:** Side light at 45° to 90°, or soft light from a north window for still life.
- **Key to fill ratio:** 4:1 to 8:1 (2 to 3 stops)
- **Colour temperature:** 5500K (daylight)
- **Time of day:** Morning or late afternoon; midday only for still life in shade

## Lens & camera

- **Format:** 8×10 in or 4×5 in view camera, contact or enlarged print
- **Focal length:** 210–360mm on 8×10 (about 28–47mm in 35mm format)
- **Aperture:** f/32 to f/64
- **Shutter:** 1s to 8s on a tripod
- **Film speed:** ISO 25–100
- **Focus:** Tilt and swing to put the plane of sharp focus through the nearest and the farthest detail.
- **Support:** Heavy wooden tripod
- **Equipment:** view camera · orange or red filter for skies · cable release · spot meter

## Colour & grade

- **Treatment:** Neutral to slightly cool black-and-white on glossy silver gelatin paper, with a long scale and a true black.
- **Grade recipe:**
  - Convert to monochrome with an orange filter mix (R 70, G 30, B 0) to darken skies.
  - Set the black point at 2% and the white point at 97%.
  - Apply an S-curve of +25% midtone contrast.
  - Keep each of the zones from III to VII visible as a separate step.
  - Sharpen at radius 0.6px, amount 80%, once, at the output size.
  - Add no vignette, no tone and no texture.
- **Grain:** ISO 50–100 fine grain; invisible at 8×10 contact size

**Palette**

| Name | Hex | Role |
|---|---|---|
| Silver black | `#0B0B0C` | Zone 0–I shadow |
| Deep grey | `#3B3C3E` | Zone III |
| Mid grey | `#808284` | Zone V |
| Light grey | `#C9CBCC` | Zone VII |
| Paper white | `#F4F4F2` | Zone IX |

## Subject & staging

- **Subjects:** pepper or shell · dune · tree trunk · rock face · industrial detail · portrait in daylight
- **Staging:** Pick and place the subject with care; do not alter it. Clear the frame of anything that breaks the pattern.
- **Direction:** Still and unposed; portraits face the lens with a plain gaze.

## Post-processing

- **Workflow:**
  - Develop each negative by the Zone System, with N−1, N or N+1 times to fit the light.
  - Make a contact print on glossy or semi-matt silver gelatin paper.
  - Spot dust only; do not retouch the content.
  - Print to a clean white border, with the edge of the negative visible.
- **Output:** A glossy, high-resolution print at 20 × 25 cm, shown flat in a plain white mat.

## Prompt primer

- **Positive:** straight photography · large format 8x10 · f/64 · sharp from front to back · silver gelatin print · Zone System · rich tonal range · true blacks and clean whites · natural form close up · contact print
- **Negative:** soft focus · sepia tone · vignette · HDR · oversharpened halo · motion blur

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Wall Street | Paul Strand | 1915 |
| Blind | Paul Strand | 1916 |
| Pepper No. 30 | Edward Weston | 1930 |
| Two Callas | Imogen Cunningham | 1929 |
| Moonrise, Hernandez, New Mexico | Ansel Adams | 1941 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **softer and more romantic**: move toward [`pictorialism`](../pictorialism/SKILL.md) (Pictorialism). Open the aperture to f/8, add diffusion and a warm tone, and lift the black point to 15%; keep the large format and the quiet light.
- If the user asks for **more casual**: move toward [`street-photography`](../street-photography/SKILL.md) (Street photography). Switch to a 35mm camera at f/8, shoot handheld and let the frame be found; keep the black and white and the strong light.

- **Led to (go here for a newer version):** [`new-topographics`](../new-topographics/SKILL.md), [`street-photography`](../street-photography/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`pictorialism`](../pictorialism/SKILL.md)
- **Kin in another domain:** [`international-style-architecture`](../international-style-architecture/SKILL.md), [`realism-painting`](../realism-painting/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`street-photography`](../street-photography/SKILL.md), [`y2k-digicam`](../y2k-digicam/SKILL.md), [`party-flash`](../party-flash/SKILL.md)

## Emotional target

Clarity and respect: the viewer feels that the thing is shown as it is, and that it is worth looking at closely.

**Keywords:** precise, clear, monumental, austere, sensual detail · **Brand archetypes:** sage, creator

## Sources

- [Wikidata Q1886249: straight photography](https://www.wikidata.org/wiki/Q1886249)
- [Wikidata Q309961: Group f/64](https://www.wikidata.org/wiki/Q309961)
- [Wikidata Q313055: Alfred Stieglitz](https://www.wikidata.org/wiki/Q313055)
- Ansel Adams, The Negative (Little, Brown, 1981): the Zone System
- Beaumont Newhall, The History of Photography (MoMA, 1982)

---

Generated from [`data/photography/styles/straight-photography.json`](../../data/photography/styles/straight-photography.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
