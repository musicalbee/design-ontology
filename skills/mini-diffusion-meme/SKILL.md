---
name: mini-diffusion-meme
description: "Apply the Mini-Diffusion Meme style (2022–2023) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: dall-e mini, craiyon, 3x3 grid, ai meme, smudged ai images, prompt meme."
domain: internet
era: short-video-ai
triggers:
  - "dall-e mini"
  - "craiyon"
  - "3x3 grid"
  - "ai meme"
  - "smudged ai images"
  - "prompt meme"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 5
  skeuomorphic_realism: 3
  typographic_expressiveness: 2
---

# Mini-Diffusion Meme

> The joke is the gap between a plain prompt and a soft, wrong picture; the smudge is the format.

A 3x3 grid of small, smudged images that answer a silly text prompt, with warped faces and soft shapes. It went viral in 2022 from a free, low-resolution image model.

**Period:** 2022–2023 · **Era:** Short video and AI · **Domain:** Internet · **Also called:** DALL-E mini meme, Craiyon grid, Smudge grid

## When to load this skill

Load it when the user asks for: "dall-e mini", "craiyon", "3x3 grid", "ai meme", "smudged ai images", "prompt meme".

Good for: meme posts and social jokes, posts about early AI image tools, playful placeholder art, teaching pages on model limits.

Do not use it when:
- The page needs a polished, trustworthy brand image.
- The images must be exact or accurate.
- The audience reads the faults as insult.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Mini-Diffusion Meme, you MUST:

1. Arrange 9 images in a 3x3 grid of 256px tiles with a 4px gap and no gutter.
2. Let each tile show a blur of 1px to 2px and a visible JPEG block pattern at 8px blocks.
3. Warp one feature in each image: a face, a hand or a sign with false letters.
4. Put the prompt as the caption above the grid in 20px mono, in lower case, inside quotation marks.
5. Set a 1px dark frame around the grid and a plain cream ground (#F4EFE6).
6. Use a colour range of muddy brown, green and a pale sky; avoid pure white and pure black in tiles.
7. Show a small orange button, such as Run, below the grid at 40px height.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Sharp, high-resolution renders.
- **NEVER:** Glossy cinematic light.
- **NEVER:** Single image output.
- **NEVER:** Clean, accurate faces.
- **NEVER:** Dark moody grading.
- **NEVER:** Dense layout ornament.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** One 3x3 grid of 256px tiles with 4px gaps (776px wide), the prompt above and one button below.
- **Whitespace ratio:** 30% to 40% of the page stays empty; the spacing scale is 4, 8, 16 and 32px.
- **Alignment rules:** The grid is centred; the prompt aligns flush-left to the grid edge.
- **Container geometry:** Square tiles with a 0px radius; a pill button with a 4px radius.

## Typography

- **Classifications:** monospace · neutral sans
- **Tracking:** Display 0em; prompt +0.01em.
- **Leading:** Display 1.3; body 1.5.
- **Hierarchy rules:** Use 2 weights: regular (400) and bold (700). · Use sizes 14, 16, 20 and 32px. · Set the prompt in lower case with quotation marks. · Keep the page title to one line.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| IBM Plex Mono | Inter | A mono prompt line over a neutral text face. |
| Space Mono | Work Sans | A quirky mono face for the caption. |

## Colour & lighting

- **Palette structure:** Muddy neutrals on a cream page, with one orange for the action.
- **Contrast rules:** Black text on cream holds at least 15:1; orange is for the button with dark text at 5:1 or more.
- **Surface treatment:** Flat cream page; tiles show soft, low-detail images with visible 8px JPEG blocks.
- **Light and shadow:** No shadow on the page; the tiles have flat, flattened light with no clear source.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper Cream | `#F4EFE6` | background |
| Tile Paper | `#E8E0D0` | surface |
| Prompt Black | `#1E1E1E` | text |
| Run Orange | `#E5731A` | primary |
| Murky Green | `#5E7A52` | accent |
| Smudge Brown | `#8B6B4E` | image reference |
| Sky Blur | `#9DB7D5` | image reference |

## Materiality & texture

- **Surface simulation:** A compressed, low-resolution output: small images, scaled up and blocky.
- **Border rules:** A 1px frame in #1E1E1E around the grid; tiles have no border.
- **Blur and elevation:** A 1px to 2px blur inside tiles; the page has no elevation.

## Ornamentation & iconography

- **Iconography:** Solid icons at 20px with square corners for run and save.
- **Illustration:** Smudged scenes: a face with extra teeth, a landmark that melts, a sign with false letters.
- **Decorative elements:** 3x3 tile grid · prompt caption · JPEG block pattern · warped face · orange run button

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The grid fills with a loading bar of 30 to 60 seconds, then the tiles appear at once; no motion after.
- **Easing:** steps(4, end)
- **Duration (ms):** 100
- **Hover and active:** Hover darkens the button by 10%; active shifts it down 1px.

## Code & token primer

Set `data-style="mini-diffusion-meme"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="mini-diffusion-meme"] {
  --color-bg: #F4EFE6;
  --color-surface: #E8E0D0;
  --color-text: #1E1E1E;
  --color-muted: #4F473C;
  --color-primary: #E5731A;
  --color-accent: #5E7A52;
  --color-border: #1E1E1E;
  --font-sans: "Inter", "Work Sans", sans-serif;
  --font-display: "IBM Plex Mono", "Space Mono", monospace;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: steps(4, end);
  --duration: 100ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1E1E1E;
  --color-on-surface: #1E1E1E;
  --color-on-primary: #1E1E1E;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #4F473C;
  --color-muted-on-surface: #4F473C;
  --color-link: #1E1E1E;
  --color-link-on-surface: #1E1E1E;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.3;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(130% 95% at 50% 0%, transparent 58%, color-mix(in oklab, var(--color-on-bg) 9%, transparent)),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    radial-gradient(circle at 90% 112%, color-mix(in oklab, var(--color-accent) 34%, transparent) 0 34vmin, transparent calc(34vmin + 1px)),
    radial-gradient(circle at 90% 112%, transparent 0 40vmin, color-mix(in oklab, var(--color-primary) 30%, transparent) 40vmin calc(40vmin + 2px), transparent calc(40vmin + 2px)),
    radial-gradient(55% 60% at 88% 18%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%),
    radial-gradient(45% 50% at 70% 95%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F4EFE6] text-[#1E1E1E] font-sans antialiased px-4 md:px-12` |
| heading | `font-mono text-2xl md:text-4xl font-bold leading-[1.3]` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `border border-[#1E1E1E] bg-[#E8E0D0]` |
| button | `rounded-sm bg-[#E5731A] px-6 py-2.5 text-sm font-bold text-[#1E1E1E] active:translate-y-px hover:brightness-90` |
| label | `font-mono text-sm lowercase text-[#4F473C]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: A square, pixel family suits the blocky, low-resolution output of the format. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.3, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** paper. The ground is a plain cream page, like a simple web form that holds a prompt box. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Diffusion model (tool)

A model that learns to turn noise into an image step by step, and makes a new image from a text prompt. Origin: photography, Stanford and Berkeley, 2015.

- Start from pure noise and remove it over 20 to 50 steps.
- Steer the result with a text prompt and a guidance scale of 5 to 10.
- Expect smooth skin, even light and a glossy, over-detailed finish when the prompt gives no flaw.
- Add a concrete flaw to the prompt, such as grain, a lens fault or a cluttered ground, to break the sheen.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Craiyon** (platform, web, 2021–now), made the style. A free web page that turns a text prompt into a 3x3 grid of small, soft images. Users shared its grids as memes.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E5731A | #E5731A, #F4EFE6, #E8E0D0, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #5E7A52 | #E5731A, #5E7A52, #9DB7D5 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 4px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more polished**: move toward [`diffusion-gloss`](../diffusion-gloss/SKILL.md) (Diffusion Gloss). Replace the grid with one smooth 1024px render and add a rim light.
- If the user asks for **funnier**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Use one tile only and add a deadpan caption in plain type.
- If the user asks for **more like a face**: move toward [`gan-portrait`](../gan-portrait/SKILL.md) (GAN Portrait). Show one clean, centred headshot with the eye line at 40%.

- **Came from (go here for a more orthodox version):** [`gan-portrait`](../gan-portrait/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`diffusion-gloss`](../diffusion-gloss/SKILL.md)
- **Was rejected by:** [`diffusion-gloss`](../diffusion-gloss/SKILL.md)
- **Mixes well with:** [`surreal-meme`](../surreal-meme/SKILL.md)
- **Nearest by vector profile:** [`duet-split-screen`](../duet-split-screen/SKILL.md), [`bento-grid-ui`](../bento-grid-ui/SKILL.md), [`clean-girl`](../clean-girl/SKILL.md)

## Emotional target

The viewer laughs at a wrong, soft picture and trusts the joke more than the image.

**Keywords:** silly, smudged, amateur, playful, wrong, low-fi · **Brand archetypes:** jester, everyman, explorer

## Sources

- [Wikipedia: Craiyon](https://en.wikipedia.org/wiki/Craiyon)
- [Know Your Meme: DALL-E Mini](https://knowyourmeme.com/memes/dall-e-mini-craiyon)

---

Generated from [`data/internet/styles/mini-diffusion-meme.json`](../../data/internet/styles/mini-diffusion-meme.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
