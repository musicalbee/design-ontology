---
name: japanese-dense-web
description: "Apply the Japanese Dense Web style (1999–now) when generating UI or graphic layouts. Load when the user asks for: japanese web, japanese portal, dense layout, yahoo japan, rakuten, information dense."
domain: design
era: postmodern-early-digital
triggers:
  - "japanese web"
  - "japanese portal"
  - "dense layout"
  - "yahoo japan"
  - "rakuten"
  - "information dense"
  - "banner rows"
  - "ranking list"
vector_profile:
  ornamentation: 4
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Japanese Dense Web

> Density is hospitality: show all the options at once, so the visitor never has to search.

Dense pages with many links, small type, bright accent colours, banners, ranking lists and tight grids. It grew from portals such as Yahoo! JAPAN and Rakuten and makes a page rich in choice.

**Period:** 1999–now · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Information-dense web, Portal style, Japanese portal design

## When to load this skill

Load it when the user asks for: "japanese web", "japanese portal", "dense layout", "yahoo japan", "rakuten", "information dense", "banner rows", "ranking list".

Good for: commerce and marketplace portals, news and media portals, price and review comparison sites, campaign and sale pages, local-service directories.

Do not use it when:
- The brand needs a premium, calm look.
- The page has one task and one action.
- The audience reads on a very small screen with big type needs.

## System directives

When generating UI or graphic layouts in Japanese Dense Web, you MUST:

1. Pack 6 to 12 content blocks above the fold, each with a title row of 28px to 32px and 5 to 10 links beneath.
2. Set text at 12px to 14px with a leading of 1.5 to 1.7; keep headings at 14px to 18px and bold.
3. Use a tight grid with 8px gutters and block padding of 8px to 12px; borders of 1px in light grey separate blocks.
4. Mark categories with bright accent colours (red #E60012, orange, blue #0A58CA) in 3px to 4px header bars.
5. Show ranking numbers (1 to 10), price, discount badge and star ratings in small bright elements of 12px to 16px.
6. Add 3 or more banners of 300px to 728px width in rows, and a sticky bar for search and cart of 48px to 56px height.
7. Keep a clear text-first path: every block has a text link, and images are small thumbnails of 64px to 120px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Large empty hero sections with one headline.
- **NEVER:** Single call to action per screen.
- **NEVER:** Thin light type at 16px or above for everything.
- **NEVER:** One-column minimal layouts.
- **NEVER:** Hidden navigation behind a single menu icon.
- **NEVER:** Large padding above 24px.
- **NEVER:** Monochrome palettes with no accent colours.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A modular grid of 4 to 6 columns with 8px gutters; blocks of 160px to 320px width stack in rows; side columns of 180px hold categories and rankings.
- **Whitespace ratio:** 5% to 15% of the surface stays empty; the spacing scale is 4, 8, 12 and 16px.
- **Alignment rules:** Flush left; numbers right-aligned; tags and badges inline; banners centred in their row.
- **Container geometry:** Rectangles with a 0px to 4px radius and a 1px border in #DDDDDD; header bars of 3px to 4px colour above blocks.

## Typography

- **Classifications:** humanist sans serif · CJK sans serif
- **Tracking:** Tracking stays at 0 to +0.02em; small text takes +0.02em.
- **Leading:** Display 1.4; body 1.6.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use sizes 12, 14, 16 and 20px. · Set the titles of blocks at 14px bold. · Set prices in bold red at 16px to 20px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Noto Sans JP | Noto Sans JP | A single family with full Japanese coverage for tight small text. |
| M PLUS 1p | Noto Sans JP | A friendlier gothic that stays clear at 12px. |
| Noto Sans | Noto Sans JP | A Latin and CJK pair for mixed text. |

## Colour & lighting

- **Palette structure:** White ground with bright category colours and red for price and promotion.
- **Contrast rules:** Ink on paper holds 16:1; red on paper holds at least 4.5:1 for 14px bold and larger; link blue holds at least 7:1.
- **Surface treatment:** Flat, opaque fields; small gradient on a header bar or button is allowed (2 stops).
- **Light and shadow:** None; a 1px grey border separates blocks.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#FFFFFF` | background |
| Ink | `#222222` | text |
| Signal Red | `#E60012` | price and primary |
| Link Blue | `#0A58CA` | links |
| Grey | `#F2F2F2` | block surface |
| Gold | `#F5A623` | ranking and accent |

## Materiality & texture

- **Surface simulation:** Print flyers, catalogues and magazines, shown flat on screen.
- **Border rules:** 1px solid #DDDDDD around blocks; 3px to 4px colour bars on headers.
- **Blur and elevation:** No blur. No elevation. A 1px shadow only on sticky bars.

## Ornamentation & iconography

- **Iconography:** Small 16px to 20px solid or outline pictograms with a 1.5px stroke, used as inline labels; badges and arrows in text.
- **Illustration:** Product thumbnails, banners, character mascots and ranking badges in flat colour.
- **Decorative elements:** ranking list · colour header bar · banner row · price badge · sticky search bar

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Little motion; banners cycle every 5s with a 300ms slide; hover changes the link colour at once.
- **Easing:** linear
- **Duration (ms):** 150
- **Hover and active:** Hover underlines a link and turns it red (#E60012); active state darkens a button by 10%.

## Code & token primer

Set `data-style="japanese-dense-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="japanese-dense-web"] {
  --color-bg: #FFFFFF;
  --color-surface: #F2F2F2;
  --color-text: #222222;
  --color-muted: #5A5A5A;
  --color-primary: #E60012;
  --color-accent: #0A58CA;
  --color-border: #DDDDDD;
  --font-sans: "Noto Sans JP", "Noto Sans", sans-serif;
  --font-display: "Noto Sans JP", "Noto Sans", sans-serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: linear;
  --duration: 150ms;
  --color-on-bg: #222222;
  --color-on-surface: #222222;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #5A5A5A;
  --color-muted-on-surface: #5A5A5A;
  --color-link: #0A58CA;
  --color-link-on-surface: #0A58CA;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.4;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 14px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#222222] font-sans text-sm leading-[1.6] antialiased px-2 md:px-4` |
| heading | `text-lg font-bold leading-[1.4] border-t-4 border-[#E60012] pt-2` |
| body | `text-sm leading-[1.6]` |
| section | `border border-[#DDDDDD] bg-white p-2` |
| button | `rounded-sm bg-[#E60012] px-4 py-2 text-sm font-bold text-white transition-colors duration-150 hover:brightness-90` |
| label | `text-xs font-bold text-[#5A5A5A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 1.5 on a 24px field, round caps, round joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: A compact, solid family that stays clear at 16px beside 12px to 14px text. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.4, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 14px, leading 1.6.
- **Page:** hero split, left aligned, compact density, accent tilt 0°.
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

- If the user asks for **calmer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Cut to 3 blocks, raise type to 16px and set 24px gutters; keep one red accent.
- If the user asks for **more modern**: move toward [`bento-grid-ui`](../bento-grid-ui/SKILL.md) (Bento Grid UI). Put blocks in cells with a 12px radius and a 1px border; keep the density.
- If the user asks for **more playful**: move toward [`memphis-design`](../memphis-design/SKILL.md) (Memphis Design). Add pastel fills and squiggle patterns to the header bars.

- **Rejects (the opposite pole; do not blend):** [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`art-deco-web`](../art-deco-web/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)

## Emotional target

The viewer feels abundance, convenience and a sense that everything is at hand.

**Keywords:** abundant, convenient, busy, friendly, practical, lively · **Brand archetypes:** everyman, caregiver

## Sources

- Example: Yahoo! JAPAN top page (1999–2025)
- Example: Rakuten Ichiba (2000–2025)
- Example: Kakaku.com and Livedoor-era portals

---

Generated from [`data/design/styles/japanese-dense-web.json`](../../data/design/styles/japanese-dense-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
