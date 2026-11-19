---
name: soviet-montage
description: "Apply the Soviet montage style (1924–1930) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: soviet montage, eisenstein, kuleshov, intellectual montage, propaganda film look, rapid montage."
domain: film
era: silent-era
triggers:
  - "soviet montage"
  - "eisenstein"
  - "kuleshov"
  - "intellectual montage"
  - "propaganda film look"
  - "rapid montage"
  - "kino-eye"
  - "constructivist film"
vector_profile:
  camera_mobility: 3
  cutting_rate: 5
  staging: 4
  grade_stylisation: 2
  frame_width: 2
---

# Soviet montage

> Meaning comes from the collision of shots, not from the content of a single shot, so the edit is the author of the film.

A cinema made in the cutting room. Two shots meet and a third meaning appears. Fast cuts, steep angles and typed faces drive the argument of the film.

**Period:** 1924–1930 · **Era:** The silent era · **Domain:** Film & Video · **Also called:** Montage theory, Intellectual montage, Kino-Eye

## When to load this skill

Load it when the user asks for: "soviet montage", "eisenstein", "kuleshov", "intellectual montage", "propaganda film look", "rapid montage", "kino-eye", "constructivist film".

Good for: manifesto and campaign films, music video with a hard rhythm, brand film about industry or labour, trailers and title montages.

Do not use it when:
- The brief needs a quiet, character-led scene or a slow mood.
- The audience reads a hard political reference as a threat to the brand.

## System directives

When planning, shooting, prompting, editing or grading moving images in Soviet montage, you MUST:

1. Cut at an average shot length of 2 to 3 s (Man with a Movie Camera 2.1 s, Battleship Potemkin 2.8 s on Cinemetrics) and shorten the shots toward a climax.
2. Join two shots so that their collision makes a third idea: pair the image with its opposite and hold each for 1 to 3 s.
3. Choose the cut by one of five methods: metric (fixed frame count), rhythmic, tonal, overtonal or intellectual, and keep one method for each sequence.
4. Shoot from low or high angles of 20° to 45° off level, with diagonals that cross the 1.33:1 frame, and fill the frame with a type, not an individual.
5. Build a sequence from 8 to 20 shots of a single action seen from many angles, and cut on the peak of the movement.
6. Use hard daylight on location at high contrast, and print on black and white stock with deep blacks.
7. Limit the intertitles to 2 to 4 words in a large heavy sans-serif face, 1 to 2 s on screen.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Long takes of over 8 s with no inner cut.
- **NEVER:** Invisible continuity cuts that hide the edit.
- **NEVER:** A star actor as a psychological individual.
- **NEVER:** Eye-level, centred, symmetrical coverage.
- **NEVER:** Studio sets built for naturalistic depth.
- **NEVER:** Soft, diffused light.
- **NEVER:** A story with no social class or crowd.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■□□` 3/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■■■` 5/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■■□` 4/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■□□□` 2/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** Steep angles and strong diagonals in a 1.33:1 frame; a face or a machine fills 50% to 80% of the height.
- **Staging in depth:** A foreground of 2 to 3 m with a machine, a crowd or a stair behind; the layers show a class or a force.
- **Subject placement:** Off centre on a diagonal; the second shot answers the first on the opposite side of the frame.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| leading-lines | Cross the 1.33:1 frame with a diagonal from a steep angle, and answer it with a counter-diagonal in the next shot. | 20° to 45° off level |
| contrast | Cut two opposed images together so that their collision makes a third idea. | 1 to 3 s per shot in a pair |
| rhythm | Choose one cutting method for each sequence and shorten the shots toward the climax. | 2 to 3 s average, down to 0.5 s at the peak |
| focal-point | Fill the frame with one type, a face or a machine, and give it most of the height. | 50% to 80% of the frame height |
| scale | Show a machine or a crowd against a single face so that the size difference carries the class argument. | face 1 : crowd 20 or more |

## Camera & movement

- **Movement:** Static for the core of a sequence. Dynamic moves are for a documentary rush: moving vehicle, tracking, split screen, slow and fast motion.
- **Support:** Tripod, car and tram mounts, crane
- **Camera height:** Low from 0.3 m or high from above 3 m; avoid eye level
- **Move speed:** Tram or car speed, 5 to 10 m/s, for a rush shot

## Lens & format

- **Aspect ratio:** 1.33:1 (silent aperture)
- **Frame rate:** 16 to 18 fps capture; project at 18 to 24 fps
- **Shutter angle:** About 170° (1/38 s at 16 fps)
- **Focal length:** 28mm to 75mm (35mm format); a long lens for a compressed crowd
- **Aperture:** f/5.6 to f/8 for sharp faces and machines
- **Resolution:** 35mm negative; scan at 2K or 4K
- **Focus:** Deep focus on the faces and the machine; no soft background.
- **Equipment:** 35mm hand-crank camera · wide and long lens set · trick-shot rig for double exposure

## Light

- **Quality:** Hard, high-contrast daylight, steel and water glare, and few filler lamps.
- **Direction:** Side and back light that rims a face or a machine against a dark ground.
- **Key to fill ratio:** 6:1 (2.6 stops)
- **Colour temperature:** Daylight 5600K, outdoor
- **Source:** Sun and sky on location

## Colour & grade

- **Treatment:** Black and white with deep blacks and a clean white. The only colour is a rare hand-painted red.
- **Grade recipe:**
  - Convert to black and white with a red filter look: red channel at +40%, blue at −30%.
  - Set the black point at 3% and the white point at 96%.
  - Add an S-curve of +30% contrast, and keep the midtone at 18% grey.
  - Hand-paint one accent, such as a flag, at hue 355° in 1 to 3 shots only.
  - Add grain at 10% and keep the frame edge sharp, with no vignette.
- **Texture:** Silver grain, amount 10%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink black | `#0A0A0A` | blacks |
| Steel grey | `#6B7076` | metal and sea |
| Silver | `#C9CCCF` | highlights |
| Paper white | `#E9E4D4` | sky and cards |
| Flag red | `#C1121F` | hand-painted accent, 1 to 2 shots |

## Editing & rhythm

- **Average shot length:** 2 to 3 s (Cinemetrics: Man with a Movie Camera 2.1 s, Battleship Potemkin 2.8 s)
- **Shot length range:** 0.3 s for a flash cut to 12 s for a held mass shot
- **Cutting logic:** Join by collision, graphic match or rhythm. Shorten the shots by 20% to 50% toward a climax.
- **Transitions:** Hard cut, a flash cut of 4 to 8 frames, a double exposure, a split screen.
- **Runtime:** 60 to 90 min in five reels

## Sound

- **Approach:** The film is silent. The score is built to the rhythm of the cut.
- **Dialogue:** Intertitle cards, 2 to 4 words, 1 to 2 s.
- **Music:** A percussive, mechanical orchestral score at the pulse of the cut; modern releases use a new score.
- **Loudness:** None: silent. A new score for a release sits at −23 LUFS.

## Titles & graphics

- **Treatment:** Bold slogans and diagonal type that act as one more shot.
- **Type:** Heavy grotesque sans-serif, upper case, on a diagonal at 8° to 15°; white on black or black on red.

## Shot primer

- **Opening:** Open on a machine or a crowd at a steep angle; the first cut comes inside 2 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Crowd on stair | wide | 28mm | locked off, high angle | 3 |
| Face of a worker | close-up | 75mm | locked off | 2 |
| Machine detail | extreme close-up | 50mm | locked off | 1.5 |
| Raised fist | medium | 35mm | low angle, locked off | 2 |
| Moving tram | wide | 35mm | tracking 8 m/s | 3 |
| Eye and lens | extreme close-up | 75mm | double exposure | 1.5 |

## Video prompt primer

- **Positive:** 1920s Soviet montage film · rapid collision cuts · steep low-angle shot · diagonal composition · black and white 35mm grain · 1.33:1 frame · heavy constructivist intertitle · crowd as a mass · machine close-ups · double exposure and split screen
- **Negative:** continuity editing · long take · soft focus · centred symmetrical frame · star close-up with a soft glow · colour grade · spoken dialogue

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Strike | Sergei Eisenstein | 1925 |
| Battleship Potemkin | Sergei Eisenstein | 1925 |
| Man with a Movie Camera | Dziga Vertov | 1929 |
| Mother | Vsevolod Pudovkin | 1926 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `leading-lines` | Leading lines | Lines in the view, such as edges, rows, beams or paths, point the eye to the focal point. | lines that converge on the focal point (count): 1 to 4; angle from the frame edge (degrees): 15–60 for a diagonal |
| `contrast` | Contrast | Two adjacent elements differ in value, hue, texture, size or shape. Contrast marks edges and makes the focal point. | brightest mass to deepest shadow in one image (stops): 3–4 flat; 5–8 hard, 8 or more for expressionist |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | subject height to frame or canvas height (% of frame height): 10–30 in a wide shot; 40–80 in a close-up |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Diagonal composition (motif)

The main forms lie on a tilted axis, so that the picture seems to move and to cut across the field. Origin: painting, Petrograd, 1915.

- Set the main axis at 30° to 60° to the frame edge; 45° is the strongest.
- Let a large form and a small form lie on the same diagonal at a ratio of 4:1 or more.
- Use one saturated colour (red) against a white or black field.
- Leave a clear field around the diagonal: at least 50% of the area stays empty.

### Photomontage (montage)

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: graphic & ui design, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Gerasimov Institute of Cinematography** (school, Moscow, 1919–now), taught the style. The first film school in the world. Lev Kuleshov ran a workshop here, and Sergei Eisenstein taught here.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 1.33:1 | 1.33:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 18 | 16–20 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 2.5 | 2–3 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 5600 | 5000–6000 K | colour_and_grade, light |
| Grain (`grain`) | 0.1 | 0.08–0.12 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more human**: move toward [`french-new-wave`](../french-new-wave/SKILL.md) (French New Wave). Keep the cut rhythm at 3 to 5 s and the hard black and white; move to a street, a handheld camera and one named person.
- If the user asks for **more mood**: move toward [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md) (German Expressionist cinema). Keep the black and white and the low angles; cut to an average of 6 to 10 s, add one hard key and painted shadows.

- **Led to (go here for a newer version):** [`documentary-verite`](../documentary-verite/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)
- **Was rejected by:** [`one-take-oner`](../one-take-oner/SKILL.md)
- **Kin in another domain:** [`constructivism-web`](../constructivism-web/SKILL.md), [`futurism-painting`](../futurism-painting/SKILL.md)
- **Nearest by vector profile:** [`vertical-short-form`](../vertical-short-form/SKILL.md), [`classical-hollywood`](../classical-hollywood/SKILL.md), [`hong-kong-action`](../hong-kong-action/SKILL.md)

## Emotional target

Urgency and collective force: the viewer feels a crowd, a machine and a push to act.

**Keywords:** urgent, rhythmic, political, mechanical, kinetic · **Brand archetypes:** outlaw, hero

## Sources

- [Wikidata Q3321104: Soviet montage theory](https://www.wikidata.org/wiki/Q3321104)
- [Wikidata Q152350: Battleship Potemkin](https://www.wikidata.org/wiki/Q152350)
- [Wikidata Q829250: Man with a Movie Camera](https://www.wikidata.org/wiki/Q829250)
- [Wikidata Q2377326: Kuleshov effect](https://www.wikidata.org/wiki/Q2377326)
- [Cinemetrics (Yuri Tsivian, University of Chicago): shot length of Man with a Movie Camera and Battleship Potemkin](https://cinemetrics.uchicago.edu/)
- [Internet Archive: Man with a Movie Camera (1929), public domain mark](https://archive.org/details/man-with-a-movie-camera-1929-by-dziga-vertov)
- [Internet Archive: Battleship Potemkin (1925), public domain mark](https://archive.org/details/battleship-potemkin-1925-by-sergei-m.-eisenstein)
- Sergei Eisenstein, Film Form (Harcourt, 1949)

---

Generated from [`data/film/styles/soviet-montage.json`](../../data/film/styles/soviet-montage.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
