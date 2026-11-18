---
name: anti-design
description: "Apply the Anti-Design style (2016–now) when generating UI or graphic layouts. Load when the user asks for: anti-design, ugly design, broken grid, chaotic layout, clashing type, experimental web."
domain: design
era: touchscreen
triggers:
  - "anti-design"
  - "ugly design"
  - "broken grid"
  - "chaotic layout"
  - "clashing type"
  - "experimental web"
  - "anti-grid"
  - "awwwards experimental"
vector_profile:
  ornamentation: 4
  dimensionality: 1
  grid_rigidity: 1
  skeuomorphic_realism: 1
  typographic_expressiveness: 5
---

# Anti-Design

> Polish is a lie: a page that breaks the rules on purpose shows that people made it.

Broken grids, clashing type, overlap, odd colour and deliberate roughness. It answers the polish of templated product sites and asks the visitor to notice the design.

**Period:** 2016–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Anti-design web, Ugly design, Broken grid

## When to load this skill

Load it when the user asks for: "anti-design", "ugly design", "broken grid", "chaotic layout", "clashing type", "experimental web", "anti-grid", "awwwards experimental".

Good for: creative studios and portfolios, music and fashion brands, art and festival sites, launches that must stand out, student and agency showcases.

Do not use it when:
- The product is a transactional or accessibility-critical tool.
- The audience needs fast task completion.
- The brand needs trust and calm.

## System directives

When generating UI or graphic layouts in Anti-Design, you MUST:

1. Break the grid on purpose: shift at least 3 elements by 12px to 80px off any column and overlap 2 or more blocks by 8px to 48px.
2. Mix at least 3 type families or 4 styles on one page and scale type by a ratio of 3 or more between neighbours.
3. Use 4 to 6 clashing colours, including 1 acid colour (#C6FF00 or #FF3B00), with saturation above 80%.
4. Rotate 2 to 5 elements by 3° to 15° and let text run at an angle or vertically.
5. Set at least one headline at 120px or larger and crop it by the viewport edge.
6. Place a raw or default element (system button, plain table) beside a styled one.
7. Make the navigation odd: a label in the wrong place, an icon with no text, or a link inside the headline.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Centred symmetric layouts on a tidy grid.
- **NEVER:** A single safe typeface and a safe palette.
- **NEVER:** Cards of equal size with equal padding.
- **NEVER:** Soft gradients and glass effects.
- **NEVER:** Stock photography in neat frames.
- **NEVER:** Predictable SaaS section order.
- **NEVER:** Pastel colour.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A broken grid: a 12-column base that elements leave by 12px to 80px; blocks overlap and stack in z-order.
- **Whitespace ratio:** 10% to 30% of the surface stays empty, and the empty space is uneven; the spacing scale is irregular on purpose: 6, 20, 44, 90px.
- **Alignment rules:** Mixed flush-left, flush-right and rotated; no common edge across sections.
- **Container geometry:** Mixed shapes: rectangles of 0px radius, one pill, one circle; borders of 2px to 6px in black or acid colour.

## Typography

- **Classifications:** grotesque sans serif · display serif · monospace · outline type
- **Tracking:** Display takes -0.04em to +0.1em, varied by word; body stays at 0.
- **Leading:** Display 0.85 to 1.0; body 1.4.
- **Hierarchy rules:**
  - Use two weights: regular (400) and bold (700).
  - Use at least 4 sizes with a jump of at least 3x between steps: 12, 36, 120 and 360px.
  - Mix upper case, lower case and italic in one headline.
  - Set at least one phrase as outline type with a 2px stroke.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Space Mono | A tall, loud display with a mono text face. |
| Unbounded | IBM Plex Mono | A wide, round display with a technical text face. |
| DM Serif Display | Archivo | A fat serif that clashes with a grotesque on purpose. |

## Colour & lighting

- **Palette structure:** Clashing hues on an off-white or black ground, with one acid colour.
- **Contrast rules:** Black on chalk holds 18:1; body text never sits on an acid colour below 7:1; neon carries large type and blocks.
- **Surface treatment:** Flat, opaque fields; occasional raw grain or a rough drawing; no soft gradient.
- **Light and shadow:** No light source; a hard offset of 6px 6px 0 black may appear on one element.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Chalk | `#F2F0E8` | background |
| Black | `#0A0A0A` | text and borders |
| Acid | `#C6FF00` | accent |
| Signal | `#FF3B00` | second accent |
| Electric | `#3B2BFF` | third accent |
| Pink | `#FF7AD9` | fourth accent |

## Materiality & texture

- **Surface simulation:** Cut paper and rough digital collage; the surface is flat and does not imitate a material.
- **Border rules:** Borders of 2px to 6px in black or acid; one element has no border at all.
- **Blur and elevation:** No blur. Hard offset shadows of 6px 6px 0 on 1 or 2 elements only.

## Ornamentation & iconography

- **Iconography:** Icons are oversized or tiny, with stroke of 2px to 4px; mix a text link, an arrow and a symbol.
- **Illustration:** Cut-out photography, rough drawings, stickers, scans and 3D renders pasted together.
- **Decorative elements:** overlap · rotated block · outline type · sticker · raw HTML element

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Jumpy and unpredictable: elements snap between positions in 100ms steps; marquee text scrolls at 20s per loop; hover causes a shift.
- **Easing:** steps(4)
- **Duration (ms):** 120
- **Hover and active:** Hover rotates the element by 3° to 6° and swaps its colours; active state inverts the whole block.

## Code & token primer

Set `data-style="anti-design"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="anti-design"] {
  --color-bg: #F2F0E8;
  --color-surface: #C6FF00;
  --color-text: #0A0A0A;
  --color-muted: #3D3D38;
  --color-primary: #0A0A0A;
  --color-accent: #FF3B00;
  --color-border: #0A0A0A;
  --font-sans: "Space Mono", "IBM Plex Mono", monospace;
  --font-display: "Anton", "Unbounded", Impact, sans-serif;
  --border-radius: 0px;
  --border-width: 3px;
  --shadow-elevation: 6px 6px 0 #0A0A0A;
  --backdrop-filter: none;
  --space-unit: 6px;
  --ease: steps(4);
  --duration: 120ms;
  --color-on-bg: #0A0A0A;
  --color-on-surface: #0A0A0A;
  --color-on-primary: #F2F0E8;
  --color-on-accent: #0A0A0A;
  --color-muted-on-bg: #3D3D38;
  --color-muted-on-surface: #3D3D38;
  --color-link: #0A0A0A;
  --color-link-on-surface: #0A0A0A;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.04em;
  --display-leading: 0.85;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 15px;
  --icon-stroke: 3;
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F2F0E8] text-[#0A0A0A] font-mono antialiased px-4 md:px-8 overflow-x-hidden` |
| heading | `text-7xl md:text-[12rem] uppercase leading-[0.85] tracking-[-0.04em] -rotate-3` |
| body | `text-[15px] leading-[1.4] max-w-sm` |
| section | `border-[3px] border-[#0A0A0A] bg-[#C6FF00] p-4 translate-x-6 shadow-[6px_6px_0_#0A0A0A]` |
| button | `rounded-none border-[3px] border-[#0A0A0A] bg-[#FF3B00] px-5 py-2 text-base font-bold uppercase text-[#0A0A0A] transition-transform duration-[120ms] hover:rotate-3` |
| label | `text-xs font-bold uppercase` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 3 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: A loud, thick, slightly rough line that suits cut-out and sticker art. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.04em, leading 0.85, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 15px, leading 1.4.
- **Page:** hero poster, left aligned, compact density, accent tilt 3°.
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

- If the user asks for **tamer**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Return to a grid; keep the thick borders, hard shadows and one loud colour.
- If the user asks for **more rawness**: move toward [`brutalist-web`](../brutalist-web/SKILL.md) (Brutalist Web (2014)). Strip to default type and links; keep the overlap.
- If the user asks for **more order**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Snap all elements to a 12-column grid and cut to one typeface.

- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md), [`material-design`](../material-design/SKILL.md), [`swiss-international`](../swiss-international/SKILL.md)
- **Mixes well with:** [`brutalist-web`](../brutalist-web/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md)
- **Kin in another domain:** [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md)
- **Nearest by vector profile:** [`punk-zine`](../punk-zine/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md)

## Emotional target

The viewer feels surprise and the sense that a person is playing with the rules.

**Keywords:** rebellious, chaotic, loud, playful, raw, experimental · **Brand archetypes:** outlaw, jester

## Sources

- Awwwards Sites of the Day with experimental layouts (2016–2025)
- Brutalist Websites and Are.na anti-design collections

---

Generated from [`data/design/styles/anti-design.json`](../../data/design/styles/anti-design.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
