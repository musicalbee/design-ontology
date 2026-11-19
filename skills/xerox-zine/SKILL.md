---
name: xerox-zine
description: "Apply the Xerox zine style (1976–1995) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: zine, photocopy look, xerox texture, punk fanzine, cut and paste, diy print."
domain: print
era: studio-press
triggers:
  - "zine"
  - "photocopy look"
  - "xerox texture"
  - "punk fanzine"
  - "cut and paste"
  - "diy print"
  - "ransom note letters"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 1
  surface_relief: 1
  hand_trace: 5
---

# Xerox zine

> If a copier is the press, anyone can publish, and the rough marks of the copy are proof of independence.

A fanzine made with scissors, glue, a typewriter and a photocopier, in black toner on white office paper. Sniffin' Glue started in London in 1976; punk, hardcore and riot grrrl made the copy shop a press anyone could use.

**Period:** 1976–1995 · **Era:** Studio press · **Domain:** Print · **Also called:** Photocopy zine, Punk fanzine, Cut-and-paste zine, DIY zine

## When to load this skill

Load it when the user asks for: "zine", "photocopy look", "xerox texture", "punk fanzine", "cut and paste", "diy print", "ransom note letters".

Good for: gig flyers and zines, record sleeves, street-wear graphics, activist posters.

Do not use it when:
- The brand must look trusted or premium.
- The reader needs long, clear text.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Xerox zine, you MUST:

1. Paste up each page by hand from typewriter text, hand lettering, letters cut from magazines and photos.
2. Copy in black toner only; push the contrast until the photos are black shapes and the greys drop out.
3. Let pieces sit at angles; show the edges of the cut paper and the tape.
4. Copy a copy to add grain, toner noise and a black edge round the page.
5. Fold A4 or letter sheets in half and staple them at the fold.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean, aligned typesetting on a grid.
- **NEVER:** Full colour or a smooth grey tone.
- **NEVER:** Glossy, coated paper.
- **NEVER:** A polished logo or a corporate look.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** electrostatic
- **Matrix:** A paste-up master of cut paper on a sheet; no plate.
- **Press:** An office photocopier with dry toner, fused by heat.
- **Image making:** The editor writes, cuts, pastes and copies, often at night in a copy shop or an office.
- **Edition:** 50–5,000 copies, printed as the money comes.

## Inks

- **Strategy:** One black toner; colour, if any, from a coloured paper or a marker.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Toner black | `#121212` | all marks |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 50
- **Rule:** Let the copier turn the greys into a coarse, random toner grain or drop them to white.

## Registration

- **Tolerance mm:** 0
- **Rule:** One pass of toner; the paste-up can be crooked, but there is no register.

## Stock

- **Stock:** White or coloured office paper, A4 or US letter.
- **Weight gsm min:** 70
- **Weight gsm max:** 90
- **Ground:** #F4F2EC
- **Finish:** Uncoated, smooth, bright white.

## Surface

- **Impression:** No bite; the toner sits on the surface with a slight gloss.
- **Sheen:** A faint gloss in the solid blacks of toner.
- **Texture:** Hard black and white, with toner specks, streaks and the shadows of the cut paper.

## Process marks

- **Marks:** toner specks · copier streaks · shadows of paste-up edges · black page border · crooked text blocks · ransom-note lettering · staples at the fold

## Prompt primer

- **Positive:** 1977 punk fanzine · photocopied zine page · cut-and-paste collage · ransom note letters · typewriter text · high-contrast black toner · xerox texture · DIY layout
- **Negative:** colour · clean grid · glossy paper · smooth gradient · corporate design

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Photocopy (technology)

An office copier makes a print with toner on plain paper from a paste-up, with no plate and no press. Origin: print, Rochester, New York, 1959.

- Paste up the page from typed text, hand lettering and cut pictures on one sheet.
- Copy the paste-up; copy the copy to push the contrast and to lose the mid-tones.
- Accept the toner speckle, the black edges of the cut paper and the grey of the glass.
- Fold and staple the copies by hand.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Sniffin' Glue** (magazine, London, 1976–1977), published the style. A punk zine that Mark Perry typed, cut and photocopied. Its rough paste-up look became the model for punk print.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #121212 | #121212 | inks |
| Paper colour (`paper_colour`) | #F4F2EC | #F4F2EC, #F2D9E4, #F7EFA8 | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 50 | 30–85 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–0 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **with colour**: move toward [`risograph-print`](../risograph-print/SKILL.md) (Risograph print). Keep the paste-up, but print it on a riso with 2–3 spot inks.
- If the user asks for **for the screen**: move toward [`punk-zine`](../punk-zine/SKILL.md) (Punk Zine). Use the web style of the punk zine: torn edges, cut-out type and a black and white palette.

- **Led to (go here for a newer version):** [`risograph-print`](../risograph-print/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md)
- **Kin in another domain:** [`anti-design`](../anti-design/SKILL.md), [`grunge-editorial`](../grunge-editorial/SKILL.md), [`punk-fashion`](../punk-fashion/SKILL.md), [`punk-zine`](../punk-zine/SKILL.md)
- **Nearest by vector profile:** [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md), [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md), [`private-press-book`](../private-press-book/SKILL.md)

## Emotional target

Raw urgency: the reader feels anger, humour and a voice that nobody edited.

**Keywords:** raw, angry, urgent, homemade, rebellious · **Brand archetypes:** outlaw, everyman

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [A Selection of UK Punk Fanzines](https://commons.wikimedia.org/wiki/File:A_Selection_of_UK_Punk_Fanzines.jpg) (Various UK punk fanzines; photo by Dgnews, 1977): image, CC0. Photograph of the zines, Wikimedia Commons (own work, Dgnews). The licence covers the photograph, not the zines.
- [SF punk zines at Prelinger Library](https://commons.wikimedia.org/wiki/File:SF_punk_zines_at_Prelinger_Library.jpg) (Various zines; photo by Lindsay Eyink, 1980): image, CC BY 2.0. Photograph of the zines, Wikimedia Commons (Flickr, Lindsay Eyink). The licence covers the photograph, not the zines.
- [1970s fanzines (21224199545)](https://commons.wikimedia.org/wiki/File:1970s_fanzines_(21224199545).jpg) (Various fanzines; photo by Jake from Manchester, UK, 1975): image, CC BY 2.0. Photograph of the zines, Wikimedia Commons (Jake from Manchester, UK). The licence covers the photograph, not the zines.

## Sources

- [Zine (Wikipedia)](https://en.wikipedia.org/wiki/Zine)
- [Sniffin' Glue (Wikipedia)](https://en.wikipedia.org/wiki/Sniffin%27_Glue)
- Teal Triggs, Fanzines (Thames & Hudson, 2010)

---

Generated from [`data/print/styles/xerox-zine.json`](../../data/print/styles/xerox-zine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
