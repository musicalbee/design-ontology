---
name: unicode-emoji
description: "Apply the Unicode Emoji style (2010–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: emoji, emoji keyboard, unicode emoji, smiley, reaction emoji, emoji picker."
domain: internet
era: touchscreen
triggers:
  - "emoji"
  - "emoji keyboard"
  - "unicode emoji"
  - "smiley"
  - "reaction emoji"
  - "emoji picker"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Unicode Emoji

> A picture becomes a character: the same small yellow face can enter any text on any device.

A set of small colour pictures that sit in text as characters: yellow faces, hands, food and flags. Japanese phone makers drew the first sets; Unicode 6.0 added them to the standard in 2010.

**Period:** 2010–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Emoji set, Emoji keyboard, Emoji glyphs

## When to load this skill

Load it when the user asks for: "emoji", "emoji keyboard", "unicode emoji", "smiley", "reaction emoji", "emoji picker".

Good for: chat apps and reaction bars, notification and status labels, friendly onboarding copy, poll and survey options.

Do not use it when:
- The brand needs a strict, formal tone.
- The page needs a custom mascot that no vendor draws.
- The output channel has no colour emoji font.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Unicode Emoji, you MUST:

1. Draw each glyph on a square field with a 1:1 ratio and set it at the line height of the text, 1.2em.
2. Use a round yellow face (#FFC83D) with a 1px darker rim, two simple eyes and a mouth of one curve.
3. Fill shapes with flat colour and one soft highlight; keep the outline to 1px or none.
4. Show a skin tone with 5 swatches from #FADCBC to #3D2B1F as a modifier row under a hand glyph.
5. Set the glyph in a picker grid of 8 columns with 8px gutters and a tab row of 9 categories.
6. Keep the text font neutral and round, so that the glyph is the only colour in the line.
7. Let the glyph be 1.0em to 1.2em in text, and 32px to 48px in a picker.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Glyphs drawn at a different size from the line.
- **NEVER:** Photographic emoji with realistic skin and lighting.
- **NEVER:** Heavy outlines of 3px or more.
- **NEVER:** Emoji set on a dark gradient that hides the yellow.
- **NEVER:** Custom emoji with no shared base shape.
- **NEVER:** Mixed glyph sets from different vendors in one line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A picker grid of 8 columns with 8px gutters and 44px cells; text lines on a 4px baseline.
- **Whitespace ratio:** 30% to 40% of the surface stays empty; the spacing scale is 4, 8, 16 and 24px.
- **Alignment rules:** Glyphs sit on the text baseline; the picker is flush-left with a centred category row.
- **Container geometry:** Cards and keys with a 12px radius; the picker cell is a 44px square with an 8px radius.

## Typography

- **Classifications:** rounded sans · colour emoji glyph
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.15; body 1.6.
- **Hierarchy rules:**
  - Use 1 display size of 32px or more and keep body text at 16px.
  - Keep a glyph at 1.2em beside text and at 48px as a hero.
  - Set category labels in 12px at 600 weight.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Fredoka | Nunito | Rounded open faces; glyphs come from Noto Color Emoji (OFL). |
| Baloo 2 | Nunito Sans | A warmer display face for a playful page. |

## Colour & lighting

- **Palette structure:** White ground with one warm yellow and one blue; the glyphs supply every other colour.
- **Contrast rules:** Ink on white holds 15:1; yellow is a fill with dark text on it, not a text colour.
- **Surface treatment:** Flat white and cream fields; the glyph carries all the colour.
- **Light and shadow:** A soft top-left light inside each glyph; a 6px soft shadow under cards.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Page White | `#FFFFFF` | background |
| Cream Card | `#FFF6D6` | surface |
| Ink Blue | `#1F2430` | text |
| Face Yellow | `#FFC83D` | primary |
| Link Blue | `#2F6FED` | accent |
| Slate | `#5D6472` | muted text |
| Rim Sand | `#E3D9B5` | border |

## Materiality & texture

- **Surface simulation:** Small glossy plastic discs: flat fills with one highlight.
- **Border rules:** A 1px rim in sand on cards; none on glyphs.
- **Blur and elevation:** A 6px blur shadow at 12% opacity for pickers and sheets.

## Ornamentation & iconography

- **Iconography:** Colour glyphs of 1:1 ratio; faces, hands, food, flags, objects in 9 categories.
- **Illustration:** The glyph set itself: faces with 2 simple eyes and 1 mouth curve.
- **Decorative elements:** yellow face · skin tone swatch row · category tab row · reaction chip · glyph grid

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Glyphs pop in with a scale from 0.8 to 1.0 in 200ms; a reaction chip bounces once.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover scales the glyph to 1.25 in 120ms; active scales to 0.9.

## Code & token primer

Set `data-style="unicode-emoji"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="unicode-emoji"] {
  --color-bg: #FFFFFF;
  --color-surface: #FFF6D6;
  --color-text: #1F2430;
  --color-muted: #5D6472;
  --color-primary: #FFC83D;
  --color-accent: #2F6FED;
  --color-border: #E3D9B5;
  --font-sans: "Nunito", "Noto Color Emoji", sans-serif;
  --font-display: "Fredoka", "Nunito", sans-serif;
  --border-radius: 12px;
  --border-width: 1px;
  --shadow-elevation: 0 2px 6px rgba(31,36,48,0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1F2430;
  --color-on-surface: #1F2430;
  --color-on-primary: #1F2430;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #5D6472;
  --color-muted-on-surface: #5D6472;
  --color-link: #2F6FED;
  --color-link-on-surface: #1F2430;
  --display-weight: 600;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 80% 46%, var(--color-bg) 0 20vmin, transparent calc(20vmin + 1px)),
    radial-gradient(circle at calc(80% + 3vmin) calc(46% + 3vmin), color-mix(in oklab, var(--color-on-bg) 16%, transparent) 0 18vmin, transparent 27vmin),
    radial-gradient(circle at calc(80% - 3vmin) calc(46% - 3vmin), rgba(255,255,255,.85) 0 18vmin, transparent 27vmin),
    radial-gradient(35% 40% at 96% 92%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 60% 4%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFFFFF] text-[#1F2430] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-['Fredoka'] font-semibold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#E3D9B5] bg-[#FFF6D6] rounded-xl shadow-[0_2px_6px_rgba(31,36,48,0.12)]` |
| button | `rounded-xl border-2 border-[#E3D9B5] bg-[#FFC83D] px-6 py-3 text-sm font-bold text-[#1F2430] transition-transform duration-[200ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#FFC83D]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Fluent UI System Icons (Filled, 24) by Microsoft Corporation, licence MIT. Reason: A filled, rounded family sits close to the flat colour glyphs of an emoji set. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0em, leading 1.15, case: none.
- **Weights:** display 600, subhead 500, body 400, bold in text 700, labels and buttons 600. The style uses 4 weights (400, 500, 600, 700) and no other. The display is 200 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** soft. An emoji sits on a plain light field, so the yellow and the other glyph colours carry the page. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Pixel grid (process)

A picture or a letter built from square cells that are each on or off, or one flat colour, with no curve and no smooth edge. Origin: film & video, Bell Labs, New Jersey, c. 1963.

- Draw an icon on a grid of 16 or 32 cells a side; fill each cell with one colour or leave it empty.
- Limit the palette to 1 to 16 colours; do not blend two colours inside one cell.
- Draw a diagonal as a stair of equal steps, for example 2 cells across for each 1 cell up.
- Show the image at an integer scale (2x, 3x, 4x) so that no cell blurs.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Unicode Consortium** (club, California, 1991–now), published the style. A non-profit group of software firms that keeps the Unicode text standard. It added emoji to the standard in 2010 and now votes on each new set.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFC83D | #FFC83D, #FFFFFF, #FFF6D6, #1F2430 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #2F6FED | #FFC83D, #2F6FED | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 4–24 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more character**: move toward [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md) (Chat Sticker Pack). Replace the glyph with a large drawn character of 120px and a hand-lettered word.
- If the user asks for **more 3D**: move toward [`3d-avatar-emoji`](../3d-avatar-emoji/SKILL.md) (3D Avatar Emoji). Replace the flat face with a rendered head with soft light and a 20px depth shadow.
- If the user asks for **more minimal**: move toward [`kaomoji-emoticon`](../kaomoji-emoticon/SKILL.md) (Kaomoji and Emoticon). Replace each glyph with a text face of 3 to 8 characters in one ink colour.

- **Came from (go here for a more orthodox version):** [`kaomoji-emoticon`](../kaomoji-emoticon/SKILL.md)
- **Led to (go here for a newer version):** [`3d-avatar-emoji`](../3d-avatar-emoji/SKILL.md), [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md)
- **Kin in another domain:** [`flat-icon`](../flat-icon/SKILL.md)
- **Nearest by vector profile:** [`duet-split-screen`](../duet-split-screen/SKILL.md), [`material-design`](../material-design/SKILL.md), [`video-essay`](../video-essay/SKILL.md)

## Emotional target

The viewer feels a warm, quick, shared tone in a text line.

**Keywords:** friendly, warm, quick, universal, playful · **Brand archetypes:** jester, everyman

## Sources

- [Wikipedia: Emoji](https://en.wikipedia.org/wiki/Emoji)
- [Unicode Consortium: Emoji](https://home.unicode.org/emoji/)
- [Wikipedia: Unicode 6.0](https://en.wikipedia.org/wiki/Unicode_version_history)

---

Generated from [`data/internet/styles/unicode-emoji.json`](../../data/internet/styles/unicode-emoji.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
