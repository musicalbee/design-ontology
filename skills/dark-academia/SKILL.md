---
name: dark-academia
description: "Apply the Dark academia style (2019–now) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: dark academia, gothic campus, old library, tweed, candlelight, the secret history."
domain: internet
era: feed-mobile
triggers:
  - "dark academia"
  - "gothic campus"
  - "old library"
  - "tweed"
  - "candlelight"
  - "the secret history"
  - "poetry"
  - "classical study"
vector_profile:
  ornamentation: 4
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 4
  typographic_expressiveness: 4
---

# Dark academia

> Treat study as a dark, romantic rite: books, old stone and candlelight make the learned life feel fated.

Old libraries, candlelight, tweed, leather books, Latin and brown-green gloom in a romantic dream of a classical college. It spread on Tumblr and TikTok after 2019 and takes much from The Secret History.

**Period:** 2019–now · **Era:** The feed and the phone · **Domain:** Internet · **Also called:** Dark academia aesthetic, Gothic campus

## When to load this skill

Load it when the user asks for: "dark academia", "gothic campus", "old library", "tweed", "candlelight", "the secret history", "poetry", "classical study".

Good for: bookshops and literary magazines, university and society pages, writing and study tools, stationery and tea brands.

Do not use it when:
- The product needs a light, playful or fast tone.
- The audience reads on small screens in bright light.
- The page needs high-key, clinical clarity.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Dark academia, you MUST:

1. Set the ground in dark brown (#1E1712) or deep green (#16241C), never in pure black.
2. Use aged paper (#E9DCC0) for text areas and brass (#B08D57) for rules and highlights.
3. Pair a high-contrast serif for headings with an old-style serif for text; set headings in small capitals or italic.
4. Light photographs from one warm source, a candle or a window, at a 4:1 shadow ratio and with a vignette of 20%.
5. Show objects of study: a stacked book, a quill, a skull, a plaster bust, a Latin line at 12px with 0.2em tracking.
6. Frame content with a thin 1px brass line and an inner 4px gap, like a book plate.
7. Add a Roman numeral or a Latin motto in each section head.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Bright, saturated colours.
- **NEVER:** Rounded bubble type.
- **NEVER:** Glossy plastic and neon.
- **NEVER:** Flat white minimal surfaces.
- **NEVER:** Cheerful stock photography.
- **NEVER:** Playful stickers.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■■■□` 4/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A centred column of 680px with a 12-column base and 24px gutters; plates and footnotes sit in the margins.
- **Whitespace ratio:** 25% to 35% of the surface stays empty; the spacing scale is 8, 16, 32 and 48px.
- **Alignment rules:** Justified or flush-left text with a drop cap; headings centred over a rule.
- **Container geometry:** Rectangles with a 2px radius, a double border (1px brass, 4px gap, 1px brass) and an arch top on one hero image.

## Typography

- **Classifications:** high-contrast serif · old-style serif · small capitals
- **Tracking:** Display 0.04em; small caps 0.12em; body 0.
- **Leading:** Display 1.15; body 1.65.
- **Hierarchy rules:** Use weights 400 and 700. · Use sizes 16, 20, 32 and 64px. · Set section heads in small capitals with 0.12em tracking. · Start the first paragraph with a drop cap of 3 lines.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Playfair Display | EB Garamond | A sharp, high-contrast display serif with a classical text face. |
| Cormorant SC | Crimson Pro | Small capitals with a calm text serif for a book look. |
| IM Fell English | EB Garamond | A face from old English printing for a worn page. |

## Colour & lighting

- **Palette structure:** Dark brown and forest green with aged paper, brass and a deep burgundy.
- **Contrast rules:** Aged paper on study brown holds 12:1; dust holds 6:1; brass carries rules and large headings, burgundy carries fills with paper text.
- **Surface treatment:** Flat dark fills with a warm vignette and a 4% paper grain; photographs carry a brown-green tone.
- **Light and shadow:** One warm point source; a glow of 24px blur in #E9B872 at 20%; the shadows stay deep and soft.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Study Brown | `#1E1712` | background |
| Leather | `#2E2219` | surface |
| Aged Paper | `#E9DCC0` | text |
| Brass | `#B08D57` | primary |
| Burgundy | `#7A2B34` | accent |
| Library Green | `#16241C` | second ground |
| Dust | `#B9AA8C` | muted text |
| Candle | `#E9B872` | highlight |

## Materiality & texture

- **Surface simulation:** Leather, aged paper, wood panelling, brass, stone and wax.
- **Border rules:** A 1px brass line, a 4px gap and a second 1px line on plates; corners with small ornaments.
- **Blur and elevation:** A shadow of 0 12px 32px at 40% black; no glass and no neon.

## Ornamentation & iconography

- **Iconography:** Fine outline icons at 24px with 1.25px strokes and square caps; Roman numerals as list markers.
- **Illustration:** Engravings of books, skulls, moths, busts and arches; a candle flame; a Latin motto in italic.
- **Decorative elements:** brass double rule · drop cap · Latin motto · book plate frame · candle glow · wax seal

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Slow, candle-like: fades of 500ms; a glow breathes between 18% and 24% at 4s loops.
- **Easing:** cubic-bezier(0.4, 0, 0.2, 1)
- **Duration (ms):** 500
- **Hover and active:** Hover warms a link to brass and adds a 1px underline; active state dims the glow.

## Code & token primer

Set `data-style="dark-academia"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="dark-academia"] {
  --color-bg: #1E1712;
  --color-surface: #2E2219;
  --color-text: #E9DCC0;
  --color-muted: #B9AA8C;
  --color-primary: #B08D57;
  --color-accent: #7A2B34;
  --color-border: #B08D57;
  --font-sans: "EB Garamond", "Crimson Pro", Georgia, serif;
  --font-display: "Playfair Display", "Cormorant SC", Georgia, serif;
  --border-radius: 2px;
  --border-width: 1px;
  --shadow-elevation: 0 12px 32px rgba(0, 0, 0, 0.4);
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --duration: 500ms;
  --type-ratio: 1.333;
  --size-small: 12.75px;
  --size-h3: 30.21px;
  --size-h2: 40.27px;
  --size-h1: 53.67px;
  --color-on-bg: #E9DCC0;
  --color-on-surface: #E9DCC0;
  --color-on-primary: #1E1712;
  --color-on-accent: #E9DCC0;
  --color-muted-on-bg: #B9AA8C;
  --color-muted-on-surface: #B9AA8C;
  --color-link: #B08D57;
  --color-link-on-surface: #B08D57;
  --display-weight: 700;
  --subhead-weight: 400;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 400;
  --display-tracking: 0.04em;
  --display-leading: 1.15;
  --display-case: none;
  --body-leading: 1.65;
  --body-size: 17px;
  --icon-stroke: 1.25;
  --ground: radial-gradient(130% 95% at 50% 0%, transparent 58%, color-mix(in oklab, var(--color-on-bg) 9%, transparent)),
    url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'220'%20height%3D'220'%3E%3Cfilter%20id%3D'n'%3E%3CfeTurbulence%20type%3D'fractalNoise'%20baseFrequency%3D'.8'%20numOctaves%3D'3'%20stitchTiles%3D'stitch'%2F%3E%3CfeColorMatrix%20values%3D'0%200%200%200%201%200%200%200%200%201%200%200%200%200%201%200.22%200%200%200%200'%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D'100%25'%20height%3D'100%25'%20filter%3D'url(%23n)'%2F%3E%3C%2Fsvg%3E") 0 0 / 220px 220px repeat,
    radial-gradient(circle at 90% 112%, color-mix(in oklab, var(--color-accent) 34%, transparent) 0 34vmin, transparent calc(34vmin + 1px)),
    radial-gradient(circle at 90% 112%, transparent 0 40vmin, color-mix(in oklab, var(--color-primary) 30%, transparent) 40vmin calc(40vmin + 2px), transparent calc(40vmin + 2px)),
    radial-gradient(55% 60% at 88% 18%, color-mix(in oklab, var(--color-accent) 22%, transparent), transparent 70%),
    radial-gradient(45% 50% at 70% 95%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#1E1712] text-[#E9DCC0] font-serif antialiased px-6 md:px-12` |
| heading | `font-[family-name:Playfair_Display] text-4xl md:text-6xl font-bold leading-[1.15] tracking-[0.04em] text-center` |
| body | `text-[17px] leading-[1.65] max-w-[42rem]` |
| section | `rounded-sm border border-[#B08D57] bg-[#2E2219] p-8 outline outline-1 outline-offset-4 outline-[#B08D57]` |
| button | `rounded-sm border border-[#B08D57] bg-[#7A2B34] px-6 py-3 text-sm uppercase tracking-[0.12em] text-[#E9DCC0] hover:bg-[#B08D57] hover:text-[#1E1712]` |
| label | `text-xs uppercase tracking-[0.12em] text-[#B08D57]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.25 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Solar (Linear) by 480 Design, licence CC BY 4.0. Reason: A fine linear set whose thin strokes sit well beside serif type and engravings. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0.04em, leading 1.15, case: none.
- **Weights:** display 700, subhead 400, body 400, bold in text 700, labels and buttons 400. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 17px, leading 1.65.
- **Page:** hero split, left aligned, regular density, accent tilt 0°.
- **Ground:** paper. Dark academia stands on a dark, paper-like ground, the page of an old book in low light. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Chiaroscuro (process)

A hard contrast of light and dark that models form: one strong source, deep shadow and a small area of light. Origin: painting, Italy, c. 1500.

- Light the subject from one hard source at 30° to 60° above and to the side; let the shadow side fall to near black.
- Keep the light on 20% to 30% of the frame and let the rest sink into shadow.
- Set the key light to fill light at a ratio of 8:1 or more for a dramatic mood.
- Cut hard shapes into the light with blinds, grilles or foliage so that the shadow becomes a pattern.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **TikTok** (platform, web, 2016–now), published the style. A video app of short vertical clips. Its feed set the form of vertical short-form video and spread the camcorder revival.
- **Tumblr** (platform, web, 2007–now), launched the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #B08D57 | #B08D57, #7A2B34, #E9DCC0 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #7A2B34 | #7A2B34, #B08D57, #E9B872 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 2px | 0–6 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.25–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter**: move toward [`cottagecore`](../cottagecore/SKILL.md) (Cottagecore). Lift the ground to cream, swap brass for sage and keep the serif.
- If the user asks for **more modern**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Switch to a white ground and black serif headings with large margins.
- If the user asks for **more gothic**: move toward [`victorian-web`](../victorian-web/SKILL.md) (Victorian Web). Add ornate borders, dense engraved panels and a blackletter initial.

- **Rejects (the opposite pole; do not blend):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`cottagecore`](../cottagecore/SKILL.md)
- **Kin in another domain:** [`gothic-architecture`](../gothic-architecture/SKILL.md), [`ivy-style`](../ivy-style/SKILL.md), [`romanticism-painting`](../romanticism-painting/SKILL.md), [`victorian-interior`](../victorian-interior/SKILL.md), [`victorian-web`](../victorian-web/SKILL.md)
- **Nearest by vector profile:** [`barbiecore`](../barbiecore/SKILL.md), [`cottagecore`](../cottagecore/SKILL.md), [`geocities-homepage`](../geocities-homepage/SKILL.md)

## Emotional target

The viewer feels learned, brooding and drawn to a private, romantic world of books.

**Keywords:** moody, scholarly, romantic, gothic, nostalgic, candlelit · **Brand archetypes:** sage, magician, lover

## Sources

- [Know Your Meme: Dark Academia](https://knowyourmeme.com/memes/subcultures/dark-academia)
- [Wikipedia: Dark academia](https://en.wikipedia.org/wiki/Dark_academia)
- Donna Tartt, The Secret History (Alfred A. Knopf, 1992)

---

Generated from [`data/internet/styles/dark-academia.json`](../../data/internet/styles/dark-academia.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
