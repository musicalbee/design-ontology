---
name: wabi-sabi-web
description: "Apply the Wabi-Sabi Web style (2015–now) when generating UI or graphic layouts. Load when the user asks for: wabi-sabi, wabi sabi, imperfect, earth tones, japanese minimal, slow design."
domain: design
era: contemporary-spatial
triggers:
  - "wabi-sabi"
  - "wabi sabi"
  - "imperfect"
  - "earth tones"
  - "japanese minimal"
  - "slow design"
  - "ceramic"
  - "plaster"
vector_profile:
  ornamentation: 1
  dimensionality: 4
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 1
---

# Wabi-Sabi Web

> Imperfection is beauty: a worn, quiet surface shows time and honest craft.

Muted earth tones, rough textures, uneven edges, much quiet space and small, calm type. It finds beauty in what is imperfect, old and incomplete, and it is the slow side of minimal design.

**Period:** 2015–now · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Wabi-sabi, Imperfect minimal web, Japanese earth web

## When to load this skill

Load it when the user asks for: "wabi-sabi", "wabi sabi", "imperfect", "earth tones", "japanese minimal", "slow design", "ceramic", "plaster".

Good for: ceramics, tea and craft brands, slow-living, home and hospitality sites, architecture and interior studios, wellness and mindfulness apps, journals and photography portfolios.

Do not use it when:
- The page needs conversion pressure and urgency.
- The product has many features to list.
- The audience needs high-energy visuals.

## System directives

When generating UI or graphic layouts in Wabi-Sabi Web, you MUST:

1. Use a ground of unbleached tones (#EAE4D8, #D9D1C1) and text in a warm charcoal (#3B3833); keep the palette to 4 muted colours at 10% to 35% saturation.
2. Add paper, plaster or clay texture at 4% to 10% opacity and let tone vary by 3% to 6% across a surface.
3. Leave 55% to 75% of each screen empty and place 1 focal item off-centre by 8% to 15%.
4. Set headings in a calm serif or a light sans at weight 300 to 400, size 28px to 56px, with tracking of +0.02em to +0.08em.
5. Round edges unevenly: use radii of 2px, 6px, 14px and 4px on the four corners of an image or shape.
6. Cut borders: use a 1px line at 20% opacity or none; mark the sections with 96px to 160px of space.
7. Animate slowly: fades of 800ms to 1200ms; one motion at a time.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Bright, saturated colours.
- **NEVER:** Glossy gradients and glass.
- **NEVER:** Perfectly symmetrical layouts.
- **NEVER:** Dense grids of many items.
- **NEVER:** Sharp perfect geometry with no texture.
- **NEVER:** Bold, heavy type.
- **NEVER:** Fast animation and popups.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** An asymmetric layout on a 12-column base; items sit off-centre and use only 2 to 4 columns of the width; long gaps divide the sections.
- **Whitespace ratio:** 55% to 75% of the surface is empty; the spacing scale is 16, 32, 64, 128 and 192px.
- **Alignment rules:** Flush left, with a ragged edge; vertical text in one place; centred only a single item.
- **Container geometry:** Uneven soft corners; irregular stone, ceramic and torn-paper silhouettes; thin 1px lines at 20%.

## Typography

- **Classifications:** light serif · humanist sans serif · Japanese mincho
- **Tracking:** Display takes +0.04em; body takes +0.02em.
- **Leading:** Display 1.3; body 1.8.
- **Hierarchy rules:**
  - Use weights 300 to 400 only.
  - Use sizes 14, 16, 28 and 56px.
  - Set headings in sentence case.
  - Set vertical text with `writing-mode: vertical-rl` for one short phrase.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Shippori Mincho | Zen Kaku Gothic New | A calm mincho with a brush-like softness. |
| Cormorant Garamond | Zen Kaku Gothic New | A light serif for Latin headings. |
| Zen Kaku Gothic New | Zen Kaku Gothic New | A plain, quiet sans for body text. |

## Colour & lighting

- **Palette structure:** Unbleached earth: clay, stone, moss, charcoal.
- **Contrast rules:** Charcoal on washi holds 10:1; stone holds at least 4.5:1; moss and rust mark one item per screen.
- **Surface treatment:** Matte, uneven fields with paper or plaster texture at 4% to 10%.
- **Light and shadow:** Soft and low: 0 6px 20px at 8% in a warm grey; no hard edge.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Washi | `#EAE4D8` | background |
| Plaster | `#D9D1C1` | surface |
| Charcoal | `#3B3833` | text |
| Stone | `#7C7466` | secondary text |
| Moss | `#7A8564` | accent |
| Rust | `#9B5B3C` | primary |

## Materiality & texture

- **Surface simulation:** Plaster, handmade paper, raw ceramic and aged wood.
- **Border rules:** A 1px line at 20% or no border; edges slightly uneven.
- **Blur and elevation:** No blur; a soft shadow of 0 6px 20px at 8%; one elevation level.

## Ornamentation & iconography

- **Iconography:** Fine 1.25px icons with round caps in charcoal; small, rare and often replaced by text.
- **Illustration:** Ceramics, stone, dried branches, plaster walls, linen and hand-made objects in soft light.
- **Decorative elements:** uneven corner · texture ground · off-centre focal · vertical text

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow and calm: fades of 800ms to 1200ms; items drift 8px; one thing moves at a time.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 1000
- **Hover and active:** Hover lifts the opacity of an image from 90% to 100% and underlines text with a 1px line in 600ms; active state dims it by 10%.

## Code & token primer

Set `data-style="wabi-sabi-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="wabi-sabi-web"] {
  --color-bg: #EAE4D8;
  --color-surface: #D9D1C1;
  --color-text: #3B3833;
  --color-muted: #7C7466;
  --color-primary: #9B5B3C;
  --color-accent: #7A8564;
  --color-border: #C9C1B0;
  --font-sans: "Zen Kaku Gothic New", system-ui, sans-serif;
  --font-display: "Shippori Mincho", "Cormorant Garamond", serif;
  --border-radius: 6px;
  --border-width: 1px;
  --shadow-elevation: 0 6px 20px rgba(59,56,51,0.08);
  --backdrop-filter: none;
  --space-unit: 16px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 1000ms;
  --color-on-bg: #3B3833;
  --color-on-surface: #3B3833;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #000000;
  --color-muted-on-bg: #5E5A54;
  --color-muted-on-surface: #5B574F;
  --color-link: #3B3833;
  --color-link-on-surface: #3B3833;
  --display-weight: 300;
  --subhead-weight: 300;
  --body-weight: 300;
  --strong-weight: 400;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.3;
  --display-case: none;
  --body-leading: 1.8;
  --body-size: 16px;
  --icon-stroke: 1.25;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#EAE4D8] text-[#3B3833] font-sans font-light antialiased` |
| heading | `font-light text-4xl md:text-6xl leading-[1.3] tracking-[0.04em]` |
| body | `text-base leading-[1.8] tracking-[0.02em]` |
| section | `rounded-[2px_6px_14px_4px] bg-[#D9D1C1] p-8` |
| button | `rounded-[2px_6px_14px_4px] border border-[#3B3833]/20 px-7 py-3 text-[#3B3833] transition duration-[600ms] hover:bg-[#3B3833] hover:text-[#EAE4D8]` |
| label | `text-sm text-[#7C7466]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.25 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A fine, calm line that adds little weight to a quiet page. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 300, tracking 0.04em, leading 1.3, case: none.
- **Weights:** display 300, subhead 300, body 300, bold in text 400, labels and buttons 400. The style uses 2 weights (300, 400) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.8.
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

- If the user asks for **more structure**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Set a strict 12-column grid, a neo-grotesque and a single red accent.
- If the user asks for **more airy**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Lighten to pastels, add haze and a glow.
- If the user asks for **more warm**: move toward [`bohemian-web`](../bohemian-web/SKILL.md) (Bohemian Web). Add terracotta, arches and a script accent.

- **Came from (go here for a more orthodox version):** [`swiss-international`](../swiss-international/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Kin in another domain:** [`japandi-interior`](../japandi-interior/SKILL.md)
- **Nearest by vector profile:** [`ethereal-web`](../ethereal-web/SKILL.md), [`material-design`](../material-design/SKILL.md), [`neumorphism`](../neumorphism/SKILL.md)

## Emotional target

The viewer feels slowed down and at ease with what is simple and worn.

**Keywords:** calm, humble, quiet, natural, slow, honest · **Brand archetypes:** sage, innocent

## Sources

- Example: Muji and Hasami Porcelain pages (2015–2025)
- Example: Kinfolk and Cereal magazine sites (2012–2025)
- Example: Aesop and Studio McGee slow-living pages (2018–2025)

---

Generated from [`data/design/styles/wabi-sabi-web.json`](../../data/design/styles/wabi-sabi-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
