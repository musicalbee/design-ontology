---
name: usenet-thread
description: "Apply the Usenet Thread style (1980–1999) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: usenet, newsgroup, netnews, newsreader, quoted reply, plain text thread."
domain: internet
era: terminals-bbs
triggers:
  - "usenet"
  - "newsgroup"
  - "netnews"
  - "newsreader"
  - "quoted reply"
  - "plain text thread"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 5
  skeuomorphic_realism: 1
  typographic_expressiveness: 1
---

# Usenet Thread

> A discussion is a tree of plain-text replies, and each reply quotes the part that it answers.

A thread of plain-text posts in a newsgroup, read in a terminal newsreader: a tree of subject lines, quoted lines that start with >, and a signature under each post.

**Period:** 1980–1999 · **Era:** Terminals, BBS and Usenet · **Domain:** Internet · **Also called:** Newsgroup thread, Netnews, Threaded newsreader

## When to load this skill

Load it when the user asks for: "usenet", "newsgroup", "netnews", "newsreader", "quoted reply", "plain text thread".

Good for: developer mailing list and changelog pages, retro forum themes, text-first discussion tools, documentation with Q&A threads.

Do not use it when:
- The audience expects images and avatars.
- The page must sell a product.
- Readers use small phone screens only.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Usenet Thread, you MUST:

1. Set all text in one monospace face at one size, 80 characters to a line.
2. Show the thread as a tree of subject lines, with 2 spaces of indent for each reply level.
3. Start each quoted line with '> ', and add one more '>' for each older level.
4. Put a header block on each post: From, Newsgroups, Subject and Date, one field to a line.
5. End each post with a signature of at most 4 lines after a line of '-- '.
6. Mark the current line in the thread list with reverse video: light text on a dark bar.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Proportional type and type sizes for hierarchy.
- **NEVER:** Images, avatars and icons in the post body.
- **NEVER:** Colour for meaning other than the cursor bar.
- **NEVER:** Quotes without the > mark.
- **NEVER:** Rounded cards and shadows.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■■■` 5/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■□□□□` 1/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A character grid of 80 columns by 24 rows; the thread list fills the top half and the post fills the bottom half.
- **Whitespace ratio:** 20% to 30% of the screen stays empty, mostly at the right end of short lines.
- **Alignment rules:** All text aligns left on the character grid; replies indent 2 characters for each level of the tree.
- **Container geometry:** No containers; a rule of '-' or '=' characters separates the list and the post.

## Typography

- **Classifications:** monospace · terminal
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.2; body 1.35.
- **Hierarchy rules:**
  - Use one size for all text.
  - Show hierarchy with indent, with capitals and with reverse video only.
  - Put header field names in bold or in the muted colour.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| IBM Plex Mono | IBM Plex Mono | One monospace face for all text, as on a terminal. |
| VT323 | Courier Prime | A terminal face for headers and a typewriter face for the text. |

## Colour & lighting

- **Palette structure:** A dark terminal ground with one text colour and one highlight colour; 3 to 4 colours in all.
- **Contrast rules:** Light grey on black is 14:1; quoted text in mid grey is 5:1 and stays readable.
- **Surface treatment:** A flat dark screen with no texture.
- **Light and shadow:** No light source and no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Terminal Black | `#101010` | background |
| Panel Grey | `#1C1C1C` | panel |
| Phosphor White | `#D8D8D0` | text |
| Quote Grey | `#8A8A80` | muted |
| Amber | `#FFB000` | highlight |
| Cursor Green | `#33FF66` | accent |

## Materiality & texture

- **Surface simulation:** A text terminal: glyphs on a flat dark screen.
- **Border rules:** Rules made of '-' and '=' characters; no drawn borders.
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** No icons; status flags are letters in a column: N for new, R for read, + for a reply.
- **Illustration:** ASCII art in a signature only, at most 4 lines.
- **Decorative elements:** quote marks > · signature block · header fields · thread tree · reverse-video bar

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** The screen redraws at once when the reader moves to the next post; the cursor blinks at 1Hz.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 0
- **Hover and active:** The selected line shows in reverse video; there is no hover.

## Code & token primer

Set `data-style="usenet-thread"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="usenet-thread"] {
  --color-bg: #101010;
  --color-surface: #1C1C1C;
  --color-text: #D8D8D0;
  --color-muted: #8A8A80;
  --color-primary: #FFB000;
  --color-accent: #33FF66;
  --color-border: #3A3A36;
  --font-sans: "IBM Plex Mono", "Courier New", monospace;
  --font-display: "VT323", "IBM Plex Mono", monospace;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 0ms;
  --type-ratio: 1.125;
  --size-small: 13.33px;
  --size-h3: 18.98px;
  --size-h2: 21.36px;
  --size-h1: 24.03px;
  --color-on-bg: #D8D8D0;
  --color-on-surface: #D8D8D0;
  --color-on-primary: #101010;
  --color-on-accent: #101010;
  --color-muted-on-bg: #8A8A80;
  --color-muted-on-surface: #8A8A80;
  --color-link: #33FF66;
  --color-link-on-surface: #33FF66;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.35;
  --body-size: 15px;
  --icon-stroke: 1.5;
  --ground: repeating-linear-gradient(0deg, color-mix(in oklab, var(--color-primary) 7%, transparent) 0 1px, transparent 1px 3px),
    radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,.55)),
    radial-gradient(50% 55% at 72% 40%, color-mix(in oklab, var(--color-primary) 16%, transparent), transparent 70%),
    radial-gradient(35% 40% at 20% 85%, color-mix(in oklab, var(--color-accent) 10%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#101010] text-[#D8D8D0] font-mono px-2 md:px-6` |
| heading | `text-base font-bold uppercase text-[#FFB000]` |
| body | `text-[15px] leading-[1.35] max-w-[80ch]` |
| section | `border-t border-dashed border-[#3A3A36] py-2` |
| button | `rounded-none bg-[#D8D8D0] px-2 text-[#101010] hover:bg-[#FFB000]` |
| label | `text-xs text-[#8A8A80]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, square caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Square pixel icons fit a character grid. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.2, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is case and tracking: an upper-case label is the accent, so the weights stay few.
- **Body type:** 15px, leading 1.35.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** scanlines. A terminal screen: dark rows of glyphs with faint scan lines. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Threaded discussion (technology, invented here)

Replies are stored as a tree: each reply points to the post that it answers, so a reader can follow one branch of a talk. Origin: internet, Durham, North Carolina, 1980.

- Give each post an id and give each reply the id of its parent.
- Show the tree with one indent for each level.
- Quote or link the parent post in each reply.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Duke University** (school, Durham, North Carolina, 1838–now), launched the style. A university in North Carolina. Two of its graduate students planned Usenet there in 1979.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #FFB000 | #FFB000, #33FF66, #D8D8D0 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #33FF66 | #33FF66, #FFB000, #66CCFF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.125 | 1.067–1.2 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **add a web forum**: move toward [`bulletin-board-forum`](../bulletin-board-forum/SKILL.md) (Bulletin Board Forum). Put the posts in a table with a user column, an avatar and a post count.
- If the user asks for **more art**: move toward [`ansi-bbs-art`](../ansi-bbs-art/SKILL.md) (ANSI BBS Art). Add ANSI colour blocks and a drawn banner at the top.

- **Led to (go here for a newer version):** [`bulletin-board-forum`](../bulletin-board-forum/SKILL.md), [`reddit-thread`](../reddit-thread/SKILL.md)
- **Mixes well with:** [`kaomoji-emoticon`](../kaomoji-emoticon/SKILL.md)
- **Nearest by vector profile:** [`tweet-screenshot-meme`](../tweet-screenshot-meme/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)

## Emotional target

The reader feels the slow, wordy and serious talk of the early net.

**Keywords:** textual, threaded, nerdy, argumentative, archival, plain · **Brand archetypes:** sage, everyman

## Sources

- [Wikipedia: Usenet](https://en.wikipedia.org/wiki/Usenet)
- [Wikipedia: Usenet newsgroup](https://en.wikipedia.org/wiki/Usenet_newsgroup)

---

Generated from [`data/internet/styles/usenet-thread.json`](../../data/internet/styles/usenet-thread.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
