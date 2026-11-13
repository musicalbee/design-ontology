---
name: bento-grid-ui
description: "Apply the Bento Grid UI style (2022–present) when generating UI or graphic layouts. Load when the user asks for: bento, bento grid, bento box layout, card grid, feature grid, modular cards."
domain: design
era: contemporary-spatial
triggers:
  - "bento"
  - "bento grid"
  - "bento box layout"
  - "card grid"
  - "feature grid"
  - "modular cards"
  - "apple-style features"
  - "tiled layout"
  - "dashboard tiles"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 5
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Bento Grid UI

> A page is easiest to scan when every idea sits in its own compartment and the compartments tile one tight, regular grid.

A rectangular grid of rounded cells of mixed spans, each holding one idea, with equal small gaps between them. Apple feature pages made it the default product layout from 2022.

**Period:** 2022–present · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Bento Layout, Bento Box Grid, Modular Card Grid

## When to load this skill

Load it when the user asks for: "bento", "bento grid", "bento box layout", "card grid", "feature grid", "modular cards", "apple-style features", "tiled layout", "dashboard tiles".

Good for: product feature pages, SaaS landing pages, personal portfolios, app dashboards, release notes pages.

Do not use it when:
- The content is long-form prose, because cells of at most 30 words break an argument into fragments.
- The items have a strict order or a ranking that a reader must follow from top to bottom.
- The content is uneven or sparse, because a grid with fewer than 5 cells leaves visible holes.

## System directives

When generating UI or graphic layouts in Bento Grid UI, you MUST:

1. Divide the page into a 4-column or 12-column grid and let each cell span 1, 2 or 3 columns and 1 or 2 rows.
2. Keep one uniform gap of 12px to 16px between all cells, and never mix gap sizes.
3. Give every cell a radius of 20px to 28px and use the same radius on all cells of a page.
4. Put one message in each cell: a headline of at most 8 words, one visual or one number.
5. Make the feature cell 2 by 2 and fill the other cells at 1 by 1 or 2 by 1, so that sizes give the order of importance.
6. Fill cells with 2 to 4 tints of one family, plus one or two cells in the accent colour.
7. Align cell contents to the same inner padding of 24px, and anchor text at the top left or the bottom left.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Gaps of different sizes between cells in one grid.
- **NEVER:** Empty holes in the grid that break the rectangle.
- **NEVER:** Cells with different corner radii on one page.
- **NEVER:** Several messages or calls to action in one cell.
- **NEVER:** More than 8 cells in the first viewport.
- **NEVER:** Heavy borders or hard shadows that fight the tiling.
- **NEVER:** Paragraphs of more than 30 words inside a cell.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 4-column grid on desktop with 16px gaps and rows of 200px to 280px; cells span 1 to 3 columns and 1 to 2 rows, and the grid collapses to 1 or 2 columns below 768px.
- **Whitespace ratio:** Gaps take 5–8% of the area; open space moves inside the cells, where padding is 24px to 32px; the spacing scale is 8, 12, 16, 24, 32 and 64px.
- **Alignment rules:** Cell edges align to the grid on both axes; text inside a cell is left-aligned and anchored to the top or the bottom; the whole bento block is centred in a container of 1120px to 1280px.
- **Container geometry:** Cells are rounded rectangles with a 24px radius and no outer margin; the cell aspect ratios are 1:1, 2:1 and 1:2, and the visuals inside are clipped to the same radius.

## Typography

- **Classifications:** neo-grotesque sans · geometric sans
- **Tracking:** Display sizes take -0.03em; body stays at 0; small captions take +0.01em.
- **Leading:** Display 1.05 to 1.15; body 1.45; captions 1.3.
- **Hierarchy rules:**
  - Set the feature cell headline at 40px to 56px, other headlines at 20px to 28px and captions at 14px.
  - Use weight 600 for headlines and 400 for captions; use a muted colour at 4.5:1 for secondary lines.
  - Limit a headline to 8 words and a caption to 20 words, because the cell has little room.
  - Pair a large number at 64px or more with a 14px caption for each key metric.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter Tight | Inter | Tight display sizes for short cell headlines. |
| Geist | Geist | A single family at weights 400, 500 and 600. |
| Plus Jakarta Sans | Inter | A warmer display face for consumer products. |

## Colour & lighting

- **Palette structure:** A neutral page, cells in two to four tints of one family at low saturation, and one or two accent cells that cover about 15% of the grid.
- **Contrast rules:** Ink on Cell gives about 17:1 and Graphite on Cell gives about 5:1; white text on Accent Blue gives about 4.7:1, which passes WCAG AA for body text; keep every cell pair at 4.5:1 or better.
- **Surface treatment:** Flat or near-flat fills; cells may hold a photograph, a product render or a gradient of two close tints, and a cell never mixes more than one surface type.
- **Light and shadow:** Mostly none; an optional 0 1px 2px rgba(0, 0, 0, 0.06) shadow or a 1px border of rgba(0, 0, 0, 0.06) separates white cells from the page.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Page | `#F5F5F7` | page background |
| Cell | `#FFFFFF` | default cell fill |
| Cell Tint | `#E8E8ED` | secondary cell fill |
| Ink | `#1D1D1F` | text |
| Graphite | `#6E6E73` | secondary text |
| Accent Blue | `#0071E3` | accent cell and links |
| Night | `#000000` | dark cell fill |

## Materiality & texture

- **Surface simulation:** None; the cells read as compartments of a lacquered lunch box, but the surface is flat colour or imagery and imitates no material.
- **Border rules:** No border by default; a 1px solid rgba(0, 0, 0, 0.06) border appears where a white cell sits on a white page; dark mode uses 1px rgba(255, 255, 255, 0.1).
- **Blur and elevation:** Blur is 0px by default; elevation is limited to a 0 1px 2px shadow on the page and a 0 12px 32px rgba(0, 0, 0, 0.12) lift on hover.

## Ornamentation & iconography

- **Iconography:** Simple icons with a 1.5px to 2px stroke and round caps at 24px to 32px, in Ink or in white on accent cells; one icon at most per cell.
- **Illustration:** Product renders, UI screenshots and large numbers, cropped to the cell radius; abstract gradients fill empty cells.
- **Decorative elements:** feature cell at 2 by 2 · oversized metric numerals · UI screenshot crops · pill tags · gradient cells

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Cells enter in a stagger of 40ms to 60ms, fading in and rising 12px; on hover a cell scales to 1.02 and its shadow deepens; neighbours do not move.
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Duration (ms):** 350
- **Hover and active:** Hover scales the cell to 1.02 and adds a 0 12px 32px rgba(0, 0, 0, 0.12) shadow; active scales to 0.98; focus adds a 2px Accent Blue ring offset by 2px.

## Code & token primer

Set `data-style="bento-grid-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="bento-grid-ui"] {
  --color-bg: #F5F5F7;
  --color-surface: #FFFFFF;
  --color-text: #1D1D1F;
  --color-muted: #6E6E73;
  --color-primary: #1D1D1F;
  --color-accent: #0071E3;
  --color-border: rgba(0, 0, 0, 0.06);
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Inter Tight", "Inter", system-ui, sans-serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 1px 2px rgba(0, 0, 0, 0.06);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 350ms;
  --grid-gap: 16px;
  --cell-padding: 24px;
  --color-on-bg: #1D1D1F;
  --color-on-surface: #1D1D1F;
  --color-on-primary: #F5F5F7;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #6E6E73;
  --color-muted-on-surface: #6E6E73;
  --color-link: #1D1D1F;
  --color-link-on-surface: #0071E3;
  --display-weight: 600;
  --display-tracking: -0.03em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1.75;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased p-4 md:p-8` |
| grid | `mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px]` |
| card | `rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition duration-[350ms] hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]` |
| feature card | `rounded-3xl bg-[#0071E3] p-8 text-white sm:col-span-2 sm:row-span-2` |
| heading | `font-semibold text-2xl leading-[1.1] tracking-[-0.03em]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.75 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A plain round line at one weight: quiet in a cell, the default of current product interfaces. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.03em, leading 1.05, case: none.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
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

- If the user asks for **more orderly**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Set the radius to 0px, remove cell fills and divide cells with 1px rules; keep the 12-column grid and the type scale.
- If the user asks for **glassier**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Fill cells with rgba(255, 255, 255, 0.18) and backdrop-filter blur(20px) over a gradient page; keep the gaps and the radius.
- If the user asks for **bolder**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Add a 3px black border and a 4px 4px 0 0 #000000 shadow, and fill cells with loud flat hues; keep the grid and the 16px gap.
- If the user asks for **flatter**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Remove the shadows and borders, and use solid cell fills with no photography; keep the 24px radius and the gap.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Mixes well with:** [`glassmorphism`](../glassmorphism/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Nearest by vector profile:** [`bauhaus`](../bauhaus/SKILL.md), [`material-design`](../material-design/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)

## Emotional target

Ordered curiosity: the viewer feels that the product is organised, compact and easy to scan in seconds.

**Keywords:** organised, compact, scannable, tidy, product-led, friendly · **Brand archetypes:** creator, sage

## Sources

- Apple product pages, Apple Inc. (2022)
- Bento Grids, Bentogrids.com gallery, curated by Daniel Gao (2023)

---

Generated from [`data/design/styles/bento-grid-ui.json`](../../data/design/styles/bento-grid-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
