---
name: label-meme
description: "Apply the Label meme style (2017–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: label meme, labelled meme, distracted boyfriend, caption the image, stock photo meme, role labels."
domain: internet
era: feed-mobile
triggers:
  - "label meme"
  - "labelled meme"
  - "distracted boyfriend"
  - "caption the image"
  - "stock photo meme"
  - "role labels"
  - "expectation meme"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Label meme

> Let a famous picture act as a diagram: the labels give the roles, and the pose gives the joke.

A known photo or still where each person or object carries a small text label that gives it a role. The reader maps the roles and finds the joke. The form took off in 2017 with stock photos and cartoon stills.

**Period:** 2017–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Labelled stock photo, Caption-the-image meme

## When to load this skill

Load it when the user asks for: "label meme", "labelled meme", "distracted boyfriend", "caption the image", "stock photo meme", "role labels", "expectation meme".

Good for: humour posts, explainer jokes, team culture slides, social campaigns.

Do not use it when:
- The source photo shows a private person who did not agree.
- The audience needs a serious tone.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Label meme, you MUST:

1. Keep the source picture whole and uncropped; use a 4:3 or 3:2 frame.
2. Add 2 to 4 labels in white or black boxes of 4px padding with a 2px radius.
3. Set labels in a plain bold sans-serif at 24px to 32px, 1 to 4 words each.
4. Place each label over its subject, inside the subject area, at less than 20% of the width.
5. Use a white box with black text, or a black box with white text; use one style in all labels.
6. Add a thin line or arrow from label to subject only when the target is not clear.
7. Keep the picture unedited; the labels are the only addition.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Impact outline capitals.
- **NEVER:** Labels that hide the faces.
- **NEVER:** More than 5 labels.
- **NEVER:** Heavy filters on the picture.
- **NEVER:** Long sentences in labels.
- **NEVER:** Labels in many colours.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single picture of 800px x 600px; labels float over it at the subject positions.
- **Whitespace ratio:** The picture fills 100% of the frame; labels cover less than 15% of the area.
- **Alignment rules:** Each label sits centred on its subject; label text aligns centre.
- **Container geometry:** Rectangular label boxes with a 2px radius and 4px to 8px padding.

## Typography

- **Classifications:** neutral grotesque · bold sans
- **Tracking:** Label 0em; no extra tracking.
- **Leading:** Label 1.1; one line each.
- **Hierarchy rules:** Use one label size, 28px. · Use bold (700) weight. · Use black on white boxes or white on black boxes.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Arimo | Open Sans | Arimo has the metrics of Arial, the usual face of the form. |
| Inter | Roboto | A neutral modern pair. |

## Colour & lighting

- **Palette structure:** The picture sets the colour; labels use black and white only.
- **Contrast rules:** Black on white gives 21:1; keep the label box opaque.
- **Surface treatment:** The photograph shows as shot; labels are flat boxes.
- **Light and shadow:** The light of the photograph; labels have no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Label White | `#FFFFFF` | label box |
| Label Black | `#000000` | label text |
| Photo Skin | `#D9A77E` | photo tone |
| Photo Street | `#7C8A99` | photo tone |
| Accent Red | `#E53935` | arrow |

## Materiality & texture

- **Surface simulation:** A photograph or a cartoon still with flat text boxes laid on it.
- **Border rules:** No border on the picture; 0px to 2px border on labels.
- **Blur and elevation:** No blur; labels sit flat with no elevation.

## Ornamentation & iconography

- **Iconography:** Thin arrows or lines, 2px, from a label to a subject.
- **Illustration:** The source photograph or still; nothing else.
- **Decorative elements:** label box · arrow · source photo

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static image. A video version shows each label in turn, 400ms apart.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover raises a label by 2px and shows its box edge.

## Code & token primer

Set `data-style="label-meme"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="label-meme"] {
  --color-bg: #1A1A1A;
  --color-surface: #2A2A2A;
  --color-text: #F5F5F5;
  --color-muted: #BDBDBD;
  --color-primary: #FFFFFF;
  --color-accent: #E53935;
  --color-border: #000000;
  --font-sans: "Arimo", "Inter", sans-serif;
  --font-display: "Arimo", "Inter", sans-serif;
  --border-radius: 2px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 300ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #F5F5F5;
  --color-on-surface: #F5F5F5;
  --color-on-primary: #1A1A1A;
  --color-on-accent: #000000;
  --color-muted-on-bg: #BDBDBD;
  --color-muted-on-surface: #BDBDBD;
  --color-link: #FFFFFF;
  --color-link-on-surface: #FFFFFF;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
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
| page | `bg-[#1A1A1A] text-[#F5F5F5] font-sans antialiased` |
| heading | `text-2xl md:text-4xl font-bold leading-[1.1]` |
| body | `text-base leading-[1.4] max-w-prose` |
| label | `inline-block rounded-sm bg-white px-2 py-1 text-[28px] font-bold leading-[1.1] text-black` |
| button | `rounded-sm border-2 border-black bg-white px-4 py-2 font-bold text-black hover:-translate-y-0.5 transition-transform` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A neutral outline family for the small arrows and pointers. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.4.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** raw. The ground is the raw photograph; labels sit on it. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

- **Twitter** (platform, web, 2006–now), published the style. A site of short public posts. Its post card is the frame of the tweet screenshot meme, and many label memes spread here.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFFFFF | #FFFFFF, #000000 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E53935 | #E53935, #FFFFFF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–6 px | --border-radius |
| Grid step (`grid_step`) | 4px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more classic**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Remove the boxes and set white outlined capitals at the top and bottom of the picture.
- If the user asks for **more tidy**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Replace the photo with flat figures and use rounded label chips.
- If the user asks for **more weird**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Use a stranger source picture and make each label a calm, odd phrase.

- **Came from (go here for a more orthodox version):** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Mixes well with:** [`tweet-screenshot-meme`](../tweet-screenshot-meme/SKILL.md)
- **Nearest by vector profile:** [`cinemagraph`](../cinemagraph/SKILL.md), [`asmr-video`](../asmr-video/SKILL.md), [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md)

## Emotional target

The viewer maps the labels, finds the roles and laughs when the pose fits.

**Keywords:** clear, diagrammatic, witty, relatable, quick · **Brand archetypes:** jester, everyman

## Sources

- [Wikipedia: Distracted boyfriend](https://en.wikipedia.org/wiki/Distracted_boyfriend)
- Know Your Meme: Distracted Boyfriend

---

Generated from [`data/internet/styles/label-meme.json`](../../data/internet/styles/label-meme.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
