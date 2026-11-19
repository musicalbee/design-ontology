---
name: cuisine-classique
description: "Apply the Cuisine classique style (1884–1965) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: escoffier, classic french cuisine, haute cuisine 1900, grand hotel dinner, mother sauces, peche melba."
domain: cuisine
era: grande-and-classique
triggers:
  - "escoffier"
  - "classic french cuisine"
  - "haute cuisine 1900"
  - "grand hotel dinner"
  - "mother sauces"
  - "peche melba"
  - "tournedos rossini"
  - "belle epoque menu"
vector_profile:
  composition: 3
  transformation: 4
  locality: 2
  richness: 5
  flavour_intensity: 2
---

# Cuisine classique

> Simplify Carême and make the kitchen a system: every dish comes from a small set of bases, cooked by a station that does one task.

The kitchen of the grand hotel as Auguste Escoffier set it down. A brigade of stations cooks a menu of courses from a fixed system of stocks and mother sauces, and serves each dish on its own plate. Le Guide culinaire of 1903 holds about 5,000 recipes of the system.

**Period:** 1884–1965 · **Era:** Grande and classique · **Domain:** Cuisine · **Also called:** Escoffier cuisine, Classic French cuisine, Hotel cuisine

## When to load this skill

Load it when the user asks for: "escoffier", "classic french cuisine", "haute cuisine 1900", "grand hotel dinner", "mother sauces", "peche melba", "tournedos rossini", "belle epoque menu".

Good for: a period dinner scene in a grand hotel, a menu for a classic French restaurant, a food photograph of a classic sauced dish.

Do not use it when:
- the brief wants a light or vegetable-led plate
- the brief wants a modern tasting menu
- the brief is home or street food

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Cuisine classique, you MUST:

1. Keep a white stock, a brown stock and a fish fumet ready each day; every sauce starts from one of them.
2. Derive each sauce from one of five mother sauces: espagnole, velouté, béchamel, tomato and hollandaise.
3. Split the kitchen into stations: the saucier, the rôtisseur, the poissonnier, the entremetier, the garde-manger and the pâtissier.
4. Serve à la russe: one course after another, each on a plate, in the order of the menu.
5. Cut the number of garnishes, so that the main ingredient is the subject of the plate.
6. Name a dish after its garnish or a patron: Rossini, Melba, Véronique, Jeannette.
7. Finish each sauce with butter off the heat for a gloss.
8. Use the same cut for each piece of a garnish: julienne, brunoise, tournée to 7 faces.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A sauce thickened with bread or ground almonds.
- **NEVER:** Every dish of a meal on the table at once.
- **NEVER:** An edible architecture of sugar and pastry on the table.
- **NEVER:** A garnish that hides the main ingredient.
- **NEVER:** Raw fish, raw meat or undercooked vegetables.
- **NEVER:** A sauce made to order without a stock.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■□□` 3/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■■□` 4/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■□□□` 2/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■■■` 5/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** One main piece at the centre of the plate under a coat of sauce, with a garnish of turned vegetables or a croûton beside it.
- **Plate:** A white porcelain plate of 260 to 280 mm with a gold or a monogrammed rim, or a silver platter for the guéridon.
- **Portion:** A main piece of 150 to 200 g with 60 to 80 ml of sauce and two or three garnishes.
- **Height:** The food stands 20 to 40 mm high; the sauce coats the piece and pools 3 to 5 mm deep at its foot.
- **Rules:**
  - Put the main piece at the centre and coat it, or put the sauce beside it in a sauce boat.
  - Turn each root vegetable to seven faces and 5 cm long.
  - Glaze a roast or a sauced piece so that it shines under the lamps of the dining room.
  - Carve or finish a large piece at a guéridon at the table, then plate it in front of the guest.
  - Keep the rim of the plate clean; wipe it before the plate leaves the pass.

## Pantry

- **Primary:** butter · cream · veal · sole · foie-gras · truffle · beef · egg
- **Secondary:** shallot · tarragon · fine-herbs · wine · peach · chicken · game-birds · caviar · lemon · cheese · wheat · grape
- **Avoid:** chilli · soy-sauce · sodium-alginate · miso
- **Rule:** Build on butter, cream and veal stock; add a luxury ingredient (truffle, foie gras or caviar) to the dish of honour.

## Technique

- **Methods:** stock-making · mother-sauces · roux · emulsion-sauce · poaching · braising · oven-roasting · aspic
- **Bases:** A white veal stock, a brown veal stock, a fish fumet, a demi-glace reduced from espagnole, and a stock of court-bouillon for poaching.
- **Details:** A turned vegetable, a croûton fried in butter, a sauce finished with butter, a slice of truffle on a white sauce.

## Flavour

- **Profile:** Rich, round and meaty: reduced stock, butter and cream, with the perfume of truffle, Madeira and tarragon.
- **Balance:** Umami and fat lead; a little acid from wine, lemon or vinegar lifts the emulsion sauces; sweet stays in the dessert.
- **Fat:** Butter and cream give 40 to 60 per cent of the energy of a sauced main dish.
- **Seasoning:** Salt and white pepper, a bouquet garni in the stock, and fines herbes at the end. No chilli and few spices.

## Palette

- **Strategy:** Use the white of the plate and the ivory of the cream sauces, the brown of the demi-glace and the black of truffle, with one bright garnish.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Porcelain white | `#F6F3EC` | plate |
| Velouté ivory | `#EADBB8` | white sauce |
| Demi-glace brown | `#5A3418` | brown sauce |
| Truffle black | `#1E1A17` | garnish |
| Gold rim | `#B8943E` | rim and silver |
| Glazed carrot | `#D9822B` | vegetable |
| Sole white | `#F2EEE4` | fish |

## Service & table

- **Format:** Service à la russe in a hotel dining room: the waiter brings each course on a plate or carves it at a guéridon.
- **Courses:** Seven to twelve courses at a dinner: hors d'oeuvre, soup, fish, entrée, roast, salad, vegetable, sweet and dessert.
- **Tableware:** White porcelain with a gold rim, a silver cloche and platter, crystal glasses for each wine and a white linen cloth.
- **Setting:** A grand hotel with electric light; a brigade of 30 to 80 cooks under a chef de cuisine and a maître d'hôtel in tails.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| dessert | Pêche Melba | peach | poaching |
| fish-course | Sole Véronique | sole | poaching |
| entree | Tournedos Rossini | beef | mother-sauces |
| cold-buffet | Suprêmes de volaille Jeannette | chicken | aspic |
| soup | Consommé double | beef | stock-making |

## Prompt primer

- **Positive:** classic French haute cuisine · Belle Époque hotel dining room · white porcelain plate with gold rim · fillet under glossy brown demi-glace · sole in ivory velouté · turned vegetables · slice of black truffle · silver cloche · crystal glasses · white linen tablecloth · warm electric light · overhead plated dish photograph
- **Negative:** foam · smear of sauce · rustic wooden board · chilli · raw fish · slate plate · tweezers garnish

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Pêche Melba | Auguste Escoffier, Savoy Hotel | 1893 |
| Le Guide culinaire | Auguste Escoffier | 1903 |
| Suprêmes de volaille Jeannette | Auguste Escoffier | 1896 |
| Ma cuisine | Auguste Escoffier | 1934 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Kitchen brigade (process)

A kitchen split into stations, each with one task and one chief, under a chef de cuisine; a dish passes from station to station like a part on a line. Origin: cuisine, Savoy Hotel, London, c. 1890.

- Give each station one task: sauce, roast, fish, vegetables, cold kitchen or pastry.
- Call each order from the pass, and let each station start its part at the call.
- Assemble the plate at the pass, and let the chef check it before it leaves.

### Mother sauce system (process)

A system that derives all the sauces of a kitchen from a few base sauces. A cook who knows the base can make many small sauces from it. Origin: cuisine, Paris, 1833.

- Make each base sauce from a stock and a roux: espagnole, velouté and béchamel.
- Add one item to a base sauce, such as herbs, wine or cream, to make a small sauce.
- Keep the base sauces ready each day, and finish each small sauce to order.

### Roux and stock base (process)

A pair of kitchen bases: a stock made from bones and meat, and a roux of flour and butter that thickens it. Most French sauces of later styles begin here. Origin: cuisine, Paris, 1651.

- Simmer bones, meat and vegetables in water for several hours and strain the stock.
- Cook flour in butter over low heat to the colour that the sauce needs.
- Whisk the stock into the roux and simmer the sauce until it coats a spoon.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Le Cordon Bleu** (school, Paris, 1895–now), taught the style. A cookery school in Paris that taught the classic French kitchen to home cooks and to professionals from abroad.
- **Savoy Hotel** (workshop, London, 1889–now), launched the style. A London hotel with electric light and its own restaurant kitchen. Escoffier and Ritz ran it from 1890 to 1897.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 9 | 5–14 | service, signatures |
| Negative space (`negative_space`) | 0.35 | 0.2–0.5 | plating |
| Portion (`portion_g`) | 320 | 220–450 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–1 | flavour, pantry |
| Fat share (`fat_share`) | 0.5 | 0.35–0.65 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F6F3EC | #F6F3EC, #FFFFFF, #C9C9C5 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter, shorter, plated by the chef**: move toward [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md) (Nouvelle cuisine). Drop the roux, reduce the stock without flour, cook the fish pink, and arrange each plate in the kitchen on a large white plate.
- If the user asks for **grander, with towers of sugar**: move toward [`grande-cuisine`](../grande-cuisine/SKILL.md) (Grande cuisine). Add a pièce montée, serve many dishes at once on the table, and dress each dish with hâtelets and aspic.

- **Came from (go here for a more orthodox version):** [`grande-cuisine`](../grande-cuisine/SKILL.md)
- **Led to (go here for a newer version):** [`haute-regionale`](../haute-regionale/SKILL.md), [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Was rejected by:** [`bistronomie`](../bistronomie/SKILL.md), [`cuisine-minceur`](../cuisine-minceur/SKILL.md), [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md), [`naturalist-cuisine`](../naturalist-cuisine/SKILL.md), [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md)
- **Kin in another domain:** [`beaux-arts-architecture`](../beaux-arts-architecture/SKILL.md), [`victorian-interior`](../victorian-interior/SKILL.md)
- **Nearest by vector profile:** [`cuisine-francoise`](../cuisine-francoise/SKILL.md), [`grande-cuisine`](../grande-cuisine/SKILL.md), [`renaissance-banquet`](../renaissance-banquet/SKILL.md)

## Emotional target

The calm of a perfect order: a known dish, cooked exactly, served by a staff who know their roles.

**Keywords:** opulent, ordered, rich, formal, assured · **Brand archetypes:** ruler, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Le guide culinaire, 1903 (title page and text)](https://archive.org/details/b21525912) (Auguste Escoffier, 1903): document, Public domain. Auguste Escoffier; scan by the Wellcome Library

## Sources

- [Wikipedia: Auguste Escoffier](https://en.wikipedia.org/wiki/Auguste_Escoffier)
- [Wikipedia: Brigade de cuisine](https://en.wikipedia.org/wiki/Brigade_de_cuisine)
- Kenneth James, Escoffier: The King of Chefs (2002)

---

Generated from [`data/cuisine/styles/cuisine-classique.json`](../../data/cuisine/styles/cuisine-classique.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
