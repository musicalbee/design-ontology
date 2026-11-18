---
name: cybercore-web
description: "Apply the Cybercore Web style (2020–now) when generating UI or graphic layouts. Load when the user asks for: cybercore, cyber, hud, glitch, techwear, acid green."
domain: design
era: contemporary-spatial
triggers:
  - "cybercore"
  - "cyber"
  - "hud"
  - "glitch"
  - "techwear"
  - "acid green"
  - "sci-fi interface"
  - "cyber y2k"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Cybercore Web

> The page is a machine interface: sharp, labelled, cold and dense with data.

Black grounds, acid-green or cyan accents, chrome, angular cuts, HUD frames, small caps data labels and glitch. It mixes 1990s cyber fiction with techwear, and it feels like a machine interface.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Cybercore, Cyber Y2K, Techwear web

## When to load this skill

Load it when the user asks for: "cybercore", "cyber", "hud", "glitch", "techwear", "acid green", "sci-fi interface", "cyber y2k".

Good for: game and esports sites, music and fashion drops, security and hardware products, event and festival pages, NFT and crypto-adjacent launches.

Do not use it when:
- The audience needs calm, plain reading.
- The brand is warm or family-friendly.
- The page must meet a strict accessibility audit with no motion.

## System directives

When generating UI or graphic layouts in Cybercore Web, you MUST:

1. Set the ground at #05070A and use 1 acid accent (#C6FF00 or #00F0FF) on no more than 10% of the surface.
2. Cut corners at 45° with a clip-path of 8px to 16px on cards and buttons; set radius to 0px elsewhere.
3. Frame panels with a 1px line in the accent at 40% and add 4 corner ticks of 8px to 12px.
4. Set data labels at 10px to 12px in upper case with tracking of +0.12em to +0.2em in a mono or a wide display face.
5. Add a glitch on hover: offset the text layers by 2px to 4px in cyan and magenta for 120ms to 200ms.
6. Overlay scanlines of 2px at 6% to 10% opacity and a grain of 3% to 5%.
7. Add 3 or more HUD data items per screen: a code, a coordinate, a version number or a timer.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Soft pastel palettes.
- **NEVER:** Rounded corners above 4px.
- **NEVER:** Friendly illustration.
- **NEVER:** Large empty areas without any data label.
- **NEVER:** Warm photography with natural colour.
- **NEVER:** Serif body text.
- **NEVER:** Smooth drop shadows on cards.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A strict 12-column grid with 16px gutters; panels of unequal size are cut at corners; HUD labels sit on the edge of panels.
- **Whitespace ratio:** 15% to 25% of the surface is empty; the spacing scale is 4, 8, 16, 32 and 64px.
- **Alignment rules:** Flush left; data right-aligned in mono columns; headlines are wide and may bleed off the edge.
- **Container geometry:** Rectangles with 45° cuts of 8px to 16px; thin 1px frames; no radius.

## Typography

- **Classifications:** wide display sans serif · monospace
- **Tracking:** Display takes +0.02em; labels take +0.15em.
- **Leading:** Display 1.05; body 1.5.
- **Hierarchy rules:**
  - Use three weights: regular (400), semibold (600) and bold (700).
  - Use sizes 11, 14, 24 and 72px.
  - Set labels and nav in upper case.
  - Set numbers and codes in a mono face.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Orbitron | Share Tech Mono | A wide, angular display for headlines. |
| Rajdhani | Share Tech Mono | A squared grotesque with a technical voice. |
| Chakra Petch | JetBrains Mono | A cut-corner face that echoes the clipped panels. |

## Colour & lighting

- **Palette structure:** Near-black ground with one acid accent, chrome greys and an alert colour.
- **Contrast rules:** Chrome on void holds at least 12:1; the acid accent marks actions and one data value per panel.
- **Surface treatment:** Flat black with a scanline overlay and a grain; gradients only as a glow behind the hero object.
- **Light and shadow:** Light is emitted: glows of 8px to 24px blur in the accent at 30% to 50%.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Void | `#05070A` | background |
| Acid | `#C6FF00` | primary |
| Cyan | `#00F0FF` | accent |
| Chrome | `#C9D1D9` | text |
| Steel | `#8E949B` | secondary text |
| Alarm | `#FF2D6F` | alert |

## Materiality & texture

- **Surface simulation:** Anodised metal and glass screens in the dark.
- **Border rules:** 1px accent line at 40% with 4 corner ticks.
- **Blur and elevation:** Glow 8px to 24px in the accent; no soft shadow; clip-path cuts.

## Ornamentation & iconography

- **Iconography:** 1.5px square-cap outline icons in the accent or chrome; status dots and arrows built from lines.
- **Illustration:** Chrome 3D objects, wireframes, HUD rings and glitched photography.
- **Decorative elements:** HUD frame · corner tick · glitch text · scanline

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Snappy and mechanical: panels slide in 8px to 16px in 160ms; text scrambles for 300ms; glitch bursts last 120ms to 200ms.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 160
- **Hover and active:** Hover shifts the glitch layers 2px to 4px and fills the frame at 10%; active state inverts to the acid fill.

## Code & token primer

Set `data-style="cybercore-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="cybercore-web"] {
  --color-bg: #05070A;
  --color-surface: #0C1117;
  --color-text: #C9D1D9;
  --color-muted: #8E949B;
  --color-primary: #C6FF00;
  --color-accent: #00F0FF;
  --color-border: #2B3A2A;
  --font-sans: "Share Tech Mono", ui-monospace, monospace;
  --font-display: "Orbitron", "Rajdhani", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: 0 0 16px rgba(198,255,0,0.35);
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 160ms;
  --color-on-bg: #C9D1D9;
  --color-on-surface: #C9D1D9;
  --color-on-primary: #05070A;
  --color-on-accent: #05070A;
  --color-muted-on-bg: #8E949B;
  --color-muted-on-surface: #8E949B;
  --color-link: #00F0FF;
  --color-link-on-surface: #00F0FF;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0.02em;
  --display-leading: 1.05;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 14px;
  --icon-stroke: 1.5;
  --ground: repeating-linear-gradient(to bottom, transparent 0 1.6vmin, var(--color-bg) 1.6vmin 2.2vmin) 76% 46% / 34vmin 15vmin no-repeat,
    radial-gradient(circle at 50% 100%, var(--color-accent) 0 16vmin, transparent calc(16vmin + 1px)) 76% 46% / 34vmin 17vmin no-repeat,
    linear-gradient(to bottom, transparent 0 55%, color-mix(in oklab, var(--color-primary) 55%, transparent) 55% calc(55% + 2px), transparent calc(55% + 2px)),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 28%, transparent) 0 1px, transparent 1px 7vmin) 0 100% / 100% 45% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 28%, transparent) 0 1px, transparent 1px 5vmin) 0 100% / 100% 45% no-repeat,
    linear-gradient(to bottom, var(--color-bg) 10%, color-mix(in oklab, var(--color-primary) 30%, transparent) 55%, var(--color-bg) 55%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#05070A] text-[#C9D1D9] font-mono antialiased` |
| heading | `font-bold uppercase text-5xl md:text-7xl tracking-[0.02em] leading-[1.05]` |
| body | `text-sm leading-[1.5]` |
| section | `border border-[#C6FF00]/40 bg-[#0C1117] p-4 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,12px_100%,0_calc(100%-12px))]` |
| button | `bg-[#C6FF00] px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#05070A] hover:shadow-[0_0_16px_rgba(198,255,0,0.5)]` |
| label | `text-[11px] uppercase tracking-[0.15em] text-[#8E949B]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Carbon (Regular) by IBM, licence Apache 2.0. Reason: A technical, square-cap line family that matches clipped panels and HUD labels. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.05, case: uppercase.
- **Weights:** display 700, subhead 600, body 400, bold in text 700, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 14px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** horizon. Cybercore renders a wireframe floor that runs to a hard sun on the horizon. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. Keep the rest of the page on `--color-bg`.
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

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Remove the cuts and glitch; use hairlines at 8% white and one accent.
- If the user asks for **more retro**: move toward [`synthwave-web`](../synthwave-web/SKILL.md) (Synthwave Web). Swap acid green for pink and violet and add a sun and a perspective grid.
- If the user asks for **more raw**: move toward [`terminal-tui-web`](../terminal-tui-web/SKILL.md) (Terminal / TUI Web). Reduce to a mono grid in one phosphor colour.

- **Came from (go here for a more orthodox version):** [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`cyberpunk-web`](../cyberpunk-web/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md)
- **Nearest by vector profile:** [`art-deco-web`](../art-deco-web/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md)

## Emotional target

The viewer feels that they have entered a cold, fast machine with secrets.

**Keywords:** cold, technical, aggressive, futuristic, dense, dystopian · **Brand archetypes:** outlaw, magician

## Sources

- Example: Cyberpunk 2077 official site (2020)
- Example: Teenage Engineering product pages (2020–2025)
- Example: Nike ACG and Arc'teryx drop pages (2021–2025)

---

Generated from [`data/design/styles/cybercore-web.json`](../../data/design/styles/cybercore-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
