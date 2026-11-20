---
name: wojak-feels
description: "Apply the Wojak and feels style (2010–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: wojak, feels guy, npc meme, doomer, bloomer, soyjak."
domain: internet
era: web-2-social
triggers:
  - "wojak"
  - "feels guy"
  - "npc meme"
  - "doomer"
  - "bloomer"
  - "soyjak"
  - "crying wojak"
  - "mood face"
vector_profile:
  ornamentation: 1
  dimensionality: 2
  grid_rigidity: 2
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Wojak and feels

> Reduce a mood to one drawn face and a short label, so that a reader sees the feeling at once.

A bald, line-drawn face in grey and cream with an exact emotion, set in a flat panel with a caption. It started on imageboards around 2010 and now stands for many roles. This entry covers its neutral drawing form only.

**Period:** 2010–now · **Era:** Web 2.0 and the social web · **Domain:** Internet · **Also called:** Wojak, Feels guy, Doomer-bloomer family

## When to load this skill

Load it when the user asks for: "wojak", "feels guy", "npc meme", "doomer", "bloomer", "soyjak", "crying wojak", "mood face".

Good for: mood comparisons, market jokes, social posts, group chat images.

Do not use it when:
- The audience may read the face as a hate sign; use only neutral mood versions.
- The brand needs a polished voice.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Wojak and feels, you MUST:

1. Draw the face as a bald outline of 2px black on a flat cream (#F5E6D3) fill, with 5 to 8 facial lines.
2. Show one emotion in each panel through the brows, the mouth and a few tear or sweat marks.
3. Put the figure on a flat single-colour field, with the head at 40% to 60% of the height.
4. Add a label of 1 to 4 words in a plain sans-serif at 20px to 28px, in white or black.
5. Arrange comparison panels in 2 columns with a thin 2px divider.
6. Keep the lines slightly uneven, as hand-drawn by mouse.
7. Use grey and muted tints for the background; reserve one colour for emphasis.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Photographic faces.
- **NEVER:** Polished gradient rendering.
- **NEVER:** Many colours in one panel.
- **NEVER:** Decorative frames.
- **NEVER:** Long paragraphs of text.
- **NEVER:** Real names or private persons.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■□□□` 2/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A single square panel of 600px x 600px, or two panels side by side with a 2px divider.
- **Whitespace ratio:** The figure takes 50% of the panel; the field and label take the rest.
- **Alignment rules:** Centred figure; the label sits under the figure at 8% from the bottom.
- **Container geometry:** Rectangular panels with a 0px radius; a flat field with no border.

## Typography

- **Classifications:** neutral sans · grotesque
- **Tracking:** Label 0 to +0.02em.
- **Leading:** Label 1.2; one or two lines.
- **Hierarchy rules:**
  - Use one label size: 24px.
  - Use medium weight (500) for the label.
  - Use white text on dark fields and black text on light fields.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | Roboto | A plain neutral sans that stays out of the way of the face. |
| Work Sans | Open Sans | A slightly wider sans for labels. |

## Colour & lighting

- **Palette structure:** A cream face and black line on one muted field; a second tint for the comparison panel.
- **Contrast rules:** White label on field grey gives 8.6:1; black line on cream gives 16:1.
- **Surface treatment:** Flat fills with no gradient; a faint 3% grain is allowed.
- **Light and shadow:** No light and no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Field Grey | `#4A4F57` | background |
| Face Cream | `#F5E6D3` | figure fill |
| Line Black | `#111111` | line |
| Tint Blue | `#6E8CA8` | second field |
| Mood Red | `#C0392B` | emphasis |

## Materiality & texture

- **Surface simulation:** A flat digital drawing from a paint program.
- **Border rules:** A 2px black outline round the figure; no panel border.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** No icons; tears and sweat marks serve as signs.
- **Illustration:** A bald head, a hooded or suited body; flat colour; no shading.
- **Decorative elements:** bald line head · tear mark · plain label

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static image. A short loop may swap two faces each 500ms.
- **Easing:** steps(1, end)
- **Duration (ms):** 500
- **Hover and active:** Hover swaps the face for the next mood.

## Code & token primer

Set `data-style="wojak-feels"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="wojak-feels"] {
  --color-bg: #4A4F57;
  --color-surface: #3A3E45;
  --color-text: #FFFFFF;
  --color-muted: #D7DAE0;
  --color-primary: #F5E6D3;
  --color-accent: #C0392B;
  --color-border: #111111;
  --font-sans: "Inter", "Roboto", sans-serif;
  --font-display: "Work Sans", "Inter", sans-serif;
  --border-radius: 0px;
  --border-width: 2px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: steps(1, end);
  --duration: 500ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #FFFFFF;
  --color-on-surface: #FFFFFF;
  --color-on-primary: #4A4F57;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #D7DAE0;
  --color-muted-on-surface: #D7DAE0;
  --color-link: #F5E6D3;
  --color-link-on-surface: #F5E6D3;
  --display-weight: 500;
  --subhead-weight: 500;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.4;
  --body-size: 16px;
  --icon-stroke: 2;
  --ground: radial-gradient(circle at 80% 46%, var(--color-bg) 0 20vmin, transparent calc(20vmin + 1px)),
    radial-gradient(circle at calc(80% + 3vmin) calc(46% + 3vmin), color-mix(in oklab, var(--color-on-bg) 16%, transparent) 0 18vmin, transparent 27vmin),
    radial-gradient(circle at calc(80% - 3vmin) calc(46% - 3vmin), rgba(255,255,255,.85) 0 18vmin, transparent 27vmin),
    radial-gradient(35% 40% at 96% 92%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 70%),
    radial-gradient(30% 35% at 60% 4%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#4A4F57] text-white font-sans antialiased px-6` |
| heading | `font-medium text-3xl md:text-5xl leading-[1.2] text-center text-white` |
| body | `text-base leading-[1.4] text-[#D7DAE0] max-w-prose` |
| card | `border-2 border-[#111] bg-[#3A3E45] p-4` |
| button | `rounded-none border-2 border-[#111] bg-[#F5E6D3] px-5 py-2 font-medium text-[#111] hover:bg-[#C0392B] hover:text-white` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Iconoir (Regular) by Luca Burgio, licence MIT. Reason: A plain hand-feel outline family that keeps the flat drawn tone. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 500, tracking 0em, leading 1.2, case: none.
- **Weights:** display 500, subhead 500, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 100 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.4.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** soft. A soft flat field keeps one muted colour behind the figure. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

- **4chan** (platform, web, 2003–now), published the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #F5E6D3 | #F5E6D3, #6E8CA8 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #C0392B | #C0392B, #F5E6D3 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more crude**: move toward [`rage-comic`](../rage-comic/SKILL.md) (Rage comic). Draw the face as a round rage face with thick lines and add 2 to 4 panels.
- If the user asks for **more refined**: move toward [`minimalism-web`](../minimalism-web/SKILL.md) (Minimalism Web). Reduce the drawing to a 1px outline on white with one label.
- If the user asks for **more surreal**: move toward [`surreal-meme`](../surreal-meme/SKILL.md) (Surreal meme). Place the figure in an odd scene with a strange crop and a calm caption.

- **Came from (go here for a more orthodox version):** [`rage-comic`](../rage-comic/SKILL.md)
- **Nearest by vector profile:** [`brutalist-web`](../brutalist-web/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md), [`net-art-browser`](../net-art-browser/SKILL.md)

## Emotional target

The viewer feels a clear, often sad or wry, mood and a sense of being understood.

**Keywords:** melancholic, wry, plain, relatable, flat · **Brand archetypes:** everyman, jester

## Sources

- [Wikipedia: Wojak](https://en.wikipedia.org/wiki/Wojak)
- Know Your Meme: Wojak / Feels Guy

---

Generated from [`data/internet/styles/wojak-feels.json`](../../data/internet/styles/wojak-feels.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
