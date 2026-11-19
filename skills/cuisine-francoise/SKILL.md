---
name: cuisine-francoise
description: "Apply the Cuisine françoise style (1651–1800) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: la varenne, le cuisinier francois, louis xiv dinner, versailles dinner, french classical cooking 1650, bouquet garni."
domain: cuisine
era: classical-codification
triggers:
  - "la varenne"
  - "le cuisinier francois"
  - "louis xiv dinner"
  - "versailles dinner"
  - "french classical cooking 1650"
  - "bouquet garni"
  - "duxelles"
  - "service a la francaise"
vector_profile:
  composition: 3
  transformation: 4
  locality: 3
  richness: 4
  flavour_intensity: 2
---

# Cuisine françoise

> Cook for the taste of the food itself: build each sauce on a stock and a roux, and use herbs where the medieval kitchen used spice.

The French kitchen after La Varenne. Le Cuisinier françois of 1651 sets down the roux, the stock, the bouquet garni and fines herbes. Spice falls to pepper and nutmeg, and butter replaces lard. The flavour of the main food leads.

**Period:** 1651–1800 · **Era:** Classical codification · **Domain:** Cuisine · **Also called:** La Varenne cuisine, French classical cuisine of the 17th century

## When to load this skill

Load it when the user asks for: "la varenne", "le cuisinier francois", "louis xiv dinner", "versailles dinner", "french classical cooking 1650", "bouquet garni", "duxelles", "service a la francaise".

Good for: a dinner scene at the court of Louis XIV, a menu for a historical French dinner, a food image of a 17th century sauce.

Do not use it when:
- the brief wants strong medieval spice
- the brief wants a plated modern dish
- the brief wants a sauce of tomato

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Cuisine françoise, you MUST:

1. Make a stock first, and build each sauce and each soup on it.
2. Thicken a sauce with a roux of flour and butter, not with bread crumbs.
3. Use fines herbes, a bouquet garni and mushrooms in place of a heavy load of spice.
4. Cut the spice to pepper, nutmeg and clove, and use butter in place of lard.
5. Cook each dish with its own sauce, and give the soup and the entrée their own place.
6. Serve in the French manner: three services of dishes laid out in a pattern on the table.
7. Cook fresh vegetables and fish, and write each recipe with its method in short steps.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A sauce thickened with soaked bread and ground almond.
- **NEVER:** A heavy load of ginger, cinnamon and grains of paradise.
- **NEVER:** Sugar in each savoury dish.
- **NEVER:** A dish of one flat colour with saffron.
- **NEVER:** A plated course for one guest.
- **NEVER:** Chilli, soy or tropical spice.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■□□` 3/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■■□` 4/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■□□` 3/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■■□` 4/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** Each dish is a symmetric shape on a platter: a roast at the centre with sauce boats, and small dishes at the four corners.
- **Plate:** A silver or faience platter for each dish, and a silver plate with a fork, a knife and a spoon for each guest.
- **Portion:** Each guest takes a piece of 120 to 180 g from a platter of 6 to 10 pieces, with a ladle of sauce.
- **Height:** A dish stands 60 to 150 mm high; a pyramid of fruit or pastry stands 300 mm.
- **Rules:**
  - Set the dishes of one service in a symmetric pattern across the table.
  - Put the roast at the centre and the soup tureens at the corners of the first service.
  - Serve the sauce in a boat next to the dish, or poured over the meat.
  - Garnish the dish with mushroom, lemon, parsley or a slice of bacon.
  - Clear a whole service at once, and set the next service in its place.

## Pantry

- **Primary:** butter · veal · fine-herbs · truffle · wild-mushrooms · egg · wine · asparagus
- **Secondary:** cream · chicken · game-birds · lamb · beef · pork · shellfish · shallot · thyme-bay · lemon · vinegar · cane-sugar · artichoke · black-pepper · nutmeg · cheese
- **Avoid:** chilli · grains-of-paradise · soy-sauce · maize · potato · kombu
- **In europe:** yes
- **Rule:** Build on butter, a veal or chicken stock and fines herbes, and let one spice at most show in the sauce.

## Technique

- **Methods:** stock-making · roux · emulsion-sauce · knife-work · braising · spit-roasting · poaching
- **Bases:** A veal or beef stock called a fond, a roux of flour and butter, a bouquet garni of thyme, bay and parsley, and a mixture of mushrooms and shallots.
- **Details:** A mushroom hash called duxelles, a bouquet garni tied with string, a sauce bound with egg yolk and butter, a puff pastry of many thin layers.

## Flavour

- **Profile:** Clean and savoury: stock, butter and herbs, with the sharp note of lemon, verjuice or vinegar.
- **Balance:** Umami from the stock and fat from butter lead; acid lifts the sauce; sweet moves to the dessert course.
- **Fat:** Butter and cream give 35 to 50 per cent of the energy of a sauced main dish.
- **Seasoning:** Salt, pepper, a little nutmeg, a bouquet garni in the pot and fines herbes at the end.

## Palette

- **Strategy:** Use the ivory of butter sauces, the green of herbs and the brown of roasts on silver and white linen, in a room with mirrors and candles.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Butter ivory | `#F0E2B6` | white sauce |
| Herb green | `#6A8A3C` | fines herbes |
| Roast brown | `#7B4A25` | roast |
| Mushroom taupe | `#9B8468` | duxelles |
| Silver | `#BEC0C2` | platter |
| Linen white | `#F7F4EC` | cloth |
| Asparagus green | `#9DB05A` | vegetable |

## Service & table

- **Format:** Service à la française: three services of many dishes laid out at once in a pattern, and a guest takes from the dishes near him.
- **Courses:** Three services with 8 to 20 dishes each: soups and entrées, roasts and salads, then fruit and sweet.
- **Tableware:** A silver tureen, a silver or faience platter, a fork, a knife, a spoon, glass and a linen cloth.
- **Setting:** A salon of Versailles or a Paris town house, with mirrors, candles and a steward at the head of the table.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| hors-doeuvre | Mushrooms duxelles with fines herbes | wild-mushrooms | knife-work |
| soup | Bisque of crayfish | shellfish | stock-making |
| entree | Chicken fricassée in a white roux sauce | chicken | roux |
| roast | Roast veal on the spit with its own juice | veal | spit-roasting |
| vegetable-course | Asparagus with a white butter sauce | asparagus | emulsion-sauce |

## Prompt primer

- **Positive:** 17th century French dinner · Versailles salon · silver tureen and platters · symmetric table of dishes · white butter sauce · herb green garnish · candlelight and mirrors · linen tablecloth · faience platter · engraving style · roast veal on silver · overhead view of a service
- **Negative:** tomato · potato · chilli · medieval trencher · foam · modern restaurant · single plated dish · neon light

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Le Cuisinier françois | François Pierre de La Varenne | 1651 |
| Le Pastissier françois | François Pierre de La Varenne | 1653 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Roux and stock base (process, invented here)

A pair of kitchen bases: a stock made from bones and meat, and a roux of flour and butter that thickens it. Most French sauces of later styles begin here. Origin: cuisine, Paris, 1651.

- Simmer bones, meat and vegetables in water for several hours and strain the stock.
- Cook flour in butter over low heat to the colour that the sauce needs.
- Whisk the stock into the roux and simmer the sauce until it coats a spoon.

### Service à la française (process)

A way to serve a meal: all the dishes of one service stand on the table together, and the guests take from the dishes near them. A new service replaces the old one. Origin: cuisine, Courts of France, c. 1300.

- Set all the dishes of one service on the table at the same time.
- Place the dishes in a symmetric pattern that a plan on paper shows.
- Clear the whole service at once and set the next service in its place.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Le Cuisinier françois** (publisher, Paris, 1651–now), published the style. A French cookbook by La Varenne. It sets down the roux, the bouquet garni and the stock base, and went through many editions.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 3 | 3–4 | service, signatures |
| Negative space (`negative_space`) | 0.1 | 0–0.25 | plating |
| Portion (`portion_g`) | 150 | 100–220 g | plating, service |
| Spice level (`spice_level`) | 1 | 0–2 | flavour, pantry |
| Fat share (`fat_share`) | 0.4 | 0.3–0.55 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F7F4EC | #F7F4EC, #BEC0C2, #E9E4D4 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **bigger, with sugar sculpture and pastry towers**: move toward [`grande-cuisine`](../grande-cuisine/SKILL.md) (Grande cuisine). Add a pièce montée, dress each dish with hâtelets and aspic, and write the sauces as a system of stocks.
- If the user asks for **more spice and more sugar**: move toward [`renaissance-banquet`](../renaissance-banquet/SKILL.md) (Renaissance banquet). Bring back ginger, cinnamon and sugar in the savoury dish, and add a sugar sculpture.

- **Came from (go here for a more orthodox version):** [`renaissance-banquet`](../renaissance-banquet/SKILL.md)
- **Led to (go here for a newer version):** [`grande-cuisine`](../grande-cuisine/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`medieval-court-cuisine`](../medieval-court-cuisine/SKILL.md)
- **Kin in another domain:** [`baroque-architecture`](../baroque-architecture/SKILL.md)
- **Nearest by vector profile:** [`cuisine-classique`](../cuisine-classique/SKILL.md), [`renaissance-banquet`](../renaissance-banquet/SKILL.md), [`haute-regionale`](../haute-regionale/SKILL.md)

## Emotional target

The pleasure of clear taste and good order: a table of fine, balanced dishes in a room of reason and grace.

**Keywords:** refined, ordered, savoury, elegant, balanced · **Brand archetypes:** sage, ruler

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Le Cuisinier françois, second edition of 1652: title page](https://commons.wikimedia.org/wiki/File:Le_Cuisinier_fran%C3%A7ois_2nd_ed.png) (François Pierre de La Varenne, 1652): document, Public domain. William C. Minor, via Wikimedia Commons

## Sources

- [Wikipedia: François Pierre La Varenne](https://en.wikipedia.org/wiki/Fran%C3%A7ois_Pierre_La_Varenne)
- [Wikipedia: Le Cuisinier françois](https://en.wikipedia.org/wiki/Le_Cuisinier_fran%C3%A7ois)
- Jean-Louis Flandrin and Massimo Montanari (eds.), Food: A Culinary History (1999)

---

Generated from [`data/cuisine/styles/cuisine-francoise.json`](../../data/cuisine/styles/cuisine-francoise.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
