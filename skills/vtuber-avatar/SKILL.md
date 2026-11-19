---
name: vtuber-avatar
description: "Apply the VTuber Avatar style (2016–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: vtuber, virtual youtuber, anime avatar, live2d, virtual idol, character streamer."
domain: internet
era: touchscreen
triggers:
  - "vtuber"
  - "virtual youtuber"
  - "anime avatar"
  - "live2d"
  - "virtual idol"
  - "character streamer"
  - "kawaii stream"
vector_profile:
  ornamentation: 4
  dimensionality: 4
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# VTuber Avatar

> The host is a character: a tracked avatar gives a person a face that is safe, stable and designed, and the frame is dressed to match.

A drawn anime-style character takes the place of the host. A face tracker moves the eyes, mouth and head in real time. Pastel panels, sparkle and cute rounded frames hold the scene.

**Period:** 2016–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Virtual YouTuber, VTuber, Live2D streamer

## When to load this skill

Load it when the user asks for: "vtuber", "virtual youtuber", "anime avatar", "live2d", "virtual idol", "character streamer", "kawaii stream".

Good for: virtual idol and music pages, privacy-first creator channels, brand mascot streams, game and anime events, fan community pages.

Do not use it when:
- The brand needs a real human face.
- The tone is formal, medical or legal.
- The page needs a dense, data-heavy layout.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in VTuber Avatar, you MUST:

1. Place the avatar at 40% to 55% of the frame height, centred or at one third of the width.
2. Track blinks, mouth shapes and head tilt at 30 fps or more, with a lag under 100ms.
3. Draw the avatar with flat colour, a 3px dark outline and 2 to 3 steps of cel shading.
4. Frame the scene with rounded panels of 24px radius and a 4px white edge.
5. Use a pastel gradient ground (for example #FFD6EC to #D6E4FF at 160°).
6. Add sparkle marks of 12px to 24px and soft stars at 3 to 6 points in the frame.
7. Show chat comments as speech bubbles of 16px radius with a 14px text size.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Photographic human faces.
- **NEVER:** Dark, hard techno panels.
- **NEVER:** Realistic 3D with no outline.
- **NEVER:** Gritty textures and film grain.
- **NEVER:** Dense data bars.
- **NEVER:** Sharp, square corners.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 1920x1080 frame with a free layout on a 24px grid: the avatar at one third, a bubble chat panel on the right and a name plate at the lower-left.
- **Whitespace ratio:** 20% to 30% of the frame is soft empty ground; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** The avatar sits at one third of the width; the name plate aligns bottom-left; chat bubbles stack at the right edge.
- **Container geometry:** Rounded panels of 24px radius, circle masks for portraits and pill buttons of 999px.

## Typography

- **Classifications:** rounded sans · cute display · japanese gothic
- **Tracking:** Display takes +0.02em; body stays at 0.01em.
- **Leading:** Display 1.2; body 1.6.
- **Hierarchy rules:** Use two weights: medium (500) and extra bold (800). · Use sizes 14, 20, 32 and 56px. · Set the character name in 32px with a 3px white outline. · Set chat text at 14px on a white bubble.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| M PLUS Rounded 1c | Nunito | A rounded sans that also covers Japanese text. |
| Fredoka | Quicksand | A soft, round display face for the name plate. |
| Mochiy Pop One | Zen Maru Gothic | A pop display face with a round Japanese text face. |

## Colour & lighting

- **Palette structure:** Pastel pink, sky blue and lavender with a deep plum text colour and a gold sparkle.
- **Contrast rules:** Plum text on the lavender ground holds at least 12:1; pink and blue carry panels and edges, not long text.
- **Surface treatment:** Soft 2-stop pastel gradients with a 2% sparkle layer; flat colour on avatars.
- **Light and shadow:** Flat cel light with one soft rim in white; a glow of 12px on stars; a 16px soft shadow under panels at 15% plum.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cloud Lavender | `#F4EEFF` | background |
| Bubble White | `#FFFFFF` | surface |
| Plum Ink | `#2E1E4A` | text |
| Sakura Pink | `#FF8FC7` | primary |
| Sky Blue | `#7CC4FF` | accent |
| Star Gold | `#FFD65C` | highlight |

## Materiality & texture

- **Surface simulation:** A 2D drawing in cel colour with a thin outline, as in an anime frame, placed in a bright digital room.
- **Border rules:** A 4px white edge on panels and a 3px plum outline on the avatar.
- **Blur and elevation:** Soft 16px shadows under panels; the ground may blur at 12px; no hard shadow.

## Ornamentation & iconography

- **Iconography:** Solid, rounded icons at 24px: heart, star, mic and sparkle; round terminals.
- **Illustration:** A drawn avatar with eyes, hair and an outfit, simple mascots, stars and ribbons in flat colour.
- **Decorative elements:** avatar · sparkle mark · speech bubble · name plate · ribbon

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The avatar blinks every 3s to 5s and sways by 2° over 2s; panels bounce in over 400ms with a small overshoot; sparkles pulse over 1.2s.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover lifts a panel by 4px and adds a pink glow of 12px; active state squashes it to 96%.

## Code & token primer

Set `data-style="vtuber-avatar"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="vtuber-avatar"] {
  --color-bg: #F4EEFF;
  --color-surface: #FFFFFF;
  --color-text: #2E1E4A;
  --color-muted: #5E4B85;
  --color-primary: #FF8FC7;
  --color-accent: #7CC4FF;
  --color-border: #FFFFFF;
  --font-sans: "Nunito", "M PLUS Rounded 1c", sans-serif;
  --font-display: "M PLUS Rounded 1c", "Fredoka", sans-serif;
  --border-radius: 24px;
  --border-width: 4px;
  --shadow-elevation: 0 16px 32px rgba(46,30,74,0.15);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 400ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #2E1E4A;
  --color-on-surface: #2E1E4A;
  --color-on-primary: #2E1E4A;
  --color-on-accent: #2E1E4A;
  --color-muted-on-bg: #5E4B85;
  --color-muted-on-surface: #5E4B85;
  --color-link: #2E1E4A;
  --color-link-on-surface: #2E1E4A;
  --display-weight: 800;
  --subhead-weight: 500;
  --body-weight: 500;
  --strong-weight: 800;
  --label-weight: 500;
  --display-tracking: 0.02em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 82% 30%, rgba(255,255,255,.7) 0 1.4vmin, transparent 1.6vmin),
    radial-gradient(circle at 86% 34%, transparent 0 7vmin, rgba(255,255,255,.75) 7vmin 7.5vmin, rgba(255,255,255,.15) 7.6vmin 8vmin, transparent 8.2vmin),
    radial-gradient(circle at 66% 18%, transparent 0 3.6vmin, rgba(255,255,255,.7) 3.6vmin 4vmin, transparent 4.2vmin),
    radial-gradient(circle at 95% 62%, transparent 0 4.6vmin, rgba(255,255,255,.7) 4.6vmin 5vmin, transparent 5.2vmin),
    radial-gradient(130% 55% at 70% 130%, var(--color-accent) 0 55%, transparent 55.4%),
    radial-gradient(90% 45% at 10% 125%, color-mix(in oklab, var(--color-accent) 70%, transparent) 0 55%, transparent 55.4%),
    linear-gradient(to bottom, rgba(255,255,255,.45), transparent 60%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F4EEFF] text-[#2E1E4A] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-extrabold leading-[1.2] tracking-[0.02em] [text-shadow:0_0_0_#fff,_3px_3px_0_#FF8FC7]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-3xl border-4 border-white bg-[#FFFFFF] shadow-[0_16px_32px_rgba(46,30,74,0.15)]` |
| button | `rounded-full border-4 border-white bg-[#FF8FC7] px-8 py-3 text-sm font-extrabold text-[#2E1E4A] transition-transform duration-[400ms] hover:-translate-y-1` |
| label | `text-xs font-medium tracking-[0.04em] text-[#5E4B85]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Bold) by 480 Design, licence CC BY 4.0. Reason: A soft, solid family with round terminals suits the cute panels and the sparkle marks. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 800, tracking 0.02em, leading 1.2, case: none.
- **Weights:** display 800, subhead 500, body 500, bold in text 800, labels and buttons 500. The style uses 2 weights (500, 800) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, center aligned, regular density, accent tilt 2°.
- **Ground:** bubbles. The ground is a pastel sky of soft bubbles, the room of a virtual character. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Face-tracking avatar (technology)

A camera tracks the face of a person and moves a drawn or 3D character at the same time, so the character acts as a live host. Origin: internet, Japan, 2016.

- Track blinks, mouth shape and head tilt at 30 fps or more.
- Map each value to a layer of the avatar rig.
- Keep the lag under 100ms.
- Draw the character with flat colour and a clear outline.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF8FC7 | #FF8FC7, #7CC4FF, #2E1E4A | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7CC4FF | #7CC4FF, #FF8FC7 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 16–999 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more techno**: move toward [`livestream-overlay`](../livestream-overlay/SKILL.md) (Livestream Overlay). Swap the pastel panels for dark cut-corner slots with neon edges and a LIVE tag.
- If the user asks for **more real**: move toward [`lets-play-facecam`](../lets-play-facecam/SKILL.md) (Let's Play Facecam). Replace the avatar with a webcam window of 20% width and add outlined captions.
- If the user asks for **softer**: move toward [`blob-world`](../blob-world/SKILL.md) (Blob World). Round all shapes to blobs, remove the outlines and use flat pastel fills.

- **Came from (go here for a more orthodox version):** [`livestream-overlay`](../livestream-overlay/SKILL.md)
- **Mixes well with:** [`blob-world`](../blob-world/SKILL.md)
- **Nearest by vector profile:** [`seapunk`](../seapunk/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md), [`blob-world`](../blob-world/SKILL.md)

## Emotional target

The viewer feels warm and playful, and accepts the character as a friend.

**Keywords:** cute, playful, safe, bright, virtual · **Brand archetypes:** innocent, jester

## Sources

- [Wikipedia: Virtual YouTuber](https://en.wikipedia.org/wiki/Virtual_YouTuber)
- [Wikipedia: Kizuna AI](https://en.wikipedia.org/wiki/Kizuna_AI)

---

Generated from [`data/internet/styles/vtuber-avatar.json`](../../data/internet/styles/vtuber-avatar.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
