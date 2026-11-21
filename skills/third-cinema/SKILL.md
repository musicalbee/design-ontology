---
name: third-cinema
description: "Apply the Third Cinema style (1968–) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: third cinema, tercer cine, la hora de los hornos, solanas, getino, militant documentary."
domain: film
era: new-waves
triggers:
  - "third cinema"
  - "tercer cine"
  - "la hora de los hornos"
  - "solanas"
  - "getino"
  - "militant documentary"
  - "political essay film"
vector_profile:
  camera_mobility: 4
  cutting_rate: 4
  staging: 1
  grade_stylisation: 2
  frame_width: 2
---

# Third Cinema

> A film made outside the studio and outside the art house is a weapon for a people in a struggle, so each image must serve an argument and each screening must start a debate.

A militant film that works as a tool, not as a show. It uses a light 16mm camera, black and white stock, real streets and factories, archive clips, slogans on screen and direct address. The picture is rough and the cut is an argument.

**Period:** 1968– · **Era:** Portable cameras and the new waves · **Domain:** Film & Video · **Also called:** Tercer Cine, Militant documentary, Cinema of liberation

## When to load this skill

Load it when the user asks for: "third cinema", "tercer cine", "la hora de los hornos", "solanas", "getino", "militant documentary", "political essay film".

Good for: campaign and activist films, archive-led political essays, community documentaries, protest video prompts.

Do not use it when:
- The brief needs a calm, neutral observer.
- The brief needs a polished, glossy look.
- The film must entertain and make no claim.

## System directives

When planning, shooting, prompting, editing or grading moving images in Third Cinema, you MUST:

1. Shoot with a light 16mm camera and a crew of 2 to 6 people, in the streets, the factories and the villages.
2. Cast real workers and activists as themselves, and let them speak to the camera.
3. Cut live footage against newsreel, photographs, statistics and printed slogans, to make a claim.
4. Split the film into chapters with title cards of 2 to 6 words and a clear question.
5. Use handheld takes of 5 to 20 s and a hard cut, and hold a face when it speaks.
6. Lay a voice-over or a song over the image, and leave gaps for the audience to answer.
7. Show the film in a meeting room or a union hall, and stop it for a debate.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A studio set or a star actor.
- **NEVER:** A score that decorates the image.
- **NEVER:** A soft, glossy colour grade.
- **NEVER:** A scene that entertains and makes no claim.
- **NEVER:** A neutral voice that hides the maker's side.
- **NEVER:** A tidy ending that closes the argument.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■□` 4/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■■■■□` 4/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■□□□□` 1/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■□□□` 2/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■□□□` 2/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A tight, plain 4:3 or 1.37:1 frame at eye level; faces fill the frame in an interview, and a crowd fills it in a march.
- **Staging in depth:** 2 planes: a speaker in front and a wall, a poster or a crowd behind, as found.
- **Subject placement:** Centre a speaker who looks at the lens; place a crowd or a machine off centre.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| framing | Frame a speaker close and let the eyes meet the lens. | head and shoulders, 1 or 2 persons |
| focal-point | Put the printed slogan or the face on the centre line. | title cards of 2 to 6 words, centred |
| layering-depth | Keep the street or the factory visible behind the speaker. | 2 planes, as found |
| lighting-layers | Use daylight and the lamps in the room. | 0 added lamps, 3:1 or lower key to fill |
| rhythm | Cut a long talk against a short burst of archive images. | 3 to 6 s average shot, with takes up to 60 s |

## Camera & movement

- **Movement:** A handheld follow of a march or a worker, a zoom to a face, and a static take for a speech.
- **Support:** Handheld or shoulder-braced 16mm camera; a tripod for a talk
- **Camera height:** 1.2 to 1.7 m, eye level
- **Move speed:** Walking pace 1.0 to 1.6 m/s; a zoom over 1 to 4 s

## Lens & format

- **Aspect ratio:** 1.33:1 or 1.37:1
- **Frame rate:** 24 fps
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** a 10mm to 16mm wide lens for a crowd, a 25mm to 75mm zoom for a face
- **Aperture:** f/2.8 to f/8, set by the available light
- **Resolution:** 16mm film, scanned at 2K for screen
- **Focus:** Hand-set focus on the main face, with a slip allowed when the camera moves
- **Equipment:** a light 16mm camera · a portable tape recorder or a sync sound unit · a fast black and white stock · a small tripod · a slide projector for copy shots

## Light

- **Quality:** Hard daylight, a bare room lamp and a window; a flat, contrasty black and white image.
- **Direction:** From a window, the sky or a lamp in the room.
- **Key to fill ratio:** 3:1 or lower, left as found
- **Colour temperature:** Not set; the film is black and white
- **Source:** The sun, windows, street lamps and bare bulbs

## Colour & grade

- **Treatment:** Black and white with strong contrast and visible grain. A single red or white title card may break the grey.
- **Grade recipe:**
  - Print black and white with a contrast of +10% to +20%.
  - Keep the blacks at 3% or higher so that the grain shows.
  - Let archive clips keep their own grey, scratches and dirt.
  - Use red for a title card or a flag only, in less than 5% of the film.
  - Do not add a LUT or a soft glow.
- **Texture:** Coarse 16mm grain, scratches on the archive clips and a clipped sky

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink black | `#111111` | shadow |
| Newsprint grey | `#8E8E8A` | midtones |
| Paper white | `#EDEBE4` | highlights and title cards |
| Slogan red | `#B3261E` | a single title card |

## Editing & rhythm

- **Average shot length:** 3 to 8 s (estimate; check Cinemetrics for each title)
- **Shot length range:** 1 s for an archive flash to 3 min for a speech
- **Cutting logic:** Cut on the claim: an image meets a slogan, a number or a clip from the news, and the clash makes the point.
- **Transitions:** Hard cut and a cut to black between chapters; no dissolve.
- **Runtime:** 60 to 270 min, in chapters (estimate; the long form is for a debate)

## Sound

- **Approach:** Mixed sound: sync speech on location, a voice-over, a song and the noise of a crowd.
- **Dialogue:** Direct speech to the camera, interviews and slogans; people interrupt and overlap.
- **Music:** Folk songs and drums from the people in the film; a short piece of archive sound.
- **Loudness:** −18 LUFS integrated, with a wide range

## Titles & graphics

- **Treatment:** Plain slogan cards, chapter titles, dates and figures; a hand-lettered or typed text on black or on a poster.
- **Type:** A heavy sans-serif or a typewriter face in white on black, 2 to 5 s per card.

## Shot primer

- **Opening:** Open on a street or a factory gate, with a slogan card over the first 5 s.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| A march in a street | wide | 12mm | handheld follow 1.4 m/s | 12 |
| A worker speaks to the camera | close-up | 50mm | static, tripod | 25 |
| An archive newsreel insert of dock workers at a port | insert | 35mm | static copy shot | 4 |
| A factory floor with machines | medium | 16mm | handheld pan | 10 |
| A slogan card on black | card | none | static | 3 |
| A meeting in a union hall | wide | 16mm | slow zoom over 6 s | 15 |

## Video prompt primer

- **Positive:** third cinema militant documentary · 16mm black and white · handheld camera in a crowded street · worker speaks to the camera · title card with a slogan · archive newsreel inserts · coarse film grain, high contrast · 1.37:1 frame
- **Negative:** colour grade · studio light · film score · dolly move · star actor · glossy finish

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| La hora de los hornos | Fernando Solanas and Octavio Getino | 1968 |
| Memorias del subdesarrollo | Tomás Gutiérrez Alea | 1968 |
| Blood of the Condor | Jorge Sanjinés | 1969 |
| México, la revolución congelada | Raymundo Gleyzer | 1971 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `framing` | Framing | A nearer element, such as a doorway, an arch, a window or a branch, surrounds the subject and isolates it. | frame area (% of the view): 10–35; frame planes (count): 1 to 2 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `lighting-layers` | Lighting layers | Light comes from separate layers with separate jobs: ambient light for the whole space, task light for work, accent light for the focal point. In photography the same split is key, fill and accent light. | key to fill (ratio): 2:1 flat and natural; 4:1 glamour; 8:1 or more for deep shadow |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Handheld camera (tool)

A camera that the operator carries on the body, with no tripod or dolly; the shake of the body shows in the frame. Origin: film & video, Paris, c. 1960.

- Use a light camera and a wide lens of 18mm to 35mm so that the shake stays small in the frame.
- Follow the action at the pace of a walking person and let the frame move 2% to 5% off the subject.
- Do not stabilise in post; accept a late refocus and a missed frame as part of the take.
- Shoot long takes of 30 seconds or more, so that the camera seems to live in the room.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Cinema Novo** (collective, Rio de Janeiro, 1960–1972), shaped the style. A Brazilian film movement of young directors who filmed poverty, the land and the state in a rough form. Its three phases ran from 1960 to 1972.
- **Grupo Cine Liberación** (crew, Buenos Aires, ?–now), launched the style. An Argentine film group of Solanas, Getino and Vallejo. They made The Hour of the Furnaces and wrote Toward a Third Cinema, the best-known manifesto of Third Cinema.
- **L.A. Rebellion** (collective, Los Angeles, 1967–1999), shaped the style. A group of African and African-American students at the UCLA film school. They made films on Black life as an answer to the Hollywood picture.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 1.37:1 | 1.33:1, 1.37:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 24 | 24–25 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 5 | 3–8 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 5600 | 4500–6500 K | colour_and_grade, light |
| Grain (`grain`) | 0.5 | 0.35–0.7 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more observation**: move toward [`documentary-verite`](../documentary-verite/SKILL.md) (Direct cinema and vérité). Drop the slogans and the archive clips; keep the handheld 16mm and let the camera wait and listen.
- If the user asks for **more montage**: move toward [`soviet-montage`](../soviet-montage/SKILL.md) (Soviet montage). Keep the political claim; build it from shorter shots, hard cuts of 1 to 3 s and clashes of image against image.

- **Came from (go here for a more orthodox version):** [`documentary-verite`](../documentary-verite/SKILL.md), [`soviet-montage`](../soviet-montage/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`classical-hollywood`](../classical-hollywood/SKILL.md)
- **Nearest by vector profile:** [`dogme-95`](../dogme-95/SKILL.md), [`mumblecore`](../mumblecore/SKILL.md), [`french-new-wave`](../french-new-wave/SKILL.md)

## Emotional target

Urgent solidarity: the viewer sees a struggle as a fact and feels the call to take a side.

**Keywords:** militant, urgent, collective, rough, argumentative · **Brand archetypes:** outlaw, hero

## Sources

- [Third Cinema](https://en.wikipedia.org/wiki/Third_Cinema)
- Fernando Solanas and Octavio Getino, Toward a Third Cinema (Tricontinental, 1969)
- [Cinemetrics database](https://www.cinemetrics.lv/)

---

Generated from [`data/film/styles/third-cinema.json`](../../data/film/styles/third-cinema.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
