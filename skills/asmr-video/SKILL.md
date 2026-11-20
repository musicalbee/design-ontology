---
name: asmr-video
description: "Apply the ASMR Video style (2010–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: asmr, whisper, tingles, sleep video, relaxing video, tapping sounds."
domain: internet
era: web-2-social
triggers:
  - "asmr"
  - "whisper"
  - "tingles"
  - "sleep video"
  - "relaxing video"
  - "tapping sounds"
  - "soft spoken"
vector_profile:
  ornamentation: 1
  dimensionality: 3
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 1
---

# ASMR Video

> Slow the image to match the sound: a calm frame, a soft light and a close mic make the viewer relax.

A soft, close picture with a mic near the subject. Slow hands tap, brush and whisper. The look is dim, warm and quiet, with almost no text, because sound carries the work.

**Period:** 2010–now · **Era:** Web 2.0 and the social web · **Domain:** Internet · **Also called:** ASMR, Whisper video, Tingles video

## When to load this skill

Load it when the user asks for: "asmr", "whisper", "tingles", "sleep video", "relaxing video", "tapping sounds", "soft spoken".

Good for: sleep and wellness apps, spa and tea brands, calm product demos, audio brand pages, meditation video thumbnails.

Do not use it when:
- The page needs speed, urgency or sales pressure.
- The audience watches on a mute feed.
- The content has no close, tactile subject.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in ASMR Video, you MUST:

1. Light the scene at 2700K to 3200K with one soft lamp and keep highlights under 85% white.
2. Place the subject within 30cm of the lens and keep the background out of focus at f/2 or wider.
3. Move at half speed: one action in each 4s to 8s, with no sudden cuts.
4. Hold each shot for at least 8s and cross-fade at 1s to 2s when a cut is needed.
5. Use a muted grade with lifted blacks (#1A1614) and no pure white.
6. Keep text to a title of 24px at 70% opacity for the first 3s; add no captions.
7. Show both stereo sides with a left and a right object, 1m apart, so the viewer sees the sound move.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Loud, saturated colours.
- **NEVER:** Fast cuts under 3s.
- **NEVER:** Large on-screen titles and arrows.
- **NEVER:** Hard, cold light.
- **NEVER:** Sharp zooms and shaking.
- **NEVER:** Busy backgrounds with many small details.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 16:9 frame with a centre stage of 50% width and a wide soft margin; objects sit left and right at one third of the width.
- **Whitespace ratio:** 50% to 65% of the frame is soft, dark and empty; the spacing scale is 12, 24, 48 and 96px.
- **Alignment rules:** The subject stays centred and slightly below the middle; the title aligns bottom-centre at 48px from the edge.
- **Container geometry:** Large round shapes: 24px radius cards, circle masks and an oval vignette; no hard rule lines.

## Typography

- **Classifications:** humanist sans · soft serif · rounded
- **Tracking:** Display takes +0.04em; body stays at 0.01em.
- **Leading:** Display 1.3; body 1.8.
- **Hierarchy rules:** Use two weights: light (300) and regular (400). · Use sizes 16, 20, 28 and 40px. · Set titles in lower case at 70% opacity. · Keep one type size in each frame.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Quicksand | Nunito | A soft, round pair that stays quiet on screen. |
| Fraunces | Lora | A warm serif pair for a title with a text face. |
| Comfortaa | Nunito Sans | A round display face with a calm text face. |

## Colour & lighting

- **Palette structure:** Warm dark browns and rose with a candle amber and a pale cream; low saturation on all colours.
- **Contrast rules:** Cream text on the dim room holds at least 12:1; rose and amber carry small marks and rules, not long text.
- **Surface treatment:** Soft vignette gradients from the centre; a 3% film grain; no hard edges.
- **Light and shadow:** One warm lamp from the front-left; shadows are long and soft; glow on highlights at 12px blur.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Dim Room | `#1A1614` | background |
| Velvet Brown | `#2A2320` | surface |
| Cream Text | `#F3E9DC` | text |
| Rose Quartz | `#D9A5A0` | primary |
| Candle Amber | `#E8B76A` | accent |
| Mist Grey | `#A89F97` | muted |

## Materiality & texture

- **Surface simulation:** Soft fabric, wood, glass and skin in shallow focus, with a warm tone and a little grain.
- **Border rules:** No visible borders; a 1px line at 15% opacity at most.
- **Blur and elevation:** Background blur of 24px to 40px; cards float with a 32px soft shadow at 25% black.

## Ornamentation & iconography

- **Iconography:** Outline icons at 24px with a 1.5px stroke and round terminals, used only for play and volume.
- **Illustration:** Real objects in shallow focus: brushes, wooden tapping blocks, a microphone ball and a candle.
- **Decorative elements:** foam windscreen mic · soft vignette · candle glow · brush · slow cross-fade

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Every move takes 800ms to 1.6s; fades take 1s to 2s; there is no bounce and no sudden cut.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 800
- **Hover and active:** Hover raises a card by 2px and brightens it by 6% over 600ms; active state dims it by 6%.

## Code & token primer

Set `data-style="asmr-video"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="asmr-video"] {
  --color-bg: #1A1614;
  --color-surface: #2A2320;
  --color-text: #F3E9DC;
  --color-muted: #B5ABA2;
  --color-primary: #D9A5A0;
  --color-accent: #E8B76A;
  --color-border: #4A3F39;
  --font-sans: "Nunito", "Lora", sans-serif;
  --font-display: "Quicksand", "Fraunces", sans-serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 24px 48px rgba(0,0,0,0.35);
  --backdrop-filter: none;
  --space-unit: 12px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 800ms;
  --type-ratio: 1.25;
  --size-small: 14.4px;
  --size-h3: 28.13px;
  --size-h2: 35.16px;
  --size-h1: 43.95px;
  --color-on-bg: #F3E9DC;
  --color-on-surface: #F3E9DC;
  --color-on-primary: #1A1614;
  --color-on-accent: #1A1614;
  --color-muted-on-bg: #B5ABA2;
  --color-muted-on-surface: #B5ABA2;
  --color-link: #E8B76A;
  --color-link-on-surface: #E8B76A;
  --display-weight: 300;
  --subhead-weight: 300;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.3;
  --display-case: lowercase;
  --body-leading: 1.8;
  --body-size: 18px;
  --icon-stroke: 1.5;
  --ground: radial-gradient(circle at 80% 46%, var(--color-bg) 0 20vmin, transparent calc(20vmin + 1px)),
    radial-gradient(circle at calc(80% + 3vmin) calc(46% + 3vmin), color-mix(in oklab, var(--color-on-bg) 16%, transparent) 0 18vmin, transparent 27vmin),
    radial-gradient(circle at calc(80% - 3vmin) calc(46% - 3vmin), rgba(255,255,255,.85) 0 18vmin, transparent 27vmin),
    radial-gradient(35% 40% at 96% 92%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 60% 4%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#1A1614] text-[#F3E9DC] font-sans antialiased px-4 md:px-12` |
| heading | `text-3xl md:text-5xl font-light lowercase leading-[1.3] tracking-[0.04em] text-center` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-3xl border border-[#4A3F39] bg-[#2A2320] shadow-[0_24px_48px_rgba(0,0,0,0.35)]` |
| button | `rounded-full bg-[#D9A5A0] px-8 py-3 text-sm font-normal text-[#1A1614] transition-all duration-[800ms] hover:brightness-110` |
| label | `text-xs lowercase tracking-[0.1em] text-[#E8B76A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A thin outline family with round terminals matches the soft, quiet frame. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.04em, leading 1.3, case: lowercase.
- **Weights:** display 300, subhead 300, body 400, bold in text 700, labels and buttons 400. The style uses 3 weights (300, 400, 700) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 18px, leading 1.8.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. The ground is a dim room lit by one warm lamp, and the vignette keeps the eye on the subject. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Binaural recording (technology)

A recording with two mics set at ear distance, so that a sound seems to move around the head of the listener. Origin: film & video, Paris, 1881.

- Set two mics 17cm apart, or use a head with an ear mic on each side.
- Keep the source within 30cm for a close sound.
- Move an object from left to right slowly.
- Give the listener a pair of headphones.

### Overhead hands shot (process)

A fixed camera above a table that shows only a pair of hands and an object, so the viewer sees each step of an action. Origin: internet, YouTube, c. 2006.

- Fix the camera at 90° above a plain table.
- Frame the object at 40% to 60% of the picture height.
- Show hands only; keep the face out of the frame.
- Hold each step for 4 to 12 seconds.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #D9A5A0 | #D9A5A0, #E8B76A, #F3E9DC | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E8B76A | #E8B76A, #D9A5A0 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 16–32 px | --border-radius |
| Grid step (`grid_step`) | 12px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more energy**: move toward [`lets-play-facecam`](../lets-play-facecam/SKILL.md) (Let's Play Facecam). Raise saturation, add outlined captions and cut every 1.5s.
- If the user asks for **more clinical**: move toward [`unboxing-video`](../unboxing-video/SKILL.md) (Unboxing Video). Light the scene at 5600K, use a pale table and add part labels.
- If the user asks for **brighter**: move toward [`vtuber-avatar`](../vtuber-avatar/SKILL.md) (VTuber Avatar). Use a pastel ground, a soft avatar at the centre and a light mic icon.

- **Came from (go here for a more orthodox version):** [`unboxing-video`](../unboxing-video/SKILL.md)
- **Nearest by vector profile:** [`neumorphism`](../neumorphism/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md), [`label-meme`](../label-meme/SKILL.md)

## Emotional target

The viewer feels calm, sleepy and safe, with a light physical tingle.

**Keywords:** calm, soft, intimate, sleepy, warm · **Brand archetypes:** caregiver, innocent

## Sources

- [Wikipedia: Autonomous sensory meridian response](https://en.wikipedia.org/wiki/Autonomous_sensory_meridian_response)
- [Know Your Meme: ASMR](https://knowyourmeme.com/memes/asmr)

---

Generated from [`data/internet/styles/asmr-video.json`](../../data/internet/styles/asmr-video.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
