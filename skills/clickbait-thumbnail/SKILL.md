---
name: clickbait-thumbnail
description: "Apply the Clickbait Thumbnail style (2012–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: thumbnail, clickbait, youtube cover, shocked face, red arrow, viral cover."
domain: internet
era: feed-mobile
triggers:
  - "thumbnail"
  - "clickbait"
  - "youtube cover"
  - "shocked face"
  - "red arrow"
  - "viral cover"
  - "click-through"
vector_profile:
  ornamentation: 4
  dimensionality: 3
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 5
---

# Clickbait Thumbnail

> The still has one second to ask a question: show one clear shock, one object and 3 words, and make it readable at the size of a thumb.

A small still that must win a click at 168px wide. It has a huge face with an open mouth, a red arrow or circle, bright colours and 1 to 3 words in a thick outline.

**Period:** 2012–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** YouTube thumbnail, Reaction face thumbnail, MrBeast-style thumbnail

## When to load this skill

Load it when the user asks for: "thumbnail", "clickbait", "youtube cover", "shocked face", "red arrow", "viral cover", "click-through".

Good for: video cover images, blog and news card images, ad creatives that need a fast hook, challenge and contest pages, social preview cards.

Do not use it when:
- The brand needs a quiet or trusted tone.
- The content cannot pay off the promise of the image.
- The audience is professional or medical.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Clickbait Thumbnail, you MUST:

1. Make the image 1280x720 and test it at 168px wide before you ship it.
2. Fill 40% to 60% of the frame with one face at a strong expression, cut out with a 6px white edge.
3. Use at most 3 words in a thick display face of 120px to 200px with a 8px black outline.
4. Draw one arrow or circle in red (#FF0000) or yellow (#FFE500) to point at the key object.
5. Push saturation by 20% to 40% and add a 12% vignette to the edge.
6. Split the frame into 2 halves (before and after, or A and B) with a diagonal line of 8px.
7. Keep all text and faces 48px away from the lower-right corner, where the duration badge sits.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Calm, subtle colour and soft grading.
- **NEVER:** Long titles of 6 words or more.
- **NEVER:** Small faces and wide, empty scenes.
- **NEVER:** Thin or serif type.
- **NEVER:** Neutral expressions.
- **NEVER:** Many small objects with no single focus.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 1280x720 frame split by a rule-of-thirds layout: the face on the left or right third, the object on the other third, the words across the top or bottom.
- **Whitespace ratio:** Under 8% of the frame is empty; every area carries a face, an object or a word.
- **Alignment rules:** The face is large and off-centre; the arrow runs from the face towards the object; words align to one edge.
- **Container geometry:** Cut-out shapes with a 6px white edge; a 0px frame with no radius; circles and arrows as pointers.

## Typography

- **Classifications:** impact-style · bold display · outlined
- **Tracking:** Display takes 0em to +0.02em; text lines stay tight.
- **Leading:** Display 0.95; body 1.3.
- **Hierarchy rules:**
  - Use one display weight (400 or 900) for all words.
  - Use sizes 120, 160 and 200px in the frame and 18px on a page.
  - Set the first word in white and the key word in yellow.
  - Add an outline of 8px in black to each word.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Montserrat | Anton is an open look-alike of the Impact face that thumbnails use. |
| Bebas Neue | Inter | A tall, capital face for 2-word titles. |
| Luckiest Guy | Poppins | A thick, friendly face for jokes and challenge titles. |

## Colour & lighting

- **Palette structure:** Pure, saturated primaries on a split ground: red, yellow and electric blue, with black outlines and white edges.
- **Contrast rules:** White text on the black surface holds at least 18:1; on the blue ground it holds at least 5:1 with an 8px black outline.
- **Surface treatment:** A flat colour or a 2-stop gradient, a 12% vignette and a 20% to 40% boost of saturation.
- **Light and shadow:** A white rim light on the cut-out face, a 12px black drop shadow at 60% under words and a soft glow of 20px behind the object.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Shock Blue | `#0A57FF` | background |
| Card Black | `#111111` | surface |
| Outline White | `#FFFFFF` | text |
| Arrow Red | `#FF1A1A` | primary |
| Hook Yellow | `#FFE500` | accent |
| Skin Warm | `#F2B48C` | highlight |

## Materiality & texture

- **Surface simulation:** A compressed digital still: a sharp photo cut-out, a hard edge and a heavy colour boost.
- **Border rules:** A 6px white edge on cut-outs and an 8px black outline on text.
- **Blur and elevation:** Hard 12px drop shadows; a 20px glow behind the main object; the ground may blur at 8px.

## Ornamentation & iconography

- **Iconography:** Solid arrows, circles and question marks in red or yellow at 80px to 160px; thick strokes of 8px.
- **Illustration:** A face cut-out, one product or one stunt object, and a bold shape; no clean line art.
- **Decorative elements:** red arrow · yellow circle · face cut-out · versus split · price or number badge

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A still has no motion; on a page the card scales to 105% over 150ms on hover and the arrow wobbles by 6° over 600ms.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 150
- **Hover and active:** Hover scales the thumbnail to 105% and adds a 4px yellow edge; active state scales to 98%.

## Code & token primer

Set `data-style="clickbait-thumbnail"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="clickbait-thumbnail"] {
  --color-bg: #0A57FF;
  --color-surface: #111111;
  --color-text: #FFFFFF;
  --color-muted: #E3ECFF;
  --color-primary: #FF1A1A;
  --color-accent: #FFE500;
  --color-border: #FFFFFF;
  --font-sans: "Montserrat", "Inter", sans-serif;
  --font-display: "Anton", "Bebas Neue", sans-serif;
  --border-radius: 0px;
  --border-width: 6px;
  --shadow-elevation: 6px 6px 0 #000000;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 150ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #000000;
  --color-on-accent: #000000;
  --color-muted-on-bg: #E3ECFF;
  --color-muted-on-surface: #E3ECFF;
  --color-link: #FFFFFF;
  --color-link-on-surface: #FFE500;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 500;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0.01em;
  --display-leading: 0.95;
  --display-case: uppercase;
  --body-leading: 1.3;
  --body-size: 16px;
  --icon-stroke: 3;
  --ground: radial-gradient(70% 60% at 50% 105%, transparent 30%, var(--color-bg) 75%),
    repeating-conic-gradient(from -90deg at 50% 108%, color-mix(in oklab, var(--color-primary) 34%, transparent) 0 4deg, transparent 4deg 9deg),
    repeating-radial-gradient(circle at 50% 108%, transparent 0 18vmin, color-mix(in oklab, var(--color-primary) 40%, transparent) 18vmin calc(18vmin + 2px), transparent calc(18vmin + 2px) 24vmin),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0A57FF] text-[#FFFFFF] font-sans antialiased px-4 md:px-12` |
| heading | `text-6xl md:text-8xl font-normal uppercase leading-[0.95] tracking-[0.01em] [-webkit-text-stroke:3px_#000] [text-shadow:6px_6px_0_#000]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-none border-[6px] border-white bg-[#111111] shadow-[6px_6px_0_#000000]` |
| button | `rounded-none border-[6px] border-white bg-[#FF1A1A] px-6 py-3 text-lg font-bold uppercase text-[#FFFFFF] shadow-[6px_6px_0_#000000] transition-transform duration-150 hover:scale-105` |
| label | `text-sm font-bold uppercase tracking-[0.08em] text-[#FFE500]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A heavy, solid family matches the thick arrows and circles of a thumbnail. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.01em, leading 0.95, case: uppercase.
- **Weights:** display 400, subhead 400, body 500, bold in text 700, labels and buttons 600. The style uses 4 weights (400, 500, 600, 700) and no other. The display is 100 lighter than the body, so size carries the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.3.
- **Page:** hero poster, left aligned, compact density, accent tilt -3°.
- **Ground:** rays. The ground is a burst of rays behind the face, the oldest way to pull the eye to one point. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Thumbnail composite (montage)

A still image built from a face cut-out, one object, a pointer and 1 to 3 words, made to read at a very small size. Origin: internet, YouTube, c. 2012.

- Make the image 1280x720 and test it at 168px wide.
- Cut out one face and give it a 6px white edge.
- Add one arrow or circle in a strong colour.
- Set 1 to 3 words in a heavy face with an 8px outline.
- Raise saturation by 20% to 40%.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **YouTube** (platform, web, 2005–now), published the style. A web site where people post video. The daily vlog grew here, and it became the main home of the music video.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF1A1A | #FF1A1A, #FFE500, #0A57FF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FFE500 | #FFE500, #FF1A1A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.333–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`video-essay`](../video-essay/SKILL.md) (Video Essay). Use one still frame, one title line of 48px and a muted grade with no arrow.
- If the user asks for **more honest**: move toward [`unboxing-video`](../unboxing-video/SKILL.md) (Unboxing Video). Show the real product on a plain table with a short label and no face.
- If the user asks for **more text**: move toward [`word-caption-clip`](../word-caption-clip/SKILL.md) (Word Caption Clip). Replace the arrow with a caption of 4 words and a highlighted key word.

- **Led to (go here for a newer version):** [`word-caption-clip`](../word-caption-clip/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`minimalism-web`](../minimalism-web/SKILL.md)
- **Was rejected by:** [`video-essay`](../video-essay/SKILL.md)
- **Mixes well with:** [`lets-play-facecam`](../lets-play-facecam/SKILL.md)
- **Kin in another domain:** [`pop-art-web`](../pop-art-web/SKILL.md), [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`cyberdelia`](../cyberdelia/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`glitchcore`](../glitchcore/SKILL.md)

## Emotional target

The viewer feels a spike of curiosity, shock or doubt and wants to see what happens.

**Keywords:** loud, shocking, urgent, saturated, competitive · **Brand archetypes:** jester, outlaw

## Sources

- [Wikipedia: Clickbait](https://en.wikipedia.org/wiki/Clickbait)
- [Wikipedia: MrBeast](https://en.wikipedia.org/wiki/MrBeast)

---

Generated from [`data/internet/styles/clickbait-thumbnail.json`](../../data/internet/styles/clickbait-thumbnail.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
