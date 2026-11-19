---
name: word-caption-clip
description: "Apply the Word Caption Clip style (2020–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: word captions, animated subtitles, karaoke captions, caption clip, talking head short, hormozi captions."
domain: internet
era: contemporary-spatial
triggers:
  - "word captions"
  - "animated subtitles"
  - "karaoke captions"
  - "caption clip"
  - "talking head short"
  - "hormozi captions"
  - "subtitle highlight"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 5
---

# Word Caption Clip

> Make every word visible at the moment it is spoken: the caption is the main picture, and the viewer reads and hears the same beat.

A talking head in a vertical frame, with the speech shown as huge captions, one to three words at a time. Each word pops in at the beat, and the current word takes a bright colour.

**Period:** 2020–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Karaoke captions, Hormozi captions, Animated subtitles

## When to load this skill

Load it when the user asks for: "word captions", "animated subtitles", "karaoke captions", "caption clip", "talking head short", "hormozi captions", "subtitle highlight".

Good for: coach and course clips, podcast highlights, news and explainer shorts, app promo reels, accessibility-first video.

Do not use it when:
- The clip has no speech.
- The caption block would cover key footage.
- The tone needs a quiet, cinematic mood.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Word Caption Clip, you MUST:

1. Set captions at 72px to 110px on a 1080x1920 frame, with 1 to 3 words on screen at a time.
2. Place the caption block at 55% to 65% of the frame height, centred, inside a 64px safe margin.
3. Colour the spoken word in yellow (#FFE600) or green (#3DFF7A) and keep the other words white.
4. Add a 6px black outline or a 4px hard shadow to each word.
5. Pop each word in at 90% to 110% scale over 6 to 8 frames at 30 fps.
6. Time each word to the audio within 2 frames.
7. Use a bold, heavy sans in capitals and one emoji or icon per sentence at most.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Full sentences of 12 words on screen.
- **NEVER:** Thin, serif or script type.
- **NEVER:** Captions in the lower 15% of the frame, under the app buttons.
- **NEVER:** Low-contrast captions with no outline.
- **NEVER:** Subtitles that lag the voice by more than 4 frames.
- **NEVER:** Many colours in one caption line.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 1080x1920 frame: the speaker fills the frame, and the caption block sits on a centred column of 880px at 55% to 65% of the height.
- **Whitespace ratio:** The caption block uses 15% of the frame; the speaker keeps the rest.
- **Alignment rules:** Captions centre on one axis; one to three words per line; line gap of 8px; no text under the platform buttons.
- **Container geometry:** No boxes: text with an outline or a 4px hard shadow; an optional pill of 999px behind one key word.

## Typography

- **Classifications:** heavy grotesque · bold display · outlined sans
- **Tracking:** Display takes 0em; stacked lines stay tight at 0.
- **Leading:** Display 1.0; body 1.4.
- **Hierarchy rules:**
  - Use one display weight (900) for all caption words.
  - Use sizes 72, 96 and 110px in the frame and 18px on a page.
  - Set the active word in the accent colour and all other words in white.
  - Set a small emoji at 64px beside the key word.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Montserrat | Inter | Heavy Montserrat (900) is an open look-alike of the black sans that word captions use. |
| Anton | Roboto | Anton is an open look-alike of the Impact face for tall, narrow words. |
| Poppins | DM Sans | A heavy geometric face with a round, clean text face. |

## Colour & lighting

- **Palette structure:** White words on any footage, one yellow or green active colour and a black outline.
- **Contrast rules:** White words on frame black hold at least 19:1, and the 6px outline keeps them readable on any footage.
- **Surface treatment:** Flat colour only; the speaker's footage is the picture, and a 20% black layer under the words lifts the contrast on a bright scene.
- **Light and shadow:** A hard 4px black shadow at 100% under each word; no glow and no blur.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Frame Black | `#0A0A0A` | background |
| Footage Grey | `#1C1C1E` | surface |
| Word White | `#FFFFFF` | text |
| Active Yellow | `#FFE600` | primary |
| Active Green | `#3DFF7A` | accent |
| Outline Black | `#000000` | border |

## Materiality & texture

- **Surface simulation:** A phone video with live text on top: sharp, flat vector letters over camera footage.
- **Border rules:** A 6px black outline on the words; no panel borders.
- **Blur and elevation:** No blur; a 4px hard offset shadow gives lift.

## Ornamentation & iconography

- **Iconography:** Solid emoji and icons at 64px beside the key word; thick, round shapes.
- **Illustration:** The speaker and the words; a progress bar of 6px at the top for long clips.
- **Decorative elements:** active-word highlight · outlined word · pop-in scale · emoji accent · progress bar

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Each word pops from 90% to 110% to 100% scale over 6 to 8 frames at 30 fps; the active colour moves from word to word on the beat; there is no fade between words.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover raises a card by 2px and shows a 4px yellow edge; active state fills the text with yellow.

## Code & token primer

Set `data-style="word-caption-clip"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="word-caption-clip"] {
  --color-bg: #0A0A0A;
  --color-surface: #1C1C1E;
  --color-text: #FFFFFF;
  --color-muted: #C7C7CC;
  --color-primary: #FFE600;
  --color-accent: #3DFF7A;
  --color-border: #000000;
  --font-sans: "Inter", "DM Sans", sans-serif;
  --font-display: "Montserrat", "Anton", sans-serif;
  --border-radius: 0px;
  --border-width: 6px;
  --shadow-elevation: 4px 4px 0 #000000;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 200ms;
  --type-ratio: 1.5;
  --size-small: 12px;
  --size-h3: 40.5px;
  --size-h2: 60.75px;
  --size-h1: 91.13px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #0A0A0A;
  --color-on-accent: #0A0A0A;
  --color-muted-on-bg: #C7C7CC;
  --color-muted-on-surface: #C7C7CC;
  --color-link: #3DFF7A;
  --color-link-on-surface: #3DFF7A;
  --display-weight: 900;
  --subhead-weight: 700;
  --body-weight: 500;
  --strong-weight: 700;
  --label-weight: 600;
  --display-tracking: 0em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.4;
  --body-size: 18px;
  --icon-stroke: 3;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0A0A0A] text-[#FFFFFF] font-sans antialiased px-4 md:px-12` |
| heading | `text-5xl md:text-8xl font-black uppercase leading-none tracking-normal text-center [-webkit-text-stroke:4px_#000] [paint-order:stroke_fill] [text-shadow:4px_4px_0_#000]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `rounded-none border-[6px] border-black bg-[#1C1C1E] shadow-[4px_4px_0_#000000]` |
| button | `rounded-none border-[6px] border-black bg-[#FFE600] px-6 py-3 text-lg font-black uppercase text-[#0A0A0A] shadow-[4px_4px_0_#000000] transition-transform duration-200 hover:-translate-y-0.5` |
| label | `text-sm font-semibold uppercase tracking-[0.08em] text-[#3DFF7A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A heavy, solid family matches the thick caption letters and the emoji accents. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 900, tracking 0em, leading 1, case: uppercase.
- **Weights:** display 900, subhead 700, body 500, bold in text 700, labels and buttons 600. The style uses 4 weights (500, 600, 700, 900) and no other. The display is 400 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 18px, leading 1.4.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** raw. The ground is raw footage with no decoration, since the words are the only design layer. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Word-by-word captions (motif)

Speech shown as 1 to 3 large words at a time, with the word that is spoken now in a bright colour. Origin: internet, TikTok, c. 2020.

- Show 1 to 3 words at a time at 72px to 110px.
- Time each word to the audio within 2 frames.
- Colour the active word and keep the rest white.
- Add a 6px outline and pop each word in over 6 to 8 frames.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFE600 | #FFE600, #3DFF7A, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #3DFF7A | #3DFF7A, #FFE600 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.333–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`video-essay`](../video-essay/SKILL.md) (Video Essay). Move to sentence subtitles at 36px, a serif face and a muted grade.
- If the user asks for **more meme**: move toward [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md) (Clickbait Thumbnail). Add a face cut-out, a red arrow and a 120px headline at the frame top.
- If the user asks for **more playful**: move toward [`vtuber-avatar`](../vtuber-avatar/SKILL.md) (VTuber Avatar). Replace the speaker with an avatar and use pastel words with a plum outline.

- **Came from (go here for a more orthodox version):** [`clickbait-thumbnail`](../clickbait-thumbnail/SKILL.md)
- **Mixes well with:** [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md)
- **Kin in another domain:** [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`constructivism-web`](../constructivism-web/SKILL.md), [`luxury-typography-web`](../luxury-typography-web/SKILL.md)

## Emotional target

The viewer feels pulled along by the voice and cannot look away from the words.

**Keywords:** punchy, fast, bold, readable, urgent · **Brand archetypes:** sage, hero

## Sources

- [Wikipedia: Closed captioning](https://en.wikipedia.org/wiki/Closed_captioning)
- [Wikipedia: Alex Hormozi](https://en.wikipedia.org/wiki/Alex_Hormozi)

---

Generated from [`data/internet/styles/word-caption-clip.json`](../../data/internet/styles/word-caption-clip.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
