---
name: german-expressionist-cinema
description: "Apply the German Expressionist cinema style (1920–1927) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: expressionist film, caligari, nosferatu, silent horror, german expressionism, painted sets."
domain: film
era: silent-era
triggers:
  - "expressionist film"
  - "caligari"
  - "nosferatu"
  - "silent horror"
  - "german expressionism"
  - "painted sets"
  - "shadow film noir silent"
  - "uncanny silent look"
vector_profile:
  camera_mobility: 2
  cutting_rate: 2
  staging: 5
  grade_stylisation: 4
  frame_width: 2
---

# German Expressionist cinema

> The set, the light and the body show inner fear, so the picture is built as a state of mind and not recorded as a place.

A studio cinema of painted sets, hard single-source light and distorted perspective. The frame shows the mind of the character, not the street. Black-and-white prints are tinted by scene.

**Period:** 1920–1927 · **Era:** The silent era · **Domain:** Film & Video · **Also called:** Caligarism, Expressionist film

## When to load this skill

Load it when the user asks for: "expressionist film", "caligari", "nosferatu", "silent horror", "german expressionism", "painted sets", "shadow film noir silent", "uncanny silent look".

Good for: horror and thriller titles and trailers, music video with a gothic set, title sequences, video prompts for a haunted or dream scene.

Do not use it when:
- The brief needs a believable, real place or a documentary tone.
- The piece must hold the viewer for under 10 s on a feed with a fast cut.

## System directives

When planning, shooting, prompting, editing or grading moving images in German Expressionist cinema, you MUST:

1. Light each scene with one hard key at a key-to-fill ratio of 8:1 or more, and paint or cast shadows onto walls and floor so that the shadow is a shape in the set.
2. Build sets with no true right angle: lean walls, doors and stairs 5° to 20° off the vertical, and make doorways taper by 10% to 30%.
3. Frame in 1.33:1 and place the figure in the lower third, with 50% or more of the frame left to a looming shadow or a steep diagonal.
4. Cut at an average shot length of 6 to 10 s and hold a silhouette or a stare for 4 s or more before the cut.
5. Open and close scenes with an iris of 0.5 to 1 s, and use a slow dissolve of 1 to 2 s between a place and a memory.
6. Tint the print by scene: amber for lit interiors, blue for night, green for the uncanny, and keep each tint for the whole scene.
7. Direct the actor in held, stylised gesture: 1 to 2 s to a pose, hands and eyes wide, no naturalistic business.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Location photography of real streets and rooms.
- **NEVER:** Even, soft studio light with fill above 3:1.
- **NEVER:** Straight vertical walls and a level horizon.
- **NEVER:** Naturalistic acting at everyday speed.
- **NEVER:** Rapid cutting under 3 s average shot length.
- **NEVER:** A single neutral grey grade over the whole film.
- **NEVER:** Handheld camera shake.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■□□□` 2/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■□□□` 2/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■■■` 5/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■■■□` 4/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A 1.33:1 frame, tight on the figure, with the set pressing in from the edges.
- **Staging in depth:** Painted perspective stacks flats at 3 to 5 depths; a shadow or a stair leads the eye from the lit figure to a dark point in the upper third.
- **Subject placement:** Low in the frame, off centre by 15% to 25%, with the looming shape above and behind the figure.

## Camera & movement

- **Movement:** Mostly locked-off. Where the camera moves, it moves with a purpose: a slow tracking shot toward a face or a dolly through a set.
- **Support:** Heavy tripod; studio dolly for the rare move
- **Camera height:** 0.8 to 1.7 m; low angles under 1 m for a looming figure
- **Move speed:** 0.2 to 0.5 m/s for a track or push-in

## Lens & format

- **Aspect ratio:** 1.33:1 (silent aperture)
- **Frame rate:** 16 to 20 fps capture by hand crank; project at 18 to 20 fps
- **Shutter angle:** About 170° (1/40 s at 18 fps)
- **Focal length:** 35mm to 50mm (35mm format)
- **Aperture:** f/4 to f/5.6 for deep focus on the set
- **Resolution:** 35mm negative; scan at 2K or 4K
- **Focus:** Deep focus on the whole set; a soft iris vignette closes on the face.
- **Equipment:** 35mm hand-crank camera · studio arc lamps · iris mask

## Light

- **Quality:** Hard, from a single arc or tungsten source, with deep cast shadows and painted shadow shapes.
- **Direction:** Low side or from below on the face; backlight to throw a long shadow up the wall.
- **Key to fill ratio:** 8:1 or more (3 stops)
- **Colour temperature:** Tinted print: amber near 2800K, blue near 8000K for night
- **Source:** Arc lamps and tungsten on a studio stage

## Colour & grade

- **Treatment:** Black and white with a flat tint for each scene. Blacks stay deep, and the highlights carry the tint.
- **Grade recipe:**
  - Convert to black and white and set the black point at 2% and the white point at 94%.
  - Add a hard S-curve of +35% contrast around mid grey.
  - Tint by scene with a single-colour wash at 40% to 60% strength: amber hue 35°, blue hue 215°, green hue 100°.
  - Add film grain at 12% and a 3% to 5% flicker in exposure from frame to frame.
  - Add a corner iris vignette of −25% and keep it for the iris transitions.
- **Texture:** Coarse silver grain, amount 12%, with gate weave of 0.5%

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink black | `#0B0B0F` | shadow and set |
| Night blue | `#1F3A5F` | night and fear tint |
| Amber | `#C98A2B` | lit interior tint |
| Bone white | `#E8DFC8` | face and highlights |
| Sickly green | `#5E7A4A` | uncanny scene tint |

## Editing & rhythm

- **Average shot length:** 6 to 10 s (silent films of the 1920s; check Cinemetrics for each title)
- **Shot length range:** 2 s for a shock cut to 25 s for a held stare
- **Cutting logic:** Cut on the entrance of a shadow or on a gaze. Each scene builds one mood, and the cut serves the scene.
- **Transitions:** Iris in and out (0.5 to 1 s), slow dissolve (1 to 2 s), double exposure for a ghost or a dream.
- **Runtime:** 60 to 110 min in five or six acts

## Sound

- **Approach:** The film is silent. A live orchestra or a piano supplies the sound at the screening.
- **Dialogue:** Intertitle cards, 2 to 4 s each, 6 to 12 words.
- **Music:** Orchestral score with drones and a leitmotif for the monster; modern releases use a new score.
- **Loudness:** None: silent. A new score for a release sits at −23 LUFS.

## Titles & graphics

- **Treatment:** Intertitles in jagged, hand-drawn letters that lean and spike like the set.
- **Type:** Display face with angular, uneven strokes; white on black; 5% to 10% of letters rotated 3° to 8°.

## Shot primer

- **Opening:** Open with an iris on a distorted street or a stair; hold the establishing shot for 4 to 6 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Establishing set | wide | 35mm | locked off | 5 |
| Figure enters | medium | 50mm | slow push-in | 7 |
| Shadow on the wall | wide | 35mm | locked off | 4 |
| Stare | close-up | 50mm | locked off, iris closing | 6 |
| Intertitle card | card | n/a | none | 3 |
| Chase over roofs | wide | 35mm | tracking 0.4 m/s | 8 |

## Video prompt primer

- **Positive:** 1920s German Expressionist silent film · black and white with amber tint · painted sets with skewed perspective · hard single-source light · long shadow on the wall · 1.33:1 frame · iris-in transition · jagged intertitle lettering · stylised acting with wide eyes · 35mm film grain · deep shadow at 8:1
- **Negative:** naturalistic location · soft even light · modern colour grade · straight right-angle walls · handheld shake · fast cuts · spoken dialogue

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| The Cabinet of Dr. Caligari | Robert Wiene | 1920 |
| Nosferatu | F. W. Murnau | 1922 |
| The Last Laugh | F. W. Murnau | 1924 |
| Metropolis | Fritz Lang | 1927 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **less theatrical**: move toward [`french-new-wave`](../french-new-wave/SKILL.md) (French New Wave). Keep the hard light and the black and white; leave the studio for a real street, drop the iris and the tint, and shoot handheld at 24 fps.
- If the user asks for **more rhythm**: move toward [`soviet-montage`](../soviet-montage/SKILL.md) (Soviet montage). Keep the 1.33:1 frame and the hard light; cut to an average of 2 to 3 s and join shots by graphic match.

- **Kin in another domain:** [`film-noir-still`](../film-noir-still/SKILL.md), [`new-objectivity`](../new-objectivity/SKILL.md)
- **Nearest by vector profile:** [`soviet-montage`](../soviet-montage/SKILL.md), [`cinematic-fpv`](../cinematic-fpv/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)

## Emotional target

Dread and unease: the viewer is inside a mind that the world is bending.

**Keywords:** uncanny, gothic, anxious, theatrical, shadowed · **Brand archetypes:** outlaw, magician

## Sources

- [Wikidata Q160476: German Expressionism](https://www.wikidata.org/wiki/Q160476)
- [Wikidata Q153886: The Cabinet of Dr. Caligari](https://www.wikidata.org/wiki/Q153886)
- [Wikidata Q151895: Nosferatu](https://www.wikidata.org/wiki/Q151895)
- [Internet Archive: Der letzte Mann / The Last Laugh (1924), public domain mark](https://archive.org/details/der-letzte-mann-the-last-laugh-1924-by-f.-w.-murnau)
- Lotte Eisner, The Haunted Screen (University of California Press, 1969)
- Barry Salt, Film Style and Technology: History and Analysis (Starword, 3rd ed., 2009)

---

Generated from [`data/film/styles/german-expressionist-cinema.json`](../../data/film/styles/german-expressionist-cinema.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
