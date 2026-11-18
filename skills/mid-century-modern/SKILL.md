---
name: mid-century-modern
description: "Apply the Mid-Century Modern style (1945–1969) when generating UI or graphic layouts. Load when the user asks for: mid-century, mid century modern, mcm, atomic age, 1950s modern, eames."
domain: design
era: modernist
triggers:
  - "mid-century"
  - "mid century modern"
  - "mcm"
  - "atomic age"
  - "1950s modern"
  - "eames"
  - "retro warm"
  - "mustard and teal"
  - "boomerang"
  - "saul bass"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Mid-Century Modern

> Modernist form can be warm and humane when abstract shapes, natural materials and a small earth palette serve everyday life.

Organic and geometric shapes in mustard, teal, orange and walnut, with slab and geometric type and wide margins. It grew from Bauhaus in postwar America and Scandinavia, and it added warmth and play to modernist order.

**Period:** 1945–1969 · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** MCM, Atomic Age Design, Mid-Century Graphic Design

## When to load this skill

Load it when the user asks for: "mid-century", "mid century modern", "mcm", "atomic age", "1950s modern", "eames", "retro warm", "mustard and teal", "boomerang", "saul bass".

Good for: lifestyle brands, furniture and home stores, cafes and restaurants, podcasts and editorial, airline and travel heritage.

Do not use it when:
- The product is a dense data tool that needs a neutral grid and a monochrome palette.
- The brand must feel futuristic, cold or high-tech.
- The audience expects a sharp, high-contrast, brutalist voice.

## System directives

When generating UI or graphic layouts in Mid-Century Modern, you MUST:

1. Draw shapes from two families only: organic forms such as boomerangs, kidneys and atoms, and clean geometry such as circles and rectangles.
2. Limit the palette to 4 or 5 colours: mustard, teal, burnt orange, olive and walnut on warm off-white.
3. Set headlines in a geometric or slab face and body text in a humanist or grotesque sans serif.
4. Leave margins of at least 10% of the page width, and place one illustration as the focal point.
5. Use asymmetric balance on a 6-column grid, and tilt secondary shapes by 10 to 20 degrees.
6. Flatten illustration into 2 to 4 colour layers with slight misregistration of 2px to 4px.
7. Pair every ornament with a function: a label, a divider or a pointer.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Neon or pure saturated primaries in place of muted earth tones.
- **NEVER:** Dense Victorian ornament and script lettering.
- **NEVER:** Glossy gradients, bevels and photorealistic wood textures.
- **NEVER:** Hard black outlines of 4px or more on every shape.
- **NEVER:** Centred, symmetrical layouts with equal margins on all sides.
- **NEVER:** Cool grey monochrome palettes with no warm hue.
- **NEVER:** Body text in condensed display faces.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 6-column grid with 24px gutters and an 8px baseline; one hero shape may break the grid by up to 48px.
- **Whitespace ratio:** 35–50% of the surface stays empty; the spacing scale is 8, 16, 32, 64 and 96px.
- **Alignment rules:** Flush left text with asymmetric balance; the focal shape sits on a third line, and secondary shapes tilt 10 to 20 degrees off axis.
- **Container geometry:** Cards use a 12px radius or a full 999px pill; panels may take organic kidney or boomerang outlines; image masks use circles.

## Typography

- **Classifications:** geometric sans serif · slab serif · humanist sans serif
- **Tracking:** Display sizes take -0.01em to +0.02em; body stays at 0; small upper-case labels take +0.08em.
- **Leading:** Display 1.1; body 1.55; line-heights are multiples of the 8px baseline.
- **Hierarchy rules:**
  - Use weights 400 and 700 for body and labels, and 600 to 800 for display.
  - Use four sizes, for example 16, 24, 40 and 72px, with ratios near 1.5.
  - Set headlines in lower case or sentence case, and put a small upper-case label above each one.
  - Colour one word of each headline in teal or orange to mark the key term.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Josefin Sans | Source Sans 3 | Geometric display with a humanist text face. |
| Zilla Slab | Nunito Sans | A slab headline for the diner and signage register. |
| Lexend | Work Sans | Wide geometric display with a plain grotesque body. |
| Fraunces | DM Sans | A soft serif headline for the furniture-catalogue register. |

## Colour & lighting

- **Palette structure:** Warm off-white ground with 4 muted hues; walnut for text, mustard and orange as warm accents at 10–20%, teal as the cool counterweight.
- **Contrast rules:** Walnut on cream holds at least 11:1; mustard and orange carry large type or fills only, and white type on teal holds at least 5:1.
- **Surface treatment:** Flat colour fields with a subtle paper grain at 3–5% opacity; no gloss and no gradient.
- **Light and shadow:** No lit surfaces; where a shadow is needed, use a flat offset block of walnut at 15% opacity with a 4px offset and 0px blur.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream | `#F6EEDC` | background |
| Walnut | `#3B2A20` | text |
| Mustard | `#E0A526` | primary accent |
| Teal | `#1F7A7A` | secondary accent |
| Burnt Orange | `#D2602B` | call to action |
| Olive | `#7A7A33` | tertiary accent |

## Materiality & texture

- **Surface simulation:** Printed screen-print stock and moulded plywood; surfaces imitate matte paper and do not simulate relief.
- **Border rules:** Solid walnut lines of 1px to 2px for dividers; shapes have no outline and rely on colour fills.
- **Blur and elevation:** No blur; elevation uses one flat offset shadow of 4px 4px 0 at 15% walnut.

## Ornamentation & iconography

- **Iconography:** Solid two-colour pictograms with rounded 2px terminals, based on atoms, stars and boomerangs; outline icons use a 2px stroke.
- **Illustration:** Flat spot-colour illustration in 2 to 4 layers, stylised figures with simple geometric heads, and 2px to 4px misregistration offsets.
- **Decorative elements:** atomic starbursts · boomerang and kidney shapes · dotted and dashed dividers · tilted colour blocks · circular image masks

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: shapes slide in and settle with a small overshoot of 4% and no spring oscillation; layers enter in a stagger of 60ms.
- **Easing:** cubic-bezier(0.34, 1.2, 0.64, 1)
- **Duration (ms):** 280
- **Hover and active:** Hover tilts a shape by 3 degrees and shifts the offset block by 2px; active returns it to 0 degrees with a mustard fill.

## Code & token primer

Set `data-style="mid-century-modern"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="mid-century-modern"] {
  --color-bg: #F6EEDC;
  --color-surface: #FFF9EA;
  --color-text: #3B2A20;
  --color-muted: #6B5646;
  --color-primary: #1F7A7A;
  --color-accent: #D2602B;
  --color-border: #3B2A20;
  --font-sans: "Source Sans 3", "Nunito Sans", "Gill Sans", "Helvetica Neue", sans-serif;
  --font-display: "Josefin Sans", "Zilla Slab", "Futura", Georgia, serif;
  --border-radius: 12px;
  --border-width: 2px;
  --shadow-elevation: 4px 4px 0 rgba(59, 42, 32, 0.15);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.2, 0.64, 1);
  --duration: 280ms;
  --color-highlight: #E0A526;
  --grid-columns: 6;
  --grid-gutter: 24px;
  --leading-body: 1.55;
  --color-on-bg: #3B2A20;
  --color-on-surface: #3B2A20;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #000000;
  --color-muted-on-bg: #6B5646;
  --color-muted-on-surface: #6B5646;
  --color-link: #3B2A20;
  --color-link-on-surface: #1F7A7A;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 17px;
  --icon-stroke: 2;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F6EEDC] text-[#3B2A20] font-sans antialiased grid grid-cols-6 gap-x-6 px-6 md:px-16` |
| heading | `col-span-6 md:col-span-4 text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-[#1F7A7A]` |
| card | `rounded-xl border-2 border-[#3B2A20] bg-[#FFF9EA] p-6 shadow-[4px_4px_0_rgba(59,42,32,0.15)]` |
| button | `rounded-full bg-[#D2602B] px-7 py-3 text-sm font-bold text-white transition-transform duration-[280ms] hover:-rotate-3 hover:bg-[#E0A526] hover:text-[#3B2A20]` |
| image mask | `aspect-square rounded-full object-cover border-2 border-[#3B2A20]` |
| label | `text-xs font-bold uppercase tracking-[0.08em] text-[#7A7A33]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: Solid forms with soft corners: the organic silhouette of the period, with no outline. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0.01em, leading 1.05, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 600, 700) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 17px, leading 1.6.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
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

- If the user asks for **more rigorous**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Move to a 12-column grid, drop to one typeface and one accent, and set the radius to 0px; keep the cream ground.
- If the user asks for **more austere**: move toward [`bauhaus`](../bauhaus/SKILL.md) (Bauhaus). Cut the palette to red, blue and yellow with black, replace organic shapes with circle, square and triangle; keep the asymmetry.
- If the user asks for **more trippy**: move toward [`psychedelic`](../psychedelic/SKILL.md) (Psychedelic). Raise saturation of mustard and orange to #FF6A00 and magenta, add concentric wavy outlines; keep the flat layers and the geometric type.
- If the user asks for **bolder**: move toward [`memphis-design`](../memphis-design/SKILL.md) (Memphis Design). Add pink and black with squiggle and confetti patterns on 3px outlines; keep the flat fills and the tilted blocks.

- **Came from (go here for a more orthodox version):** [`bauhaus`](../bauhaus/SKILL.md)
- **Led to (go here for a newer version):** [`pop-art-web`](../pop-art-web/SKILL.md), [`space-age`](../space-age/SKILL.md)
- **Was rejected by:** [`punk-zine`](../punk-zine/SKILL.md)
- **Mixes well with:** [`swiss-international`](../swiss-international/SKILL.md)
- **Kin in another domain:** [`mid-century-modern-architecture`](../mid-century-modern-architecture/SKILL.md), [`mid-century-modern-interior`](../mid-century-modern-interior/SKILL.md)
- **Nearest by vector profile:** [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`space-age`](../space-age/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md)

## Emotional target

Optimism with ease: the viewer feels welcome, relaxed and confident in a well-made, human-scaled world.

**Keywords:** warm, optimistic, playful, organic, crafted, nostalgic · **Brand archetypes:** everyman, creator, caregiver

## Sources

- Cara Greenberg, Mid-Century Modern: Furniture of the 1950s (Harmony Books, 1984)
- Steven Heller and Louise Fili, Mid-Century Modern Graphic Design (Thames & Hudson, 2020)

---

Generated from [`data/design/styles/mid-century-modern.json`](../../data/design/styles/mid-century-modern.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
