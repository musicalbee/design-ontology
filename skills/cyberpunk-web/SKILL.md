---
name: cyberpunk-web
description: "Apply the Cyberpunk Web style (2013–now) when generating UI or graphic layouts. Load when the user asks for: cyberpunk, neon, dystopia, glitch, hud, blade runner."
domain: design
era: touchscreen
triggers:
  - "cyberpunk"
  - "neon"
  - "dystopia"
  - "glitch"
  - "hud"
  - "blade runner"
  - "night city"
  - "hacker"
vector_profile:
  ornamentation: 4
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 5
---

# Cyberpunk Web

> The future is crowded, dirty and bright: neon on dark, data everywhere.

A wet, neon city at night: dark ground, magenta, cyan and yellow signs, glitch, scan lines, grime, dense HUD panels and kanji or code on every edge. High tech with low life.

**Period:** 2013–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Cyberpunk, Neon noir UI, High tech, low life web

## When to load this skill

Load it when the user asks for: "cyberpunk", "neon", "dystopia", "glitch", "hud", "blade runner", "night city", "hacker".

Good for: game and film sites, music and event pages, security and hacker tools, fashion and tech drops, esports and streaming brands.

Do not use it when:
- The audience is children or needs a gentle tone.
- The page is a bank, a clinic or a care service.
- The content is a long text that people must read in comfort.

## System directives

When generating UI or graphic layouts in Cyberpunk Web, you MUST:

1. Set the ground in near-black blue (#0A0B14) and light it with neon in magenta (#FF2E88), cyan (#19E3F5) and a yellow warning (#FFE600).
2. Use glow: a text-shadow or box-shadow of 0 0 12px to 24px in the neon hue at 60% to 80% opacity.
3. Add scan lines (2px lines at 6% to 10% opacity), noise at 6% and a glitch offset of 2px to 6px in magenta and cyan on headings.
4. Cut panels at corners (a 12px to 24px chamfer) and frame them with a 1px neon line and small tick marks.
5. Fill edges with HUD detail: coordinates, serial numbers, barcodes, warning stripes and small mixed-script labels at 10px to 12px.
6. Set headlines in a hard, wide or condensed upper-case face and body text in a mono at 14px to 16px with 7:1 contrast.
7. Animate with flicker, glitch and typing: 80ms to 240ms steps; a hover flicker of 3 frames.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pastel or soft colour.
- **NEVER:** Round, friendly shapes.
- **NEVER:** Clean, empty layouts with no grime.
- **NEVER:** Long smooth easing.
- **NEVER:** Text in neon on neon with low contrast.
- **NEVER:** Bright white grounds.
- **NEVER:** Neon in more than 3 hues at once.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A dense, modular layout of 12 columns; HUD panels, rails and ticker bars; headings overlap panels; edges carry small data.
- **Whitespace ratio:** 15% to 30% of the surface is empty; gaps are 8px to 24px.
- **Alignment rules:** Flush left mono text; headings may tilt by -2° to +2° or sit on a skew; edges align to small tick marks.
- **Container geometry:** Chamfered rectangles; 1px neon frames; hazard stripes; no round corners above 2px.

## Typography

- **Classifications:** condensed sans serif · monospace · geometric display
- **Tracking:** Display takes +0.04em; labels +0.12em.
- **Leading:** Display 1.0; body 1.5.
- **Hierarchy rules:** Use weights 600 to 700 for display and 400 for body. · Use sizes 10, 14, 24 and 72px. · Set headlines and labels in upper case. · Set data in the mono with tabular figures.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Orbitron | Share Tech Mono | A wide, hard display with a technical mono. |
| Rajdhani | IBM Plex Mono | A tight technical sans with a clean mono. |
| Chakra Petch | JetBrains Mono | A cut-corner display that matches chamfered panels. |

## Colour & lighting

- **Palette structure:** Night black with neon magenta, cyan and warning yellow.
- **Contrast rules:** Bone on night holds 16:1; black text on magenta holds 6:1; use neon for lines, glow and large marks.
- **Surface treatment:** Dark ground with a vertical gradient to #141626; scan lines and noise at 6% to 10%.
- **Light and shadow:** Neon glow of 12px to 24px in the hue; a faint reflection on a wet floor; hard dark shadows.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Night | `#0A0B14` | background |
| Panel | `#141626` | surface |
| Bone | `#E8ECFF` | text |
| Dim | `#9AA3C7` | secondary text |
| Magenta | `#FF2E88` | primary |
| Cyan | `#19E3F5` | accent |
| Line | `#2B3159` | border |

## Materiality & texture

- **Surface simulation:** A wet, dark street: glass, metal, neon tubes and grime.
- **Border rules:** A 1px neon line with chamfered corners and tick marks.
- **Blur and elevation:** A neon glow instead of a shadow; no blur on text; reflections at 10% on lower edges.

## Ornamentation & iconography

- **Iconography:** Sharp 1.5px outline icons with square caps; barcodes, kanji, arrows, hazard stripes and warning triangles.
- **Illustration:** Rain-lit city scenes, signs, cyborg parts, towers and holograms in magenta and cyan.
- **Decorative elements:** neon glow · scan line · chamfer · HUD tick

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Electric: flicker, glitch and type-in in hard steps; panels slide 12px; no soft spring.
- **Easing:** steps(4, end)
- **Duration (ms):** 240
- **Hover and active:** Hover flickers the neon for 3 frames and raises the glow by 40%; active state inverts the fill in 80ms.

## Code & token primer

Set `data-style="cyberpunk-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="cyberpunk-web"] {
  --color-bg: #0A0B14;
  --color-surface: #141626;
  --color-text: #E8ECFF;
  --color-muted: #9AA3C7;
  --color-primary: #FF2E88;
  --color-accent: #19E3F5;
  --color-border: #2B3159;
  --font-sans: "Share Tech Mono", "IBM Plex Mono", monospace;
  --font-display: "Orbitron", "Chakra Petch", sans-serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 0 18px rgba(255,46,136,0.6);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(4, end);
  --duration: 240ms;
  --color-on-bg: #E8ECFF;
  --color-on-surface: #E8ECFF;
  --color-on-primary: #0A0B14;
  --color-on-accent: #0A0B14;
  --color-muted-on-bg: #9AA3C7;
  --color-muted-on-surface: #9AA3C7;
  --color-link: #19E3F5;
  --color-link-on-surface: #19E3F5;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0.04em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 15px;
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
| page | `bg-[#0A0B14] text-[#E8ECFF] font-mono antialiased` |
| heading | `font-display text-5xl md:text-7xl font-bold uppercase leading-none tracking-[0.04em]` |
| body | `text-[15px] leading-[1.5]` |
| section | `border border-[#2B3159] bg-[#141626] p-5 shadow-[0_0_18px_rgba(25,227,245,0.35)]` |
| button | `border border-[#FF2E88] bg-[#FF2E88] px-6 py-3 font-bold uppercase tracking-[0.12em] text-black transition-shadow duration-100 hover:shadow-[0_0_24px_rgba(255,46,136,0.8)]` |
| label | `text-xs uppercase tracking-[0.12em] text-[#9AA3C7]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: A sharp, pixel-edged family that suits chamfered panels and HUD marks. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.04em, leading 1, case: uppercase.
- **Weights:** display 700, subhead 600, body 400, bold in text 700, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 15px, leading 1.5.
- **Page:** hero poster, left aligned, compact density, accent tilt 0°.
- **Ground:** horizon. Cyberpunk takes the neon grid floor and the city sky from eighties film posters. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. Keep the rest of the page on `--color-bg`.
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

- If the user asks for **cleaner**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Keep the dark ground and one accent; remove scan lines, glitch and grime.
- If the user asks for **more retro**: move toward [`synthwave-web`](../synthwave-web/SKILL.md) (Synthwave Web). Add a sun, a grid horizon and gradients in purple and pink.
- If the user asks for **more code**: move toward [`terminal-tui-web`](../terminal-tui-web/SKILL.md) (Terminal / TUI Web). Use one green mono face and a character grid.

- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)
- **Mixes well with:** [`cybercore-web`](../cybercore-web/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md)
- **Kin in another domain:** [`film-noir-still`](../film-noir-still/SKILL.md)
- **Nearest by vector profile:** [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md), [`space-age`](../space-age/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md)

## Emotional target

The viewer feels thrill, tension and the pull of a risky city.

**Keywords:** electric, gritty, tense, futuristic, rebellious, dense · **Brand archetypes:** outlaw, explorer

## Sources

- Example: Blade Runner (1982) and Akira (1988) screen design
- Example: Cyberpunk 2077 official site (2018–2020)
- Example: Neon and glitch tech-drop sites (2013–2024)

---

Generated from [`data/design/styles/cyberpunk-web.json`](../../data/design/styles/cyberpunk-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
