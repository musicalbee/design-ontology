---
name: pixel-art-web
description: "Apply the Pixel Art Web style (2010–now) when generating UI or graphic layouts. Load when the user asks for: pixel art, 8-bit, 16-bit, retro game, sprite, bitmap."
domain: design
era: touchscreen
triggers:
  - "pixel art"
  - "8-bit"
  - "16-bit"
  - "retro game"
  - "sprite"
  - "bitmap"
  - "pixelated"
  - "game ui"
vector_profile:
  ornamentation: 4
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 3
---

# Pixel Art Web

> Limits are the style: few pixels, few colours and a hard grid make a clear, playful picture.

Blocky sprites, a limited palette, hard pixel edges, bitmap type and game-style panels. It borrows from 8-bit and 16-bit games and makes a page feel like a game screen.

**Period:** 2010–now · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Pixel UI, 8-bit web, Retro game UI

## When to load this skill

Load it when the user asks for: "pixel art", "8-bit", "16-bit", "retro game", "sprite", "bitmap", "pixelated", "game ui".

Good for: indie game sites, developer and maker portfolios, community and Discord tools, nostalgia campaigns, education for children.

Do not use it when:
- The brand needs a premium, calm look.
- The page has long reading text.
- The audience is not familiar with games.

## System directives

When generating UI or graphic layouts in Pixel Art Web, you MUST:

1. Draw art on a base grid of 8px or 16px sprites and scale only by whole numbers (2x, 3x, 4x).
2. Limit the palette to 8 to 16 colours; use 1 outline colour and no more than 3 tones per material.
3. Render images with `image-rendering: pixelated` and never use anti-aliased scaling.
4. Build panels with a 4px stepped border (corner pixels cut) and a 4px hard shadow offset (4px, 4px) with no blur.
5. Set text in a bitmap face at multiples of 8px (8, 16, 24, 32px) with a line height of 1.5.
6. Animate in steps: use `steps(4)` for sprites at 8 to 12 frames per second and blink cursors at 1s.
7. Show a game element on each screen: a health bar, a counter, a menu with a pointer or a dialogue box.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth gradients and soft blur.
- **NEVER:** Anti-aliased scaling of sprites.
- **NEVER:** Rounded corners with a smooth radius.
- **NEVER:** Thin, light, modern sans text.
- **NEVER:** More than 16 colours.
- **NEVER:** Photographs with no pixel treatment.
- **NEVER:** Easing curves on sprite motion.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A pixel grid of 8px; panels snap to it; the screen is a stage with a HUD frame and a dialogue box at the bottom.
- **Whitespace ratio:** 20% to 30% of the surface is empty; spacing is 8, 16, 24 and 32px.
- **Alignment rules:** Left-aligned text in boxes; menus in a vertical list with a pointer; counters in the corners.
- **Container geometry:** Rectangles with stepped corners (a 4px notch); 4px borders; hard 4px offset shadows.

## Typography

- **Classifications:** pixel bitmap · monospace
- **Tracking:** Tracking stays at 0 so the pixels line up.
- **Leading:** Display 1.4; body 1.6.
- **Hierarchy rules:** Use one weight (400) and let size and colour make hierarchy. · Use sizes 8, 16, 24 and 40px. · Set headings in upper case. · Set body at 16px in the readable pixel sans.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Press Start 2P | VT323 | An 8-bit display face on an 8px grid. |
| Silkscreen | VT323 | A compact pixel face for labels. |
| Pixelify Sans | VT323 | A pixel sans that stays readable in longer text. |

## Colour & lighting

- **Palette structure:** A small, saturated game palette.
- **Contrast rules:** Bone on night holds 14:1; slate on night holds at least 7:1; lava marks action and mint marks success.
- **Surface treatment:** Flat colour with dithering (checks of 1px or 2px) instead of gradients.
- **Light and shadow:** Hard: a 4px offset shadow in a darker tone; no blur.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Night | `#1A1C2C` | background |
| Panel | `#333C57` | surface |
| Bone | `#F4F4F4` | text |
| Slate | `#94B0C2` | secondary text |
| Lava | `#EF7D57` | primary |
| Mint | `#38B764` | accent |

## Materiality & texture

- **Surface simulation:** Pixels on a screen: flat, hard and countable.
- **Border rules:** A 4px border with stepped corners in the outline colour.
- **Blur and elevation:** Hard offset shadow (4px, 4px) in a darker tone; no blur; no radius.

## Ornamentation & iconography

- **Iconography:** Pixel icons on a 16px or 24px grid, solid with a 1px outline; hearts, coins and arrows.
- **Illustration:** Sprites, tile maps, dithered skies and pixel characters.
- **Decorative elements:** stepped border · sprite sheet · health bar · dialogue box

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Frame-based: sprites animate at 8 to 12 frames per second; menus move one step at a time; text types out at 20 characters per second.
- **Easing:** steps(4)
- **Duration (ms):** 120
- **Hover and active:** Hover moves a pointer sprite beside the item and inverts the colours; active state shifts the box 4px down and right.

## Code & token primer

Set `data-style="pixel-art-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="pixel-art-web"] {
  --color-bg: #1A1C2C;
  --color-surface: #333C57;
  --color-text: #F4F4F4;
  --color-muted: #94B0C2;
  --color-primary: #EF7D57;
  --color-accent: #38B764;
  --color-border: #F4F4F4;
  --font-sans: "Pixelify Sans", "VT323", monospace;
  --font-display: "Press Start 2P", "Silkscreen", monospace;
  --border-radius: 0px;
  --border-width: 4px;
  --shadow-elevation: 4px 4px 0 #0B0C14;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(4);
  --duration: 120ms;
  --color-on-bg: #F4F4F4;
  --color-on-surface: #F4F4F4;
  --color-on-primary: #1A1C2C;
  --color-on-accent: #1A1C2C;
  --color-muted-on-bg: #94B0C2;
  --color-muted-on-surface: #94B0C2;
  --color-link: #38B764;
  --color-link-on-surface: #F4F4F4;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 400;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.4;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(2px 2px at 12% 18%, var(--color-primary) 99%, transparent),
    radial-gradient(2px 2px at 64% 12%, var(--color-on-bg) 99%, transparent),
    radial-gradient(2px 2px at 82% 34%, var(--color-primary) 99%, transparent),
    radial-gradient(2px 2px at 44% 28%, var(--color-on-bg) 99%, transparent),
    radial-gradient(2px 2px at 92% 8%, var(--color-on-bg) 99%, transparent),
    linear-gradient(var(--color-accent), var(--color-accent)) 0 100% / 100% 6vh no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 70% calc(100% - 6vh) / 24% 6vh no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 75% calc(100% - 12vh) / 12% 6vh no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 92% 26% / 8vmin 8vmin no-repeat,
    conic-gradient(color-mix(in oklab, var(--color-on-bg) 4%, transparent) 25%, transparent 0 50%, color-mix(in oklab, var(--color-on-bg) 4%, transparent) 0 75%, transparent 0) 0 0 / 32px 32px,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#1A1C2C] text-[#F4F4F4] font-mono antialiased [image-rendering:pixelated]` |
| heading | `uppercase text-2xl md:text-4xl leading-[1.4]` |
| body | `text-base leading-[1.6]` |
| section | `border-4 border-[#F4F4F4] bg-[#333C57] p-4 shadow-[4px_4px_0_#0B0C14]` |
| button | `border-4 border-[#F4F4F4] bg-[#EF7D57] px-4 py-2 uppercase text-[#1A1C2C] shadow-[4px_4px_0_#0B0C14] active:translate-x-1 active:translate-y-1 active:shadow-none` |
| label | `text-xs uppercase text-[#94B0C2]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: A pixel family drawn on a strict 24px grid that fits bitmap type. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0em, leading 1.4, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 400, labels and buttons 400. The style uses 1 weights (400) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, left aligned, regular density, accent tilt 0°.
- **Ground:** pixel. Pixel art draws a night sky of single pixels over stepped hills on a coarse grid. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. Keep the rest of the page on `--color-bg`.
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

- If the user asks for **calmer**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Use flat fills, a 4px radius and a plain sans; keep the palette.
- If the user asks for **more neon**: move toward [`synthwave-web`](../synthwave-web/SKILL.md) (Synthwave Web). Use pink and violet gradients and a perspective grid under the sprites.
- If the user asks for **more raw**: move toward [`terminal-tui-web`](../terminal-tui-web/SKILL.md) (Terminal / TUI Web). Remove sprites and keep text and a mono grid.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Mixes well with:** [`terminal-tui-web`](../terminal-tui-web/SKILL.md), [`vaporwave`](../vaporwave/SKILL.md)
- **Kin in another domain:** [`pixel-icon`](../pixel-icon/SKILL.md)
- **Nearest by vector profile:** [`japanese-dense-web`](../japanese-dense-web/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md), [`art-deco-web`](../art-deco-web/SKILL.md)

## Emotional target

The viewer feels play, nostalgia and the joy of a small, clear world.

**Keywords:** playful, nostalgic, geeky, friendly, blocky, game · **Brand archetypes:** jester, explorer

## Sources

- Example: Celeste and Stardew Valley official sites (2016–2018)
- Example: itch.io game pages (2013–2025)
- Example: Habbo and Neopets-style revival pages (2020–2025)

---

Generated from [`data/design/styles/pixel-art-web.json`](../../data/design/styles/pixel-art-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
