---
name: ai-slop
description: "Apply the AI Slop style (2024–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: ai slop, slop, engagement bait, facebook ai images, feed filler, mass-made ai art."
domain: internet
era: contemporary-spatial
triggers:
  - "ai slop"
  - "slop"
  - "engagement bait"
  - "facebook ai images"
  - "feed filler"
  - "mass-made ai art"
vector_profile:
  ornamentation: 3
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 1
---

# AI Slop

> The image exists to fill a feed: it has a high finish, no author and no point, and its small errors show the lack of care.

Mass-made generated images in social feeds: a plastic gloss, a generic subject, warped hands, false text and a bait caption. The word slop for such content spread in 2024.

**Period:** 2024–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Slop, Engagement-bait AI image, Feed filler art

## When to load this skill

Load it when the user asks for: "ai slop", "slop", "engagement bait", "facebook ai images", "feed filler", "mass-made ai art".

Good for: critique and media-literacy pages, satire and parody posts, examples in articles about feed quality, detection and moderation tool mock-ups.

Do not use it when:
- A brand needs to look careful and authored.
- The page promotes real products that must be accurate.
- The content serves vulnerable viewers who could take the bait.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in AI Slop, you MUST:

1. Pick a generic, emotive subject: a child with a cake, a log cabin at sunset, an animal made of fruit.
2. Render the subject at full gloss with a warm glow (#FFD08A) and a saturation of 120%.
3. Leave 1 to 3 faults in each image: an extra finger, a sign with false letters, or a seam in the background.
4. Put a bait caption of 16px to 20px above the image, in plain sans, with 2 to 4 emoji.
5. Add a reaction row with 3 round icons and a count in 14px under the image.
6. Set a square 1:1 or a 4:5 frame at 1080px wide, with a 1px light border on a light grey feed (#F2F3F5).
7. Post the same subject in 6 to 12 near copies, with small changes of colour or crop.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A clear author credit and a stated purpose.
- **NEVER:** Careful, hand-drawn detail.
- **NEVER:** Honest, quiet photography.
- **NEVER:** Restraint in gloss and colour.
- **NEVER:** Strong editorial layout.
- **NEVER:** Faults that are corrected.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column feed of cards 480px to 680px wide; each card has a caption, an image and a reaction row, with 12px gaps.
- **Whitespace ratio:** 10% to 15% of the card stays empty; the spacing scale is 4, 8, 12 and 16px.
- **Alignment rules:** Flush-left caption and reaction row; the image fills the card width.
- **Container geometry:** Cards with an 8px radius; round reaction icons; the image has a 0px radius.

## Typography

- **Classifications:** neutral sans
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.25; body 1.4.
- **Hierarchy rules:** Use 2 weights: regular (400) and bold (700). · Use sizes 13, 15, 17 and 20px. · Set the caption in sentence case with emoji at the end. · Keep counts in 13px grey.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Inter | The plain feed sans that holds a bait caption. |
| Roboto | Roboto | A common system-like sans for a card feed. |

## Colour & lighting

- **Palette structure:** A light grey feed with white cards, one blue for links and a hot orange-gold glow in the image.
- **Contrast rules:** Ink text on white holds at least 16:1; blue links on white hold 5:1; the image glow is not used for text.
- **Surface treatment:** Flat white cards; the image has a plastic gloss with an even, shadowless sheen.
- **Light and shadow:** A warm, even glow from all sides with no clear source; shadows are lifted and soft.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Feed Grey | `#F2F3F5` | background |
| Card White | `#FFFFFF` | surface |
| Ink | `#1C1E21` | text |
| Feed Blue | `#2F6FDB` | primary |
| Plastic Orange | `#E8742A` | accent |
| Warm Glow | `#FFD08A` | image reference |
| Dead Grey | `#5C6168` | muted |

## Materiality & texture

- **Surface simulation:** A glossy, over-smooth render: plastic skin, waxy fruit and glassy wood.
- **Border rules:** A 1px border in #DADDE1 on cards; the image has no border.
- **Blur and elevation:** A soft card shadow of 0 1px 3px at 15% black; a 6px to 12px bokeh behind the subject.

## Ornamentation & iconography

- **Iconography:** Outline icons at 20px with a 1.75px round stroke for like, comment and share.
- **Illustration:** A generic, over-rendered subject with a warm glow and one clear fault.
- **Decorative elements:** bait caption · emoji row · reaction icons · false text on a sign · near-copy series

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** The feed scrolls at normal speed; a like icon pops 1.2x for 200ms; images load with a 300ms fade.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover darkens the icon by 10%; active scales it to 1.2x for 200ms.

## Code & token primer

Set `data-style="ai-slop"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="ai-slop"] {
  --color-bg: #F2F3F5;
  --color-surface: #FFFFFF;
  --color-text: #1C1E21;
  --color-muted: #5C6168;
  --color-primary: #2F6FDB;
  --color-accent: #E8742A;
  --color-border: #DADDE1;
  --font-sans: "Inter", "Roboto", sans-serif;
  --font-display: "Inter", "Roboto", sans-serif;
  --border-radius: 8px;
  --border-width: 1px;
  --shadow-elevation: 0 1px 3px rgba(0,0,0,0.15);
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 200ms;
  --type-ratio: 1.2;
  --size-small: 13.33px;
  --size-h3: 23.04px;
  --size-h2: 27.65px;
  --size-h1: 33.18px;
  --color-on-bg: #1C1E21;
  --color-on-surface: #1C1E21;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #1C1E21;
  --color-muted-on-bg: #5C6168;
  --color-muted-on-surface: #5C6168;
  --color-link: #1C1E21;
  --color-link-on-surface: #2F6FDB;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1.25;
  --display-case: none;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 1.75;
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
| page | `bg-[#F2F3F5] text-[#1C1E21] font-sans antialiased px-3 md:px-8` |
| heading | `text-xl md:text-2xl font-bold leading-[1.25]` |
| body | `text-[15px] leading-[1.4] max-w-prose` |
| section | `rounded-lg border border-[#DADDE1] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.15)]` |
| button | `rounded-full bg-[#2F6FDB] px-5 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105` |
| label | `text-[13px] text-[#5C6168]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.75 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A common thin line set that matches a standard feed card and its reaction row. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.25, case: none.
- **Weights:** display 700, subhead 600, body 400, bold in text 700, labels and buttons 600. The style uses 3 weights (400, 600, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.4.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** soft. A soft light feed with one warm glow stands for the plain, even field around a glossy image. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Facebook** (platform, web, 2004–now), published the style. A social network. Small image groups on it started Health Goth in 2013.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #2F6FDB | #2F6FDB, #F2F3F5, #FFFFFF, #E4E6EA | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E8742A | #2F6FDB, #E8742A, #1C1E21 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 8px | 0–16 px | --border-radius |
| Grid step (`grid_step`) | 4px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more crafted**: move toward [`diffusion-gloss`](../diffusion-gloss/SKILL.md) (Diffusion Gloss). Remove the faults and the bait caption; set one clear subject with a deliberate light.
- If the user asks for **more honest**: move toward [`photo-dump`](../photo-dump/SKILL.md) (Photo Dump). Replace the render with 6 plain phone photos and short, true captions.
- If the user asks for **funnier**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Push the subject into a clear absurd image and add a deadpan caption.

- **Came from (go here for a more orthodox version):** [`diffusion-gloss`](../diffusion-gloss/SKILL.md)
- **Mixes well with:** [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md)
- **Kin in another domain:** [`ai-hyperreal`](../ai-hyperreal/SKILL.md)
- **Nearest by vector profile:** [`frutiger-aero`](../frutiger-aero/SKILL.md), [`ai-avatar-portrait`](../ai-avatar-portrait/SKILL.md), [`apple-aqua`](../apple-aqua/SKILL.md)

## Emotional target

The viewer feels a faint hollow: it looks nice, and no one made it.

**Keywords:** glossy, generic, hollow, bait, repetitive, plastic · **Brand archetypes:** jester, everyman, outlaw

## Sources

- [Wikipedia: AI slop](https://en.wikipedia.org/wiki/AI_slop)
- [Know Your Meme: AI Slop](https://knowyourmeme.com/memes/ai-slop)

---

Generated from [`data/internet/styles/ai-slop.json`](../../data/internet/styles/ai-slop.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
