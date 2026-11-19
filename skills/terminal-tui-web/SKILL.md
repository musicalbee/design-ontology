---
name: terminal-tui-web
description: "Apply the Terminal / TUI Web style (2017–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: terminal, tui, command line, cli aesthetic, monospace ui, hacker style."
domain: internet
era: touchscreen
triggers:
  - "terminal"
  - "tui"
  - "command line"
  - "cli aesthetic"
  - "monospace ui"
  - "hacker style"
  - "ascii"
  - "retro terminal"
  - "phosphor"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Terminal / TUI Web

> The terminal is the honest interface: a fixed character grid, text only and a keyboard make a tool fast and trustworthy.

A monospace grid, box-drawing borders, a dark or phosphor ground and keyboard hints. It borrows from command-line tools and text user interfaces to make web pages that feel like a terminal.

**Period:** 2017–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Terminal UI, TUI aesthetic, Console web

## When to load this skill

Load it when the user asks for: "terminal", "tui", "command line", "cli aesthetic", "monospace ui", "hacker style", "ascii", "retro terminal", "phosphor".

Good for: CLI and developer tool sites, documentation for command-line tools, hacker, security and CTF pages, indie games and tools, personal sites of engineers.

Do not use it when:
- The audience is a general consumer.
- The page needs rich images or brand warmth.
- The UI needs touch-first controls.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Terminal / TUI Web, you MUST:

1. Set every character on a fixed grid: one monospace at 14px to 16px, character width 8px to 10px, line height 20px to 24px.
2. Align all blocks to whole characters and whole lines; widths are multiples of 1 ch and heights multiples of 1 line.
3. Draw borders with box-drawing characters (┌ ─ ┐ │ └ ┘) or a 1px line snapped to the grid; corner radius is 0px.
4. Use 2 to 4 colours: a dark ground (#0C0C0C), one text colour, one accent and an alert colour; green or amber on black for a phosphor look.
5. Show a prompt (>, $ or ▌) and a blinking block cursor at 1s intervals (500ms on, 500ms off).
6. Show keyboard shortcuts in brackets, for example [q] quit, [/] search, at 12px to 14px next to each action.
7. Use ASCII art, bars (▁▂▃▅▇) and text spinners (⠋⠙⠹) instead of images and icons.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Proportional fonts for UI text.
- **NEVER:** Rounded corners, shadows and gradients.
- **NEVER:** Icons, emoji and illustration.
- **NEVER:** Mouse-only controls with no key.
- **NEVER:** Smooth animation and easing curves.
- **NEVER:** More than 4 colours.
- **NEVER:** Elements off the character grid.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A character grid of 80 to 120 columns; each block spans whole columns and lines; the gutter is 1 character.
- **Whitespace ratio:** 20% to 30% of the surface is empty, in whole lines; spacing is 1 or 2 lines and 1 or 2 characters.
- **Alignment rules:** Flush left on the grid; numbers right-aligned in columns; headers in boxes.
- **Container geometry:** Boxes with 0px radius drawn by a 1px line or box-drawing characters; panels split by single lines.

## Typography

- **Classifications:** monospace
- **Tracking:** Tracking stays at 0 so the grid holds.
- **Leading:** Line height is a fixed 1.5 on a 16px face: 24px.
- **Hierarchy rules:**
  - Use two weights: regular (400) and bold (700).
  - Use one size, 14px to 16px; headers differ by bold, case and box, not by size.
  - Set headers in upper case in bold.
  - Set shortcut keys in brackets.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| JetBrains Mono | JetBrains Mono | A clear coding face with ligatures off for an exact grid. |
| IBM Plex Mono | IBM Plex Mono | A technical mono with a warm voice. |
| VT323 | Share Tech Mono | A bitmap-style mono for a CRT look. |

## Colour & lighting

- **Palette structure:** Dark ground, one phosphor colour and an alert colour.
- **Contrast rules:** Phosphor on console holds at least 13:1; dim text holds at least 4.5:1; amber marks selection and warnings.
- **Surface treatment:** Flat black with an optional scanline overlay of 2px stripes at 4% opacity; no gradient.
- **Light and shadow:** None; an optional glow of 4px blur in the text colour at 30% for a CRT look.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Console | `#0C0C0C` | background |
| Phosphor | `#33FF66` | text and primary |
| Amber | `#FFB000` | accent |
| Dim | `#6B8F71` | secondary text |
| Alert | `#FF5555` | error |
| Panel | `#131313` | surface |

## Materiality & texture

- **Surface simulation:** A cathode-ray terminal: a flat dark field with glowing characters.
- **Border rules:** A single line of 1px in the dim colour or box-drawing characters; no thick border.
- **Blur and elevation:** No blur and no elevation; an optional text-shadow of 0 0 4px at 30% for glow.

## Ornamentation & iconography

- **Iconography:** No icons; use characters (▶ ✓ ✗ ● ○) and bracketed keys.
- **Illustration:** ASCII art, text charts and block-character progress bars.
- **Decorative elements:** box-drawing frame · blinking cursor · bracketed key hint · ASCII chart · text spinner

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Stepped, discrete: the cursor blinks at 1s; text types at 30 to 80 characters per second; spinners cycle at 80ms per frame.
- **Easing:** steps(1)
- **Duration (ms):** 0
- **Hover and active:** Hover inverts the row (text and ground swap); active state shows the amber ground.

## Code & token primer

Set `data-style="terminal-tui-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="terminal-tui-web"] {
  --color-bg: #0C0C0C;
  --color-surface: #131313;
  --color-text: #33FF66;
  --color-muted: #6B8F71;
  --color-primary: #33FF66;
  --color-accent: #FFB000;
  --color-border: #33FF66;
  --font-sans: "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace;
  --font-display: "JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(1);
  --duration: 0ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #33FF66;
  --color-on-surface: #33FF66;
  --color-on-primary: #0C0C0C;
  --color-on-accent: #0C0C0C;
  --color-muted-on-bg: #6B8F71;
  --color-muted-on-surface: #6B8F71;
  --color-link: #FFB000;
  --color-link-on-surface: #FFB000;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.5;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 16px;
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
| page | `bg-[#0C0C0C] text-[#33FF66] font-mono text-sm leading-6 antialiased p-4` |
| heading | `text-base font-bold uppercase leading-6 tracking-normal` |
| body | `text-sm leading-6 max-w-[100ch]` |
| section | `border border-[#33FF66] p-4` |
| button | `rounded-none border border-[#33FF66] bg-transparent px-3 text-sm text-[#33FF66] hover:bg-[#33FF66] hover:text-[#0C0C0C]` |
| label | `text-xs text-[#6B8F71]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: A pixel family made on a strict square grid that fits a character-cell page. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.5, case: uppercase.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** scanlines. A terminal is a phosphor screen: scan lines, a green glow and a dark bezel. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Fixed-pitch grid (process)

Every character takes one cell of the same width, so text forms columns without a separate grid and a position is a count of characters. Origin: typeface, Ilion, New York, 1874.

- Give every glyph one advance width, 0.60 em in most fonts, or 10 or 12 characters an inch on a typewriter.
- Align columns with spaces and set tables, code and forms on the cell grid.
- On a screen, size the layout in cells: 80 columns by 24 rows is the classic terminal.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **GitHub** (platform, web, 2007–now), published the style. A web site where developers host code. Its own dark interface and the editor themes and terminal tools that it hosts set the look of software for engineers.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #33FF66 | #33FF66, #FFB000 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFB000 | #FFB000, #33FF66 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **friendlier**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Add a proportional UI face, hairlines at 8% white and a 6px radius; keep the mono for data.
- If the user asks for **more raw**: move toward [`brutalist-web`](../brutalist-web/SKILL.md) (Brutalist Web (2014)). Switch to a white ground, default links and 1px black rules.
- If the user asks for **more retro**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Add neon pink and cyan and a perspective grid; keep the mono.

- **Rejects (the opposite pole; do not blend):** [`material-design`](../material-design/SKILL.md)
- **Mixes well with:** [`brutalist-web`](../brutalist-web/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md), [`cyberpunk-web`](../cyberpunk-web/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Kin in another domain:** [`four-shade-handheld`](../four-shade-handheld/SKILL.md), [`monospace`](../monospace/SKILL.md)
- **Nearest by vector profile:** [`bauhaus`](../bauhaus/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md)

## Emotional target

The viewer feels the speed and honesty of a tool made by and for experts.

**Keywords:** technical, fast, honest, nostalgic, hacker, focused · **Brand archetypes:** sage, explorer

## Sources

- Example: charm.sh (Bubble Tea and Gum) site (2021–2025)
- Example: warp.dev and ghostty.org product pages (2022–2025)
- Example: htop.dev, neovim.io and lazygit-style project pages

---

Generated from [`data/internet/styles/terminal-tui-web.json`](../../data/internet/styles/terminal-tui-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
