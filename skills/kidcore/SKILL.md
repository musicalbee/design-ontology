---
name: kidcore
description: "Apply the Kidcore style (2019–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: kidcore, rainbowcore, nostalgiacore, 90s kid, stickers, toy aesthetic."
domain: internet
era: contemporary-spatial
triggers:
  - "kidcore"
  - "rainbowcore"
  - "nostalgiacore"
  - "90s kid"
  - "stickers"
  - "toy aesthetic"
  - "childhood"
  - "bright collage"
vector_profile:
  ornamentation: 5
  dimensionality: 2
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 5
---

# Kidcore

> Treat the childhood bedroom of the 1990s as a design system: bright, crowded and joyful on purpose.

Primary colours, rainbows, stickers, toys, cartoon animals and 1990s kid-show graphics, stacked in dense collage. It uses the childhood of the 1980s and 1990s as a happy, loud look.

**Period:** 2019–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Kid core, Rainbowcore, Nostalgiacore

## When to load this skill

Load it when the user asks for: "kidcore", "rainbowcore", "nostalgiacore", "90s kid", "stickers", "toy aesthetic", "childhood", "bright collage".

Good for: toy and snack brands, youth music and event pages, sticker and merch shops, children's creative tools.

Do not use it when:
- The audience expects a serious or luxury tone.
- The page carries long, dense reading.
- The brand needs calm, trust and restraint.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Kidcore, you MUST:

1. Use saturated primaries: red (#E8352E), blue (#2D5BFF), yellow (#FFD21F) and green (#2DBE60), on a white or pale yellow ground.
2. Fill 60% to 80% of the frame: stickers, stars, smileys, toys and rainbow arcs overlap by 8px to 24px.
3. Set headings in a chunky, round display face at 48px to 96px, with a 3px black outline or a hard 4px shadow.
4. Cut stickers with a 6px white border and a 3px hard shadow in #1B1B1B.
5. Use confetti, polka dots and checkers as patterns at 24px to 48px tiles.
6. Add a second layer of nostalgia: bubble type, a CRT frame or a cartoon cursor at 32px.
7. Rotate loose elements by -6° to +6° so nothing sits square.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Muted, desaturated palettes.
- **NEVER:** Minimal layouts with large empty areas.
- **NEVER:** Thin, small serif type.
- **NEVER:** Monochrome grey surfaces.
- **NEVER:** Realistic, serious photography.
- **NEVER:** Dark, moody lighting.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose collage on a 12-column base with 16px gutters; stickers and panels overlap and sit at free angles.
- **Whitespace ratio:** 5% to 15% of the surface stays empty; the spacing scale is 4, 8, 16 and 32px.
- **Alignment rules:** Mixed alignment; headings sit centred or on a -4° slope; stickers sit at the corners.
- **Container geometry:** Rounded boxes with a 16px radius, a 3px black outline and a 4px hard offset shadow; stars, circles and clouds as accents.

## Typography

- **Classifications:** round display · bubble · rounded sans
- **Tracking:** Display 0.01em; body 0.
- **Leading:** Display 1.05; body 1.5.
- **Hierarchy rules:**
  - Use weights 400 and 700.
  - Use sizes 16, 24, 48 and 96px.
  - Set headings in mixed colours, one colour for each letter.
  - Set body text in dark ink on white, never on a saturated colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Fredoka | Nunito | A soft, round display face with a friendly text sans. |
| Baloo 2 | Nunito | A fat, round face that echoes children's book covers. |
| Chewy | Quicksand | A bouncy hand-drawn display face for stickers. |

## Colour & lighting

- **Palette structure:** Four primaries plus pink and white, on a white or pale yellow ground, with black outlines.
- **Contrast rules:** Marker black on white holds 17:1; the primaries carry fills and outlines, and white text sits only on blue or red at 24px or more.
- **Surface treatment:** Flat saturated fills, glossy sticker shine as a white diagonal at 40% opacity, and confetti patterns.
- **Light and shadow:** A hard, offset shadow of 4px in black; no soft shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper White | `#FFFDF2` | background |
| Sticker White | `#FFFFFF` | surface |
| Marker Black | `#1B1B1B` | text |
| Toy Red | `#E8352E` | primary |
| Toy Blue | `#2D5BFF` | accent |
| Duck Yellow | `#FFD21F` | highlight |
| Grass Green | `#2DBE60` | second accent |
| Crayon Grey | `#4A4A52` | muted text |

## Materiality & texture

- **Surface simulation:** Vinyl stickers, plastic toys, crayon and early cartoon cels.
- **Border rules:** A 3px black outline on every container; a 6px white border on stickers.
- **Blur and elevation:** A hard 4px shadow in black; no blur.

## Ornamentation & iconography

- **Iconography:** Solid icons at 28px with 3px outlines and round caps, inside a circle tile in a primary colour.
- **Illustration:** Rainbows, stars, smileys, dinosaurs, teddy bears, cartoon fruit and pixel hearts, cut out as stickers.
- **Decorative elements:** sticker with white border · rainbow arc · confetti · smiley star · checker band · CRT cartoon frame

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Bouncy: elements pop in with a 110% overshoot over 300ms; stickers wiggle by 4° at 1s loops.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover wiggles the sticker by 6° and scales it to 108%; active state squashes it to 94%.

## Code & token primer

Set `data-style="kidcore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="kidcore"] {
  --color-bg: #FFFDF2;
  --color-surface: #FFFFFF;
  --color-text: #1B1B1B;
  --color-muted: #4A4A52;
  --color-primary: #E8352E;
  --color-accent: #2D5BFF;
  --color-border: #1B1B1B;
  --font-sans: "Nunito", "Quicksand", sans-serif;
  --font-display: "Fredoka", "Baloo 2", "Chewy", sans-serif;
  --border-radius: 16px;
  --border-width: 3px;
  --shadow-elevation: 4px 4px 0 #1B1B1B;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 300ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #1B1B1B;
  --color-on-surface: #1B1B1B;
  --color-on-primary: #000000;
  --color-on-accent: #FFFDF2;
  --color-muted-on-bg: #4A4A52;
  --color-muted-on-surface: #4A4A52;
  --color-link: #2D5BFF;
  --color-link-on-surface: #2D5BFF;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1.05;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 3;
  --ground: linear-gradient(100deg, var(--color-bg) 30%, transparent 56%),
    radial-gradient(circle at 66% 22%, var(--color-primary) 0 3.4vmin, transparent calc(3.4vmin + 1px)),
    radial-gradient(circle at 92% 64%, transparent 0 4vmin, var(--color-accent) 4vmin 5.6vmin, transparent 5.8vmin),
    linear-gradient(to top right, var(--color-primary) 50%, transparent 51%) 80% 12% / 7vmin 7vmin no-repeat,
    repeating-linear-gradient(45deg, var(--color-on-bg) 0 3px, transparent 3px 12px) 86% 88% / 14vmin 5vmin no-repeat,
    radial-gradient(circle at 56% 78%, var(--color-accent) 0 1.8vmin, transparent calc(1.8vmin + 1px)),
    linear-gradient(var(--color-primary), var(--color-primary)) 97% 36% / 3vmin 12vmin no-repeat,
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 22%, transparent) 1.6px, transparent 2px) 0 0 / 26px 26px,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFFDF2] text-[#1B1B1B] font-sans antialiased px-4 md:px-8` |
| heading | `font-[family-name:Fredoka] text-5xl md:text-8xl font-bold leading-[1.05] -rotate-2 [text-shadow:4px_4px_0_#FFD21F]` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `rounded-2xl border-[3px] border-[#1B1B1B] bg-white p-6 shadow-[4px_4px_0_#1B1B1B] rotate-1` |
| button | `rounded-full border-[3px] border-[#1B1B1B] bg-[#FFD21F] px-6 py-3 text-base font-bold text-[#1B1B1B] shadow-[4px_4px_0_#1B1B1B] transition-transform duration-300 hover:-rotate-3 hover:scale-105` |
| label | `text-sm font-bold text-[#E8352E]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: A fat, rounded fill family that matches sticker shapes. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.01em, leading 1.05, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, compact density, accent tilt 4°.
- **Ground:** confetti. Kidcore stands on scattered confetti, like the floor of a party or a toy box. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Sticker collage layering (montage)

A dense layer of cut-out stickers, each with a white border and a hard shadow, that overlap on a bright ground. Origin: internet, Tokyo, 2011.

- Cut each motif with a white border of 6px.
- Add a hard shadow of 3px to 4px in near black under each sticker.
- Rotate each sticker by -6° to +6° and overlap neighbours by 8px to 24px.
- Fill 60% to 80% of the frame, and keep one sticker larger than the rest as the focus.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E8352E | #E8352E, #2D5BFF, #FFD21F, #FF7EB6 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #2D5BFF | #2D5BFF, #2DBE60, #FFD21F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 16px | 8–24 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **softer**: move toward [`cottagecore`](../cottagecore/SKILL.md) (Cottagecore). Swap primaries for pastel sage, rose and butter; keep the stickers, reduce the outlines to 1px.
- If the user asks for **more pink**: move toward [`barbiecore`](../barbiecore/SKILL.md) (Barbiecore). Replace the primaries with one hot pink (#E0218A) and white; keep the outlines.
- If the user asks for **more digital**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Add chrome type, translucent plastic and a silver and baby blue palette.

- **Came from (go here for a more orthodox version):** [`scrapbook-ui`](../scrapbook-ui/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`barbiecore`](../barbiecore/SKILL.md), [`memphis-design`](../memphis-design/SKILL.md), [`pop-art-web`](../pop-art-web/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`dopamine-decor`](../dopamine-decor/SKILL.md), [`memphis-interior`](../memphis-interior/SKILL.md), [`memphis-product`](../memphis-product/SKILL.md)
- **Nearest by vector profile:** [`cyberdelia`](../cyberdelia/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md)

## Emotional target

The viewer feels playful, nostalgic and free to be silly.

**Keywords:** playful, loud, nostalgic, colourful, childlike, joyful · **Brand archetypes:** jester, innocent

## Sources

- [Know Your Meme: Kidcore](https://knowyourmeme.com/memes/subcultures/kidcore)
- [Wikipedia: Aesthetic (internet culture)](https://en.wikipedia.org/wiki/Aesthetic_(Internet_culture))
- [Aesthetics Wiki: Kidcore](https://aesthetics.fandom.com/wiki/Kidcore)

---

Generated from [`data/internet/styles/kidcore.json`](../../data/internet/styles/kidcore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
