---
name: tweet-screenshot-meme
description: "Apply the Tweet screenshot meme style (2015–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: tweet screenshot, post screenshot, screenshot meme, fake tweet, x post meme, social post card."
domain: internet
era: feed-mobile
triggers:
  - "tweet screenshot"
  - "post screenshot"
  - "screenshot meme"
  - "fake tweet"
  - "x post meme"
  - "social post card"
  - "quote post"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 2
  typographic_expressiveness: 1
---

# Tweet screenshot meme

> Use the plain look of a social post as a frame, so that the text reads as a real voice.

A cropped screenshot of a short social post in its own interface: avatar, name, text and a row of counters. The joke lives in the words, and the crop and the interface give it proof and tone.

**Period:** 2015–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Screenshot post meme, Post card joke

## When to load this skill

Load it when the user asks for: "tweet screenshot", "post screenshot", "screenshot meme", "fake tweet", "x post meme", "social post card", "quote post".

Good for: humour threads, quote cards, news satire, chat reaction images.

Do not use it when:
- The post imitates a real private person.
- The post makes false claims that could mislead.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Tweet screenshot meme, you MUST:

1. Crop the screenshot to the post card at a width of 550px to 600px with 16px of side padding.
2. Show an avatar of 48px (circle), a bold name and a grey handle above the text.
3. Set the post text in a system sans-serif at 15px to 17px with a line height of 1.35.
4. Keep a row of 4 counters (reply, repost, like, share) in 13px grey type under the text.
5. Use a white card on light mode or a #15202B card on dim mode; do not mix them.
6. Add a thin 1px border or leave the edge raw; crop with a few pixels of the next post visible.
7. Keep the screenshot slightly compressed, as the original; do not sharpen it.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Fancy fonts in the post text.
- **NEVER:** Added decoration around the card.
- **NEVER:** A cropped avatar with no name.
- **NEVER:** Perfect, uncompressed rendering of a fake card.
- **NEVER:** Bright custom backgrounds.
- **NEVER:** Long threads in one image.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single column card of 560px width; 16px padding; avatar and text in 2 columns (48px and the rest).
- **Whitespace ratio:** The card is dense: 8% to 15% of the area stays empty; spacing steps are 4, 8, 12 and 16px.
- **Alignment rules:** Left-aligned text with the avatar at the top left; counters align left under the text.
- **Container geometry:** A rectangle with a 0px to 12px radius and a 1px border.

## Typography

- **Classifications:** system sans · neutral sans
- **Tracking:** Body 0; handle 0.
- **Leading:** Body 1.35; counters 1.2.
- **Hierarchy rules:** Use name in bold (700) at 15px, handle in regular grey. · Use post text at 17px regular. · Use counters at 13px grey.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Roboto | Inter stands in for the system sans of the interface. |
| Roboto | Noto Sans | A second neutral sans for the counters. |

## Colour & lighting

- **Palette structure:** A white or dim card, black or white text, grey for the meta text and one blue.
- **Contrast rules:** Text #0F1419 on white gives 18:1; meta grey #536471 on white gives 6:1.
- **Surface treatment:** Flat card with a 1px light border; no gradient.
- **Light and shadow:** No light and no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Card White | `#FFFFFF` | background |
| Post Text | `#0F1419` | text |
| Meta Grey | `#536471` | secondary text |
| Link Blue | `#1D9BF0` | accent |
| Dim Card | `#15202B` | dark background |
| Dim Text | `#E7E9EA` | dark text |

## Materiality & texture

- **Surface simulation:** A phone or desktop interface, captured as a flat screen image.
- **Border rules:** A 1px border #CFD9DE or none; raw crop edges.
- **Blur and elevation:** No blur; no elevation.

## Ornamentation & iconography

- **Iconography:** A reply, repost, like and share icon at 18px, outline style.
- **Illustration:** A circle avatar; sometimes a picture or an emoji in the text.
- **Decorative elements:** avatar circle · counter row · handle

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static image. A web version types the post text at 40ms per character.
- **Easing:** linear
- **Duration (ms):** 150
- **Hover and active:** Hover tints the card background by 4% grey.

## Code & token primer

Set `data-style="tweet-screenshot-meme"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="tweet-screenshot-meme"] {
  --color-bg: #FFFFFF;
  --color-surface: #F7F9F9;
  --color-text: #0F1419;
  --color-muted: #536471;
  --color-primary: #1D9BF0;
  --color-accent: #1D9BF0;
  --color-border: #CFD9DE;
  --font-sans: "Inter", "Roboto", sans-serif;
  --font-display: "Inter", "Roboto", sans-serif;
  --border-radius: 12px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: linear;
  --duration: 150ms;
  --type-ratio: 1.2;
  --size-small: 13.33px;
  --size-h3: 23.04px;
  --size-h2: 27.65px;
  --size-h1: 33.18px;
  --color-on-bg: #0F1419;
  --color-on-surface: #0F1419;
  --color-on-primary: #0F1419;
  --color-on-accent: #0F1419;
  --color-muted-on-bg: #536471;
  --color-muted-on-surface: #536471;
  --color-link: #0F1419;
  --color-link-on-surface: #0F1419;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.35;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 0 0 / 100% 6px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 0 8px / 100% 2px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 66% 0 / 2px 100% no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 8%, transparent), color-mix(in oklab, var(--color-primary) 8%, transparent)) 100% 0 / 34% 100% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 12%, transparent) 0 1px, transparent 1px 1.6rem),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 10%, transparent) 0 1px, transparent 1px 25%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#0F1419] font-sans antialiased` |
| heading | `text-xl font-bold leading-[1.2]` |
| body | `text-[17px] leading-[1.35] max-w-[560px]` |
| card | `border border-[#CFD9DE] rounded-xl bg-white p-4` |
| button | `rounded-full bg-[#1D9BF0] px-4 py-2 text-sm font-bold text-[#0F1419] hover:bg-[#1A8CD8]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A neutral outline family that matches interface counters. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.2, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 16px, leading 1.35.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** rules. Thin rules between cards echo the feed list. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Screen capture crop (process)

A cropped capture of an interface that keeps the frame of the original, so the text reads as found, not made. Origin: internet, web, c. 2010.

- Capture the post card at its native width of 550 to 600px.
- Crop to the card and leave a few pixels of the next item.
- Keep the compression of the original; do not sharpen.
- Keep the interface colours; do not add a frame.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Twitter** (platform, web, 2006–now), published the style. A site of short public posts. Its post card is the frame of the tweet screenshot meme, and many label memes spread here.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #1D9BF0 | #1D9BF0, #0F1419 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #1D9BF0 | #1D9BF0, #536471 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 12px | 0–16 px | --border-radius |
| Grid step (`grid_step`) | 4px | 4–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.25 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more graphic**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Move the text out of the card into outlined capitals on a photo.
- If the user asks for **more weird**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Keep the card but pair it with a strange image and a calm, odd line.
- If the user asks for **dark mode**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Switch to the #15202B dim card with #E7E9EA text and #8B98A5 meta text.

- **Came from (go here for a more orthodox version):** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Mixes well with:** [`label-meme`](../label-meme/SKILL.md), [`starter-pack`](../starter-pack/SKILL.md)
- **Nearest by vector profile:** [`normcore`](../normcore/SKILL.md), [`usenet-thread`](../usenet-thread/SKILL.md), [`duet-split-screen`](../duet-split-screen/SKILL.md)

## Emotional target

The viewer feels the post is a real, overheard voice and reads the joke straight.

**Keywords:** plain, deadpan, documentary, quick, social · **Brand archetypes:** everyman, jester

## Sources

- [Wikipedia: Internet meme](https://en.wikipedia.org/wiki/Internet_meme)
- Know Your Meme: Tweet Screenshots

---

Generated from [`data/internet/styles/tweet-screenshot-meme.json`](../../data/internet/styles/tweet-screenshot-meme.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
