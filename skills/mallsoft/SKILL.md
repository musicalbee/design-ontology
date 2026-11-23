---
name: mallsoft
description: "Apply the Mallsoft style (2012–) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: mallsoft, mallwave, empty mall, dead mall, shopping mall nostalgia, elevator music."
domain: internet
era: feed-mobile
triggers:
  - "mallsoft"
  - "mallwave"
  - "empty mall"
  - "dead mall"
  - "shopping mall nostalgia"
  - "elevator music"
  - "retail lounge"
vector_profile:
  ornamentation: 2
  dimensionality: 3
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Mallsoft

> A mall with no people is a memory of a public place that sells and does not speak: the viewer feels at home and alone at once.

Empty shopping malls and lobbies in dull light, in photos that look like they date from the 1980s and 1990s. The pictures go with mall music and evoke loneliness and a cold, corporate space.

**Period:** 2012– · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Mallwave

## When to load this skill

Load it when the user asks for: "mallsoft", "mallwave", "empty mall", "dead mall", "shopping mall nostalgia", "elevator music", "retail lounge".

Good for: ambient and lo-fi music releases, video essays on retail and consumer culture, art and zine pages about public space, photo archives of lost interiors.

Do not use it when:
- The page must sell a product with urgency.
- The audience needs a bright, active tone.
- The page needs dense, fast reading.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Mallsoft, you MUST:

1. Use one photo of a mall interior from the 1980s or 1990s as the focal image, and set it at 70% to 85% of the viewport width.
2. Fade the photo: lower the contrast by 10% to 20%, warm the shadows and add a grain of 3% to 6%.
3. Set the ground in pale peach (#EFE4D6) with a floor of square tiles in 64px to 96px steps.
4. Use cool tube-light white (#F7FBFF) for the text panels and keep body text at 16px with a contrast of 7:1 or more.
5. Set headlines in a quiet geometric sans-serif at normal tracking, in lower case, with a small shop-sign tag above.
6. Add one line of fake mall notice text, such as an opening time or a floor name, under each main heading.
7. Leave 40% to 55% of the surface empty, so that the page feels like a hall with no people.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Neon pink and cyan glow.
- **NEVER:** Statues, sun discs and perspective grids.
- **NEVER:** Busy, loud promotion banners.
- **NEVER:** Crowds of happy shoppers.
- **NEVER:** Sharp modern photography.
- **NEVER:** Dense multi-column layouts.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■■□□` 3/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A calm 12-column grid with 32px gutters; one large photo spans 8 columns and a narrow text panel spans 4 columns.
- **Whitespace ratio:** 40% to 55% of the surface stays empty; the spacing scale is 8, 16, 32 and 64px.
- **Alignment rules:** Flush-left headlines and panels; the photo sits off centre, as a view down a hall.
- **Container geometry:** Panels with a 2px radius and a 1px pale edge; photo frames with a square corner; thin rules like shop-front edges.

## Typography

- **Classifications:** geometric sans · humanist sans · sign lettering
- **Tracking:** Display takes 0.02em; small tags take 0.14em; body stays at 0.01em.
- **Leading:** Display 1.1; body 1.6.
- **Hierarchy rules:**
  - Use two weights: regular (400) and semibold (600).
  - Use sizes 13, 16, 32 and 56px.
  - Set headlines in lower case.
  - Put a small upper-case tag with a floor or shop name above each main heading.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Jost | Work Sans | A geometric display face that echoes mall sign lettering, with a calm text face. |
| Josefin Sans | Source Sans 3 | A thin, wide-set face for floor signs, with a neutral text face. |
| Poppins | Nunito Sans | A round, friendly sign face for a soft corporate tone. |

## Colour & lighting

- **Palette structure:** Pale peach and warm beige for the hall, cool tube white for the panels, with a muted teal and a dusty rose as the only accents.
- **Contrast rules:** Text on peach marble holds at least 7:1; teal and rose carry headings and tags, not long text.
- **Surface treatment:** Flat pale colour with a faint tile pattern; photos with a faded, warm cast and fine grain.
- **Light and shadow:** Even overhead light with no hard shadow; a soft glow of 1px to 2px at the edge of panels.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Peach Marble | `#EFE4D6` | background |
| Fountain Teal | `#2F6F73` | primary |
| Dusty Rose | `#B0576B` | accent |
| Tube White | `#F7FBFF` | panel surface |
| Carpet Brown | `#6B4F3F` | second accent |
| Closed Shutter | `#8A8F94` | muted |

## Materiality & texture

- **Surface simulation:** A mall hall: polished tile floors, glass shop fronts, brushed metal rails and a ceiling of tube lights.
- **Border rules:** A 1px pale-grey rule on panels; a 2px rule under headings like a shop-front edge.
- **Blur and elevation:** No blur; panels sit flat with a 2px soft shadow at 8% opacity.

## Ornamentation & iconography

- **Iconography:** Thin outline icons at 24px with round terminals, in the style of mall directory signs: stairs, lift, bag, fountain.
- **Illustration:** Faded photos and video stills of mall halls, fountains, escalators and closed shop fronts; no drawn figures.
- **Decorative elements:** mall interior photo · square floor tiles · directory sign · fountain basin · shop-front rule

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Very slow, steady drifts: the photo pans by 2% in 30s; panels fade in over 800ms; no bounce.
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Duration (ms):** 800
- **Hover and active:** Hover lowers the contrast of the photo by 5% and underlines the label; active state darkens the panel by 4%.

## Code & token primer

Set `data-style="mallsoft"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="mallsoft"] {
  --color-bg: #EFE4D6;
  --color-surface: #F7FBFF;
  --color-text: #2B2420;
  --color-muted: #5B5148;
  --color-primary: #2F6F73;
  --color-accent: #B0576B;
  --color-border: #C9BBA8;
  --font-sans: "Work Sans", "Source Sans 3", sans-serif;
  --font-display: "Jost", "Josefin Sans", sans-serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 2px 6px rgba(43,36,32,0.08);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 800ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #2B2420;
  --color-on-surface: #2B2420;
  --color-on-primary: #EFE4D6;
  --color-on-accent: #FFFFFF;
  --color-muted-on-bg: #5B5148;
  --color-muted-on-surface: #5B5148;
  --color-link: #2F6F73;
  --color-link-on-surface: #B0576B;
  --display-weight: 600;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 600;
  --display-tracking: 0.02em;
  --display-leading: 1.1;
  --display-case: lowercase;
  --body-leading: 1.6;
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
| page | `bg-[#EFE4D6] text-[#2B2420] antialiased px-6 md:px-12` |
| heading | `text-4xl md:text-6xl font-semibold leading-[1.1]` |
| body | `text-base leading-[1.6] max-w-prose` |
| section | `border bg-[#F7FBFF] rounded-sm shadow-sm` |
| button | `rounded-sm border border-[#B0576B] bg-[#2F6F73] px-6 py-3 text-sm font-semibold text-[#EFE4D6]` |
| label | `text-xs uppercase tracking-[0.12em] text-[#B0576B]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: Thin outline icons with round ends read like the pictograms on a mall directory. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking 0.02em, leading 1.1, case: lowercase.
- **Weights:** display 600, subhead 400, body 400, bold in text 600, labels and buttons 600. The style uses 2 weights (400, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero split, left aligned, airy density, accent tilt 0°.
- **Ground:** tiles. A mall hall is a floor of square tiles under tube light; the ground repeats that floor. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Mall interior frame (motif, invented here)

A photo of an empty shopping mall, faded to look like a picture from the 1980s or 1990s, set as the one focal image beside a pale tiled ground. Origin: internet, web, c. 2012.

- Use one photo of a mall hall or lobby as the focal image and show no people.
- Lower the contrast by 10% to 20% and warm the shadows, so that the photo looks old.
- Set the photo off centre on a pale tiled ground with at least 40% empty space.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **4chan** (platform, web, 2003–now), gathered the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.
- **Reddit** (platform, web, 2005–now), gathered the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #2F6F73 | #EFE4D6, #F7FBFF, #2F6F73 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #B0576B | #B0576B, #2F6F73 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–4 px | --border-radius |
| Grid step (`grid_step`) | 8px | 6–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more neon**: move toward [`vaporwave`](../vaporwave/SKILL.md) (Vaporwave). Replace the peach with a violet ground; add a pink to cyan gradient, a perspective floor and a glow on headings.
- If the user asks for **cleaner**: move toward [`utopian-virtual`](../utopian-virtual/SKILL.md) (Utopian virtual). Replace the faded photo with a bright 3D render; use sky blue and white with glossy panels.
- If the user asks for **more upbeat**: move toward [`future-funk`](../future-funk/SKILL.md) (Future funk). Replace the mall photo with a warm anime sunset still; add pink and teal and a rounded sans face.

- **Nearest by vector profile:** [`dual-camera-snapshot`](../dual-camera-snapshot/SKILL.md), [`glassmorphism`](../glassmorphism/SKILL.md), [`unboxing-video`](../unboxing-video/SKILL.md)

## Emotional target

The viewer feels a calm, lonely nostalgia for a public place that no longer exists.

**Keywords:** lonely, calm, nostalgic, corporate, faded, hollow · **Brand archetypes:** innocent, sage, everyman

## Sources

- [Wikipedia: Mallsoft](https://en.wikipedia.org/wiki/Mallsoft)
- [Wikipedia: Vaporwave](https://en.wikipedia.org/wiki/Vaporwave)

---

Generated from [`data/internet/styles/mallsoft.json`](../../data/internet/styles/mallsoft.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
