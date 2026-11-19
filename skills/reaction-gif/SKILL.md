---
name: reaction-gif
description: "Apply the Reaction GIF style (2009–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: reaction gif, gif reply, giphy, looped clip, meme gif, animated gif."
domain: internet
era: touchscreen
triggers:
  - "reaction gif"
  - "gif reply"
  - "giphy"
  - "looped clip"
  - "meme gif"
  - "animated gif"
  - "captioned clip"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 3
---

# Reaction GIF

> A looped second of a real face says a feeling faster than a sentence, so the clip is the reply.

A short looped clip from a film, a show or a sport, sent in place of a sentence. The frame is small, grainy and often carries a one-line caption in heavy white capitals.

**Period:** 2009–now · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Reaction clip, Captioned GIF loop, Giphy loop

## When to load this skill

Load it when the user asks for: "reaction gif", "gif reply", "giphy", "looped clip", "meme gif", "animated gif", "captioned clip".

Good for: chat and comment reply pickers, social posts and newsletters with a joke, empty and success states with a human face, meme walls and tag search pages.

Do not use it when:
- The audience needs a serious or formal tone.
- The source film has no rights for reuse.
- The page must load fast on a weak network.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Reaction GIF, you MUST:

1. Loop a clip of 1 to 4 seconds at 10 to 15 fps with a seamless cut from the last frame to the first.
2. Export the frame at 480px wide or less in 256 colours, and let dithering and grain stay visible.
3. Set a caption in heavy white capitals with a 2px black outline, at 8% to 12% of the frame height.
4. Place the caption on the lower third of the frame, centred, with 4% margin from the edge.
5. Crop tight on one face or one gesture, so that the subject fills 50% to 70% of the frame.
6. Frame the clip in a 1px white outline on a dark card of #22222C when it shows inside a feed.
7. Show the search tag, for example #facepalm, in 12px capitals under the clip.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Smooth 60 fps video with no dither.
- **NEVER:** Long clips with a visible cut point.
- **NEVER:** Thin captions with no outline.
- **NEVER:** Wide landscape frames with a small subject.
- **NEVER:** Clean studio gradients behind the clip.
- **NEVER:** Several captions in one frame.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A masonry wall of clips in 2 to 4 columns with 8px gutters; each cell keeps the aspect ratio of its clip.
- **Whitespace ratio:** 10% to 20% of the surface stays empty; the spacing scale is 4, 8 and 16px.
- **Alignment rules:** The caption is centred on the lower third; tags and source lines are flush-left under the clip.
- **Container geometry:** Clip cells with a 0px radius and a 2px white edge; a caption box has no fill.

## Typography

- **Classifications:** condensed grotesque · neo-grotesque sans
- **Tracking:** Display 0.02em; body 0em.
- **Leading:** Display 1.05; body 1.5.
- **Hierarchy rules:**
  - Set the caption in 1 size only, in capitals, in white with a black outline of 2px.
  - Set tags and source lines in 12px sans at 70% opacity.
  - Keep one caption for each clip, of 6 words or fewer.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Anton | Archivo | Anton is an open look-alike of Impact; it takes the caption role. |
| Oswald | Inter | A second open condensed face for captions. |

## Colour & lighting

- **Palette structure:** Dark UI ground with white captions and one yellow and one blue highlight; the clip supplies the other colours.
- **Contrast rules:** Caption white on the dark feed holds 16:1; on a clip, the black outline keeps the caption legible.
- **Surface treatment:** Flat dark cards around the clip; the clip itself shows dither and compression grain.
- **Light and shadow:** No UI light; shadow comes only from the film still.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Feed Black | `#14141A` | background |
| Card Grey | `#22222C` | surface |
| Caption White | `#FFFFFF` | caption and text |
| Search Yellow | `#FFD60A` | primary |
| Link Blue | `#00C2FF` | accent |
| Dust Grey | `#B8B8C8` | muted text |

## Materiality & texture

- **Surface simulation:** Compressed film or TV footage: 256-colour dither, banding and visible block noise.
- **Border rules:** A 2px white edge on a selected clip; no border otherwise.
- **Blur and elevation:** No blur; no elevation.

## Ornamentation & iconography

- **Iconography:** Solid glyphs at 24px: heart, share, copy-link, search.
- **Illustration:** Film and sports stills, shown as loops; no drawn art.
- **Decorative elements:** Impact-style caption · hashtag chip · dither grain · play-loop badge · masonry wall

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** The clip loops without end at 10 to 15 fps; hover starts the clip, leave pauses it on the first frame.
- **Easing:** steps(8, end)
- **Duration (ms):** 100
- **Hover and active:** Hover adds a 2px yellow edge; active copies the link and shows a 1s toast.

## Code & token primer

Set `data-style="reaction-gif"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="reaction-gif"] {
  --color-bg: #14141A;
  --color-surface: #22222C;
  --color-text: #FFFFFF;
  --color-muted: #B8B8C8;
  --color-primary: #FFD60A;
  --color-accent: #00C2FF;
  --color-border: #FFFFFF;
  --font-sans: "Archivo", "Inter", sans-serif;
  --font-display: "Anton", "Oswald", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(8, end);
  --duration: 100ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #14141A;
  --color-on-accent: #14141A;
  --color-muted-on-bg: #B8B8C8;
  --color-muted-on-surface: #B8B8C8;
  --color-link: #00C2FF;
  --color-link-on-surface: #00C2FF;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0.02em;
  --display-leading: 1.05;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: linear-gradient(100deg, var(--color-bg) 28%, transparent 60%),
    radial-gradient(circle, var(--color-accent) 34%, transparent 36%) 0 0 / 22px 22px,
    repeating-conic-gradient(from 0deg at 84% 30%, color-mix(in oklab, var(--color-primary) 70%, transparent) 0 9deg, transparent 9deg 18deg),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#14141A] text-[#FFFFFF] font-sans antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-['Anton'] uppercase tracking-[0.02em] leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#FFFFFF] bg-[#22222C] rounded-none` |
| button | `rounded-none border-2 border-[#FFFFFF] bg-[#FFD60A] px-6 py-3 text-sm font-bold text-[#14141A] transition-transform duration-[100ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#FFD60A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from MingCute (Fill) by MingCute Design, licence Apache 2.0. Reason: A solid, rounded family fits the small action glyphs under a clip. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.02em, leading 1.05, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 500. The style uses 3 weights (400, 500, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, compact density, accent tilt 0°.
- **Ground:** halftone. The dither and compression grain of a looped clip read as a coarse dot field behind the page. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### GIF loop (animation)

A short clip stored as a GIF that repeats without end, in 256 colours and a small frame. Origin: internet, Columbus, 1987.

- Cut the clip to 1 to 4 seconds and join the last frame to the first.
- Export at 10 to 15 fps in 256 colours or fewer.
- Keep the frame at 480px wide or less.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Giphy** (platform, web, 2013–now), gathered the style. A search site and library of looped clips. It turned the GIF into a reply that users pick by mood or tag.
- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFD60A | #FFD60A, #14141A, #22222C, #FFFFFF | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #00C2FF | #FFD60A, #00C2FF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **smoother**: move toward [`cinemagraph`](../cinemagraph/SKILL.md) (Cinemagraph). Freeze all of the frame except one moving part and export at 24 fps with no caption.
- If the user asks for **more distorted**: move toward [`glitch-gif`](../glitch-gif/SKILL.md) (Glitch GIF). Add a 2px to 8px channel split and 3 to 6 frame bursts of torn bands.
- If the user asks for **friendlier**: move toward [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md) (Chat Sticker Pack). Replace the film still with a drawn character and a short hand-lettered word.

- **Came from (go here for a more orthodox version):** [`kaomoji-emoticon`](../kaomoji-emoticon/SKILL.md)
- **Led to (go here for a newer version):** [`cinemagraph`](../cinemagraph/SKILL.md), [`glitch-gif`](../glitch-gif/SKILL.md)
- **Mixes well with:** [`chat-sticker-pack`](../chat-sticker-pack/SKILL.md), [`deepfake-face-swap`](../deepfake-face-swap/SKILL.md)
- **Kin in another domain:** [`vertical-short-form`](../vertical-short-form/SKILL.md)
- **Nearest by vector profile:** [`unboxing-video`](../unboxing-video/SKILL.md), [`clean-girl`](../clean-girl/SKILL.md), [`dreamcore`](../dreamcore/SKILL.md)

## Emotional target

The viewer feels a quick shared reaction, funny and a little raw.

**Keywords:** quick, funny, raw, looped, grainy, reactive · **Brand archetypes:** jester, everyman

## Sources

- [Wikipedia: GIF](https://en.wikipedia.org/wiki/GIF)
- [Wikipedia: Giphy](https://en.wikipedia.org/wiki/Giphy)
- [Know Your Meme: Reaction GIF](https://knowyourmeme.com/memes/reaction-gifs)

---

Generated from [`data/internet/styles/reaction-gif.json`](../../data/internet/styles/reaction-gif.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
