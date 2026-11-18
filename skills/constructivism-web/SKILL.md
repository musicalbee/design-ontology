---
name: constructivism-web
description: "Apply the Constructivism (web) style (1919–1935) when generating UI or graphic layouts. Load when the user asks for: constructivism, rodchenko, el lissitzky, soviet poster, agitprop, red and black."
domain: design
era: modernist
triggers:
  - "constructivism"
  - "rodchenko"
  - "el lissitzky"
  - "soviet poster"
  - "agitprop"
  - "red and black"
  - "diagonal layout"
  - "propaganda poster"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 5
---

# Constructivism (web)

> The page is a machine for persuasion: every element is a lever, and the diagonal gives it energy.

Diagonal compositions, heavy sans-serif type, photomontage and flat red, black and cream blocks. It came from the Soviet avant-garde and treats the page as a poster that makes a call to action.

**Period:** 1919–1935 · **Era:** Modernist · **Domain:** Graphic & UI Design · **Also called:** Russian Constructivism, Agitprop style, Rodchenko style

## When to load this skill

Load it when the user asks for: "constructivism", "rodchenko", "el lissitzky", "soviet poster", "agitprop", "red and black", "diagonal layout", "propaganda poster".

Good for: campaign and activist sites, event posters and festivals, music and club promotion, manifesto pages, editorial feature openings.

Do not use it when:
- The audience expects calm, trust and quiet.
- The product is a dense data tool.
- The brand is luxurious or gentle.

## System directives

When generating UI or graphic layouts in Constructivism (web), you MUST:

1. Set the main axis of a hero at an angle of 15° to 30°; rotate type blocks and image blocks together.
2. Use three colours only: red (#D62718), black (#111111) and cream (#EDE3CC); red covers 25% to 40% of the surface.
3. Build headings from heavy condensed or extended sans-serif capitals at 64px or larger, in 1 to 3 lines.
4. Cut photographs into hard shapes (circle, triangle, strip) and place them in monochrome black and red.
5. Use thick bars of 12px to 24px and circles as structure; each bar points at the next action.
6. Make each page carry one call to action in a red block, at 3 times the size of the body text or larger.
7. Overlap at least two elements in each composition by 8px to 40px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Centred symmetric layouts.
- **NEVER:** Soft gradients, shadows and glass effects.
- **NEVER:** Pastel palettes or more than 3 colours.
- **NEVER:** Serif or script display type.
- **NEVER:** Rounded containers and pill buttons.
- **NEVER:** Decorative illustration that makes no call to action.
- **NEVER:** Horizontal-only compositions with no diagonal.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid that is rotated for the hero by 15° to 30°; the rest of the page returns to the grid. Bars of 12px to 24px divide the sections.
- **Whitespace ratio:** 20% to 30% of the surface stays empty; the spacing scale is 8, 16, 32, 64px.
- **Alignment rules:** Diagonal or flush-left; headings may run at an angle; body text stays horizontal and flush left.
- **Container geometry:** Rectangles, circles and triangles with a 0px radius; thick bars and wedges as dividers.

## Typography

- **Classifications:** grotesque sans serif · extended display capitals
- **Tracking:** Display takes -0.01em to +0.02em; body stays at 0.
- **Leading:** Display 0.95; body 1.45.
- **Hierarchy rules:**
  - Use two weights: bold (700) for display, regular (400) for body.
  - Use sizes 16, 28, 64 and 120px.
  - Set all headlines in upper case.
  - Set one word of a headline in a red block with cream text.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Archivo Black | Archivo | A heavy grotesque in the spirit of Rodchenko's posters. |
| Oswald | Roboto Condensed | A condensed face for tall headlines. |
| Bebas Neue | Barlow | A compact capital face with a clear text partner. |

## Colour & lighting

- **Palette structure:** Red, black and cream; red is the energy colour.
- **Contrast rules:** Black on cream holds 15:1; cream on red holds at least 4.5:1 for 24px bold text and larger.
- **Surface treatment:** Flat, matt, printed colour blocks with a halftone grain at 6% opacity.
- **Light and shadow:** None; depth comes from overlap and from the angle of the blocks.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream | `#EDE3CC` | background |
| Black | `#111111` | text and bars |
| Agitprop Red | `#D62718` | primary and accent |
| Grey | `#5C5648` | secondary text |
| Sand | `#DDD0B0` | alternate surface |

## Materiality & texture

- **Surface simulation:** Cheap offset print on newsprint; surfaces are flat ink and do not imitate other materials.
- **Border rules:** Solid black bars of 4px to 12px; no outline on all four sides of a container.
- **Blur and elevation:** No blur. No elevation. Shadow offset is 0px.

## Ornamentation & iconography

- **Iconography:** Solid geometric pictograms (arrow, star, megaphone, gear) with square terminals and no fine detail; place an icon on a red block.
- **Illustration:** Photomontage in black and red, cropped into circles and wedges; no gradients.
- **Decorative elements:** diagonal bar · circle · wedge · photomontage crop · megaphone icon

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: hard, fast slides along the diagonal axis; no bounce.
- **Easing:** cubic-bezier(0.7, 0, 0.3, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover swaps the red and black blocks; active state shifts the block by 4px along the diagonal.

## Code & token primer

Set `data-style="constructivism-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="constructivism-web"] {
  --color-bg: #EDE3CC;
  --color-surface: #DDD0B0;
  --color-text: #111111;
  --color-muted: #5C5648;
  --color-primary: #D62718;
  --color-accent: #D62718;
  --color-border: #111111;
  --font-sans: "Archivo", "Roboto Condensed", Arial, sans-serif;
  --font-display: "Archivo Black", "Oswald", Impact, sans-serif;
  --border-radius: 0px;
  --border-width: 4px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.7, 0, 0.3, 1);
  --duration: 200ms;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #5C5648;
  --color-muted-on-surface: #5C5648;
  --color-link: #111111;
  --color-link-on-surface: #111111;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 0.95;
  --display-case: uppercase;
  --body-leading: 1.45;
  --body-size: 16px;
  --icon-stroke: 2;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#EDE3CC] text-[#111111] font-sans antialiased px-6 md:px-12` |
| heading | `text-6xl md:text-9xl font-black uppercase leading-[0.95] -rotate-3 text-left` |
| body | `text-base leading-[1.45] max-w-xl` |
| section | `border-t-[12px] border-[#111111] pt-4 mt-16` |
| button | `rounded-none bg-[#D62718] px-8 py-4 text-lg font-bold uppercase text-[#EDE3CC] transition-transform duration-200 hover:bg-[#111111]` |
| label | `text-xs font-bold uppercase tracking-[0.1em]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Material Symbols (Sharp, filled) by Google, licence Apache 2.0. Reason: A solid, sharp-cornered family with butt terminals that reads as a stamp on a red block. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0em, leading 0.95, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.45.
- **Page:** hero poster, left aligned, compact density, accent tilt -3°.
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

- If the user asks for **calmer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Return to the strict grid; keep the red accent and drop the angle and the photomontage.
- If the user asks for **more playful**: move toward [`memphis-design`](../memphis-design/SKILL.md) (Memphis Design). Add pastel fills and squiggle patterns; keep the geometry.
- If the user asks for **more raw**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Add a 4px black border and a hard offset shadow to each block.

- **Rejects (the opposite pole; do not blend):** [`art-nouveau-web`](../art-nouveau-web/SKILL.md)
- **Mixes well with:** [`bauhaus`](../bauhaus/SKILL.md), [`de-stijl-web`](../de-stijl-web/SKILL.md)
- **Kin in another domain:** [`brutalist-architecture`](../brutalist-architecture/SKILL.md), [`cubism-painting`](../cubism-painting/SKILL.md)
- **Nearest by vector profile:** [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md), [`mid-century-modern`](../mid-century-modern/SKILL.md)

## Emotional target

The viewer feels urgency, energy and a call to join.

**Keywords:** urgent, militant, dynamic, bold, propagandistic, industrial · **Brand archetypes:** hero, outlaw

## Sources

- Alexander Rodchenko, Experiments for the Future (MoMA, 2005)
- Christopher Phillips, Photography in the Modern Era (Met, 1989)

---

Generated from [`data/design/styles/constructivism-web.json`](../../data/design/styles/constructivism-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
