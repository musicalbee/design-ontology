---
name: weirdcore
description: "Apply the Weirdcore style (2020–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: weirdcore, oddcore, strangecore, creepycore, uncanny nostalgia, lo-fi eerie."
domain: internet
era: short-video-ai
triggers:
  - "weirdcore"
  - "oddcore"
  - "strangecore"
  - "creepycore"
  - "uncanny nostalgia"
  - "lo-fi eerie"
  - "empty playground"
  - "black void"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 3
  typographic_expressiveness: 4
---

# Weirdcore

> Make a familiar thing wrong in one small way, and let the poor image quality carry the unease.

Low-quality photos of empty places, red warning text, black voids, faceless shapes and old 3D or web fragments. The mood is a strange dream memory. It grew on Tumblr, Reddit and Twitter.

**Period:** 2020–now · **Era:** Short video and AI · **Domain:** Internet · **Also called:** Oddcore, Strangecore, Creepycore

## When to load this skill

Load it when the user asks for: "weirdcore", "oddcore", "strangecore", "creepycore", "uncanny nostalgia", "lo-fi eerie", "empty playground", "black void".

Good for: horror and indie game pages, album and zine artwork, short film posters, art projects about memory.

Do not use it when:
- The audience expects a reassuring tone.
- The page sells to children or families.
- The text must be fast to scan.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Weirdcore, you MUST:

1. Use a low-resolution photo (320px to 640px wide) scaled up with no smoothing, with JPEG blocks visible.
2. Cast the photo with a 10% to 20% colour shift to yellow-green or magenta.
3. Place one black rectangle (the void) at 5% to 15% of the frame over a key area.
4. Set one line of red (#E01B1B) text of 14px to 24px such as a number or a short phrase.
5. Add one wrong detail: a face with no features, a second horizon or a door with no wall.
6. Add a date stamp or a plus sign of 12px in a corner.
7. Keep the frame off-centre by 8% to 20%.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean studio lighting.
- **NEVER:** High-resolution sharp photography.
- **NEVER:** Cheerful bright palettes.
- **NEVER:** Symmetrical, polished layouts.
- **NEVER:** Decorative flourishes.
- **NEVER:** Smooth vector illustration.
- **NEVER:** Friendly mascot characters.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** No fixed grid; one image fills the frame and text sits at 3 points at the edges, 16px from the border.
- **Whitespace ratio:** 10% to 30% of the surface is a black or flat void; the spacing scale is 4, 12 and 24px.
- **Alignment rules:** Off-centre image and small text blocks aligned to a corner; a slight tilt of 0.5° to 2° is allowed.
- **Container geometry:** Hard rectangles with a 0px radius; black voids; no cards and no shadows.

## Typography

- **Classifications:** monospace · system sans · serif
- **Tracking:** Display takes +0.02em; small text takes +0.06em.
- **Leading:** Display 1.2; body 1.5.
- **Hierarchy rules:** Use one weight: regular (400). · Use sizes 12, 16, 24 and 48px. · Set warning text in red and everything else in off-white. · Use at most 3 text elements per frame.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| VT323 | Space Mono | A bitmap-like display face with a mono text face. |
| IBM Plex Mono | IBM Plex Sans | A plain system look for flat, cold text. |
| Special Elite | Courier Prime | A typewriter pair for a document-found look. |

## Colour & lighting

- **Palette structure:** Washed yellow-green and grey midtones, with one red and one black.
- **Contrast rules:** Text on void black holds at least 10:1; red is for one short line, not for body text.
- **Surface treatment:** Flat colour grade, JPEG blocks, 5% to 10% noise, a vignette of 20%.
- **Light and shadow:** Flat flash or ceiling light with no soft falloff; deep black shadows.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Void Black | `#0B0B0B` | background |
| Dull Fluorescent | `#C9C58A` | primary |
| Wrong Red | `#E01B1B` | accent |
| Carpet Teal | `#3B6B66` | second accent |
| Old Wall | `#D9D4C0` | text |
| Dust Grey | `#6F6E68` | muted |

## Materiality & texture

- **Surface simulation:** A low-quality digital photo, a screenshot or a scan of a screen.
- **Border rules:** No border; images end at a hard edge; voids have a 0px edge.
- **Blur and elevation:** No blur by design; a 1px to 2px chroma shift at edges.

## Ornamentation & iconography

- **Iconography:** Few icons; a system cursor, an error cross and a small circle at 16px, in a thin line.
- **Illustration:** Found photos of rooms, playgrounds and shops, with faceless silhouettes, eyes cut from other photos and old 3D fragments.
- **Decorative elements:** black void · red warning line · faceless figure · empty room · date stamp

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Hard cuts every 1.2s to 3s; a flicker of 2 frames at 12 fps; text appears one letter at a time at 80ms per letter.
- **Easing:** steps(4, end)
- **Duration (ms):** 120
- **Hover and active:** Hover shows a second hidden line of text; the active state cuts to a negative of the image for 120ms.

## Code & token primer

Set `data-style="weirdcore"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="weirdcore"] {
  --color-bg: #0B0B0B;
  --color-surface: #1A1A18;
  --color-text: #D9D4C0;
  --color-muted: #A8A494;
  --color-primary: #C9C58A;
  --color-accent: #E01B1B;
  --color-border: #6F6E68;
  --font-sans: "IBM Plex Mono", "Space Mono", monospace;
  --font-display: "VT323", "IBM Plex Mono", monospace;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: steps(4, end);
  --duration: 120ms;
  --type-ratio: 1.414;
  --size-small: 11.32px;
  --size-h3: 31.99px;
  --size-h2: 45.23px;
  --size-h1: 63.96px;
  --color-on-bg: #D9D4C0;
  --color-on-surface: #D9D4C0;
  --color-on-primary: #0B0B0B;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #A8A494;
  --color-muted-on-surface: #A8A494;
  --color-link: #C9C58A;
  --color-link-on-surface: #C9C58A;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.02em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.5;
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
| page | `bg-[#0B0B0B] text-[#D9D4C0] font-mono antialiased px-6 md:px-12` |
| heading | `text-3xl md:text-5xl leading-[1.2] tracking-[0.02em] text-[#E01B1B]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border border-[#6F6E68] bg-[#1A1A18]` |
| button | `rounded-none border border-[#C9C58A] bg-transparent px-4 py-2 text-sm text-[#C9C58A] hover:bg-[#C9C58A] hover:text-[#0B0B0B]` |
| label | `text-xs uppercase tracking-widest` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: square. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Pixel icons match the low-resolution, old-computer fragments of the style. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.02em, leading 1.2, case: none.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, left aligned, compact density, accent tilt 1°.
- **Ground:** raw. Weirdcore uses raw, degraded images, so the ground is a flat field with visible noise and no polish. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Lo-fi found image (process)

A low-resolution photo of an ordinary place, scaled up so that the JPEG blocks show. It looks like a lost or half-remembered picture. Origin: internet, online, 2018.

- Scale a photo of 320 to 640px up to the full frame with no smoothing.
- Shift the colour by 10% to 20% to yellow-green or magenta.
- Add noise of 5% to 10% and a vignette of 20%.
- Add one wrong detail, such as a black void or a faceless figure.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Reddit** (platform, web, 2005–now), gathered the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.
- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #C9C58A | #C9C58A, #E01B1B, #D9D4C0 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E01B1B | #E01B1B, #3B6B66 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.414 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **softer**: move toward [`dreamcore`](../dreamcore/SKILL.md) (Dreamcore). Replace the red text with pale pastel text and add a soft bloom of 12px.
- If the user asks for **more digital**: move toward [`glitchcore`](../glitchcore/SKILL.md) (Glitchcore). Add channel splits, repeated frames and high-contrast colour.
- If the user asks for **more retro**: move toward [`cassette-futurism`](../cassette-futurism/SKILL.md) (Cassette Futurism). Replace the photo with a CRT screen, an amber text line and a hard grid.

- **Came from (go here for a more orthodox version):** [`vaporwave`](../vaporwave/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`frutiger-aero`](../frutiger-aero/SKILL.md)
- **Mixes well with:** [`dreamcore`](../dreamcore/SKILL.md), [`liminal-spaces`](../liminal-spaces/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md)
- **Nearest by vector profile:** [`glitch-gif`](../glitch-gif/SKILL.md), [`barbiecore`](../barbiecore/SKILL.md), [`grwm-short`](../grwm-short/SKILL.md)

## Emotional target

The viewer feels a quiet unease and a memory of a place that never existed.

**Keywords:** uncanny, nostalgic, eerie, empty, lo-fi, dreamlike · **Brand archetypes:** magician, outlaw

## Sources

- [Wikipedia, Weirdcore](https://en.wikipedia.org/wiki/Weirdcore)
- [Wikipedia, Yume Nikki](https://en.wikipedia.org/wiki/Yume_Nikki)

---

Generated from [`data/internet/styles/weirdcore.json`](../../data/internet/styles/weirdcore.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
