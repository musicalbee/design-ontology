---
name: swiss-international
description: "Apply the Swiss International Style style (1950s–1970s) when generating UI or graphic layouts. Load when the user asks for: swiss, swiss style, international style, helvetica, grid-based, minimal editorial."
domain: design
era: modernist
triggers:
  - "swiss"
  - "swiss style"
  - "international style"
  - "helvetica"
  - "grid-based"
  - "minimal editorial"
  - "clean and typographic"
  - "modernist"
  - "müller-brockmann"
  - "poster-like"
  - "neutral corporate"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Swiss International Style

> Design is a neutral carrier of information, and a mathematical grid makes that neutrality visible.

Asymmetric layouts on a mathematical grid, one neo-grotesque sans serif, flush-left text and objective photography. It came out of Zurich and Basel in the 1950s and became the default language of corporate modernism.

**Period:** 1950s–1970s · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** International Typographic Style, Swiss Style, Swiss Grid

## When to load this skill

Load it when the user asks for: "swiss", "swiss style", "international style", "helvetica", "grid-based", "minimal editorial", "clean and typographic", "modernist", "müller-brockmann", "poster-like", "neutral corporate".

Good for: editorial sites, documentation, annual reports, portfolios, institutional brands, data-heavy dashboards.

Do not use it when:
- The brand must feel playful, warm or handmade.
- The audience is children or the product is a game.
- The content has little text and relies on rich imagery of products with lifestyle context.

## System directives

When generating UI or graphic layouts in Swiss International Style, you MUST:

1. Build every layout on a modular grid of 6 or 12 columns and align every element to a column edge and a baseline.
2. Use one sans-serif family for the whole piece, and make hierarchy with size and weight only.
3. Set all text flush left with a ragged right edge.
4. Compose asymmetrically: put the main mass off centre and balance it with empty space.
5. Use at most one accent colour in addition to black and white, and use it on less than 10% of the surface.
6. Jump between type sizes by a ratio of 1.5 or more, so that each level reads as a different level.
7. Prefer photography and plain diagrams to illustration, and crop photographs to grid modules.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Centred body text or centred multi-line headlines.
- **NEVER:** Drop shadows, gradients, glows or any simulated depth.
- **NEVER:** Rounded corners on containers, images or buttons.
- **NEVER:** A second typeface, script fonts or decorative display fonts.
- **NEVER:** Decorative illustration, ornaments, emoji or stock icons used as filler.
- **NEVER:** Elements placed by eye that do not sit on a grid line.
- **NEVER:** Justified text with uneven word spacing.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column modular grid with 24px gutters and an 8px baseline; every block spans whole columns and every text line sits on the baseline.
- **Whitespace ratio:** 40–60% of the surface stays empty; the spacing scale is 8, 16, 24, 48, 96, 144px and nothing in between.
- **Alignment rules:** Flush left, ragged right; shared left edges across sections; nothing is centred and nothing floats outside a column.
- **Container geometry:** Sharp rectangles with a 0px radius; sections are divided by 1px or 2px rules and by space, not by boxes or cards.

## Typography

- **Classifications:** neo-grotesque sans serif
- **Tracking:** Display sizes take -0.02em to -0.04em; body stays at 0; small upper-case labels take +0.06em.
- **Leading:** Display 1.0 to 1.1; body 1.4 to 1.5; all line-heights are multiples of the 8px baseline.
- **Hierarchy rules:**
  - Use two weights only: regular (400) and bold (700).
  - Use three or four sizes with large jumps, for example 14, 21, 48 and 96px.
  - Set headlines in sentence case or all lower case, and never in title case.
  - Put small labels and numerals in the margin column to index the content.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter Tight | Inter | The closest open-source match to Helvetica at display and text sizes. |
| Archivo | IBM Plex Sans | A little more character; nearer to Akzidenz-Grotesk. |
| Hanken Grotesk | Hanken Grotesk | A single-family setting, which is the orthodox choice. |

## Colour & lighting

- **Palette structure:** Black, white and one saturated primary; the accent covers less than 10% of the surface, or one full-bleed field.
- **Contrast rules:** Body text holds at least 7:1 against its background; the accent carries large type or solid fields, never long text.
- **Surface treatment:** Flat, opaque, uncoated fields of solid colour; no texture, no gradient, no transparency.
- **Light and shadow:** None. There is no light source; depth comes only from scale, overlap and empty space.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#FFFFFF` | background |
| Ink | `#111111` | text and rules |
| Swiss Red | `#E30613` | single accent |
| Grey | `#5E5E5E` | secondary text |
| Fog | `#F2F2F0` | alternate surface |

## Materiality & texture

- **Surface simulation:** None; the surface is ink on paper and does not imitate any other material.
- **Border rules:** Solid ink rules of 1px or 2px, used as dividers above sections; containers have no outline on all four sides.
- **Blur and elevation:** No blur and no elevation; box-shadow and backdrop-filter stay at none on every element.

## Ornamentation & iconography

- **Iconography:** Geometric pictograms with a uniform 2px stroke or solid fill, square terminals and no perspective; use few of them.
- **Illustration:** Objective black-and-white photography or plain diagrams, cropped hard to grid modules; no decorative illustration.
- **Decorative elements:** horizontal rules · oversized numerals · one full-bleed colour field · margin labels

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: short functional moves along grid axes with no bounce, no overshoot and no parallax.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 150
- **Hover and active:** Hover inverts ink and paper or adds a 2px underline; active state shows the accent colour; nothing scales, lifts or glows.

## Code & token primer

Set `data-style="swiss-international"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="swiss-international"] {
  --color-bg: #FFFFFF;
  --color-surface: #F2F2F0;
  --color-text: #111111;
  --color-muted: #5E5E5E;
  --color-primary: #111111;
  --color-accent: #E30613;
  --color-border: #111111;
  --font-sans: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 150ms;
  --grid-columns: 12;
  --grid-gutter: 24px;
  --tracking-display: -0.03em;
  --leading-body: 1.5;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #5E5E5E;
  --color-muted-on-surface: #5E5E5E;
  --color-link: #E30613;
  --color-link-on-surface: #111111;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: -0.03em;
  --display-leading: 0.95;
  --display-case: none;
  --body-leading: 1.45;
  --body-size: 16px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-neutral-900 font-sans antialiased grid grid-cols-12 gap-x-6 px-6 md:px-12` |
| heading | `col-span-12 md:col-span-9 text-6xl md:text-8xl font-bold leading-none tracking-[-0.03em] text-left` |
| body | `col-span-12 md:col-span-5 md:col-start-4 text-base leading-6 text-left` |
| section | `col-span-12 border-t-2 border-neutral-900 pt-4 mt-24` |
| button | `rounded-none border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-white hover:text-neutral-900` |
| label | `text-xs font-bold uppercase tracking-[0.06em] text-neutral-600` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Carbon (Regular) by IBM, licence Apache 2.0. Reason: A thin, even line on a strict grid with butt terminals: the icon as neutral information. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.03em, leading 0.95, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.45.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
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

- If the user asks for **softer**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Add a 4px radius and a second muted hue; keep the grid, the single typeface and the flush-left text.
- If the user asks for **warmer**: move toward [`mid-century-modern`](../mid-century-modern/SKILL.md) (Mid-Century Modern). Change the accent to an earth tone and let one illustration with organic shapes into the layout; keep the grid.
- If the user asks for **bolder**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Raise the rules to 3px, add a hard offset shadow and a second loud accent; keep the 0px radius and the grid.
- If the user asks for **more app-like**: move toward [`bento-grid-ui`](../bento-grid-ui/SKILL.md) (Bento Grid UI). Close the open sections into cells with a 1px border; keep the type scale and the monochrome palette.

- **Came from (go here for a more orthodox version):** [`bauhaus`](../bauhaus/SKILL.md)
- **Led to (go here for a newer version):** [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`japanese-graphic-modernism`](../japanese-graphic-modernism/SKILL.md), [`luxury-typography-web`](../luxury-typography-web/SKILL.md), [`metro-ui`](../metro-ui/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md), [`rams-functionalism-ui`](../rams-functionalism-ui/SKILL.md), [`wabi-sabi-web`](../wabi-sabi-web/SKILL.md)
- **Was rejected by:** [`anti-design`](../anti-design/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`japanese-dense-web`](../japanese-dense-web/SKILL.md), [`memphis-design`](../memphis-design/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md), [`punk-zine`](../punk-zine/SKILL.md)
- **Mixes well with:** [`bauhaus`](../bauhaus/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)
- **Kin in another domain:** [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`outline-icon`](../outline-icon/SKILL.md), [`solid-glyph-icon`](../solid-glyph-icon/SKILL.md), [`straight-photography`](../straight-photography/SKILL.md)
- **Nearest by vector profile:** [`de-stijl-web`](../de-stijl-web/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)

## Emotional target

Trust through order: the viewer feels that the information is objective, complete and easy to check.

**Keywords:** objective, precise, calm, authoritative, rational, timeless · **Brand archetypes:** sage, ruler

## Sources

- Josef Müller-Brockmann, Grid Systems in Graphic Design (Niggli, 1981)
- Richard Hollis, Swiss Graphic Design: The Origins and Growth of an International Style (Yale, 2006)
- [eMuseum, Museum für Gestaltung Zürich: poster and graphic design collection](https://www.emuseum.ch)

---

Generated from [`data/design/styles/swiss-international.json`](../../data/design/styles/swiss-international.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
