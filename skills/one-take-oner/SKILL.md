---
name: one-take-oner
description: "Apply the The oner style (1948–today) when planning, shooting, prompting, editing or grading moving images. Load when the user asks for: oner, one take, long take, single shot film, plan sequence, steadicam follow."
domain: film
era: studio-system
triggers:
  - "oner"
  - "one take"
  - "long take"
  - "single shot film"
  - "plan sequence"
  - "steadicam follow"
  - "no cuts"
vector_profile:
  camera_mobility: 4
  cutting_rate: 1
  staging: 5
  grade_stylisation: 2
  frame_width: 3
---

# The oner

> One unbroken shot holds the viewer in real time and space, so the viewer cannot look away and feels each mistake and each turn as the actors do.

A scene or a whole film in one unbroken shot. The camera follows people through rooms and streets, and the cut is hidden or absent. Time is real, and the crew must be perfect.

**Period:** 1948–today · **Era:** The sound studio system · **Domain:** Film & Video · **Also called:** One-take film, Long continuous take, Plan-séquence

## When to load this skill

Load it when the user asks for: "oner", "one take", "long take", "single shot film", "plan sequence", "steadicam follow", "no cuts".

Good for: tracking-shot video prompts, music videos and brand films in one take, game cut-scenes and trailers, walkthroughs of a place.

Do not use it when:
- The brief needs a fast cut or a montage.
- The budget has no time for 2 weeks or more of rehearsal.

## System directives

When planning, shooting, prompting, editing or grading moving images in The oner, you MUST:

1. Plan the shot on a floor plan, and rehearse it for 2 to 8 weeks.
2. Run the shot for 2 to 12 min for a scene, or 90 min or more for a feature film.
3. Keep the camera in motion at 0.5 to 1.5 m/s, with a steadicam or a rig, and pass it between operators if needed.
4. Hide any cut in a dark door, a pan to a wall or a passing body, if the film is faked as one take.
5. Block each actor with a mark and a cue, and keep 3 to 5 planes of action in the frame.
6. Light the whole set at one level of 3 to 5 stops range so the camera can turn 360°.
7. Keep the sound as one continuous mix, and record the real room.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A cut to cover a mistake.
- **NEVER:** A cutaway to a reaction face.
- **NEVER:** A rapid montage.
- **NEVER:** A tidy shot–reverse-shot talk.
- **NEVER:** A fixed set with one angle.
- **NEVER:** A score that restarts at each cut.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Camera mobility | `■■■■□` 4/5 | locked off, tripod | handheld, gimbal or free flight |
| Cutting rate | `■□□□□` 1/5 | long take, average shot over 20 s | rapid montage, average shot under 2 s |
| Staging | `■■■■■` 5/5 | found, unplanned | fully constructed |
| Grade stylisation | `■■□□□` 2/5 | natural, neutral colour | heavily stylised colour |
| Frame width | `■■■□□` 3/5 | vertical 9:16 | anamorphic 2.39:1 or wider |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Composition

- **Framing:** A wide or medium frame that stays with a person and re-frames in the move; a door or a corridor as a moving second frame.
- **Staging in depth:** 3 to 5 planes of action, with people crossing in front and behind the main figure.
- **Subject placement:** The lead figure centred or a third from the edge, followed by the frame at a constant 1 to 3 m.

**Principles**

| Principle | Rule | Value |
|---|---|---|
| layering-depth | Fill the move with action on 3 to 5 planes. | 3 to 5 planes, as the camera moves |
| focal-point | Move the camera to keep the lead figure at the same place in the frame. | figure within 10% of the frame centre |
| rhythm | Let the action, not a cut, set the pace of the scene. | average shot 120 to 720 s |
| sightlines | Hold the camera at a fixed height and keep it on one side of the line of action. | 1.4 to 1.7 m, 0 crossings of the line |
| scale | Keep the lead figure in a steady size as the camera follows. | figure 30% to 50% of frame height |

## Camera & movement

- **Movement:** A steadicam follow, a crane lift, a 360° whip and a pass from a car to a hand.
- **Support:** Steadicam, crane, dolly and a car mount; a hand-off between operators
- **Camera height:** 1.4 to 1.7 m; 0.5 to 2 m on a crane
- **Move speed:** 0.5 to 1.5 m/s; up to 5 m/s for a chase

## Lens & format

- **Aspect ratio:** 1.85:1 or 2.39:1
- **Frame rate:** 24 fps
- **Shutter angle:** 180° (1/48 s)
- **Focal length:** 18mm to 35mm wide, for depth and a stable move
- **Aperture:** f/4 to f/8 for a deep field
- **Resolution:** 35mm or digital 4K to 6K
- **Focus:** Deep focus with a focus puller, 3 to 5 planes
- **Equipment:** steadicam rig · a crane and a dolly · a wide lens · a wireless focus system

## Light

- **Quality:** Soft and even, from practical lamps and large sources high on the set, so the camera can turn in any direction.
- **Direction:** From above and from the set lamps, with no stand in the frame.
- **Key to fill ratio:** 2:1 to 4:1
- **Colour temperature:** Matched: 3200K or 5600K for the whole shot
- **Source:** Practical lamps, ceiling soft boxes and a window

## Colour & grade

- **Treatment:** A natural, even grade so that the shots match in every room; the image looks seamless.
- **Grade recipe:**
  - Match the white balance in all rooms at 3200K or 5600K.
  - Use a gentle contrast curve of +5% to +15% and a black point of 3%.
  - Keep the exposure steady within ±1 stop in the whole shot.
  - Add grain at 5% to 10% to match the cuts that are hidden.
  - Do not add a vignette or a colour split.
- **Texture:** Clean, with a light grain and a deep field

**Palette**

| Name | Hex | Role |
|---|---|---|
| Set shadow | `#2A2724` | shadow |
| Room mid | `#8A7F72` | midtones |
| Skin tone | `#D0A687` | faces |
| Practical white | `#F2EBDC` | highlights |

## Editing & rhythm

- **Average shot length:** 120 to 720 s for a scene; 90 min or more for a feature (estimate)
- **Shot length range:** 2 min for a scene to the full runtime
- **Cutting logic:** Do not cut, or hide a cut in a dark door or a pan; the action, the move and the sound hold the scene.
- **Transitions:** No visible transition; a hidden cut in a black area or a wall.
- **Runtime:** a 2 to 12 min scene, or 90 to 120 min for a feature

## Sound

- **Approach:** One continuous mix of location sound, with a boom and wireless microphones that follow the camera.
- **Dialogue:** Overlapping and in real time, with exact timing of the actors.
- **Music:** A live score in the room, a song from a source, or a continuous cue under the move.
- **Loudness:** −23 LUFS integrated, with a wide dynamic range

## Titles & graphics

- **Treatment:** A title card before the shot and a plain end card; no title inside the take.
- **Type:** A plain sans-serif or a serif in white, 3 to 5 s per card.

## Shot primer

- **Opening:** Open on one shot and tell the viewer at once, with a title card or a long first move, that no cut will come.

**Shot list**

| Shot | Size | Lens | Movement | Seconds |
|---|---|---|---|---|
| Walk through a house, rooms in series | wide | 24mm | steadicam follow 1.0 m/s | 120 |
| Crane lift out of a street scene | wide | 18mm | crane rise 1 m/s | 25 |
| 360° whip around a table | medium | 24mm | steadicam orbit, 8 s | 8 |
| Hand-off from a car to a runner | medium | 28mm | hand-off, 2 operators | 30 |
| Hidden cut in a dark door | medium | 24mm | pass through black | 2 |
| Final stop on a face | close-up | 35mm | slow push-in 0.2 m/s | 15 |

## Video prompt primer

- **Positive:** single continuous take · steadicam follows a character through rooms · no cuts · deep focus with 4 planes of action · 360 degree camera move · real time scene · even practical light · 1.85:1 frame · hidden cut in a dark doorway
- **Negative:** cut away · rapid montage · shot reverse shot · close-up inserts · stylised grade · slow motion

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Rope | Alfred Hitchcock | 1948 |
| Touch of Evil | Orson Welles | 1958 |
| Russian Ark | Aleksandr Sokurov | 2002 |
| Birdman | Alejandro González Iñárritu | 2014 |
| 1917 | Sam Mendes | 2019 |

## Composition principles

The rules above name these shared principles by id. The definition is the same in every domain; the number in the rule belongs to this style. The full records are in [`data/principles/`](../../data/principles/).

| Id | Principle | Definition | Measure: typical range |
|---|---|---|---|
| `layering-depth` | Layering in depth | A view holds elements on several planes at different distances from the eye. Overlap between the planes shows depth. | planes in depth (count): 2 to 4; overlap between planes (% of the nearer element): 10–40 |
| `focal-point` | Focal point | The one place in a view that the eye finds first and comes back to. A composition has one primary focal point and at most two secondary ones. | focal points in one view (count): 1 primary, 0 to 2 secondary; luminance of the focal point to its surround (ratio): 3:1 to 10:1; position (fraction of width): 0.5 on an axis, or 0.33 / 0.67 on a third |
| `rhythm` | Rhythm and repetition | An element or an interval repeats at a regular, alternating or progressive step, and the eye moves along the series. | repetitions in one series (count): 3 or more; type (kind): regular, alternating, progressive; average shot length (seconds): 1.5–3 fast; 5–12 moderate; 30 or more for a long take |
| `sightlines` | Sightlines | The line from an eye position, such as an entrance or a seat, to a target. A clear sightline joins the viewer to the focal point. | camera height (cm): 120–170 at eye level; under 100 for a low angle; crossings of the line of action in one scene (count): 0 |
| `scale` | Scale | The size of an element in relation to the human body, to the space around it and to the other elements. A style chooses a reference body and holds the elements in a range around it. | subject height to frame or canvas height (% of frame height): 10–30 in a wide shot; 40–80 in a close-up |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Long take (montage)

A shot that runs for minutes with no visible cut; the camera and the actors carry the scene and the viewer sees real time. Origin: film & video, Hollywood, 1948.

- Plan the take in blocks of 2 to 10 minutes; the length of a reel or a memory card sets the limit.
- Hide a needed cut in a dark surface, a door, a wipe past a wall or a digital stitch, and keep it under 0.5 seconds.
- Move the camera at a steady pace and let the actors enter and leave the frame so that the framing changes by itself.
- Rehearse each move to a few centimetres, because a mistake at minute eight spoils the full take.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Cannes Film Festival** (salon, Cannes, 1946–now), exhibited the style. An annual film festival with a juried competition. It gave prizes to neorealist, New Hollywood, Dogme 95 and slow-cinema films.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Aspect ratio (`aspect_ratio`) | 2.39:1 | 1.85:1, 2.39:1 | lens_and_format, composition |
| Frame rate (`frame_rate`) | 24 | 24–24 fps | capture, camera_and_movement |
| Average shot length (`average_shot_length`) | 360 | 120–600 s | editing_and_rhythm |
| Colour temperature (`colour_temperature`) | 3200 | 3200–5600 K | colour_and_grade, light |
| Grain (`grain`) | 0.08 | 0.05–0.1 | colour_and_grade |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more stillness**: move toward [`slow-cinema`](../slow-cinema/SKILL.md) (Slow cinema). Keep the long take; lock the camera and let nothing move for 60 s or more.
- If the user asks for **more speed**: move toward [`hong-kong-action`](../hong-kong-action/SKILL.md) (Hong Kong action). Keep the continuous move; add choreographed fight beats and a faster follow of 3 to 5 m/s.

- **Came from (go here for a more orthodox version):** [`classical-hollywood`](../classical-hollywood/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`soviet-montage`](../soviet-montage/SKILL.md)
- **Mixes well with:** [`slow-cinema`](../slow-cinema/SKILL.md)
- **Nearest by vector profile:** [`cinematic-fpv`](../cinematic-fpv/SKILL.md), [`classical-hollywood`](../classical-hollywood/SKILL.md), [`phone-cinema`](../phone-cinema/SKILL.md)

## Emotional target

Suspense and presence: the viewer is held in real time and feels each step of the plan.

**Keywords:** continuous, immersive, tense, choreographed, real-time · **Brand archetypes:** explorer, hero

## Sources

- [Long take](https://en.wikipedia.org/wiki/Long_take)
- David Bordwell, The Way Hollywood Tells It: Story and Style in Modern Movies (University of California Press, 2006)
- [Cinemetrics database](https://www.cinemetrics.lv/)

---

Generated from [`data/film/styles/one-take-oner.json`](../../data/film/styles/one-take-oner.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
