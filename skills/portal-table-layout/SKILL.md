---
name: portal-table-layout
description: "Apply the Portal Table Layout style (1997–2006) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: web portal, start page, link directory, table layout, late 90s portal, search portal."
domain: internet
era: postmodern-early-digital
triggers:
  - "web portal"
  - "start page"
  - "link directory"
  - "table layout"
  - "late 90s portal"
  - "search portal"
  - "dotcom"
  - "banner ad"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 1
---

# Portal Table Layout

> One page holds the whole web: pack every service, link and ad into a clear table of boxes.

A dense start page in HTML tables: a search box, a link directory, news boxes, banner ads and a blue and orange palette. Web portals of the late 1990s used it to keep a user on one site.

**Period:** 1997–2006 · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Web portal, Table layout, Directory page

## When to load this skill

Load it when the user asks for: "web portal", "start page", "link directory", "table layout", "late 90s portal", "search portal", "dotcom", "banner ad".

Good for: directory and news pages in a retro style, dotcom-era brand pastiche, dense link hubs and intranets, parody of early commercial web, archive and wiki-style indexes.

Do not use it when:
- The page needs a single clear action.
- The device is a phone and the reading is quick.
- The brand needs a premium, calm tone.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Portal Table Layout, you MUST:

1. Build the page with nested HTML tables at 760px to 800px wide, centred, with 1px to 2px cell spacing.
2. Place the logo and a search box with a button in a header row of 60px to 80px, over a tab row of 24px.
3. Set a link directory in 2 or 3 columns of 11px to 12px text with bold category names.
4. Give each box a title bar of 18px to 22px in a light blue band (#99CCFF) with bold dark blue text.
5. Add a banner of 468px by 60px at the top and a skyscraper of 120px by 600px on the right.
6. Set all links in blue (#0000CC) with underline, and show the visited links in purple.
7. Use spacer images and a 1px line in grey (#999999) to hold the cell widths.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Large empty areas around content.
- **NEVER:** One focal image and a short text.
- **NEVER:** Hidden menus behind icons.
- **NEVER:** Fluid, responsive layouts.
- **NEVER:** Light, thin type at large sizes.
- **NEVER:** Soft shadows and rounded cards.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A fixed table of 760px to 800px with 2 to 3 columns of 150px, 300px and 150px; cell spacing 2px and cell padding 4px.
- **Whitespace ratio:** 5% to 10% of the surface is empty; the spacing scale is 2, 4 and 8px.
- **Alignment rules:** Text flush left in boxes; the logo and the search centred in the header.
- **Container geometry:** Rectangular table cells with a 0px radius and a 1px line; boxes stack with a 4px gap.

## Typography

- **Classifications:** humanist sans · default sans
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.2; body 1.3.
- **Hierarchy rules:**
  - Use 11px to 12px for link lists and 14px bold for box titles.
  - Use 24px bold for the logo word only.
  - Use bold for category names and plain text for items.
  - Use blue for links and red for 'new' tags.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Arimo | Arimo | Arimo is an open look-alike of Arial and Helvetica, the portal text face. |
| Noto Sans | Noto Sans | A neutral open face that stands in for Verdana at 11px. |
| Open Sans | Arimo | A clean display over small text. |

## Colour & lighting

- **Palette structure:** White ground, one blue, one orange accent and a pale blue band for box titles.
- **Contrast rules:** Ink on white is 17:1; link blue on white is 11:1; dark blue on pale blue is 7:1.
- **Surface treatment:** Flat colour in cells; a thin 1px line and a pale band for headers; no gradient or at most a 2-stop button.
- **Light and shadow:** No light source; one 1px outset on buttons and no drop shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | background |
| Pale Blue | `#99CCFF` | title band |
| Portal Blue | `#003399` | heading |
| Link Blue | `#0000CC` | link |
| Orange | `#FF6600` | accent |
| Light Grey | `#EEEEEE` | panel |
| Line Grey | `#999999` | border |
| Ink | `#1A1A1A` | text |

## Materiality & texture

- **Surface simulation:** A printed directory page: flat boxes and lines on a white sheet.
- **Border rules:** A 1px solid grey line around each box; a 1px outset on buttons.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** Small 16px GIF icons for mail, news and weather; tab shapes with square corners.
- **Illustration:** Banner ads, a small photo for the lead story and a text logo; almost no decoration.
- **Decorative elements:** tab row · search box · link directory · banner ad · news box

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Pages load by hard cut; the only motion is a rotating banner that swaps every 10s with no easing.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 0
- **Hover and active:** Hover keeps the underline and turns a link to red (#CC0000); the pressed button shows a 1px inset.

## Code & token primer

Set `data-style="portal-table-layout"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="portal-table-layout"] {
  --color-bg: #FFFFFF;
  --color-surface: #EEEEEE;
  --color-text: #1A1A1A;
  --color-muted: #555555;
  --color-primary: #003399;
  --color-accent: #FF6600;
  --color-border: #999999;
  --font-sans: "Arimo", "Noto Sans", Arial, sans-serif;
  --font-display: "Arimo", "Open Sans", Arial, sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 0ms;
  --type-ratio: 1.125;
  --size-small: 12.44px;
  --size-h3: 17.72px;
  --size-h2: 19.93px;
  --size-h1: 22.43px;
  --color-on-bg: #1A1A1A;
  --color-on-surface: #1A1A1A;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #1A1A1A;
  --color-muted-on-bg: #555555;
  --color-muted-on-surface: #555555;
  --color-link: #003399;
  --color-link-on-surface: #003399;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.3;
  --body-size: 14px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 0 0 / 100% 6px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 0 8px / 100% 2px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 66% 0 / 2px 100% no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 8%, transparent), color-mix(in oklab, var(--color-primary) 8%, transparent)) 100% 0 / 34% 100% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 12%, transparent) 0 1px, transparent 1px 1.6rem),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 10%, transparent) 0 1px, transparent 1px 25%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#1A1A1A] font-sans px-2` |
| heading | `text-2xl font-bold text-[#003399]` |
| body | `text-sm leading-[1.3] max-w-[800px]` |
| section | `border border-[#999999] bg-[#EEEEEE]` |
| button | `rounded-none border border-[#999999] bg-[#99CCFF] px-3 py-1 text-xs font-bold text-[#003399]` |
| label | `text-xs font-bold text-[#003399]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Small square marks match the 16px GIF icons of a portal. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.2, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 14px, leading 1.3.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** rules. The ground is white with thin grey rules between table cells. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### HTML table layout (technology)

Using nested HTML tables, with clear 1px spacer images, to place boxes on a page. Origin: internet, United States, c. 1995.

- Set a table of 760px to 800px and centre it.
- Nest tables for each column and each box, with 2px spacing and 4px padding.
- Use a 1px clear GIF to hold the width of a cell.
- Split the page into a header row, a link column and a content column.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Yahoo!** (platform, web, 1994–now), launched the style. A link directory that grew into a web portal with search, mail and news on one page.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #003399 | #003399, #0000CC, #CC0000 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF6600 | #FF6600, #99CCFF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–2 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.125 | 1.067–1.25 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more fun**: move toward [`geocities-homepage`](../geocities-homepage/SKILL.md) (GeoCities Homepage). Replace the blue table with a tiled background, GIFs and a counter.
- If the user asks for **more gloss**: move toward [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md) (Web 2.0 Gloss). Round the boxes, add 2-stop gradient titles and a reflection under the logo.
- If the user asks for **calmer**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Keep the search box and remove the link wall and the ads.

- **Rejects (the opposite pole; do not blend):** [`geocities-homepage`](../geocities-homepage/SKILL.md)
- **Was rejected by:** [`flash-intro-site`](../flash-intro-site/SKILL.md), [`myspace-profile`](../myspace-profile/SKILL.md), [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md)
- **Mixes well with:** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Nearest by vector profile:** [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md), [`normcore`](../normcore/SKILL.md)

## Emotional target

The viewer feels in control: everything is on one page, and every box has a purpose.

**Keywords:** dense, busy, practical, corporate, informational, early-web · **Brand archetypes:** ruler, sage, everyman

## Sources

- [Wikipedia: Web portal](https://en.wikipedia.org/wiki/Web_portal)
- [Wikipedia: Table (HTML)](https://en.wikipedia.org/wiki/HTML_table)
- [Wikipedia: Yahoo!](https://en.wikipedia.org/wiki/Yahoo!)

---

Generated from [`data/internet/styles/portal-table-layout.json`](../../data/internet/styles/portal-table-layout.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
