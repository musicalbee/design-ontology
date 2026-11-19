---
name: flash-intro-site
description: "Apply the Flash Intro Site style (1998–2010) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: flash site, skip intro, macromedia flash, flash intro, loading bar, pixel nav."
domain: internet
era: postmodern-early-digital
triggers:
  - "flash site"
  - "skip intro"
  - "macromedia flash"
  - "flash intro"
  - "loading bar"
  - "pixel nav"
  - "swf"
  - "early 2000s agency site"
vector_profile:
  ornamentation: 3
  dimensionality: 4
  grid_rigidity: 3
  skeuomorphic_realism: 2
  typographic_expressiveness: 4
---

# Flash Intro Site

> A site is a performance: control every pixel and every second, and make the visitor wait for it.

A full-window site built as vector animation: a loading bar, a 'skip intro' link, tiny pixel type, custom cursors, sound and transitions between sections. Macromedia Flash made it possible.

**Period:** 1998–2010 · **Era:** Postmodern & Early Digital · **Domain:** Internet · **Also called:** Skip intro, Flash website, Macromedia Flash site

## When to load this skill

Load it when the user asks for: "flash site", "skip intro", "macromedia flash", "flash intro", "loading bar", "pixel nav", "swf", "early 2000s agency site".

Good for: portfolios and agency showcase pages, music and film promo sites, nostalgic interactive stories, game teasers, art and fashion lookbooks.

Do not use it when:
- The page needs speed, search and indexing.
- The reader needs long text.
- Mobile and keyboard access are the main routes.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Flash Intro Site, you MUST:

1. Fill the full window with one stage and centre a fixed area of 800px by 600px or 1000px by 600px.
2. Open with a loading bar of 1px to 4px and a counter from 0% to 100%, then a 5 to 20 second intro.
3. Put a 'skip intro' link of 11px in the lower corner, visible from the first frame.
4. Set navigation in pixel type of 8px to 10px in upper case, with 0.1em tracking, and place it on a free path.
5. Move each section in by tween: slide 40px to 120px with an ease-out over 400ms to 800ms.
6. Use one accent (#FF6600) on a dark ground (#111111) and keep the rest in grey tones.
7. Follow the pointer: an element trails the cursor at 0.1 to 0.2 easing.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Instant static pages with no intro.
- **NEVER:** Standard text navigation in a bar.
- **NEVER:** Long blocks of readable body text.
- **NEVER:** Responsive reflow to small screens.
- **NEVER:** Native scroll with no scene change.
- **NEVER:** Plain system fonts at 16px for all text.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A fixed stage of 800px to 1000px wide on a centred 12-column grid with 20px gutters; each scene replaces the last.
- **Whitespace ratio:** 30% to 50% of the stage is empty ground; the spacing scale is 10, 20 and 40px.
- **Alignment rules:** Centred stage; navigation and credits at the edges; text blocks flush left at 10px to 12px.
- **Container geometry:** Hairline rectangles of 1px, circles and thin lines; the radius is 0px to 2px.

## Typography

- **Classifications:** pixel sans · geometric sans · condensed sans
- **Tracking:** Display 0.04em; pixel labels 0.1em.
- **Leading:** Display 1.0; body 1.5.
- **Hierarchy rules:**
  - Use 8px to 10px pixel type for navigation and 11px for body text.
  - Use one large word of 48px to 96px per scene as the title.
  - Use the accent colour for the active item only.
  - Use upper case for navigation and lower case for body text.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Oswald | Silkscreen | Oswald is a tall condensed display; Silkscreen is an open pixel face for the tiny navigation. |
| Jost | Space Mono | Jost is an open geometric sans in the Futura line, with a mono text face. |
| Archivo Narrow | Silkscreen | A narrow display with a pixel label face. |

## Colour & lighting

- **Palette structure:** A dark or white stage, grey tones and one saturated accent; one more cool tone for lines.
- **Contrast rules:** Light text on stage black is 16:1; muted grey on black is 6.5:1; orange on black is 6.8:1.
- **Surface treatment:** Flat vector fills, thin lines and one soft glow; no photographic texture.
- **Light and shadow:** Light comes from an accent glow of 8px to 20px on one element; a hard 1px highlight line on panels.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Stage Black | `#111111` | background |
| Panel Grey | `#1E1E1E` | panel |
| Text Light | `#EEEEEE` | text |
| Muted Grey | `#9A9A9A` | secondary text |
| Flash Orange | `#FF6600` | primary |
| Cyan | `#33CCFF` | accent |
| Line Grey | `#444444` | border |

## Materiality & texture

- **Surface simulation:** A vector screen: crisp fills and hairlines on a dark stage, with a little bitmap texture.
- **Border rules:** A 1px line in grey (#444444); a 1px accent line for the active state.
- **Blur and elevation:** A blur of 4px to 12px in motion trails; no cast shadow.

## Ornamentation & iconography

- **Iconography:** Thin 1px vector icons at 16px to 24px, arrows, crosses and circles, with a pixel cursor.
- **Illustration:** Vector figures, cut-out photos, abstract line art, particle sprays and short looped clips.
- **Decorative elements:** loading bar · skip-intro link · custom cursor · pixel navigation · tween transition · sound toggle

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Scenes enter by tween: 40px to 120px slides over 400ms to 800ms with ease-out; trails follow the cursor; the intro runs 5s to 20s.
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Duration (ms):** 600
- **Hover and active:** Hover moves the item 4px, turns it orange and plays a click sound; active state fades the stage to the next scene.

## Code & token primer

Set `data-style="flash-intro-site"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="flash-intro-site"] {
  --color-bg: #111111;
  --color-surface: #1E1E1E;
  --color-text: #EEEEEE;
  --color-muted: #9A9A9A;
  --color-primary: #FF6600;
  --color-accent: #33CCFF;
  --color-border: #444444;
  --font-sans: "Space Mono", "Silkscreen", monospace;
  --font-display: "Oswald", "Jost", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: 0 0 16px #FF660066;
  --backdrop-filter: none;
  --space-unit: 10px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --duration: 600ms;
  --type-ratio: 1.333;
  --size-small: 12px;
  --size-h3: 28.43px;
  --size-h2: 37.9px;
  --size-h1: 50.52px;
  --color-on-bg: #EEEEEE;
  --color-on-surface: #EEEEEE;
  --color-on-primary: #111111;
  --color-on-accent: #111111;
  --color-muted-on-bg: #9A9A9A;
  --color-muted-on-surface: #9A9A9A;
  --color-link: #33CCFF;
  --color-link-on-surface: #33CCFF;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1;
  --ground: radial-gradient(70% 60% at 50% 105%, transparent 30%, var(--color-bg) 75%),
    repeating-conic-gradient(from -90deg at 50% 108%, color-mix(in oklab, var(--color-primary) 34%, transparent) 0 4deg, transparent 4deg 9deg),
    repeating-radial-gradient(circle at 50% 108%, transparent 0 18vmin, color-mix(in oklab, var(--color-primary) 40%, transparent) 18vmin calc(18vmin + 2px), transparent calc(18vmin + 2px) 24vmin),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#111111] text-[#EEEEEE] font-mono antialiased px-4 md:px-12` |
| heading | `text-5xl md:text-8xl font-bold uppercase tracking-[0.04em] leading-none text-[#EEEEEE]` |
| body | `text-sm leading-[1.5] max-w-prose text-[#9A9A9A]` |
| section | `border border-[#444444] bg-[#1E1E1E]` |
| button | `rounded-none border border-[#FF6600] bg-transparent px-5 py-2 text-xs uppercase tracking-[0.1em] text-[#FF6600] transition-all duration-[600ms] hover:bg-[#FF6600] hover:text-[#111111]` |
| label | `text-[10px] uppercase tracking-[0.1em] text-[#33CCFF]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Pixel icons match the tiny pixel navigation of a Flash site. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.04em, leading 1, case: uppercase.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, airy density, accent tilt 0°.
- **Ground:** rays. The ground is a dark stage with faint light rays, like the opening scene of a Flash intro. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Vector tween animation (animation)

A vector shape moves, changes size or fades between two key frames, and the tool fills the frames between them. Origin: internet, San Diego, 1996.

- Set a key frame at the start and at the end, 12 to 24 frames apart.
- Set the easing to ease-out for entrances, with a curve of 400ms to 800ms.
- Keep the movement to 40px to 120px per scene.
- Add a sound cue at the end of the move.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Newgrounds** (platform, web, 1995–now), published the style. A web site where users post Flash games and animations. It spread the look of Flash sites.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FF6600 | #FF6600, #33CCFF, #FF0066 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #33CCFF | #33CCFF, #FF6600, #EEEEEE | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–2 px | --border-radius |
| Grid step (`grid_step`) | 10px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.125–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **faster**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Remove the intro and the loading bar; keep the dark ground and one accent.
- If the user asks for **more gloss**: move toward [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md) (Web 2.0 Gloss). Replace the hairlines with glossy buttons and a reflection under the logo.
- If the user asks for **more raw**: move toward [`net-art-browser`](../net-art-browser/SKILL.md) (Net Art Browser). Remove the animation and show the raw HTML and the defaults.

- **Came from (go here for a more orthodox version):** [`cyberdelia`](../cyberdelia/SKILL.md), [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`portal-table-layout`](../portal-table-layout/SKILL.md)
- **Was rejected by:** [`web-2-0-gloss`](../web-2-0-gloss/SKILL.md)
- **Nearest by vector profile:** [`space-age`](../space-age/SKILL.md), [`claymorphism`](../claymorphism/SKILL.md), [`conceptual-sketch-ui`](../conceptual-sketch-ui/SKILL.md)

## Emotional target

The viewer feels invited into a stylish show, and also sometimes feels kept waiting.

**Keywords:** cinematic, designed, experimental, slick, animated, patient · **Brand archetypes:** magician, creator, explorer

## Sources

- [Wikipedia: Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash)
- [Wikipedia: Skip intro](https://en.wikipedia.org/wiki/Splash_screen)
- [Wikipedia: Hillman Curtis](https://en.wikipedia.org/wiki/Hillman_Curtis)

---

Generated from [`data/internet/styles/flash-intro-site.json`](../../data/internet/styles/flash-intro-site.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
