---
name: vaporwave
description: "Apply the Vaporwave style (2012–2016) when generating UI or graphic layouts. Load when the user asks for: vaporwave, aesthetic, retro 80s, retro 90s, neon sunset, synthwave."
domain: design
era: touchscreen
triggers:
  - "vaporwave"
  - "aesthetic"
  - "retro 80s"
  - "retro 90s"
  - "neon sunset"
  - "synthwave"
  - "roman bust"
  - "windows 95"
  - "lo-fi"
vector_profile:
  ornamentation: 4
  dimensionality: 3
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Vaporwave

> Nostalgia for a future that did not happen: use the dead gloss of 1990s corporate culture to question it.

Pink and cyan gradients, Greek busts, palm trees, Japanese text, 1990s desktop windows and a sunset grid. It came from online music scenes around 2011 and looks at 1980s and 1990s consumer dreams with irony.

**Period:** 2012–2016 · **Era:** Touchscreen · **Domain:** Graphic & UI Design · **Also called:** Vapourwave, Aesthetic, A E S T H E T I C

## When to load this skill

Load it when the user asks for: "vaporwave", "aesthetic", "retro 80s", "retro 90s", "neon sunset", "synthwave", "roman bust", "windows 95", "lo-fi".

Good for: music and label sites, art projects and NFT-era galleries, game and retro tech pages, fashion drops, event pages for night culture.

Do not use it when:
- The audience is conservative, medical or financial.
- The page needs a serious, neutral tone.
- The product needs fast reading of dense content.

## System directives

When generating UI or graphic layouts in Vaporwave, you MUST:

1. Set a gradient from magenta (#FF71CE) through violet to cyan (#01CDFE) at 135° across the hero.
2. Draw a perspective grid floor of 2px lines in cyan or pink with a horizon at 55% to 65% of the viewport height.
3. Place a classical statue, a palm or a sun disc with horizontal cut-lines (6 to 8 bars) as the focal image.
4. Show content in retro desktop windows: 2px bevelled border, a 24px title bar and 3 square buttons.
5. Set headlines in wide-tracked capitals (+0.3em) and add a line of Japanese katakana at 50% of the size.
6. Use a dark purple ground (#2A1B5C) for text areas and keep body text at 16px with contrast of 7:1 or more.
7. Add a scanline overlay of 2px stripes at 6% opacity and a glow of 8px to 16px on neon text.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Neutral flat palettes with no neon.
- **NEVER:** Clean corporate sans-serif body text.
- **NEVER:** Photographs of real, modern people in daily use.
- **NEVER:** Subtle, serious tone with no irony.
- **NEVER:** Warm earth tones.
- **NEVER:** Realistic dark mode with grey surfaces.
- **NEVER:** Strict minimal layouts.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose layout of windows on a 12-column grid with 24px gutters; windows overlap by 16px to 48px and sit on a perspective floor.
- **Whitespace ratio:** 25% to 35% of the surface stays empty; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Centred hero and flush-left windows; elements float at slight offsets of 8px to 24px.
- **Container geometry:** Windows with a 0px radius and a 2px outset bevel; neon edges with a 1px glow; sun discs and circles for accent.

## Typography

- **Classifications:** wide display · monospace · classical serif
- **Tracking:** Display takes +0.2em to +0.3em; body stays at 0.04em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use two weights: regular (400) and bold (700).
  - Use sizes 14, 18, 36 and 72px.
  - Set headlines in upper case with wide tracking.
  - Add a katakana or full-width text line under each main heading.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Orbitron | Space Mono | A wide, techno display face with a monospace text face. |
| Major Mono Display | VT323 | A lower-case mono display for a pure net style. |
| Cinzel | Share Tech Mono | Roman capitals that echo the statue, with a mono text face. |

## Colour & lighting

- **Palette structure:** Neon pink, cyan and violet on deep purple, with one pale mint.
- **Contrast rules:** Text on night violet holds at least 7:1; neon colours carry headings, borders and glow, not long text.
- **Surface treatment:** Smooth 2-stop or 3-stop gradients for the ground; flat grey for windows; a scanline overlay at 6% opacity.
- **Light and shadow:** A neon glow of 8px to 16px blur around headings and lines; no soft cast shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Night Violet | `#2A1B5C` | background |
| Neon Pink | `#FF71CE` | primary |
| Cyan | `#01CDFE` | accent |
| Mint | `#B967FF` | second accent |
| Sun Yellow | `#FFFB96` | highlight |
| Window Grey | `#C0C0D8` | window surface |

## Materiality & texture

- **Surface simulation:** Early graphical desktop: grey bevelled windows and glossy CRT glow.
- **Border rules:** A 2px outset bevel (white top-left, dark bottom-right) on windows; a 1px neon line on panels.
- **Blur and elevation:** Glow of 8px to 16px blur on neon elements only; windows have a 4px hard shadow.

## Ornamentation & iconography

- **Iconography:** Pixel or bevelled icons at 24px with a solid fill, square terminals and a one-pixel dark edge.
- **Illustration:** Statues, palms, sun discs, grids and early 3D renders in neon tones; glitch and dither effects at 10% to 20%.
- **Decorative elements:** perspective grid · sun disc with bars · classical bust · desktop window · katakana line

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow, dreamy drifts and loops: statues rotate 360° in 20s; the grid floor scrolls at 4s per cell; windows fade in over 400ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover adds a 12px neon glow and a shift of 2px in the window; active state inverts the colours of the title bar.

## Code & token primer

Set `data-style="vaporwave"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="vaporwave"] {
  --color-bg: #2A1B5C;
  --color-surface: #3D2A82;
  --color-text: #F5EEFF;
  --color-muted: #C9B8F0;
  --color-primary: #FF71CE;
  --color-accent: #01CDFE;
  --color-border: #01CDFE;
  --font-sans: "Space Mono", "VT323", monospace;
  --font-display: "Orbitron", "Major Mono Display", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 4px 4px 0 #01CDFE;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 400ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #F5EEFF;
  --color-on-surface: #F5EEFF;
  --color-on-primary: #2A1B5C;
  --color-on-accent: #2A1B5C;
  --color-muted-on-bg: #C9B8F0;
  --color-muted-on-surface: #C9B8F0;
  --color-link: #01CDFE;
  --color-link-on-surface: #01CDFE;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.3em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: repeating-linear-gradient(to bottom, transparent 0 1.6vmin, var(--color-bg) 1.6vmin 2.2vmin) 76% 46% / 34vmin 15vmin no-repeat,
    radial-gradient(circle at 50% 100%, var(--color-accent) 0 16vmin, transparent calc(16vmin + 1px)) 76% 46% / 34vmin 17vmin no-repeat,
    linear-gradient(to bottom, transparent 0 55%, color-mix(in oklab, var(--color-primary) 55%, transparent) 55% calc(55% + 2px), transparent calc(55% + 2px)),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 28%, transparent) 0 1px, transparent 1px 7vmin) 0 100% / 100% 45% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 28%, transparent) 0 1px, transparent 1px 5vmin) 0 100% / 100% 45% no-repeat,
    linear-gradient(to bottom, var(--color-bg) 10%, color-mix(in oklab, var(--color-primary) 30%, transparent) 55%, var(--color-bg) 55%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#2A1B5C] text-[#F5EEFF] font-mono antialiased px-6 md:px-12` |
| heading | `text-4xl md:text-7xl font-bold uppercase tracking-[0.3em] leading-[1.1] text-center [text-shadow:0_0_12px_#FF71CE]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#01CDFE] bg-[#3D2A82] shadow-[4px_4px_0_#01CDFE]` |
| button | `rounded-none border-2 border-[#01CDFE] bg-[#FF71CE] px-6 py-3 text-sm font-bold uppercase text-[#2A1B5C] transition-shadow duration-[400ms] hover:shadow-[0_0_16px_#01CDFE]` |
| label | `text-xs uppercase tracking-[0.3em] text-[#01CDFE]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: A pixel family from the era of the first desktop windows, with square terminals. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.3em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** horizon. Vaporwave stands on a grid floor that runs to a striped sunset on the horizon. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Glitch (process)

A fault in a signal, kept as an image: torn lines, split colour channels and repeated frames. Origin: film & video, Wuppertal, 1963.

- Shift the red and blue channels by 2 to 8px in opposite directions.
- Cut bands of 4 to 40px and move them sideways by 10 to 60px.
- Run the effect in bursts of 2 to 6 frames at 24 fps, and leave the image clean between bursts.
- Do not apply it to body text.

### Perspective grid (process)

Lines that run to one vanishing point on a horizon, so that a flat surface reads as a floor in deep space. Origin: painting, Florence, c. 1415.

- Put the horizon at 50% to 65% of the height and draw 12 to 24 lines to one vanishing point.
- Space the cross lines so that each gap is about 0.8 of the gap in front of it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF71CE | #FF71CE, #01CDFE, #F5EEFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #01CDFE | #01CDFE, #FF71CE | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`frutiger-aero`](../frutiger-aero/SKILL.md) (Frutiger Aero). Replace the neon with soft sky blue and green and glossy bubbles; keep the windows.
- If the user asks for **more retro**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Add chrome type, pixel icons and a lighter palette of silver and baby blue.
- If the user asks for **more modern**: move toward [`glassmorphism`](../glassmorphism/SKILL.md) (Glassmorphism). Replace the bevels with frosted glass panels of 16px blur; keep the gradient.

- **Came from (go here for a more orthodox version):** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Led to (go here for a newer version):** [`surrealism-web`](../surrealism-web/SKILL.md), [`synthwave-web`](../synthwave-web/SKILL.md)
- **Mixes well with:** [`cybercore-web`](../cybercore-web/SKILL.md), [`frutiger-aero`](../frutiger-aero/SKILL.md), [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`surrealism-painting`](../surrealism-painting/SKILL.md)
- **Nearest by vector profile:** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md), [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md)

## Emotional target

The viewer feels dreamy, ironic nostalgia for an artificial past.

**Keywords:** nostalgic, dreamy, ironic, synthetic, melancholic, neon · **Brand archetypes:** jester, magician, explorer

## Sources

- Adam Harper, Vaporwave and the Pop-Art of the Virtual Plaza (Dummy Magazine, 2012)
- Grafton Tanner, Babbling Corpse: Vaporwave and the Commodification of Ghosts (Zero Books, 2016)

---

Generated from [`data/design/styles/vaporwave.json`](../../data/design/styles/vaporwave.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
