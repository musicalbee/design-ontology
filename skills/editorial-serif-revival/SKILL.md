---
name: editorial-serif-revival
description: "Apply the Editorial Serif Revival style (2021–now) when generating UI or graphic layouts. Load when the user asks for: editorial, serif, magazine, new york times style, fraunces, instrument serif."
domain: design
era: contemporary-spatial
triggers:
  - "editorial"
  - "serif"
  - "magazine"
  - "new york times style"
  - "fraunces"
  - "instrument serif"
  - "literary"
  - "serif headline"
  - "essay layout"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# Editorial Serif Revival

> Voice beats neutrality: a serif with character makes a brand sound like a person, as in a magazine.

Large expressive serif headlines, warm off-white paper, a small sans for labels and a restrained palette. It came back as a reaction to the geometric sans-serif default of the SaaS web.

**Period:** 2021–now · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Serif web, Magazine web, New editorial

## When to load this skill

Load it when the user asks for: "editorial", "serif", "magazine", "new york times style", "fraunces", "instrument serif", "literary", "serif headline", "essay layout".

Good for: publishing and newsletters, agency and studio sites, founder and brand stories, cultural institutions, long-form and essay pages.

Do not use it when:
- The product is a dense dashboard.
- The brand needs a technical or playful look.
- The page needs many cards and filters.

## System directives

When generating UI or graphic layouts in Editorial Serif Revival, you MUST:

1. Set headlines in a high-contrast serif at 56px to 120px with a leading of 0.95 to 1.05 and tracking of -0.02em to -0.04em.
2. Use a warm off-white ground (#F6F1E7) and near-black ink (#1A1714); one muted accent (terracotta #A64B25 or green) covers less than 8% of the surface.
3. Set body in a serif or a quiet sans at 18px to 20px with a measure of 55 to 70 characters and a leading of 1.55.
4. Set labels, dates and bylines in a small sans or mono at 11px to 13px in upper case with +0.08em tracking.
5. Use italic as the emphasis in a headline: one word or phrase in italic in each headline.
6. Divide the page by 1px rules; use drop caps and pull quotes at 32px to 48px.
7. Crop photographs in clean rectangles with a caption of 12px below and no radius.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Geometric sans-serif headlines in bold.
- **NEVER:** Gradient backgrounds and glow.
- **NEVER:** Rounded cards, pills and emoji.
- **NEVER:** Uniform tile grids with shadows.
- **NEVER:** All-bold type with no italic.
- **NEVER:** Pure white backgrounds.
- **NEVER:** Stock illustration in a corporate-flat style.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; headlines span 8 to 10 columns; body sits in 6 columns; captions in the margin.
- **Whitespace ratio:** 35% to 50% of the surface stays empty; the spacing scale is 8, 16, 32, 64 and 128px.
- **Alignment rules:** Flush left; ragged right; large headlines may span the width; pull quotes sit off the column.
- **Container geometry:** Rectangles with a 0px radius; 1px rules and plain image crops; no card boxes.

## Typography

- **Classifications:** high-contrast serif · old-style serif
- **Tracking:** Display takes -0.02em to -0.04em; body stays at 0; labels take +0.08em.
- **Leading:** Display 1.0; body 1.55.
- **Hierarchy rules:**
  - Use two weights for the text face: regular (400) and semibold (600); display runs at 400.
  - Use sizes 12, 18, 32, 64 and 112px.
  - Set one phrase of a headline in italic.
  - Set labels in upper case at 12px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Instrument Serif | Inter | A condensed display serif with a neutral label sans. |
| Fraunces | Newsreader | An expressive soft serif with a text serif for reading. |
| Playfair Display | Source Serif 4 | A classic high-contrast display with a clear text serif. |

## Colour & lighting

- **Palette structure:** Warm paper and ink, with one muted accent.
- **Contrast rules:** Ink on paper holds at least 15:1; the accent carries labels, links and one large word, not body text.
- **Surface treatment:** Flat paper tone with a grain at 3% opacity; no gradient.
- **Light and shadow:** None; depth comes from scale and white space.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#F6F1E7` | background |
| Ink | `#1A1714` | text and rules |
| Terracotta | `#A64B25` | accent |
| Stone | `#6F675C` | secondary text |
| Linen | `#EAE2D3` | alternate surface |

## Materiality & texture

- **Surface simulation:** Printed magazine paper: warm stock and black ink.
- **Border rules:** 1px ink rules above sections and under headlines; no boxes.
- **Blur and elevation:** No blur. No elevation. Shadow is none.

## Ornamentation & iconography

- **Iconography:** Thin 1.5px line icons used rarely; text links with arrows (→) replace most icons.
- **Illustration:** Editorial photography and illustration in a single tone, with captions and credits.
- **Decorative elements:** drop cap · pull quote · hairline rule · italic emphasis · small-caps byline

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Calm fades of 300ms to 500ms; images reveal by a 12px upward slide; no bounce.
- **Easing:** cubic-bezier(0.22, 1, 0.36, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover adds an underline of 1px in the accent and shifts an arrow by 4px; active state darkens the accent by 10%.

## Code & token primer

Set `data-style="editorial-serif-revival"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="editorial-serif-revival"] {
  --color-bg: #F6F1E7;
  --color-surface: #EAE2D3;
  --color-text: #1A1714;
  --color-muted: #6F675C;
  --color-primary: #1A1714;
  --color-accent: #A64B25;
  --color-border: #1A1714;
  --font-sans: "Source Serif 4", Georgia, serif;
  --font-display: "Instrument Serif", "Playfair Display", Georgia, serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --duration: 400ms;
  --color-on-bg: #1A1714;
  --color-on-surface: #1A1714;
  --color-on-primary: #F6F1E7;
  --color-on-accent: #F6F1E7;
  --color-muted-on-bg: #6F675C;
  --color-muted-on-surface: #58544D;
  --color-link: #A64B25;
  --color-link-on-surface: #1A1714;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.03em;
  --display-leading: 1;
  --display-case: none;
  --body-leading: 1.55;
  --body-size: 18px;
  --icon-stroke: 1.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F6F1E7] text-[#1A1714] font-serif antialiased grid grid-cols-12 gap-x-6 px-6 md:px-12` |
| heading | `col-span-12 md:col-span-10 text-6xl md:text-9xl leading-none tracking-[-0.03em]` |
| body | `col-span-12 md:col-span-6 text-lg leading-[1.55]` |
| section | `col-span-12 border-t border-[#1A1714] pt-4 mt-16` |
| button | `rounded-none border border-[#1A1714] bg-[#1A1714] px-6 py-3 text-sm text-[#F6F1E7] transition-colors duration-[400ms] hover:bg-[#A64B25] hover:border-[#A64B25]` |
| label | `text-xs font-medium uppercase tracking-[0.08em] text-[#6F675C]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A thin, even, humanist line that does not compete with the serif headlines. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.03em, leading 1, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 18px, leading 1.55.
- **Page:** hero stacked, left aligned, airy density, accent tilt 0°.
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

- If the user asks for **more modern**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Replace the serif with one neo-grotesque and use a flush-left 12-column grid.
- If the user asks for **more raw**: move toward [`brutalist-web`](../brutalist-web/SKILL.md) (Brutalist Web (2014)). Set body in the default serif, remove the paper tone and add 2px rules.
- If the user asks for **more digital**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Switch to a near-black ground and add a mono face for labels.

- **Came from (go here for a more orthodox version):** [`swiss-international`](../swiss-international/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`flat-design`](../flat-design/SKILL.md)
- **Nearest by vector profile:** [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md)

## Emotional target

The viewer feels that a person with taste is speaking.

**Keywords:** literary, warm, confident, editorial, human, refined · **Brand archetypes:** sage, creator

## Sources

- Public sites of Pentagram, Kinfolk and The Verge (2021–2025)
- Google Fonts: Instrument Serif and Fraunces specimens

---

Generated from [`data/design/styles/editorial-serif-revival.json`](../../data/design/styles/editorial-serif-revival.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
