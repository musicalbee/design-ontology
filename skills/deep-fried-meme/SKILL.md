---
name: deep-fried-meme
description: "Apply the Deep-fried meme style (2017–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: deep fried meme, deep fried, jpeg crunch, fried image, burnt saturation, laugh cry emoji meme."
domain: internet
era: feed-mobile
triggers:
  - "deep fried meme"
  - "deep fried"
  - "jpeg crunch"
  - "fried image"
  - "burnt saturation"
  - "laugh cry emoji meme"
  - "low quality meme"
vector_profile:
  ornamentation: 4
  dimensionality: 1
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Deep-fried meme

> Show the damage as the joke: a picture so copied and boosted that its own decay is the style.

A meme picture pushed through many rounds of saving, sharpening and colour boost until it shows heavy JPEG blocks, burnt reds and yellows, lens flares and glowing emoji. It spread on Reddit and Tumblr in 2017.

**Period:** 2017–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Deep fried, Fried meme, Crunchy meme

## When to load this skill

Load it when the user asks for: "deep fried meme", "deep fried", "jpeg crunch", "fried image", "burnt saturation", "laugh cry emoji meme", "low quality meme".

Good for: humour accounts, meme pages, chaotic campaign teasers, reaction images.

Do not use it when:
- The picture must stay sharp and trustworthy.
- The page has a calm, formal tone.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Deep-fried meme, you MUST:

1. Recompress the image to JPEG quality 5 to 15, 3 to 10 times, with a resize of 50% and 200% between rounds.
2. Raise saturation by 150% to 300% and contrast by 40% to 80% until the reds burn.
3. Sharpen by 150% so that noise shows round every edge.
4. Add lens flare, glowing eyes or a laser flare in red (#FF1A1A) and yellow (#FFE000).
5. Add laugh-cry or 100 emoji at 10% to 20% of the canvas and a caption in outlined Impact-style capitals.
6. Add a 2px to 4px outer glow in orange on the text.
7. Keep the subject readable: the face or the object stays recognisable at 25% size.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean, sharp, modern grading.
- **NEVER:** Subtle, even tones.
- **NEVER:** Neat, aligned caption.
- **NEVER:** Lossless export of a fresh photo.
- **NEVER:** Soft pastel colours.
- **NEVER:** Wide empty margins.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A square canvas of 600px x 600px; a full-bleed picture with a loud caption and 2 to 5 pasted emoji or flares.
- **Whitespace ratio:** No empty space: the picture and effects fill 100% of the canvas.
- **Alignment rules:** Centred or off-centre caption; emoji scatter at random positions of 5% to 20% from the edge.
- **Container geometry:** No containers; stray JPEG blocks of 8px x 8px define the texture.

## Typography

- **Classifications:** condensed grotesque · display capitals
- **Tracking:** Display 0 to +0.02em.
- **Leading:** Display 1.0.
- **Hierarchy rules:** Use one display size at 12% of the canvas height. · Use bold capitals with a 3px to 4px outline. · Use white or yellow for text, with a red or black outline.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Bangers | Anton replaces Impact; Bangers adds a loud comic tone. |
| Oswald | Permanent Marker | A condensed face with a marker for loud side notes. |

## Colour & lighting

- **Palette structure:** Burnt red, yellow and cyan noise on a high-contrast base.
- **Contrast rules:** White capitals with a black outline give 21:1 on any burnt ground.
- **Surface treatment:** JPEG blocks, banding and noise at 10% to 30% strength; no smooth gradients.
- **Light and shadow:** Lens flares and glow of 8px to 24px around bright parts.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Burnt Red | `#FF1A1A` | accent |
| Fry Yellow | `#FFE000` | highlight |
| Hot Orange | `#FF7A00` | glow |
| Crushed Black | `#0A0A0A` | background |
| Flash White | `#FFFFFF` | text |
| Cyan Noise | `#00E5FF` | noise |

## Materiality & texture

- **Surface simulation:** A badly compressed digital image with visible JPEG blocks and burnt colour.
- **Border rules:** A 3px black outline on text; no frame.
- **Blur and elevation:** Glow of 8px to 24px blur on highlights; no soft shadow.

## Ornamentation & iconography

- **Iconography:** Laugh-cry, 100 and fire emoji at 10% to 20% of the canvas.
- **Illustration:** Lens flares, glowing eyes, sparkles and stray stickers.
- **Decorative elements:** JPEG blocks · lens flare · emoji pile

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static image; a GIF version shakes by 4px each 80ms and flashes the flares.
- **Easing:** steps(2, end)
- **Duration (ms):** 160
- **Hover and active:** Hover shakes the picture by 3px.

## Code & token primer

Set `data-style="deep-fried-meme"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="deep-fried-meme"] {
  --color-bg: #0A0A0A;
  --color-surface: #1A0A00;
  --color-text: #FFFFFF;
  --color-muted: #FFE000;
  --color-primary: #FF1A1A;
  --color-accent: #FFE000;
  --color-border: #FF7A00;
  --font-sans: "Oswald", "Anton", sans-serif;
  --font-display: "Anton", "Bangers", sans-serif;
  --border-radius: 0px;
  --border-width: 3px;
  --shadow-elevation: 0 0 16px #FF7A00;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(2, end);
  --duration: 160ms;
  --type-ratio: 1.414;
  --size-small: 11.32px;
  --size-h3: 31.99px;
  --size-h2: 45.23px;
  --size-h1: 63.96px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #0A0A0A;
  --color-on-accent: #0A0A0A;
  --color-muted-on-bg: #FFE000;
  --color-muted-on-surface: #FFE000;
  --color-link: #FFE000;
  --color-link-on-surface: #FFE000;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.02em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.3;
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
| page | `bg-[#0A0A0A] text-white font-sans antialiased` |
| heading | `font-[Anton] text-5xl md:text-7xl uppercase leading-none text-white [-webkit-text-stroke:3px_#000] [text-shadow:0_0_16px_#FF7A00]` |
| body | `text-base leading-[1.3] text-[#FFE000] max-w-prose` |
| card | `border-[3px] border-[#FF7A00] bg-[#1A0A00] shadow-[0_0_16px_#FF7A00]` |
| button | `rounded-none border-[3px] border-[#FFE000] bg-[#FF1A1A] px-6 py-3 font-[Anton] uppercase text-white hover:rotate-2` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: A solid, bold family that matches chunky emoji-like marks. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.02em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.3.
- **Page:** hero poster, center aligned, compact density, accent tilt 3°.
- **Ground:** raw. The ground is a raw, burnt picture with JPEG blocks. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### JPEG recompression (technology)

Repeated lossy saving of one image until blocks, banding and colour noise show. Origin: internet, web, c. 1992.

- Save the image as JPEG at quality 5 to 15.
- Resize it between 50% and 200% and save again; repeat 3 to 10 times.
- Raise saturation and contrast, then sharpen, between the saves.
- Stop when the subject is still readable at 25% size.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Reddit** (platform, web, 2005–now), published the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF1A1A | #FF1A1A, #FFE000, #FF7A00 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFE000 | #FFE000, #FF1A1A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.414 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **less damaged**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Keep the caption and outline but use one clean pass of JPEG quality 80 and no flares.
- If the user asks for **more mood**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Drop the emoji and flares, keep the grain and use one odd cut-out and a calm caption.
- If the user asks for **more retro**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Swap the burn for chrome type, silver gradients and pixel stars.

- **Rejects (the opposite pole; do not blend):** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Mixes well with:** [`surreal-meme`](../surreal-meme/SKILL.md)
- **Kin in another domain:** [`xerox-zine`](../xerox-zine/SKILL.md)
- **Nearest by vector profile:** [`punk-zine`](../punk-zine/SKILL.md), [`anti-design`](../anti-design/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md)

## Emotional target

The viewer feels loud, chaotic fun and a laugh at the damage.

**Keywords:** loud, chaotic, crunchy, ironic, burnt · **Brand archetypes:** jester, outlaw

## Sources

- Know Your Meme: Deep Fried Memes
- [Wikipedia: JPEG](https://en.wikipedia.org/wiki/JPEG)

---

Generated from [`data/internet/styles/deep-fried-meme.json`](../../data/internet/styles/deep-fried-meme.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
