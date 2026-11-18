---
name: brutalist-web
description: "Apply the Brutalist Web (2014) style (2014–now) when generating UI or graphic layouts. Load when the user asks for: brutalist website, brutalist web, raw html, default browser style, anti-design web, no css."
domain: design
era: touchscreen
triggers:
  - "brutalist website"
  - "brutalist web"
  - "raw html"
  - "default browser style"
  - "anti-design web"
  - "no css"
  - "monospace page"
  - "plain html"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 2
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Brutalist Web (2014)

> A page is a document, not a product: show the raw structure and the web serves the reader without decoration.

Browser-default type, blue underlined links, grey or white ground, no polish and visible structure. It came from the 2014 Brutalist Websites collection and answers the smooth, templated web.

**Period:** 2014–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Brutalist websites, Raw HTML web, Default-browser style

## When to load this skill

Load it when the user asks for: "brutalist website", "brutalist web", "raw html", "default browser style", "anti-design web", "no css", "monospace page", "plain html".

Good for: personal sites and blogs, art and archive projects, documentation with no frills, studio and gallery portfolios, protest and manifesto pages.

Do not use it when:
- The product needs trust through polish.
- The audience expects a smooth, branded commerce flow.
- The page needs rich imagery or video.

## System directives

When generating UI or graphic layouts in Brutalist Web (2014), you MUST:

1. Use the browser default: black text on white (#FFFFFF) or grey (#C0C0C0), links #0000EE, visited links #551A8B, underlined.
2. Set body text in a default serif or a monospace at 16px with a 1.3 to 1.5 line height and a measure above 80 characters or full width.
3. Build the layout from plain blocks: tables, lists and rules of 1px to 2px; no more than 2 columns.
4. Use a single heading size jump of 2x: 16px body and 32px headings, in bold, no tracking.
5. Show structure: visible borders of 1px, a hard 2px rule between sections and raw URLs in text.
6. Make every interactive element a native control: default button, default input, default checkbox, 0 custom styling beyond a 1px border.
7. Use no more than 2 colours plus link blue, and no transitions.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Rounded corners, shadows and gradients.
- **NEVER:** Custom web fonts beyond one monospace or serif.
- **NEVER:** Hero sections with a stock photograph.
- **NEVER:** Smooth scroll effects and entrance animations.
- **NEVER:** Icon sets and illustration.
- **NEVER:** Card layouts with equal tiles and padding above 24px.
- **NEVER:** Cookie-cutter SaaS sections.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single flow of blocks and tables with no declared grid; at most 2 columns made from a table or float, and a max width of 100% of the viewport.
- **Whitespace ratio:** 10% to 20% of the surface stays empty; spacing is 8px and 16px only, close to the browser default.
- **Alignment rules:** Flush left; no centring except a full-width title; elements stack in source order.
- **Container geometry:** Rectangles with a 0px radius and a 1px solid black border; tables and horizontal rules separate content.

## Typography

- **Classifications:** default serif · monospace
- **Tracking:** All tracking stays at 0.
- **Leading:** Display 1.2; body 1.4.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use two sizes: 16px and 32px. · Set headings in the same face as body. · Show links by underline and blue only.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Tinos | Tinos | A metric match to Times New Roman, the browser default. |
| Space Mono | Space Mono | A monospace that gives the page a raw, terminal feel. |
| Courier Prime | Tinos | A typewriter display with a serif text face. |

## Colour & lighting

- **Palette structure:** White or grey, black text and default blue links; one loud colour may fill a block.
- **Contrast rules:** Black on white holds 21:1; link blue on white holds 8.6:1.
- **Surface treatment:** Flat, opaque, no texture; the default white or grey of the browser.
- **Light and shadow:** No light source and no shadow on any element.

**Palette**

| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | background |
| Black | `#000000` | text and rules |
| Link Blue | `#0000EE` | links and accent |
| Visited | `#551A8B` | visited links |
| Grey | `#C0C0C0` | alternate surface |

## Materiality & texture

- **Surface simulation:** Raw HTML: the page does not imitate any material.
- **Border rules:** 1px solid black on tables and boxes; 2px rules between sections.
- **Blur and elevation:** No blur. No elevation. Shadow is none on every element.

## Ornamentation & iconography

- **Iconography:** Icons are replaced by text labels; if one is needed, use a 1px-stroke square pictogram.
- **Illustration:** None; use a single plain image with no frame, or ASCII art.
- **Decorative elements:** horizontal rule · table border · raw link list · ASCII art

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** No motion; state changes are immediate with 0ms transition.
- **Easing:** linear
- **Duration (ms):** 0
- **Hover and active:** Hover keeps the default pointer and underline; active state shows the default red (#EE0000) link.

## Code & token primer

Set `data-style="brutalist-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="brutalist-web"] {
  --color-bg: #FFFFFF;
  --color-surface: #C0C0C0;
  --color-text: #000000;
  --color-muted: #3A3A3A;
  --color-primary: #000000;
  --color-accent: #0000EE;
  --color-border: #000000;
  --font-sans: "Tinos", "Times New Roman", Times, serif;
  --font-display: "Tinos", "Times New Roman", serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: linear;
  --duration: 0ms;
  --color-on-bg: #000000;
  --color-on-surface: #000000;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #3A3A3A;
  --color-muted-on-surface: #3A3A3A;
  --color-link: #0000EE;
  --color-link-on-surface: #0000EE;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 1;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-black font-serif antialiased p-4` |
| heading | `text-[32px] font-bold leading-[1.2]` |
| body | `text-base leading-[1.4]` |
| section | `border-t-2 border-black pt-4 mt-8` |
| button | `rounded-none border border-black bg-[#C0C0C0] px-3 py-1 text-base text-black` |
| label | `text-base font-bold` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Carbon (Regular) by IBM, licence Apache 2.0. Reason: A thin square line with butt terminals; the thinnest family that still reads as a plain pictogram. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.2, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.4.
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

- If the user asks for **softer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Add a 12-column grid, one neo-grotesque face and generous space; keep the 1px rules.
- If the user asks for **louder**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Add 3px borders, hard shadows and one saturated colour block.
- If the user asks for **more rebellious**: move toward [`anti-design`](../anti-design/SKILL.md) (Anti-Design). Break the alignment, overlap blocks and mix 3 faces.

- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md), [`material-design`](../material-design/SKILL.md)
- **Mixes well with:** [`anti-design`](../anti-design/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md)
- **Kin in another domain:** [`brutalist-architecture`](../brutalist-architecture/SKILL.md)
- **Nearest by vector profile:** [`flat-design`](../flat-design/SKILL.md), [`corporate-memphis`](../corporate-memphis/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md)

## Emotional target

The viewer feels honesty and friction: the page does not try to sell.

**Keywords:** raw, honest, austere, anti-polish, utilitarian, stubborn · **Brand archetypes:** outlaw, sage

## Sources

- Pascal Deville, brutalistwebsites.com (2014)
- Brutalist Websites collection

---

Generated from [`data/design/styles/brutalist-web.json`](../../data/design/styles/brutalist-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
