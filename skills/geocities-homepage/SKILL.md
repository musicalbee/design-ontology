---
name: geocities-homepage
description: "Apply the GeoCities Homepage style (1995–2009) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: geocities, 90s homepage, under construction, web ring, guestbook, visitor counter."
domain: internet
era: postmodern-early-digital
triggers:
  - "geocities"
  - "90s homepage"
  - "under construction"
  - "web ring"
  - "guestbook"
  - "visitor counter"
  - "animated gif"
  - "marquee"
vector_profile:
  ornamentation: 5
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# GeoCities Homepage

> Every person owns a page, and the page shows what its owner loves, with no care for taste.

A personal page with a tiled star or marble background, rainbow rules, animated GIFs, a visitor counter, a guestbook and an under-construction sign. Free web hosts such as GeoCities made it common.

**Period:** 1995–2009 · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Personal home page, Under-construction web, 90s homepage

## When to load this skill

Load it when the user asks for: "geocities", "90s homepage", "under construction", "web ring", "guestbook", "visitor counter", "animated gif", "marquee".

Good for: nostalgic fan pages and personal sites, retro event and party invitations, humour and meme pages, games and toy sites, indie web projects.

Do not use it when:
- The page needs trust, safety or a clear task flow.
- The audience needs accessible reading.
- The brand needs a calm, premium tone.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in GeoCities Homepage, you MUST:

1. Tile a small background image (32px to 128px) of stars, marble or clouds over the full page.
2. Set body text in a bright colour on a dark ground, for example yellow (#FFFF00) on navy (#000080).
3. Separate sections with a rainbow rule or a GIF line 4px to 8px high.
4. Place 3 to 6 animated GIFs on the page: a spinning mail box, a flame, a waving flag, a 'NEW!' tag.
5. Add a visitor counter of 6 digits, a guestbook link and a sign 'Under construction' at the top.
6. Centre the content in one column of 600px to 640px and set links in a bright colour on a dark ground.
7. Put a marquee line at the top that scrolls text at about 60px per second.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean white space and a limited palette.
- **NEVER:** Matched type scale with one family.
- **NEVER:** Static pages with no animation.
- **NEVER:** Hidden counters and no personal items.
- **NEVER:** Professional stock images.
- **NEVER:** Responsive grids that reflow.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A centred column of 600px to 640px or a table with a left menu of 150px; no real grid, items stack at random sizes.
- **Whitespace ratio:** 5% to 15% of the page stays empty; the gap between items is 8px to 16px, usually from line breaks.
- **Alignment rules:** Centred headings and text; images float left or right at 8px offsets; a marquee runs across the top.
- **Container geometry:** Rectangles with a 0px radius; image buttons of 88px by 31px; tables with 2px outset borders.

## Typography

- **Classifications:** comic sans · bitmap display · default serif
- **Tracking:** Display 0.02em; body 0em.
- **Leading:** Display 1.1; body 1.4.
- **Hierarchy rules:**
  - Use sizes 14px, 18px and 32px; add a 48px title.
  - Change colour for each section heading: yellow, lime, cyan and pink.
  - Use bold for all headings and underline for links.
  - Use one colour for text on each page.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Comic Neue | Tinos | Comic Neue is an open look-alike of Comic Sans MS, the usual homepage face. |
| Press Start 2P | Comic Neue | A pixel face for headings and counters. |
| Bangers | Tinos | A loud comic display with a default serif text. |

## Colour & lighting

- **Palette structure:** Pure bright web colours on a dark or tiled ground; 5 to 8 hues on one page with no order.
- **Contrast rules:** Yellow on navy is 12:1; lime on navy is 11:1; pink on navy is 5:1 and stays for headings of 24px or more.
- **Surface treatment:** A tiled pattern image on the page and flat colour on tables; no soft gradients.
- **Light and shadow:** No light source; buttons use a 2px outset bevel; text may carry a 2px black drop shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Navy | `#000080` | background |
| Deep Blue | `#1A1A99` | panel |
| Yellow | `#FFFF00` | text |
| Lime | `#00FF00` | link |
| Hot Pink | `#FF00FF` | heading |
| Cyan | `#00FFFF` | accent |
| Red | `#FF0000` | alert |
| White | `#FFFFFF` | text |

## Materiality & texture

- **Surface simulation:** A pinboard of GIFs: pixel images with hard edges and limited palettes (256 colours).
- **Border rules:** A 2px outset border on tables and buttons; 1px dotted lines around images.
- **Blur and elevation:** No blur; a hard 2px shadow in black on headings.

## Ornamentation & iconography

- **Iconography:** Pixel GIFs at 32px: envelope, home, mailbox, flame, globe and 'NEW!' stars, with dithered edges.
- **Illustration:** Clip art, tiled backgrounds, animated GIF mascots, banners of 468px by 60px and 88px by 31px badges.
- **Decorative elements:** tiled background · rainbow rule · visitor counter · under-construction sign · animated GIF · web ring badge

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Elements loop at 4 to 12 frames per second: spinning icons, flames and a marquee at 60px per second; pages cut with no easing.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 100
- **Hover and active:** Hover turns a link from lime to pink and shows a status-bar text; a visited link becomes purple (#800080).

## Code & token primer

Set `data-style="geocities-homepage"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="geocities-homepage"] {
  --color-bg: #000080;
  --color-surface: #1A1A99;
  --color-text: #FFFFFF;
  --color-muted: #00FFFF;
  --color-primary: #FF00FF;
  --color-accent: #FFFF00;
  --color-border: #FFFF00;
  --font-sans: "Tinos", "Times New Roman", serif;
  --font-display: "Comic Neue", "Bangers", cursive;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 2px 2px 0 #000000;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 100ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #000080;
  --color-on-accent: #000080;
  --color-muted-on-bg: #00FFFF;
  --color-muted-on-surface: #00FFFF;
  --color-link: #FFFF00;
  --color-link-on-surface: #FFFF00;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.02em;
  --display-leading: 1.1;
  --display-case: none;
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
| page | `bg-[#000080] text-white font-serif px-2 md:px-8` |
| heading | `text-3xl md:text-5xl font-bold text-[#FF00FF] [text-shadow:2px_2px_0_#000]` |
| body | `text-base leading-[1.4] max-w-[640px] mx-auto` |
| section | `border-2 border-[#FFFF00] bg-[#1A1A99]` |
| button | `rounded-none border-2 border-white bg-[#FF00FF] px-3 py-1 text-sm font-bold text-black hover:bg-[#00FFFF]` |
| label | `text-xs font-bold text-[#FFFF00]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Pixel icons match the 32px GIFs of a homepage. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.1, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero stacked, center aligned, compact density, accent tilt -2°.
- **Ground:** confetti. The ground is a tiled background with scattered coloured marks, like a stars-and-marble tile. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Tiled background (motif)

A small image that repeats in both directions behind a page. It fills any window size from one file. Origin: internet, United States, c. 1995.

- Make a tile of 32px to 128px that joins at all 4 edges.
- Keep the tile to 16 or 64 colours so that the file stays small.
- Keep text in a bright colour on a dark tile, or in a dark colour on a pale tile.
- Use a fixed position when the page scrolls.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **GeoCities** (platform, web, 1994–2009), launched the style. A free host for personal home pages. Its pages used tiled backgrounds, pixel GIFs, counters and under-construction signs.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF00FF | #FF00FF, #00FF00, #FFFF00, #00FFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFFF00 | #FFFF00, #00FFFF, #00FF00 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.125–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`portal-table-layout`](../portal-table-layout/SKILL.md) (Portal Table Layout). Replace the loud ground with white, a blue header band and a table of link lists.
- If the user asks for **more social**: move toward [`myspace-profile`](../myspace-profile/SKILL.md) (Myspace Profile). Add a profile photo, a top friends grid and a music player.
- If the user asks for **more art**: move toward [`net-art-browser`](../net-art-browser/SKILL.md) (Net Art Browser). Remove the GIFs and keep the raw default HTML.

- **Came from (go here for a more orthodox version):** [`cyberdelia`](../cyberdelia/SKILL.md)
- **Led to (go here for a newer version):** [`myspace-profile`](../myspace-profile/SKILL.md)
- **Was rejected by:** [`portal-table-layout`](../portal-table-layout/SKILL.md)
- **Mixes well with:** [`net-art-browser`](../net-art-browser/SKILL.md)
- **Nearest by vector profile:** [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`cottagecore`](../cottagecore/SKILL.md), [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md)

## Emotional target

The viewer feels the warmth, the clutter and the sincerity of a personal page.

**Keywords:** personal, cluttered, sincere, nostalgic, playful, loud · **Brand archetypes:** jester, everyman, creator

## Sources

- [Wikipedia: GeoCities](https://en.wikipedia.org/wiki/GeoCities)
- [Internet Archive: GeoCities special collection](https://archive.org/web/geocities.php)

---

Generated from [`data/internet/styles/geocities-homepage.json`](../../data/internet/styles/geocities-homepage.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
