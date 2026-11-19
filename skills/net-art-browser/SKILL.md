---
name: net-art-browser
description: "Apply the Net Art Browser style (1994–2001) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: net art, net.art, default html, browser art, raw html, view source."
domain: internet
era: postmodern-early-digital
triggers:
  - "net art"
  - "net.art"
  - "default html"
  - "browser art"
  - "raw html"
  - "view source"
  - "1990s web art"
  - "jodi"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 2
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Net Art Browser

> The browser is the material: show its defaults, its errors and its source as the work itself.

Art made inside the browser from raw HTML: default grey ground, blue links, Times text, broken frames and visible code. The net.art artists of the 1990s used the window as the canvas.

**Period:** 1994–2001 · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Browser art, net.art, Default HTML art

## When to load this skill

Load it when the user asks for: "net art", "net.art", "default html", "browser art", "raw html", "view source", "1990s web art", "jodi".

Good for: art project pages and festival sites, conceptual portfolios, critique of web design, exhibition sites for digital art, developer humour pages.

Do not use it when:
- The page must sell a product.
- The audience needs clear and friendly navigation.
- The brand needs trust and polish.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Net Art Browser, you MUST:

1. Keep the browser defaults: Times text at 16px, blue links (#0000EE), visited links (#551A8B) and a margin of 8px.
2. Choose one ground: white (#FFFFFF), default grey (#C0C0C0) or black with green text (#00FF00).
3. Split the window with nested frames at 1px borders, and let one frame show an error or the raw source.
4. Set text as plain lines of 60 to 80 characters; use no images, or use 1 stretched GIF.
5. Make links the only navigation; name them with single words or with the URL itself.
6. Show the code: print a block of HTML, a status line or an error message as visible content.
7. Let colour and size glitch: one line in 72px bold red (#FF0000) among 16px black text.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Polished brand identity and logos.
- **NEVER:** Soft shadows, gradients and rounded cards.
- **NEVER:** Navigation bars with icons.
- **NEVER:** Stock photography.
- **NEVER:** Responsive grid systems.
- **NEVER:** Custom fonts with fine tracking.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single flowing column that fills the window; frames split it at 50% or 33% with visible 1px borders.
- **Whitespace ratio:** 60% to 90% of the page is empty ground; the spacing is the browser default of 8px and 16px.
- **Alignment rules:** Everything flush left and top; text wraps at the window edge with no max width.
- **Container geometry:** Raw rectangles with a 0px radius; frames and tables show their borders at 1px.

## Typography

- **Classifications:** default serif · default sans · monospace
- **Tracking:** Display 0em; body 0em; keep the defaults.
- **Leading:** Display 1.15; body 1.2.
- **Hierarchy rules:**
  - Use 16px for body text and 32px bold for a single heading.
  - Use underline and colour for links and nothing else for emphasis.
  - Use bold and italic as the only weights.
  - Show errors in monospace at 14px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Tinos | Tinos | Tinos is the open look-alike of Times, the default browser face. |
| Arimo | Courier Prime | Arimo is the open look-alike of Arial; Courier Prime serves the code and the log lines. |
| Cousine | Tinos | A mono display over default text. |

## Colour & lighting

- **Palette structure:** The default web colours: white or grey ground, black text, blue and purple links, one pure accent.
- **Contrast rules:** Black on white is 21:1; link blue on white is 8:1; green on black is 15:1; red is for lines of 24px or more.
- **Surface treatment:** Flat colour with no gradient; the window background colour is the only surface.
- **Light and shadow:** No light and no shadow; borders are 1px solid lines or the old 2px inset.

**Palette**

| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | background |
| Default Grey | `#C0C0C0` | frame ground |
| Black | `#000000` | text |
| Link Blue | `#0000EE` | link |
| Visited Purple | `#551A8B` | visited link |
| Error Red | `#FF0000` | accent |
| Terminal Green | `#00FF00` | accent on black |

## Materiality & texture

- **Surface simulation:** The default browser page: no skin, no material.
- **Border rules:** A 1px solid black line on frames and tables; a 2px inset line only on form fields.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** No icon set; use text links, the broken-image mark and the 16px favicon default.
- **Illustration:** No illustration; use the code, a stretched 1px GIF, a table of random numbers or a screenshot of an error dialog.
- **Decorative elements:** visible source code · broken frame · default link colours · error message · scrolling status bar text

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Pages change with a hard cut on each click; one meta refresh at 5s replaces the page; no easing.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 0
- **Hover and active:** Hover shows the default pointer and the link target in the status bar; the active link turns red (#FF0000).

## Code & token primer

Set `data-style="net-art-browser"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="net-art-browser"] {
  --color-bg: #FFFFFF;
  --color-surface: #C0C0C0;
  --color-text: #000000;
  --color-muted: #555555;
  --color-primary: #0000EE;
  --color-accent: #FF0000;
  --color-border: #000000;
  --font-sans: "Tinos", "Times New Roman", serif;
  --font-display: "Tinos", "Times New Roman", serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 0ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #000000;
  --color-on-surface: #000000;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #000000;
  --color-muted-on-bg: #555555;
  --color-muted-on-surface: #3A3A3A;
  --color-link: #0000EE;
  --color-link-on-surface: #0000EE;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.2;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-black font-serif px-2` |
| heading | `text-3xl font-bold leading-tight` |
| body | `text-base leading-[1.2]` |
| section | `border border-black bg-[#C0C0C0]` |
| button | `rounded-none border border-black bg-[#C0C0C0] px-2 py-0.5 text-base` |
| label | `text-sm font-mono` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Plain square pixel marks keep the raw, unstyled feel of default HTML. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.15, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.2.
- **Page:** hero stacked, left aligned, airy density, accent tilt 0°.
- **Ground:** raw. The ground is the bare browser window with no pattern. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Browser default rendering (skill)

Using the raw look of a browser, with no style sheet, as the surface of a work. Origin: internet, web, 1994.

- Keep the default Times 16px text and blue links.
- Choose one flat ground: white, grey or black.
- Show a frame, an error or the source as visible content.
- Add no images, or one stretched GIF.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Rhizome** (platform, New York, 1996–now), published the style. An online platform for new media art. It hosted a mailing list, an archive and the work of net artists.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0000EE | #0000EE, #000000, #00FF00 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF0000 | #FF0000, #00FF00, #551A8B | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.067–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more homepage**: move toward [`geocities-homepage`](../geocities-homepage/SKILL.md) (GeoCities Homepage). Add a tiled background, a counter and an under-construction sign.
- If the user asks for **cleaner**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Keep the empty ground and swap the defaults for one chosen type face.
- If the user asks for **more machine**: move toward [`ansi-bbs-art`](../ansi-bbs-art/SKILL.md) (ANSI BBS Art). Move to a black text grid with 16 ANSI colours.

- **Came from (go here for a more orthodox version):** [`ansi-bbs-art`](../ansi-bbs-art/SKILL.md)
- **Mixes well with:** [`cyberdelia`](../cyberdelia/SKILL.md), [`geocities-homepage`](../geocities-homepage/SKILL.md)
- **Nearest by vector profile:** [`brutalist-web`](../brutalist-web/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md), [`rage-comic`](../rage-comic/SKILL.md)

## Emotional target

The viewer feels unsure whether the page is broken or planned, and then sees the idea.

**Keywords:** raw, conceptual, glitchy, ironic, early-net, minimal · **Brand archetypes:** outlaw, sage, jester

## Sources

- [Wikipedia: Net.art](https://en.wikipedia.org/wiki/Net.art)
- [Rhizome: net art](https://rhizome.org/)
- [Wikipedia: Jodi (art collective)](https://en.wikipedia.org/wiki/Jodi_(art_collective))

---

Generated from [`data/internet/styles/net-art-browser.json`](../../data/internet/styles/net-art-browser.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
