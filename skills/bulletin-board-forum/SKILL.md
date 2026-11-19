---
name: bulletin-board-forum
description: "Apply the Bulletin Board Forum style (c. 1996–2012) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: phpbb, vbulletin, web forum, message board, post count, forum signature."
domain: internet
era: web-1
triggers:
  - "phpbb"
  - "vbulletin"
  - "web forum"
  - "message board"
  - "post count"
  - "forum signature"
  - "board index"
vector_profile:
  ornamentation: 3
  dimensionality: 2
  grid_rigidity: 4
  skeuomorphic_realism: 2
  typographic_expressiveness: 2
---

# Bulletin Board Forum

> A forum is a club with rooms; each member carries a visible rank, a picture and a signature from post to post.

A web forum in tables: a list of boards in categories, topics with reply and view counts, and posts with a user column that shows an avatar, a rank, a post count and a signature.

**Period:** c. 1996–2012 · **Era:** Web 1.0 · **Domain:** Internet · **Also called:** phpBB forum, Web forum, Message board

## When to load this skill

Load it when the user asks for: "phpbb", "vbulletin", "web forum", "message board", "post count", "forum signature", "board index".

Good for: community and fan sites, support forums, game and hobby clubs, retro community themes.

Do not use it when:
- The product needs a modern mobile-first flow.
- The brand needs a premium tone.
- The talk is real-time chat.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Bulletin Board Forum, you MUST:

1. Show the index as a table of boards in categories, with columns for topics, posts and the last post.
2. Put each post in a two-column table row: the user column of 150px to 180px at the left, the post at the right.
3. Show in the user column an avatar of 80px to 100px, a rank title, a row of rank pips, the join date and the post count.
4. Put a signature under each post after a short rule, with an image banner of at most 468px by 60px.
5. Use a header band with the forum logo, and a breadcrumb line: Index > Board > Topic.
6. Mark a pinned topic with a pin icon and a locked topic with a lock icon in the topic list.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Endless scroll with no page numbers.
- **NEVER:** Posts with no author identity.
- **NEVER:** Large hero images.
- **NEVER:** Flat single-colour lists with no table rules.
- **NEVER:** Hidden reply counts.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■□` 4/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■■□□□` 2/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** Tables of fixed columns: a board list of 4 to 5 columns and a post table of 2 columns (user, post).
- **Whitespace ratio:** 10% to 20% of the page stays empty; the cell padding is 4px to 6px.
- **Alignment rules:** Text aligns left in the cells; counts align centre; the page is a column of 90% width or 960px.
- **Container geometry:** Rectangles with a 0px to 4px radius; table cells with 1px rules; category bars with a gradient header.

## Typography

- **Classifications:** humanist sans · system sans
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.2; body 1.45.
- **Hierarchy rules:**
  - Use sizes 11px, 12px and 13px for the tables and 18px for the topic title.
  - Set board names and usernames in bold link colour.
  - Set counts and dates in the small muted size.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Arimo | Arimo | Arimo is an open look-alike of Arial and Helvetica, the usual forum faces. |
| Open Sans | Noto Sans | A later forum theme with a softer sans. |

## Colour & lighting

- **Palette structure:** A pale page with blue header bands and alternate row tints; 5 to 6 colours.
- **Contrast rules:** Ink on white is 15:1; the forum blue on white is 8:1; white on the header blue is 6:1.
- **Surface treatment:** Flat table cells and a vertical gradient on the category bars.
- **Light and shadow:** No shadow on cells; a 1px light top edge on buttons.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Page Grey | `#E8ECF1` | background |
| Row White | `#FFFFFF` | panel |
| Row Tint | `#EEF3F8` | panel |
| Text Ink | `#1E2933` | text |
| Forum Blue | `#105289` | link |
| Header Blue | `#2A6496` | heading |
| Rank Orange | `#E86A10` | accent |

## Materiality & texture

- **Surface simulation:** A web table: ruled cells, tinted rows and small image buttons.
- **Border rules:** 1px rules in pale blue grey (#C7D2DD) on all cells.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** Small topic icons of 16px to 27px: a folder for a board, a pin, a lock and a 'new posts' dot.
- **Illustration:** Avatars of 80px to 100px, rank pip images and signature banners.
- **Decorative elements:** rank pips · avatar · signature banner · breadcrumb · category bar · quote box

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** Each click loads a new page; there is no animation except animated GIF avatars.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 0
- **Hover and active:** A link underlines on hover; a table row may tint on hover.

## Code & token primer

Set `data-style="bulletin-board-forum"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="bulletin-board-forum"] {
  --color-bg: #E8ECF1;
  --color-surface: #FFFFFF;
  --color-text: #1E2933;
  --color-muted: #5C6B7A;
  --color-primary: #105289;
  --color-accent: #E86A10;
  --color-border: #C7D2DD;
  --font-sans: "Arimo", Arial, Helvetica, sans-serif;
  --font-display: "Arimo", Arial, Helvetica, sans-serif;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 6px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 0ms;
  --type-ratio: 1.2;
  --size-small: 10.83px;
  --size-h3: 18.72px;
  --size-h2: 22.46px;
  --size-h1: 26.96px;
  --color-on-bg: #1E2933;
  --color-on-surface: #1E2933;
  --color-on-primary: #E8ECF1;
  --color-on-accent: #1E2933;
  --color-muted-on-bg: #5C6B7A;
  --color-muted-on-surface: #5C6B7A;
  --color-link: #105289;
  --color-link-on-surface: #105289;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.45;
  --body-size: 13px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-primary), var(--color-primary)) 0 0 / 100% 6px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 0 8px / 100% 2px no-repeat,
    linear-gradient(var(--color-accent), var(--color-accent)) 66% 0 / 2px 100% no-repeat,
    linear-gradient(color-mix(in oklab, var(--color-primary) 8%, transparent), color-mix(in oklab, var(--color-primary) 8%, transparent)) 100% 0 / 34% 100% no-repeat,
    repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-on-bg) 12%, transparent) 0 1px, transparent 1px 1.6rem),
    repeating-linear-gradient(90deg, color-mix(in oklab, var(--color-on-bg) 10%, transparent) 0 1px, transparent 1px 25%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#E8ECF1] text-[#1E2933] font-sans px-2 md:px-6` |
| heading | `text-lg font-bold text-[#105289]` |
| body | `text-[13px] leading-[1.45] max-w-[960px] mx-auto` |
| section | `rounded border border-[#C7D2DD] bg-white` |
| button | `rounded border border-[#C7D2DD] bg-[#EEF3F8] px-3 py-1 text-xs font-bold text-[#105289] hover:bg-white` |
| label | `text-[11px] text-[#5C6B7A]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Fluent UI System Icons (Filled, 24) by Microsoft Corporation, licence MIT. Reason: Small filled icons match the folder, pin and lock icons of a topic list. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.2, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 13px, leading 1.45.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** rules. A forum is ruled tables: thin lines between the rows. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### BBCode markup (technology)

A light markup for forum posts: the poster writes tags in square brackets, and the board changes them into safe HTML. Origin: internet, web, 1998.

- Write the format in square-bracket tags, for example [b]bold[/b] or [quote]...[/quote].
- Let the board change each tag into HTML and remove raw HTML from the post.
- Show a quote of the earlier post in a box with the name of its poster.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **phpBB** (platform, web, 2000–now), made the style. A free and open-source forum program, made by a development team. Its default theme, subSilver, gave many later forum themes their look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #105289 | #105289, #2A6496, #3B5998 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #E86A10 | #E86A10, #C0392B, #2E8B57 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 0–8 px | --border-radius |
| Grid step (`grid_step`) | 6px | 4–10 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more anonymous**: move toward [`anonymous-imageboard`](../anonymous-imageboard/SKILL.md) (Anonymous Imageboard). Remove the user column and avatars; put an image at the start of each post.
- If the user asks for **more modern**: move toward [`reddit-thread`](../reddit-thread/SKILL.md) (Reddit Thread). Replace the tables with nested comments and a vote column.
- If the user asks for **more personal**: move toward [`myspace-profile`](../myspace-profile/SKILL.md) (Myspace Profile). Move the user column to a profile page with a top friends grid.

- **Came from (go here for a more orthodox version):** [`usenet-thread`](../usenet-thread/SKILL.md)
- **Mixes well with:** [`portal-table-layout`](../portal-table-layout/SKILL.md)
- **Nearest by vector profile:** [`unicode-emoji`](../unicode-emoji/SKILL.md), [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md), [`discord-server`](../discord-server/SKILL.md)

## Emotional target

The reader feels at home in a club of regulars with ranks, in-jokes and long threads.

**Keywords:** communal, ranked, nostalgic, tabular, chatty, loyal · **Brand archetypes:** everyman, caregiver

## Sources

- [Wikipedia: Internet forum](https://en.wikipedia.org/wiki/Internet_forum)
- [Wikipedia: phpBB](https://en.wikipedia.org/wiki/PhpBB)

---

Generated from [`data/internet/styles/bulletin-board-forum.json`](../../data/internet/styles/bulletin-board-forum.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
