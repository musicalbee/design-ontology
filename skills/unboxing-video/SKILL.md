---
name: unboxing-video
description: "Apply the Unboxing Video style (2006–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: unboxing, first look, product reveal, open the box, hands-on video, new gadget."
domain: internet
era: postmodern-early-digital
triggers:
  - "unboxing"
  - "first look"
  - "product reveal"
  - "open the box"
  - "hands-on video"
  - "new gadget"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 3
---

# Unboxing Video

> The viewer owns the first touch by proxy: show the opening of the box in real time and let the object, not the frame, carry the interest.

A fixed top-down shot of a table. Two hands open a box and lift out a product, and a voice names each part. The look is plain on purpose, so the object is the star.

**Period:** 2006–now · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Unboxing, Product reveal, First look

## When to load this skill

Load it when the user asks for: "unboxing", "first look", "product reveal", "open the box", "hands-on video", "new gadget".

Good for: product review pages, e-commerce launch videos, gadget channel thumbnails, drop announcements, packaging previews.

Do not use it when:
- The product has no physical form.
- The brand needs a cinematic or luxury mood.
- The page needs dense data instead of one object.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Unboxing Video, you MUST:

1. Fix the camera above the table at 90° and frame the box at 40% to 60% of the picture height.
2. Use a plain ground in light grey or white (#F2EFE9) with no pattern and no props.
3. Show only two hands, with no face, until the product is out of the box.
4. Keep each cut at 4s to 12s; hold a close-up of the product for at least 3s.
5. Name each part with a lower-third label of 24px to 32px for 2s at the moment the part appears.
6. Show the price or the model name in one chip in the top-right corner for the full clip.
7. Light the table from the front at 5600K so that shadows stay soft and the colours stay true.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Dark, moody grounds with heavy vignettes.
- **NEVER:** Quick cuts under 2s that hide the object.
- **NEVER:** Busy desk props around the box.
- **NEVER:** Stage lighting with coloured gels.
- **NEVER:** Dense on-screen text over the product.
- **NEVER:** Handheld camera shake.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 16:9 frame with a centre stage of 60% width. Lower-third labels sit on a 12-column grid with 24px gutters.
- **Whitespace ratio:** 35% to 50% of the frame is empty table; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** The product stays centred; labels align flush-left at 48px from the frame edge; the price chip aligns top-right.
- **Container geometry:** Chips and labels with an 8px radius and a 2px edge; the box and the product stay as real objects with true edges.

## Typography

- **Classifications:** geometric sans · grotesque · label
- **Tracking:** Display takes 0em; labels take +0.04em in capitals.
- **Leading:** Display 1.1; body 1.5.
- **Hierarchy rules:**
  - Use two weights: medium (500) and bold (700).
  - Use sizes 14, 20, 32 and 56px.
  - Set the model name in bold at 56px and each part label at 24px.
  - Set the price chip in capitals at 14px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rubik | Inter | A friendly, rounded sans for labels with a neutral text face. |
| Archivo Black | Roboto | A heavy label face for the model name with a plain body face. |
| Poppins | Open Sans | A clean geometric display face for chips and lower-thirds. |

## Colour & lighting

- **Palette structure:** A neutral table with white and cardboard, one orange label colour and one blue tape accent.
- **Contrast rules:** Text on the table grey holds at least 14:1; orange carries chips and rules, not body text.
- **Surface treatment:** Flat, matte table colour with a soft, 2% grain; no gradient on the ground.
- **Light and shadow:** Soft front light; a 16px blur shadow at 14% black under each object.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Table Grey | `#F2EFE9` | background |
| Box White | `#FFFFFF` | surface |
| Packing Black | `#1B1B1D` | text |
| Label Orange | `#F26B1D` | primary |
| Tape Blue | `#1E88E5` | accent |
| Cardboard | `#C9A26B` | highlight |

## Materiality & texture

- **Surface simulation:** A real desk, a cardboard box, shrink film and moulded foam shown as shot, with true material colour.
- **Border rules:** A 2px solid edge in black at 12% on chips; no edge on the table.
- **Blur and elevation:** A 16px soft shadow under the box and the labels; no backdrop blur.

## Ornamentation & iconography

- **Iconography:** Outline icons at 24px with a 2px stroke for storage, weight and size; round terminals.
- **Illustration:** No illustration; the real object and the real box are the only picture.
- **Decorative elements:** lower-third label · price chip · open box · two hands · cardboard flap

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Labels slide in 24px from the left over 200ms and hold for 2s; the cut between parts is a hard cut with no wipe.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover raises a chip by 2px and adds a 16px shadow; active state darkens the fill by 8%.

## Code & token primer

Set `data-style="unboxing-video"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="unboxing-video"] {
  --color-bg: #F2EFE9;
  --color-surface: #FFFFFF;
  --color-text: #1B1B1D;
  --color-muted: #55555C;
  --color-primary: #F26B1D;
  --color-accent: #1E88E5;
  --color-border: #1B1B1D;
  --font-sans: "Inter", "Roboto", sans-serif;
  --font-display: "Rubik", "Archivo Black", sans-serif;
  --border-radius: 8px;
  --border-width: 2px;
  --shadow-elevation: 0 8px 16px rgba(27,27,29,0.14);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1B1B1D;
  --color-on-surface: #1B1B1D;
  --color-on-primary: #1B1B1D;
  --color-on-accent: #1B1B1D;
  --color-muted-on-bg: #55555C;
  --color-muted-on-surface: #55555C;
  --color-link: #1B1B1D;
  --color-link-on-surface: #1B1B1D;
  --display-weight: 700;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.1;
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
| page | `bg-[#F2EFE9] text-[#1B1B1D] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-bold leading-[1.1] tracking-normal` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-lg border-2 border-[#1B1B1D]/15 bg-[#FFFFFF] shadow-[0_8px_16px_rgba(27,27,29,0.14)]` |
| button | `rounded-lg bg-[#F26B1D] px-6 py-3 text-sm font-bold text-[#1B1B1D] transition-shadow duration-200 hover:shadow-[0_8px_16px_rgba(27,27,29,0.14)]` |
| label | `text-xs font-medium uppercase tracking-[0.04em] text-[#55555C]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A plain outline family with round terminals fits the neutral labels and chips of a product shot. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 500, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.5.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** paper. The ground is the plain, pale table that every unboxing shot starts from. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Overhead hands shot (process)

A fixed camera above a table that shows only a pair of hands and an object, so the viewer sees each step of an action. Origin: internet, YouTube, c. 2006.

- Fix the camera at 90° above a plain table.
- Frame the object at 40% to 60% of the picture height.
- Show hands only; keep the face out of the frame.
- Hold each step for 4 to 12 seconds.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #F26B1D | #F26B1D, #1E88E5, #1B1B1D | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #1E88E5 | #1E88E5, #F26B1D | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 8px | 4–16 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more dramatic**: move toward [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md) (Clickbait Thumbnail). Add a shocked face, a red arrow and a 120px headline; keep the product at the centre.
- If the user asks for **calmer**: move toward [`asmr-video`](../asmr-video/SKILL.md) (ASMR Video). Move the mic close, slow every action to 2x length and remove all labels.
- If the user asks for **more personal**: move toward [`lets-play-facecam`](../lets-play-facecam/SKILL.md) (Let's Play Facecam). Add a face window of 20% width in the lower-right corner and talk over the product.

- **Led to (go here for a newer version):** [`asmr-video`](../asmr-video/SKILL.md), [`lets-play-facecam`](../lets-play-facecam/SKILL.md)
- **Mixes well with:** [`apple-aqua`](../apple-aqua/SKILL.md)
- **Kin in another domain:** [`creator-vlog`](../creator-vlog/SKILL.md)
- **Nearest by vector profile:** [`dreamcore`](../dreamcore/SKILL.md), [`reaction-gif`](../reaction-gif/SKILL.md), [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md)

## Emotional target

The viewer feels curious and impatient, as if the box were in their own hands.

**Keywords:** curious, tactile, plain, honest, anticipation · **Brand archetypes:** explorer, everyman

## Sources

- [Wikipedia: Unboxing](https://en.wikipedia.org/wiki/Unboxing)
- [Wikipedia: Unbox Therapy](https://en.wikipedia.org/wiki/Unbox_Therapy)

---

Generated from [`data/internet/styles/unboxing-video.json`](../../data/internet/styles/unboxing-video.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
