---
name: film-noir
description: "Apply the Film noir style (1941–1958) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: film noir, noir, detective film, venetian blind shadow, voice-over detective, hard key light."
domain: film
era: studio-system
triggers:
  - "film noir"
  - "noir"
  - "detective film"
  - "venetian blind shadow"
  - "voice-over detective"
  - "hard key light"
  - "hardboiled"
vector_profile:
  camera_mobility: 2
  cutting_rate: 3
  staging: 5
  grade_stylisation: 4
  frame_width: 2
---

# Film noir

> One hard lamp, a low camera and a narrow strip of light turn a city into a trap, so the viewer feels the fate of the hero before the hero does.

A black and white crime film lit from one hard source. Venetian-blind bars, rain and smoke cut the frame. The camera sits low and tilts. A tired man tells the story in voice-over and the plot closes on him.

**Period:** 1941–1958 · **Era:** The sound studio system · **Domain:** Film & Video · **Also called:** Noir, Classic noir

## When to load this skill

Load it when the user asks for: "film noir", "noir", "detective film", "venetian blind shadow", "voice-over detective", "hard key light", "hardboiled".

Good for: thriller and detective video prompts, moody brand or fashion film, music video in black and white, book and game trailers.

Do not use it when:
- The brief needs a warm, friendly or optimistic tone.
- The scene needs even light for a product or a demo.

## System directives

When planning, shooting, prompting, editing or grading moving images in Film noir, you MUST:

1. Light the set with 1 hard key and no fill, and let 40% to 60% of the frame fall to black.
2. Shoot in black and white at 1.37:1 with a 25mm to 35mm lens and deep focus on 3 planes.
3. Put the camera 0.5 to 1.0 m low, and tilt it 5° to 15° off the level for a tense scene.
4. Throw bars, rain and smoke shadows across a face with a gobo or a slatted blind.
5. Cut at an average shot length of 6 to 10 s and use a long take for a talk in a car or a room.
6. Tell the story through a voice-over by the hero, and let it run at 5% to 15% of the runtime.
7. Set the scene at night in a city, in a bar, a flat or an office with a lit sign outside.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Flat, even high-key light.
- **NEVER:** A sunny day exterior.
- **NEVER:** A bright happy ending with a kiss.
- **NEVER:** A fixed, level, neutral camera.
- **NEVER:** A bright colour print.
- **NEVER:** Soft diffusion on the heroine's face.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■□□□` 2/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■□□` 3/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■■■` 5/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■■■□` 4/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A 1.37:1 frame cut into bands by shadow; a face lit in a strip across the eyes, a body half in the dark and a doorway or a stair as a second frame.
- **Staging in depth:** 3 planes in deep focus: a foreground edge or lamp, the actor, and a lit window or door at the back.
- **Subject placement:** Off the centre by 1/3, with 2:1 more empty dark space in front of the look than behind.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| contrast | Let a single hard key throw a bright strip against a black mass. | 8 to 10 stops, bright to black |
| lighting-layers | Light with one hard key and leave the fill out. | key to fill 8:1 or higher |
| framing | Cut the frame with a blind, a door or a stair so that a second frame sits inside the first. | 1 inner frame, 10% to 30% of the view |
| sightlines | Place the camera low and tilt it for a scene of threat. | 0.5 to 1.0 m high, 5° to 15° tilt |
| rhythm | Cut at a steady pace, and hold one long take for a talk in a car or a room. | 6 to 10 s average shot |

## Camera & movement

- **Movement:** A slow dolly or crane that follows the hero and stops at a door; a low static shot for a talk; a rare handheld run.
- **Support:** Dolly, crane and a low tripod
- **Camera height:** 0.5 to 1.0 m, low angle
- **Move speed:** 0.3 to 0.8 m/s dolly

## Lens & format

- **Aspect ratio:** 1.37:1
- **Frame rate:** 24 fps
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** 25mm to 35mm (35mm format), wide with deep focus
- **Aperture:** f/8 to f/16 for deep focus
- **Resolution:** 35mm black and white negative; scan at 2K or 4K
- **Focus:** Deep focus on 3 planes
- **Equipment:** 35mm camera · panchromatic black and white stock · a hard Fresnel lamp with a gobo · a slatted blind

## Light

- **Quality:** Hard and directional with sharp shadow edges; smoke makes the beam visible.
- **Direction:** From the side or from above and behind, at 45° to 90° to the lens axis.
- **Key to fill ratio:** 8:1 or higher
- **Colour temperature:** 3200K tungsten, in black and white
- **Source:** Hard key lamp, a lit window blind and a street sign

## Colour & grade

- **Treatment:** Rich black and white with a full grey scale, deep blacks and a clipped bright strip.
- **Grade recipe:**
  - Convert to black and white and set the black point at 2% and the white point at 98%.
  - Use a contrast curve of +30% and crush the shadows below 5%.
  - Add grain at 15% to 20%.
  - Add a vignette of 10% to 15% on the frame edge.
  - Do not add a tint or a colour accent.
- **Texture:** Fine 35mm grain at 15% to 20%, with a smoke haze in the beam

**Palette**

| Name | Hex | Role |
|---|---|---|
| Noir black | `#0B0B0C` | shadow mass |
| Smoke grey | `#5A5A5C` | midtones |
| Skin grey | `#A9A7A2` | faces |
| Blind white | `#F1EFE8` | light strip |

## Editing & rhythm

- **Average shot length:** 6 to 10 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 1 s for an insert of a gun or a clock to 3 min for a long talk
- **Cutting logic:** Cut on a look or a line and match the eyeline; hold a long take when the hero is trapped in a room.
- **Transitions:** Hard cut, a dissolve at a time jump and a fade to black at the end of a reel.
- **Runtime:** 85 to 110 min

## Sound

- **Approach:** Studio sound with a close voice; a hard room tone, steps on a wet street and a distant siren.
- **Dialogue:** Fast, dry and cynical, with a voice-over by the hero.
- **Music:** A brass and strings score that holds 2 to 3 motifs; a jazz club cue in the bar scene.
- **Loudness:** −24 LUFS integrated, narrow dynamic range for the original mix

## Titles & graphics

- **Treatment:** A hard title card in white on black over a shadow of the city; the credits on a rolling or a held card.
- **Type:** A condensed sans-serif or a bold upright in white upper case, 3 to 5 s per card.

## Shot primer

- **Opening:** Open at night on a wet street or a lit window, then cut to a face in a strip of shadow within 8 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Street at night in rain | wide | 25mm | slow dolly 0.5 m/s | 8 |
| Face lit by a blind | close-up | 35mm | static | 6 |
| Hero in a doorway, 3 planes deep | medium | 28mm | static, low angle 0.7 m | 7 |
| Talk in a car | two-shot | 35mm | static or slow push-in | 20 |
| Gun in a hand under a lamp | insert | 50mm | static | 2 |
| Chase on a stair, tilted | wide | 25mm | handheld follow, 10° tilt | 6 |

## Video prompt primer

- **Positive:** black and white crime film · hard single key light · venetian blind shadows on a face · low camera, tilted 10 degrees · rain on a night street · cigarette smoke in a light beam · deep focus, 3 planes · 1.37:1 frame · grainy 35mm
- **Negative:** flat high-key light · colour grade · sunny day · soft diffusion · smooth gimbal · happy ending

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| The Maltese Falcon | John Huston | 1941 |
| Double Indemnity | Billy Wilder | 1944 |
| Out of the Past | Jacques Tourneur | 1947 |
| The Third Man | Carol Reed | 1949 |
| Touch of Evil | Orson Welles | 1958 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | key to fill (ratio): 2:1 flat and natural; 4:1 glamour; 8:1 or more for deep shadow |
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera height (cm): 120–170 at eye level; under 100 for a low angle; crossings of the line of action in one scene (count): 0 |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Chiaroscuro (process)

A hard contrast of light and dark that models form: one strong source, deep shadow and a small area of light. Origin: painting, Italy, c. 1500.

- Light the subject from one hard source at 30° to 60° above and to the side; let the shadow side fall to near black.
- Keep the light on 20% to 30% of the frame and let the rest sink into shadow.
- Set the key light to fill light at a ratio of 8:1 or more for a dramatic mood.
- Cut hard shapes into the light with blinds, grilles or foliage so that the shadow becomes a pattern.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 1.37:1 | 1.37:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 24 | 24–24 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 8 | 6–10 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 3200 | 3000–3400 K | colour_and_grade, light |
| Grain (`grain`) | 0.18 | 0.15–0.2 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more neon**: move toward [`neon-noir`](../neon-noir/SKILL.md) (Neon noir). Keep the night city and the hard key; add a saturated coloured source in cyan and magenta and shoot in colour.
- If the user asks for **more realism**: move toward [`italian-neorealism`](../italian-neorealism/SKILL.md) (Italian Neorealism). Keep the black and white; move the camera into a real street with available light and non-professional actors.

- **Came from (go here for a more orthodox version):** [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md)
- **Led to (go here for a newer version):** [`neon-noir`](../neon-noir/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`classical-hollywood`](../classical-hollywood/SKILL.md)
- **Kin in another domain:** [`film-noir-still`](../film-noir-still/SKILL.md)
- **Nearest by vector profile:** [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md), [`planimetric-symmetry`](../planimetric-symmetry/SKILL.md), [`classical-hollywood`](../classical-hollywood/SKILL.md)

## Emotional target

Dread and fatalism: the viewer sees a trap close and knows that the hero cannot leave it.

**Keywords:** fatalistic, tense, shadowed, cynical, urban · **Brand archetypes:** outlaw, magician

## Sources

- [Film noir](https://en.wikipedia.org/wiki/Film_noir)
- Paul Schrader, Notes on Film Noir (Film Comment, 1972)
- Alain Silver and Elizabeth Ward, Film Noir: An Encyclopedic Reference to the American Style (Overlook Press, 3rd ed., 1992)

---

Generated from [`data/film/styles/film-noir.json`](../../data/film/styles/film-noir.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
