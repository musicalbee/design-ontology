---
name: street-photography
description: "Apply the Street photography style (1930s–today) when making, briefing, prompting or grading photographs. Load when the user asks for: street photography, candid, decisive moment, cartier-bresson, leica, tri-x."
domain: photography
era: documentary-century
triggers:
  - "street photography"
  - "candid"
  - "decisive moment"
  - "cartier-bresson"
  - "leica"
  - "tri-x"
  - "documentary street"
  - "gritty city photo"
vector_profile:
  staging: 1
  tonal_contrast: 4
  colour_saturation: 1
  depth_of_field: 2
  proximity: 4
---

# Street photography

> Public life holds pictures that nobody can stage, and the photographer's job is to be in the right place and to see them in time.

Unposed pictures of public life, made with a small camera, a wide lens and quick reflexes. The photographer finds the frame and waits for the moment when gesture, light and geometry agree.

**Period:** 1930s–today · **Era:** The small camera · **Domain:** Photography · **Also called:** Candid street, Decisive moment

## When to load this skill

Load it when the user asks for: "street photography", "candid", "decisive moment", "cartier-bresson", "leica", "tri-x", "documentary street", "gritty city photo".

Good for: editorial city stories, campaign imagery with a raw feel, photo books, image prompts for urban scenes.

Do not use it when:
- The brief needs a controlled product shot or a clean studio portrait.
- The subject cannot appear in public, for reasons of consent or law.

## System directives

When making, briefing, prompting or grading photographs in Street photography, you MUST:

1. Use a 28mm or 35mm lens (35mm format) and stand 1 to 3m from the subject, so that context and person share the frame.
2. Zone-focus at f/8 to f/11 on a set distance of 2 to 3m, and keep the shutter at 1/250s or faster.
3. Shoot in found light: hard sun and deep shadow at a ratio of 8:1 or more, or the mixed light of a street at night.
4. Layer the frame: put at least three planes (foreground, subject, background) in it, and let edges and shadows cut figures.
5. Wait for the gesture: release when the hand, the gaze or the step is at its peak, within a 1/250s window.
6. Print with a hard grade: true black, bright highlights and visible grain.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Posed subjects who look at the lens and smile.
- **NEVER:** Shallow depth of field that isolates a single face from the street.
- **NEVER:** Telephoto compression from a hidden distance.
- **NEVER:** Heavy retouching, cloning or removal of distracting people.
- **NEVER:** Flat, even light with no shadow geometry.
- **NEVER:** Staged scenes with props or hired models.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Staging | `■□□□□` 1/5 | found, unplanned | fully constructed |
| Tonal contrast | `■■■■□` 4/5 | flat, narrow range | hard, black to white |
| Colour saturation | `■□□□□` 1/5 | monochrome or muted | saturated |
| Depth of field | `■■□□□` 2/5 | deep, all sharp | shallow, subject isolated |
| Proximity | `■■■■□` 4/5 | distant, context first | intimate, close to the subject |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** Tight and often tilted; the edges cut figures on purpose, and the frame is full.
- **Viewpoint:** Eye or chest height, handheld, 1 to 3m from the subject.
- **Geometry:** Diagonals, shadows and doorways make a stage; several small events share one frame.
- **Subject placement:** Off centre, in a pocket of light or against a clean wall, with a second figure or sign in balance.

## Light

- **Quality:** Found light: hard direct sun or the mixed lights of the night street.
- **Direction:** Low side light and backlight give long shadows and rim light.
- **Key to fill ratio:** 8:1 or more (3 stops or more)
- **Colour temperature:** 5500K (daylight); 2800–4000K for tungsten at night
- **Time of day:** Early morning or late afternoon, when shadows are long

## Lens & camera

- **Format:** 35mm rangefinder or compact SLR; digital full frame as a modern equivalent
- **Focal length:** 28mm to 35mm (up to 50mm)
- **Aperture:** f/8 to f/11 (f/2 only at night)
- **Shutter:** 1/250s to 1/1000s
- **Film speed:** ISO 400 (800–1600 pushed); at night ISO 1600–3200
- **Focus:** Zone focus: set the distance to 2–3m at f/8 and do not refocus; the depth of field covers 1.5 to 6m.
- **Support:** Handheld
- **Equipment:** 35mm rangefinder · 28mm or 35mm prime · neck strap, no bag

## Colour & grade

- **Treatment:** High-contrast black and white with a strong grain, or restrained colour that keeps the tone of the scene.
- **Grade recipe:**
  - Convert to monochrome with a yellow-orange filter mix (R 50, G 50, B 0).
  - Set the black point at 1% and the white point at 98%.
  - Apply +30% midtone contrast with a steep S-curve.
  - Burn the corners by −0.5 stop and dodge the face by +0.3 stop.
  - Add film grain, amount 25%, size 40%, as for Tri-X pushed one stop.
  - Keep the full frame; crop by no more than 5%.
- **Grain:** Tri-X 400 at EI 800: coarse and visible at A4

**Palette**

| Name | Hex | Role |
|---|---|---|
| Tri-X black | `#0E0E0F` | deep shadows |
| Concrete grey | `#6F7173` | midtones |
| Sunlit wall | `#D8D6CF` | highlights |
| Newsprint white | `#F2F0EA` | clipped highlights |

## Subject & staging

- **Subjects:** pedestrians · shopfronts and signs · children at play · commuters · cafe terraces · market stalls
- **Staging:** None. The photographer picks a place with good light and waits, or walks and reacts.
- **Direction:** Nobody is asked to pose; subjects are unaware of the camera or ignore it.

## Post-processing

- **Workflow:**
  - Develop in a standard developer; push by one stop when the light is low.
  - Make a work print of every frame on a contact sheet and mark the best moment.
  - Print on grade 3 to 4 paper with burning at the edges.
  - Keep the black frame edge visible to show the full frame.
- **Output:** A grainy, high-contrast 8×10 in print, or a 4:5 digital file with the frame edge visible.

## Prompt primer

- **Positive:** candid street photograph · 35mm Leica · 28mm lens · Tri-X 400 pushed · harsh midday shadows · decisive moment · layered foreground and background · handheld · high contrast black and white · visible film grain
- **Negative:** posed portrait · shallow depth of field · studio lighting · HDR · smooth skin · telephoto compression

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Behind the Gare Saint-Lazare | Henri Cartier-Bresson | 1932 |
| Meudon | André Kertész | 1928 |
| Trolley—New Orleans | Robert Frank | 1955 |
| New York World's Fair | Garry Winogrand | 1964 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polished and controlled**: move toward [`straight-photography`](../straight-photography/SKILL.md) (Straight photography). Move to a tripod and a view camera, stop down to f/32, and wait for the light; keep the black and white and the strong tonal range.
- If the user asks for **in colour**: move toward [`new-colour`](../new-colour/SKILL.md) (New Colour). Switch to colour slide film at ISO 64, f/8, 1/250s, and keep the found subject and the low angle; make colour the subject.

- **Came from (go here for a more orthodox version):** [`straight-photography`](../straight-photography/SKILL.md)
- **Led to (go here for a newer version):** [`new-colour`](../new-colour/SKILL.md)
- **Mixes well with:** [`party-flash`](../party-flash/SKILL.md)
- **Kin in another domain:** [`documentary-verite`](../documentary-verite/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`italian-neorealism`](../italian-neorealism/SKILL.md), [`new-hollywood`](../new-hollywood/SKILL.md)
- **Nearest by vector profile:** [`straight-photography`](../straight-photography/SKILL.md), [`party-flash`](../party-flash/SKILL.md), [`y2k-digicam`](../y2k-digicam/SKILL.md)

## Emotional target

Alertness and recognition: the viewer feels a moment that was nearly missed and is real.

**Keywords:** candid, urgent, witty, urban, unposed · **Brand archetypes:** explorer, everyman

## Sources

- [Wikidata Q1851397: street photography](https://www.wikidata.org/wiki/Q1851397)
- [Wikidata Q156567: Henri Cartier-Bresson](https://www.wikidata.org/wiki/Q156567)
- [Getty AAT 300134547: documentary photography (ODC-By 1.0)](https://vocab.getty.edu/aat/300134547)
- Henri Cartier-Bresson, The Decisive Moment (Simon & Schuster, 1952)
- Colin Westerbeck and Joel Meyerowitz, Bystander: A History of Street Photography (Bulfinch, 1994)

---

Generated from [`data/photography/styles/street-photography.json`](../../data/photography/styles/street-photography.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
