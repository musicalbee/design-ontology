---
name: livestream-overlay
description: "Apply the Livestream Overlay style (2011–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: livestream, stream overlay, twitch, chat panel, alert box, streamer."
domain: internet
era: touchscreen
triggers:
  - "livestream"
  - "stream overlay"
  - "twitch"
  - "chat panel"
  - "alert box"
  - "streamer"
  - "go live"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Livestream Overlay

> A live show needs a control room on screen: the frame holds every live signal in fixed slots, so the viewer always knows where to look.

A frame around a live game or camera. It has a facecam slot, a chat panel, an alert box and a name bar. Neon edges and animated panels show that the stream is live.

**Period:** 2011–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Stream overlay, Twitch layout, Streamer scene

## When to load this skill

Load it when the user asks for: "livestream", "stream overlay", "twitch", "chat panel", "alert box", "streamer", "go live".

Good for: streamer dashboards, event and tournament pages, live shopping pages, webinar frames, creator landing pages.

Do not use it when:
- The content is not live or social.
- The audience needs a calm reading page.
- The frame has no room for fixed slots.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Livestream Overlay, you MUST:

1. Divide the 1920x1080 frame into fixed slots: game 1440x810, facecam 360x270, chat 360x540 and a 1920x80 bar.
2. Frame each slot with a 2px line in the accent colour and cut corners at 45° for 12px.
3. Put a LIVE tag with a pulsing dot of 12px in the top-left corner at all times.
4. Set alert boxes at 480x120 with a 300ms slide-in and a 5s hold.
5. Show the latest follower, donation and subscriber in small mono labels of 14px to 18px.
6. Use a dark ground (#0E0E12) with one neon accent (#9146FF or #00F0A0) and a second colour for alerts only.
7. Keep the game slot free of overlays except the alert box and the LIVE tag.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Soft, quiet layouts with no slots.
- **NEVER:** Full-bleed footage with no frame.
- **NEVER:** Pastel palettes.
- **NEVER:** Decorative scripts and serif faces.
- **NEVER:** Static panels with no live signal.
- **NEVER:** Alert boxes that cover the game centre.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 1920x1080 frame split into slots on a 24px grid: game, facecam, chat and a name bar; gutters are 12px.
- **Whitespace ratio:** Under 10% of the frame is empty; slots fill the frame and gaps stay at 12px.
- **Alignment rules:** Slots align to the grid; the facecam sits at the frame bottom-left; the chat panel aligns to the right edge.
- **Container geometry:** Panels with 45° cut corners of 12px, 2px neon edges and corner ticks of 8px.

## Typography

- **Classifications:** techno display · monospace · condensed sans
- **Tracking:** Display takes +0.08em in capitals; labels take +0.12em.
- **Leading:** Display 1.1; body 1.4.
- **Hierarchy rules:** Use two weights: medium (500) and bold (700). · Use sizes 14, 18, 32 and 48px. · Set the channel name in capitals at 32px in the name bar. · Set stat labels in mono at 14px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rajdhani | Roboto Mono | A squared, techno display face with a mono text face for stats. |
| Oxanium | JetBrains Mono | A sharp display face for the name bar with a mono face for chat. |
| Barlow Condensed | Inter | A condensed display face that fits long names in a small bar. |

## Colour & lighting

- **Palette structure:** Near-black with a purple or green neon accent and a red live signal.
- **Contrast rules:** Signal white on control black holds at least 17:1; neon colours carry edges, tags and alerts, not body text.
- **Surface treatment:** Flat dark panels with a 4% scanline layer and a thin neon edge.
- **Light and shadow:** A neon glow of 6px to 12px around active panels; no cast shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Control Black | `#0E0E12` | background |
| Panel Slate | `#1A1A24` | surface |
| Signal White | `#F4F4FA` | text |
| Stream Violet | `#9146FF` | primary |
| Alert Mint | `#00F0A0` | accent |
| Live Red | `#FF3B4E` | highlight |

## Materiality & texture

- **Surface simulation:** A screen-made control panel: flat dark glass with light edges, no real material.
- **Border rules:** A 2px neon line at 100% on active panels and at 40% on idle panels; 45° cut corners.
- **Blur and elevation:** Glow of 6px to 12px on live parts; the chat panel uses a 12px backdrop blur at 60% black.

## Ornamentation & iconography

- **Iconography:** Solid icons at 20px for follow, gift and subscribe; square terminals and a 2px edge.
- **Illustration:** Animated waveforms, rotating frames, particle bursts for alerts; no figurative illustration.
- **Decorative elements:** LIVE tag · cut-corner panel · alert box · chat panel · corner ticks

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Panels slide in over 300ms; the LIVE dot pulses at 1.2s per loop; alerts enter from the right, hold for 5s and leave over 300ms.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover raises the neon glow from 6px to 12px; active state fills the edge colour for 120ms.

## Code & token primer

Set `data-style="livestream-overlay"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="livestream-overlay"] {
  --color-bg: #0E0E12;
  --color-surface: #1A1A24;
  --color-text: #F4F4FA;
  --color-muted: #A9A9BD;
  --color-primary: #9146FF;
  --color-accent: #00F0A0;
  --color-border: #9146FF;
  --font-sans: "Roboto Mono", "JetBrains Mono", monospace;
  --font-display: "Rajdhani", "Oxanium", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 0 0 12px rgba(145,70,255,0.6);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 300ms;
  --type-ratio: 1.25;
  --size-small: 11.2px;
  --size-h3: 21.88px;
  --size-h2: 27.34px;
  --size-h1: 34.18px;
  --color-on-bg: #F4F4FA;
  --color-on-surface: #F4F4FA;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #0E0E12;
  --color-muted-on-bg: #A9A9BD;
  --color-muted-on-surface: #A9A9BD;
  --color-link: #00F0A0;
  --color-link-on-surface: #00F0A0;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0.08em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 14px;
  --icon-stroke: 2;
  --ground: repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 7%, transparent) 0 1px, transparent 1px 3px),
    radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,.55)),
    radial-gradient(50% 55% at 72% 40%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    radial-gradient(35% 40% at 20% 85%, color-mix(in oklab, var(--color-accent) 10%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0E0E12] text-[#F4F4FA] font-mono antialiased px-4 md:px-12` |
| heading | `text-3xl md:text-5xl font-bold uppercase tracking-[0.08em] leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-none border-2 border-[#9146FF] bg-[#1A1A24] shadow-[0_0_12px_rgba(145,70,255,0.6)] [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]` |
| button | `rounded-none border-2 border-[#9146FF] bg-[#9146FF] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0E0E12] transition-shadow duration-300 hover:shadow-[0_0_12px_#00F0A0]` |
| label | `text-xs uppercase tracking-[0.12em] text-[#00F0A0]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, square caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: A solid family with square terminals fits the cut-corner panels and the small alert marks. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.08em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 14px, leading 1.4.
- **Page:** hero split, left aligned, compact density, accent tilt 0°.
- **Ground:** scanlines. The ground is a dark control screen with scanlines, the room where a live show is run. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Picture-in-picture facecam (montage)

A small live window of the player's face placed above the main picture, so the viewer sees the action and the reaction together. Origin: internet, YouTube, c. 2010.

- Set the face window at 18% to 25% of the frame width.
- Place it at a corner with a 24px margin.
- Add a 4px border and a 12px radius.
- Keep the window clear of the game HUD.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Twitch** (platform, web, 2011–now), launched the style. A live video site, first for games. Its stream layouts, with a face window, chat and alert boxes, set the overlay look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #9146FF | #9146FF, #00F0A0, #FF3B4E | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #00F0A0 | #00F0A0, #9146FF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`video-essay`](../video-essay/SKILL.md) (Video Essay). Remove the slots, chat and alerts; keep one clean frame with a 24px lower-third.
- If the user asks for **friendlier**: move toward [`vtuber-avatar`](../vtuber-avatar/SKILL.md) (VTuber Avatar). Replace the facecam with an avatar on a pastel panel and round the corners to 24px.
- If the user asks for **more neon**: move toward [`cybercore-web`](../cybercore-web/SKILL.md) (Cybercore Web). Add HUD frames, glitch hover and acid-green data labels.

- **Came from (go here for a more orthodox version):** [`lets-play-facecam`](../lets-play-facecam/SKILL.md)
- **Led to (go here for a newer version):** [`vtuber-avatar`](../vtuber-avatar/SKILL.md)
- **Mixes well with:** [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Nearest by vector profile:** [`japanese-dense-web`](../japanese-dense-web/SKILL.md), [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md)

## Emotional target

The viewer feels that something is happening now, with a crowd of others.

**Keywords:** live, busy, neon, social, technical · **Brand archetypes:** explorer, outlaw

## Sources

- [Wikipedia: Twitch (service)](https://en.wikipedia.org/wiki/Twitch_(service))
- [Wikipedia: Live streaming](https://en.wikipedia.org/wiki/Live_streaming)

---

Generated from [`data/internet/styles/livestream-overlay.json`](../../data/internet/styles/livestream-overlay.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
