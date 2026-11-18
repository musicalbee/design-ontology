---
name: luxury-typography-web
description: "Apply the Luxury Typography Web style (2014–now) when generating UI or graphic layouts. Load when the user asks for: luxury, fashion, high-end, didone, editorial, premium."
domain: design
era: touchscreen
triggers:
  - "luxury"
  - "fashion"
  - "high-end"
  - "didone"
  - "editorial"
  - "premium"
  - "jewellery"
  - "couture"
vector_profile:
  ornamentation: 3
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 5
---

# Luxury Typography Web

> Luxury is restraint and craft: fine type, wide space and few words.

Large, high-contrast serif type on a calm ground, wide tracking on small caps, thin rules and few words. The letter is the main image, and space signals price and care.

**Period:** 2014–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Luxury type web, High-end editorial web, Fashion house web

## When to load this skill

Load it when the user asks for: "luxury", "fashion", "high-end", "didone", "editorial", "premium", "jewellery", "couture".

Good for: fashion and couture houses, jewellery and watches, hotels and fine dining, perfume and beauty brands, art and auction sites.

Do not use it when:
- The brand sells on price or volume.
- The page needs a dense catalogue or a fast checkout.
- The audience reads on small screens in poor light and needs large text.

## System directives

When generating UI or graphic layouts in Luxury Typography Web, you MUST:

1. Set the hero in a high-contrast serif at 72px to 160px, weight 300 to 400, with tracking of -0.02em.
2. Set labels and menu in upper case at 11px to 12px with tracking of +0.2em to +0.3em.
3. Use a ground of ivory (#F6F1E8) or deep black (#0E0D0C) and text in the opposite tone; add one metal accent (#A8863B) for rules and small marks.
4. Use hairlines of 1px in the accent; use no box, no shadow and no radius above 0px.
5. Show one product or one image per screen at large size with 120px or more of space around it.
6. Write short copy of 12 words or fewer per block and avoid sale words and prices in the hero.
7. Animate slowly: fades and 16px lifts in 700ms to 1100ms.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Discount badges and urgency timers.
- **NEVER:** Bold, heavy sans type.
- **NEVER:** Bright saturated colour.
- **NEVER:** Rounded, soft buttons.
- **NEVER:** Dense product grids with small images.
- **NEVER:** Stock icons and emoji.
- **NEVER:** Drop shadows and gradients.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A wide, centred layout with a 12-column grid; large type spans 8 to 12 columns; products sit in 2 to 3 columns with generous gaps.
- **Whitespace ratio:** 55% to 70% of the surface is empty; vertical gaps are 120px to 240px.
- **Alignment rules:** Centred hero and centred captions; menus flush with a wide letter space; small text flush left.
- **Container geometry:** Square corners; hairline frames; images with no radius.

## Typography

- **Classifications:** high-contrast didone serif · transitional serif · upper-case sans serif
- **Tracking:** Display takes -0.02em; labels +0.25em.
- **Leading:** Display 1.0; body 1.7.
- **Hierarchy rules:** Use weights 300 to 400 for display and 400 for body. · Use sizes 11, 16, 28 and 120px. · Set labels in upper case at 11px to 12px. · Set italics in the serif for names and accents.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Playfair Display | Montserrat | A sharp didone for the headline with a clean sans for labels. |
| Cormorant Garamond | Jost | A fine, light serif with a thin geometric sans. |
| Bodoni Moda | Inter | A strong didone with high contrast for fashion titles. |

## Colour & lighting

- **Palette structure:** Ivory or black with one metal accent.
- **Contrast rules:** Ink on ivory holds 16:1; brass at #836320 holds 4.5:1 on ivory for small marks; on black use #C9A24D.
- **Surface treatment:** Flat ivory or black with no texture; a faint grain at 3% is optional.
- **Light and shadow:** No shadow; a 1px brass rule marks edges.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ivory | `#F6F1E8` | background |
| Linen | `#ECE4D4` | surface |
| Ink | `#16140F` | text |
| Taupe | `#6A6153` | secondary text |
| Black | `#16140F` | primary |
| Brass | `#836320` | accent |
| Rule | `#CFC4AC` | border |

## Materiality & texture

- **Surface simulation:** Fine paper, brass foil and printed type.
- **Border rules:** A 1px brass or taupe hairline; no thick line.
- **Blur and elevation:** No blur; no elevation.

## Ornamentation & iconography

- **Iconography:** Thin 1px outline icons or none; small brass stars and monograms.
- **Illustration:** Editorial photography of one object, a model or a detail, with generous crop and space.
- **Decorative elements:** didone headline · wide-tracked caps · brass hairline · monogram

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow and calm: fades and 16px lifts; images reveal with a 900ms mask; no bounce.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 900
- **Hover and active:** Hover draws a brass underline in 400ms and lifts the image 4px in 600ms; active state dims by 6%.

## Code & token primer

Set `data-style="luxury-typography-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="luxury-typography-web"] {
  --color-bg: #F6F1E8;
  --color-surface: #ECE4D4;
  --color-text: #16140F;
  --color-muted: #6A6153;
  --color-primary: #16140F;
  --color-accent: #836320;
  --color-border: #CFC4AC;
  --font-sans: "Montserrat", system-ui, sans-serif;
  --font-display: "Playfair Display", "Bodoni Moda", Georgia, serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 900ms;
  --color-on-bg: #16140F;
  --color-on-surface: #16140F;
  --color-on-primary: #F6F1E8;
  --color-on-accent: #F6F1E8;
  --color-muted-on-bg: #6A6153;
  --color-muted-on-surface: #6A6153;
  --color-link: #836320;
  --color-link-on-surface: #16140F;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.02em;
  --display-leading: 1;
  --display-case: none;
  --body-leading: 1.7;
  --body-size: 16px;
  --icon-stroke: 1;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 22px 22px / calc(100% - 44px) 2px no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 22px calc(100% - 22px) / calc(100% - 44px) 2px no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 22px 22px / 2px calc(100% - 44px) no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) calc(100% - 22px) 22px / 2px calc(100% - 44px) no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px 32px / calc(100% - 64px) 1px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px calc(100% - 32px) / calc(100% - 64px) 1px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px 32px / 1px calc(100% - 64px) no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) calc(100% - 32px) 32px / 1px calc(100% - 64px) no-repeat,
    radial-gradient(60% 70% at 85% 50%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F6F1E8] text-[#16140F] font-sans antialiased` |
| heading | `font-serif text-6xl md:text-8xl font-normal leading-none tracking-[-0.02em]` |
| body | `text-base leading-[1.7]` |
| section | `border border-[#CFC4AC] bg-[#ECE4D4] p-10` |
| button | `border border-[#16140F] bg-[#16140F] px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#F6F1E8] transition-colors duration-500 hover:bg-[#836320]` |
| label | `text-xs uppercase tracking-[0.25em] text-[#6A6153]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A thin outline family that matches hairline rules and fine serifs. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.02em, leading 1, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.7.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** frame. Luxury print sits inside a hairline frame on heavy cream stock. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. Keep the rest of the page on `--color-bg`.
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

### Letterspaced capitals (motif)

Capital letters set with wide space between them, so that a short word reads as an inscription of rank. Origin: typeface, Rome, 113.

- Track capitals at 0.1 to 0.3em; do not track lowercase.
- Set the size small, at 11 to 14px on screen, in a light weight.
- Use roman capitals with strong serifs or a clean geometric sans.
- Keep the line to one to four words.

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **modern**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Replace the didone by a neutral sans; keep the space and the single accent.
- If the user asks for **warmer**: move toward [`art-deco-web`](../art-deco-web/SKILL.md) (Art Deco (web)). Add gold geometry and a deep green or black ground.
- If the user asks for **bolder**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Add a magazine grid and larger photographs.

- **Came from (go here for a more orthodox version):** [`art-deco-web`](../art-deco-web/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)
- **Kin in another domain:** [`quiet-luxury-interior`](../quiet-luxury-interior/SKILL.md)
- **Nearest by vector profile:** [`constructivism-web`](../constructivism-web/SKILL.md), [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md)

## Emotional target

The viewer feels that this is rare, careful and expensive.

**Keywords:** refined, rare, calm, exact, timeless, exclusive · **Brand archetypes:** ruler, lover

## Sources

- Example: Fashion house sites such as Chanel and Dior (2014–2025)
- Example: Luxury watch maker sites (2014–2025)
- Example: Vogue and Harper's Bazaar print layouts (1930s–2020s)

---

Generated from [`data/design/styles/luxury-typography-web.json`](../../data/design/styles/luxury-typography-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
