---
name: demotivational-poster
description: "Apply the Demotivational poster style (2004–2012) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: demotivational poster, demotivator, despair poster, black frame poster, ironic motivational poster, office joke poster."
domain: internet
era: postmodern-early-digital
triggers:
  - "demotivational poster"
  - "demotivator"
  - "despair poster"
  - "black frame poster"
  - "ironic motivational poster"
  - "office joke poster"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 3
  typographic_expressiveness: 3
---

# Demotivational poster

> Turn the cheerful office poster into a dry joke: the same frame and layout, with a bleak caption.

A black poster with a thin white frame, a photo, a large serif capital title and a small line of sad or dry text. It parodies the office motivational poster and spread on web forums from 2004.

**Period:** 2004–2012 · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Demotivator, Despair poster

## When to load this skill

Load it when the user asks for: "demotivational poster", "demotivator", "despair poster", "black frame poster", "ironic motivational poster", "office joke poster".

Good for: internet humour pages, team culture posts, satire slides, forum signature images.

Do not use it when:
- The message must inspire without irony.
- The reader needs dense information.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Demotivational poster, you MUST:

1. Fill the canvas with black (#000000) and keep a 6% to 8% margin around the picture.
2. Frame the picture with a 2px white line and a 3px gap of black between the picture and the line.
3. Set the title in white serif capitals at 56px to 72px, centred, 24px under the frame, with +0.12em tracking.
4. Set one line of caption in 18px serif at #C8C8C8, centred, 12px under the title.
5. Choose a photograph with one clear subject; desaturate it by 10% to 30% and crop it to 4:3.
6. Keep the total ratio near 4:5; the picture takes 66% to 72% of the height.
7. Write a title of one word and a caption of one sentence; the caption states a hard fact in a calm voice.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Bright coloured backgrounds.
- **NEVER:** Rounded frames or drop shadows.
- **NEVER:** Hopeful, sincere captions.
- **NEVER:** Sans-serif titles.
- **NEVER:** More than two lines of caption.
- **NEVER:** Busy collage instead of one subject.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single centred column: frame, title, caption, on a canvas of 600px x 750px with a 48px margin.
- **Whitespace ratio:** Black fills 100% of the ground; the picture, the title and the caption take 70%, 12% and 6% of the height.
- **Alignment rules:** Everything is centred on one axis; the frame is symmetrical.
- **Container geometry:** Hard rectangles with a 0px radius; a 2px white outline around the photo.

## Typography

- **Classifications:** transitional serif · capitals
- **Tracking:** Title +0.12em; caption +0.02em.
- **Leading:** Title 1.1; caption 1.4.
- **Hierarchy rules:** Use one title size (64px) and one caption size (18px). · Set the title in bold (700) capitals. · Set the caption in regular (400) sentence case. · Use white for the title and light grey for the caption.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Tinos | Open Sans | Tinos has the metrics of Times, the classic face of the form. |
| Libre Baskerville | Source Sans 3 | A wider serif for a more formal title. |

## Colour & lighting

- **Palette structure:** Black ground, white frame and title, grey caption, with a photograph as the only colour.
- **Contrast rules:** White on black gives 21:1; grey #C8C8C8 on black gives 12:1.
- **Surface treatment:** Flat black with no gradient; the photograph carries all tone.
- **Light and shadow:** No shadow; light comes only from the photograph.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Poster Black | `#000000` | background |
| Frame White | `#FFFFFF` | primary |
| Caption Grey | `#C8C8C8` | secondary text |
| Photo Slate | `#5B6E80` | photo tone |
| Warning Red | `#B3261E` | accent |

## Materiality & texture

- **Surface simulation:** A printed office poster on glossy stock, seen as a flat web image.
- **Border rules:** A 2px white outline around the photo; no other border.
- **Blur and elevation:** No blur and no elevation; the layout stays flat.

## Ornamentation & iconography

- **Iconography:** No icons; a small line of text under the caption may carry a fake company name.
- **Illustration:** One photograph of a landscape, an animal or a group; a muted tone.
- **Decorative elements:** photo frame · serif title · caption line

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Static image. A web version fades the caption in after 600ms.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover lifts the frame by 2px and brightens the photo by 8%.

## Code & token primer

Set `data-style="demotivational-poster"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="demotivational-poster"] {
  --color-bg: #000000;
  --color-surface: #111111;
  --color-text: #FFFFFF;
  --color-muted: #C8C8C8;
  --color-primary: #FFFFFF;
  --color-accent: #B3261E;
  --color-border: #FFFFFF;
  --font-sans: "Open Sans", "Source Sans 3", sans-serif;
  --font-display: "Tinos", "Libre Baskerville", serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 12px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 600ms;
  --type-ratio: 1.333;
  --size-small: 13.5px;
  --size-h3: 31.98px;
  --size-h2: 42.63px;
  --size-h1: 56.83px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #000000;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #C8C8C8;
  --color-muted-on-surface: #C8C8C8;
  --color-link: #FFFFFF;
  --color-link-on-surface: #FFFFFF;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.12em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 18px;
  --icon-stroke: 1;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 22px 22px / calc(100% - 44px) 2px no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 22px calc(100% - 22px) / calc(100% - 44px) 2px no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) 22px 22px / 2px calc(100% - 44px) no-repeat,
    linear-gradient(var(--color-primary), var(--color-primary)) calc(100% - 22px) 22px / 2px calc(100% - 44px) no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px 32px / calc(100% - 64px) 1px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px calc(100% - 32px) / calc(100% - 64px) 1px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 32px 32px / 1px calc(100% - 64px) no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) calc(100% - 32px) 32px / 1px calc(100% - 64px) no-repeat,
    radial-gradient(60% 70% at 85% 50%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-black text-white font-sans antialiased px-12 py-12` |
| heading | `font-serif text-5xl md:text-6xl font-bold uppercase tracking-[0.12em] leading-[1.1] text-center` |
| body | `text-lg leading-[1.4] text-[#C8C8C8] text-center max-w-prose mx-auto` |
| card | `border-2 border-white p-3 bg-black` |
| button | `rounded-none border-2 border-white bg-black px-6 py-3 text-sm uppercase tracking-[0.12em] text-white hover:bg-white hover:text-black` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin outline family that stays quiet beside the serif title. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.12em, leading 1.1, case: uppercase.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 18px, leading 1.4.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** frame. The ground is black with a thin white frame, as on the poster. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Framed caption layout (motif)

A photo in a thin white frame on black, with a serif capital title and a small caption below. Origin: internet, web, c. 2004.

- Fill the canvas with black.
- Frame the photo with a 2px white line and a 3px black gap.
- Set a title in white serif capitals centred under the frame.
- Add one grey caption line under the title.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Despair, Inc.** (workshop, United States, 1998–now), sold the style. A company that sells black-framed Demotivators posters, the print model of the demotivational poster.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFFFFF | #FFFFFF, #C8C8C8 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #B3261E | #B3261E, #FFFFFF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 12px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more current**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Replace the frame and serif title with a full-bleed photo and white outlined capitals at top and bottom.
- If the user asks for **less dark**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Use a white ground, a thin black line and a sans-serif title; keep the single picture.
- If the user asks for **more chaotic**: move toward [`deep-fried-meme`](../deep-fried-meme/SKILL.md) (Deep-fried meme). Recompress the image, saturate it and add loud caption text; drop the frame.

- **Mixes well with:** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Kin in another domain:** [`xerox-zine`](../xerox-zine/SKILL.md)
- **Nearest by vector profile:** [`cohesive-feed-grid`](../cohesive-feed-grid/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`clean-girl`](../clean-girl/SKILL.md)

## Emotional target

The viewer smiles at a calm, bleak joke in a serious frame.

**Keywords:** dry, ironic, bleak, office humour, deadpan · **Brand archetypes:** jester, sage

## Sources

- [Wikipedia: Motivational poster](https://en.wikipedia.org/wiki/Motivational_poster)
- Know Your Meme: Demotivational Posters

---

Generated from [`data/internet/styles/demotivational-poster.json`](../../data/internet/styles/demotivational-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
