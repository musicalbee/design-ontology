---
name: italian-neorealism
description: "Apply the Italian Neorealism style (1943–1952) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: neorealism, italian neorealism, bicycle thieves, de sica, rossellini, postwar italian film."
domain: film
era: studio-system
triggers:
  - "neorealism"
  - "italian neorealism"
  - "bicycle thieves"
  - "de sica"
  - "rossellini"
  - "postwar italian film"
  - "non-professional actors"
  - "street realism film"
vector_profile:
  camera_mobility: 3
  cutting_rate: 2
  staging: 1
  grade_stylisation: 1
  frame_width: 2
---

# Italian Neorealism

> A film earns its truth by going out of the studio and showing ordinary lives in the real place, at the real pace, with no star and no neat plot.

Ruined streets, ordinary people and a story with no hero. Real places, non-professional actors and light that the day provides. The camera stays at human height and records the time a thing takes.

**Period:** 1943–1952 · **Era:** The sound studio system · **Domain:** Film & Video · **Also called:** Neorealismo, Postwar Italian realism

## When to load this skill

Load it when the user asks for: "neorealism", "italian neorealism", "bicycle thieves", "de sica", "rossellini", "postwar italian film", "non-professional actors", "street realism film".

Good for: social documentary and charity films, independent short films on location, period films of poverty and work, video prompts for a postwar street scene.

Do not use it when:
- The brief needs a glossy product look or a star.
- The piece needs a fast cut for a feed.

## System directives

When planning, shooting, prompting, editing or grading moving images in Italian Neorealism, you MUST:

1. Shoot on location in real streets, tenements and fields, with no built set and no back projection.
2. Cast non-professional actors for 50% or more of the roles and let them speak in their own dialect.
3. Light with daylight and a bounce, at a key-to-fill ratio of 2:1 to 3:1, and avoid a hard glamour key.
4. Frame in 1.37:1 at eye level with a 28mm to 50mm lens and keep depth in the shot, with deep focus at f/8 to f/11.
5. Hold a long take of 10 to 30 s on a walk or a wait, and cut at an average shot length of 8 to 12 s.
6. Use a slow pan or a short tracking shot of 0.5 to 1 m/s to follow a person through a street, with no crane.
7. Dub the sound after the shoot, and keep the score sparse: a theme of 20 to 60 s used 3 times at most.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A studio back lot and a painted backdrop.
- **NEVER:** A star with a glamour key light.
- **NEVER:** A tidy plot with a heroic resolution.
- **NEVER:** Invisible continuity with a shot and reverse shot in every scene.
- **NEVER:** A swelling score under each feeling.
- **NEVER:** Back projection for the street.
- **NEVER:** A soft, diffused, flattering grade.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■□□` 3/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■□□□` 2/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■□□□□` 1/5 | found, unplanned | fully constructed |
| Grade stylisation | `■□□□□` 1/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A 1.37:1 frame at eye level; the street or the room fills the frame, and the person is one part of it.
- **Staging in depth:** Deep focus with 3 planes: a figure in front, a street or courtyard in the middle and a facade or a ruin behind.
- **Subject placement:** The figure is small to medium in the frame and off centre; a face is held in a close-up only for the key moment of the scene.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| framing | Frame at eye level in 1.37:1 so that the place is as large as the person in the frame. | place 60% to 80% of the frame area, person 20% to 40% |
| layering-depth | Stage the action in three planes in deep focus: a person, a street and a facade. | 3 planes, f/8 to f/11 |
| scale | Keep the figure small against the street, so that the surroundings press on the person. | figure 20% to 40% of the frame height in a wide shot |
| lighting-layers | Use daylight as the key and a bounce or a window as the only fill. | 2:1 to 3:1 key to fill, daylight 5600K |
| rhythm | Let a walk or a wait run its real time before the cut. | 8 to 12 s average shot, 10 to 30 s for a walk |

## Camera & movement

- **Movement:** A slow pan or a short follow to keep a person in the street. The camera moves because the person moves, and it stops when they stop.
- **Support:** Tripod, a light dolly or a car mount for the street
- **Camera height:** 1.5 to 1.7 m, eye level
- **Move speed:** Walking pace, 0.5 to 1.5 m/s; pan 15° to 30° per second

## Lens & format

- **Aspect ratio:** 1.37:1 (Academy)
- **Frame rate:** 24 fps
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** 28mm to 50mm (35mm format)
- **Aperture:** f/5.6 to f/11 for deep focus in daylight
- **Resolution:** 35mm negative; scan at 2K or 4K
- **Focus:** Deep focus: the person, the street and the facade are all readable.
- **Equipment:** 35mm camera on a light tripod · orthochromatic or fast panchromatic stock · reflector boards · post-synchronised sound

## Light

- **Quality:** Hard or soft daylight as it falls, with a bounce for the faces; no added glamour light.
- **Direction:** Overhead or side daylight from the street; window light inside.
- **Key to fill ratio:** 2:1 to 3:1 (1 to 1.6 stops)
- **Colour temperature:** Daylight 5600K
- **Source:** The sun, the sky and a reflector

## Colour & grade

- **Treatment:** Natural black and white with a full grey scale. The print is plain, with grey stone and white linen, and the grain is part of the image.
- **Grade recipe:**
  - Convert to black and white and set the black point at 4% and the white point at 96%.
  - Keep the contrast at +5% with a long, soft shoulder for the sky.
  - Hold midtones at 18% grey for skin and stone and keep the sky at 80% to 90%.
  - Add grain at 15% to 20% to match fast 35mm stock.
  - Do not add a tint, a vignette or a glow.
- **Texture:** Visible silver grain, amount 15% to 20%, with a little gate weave of 0.3%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Soot black | `#1A1A18` | blacks |
| Wet stone grey | `#6B6A66` | midtones |
| Plaster grey | `#B5B2A8` | walls and skin |
| Linen white | `#EAE6DA` | highlights |

## Editing & rhythm

- **Average shot length:** 8 to 12 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 2 s for an insert to 60 s for a long walk
- **Cutting logic:** Cut when the action ends, not before. Let a walk or a wait take its time, and use a close-up for the one moment that the person cannot hide.
- **Transitions:** Hard cut, a slow dissolve of 1 s for a time jump, and no wipe.
- **Runtime:** 85 to 110 min

## Sound

- **Approach:** Post-synchronised sound laid over real streets, with a bed of traffic, voices and bells.
- **Dialogue:** Regional speech, non-professional voices, short and plain; speech sometimes overlaps and trails off.
- **Music:** A spare orchestral or piano theme of 20 to 60 s; it enters on a few cues, and a long scene has none.
- **Loudness:** −23 LUFS integrated for a restoration, with dialogue peaks at −6 dBFS

## Titles & graphics

- **Treatment:** A plain opening card, a white title on a black or a street background, and a short credit roll.
- **Type:** A plain serif or sans-serif in upper case, white on black, 3 to 5 s for the title and 1 to 2 s for each credit.

## Shot primer

- **Opening:** Open on a street or a yard in daylight with people at work; the first cut comes by 8 to 12 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Street at dawn | wide | 28mm | locked off | 8 |
| Walk through the crowd | medium | 35mm | follow 1.0 m/s | 20 |
| Wait at a door | medium | 35mm | locked off | 12 |
| A face at a window | close-up | 50mm | locked off | 5 |
| Ruin and sky | wide | 28mm | slow pan 15° per second | 6 |
| End on the street | wide | 28mm | locked off | 8 |

## Video prompt primer

- **Positive:** 1940s Italian neorealist film · black and white 35mm · real street location · non-professional actors · deep focus daylight · 1.37:1 frame · visible film grain · postwar ruins · long walk in a street · no studio
- **Negative:** studio set · glamour lighting · colour grade · crane shot · orchestral score swell · star actor · smooth gimbal · fast cuts

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Rome, Open City | Roberto Rossellini | 1945 |
| Paisan | Roberto Rossellini | 1946 |
| Bicycle Thieves | Vittorio De Sica | 1948 |
| Umberto D. | Vittorio De Sica | 1952 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | subject height to frame or canvas height (% of frame height): 10–30 in a wide shot; 40–80 in a close-up |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | key to fill (ratio): 2:1 flat and natural; 4:1 glamour; 8:1 or more for deep shadow |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Plein air (process)

Work made outside in front of the subject, in the light of the place and the hour. Origin: painting, Rome and France, c. 1780.

- Work in front of the motif in one session of 1 to 3 hours, before the light moves.
- Take the colour of shadows from the sky and the ground around them; do not paint them black.
- Use the light that is there; add no lamp.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Cannes Film Festival** (salon, Cannes, 1946–now), exhibited the style. An annual film festival with a juried competition. It gave prizes to neorealist, New Hollywood, Dogme 95 and slow-cinema films.
- **Centro Sperimentale di Cinematografia** (school, Rome, 1935–now), taught the style. The national film school of Italy. Several makers and writers of Italian neorealism studied or taught here.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 1.37:1 | 1.37:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 24 | 24–24 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 10 | 8–12 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 5600 | 5000–6000 K | colour_and_grade, light |
| Grain (`grain`) | 0.18 | 0.15–0.2 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more energy**: move toward [`french-new-wave`](../french-new-wave/SKILL.md) (French New Wave). Keep the location and the plain light; shoot handheld, cut a jump cut into long takes and let a character look into the lens.
- If the user asks for **more observation**: move toward [`documentary-verite`](../documentary-verite/SKILL.md) (Direct cinema and vérité). Keep the street and the plain light; drop the script, shoot 16mm with a handheld camera and record the real sound on location.

- **Led to (go here for a newer version):** [`french-new-wave`](../french-new-wave/SKILL.md), [`slow-cinema`](../slow-cinema/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`classical-hollywood`](../classical-hollywood/SKILL.md)
- **Kin in another domain:** [`street-photography`](../street-photography/SKILL.md)
- **Nearest by vector profile:** [`documentary-verite`](../documentary-verite/SKILL.md), [`mumblecore`](../mumblecore/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)

## Emotional target

Compassion and recognition: the viewer stays with a person in need and sees the place as it is.

**Keywords:** humane, plain, poor, honest, patient · **Brand archetypes:** everyman, caregiver

## Sources

- [Wikidata Q167776: Italian neorealism](https://www.wikidata.org/wiki/Q167776)
- [Wikidata Q172837: Bicycle Thieves](https://www.wikidata.org/wiki/Q172837)
- [Wikidata Q721146: Rome, Open City](https://www.wikidata.org/wiki/Q721146)
- André Bazin, What Is Cinema? vol. 2 (University of California Press, 1971)
- Peter Bondanella, Italian Cinema: From Neorealism to the Present (Continuum, 3rd ed., 2001)

---

Generated from [`data/film/styles/italian-neorealism.json`](../../data/film/styles/italian-neorealism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
