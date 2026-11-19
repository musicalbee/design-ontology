---
name: pov-short
description: "Apply the POV Short style (2020–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: pov, point of view video, pov skit, you are the, first person clip, pov:."
domain: internet
era: contemporary-spatial
triggers:
  - "pov"
  - "point of view video"
  - "pov skit"
  - "you are the"
  - "first person clip"
  - "pov:"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# POV Short

> Make the viewer the second person in the scene: the caption names the situation, the lens is the viewer.

A short clip that shows a scene as if the viewer is a character: the camera is the viewer's eyes and the actor talks straight to the lens. A text line that starts with "POV:" sets the scene.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** POV video, POV skit, First-person clip

## When to load this skill

Load it when the user asks for: "pov", "point of view video", "pov skit", "you are the", "first person clip", "pov:".

Good for: comic skits, role-play clips, scene-setting teasers, relatable brand skits.

Do not use it when:
- The message needs a view of many places.
- The actor cannot look at the lens.
- The tone is formal.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in POV Short, you MUST:

1. Start the clip with a title line that begins with "POV:" at 48 px, centred at 18% of the frame height.
2. Shoot with a phone held at eye level, a wide lens of 24 mm equivalent, and a small, steady shake.
3. Have the actor look into the lens for at least 60% of the clip.
4. Keep the clip between 7 s and 20 s, with one joke or turn at the end.
5. Use a single room and 1 to 2 props.
6. Put the 1 line caption in white on a 70% black bar, 40 px, so the situation is clear.
7. Cut once or twice at most; hold the take for 3 s to 8 s.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A third-person wide shot.
- **NEVER:** Many locations in one clip.
- **NEVER:** Text that does not name the role of the viewer.
- **NEVER:** Studio lighting with a perfect set.
- **NEVER:** Long monologue with no turn.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single vertical frame with a title line at 14% to 22% of the height and a caption zone at 68% to 80%.
- **Whitespace ratio:** A close shot fills 70% of the frame; the rest is a plain room.
- **Alignment rules:** The face and the lens sit at the centre; the title line is centred; props appear at the frame edge.
- **Container geometry:** Hard rectangle video; the title bar is a 70% black strip with 12 px radius.

## Typography

- **Classifications:** neutral sans · bold sans
- **Tracking:** Display -0.01em; body 0em.
- **Leading:** Display 1.2; body 1.4.
- **Hierarchy rules:**
  - Use bold (700) for the POV line and regular (400) for the rest.
  - Set the POV line at 48 px.
  - Use a black bar behind white text.
  - Keep the POV line to 10 words.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | One neutral family; weights give the hierarchy. |
| Roboto | Roboto Flex | A system-like sans that looks like the default app font. |

## Colour & lighting

- **Palette structure:** Plain room colours with white text on a black bar and one blue accent for the "POV" tag.
- **Contrast rules:** White on the black bar gives 18:1; the blue tag has white text at 3.7:1 on 24 px bold only.
- **Surface treatment:** Flat bars over live video; no gradients.
- **Light and shadow:** Practical room light: a lamp at 3200 K and a window; a face lit from the front at low contrast.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Room Grey | `#2B2D31` | background |
| POV Blue | `#3A86FF` | primary |
| Warm Wood | `#B07A4F` | accent |
| White | `#FFFFFF` | text |
| Fog | `#C3C6CC` | muted text |
| Black Bar | `#111214` | surface |

## Materiality & texture

- **Surface simulation:** A phone camera in a real room: slight noise, wide-angle edge stretch.
- **Border rules:** None on the video; the title bar has a 0 border.
- **Blur and elevation:** No blur; a 24 px black gradient at the top helps the title.

## Ornamentation & iconography

- **Iconography:** Solid 24 px icons in the app rail.
- **Illustration:** None; the person and the room are the picture.
- **Decorative elements:** POV title bar · lens-gaze actor · single prop · one-line caption · wide-angle stretch

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A hold of 3 s to 8 s with a slight handheld sway of 4 px; one cut at the turn; the caption appears in 100 ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 100
- **Hover and active:** A tap on the caption pauses the clip.

## Code & token primer

Set `data-style="pov-short"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="pov-short"] {
  --color-bg: #2B2D31;
  --color-surface: #111214;
  --color-text: #FFFFFF;
  --color-muted: #C3C6CC;
  --color-primary: #3A86FF;
  --color-accent: #B07A4F;
  --color-border: #111214;
  --font-sans: "Inter", "Roboto", sans-serif;
  --font-display: "Inter", "Roboto Flex", sans-serif;
  --border-radius: 12px;
  --border-width: 0px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 100ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #000000;
  --color-on-accent: #000000;
  --color-muted-on-bg: #C3C6CC;
  --color-muted-on-surface: #C3C6CC;
  --color-link: #FFFFFF;
  --color-link-on-surface: #B07A4F;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#2B2D31] text-white font-sans antialiased` |
| heading | `text-5xl font-bold leading-[1.2] text-center` |
| body | `text-base leading-[1.4] text-[#C3C6CC]` |
| section | `rounded-xl bg-[#111214] px-4 py-3` |
| button | `rounded-xl bg-[#3A86FF] px-6 py-3 text-base font-bold text-[#111214]` |
| label | `text-xs font-bold uppercase text-[#C3C6CC]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A filled, neutral family that looks like the default app rail. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.01em, leading 1.2, case: none.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, center aligned, regular density, accent tilt 0°.
- **Ground:** raw. The ground is a raw, flat dark room that holds the frame of a phone video. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
- **Text colour:** `--color-text` is for the main reading field only. On each field, use its token: `--color-on-bg`, `--color-on-surface`, `--color-on-primary`, `--color-on-accent`.

### How to choose an icon pack

An icon pack is a typeface for pictures. Choose it with the same care as the text face. These rules hold for an open-source set and for a licensed library.

1. **The stroke matches the stem.** Set an icon next to the body text at text size. The line of the icon and the stem of a letter have the same weight.
2. **Terminals and corners follow the radius token.** Butt caps and mitre joins go with a radius of zero. Round caps and round joins go with a soft radius.
3. **The fill mode follows the technology of the era.** Print eras cut solid forms. Screen eras with depth fill and shade the form. Current product interfaces draw an outline.
4. **The metaphors are not younger than the style.** Each picture is an object that the era knew. An icon with a later metaphor breaks the period.
5. **One family, one grid.** All icons come from one family and one variant, drawn on one field. Do not mix families on one surface.
6. **The family covers the product.** List each concept that the product needs before you commit. A family that has no icon for one of them is the wrong family.
7. **The colour is a token.** An icon takes currentColor. A second tone comes from a token, not from the file.
8. **The licence permits the use.** Read the licence of the set. Give credit where the licence asks for it. A product with a brand uses its licensed library and applies the same rules to choose the family.

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Handheld camera (tool)

A camera that the operator carries on the body, with no tripod or dolly; the shake of the body shows in the frame. Origin: film & video, Paris, c. 1960.

- Use a light camera and a wide lens of 18mm to 35mm so that the shake stays small in the frame.
- Follow the action at the pace of a walking person and let the frame move 2% to 5% off the subject.
- Do not stabilise in post; accept a late refocus and a missed frame as part of the take.
- Shoot long takes of 30 seconds or more, so that the camera seems to live in the room.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #3A86FF | #3A86FF, #B07A4F, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #B07A4F | #3A86FF, #B07A4F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 0–12 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polish**: move toward [`creator-vlog`](../creator-vlog/SKILL.md) (Creator vlog). Use a tripod, a mic and a colour grade.
- If the user asks for **two people**: move toward [`duet-split-screen`](../duet-split-screen/SKILL.md) (Duet Split-Screen). Add the viewer's answer in a second panel.
- If the user asks for **faster**: move toward [`velocity-edit`](../velocity-edit/SKILL.md) (Velocity Edit). Add 4 cuts and speed ramps on the punchline.

- **Mixes well with:** [`grwm-short`](../grwm-short/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`dreamcore`](../dreamcore/SKILL.md), [`green-screen-short`](../green-screen-short/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md)

## Emotional target

The viewer feels placed inside a small scene and smiles.

**Keywords:** immediate, comic, intimate, relatable, awkward · **Brand archetypes:** jester, everyman

## Sources

- [Wikipedia: Point-of-view shot](https://en.wikipedia.org/wiki/Point-of-view_shot)
- [Wikipedia: TikTok](https://en.wikipedia.org/wiki/TikTok)

---

Generated from [`data/internet/styles/pov-short.json`](../../data/internet/styles/pov-short.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
