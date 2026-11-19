---
name: classical-hollywood
description: "Apply the Classical Hollywood style (1930–1960) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: classical hollywood, golden age hollywood, studio era film, three-point lighting film, technicolor look, 1940s movie."
domain: film
era: studio-system
triggers:
  - "classical hollywood"
  - "golden age hollywood"
  - "studio era film"
  - "three-point lighting film"
  - "technicolor look"
  - "1940s movie"
  - "continuity editing"
  - "old hollywood glamour"
vector_profile:
  camera_mobility: 3
  cutting_rate: 3
  staging: 5
  grade_stylisation: 3
  frame_width: 2
---

# Classical Hollywood

> A film serves its story, so every device (light, angle, cut and score) is invisible and keeps the viewer's eye on the character and the action.

A studio craft in which the camera, the light and the cut serve a clear story. Three-point light, a master shot with coverage and a smooth match cut. The style hides itself.

**Period:** 1930–1960 · **Era:** The sound studio system · **Domain:** Film & Video · **Also called:** Studio-era Hollywood, Continuity style, Golden age Hollywood

## When to load this skill

Load it when the user asks for: "classical hollywood", "golden age hollywood", "studio era film", "three-point lighting film", "technicolor look", "1940s movie", "continuity editing", "old hollywood glamour".

Good for: period films and pastiche, fashion and fragrance films, video prompts for a studio-era scene, title sequences with a glamour tone.

Do not use it when:
- The brief needs an observed, unplanned reality.
- The piece must feel raw, current or amateur.

## System directives

When planning, shooting, prompting, editing or grading moving images in Classical Hollywood, you MUST:

1. Light each face with a three-point setup at a key-to-fill ratio of 3:1 to 4:1, a back light at 1.5 to 2 times the key and a soft eye light.
2. Shoot a master shot and cover each scene with a medium shot and a close-up from 3 to 5 set-ups, and keep the 180° line.
3. Cut for continuity on action, at an average shot length of 8 to 12 s, with the match cut hidden inside a movement.
4. Frame in 1.37:1 (1.33:1 to 1.37:1) at eye level, a 40mm to 75mm lens, with the star in a medium close-up in the centre third.
5. Use a dolly or a crane move of 0.3 to 0.8 m/s only to follow a character, and finish it on a stop.
6. Score under the scene with a leitmotif per character at −18 to −22 dB below the dialogue, and a rising cue before an act break.
7. Resolve the plot in three acts of 25%, 50% and 25% of the runtime and end on a closed, legible image.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A jump cut that shows the edit.
- **NEVER:** A handheld shake with no motive.
- **NEVER:** An open ending with no resolution.
- **NEVER:** Available light with no fill.
- **NEVER:** A camera that looks into the lens.
- **NEVER:** A shot that breaks the 180° line without a reason.
- **NEVER:** A location sound track with unclear dialogue.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■□□` 3/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■□□` 3/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■■■` 5/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■■□□` 3/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A 1.37:1 frame at eye level with the star in the centre third; head room of 5% to 10% and a balanced two-shot.
- **Staging in depth:** A foreground of 1 to 2 m, a middle of the actors and a back plane lit apart from them; the background is soft or lit lower.
- **Subject placement:** The star on a third line, facing 3/4 to the lens, and the other actor in the opposite third.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| lighting-layers | Light each face with a key, a fill and a back light so that the figure separates from the set. | 3:1 to 4:1 key to fill, back light 1.5× key |
| focal-point | Give the star the brightest and sharpest mass of the frame, in a medium close-up. | star on a third, 40% to 60% of the frame height |
| sightlines | Keep the eyelines and the 180° line stable across a scene so that the viewer always knows who looks at whom. | 1 line of action per scene, 0 crossings |
| rule-of-thirds | Place the eyes on the upper third line and balance a two-shot on both thirds. | eyes at 33% from the top |
| balance | Balance a lit star on one side with a darker mass or a prop on the other. | 60:40 visual weight |

## Camera & movement

- **Movement:** A smooth dolly or crane move, motivated by a character, and ended on a stop. The pan follows the action and leads it by a little.
- **Support:** Studio dolly, crane and tripod with a geared head
- **Camera height:** 1.2 to 1.7 m, eye level; low for a villain, rarely above 2 m
- **Move speed:** Dolly 0.3 to 0.8 m/s; pan 10° to 25° per second

## Lens & format

- **Aspect ratio:** 1.37:1 (Academy), later 1.85:1 or 2.55:1 from 1953
- **Frame rate:** 24 fps
- **Shutter angle:** 170° to 180° (1/48 s)
- **Focal length:** 40mm to 75mm (35mm format); 25mm to 35mm for deep-focus sets
- **Aperture:** f/2.8 to f/5.6 with a soft background; f/8 for deep focus
- **Resolution:** 35mm negative; scan at 2K or 4K
- **Focus:** Selective focus on the star; a diffusion filter on the close-up of a woman.
- **Equipment:** studio arc and tungsten lamps · three-strip Technicolor camera · dolly and crane · diffusion gauze

## Light

- **Quality:** Soft on faces through diffusion, hard on the set and hair; glamour light with a clean modelling shadow.
- **Direction:** Key at 45° and above eye level, fill from the camera side, a back light from above and behind.
- **Key to fill ratio:** 3:1 to 4:1 (1.6 to 2 stops); 8:1 for film noir
- **Colour temperature:** Tungsten 3200K, with Technicolor balanced to 3200K at high light levels
- **Source:** Studio arcs, tungsten and a soft eye light

## Colour & grade

- **Treatment:** Rich black and white with a full tonal range, or three-strip Technicolor with saturated primaries and warm skin.
- **Grade recipe:**
  - Set the black point at 2% and the white point at 97% for a full-range print.
  - Apply a medium S-curve of +20% contrast and a soft shoulder in the highlights.
  - For colour, push red and blue saturation by +25% and warm the skin to 5% to 8% magenta-yellow.
  - Add a diffusion glow of 5% to 10% on the highlights of a close-up.
  - Keep grain at 6% to 10%; no vignette and no teal cast.
- **Texture:** Fine grain at 6% to 10%, clean blacks and a glow on the highlights

**Palette**

| Name | Hex | Role |
|---|---|---|
| Studio black | `#101012` | blacks |
| Silver grey | `#8C8C8A` | midtones |
| Glamour white | `#F3F0E6` | highlights and skin |
| Technicolor red | `#B3262A` | saturated accent |
| Technicolor blue | `#1F4E8C` | saturated accent |

## Editing & rhythm

- **Average shot length:** 8 to 12 s for the 1930s and 1940s (estimate from Salt and Cinemetrics; check each title)
- **Shot length range:** 1.5 s for an insert to 40 s for a long dialogue take
- **Cutting logic:** Cut on the action and on the eyeline so that the viewer does not see the edit. Start a scene wide, go to medium and then to the close-up on the key line.
- **Transitions:** Hard cut on action, a dissolve of 1 to 2 s for a time jump, a fade to black of 1 s at an act, a wipe for a montage.
- **Runtime:** 90 to 120 min

## Sound

- **Approach:** Clean studio dialogue, a scored track and foley added in post; the room is silent.
- **Dialogue:** Clear and quick, with sharp diction and no overlap, at a steady rate of 160 to 200 words per minute.
- **Music:** A full orchestral score with a leitmotif for each character, under the dialogue and swelling at the act break.
- **Loudness:** −23 LUFS integrated for a restoration, dialogue at −12 dBFS average

## Titles & graphics

- **Treatment:** A big title sequence on a painted or a live backdrop, with cast cards; the studio logo and the credits come before the story.
- **Type:** A bold serif or a script in the title, a plain serif in the credits, 3 to 6 s per card, white on a painted ground.

## Shot primer

- **Opening:** Open on an establishing shot of a place, with a title or a pan that lands on the lead; hold 4 to 6 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Establishing shot | wide | 35mm | crane down 0.5 m/s | 5 |
| Master shot of the scene | wide | 40mm | dolly 0.3 m/s | 20 |
| Medium two-shot | medium | 50mm | locked off | 10 |
| Close-up on the key line | close-up | 75mm | locked off | 6 |
| Reverse close-up | close-up | 75mm | locked off | 5 |
| Dissolve to the next scene | wide | 35mm | dissolve 1.5 s | 2 |

## Video prompt primer

- **Positive:** 1940s Hollywood studio film · three-point lighting · glamour close-up with soft diffusion · 1.37:1 frame · black and white 35mm · Technicolor saturated red and blue · smooth dolly move · match cut on action · studio back lot
- **Negative:** handheld shake · jump cut · open ending · available light only · teal and orange grade · fast cuts · shallow bokeh

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Stagecoach | John Ford | 1939 |
| Casablanca | Michael Curtiz | 1942 |
| Singin' in the Rain | Gene Kelly and Stanley Donen | 1952 |
| Rear Window | Alfred Hitchcock | 1954 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | key to fill (ratio): 2:1 flat and natural; 4:1 glamour; 8:1 or more for deep shadow |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera height (cm): 120–170 at eye level; under 100 for a low angle; crossings of the line of action in one scene (count): 0 |
| `rule-of-thirds` | Rule of thirds | Two horizontal and two vertical lines divide the view into nine equal parts. The focal point sits on one of the four crossings, and a horizon sits on one of the two horizontal lines. | focal point position (fraction of width and height): 0.33 or 0.67, tolerance 0.05; horizon position (fraction of height): 0.33 or 0.67 |
| `balance` | Visual balance | The visual weights on the two sides of a centre cancel out. Formal balance uses mirrored equal weights; informal balance sets a large near mass against several small far masses. | moment of visual weight, left to right about the centre (ratio): 1.0 formal; 0.8–1.25 informal; type (kind): formal, informal, radial |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Three-point lighting (process, invented here)

A key light, a fill light and a back light on one subject, so that the face is modelled and stands out from the ground. Origin: film & video, Hollywood, United States, c. 1915.

- Set the key light 30 to 45 degrees off the camera axis and above eye level.
- Set the fill on the other side at 1/4 to 1/2 of the key.
- Put the back light behind the subject, so that a thin rim of light separates hair and shoulders from the ground.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **RKO Pictures** (studio, Los Angeles, 1928–1959), made the style. A Hollywood studio of the studio era. It made classic Hollywood films and many low-key film noirs, with their publicity stills.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 1.37:1 | 1.33:1, 1.37:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 24 | 24–24 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 9 | 8–12 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 3200 | 3000–3400 K | colour_and_grade, light |
| Grain (`grain`) | 0.08 | 0.06–0.1 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more realism**: move toward [`italian-neorealism`](../italian-neorealism/SKILL.md) (Italian Neorealism). Keep the black and white and the 1.37:1 frame; leave the studio for a street, drop the glamour key and use daylight with a bounce.
- If the user asks for **more shadow**: move toward [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md) (German Expressionist cinema). Keep the studio and the black and white; raise the key-to-fill ratio to 8:1 and let a shadow take 40% or more of the frame.

- **Came from (go here for a more orthodox version):** [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md)
- **Led to (go here for a newer version):** [`one-take-oner`](../one-take-oner/SKILL.md)
- **Was rejected by:** [`film-noir`](../film-noir/SKILL.md), [`italian-neorealism`](../italian-neorealism/SKILL.md), [`mumblecore`](../mumblecore/SKILL.md), [`music-video`](../music-video/SKILL.md), [`new-hollywood`](../new-hollywood/SKILL.md), [`slow-cinema`](../slow-cinema/SKILL.md), [`spaghetti-western`](../spaghetti-western/SKILL.md)
- **Kin in another domain:** [`art-deco-architecture`](../art-deco-architecture/SKILL.md), [`pre-rendered-backgrounds`](../pre-rendered-backgrounds/SKILL.md)
- **Nearest by vector profile:** [`film-noir`](../film-noir/SKILL.md), [`german-expressionist-cinema`](../german-expressionist-cinema/SKILL.md), [`planimetric-symmetry`](../planimetric-symmetry/SKILL.md)

## Emotional target

Comfort and absorption: the viewer follows the story and the stars without noticing the craft.

**Keywords:** polished, romantic, clear, glamorous, absorbing · **Brand archetypes:** hero, lover

## Sources

- [Wikidata Q2166646: Classical Hollywood cinema](https://www.wikidata.org/wiki/Q2166646)
- [Wikidata Q50714: Stagecoach](https://www.wikidata.org/wiki/Q50714)
- [Wikidata Q34414: Rear Window](https://www.wikidata.org/wiki/Q34414)
- [Wikidata Q309153: Singin' in the Rain](https://www.wikidata.org/wiki/Q309153)
- David Bordwell, Janet Staiger and Kristin Thompson, The Classical Hollywood Cinema (Columbia University Press, 1985)
- Barry Salt, Film Style and Technology: History and Analysis (Starword, 3rd ed., 2009)

---

Generated from [`data/film/styles/classical-hollywood.json`](../../data/film/styles/classical-hollywood.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
