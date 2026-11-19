---
name: minimalism-web
description: "Apply the Minimalism Web style (2012–now) when generating UI or graphic layouts. Load when the user asks for: minimal, minimalism, clean, simple, white space, less is more."
domain: design
era: touchscreen
triggers:
  - "minimal"
  - "minimalism"
  - "clean"
  - "simple"
  - "white space"
  - "less is more"
  - "restrained"
  - "quiet"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Minimalism Web

> Remove until only the need is left: space and restraint carry the message.

A page with one idea per screen: few elements, much space, one type family and one accent. Every part must earn its place; what stays is clear, calm and fast.

**Period:** 2012–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Minimal web, Less is more UI, Quiet web

## When to load this skill

Load it when the user asks for: "minimal", "minimalism", "clean", "simple", "white space", "less is more", "restrained", "quiet".

Good for: product and software landing pages, portfolios and studio sites, documentation and writing sites, fintech and tools that need trust, single-purpose apps.

Do not use it when:
- The brand needs warmth, play or ornament.
- The page must show a large catalogue at once.
- The audience expects density and many options.

## System directives

When generating UI or graphic layouts in Minimalism Web, you MUST:

1. Show one idea, one action and one image or none per screen.
2. Use 60% to 75% of the surface as empty space; the spacing scale is 8, 16, 32, 64 and 128px.
3. Use one type family in 2 weights and a scale of 14, 16, 24 and 64px.
4. Set the page in white or off-white (#FAFAF8) with text in near-black (#161616) and one accent for the main action only.
5. Use no border, shadow or gradient; separate parts with space or a hairline of 1px at 12% opacity.
6. Keep navigation to 5 items or fewer and show no icon that has no clear meaning.
7. Animate only state changes, in 150ms to 250ms.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Decorative ornament.
- **NEVER:** Gradients and shadows for depth.
- **NEVER:** More than 1 accent colour.
- **NEVER:** Banners, pop-ups and carousels.
- **NEVER:** Dense navigation with many levels.
- **NEVER:** Stock photos used as filler.
- **NEVER:** Clutter of badges, icons and labels.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column or a 12-column grid with few filled columns; one block per screen section; 160px to 240px between sections.
- **Whitespace ratio:** 65% to 80% of the surface is empty.
- **Alignment rules:** Flush left with a strict left edge; one centred axis only for a hero; no mixed alignments.
- **Container geometry:** Rectangles with 0px to 4px radius; no frames; 1px hairlines only.

## Typography

- **Classifications:** neo-grotesque sans serif · geometric sans serif
- **Tracking:** Display takes -0.02em; body 0; labels +0.04em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:** Use weights 400 and 600 only. · Use sizes 14, 16, 24 and 64px. · Set one headline per screen and keep it under 8 words. · Set labels at 12px in the muted colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | One neutral family in 2 weights. |
| DM Sans | DM Sans | A soft geometric voice with open shapes. |
| Manrope | Manrope | A modern sans with calm, even rhythm. |

## Colour & lighting

- **Palette structure:** White, near-black and one quiet accent.
- **Contrast rules:** Ink on paper holds 17:1; the accent marks 1 action per screen and holds 4.5:1 for text.
- **Surface treatment:** Flat fields with no gradient and no texture.
- **Light and shadow:** No shadow; depth comes from space and order.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#FAFAF8` | background |
| Panel | `#F0F0EC` | surface |
| Ink | `#161616` | text |
| Stone | `#55554F` | secondary text |
| Signal | `#2F5BEA` | primary |
| Signal Ink | `#1E3FB0` | accent |
| Hairline | `#D9D9D3` | border |

## Materiality & texture

- **Surface simulation:** A matt, flat surface like white paper.
- **Border rules:** A 1px hairline at 12% opacity, used rarely.
- **Blur and elevation:** No blur; no elevation.

## Ornamentation & iconography

- **Iconography:** One outline icon set at 1.5px, used only where the word is unclear.
- **Illustration:** None, or a single photograph at full width with no frame.
- **Decorative elements:** white space · single accent · hairline rule · one headline

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Quiet: short fades and 8px slides; no bounce; no loop; motion only confirms a change.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover underlines or darkens the accent by 8% in 150ms; active state shifts it 1px.

## Code & token primer

Set `data-style="minimalism-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="minimalism-web"] {
  --color-bg: #FAFAF8;
  --color-surface: #F0F0EC;
  --color-text: #161616;
  --color-muted: #55554F;
  --color-primary: #2F5BEA;
  --color-accent: #1E3FB0;
  --color-border: #D9D9D3;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #161616;
  --color-on-surface: #161616;
  --color-on-primary: #FAFAF8;
  --color-on-accent: #FAFAF8;
  --color-muted-on-bg: #55554F;
  --color-muted-on-surface: #55554F;
  --color-link: #1E3FB0;
  --color-link-on-surface: #1E3FB0;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.02em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(100deg, var(--color-bg) 18%, transparent 52%),
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 30%, transparent) 1.1px, transparent 1.6px) 0 0 / 24px 24px,
    radial-gradient(55% 60% at 82% 40%, color-mix(in oklab, var(--color-primary) 26%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FAFAF8] text-[#161616] font-sans antialiased` |
| heading | `text-4xl md:text-6xl font-semibold leading-[1.1] tracking-[-0.02em]` |
| body | `text-base leading-[1.6]` |
| section | `rounded border border-[#D9D9D3] bg-[#F0F0EC] p-8` |
| button | `rounded bg-[#2F5BEA] px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-[#1E3FB0]` |
| label | `text-xs uppercase tracking-[0.04em] text-[#55554F]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, neutral outline family that stays quiet next to plain type. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.02em, leading 1.1, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, left aligned, airy density, accent tilt 0°.
- **Ground:** dot-grid. Minimalism keeps the field almost empty: a faint dot grid and one small light of colour. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Modular grid (process)

A page or screen divided into equal columns and rows; each element fits a cell or a block of cells, so that the whole layout repeats one measure. Origin: graphic & ui design, Zurich, c. 1958.

- Divide the page into 4 to 12 equal columns with a gutter of 1/10 to 1/5 of a column width.
- Cut the page into rows of the same module height; align each image and text block to the lines.
- Set text on a baseline grid of one line height, and use 1 to 2 type sizes for each level.
- Scale an image by a whole number of modules.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Awwwards** (platform, web, 2009–now), published the style. A web site that gives awards to web design. Designers post sites there, and its daily picks spread trends of the expressive web.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #2F5BEA | #2F5BEA, #1E3FB0, #161616 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #1E3FB0 | #1E3FB0, #2F5BEA | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 2–6 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **warmer**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Add a serif for headlines and a paper tint; keep the space.
- If the user asks for **more crafted**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Add a strict 12-column grid and a bold red accent.
- If the user asks for **softer**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Replace the grey by pastel haze and a light serif.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`skeuomorphism`](../skeuomorphism/SKILL.md)
- **Was rejected by:** [`cyberpunk-web`](../cyberpunk-web/SKILL.md)
- **Mixes well with:** [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`luxury-typography-web`](../luxury-typography-web/SKILL.md), [`surrealism-web`](../surrealism-web/SKILL.md)
- **Kin in another domain:** [`minimalist-fashion`](../minimalist-fashion/SKILL.md), [`minimalist-interior`](../minimalist-interior/SKILL.md), [`super-normal-product`](../super-normal-product/SKILL.md)
- **Nearest by vector profile:** [`flat-design`](../flat-design/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md)

## Emotional target

The viewer feels calm, focused and free of noise.

**Keywords:** calm, clear, focused, honest, light, precise · **Brand archetypes:** sage, creator

## Sources

- Example: Apple product pages (2013–2025)
- Example: Linear and Stripe marketing pages (2019–2025)
- Example: Dieter Rams, Less but better (1970s)

---

Generated from [`data/design/styles/minimalism-web.json`](../../data/design/styles/minimalism-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
