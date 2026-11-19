---
name: kaomoji-emoticon
description: "Apply the Kaomoji and Emoticon style (1986–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: emoticon, kaomoji, ascii face, text smiley, (^_^), :-)."
domain: internet
era: terminals-bbs
triggers:
  - "emoticon"
  - "kaomoji"
  - "ascii face"
  - "text smiley"
  - "(^_^)"
  - ":-)"
  - "颜文字"
  - "顔文字"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Kaomoji and Emoticon

> A face needs no picture: a few characters of one text font, in one colour, carry a whole feeling.

A face made of punctuation and letters, set in a line of plain text. It came from 1980s bulletin boards: the sideways :-) in the West and the upright (^_^) in Japan.

**Period:** 1986–now · **Era:** Terminals, BBS and Usenet · **Domain:** Internet · **Also called:** Text emoticon, Western emoticon, Japanese kaomoji, ASCII face

## When to load this skill

Load it when the user asks for: "emoticon", "kaomoji", "ascii face", "text smiley", "(^_^)", ":-)", "颜文字", "顔文字".

Good for: chat and forum interfaces, plain-text email and changelog sign-offs, retro BBS and terminal pages, friendly empty states in a CLI.

Do not use it when:
- The brand needs a formal tone.
- The page needs full colour emoji for a wide audience.
- The text font lacks the characters of the face.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Kaomoji and Emoticon, you MUST:

1. Build each face from 3 to 12 characters of the same monospace font, in one colour and one size.
2. Set the face on a plain ground of #FFFDF5 with text at #1A1A1A, with no border and no fill.
3. Keep the face inline with the text, on the same baseline, with 1 space before and after.
4. Use the upright Japanese form (^_^) for the eyes and mouth, and the sideways Western form :-) only for short chat lines.
5. Limit one message to 1 or 2 faces; repeat a character (^^^, !!!) up to 3 times for emphasis.
6. Set the body text in a 16px mono font at a line height of 1.6, and let the face take the same size.
7. Render the faces at an integer pixel size, with no anti-aliased scaling above 200%.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Coloured emoji pictures in place of characters.
- **NEVER:** Faces that need a picture font to display.
- **NEVER:** Gradients, shadows and glossy fills behind the face.
- **NEVER:** More than 3 faces in one line.
- **NEVER:** Proportional fonts that break the face alignment.
- **NEVER:** Faces drawn at a size different from the text.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column of text lines on a monospace grid; each character cell is 0.6em wide and 1.6em high.
- **Whitespace ratio:** 40% to 60% of the surface stays empty; the spacing scale is 8, 16 and 32px.
- **Alignment rules:** Flush-left lines; a face sits inside a line, never on a line of its own except as a sign-off.
- **Container geometry:** Plain text blocks with 0px radius; a 1px rule or a 1px box of the text colour marks a message.

## Typography

- **Classifications:** monospace · pixel display · plain sans fallback
- **Tracking:** Display 0.05em; body 0em, with fixed character width.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use one size for the whole page: 16px body and 24px for the single display line.
  - Mark a heading with a line of === or --- characters, not with a size jump.
  - Show a face at the size of the text around it.
  - Keep the page to one colour of ink, and show emphasis with a repeated character.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| DotGothic16 | IBM Plex Mono | A Japanese dot-matrix face for the display line, with a clean mono text face. |
| VT323 | Space Mono | A terminal face for pure Western emoticon pages. |

## Colour & lighting

- **Palette structure:** Near-black ink on warm paper, with one pink for a single highlighted face.
- **Contrast rules:** Ink on paper reaches 16:1; the blush accent marks one face and does not carry body text.
- **Surface treatment:** Flat paper with no gradient; an optional 1px rule between lines.
- **Light and shadow:** No light and no shadow; the surface is flat like a terminal line.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#FFFDF5` | background |
| Ink | `#1A1A1A` | text and primary |
| Soft Grey | `#F2EFE3` | surface |
| Pencil | `#5A5A55` | muted text |
| Blush | `#E8506A` | accent for one face |
| Terminal Green | `#2E7D32` | code line |

## Materiality & texture

- **Surface simulation:** Plain terminal text on paper: no material, only glyphs.
- **Border rules:** A 1px line in the ink colour, or none.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** Characters only: (^_^), (T_T), (>_<), :-), ;-), \(^o^)/; no icon fonts.
- **Illustration:** ASCII line art of up to 12 lines in the same mono font.
- **Decorative elements:** upright kaomoji (^_^) · sideways emoticon :-) · sweat-drop mark (^_^;) · line of === characters · one-line sign-off face

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Text appears at once or types in at 40ms for each character; faces do not move.
- **Easing:** steps(4, end)
- **Duration (ms):** 200
- **Hover and active:** Hover underlines a link with a 1px line; active inverts ink and paper.

## Code & token primer

Set `data-style="kaomoji-emoticon"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="kaomoji-emoticon"] {
  --color-bg: #FFFDF5;
  --color-surface: #F2EFE3;
  --color-text: #1A1A1A;
  --color-muted: #5A5A55;
  --color-primary: #1A1A1A;
  --color-accent: #E8506A;
  --color-border: #1A1A1A;
  --font-sans: "IBM Plex Mono", "Noto Sans JP", monospace;
  --font-display: "DotGothic16", "VT323", monospace;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(4, end);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1A1A1A;
  --color-on-surface: #1A1A1A;
  --color-on-primary: #FFFDF5;
  --color-on-accent: #1A1A1A;
  --color-muted-on-bg: #5A5A55;
  --color-muted-on-surface: #5A5A55;
  --color-link: #1A1A1A;
  --color-link-on-surface: #1A1A1A;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.05em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFFDF5] text-[#1A1A1A] font-mono antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-mono tracking-wide leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#1A1A1A] bg-[#F2EFE3] rounded-none` |
| button | `rounded-none border-2 border-[#1A1A1A] bg-[#1A1A1A] px-6 py-3 text-sm font-bold text-[#FFFDF5] transition-transform duration-[200ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#1A1A1A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: A pixel family fits faces built on a character grid, with square terminals. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.05em, leading 1.1, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, left aligned, airy density, accent tilt 0°.
- **Ground:** raw. A kaomoji lives on the plain paper of a text line, so the ground stays flat. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Text emoticon (motif)

A face made of keyboard characters, read sideways in the West and upright in Japan. Origin: internet, Pittsburgh, 1982.

- Build the face from 3 to 12 characters of one monospace font.
- Keep the face on the baseline of the line, with 1 space on each side.
- Use at most 1 or 2 faces in one message.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **2channel** (platform, web, 1999–now), gathered the style. A large anonymous Japanese message board. Its users spread text faces, and many kaomoji began or grew in its threads.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #1A1A1A | #FFFDF5, #1A1A1A, #F2EFE3 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E8506A | #E8506A, #2E7D32 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.125–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more colourful**: move toward [`unicode-emoji`](../unicode-emoji/SKILL.md) (Unicode Emoji). Replace each face with a colour emoji glyph of the same size and keep the text line.
- If the user asks for **more retro**: move toward [`cyberdelia`](../cyberdelia/SKILL.md) (Cyberdelia). Set the page on black with a green mono face and add ANSI colour blocks.
- If the user asks for **more animated**: move toward [`reaction-gif`](../reaction-gif/SKILL.md) (Reaction GIF). Swap the face for a looped clip of 2 to 4 seconds with a caption line.

- **Came from (go here for a more orthodox version):** [`ansi-bbs-art`](../ansi-bbs-art/SKILL.md)
- **Led to (go here for a newer version):** [`reaction-gif`](../reaction-gif/SKILL.md), [`unicode-emoji`](../unicode-emoji/SKILL.md)
- **Mixes well with:** [`usenet-thread`](../usenet-thread/SKILL.md)
- **Kin in another domain:** [`pixel-icon`](../pixel-icon/SKILL.md)
- **Nearest by vector profile:** [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md)

## Emotional target

The viewer feels a small, friendly human tone in a plain text line.

**Keywords:** friendly, plain, playful, terminal, earnest · **Brand archetypes:** everyman, jester

## Sources

- [Wikipedia: Emoticon](https://en.wikipedia.org/wiki/Emoticon)
- [Wikipedia: Kaomoji](https://en.wikipedia.org/wiki/Emoticon#Japanese_style_(kaomoji))
- [Scott Fahlman, Smiley Lore :-)](https://www.cs.cmu.edu/~sef/sefSmiley.htm)

---

Generated from [`data/internet/styles/kaomoji-emoticon.json`](../../data/internet/styles/kaomoji-emoticon.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
