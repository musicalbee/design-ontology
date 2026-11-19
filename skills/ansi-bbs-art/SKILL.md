---
name: ansi-bbs-art
description: "Apply the ANSI BBS Art style (1985–1996) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: ansi art, bbs, bulletin board, artscene, text art, 80 columns."
domain: internet
era: terminals-bbs
triggers:
  - "ansi art"
  - "bbs"
  - "bulletin board"
  - "artscene"
  - "text art"
  - "80 columns"
  - "dial-up"
  - "vga text mode"
vector_profile:
  ornamentation: 4
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# ANSI BBS Art

> A picture is a grid of characters: every shape must fit an 8 by 16 pixel cell and one of 16 colours.

Pictures and menus made of 80-column text blocks in the 16 ANSI colours: shade characters, box lines and wide logos. Dial-up bulletin boards showed them, and art groups released them in monthly packs.

**Period:** 1985–1996 · **Era:** Terminals, BBS and Usenet · **Domain:** Internet · **Also called:** ANSI art, BBS art, Artpack

## When to load this skill

Load it when the user asks for: "ansi art", "bbs", "bulletin board", "artscene", "text art", "80 columns", "dial-up", "vga text mode".

Good for: retro tech and hacker-culture pages, game and tool launch screens in text mode, music and demo scene posters, developer tool splash screens, nostalgic event invitations.

Do not use it when:
- The audience needs accessible long reading on small screens.
- The brand needs a polished, friendly tone.
- The page must show photographs.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in ANSI BBS Art, you MUST:

1. Build the layout on a grid of 80 columns by 25 rows; one cell is 8px wide and 16px high.
2. Use only the 16 ANSI colours, on a black ground (#000000), and show 8 colours as the dark set and 8 as the bright set.
3. Shade with block characters: light shade ░ at 25%, medium shade ▒ at 50%, dark shade ▓ at 75%, full block █ at 100%.
4. Frame menus and windows with double-line box characters ╔ ═ ╗ and keep the frame 1 cell wide.
5. Set the signature logo 6 to 10 rows high in a block font, with a 3-stop colour fade from dark blue to cyan to white.
6. Put a status bar of 1 row at the foot of the screen, white on blue, with key hints in brackets.
7. Blink one cursor block at 530ms; reveal long screens line by line at 1 row per 40ms to imitate a 28.8 kbps modem.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Anti-aliased text and smooth gradients.
- **NEVER:** More than 16 colours on one screen.
- **NEVER:** Proportional fonts with variable widths.
- **NEVER:** Rounded corners and soft shadows.
- **NEVER:** Photographic images.
- **NEVER:** Free layout that ignores the cell grid.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A strict grid of 80 columns by 25 rows with 8px by 16px cells; every element snaps to whole cells.
- **Whitespace ratio:** 10% to 20% of the cells stay black; the spacing scale is 1 cell, 2 cells and 1 row (8px, 16px).
- **Alignment rules:** Menus flush left at column 2; logos centred over the full width of 80 columns.
- **Container geometry:** Rectangles of whole cells with a double-line frame; the radius is 0px.

## Typography

- **Classifications:** bitmap monospace · block lettering
- **Tracking:** Display 0.04em; body 0em, because every glyph fills one cell.
- **Leading:** Display 1.0; body 1.25, which gives 16px rows at 16px size.
- **Hierarchy rules:**
  - Use one size, 16px, for all text; make hierarchy with colour and with block logos.
  - Use bright white for titles and light grey (#AAAAAA) for body text.
  - Set menu keys in bright yellow and menu labels in light grey.
  - Use upper case for headings and lower case for body text.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| VT323 | IBM Plex Mono | VT323 is an open look-alike of a VGA text screen; IBM Plex Mono carries long reading. |
| Press Start 2P | VT323 | A wide pixel face for logos with a mono text face. |
| Major Mono Display | IBM Plex Mono | A lower-case mono display for a cleaner title. |

## Colour & lighting

- **Palette structure:** Sixteen fixed colours on black: a dark set of 8 and a bright set of 8; use 3 to 4 on one screen.
- **Contrast rules:** Light grey on black is 9:1; white on blue is 12:1; dark blue text on black is not allowed.
- **Surface treatment:** Flat colour cells with dither by shade characters; no gradient, only steps.
- **Light and shadow:** No light source; depth comes from a dark shade as a shadow of 1 cell on the right and below.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Black | `#000000` | background |
| Light Grey | `#AAAAAA` | text |
| Blue | `#0000AA` | window |
| Cyan | `#00AAAA` | primary |
| Bright Cyan | `#55FFFF` | accent |
| Bright Magenta | `#FF55FF` | highlight |
| Bright Yellow | `#FFFF55` | key |
| White | `#FFFFFF` | title |

## Materiality & texture

- **Surface simulation:** A text-mode screen on a CRT: each cell is a glyph with a foreground and a background colour.
- **Border rules:** A double-line box frame 1 cell wide; a single line for inner panels.
- **Blur and elevation:** No blur; a 1-cell shadow in dark grey (#555555) gives elevation.

## Ornamentation & iconography

- **Iconography:** Icons are glyphs in a cell: ☺ ♥ ♦ ♣ ♠ and arrows, 16px, solid, with square ends.
- **Illustration:** Logos and scenes drawn with ░▒▓█ and half blocks; skulls, dragons, logos and portraits in 2 to 4 colours.
- **Decorative elements:** shade-block gradient · double-line frame · block-letter logo · scroller text · artist signature

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Screens draw line by line at 25 lines per second; a scroller moves text 1 cell per 80ms; no tweening.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 40
- **Hover and active:** Hover inverts the cell: swap the foreground and the background colour; focus shows a blinking block at 530ms.

## Code & token primer

Set `data-style="ansi-bbs-art"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="ansi-bbs-art"] {
  --color-bg: #000000;
  --color-surface: #0000AA;
  --color-text: #AAAAAA;
  --color-muted: #55FFFF;
  --color-primary: #00AAAA;
  --color-accent: #FFFF55;
  --color-border: #AAAAAA;
  --font-sans: "IBM Plex Mono", "VT323", monospace;
  --font-display: "VT323", "Press Start 2P", monospace;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 8px 16px 0 #555555;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 40ms;
  --type-ratio: 1.125;
  --size-small: 14.22px;
  --size-h3: 20.25px;
  --size-h2: 22.78px;
  --size-h1: 25.63px;
  --color-on-bg: #AAAAAA;
  --color-on-surface: #AAAAAA;
  --color-on-primary: #000000;
  --color-on-accent: #000000;
  --color-muted-on-bg: #55FFFF;
  --color-muted-on-surface: #55FFFF;
  --color-link: #FFFF55;
  --color-link-on-surface: #FFFF55;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.25;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(2px 2px at 12% 18%, var(--color-primary) 99%, transparent),
    radial-gradient(2px 2px at 64% 12%, var(--color-on-bg) 99%, transparent),
    radial-gradient(2px 2px at 82% 34%, var(--color-primary) 99%, transparent),
    radial-gradient(2px 2px at 44% 28%, var(--color-on-bg) 99%, transparent),
    radial-gradient(2px 2px at 92% 8%, var(--color-on-bg) 99%, transparent),
    linear-gradient(var(--color-accent), var(--color-accent)) 0 100% / 100% 6vh no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 70% calc(100% - 6vh) / 24% 6vh no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 75% calc(100% - 12vh) / 12% 6vh no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 92% 26% / 8vmin 8vmin no-repeat,
    conic-gradient(color-mix(in oklab, var(--color-on-bg) 4%, transparent) 25%, transparent 0 50%, color-mix(in oklab, var(--color-on-bg) 4%, transparent) 0 75%, transparent 0) 0 0 / 32px 32px,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-black text-[#AAAAAA] font-mono antialiased px-2 md:px-8` |
| heading | `text-4xl md:text-6xl uppercase tracking-[0.04em] leading-none text-white` |
| body | `text-base leading-[1.25] max-w-[80ch]` |
| section | `border-2 border-double border-[#AAAAAA] bg-[#0000AA] text-white` |
| button | `rounded-none bg-[#00AAAA] px-4 py-2 text-base uppercase text-black hover:bg-[#AAAAAA]` |
| label | `text-sm uppercase text-[#FFFF55]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Pixel icons share the square cell of a text-mode screen. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.04em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.25.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** pixel. The ground is a field of 8 by 16 pixel cells, as on a text-mode screen. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### ANSI block shading (motif)

Drawing with the block and shade characters of the IBM PC character set, in 16 colours, on an 80 by 25 grid. Origin: internet, United States, 1983.

- Draw on a grid of 80 columns by 25 rows, with cells of 8px by 16px.
- Use ░ at 25%, ▒ at 50%, ▓ at 75% and █ at 100% to blend two colours.
- Limit one cell to one foreground colour from 16 and one background colour from 8.
- Add a signature in the lower right corner.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **ACiD Productions** (studio, web, 1990–now), published the style. An art group of ANSI artists. It released its work as monthly art packs for bulletin boards.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #00AAAA | #00AAAA, #AA00AA, #00AA00, #AA0000 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFFF55 | #FFFF55, #55FFFF, #FF55FF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.125 | 1.067–1.25 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polish**: move toward [`terminal-tui-web`](../terminal-tui-web/SKILL.md) (Terminal / TUI Web). Keep the cell grid and swap the 16 colours for 2 or 3 hues and a quiet line frame.
- If the user asks for **more colour**: move toward [`cyberdelia`](../cyberdelia/SKILL.md) (Cyberdelia). Add loud acid colour fields and warped logos; leave the grid.
- If the user asks for **more web**: move toward [`geocities-homepage`](../geocities-homepage/SKILL.md) (GeoCities Homepage). Move to a free page with tiled backgrounds and pixel GIFs.

- **Led to (go here for a newer version):** [`kaomoji-emoticon`](../kaomoji-emoticon/SKILL.md), [`net-art-browser`](../net-art-browser/SKILL.md)
- **Mixes well with:** [`punk-zine`](../punk-zine/SKILL.md)
- **Kin in another domain:** [`pixel-icon`](../pixel-icon/SKILL.md)
- **Nearest by vector profile:** [`japanese-dense-web`](../japanese-dense-web/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md), [`livestream-overlay`](../livestream-overlay/SKILL.md)

## Emotional target

The viewer feels the thrill of a secret network and respects the craft of a limit.

**Keywords:** underground, digital, blocky, nostalgic, hacker, dial-up · **Brand archetypes:** outlaw, creator, explorer

## Sources

- [Wikipedia: ANSI art](https://en.wikipedia.org/wiki/ANSI_art)
- [Wikipedia: Bulletin board system](https://en.wikipedia.org/wiki/Bulletin_board_system)
- [Wikipedia: ACiD Productions](https://en.wikipedia.org/wiki/ACiD_Productions)

---

Generated from [`data/internet/styles/ansi-bbs-art.json`](../../data/internet/styles/ansi-bbs-art.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
