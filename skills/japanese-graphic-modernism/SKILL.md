---
name: japanese-graphic-modernism
description: "Apply the Japanese Graphic Modernism style (1951–1980s) when generating UI or graphic layouts. Load when the user asks for: japanese graphic design, kamekura, ikko tanaka, tokyo 1964, olympic poster, gurafiku."
domain: design
era: modernist
triggers:
  - "japanese graphic design"
  - "kamekura"
  - "ikko tanaka"
  - "tokyo 1964"
  - "olympic poster"
  - "gurafiku"
  - "katakana"
  - "showa graphic"
  - "nihon modern"
  - "japanese poster"
  - "japanese 80s"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Japanese Graphic Modernism

> A single symbolic form on a quiet grid carries the whole message, and Japanese and Latin letters share the page as equal graphic material.

Flat geometric forms in red and black, symbolic circles and triangles, soft colour bands, and dense kanji and katakana set against Latin type. It grew from the Japan Advertising Artists Club of 1951 and the Tokyo 1964 Olympic posters.

**Period:** 1951–1980s · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** Nihon Modern Graphic Design, JAAC Modernism, Tokyo Olympic Graphics

## When to load this skill

Load it when the user asks for: "japanese graphic design", "kamekura", "ikko tanaka", "tokyo 1964", "olympic poster", "gurafiku", "katakana", "showa graphic", "nihon modern", "japanese poster", "japanese 80s".

Good for: posters and exhibition identities, cultural venues and theatres, editorial and book covers, sports events, music and lighting brands.

Do not use it when:
- The brief needs a traditional Edo look; use ukiyo-e.
- The text is dense, long-form Latin copy with no symbolic image.
- The brand is Japanese in name only and the style would be a costume.

## System directives

When generating UI or graphic layouts in Japanese Graphic Modernism, you MUST:

1. Build each poster on one primary geometric form, such as a circle, a triangle or a stripe, that fills 40 to 70% of the sheet.
2. Use red (#D7261E) and black as the base pair, with white paper at 40% or more of the surface.
3. Add one gradient colour band of 3 to 7 stepped bands, fading from cyan to violet, only when the brief asks for the 1980s register.
4. Set Japanese text in vertical or horizontal blocks of 6 to 14 characters per line, with Latin type at 1/2 to 1/3 of the size beside it.
5. Align type blocks to a 12-column grid, then break the grid once with the symbolic form.
6. Reduce photography to high-contrast black and white or to flat colour silhouettes with no mid-tone.
7. Leave 20 to 30% of the sheet as quiet paper, so that the form has a margin (ma) around it.
8. Make a visual pun or a symmetrical, mirrored form when the idea allows it: one shape read in two ways.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Cherry blossom, fan and temple clip art used as a Japanese signal.
- **NEVER:** Brush-script or fake calligraphic fonts for katakana and Latin type.
- **NEVER:** Centred, symmetric layouts with equal weight in every corner.
- **NEVER:** Soft shadows, glass and glossy bevels.
- **NEVER:** A smooth gradient across the full sheet in place of stepped colour bands.
- **NEVER:** More than 3 type sizes in one block, or mixed Gothic and Mincho in one line.
- **NEVER:** Western Swiss grids copied without a symbolic form to break them.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 16px gutters and an 8px baseline; Japanese text blocks run horizontally or vertically in 1 to 3 columns, and the symbolic form may break the grid by one column.
- **Whitespace ratio:** 20–40% of the sheet stays quiet paper; the spacing scale is 8, 16, 32, 64 and 128px.
- **Alignment rules:** Horizontal text is flush left; vertical text is flush to the top and the right edge; Latin captions align to the baseline of the first Japanese line.
- **Container geometry:** Sharp rectangles, perfect circles and equilateral triangles; radius is 0px, with a circle used as a 1:1 mask.

## Typography

- **Classifications:** Japanese Gothic (kaku gothic) · neo-grotesque sans serif · Japanese Mincho
- **Tracking:** Japanese display sizes take 0 to +0.04em; Latin display takes -0.02em; small Latin labels take +0.08em.
- **Leading:** Japanese body 1.8; display 1.2; line-heights are multiples of the 8px baseline.
- **Hierarchy rules:**
  - Use weights 900 for display, 700 for subheads, 400 for body, 700 for strong words and 500 for labels.
  - Use three sizes only, for example 14, 32 and 96px, with a step of 2.5 or more.
  - Set one Latin line in the same colour as the Japanese block, at 1/3 of its size, as a counter-voice.
  - Colour only one block in red; the rest stays black.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Zen Kaku Gothic New | Noto Sans JP | A modern Gothic for kanji and kana at display size, with a plain text face; the Latin glyphs come from the same families. |
| Dela Gothic One | Zen Kaku Gothic New | A heavy, compact display face for a 1960s Olympic-poster voice. |
| Shippori Mincho B1 | Noto Sans JP | A Mincho headline for a quieter, more literary poster; keep it to one line. |

## Colour & lighting

- **Palette structure:** Warm white paper, black type, one Hinomaru red as the base accent, and an optional cyan-to-violet band for the 1980s register.
- **Contrast rules:** Black on paper holds at least 15:1; red carries large type or solid fields; white type on red holds at least 4.5:1.
- **Surface treatment:** Flat, opaque fields of solid colour; gradient colour bands are made of 3 to 7 stepped stripes, each solid, and never a smooth blend.
- **Light and shadow:** No light source; where the 1980s bands fade, the fade is an ordered step in lightness of 8% to 12% a band.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Washi Paper | `#F7F3EA` | background |
| Sumi Black | `#111111` | text and primary shapes |
| Hinomaru Red | `#D7261E` | main accent |
| Band Cyan | `#19B5D6` | gradient band, 1980s |
| Band Violet | `#6C3FB5` | gradient band, 1980s |
| Ash Grey | `#5A5A57` | secondary text |

## Materiality & texture

- **Surface simulation:** Offset-printed ink on uncoated paper; the surface does not imitate any other material.
- **Border rules:** Solid black rules of 2px to 4px as dividers; the symbolic form has no outline.
- **Blur and elevation:** No blur and no elevation; box-shadow and backdrop-filter stay at none.

## Ornamentation & iconography

- **Iconography:** Solid geometric pictograms with square terminals on a grid of 24px; circle, triangle and bar are the root forms.
- **Illustration:** Symbolic geometry, mirrored faces and visual puns in 2 to 3 flat colours; photography is cut into high-contrast silhouettes.
- **Decorative elements:** a single large circle · stacked triangles · stepped colour bands · vertical kanji blocks · thick black rules · mirrored forms

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: shapes slide along one axis and stop, with no bounce; colour bands wipe in one stripe at a time, 60ms apart.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 220
- **Hover and active:** Hover swaps black and red on the block; active shifts the form by 8px along its axis; nothing scales or glows.

## Code & token primer

Set `data-style="japanese-graphic-modernism"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="japanese-graphic-modernism"] {
  --color-bg: #F7F3EA;
  --color-surface: #EDE7D8;
  --color-text: #111111;
  --color-muted: #5A5A57;
  --color-primary: #D7261E;
  --color-accent: #6C3FB5;
  --color-border: #111111;
  --font-sans: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Zen Kaku Gothic New", "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 220ms;
  --color-highlight: #19B5D6;
  --grid-columns: 12;
  --grid-gutter: 16px;
  --tracking-display: 0.01em;
  --leading-body: 1.8;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #F7F3EA;
  --color-on-accent: #F7F3EA;
  --color-muted-on-bg: #5A5A57;
  --color-muted-on-surface: #5A5A57;
  --color-link: #6C3FB5;
  --color-link-on-surface: #6C3FB5;
  --display-weight: 900;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.8;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: repeating-radial-gradient(circle at 78% 42%, transparent 0 33vmin, color-mix(in oklab, var(--color-accent) 30%, transparent) 33vmin calc(33vmin + 1px), transparent calc(33vmin + 1px) 37vmin),
    radial-gradient(circle at 78% 42%, var(--color-primary) 0 28vmin, transparent calc(28vmin + 1px)),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.11%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F7F3EA] text-[#111111] font-sans antialiased grid grid-cols-12 gap-x-4 px-6 md:px-12` |
| heading | `col-span-12 md:col-span-8 text-6xl md:text-8xl font-black leading-[1.2] tracking-[0.01em]` |
| section | `col-span-12 border-t-4 border-[#111111] pt-4 mt-16` |
| button | `rounded-none border-2 border-[#111111] bg-[#D7261E] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#111111]` |
| form shape | `aspect-square rounded-full bg-[#D7261E]` |
| label | `text-xs font-medium uppercase tracking-[0.08em] text-[#5A5A57]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Material Symbols (Sharp, filled) by Google, licence Apache 2.0. Reason: Solid forms with square terminals and mitre corners: the circle, bar and triangle of a Gothic grid, with no soft edge. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 900, tracking 0.01em, leading 1.2, case: none.
- **Weights:** display 900, subhead 700, body 400, bold in text 700, labels and buttons 500. The style uses 4 weights (400, 500, 700, 900) and no other. The display is 500 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.8.
- **Page:** hero poster, left aligned, airy density, accent tilt 0°.
- **Ground:** sun. Japanese post-war posters use one large disc of red as the whole composition. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Primary shapes (motif)

The circle, the square and the triangle in flat colour, used as the whole picture or as a sign. Origin: painting, Petrograd, Russia, 1915.

- Use 1 to 3 shapes at large size; let one shape fill 30% to 60% of the frame.
- Fill each shape with one flat colour; no gradient and no outline.
- Put the shapes on a plain ground with 30% or more empty space.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Idea** (magazine, Tokyo, ?–now), published the style. A Japanese magazine of graphic design. It printed the posters and marks of the Japanese modernists next to work from Europe and America.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #D7261E | #D7261E, #6C3FB5, #111111 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #6C3FB5 | #6C3FB5, #D7261E | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more neutral**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Drop the symbolic form and the vertical kanji, set one Latin neo-grotesque, and keep the 12-column grid and the single red accent.
- If the user asks for **more pop**: move toward [`pop-art-web`](../pop-art-web/SKILL.md) (Pop Art (web)). Add halftone dots at 8px, a yellow field and a thick outline of 3px; keep the flat form and the red.
- If the user asks for **more psychedelic**: move toward [`psychedelic`](../psychedelic/SKILL.md) (Psychedelic). Replace the stepped bands with warped concentric rings in magenta and orange, and let the type bend; keep the circular form.
- If the user asks for **more constructed**: move toward [`bauhaus`](../bauhaus/SKILL.md) (Bauhaus). Cut the palette to red, blue and yellow with black, use circle, square and triangle in equal weight, and drop the Japanese text; keep the asymmetry.

- **Came from (go here for a more orthodox version):** [`bauhaus`](../bauhaus/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Mixes well with:** [`pop-art-web`](../pop-art-web/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md)
- **Kin in another domain:** [`swiss-modernist-mark`](../swiss-modernist-mark/SKILL.md), [`ukiyo-e`](../ukiyo-e/SKILL.md)
- **Nearest by vector profile:** [`bauhaus`](../bauhaus/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md)

## Emotional target

Calm precision with a pulse: the viewer reads one clear symbol first, then finds a second layer of meaning in the type and the quiet space.

**Keywords:** precise, symbolic, bold, quiet, witty, graphic · **Brand archetypes:** creator, sage, ruler

## Sources

- [Gurafiku: Japanese graphic design (collection of posters and print)](https://gurafiku.tumblr.com)
- Richard S. Thornton, The Graphic Spirit of Japan (Van Nostrand Reinhold, 1991)
- [Design Reviewed: an archive of 20th-century graphic design and print](https://designreviewed.com)

---

Generated from [`data/design/styles/japanese-graphic-modernism.json`](../../data/design/styles/japanese-graphic-modernism.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
