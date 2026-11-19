---
name: anonymous-imageboard
description: "Apply the Anonymous Imageboard style (2003–) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: 4chan, imageboard, chan board, greentext, anonymous board, futaba."
domain: internet
era: web-1
triggers:
  - "4chan"
  - "imageboard"
  - "chan board"
  - "greentext"
  - "anonymous board"
  - "futaba"
  - ">>"
vector_profile:
  ornamentation: 2
  dimensionality: 1
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Anonymous Imageboard

> Nobody has a name, so only the post counts; the newest reply keeps a thread alive.

An anonymous board where each thread starts with an image: a pale page, posts with no account, post numbers, green quoted lines and threads that bump to the top and then fall off.

**Period:** 2003– · **Era:** Web 1.0 · **Domain:** Internet · **Also called:** Chan board, 4chan board, Futaba-style board

## When to load this skill

Load it when the user asks for: "4chan", "imageboard", "chan board", "greentext", "anonymous board", "futaba", ">>".

Good for: meme and parody pages, internet history exhibits, anonymous feedback boards, retro image galleries.

Do not use it when:
- The audience needs trust or safety.
- The brand needs identity and authorship.
- The content must stay archived.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Anonymous Imageboard, you MUST:

1. Start each thread with an image thumbnail of at most 250px at the left of the first post.
2. Sign each post 'Anonymous' with a date and a post number such as No.123456789.
3. Set a line that starts with > in green (#789922) as a quote or a story line.
4. Link a reply to an earlier post with >>123456789 in the link colour.
5. Put replies in boxes of a slightly darker tint than the page, stacked under the first post.
6. Show at most 10 pages of threads; a thread with a new reply moves to the top, and the last thread is deleted.
7. Use a centred board title at the top, with a short banner image above it.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** User accounts, avatars and like counts.
- **NEVER:** Polished brand typography.
- **NEVER:** Infinite feeds that keep old threads.
- **NEVER:** Large white space and soft cards.
- **NEVER:** Algorithmic ranking.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** One full-width column; each thread is the first post with its image floated left, then reply boxes stacked under it.
- **Whitespace ratio:** 10% to 20% of the page stays empty; reply boxes have 2px to 4px padding.
- **Alignment rules:** Posts align left; the board title and the post form are centred.
- **Container geometry:** Reply boxes are rectangles with a 0px radius and a 1px border at the right and bottom only.

## Typography

- **Classifications:** system sans · default serif
- **Tracking:** Display -0.02em; body 0em.
- **Leading:** Display 1.1; body 1.35.
- **Hierarchy rules:**
  - Use 13px for posts and 28px for the board title.
  - Set the subject in bold blue and the name 'Anonymous' in bold green.
  - Set post numbers and dates at the post size, with no extra weight.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Tinos | Arimo | A default serif title and an Arial-like text, as on a stock board. |
| Arimo | Arimo | One sans for all text, as on the work-safe boards. |

## Colour & lighting

- **Palette structure:** One of two stock themes: a pale peach page with maroon text, or a pale blue page with navy text; green for quotes.
- **Contrast rules:** Maroon on peach is 10:1; quote green on peach is 3.6:1 and stays for short lines only.
- **Surface treatment:** Flat tinted boxes with no texture.
- **Light and shadow:** No light source and no shadow.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Peach | `#FFFFEE` | background |
| Reply Tan | `#F0E0D6` | panel |
| Maroon | `#800000` | text |
| Quote Green | `#789922` | accent |
| Name Green | `#117743` | highlight |
| Subject Blue | `#0F0C5D` | heading |
| Title Red | `#AF0A0F` | title |

## Materiality & texture

- **Surface simulation:** A plain HTML page with JPEG thumbnails.
- **Border rules:** A 1px border at the right and bottom of a reply box (#D9BFB7).
- **Blur and elevation:** No blur and no elevation.

## Ornamentation & iconography

- **Iconography:** Almost none: a small sticky pin, a lock and country flags of 16px by 11px on some boards.
- **Illustration:** The posted images: reaction faces, memes and photos, in thumbnails that expand on click.
- **Decorative elements:** greentext · post number · reply link >> · image thumbnail · board banner · Anonymous name

## Motion & interactivity

- **Born on screen:** no — the values here translate a print style for screen
- **Transition physics:** No animation; a clicked thumbnail expands at once to the full image.
- **Easing:** cubic-bezier(0, 0, 1, 1)
- **Duration (ms):** 0
- **Hover and active:** Hover on a >> link shows the quoted post in a floating box.

## Code & token primer

Set `data-style="anonymous-imageboard"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="anonymous-imageboard"] {
  --color-bg: #FFFFEE;
  --color-surface: #F0E0D6;
  --color-text: #800000;
  --color-muted: #789922;
  --color-primary: #0F0C5D;
  --color-accent: #117743;
  --color-border: #D9BFB7;
  --font-sans: "Arimo", Arial, Helvetica, sans-serif;
  --font-display: "Tinos", "Times New Roman", serif;
  --border-radius: 0px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0, 0, 1, 1);
  --duration: 0ms;
  --type-ratio: 1.333;
  --size-small: 9.75px;
  --size-h3: 23.1px;
  --size-h2: 30.79px;
  --size-h1: 41.05px;
  --color-on-bg: #800000;
  --color-on-surface: #800000;
  --color-on-primary: #FFFFEE;
  --color-on-accent: #FFFFEE;
  --color-muted-on-bg: #A64D47;
  --color-muted-on-surface: #A24340;
  --color-link: #117743;
  --color-link-on-surface: #0F0C5D;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.1;
  --display-case: none;
  --body-leading: 1.35;
  --body-size: 13px;
  --icon-stroke: 2;
  --ground: linear-gradient(var(--color-accent), var(--color-accent)) 0 0 / 100% 6px no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat,
    repeating-linear-gradient(0deg, var(--color-on-bg) 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat,
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-[#FFFFEE] text-[#800000] font-sans px-2` |
| heading | `text-[28px] font-bold tracking-[-0.02em] text-[#AF0A0F] text-center font-serif` |
| body | `text-[13px] leading-[1.35]` |
| section | `bg-[#F0E0D6] border-r border-b border-[#D9BFB7] p-1` |
| button | `rounded-none border border-[#800000] bg-[#F0E0D6] px-2 text-xs text-[#800000] hover:bg-[#FFFFEE]` |
| label | `text-xs font-bold text-[#117743]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** solid, stroke 2 on a 24px field, butt caps, miter joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Pixelarticons (Regular) by Gerrit Halfmann, licence MIT. Reason: Small pixel icons match the 16px pins and flags of a board. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.1, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 13px, leading 1.35.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** raw. A stock HTML page: a flat tinted ground with nothing on it. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Thread bumping (process)

A new reply moves its thread to the top of the board; a thread with no new replies falls down and, on an imageboard, is deleted. Origin: internet, Japan, c. 1999.

- Sort the threads by the time of the last reply.
- Let a poster reply without a bump (sage on Japanese boards).
- Delete the last thread when a new thread starts on a full board.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **2channel** (platform, web, 1999–now), shaped the style. A large anonymous Japanese message board. Its users spread text faces, and many kaomoji began or grew in its threads.
- **4chan** (platform, web, 2003–now), launched the style. An anonymous image board. In 2019 a post of an empty yellow room on its paranormal board began the Backrooms and the liminal spaces look.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0F0C5D | #0F0C5D, #AF0A0F, #34345C | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #117743 | #117743, #789922, #AF0A0F | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 0px | 0–0 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–8 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.333 | 1.125–1.5 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **with accounts**: move toward [`bulletin-board-forum`](../bulletin-board-forum/SKILL.md) (Bulletin Board Forum). Add a user column with an avatar, a rank and a post count.
- If the user asks for **more meme**: move toward [`impact-image-macro`](../impact-image-macro/SKILL.md) (Impact image macro). Set the posted images as image macros with white Impact captions.
- If the user asks for **with votes**: move toward [`reddit-thread`](../reddit-thread/SKILL.md) (Reddit Thread). Add vote arrows and sort the replies by score.

- **Came from (go here for a more orthodox version):** [`bulletin-board-forum`](../bulletin-board-forum/SKILL.md)
- **Mixes well with:** [`impact-image-macro`](../impact-image-macro/SKILL.md), [`rage-comic`](../rage-comic/SKILL.md)
- **Nearest by vector profile:** [`ai-chat-ui`](../ai-chat-ui/SKILL.md), [`corporate-memphis`](../corporate-memphis/SKILL.md), [`rage-comic`](../rage-comic/SKILL.md)

## Emotional target

The reader feels the speed, the irony and the danger of a crowd with no names.

**Keywords:** anonymous, ephemeral, ironic, raw, fast, chaotic · **Brand archetypes:** jester, outlaw

## Sources

- [Wikipedia: Imageboard](https://en.wikipedia.org/wiki/Imageboard)
- [Wikipedia: 4chan](https://en.wikipedia.org/wiki/4chan)
- [Wikipedia: Futaba Channel](https://en.wikipedia.org/wiki/Futaba_Channel)

---

Generated from [`data/internet/styles/anonymous-imageboard.json`](../../data/internet/styles/anonymous-imageboard.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
