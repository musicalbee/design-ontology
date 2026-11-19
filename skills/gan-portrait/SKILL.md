---
name: gan-portrait
description: "Apply the GAN Portrait style (2018–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: gan portrait, stylegan, this person does not exist, generated face, synthetic headshot, fake profile photo."
domain: internet
era: feed-mobile
triggers:
  - "gan portrait"
  - "stylegan"
  - "this person does not exist"
  - "generated face"
  - "synthetic headshot"
  - "fake profile photo"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 4
  typographic_expressiveness: 1
---

# GAN Portrait

> A face that nobody owns: the model averages thousands of faces into one believable head, and its faults are the signature.

A square headshot of a person who does not exist: the eyes sit at a fixed height, the background is a soft swirl, and small faults show in teeth, ears and glasses. It spread from 2018 with StyleGAN.

**Period:** 2018–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** StyleGAN face, This person does not exist, Generated headshot

## When to load this skill

Load it when the user asks for: "gan portrait", "stylegan", "this person does not exist", "generated face", "synthetic headshot", "fake profile photo".

Good for: articles on synthetic media, placeholder avatars in mock-ups, design tools that need anonymous faces, datasets and model-card pages.

Do not use it when:
- The page must show a real, named person.
- The face could pass as a real identity in a harmful context.
- The content needs bold, graphic character.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in GAN Portrait, you MUST:

1. Centre one head at 1024px square with the eye line at 40% from the top and the eyes 30% of the width apart.
2. Set a blurred, swirled background of 2 to 3 warm hues at 25% to 40% blur strength.
3. Keep the shoulders at the lower 25% of the frame with a soft, plain garment.
4. Leave one small fault: a mismatched earring, a teeth blur, or a bright water-drop patch of 40px to 80px.
5. Align faces in a 4x4 grid of 256px tiles with a 8px gap to show many generated heads at once.
6. Use a plain caption in 14px sans below the tile; add the word generated and the seed number.
7. Keep the palette natural: skin tones, brown blur and one cool background tint.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Stylised illustration or anime faces.
- **NEVER:** Strong dramatic lighting.
- **NEVER:** Full-body or action shots.
- **NEVER:** Dense overlays and ornament.
- **NEVER:** Sharp, detailed backgrounds.
- **NEVER:** Perfect symmetry with no fault.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A grid of square tiles: 4 columns at 256px with 8px gaps, or one single 1024px tile; the caption sits under the tile.
- **Whitespace ratio:** 20% to 30% of the page stays empty; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Each face is centred in its tile and the eye lines of all tiles share one height.
- **Container geometry:** Square tiles with a 0px radius; caption chips with a 4px radius.

## Typography

- **Classifications:** neutral sans
- **Tracking:** Display -0.01em; captions +0.02em.
- **Leading:** Display 1.2; body 1.5.
- **Hierarchy rules:** Use 2 weights: regular (400) and medium (500). · Use sizes 12, 14, 20 and 32px. · Set the seed number in mono at 12px. · Keep headings in sentence case.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | A neutral sans for plain captions and seed numbers. |
| DM Sans | DM Mono | A friendly sans with a mono seed line. |

## Colour & lighting

- **Palette structure:** Natural skin and brown tones with one cool teal tint; the page is a quiet slate.
- **Contrast rules:** Paper text on slate holds at least 12:1; teal carries links and small marks at 5:1 or more.
- **Surface treatment:** Flat slate panels around the tiles; the faces carry soft, smooth skin with no pores below 1px.
- **Light and shadow:** Even, frontal, soft light with no hard shadow; the background glow is a diffuse blur.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Slate Night | `#1B1F27` | background |
| Panel Slate | `#262B35` | surface |
| Latent Teal | `#2FB5A9` | primary |
| Artefact Blue | `#5A7FD6` | accent |
| Warm Skin | `#D9A58A` | image reference |
| Blur Brown | `#7A5C4A` | image reference |
| Paper | `#EEF0F2` | text |

## Materiality & texture

- **Surface simulation:** A digital studio portrait: smooth skin, soft light and a blurred backdrop.
- **Border rules:** No border on tiles; a 1px hairline in #3A4150 between panels.
- **Blur and elevation:** A 25% to 40% blur on the background of each face only; panels are flat.

## Ornamentation & iconography

- **Iconography:** Outline icons at 20px with a 1.5px round stroke for refresh and download.
- **Illustration:** Anonymous headshots with a soft swirl background; no other art.
- **Decorative elements:** fixed eye line · swirl background · 4x4 tile grid · seed caption · water-drop artefact

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Tiles cross-fade to a new face in 400ms; a latent morph between two faces runs 24 frames at 24 fps.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 400
- **Hover and active:** Hover raises the tile by 2px; active shows the seed and the model name.

## Code & token primer

Set `data-style="gan-portrait"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="gan-portrait"] {
  --color-bg: #1B1F27;
  --color-surface: #262B35;
  --color-text: #EEF0F2;
  --color-muted: #B4BCC8;
  --color-primary: #2FB5A9;
  --color-accent: #5A7FD6;
  --color-border: #3A4150;
  --font-sans: "Inter", "DM Sans", sans-serif;
  --font-display: "DM Sans", "Inter", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 400ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #EEF0F2;
  --color-on-surface: #EEF0F2;
  --color-on-primary: #1B1F27;
  --color-on-accent: #000000;
  --color-muted-on-bg: #B4BCC8;
  --color-muted-on-surface: #B4BCC8;
  --color-link: #2FB5A9;
  --color-link-on-surface: #2FB5A9;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 500;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1.5;
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
| page | `bg-[#1B1F27] text-[#EEF0F2] font-sans antialiased px-4 md:px-12` |
| heading | `text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `border border-[#3A4150] bg-[#262B35]` |
| button | `rounded-sm bg-[#2FB5A9] px-5 py-2.5 text-sm font-medium text-[#1B1F27] transition-transform duration-[400ms] hover:-translate-y-0.5` |
| label | `font-mono text-xs text-[#B4BCC8]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A quiet 1.5px line that keeps the faces as the only content. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking -0.01em, leading 1.2, case: none.
- **Weights:** display 500, subhead 500, body 400, bold in text 500, labels and buttons 500. The style uses 2 weights (400, 500) and no other. The display is 100 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. The ground copies the soft, diffuse backdrop that the model draws behind each face. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Generative adversarial network (technology)

Two networks that compete: one draws images and the other judges them as real or false, until the drawings pass. Origin: internet, Montreal, 2014.

- Train a generator and a discriminator in turns on a large set of images.
- Sample a latent vector of 512 numbers to draw one image.
- Align the training faces so that the eyes sit at the same height in every image.
- Expect small faults in teeth, ears, glasses and the background.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **This Person Does Not Exist** (platform, web, 2019–now), published the style. A web page that shows a new generated face on each reload. It made the generated headshot widely known.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #2FB5A9 | #2FB5A9, #1B1F27, #262B35, #12151B | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #5A7FD6 | #2FB5A9, #5A7FD6, #D9A58A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more glossy**: move toward [`diffusion-gloss`](../diffusion-gloss/SKILL.md) (Diffusion Gloss). Add a cinematic rim light, a teal and amber grade and finer skin detail.
- If the user asks for **more playful**: move toward [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md) (AI Avatar Portrait). Turn the headshot into a stylised avatar with a glow ground and a 4x5 pack grid.
- If the user asks for **show it is fake**: move toward [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md) (Deepfake Face Swap). Add a landmark overlay and a SYNTHETIC label chip.

- **Came from (go here for a more orthodox version):** [`deepdream-psychedelia`](../deepdream-psychedelia/SKILL.md)
- **Led to (go here for a newer version):** [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md), [`diffusion-gloss`](../diffusion-gloss/SKILL.md), [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md)
- **Mixes well with:** [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md)
- **Kin in another domain:** [`ai-hyperreal`](../ai-hyperreal/SKILL.md)
- **Nearest by vector profile:** [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md), [`cinemagraph`](../cinemagraph/SKILL.md), [`flat-lay-feed`](../flat-lay-feed/SKILL.md)

## Emotional target

The viewer feels calm unease: the face is friendly, and nobody is there.

**Keywords:** smooth, anonymous, uncanny, calm, synthetic, generic · **Brand archetypes:** everyman, magician, sage

## Sources

- [Wikipedia: StyleGAN](https://en.wikipedia.org/wiki/StyleGAN)
- [Karras, Laine and Aila, A Style-Based Generator Architecture for Generative Adversarial Networks (2018)](https://arxiv.org/abs/1812.04948)

---

Generated from [`data/internet/styles/gan-portrait.json`](../../data/internet/styles/gan-portrait.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
