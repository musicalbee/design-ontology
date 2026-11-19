---
name: grande-cuisine
description: "Apply the Grande cuisine style (1815–1880) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: careme, grande cuisine, piece montee, chaud-froid, vol-au-vent, grand sauces."
domain: cuisine
era: grande-and-classique
triggers:
  - "careme"
  - "grande cuisine"
  - "piece montee"
  - "chaud-froid"
  - "vol-au-vent"
  - "grand sauces"
  - "napoleonic banquet"
  - "rothschild dinner"
vector_profile:
  composition: 4
  transformation: 5
  locality: 2
  richness: 5
  flavour_intensity: 2
---

# Grande cuisine

> Make cooking an art of order and show: a system of sauces on the stove, and architecture of sugar and pastry on the table.

The cuisine of the great houses as Marie-Antoine Carême wrote it. Four grand sauces form the base of a system. Pastry and sugar make a pièce montée that looks like a building. Many dishes stand on the table at once.

**Period:** 1815–1880 · **Era:** Grande and classique · **Domain:** Cuisine · **Also called:** Carême cuisine, Grand cuisine, High French cuisine of the 19th century

## When to load this skill

Load it when the user asks for: "careme", "grande cuisine", "piece montee", "chaud-froid", "vol-au-vent", "grand sauces", "napoleonic banquet", "rothschild dinner".

Good for: a banquet scene of the early 19th century, a menu or a still life of a grand dinner, a sugar and pastry centrepiece design.

Do not use it when:
- the brief wants a light or plain dish
- the brief wants a modern tasting menu
- the brief is home or street food

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Grande cuisine, you MUST:

1. Derive each sauce from a small set of grand sauces: espagnole, velouté, allemande and béchamel.
2. Cook the stock first, and clarify it until it is clear as glass.
3. Build a pièce montée of sugar and pastry in the shape of a temple, a ruin or a fountain.
4. Dress each dish with hâtelets, a skewer with a truffle or a crayfish at the top.
5. Serve à la française: many dishes at once, in a pattern drawn on a plan.
6. Cover a cold dish with chaud-froid and aspic, and pipe a pattern on it.
7. Write each recipe in exact steps, and give each cut and each garnish its name.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A sauce made without a stock.
- **NEVER:** A plain dish with no garnish.
- **NEVER:** A dish for one guest on one plate.
- **NEVER:** A table without a centrepiece.
- **NEVER:** Chilli, soy or raw fish.
- **NEVER:** Spice in the manner of the Middle Ages.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■□` 4/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■■■` 5/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■□□□` 2/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■■■` 5/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** Each dish is built as a symmetric shape on a platter: a main piece with garnish in a ring, and hâtelets in the top.
- **Plate:** A large silver or porcelain platter for each dish, and a gilt porcelain plate for each guest.
- **Portion:** Each guest takes a piece of 100 to 160 g from a platter of 8 to 12 pieces, with a ladle of sauce.
- **Height:** A dish stands 150 to 300 mm high; a pièce montée stands 600 mm or more.
- **Rules:**
  - Set the pièce montée at the centre of the table and plan the dishes round it on a drawn plan.
  - Coat each cold piece with chaud-froid, and then with a glaze of aspic.
  - Stand a hâtelet in the top of each large dish.
  - Arrange the garnish in a ring round the main piece, one kind in each section.
  - Keep the pattern symmetric on each side of the table.

## Pantry

- **Primary:** butter · cream · veal · foie-gras · truffle · cane-sugar · egg · sole
- **Secondary:** beef · chicken · game-birds · shellfish · salmon · fine-herbs · tarragon · shallot · wine · wheat · orchard-fruit · peach · asparagus · artichoke · black-pepper · caviar
- **Avoid:** chilli · soy-sauce · miso · grains-of-paradise
- **Rule:** Build on butter, cream and veal stock, add truffle or foie gras to the dish of honour, and use sugar and pastry for the centrepiece.

## Technique

- **Methods:** mother-sauces · stock-making · roux · emulsion-sauce · aspic · pate-en-croute · poaching · boiling
- **Bases:** A white veal stock, a brown stock, a fish stock, a clarified consommé, and four grand sauces: espagnole, velouté, allemande and béchamel.
- **Details:** A sauce strained through a cloth, a coat of chaud-froid, a skewer with a truffle, a puff pastry of many layers, a sugar piece built on a frame of wire.

## Flavour

- **Profile:** Rich, round and layered: reduced stock, butter and cream, with the scent of truffle and the sharp edge of wine.
- **Balance:** Umami and fat lead; wine, lemon and vinegar lift the sauces; sugar stays in the pastry and the centrepiece.
- **Fat:** Butter and cream give 40 to 55 per cent of the energy of a sauced main dish.
- **Seasoning:** Salt, white pepper, a bouquet garni in the stock, and fines herbes and truffle to finish.

## Palette

- **Strategy:** Use white sugar and aspic glaze, the ivory of velouté and the brown of espagnole, with the gold of gilt, on a white cloth.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sugar white | `#F7F3EA` | pièce montée |
| Velouté ivory | `#EAD9B0` | white sauce |
| Espagnole brown | `#5B3418` | brown sauce |
| Aspic amber | `#D9B15A` | glaze |
| Gilt gold | `#C9A23C` | rim and hâtelet |
| Truffle black | `#1F1B18` | garnish |
| Crayfish red | `#B5402B` | garnish |

## Service & table

- **Format:** Service à la française: all dishes of a service stand on the table at once, in a pattern drawn on a plan, and guests take what is near.
- **Courses:** Two to four services of 6 to 20 dishes each, with soups, fish, entrées, roasts and entremets, and a pièce montée at the centre.
- **Tableware:** Silver platters, hâtelets, porcelain with gilt rims, crystal and a white linen cloth.
- **Setting:** The dining room of a great house, such as the Rothschild house or an embassy, with a cook of a hundred pieces on the plan.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| soup | Consommé clarified with egg white | beef | stock-making |
| fish-course | Poached sole in velouté sauce | sole | poaching |
| entree | Vol-au-vent of chicken in velouté | chicken | mother-sauces |
| cold-buffet | Chicken in chaud-froid and aspic | chicken | aspic |
| banquet-centrepiece | Pièce montée: a temple of sugar and pastry | cane-sugar | boiling |

## Prompt primer

- **Positive:** 19th century grand banquet · pièce montée of sugar and pastry · silver platters with hâtelets · chaud-froid glazed fowl · aspic glaze · gilt porcelain · crystal and candelabra · white linen tablecloth · symmetric table plan · engraving style · vol-au-vent · overhead view of a great table
- **Negative:** foam · smear of sauce · rustic wooden board · chilli · raw fish · single plated dish · tweezers garnish · slate plate

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Le Pâtissier royal parisien | Marie-Antoine Carême | 1815 |
| Le Pâtissier pittoresque | Marie-Antoine Carême | 1815 |
| Le Cuisinier parisien | Marie-Antoine Carême | 1828 |
| L'Art de la cuisine française au dix-neuvième siècle | Marie-Antoine Carême | 1833 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Mother sauce system (process, invented here)

A system that derives all the sauces of a kitchen from a few base sauces. A cook who knows the base can make many small sauces from it. Origin: cuisine, Paris, 1833.

- Make each base sauce from a stock and a roux: espagnole, velouté and béchamel.
- Add one item to a base sauce, such as herbs, wine or cream, to make a small sauce.
- Keep the base sauces ready each day, and finish each small sauce to order.

### Roux and stock base (process)

A pair of kitchen bases: a stock made from bones and meat, and a roux of flour and butter that thickens it. Most French sauces of later styles begin here. Origin: cuisine, Paris, 1651.

- Simmer bones, meat and vegetables in water for several hours and strain the stock.
- Cook flour in butter over low heat to the colour that the sauce needs.
- Whisk the stock into the roux and simmer the sauce until it coats a spoon.

### Service à la française (process)

A way to serve a meal: all the dishes of one service stand on the table together, and the guests take from the dishes near them. A new service replaces the old one. Origin: cuisine, Courts of France, c. 1300.

- Set all the dishes of one service on the table at the same time.
- Place the dishes in a symmetric pattern that a plan on paper shows.
- Clear the whole service at once and set the next service in its place.

### Sugar sculpture (skill)

A table piece that a cook models from sugar paste, marzipan and pastry in the shape of a building or a beast. It shows the wealth and skill of the host. Origin: cuisine, Courts of France and England, c. 1400.

- Boil sugar to the stage that suits the piece and cast or model it in a mould.
- Build the frame of the piece from pastry, wire or wood, and fix the sugar parts to it.
- Set the piece at the centre of the table, and bring it in at the end of a service.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Le Cuisinier parisien** (publisher, Paris, 1828–now), published the style. A cookbook by Carême on the grand sauces, the stocks and the dressing of large dishes for the table of a great house.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 6 | 4–10 | service, signatures |
| Negative space (`negative_space`) | 0.1 | 0–0.25 | plating |
| Portion (`portion_g`) | 160 | 100–240 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–1 | flavour, pantry |
| Fat share (`fat_share`) | 0.45 | 0.3–0.6 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F7F3EA | #F7F3EA, #FFFFFF, #C9C9C5 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **simpler, with fewer garnishes and plated courses**: move toward [`cuisine-classique`](../cuisine-classique/SKILL.md) (Cuisine classique). Drop the pièce montée, serve each course on a plate in turn, and cut the garnish to two or three items.
- If the user asks for **plainer, with fewer sauces and a smaller table**: move toward [`cuisine-francoise`](../cuisine-francoise/SKILL.md) (Cuisine françoise). Drop the sugar architecture, cut the sauces to a stock and a roux, and use herbs for taste.

- **Came from (go here for a more orthodox version):** [`cuisine-francoise`](../cuisine-francoise/SKILL.md)
- **Led to (go here for a newer version):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Kin in another domain:** [`neoclassical-architecture`](../neoclassical-architecture/SKILL.md)
- **Nearest by vector profile:** [`cuisine-classique`](../cuisine-classique/SKILL.md), [`cuisine-francoise`](../cuisine-francoise/SKILL.md), [`renaissance-banquet`](../renaissance-banquet/SKILL.md)

## Emotional target

Awe at order and ambition: a table that looks like a monument, made by a hand that has planned each part.

**Keywords:** monumental, ordered, opulent, ornate, theatrical · **Brand archetypes:** ruler, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Design for a pièce montée, from Carême's Le Pâtissier pittoresque](https://commons.wikimedia.org/wiki/File:Pi%C3%A8ce_mont%C3%A9e_d%27Antonin_Car%C3%AAme.jpg1.jpg) (Marie-Antoine Carême, 1815): image, Public domain. Antonin Carême; scan by the Wellcome Library, via Wikimedia Commons

## Sources

- [Wikipedia: Marie-Antoine Carême](https://en.wikipedia.org/wiki/Marie-Antoine_Car%C3%AAme)
- [Wikipedia: Grande cuisine](https://en.wikipedia.org/wiki/Haute_cuisine)
- Ian Kelly, Cooking for Kings: The Life of Antonin Carême (2003)

---

Generated from [`data/cuisine/styles/grande-cuisine.json`](../../data/cuisine/styles/grande-cuisine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
