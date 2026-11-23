---
name: cottagecore
description: "Apply the Cottagecore style (2018–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: cottagecore, cottage core, countryside, wildflowers, baking, gingham."
domain: internet
era: feed-mobile
triggers:
  - "cottagecore"
  - "cottage core"
  - "countryside"
  - "wildflowers"
  - "baking"
  - "gingham"
  - "homesteading"
  - "fairy garden"
  - "linen"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Cottagecore

> Pick the slow, handmade country day as a refuge from the feed that carries it.

A dream of rural life: wildflowers, baking, linen, embroidery, hand-drawn herbs and soft window light. It grew on Tumblr in 2018 and reached a wide audience on TikTok in 2020.

**Period:** 2018–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Cottage core, Countryside romance

## When to load this skill

Load it when the user asks for: "cottagecore", "cottage core", "countryside", "wildflowers", "baking", "gingham", "homesteading", "fairy garden", "linen".

Good for: bakery and florist shops, craft and tea brands, lifestyle blogs and newsletters, wedding and event pages.

Do not use it when:
- The product is technical, industrial or financial.
- The audience needs fast, dense reading.
- The page must look urban or futuristic.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Cottagecore, you MUST:

1. Set the ground in warm cream (#F6EEDC) with a faint linen or paper grain at 5% opacity.
2. Use sage green (#7D9170), dusty rose (#D9A5A0) and butter yellow (#E8C872) as the three accents.
3. Pair a soft old-style serif for headings with a clear humanist serif for text; add one script word at 1.5 times the size.
4. Frame photographs with rounded corners of 16px to 24px, in soft golden-hour light with a lifted shadow.
5. Place hand-drawn botanicals (a stem, a mushroom, a loaf) at 48px to 120px in the margins.
6. Show food, flowers and tools laid out by hand: bread on linen, a basket, a jar, a kettle.
7. Draw borders as 1px dotted or scalloped lines in sage, and keep buttons as soft rounded pills.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Neon, chrome and glossy gradients.
- **NEVER:** Cold grey office surfaces.
- **NEVER:** Hard black outlines and sharp corners.
- **NEVER:** Heavy sans-serif capitals.
- **NEVER:** City skylines and tech props.
- **NEVER:** Flat stock-photo smiles.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 12-column grid with 24px gutters; cards sit in 2 or 3 columns and break their rows by 8px to 16px, like items on a shelf.
- **Whitespace ratio:** 30% to 40% of the surface stays empty; the spacing scale is 8, 16, 24 and 40px.
- **Alignment rules:** Centred headings with flush-left body text; photographs tilt by 1° to 2° like pinned prints.
- **Container geometry:** Containers with a 20px radius, a 1px dotted sage border and a soft 0 8px 24px shadow at 12% opacity.

## Typography

- **Classifications:** old-style serif · script accent · humanist serif
- **Tracking:** Display 0.01em; body 0; script 0.
- **Leading:** Display 1.15; body 1.7.
- **Hierarchy rules:**
  - Use weights 400 and 600 for the serif.
  - Use sizes 16, 20, 28 and 56px.
  - Set one script word in each main heading at 1.5 times the size.
  - Set captions in italic at 14px.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Cormorant Garamond | Lora | A light, high-contrast serif for headings with a warm text serif. |
| Fraunces | Crimson Pro | A soft, wonky serif with a bookish text face. |
| Pinyon Script | Lora | A hand script for one accent word, with a text serif. |

## Colour & lighting

- **Palette structure:** Cream ground with sage, dusty rose and butter yellow, and a deep forest green for text.
- **Contrast rules:** Forest on cream holds 10:1; muted moss holds 5:1; sage and rose carry fills and rules, not small text.
- **Surface treatment:** A warm flat cream with a paper grain; photographs carry a lifted black and a warm tint.
- **Light and shadow:** Soft golden-hour light; shadows are lifted, warm and blurred at 24px, never black.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Cream | `#F6EEDC` | background |
| Linen | `#FBF6EA` | surface |
| Forest | `#2F3B2A` | text |
| Sage | `#7D9170` | primary |
| Dusty Rose | `#D9A5A0` | accent |
| Butter | `#E8C872` | highlight |
| Moss Grey | `#5B6652` | muted text |
| Oat | `#DDD2B8` | border |

## Materiality & texture

- **Surface simulation:** Linen, gingham, paper, pressed flowers and wooden tables.
- **Border rules:** A 1px dotted border in sage; scalloped edges on labels; stitch lines at 2px dashes on tags.
- **Blur and elevation:** A shadow of 0 8px 24px at 12% opacity on cards; no hard shadow and no glass.

## Ornamentation & iconography

- **Iconography:** Thin outline icons at 24px with 1.5px strokes and round caps; hand-drawn botanical marks as accents.
- **Illustration:** Watercolour or ink botanicals, small animals, baskets, loaves and teapots on a cream ground.
- **Decorative elements:** gingham trim · pressed flower · scalloped label · embroidery stitch line · hand-drawn mushroom

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow and soft: elements rise by 12px and fade in over 600ms; petals drift down at 12s per loop.
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover lifts a card by 4px and warms the shadow; active state presses it back by 2px.

## Code & token primer

Set `data-style="cottagecore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="cottagecore"] {
  --color-bg: #F6EEDC;
  --color-surface: #FBF6EA;
  --color-text: #2F3B2A;
  --color-muted: #5B6652;
  --color-primary: #7D9170;
  --color-accent: #D9A5A0;
  --color-border: #DDD2B8;
  --font-sans: "Lora", "Crimson Pro", Georgia, serif;
  --font-display: "Cormorant Garamond", "Fraunces", Georgia, serif;
  --border-radius: 20px;
  --border-width: 1px;
  --shadow-elevation: 0 8px 24px rgba(47, 59, 42, 0.12);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 600ms;
  --type-ratio: 1.25;
  --size-small: 13.6px;
  --size-h3: 26.56px;
  --size-h2: 33.2px;
  --size-h1: 41.5px;
  --color-on-bg: #2F3B2A;
  --color-on-surface: #2F3B2A;
  --color-on-primary: #000000;
  --color-on-accent: #2F3B2A;
  --color-muted-on-bg: #5B6652;
  --color-muted-on-surface: #5B6652;
  --color-link: #2F3B2A;
  --color-link-on-surface: #2F3B2A;
  --display-weight: 600;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 400;
  --display-tracking: 0.01em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.7;
  --body-size: 17px;
  --icon-stroke: 1.5;
  --ground: repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 40%, transparent) 0 8px, transparent 8px 14px) 0 16px / 100% 1px no-repeat,
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 40%, transparent) 0 8px, transparent 8px 14px) 0 calc(100% - 16px) / 100% 1px no-repeat,
    linear-gradient(to bottom, rgba(255,255,255,.4), transparent 30%, rgba(0,0,0,.14)),
    radial-gradient(50% 60% at 82% 45%, color-mix(in oklab, var(--color-primary) 18%, transparent), transparent 70%),
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 9%, transparent) 0 1px, transparent 1px 3px),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 7%, transparent) 0 1px, transparent 1px 3px),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.15%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#F6EEDC] text-[#2F3B2A] font-serif antialiased px-6 md:px-12` |
| heading | `font-[family-name:Cormorant_Garamond] text-4xl md:text-6xl font-semibold leading-[1.15] text-center` |
| body | `text-[17px] leading-[1.7] max-w-prose` |
| section | `rounded-[20px] border border-dotted border-[#7D9170] bg-[#FBF6EA] p-8 shadow-[0_8px_24px_rgba(47,59,42,0.12)]` |
| button | `rounded-full bg-[#7D9170] px-7 py-3 text-sm font-semibold text-[#1F2A1C] transition-transform duration-[600ms] hover:-translate-y-1` |
| label | `text-sm italic text-[#5B6652]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Print) by CyCraft, licence CC BY 4.0. Reason: A hand-drawn print line that suits a handmade country look. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0.01em, leading 1.15, case: none.
- **Weights:** display 600, subhead 400, body 400, bold in text 600, labels and buttons 400. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 17px, leading 1.7.
- **Page:** hero stacked, center aligned, airy density, accent tilt 2°.
- **Ground:** linen. Cottagecore sits on cream linen and paper, the cloth of a country table. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Plein air (process)

Work made outside in front of the subject, in the light of the place and the hour. Origin: painting, Rome and France, c. 1780.

- Work in front of the motif in one session of 1 to 3 hours, before the light moves.
- Take the colour of shadows from the sky and the ground around them; do not paint them black.
- Use the light that is there; add no lamp.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.
- **Tumblr** (platform, web, 2007–now), launched the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #7D9170 | #7D9170, #D9A5A0, #E8C872 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #D9A5A0 | #D9A5A0, #7D9170, #E8C872 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 20px | 12–28 px | --border-radius |
| Grid step (`grid_step`) | 8px | 6–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **darker**: move toward [`dark-academia`](../dark-academia/SKILL.md) (Dark academia). Swap cream for deep brown and green, add candles and book spines; keep the serif.
- If the user asks for **wilder**: move toward [`goblincore`](../goblincore/SKILL.md) (Goblincore). Replace pastel accents with moss, bark and toadstool red; add mushrooms and bones.
- If the user asks for **cleaner**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Remove the dotted borders and botanicals; keep the cream and one sage accent.

- **Came from (go here for a more orthodox version):** [`bohemian-web`](../bohemian-web/SKILL.md), [`wabi-sabi-web`](../wabi-sabi-web/SKILL.md)
- **Led to (go here for a newer version):** [`goblincore`](../goblincore/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`dark-academia`](../dark-academia/SKILL.md), [`scrapbook-ui`](../scrapbook-ui/SKILL.md)
- **Kin in another domain:** [`arts-and-crafts-interior`](../arts-and-crafts-interior/SKILL.md), [`grandmillennial-interior`](../grandmillennial-interior/SKILL.md), [`mingei-folk-craft`](../mingei-folk-craft/SKILL.md), [`romanticism-painting`](../romanticism-painting/SKILL.md)
- **Nearest by vector profile:** [`future-funk`](../future-funk/SKILL.md), [`geocities-homepage`](../geocities-homepage/SKILL.md), [`glitch-gif`](../glitch-gif/SKILL.md)

## Emotional target

The viewer feels safe, slow and fond of simple handmade things.

**Keywords:** gentle, pastoral, handmade, nostalgic, warm, romantic · **Brand archetypes:** innocent, caregiver, creator

## Sources

- [Wikipedia: Cottagecore](https://en.wikipedia.org/wiki/Cottagecore)
- [Know Your Meme: Cottagecore](https://knowyourmeme.com/memes/cottagecore)
- Vox, Cottagecore explained (2020)

---

Generated from [`data/internet/styles/cottagecore.json`](../../data/internet/styles/cottagecore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
