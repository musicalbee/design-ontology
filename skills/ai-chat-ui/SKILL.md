---
name: ai-chat-ui
description: "Apply the AI Chat Interface style (2022–now) when generating UI or graphic layouts. Load when the user asks for: chat ui, chatbot, ai assistant, llm interface, prompt box, chatgpt style."
domain: design
era: contemporary-spatial
triggers:
  - "chat ui"
  - "chatbot"
  - "ai assistant"
  - "llm interface"
  - "prompt box"
  - "chatgpt style"
  - "conversation ui"
  - "copilot"
vector_profile:
  ornamentation: 1
  dimensionality: 1
  grid_rigidity: 3
  skeuomorphic_realism: 1
  typographic_expressiveness: 2
---

# AI Chat Interface

> The interface is a conversation: one box to speak into, and everything else appears in the reply.

A single centred column, one large input at the bottom, streaming text, suggestion chips and almost no chrome. It came with ChatGPT in 2022 and makes language the main control.

**Period:** 2022–now · **Era:** Contemporary & Spatial · **Domain:** Graphic & UI Design · **Also called:** Conversational UI, LLM chat UI, Prompt-first UI

## When to load this skill

Load it when the user asks for: "chat ui", "chatbot", "ai assistant", "llm interface", "prompt box", "chatgpt style", "conversation ui", "copilot".

Good for: AI assistants and copilots, support and onboarding chat, search with answers, agent and tool consoles, knowledge-base front ends.

Do not use it when:
- The task needs a spatial or multi-panel view.
- The content is browsing of many items.
- The user needs a form with many fields.

## System directives

When generating UI or graphic layouts in AI Chat Interface, you MUST:

1. Centre one column of 680px to 768px; use a measure of 60 to 75 characters and 16px to 17px text with a leading of 1.6.
2. Dock a single input at the bottom: height 56px to 120px that grows to 200px, radius 16px to 28px, with a send button of 32px to 40px inside it.
3. Mark user turns with a tinted bubble (radius 18px, max width 80%) and leave assistant turns as plain text with no bubble.
4. Stream text word by word at 20 to 60 words per second and show a 12px pulsing cursor or dot while it streams.
5. Offer 3 to 4 suggestion chips (height 36px to 44px, radius 999px) on the empty state and 2 to 3 follow-ups after a reply.
6. Hide the sidebar by default on screens under 768px and keep it 260px wide on desktop with one row per chat of 36px.
7. Show sources, tools and code as collapsible blocks with a 1px border and 12px radius; code blocks use a mono face at 13px.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Dashboards of tiles and many menus beside the chat.
- **NEVER:** Heavy bubbles around every assistant message.
- **NEVER:** Decorative backgrounds behind text.
- **NEVER:** Multi-column layouts for the main reply.
- **NEVER:** Dense toolbars above the input.
- **NEVER:** Typing indicators that fake a human.
- **NEVER:** Hidden input that needs a click to open.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■□□□□` 1/5 | pure minimal | maximalist |
| Dimensionality | `■□□□□` 1/5 | strictly 2D | full 3D / spatial |
| Grid rigidity | `■■■□□` 3/5 | chaotic / organic | strict mathematical grid |
| Skeuomorphic realism | `■□□□□` 1/5 | abstract digital | photorealistic material |
| Typographic expressiveness | `■■□□□` 2/5 | neutral / invisible | experimental / illustrative |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Spatial & grid logic

- **Grid mechanics:** One centred column of 680px to 768px, a docked input and an optional sidebar of 260px; a 4px baseline.
- **Whitespace ratio:** 50% to 70% of the surface stays empty on desktop; the spacing scale is 4, 8, 12, 16, 24 and 48px.
- **Alignment rules:** Centred column; text flush left; user messages flush right; input centred under the column.
- **Container geometry:** Rounded input of 16px to 28px radius; user bubbles 18px; blocks 12px; chips 999px.

## Typography

- **Classifications:** neo-grotesque sans serif · serif · monospace
- **Tracking:** Display takes -0.01em; body stays at 0.
- **Leading:** Display 1.2; body 1.6.
- **Hierarchy rules:**
  - Use two weights: regular (400) and medium (500) or semibold (600) for headings in replies.
  - Use sizes 13, 16, 17 and 28px.
  - Set the greeting on the empty state at 28px to 36px.
  - Set code at 13px in a mono face.

**Font pairings**

| Display | Body | Note |
|---|---|---|
| Inter | JetBrains Mono | A neutral UI face for chat and a code face for blocks. |
| Source Serif 4 | Inter | A literary serif for reply text with a sans for the interface. |
| Geist | Geist Mono | A single family with a matched mono. |

## Colour & lighting

- **Palette structure:** A quiet neutral ground, one accent and soft tints for user turns.
- **Contrast rules:** Ink on page holds 16:1; muted holds at least 4.5:1; the accent marks the cursor, links and the send button.
- **Surface treatment:** Flat, opaque neutral surfaces; no gradient; one tint step for the user bubble.
- **Light and shadow:** None; a 1px border and a 0 1px 2px shadow at 6% on the input only.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Page | `#FFFFFF` | background |
| Ink | `#1F1F23` | text |
| Tint | `#F4F4F5` | user bubble and input |
| Mute | `#6B6B76` | secondary text |
| Accent | `#D97757` | accent and cursor |
| Line | `#E4E4E7` | border |

## Materiality & texture

- **Surface simulation:** Plain digital paper: neutral surfaces with no material.
- **Border rules:** 1px border in #E4E4E7 on the input, blocks and chips.
- **Blur and elevation:** No blur. A single soft shadow of 0 1px 2px at 6% on the input; no elevation elsewhere.

## Ornamentation & iconography

- **Iconography:** Thin 1.5px outline icons with round caps at 16px to 20px; the send button is a filled circle.
- **Illustration:** None in the reply flow; one small brand mark on the empty state.
- **Decorative elements:** docked input · suggestion chips · streaming cursor · collapsible block

## Motion & interactivity

- **Born on screen:** yes
- **Transition physics:** Streaming: text appears word by word at 20 to 60 words per second; a new message slides up 8px in 200ms; the input grows in 120ms.
- **Easing:** cubic-bezier(0.2, 0, 0, 1)
- **Duration (ms):** 200
- **Hover and active:** Hover shows the message actions (copy, retry) at 100% opacity; active state on the send button darkens it by 10%.

## Code & token primer

Set `data-style="ai-chat-ui"` on the root element and paste the tokens. The file [`tokens.css`](./tokens.css) has the same tokens and a set of reference rules.

```css
[data-style="ai-chat-ui"] {
  --color-bg: #FFFFFF;
  --color-surface: #F4F4F5;
  --color-text: #1F1F23;
  --color-muted: #6B6B76;
  --color-primary: #1F1F23;
  --color-accent: #D97757;
  --color-border: #E4E4E7;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --border-radius: 20px;
  --border-width: 1px;
  --shadow-elevation: 0 1px 2px rgba(0,0,0,0.06);
  --backdrop-filter: none;
  --space-unit: 4px;
  --ease: cubic-bezier(0.2, 0, 0, 1);
  --duration: 200ms;
  --type-ratio: 1.25;
  --size-small: 12.8px;
  --size-h3: 25px;
  --size-h2: 31.25px;
  --size-h1: 39.06px;
  --color-on-bg: #1F1F23;
  --color-on-surface: #1F1F23;
  --color-on-primary: #FFFFFF;
  --color-on-accent: #1F1F23;
  --color-muted-on-bg: #6B6B76;
  --color-muted-on-surface: #6B6B76;
  --color-link: #1F1F23;
  --color-link-on-surface: #1F1F23;
  --display-weight: 600;
  --subhead-weight: 600;
  --body-weight: 400;
  --strong-weight: 600;
  --label-weight: 500;
  --display-tracking: -0.01em;
  --display-leading: 1.2;
  --display-case: none;
  --body-leading: 1.6;
  --body-size: 16px;
  --icon-stroke: 1.5;
  --ground: linear-gradient(100deg, var(--color-bg) 18%, transparent 52%),
    radial-gradient(circle, color-mix(in oklab, var(--color-on-bg) 30%, transparent) 1.1px, transparent 1.6px) 0 0 / 24px 24px,
    radial-gradient(55% 60% at 82% 40%, color-mix(in oklab, var(--color-primary) 26%, transparent), transparent 70%),
    var(--color-bg);
}
```

Tailwind patterns:

| Element | Classes |
|---|---|
| page | `bg-white text-[#1F1F23] font-sans antialiased flex flex-col items-center` |
| heading | `text-3xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.2] text-center` |
| body | `w-full max-w-[720px] px-4 text-base leading-[1.6]` |
| section | `rounded-xl border border-[#E4E4E7] p-3` |
| button | `rounded-full bg-[#1F1F23] p-2 text-white transition-colors duration-200 hover:bg-[#3A3A40]` |
| label | `text-[13px] font-medium text-[#6B6B76]` |

## Visual pack

The pictures and icons of this style are files. Use them as they are, or read them as a specification and draw your own in the same language.

| File | Content |
|---|---|
| [`pack/hero.svg`](./pack/hero.svg) | Hero plate, 800 by 600. An abstract picture in the visual language of the style. |
| [`pack/pattern.svg`](./pack/pattern.svg) | Pattern tile, 80 by 80. It repeats in both directions. |
| [`pack/icons.svg`](./pack/icons.svg) | Icon sprite: home, search, heart, star, bell, user, mail, calendar, image, bolt, play, check, close, sliders. |

- **Icons:** outline, stroke 1.5 on a 24px field, round caps, round joins, container: none. Use: `<svg class="icon"><use href="pack/icons.svg#home"/></svg>`. An icon takes `currentColor`.
- **Icon family:** the sprite is cut from Lucide (Regular) by Lucide Contributors, licence ISC. Reason: A thin, neutral 1.5px line at 16px to 20px that stays quiet next to running text. It is an open-source stand-in for a demo. For a product, use the icon library of the brand and choose the family by the rules below.
- **Display type:** weight 600, tracking -0.01em, leading 1.2, case: none.
- **Weights:** display 600, subhead 600, body 400, bold in text 600, labels and buttons 500. The style uses 3 weights (400, 500, 600) and no other. The display is 200 heavier than the body. The accent is colour: one coloured word or field is the accent, so the weights stay quiet.
- **Body type:** 16px, leading 1.6.
- **Page:** hero stacked, center aligned, airy density, accent tilt 0°.
- **Ground:** dot-grid. Chat interfaces keep a calm field with one warm light at the top. Put the class `ground` on the first screen of the page; it takes `--ground`, a stack of gradients built from the colour tokens. The ground can run behind the copy, so put the class `ground-copy` on each text block of that screen: the block gets `--color-bg` and a soft edge. Keep the rest of the page on `--color-bg`.
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

### Streaming text (animation, invented here)

Text that appears word by word as the system writes it, so the reader can read the answer before it is complete. Origin: graphic & ui design, United States, 2022.

- Show each new word or token as it comes, with no fade longer than 100 ms.
- Keep the bottom line in view while the text grows; stop the auto-scroll when the reader scrolls up.
- Show one cursor or dot at the end of the text while it is streaming.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **ChatGPT** (platform, web, 2022–now), launched the style. A chat assistant from OpenAI. Its single column of messages and its prompt box became the default look of an AI chat interface.
- **Microsoft** (company, Redmond, ?–now), funded the style. US software company. It bought Mojang in 2014 for 2.5 billion dollars and put billions of dollars into OpenAI from 2019.
- **OpenAI** (company, San Francisco, ?–now), made the style. US AI company. It released ChatGPT in November 2022. Microsoft is its main investor, with more than 13 billion dollars.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Base colour (`base_colour`) | #1F1F23 | #1F1F23, #D97757 | --color-primary, --color-on-primary, --color-link-on-surface |
| Accent colour (`accent_colour`) | #D97757 | #D97757, #1F1F23 | --color-accent, --color-on-accent, --color-link |
| Corner radius (`corner_radius`) | 20px | 10–30 px | --border-radius |
| Grid step (`grid_step`) | 4px | 2–6 px | --space-unit, --grid-gutter |
| Type scale ratio (`type_scale_ratio`) | 1.25 | 1.2–1.333 | --type-ratio, --size-small, --size-h3, --size-h2, --size-h1 |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more editorial**: move toward [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md) (Editorial Serif Revival). Set replies in a serif at 18px and add a paper-tone background and hairline rules.
- If the user asks for **more technical**: move toward [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md) (Dark-Mode Developer Tool). Switch to a dark ground, add a mono face and show tool calls inline.
- If the user asks for **more visual**: move toward [`aurora-gradient-ui`](../aurora-gradient-ui/SKILL.md) (Aurora Gradient UI). Add a soft gradient ground on the empty state only.

- **Came from (go here for a more orthodox version):** [`flat-design`](../flat-design/SKILL.md)
- **Mixes well with:** [`dark-devtool-ui`](../dark-devtool-ui/SKILL.md), [`editorial-serif-revival`](../editorial-serif-revival/SKILL.md)
- **Nearest by vector profile:** [`brutalist-web`](../brutalist-web/SKILL.md), [`flat-design`](../flat-design/SKILL.md), [`minimalism-web`](../minimalism-web/SKILL.md)

## Emotional target

The viewer feels that they are talking with a patient, capable partner.

**Keywords:** calm, conversational, focused, helpful, minimal, personal · **Brand archetypes:** sage, caregiver

## Sources

- Example: chatgpt.com (2022–2025)
- Example: claude.ai (2023–2025)
- Example: perplexity.ai and gemini.google.com (2023–2025)

---

Generated from [`data/design/styles/ai-chat-ui.json`](../../data/design/styles/ai-chat-ui.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
