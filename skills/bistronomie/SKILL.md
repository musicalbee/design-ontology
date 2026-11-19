---
name: bistronomie
description: "Apply the Bistronomie style (1992–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: bistronomie, neo bistro, paris bistro, fixed price menu, terrine in a jar, braised cheek."
domain: cuisine
era: modernist-and-global
triggers:
  - "bistronomie"
  - "neo bistro"
  - "paris bistro"
  - "fixed price menu"
  - "terrine in a jar"
  - "braised cheek"
  - "chef bistro"
  - "camdeborde"
vector_profile:
  composition: 2
  transformation: 3
  locality: 4
  richness: 4
  flavour_intensity: 3
---

# Bistronomie

> Good cooking does not need a palace: a trained chef can serve fine produce and exact technique in a simple room at a fair price.

A chef of a palace kitchen cooks at the price of a bistro. Yves Camdeborde opened La Régalade in Paris in 1992 with a fixed menu, honest produce, regional dishes and big portions, in a plain room with no linen and no ceremony.

**Period:** 1992–present · **Era:** Modernist and global · **Domain:** Cuisine · **Also called:** Bistro gastronomique, Neo-bistro

## When to load this skill

Load it when the user asks for: "bistronomie", "neo bistro", "paris bistro", "fixed price menu", "terrine in a jar", "braised cheek", "chef bistro", "camdeborde".

Good for: a menu for a Paris neighbourhood bistro, a food photograph of a braise in a cast-iron pot, a blackboard menu with a fixed price.

Do not use it when:
- the brief wants a formal white-linen service
- the brief wants a small architectural plate
- the brief wants a plant-only menu

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Bistronomie, you MUST:

1. Fix a menu of three courses at a low price, with a choice of a few dishes for each course.
2. Write the menu on a blackboard, and change it with the market.
3. Cook the dishes of the French provinces with the skill of a hotel kitchen: confit, terrine, braise and stew.
4. Serve a generous portion that fills a hungry guest.
5. Put a terrine or a pot of rillettes on the table at the start, and let the guests help themselves.
6. Use cheap cuts and offal with care: cheek, trotter, tongue and shoulder.
7. Plate on a plain plate or in the cooking pot, and use no formal service.
8. Seat guests close together in a room with a bar, bare tables and a short wine list.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A white tablecloth and a waiter in a jacket.
- **NEVER:** A tiny portion on a large plate.
- **NEVER:** A long tasting menu at a high price.
- **NEVER:** A dish made with foam, gel or liquid nitrogen.
- **NEVER:** A menu that does not change with the market.
- **NEVER:** A garnish of micro herbs placed with tweezers.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■□□□` 2/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■■■□` 4/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■■□` 4/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A generous mound of food on a plain plate or in a small cast-iron pot, with the sauce around it and the garnish alongside.
- **Plate:** A white or cream plate of 250 to 280 mm, a plain bowl or a small cast-iron casserole of 160 to 200 mm.
- **Portion:** A main piece of 180 to 250 g with 150 g of garnish; the plate is about 75 per cent full.
- **Height:** The food stands 30 to 60 mm high in a loose mound; the sauce is a spoon of jus beside or under it.
- **Rules:**
  - Serve a terrine in its jar or on a board with a knife, a pot of mustard and cornichons.
  - Set a braised cut in its own cooking pot, or on the plate with a spoon of its jus.
  - Add a vegetable garnish that cooks with the meat: onion, carrot, cabbage or beans.
  - Cut bread in thick slices and put it on the table.
  - Finish with a dessert in a bowl or a jar, such as a rice pudding or a cream.

## Pantry

- **Primary:** pork · duck · pulses · cabbage · onion · butter · wild-mushrooms · root-vegetables
- **Secondary:** garlic · shallot · thyme-bay · black-pepper · wine · veal · egg · cream · cheese · bread · rice · orchard-fruit · cod · vinegar
- **Avoid:** sodium-alginate · liquid-nitrogen · xanthan-gum · soy-lecithin · caviar
- **In europe:** yes
- **Rule:** Buy produce of the French provinces and cheap cuts of the market; use butter, wine and the cooking juices for the sauce.

## Technique

- **Methods:** braising · confit · stock-making · reduction · oven-roasting · sauteing · pate-en-croute · knife-work
- **Bases:** A veal or pork stock, a jar of duck fat, a salted pork terrine mix, a bottle of red wine for the braise and a pot of mustard.
- **Details:** A terrine in a jar, a braise served in its pot, a crisp skin on a duck leg, a spoon of jus, a thick slice of country bread.

## Flavour

- **Profile:** Deep and savoury: the taste of roast, braise and confit, with wine, mustard, garlic and thyme.
- **Balance:** Salt and umami lead with fat; vinegar, cornichons and mustard give acid; sweet stays in the dessert and in the onion.
- **Fat:** Butter, duck fat and pork fat give about 40 to 50 per cent of the energy of a main dish.
- **Seasoning:** Salt and pepper in layers, thyme and bay in the pot, garlic and shallot early, a splash of vinegar or mustard at the end.

## Palette

- **Strategy:** Use warm browns, the amber of duck fat and the cream of the plate, with one fresh green.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Cream plate | `#F1EBDD` | plate |
| Jus brown | `#6A3E22` | sauce |
| Duck skin amber | `#B3702B` | confit |
| Terrine pink | `#C98F86` | terrine |
| Cabbage green | `#8DA057` | vegetable |
| Mustard yellow | `#D1A31E` | condiment |
| Cast-iron black | `#2B2B2B` | pot |

## Service & table

- **Format:** A fixed price menu with a choice of dishes; the waiter brings the plates and the pots to the table, with no ceremony.
- **Courses:** Three courses at a lunch or a dinner, with a terrine at the start and a cheese or a dessert at the end.
- **Tableware:** Plain white plates, cast-iron pots, a jar for the terrine, a plain glass and paper or bare tables.
- **Setting:** A small neighbourhood room of 30 to 50 seats with a zinc bar, close tables and a chef in an open kitchen who also serves.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| hors-doeuvre | Pork terrine served in its jar | pork | pate-en-croute |
| main-course | Confit duck leg with cabbage | duck | confit |
| main-course | Braised pork cheek with root vegetables | pork | braising |
| soup | Mushroom soup with cream | wild-mushrooms | stock-making |
| dessert | Rice pudding with caramel | rice | oven-roasting |

## Prompt primer

- **Positive:** bistronomie plate · terrine served in a glass jar · braised pork cheek in a cast-iron pot · confit duck leg with crisp skin · thick slice of country bread · blackboard menu · Paris neighbourhood bistro with zinc bar · close wooden tables · warm evening light · overhead plated dish photograph
- **Negative:** white tablecloth · tweezers garnish · foam · tiny portion on a large plate · gold-rimmed plate · silver cloche

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| La Régalade (the first fixed menu) | Yves Camdeborde | 1992 |
| La Table d'Yves Camdeborde | Yves Camdeborde | 2004 |
| Le Comptoir du Relais | Yves Camdeborde | 2005 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Market menu (process)

The chef writes the menu after the visit to the market or the farm, and the dishes change each day or each week with what is fresh. Origin: cuisine, Collonges-au-Mont-d'Or, France, c. 1965.

- Buy the produce on the same day, from the same traders or farms.
- Write the menu after the purchase, and keep it short.
- Print or write the menu by hand on the day, and name the farm or the market.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **La Régalade** (company, Paris, ?–now), launched the style. A restaurant in the 14th arrondissement of Paris. Yves Camdeborde bought it in 1992 and cooked a fixed menu of bistro dishes there until he sold it.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 3 | 3–5 | service, signatures |
| Negative space (`negative_space`) | 0.2 | 0.1–0.35 | plating |
| Portion (`portion_g`) | 420 | 300–550 g | plating, service |
| Spice level (`spice_level`) | 1 | 0–2 | flavour, pantry |
| Fat share (`fat_share`) | 0.45 | 0.35–0.55 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F1EBDD | #F1EBDD, #FFFFFF, #2B2B2B | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more formal, with a tasting menu**: move toward [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md) (Nouvelle cuisine). Cut the portion, plate in the kitchen on a large white plate, and raise the number of courses.
- If the user asks for **more regional, with one province**: move toward [`haute-regionale`](../haute-regionale/SKILL.md) (Haute cuisine régionale). Use the dishes and produce of one province and give the name of its producers.

- **Came from (go here for a more orthodox version):** [`haute-regionale`](../haute-regionale/SKILL.md), [`nouvelle-cuisine`](../nouvelle-cuisine/SKILL.md)
- **Rejects (the opposite pole; do not blend):** [`cuisine-classique`](../cuisine-classique/SKILL.md)
- **Nearest by vector profile:** [`haute-regionale`](../haute-regionale/SKILL.md), [`cuisine-francoise`](../cuisine-francoise/SKILL.md), [`medieval-court-cuisine`](../medieval-court-cuisine/SKILL.md)

## Emotional target

The warmth of a crowded table where the food is better than the room: loud, generous and relaxed.

**Keywords:** generous, warm, casual, honest, lively, regional · **Brand archetypes:** everyman, jester

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Confit de canard, Licq-Athérey](https://commons.wikimedia.org/wiki/File:Confit_de_canard_Licq-Atherey.jpg) (Tangopaso, 2012): image, CC BY-SA 3.0. Tangopaso, via Wikimedia Commons

## Sources

- [Wikipedia: Bistronomy](https://en.wikipedia.org/wiki/Bistronomy)
- [Wikipedia: Yves Camdeborde](https://en.wikipedia.org/wiki/Yves_Camdeborde)

---

Generated from [`data/cuisine/styles/bistronomie.json`](../../data/cuisine/styles/bistronomie.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
