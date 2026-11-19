---
name: normcore
description: "Apply the Normcore style (2013–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: normcore, dad jeans, plain basics, anti-fashion, unbranded, white trainers."
domain: internet
era: touchscreen
triggers:
  - "normcore"
  - "dad jeans"
  - "plain basics"
  - "anti-fashion"
  - "unbranded"
  - "white trainers"
  - "default look"
  - "ordinary style"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 1
---

# Normcore

> Choose sameness over difference: a look that blends in is a calm answer to a feed that rewards standing out.

Plain, unbranded clothes and plain pages: grey fleece, white trainers, dad jeans, default fonts and flat daylight snapshots. A trend report named it in 2013, and a magazine story spread it.

**Period:** 2013–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Anti-fashion, Plain basics

## When to load this skill

Load it when the user asks for: "normcore", "dad jeans", "plain basics", "anti-fashion", "unbranded", "white trainers", "default look", "ordinary style".

Good for: basics and workwear shops, utility product pages, portfolio sites for quiet brands, documentation-style catalogues.

Do not use it when:
- The brand must stand out in a crowded feed.
- The product needs a bold story or a visible logo.
- The page needs strong emotion or a festive tone.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Normcore, you MUST:

1. Set the page on a light grey (#F2F2F0) or white ground with one denim blue (#35597F) for links and buttons.
2. Use one neutral sans-serif in two weights, 400 and 600, at sizes 14, 16, 20 and 32px.
3. Show products or people in flat daylight, shot front-on at eye level with no filter and no props.
4. Keep a single column of 640px to 720px with 24px side margins and 32px between blocks.
5. Write labels as plain nouns: "Jeans", "Fleece", "Cart". Use no slogan and no exclamation mark.
6. Keep corners at 4px and borders at 1px in #D4D4D0; use no shadow and no gradient.
7. Cap the palette at 4 neutrals and 1 blue, and set every logo or brand mark at small size or not at all.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Loud brand logos or monograms.
- **NEVER:** Hero gradients and neon accents.
- **NEVER:** Styled or retouched photography.
- **NEVER:** Display fonts with character.
- **NEVER:** Dramatic shadows and glass panels.
- **NEVER:** Slogans that claim a lifestyle.
- **NEVER:** Dense decoration of any kind.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column of 640px to 720px on a 4-column base with 24px gutters; product grids use 3 equal columns with 16px gaps.
- **Whitespace ratio:** 45% to 60% of the surface stays empty; the spacing scale is 8, 16, 24 and 32px.
- **Alignment rules:** Flush-left text and flush-left images; nothing floats, overlaps or tilts.
- **Container geometry:** Rectangles with a 4px radius and a 1px grey border; no shadow; photographs at a 4:5 or 1:1 crop with no frame.

## Typography

- **Classifications:** neutral sans-serif · system sans
- **Tracking:** Display 0 to -0.01em; body 0; labels 0.02em.
- **Leading:** Display 1.2; body 1.6.
- **Hierarchy rules:** Use two weights: regular (400) and semibold (600). · Use sizes 14, 16, 20 and 32px. · Set headings in sentence case, never in capitals. · Set prices and sizes in the body weight, in grey.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | A neutral grotesque that reads as a system default. |
| Arimo | Arimo | An open metric match for Arial, the default face of an office document. |
| Work Sans | Work Sans | A plain sans with a slightly wider form for labels and captions. |

## Colour & lighting

- **Palette structure:** Four neutral greys and whites with one denim blue and one muted green-grey.
- **Contrast rules:** Ink on grey and on white holds 12:1; muted text holds 5:1 or more; denim carries buttons and links only.
- **Surface treatment:** Flat fills only; photographs have no filter and no vignette.
- **Light and shadow:** No cast shadow; daylight in photographs is even and slightly cool.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Fleece Grey | `#F2F2F0` | background |
| White | `#FFFFFF` | surface |
| Ink | `#1F2328` | text |
| Denim | `#35597F` | primary |
| Sage Grey | `#6B7F73` | accent |
| Hairline | `#D4D4D0` | border |
| Slate | `#5A5F66` | muted text |

## Materiality & texture

- **Surface simulation:** Cotton jersey, fleece and denim, shown as flat, unstyled product shots.
- **Border rules:** A 1px border in #D4D4D0 on cards and inputs; focus shows a 2px denim ring.
- **Blur and elevation:** No blur and no elevation; layers are separated by a border, not a shadow.

## Ornamentation & iconography

- **Iconography:** Outline icons at 20px with 1.5px strokes and round caps; no container tile.
- **Illustration:** Plain catalogue photographs, a size chart and a basic line drawing of a garment; no illustration style.
- **Decorative elements:** hairline rule · plain product grid · size chart · default system label

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Short, quiet changes: a fade of 150ms; page changes cut at once with no slide.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 150
- **Hover and active:** Hover underlines a link and darkens a button by 8%; active state moves the element by 0px.

## Code & token primer

Set `data-style="normcore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="normcore"] {
  --color-bg: #F2F2F0;
  --color-surface: #FFFFFF;
  --color-text: #1F2328;
  --color-muted: #5A5F66;
  --color-primary: #35597F;
  --color-accent: #6B7F73;
  --color-border: #D4D4D0;
  --font-sans: "Inter", "Arimo", Arial, sans-serif;
  --font-display: "Inter", "Arimo", Arial, sans-serif;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 150ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1F2328;
  --color-on-surface: #1F2328;
  --color-on-primary: #F2F2F0;
  --color-on-accent: #000000;
  --color-muted-on-bg: #5A5F66;
  --color-muted-on-surface: #5A5F66;
  --color-link: #35597F;
  --color-link-on-surface: #35597F;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: -0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F2F2F0] text-[#1F2328] font-sans antialiased px-6 md:px-12` |
| heading | `text-2xl md:text-4xl font-semibold leading-[1.2] tracking-tight` |
| body | `text-base leading-[1.6] max-w-[44rem]` |
| section | `rounded border border-[#D4D4D0] bg-white p-6` |
| button | `rounded border border-[#35597F] bg-[#35597F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2B4A6B]` |
| label | `text-xs font-semibold tracking-[0.02em] text-[#5A5F66]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, neutral outline family that looks like a default system set. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.01em, leading 1.2, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 600, labels and buttons 600. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, left aligned, airy density, accent tilt 0°.
- **Ground:** raw. A normcore page shows no ground at all: a flat light grey, the colour of a plain fleece. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Unstyled frontal snapshot (skill)

A photograph that hides its own styling: the subject faces the camera in flat daylight, with no prop, no filter and no pose. Origin: internet, New York, 2013.

- Place the camera at eye height, 1.5m to 2m from the subject.
- Shoot in open shade or overcast daylight, with no flash.
- Centre the subject and keep a neutral wall or a plain street behind it.
- Do not apply a filter, a vignette or a grade beyond a white balance.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Instagram** (platform, web, 2010–now), published the style. A photo and video app. Home and food images spread on it, and it carried trends such as dopamine decor and the film grain look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #35597F | #35597F, #6B7F73, #1F2328 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #6B7F73 | #6B7F73, #35597F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.125–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more refined**: move toward [`clean-girl`](../clean-girl/SKILL.md) (Clean girl). Warm the greys to cream, add glossy skin tones and a soft sheen; keep the single column.
- If the user asks for **more hidden luxury**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Raise the whitespace to 70% and use one fine serif for headings; remove the blue.
- If the user asks for **more outdoors**: move toward [`wabi-sabi-web`](../wabi-sabi-web/SKILL.md) (Wabi-Sabi Web). Replace the blue with moss and clay, and add a rough paper ground.

- **Came from (go here for a more orthodox version):** [`minimalism-web`](../minimalism-web/SKILL.md)
- **Led to (go here for a newer version):** [`clean-girl`](../clean-girl/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`vaporwave`](../vaporwave/SKILL.md)
- **Was rejected by:** [`goblincore`](../goblincore/SKILL.md)
- **Kin in another domain:** [`gorpcore`](../gorpcore/SKILL.md), [`minimalist-fashion`](../minimalist-fashion/SKILL.md), [`new-topographics`](../new-topographics/SKILL.md), [`super-normal-product`](../super-normal-product/SKILL.md)
- **Nearest by vector profile:** [`tweet-screenshot-meme`](../tweet-screenshot-meme/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`flat-lay-feed`](../flat-lay-feed/SKILL.md)

## Emotional target

The viewer feels at ease, unobserved and unpressed to perform an identity.

**Keywords:** plain, calm, unbranded, ordinary, relaxed, deadpan · **Brand archetypes:** everyman, sage

## Sources

- [Wikipedia: Normcore](https://en.wikipedia.org/wiki/Normcore)
- K-Hole, Youth Mode: A Report on Freedom (2013)
- Fiona Duncan, Normcore: Fashion Movement or Joke (New York Magazine, 2014)

---

Generated from [`data/internet/styles/normcore.json`](../../data/internet/styles/normcore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
