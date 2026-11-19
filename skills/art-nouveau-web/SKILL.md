---
name: art-nouveau-web
description: "Apply the Art Nouveau (web) style (1890–1910) when generating UI or graphic layouts. Load when the user asks for: art nouveau, jugendstil, mucha, botanical, floral ornament, whiplash curve."
domain: design
era: fin-de-siecle
triggers:
  - "art nouveau"
  - "jugendstil"
  - "mucha"
  - "botanical"
  - "floral ornament"
  - "whiplash curve"
  - "tea room"
  - "heritage craft"
  - "organic ornament"
vector_profile:
  ornamentation: 5
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Art Nouveau (web)

> Ornament is not decoration added to a thing: the line of the plant grows into the structure of the page.

Whiplash curves, plant forms and hand-drawn lettering inside framed panels. It came from Paris, Brussels, Vienna and Glasgow around 1900. On screen it suits heritage, craft and botanical brands.

**Period:** 1890–1910 · **Era:** Fin de Siècle · **Domain:** Graphic & UI Design · **Also called:** Jugendstil, Liberty Style, Whiplash style

## When to load this skill

Load it when the user asks for: "art nouveau", "jugendstil", "mucha", "botanical", "floral ornament", "whiplash curve", "tea room", "heritage craft", "organic ornament".

Good for: botanical and tea brands, wedding and boutique sites, museum exhibition pages, perfume and cosmetics, craft and ceramics shops.

Do not use it when:
- The product is a dense data tool.
- The brand must feel technical, minimal or masculine.
- The page needs strict, scannable tables.

## System directives

When generating UI or graphic layouts in Art Nouveau (web), you MUST:

1. Draw every panel frame with a curved border: corner radius 24px to 48px, or an arched top at 50% of the width.
2. Run one continuous organic line (stroke 2px to 3px) along the edge of each section, and let it end in a leaf, a bud or a whiplash curl.
3. Use a muted natural palette of 5 colours: moss, sage, ochre, rose and cream. Keep saturation below 45%.
4. Set headlines in a display face with a flowing, calligraphic shape at 40px or larger; set body in a readable old-style serif at 17px to 18px.
5. Fill the page background with a pattern tile of 120px to 240px made from stems and petals at 8% opacity.
6. Place the hero as a tall panel with a 3:4 ratio, framed by a border of 6px to 12px with a floral corner.
7. Make buttons pill-shaped (radius 999px) with a 2px outline and a filled leaf-green hover state.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Straight rectangular containers with sharp corners.
- **NEVER:** Neon, primary or high-saturation colours above 45%.
- **NEVER:** Geometric sans-serif headlines.
- **NEVER:** Symmetric rigid grids of equal cards.
- **NEVER:** Photographic stock images without a frame or a tint.
- **NEVER:** Flat decoration with no link to a plant or hand-drawn line.
- **NEVER:** Drop shadows that make a panel float.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column of 720px to 960px with side margins of 8% to 12%; ornamental borders occupy the margins. Panels follow a 4px baseline and break the grid with arches and curves.
- **Whitespace ratio:** 30% to 40% of the surface stays empty; the spacing scale is 12, 24, 36, 60 and 96px.
- **Alignment rules:** Centred hero with asymmetric ornament; body text flush left; the ornament line leads the eye from the top-left to the bottom-right.
- **Container geometry:** Panels with a 24px to 48px radius, arched tops and framed borders of 6px to 12px; images sit in arch, oval or keyhole masks.

## Typography

- **Classifications:** old-style serif · calligraphic display
- **Tracking:** Display takes 0.02em; body stays at 0; small caps labels take +0.08em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use two weights only for body: regular (400) and bold (700); display runs at 700.
  - Use sizes 17, 24, 40 and 72px.
  - Set the first letter of an article as a drop cap of 3 lines.
  - Set labels in small caps at 13px with +0.08em tracking.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Cinzel Decorative | Lora | Classical capitals with flourish for display; a warm old-style serif for text. |
| Cormorant Garamond | Crimson Pro | A lighter, literary pairing. |
| Playfair Display | Source Serif 4 | A high-contrast display face with a clear text face. |

## Colour & lighting

- **Palette structure:** Muted botanical hues on a cream ground; one gold accent for borders.
- **Contrast rules:** Body text holds at least 7:1 on cream; ochre and rose carry ornament and large type only.
- **Surface treatment:** Flat tint with a printed paper grain at 4% opacity; no gradient except a 2-stop wash in a panel header.
- **Light and shadow:** A soft, single light from the top left; shadows are 0px; depth comes from layered borders.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream | `#F4ECD8` | background |
| Moss | `#3E5B3A` | text and primary |
| Sage | `#9DB08A` | secondary surface |
| Ochre | `#C58B2A` | accent |
| Rose | `#C9828A` | second accent |
| Parchment | `#EADFC3` | surface |

## Materiality & texture

- **Surface simulation:** Printed paper with gilt lines; the surface imitates a lithographic poster, not glass or metal.
- **Border rules:** Double border: an outer 2px moss line and an inner 1px ochre line, 6px apart.
- **Blur and elevation:** No blur. No elevation. At most one 1px offset line in ochre behind a panel.

## Ornamentation & iconography

- **Iconography:** Thin outline icons with a 1.5px to 2px stroke, round caps and round joins, drawn as leaves, stems and buds.
- **Illustration:** Hand-drawn botanical and female figures in flat colour with a black outline of 2px; use as border art and as a hero plate.
- **Decorative elements:** whiplash border line · floral corner · arched image mask · stem and petal pattern · drop cap

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: slow organic moves; a border line draws itself along its path at 600ms to 900ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover fills the pill in leaf green and draws the border line again in 400ms; active state darkens by 8%.

## Code & token primer

Set `data-style="art-nouveau-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="art-nouveau-web"] {
  --color-bg: #F4ECD8;
  --color-surface: #EADFC3;
  --color-text: #2F3F2C;
  --color-muted: #5A6B52;
  --color-primary: #3E5B3A;
  --color-accent: #C58B2A;
  --color-border: #3E5B3A;
  --font-sans: "Lora", Georgia, serif;
  --font-display: "Cinzel Decorative", "Cormorant Garamond", Georgia, serif;
  --border-radius: 32px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 12px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 400ms;
  --type-ratio: 1.5;
  --size-small: 11.33px;
  --size-h3: 38.25px;
  --size-h2: 57.38px;
  --size-h1: 86.06px;
  --color-on-bg: #2F3F2C;
  --color-on-surface: #2F3F2C;
  --color-on-primary: #F4ECD8;
  --color-on-accent: #000000;
  --color-muted-on-bg: #5A6B52;
  --color-muted-on-surface: #545F4A;
  --color-link: #3E5B3A;
  --color-link-on-surface: #3E5B3A;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.02em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 17px;
  --icon-stroke: 1.5;
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
| page | `bg-[#F4ECD8] text-[#2F3F2C] font-serif antialiased px-6 md:px-24` |
| heading | `text-5xl md:text-7xl font-bold leading-[1.1] tracking-[0.02em] text-center` |
| body | `text-lg leading-[1.6] max-w-prose` |
| section | `rounded-[32px] border-2 border-[#3E5B3A] bg-[#EADFC3] p-9` |
| button | `rounded-full border-2 border-[#3E5B3A] bg-transparent px-8 py-3 text-base text-[#3E5B3A] transition-colors duration-[400ms] hover:bg-[#3E5B3A] hover:text-[#F4ECD8]` |
| label | `text-[13px] uppercase tracking-[0.08em] text-[#5A6B52]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A thin, even, round-ended line that follows the flowing stroke of a plant drawing. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.1, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 17px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** frame. Art Nouveau posters and book pages hold the picture in a thin drawn frame on warm paper. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Lithography (process)

A print from a flat stone or plate on which a greasy drawing takes ink and water repels it; the artist draws as on paper. Origin: graphic & ui design, Munich, c. 1796.

- Draw on the stone with a greasy crayon or a tusche wash; the drawing takes ink and the rest stays wet.
- Pull the print in a press at a run of 20 to 200 copies for an artist print, or more for a poster.
- Use one stone for each colour; 3 to 5 stones give a poster.
- Keep the soft crayon grain and the dark, velvet black.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Awwwards** (platform, web, 2009–now), published the style. A web site that gives awards to web design. Designers post sites there, and its daily picks spread trends of the expressive web.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #3E5B3A | #3E5B3A, #C58B2A, #2F3F2C | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #C58B2A | #C58B2A, #3E5B3A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 32px | 16–48 px | --border-radius |
| Grid step (`grid_step`) | 12px | 6–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Drop the borders and curves; keep the serif body and set the page on a 12-column grid.
- If the user asks for **more geometric**: move toward [`art-deco-web`](../art-deco-web/SKILL.md) (Art Deco (web)). Replace the curves with arcs and straight lines and add a gold on black palette.
- If the user asks for **more modern**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Keep the leaf palette as flat fills; remove the borders and patterns.

- **Led to (go here for a newer version):** [`bohemian-web`](../bohemian-web/SKILL.md)
- **Was rejected by:** [`art-deco-web`](../art-deco-web/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md)
- **Mixes well with:** [`art-deco-web`](../art-deco-web/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md)
- **Kin in another domain:** [`art-nouveau-architecture`](../art-nouveau-architecture/SKILL.md), [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md), [`art-nouveau-monogram`](../art-nouveau-monogram/SKILL.md), [`symbolism-painting`](../symbolism-painting/SKILL.md)
- **Nearest by vector profile:** [`memphis-design`](../memphis-design/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md), [`cyberdelia`](../cyberdelia/SKILL.md)

## Emotional target

The viewer feels craft, nature and an unhurried, romantic care.

**Keywords:** organic, romantic, crafted, botanical, ornate, heritage · **Brand archetypes:** lover, creator

## Sources

- Stephen Escritt, Art Nouveau (Phaidon, 2000)
- Wikidata Q34636 (Art Nouveau)

---

Generated from [`data/design/styles/art-nouveau-web.json`](../../data/design/styles/art-nouveau-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
