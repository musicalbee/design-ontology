---
name: victorian-web
description: "Apply the Victorian Web style (1880–now) when generating UI or graphic layouts. Load when the user asks for: victorian, victoriana, gothic, ornate, damask, engraving."
domain: design
era: fin-de-siecle
triggers:
  - "victorian"
  - "victoriana"
  - "gothic"
  - "ornate"
  - "damask"
  - "engraving"
  - "antique"
  - "heritage"
vector_profile:
  ornamentation: 3
  dimensionality: 5
  grid_rigidity: 2
  skeuomorphic_realism: 5
  typographic_expressiveness: 5
---

# Victorian Web

> Ornament is value: every surface carries pattern, rule and flourish.

Dense ornament, engraved borders, high-contrast serif type, deep jewel colours, gold, dark wood and old paper. It recalls the 19th century and gives a page a proud, collected and gothic mood.

**Period:** 1880–now · **Era:** Fin de Siècle · **Domain:** Graphic & UI Design · **Also called:** Victorian, Victoriana, Gothic ornamental web

## When to load this skill

Load it when the user asks for: "victorian", "victoriana", "gothic", "ornate", "damask", "engraving", "antique", "heritage".

Good for: heritage and craft brands, museums, libraries and archives, gothic and fantasy fiction, tea, spirits and perfume brands, period dramas and book promotions.

Do not use it when:
- The product needs a fast, clean tool UI.
- The audience expects a minimal look.
- The page must load on weak devices with large patterns.

## System directives

When generating UI or graphic layouts in Victorian Web, you MUST:

1. Frame every page with a double border: 1px and 3px lines with a gap of 3px to 4px in a dark ink or gold.
2. Use ornamental corners and dividers (a flourish or a fleuron) of 24px to 64px at each section break.
3. Set headings in a high-contrast serif (Didone or old style) at 48px to 96px with upper case or small caps; body at 17px to 19px with a leading of 1.6.
4. Build the palette from deep jewel tones (burgundy, bottle green, navy) with gold (#B8860B) as accent on a parchment (#F1E5C8) or a dark ground.
5. Fill backgrounds with damask or wallpaper patterns at 6% to 12% opacity and a repeat of 80px to 160px.
6. Use drop caps of 3 to 4 lines on the first paragraph and a gold or red initial.
7. Add engraving-style illustrations with hatching lines of 0.5px to 1px; no flat vector.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Sans-serif display type.
- **NEVER:** Flat empty backgrounds.
- **NEVER:** Large empty space with a single focus.
- **NEVER:** Neon and bright primary colours.
- **NEVER:** Rounded friendly shapes.
- **NEVER:** Thin light type.
- **NEVER:** Plain borderless cards.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■■` 5/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A centred column in a double-ruled frame of 960px to 1100px; sections are divided by ornaments; a sidebar of 240px holds a catalogue list.
- **Whitespace ratio:** 5% to 15% of the surface is empty; the spacing scale is 8, 16, 24, 40 and 64px.
- **Alignment rules:** Centred headings and ornaments; justified body text; captions in italic below images.
- **Container geometry:** Rectangles and arches with cut or scalloped corners of 8px to 16px; ovals for portraits; double borders.

## Typography

- **Classifications:** Didone serif · old-style serif · blackletter
- **Tracking:** Display takes +0.02em; small caps take +0.1em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use weights 400 and 700 for display and 400 for body. · Use sizes 14, 18, 32 and 80px. · Set headings in upper case or small caps. · Set drop caps at 3 to 4 lines.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Playfair Display | Cormorant Garamond | A Didone display with high contrast. |
| IM Fell English | Cormorant Garamond | An old-style face with an engraved look. |
| UnifrakturCook | Cormorant Garamond | A blackletter for short titles and initials. |

## Colour & lighting

- **Palette structure:** Jewel tones on parchment, with gold and black.
- **Contrast rules:** Ebony on parchment holds 13:1; gold carries ornament and borders only, never small text.
- **Surface treatment:** Flat parchment with paper grain at 4% to 8% and damask patterns at 6% to 12%.
- **Light and shadow:** Low, warm and papery; a shadow of 0 2px 6px at 20% under a framed block.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Parchment | `#F1E5C8` | background |
| Ebony | `#1E1612` | text |
| Burgundy | `#6D1A2B` | primary |
| Bottle | `#1F4D3A` | accent |
| Gold | `#B8860B` | ornament |
| Sepia | `#6A5646` | secondary text |

## Materiality & texture

- **Surface simulation:** Engraved paper, gilt, velvet and dark wood.
- **Border rules:** A double border: 1px and 3px lines with a gap of 3px in gold or ink.
- **Blur and elevation:** Almost no blur; a soft inner vignette of 40px at 10% on the ground.

## Ornamentation & iconography

- **Iconography:** Engraved 1.5px icons with fine serifs, or fleurons and manicules instead of icons.
- **Illustration:** Engravings, cameos, floral borders, damask and portraits in ovals.
- **Decorative elements:** double border · fleuron divider · drop cap · damask pattern

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Stately: fades of 400ms to 600ms; borders draw in; no bounce.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 500
- **Hover and active:** Hover turns a link burgundy and adds a gold underline of 2px; active state darkens it by 10%.

## Code & token primer

Set `data-style="victorian-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="victorian-web"] {
  --color-bg: #F1E5C8;
  --color-surface: #FAF1DA;
  --color-text: #1E1612;
  --color-muted: #6A5646;
  --color-primary: #6D1A2B;
  --color-accent: #B8860B;
  --color-border: #B8860B;
  --font-sans: "Cormorant Garamond", Georgia, serif;
  --font-display: "Playfair Display", "IM Fell English", serif;
  --border-radius: 4px;
  --border-width: 3px;
  --shadow-elevation: 0 2px 6px rgba(30,22,18,0.2);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 500ms;
  --color-on-bg: #1E1612;
  --color-on-surface: #1E1612;
  --color-on-primary: #F1E5C8;
  --color-on-accent: #1E1612;
  --color-muted-on-bg: #6A5646;
  --color-muted-on-surface: #6A5646;
  --color-link: #6D1A2B;
  --color-link-on-surface: #6D1A2B;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0.02em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 18px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F1E5C8] text-[#1E1612] font-serif antialiased` |
| heading | `font-bold uppercase text-4xl md:text-7xl tracking-[0.02em] leading-[1.1] text-center` |
| body | `text-lg leading-[1.6] text-justify first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-bold first-letter:text-[#6D1A2B]` |
| section | `rounded border-[3px] border-double border-[#B8860B] bg-[#FAF1DA] p-6` |
| button | `rounded-sm border border-[#B8860B] bg-[#6D1A2B] px-6 py-3 font-semibold uppercase tracking-[0.1em] text-[#F1E5C8] transition-colors duration-500 hover:bg-[#1F4D3A]` |
| label | `text-sm italic text-[#6A5646]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Bold) by Phosphor Icons, licence MIT. Reason: A fine, thin family; use light weight and pair it with fleuron ornaments. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 18px, leading 1.6.
- **Page:** hero stacked, center aligned, compact density, accent tilt 0°.
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

- If the user asks for **calmer**: move toward [`art-nouveau-web`](../art-nouveau-web/SKILL.md) (Art Nouveau (web)). Replace fixed borders with a flowing line and use 2 colours.
- If the user asks for **more modern**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Keep the serif and rules; remove ornament and use a white ground.
- If the user asks for **more punk**: move toward [`punk-zine`](../punk-zine/SKILL.md) (Punk Zine). Cut the engravings and set them in black and white with torn edges.

- **Mixes well with:** [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`punk-zine`](../punk-zine/SKILL.md)
- **Nearest by vector profile:** [`skeuomorphism`](../skeuomorphism/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md), [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md)

## Emotional target

The viewer feels they are inside a proud, collected and slightly haunted house.

**Keywords:** ornate, gothic, proud, nostalgic, rich, mysterious · **Brand archetypes:** ruler, magician

## Sources

- Example: The British Library Victorian collections pages (2015–2025)
- Example: Penguin Classics gothic edition sites (2018–2025)
- Example: Fortnum and Mason and Twinings heritage pages (2012–2025)

---

Generated from [`data/design/styles/victorian-web.json`](../../data/design/styles/victorian-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
