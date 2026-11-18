---
name: dark-devtool-ui
description: "Apply the Dark-Mode Developer Tool style (2016–now) when generating UI or graphic layouts. Load when the user asks for: dark mode, developer tool, dev tool, linear style, command palette, vercel style."
domain: design
era: touchscreen
triggers:
  - "dark mode"
  - "developer tool"
  - "dev tool"
  - "linear style"
  - "command palette"
  - "vercel style"
  - "code editor"
  - "keyboard first"
  - "hairline borders"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Dark-Mode Developer Tool

> A tool for experts is a dense, calm, dark instrument: show a lot, keep it quiet and make everything reachable from the keyboard.

Near-black surfaces, 1px hairline borders, one saturated accent, a monospace for data and keyboard hints on every action. It came from code editors and terminals and now defines software for engineers.

**Period:** 2016–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Dev-tool dark UI, Linear style, Code-editor UI

## When to load this skill

Load it when the user asks for: "dark mode", "developer tool", "dev tool", "linear style", "command palette", "vercel style", "code editor", "keyboard first", "hairline borders".

Good for: developer tools and CLIs, SaaS for engineers, observability and infra dashboards, API and docs sites, issue and project trackers.

Do not use it when:
- The audience is a general consumer.
- The brand must feel warm or playful.
- The page is long-form editorial reading.

## System directives

When generating UI or graphic layouts in Dark-Mode Developer Tool, you MUST:

1. Use a near-black ground (#0B0B0E) and 2 or 3 surface steps of 4% to 8% lightness each; no pure black and no pure white.
2. Draw every border as a 1px hairline in white at 8% to 12% opacity; panels have a radius of 6px to 8px.
3. Set one accent colour (indigo #5A66E8 or similar) and use it on less than 5% of the surface: focus, selection and the primary button.
4. Set UI text at 13px to 14px in a neutral sans and all data, ids and code in a monospace at 12px to 13px.
5. Show a keyboard hint in a 1px bordered key cap (radius 4px, 11px text) next to each main action; offer a command palette on Cmd+K.
6. Give every row a height of 32px to 40px and keep lists dense; separate rows by hairline, not by space.
7. Use motion of 100ms to 200ms for state changes only, with no entrance effects on content.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Pure black (#000000) or pure white text.
- **NEVER:** Large rounded cards and thick borders.
- **NEVER:** Colourful backgrounds and more than one accent colour.
- **NEVER:** Decorative illustration in the product view.
- **NEVER:** Large padding above 24px inside lists.
- **NEVER:** Drop shadows with large blur on panels.
- **NEVER:** Light themes as the only option.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A sidebar of 240px to 280px and a content area on a 4px grid; panels split by hairlines; rows of 32px to 40px.
- **Whitespace ratio:** 15% to 25% of the surface stays empty; the spacing scale is 4, 8, 12, 16 and 24px.
- **Alignment rules:** Flush left; numbers right-aligned in a monospace; actions in a toolbar at the top right.
- **Container geometry:** Rectangles with a 6px to 8px radius, a 1px hairline border and no shadow; key caps with a 4px radius.

## Typography

- **Classifications:** neo-grotesque sans serif · monospace
- **Tracking:** Display takes -0.02em; body stays at 0; small labels take +0.02em.
- **Leading:** Display 1.15; body 1.5; rows 1.4.
- **Hierarchy rules:**
  - Use three weights: regular (400), medium (500) and semibold (600).
  - Use sizes 12, 13, 14, 20 and 32px.
  - Set headings in sentence case in medium weight.
  - Set ids, hashes and numbers in the monospace with tabular figures.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | One neutral UI face for text; set data and code in JetBrains Mono through --font-mono. |
| Geist | Geist Mono | A matched sans and mono family. |
| IBM Plex Sans | IBM Plex Mono | A technical pairing with a clear voice. |

## Colour & lighting

- **Palette structure:** Near-black ground, grey surfaces, off-white text and one accent.
- **Contrast rules:** Text holds at least 12:1 on void; muted text holds at least 4.5:1; the accent carries focus and primary buttons.
- **Surface treatment:** Flat, opaque, matt surfaces; steps of 4% to 8% lightness show depth; a faint radial glow of the accent at 6% opacity is allowed behind the hero only.
- **Light and shadow:** No cast shadows; elevation is a lighter surface and a hairline; a 1px top highlight of white at 6% on cards.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Void | `#0B0B0E` | background |
| Panel | `#141418` | surface |
| Raised | `#1C1C22` | raised surface |
| Text | `#E6E6EB` | text |
| Muted | `#8A8A96` | secondary text |
| Indigo | `#5A66E8` | accent |

## Materiality & texture

- **Surface simulation:** A dark terminal and code editor, shown as flat tonal surfaces.
- **Border rules:** 1px hairline in white at 8% to 12% opacity on all panels, inputs and key caps.
- **Blur and elevation:** No blur on panels except a 12px blur on overlays. Elevation is shown by lighter tone and hairline, not by shadow.

## Ornamentation & iconography

- **Iconography:** Outline icons with a 1.5px stroke, round caps and round joins at 16px; one family only; icons sit next to text and have no container.
- **Illustration:** Product screenshots of the real tool in dark mode, with an accent glow; abstract line diagrams.
- **Decorative elements:** hairline border · key cap · command palette · monospace data · faint accent glow

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Quick, quiet state moves: panels slide 8px and fade in 150ms; lists update with no delay; the command palette opens in 120ms.
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Duration (ms):** 150
- **Hover and active:** Hover lifts a row to the raised surface and shows its key hint; active state shows a 1px accent ring.

## Code & token primer

Set `data-style="dark-devtool-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="dark-devtool-ui"] {
  --color-bg: #0B0B0E;
  --color-surface: #141418;
  --color-text: #E6E6EB;
  --color-muted: #8A8A96;
  --color-primary: #5A66E8;
  --color-accent: #5A66E8;
  --color-border: #2A2A32;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --border-radius: 6px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --duration: 150ms;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --color-on-bg: #E6E6EB;
  --color-on-surface: #E6E6EB;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #8A8A96;
  --color-muted-on-surface: #8A8A96;
  --color-link: #E6E6EB;
  --color-link-on-surface: #E6E6EB;
  --display-weight: 600;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.02em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 14px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(100deg, var(--color-bg) 18%, transparent 52%),
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 30%, transparent) 1.1px, transparent 1.6px) 0 0 / 24px 24px,
    radial-gradient(55% 60% at 82% 40%, color-mix(in oklab, var(--color-primary) 26%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0B0B0E] text-[#E6E6EB] font-sans text-sm antialiased` |
| heading | `text-4xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.15]` |
| body | `text-sm leading-[1.5] text-[#8A8A96]` |
| section | `rounded-md border border-white/10 bg-[#141418] p-4` |
| button | `rounded-md bg-[#5A66E8] px-3 py-1.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#4853D6]` |
| label | `font-mono text-xs text-[#8A8A96]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, even 1.5px line at 16px that sits beside 13px text without weight. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.02em, leading 1.15, case: none.
- **Weights:** display 600, subhead 500, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 14px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** dot-grid. Developer tools sit on a dark canvas with a dot grid and a glow of the brand colour. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. Keep the rest of the page on `--color-bg`.
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

- If the user asks for **lighter**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Switch to a white ground and ink text; keep the 1px hairlines and one accent.
- If the user asks for **more visual**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Add 16px backdrop blur to overlays and a colour glow behind panels.
- If the user asks for **more playful**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Replace hairlines with 3px black borders and hard shadows; keep the density.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md)
- **Led to (go here for a newer version):** [`cybercore-web`](../cybercore-web/SKILL.md)
- **Mixes well with:** [`ai-chat-ui`](../ai-chat-ui/SKILL.md), [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`cyberpunk-web`](../cyberpunk-web/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md), [`terminal-tui-web`](../terminal-tui-web/SKILL.md)
- **Nearest by vector profile:** [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md)

## Emotional target

The viewer feels focus, speed and the calm of a tool made by experts.

**Keywords:** focused, fast, precise, technical, calm, dense · **Brand archetypes:** sage, creator

## Sources

- Linear, Vercel and GitHub dark-mode interfaces (2019–2025), public product pages
- Stack Overflow Developer Survey (editor and dark-mode share)

---

Generated from [`data/design/styles/dark-devtool-ui.json`](../../data/design/styles/dark-devtool-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
