---
name: grunge-editorial
description: "Apply the Grunge Editorial style (1990s) when generating UI or graphic layouts. Load when the user asks for: grunge, david carson, ray gun, emigre, distressed type, 90s magazine."
domain: design
era: postmodern-early-digital
triggers:
  - "grunge"
  - "david carson"
  - "ray gun"
  - "emigre"
  - "distressed type"
  - "90s magazine"
  - "deconstructed"
  - "photocopy"
  - "zine"
  - "overprint"
  - "anti-design"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 1
  skeuomorphic_realism: 2
  typographic_expressiveness: 5
---

# Grunge Editorial

> Legibility is not the same as communication, and a page can carry the mood of its content by looking as rough as the content feels.

Layered, distressed type, overprinted photographs and broken columns, set by hand in early Macintosh software. David Carson at Ray Gun and the Emigre studio made it the look of 1990s alternative music and youth magazines.

**Period:** 1990s · **Era:** Postmodern & Early Digital · **Domain:** Graphic & UI Design · **Also called:** Grunge Typography, Deconstructivist Typography, Ray Gun Style, New Typography of the 90s

## When to load this skill

Load it when the user asks for: "grunge", "david carson", "ray gun", "emigre", "distressed type", "90s magazine", "deconstructed", "photocopy", "zine", "overprint", "anti-design".

Good for: music magazines, zines, event posters, skate and street brands, album art, editorial features.

Do not use it when:
- The user must read long passages or complete a task with forms and tables.
- The brand needs a calm, institutional or medical tone.
- The page must meet a strict accessibility audit, since overlaps cut legibility below 4.5:1.

## System directives

When generating UI or graphic layouts in Grunge Editorial, you MUST:

1. Layer type over type and type over photographs with 2 to 4 overlapping text layers, and let the overlaps cut the legibility by 10% to 30%.
2. Mix 3 to 5 typefaces on one spread, at least one of them a distressed or bitmap face, and change size by a ratio of 3 or more.
3. Break the column grid: set one text block at an angle of 90 degrees, or one block with a line length of 12 characters, or one at 120 characters.
4. Add texture to every surface: scanner noise, photocopy grain, torn paper edges and halftone dots at 4px to 8px pitch.
5. Crop photographs hard, blur or posterise them, and print them at 60% to 100% contrast over a flat dark field.
6. Treat the page number, folio and caption as display type, at 48px to 200px.
7. Hold the palette to black, off-white and one or two dirty hues, and leave ink edges uneven.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A single neutral sans serif with one weight.
- **NEVER:** Perfect modular grids with equal gutters.
- **NEVER:** Glossy gradients and polished vector shadows.
- **NEVER:** Stock photography on a white field.
- **NEVER:** Generous empty margins with a centred headline.
- **NEVER:** Pastel colour schemes.
- **NEVER:** Pixel-perfect alignment across all elements.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■□□□□` 1/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■■` 5/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A nominal 3-column grid with 12px gutters that the content breaks on purpose; 1 in 3 blocks sits off the column by 16px to 120px or rotates by 90 degrees.
- **Whitespace ratio:** Only 5% to 15% of the surface stays empty; the spacing scale is 4, 12, 28, 60px and gaps vary within a page.
- **Alignment rules:** Mix flush-left, flush-right, rotated and justified blocks on one page; overlap text blocks by 8px to 40px and bleed photographs off at least two page edges.
- **Container geometry:** Rectangles with 0px radius and torn or cropped edges; panels are photograph crops and taped paper strips, with no card chrome.

## Typography

- **Classifications:** distressed grotesque · bitmap and pixel type · transitional serif · typewriter mono
- **Tracking:** Display sizes range from -0.06em to +0.3em within one page; body stays between 0em and +0.05em.
- **Leading:** Display 0.8 to 1.0 with overlapping lines; body 1.2 to 1.4; captions 1.0.
- **Hierarchy rules:**
  - Use 3 to 5 sizes with jumps of 3x or more, from 9px captions to 180px display words.
  - Mix upper case, lower case and small caps in one headline, and set one word 3x larger than the rest.
  - Rotate or stack one text block per spread at 90 degrees, and keep body paragraphs horizontal.
  - Keep body text at 11px to 14px in mono or serif and let headlines break the text frame.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Rubik Glitch | Space Mono | Broken display letters over a typewriter text face. |
| Special Elite | IBM Plex Mono | A worn typewriter display with a clean mono for captions. |
| Bowlby One | Libre Baskerville | A heavy blunt sans against a transitional serif. |
| VT323 | Courier Prime | Bitmap display type with a typewriter body. |

## Colour & lighting

- **Palette structure:** Black and warm off-white carry 70% of the surface; one or two muddy hues cover 20% as overprint, and one acid accent covers under 5%.
- **Contrast rules:** Body text holds 7:1 or better; display type may fall to 2:1 where it overlaps an image, and then a body-size caption must repeat the words at 7:1.
- **Surface treatment:** Textured, uneven and ink-heavy: grain at 15% to 30% opacity, multiply blend for overprint and a 1px to 3px misregistration offset between colour layers.
- **Light and shadow:** No coherent light source; depth comes from overlap order and multiply blending, and shadows, where present, are hard offsets of 2px to 4px in a darker ink.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Newsprint | `#E8E2D0` | background |
| Toner Black | `#141414` | text and photo field |
| Rust | `#8C3B1E` | overprint hue |
| Swamp | `#4B5A3C` | second overprint hue |
| Photocopy Grey | `#8A8A84` | secondary text and grain |
| Acid Yellow | `#E6FF00` | rare accent |

## Materiality & texture

- **Surface simulation:** Photocopied newsprint and cheap offset stock, with scanner dust, tape, staples and torn edges.
- **Border rules:** Rough ink rules of 1px to 6px that break or fade at one end; boxes are drawn by hand or omitted.
- **Blur and elevation:** Blur is used on photographs only, at a radius of 2px to 6px, and elevation is a single paper layer with a 3px hard shadow.

## Ornamentation & iconography

- **Iconography:** Crude hand-cut marks, arrows and crosses with a 2px to 5px uneven stroke and no consistent corner style; few of them.
- **Illustration:** Collage of scanned photographs, hand lettering, found type and scribbles; images are posterised, blurred or cut into strips.
- **Decorative elements:** halftone dots · photocopy grain · torn paper edges · tape strips · hand-drawn scribbles · oversized folios

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Translation for screen: layers cut in with a stutter, shift by 2px to 6px and flicker between two states, like a photocopy that is fed through twice.
- **Easing:** steps(3, end)
- **Duration (ms):** 180
- **Hover and active:** Hover offsets the colour layer by 3px and swaps the face to a distressed cut; active inverts black and newsprint and rotates the block by 1 degree.

## Code & token primer

Set `data-style="grunge-editorial"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="grunge-editorial"] {
  --color-bg: #E8E2D0;
  --color-surface: #141414;
  --color-text: #141414;
  --color-muted: #8A8A84;
  --color-primary: #8C3B1E;
  --color-accent: #E6FF00;
  --color-border: #141414;
  --font-sans: "Space Mono", "IBM Plex Mono", "Courier New", monospace;
  --font-display: "Rubik Glitch", "Bowlby One", Impact, sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: 3px 3px 0 rgba(20, 20, 20, 0.85);
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: steps(3, end);
  --duration: 180ms;
  --texture-grain: radial-gradient(rgba(20, 20, 20, 0.25) 1px, transparent 1.5px) 0 0 / 4px 4px;
  --blend-overprint: multiply;
  --tracking-display: -0.06em;
  --type-ratio: 1.618;
  --size-small: 9.27px;
  --size-h3: 39.27px;
  --size-h2: 63.54px;
  --size-h1: 102.8px;
  --color-on-bg: #141414;
  --color-on-surface: #E8E2D0;
  --color-on-primary: #E8E2D0;
  --color-on-accent: #141414;
  --color-muted-on-bg: #54524C;
  --color-muted-on-surface: #8A8A84;
  --color-link: #8C3B1E;
  --color-link-on-surface: #E6FF00;
  --display-weight: 400;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: -0.02em;
  --display-leading: 0.9;
  --display-case: uppercase;
  --body-leading: 1.5;
  --body-size: 15px;
  --icon-stroke: 2;
  --ground: linear-gradient(-7deg, transparent 0 42%, color-mix(in oklab, var(--color-accent) 85%, transparent) 42% 58%, transparent 58%) 88% 14% / 42vmin 14vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) 96% 66% / 28vmin 22vmin no-repeat,
    radial-gradient(circle, var(--color-on-bg) 30%, transparent 33%) 74% 96% / 9px 9px,
    linear-gradient(100deg, var(--color-bg) 36%, transparent 64%),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.48%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#E8E2D0] text-[#141414] font-mono text-[13px] leading-[1.3] overflow-x-hidden` |
| heading | `font-black uppercase text-8xl md:text-[12rem] leading-[0.8] tracking-[-0.06em] mix-blend-multiply -rotate-1` |
| rotated label | `text-xs uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180` |
| photo | `grayscale contrast-150 mix-blend-multiply blur-[2px] -mx-6` |
| button | `border-2 border-[#141414] bg-[#E6FF00] px-5 py-2 text-sm font-bold uppercase shadow-[3px_3px_0_#141414] transition-transform duration-[180ms] ease-[steps(3,end)] hover:translate-x-[3px] hover:rotate-1 active:bg-[#141414] active:text-[#E8E2D0]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Print) by CyCraft, licence CC BY 4.0. Reason: A doubled, off-register line: the look of a bad print run. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 400, tracking -0.02em, leading 0.9, case: uppercase.
- **Weights:** display 400, subhead 400, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display has the weight of the body, so size and face carry the hierarchy. The accent is size: a larger word is the accent, so the weights stay few.
- **Body type:** 15px, leading 1.5.
- **Page:** hero poster, left aligned, compact density, accent tilt 1.2°.
- **Ground:** xerox. Grunge layouts are scanned and copied again until the grain and the dirt are part of the type. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Photomontage (montage)

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes. Origin: graphic & ui design, Berlin, 1918.

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Ray Gun** (magazine, Santa Monica, 1992–2000), launched the style. An alternative rock magazine that David Carson art-directed. Its layered, broken type pages defined grunge typography.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #8C3B1E | #8C3B1E, #E6FF00, #141414 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E6FF00 | #E6FF00, #8C3B1E | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–6 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.618 | 1.5–1.618 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **cleaner**: move toward [`swiss-international`](../swiss-international/SKILL.md) (Swiss International Style). Snap blocks to a 12-column grid, drop overlaps and texture, and keep one oversized headline and the black and off-white palette.
- If the user asks for **more digital**: move toward [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md) (Y2K Aesthetic). Replace paper grain with chrome and gloss gradients, and keep the layered type and the mixed faces; use clean vector edges.
- If the user asks for **more raw**: move toward [`neo-brutalism-ui`](../neo-brutalism-ui/SKILL.md) (Neo-Brutalism UI). Add 3px black borders and hard offset shadows to the blocks and flatten the texture; keep the overlaps and the mono body.

- **Rejects (the opposite pole; do not blend):** [`swiss-international`](../swiss-international/SKILL.md)
- **Was rejected by:** [`y2k-aesthetic`](../y2k-aesthetic/SKILL.md)
- **Mixes well with:** [`anti-design`](../anti-design/SKILL.md), [`punk-zine`](../punk-zine/SKILL.md), [`scrapbook-ui`](../scrapbook-ui/SKILL.md)
- **Kin in another domain:** [`camcorder-revival`](../camcorder-revival/SKILL.md), [`deconstructivist-architecture`](../deconstructivist-architecture/SKILL.md), [`fashion-editorial`](../fashion-editorial/SKILL.md), [`party-flash`](../party-flash/SKILL.md), [`street-photography`](../street-photography/SKILL.md), [`xerox-zine`](../xerox-zine/SKILL.md)
- **Nearest by vector profile:** [`punk-zine`](../punk-zine/SKILL.md), [`anti-design`](../anti-design/SKILL.md), [`cyberdelia`](../cyberdelia/SKILL.md)

## Emotional target

Raw immediacy: the viewer feels close to an unpolished, noisy scene and reads the page as a document made by people, not by a brand.

**Keywords:** raw, noisy, rebellious, cynical, tactile, chaotic · **Brand archetypes:** outlaw, creator

## Sources

- David Carson and Lewis Blackwell, The End of Print: The Grafik Design of David Carson (Chronicle Books, 1995)
- Rudy VanderLans and Zuzana Licko, Emigre: Graphic Design into the Digital Realm (Van Nostrand Reinhold, 1993)

---

Generated from [`data/design/styles/grunge-editorial.json`](../../data/design/styles/grunge-editorial.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
