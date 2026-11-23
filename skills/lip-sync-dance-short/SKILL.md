---
name: lip-sync-dance-short
description: "Apply the Lip-Sync Dance Short style (2016–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: lip sync, lipsync, dance video, tiktok dance, musical.ly, dance challenge."
domain: internet
era: feed-mobile
triggers:
  - "lip sync"
  - "lipsync"
  - "dance video"
  - "tiktok dance"
  - "musical.ly"
  - "dance challenge"
  - "trend dance"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Lip-Sync Dance Short

> One person, one song hook and one move: the clip works when the body and the beat are the only content.

A vertical clip of one person who mimes a song or does a short dance in front of a phone, with a rotating record disc and a lyric line. It grew from the Musical.ly app in 2014 and moved to TikTok in 2016 and 2018.

**Period:** 2016–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Musical.ly clip, TikTok dance, Lip-sync video

## When to load this skill

Load it when the user asks for: "lip sync", "lipsync", "dance video", "tiktok dance", "musical.ly", "dance challenge", "trend dance".

Good for: music promo clips, dance challenge pages, youth app UI mock-ups, event teasers.

Do not use it when:
- The audience needs a calm or formal tone.
- The page has dense text.
- The format is landscape.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Lip-Sync Dance Short, you MUST:

1. Shoot at 1080 x 1920 px with one subject, centred, at 60% to 75% of the frame height.
2. Cut the clip to 15 s, with the loop point on a beat so the end meets the start.
3. Place a spinning record disc 48 px wide at the bottom right with a 4 s turn.
4. Set the lyric line in 44 px bold white caps with a 3 px black outline, at 70% of the frame height.
5. Add a pink-to-cyan accent bar of 6 px under the caption and keep it at 100% width.
6. Light the face with a ring light: a round catch-light of 20 px in each eye.
7. Flash a 4-frame colour pulse (#FE2C55 then #25F4EE) on each strong beat.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Long text blocks over the dancer.
- **NEVER:** Wide 16:9 framing with black bars.
- **NEVER:** Slow, quiet pacing with no beat.
- **NEVER:** Horizontal logos in the top corners.
- **NEVER:** Dark moody grading that hides the face.
- **NEVER:** A tripod shot with no movement of the body.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single full-bleed vertical frame; one safe zone of 960 x 1340 px; a right rail of 5 icons at 96 px pitch.
- **Whitespace ratio:** The subject takes 60% to 75% of the frame; text and icons take under 15%.
- **Alignment rules:** The subject sits centred; the caption sits centred; the icon rail aligns to the right edge with a 24 px margin.
- **Container geometry:** Round capture frame with 0 radius on the video; circular record disc and 48 px circle buttons.

## Typography

- **Classifications:** bold grotesque sans · rounded sans
- **Tracking:** Display 0.01em; body 0em.
- **Leading:** Display 1.1; body 1.4.
- **Hierarchy rules:**
  - Use bold (700) for lyric lines and regular (400) for the username.
  - Set lyric lines at 44 px and the username at 28 px.
  - Show at most 2 lines of 22 characters in a caption.
  - Put a 3 px black outline around white text.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Poppins | Inter | A geometric sans in bold weights for lyric lines, with a neutral body face. |
| Montserrat | Nunito Sans | Wide caps for the lyric line. |

## Colour & lighting

- **Palette structure:** Near-black frame with white text, one hot pink and one cyan edge.
- **Contrast rules:** White text on ink gives 18:1; text over video always has a 3 px outline.
- **Surface treatment:** Flat colour for the UI; the video fills the ground.
- **Light and shadow:** Hard front light from a ring light; a split red and cyan edge glow on the subject at 2 px to 4 px offset.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink | `#121212` | background |
| Pulse Pink | `#FE2C55` | primary |
| Pulse Cyan | `#25F4EE` | accent |
| White | `#FFFFFF` | text |
| Smoke | `#B3B3B8` | muted text |
| Panel | `#1F1F23` | surface |

## Materiality & texture

- **Surface simulation:** A phone screen: glossy video with flat UI overlays.
- **Border rules:** No borders on video; 2 px white ring on the record disc.
- **Blur and elevation:** No blur on the video; a 40% black gradient of 240 px at the bottom helps the caption.

## Ornamentation & iconography

- **Iconography:** Solid 28 px icons for like, comment, share and sound, with a count under each.
- **Illustration:** A spinning vinyl disc with a small cover picture; floating music notes.
- **Decorative elements:** spinning record disc · lyric caption · right icon rail · music note · progress bar

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Loop of 15 s; zoom pulses of 105% on each strong beat; the record disc turns 360° in 4 s.
- **Easing:** cubic-bezier(0.2, 0.8, 0.2, 1)
- **Duration (ms):** 150
- **Hover and active:** A tap on the heart scales it to 130% in 150 ms and fills it pink.

## Code & token primer

Set `data-style="lip-sync-dance-short"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="lip-sync-dance-short"] {
  --color-bg: #121212;
  --color-surface: #1F1F23;
  --color-text: #FFFFFF;
  --color-muted: #B3B3B8;
  --color-primary: #FE2C55;
  --color-accent: #25F4EE;
  --color-border: #25F4EE;
  --font-sans: "Inter", "Nunito Sans", sans-serif;
  --font-display: "Poppins", "Montserrat", sans-serif;
  --border-radius: 12px;
  --border-width: 2px;
  --shadow-elevation: 2px 2px 0 #25F4EE;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 150ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #121212;
  --color-on-accent: #121212;
  --color-muted-on-bg: #B3B3B8;
  --color-muted-on-surface: #B3B3B8;
  --color-link: #25F4EE;
  --color-link-on-surface: #25F4EE;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(100deg, var(--color-bg) 30%, transparent 56%),
    radial-gradient(circle at 66% 22%, var(--color-primary) 0 3.4vmin, transparent calc(3.4vmin + 1px)),
    radial-gradient(circle at 92% 64%, transparent 0 4vmin, var(--color-accent) 4vmin 5.6vmin, transparent 5.8vmin),
    linear-gradient(to top right, var(--color-primary) 50%, transparent 51%) 80% 12% / 7vmin 7vmin no-repeat,
    repeating-linear-gradient(45deg, var(--color-on-bg) 0 3px, transparent 3px 12px) 86% 88% / 14vmin 5vmin no-repeat,
    radial-gradient(circle at 56% 78%, var(--color-accent) 0 1.8vmin, transparent calc(1.8vmin + 1px)),
    linear-gradient(var(--color-primary), var(--color-primary)) 97% 36% / 3vmin 12vmin no-repeat,
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 22%, transparent) 1.6px, transparent 2px) 0 0 / 26px 26px,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#121212] text-white font-sans antialiased` |
| heading | `text-4xl font-bold uppercase leading-[1.1] [text-shadow:0_0_0_#000,2px_2px_0_#000] text-white` |
| body | `text-base leading-[1.4] text-[#B3B3B8]` |
| section | `rounded-xl bg-[#1F1F23] p-4` |
| button | `rounded-full bg-[#FE2C55] px-6 py-3 text-sm font-bold text-white hover:scale-105 transition-transform duration-150` |
| label | `text-xs uppercase tracking-wide text-[#25F4EE]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A filled, rounded icon family that matches the heart and share icons of a short-video rail. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.01em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** confetti. The ground is a dark frame with confetti-like colour flecks that echo the beat pulses of the dance clips. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Jump cut (montage)

A cut inside one continuous shot that removes time and leaves the jump in view. Origin: film & video, Paris, 1960.

- Remove 0.3 to 2 seconds inside one shot and keep the framing within 10% of the frame width, so that the jump shows.
- In a talk to camera, cut on the word and not on the action: one cut every 2 to 4 seconds.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Musical.ly** (platform, web, 2014–2018), launched the style. A short-video app in which users mime songs in clips of 15 seconds. ByteDance bought it in 2017 and merged it into TikTok in 2018.
- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FE2C55 | #FE2C55, #25F4EE, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #25F4EE | #25F4EE, #FE2C55 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 0–16 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`grwm-short`](../grwm-short/SKILL.md) (Get Ready With Me). Drop the beat pulse and the colour edge; talk to the camera in a soft room.
- If the user asks for **more cuts**: move toward [`velocity-edit`](../velocity-edit/SKILL.md) (Velocity Edit). Cut the clip to 6 or more shots and add speed ramps on the beat.
- If the user asks for **add a partner**: move toward [`duet-split-screen`](../duet-split-screen/SKILL.md) (Duet Split-Screen). Split the frame 50/50 and put the second performer on the right.

- **Led to (go here for a newer version):** [`duet-split-screen`](../duet-split-screen/SKILL.md), [`velocity-edit`](../velocity-edit/SKILL.md)
- **Was rejected by:** [`grwm-short`](../grwm-short/SKILL.md)
- **Kin in another domain:** [`music-video`](../music-video/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`future-funk`](../future-funk/SKILL.md), [`glitch-gif`](../glitch-gif/SKILL.md), [`lets-play-facecam`](../lets-play-facecam/SKILL.md)

## Emotional target

The viewer feels the beat and wants to copy the move.

**Keywords:** playful, rhythmic, catchy, bright, imitable · **Brand archetypes:** jester, lover

## Sources

- [Wikipedia: TikTok](https://en.wikipedia.org/wiki/TikTok)
- [Wikipedia: Musical.ly](https://en.wikipedia.org/wiki/Musical.ly)
- [Wikipedia: Lip sync](https://en.wikipedia.org/wiki/Lip_sync)

---

Generated from [`data/internet/styles/lip-sync-dance-short.json`](../../data/internet/styles/lip-sync-dance-short.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
