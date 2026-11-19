---
name: starter-pack
description: "Apply the Starter pack style (2014–2019) when generating web pages, apps, memes, short video frames and other images of internet culture. Load when the user asks for: starter pack, starter pack meme, identity collage, what you own, kit meme, object grid."
domain: internet
era: touchscreen
triggers:
  - "starter pack"
  - "starter pack meme"
  - "identity collage"
  - "what you own"
  - "kit meme"
  - "object grid"
vector_profile:
  ornamentation: 3
  dimensionality: 1
  grid_rigidity: 4
  skeuomorphic_realism: 4
  typographic_expressiveness: 2
---

# Starter pack

> Describe a type of person as a kit of things you can buy, wear and say.

A white grid collage that lists the objects, clothes and habits of one type of person around a cut-out figure. It grew from Tumblr and Twitter in 2014 and became a general template for identity jokes.

**Period:** 2014–2019 · **Era:** Touchscreen · **Domain:** Internet · **Also called:** Starter pack meme, Identity collage

## When to load this skill

Load it when the user asks for: "starter pack", "starter pack meme", "identity collage", "what you own", "kit meme", "object grid".

Good for: social posts, magazine humour, brand parody, team culture slides.

Do not use it when:
- The subject is a real private person.
- The jokes stereotype a protected group.

## System directives

When generating web pages, apps, memes, short video frames and other images of internet culture in Starter pack, you MUST:

1. Divide a white canvas of 600px x 750px into a 3 x 3 grid of product cut-outs with 12px gutters.
2. Place a figure or a name label in the centre cell and put 5 to 8 object photos around it.
3. Cut each object out with a clean edge on a white ground, with no shadow.
4. Add a bold title at the top: "<Type> starter pack" in 40px black type.
5. Add a 14px caption under each object, in sentence case, with a brand or a habit.
6. Keep the object sizes within 20% of each other; the figure may be 1.5 times larger.
7. Use plain white for the ground and keep all photos in their own colours.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Dark backgrounds.
- **NEVER:** Soft overlapping layouts with no grid.
- **NEVER:** Handwritten decorations.
- **NEVER:** Real private persons as the figure.
- **NEVER:** Abstract objects with no real product.
- **NEVER:** Long paragraphs.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■■■□` 4/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A 3-column grid with 12px gutters on a 600px wide canvas; the centre cell holds the figure.
- **Whitespace ratio:** White ground fills 100% of the canvas; objects take 60% and text 15%.
- **Alignment rules:** Objects sit centred in their cells; captions align centre under each object.
- **Container geometry:** Rectangular cells with a 0px radius and no borders.

## Typography

- **Classifications:** neutral sans · bold grotesque
- **Tracking:** Title 0; captions +0.01em.
- **Leading:** Title 1.1; captions 1.3.
- **Hierarchy rules:** Use two sizes: 40px for the title and 14px for captions. · Use bold (700) for the title and regular (400) for captions. · Use black text on white; no other colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Montserrat | Open Sans | A clean bold sans for the title and a plain sans for captions. |
| Poppins | Roboto | A geometric pair that suits a product grid. |

## Colour & lighting

- **Palette structure:** White ground, black text; the colour comes from the product photos.
- **Contrast rules:** Black on white gives 18:1; caption grey #555555 on white gives 7.5:1.
- **Surface treatment:** Flat white; photos keep their own colour and light.
- **Light and shadow:** Soft studio light on each cut-out; no shadow on the ground.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Canvas White | `#FFFFFF` | background |
| Title Black | `#111111` | text |
| Caption Grey | `#555555` | secondary text |
| Product Pink | `#F4B6C2` | sample object tone |
| Product Blue | `#4C8BF5` | sample object tone |

## Materiality & texture

- **Surface simulation:** A product catalogue page of cut-out photos.
- **Border rules:** No borders; the gutters are white space.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** No icons; the objects serve as icons.
- **Illustration:** Cut-out product photos and brand logos on white.
- **Decorative elements:** cut-out object · centre figure · caption line

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Static image. A web version pops each object in 120ms apart.
- **Easing:** cubic-bezier(0.2, 0.8, 0.2, 1)
- **Duration (ms):** 300
- **Hover and active:** Hover scales an object by 4% and shows its caption in black.

## Code & token primer

Set `data-style="starter-pack"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="starter-pack"] {
  --color-bg: #FFFFFF;
  --color-surface: #F6F6F6;
  --color-text: #111111;
  --color-muted: #555555;
  --color-primary: #4C8BF5;
  --color-accent: #F4B6C2;
  --color-border: #E0E0E0;
  --font-sans: "Open Sans", "Roboto", sans-serif;
  --font-display: "Montserrat", "Poppins", sans-serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 12px;
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration: 300ms;
  --type-ratio: 1.25;
  --size-small: 11.2px;
  --size-h3: 21.88px;
  --size-h2: 27.34px;
  --size-h1: 34.18px;
  --color-on-bg: #111111;
  --color-on-surface: #111111;
  --color-on-primary: #111111;
  --color-on-accent: #111111;
  --color-muted-on-bg: #555555;
  --color-muted-on-surface: #555555;
  --color-link: #111111;
  --color-link-on-surface: #111111;
  --display-weight: 700;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 500;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.3;
  --body-size: 14px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 86% 22% / 26vmin 26vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) calc(86% + 14px) calc(22% + 14px) / 26vmin 26vmin no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 68% 82% / 18vmin 14vmin no-repeat,
    linear-gradient(var(--color-on-bg), var(--color-on-bg)) calc(68% + 10px) calc(82% + 10px) / 18vmin 14vmin no-repeat,
    repeating-linear-gradient(-45deg, color-mix(in oklab, var(--color-on-bg) 8%, transparent) 0 2px, transparent 2px 14px),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#111] font-sans antialiased px-6` |
| heading | `font-[Montserrat] text-4xl md:text-5xl font-bold leading-[1.1] text-center` |
| body | `text-sm leading-[1.3] text-[#555]` |
| card | `bg-[#F6F6F6] p-3 grid place-items-center` |
| button | `rounded-none bg-[#4C8BF5] px-5 py-2 text-sm font-medium text-black hover:scale-[1.04] transition-transform duration-300` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, round caps, round joins, container: rounded. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Fill) by Phosphor Icons, licence MIT. Reason: A solid object family that reads as a catalogue of small products. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 600, body 400, bold in text 700, labels and buttons 500. The style uses 4 weights (400, 500, 600, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 14px, leading 1.3.
- **Page:** hero stacked, center aligned, regular density, accent tilt 0°.
- **Ground:** blocks. Evenly sized blocks echo the cells of a catalogue grid. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Cut-out composite (montage)

Cut-out photos placed on a flat or photo ground at a chosen odd scale. Origin: internet, United States, 1990.

- Cut the subject out with a clean or deliberately rough edge of 1 to 2px.
- Place it on a flat colour or a second photo.
- Scale it 20% to 400% out of true size.
- Add 3% to 8% grain over all layers.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Tumblr** (platform, web, 2007–now), published the style. A microblog site of reblogged images. Vaporwave and other net aesthetics grew in its image feeds.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #4C8BF5 | #4C8BF5, #F4B6C2, #111111 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #F4B6C2 | #F4B6C2, #4C8BF5 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 12px | 8–16 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more minimal**: move toward [`flat-design`](../flat-design/SKILL.md) (Flat Design). Replace photos with flat icons in 4 colours and keep the 3 x 3 grid.
- If the user asks for **more messy**: move toward [`scrapbook-ui`](../scrapbook-ui/SKILL.md) (Scrapbook UI). Overlap the objects, add tape and tilt them by 2 to 4 degrees.
- If the user asks for **more text**: move toward [`tweet-screenshot-meme`](../tweet-screenshot-meme/SKILL.md) (Tweet screenshot meme). Replace the objects with a single post card and a short joke.

- **Came from (go here for a more orthodox version):** [`impact-image-macro`](../impact-image-macro/SKILL.md)
- **Mixes well with:** [`tweet-screenshot-meme`](../tweet-screenshot-meme/SKILL.md)
- **Nearest by vector profile:** [`instagram-vintage-filter`](../instagram-vintage-filter/SKILL.md), [`flat-lay-feed`](../flat-lay-feed/SKILL.md), [`clean-girl`](../clean-girl/SKILL.md)

## Emotional target

The viewer sees themselves or a friend in the kit and laughs with recognition.

**Keywords:** relatable, catalogue, identity, playful, consumer · **Brand archetypes:** everyman, jester

## Sources

- Know Your Meme: Starter Packs
- [Wikipedia: Internet meme](https://en.wikipedia.org/wiki/Internet_meme)

---

Generated from [`data/internet/styles/starter-pack.json`](../../data/internet/styles/starter-pack.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
