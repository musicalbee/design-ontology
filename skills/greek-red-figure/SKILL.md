---
name: greek-red-figure
description: "Apply the Greek red-figure pottery style (c. 530–320 BC) when specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware. Load when the user asks for: red-figure, greek red figure vase, attic red-figure, euphronios, kylix, calyx krater."
domain: ceramics
era: ancient-clay
triggers:
  - "red-figure"
  - "greek red figure vase"
  - "attic red-figure"
  - "euphronios"
  - "kylix"
  - "calyx krater"
  - "greek pottery painting"
vector_profile:
  ornamentation: 4
  hand_mark: 3
  refinement: 5
  glaze_depth: 2
  chromatic_intensity: 1
---

# Greek red-figure pottery

> A vase is a field for the drawn human body: the figure stays the colour of the clay and the brush line gives it weight, movement and feeling.

Greek vases in which the background is black gloss and the figures keep the red of the clay. The painter draws the inner lines with a brush, so the figures look rounder and freer.

**Period:** c. 530–320 BC · **Era:** Ancient clay · **Domain:** Ceramics · **Also called:** Attic red-figure, Red-figure vase painting

## When to load this skill

Load it when the user asks for: "red-figure", "greek red figure vase", "attic red-figure", "euphronios", "kylix", "calyx krater", "greek pottery painting".

Good for: a museum label for classical Greek vases, a figure scene on a cup or a krater, an educational image of Greek daily life on pottery.

Do not use it when:
- the brief needs colour-filled figures
- the brief needs a glazed finish or a white body

## System directives

When specifying, sourcing or prompting fired clay: tableware, teaware, kitchen and storage ware, vases and display vessels, figures, tiles, architectural ceramics and sanitary and technical ware in Greek red-figure pottery, you MUST:

1. Reserve the figures in the red clay and paint the whole ground in black gloss.
2. Draw the inner lines with a brush in relief lines, thick and raised, for the main contours.
3. Use thinner dilute lines for muscles, hair and folds of cloth.
4. Show the body in three-quarter view, twisted and foreshortened.
5. Frame the picture with a meander or a palmette border, and a plain black wall below.
6. Place one or two figures in the tondo of a cup so that the circle holds the pose.
7. Fire in three stages, oxidation, reduction and re-oxidation, to fix black and red.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** Black silhouettes with incised detail on a red ground.
- **NEVER:** Flat profile figures that do not turn.
- **NEVER:** Thick opaque added colour over the large areas.
- **NEVER:** A crowded frieze with no black field.
- **NEVER:** A glazed surface with clear gloss over the red.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Ornamentation | `■■■■□` 4/5 | a plain surface | painted, printed, moulded or gilt ornament on every part |
| Hand mark | `■■■□□` 3/5 | machine-exact and identical pieces | each piece shows the hand: throwing rings, finger marks, irregular rims |
| Refinement | `■■■■■` 5/5 | coarse, porous, heavy body | thin, white, dense or translucent body |
| Glaze depth | `■■□□□` 2/5 | a flat, even glaze or bare clay | deep, variegated glaze effects: pooling, crackle, ash runs, flambé |
| Chromatic intensity | `■□□□□` 1/5 | white, earth or one tone | saturated colour and bold pattern |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Form & profile

- **Shape:** Kraters, amphorae, hydriai, lekythoi and kylikes with a thin, elegant wall and a clear profile.
- **Profile:** A smooth S-curve with a distinct neck; a kylix has a shallow, wide bowl on a short stem.
- **Foot and rim:** A moulded foot ring or a stem, a thin lip, and handles that follow the form of the neck.
- **Proportion:** Height 20 to 55 cm, wall 2 to 5 mm, and the picture field about half of the height of the body.
- **Rules:**
  - Throw the wall thin and even, so that the picture sits on a clean surface.
  - Set the picture where the form is widest and nearest to the viewer.
  - Paint the base ground black, leave a reserved line under the picture.
  - Keep the handles slim and let the black slip cover them.

## Clay bodies

- **Primary:** earthenware · terracotta
- **Avoid:** porcelain · stoneware · bone-china
- **Rule:** Use a very fine Attic clay with iron that fires to a clear orange-red. The clay must be free of grit, so that the brush line stays sharp.

## Forming

- **Methods:** throwing in parts on the wheel · turning the foot and the lip · hand-built handles · slip refinement by settling
- **Joins:** Parts are joined with slip when the clay is leather-hard; the joins are smoothed under the black paint.
- **Details:** Raised relief lines, a faint preliminary sketch in the clay, and a stilt mark under the foot.

## Glaze & decoration

- **Glazes:** attic-gloss
- **Decorations:** red-figure · incised
- **Pattern:** One main scene of myth, athletics or daily life in reserved red, framed by a meander, a palmette or a wave border.
- **Gloss:** The black ground is glassy, about 70 to 85 GU; the reserved clay is satin.
- **Wear:** The black may flake on the lip and the edges; the line drawing stays crisp.

## Palette

- **Strategy:** Two fired colours, a deep black ground and the red clay, with white and yellow-brown only as a small accent.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Attic red | `#C4623A` | reserved figures |
| Gloss black | `#171310` | ground |
| Dilute line brown | `#6A3A22` | inner detail |
| Added white | `#EEE6D6` | accents |
| Light buff | `#D8A27A` | reserved base |

## Firing

- **Kiln:** A wood-fired updraught kiln with a controlled flue and green wood for the reduction phase.
- **Atmosphere:** mixed
- **Processes:** draw the sketch in the leather-hard clay · paint the black ground and the lines · oxidation phase · reduction phase · re-oxidation phase on cooling
- **Scale:** Workshops in the Kerameikos of Athens made thousands of vases, with a master painter and a team.
- **Signs:** Raised lines that stand up from the clay, a bright black field and a faint sketch under the paint.

**Temperature c**

|  |
||
|  |
|  |

## Signature pieces

**Pieces**

| Object | Form | Body | Glaze | Decoration |
|---|---|---|---|---|
| krater | Calyx krater with a wide mouth and one large scene between the handles | earthenware | attic-gloss | red-figure |
| kylix | Kylix with a round tondo of one figure and a black exterior | terracotta | attic-gloss | red-figure |
| amphora | Neck amphora with a single figure on each side on a black ground | earthenware | attic-gloss | red-figure |
| hydria | Hydria with a domestic scene on the shoulder and a palmette below | earthenware | attic-gloss | incised |

## Prompt primer

- **Positive:** Attic red-figure vase · orange-red figures on glossy black ground · brush-drawn relief lines · three-quarter view figure · meander border · thin elegant wall · kylix tondo with one figure · museum photograph on a neutral ground
- **Negative:** black silhouettes · colour shading · glazed colour pattern · thick coarse wall · modern ceramic glaze

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Sarpedon krater | Euphronios | -515 |
| Bilingual amphora with Herakles | Andokides Painter | -520 |
| Kylix with Eos and Memnon | Douris | -490 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Three-stage firing (process)

One firing in three stages turns a slip black and leaves the clay red. Air is let in, shut out, and let in again. Origin: ceramics, Corinth, Greece, c. 700 BCE.

- Fire the pot in an open kiln with air, so that the whole pot turns red.
- Close the vents and add green wood, so that the whole pot turns black.
- Open the vents and let the air in again at a lower heat.
- Take out the pot: the fine slip stays black and the bare clay becomes red.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Kerameikos potters' quarter** (collective, Athens, Greece, ?–now), made the style. The quarter of Athens where potters and vase painters worked beside the clay beds of the river. Black-figure and red-figure vases came from its workshops.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Ornament level (`ornament_level`) | 0.6 | 0.3–0.9 | glaze, signatures |
| Glaze gloss (`glaze_gloss`) | 75 | 55–88 GU | glaze, palette |
| Wall thickness (`wall_thickness`) | 3.5 | 2–6 mm | form, forming |
| Hand mark (`hand_mark`) | 0.45 | 0.3–0.75 | forming, form, signatures |
| Era blend (`era_blend`) | 0.2 | 0–1 | form, firing, signatures |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **older, more graphic**: move toward [`greek-black-figure`](../greek-black-figure/SKILL.md) (Greek black-figure pottery). Reverse the ground: paint the figures in black slip on red clay and cut the details with a point.
- If the user asks for **Roman, with relief**: move toward [`roman-terra-sigillata`](../roman-terra-sigillata/SKILL.md) (Roman terra sigillata). Remove the painted figure, keep the fine red slip, and mould the relief into the surface.

- **Came from (go here for a more orthodox version):** [`greek-black-figure`](../greek-black-figure/SKILL.md)
- **Led to (go here for a newer version):** [`jasperware-neoclassical`](../jasperware-neoclassical/SKILL.md), [`roman-terra-sigillata`](../roman-terra-sigillata/SKILL.md)
- **Nearest by vector profile:** [`kraak-porcelain`](../kraak-porcelain/SKILL.md), [`greek-black-figure`](../greek-black-figure/SKILL.md), [`della-robbia-relief`](../della-robbia-relief/SKILL.md)

## Emotional target

A quiet, humane poise: the viewer sees a body drawn with a free line and feels a moment of real movement.

**Keywords:** graceful, classical, refined, narrative, balanced · **Brand archetypes:** sage, lover

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Red-figure kylix by the Brygos Painter](https://commons.wikimedia.org/wiki/File:Attic_red-figure_kylix_by_Brygos_Painter,_front_-_Getty_Museum_(86.AE.286).jpg) (Brygos Painter): image, CC0. J. Paul Getty Museum
- [Calyx krater signed by Euphronios, Louvre](https://commons.wikimedia.org/wiki/File:Euphronios_krater_Olympisme_Louvre_G103.jpg) (Euphronios): image, CC BY 4.0. Marie-Lan Nguyen
- [Red-figure calyx krater with Nike and a tripod](https://commons.wikimedia.org/wiki/File:Attic_Red-figure_Calyx_Krater_with_Nike_adorning_a_Tripod,_Unknown_provenance,_c._400_BC_(28432110036).jpg) (Attic workshop): image, CC0. Gary Todd from Xinzheng, China

## Sources

- [Wikipedia: Red-figure pottery](https://en.wikipedia.org/wiki/Red-figure_pottery)
- [Metropolitan Museum of Art: Greek vase painting](https://www.metmuseum.org/toah/hd/gvpa/hd_gvpa.htm)

---

Generated from [`data/ceramics/styles/greek-red-figure.json`](../../data/ceramics/styles/greek-red-figure.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
