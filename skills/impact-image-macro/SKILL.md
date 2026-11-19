---
name: impact-image-macro
description: "Apply the Impact image macro style (2006–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: impact meme, image macro, top text bottom text, advice animal, classic meme, meme caption."
domain: internet
era: postmodern-early-digital
triggers:
  - "impact meme"
  - "image macro"
  - "top text bottom text"
  - "advice animal"
  - "classic meme"
  - "meme caption"
  - "white outlined text"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Impact image macro

> Make the caption the picture: one setup line on top, one punch line below, in a font that stays legible at any size.

A square photo or a cartoon with white capital text in a thick black outline at the top and the bottom. The Impact typeface and the format spread on forums and 4chan from 2006.

**Period:** 2006–now · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Impact meme, Top-text bottom-text meme, Advice Animal

## When to load this skill

Load it when the user asks for: "impact meme", "image macro", "top text bottom text", "advice animal", "classic meme", "meme caption", "white outlined text".

Good for: meme generators, social posts, chat reaction images, humour slides.

Do not use it when:
- The brand needs a calm, premium tone.
- The text is longer than two short lines.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Impact image macro, you MUST:

1. Set text in Impact or an open look-alike (Anton, Oswald 700) in white capitals.
2. Add a black outline of 3px to 4px per 40px of text, drawn outside the glyph.
3. Place the setup line at the top and the punch line at the bottom, each 5% to 8% from the edge.
4. Size the text so that each line spans 80% to 95% of the width; break to a second line at 24 characters.
5. Crop the picture to a square or to 4:3 and let it fill the whole canvas.
6. Use a picture with an obvious face or pose; no logo, no border, no extra graphics.
7. Keep the captions short: 3 to 8 words in each line.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Lower-case text.
- **NEVER:** Thin or unoutlined caption.
- **NEVER:** Caption in a coloured box.
- **NEVER:** Soft, tasteful photo grading.
- **NEVER:** Long paragraphs of text.
- **NEVER:** A decorative frame around the picture.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A full-bleed square canvas (for example 600px x 600px); two text bands, top and bottom, each 18% of the height.
- **Whitespace ratio:** No empty space: the picture fills 100% of the canvas and the text sits on it.
- **Alignment rules:** Centred text on one vertical axis; the lines never touch the side edges.
- **Container geometry:** Rectangular canvas with a 0px radius; no containers.

## Typography

- **Classifications:** condensed grotesque · display capitals
- **Tracking:** Display 0 to +0.01em.
- **Leading:** Display 1.0.
- **Hierarchy rules:** Use one size for both lines: 12% of the canvas height. · Use bold weight only, in upper case. · Use white fill with a black outline; no other colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Oswald | Impact itself is a proprietary font; Anton is the open look-alike. |
| Oswald | Roboto Condensed | A lighter condensed pair for smaller captions. |

## Colour & lighting

- **Palette structure:** White text and black outline over the colour of the photograph; no designed palette.
- **Contrast rules:** White with a black outline stays legible on any photo; the outline gives 21:1 to the fill.
- **Surface treatment:** The photograph is shown as it is, with a little extra saturation.
- **Light and shadow:** No designed light; the outline acts as a hard shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Caption White | `#FFFFFF` | text |
| Outline Black | `#000000` | text outline |
| Photo Sky | `#6FA8DC` | photo tone |
| Photo Skin | `#E0AC69` | photo tone |
| Photo Grass | `#6AA84F` | photo tone |

## Materiality & texture

- **Surface simulation:** A digital photograph, often cropped from a small file with visible JPEG grain.
- **Border rules:** A text outline of 3px to 4px in black; no frame.
- **Blur and elevation:** No blur; a 2px offset shadow on the text is optional.

## Ornamentation & iconography

- **Iconography:** No icons; the type is the only mark.
- **Illustration:** A stock photo, a screen capture or a cartoon face; one subject.
- **Decorative elements:** outlined caption · top line · bottom line

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static image. A GIF version holds the caption and swaps the picture each 400ms.
- **Easing:** steps(2, end)
- **Duration (ms):** 200
- **Hover and active:** Hover scales the text by 2% with no easing.

## Code & token primer

Set `data-style="impact-image-macro"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="impact-image-macro"] {
  --color-bg: #111111;
  --color-surface: #1E1E1E;
  --color-text: #FFFFFF;
  --color-muted: #BDBDBD;
  --color-primary: #FFFFFF;
  --color-accent: #FFD400;
  --color-border: #000000;
  --font-sans: "Oswald", "Roboto Condensed", sans-serif;
  --font-display: "Anton", "Oswald", sans-serif;
  --border-radius: 0px;
  --border-width: 3px;
  --shadow-elevation: 2px 2px 0 #000000;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(2, end);
  --duration: 200ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #111111;
  --color-on-accent: #111111;
  --color-muted-on-bg: #BDBDBD;
  --color-muted-on-surface: #BDBDBD;
  --color-link: #FFD400;
  --color-link-on-surface: #FFD400;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.01em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.4;
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
| page | `bg-[#111] text-white font-sans antialiased` |
| heading | `font-[Anton] text-5xl md:text-7xl uppercase leading-none text-center text-white [-webkit-text-stroke:3px_#000] [paint-order:stroke_fill]` |
| body | `text-base leading-[1.4] max-w-prose` |
| card | `border-[3px] border-black bg-[#1E1E1E]` |
| button | `rounded-none border-[3px] border-black bg-white px-6 py-3 font-[Anton] uppercase text-black shadow-[2px_2px_0_#000]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Material Symbols (Sharp, filled) by Google, licence Apache 2.0. Reason: A sharp solid family with hard corners that matches thick outlined capitals. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.01em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** raw. The ground is the raw photograph; the page shows no designed surface. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Image macro captioning (process)

Two lines of white outlined capitals on a photo: a setup on top and a punch line below. Origin: internet, web, c. 2006.

- Set the font to Impact or an open look-alike such as Anton, in capitals.
- Fill the text white and draw a black outline of 3 to 4px per 40px of text.
- Place one line 5% to 8% from the top and one 5% to 8% from the bottom.
- Size each line to 80% to 95% of the width.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **4chan** (platform, web, 2003–now), published the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFFFFF | #FFFFFF, #FFD400 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFD400 | #FFD400, #FFFFFF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more ironic**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Keep the picture but drop the top and bottom caption for one odd line and a strange crop.
- If the user asks for **more crude**: move toward [`deep-fried-meme`](../deep-fried-meme/SKILL.md) (Deep-fried meme). Raise contrast and saturation, recompress to JPEG quality 10 and add glow to the text.
- If the user asks for **more neat**: move toward [`label-meme`](../label-meme/SKILL.md) (Label meme). Remove the Impact captions and add small labels on the people or objects in the picture.

- **Led to (go here for a newer version):** [`label-meme`](../label-meme/SKILL.md), [`rage-comic`](../rage-comic/SKILL.md), [`starter-pack`](../starter-pack/SKILL.md), [`tweet-screenshot-meme`](../tweet-screenshot-meme/SKILL.md)
- **Was rejected by:** [`deep-fried-meme`](../deep-fried-meme/SKILL.md), [`surreal-meme`](../surreal-meme/SKILL.md)
- **Mixes well with:** [`demotivational-poster`](../demotivational-poster/SKILL.md)
- **Kin in another domain:** [`pop-art-painting`](../pop-art-painting/SKILL.md)
- **Nearest by vector profile:** [`clean-girl`](../clean-girl/SKILL.md), [`demotivational-poster`](../demotivational-poster/SKILL.md), [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md)

## Emotional target

The viewer reads the joke in two seconds and shares it.

**Keywords:** blunt, loud, quick, forum humour, direct · **Brand archetypes:** jester, everyman

## Sources

- [Wikipedia: Image macro](https://en.wikipedia.org/wiki/Image_macro)
- [Wikipedia: Impact (typeface)](https://en.wikipedia.org/wiki/Impact_(typeface))
- Know Your Meme: Advice Animals

---

Generated from [`data/internet/styles/impact-image-macro.json`](../../data/internet/styles/impact-image-macro.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
