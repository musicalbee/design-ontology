---
name: bohemian-web
description: "Apply the Bohemian Web style (2012–now) when generating UI or graphic layouts. Load when the user asks for: boho, bohemian, earth tones, terracotta, macrame, arch."
domain: design
era: touchscreen
triggers:
  - "boho"
  - "bohemian"
  - "earth tones"
  - "terracotta"
  - "macrame"
  - "arch"
  - "folk"
  - "natural"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 4
  skeuomorphic_realism: 5
  typographic_expressiveness: 4
---

# Bohemian Web

> The page is a lived-in, free-spirited space: natural, layered and warm.

Earth tones, hand-drawn florals, macramé and woven patterns, arched shapes, warm photography and relaxed script type. It shows a free-spirited, natural and craft-based taste.

**Period:** 2012–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Boho, Boho chic web, Earthy folk web

## When to load this skill

Load it when the user asks for: "boho", "bohemian", "earth tones", "terracotta", "macrame", "arch", "folk", "natural".

Good for: wellness, yoga and retreat sites, handmade shops and marketplaces, wedding and event pages, travel and festival brands, home and plant stores.

Do not use it when:
- The brand needs a precise or technical tone.
- The page is dense with data.
- The audience expects a corporate look.

## System directives

When generating UI or graphic layouts in Bohemian Web, you MUST:

1. Build the palette from 4 to 6 earth tones (terracotta, sand, sage, mustard, plum) with saturation of 25% to 55%.
2. Use arches as the main shape: image masks with a top radius of 999px and a bottom radius of 0 to 24px.
3. Layer 2 to 4 pattern fills (floral, macramé, ikat, dots) at 8% to 20% opacity behind sections.
4. Pair a warm serif display at 48px to 88px with a script accent at 28px to 40px and a humanist sans at 16px.
5. Set photography warm (colour temperature +10% to +20%) with grain of 3% to 6% and natural light.
6. Add organic dividers: a wavy line of 2px to 3px or a scalloped edge of 16px to 24px.
7. Keep corners soft: radius of 16px to 32px on cards and 999px on tags.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Cold blue and grey palettes.
- **NEVER:** Sharp corners and heavy black borders.
- **NEVER:** Neon and glow.
- **NEVER:** Strict symmetric grids.
- **NEVER:** Cold stock photography.
- **NEVER:** Tech and HUD details.
- **NEVER:** Pure white backgrounds.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A relaxed grid of 12 columns; images in arches overlap text blocks by 16px to 48px; sections change ground colour.
- **Whitespace ratio:** 25% to 35% of the surface is empty; the spacing scale is 8, 16, 24, 48 and 96px.
- **Alignment rules:** Centred headings with scripts; text blocks flush left; images and tags set off-grid.
- **Container geometry:** Arches, rounded rectangles of 16px to 32px, circles and scalloped edges.

## Typography

- **Classifications:** warm serif · script · humanist sans serif
- **Tracking:** Display takes 0; the script takes 0.
- **Leading:** Display 1.15; body 1.65.
- **Hierarchy rules:** Use weights 400 for display and body and 600 for labels. · Use sizes 16, 18, 32 and 72px. · Set script words at the size of the display or larger. · Set sentence case in headings with one script accent word.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| DM Serif Display | Nunito Sans | A warm, high-contrast display. |
| Cormorant Garamond | Nunito Sans | A soft serif for long headings. |
| Caveat | Nunito Sans | A relaxed script for accents. |

## Colour & lighting

- **Palette structure:** Warm earth with sage and a touch of plum.
- **Contrast rules:** Bark on sand holds 11:1; white text only on clay at 18px and larger; sage fills carry no small text.
- **Surface treatment:** Flat earth tones with a grain of 3% to 6% and pattern fills at 8% to 20%.
- **Light and shadow:** Soft, warm and low: 0 8px 24px at 12% in brown.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Sand | `#F5EBDD` | background |
| Clay | `#B84A33` | primary |
| Sage | `#8A9A7B` | accent |
| Mustard | `#E1A730` | highlight |
| Bark | `#3D2B24` | text |
| Dusk | `#6F5B52` | secondary text |

## Materiality & texture

- **Surface simulation:** Linen, clay, dried grass and woven cotton.
- **Border rules:** No hard border; a 1px sand line or a scalloped edge.
- **Blur and elevation:** Shadow 0 8px 24px at 12% in brown; no blur on content.

## Ornamentation & iconography

- **Iconography:** Hand-drawn 2px icons with round caps: sun, moon, leaf, feather.
- **Illustration:** Arched photos, dried flowers, macramé, rugs and hand-drawn botanicals.
- **Decorative elements:** arch mask · botanical line art · scalloped edge · script accent

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Gentle: items fade up 12px in 600ms; arches scale from 0.96; no springs.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover lifts a card 4px and warms its photo by 5%; active state returns it.

## Code & token primer

Set `data-style="bohemian-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="bohemian-web"] {
  --color-bg: #F5EBDD;
  --color-surface: #FFF9F0;
  --color-text: #3D2B24;
  --color-muted: #6F5B52;
  --color-primary: #B84A33;
  --color-accent: #8A9A7B;
  --color-border: #E2D2BC;
  --font-sans: "Nunito Sans", system-ui, sans-serif;
  --font-display: "DM Serif Display", "Cormorant Garamond", serif;
  --border-radius: 24px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 24px rgba(61,43,36,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 600ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #3D2B24;
  --color-on-surface: #3D2B24;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #000000;
  --color-muted-on-bg: #6F5B52;
  --color-muted-on-surface: #6F5B52;
  --color-link: #3D2B24;
  --color-link-on-surface: #B84A33;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.65;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(130% 95% at 50% 0%, transparent 58%, color-mix(in oklab, var(--color-on-bg) 9%, transparent)),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    radial-gradient(circle at 90% 112%, color-mix(in oklab, var(--color-accent) 34%, transparent) 0 34vmin, transparent calc(34vmin + 1px)),
    radial-gradient(circle at 90% 112%, transparent 0 40vmin, color-mix(in oklab, var(--color-primary) 30%, transparent) 40vmin calc(40vmin + 2px), transparent calc(40vmin + 2px)),
    radial-gradient(55% 60% at 88% 18%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%),
    radial-gradient(45% 50% at 70% 95%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F5EBDD] text-[#3D2B24] font-sans antialiased` |
| heading | `text-5xl md:text-7xl leading-[1.15] tracking-normal` |
| body | `text-base leading-[1.65]` |
| section | `rounded-3xl bg-[#FFF9F0] p-6 shadow-[0_8px_24px_rgba(61,43,36,0.12)]` |
| button | `rounded-full bg-[#B84A33] px-7 py-3 font-semibold text-white transition duration-[600ms] hover:-translate-y-1` |
| label | `text-sm font-semibold text-[#6F5B52]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Duotone) by Phosphor Icons, licence MIT. Reason: A soft, rounded family with a two-tone fill that suits warm, crafted layouts. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0em, leading 1.15, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 600, labels and buttons 600. The style uses 2 weights (400, 600) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.65.
- **Page:** hero split, center aligned, regular density, accent tilt 0°.
- **Ground:** paper. Bohemian pages sit on warm hand-made paper with soft washes of dyed colour. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Arch (motif)

A curved head over an opening that carries load as compression; inside, a soft frame for a door, a mirror or a niche. Origin: architecture, Rome, c. 200 BCE.

- Use a semicircular head: the rise is half the span.
- Keep the ratio of height to width of the opening at 1.6:1 to 2:1.
- In a room, repeat the arch in 2 or 3 places, for example a door, a mirror and a niche, and no more.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Pinterest** (platform, web, 2010–now), published the style. A web site where people pin images to boards. Its boards of rooms, crafts and mood images spread home and craft styles.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #B84A33 | #B84A33, #8A9A7B, #3D2B24 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #8A9A7B | #8A9A7B, #B84A33 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 24px | 12–36 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Lighten the palette to pastels and use light type with more air.
- If the user asks for **more crafted**: move toward [`scrapbook-ui`](../scrapbook-ui/SKILL.md) (Scrapbook UI). Add tape, photos and tilted paper.
- If the user asks for **more graphic**: move toward [`art-nouveau-web`](../art-nouveau-web/SKILL.md) (Art Nouveau (web)). Use flowing lines, a floral border and a gold accent.

- **Came from (go here for a more orthodox version):** [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md)
- **Mixes well with:** [`scrapbook-ui`](../scrapbook-ui/SKILL.md)
- **Kin in another domain:** [`hippie-bohemian-dress`](../hippie-bohemian-dress/SKILL.md)
- **Nearest by vector profile:** [`scrapbook-ui`](../scrapbook-ui/SKILL.md), [`cassette-futurism`](../cassette-futurism/SKILL.md), [`apple-aqua`](../apple-aqua/SKILL.md)

## Emotional target

The viewer feels welcomed into a warm, free and natural home.

**Keywords:** warm, free, earthy, relaxed, crafted, natural · **Brand archetypes:** explorer, lover

## Sources

- Example: Anthropologie and Free People pages (2012–2025)
- Example: Etsy seller shop templates in boho style (2015–2025)
- Example: Squarespace boho wedding templates (2016–2025)

---

Generated from [`data/design/styles/bohemian-web.json`](../../data/design/styles/bohemian-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
