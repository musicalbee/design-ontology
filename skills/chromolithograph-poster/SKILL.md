---
name: chromolithograph-poster
description: "Apply the Chromolithograph poster style (1866–1914) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: belle époque poster, vintage french poster, lithograph poster, chéret, toulouse-lautrec style, 1890s poster."
domain: print
era: industrial-press
triggers:
  - "belle époque poster"
  - "vintage french poster"
  - "lithograph poster"
  - "chéret"
  - "toulouse-lautrec style"
  - "1890s poster"
  - "cabaret poster"
  - "absinthe poster"
vector_profile:
  tone_method: 3
  ink_layering: 4
  registration_play: 2
  surface_relief: 1
  hand_trace: 4
---

# Chromolithograph poster

> A few bright inks, drawn by the artist on stone, can make a sheet on a wall as bright and as alive as a painting.

A large poster drawn in crayon and brush on stones, one stone for each colour. Jules Chéret opened his own press in Paris in 1866 and printed colour posters with a few strong inks; Mucha, Toulouse-Lautrec and the Beggarstaffs made the street a gallery.

**Period:** 1866–1914 · **Era:** Industrial press · **Domain:** Print · **Also called:** Belle Époque poster, Affiche illustrée, Colour lithograph poster, Chéret poster

## When to load this skill

Load it when the user asks for: "belle époque poster", "vintage french poster", "lithograph poster", "chéret", "toulouse-lautrec style", "1890s poster", "cabaret poster", "absinthe poster".

Good for: event and theatre posters, drinks and food packaging, travel posters, hospitality brands.

Do not use it when:
- The message needs a photograph or a lot of small text.
- The brand must look sober or technical.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Chromolithograph poster, you MUST:

1. Use 3–5 inks: a dark key for the drawing, a red, a yellow and a blue, with mixed tones where they overprint.
2. Draw the key with a lithographic crayon, so the tone has the grain of the stone.
3. Make one large figure, often a woman in motion, fill most of the sheet.
4. Put the name of the product or the show in hand-drawn letters at the top or the bottom, in the same inks.
5. Use spatter (crachis) and crayon grain for the half tones; keep flat colour for large areas.
6. Let the colours shift a little from the key; the eye accepts a small misregister.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A photographic halftone screen.
- **NEVER:** Typeset text in one plain face.
- **NEVER:** Many small images in a grid.
- **NEVER:** Dull colours mixed to brown.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■■□□` 3/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■■■■□` 4/5 | one ink | many overprinted inks |
| Registration play | `■■□□□` 2/5 | exact register | visible misregister as a feature |
| Surface relief | `■□□□□` 1/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■□` 4/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** planographic
- **Matrix:** Bavarian limestone, one stone for each ink, drawn with a greasy crayon and tusche.
- **Press:** A steam-powered flatbed lithographic press, with sheets up to 2.5 m long printed in parts.
- **Image making:** The artist draws the key; a chromiste separates the colours by hand on the other stones from a tracing.
- **Edition:** Thousands of posters for a campaign, plus small editions on good paper for collectors.

## Inks

- **Strategy:** A dark key and three or four bright inks; the half tones come from the crayon and from overprints.
- **Ink count min:** 3
- **Ink count max:** 8
- **Overprint:** mixed

**Colours**

| Name | Hex | Role |
|---|---|---|
| Indigo key | `#2B2A3A` | the drawing and the letters |
| Vermilion | `#D2352B` | dresses and the title |
| Chrome yellow | `#F2C230` | light, skin and gold |
| Prussian blue | `#3B6FB6` | sky and the cool shadows |

## Tone and screen

- **Method:** grain
- **Ruling lpi:** 60
- **Rule:** Make the tone with the grain of the crayon on the stone and with spatter; there is no screen.

## Registration

- **Tolerance mm:** 0.6
- **Rule:** Each stone registers to pins; a shift of 0.5–1 mm is common and shows as a light rim.

## Stock

- **Stock:** A thin machine-made poster paper; collectors' copies on heavier wove.
- **Weight gsm min:** 60
- **Weight gsm max:** 150
- **Ground:** #F2EAD6
- **Finish:** Uncoated, smooth, with a slight tooth.

## Surface

- **Impression:** No bite: the ink lies flat on the sheet.
- **Sheen:** Matt, with a soft sheen in the dark inks.
- **Texture:** A grain of crayon and spatter in the half tones, with flat areas of strong colour.

## Process marks

- **Marks:** crayon grain · spatter dots (crachis) · a light rim from misregister · overprinted secondary colours · hand-drawn lettering · fold lines and paste stains

## Prompt primer

- **Positive:** Belle Époque poster · poster for a cabaret, a bicycle or a soap · colour lithograph poster · crayon grain · spatter texture · dancing woman in motion · hand-drawn title lettering · red yellow and blue inks
- **Negative:** photograph · halftone dots · digital gradient · typeset sans-serif · muted brown palette

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Cloisonnism (process)

Flat areas of one colour held by a dark outline, as the lead holds the glass in a church window. Origin: painting, Paris, France, c. 1887.

- Fill each shape with one flat colour and no gradient.
- Draw a dark contour of 3 to 8mm round each shape.
- Set a few large shapes against a high horizon, with no cast shadow.

### Lithography (process)

A print from a flat stone or plate on which a greasy drawing takes ink and water repels it; the artist draws as on paper. Origin: print, Munich, c. 1796.

- Draw on the stone with a greasy crayon or a tusche wash; the drawing takes ink and the rest stays wet.
- Pull the print in a press at a run of 20 to 200 copies for an artist print, or more for a poster.
- Use one stone for each colour; 3 to 5 stones give a poster.
- Keep the soft crayon grain and the dark, velvet black.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Imprimerie Chaix** (company, Paris, 1845–1981), made the style. A Paris printing works that Napoléon Chaix founded. From 1881 it printed the colour posters of Jules Chéret, its artistic director. It merged with Desfossé-Néogravure in 1965, and the Saint-Ouen works were sold in 1981.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #2B2A3A | #2B2A3A, #2A2A2A | inks |
| Paper colour (`paper_colour`) | #F2EAD6 | #F2EAD6, #F6F1E4 | substrate |
| Ink count (`ink_count`) | 4 | 3–8 | inks, registration |
| Screen ruling (`screen_ruling`) | 60 | 40–90 lines per inch | screening |
| Misregistration (`misregistration`) | 0.6 | 0–1.2 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more decorative**: move toward [`art-nouveau-web`](../art-nouveau-web/SKILL.md) (Art Nouveau (web)). Add a halo and a frame of whiplash lines and flowers round the figure, in the manner of Mucha.
- If the user asks for **flatter and more modern**: move toward [`pochoir-plate`](../pochoir-plate/SKILL.md) (Pochoir plate). Drop the grain for flat, opaque colours put on through stencils, with a thin key line.

- **Led to (go here for a newer version):** [`ben-day-comic-print`](../ben-day-comic-print/SKILL.md), [`mir-iskusstva-book-graphics`](../mir-iskusstva-book-graphics/SKILL.md), [`psychedelic-concert-poster`](../psychedelic-concert-poster/SKILL.md), [`ravi-varma-oleograph`](../ravi-varma-oleograph/SKILL.md), [`yuefenpai-calendar-poster`](../yuefenpai-calendar-poster/SKILL.md)
- **Was rejected by:** [`pochoir-plate`](../pochoir-plate/SKILL.md), [`private-press-book`](../private-press-book/SKILL.md)
- **Mixes well with:** [`collotype-print`](../collotype-print/SKILL.md), [`crayon-lithograph-print`](../crayon-lithograph-print/SKILL.md), [`wood-type-poster`](../wood-type-poster/SKILL.md)
- **Kin in another domain:** [`art-nouveau-interior`](../art-nouveau-interior/SKILL.md), [`art-nouveau-web`](../art-nouveau-web/SKILL.md), [`post-impressionism`](../post-impressionism/SKILL.md)
- **Nearest by vector profile:** [`meiji-kosen-ga-print`](../meiji-kosen-ga-print/SKILL.md), [`yuefenpai-calendar-poster`](../yuefenpai-calendar-poster/SKILL.md), [`chiaroscuro-woodcut-print`](../chiaroscuro-woodcut-print/SKILL.md)

## Emotional target

Joy and spectacle: the viewer feels the pleasure of the city at night, a café or a show.

**Keywords:** festive, joyful, theatrical, bright, seductive · **Brand archetypes:** lover, jester, explorer

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Poster for La Vie parisienne](https://commons.wikimedia.org/wiki/File:Jules_Ch%C3%A9ret_-_Poster_for_Jacques_Offenbach%27s_La_Vie_parisienne_(1866).jpg) (Jules Chéret, 1866): image, Public domain. Wikimedia Commons
- [Poster for Polyeucte](https://commons.wikimedia.org/wiki/File:Poster_for_the_premi%C3%A8re_production_of_Charles_Gounod%27s_Polyeucte_by_Jules_Ch%C3%A9ret.jpg) (Jules Chéret, 1878): image, Public domain. Wikimedia Commons
- [Advertisement for Job cigarette paper](https://commons.wikimedia.org/wiki/File:Alphonse_Mucha_-_Advertisment_for_Job_cigarettes,_1896.jpg) (Alphonse Mucha, 1896): image, Public domain. Wikimedia Commons
- [Poster for Gismonda](https://commons.wikimedia.org/wiki/File:Alphonse_Mucha_-_Poster_for_Victorien_Sardou%27s_Gismonda_starring_Sarah_Bernhardt.jpg) (Alphonse Mucha, 1894): image, Public domain. Wikimedia Commons

## Sources

- [Chromolithography (Wikipedia)](https://en.wikipedia.org/wiki/Chromolithography)
- [Jules Chéret (Wikipedia)](https://en.wikipedia.org/wiki/Jules_Chéret)
- Ruth E. Iskin, The Poster: Art, Advertising, Design, and Collecting, 1860s–1900s (Dartmouth, 2014)

---

Generated from [`data/print/styles/chromolithograph-poster.json`](../../data/print/styles/chromolithograph-poster.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
