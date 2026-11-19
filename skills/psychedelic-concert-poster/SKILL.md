---
name: psychedelic-concert-poster
description: "Apply the Psychedelic concert poster style (1966–1971) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: psychedelic poster, fillmore poster, 60s concert poster, hippie poster, melting lettering, trippy gig poster."
domain: print
era: studio-press
triggers:
  - "psychedelic poster"
  - "fillmore poster"
  - "60s concert poster"
  - "hippie poster"
  - "melting lettering"
  - "trippy gig poster"
  - "summer of love"
vector_profile:
  tone_method: 1
  ink_layering: 3
  registration_play: 2
  surface_relief: 1
  hand_trace: 4
---

# Psychedelic concert poster

> A poster that makes the viewer stop and decode it brings them into the dance before they read the date.

An offset-litho poster for a dance at the Fillmore or the Avalon, with lettering that melts to fill the shape and complementary colours that vibrate. Wes Wilson, Victor Moscoso, Rick Griffin and Mouse and Kelley made the run in 1966–1968.

**Period:** 1966–1971 · **Era:** Studio press · **Domain:** Print · **Also called:** San Francisco rock poster, Fillmore poster, Avalon poster, 1960s psychedelic poster

## When to load this skill

Load it when the user asks for: "psychedelic poster", "fillmore poster", "60s concert poster", "hippie poster", "melting lettering", "trippy gig poster", "summer of love".

Good for: gig and festival posters, album covers, music merchandise, craft beer labels.

Do not use it when:
- The text must be read quickly or by a wide public.
- The brand must look calm.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Psychedelic concert poster, you MUST:

1. Make the lettering fill a shape (a figure, a flame, a balloon) until each letter bends to fit.
2. Put two complementary colours of equal value side by side, so the edge vibrates.
3. Use 2–4 flat offset inks on a coloured or white stock; change the colours from one print run to the next.
4. Borrow the line of Art Nouveau, Mucha and the Vienna Secession and push it to excess.
5. Hide the date and the venue in the design; the viewer must work to read them.
6. Fill all the space; leave no plain ground.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Clean, readable sans-serif text.
- **NEVER:** A grid layout with clear white space.
- **NEVER:** Colours of different values that do not vibrate.
- **NEVER:** A photograph as the main image.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■□□□□` 1/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■□□` 3/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** Offset plates made from hand-cut film or ink drawings, one plate for each colour.
- **Press:** A sheet-fed offset lithographic press at a commercial print shop.
- **Image making:** The artist draws each colour in black on a separate sheet; the printer shoots the art and burns the plates.
- **Edition:** Some 500–5,000 copies, often reprinted in later runs.

## Inks

- **Strategy:** Flat, opaque offset inks in clashing complementary pairs; a split fountain can blend two inks across the sheet.
- **Ink count min:** 2
- **Ink count max:** 5
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Deep violet | `#4B2A7B` | the lettering and the key line |
| Day-Glo orange | `#F47B20` | the ground |
| Electric green | `#3FAE49` | the vibrating pair |
| Hot pink | `#E94E9A` | accents |

## Tone and screen

- **Method:** solid
- **Ruling lpi:** 0
- **Rule:** Print flat, full ink; the vibration comes from colour contrast, not tone.

## Registration

- **Tolerance mm:** 0.3
- **Rule:** Offset register is tight; a split fountain makes a blend instead of a shift.

## Stock

- **Stock:** A coated or uncoated poster stock, sometimes a coloured or a fluorescent sheet.
- **Weight gsm min:** 100
- **Weight gsm max:** 200
- **Ground:** #F5EFE3
- **Finish:** Smooth, uncoated or with a satin coat.

## Surface

- **Impression:** No bite; the ink lies flat.
- **Sheen:** A slight satin sheen of offset ink.
- **Texture:** Flat colour with crisp, drawn edges; no grain.

## Process marks

- **Marks:** melting hand lettering · vibrating complementary edges · split fountain blend · pin holes from the wall · a print-run number in the margin

## Prompt primer

- **Positive:** 1960s psychedelic concert poster · Fillmore poster · melting hand-drawn lettering · vibrating complementary colours · Art Nouveau revival · flat offset colour · Wes Wilson lettering · orange and violet
- **Negative:** readable sans-serif · white space · photograph · muted colours · grid layout

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Lithography (process)

A print from a flat stone or plate on which a greasy drawing takes ink and water repels it; the artist draws as on paper. Origin: graphic & ui design, Munich, c. 1796.

- Draw on the stone with a greasy crayon or a tusche wash; the drawing takes ink and the rest stays wet.
- Pull the print in a press at a run of 20 to 200 copies for an artist print, or more for a poster.
- Use one stone for each colour; 3 to 5 stones give a poster.
- Keep the soft crayon grain and the dark, velvet black.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Family Dog Productions** (platform, San Francisco, 1966–now), launched the style. A concert promoter in San Francisco that Chet Helms ran. Its dance concerts from 1966 to 1968 each had a new poster.
- **The Fillmore** (club, San Francisco, 1954–now), gathered the style. A music hall in San Francisco where Bill Graham started to book shows in 1965. Its weekly concert posters spread the psychedelic poster style.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #4B2A7B | #4B2A7B, #1E3E8C, #B0124F | inks |
| Paper colour (`paper_colour`) | #F5EFE3 | #F5EFE3, #F7E64A | substrate |
| Ink count (`ink_count`) | 4 | 2–5 | inks, registration |
| Screen ruling (`screen_ruling`) | 0 | 0–0 lines per inch | screening |
| Misregistration (`misregistration`) | 0.3 | 0–0.6 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more classical**: move toward [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md) (Chromolithograph poster). Drop the vibrating colours; draw a Belle Époque figure in crayon on 4–5 stones.
- If the user asks for **rougher and angrier**: move toward [`xerox-zine`](../xerox-zine/SKILL.md) (Xerox zine). Change the drawn colour for black photocopy and ransom-note letters.

- **Came from (go here for a more orthodox version):** [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)
- **Was rejected by:** [`xerox-zine`](../xerox-zine/SKILL.md)
- **Mixes well with:** [`pop-screen-print`](../pop-screen-print/SKILL.md)
- **Kin in another domain:** [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`psychedelic`](../psychedelic/SKILL.md), [`surrealism-painting`](../surrealism-painting/SKILL.md)
- **Nearest by vector profile:** [`pochoir-plate`](../pochoir-plate/SKILL.md), [`wood-type-poster`](../wood-type-poster/SKILL.md), [`chromolithograph-poster`](../chromolithograph-poster/SKILL.md)

## Emotional target

Altered perception: the viewer feels the colours move and is drawn into a puzzle.

**Keywords:** trippy, vibrant, countercultural, ornate, hypnotic · **Brand archetypes:** magician, outlaw, explorer

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [1967 Mantra-Rock Dance Avalon poster](https://commons.wikimedia.org/wiki/File:1967_Mantra-Rock_Dance_Avalon_poster.jpg) (Unknown designer; photographed by Harvey W. Cohen, 1967): image, CC BY-SA 3.0. Wikimedia Commons (Harvey W. Cohen)

## Sources

- [Psychedelic art (Wikipedia)](https://en.wikipedia.org/wiki/Psychedelic_art)
- [Wes Wilson (Wikipedia)](https://en.wikipedia.org/wiki/Wes_Wilson)
- Paul D. Grushkin, The Art of Rock: Posters from Presley to Punk (Abbeville, 1987)

---

Generated from [`data/print/styles/psychedelic-concert-poster.json`](../../data/print/styles/psychedelic-concert-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
