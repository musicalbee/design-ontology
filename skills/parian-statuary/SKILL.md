---
name: parian-statuary
description: "Apply the Parian statuary style (1845–1900) when specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware. Load when the user asks for: parian ware, parian figure, parian statuette, victorian bust, unglazed porcelain statuette, marble-like porcelain."
domain: ceramics
era: industrial-pottery
triggers:
  - "parian ware"
  - "parian figure"
  - "parian statuette"
  - "victorian bust"
  - "unglazed porcelain statuette"
  - "marble-like porcelain"
  - "victorian parlour sculpture"
  - "copeland parian"
vector_profile:
  ornamentation: 3
  hand_mark: 2
  refinement: 4
  glaze_depth: 1
  chromatic_intensity: 1
---

# Parian statuary

> Fine sculpture comes into the Victorian parlour when a white porcelain slip is cast in a mould and fired without a glaze: marble, but small and cheap.

Unglazed white porcelain that copies marble, cast in moulds as statuettes and busts. Victorian potters made it for the home, from copies of known sculpture to sentimental and literary figures.

**Period:** 1845–1900 · **Era:** Industrial pottery · **Domain:** Ceramics · **Also called:** Parian ware, Parian figures, Victorian parian marble copies

## When to load this skill

Load it when the user asks for: "parian ware", "parian figure", "parian statuette", "victorian bust", "unglazed porcelain statuette", "marble-like porcelain", "victorian parlour sculpture", "copeland parian".

Good for: a museum or auction label for a parian figure, a Victorian interior prompt, a prop of a white statuette on a shelf, a brief for a marble-look reproduction.

Do not use it when:
- the brief wants a coloured, glazed figure
- the brief needs a cheap folk figure
- the brief wants an art piece with a hand mark

## System directives

When specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware in Parian statuary, you MUST:

1. Cast the figure in plaster moulds from a thin, creamy slip of parian paste.
2. Fire the figure unglazed at about 1200 °C, so that the surface looks like Parian marble.
3. Take the subject from a known sculpture: a Greek Slave, a Dorothea, a Venus, a bust of a poet or a queen.
4. Make the figure 20 to 60 cm high, and the bust 20 to 40 cm.
5. Keep the surface smooth and waxy, with a faint orange-peel grain.
6. Give detail with sharp relief: curls, laurel, lace and drapery, in shallow depth.
7. Add a coloured glaze or a little tinted slip only as a ground, never over the flesh.
8. Mark the base with the maker, the sculptor and the date of the registry.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A glossy glaze over the figure.
- **NEVER:** A bright enamel painting on the dress.
- **NEVER:** A rough earthenware body with visible grain.
- **NEVER:** A pose in rococo S-curves with lace dipped in slip.
- **NEVER:** A cartoon figure with a flat, printed face.
- **NEVER:** A grey or brown clay colour.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■□□` 3/5 | a plain surface | painted, printed, moulded or gilt ornament on every part |
| Hand mark | `■■□□□` 2/5 | machine-exact and identical pieces | each piece shows the hand: throwing rings, finger marks, irregular rims |
| Refinement | `■■■■□` 4/5 | coarse, porous, heavy body | thin, white, dense or translucent body |
| Glaze depth | `■□□□□` 1/5 | a flat, even glaze or bare clay | deep, variegated glaze effects: pooling, crackle, ash runs, flambé |
| Chromatic intensity | `■□□□□` 1/5 | white, earth or one tone | saturated colour and bold pattern |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Form & profile

- **Shape:** Statuettes of classical, historical and sentimental subjects, busts of the famous and small groups, with a base or a pedestal.
- **Profile:** A smooth, closed outline in a classical stance, with a column, a trunk or a rock to support the weight.
- **Foot and rim:** A round or square plinth with a moulded edge, often hollow, with a vent hole and a mark on the underside.
- **Proportion:** Height 20 to 60 cm; the wall is 3 to 6 mm thick, and the proportions are those of the marble original at a reduced scale.
- **Rules:** Reduce a known marble in scale and keep its pose. · Leave all surfaces without glaze. · Keep the seams fine and hide them in folds. · Use a plain, moulded plinth. · Show the sculptor and the maker on the base.

## Clay bodies

- **Primary:** parian
- **Secondary:** european-hard-paste
- **Avoid:** earthenware · creamware · stoneware · terracotta · bone-china
- **Rule:** Use a feldspar-rich porcelain paste that is cast as a thin slip and fires to a fine, waxy surface with a faint cream tone.

## Forming

- **Methods:** slip casting in plaster moulds · piece moulding of heads and limbs · joining of cast parts with slip · fettling of seams with a knife · firing without glaze
- **Joins:** The parts of the figure are cast in moulds and joined with slip while still wet. The seams are cut back and sponged smooth.
- **Details:** A fine orange-peel grain on the surface, a vent hole in the plinth, and a mark of the maker and the sculptor on the base.

## Glaze & decoration

- **Glazes:** biscuit · clear-feldspathic
- **Decorations:** undecorated · relief-moulding · gilding · sprigging
- **Pattern:** The pattern is the form of the sculpture itself. A little gilt or tint, a glazed inside for a vessel, and sprigged flowers or laurel are the only additions.
- **Gloss:** Matt to waxy, 5 to 15 GU on the unglazed parian; a glazed inside is about 80 GU.
- **Wear:** The surface collects dust and yellow stains in the grain. It marks easily with oil, and the fine fingers and the edges break.

## Palette

- **Strategy:** A single warm white that copies marble, with soft grey shadow and a faint cream in the high light.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Parian white | `#EEE9DC` | body |
| Marble shadow | `#C9C2B2` | shadow |
| Cream light | `#F4EFE2` | high light |
| Stain ochre | `#B79E6E` | ageing |

## Firing

- **Kiln:** A coal-fired bottle oven, with the figures in saggars for a single firing.
- **Atmosphere:** oxidation
- **Processes:** casting in plaster moulds · drying of the cast figure · fettling of the seams · firing without glaze at 1200 to 1250 °C · optional glaze or tint on the inside or the base
- **Scale:** A factory process with moulders and finishers. Large firms made hundreds of models, and series for Art Union sales.
- **Signs:** An orange-peel grain, a vent hole in the plinth, hidden seams and a maker's mark.

**Temperature c**

|  |
||
|  |
|  |

## Signature pieces

**Pieces**

| Object | Form | Body | Glaze | Decoration |
|---|---|---|---|---|
| figurine | Reduced copy of a nude Greek Slave on a round plinth | parian | biscuit | undecorated |
| bust | Bust of a queen with a diadem and a draped shoulder, on a socle | parian | biscuit | relief-moulding |
| figure-group | Sentimental group of a mother and a child with a column and a wreath | parian | biscuit | sprigging |
| figurine | Dorothea, a seated girl with a jar, taken from a known sculpture | parian | biscuit | undecorated |
| animal-figure | Hound lying on a base with a gilt collar | parian | biscuit | gilding |

## Prompt primer

- **Positive:** Victorian unglazed parian porcelain statuette · white marble-like surface · reduced copy of a classical sculpture · smooth waxy matt finish · sharp shallow relief in curls and drapery · bust on a round socle · museum photograph, soft side light · faint orange-peel grain
- **Negative:** glossy glaze · bright enamel colours · earthenware · rococo lace · modern resin · cartoon eyes

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| The Greek Slave in parian | Copeland | 1850 |
| Dorothea | John Bell for Minton | 1847 |
| Ariadne on a panther | Minton after Dannecker | 1848 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Slip casting (process)

Liquid clay is poured into a plaster mould. The plaster takes water from the clay and a wall forms on the inside of the mould. Origin: ceramics, Staffordshire, England, c. 1745.

- Make a plaster mould in two or more parts.
- Pour slip into the mould and wait 10 to 20 minutes for a wall of 3 to 5 mm.
- Pour out the rest of the slip.
- Open the mould when the clay is leather-hard and fettle the seam.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Great Exhibition** (exhibition, London, 1851–1851), exhibited the style. The first world's fair, in the Crystal Palace. It showed the ornate manufactured furniture and goods of the Victorian age.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Ornament level (`ornament_level`) | 0.3 | 0.1–0.6 | glaze, signatures |
| Glaze gloss (`glaze_gloss`) | 8 | 0–20 GU | glaze, palette |
| Wall thickness (`wall_thickness`) | 4 | 3–8 mm | form, forming |
| Hand mark (`hand_mark`) | 0.2 | 0.1–0.4 | forming, form, signatures |
| Era blend (`era_blend`) | 0 | 0–1 | form, firing, signatures |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **older, more delicate, French**: move toward [`biscuit-porcelain-figures`](../biscuit-porcelain-figures/SKILL.md) (Biscuit porcelain figures). Change to a soft-paste body, cut the scale to 15 to 40 cm and take the subject from a pastoral painting.
- If the user asks for **cheap, painted, folk**: move toward [`staffordshire-figures`](../staffordshire-figures/SKILL.md) (Staffordshire figures). Change to an earthenware body with a lead glaze and bold flat enamel colours, and add a name on the base.

- **Came from (go here for a more orthodox version):** [`biscuit-porcelain-figures`](../biscuit-porcelain-figures/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`staffordshire-figures`](../staffordshire-figures/SKILL.md)
- **Was rejected by:** [`art-deco-ceramic-figures`](../art-deco-ceramic-figures/SKILL.md)
- **Kin in another domain:** [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md), [`victorian-manufacture`](../victorian-manufacture/SKILL.md)
- **Nearest by vector profile:** [`glass-ceramic-cookware`](../glass-ceramic-cookware/SKILL.md), [`roman-terra-sigillata`](../roman-terra-sigillata/SKILL.md), [`biscuit-porcelain-figures`](../biscuit-porcelain-figures/SKILL.md)

## Emotional target

A sober, improving calm: the viewer sees white marble in small form and feels the taste, the culture and the order of a Victorian parlour.

**Keywords:** classical, sober, pale, didactic, domestic · **Brand archetypes:** sage, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Parian Beatrice figure, 1860](https://commons.wikimedia.org/wiki/File:Beatrice_Figure,_1860_(CH_18423243).jpg): image, Public domain. Edgar George Papworth Jr.
- [Copeland parian Figure of Medea](https://commons.wikimedia.org/wiki/File:W._T._Copeland_%26_Sons_-_Figure_of_Medea_-_2013.237_-_Cleveland_Museum_of_Art.tif) (W. T. Copeland & Sons): image, CC0. W. T. Copeland & Sons
- [Parian figure of a lion](https://commons.wikimedia.org/wiki/File:Figure_of_a_Lion_MET_DP-1725-011.jpg): image, CC0. Aaron Hays

## Sources

- [Wikipedia: Parian ware](https://en.wikipedia.org/wiki/Parian_ware)
- [Wikipedia: Minton (company)](https://en.wikipedia.org/wiki/Minton_(company))

---

Generated from [`data/ceramics/styles/parian-statuary.json`](../../data/ceramics/styles/parian-statuary.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
