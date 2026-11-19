---
name: haute-regionale
description: "Apply the Haute cuisine régionale style (1925–1965) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: fernand point, la pyramide, vienne restaurant, bresse chicken, provincial french restaurant, three star 1950s."
domain: cuisine
era: regional-and-bourgeois
triggers:
  - "fernand point"
  - "la pyramide"
  - "vienne restaurant"
  - "bresse chicken"
  - "provincial french restaurant"
  - "three star 1950s"
  - "michelin 1930s"
  - "mere brazier"
vector_profile:
  composition: 3
  transformation: 3
  locality: 4
  richness: 5
  flavour_intensity: 2
---

# Haute cuisine régionale

> Cook the classic dish well with the best produce of the region, on a short menu, and make the restaurant a place of travel.

The restaurant of a master in a provincial town. Fernand Point at La Pyramide in Vienne cooks the classic sauce with the butter, cream and produce of his own region. A small kitchen, a short menu and a fine cellar draw guests to the road.

**Period:** 1925–1965 · **Era:** Regional and bourgeois · **Domain:** Cuisine · **Also called:** Fernand Point cuisine, La Pyramide cuisine, Regional haute cuisine

## When to load this skill

Load it when the user asks for: "fernand point", "la pyramide", "vienne restaurant", "bresse chicken", "provincial french restaurant", "three star 1950s", "michelin 1930s", "mere brazier".

Good for: a scene in a French provincial restaurant of the 1950s, a menu for a regional classic dinner, a food image of a butter and cream dish.

Do not use it when:
- the brief wants a light vegetable-led plate
- the brief wants a modern tasting menu
- the brief wants a grand hotel banquet

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Haute cuisine régionale, you MUST:

1. Buy the best local produce each day: Bresse chicken, crayfish, cream, butter and cheese.
2. Keep the classic sauce, and cook it with fresh butter and cream, with no short cut.
3. Keep the menu short and cook each dish to order, with a small team in the kitchen.
4. Serve each dish on a plate or a platter at the table, with the sauce beside it.
5. Train young cooks in the kitchen; each one learns each station.
6. Pair each dish with a wine of the Rhône valley, and let the cellar lead the meal.
7. Let the guest take time: a good meal takes a whole afternoon.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A long menu of dishes made in advance.
- **NEVER:** A grand pièce montée on the table.
- **NEVER:** A heavy sauce that hides the produce.
- **NEVER:** Produce from far away when a local one is as good.
- **NEVER:** A cook who does not taste.
- **NEVER:** A hurried meal.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■□□` 3/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■■□` 4/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■■■` 5/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■□□□` 2/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** One main piece at the centre of a large plate with a sauce beside it and one vegetable; the host or a waiter finishes the dish at the table.
- **Plate:** A white porcelain plate of 260 to 280 mm, or a silver platter carried to the table on a trolley.
- **Portion:** A main piece of 150 to 220 g with 60 to 90 ml of sauce and one garnish.
- **Height:** The food stands 25 to 50 mm high, and the sauce pools 3 to 5 mm deep at its foot.
- **Rules:**
  - Put the main piece at the centre and place the sauce beside it or under it.
  - Carve the Bresse chicken at the table and serve it at once.
  - Use a gratin dish for the crayfish and bring it to the table with the crust hot.
  - Keep the garnish to one vegetable or one mushroom.
  - Wipe the rim of each plate before it leaves the kitchen.

## Pantry

- **Primary:** butter · cream · chicken · shellfish · truffle · foie-gras · wine · egg
- **Secondary:** veal · beef · lamb · fine-herbs · shallot · tarragon · wild-mushrooms · asparagus · potato · tomato · cheese · wheat · orchard-fruit · nuts-seeds · salmon · game-birds
- **Avoid:** chilli · soy-sauce · miso · sodium-alginate · liquid-nitrogen · kombu
- **Rule:** Build on butter, cream and produce of the region, and add one luxury (truffle, foie gras or crayfish) to the dish of honour.

## Technique

- **Methods:** stock-making · roux · emulsion-sauce · poaching · braising · oven-roasting · sauteing · reduction
- **Bases:** A veal stock, a chicken stock, a court-bouillon for fish and crayfish, a béchamel for the gratin and a butter sauce made to order.
- **Details:** A gratin that browns under the heat, a chicken carved at the table, a butter sauce whisked at the last minute, a cake of nut layers cut in strips.

## Flavour

- **Profile:** Rich and clear: butter, cream and stock, with the sweet taste of crayfish, the scent of truffle and the lift of Rhône wine.
- **Balance:** Fat and umami lead; wine, lemon and a dry white wine lift the sauce; sweet stays in the dessert.
- **Fat:** Butter and cream give 45 to 60 per cent of the energy of a sauced main dish.
- **Seasoning:** Salt and white pepper, fines herbes at the end, and the cook tastes each sauce before it leaves.

## Palette

- **Strategy:** Use the white of the cloth and the plate, the gold of butter and gratin, and the red of crayfish, in warm light.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Porcelain white | `#F6F3EC` | plate and cloth |
| Butter gold | `#E8C766` | butter sauce |
| Gratin brown | `#B07A3A` | crust |
| Crayfish red | `#C2452D` | crayfish |
| Bresse white | `#EFE6D2` | chicken |
| Truffle black | `#1E1A17` | garnish |
| Wine red | `#6A1C2A` | wine |

## Service & table

- **Format:** Service à la carte at a table in a provincial restaurant: the waiter brings each dish to the guest, and finishes it at the table.
- **Courses:** Four to six courses chosen from a short menu: a hors-d'oeuvre, a fish or shellfish dish, a poultry or meat dish, cheese and a dessert.
- **Tableware:** White porcelain, silver, crystal glasses for the wines of the Rhône valley and a white cloth.
- **Setting:** A roadside restaurant on the road to the south, with a small dining room, a big cellar and a kitchen of twelve cooks.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| entree | Gratin of crayfish tails | shellfish | oven-roasting |
| main-course | Bresse chicken with cream and truffle | chicken | poaching |
| entree | Poached salmon with a butter sauce | salmon | poaching |
| main-course | Roast Bresse chicken carved at the table | chicken | oven-roasting |
| dessert | Marjolaine, a cake of almond and hazelnut layers | nuts-seeds | oven-roasting |

## Prompt primer

- **Positive:** French provincial restaurant 1950s · La Pyramide dining room · Bresse chicken with cream sauce · gratin of crayfish tails · white porcelain plate · silver trolley · crystal wine glasses · white linen · warm afternoon light · chef in a tall white hat · golden butter sauce · overhead view of a plated dish
- **Negative:** foam · tweezers garnish · slate plate · smear of sauce · fast food · neon light · chilli · modern open kitchen

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| La Pyramide | Fernand Point | 1924 |
| Marjolaine | Fernand Point | 1935 |
| Ma gastronomie | Fernand Point | 1969 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Regional sourcing (process, invented here)

A way to write a menu from the produce of one region and one season. The cook buys from near farms and markets and names the source on the menu. Origin: cuisine, Vienne, France, c. 1925.

- Buy each main food from a producer within the region on the day of the meal.
- Cook the classic dish with that food, and keep the sauce simple.
- Pair the dish with a wine of the same region.

### Roux and stock base (process)

A pair of kitchen bases: a stock made from bones and meat, and a roux of flour and butter that thickens it. Most French sauces of later styles begin here. Origin: cuisine, Paris, 1651.

- Simmer bones, meat and vegetables in water for several hours and strain the stock.
- Cook flour in butter over low heat to the colour that the sauce needs.
- Whisk the stock into the roux and simmer the sauce until it coats a spoon.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **La Pyramide** (company, Vienne, France, 1924–now), launched the style. A restaurant in Vienne on the road to the south. Fernand Point ran it from 1924 until 1955, and it trained a generation of French chefs.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 5 | 4–7 | service, signatures |
| Negative space (`negative_space`) | 0.2 | 0.1–0.4 | plating |
| Portion (`portion_g`) | 300 | 220–420 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–1 | flavour, pantry |
| Fat share (`fat_share`) | 0.5 | 0.35–0.65 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F6F3EC | #F6F3EC, #FFFFFF, #C9C9C5 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **lighter, with less flour and shorter cooking**: move toward [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md) (Nouvelle cuisine). Drop the flour from the sauce, cook the fish and the vegetables for less time and plate each dish in the kitchen.
- If the user asks for **more formal, with a brigade and a long menu**: move toward [`cuisine-classique`](../cuisine-classique/SKILL.md) (Cuisine classique). Add a brigade of stations, a menu of nine courses and the classic garnishes.

- **Came from (go here for a more orthodox version):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Led to (go here for a newer version):** [`bistronomie`](../bistronomie/SKILL.md)
- **Nearest by vector profile:** [`bistronomie`](../bistronomie/SKILL.md), [`cuisine-francoise`](../cuisine-francoise/SKILL.md), [`cuisine-classique`](../cuisine-classique/SKILL.md)

## Emotional target

Warm trust and the calm of an afternoon: a master cook, a good local table and no hurry.

**Keywords:** warm, generous, regional, assured, unhurried · **Brand archetypes:** caregiver, sage

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Restaurant La Pyramide, Vienne](https://commons.wikimedia.org/wiki/File:Restaurant_La_Pyramide_1.JPG) (Restaurant La Pyramide, 2012): image, CC BY-SA 3.0. PHILDIC, via Wikimedia Commons

## Sources

- [Wikipedia: Fernand Point](https://en.wikipedia.org/wiki/Fernand_Point)
- [Wikipedia: La Pyramide (restaurant)](https://en.wikipedia.org/wiki/La_Pyramide_(restaurant))
- Fernand Point, Ma gastronomie (1969)

---

Generated from [`data/cuisine/styles/haute-regionale.json`](../../data/cuisine/styles/haute-regionale.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
