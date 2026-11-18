---
name: memphis-design
description: "Apply the Memphis Design style (1981–1988) when generating UI or graphic layouts. Load when the user asks for: memphis, memphis design, memphis milano, 80s, eighties, sottsass."
domain: design
era: postmodern-early-digital
triggers:
  - "memphis"
  - "memphis design"
  - "memphis milano"
  - "80s"
  - "eighties"
  - "sottsass"
  - "squiggles"
  - "confetti"
  - "postmodern"
  - "terrazzo"
  - "zigzag pattern"
vector_profile:
  ornamentation: 5
  dimensionality: 2
  grid_rigidity: 1
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# Memphis Design

> Good taste is a convention, and a loud, cheap, playful object can carry as much meaning as a serious one.

Clashing primary and pastel fields, squiggles, confetti dots and black-and-white pattern on irregular geometric forms. Ettore Sottsass and the Memphis group launched it in Milan in 1981 as a joke against good taste.

**Period:** 1981–1988 · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Memphis Group, Memphis Milano, 80s Memphis

## When to load this skill

Load it when the user asks for: "memphis", "memphis design", "memphis milano", "80s", "eighties", "sottsass", "squiggles", "confetti", "postmodern", "terrazzo", "zigzag pattern".

Good for: music and event posters, youth brands, landing pages for creative tools, packaging, album covers.

Do not use it when:
- The product handles money, health or legal tasks that need a calm tone.
- The text is long and needs steady reading.
- The page must meet a strict accessibility audit with limited motion and pattern.

## System directives

When generating UI or graphic layouts in Memphis Design, you MUST:

1. Combine at least four saturated hues on one surface, and put no two neighbouring fields in the same hue.
2. Build every composition from primitive shapes: circles, triangles, half-circles, arches and 45 degree bars at sizes between 24px and 320px.
3. Cover one or two large areas with a repeating black-and-white pattern such as stripes of 8px, dots of 6px at 16px pitch, or a zigzag.
4. Scatter 6 to 20 small accents (squiggles, confetti dots, short bars) over the empty ground, and rotate each by an angle between -30 and 30 degrees.
5. Set the display type in a heavy geometric sans, and let one word break the baseline or tilt by 5 to 12 degrees.
6. Give shapes hard 3px black outlines and hard offset shadows with no blur.
7. Place blocks off axis and overlap them by 10% to 30%, so that no edge lines up with the page edge.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A single accent colour on a white page.
- **NEVER:** Soft gradients, blur and realistic shadows.
- **NEVER:** Strict centred or modular grids with equal margins.
- **NEVER:** Thin hairline strokes under 2px.
- **NEVER:** Muted earth tones and desaturated greys as the main palette.
- **NEVER:** Symmetrical layouts with one shape repeated at one size.
- **NEVER:** Photographic backgrounds behind the pattern layer.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** No fixed grid; compose on a loose 8px unit with 5 to 9 blocks per screen, each rotated between -15 and 15 degrees or shifted off the column axis by 16px to 64px.
- **Whitespace ratio:** Only 10% to 25% of the surface stays plain; the rest holds shapes and pattern, and the spacing scale is 8, 24, 40, 72px.
- **Alignment rules:** Mix flush-left, flush-right and tilted text blocks on one page; align to the shape edge, not to a margin, and overlap blocks by 10% to 30%.
- **Container geometry:** Irregular shapes: arches, half-circles, trapezoids and rectangles with one 48px rounded corner; every container has a 3px black outline and a 6px hard offset shadow.

## Typography

- **Classifications:** geometric sans · heavy display sans · mono-linear script accent
- **Tracking:** Display sizes take 0em to +0.02em in upper case; body stays at 0; small labels take +0.08em.
- **Leading:** Display 0.95 to 1.05; body 1.4 to 1.5; tilted lines keep the same value.
- **Hierarchy rules:**
  - Use weights 400 and 800 only, with a size jump of 3x or more between body and headline.
  - Set headlines in upper case, 64px to 160px, and rotate one of them by 5 to 12 degrees.
  - Put a headline on a solid colour block with a 3px black outline for contrast, not on the pattern.
  - Keep body copy under 60 characters per line, in black on a flat light field.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rubik Mono One | DM Sans | Heavy blocky capitals over a plain geometric text face. |
| Bungee | Work Sans | Signage-like display type with a neutral body. |
| Poppins | Poppins | A single geometric family used at weights 800 and 400. |

## Colour & lighting

- **Palette structure:** Five to six saturated hues in near equal shares, plus black and white pattern; no hue covers more than 30% of the surface.
- **Contrast rules:** Body text is black on white, yellow or sky at 12:1 or better; coloured fields touch each other only across a 3px black outline.
- **Surface treatment:** Flat opaque fields in the manner of plastic laminate, overprinted with black-and-white pattern at 100% opacity; no gradients and no transparency.
- **Light and shadow:** No light source; depth comes from a hard 6px by 6px offset shadow in ink with 0px blur, and from overlap order.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Memphis Pink | `#FF5FA2` | primary field |
| Sottsass Yellow | `#FFD600` | secondary field |
| Teal | `#00B2A9` | contrast field |
| Cobalt | `#2B3FD6` | shape accent |
| Ink | `#111111` | outlines and text |
| Laminate White | `#FFFFFF` | pattern ground |
| Sky | `#9FD8F2` | pastel ground |

## Materiality & texture

- **Surface simulation:** Plastic laminate such as Abet Laminati Bacterio and Diffrazioni patterns, rendered as flat colour with no gloss.
- **Border rules:** Solid black outlines of 3px on every shape; patterned bands of 8px to 16px may replace a border.
- **Blur and elevation:** No blur; elevation is a single level with a 6px by 6px hard shadow, which grows to 10px by 10px on hover.

## Ornamentation & iconography

- **Iconography:** Chunky shapes with a 3px black outline and solid fills in two hues, square or fully round terminals, no perspective.
- **Illustration:** Collages of primitive shapes, squiggles and terrazzo speckle; figures reduce to circles and bars; no photographs.
- **Decorative elements:** squiggle lines · confetti dots · zigzag bands · terrazzo speckle · black-and-white stripes · checkerboard blocks

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: shapes snap in a few discrete steps and wobble by 3 to 5 degrees, like cut paper pinned to a board; no smooth blur or fade.
- **Easing:** steps(4, end)
- **Duration (ms):** 240
- **Hover and active:** Hover moves the block by 4px up and left and grows the offset shadow to 10px; active returns it to 0px and rotates it by 2 degrees.

## Code & token primer

Set `data-style="memphis-design"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="memphis-design"] {
  --color-bg: #FFFFFF;
  --color-surface: #FFD600;
  --color-text: #111111;
  --color-muted: #2B3FD6;
  --color-primary: #FF5FA2;
  --color-accent: #00B2A9;
  --color-border: #111111;
  --font-sans: "DM Sans", "Helvetica Neue", Arial, sans-serif;
  --font-display: "Rubik Mono One", "Arial Black", Impact, sans-serif;
  --border-radius: 0px 48px 0px 0px;
  --border-width: 3px;
  --shadow-elevation: 6px 6px 0 #111111;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(4, end);
  --duration: 240ms;
  --pattern-stripes: repeating-linear-gradient(45deg, #111111 0 4px, #FFFFFF 4px 8px);
  --pattern-dots: radial-gradient(#111111 3px, transparent 3.5px) 0 0 / 16px 16px;
  --tilt-headline: -8deg;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #111111;
  --color-on-accent: #111111;
  --color-muted-on-bg: #2B3FD6;
  --color-muted-on-surface: #2B3FD6;
  --color-link: #111111;
  --color-link-on-surface: #111111;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 800;
  --label-weight: 800;
  --display-tracking: 0em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2.5;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#111111] font-sans overflow-x-hidden` |
| heading | `font-black uppercase text-7xl md:text-9xl leading-[0.95] -rotate-6 text-[#FF5FA2] [-webkit-text-stroke:3px_#111111]` |
| card | `bg-[#FFD600] border-[3px] border-[#111111] rounded-tr-[48px] shadow-[6px_6px_0_#111111] p-6 rotate-2` |
| button | `bg-[#00B2A9] border-[3px] border-[#111111] px-6 py-3 font-extrabold uppercase shadow-[6px_6px_0_#111111] transition-transform duration-[240ms] ease-[steps(4,end)] hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none` |
| pattern band | `h-6 w-full bg-[repeating-linear-gradient(45deg,#111111_0_4px,#FFFFFF_4px_8px)]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** duotone, stroke 2.5 on a 24px field, square caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: Bold forms with a hard offset tone: the flat pop geometry of the laminate. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 800, labels and buttons 800. The style uses 2 weights (400, 800) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt -1.5°.
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

- If the user asks for **calmer**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Cut the palette to black, white and one hue, align blocks to a 12-column grid and remove the pattern; keep one tilted headline.
- If the user asks for **more corporate**: move toward [`corporate-memphis`](../corporate-memphis/SKILL.md) (Corporate Memphis). Replace the shapes with flat figures, drop the black outlines and hard shadows, and keep the saturated hues and the off-axis blocks.
- If the user asks for **more tactile**: move toward [`skeuomorphism`](../skeuomorphism/SKILL.md) (Skeuomorphism). Add a 1px inner highlight and a 12px soft shadow to each block; keep the hues and the primitive shapes.

- **Led to (go here for a newer version):** [`corporate-memphis`](../corporate-memphis/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`swiss-international`](../swiss-international/SKILL.md)
- **Mixes well with:** [`corporate-memphis`](../corporate-memphis/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md)
- **Kin in another domain:** [`dopamine-decor`](../dopamine-decor/SKILL.md), [`memphis-interior`](../memphis-interior/SKILL.md), [`music-video`](../music-video/SKILL.md), [`postmodern-architecture`](../postmodern-architecture/SKILL.md)
- **Nearest by vector profile:** [`psychedelic`](../psychedelic/SKILL.md), [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md)

## Emotional target

Delight and mild provocation: the viewer feels that the rules are off for a moment and that the object is a joke worth keeping.

**Keywords:** playful, loud, irreverent, kitsch, optimistic, irregular · **Brand archetypes:** jester, creator

## Sources

- Barbara Radice, Memphis: Research, Experiences, Results, Failures and Successes of New Design (Rizzoli, 1984)
- Ettore Sottsass and the Memphis Group, Memphis Milano catalogue (Arc '74, 1981)

---

Generated from [`data/design/styles/memphis-design.json`](../../data/design/styles/memphis-design.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
