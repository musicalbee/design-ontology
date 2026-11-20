---
name: chat-sticker-pack
description: "Apply the Chat Sticker Pack style (2011–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: sticker pack, chat sticker, line stickers, telegram stickers, whatsapp stickers, mascot sticker."
domain: internet
era: web-2-social
triggers:
  - "sticker pack"
  - "chat sticker"
  - "line stickers"
  - "telegram stickers"
  - "whatsapp stickers"
  - "mascot sticker"
  - "kawaii sticker"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# Chat Sticker Pack

> A character with a big face says what a sentence cannot: the chat gets a mascot with a voice.

A set of 8 to 40 drawn characters with a pose, a big face and one short word, sent in a chat as a picture. The LINE messenger made the form common in Asia from 2011.

**Period:** 2011–now · **Era:** Web 2.0 and the social web · **Domain:** Internet · **Also called:** Messenger stickers, LINE stickers, Sticker set

## When to load this skill

Load it when the user asks for: "sticker pack", "chat sticker", "line stickers", "telegram stickers", "whatsapp stickers", "mascot sticker", "kawaii sticker".

Good for: messenger sticker sets and brand mascots, reaction packs for communities, friendly empty and success screens, merch and social posts with a mascot.

Do not use it when:
- The brand needs a quiet, adult tone.
- The channel cannot show transparent images.
- The set has no single character to carry it.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Chat Sticker Pack, you MUST:

1. Draw one character in a set of 8, 16, 24 or 40 poses on a square of 370px by 320px or less.
2. Outline each pose with a 6px to 8px white border, and add a 3px dark line around the figure.
3. Give the character a head of 50% of the body height, two dot eyes and a mouth of 1 to 3 strokes.
4. Add one short word of 1 to 3 words in rounded type, with a 4px white outline, in a corner of the sticker.
5. Fill shapes with flat colour from a palette of 5 to 7 hues and keep shading to one tone.
6. Tilt the figure by 2° to 4° and let hands and a speech tail break the square edge.
7. Show the pack as a 4 by 2 grid of 96px thumbnails on a pale green field.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Realistic faces with fine shading.
- **NEVER:** Long sentences inside a sticker.
- **NEVER:** Thin lines of 1px that vanish at 96px.
- **NEVER:** Background boxes that hide the cut-out edge.
- **NEVER:** Characters with no emotion in the face.
- **NEVER:** Mixed illustration styles in one set.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A pack grid of 4 columns with 8px gutters; one sticker fills a 96px cell in the list and 240px in the chat.
- **Whitespace ratio:** 20% to 30% of the surface stays empty; the spacing scale is 4, 8, 16 and 24px.
- **Alignment rules:** Stickers sit on the chat side of the sender; the word sits in a corner, tilted by 2° to 4°.
- **Container geometry:** Cards with a 20px radius and a 3px dark line; a sticker has a 6px white cut-out border and no box.

## Typography

- **Classifications:** rounded display · rounded sans
- **Tracking:** Display 0.01em; body 0em.
- **Leading:** Display 1.05; body 1.5.
- **Hierarchy rules:**
  - Set the sticker word at 28px to 40px with a 4px outline.
  - Set the pack name at 20px in 700 weight and the artist at 12px.
  - Keep body text at 16px with a line height of 1.5.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Baloo 2 | M PLUS Rounded 1c | A round, heavy display face for the sticker word, with a Japanese-ready text face. |
| Mochiy Pop One | Nunito | A pop display face for a sweeter pack. |

## Colour & lighting

- **Palette structure:** A pale green ground with a strong green and orange, and a dark line colour that outlines each figure.
- **Contrast rules:** Line ink on mint holds 14:1; green and orange fill buttons and shapes with dark text on them.
- **Surface treatment:** Flat colour fields with a 3px dark line; no gradient and no texture.
- **Light and shadow:** No light direction; a hard 4px drop shadow in line ink under cards.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Chat Mint | `#F3FBEF` | background |
| Card White | `#FFFFFF` | surface |
| Line Ink | `#1E2A22` | text and outline |
| Chat Green | `#06C755` | primary |
| Pop Orange | `#FF8A3D` | accent |
| Moss | `#4F6155` | muted text |
| Sky Pop | `#4DB6FF` | second accent |

## Materiality & texture

- **Surface simulation:** A die-cut paper sticker with a white edge.
- **Border rules:** A 3px dark line on cards and a 6px white cut-out edge on stickers.
- **Blur and elevation:** No blur; a hard 4px offset shadow.

## Ornamentation & iconography

- **Iconography:** Rounded solid glyphs at 24px in a filled circle of 40px.
- **Illustration:** A mascot character in 8 to 40 poses with sweat drops, hearts and motion marks.
- **Decorative elements:** white cut-out edge · speech tail · sweat drop · heart burst · hand-lettered word

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A sticker drops in with a scale from 0.6 to 1.0 in 250ms; animated packs loop 8 to 24 frames at 12 fps.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 250
- **Hover and active:** Hover tilts the sticker by 4°; active presses it down by 4px.

## Code & token primer

Set `data-style="chat-sticker-pack"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="chat-sticker-pack"] {
  --color-bg: #F3FBEF;
  --color-surface: #FFFFFF;
  --color-text: #1E2A22;
  --color-muted: #4F6155;
  --color-primary: #06C755;
  --color-accent: #FF8A3D;
  --color-border: #1E2A22;
  --font-sans: "M PLUS Rounded 1c", "Nunito", sans-serif;
  --font-display: "Baloo 2", "M PLUS Rounded 1c", sans-serif;
  --border-radius: 20px;
  --border-width: 3px;
  --shadow-elevation: 0 4px 0 #1E2A22;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 250ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1E2A22;
  --color-on-surface: #1E2A22;
  --color-on-primary: #1E2A22;
  --color-on-accent: #1E2A22;
  --color-muted-on-bg: #4F6155;
  --color-muted-on-surface: #4F6155;
  --color-link: #1E2A22;
  --color-link-on-surface: #1E2A22;
  --display-weight: 800;
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
| page | `bg-[#F3FBEF] text-[#1E2A22] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-['Baloo_2'] font-extrabold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#1E2A22] bg-[#FFFFFF] rounded-[20px] shadow-[0_4px_0_#1E2A22]` |
| button | `rounded-[20px] border-2 border-[#1E2A22] bg-[#06C755] px-6 py-3 text-sm font-bold text-[#1E2A22] transition-transform duration-[250ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#06C755]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: A chunky, cartoon family matches the heavy outline of a sticker. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 800, tracking 0.01em, leading 1.05, case: none.
- **Weights:** display 800, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 3 weights (400, 700, 800) and no other. The display is 400 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, regular density, accent tilt 3°.
- **Ground:** confetti. A sticker pack is a sheet of small shapes, so the ground scatters confetti behind the grid. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Outlined character sticker (motif)

A drawn character with a thick outline, a white cut-out edge and one short word. Origin: internet, Tokyo, 2011.

- Draw a 3px dark line and a 6px white edge round the figure.
- Make the head 50% of the body height and use 1 to 3 strokes for the mouth.
- Add 1 to 3 words in rounded type in a corner.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **LINE** (platform, Tokyo, 2011–now), launched the style. A messenger app that launched in 2011. Its sticker shop made drawn characters a main way to reply in a chat.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #06C755 | #06C755, #F3FBEF, #FFFFFF, #1E2A22 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF8A3D | #06C755, #FF8A3D, #4DB6FF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 20px | 12–28 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more realistic**: move toward [`3d-avatar-emoji`](../3d-avatar-emoji/SKILL.md) (3D Avatar Emoji). Replace the flat figure with a rendered head with soft light that follows the face.
- If the user asks for **more minimal**: move toward [`unicode-emoji`](../unicode-emoji/SKILL.md) (Unicode Emoji). Use a small round glyph of 1.2em and drop the word and the outline.
- If the user asks for **more animated**: move toward [`reaction-gif`](../reaction-gif/SKILL.md) (Reaction GIF). Use a loop of 12 to 24 frames and set the word in white capitals with a 2px black outline.

- **Came from (go here for a more orthodox version):** [`unicode-emoji`](../unicode-emoji/SKILL.md)
- **Mixes well with:** [`3d-avatar-emoji`](../3d-avatar-emoji/SKILL.md), [`discord-server`](../discord-server/SKILL.md), [`reaction-gif`](../reaction-gif/SKILL.md)
- **Kin in another domain:** [`flat-icon`](../flat-icon/SKILL.md)
- **Nearest by vector profile:** [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md), [`cybercore-web`](../cybercore-web/SKILL.md), [`lets-play-facecam`](../lets-play-facecam/SKILL.md)

## Emotional target

The viewer feels cute, cheerful and close to a friend.

**Keywords:** cute, cheerful, friendly, bold, expressive, kawaii · **Brand archetypes:** jester, innocent, everyman

## Sources

- [Wikipedia: Sticker (messaging)](https://en.wikipedia.org/wiki/Sticker_(messaging))
- [Wikipedia: Line (software)](https://en.wikipedia.org/wiki/Line_(software))
- [LINE Creators Market: sticker guidelines](https://creator.line.me/en/guideline/sticker/)

---

Generated from [`data/internet/styles/chat-sticker-pack.json`](../../data/internet/styles/chat-sticker-pack.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
