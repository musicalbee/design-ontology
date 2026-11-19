---
name: rage-comic
description: "Apply the Rage comic style (2008–2015) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: rage comic, rage face, fffuuu, trollface, mspaint comic, stick figure comic."
domain: internet
era: touchscreen
triggers:
  - "rage comic"
  - "rage face"
  - "fffuuu"
  - "trollface"
  - "mspaint comic"
  - "stick figure comic"
  - "4chan comic"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 3
---

# Rage comic

> Tell a small daily frustration in a few crude panels, with stock faces that every reader knows.

A short comic of 2 to 8 panels drawn in MS Paint with a set of crude faces that show one fixed emotion each. It began on 4chan in 2008 and filled Reddit and 9GAG until about 2015.

**Period:** 2008–2015 · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Rage faces, Rage guy comic, Fffuuu comic

## When to load this skill

Load it when the user asks for: "rage comic", "rage face", "fffuuu", "trollface", "mspaint comic", "stick figure comic", "4chan comic".

Good for: humour blogs, nostalgia posts, forum avatars, parody comics.

Do not use it when:
- The tone must stay polished or corporate.
- The audience wants a long story.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Rage comic, you MUST:

1. Divide the canvas into 2 to 6 panels in a grid of 2 columns, each with a 2px black line.
2. Draw faces as white ovals with a 3px black outline and a few hard strokes; no shading.
3. Use one stock face for each emotion: rage, joy, smug, disbelief, sadness.
4. Write dialogue in the panel as plain text at 16px to 20px, with no speech bubble.
5. Set the scene on a white ground with stick bodies in black lines of 3px.
6. Keep the drawing flat and rough; keep the lines wobbly at 2px to 3px off straight.
7. End on the last panel with the strongest face and a one-line result.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Polished vector art.
- **NEVER:** Shaded or coloured characters.
- **NEVER:** Long, plotted stories.
- **NEVER:** Realistic proportions.
- **NEVER:** Soft rounded fonts.
- **NEVER:** Decorative panel borders.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■□□` 3/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 2-column grid of 3 to 4 rows on a 600px wide white canvas; panels of 280px x 220px with 8px gutters.
- **Whitespace ratio:** White fills 100% of the panel ground; faces and stick figures use 30% of each panel.
- **Alignment rules:** Panels read left to right and top to bottom; text sits under or beside the face.
- **Container geometry:** Rectangular panels with a 0px radius and a 2px black border.

## Typography

- **Classifications:** humanist sans · handwriting
- **Tracking:** Body 0 to +0.01em.
- **Leading:** Dialogue 1.3.
- **Hierarchy rules:** Use one size for dialogue: 18px. · Use regular weight; bold marks a shouted word. · Use black text on white; no colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Comic Neue | Open Sans | An open sibling of Comic Sans, the usual face of the form. |
| Patrick Hand | Nunito | A looser hand for dialogue. |

## Colour & lighting

- **Palette structure:** Black line and white fill, with flat skin tone as the only colour.
- **Contrast rules:** Black on white gives 21:1.
- **Surface treatment:** Flat white with no texture; slight JPEG noise at the edges.
- **Light and shadow:** No shadow and no light.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Paper White | `#FFFFFF` | background |
| Line Black | `#000000` | line and text |
| Rage Red | `#D32F2F` | emphasis |
| Face Cream | `#FDF1E3` | face fill |
| Panel Grey | `#E6E6E6` | panel gap |

## Materiality & texture

- **Surface simulation:** A screen drawing from a mouse in a basic paint program, with hard pixel edges.
- **Border rules:** A 2px black line round each panel; a 3px outline on shapes.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** No icons; faces serve as icons.
- **Illustration:** Crude faces and stick bodies drawn with a mouse; no shading.
- **Decorative elements:** stock faces · stick figure · 2px panel grid

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static strip. A web version reveals one panel at a time each 800ms.
- **Easing:** steps(1, end)
- **Duration (ms):** 800
- **Hover and active:** Hover frames the panel with a 2px red line.

## Code & token primer

Set `data-style="rage-comic"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="rage-comic"] {
  --color-bg: #FFFFFF;
  --color-surface: #FDF1E3;
  --color-text: #000000;
  --color-muted: #444444;
  --color-primary: #D32F2F;
  --color-accent: #000000;
  --color-border: #000000;
  --font-sans: "Comic Neue", "Nunito", sans-serif;
  --font-display: "Patrick Hand", "Comic Neue", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(1, end);
  --duration: 800ms;
  --type-ratio: 1.25;
  --size-small: 14.4px;
  --size-h3: 28.13px;
  --size-h2: 35.16px;
  --size-h1: 43.95px;
  --color-on-bg: #000000;
  --color-on-surface: #000000;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #444444;
  --color-muted-on-surface: #444444;
  --color-link: #000000;
  --color-link-on-surface: #000000;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.3;
  --body-size: 18px;
  --icon-stroke: 3;
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
| page | `bg-white text-black font-sans antialiased px-4` |
| heading | `font-[Patrick_Hand] text-4xl leading-[1.2] text-black` |
| body | `text-lg leading-[1.3] max-w-prose` |
| card | `border-2 border-black bg-[#FDF1E3] p-2` |
| button | `rounded-none border-2 border-black bg-[#D32F2F] px-5 py-2 text-white hover:bg-black` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 3 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pepicons (Pop) by CyCraft, licence CC BY 4.0. Reason: A hand-drawn pop family with uneven strokes that match crude panel art. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.2, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 18px, leading 1.3.
- **Page:** hero stacked, left aligned, compact density, accent tilt 1°.
- **Ground:** xerox. A plain copied white sheet matches the paint-program ground. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Sketch line (process)

Lines with a small jitter and a double stroke, so that a drawing on a screen looks drawn by hand. Origin: internet, United States, 2008.

- Offset each line by 0.5 to 2 px at random points along its length.
- Draw each line twice with a small change, as a pencil does.
- Fill shapes with hatching at 45 degrees, not with flat colour.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **4chan** (platform, web, 2003–now), launched the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.
- **Reddit** (platform, web, 2005–now), published the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #D32F2F | #D32F2F, #000000 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #000000 | #000000, #D32F2F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.414 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more current**: move toward [`wojak-feels`](../wojak-feels/SKILL.md) (Wojak and feels). Keep the crude lines but use one grey-toned face and a single feeling per panel.
- If the user asks for **cleaner**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Redraw the faces as flat vector shapes with a limited palette of 4 colours.
- If the user asks for **more loud**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Replace the panels with one picture and outlined capital captions.

- **Came from (go here for a more orthodox version):** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Led to (go here for a newer version):** [`wojak-feels`](../wojak-feels/SKILL.md)
- **Kin in another domain:** [`ben-day-comic-print`](../ben-day-comic-print/SKILL.md)
- **Nearest by vector profile:** [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md), [`bauhaus`](../bauhaus/SKILL.md)

## Emotional target

The viewer recognises a small shared annoyance and laughs.

**Keywords:** crude, relatable, angry, everyday, amateur · **Brand archetypes:** everyman, jester

## Sources

- [Wikipedia: Rage comic](https://en.wikipedia.org/wiki/Rage_comic)
- Know Your Meme: Rage Comics

---

Generated from [`data/internet/styles/rage-comic.json`](../../data/internet/styles/rage-comic.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
