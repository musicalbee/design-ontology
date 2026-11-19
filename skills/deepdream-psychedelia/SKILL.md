---
name: deepdream-psychedelia
description: "Apply the DeepDream Psychedelia style (2015–2017) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: deepdream, inceptionism, neural hallucination, dog faces in clouds, psychedelic AI, puppy slug."
domain: internet
era: touchscreen
triggers:
  - "deepdream"
  - "inceptionism"
  - "neural hallucination"
  - "dog faces in clouds"
  - "psychedelic AI"
  - "puppy slug"
vector_profile:
  ornamentation: 5
  dimensionality: 3
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# DeepDream Psychedelia

> A machine that looks for patterns finds them in everything: the picture shows what the network expects to see, and it shows it everywhere.

Photographs that a neural network fills with eyes, dog faces, pagodas and swirled fur at every scale. It started in 2015 when Google released the code that made the effect.

**Period:** 2015–2017 · **Era:** Touchscreen · **Domain:** Internet · **Also called:** DeepDream, Inceptionism, Puppy-slug dreams

## When to load this skill

Load it when the user asks for: "deepdream", "inceptionism", "neural hallucination", "dog faces in clouds", "psychedelic AI", "puppy slug".

Good for: music visuals and album art, posters on machine perception, explainers about how neural networks see, experimental art pages.

Do not use it when:
- The page needs a calm, trustworthy tone.
- The content is dense text that must be read at length.
- The audience is sensitive to repeated eye motifs.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in DeepDream Psychedelia, you MUST:

1. Fill the frame with repeated motifs: eyes, snouts, feathers and arches at 3 to 5 sizes, from 8px to 200px.
2. Run 4 to 8 octaves of the effect, so that small motifs sit inside large ones.
3. Set saturation at 130% to 180% and push the hue toward orange, lime and magenta over a dark ground (#14102A).
4. Bend lines into spirals and wave fields; keep no straight edge longer than 10% of the frame.
5. Keep one readable photographic base, such as a landscape or a face, at about 30% visibility under the motifs.
6. Place a plain 16px mono caption bar at the foot of the frame with the layer name, for example inception_4c.
7. Loop the zoom at 12 fps: scale the image 1.03x for each frame and feed it back to the network.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean flat colour fields with no repeated motif.
- **NEVER:** Straight, geometric layouts with wide margins.
- **NEVER:** Photoreal skin and soft studio light.
- **NEVER:** Calm monochrome palettes.
- **NEVER:** One focal subject on an empty ground.
- **NEVER:** Neutral corporate type.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■■` 5/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A full-bleed image with a 12-column caption area of 1 row; the image runs to the edge and the frame has no gutter.
- **Whitespace ratio:** 0% to 5% of the image stays empty; the caption bar takes 48px and the spacing scale is 8, 16 and 32px.
- **Alignment rules:** Flush-left caption under a centred, full-width image; no element is centred on a motif.
- **Container geometry:** Square or 4:3 frames with a 0px radius; caption chips with a 4px radius.

## Typography

- **Classifications:** monospace · humanist sans
- **Tracking:** Display takes +0.02em; captions take +0.04em.
- **Leading:** Display 1.15; body 1.5.
- **Hierarchy rules:** Use 2 weights: regular (400) and bold (700). · Use sizes 12, 16, 28 and 56px. · Set layer names in lower case with underscores. · Keep the headline short: 3 words at most.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Space Mono | IBM Plex Mono | Mono faces that suit layer names and code captions. |
| Syne | Inter | A wide display face with a neutral text face for page copy. |

## Colour & lighting

- **Palette structure:** Four saturated hues (orange, lime, magenta, cyan) on a deep indigo ground, with one cream highlight.
- **Contrast rules:** Cream text on indigo holds at least 12:1; the saturated hues carry image fields and borders, not long text.
- **Surface treatment:** High-saturation texture fields of fine, repeated detail; a 3% grain; no flat fills.
- **Light and shadow:** No cast shadow; each motif has its own inner glow of 2px to 6px and a rim of lighter hue.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Dream Indigo | `#14102A` | background |
| Eye Orange | `#FF9A3C` | primary |
| Acid Lime | `#9BE564` | accent |
| Dream Magenta | `#E83E8C` | second accent |
| Pool Cyan | `#3EC7E8` | highlight |
| Fur Cream | `#F6E7C1` | text |

## Materiality & texture

- **Surface simulation:** Over-fitted feature maps: fur, scales, feathers and eyes that grow from the texture of the photograph.
- **Border rules:** A 1px border in lime at 60% on caption chips; the image has no border.
- **Blur and elevation:** No blur and no elevation; detail is sharp at every scale.

## Ornamentation & iconography

- **Iconography:** Outline icons at 20px with a 2px round stroke; used only in the caption bar.
- **Illustration:** Repeated eyes, dog snouts, birds, pagodas and arches that grow out of clouds, trees and faces.
- **Decorative elements:** repeated eye motif · spiral fur · layer-name caption · zoom-loop frame · octave tiling

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** An endless zoom: each frame scales 1.03x and adds new motifs; the loop runs 8 to 12 seconds at 12 fps.
- **Easing:** cubic-bezier(0.37, 0, 0.63, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover raises saturation by 20% and adds one octave of motifs; active freezes the zoom.

## Code & token primer

Set `data-style="deepdream-psychedelia"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="deepdream-psychedelia"] {
  --color-bg: #14102A;
  --color-surface: #231A47;
  --color-text: #F6E7C1;
  --color-muted: #CBBFE8;
  --color-primary: #FF9A3C;
  --color-accent: #9BE564;
  --color-border: #9BE564;
  --font-sans: "IBM Plex Mono", "Inter", monospace;
  --font-display: "Space Mono", "Syne", monospace;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: 0 0 12px rgba(255,154,60,0.45);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.37, 0, 0.63, 1);
  --duration: 600ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #F6E7C1;
  --color-on-surface: #F6E7C1;
  --color-on-primary: #14102A;
  --color-on-accent: #14102A;
  --color-muted-on-bg: #CBBFE8;
  --color-muted-on-surface: #CBBFE8;
  --color-link: #9BE564;
  --color-link-on-surface: #9BE564;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0.02em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(100deg, var(--color-bg) 26%, transparent 58%),
    repeating-conic-gradient(from 0deg at 82% 62%, var(--color-primary) 0 12deg, var(--color-accent) 12deg 24deg, var(--color-primary) 24deg 36deg),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#14102A] text-[#F6E7C1] font-mono antialiased px-4 md:px-10` |
| heading | `text-3xl md:text-6xl font-bold leading-[1.15] text-[#FF9A3C]` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `rounded border border-[#9BE564]/60 bg-[#231A47] shadow-[0_0_12px_rgba(255,154,60,0.45)]` |
| button | `rounded border border-[#9BE564] bg-[#FF9A3C] px-5 py-3 text-sm font-bold text-[#14102A] transition-all duration-[600ms] hover:saturate-150` |
| label | `text-xs lowercase tracking-[0.04em] text-[#9BE564]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Duotone) by Phosphor Icons, licence MIT. Reason: A duotone family that keeps the caption icons light on a very busy image. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.02em, leading 1.15, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** swirl. The ground repeats the spiral fur and the wave fields that DeepDream grows from a photograph. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Feature amplification (process)

A method that changes a photograph to raise the response of one network layer, so the network patterns grow out of the image. Origin: internet, Google, 2015.

- Pick one layer of a trained image network; a middle layer gives eyes and fur, a high layer gives whole animals.
- Change the pixels of the image by small steps so that the layer response rises.
- Repeat at 4 to 8 image sizes (octaves) and mix the results back into one image.
- Feed the output back in and zoom 3% for each frame to make an endless loop.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **GitHub** (platform, web, 2007–now), published the style. A web site where developers host code. Its own dark interface and the editor themes and terminal tools that it hosts set the look of software for engineers.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF9A3C | #FF9A3C, #14102A, #231A47, #0B0818 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #9BE564 | #FF9A3C, #9BE564, #E83E8C, #3EC7E8 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.25–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`surrealism-web`](../surrealism-web/SKILL.md) (Surrealism Web). Keep one dream object on an empty ground and cut saturation to 80%; remove the repeated motifs.
- If the user asks for **more recent**: move toward [`diffusion-gloss`](../diffusion-gloss/SKILL.md) (Diffusion Gloss). Replace the motif swirl with one smooth, over-detailed render and add a teal and amber rim light.
- If the user asks for **more retro**: move toward [`psychedelic`](../psychedelic/SKILL.md) (Psychedelic). Swap the machine motifs for hand-drawn paisley and flower forms with a halftone ground.

- **Came from (go here for a more orthodox version):** [`psychedelic`](../psychedelic/SKILL.md)
- **Led to (go here for a newer version):** [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md), [`gan-portrait`](../gan-portrait/SKILL.md)
- **Kin in another domain:** [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md)
- **Nearest by vector profile:** [`seapunk`](../seapunk/SKILL.md), [`tumblr-soft-grunge`](../tumblr-soft-grunge/SKILL.md), [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md)

## Emotional target

The viewer feels awe and unease: a familiar picture is full of watchers.

**Keywords:** hallucinatory, dense, uncanny, organic, saturated, recursive · **Brand archetypes:** magician, explorer, jester

## Sources

- [Wikipedia: DeepDream](https://en.wikipedia.org/wiki/DeepDream)
- [Google Research Blog: Inceptionism, Going Deeper into Neural Networks (2015)](https://research.google/blog/inceptionism-going-deeper-into-neural-networks/)

---

Generated from [`data/internet/styles/deepdream-psychedelia.json`](../../data/internet/styles/deepdream-psychedelia.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
