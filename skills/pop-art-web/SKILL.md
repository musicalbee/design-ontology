---
name: pop-art-web
description: "Apply the Pop Art (web) style (1956–1975) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: pop art, warhol, lichtenstein, halftone, comic style, retro advertising."
domain: internet
era: modernist
triggers:
  - "pop art"
  - "warhol"
  - "lichtenstein"
  - "halftone"
  - "comic style"
  - "retro advertising"
  - "speech bubble"
  - "1960s"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 1
  typographic_expressiveness: 4
---

# Pop Art (web)

> Mass culture is the subject: the comic, the ad and the label become art when you make them big, flat and loud.

Flat, saturated colour, thick outlines, halftone dots and repeated mass-media images. It came from Britain and the USA in the 1950s and 1960s and treats advertising and comics as high art.

**Period:** 1956–1975 · **Era:** Modernist · **Domain:** Internet · **Also called:** Pop style, Warhol style, Comic-dot style

## When to load this skill

Load it when the user asks for: "pop art", "warhol", "lichtenstein", "halftone", "comic style", "retro advertising", "speech bubble", "1960s".

Good for: campaign and launch pages, fashion and music brands, kids and snack products, event posters, creative portfolios.

Do not use it when:
- The product is serious, medical or financial.
- The page needs calm long reading.
- The brand is premium and quiet.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Pop Art (web), you MUST:

1. Use 4 saturated colours at most on a page (red, yellow, blue and one of pink or cyan) and black outlines of 3px to 5px.
2. Make halftone dots with a 6px to 10px pitch at 100% opacity as a fill for backgrounds and shadows.
3. Repeat an image 2 to 4 times in a grid, each copy in a different colour set.
4. Set headlines in a heavy comic or poster face at 56px or larger with a 3px black outline or a hard 4px offset shadow.
5. Place speech bubbles and burst shapes (8 to 16 points) around calls to action.
6. Crop photographs hard and reduce them to 3 to 4 flat colours.
7. Keep copy short: headlines of 1 to 6 words and slogans in capitals.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Subtle gradients and soft shadows.
- **NEVER:** Muted, earth-tone or pastel palettes.
- **NEVER:** Thin, light-weight type.
- **NEVER:** Photographic realism without flat colour reduction.
- **NEVER:** Quiet, minimal layouts with large empty areas.
- **NEVER:** Serif body text set at display size.
- **NEVER:** Elements with no outline.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A loose 12-column grid that allows repeated tiles of equal size; panel frames of 3px to 5px follow a comic page.
- **Whitespace ratio:** 10% to 20% of the surface stays empty; the spacing scale is 8, 16, 24 and 48px.
- **Alignment rules:** Centred or flush left; speech bubbles and bursts break the column; type may tilt by 1° to 3°.
- **Container geometry:** Rectangles with a 0px to 8px radius and a 3px to 5px black outline; bursts and bubbles with tails.

## Typography

- **Classifications:** comic display · heavy poster face
- **Tracking:** Display takes 0.01em; body stays at 0; labels take +0.04em.
- **Leading:** Display 1.0; body 1.5.
- **Hierarchy rules:**
  - Use two weights for body: regular (400) and bold (700); display has one weight.
  - Use sizes 16, 28, 56 and 96px.
  - Set headlines in upper case with an outline.
  - Put a numeral or an exclamation mark in a burst shape next to a key claim.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Bowlby One | Comic Neue | A fat poster face with a friendly comic text face. |
| Bangers | Archivo Narrow | A comic-book display face. |
| Rubik | Rubik | A rounded single-family setting that can be pushed to heavy weights. |

## Colour & lighting

- **Palette structure:** Flat primaries and one hot pink on cream or white, outlined in black.
- **Contrast rules:** Black on yellow holds 14:1; white on red holds at least 4.5:1 for bold text of 24px and larger.
- **Surface treatment:** Flat opaque inks with halftone dot fills; no gradients.
- **Light and shadow:** No light source; hard 4px offset shadows in black.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper | `#FFF8E1` | background |
| Black | `#111111` | outlines and text |
| Pop Red | `#E8272B` | primary |
| Pop Yellow | `#FFD500` | accent |
| Pop Blue | `#1E6FD9` | second accent |
| Hot Pink | `#FF4FA3` | third accent |

## Materiality & texture

- **Surface simulation:** Cheap four-colour print: flat inks and visible halftone dots.
- **Border rules:** Solid black outline of 3px to 5px on every container and image.
- **Blur and elevation:** No blur. Hard offset shadow of 4px 4px 0 black on cards and buttons.

## Ornamentation & iconography

- **Iconography:** Solid icons with a heavy 3px outline in black, round joins and a flat colour fill; place each in a burst or a circle.
- **Illustration:** Comic panels, speech bubbles and repeated, colour-shifted portraits or products.
- **Decorative elements:** halftone dots · speech bubble · burst shape · repeated tiles · onomatopoeia text

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: quick, snappy pops with a small overshoot; elements stamp in at a scale of 1.08, then settle at 1.0.
- **Easing:** cubic-bezier(0.34, 1.56, 0.64, 1)
- **Duration (ms):** 180
- **Hover and active:** Hover moves the card by 2px and cuts the offset shadow to 2px; active state removes the shadow.

## Code & token primer

Set `data-style="pop-art-web"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="pop-art-web"] {
  --color-bg: #FFF8E1;
  --color-surface: #FFD500;
  --color-text: #111111;
  --color-muted: #4A4436;
  --color-primary: #E8272B;
  --color-accent: #1E6FD9;
  --color-border: #111111;
  --font-sans: "Comic Neue", "Archivo Narrow", sans-serif;
  --font-display: "Bowlby One", "Bangers", Impact, sans-serif;
  --border-radius: 6px;
  --border-width: 4px;
  --shadow-elevation: 4px 4px 0 #111111;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration: 180ms;
  --type-ratio: 1.5;
  --size-small: 10.67px;
  --size-h3: 36px;
  --size-h2: 54px;
  --size-h1: 81px;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #000000;
  --color-on-accent: #FFF8E1;
  --color-muted-on-bg: #4A4436;
  --color-muted-on-surface: #4A4436;
  --color-link: #1E6FD9;
  --color-link-on-surface: #111111;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0.01em;
  --display-leading: 1;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 16px;
  --icon-stroke: 3;
  --ground: linear-gradient(100deg, var(--color-bg) 28%, transparent 60%),
    radial-gradient(circle, var(--color-accent) 34%, transparent 36%) 0 0 / 22px 22px,
    repeating-conic-gradient(from 0deg at 84% 30%, color-mix(in oklab, var(--color-primary) 70%, transparent) 0 9deg, transparent 9deg 18deg),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFF8E1] text-[#111111] font-sans antialiased px-6 md:px-12` |
| heading | `text-6xl md:text-8xl uppercase leading-none tracking-[0.01em] [text-shadow:4px_4px_0_#111111]` |
| body | `text-base leading-6` |
| section | `border-4 border-[#111111] bg-[#FFD500] p-6 shadow-[4px_4px_0_#111111]` |
| button | `rounded-md border-4 border-[#111111] bg-[#E8272B] px-6 py-3 text-base font-bold uppercase text-white shadow-[4px_4px_0_#111111] transition-all duration-[180ms] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#111111]` |
| label | `text-xs font-bold uppercase tracking-[0.04em]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 3 on a 24px field, round caps, round joins, container: circle. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: A bold outline with a flat fill that looks like a comic panel. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking 0.01em, leading 1, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.5.
- **Page:** hero poster, center aligned, compact density, accent tilt 2°.
- **Ground:** halftone. Pop art enlarges the Ben-Day dots of comic print until the dots become the picture. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Halftone (process)

Tone printed as dots of different size or spacing; at a distance the dots merge into grey or colour. Origin: internet, New York, 1879.

- Set the screen at 10 to 30 lines per cm for a print grain, or enlarge the dots to 4 to 8mm for a Pop effect.
- Turn each colour screen to its own angle: cyan 15°, magenta 75°, yellow 0°, black 45°.

### Screen printing (process)

Ink pushed through a fine mesh with a squeegee; a stencil on the mesh blocks the parts that do not print. Origin: print, Manchester, 1907.

- Stretch a silk or polyester mesh of 40–120 threads a centimetre on a frame.
- Make the stencil by hand cut film or by a photo emulsion exposed through a film positive.
- Pull thick, opaque ink across the screen with a rubber squeegee in one even stroke.
- Print each colour from its own screen and let each layer dry before the next.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Leo Castelli Gallery** (gallery, New York, 1957–now), exhibited the style. The gallery of the dealer Leo Castelli. It showed Pop Art and then Minimalism.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #E8272B | #E8272B, #1E6FD9, #111111 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #1E6FD9 | #1E6FD9, #E8272B | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 6px | 3–9 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.5 | 1.414–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **calmer**: move toward [`mid-century-modern`](../mid-century-modern/SKILL.md) (Mid-Century Modern). Mute the palette to earth tones and drop the outlines and dots; keep the flat shapes.
- If the user asks for **more modern**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Keep the outline and offset shadow; drop the halftone and the bursts.
- If the user asks for **more chaotic**: move toward [`memphis-design`](../memphis-design/SKILL.md) (Memphis Design). Add squiggles and confetti patterns and rotate elements by up to 3°.

- **Came from (go here for a more orthodox version):** [`mid-century-modern`](../mid-century-modern/SKILL.md)
- **Mixes well with:** [`japanese-graphic-modernism`](../japanese-graphic-modernism/SKILL.md), [`memphis-design`](../memphis-design/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md), [`space-age`](../space-age/SKILL.md)
- **Kin in another domain:** [`airbrush-surrealism`](../airbrush-surrealism/SKILL.md), [`ben-day-comic-print`](../ben-day-comic-print/SKILL.md), [`mod-and-mini`](../mod-and-mini/SKILL.md), [`pop-art-painting`](../pop-art-painting/SKILL.md), [`pop-screen-print`](../pop-screen-print/SKILL.md)
- **Nearest by vector profile:** [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`memphis-design`](../memphis-design/SKILL.md), [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md)

## Emotional target

The viewer feels a loud, ironic fun, as in a comic book or an advert.

**Keywords:** loud, ironic, playful, bold, graphic, consumerist · **Brand archetypes:** jester, outlaw

## Sources

- Lucy Lippard, Pop Art (Thames & Hudson, 1966)
- Wikidata Q134147 (Pop art)

---

Generated from [`data/internet/styles/pop-art-web.json`](../../data/internet/styles/pop-art-web.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
