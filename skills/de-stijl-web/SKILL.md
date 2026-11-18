---
name: de-stijl-web
description: "Apply the De Stijl (web) style (1917–1931) when generating UI or graphic layouts. Load when the user asks for: de stijl, mondrian, neoplasticism, primary colours, rietveld, black lines and colour blocks."
domain: design
era: modernist
triggers:
  - "de stijl"
  - "mondrian"
  - "neoplasticism"
  - "primary colours"
  - "rietveld"
  - "black lines and colour blocks"
  - "dutch modernism"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# De Stijl (web)

> Reduce form to the straight line and the primary colour, and a universal, harmonious order appears.

Horizontal and vertical black lines, flat fields of red, yellow and blue, and white space. It came from the Dutch group around Mondrian and Van Doesburg and reduces form to its basic parts.

**Period:** 1917–1931 · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** Neoplasticism, Mondrian grid

## When to load this skill

Load it when the user asks for: "de stijl", "mondrian", "neoplasticism", "primary colours", "rietveld", "black lines and colour blocks", "dutch modernism".

Good for: art and design museum sites, portfolios, bento-like dashboards with a strong identity, poster and book design, architecture practices.

Do not use it when:
- The brand must feel warm, soft or organic.
- The content is long reading with few fields.
- The UI needs more than three signal colours.

## System directives

When generating UI or graphic layouts in De Stijl (web), you MUST:

1. Build each layout from straight horizontal and vertical lines only; no angle other than 0° or 90°.
2. Draw black lines of 6px to 12px between all colour fields.
3. Use only red (#D8261C), yellow (#F4C719), blue (#1D4FA8), black, white and a light grey (#E8E8E4).
4. Fill 60% to 75% of the page with white; colour fields cover at most 25% and one large field takes the most weight.
5. Place colour fields off centre and keep them unequal in size; the ratio between two adjacent fields is 1:1.6 to 1:2.4.
6. Set text in a geometric sans-serif at 16px; let headlines sit in a white field in lower case.
7. Let the lines run to the edge of the viewport and cut off at the border.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Diagonal lines and curves.
- **NEVER:** Gradients, textures and shadows.
- **NEVER:** Secondary colours such as green, orange or purple.
- **NEVER:** Symmetric compositions with fields of equal size.
- **NEVER:** Decorative illustration and ornament.
- **NEVER:** Rounded corners on any element.
- **NEVER:** Photographs with no flat field frame.

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

- **Grid mechanics:** An asymmetric grid of unequal rectangles, made with CSS grid tracks (for example 3fr 1fr 2fr); black lines of 8px divide the tracks.
- **Whitespace ratio:** 60% to 75% of the surface is white; the spacing scale is 8, 16, 32, 64px.
- **Alignment rules:** Everything is orthogonal and flush left; text sits in white fields with a 24px inner margin.
- **Container geometry:** Rectangles with a 0px radius; the black line is the container edge.

## Typography

- **Classifications:** geometric sans serif
- **Tracking:** Display takes -0.02em; body stays at 0; labels take +0.06em.
- **Leading:** Display 1.0; body 1.5.
- **Hierarchy rules:** Use two weights: regular (400) and bold (700). · Use sizes 16, 24, 48 and 96px. · Set headlines in lower case. · Put a label of 12px in the corner of each colour field.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Jost | Jost | A single-family Futura-like setting that fits the geometry of the style. |
| Josefin Sans | Montserrat | A lighter, geometric display with a firm text face. |
| Outfit | DM Sans | A modern geometric pairing. |

## Colour & lighting

- **Palette structure:** White ground, black lines, and the three primaries in small, unequal fields.
- **Contrast rules:** Black on white holds 18:1; white text on blue holds at least 7:1; black on yellow holds at least 12:1.
- **Surface treatment:** Flat, opaque, matt fields of solid colour.
- **Light and shadow:** None; no light source.

**Palette**

| Name | Hex | Role |
|---|---|---|
| White | `#FFFFFF` | background |
| Black | `#111111` | lines and text |
| Red | `#D8261C` | primary field |
| Yellow | `#F4C719` | accent field |
| Blue | `#1D4FA8` | second accent field |
| Grey | `#E8E8E4` | surface |

## Materiality & texture

- **Surface simulation:** Painted canvas: matt flat paint with no texture on screen.
- **Border rules:** Black lines of 6px to 12px between fields; the outer edge of the page has no border.
- **Blur and elevation:** No blur. No elevation. Shadow offset is 0px.

## Ornamentation & iconography

- **Iconography:** Square pictograms built from straight lines at a 2px stroke, with butt caps and mitre joins, in black or on a primary field.
- **Illustration:** None; use abstract coloured fields only.
- **Decorative elements:** black line · primary colour field · white field · label in the field corner

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: fields resize along their own axis, one dimension at a time; no bounce.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover fills a white field with yellow or red; active state turns it blue; the lines do not move.

## Code & token primer

Set `data-style="de-stijl-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="de-stijl-web"] {
  --color-bg: #FFFFFF;
  --color-surface: #E8E8E4;
  --color-text: #111111;
  --color-muted: #4A4A46;
  --color-primary: #1D4FA8;
  --color-accent: #D8261C;
  --color-border: #111111;
  --font-sans: "Jost", "Futura", "Century Gothic", sans-serif;
  --font-display: "Jost", "Futura", "Century Gothic", sans-serif;
  --border-radius: 0px;
  --border-width: 8px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 200ms;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #4A4A46;
  --color-muted-on-surface: #4A4A46;
  --color-link: #D8261C;
  --color-link-on-surface: #1D4FA8;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: -0.02em;
  --display-leading: 1;
  --display-case: lowercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-on-bg), var(--color-on-bg)) 62% 0 / 1.2vmin 100% no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 88% 0 / 1.2vmin 100% no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 100% 34% / calc(38% + 1vmin) 1.2vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 100% 78% / calc(38% + 1vmin) 1.2vmin no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 100% 0 / 12% 34% no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 75% 100% / 26% 22% no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 100% 100% / 12% 22% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#111111] font-sans antialiased grid grid-cols-[3fr_1fr_2fr] gap-0` |
| heading | `text-6xl md:text-8xl font-bold lowercase leading-none tracking-[-0.02em]` |
| body | `text-base leading-6 p-6` |
| section | `border-t-8 border-[#111111]` |
| button | `rounded-none border-8 border-[#111111] bg-[#F4C719] px-6 py-3 text-sm font-bold text-[#111111] transition-colors duration-200 hover:bg-[#D8261C]` |
| label | `text-xs uppercase tracking-[0.06em]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Carbon (Regular) by IBM, licence Apache 2.0. Reason: A strict, even line on a square grid with butt terminals: straight lines only, like the style itself. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking -0.02em, leading 1, case: lowercase.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
- **Ground:** mondrian. De Stijl divides the plane with black bars into fields of primary colour and white. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. Keep the rest of the page on `--color-bg`.
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

- If the user asks for **calmer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Remove the colour fields; keep the lines at 1px and one red accent.
- If the user asks for **more dynamic**: move toward [`constructivism-web`](../constructivism-web/SKILL.md) (Constructivism (web)). Rotate the grid by 15° to 30° and add heavy type in red.
- If the user asks for **more app-like**: move toward [`bento-grid-ui`](../bento-grid-ui/SKILL.md) (Bento Grid UI). Turn the fields into cells with a 1px border and a 12px radius; keep the proportions.

- **Rejects (the opposite pole; do not blend):** [`art-nouveau-web`](../art-nouveau-web/SKILL.md)
- **Mixes well with:** [`bauhaus`](../bauhaus/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md)
- **Kin in another domain:** [`de-stijl-painting`](../de-stijl-painting/SKILL.md), [`international-style-architecture`](../international-style-architecture/SKILL.md), [`prairie-school-architecture`](../prairie-school-architecture/SKILL.md)
- **Nearest by vector profile:** [`swiss-international`](../swiss-international/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)

## Emotional target

The viewer feels balance, rational calm and an abstract order.

**Keywords:** rational, balanced, abstract, pure, geometric, harmonious · **Brand archetypes:** sage, creator

## Sources

- Hans Ludwig C. Jaffé, De Stijl 1917–1931 (Harvard, 1986)
- Piet Mondrian, Neo-Plasticism: The General Principle of Plastic Equivalence (1920)

---

Generated from [`data/design/styles/de-stijl-web.json`](../../data/design/styles/de-stijl-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
