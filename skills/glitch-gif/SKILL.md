---
name: glitch-gif
description: "Apply the Glitch GIF style (2010–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: glitch gif, glitch art, datamosh, rgb split, corrupted, signal error."
domain: internet
era: web-2-social
triggers:
  - "glitch gif"
  - "glitch art"
  - "datamosh"
  - "rgb split"
  - "corrupted"
  - "signal error"
  - "vhs tear"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Glitch GIF

> A fault in the signal is an image: show the error, do not hide it.

A looped clip with torn bands, split colour channels and repeated frames, as if the signal failed. Artists on Tumblr and in net art circles made it common after 2010.

**Period:** 2010–now · **Era:** Web 2.0 and the social web · **Domain:** Internet · **Also called:** Datamosh loop, RGB-split GIF, Corrupted loop

## When to load this skill

Load it when the user asks for: "glitch gif", "glitch art", "datamosh", "rgb split", "corrupted", "signal error", "vhs tear".

Good for: music release art and teasers, net art and gallery pages, game and tech launch loops, title cards for dark, edgy content.

Do not use it when:
- The audience has photosensitive epilepsy risk and the loop flashes more than 3 times in 1 second.
- The page needs a calm tone.
- The text needs fast reading.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Glitch GIF, you MUST:

1. Shift the red channel by 3px to the left and the blue channel by 3px to the right on each glitch frame.
2. Cut 3 to 8 horizontal bands of 4px to 40px height and move each sideways by 10px to 60px.
3. Run the glitch in bursts of 2 to 6 frames inside a loop of 20 to 40 frames at 12 fps.
4. Keep 60% of the frames clean, so that the error reads as an error.
5. Limit the palette to 64 colours and keep the dither visible.
6. Set text as a mono line at 14px with 2 duplicate offsets in red and cyan at 40% opacity.
7. Place a scanline layer of 2px stripes at 8% opacity over the frame.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A fully corrupted loop with no clean frame.
- **NEVER:** Smooth gradients with no channel split.
- **NEVER:** Glitch applied to body text.
- **NEVER:** Soft pastel palettes.
- **NEVER:** Slow dissolves in place of hard cuts.
- **NEVER:** Photographic noise with no band structure.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A free stack of frames and text lines on a 12-column grid with 8px gutters; bands break the grid by 10px to 60px.
- **Whitespace ratio:** 15% to 25% of the surface stays empty; the spacing scale is 4, 8, 16 and 32px.
- **Alignment rules:** The main frame sits centred; text lines sit flush-left with offset duplicates of 3px.
- **Container geometry:** Rectangular frames with a 0px radius and a 2px cyan edge; a hard offset shadow in red and cyan.

## Typography

- **Classifications:** display glitch face · monospace
- **Tracking:** Display 0.04em; body 0em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Set 1 display line at 48px or more and keep body text at 16px with no effect.
  - Duplicate a display line twice, in red and cyan, with offsets of 3px.
  - Keep labels in 12px mono capitals.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rubik Glitch | Space Mono | An open display face with cut bands, with a mono text face. |
| VT323 | IBM Plex Mono | A terminal face for a quieter glitch page. |

## Colour & lighting

- **Palette structure:** Near-black ground with a red and a cyan channel colour in equal weight, and white text.
- **Contrast rules:** Signal white on dead signal holds 17:1; red and cyan carry offsets and edges, not body text.
- **Surface treatment:** Flat dark panels; a scanline overlay at 8% opacity and a band tear on hover.
- **Light and shadow:** A hard offset shadow of 3px in red on the right and cyan on the left; no soft shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Dead Signal | `#0A0A12` | background |
| Panel Night | `#171726` | surface |
| Signal White | `#F2F2FA` | text |
| Channel Red | `#FF2D55` | primary |
| Channel Cyan | `#00F0FF` | accent |
| Static Grey | `#A8A8C4` | muted text |
| Error Green | `#39FF88` | highlight |

## Materiality & texture

- **Surface simulation:** A failing video signal: CRT scan lines, channel drift and compression blocks.
- **Border rules:** A 2px cyan line; on hover the line splits into red and cyan with 3px offset.
- **Blur and elevation:** No blur; the offset shadow is hard.

## Ornamentation & iconography

- **Iconography:** Solid pixel glyphs at 24px with square terminals.
- **Illustration:** Portraits, statues and city scenes with channel split and torn bands.
- **Decorative elements:** RGB channel split · torn band · scanline overlay · block noise · duplicate offset text

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Clean frames run for 0.5s to 2s, then a burst of 2 to 6 glitch frames at 12 fps; no easing inside a burst.
- **Easing:** steps(3, end)
- **Duration (ms):** 120
- **Hover and active:** Hover starts a 3-frame band tear; active inverts the red and cyan channels for 1 frame.

## Code & token primer

Set `data-style="glitch-gif"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="glitch-gif"] {
  --color-bg: #0A0A12;
  --color-surface: #171726;
  --color-text: #F2F2FA;
  --color-muted: #A8A8C4;
  --color-primary: #FF2D55;
  --color-accent: #00F0FF;
  --color-border: #00F0FF;
  --font-sans: "Space Mono", "VT323", monospace;
  --font-display: "Rubik Glitch", "Rubik Mono One", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 3px 0 0 #FF2D55, -3px 0 0 #00F0FF;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(3, end);
  --duration: 120ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #F2F2FA;
  --color-on-surface: #F2F2FA;
  --color-on-primary: #0A0A12;
  --color-on-accent: #0A0A12;
  --color-muted-on-bg: #A8A8C4;
  --color-muted-on-surface: #A8A8C4;
  --color-link: #00F0FF;
  --color-link-on-surface: #00F0FF;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.1;
  --display-case: uppercase;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 7%, transparent) 0 1px, transparent 1px 3px),
    radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,.55)),
    radial-gradient(50% 55% at 72% 40%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    radial-gradient(35% 40% at 20% 85%, color-mix(in oklab, var(--color-accent) 10%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#0A0A12] text-[#F2F2FA] font-mono antialiased px-4 md:px-12` |
| heading | `text-4xl md:text-6xl font-['Rubik_Glitch'] uppercase [text-shadow:3px_0_#FF2D55,-3px_0_#00F0FF] leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border-2 border-[#00F0FF] bg-[#171726] rounded-none shadow-[3px_0_0_#FF2D55,-3px_0_0_#00F0FF]` |
| button | `rounded-none border-2 border-[#00F0FF] bg-[#FF2D55] px-6 py-3 text-sm font-bold text-[#0A0A12] transition-transform duration-[120ms] hover:-translate-y-0.5` |
| label | `text-xs uppercase tracking-widest text-[#FF2D55]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, square caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Hard pixel glyphs match the block noise and the square terminals of a broken signal. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.04em, leading 1.1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero poster, left aligned, regular density, accent tilt 0°.
- **Ground:** scanlines. A glitch loop shows the scan lines of the failing video signal. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Glitch (process)

A fault in a signal, kept as an image: torn lines, split colour channels and repeated frames. Origin: film & video, Wuppertal, 1963.

- Shift the red and blue channels by 2 to 8px in opposite directions.
- Cut bands of 4 to 40px and move them sideways by 10 to 60px.
- Run the effect in bursts of 2 to 6 frames at 24 fps, and leave the image clean between bursts.
- Do not apply it to body text.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF2D55 | #FF2D55, #0A0A12, #171726, #F2F2FA | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #00F0FF | #00F0FF, #FF2D55, #39FF88 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.333–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`cinemagraph`](../cinemagraph/SKILL.md) (Cinemagraph). Remove the bursts and let one small part of the frame move in a slow loop.
- If the user asks for **more retro**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Replace the neon pair with silver and baby blue and add chrome type.
- If the user asks for **more pixel**: move toward [`pixel-art-web`](../pixel-art-web/SKILL.md) (Pixel Art Web). Cut the palette to 16 colours and snap every band to an 8px grid.

- **Came from (go here for a more orthodox version):** [`reaction-gif`](../reaction-gif/SKILL.md)
- **Mixes well with:** [`pixel-art-web`](../pixel-art-web/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md)
- **Nearest by vector profile:** [`barbiecore`](../barbiecore/SKILL.md), [`cottagecore`](../cottagecore/SKILL.md), [`lip-sync-dance-short`](../lip-sync-dance-short/SKILL.md)

## Emotional target

The viewer feels unease and fascination at a machine that breaks.

**Keywords:** broken, digital, tense, analogue noise, raw, electric · **Brand archetypes:** outlaw, magician

## Sources

- [Wikipedia: Glitch art](https://en.wikipedia.org/wiki/Glitch_art)
- [Rosa Menkman, The Glitch Moment(um) (Institute of Network Cultures, 2011)](https://networkcultures.org/blog/publication/no-04-the-glitch-momentum-rosa-menkman/)
- [Wikipedia: Datamoshing](https://en.wikipedia.org/wiki/Datamoshing)

---

Generated from [`data/internet/styles/glitch-gif.json`](../../data/internet/styles/glitch-gif.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
