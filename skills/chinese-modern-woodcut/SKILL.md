---
name: chinese-modern-woodcut
description: "Apply the Chinese modern woodcut style (1931–1960) when specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration. Load when the user asks for: chinese modern woodcut, new woodcut movement, lu xun woodcut, 1930s chinese protest print, black and white knife cut, yan'an woodcut."
domain: print
era: industrial-press
triggers:
  - "chinese modern woodcut"
  - "new woodcut movement"
  - "lu xun woodcut"
  - "1930s chinese protest print"
  - "black and white knife cut"
  - "yan'an woodcut"
  - "social realist woodcut"
vector_profile:
  tone_method: 2
  ink_layering: 1
  registration_play: 1
  surface_relief: 2
  hand_trace: 5
---

# Chinese modern woodcut

> A cheap block of wood and one knife can give a poor and angry public a picture of its own life and its own fight.

In 1931 Lu Xun urged young artists to learn the European expressionist woodcut of Kollwitz and Masereel. They cut black-and-white prints on cheap wood and printed many on thin paper, bold and rough.

**Period:** 1931–1960 · **Era:** Industrial press · **Domain:** Print · **Also called:** New Woodcut Movement, 新兴木刻运动, Modern woodcut movement

## When to load this skill

Load it when the user asks for: "chinese modern woodcut", "new woodcut movement", "lu xun woodcut", "1930s chinese protest print", "black and white knife cut", "yan'an woodcut", "social realist woodcut".

Good for: posters and covers on social themes, editorial images on history and labour, album and zine covers, campaign material.

Do not use it when:
- The brief needs soft colour or a decorative mood.
- The picture needs a photographic tone.

## System directives

When specifying, prompting or art-directing a printed piece or its look on screen: a poster, a plate, a book page, a zine, a label or a print-look illustration in Chinese modern woodcut, you MUST:

1. Cut the block yourself, with a knife, in black ink on white, or in black and one flat colour.
2. Build the image from heavy black masses and white knife lines, and keep the contrast high.
3. Choose the people as the subject: workers, farmers, soldiers, a crowd, a portrait of a hero.
4. Cut the line rough and angular, 0.5–2 mm wide. Leave the knife edge visible.
5. Allow some cross-cut hatching in the shadow, but keep most tones as a mass or a white line.
6. Print many copies on thin paper by hand rubbing with a spoon or a baren, so the print is cheap to share.
7. Add a short caption or a date, and keep the sheet small enough for a magazine page or a wall.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A soft colour gradient or a pastel set.
- **NEVER:** Halftone dots or a photograph.
- **NEVER:** A thin, delicate, decorative line.
- **NEVER:** A clean vector edge with no cut mark.
- **NEVER:** A pretty or neutral subject with no social point.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Tone method | `■■□□□` 2/5 | solid ink, no tone | fine screen or continuous tone |
| Ink layering | `■□□□□` 1/5 | one ink | many overprinted inks |
| Registration play | `■□□□□` 1/5 | exact register | visible misregister as a feature |
| Surface relief | `■■□□□` 2/5 | flat, ink on the surface | deep bite or emboss in the sheet |
| Hand trace | `■■■■■` 5/5 | uniform machine output | each sheet differs by hand |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Process

- **Family:** relief
- **Matrix:** A plank of pear or boxwood, cut on the face with a knife.
- **Press:** No press. The artist rubs the back of the thin sheet with a spoon or a baren.
- **Image making:** The artist draws, cuts and prints. Study groups and schools teach the craft.
- **Edition:** Hundreds to thousands of cheap copies.

## Inks

- **Strategy:** One black ink, sometimes with one flat colour added from a second block. Print on thin paper.
- **Ink count min:** 1
- **Ink count max:** 2
- **Overprint:** opaque

**Colours**

| Name | Hex | Role |
|---|---|---|
| Black ink | `#1C1C1C` | all the image |

## Tone and screen

- **Method:** line
- **Ruling lpi:** 30
- **Rule:** Make a tone with heavy black masses and white knife lines, with some cross-cut hatching at about 30 lines an inch.

**Angles**

|  |
||
|  |

## Registration

- **Tolerance mm:** 0
- **Rule:** One block prints all the image, so there is no register. A second block for colour can shift 1–2 mm.

## Stock

- **Stock:** Thin Chinese paper of bamboo or bark fibre.
- **Weight gsm min:** 25
- **Weight gsm max:** 50
- **Ground:** #E9E0C8
- **Finish:** Unsized and absorbent, with a soft, thin sheet.

## Surface

- **Impression:** Light. The ink shows a slight emboss on the back of the thin sheet.
- **Sheen:** Matt black ink on matt paper.
- **Texture:** Dense black masses, rough knife edges, and the fibres of thin paper.

## Process marks

- **Marks:** white knife-cut lines · heavy black masses · rough edges · wood-grain streaks in solids · portrait of a hero or a worker

## Prompt primer

- **Positive:** Chinese modern woodcut 1930s · black and white knife cut · expressionist heavy black mass · social realist figures · rough white lines · thin paper · workers, refugees and the war of resistance · high contrast
- **Negative:** colour gradient · halftone · photographic · soft pastel · clean vector

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Woodcut (process)

A print from a block of wood with the white parts cut away; the result is flat colour, hard edges and visible grain. Origin: print, Dunhuang, 868.

- Cut the block along the grain with a knife and a gouge; leave a line of 1mm to 3mm for the black.
- Use one block for each colour and register them within 1 mm.
- Print with a flat, opaque ink and leave the grain and the knife marks visible.
- Keep the shapes flat, with no more than 3 to 6 tones in a print.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Lu Xun Academy of Arts** (school, Yan'an, China, 1938–now), taught the style. An art school that began in Yan'an in April 1938. It taught the woodcut to young artists. It still runs as the Lu Xun Academy of Fine Arts in Shenyang.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Key ink (`key_ink`) | #1C1C1C | #1C1C1C, #2A2A2A, #2A1C1C | inks |
| Paper colour (`paper_colour`) | #E9E0C8 | #E9E0C8, #EFE8D4, #E2D8BC | substrate |
| Ink count (`ink_count`) | 1 | 1–2 | inks, registration |
| Screen ruling (`screen_ruling`) | 30 | 15–50 lines per inch | screening |
| Misregistration (`misregistration`) | 0 | 0–1.5 mm | registration |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more folk and in colour**: move toward [`nianhua-new-year-print`](../nianhua-new-year-print/SKILL.md) (Chinese nianhua New Year woodblock print). Add 3–5 flat colour blocks in vermilion, green and yellow, and fill the sheet with auspicious motifs.
- If the user asks for **more European**: move toward [`expressionist-woodcut-print`](../expressionist-woodcut-print/SKILL.md) (Die Brucke woodcut). Cut deeper gouge marks, show the plank grain, and print on a heavy cream paper.

- **Came from (go here for a more orthodox version):** [`expressionist-woodcut-print`](../expressionist-woodcut-print/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)
- **Nearest by vector profile:** [`cordel-xilogravura`](../cordel-xilogravura/SKILL.md), [`drypoint-print`](../drypoint-print/SKILL.md), [`woodcut-relief-print`](../woodcut-relief-print/SKILL.md)

## Emotional target

Urgency and solidarity: the viewer feels a hard truth cut in black, and a people who stand together.

**Keywords:** urgent, militant, stark, solidary, raw · **Brand archetypes:** hero, outlaw

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Portrait of Lu Xun](https://commons.wikimedia.org/wiki/File:%22Portrait_of_Lu_Xun%22_by_Li_Qun_1936.jpg) (Li Qun, 1936): image, CC BY-SA 4.0. Li Qun, Wikimedia Commons (liqunwoodcuts.org)
- [Giving Horses](https://commons.wikimedia.org/wiki/File:%22Giving_Horses%22_by_Li_Qun_1948.jpg) (Li Qun, 1948): image, CC BY-SA 4.0. Li Qun, Wikimedia Commons (liqunwoodcuts.org)

## Sources

- [Wikipedia: Lu Xun](https://en.wikipedia.org/wiki/Lu_Xun)
- [Wikipedia: Lu Xun Academy of Fine Arts](https://en.wikipedia.org/wiki/Lu_Xun_Academy_of_Fine_Arts)
- [Wikimedia Commons: Li Qun woodcuts](https://commons.wikimedia.org/wiki/Category:Li_Qun)

---

Generated from [`data/print/styles/chinese-modern-woodcut.json`](../../data/print/styles/chinese-modern-woodcut.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
