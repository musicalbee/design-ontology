---
name: reddit-thread
description: "Apply the Reddit Thread style (2005–) when generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture. Load when the user asks for: reddit, subreddit, upvote, comment thread, nested comments, karma."
domain: internet
era: web-2-social
triggers:
  - "reddit"
  - "subreddit"
  - "upvote"
  - "comment thread"
  - "nested comments"
  - "karma"
  - "ama"
vector_profile:
  ornamentation: 2
  dimensionality: 2
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# Reddit Thread

> The crowd ranks every post and every reply; the best answer floats to the top.

A link or a text post in a topic group, with a score that the crowd votes up or down, and nested comments sorted by votes, each level marked by a thin line at the left.

**Period:** 2005– · **Era:** Web 2.0 and the social web · **Domain:** Internet · **Also called:** Comment thread, Upvote thread, Subreddit

## When to load this skill

Load it when the user asks for: "reddit", "subreddit", "upvote", "comment thread", "nested comments", "karma", "ama".

Good for: community Q&A pages, product feedback boards, discussion sections under articles, parody posts.

Do not use it when:
- The page has one author and no replies.
- The brand needs a calm premium tone.
- The talk is live chat.

## System directives

When generating web pages, apps, memes, short video frames, forum and chat screens, and other images of internet culture in Reddit Thread, you MUST:

1. Put a vote column at the left of each post: an up arrow, the score and a down arrow.
2. Nest the comments as a tree; indent each level by 16px to 24px and draw a thin line at the left of each level.
3. Sort the comments by score by default, and let the reader collapse a branch with one click.
4. Show the group name (r/name), the user name (u/name) and the age of the post in small muted text above the title.
5. Colour an up vote orange and a down vote blue-violet.
6. Keep the page dense: titles of 16px to 18px and comments of 14px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Linear replies with no tree.
- **NEVER:** Posts with no score.
- **NEVER:** Large decorative images in a comment.
- **NEVER:** Long gaps between comments.
- **NEVER:** One author voice with no crowd.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■□□□` 2/5 | pure minimal | maximalist |
| Dimensionality | `■■□□□` 2/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** A main column of 640px to 740px for the post and comments, and a side column of 310px for the group rules.
- **Whitespace ratio:** 15% to 25% of the page stays empty; comments have 8px gaps.
- **Alignment rules:** Everything aligns left; nested comments step right by one indent for each level.
- **Container geometry:** Post cards with a 4px to 16px radius; comments sit on the page with no box, only the thread line.

## Typography

- **Classifications:** neo-grotesque sans · humanist sans
- **Tracking:** Display 0em; body 0em.
- **Leading:** Display 1.25; body 1.5.
- **Hierarchy rules:**
  - Use 12px for metadata, 14px for comments and 18px for the post title.
  - Set user names in bold and the group name in the link colour.
  - Set the score in bold between the arrows.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| IBM Plex Sans | Noto Sans | IBM Plex Sans was the Reddit face from 2018; Noto Sans is a near open text face. |
| Arimo | Arimo | The old Reddit look in an Arial-like face. |

## Colour & lighting

- **Palette structure:** A white or pale grey page with orange for up votes and the brand; 4 to 5 colours.
- **Contrast rules:** Ink on white is 17:1; meta grey on white is 4.2:1 and stays for 12px metadata only; the link blue on white is 4.6:1.
- **Surface treatment:** Flat white cards on a pale grey page.
- **Light and shadow:** No shadow, or a 1px border on the cards.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Page Grey | `#DAE0E6` | background |
| Card White | `#FFFFFF` | panel |
| Text Ink | `#1A1A1B` | text |
| Meta Grey | `#7C7C7C` | muted |
| Upvote Orange | `#FF4500` | accent |
| Downvote Violet | `#7193FF` | secondary |
| Link Blue | `#0079D3` | link |

## Materiality & texture

- **Surface simulation:** A flat web app: white cards and thin lines.
- **Border rules:** 1px borders (#CCCCCC) on cards; 2px thread lines (#EDEFF1) at the left of the comments.
- **Blur and elevation:** No blur; the cards have no elevation.

## Ornamentation & iconography

- **Iconography:** Outline icons of 16px to 20px: up and down arrows, a speech bubble, a share arrow and an award.
- **Illustration:** The group icon and banner, and the posted images or links.
- **Decorative elements:** vote arrows · score · thread line · group flair · awards · collapse toggle

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** A vote arrow fills with colour at once and the score changes by one; a branch collapses with no animation.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 100
- **Hover and active:** An arrow tints on hover; the active vote stays orange or violet.

## Code & token primer

Set `data-style="reddit-thread"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="reddit-thread"] {
  --color-bg: #DAE0E6;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1B;
  --color-muted: #7C7C7C;
  --color-primary: #0079D3;
  --color-accent: #FF4500;
  --color-border: #CCCCCC;
  --font-sans: "Noto Sans", Arial, sans-serif;
  --font-display: "IBM Plex Sans", Arial, sans-serif;
  --border-radius: 4px;
  --border-width: 1px;
  --shadow-elevation: none;
  --backdrop-filter: none;
  --space-unit: 8px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 100ms;
  --type-ratio: 1.2;
  --size-small: 11.67px;
  --size-h3: 20.16px;
  --size-h2: 24.19px;
  --size-h1: 29.03px;
  --color-on-bg: #1A1A1B;
  --color-on-surface: #1A1A1B;
  --color-on-primary: #000000;
  --color-on-accent: #1A1A1B;
  --color-muted-on-bg: #545558;
  --color-muted-on-surface: #5F5F5F;
  --color-link: #1A1A1B;
  --color-link-on-surface: #1A1A1B;
  --display-weight: 700;
  --subhead-weight: 700;
  --body-weight: 400;
  --strong-weight: 700;
  --label-weight: 700;
  --display-tracking: 0em;
  --display-leading: 1.25;
  --display-case: none;
  --body-leading: 1.5;
  --body-size: 14px;
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
| page | `bg-[#DAE0E6] text-[#1A1A1B] font-sans px-2 md:px-6` |
| heading | `text-lg font-bold leading-tight` |
| body | `text-sm leading-[1.5] max-w-[740px]` |
| section | `rounded bg-white border border-[#CCCCCC] p-3` |
| button | `rounded-full bg-[#0079D3] px-4 py-1 text-sm font-bold text-white hover:bg-[#1484D6]` |
| label | `text-xs text-[#7C7C7C]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 2 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Phosphor (Bold) by Phosphor Icons, licence MIT. Reason: Bold outline arrows and bubbles match the vote and comment icons. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 700, tracking 0em, leading 1.25, case: none.
- **Weights:** display 700, subhead 700, body 400, bold in text 700, labels and buttons 700. The style uses 2 weights (400, 700) and no other. The display is 300 heavier than the body. The accent is weight: a heavier word is the accent, so the steps between the weights are clear.
- **Body type:** 14px, leading 1.5.
- **Page:** hero stacked, left aligned, compact density, accent tilt 0°.
- **Ground:** raw. A plain grey page under white cards, with nothing behind the content. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Post voting (technology)

Readers vote a post up or down, and the score sets the order in which the posts show. Origin: internet, San Francisco, 2004.

- Put an up and a down control beside each post.
- Show the net score between the two controls.
- Sort the list by the score, or by the score and the age.

### Threaded discussion (technology)

Replies are stored as a tree: each reply points to the post that it answers, so a reader can follow one branch of a talk. Origin: internet, Durham, North Carolina, 1980.

- Give each post an id and give each reply the id of its parent.
- Show the tree with one indent for each level.
- Quote or link the parent post in each reply.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Reddit** (platform, web, 2005–now), launched the style. A forum site of topic groups. The groups on Weirdcore and Liminalspace spread the images of empty, strange places.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #0079D3 | #0079D3, #1A1A1B, #46D160 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #FF4500 | #FF4500, #FF8717, #7193FF | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 4px | 0–16 px | --border-radius |
| Grid step (`grid_step`) | 8px | 4–12 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.2 | 1.125–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more anonymous**: move toward [`anonymous-imageboard`](../anonymous-imageboard/SKILL.md) (Anonymous Imageboard). Remove the scores and the user names; start each thread with an image.
- If the user asks for **older**: move toward [`bulletin-board-forum`](../bulletin-board-forum/SKILL.md) (Bulletin Board Forum). Put the replies in a flat table with a user column.
- If the user asks for **live chat**: move toward [`discord-server`](../discord-server/SKILL.md) (Discord Server). Replace the tree with a channel of messages in time order.

- **Came from (go here for a more orthodox version):** [`bulletin-board-forum`](../bulletin-board-forum/SKILL.md), [`usenet-thread`](../usenet-thread/SKILL.md)
- **Mixes well with:** [`rage-comic`](../rage-comic/SKILL.md)
- **Nearest by vector profile:** [`anonymous-imageboard`](../anonymous-imageboard/SKILL.md), [`discord-server`](../discord-server/SKILL.md), [`ai-chat-ui`](../ai-chat-ui/SKILL.md)

## Emotional target

The reader feels the crowd's judgement and the pull of the next reply.

**Keywords:** crowd-ranked, threaded, witty, dense, argumentative, communal · **Brand archetypes:** everyman, sage, jester

## Sources

- [Wikipedia: Reddit](https://en.wikipedia.org/wiki/Reddit)
- [Wikipedia: Steve Huffman](https://en.wikipedia.org/wiki/Steve_Huffman)

---

Generated from [`data/internet/styles/reddit-thread.json`](../../data/internet/styles/reddit-thread.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
