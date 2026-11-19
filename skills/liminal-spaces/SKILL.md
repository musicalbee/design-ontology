---
name: liminal-spaces
description: "Apply the Liminal spaces style (2019–now) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: liminal spaces, the backrooms, empty corridor, fluorescent light, uncanny empty, abandoned mall."
domain: internet
era: contemporary-spatial
triggers:
  - "liminal spaces"
  - "the backrooms"
  - "empty corridor"
  - "fluorescent light"
  - "uncanny empty"
  - "abandoned mall"
  - "pool rooms"
  - "transit space"
vector_profile:
  ornamentation: 1
  dimensionality: 4
  grid_rigidity: 4
  skeuomorphic_realism: 3
  typographic_expressiveness: 1
---

# Liminal spaces

> An ordinary place with no people and no purpose feels strange: the viewer meets the unease of a threshold.

Empty rooms of transit and routine: office corridors, pools, car parks and malls under flat light, with no people. A 2019 image of yellow rooms started the look, and the Backrooms spread it.

**Period:** 2019–now · **Era:** Contemporary & Spatial · **Domain:** Internet · **Also called:** Liminal space, The Backrooms look, Empty places

## When to load this skill

Load it when the user asks for: "liminal spaces", "the backrooms", "empty corridor", "fluorescent light", "uncanny empty", "abandoned mall", "pool rooms", "transit space".

Good for: horror and game pages, music and art releases, found-footage and film credits, mood boards for places.

Do not use it when:
- The brand needs warmth, people or friendly service.
- The page must sell with energy and colour.
- The audience reads long text in a calm setting.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Liminal spaces, you MUST:

1. Set the ground in a damp yellow (#C9B96B) or a dull carpet green with a slight grey cast.
2. Shoot or render empty rooms from eye height at 160cm, with a single vanishing point at the centre.
3. Light the room with flat fluorescent light and no strong shadow; the white point sits at 4000K to 4500K.
4. Add a low-grade capture look: JPEG blocks, a 4:3 crop, a 480p to 720p size, a timestamp in mono at 14px.
5. Repeat structure: tiled ceilings of 60cm cells, doors and corridors in rows of 6 or more.
6. Keep text rare and plain: a room code, a date or a sign in a default sans at 14px to 18px.
7. Leave 50% or more of the frame as empty floor and wall.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** People and faces in the frame.
- **NEVER:** Warm, cosy lighting.
- **NEVER:** Bright saturated colour.
- **NEVER:** Decorative type and ornament.
- **NEVER:** Dramatic perspective and camera moves.
- **NEVER:** Clean, high-resolution gloss.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■■■□` 4/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■□□` 3/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A central one-point perspective: the vanishing point sits at 50% width and 45% height, and rows of lights and doors repeat toward it.
- **Whitespace ratio:** 50% to 70% of the frame stays empty; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Strict centre axis; the UI text sits in the lower left corner as a caption.
- **Container geometry:** Sharp rectangles with no radius; thin 1px frames; a 4:3 viewport with a camcorder-style bar of 24px.

## Typography

- **Classifications:** system sans · monospace · default sans
- **Tracking:** Display 0.02em; mono 0.05em.
- **Leading:** Display 1.2; body 1.5.
- **Hierarchy rules:** Use weights 400 and 600. · Use sizes 14, 16, 24 and 40px. · Set the room code and the date in mono capitals. · Set at most 1 heading and 1 caption on a screen.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Libre Franklin | Courier Prime | A plain, signage-like sans with a typewriter text face for timestamps. |
| Arimo | Share Tech Mono | An open Arial match for door signs, with a technical mono for the clock. |
| Roboto Mono | Roboto Mono | One mono face for a security-camera overlay. |

## Colour & lighting

- **Palette structure:** Dull yellow, carpet green and fluorescent white, with a dark grey for the text.
- **Contrast rules:** Corridor grey on wallpaper yellow holds 6:1; grey on ceiling white holds 12:1; teal carries only the pool and water cues.
- **Surface treatment:** Flat, slightly dirty fills with a 3% noise and a 2% vignette; photographs look like a cheap camera.
- **Light and shadow:** Flat overhead light; no hard shadow; a faint hum glow of 8px at 10% near lamps.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Wallpaper Yellow | `#C9B96B` | background |
| Ceiling White | `#EDEBDD` | surface |
| Carpet Olive | `#6F6A3C` | primary |
| Pool Teal | `#6FA8A3` | accent |
| Corridor Grey | `#2A2A28` | text |
| Damp Brown | `#8A7A4A` | border |
| Mid Grey | `#4B4A42` | muted text |

## Materiality & texture

- **Surface simulation:** Carpet, laminate, vinyl floor, ceiling tile, tiled pool wall and painted concrete.
- **Border rules:** A 1px grey line on frames; a 24px bar at the bottom for the timestamp.
- **Blur and elevation:** No blur; layers are separated by a 1px line; JPEG block noise at 6% opacity.

## Ornamentation & iconography

- **Iconography:** Plain outline icons at 20px with 1.5px strokes and square caps; arrow and exit signs only.
- **Illustration:** Empty corridors, stairwells, pools, car parks and mall atriums; no figure and no ornament.
- **Decorative elements:** tiled ceiling grid · timestamp overlay · exit sign · repeated door row · fluorescent panel

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Very slow: a camera drift of 1% per second toward the vanishing point; cuts have no easing; a lamp flicker of 2 frames each 12s.
- **Easing:** linear
- **Duration (ms):** 800
- **Hover and active:** Hover shifts the caption by 0px and underlines the link; active state cuts to black for 2 frames.

## Code & token primer

Set `data-style="liminal-spaces"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="liminal-spaces"] {
  --color-bg: #C9B96B;
  --color-surface: #EDEBDD;
  --color-text: #2A2A28;
  --color-muted: #4B4A42;
  --color-primary: #6F6A3C;
  --color-accent: #6FA8A3;
  --color-border: #8A7A4A;
  --font-sans: "Courier Prime", "Share Tech Mono", monospace;
  --font-display: "Libre Franklin", "Arimo", Arial, sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: linear;
  --duration: 800ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #2A2A28;
  --color-on-surface: #2A2A28;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #2A2A28;
  --color-muted-on-bg: #4B4A42;
  --color-muted-on-surface: #4B4A42;
  --color-link: #2A2A28;
  --color-link-on-surface: #6F6A3C;
  --display-weight: 600;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 400;
  --display-tracking: 0.02em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 100% 0 / 17vmin 17vmin no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) calc(100% - 18vmin) 0 / 17vmin 17vmin no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 70%, transparent), color-mix(in oklab, var(--color-primary) 70%, transparent)) 100% 18vmin / 35vmin 17vmin no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-accent) 60%, transparent), color-mix(in oklab, var(--color-accent) 60%, transparent)) calc(100% - 18vmin) 36vmin / 17vmin 35vmin no-repeat,
    linear-gradient(var(--color-surface), var(--color-surface)) 100% 36vmin / 17vmin 17vmin no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#C9B96B] text-[#2A2A28] font-mono antialiased px-6 md:px-12` |
| heading | `font-[family-name:Libre_Franklin] text-3xl md:text-5xl font-semibold leading-[1.2] tracking-[0.02em]` |
| body | `text-base leading-[1.5] max-w-prose` |
| section | `border border-[#8A7A4A] bg-[#EDEBDD] p-6` |
| button | `border border-[#2A2A28] bg-[#6F6A3C] px-5 py-2.5 text-sm text-[#F5F3E6] hover:bg-[#2A2A28]` |
| label | `font-mono text-sm tracking-[0.05em] text-[#4B4A42]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Carbon (Regular) by IBM, licence Apache 2.0. Reason: A plain technical outline family that looks like signage and system icons. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0.02em, leading 1.2, case: none.
- **Weights:** display 600, subhead 400, body 400, bold in text 600, labels and buttons 400. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, airy density, accent tilt 0°.
- **Ground:** tiles. Liminal spaces stand on a grid of ceiling and floor tiles that runs toward one vanishing point. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Direct flash (tool)

A flash on the camera that fires straight at the subject, so that faces are bright, shadows are hard and the background goes dark. Origin: photography, Germany, 1929.

- Put the flash on the camera axis; do not bounce it.
- Stand 1 to 3 m from the subject; let the background fall 2 to 4 stops darker.
- Keep the red eye, the shine on skin and the hard shadow behind the subject.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **4chan** (platform, web, 2003–now), launched the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #6F6A3C | #6F6A3C, #6FA8A3, #2A2A28 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #6FA8A3 | #6FA8A3, #8A7A4A | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.125–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more dreamy**: move toward [`ethereal-web`](../ethereal-web/SKILL.md) (Ethereal Web). Add soft pastel haze, bloom and a pale sky; keep the empty space.
- If the user asks for **more digital**: move toward [`cybercore-web`](../cybercore-web/SKILL.md) (Cybercore Web). Add scan lines, a green terminal grid and split colour channels.
- If the user asks for **calmer**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Replace the yellow with white and remove the timestamp and noise.

- **Came from (go here for a more orthodox version):** [`vaporwave`](../vaporwave/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`corporate-memphis`](../corporate-memphis/SKILL.md)
- **Mixes well with:** [`dreamcore`](../dreamcore/SKILL.md), [`weirdcore`](../weirdcore/SKILL.md)
- **Kin in another domain:** [`brutalist-architecture`](../brutalist-architecture/SKILL.md), [`found-footage`](../found-footage/SKILL.md), [`low-poly-ps1-revival`](../low-poly-ps1-revival/SKILL.md), [`new-topographics`](../new-topographics/SKILL.md)
- **Nearest by vector profile:** [`neumorphism`](../neumorphism/SKILL.md), [`ethereal-web`](../ethereal-web/SKILL.md), [`liquid-glass-ui`](../liquid-glass-ui/SKILL.md)

## Emotional target

The viewer feels uneasy, alone and held in a place between two states.

**Keywords:** uncanny, empty, nostalgic, eerie, still, anxious · **Brand archetypes:** explorer, magician

## Sources

- [Wikipedia: Liminal space (aesthetic)](https://en.wikipedia.org/wiki/Liminal_space_(aesthetic))
- [Wikipedia: Backrooms](https://en.wikipedia.org/wiki/Backrooms)

---

Generated from [`data/internet/styles/liminal-spaces.json`](../../data/internet/styles/liminal-spaces.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
