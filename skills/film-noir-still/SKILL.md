---
name: film-noir-still
description: "Apply the Film noir still photography style (1940s–today) when making, briefing, prompting or grading photographs. Load when the user asks for: film noir, noir still, chiaroscuro portrait, venetian blind shadow, hard light, dutch angle."
domain: photography
era: commercial-and-staged
triggers:
  - "film noir"
  - "noir still"
  - "chiaroscuro portrait"
  - "venetian blind shadow"
  - "hard light"
  - "dutch angle"
  - "1940s crime"
vector_profile:
  staging: 5
  tonal_contrast: 5
  colour_saturation: 1
  depth_of_field: 3
  proximity: 3
---

# Film noir still photography

> Darkness holds the story, so the picture shows only as much light as the mood needs.

Black-and-white stills with one hard light, deep shadow and a figure caught in a graphic frame. The look comes from the 1940s crime film, and it stays alive in fashion, posters and portraits.

**Period:** 1940s–today · **Era:** Constructed images · **Domain:** Photography · **Also called:** Noir portrait, Chiaroscuro still

## When to load this skill

Load it when the user asks for: "film noir", "noir still", "chiaroscuro portrait", "venetian blind shadow", "hard light", "dutch angle", "1940s crime".

Good for: posters and key art, fashion and fragrance campaigns, album covers, image prompts for moody night scenes.

Do not use it when:
- The brief needs warmth, family or clarity of detail in shadows.
- The subject must read as friendly.

## System directives

When making, briefing, prompting or grading photographs in Film noir still photography, you MUST:

1. Use a single hard source, a spot or a bare bulb, at 45° to 90° from the lens axis.
2. Hold a key-to-fill ratio of 16:1 (4 stops) or more, and let half the face fall into black.
3. Cast a pattern on a wall: blinds, a lattice or a doorway, with 3 to 7 bars.
4. Use a 50mm to 85mm lens at f/2.8 to f/5.6 and shoot slightly from below or at a Dutch tilt of 5° to 15°.
5. Pose the figure with a hat, a cigarette or a gun, in a doorway or on stairs.
6. Print on a hard grade with true black at 0% and a single highlight at 95–100%.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Soft, even light with open shadows.
- **NEVER:** Bright, pastel or saturated colour.
- **NEVER:** Cheerful expressions.
- **NEVER:** Clean modern sets with no texture.
- **NEVER:** Digital noise that looks like a filter.
- **NEVER:** Cartoon props that break the mood.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Staging | `■■■■■` 5/5 | found, unplanned | fully constructed |
| Tonal contrast | `■■■■■` 5/5 | flat, narrow range | hard, black to white |
| Colour saturation | `■□□□□` 1/5 | monochrome or muted | saturated |
| Depth of field | `■■■□□` 3/5 | deep, all sharp | shallow, subject isolated |
| Proximity | `■■■□□` 3/5 | distant, context first | intimate, close to the subject |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** Tight vertical or wide 1.37:1; the frame is cut by shadow and edge.
- **Viewpoint:** Slightly below the face, or at a Dutch tilt of 5° to 15°.
- **Geometry:** Diagonals of blinds, stairs and doorways; the figure sits in a pool of light.
- **Subject placement:** Off centre, with 40–70% of the frame in shadow.

**Principles**

| Principle | Rule |
|---|---|
| contrast | Hold a key-to-fill ratio of 16:1 or more, with 40–70% of the frame in near-black. |
| lighting-layers | Use 3 layers: a hard key, a rim light at 1 stop under it and a background pattern at 2 stops under. |
| leading-lines | Cast 3 to 7 bars of shadow that run on a diagonal to the face. |
| negative-space | Leave 40–60% of the frame as black space on the side the figure looks away from. |
| focal-point | Let 1 lit eye or hand take the highest luminance, at 95–100%, with no second highlight above 80%. |

## Light

- **Quality:** Hard and small: a spot with a snoot, a Fresnel or a bare bulb.
- **Direction:** Side or low front, 45° to 90° from the lens, with cutters and cookies to throw patterns.
- **Key to fill ratio:** 16:1 or more (4 stops or more)
- **Colour temperature:** 3200K (tungsten); the final grade is monochrome
- **Time of day:** Studio, or at night with a street lamp

## Lens & camera

- **Format:** Medium format or 35mm; digital full frame as a modern equivalent
- **Focal length:** 50mm to 85mm
- **Aperture:** f/2.8 to f/5.6
- **Shutter:** 1/60s to 1/125s
- **Film speed:** ISO 400
- **Focus:** Focus on the lit eye; let the rest fall off.
- **Support:** Tripod or handheld
- **Equipment:** tungsten spot with snoot · flags and cutters · venetian blind or lattice gobo · smoke or haze machine

## Colour & grade

- **Treatment:** High-contrast black and white with deep shadows and a single bright accent.
- **Grade recipe:**
  - Convert to monochrome with a red filter mix (R 70, G 30, B 0), to darken skies and deepen lips.
  - Set the black point at 0% and the white point at 99%.
  - Apply +45% midtone contrast with a steep S-curve.
  - Burn the edges by −1 stop and dodge the eye by +0.5 stop.
  - Add film grain, amount 30%, size 45%.
  - Add a light haze (clarity −10) in the highlights for a glow around the key.
- **Grain:** Tri-X 400 pushed to 1600: coarse, with open mid-grey

**Palette**

| Name | Hex | Role |
|---|---|---|
| Noir black | `#08080A` | shadow |
| Smoke grey | `#4A4B4F` | midtone |
| Blind light | `#BEBCB4` | pattern light |
| Eye white | `#F7F5EE` | single highlight |

## Subject & staging

- **Subjects:** a detective or a stranger in a hat · a woman in a long coat · smoke and a cigarette · stairs and doorways · wet streets at night · venetian blinds
- **Staging:** Full set: a doorway, a lamp, a blind and a wall; the maker places the cutters first and then the figure.
- **Direction:** Give the sitter a secret and a direction to look; hold still for 1/60s.

## Post-processing

- **Workflow:**
  - Develop with a high-contrast developer, or push the film by 2 stops.
  - Print on grade 4 paper with heavy burning at the edges.
  - Dodge the eye and the cigarette tip.
  - Frame in a dark mat to keep the black.
- **Output:** A deep-black 8×10 in print, or a high-contrast digital file at 4:5 or 1.37:1.

## Prompt primer

- **Positive:** film noir still · single hard light · venetian blind shadows · chiaroscuro · black and white · Dutch angle · smoke · tungsten spot · high contrast · 1940s crime film
- **Negative:** soft light · colour · pastel · cheerful · even lighting · flat grey · HDR · clean modern set

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| The Maltese Falcon | John Huston | 1941 |
| Double Indemnity | Billy Wilder | 1944 |
| The Third Man | Carol Reed | 1949 |
| Touch of Evil | Orson Welles | 1958 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | accent to ambient (ratio): 3:1 to 10:1; key to fill (ratio): 2:1 to 8:1 in photography |
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `negative-space` | Negative space | The empty area around and between elements. It is a part of the composition, not a remainder. | empty frame area (% of image): 30–70 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more glamorous**: move toward [`fashion-editorial`](../fashion-editorial/SKILL.md) (Fashion editorial photography). Add a large soft fill at 8:1, move to colour and keep one deep shadow side; shoot at f/8 for the garment.
- If the user asks for **more real and found**: move toward [`street-photography`](../street-photography/SKILL.md) (Street photography). Drop the set and use a real street at night, with a 35mm lens at f/2, ISO 1600 and 1/125s.

- **Came from (go here for a more orthodox version):** [`straight-photography`](../straight-photography/SKILL.md)
- **Mixes well with:** [`fashion-editorial`](../fashion-editorial/SKILL.md), [`street-photography`](../street-photography/SKILL.md)
- **Kin in another domain:** [`baroque-painting`](../baroque-painting/SKILL.md), [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md)
- **Nearest by vector profile:** [`fashion-editorial`](../fashion-editorial/SKILL.md), [`cinematic-teal-orange`](../cinematic-teal-orange/SKILL.md), [`pictorialism`](../pictorialism/SKILL.md)

## Emotional target

Suspense and unease: the viewer feels watched and wants to know what is in the dark.

**Keywords:** shadow, tense, graphic, nocturnal, moody · **Brand archetypes:** outlaw, magician

## Sources

- [Wikidata Q185867: film noir](https://www.wikidata.org/wiki/Q185867)
- Paul Schrader, Notes on Film Noir (Film Comment, 1972)
- Alain Silver and James Ursini (eds.), Film Noir Reader (Limelight, 1996)

---

Generated from [`data/photography/styles/film-noir-still.json`](../../data/photography/styles/film-noir-still.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
