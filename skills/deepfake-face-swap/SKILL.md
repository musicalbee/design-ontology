---
name: deepfake-face-swap
description: "Apply the Deepfake Face Swap style (2017–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: deepfake, face swap, synthetic video, landmark overlay, face tracking, media forensics."
domain: internet
era: touchscreen
triggers:
  - "deepfake"
  - "face swap"
  - "synthetic video"
  - "landmark overlay"
  - "face tracking"
  - "media forensics"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 5
  typographic_expressiveness: 1
---

# Deepfake Face Swap

> The face in the frame is a layer, and the layer shows its seam: the style marks where a real image ends and a made image starts.

Video in which a face region is replaced by a generated one, with a soft blend seam and a check overlay of landmark dots. The form spread after 2017 through open code and phone apps.

**Period:** 2017–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Face swap, Synthetic face video, Deepfake

## When to load this skill

Load it when the user asks for: "deepfake", "face swap", "synthetic video", "landmark overlay", "face tracking", "media forensics".

Good for: media literacy and forensics pages, explainers about synthetic media, detection tool interfaces, film VFX breakdowns.

Do not use it when:
- A real, named person would be the subject.
- The page could deceive viewers if the SYNTHETIC label is missing.
- The content needs warm, hand-made character.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Deepfake Face Swap, you MUST:

1. Frame one face at 30% to 60% of the frame height, near-frontal, with even light.
2. Blend the replaced area with a feathered edge of 8px to 24px; let a faint colour mismatch of 3% to 6% show at the jaw.
3. Draw a detection box of 2px in green (#3DDC84) and 68 landmark dots of 4px on the face in the analysis view.
4. Show a pair of frames side by side, source on the left and result on the right, with a 2px divider.
5. Add a label chip of 12px mono capitals, for example SYNTHETIC, in the top-left corner at 90% opacity.
6. Keep the face patch at lower resolution than the rest of the frame, about 60% of the sharpness.
7. Cut the clip at 24 fps or 30 fps and let the seam flicker for 2 to 4 frames on a fast turn of the head.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Obvious cartoon filters with no real face.
- **NEVER:** Heavy stylised illustration.
- **NEVER:** Dark moody grading that hides the seam.
- **NEVER:** Decorative borders and ornament.
- **NEVER:** Photoreal result with no label or check overlay.
- **NEVER:** Large display type over the face.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■■` 5/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A video frame at 16:9 or 9:16 with an overlay layer; the analysis view uses a 2-column split with 16px gutters.
- **Whitespace ratio:** 0% in the frame; the tool panel keeps 20% to 30% empty with a spacing scale of 4, 8, 16 and 24px.
- **Alignment rules:** The face sits on the centre third; labels align flush-left to the frame corner at 16px inset.
- **Container geometry:** Frames with a 0px radius; label chips with a 2px radius; detection boxes are plain rectangles.

## Typography

- **Classifications:** neutral sans · monospace
- **Tracking:** Display 0em; mono labels +0.08em.
- **Leading:** Display 1.2; body 1.5.
- **Hierarchy rules:** Use 2 weights: regular (400) and semibold (600). · Use sizes 12, 14, 16 and 24px. · Set check labels in upper-case mono at 12px. · Keep text out of the face area.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | A neutral sans that stays out of the way of the face. |
| JetBrains Mono | IBM Plex Sans | A mono face for the labels and landmark counts. |

## Colour & lighting

- **Palette structure:** Neutral dark panel colours with one green for tracking marks and one amber for warnings; skin tones come from the footage.
- **Contrast rules:** White text on the panel holds at least 14:1; green and amber carry marks and borders at 3:1 or more.
- **Surface treatment:** Flat dark panels around natural video; no gradient; the video keeps its own grain.
- **Light and shadow:** The light comes from the source footage; the face patch carries a slightly different colour temperature, 200K to 400K off.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Panel Black | `#101418` | background |
| Panel Grey | `#1B2128` | surface |
| Landmark Green | `#3DDC84` | primary |
| Box Amber | `#FFB300` | accent |
| Skin Tone | `#C68E6B` | image reference |
| Seam Grey | `#8A949E` | muted |
| Frame White | `#F2F4F5` | text |

## Materiality & texture

- **Surface simulation:** Plain video and a software overlay: a camera frame with analysis marks on top.
- **Border rules:** 2px detection boxes in green and 1px hairlines in seam grey for dividers.
- **Blur and elevation:** A 12px feather on the blend edge only; panels have no shadow.

## Ornamentation & iconography

- **Iconography:** Outline icons at 20px with a 1.5px round stroke for play, scan and compare.
- **Illustration:** No illustration; the content is a generic, anonymous face in a neutral setting.
- **Decorative elements:** detection box · 68 landmark dots · side-by-side compare · SYNTHETIC label chip · seam flicker

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Frames play at 24 fps or 30 fps; the landmark dots follow the head with a lag of 1 to 2 frames and the seam flickers for 2 to 4 frames on a fast turn.
- **Easing:** linear
- **Duration (ms):** 200
- **Hover and active:** Hover shows the landmark layer at 100% opacity; active toggles source and result.

## Code & token primer

Set `data-style="deepfake-face-swap"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="deepfake-face-swap"] {
  --color-bg: #101418;
  --color-surface: #1B2128;
  --color-text: #F2F4F5;
  --color-muted: #B3BCC5;
  --color-primary: #3DDC84;
  --color-accent: #FFB300;
  --color-border: #3DDC84;
  --font-sans: "IBM Plex Sans", "Inter", sans-serif;
  --font-display: "JetBrains Mono", "Inter", monospace;
  --border-radius: 2px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: linear;
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #F2F4F5;
  --color-on-surface: #F2F4F5;
  --color-on-primary: #101418;
  --color-on-accent: #101418;
  --color-muted-on-bg: #B3BCC5;
  --color-muted-on-surface: #B3BCC5;
  --color-link: #FFB300;
  --color-link-on-surface: #FFB300;
  --display-weight: 600;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#101418] text-[#F2F4F5] font-sans antialiased px-4 md:px-8` |
| heading | `text-2xl md:text-4xl font-semibold leading-[1.2] font-mono` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `rounded-sm border-2 border-[#3DDC84] bg-[#1B2128]` |
| button | `rounded-sm border-2 border-[#3DDC84] bg-[#3DDC84] px-4 py-2 text-sm font-medium text-[#101418] transition-colors duration-200 hover:bg-[#FFB300]` |
| label | `font-mono text-xs uppercase tracking-[0.08em] text-[#FFB300]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin line family that matches analysis tools and keeps the face visible. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0em, leading 1.2, case: none.
- **Weights:** display 600, subhead 500, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** raw. The ground is a plain tool panel: the footage is the content and the panel adds only marks. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Face-swap autoencoder (technology)

A pair of networks that learn two faces and then draw one face with the pose and expression of the other, frame by frame. Origin: internet, Reddit, 2017.

- Find and crop the face in each frame, and mark its landmark points.
- Train one encoder and two decoders on many images of the two faces.
- Decode the pose of face A with the decoder of face B.
- Blend the new face patch into the frame with a feathered mask of 8px to 24px.
- Mark the result as synthetic in any public use.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Reddit** (platform, web, 2005–now), launched the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #3DDC84 | #3DDC84, #101418, #1B2128, #0A0D10 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFB300 | #3DDC84, #FFB300, #F2F4F5 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more obvious**: move toward [`mini-diffusion-meme`](../mini-diffusion-meme/SKILL.md) (Mini-Diffusion Meme). Replace the real footage with a smudged 3x3 grid and a text prompt as the caption.
- If the user asks for **more polished**: move toward [`diffusion-gloss`](../diffusion-gloss/SKILL.md) (Diffusion Gloss). Make the whole frame a smooth render with an even rim light; keep the label chip.
- If the user asks for **show the seam**: move toward [`gan-portrait`](../gan-portrait/SKILL.md) (GAN Portrait). Show a still of a generated face with the eye line fixed at 40% of the frame height and mark the artefacts.

- **Came from (go here for a more orthodox version):** [`deepdream-psychedelia`](../deepdream-psychedelia/SKILL.md)
- **Mixes well with:** [`gan-portrait`](../gan-portrait/SKILL.md), [`reaction-gif`](../reaction-gif/SKILL.md)
- **Kin in another domain:** [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`cinemagraph`](../cinemagraph/SKILL.md), [`gan-portrait`](../gan-portrait/SKILL.md), [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md)

## Emotional target

The viewer feels doubt: the face looks right, and the small seam says that it is not.

**Keywords:** uncanny, clinical, synthetic, doubtful, precise, unsettling · **Brand archetypes:** magician, sage, outlaw

## Sources

- [Wikipedia: Deepfake](https://en.wikipedia.org/wiki/Deepfake)
- [Thies et al., Face2Face: Real-time Face Capture and Reenactment of RGB Videos (CVPR 2016)](https://arxiv.org/abs/2007.14808)

---

Generated from [`data/internet/styles/deepfake-face-swap.json`](../../data/internet/styles/deepfake-face-swap.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
