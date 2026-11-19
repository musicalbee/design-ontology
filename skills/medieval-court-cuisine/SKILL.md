---
name: medieval-court-cuisine
description: "Apply the Medieval court cuisine style (1300–1500) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: taillevent, le viandier, medieval banquet, medieval feast, castle feast, cameline sauce."
domain: cuisine
era: court-and-banquet
triggers:
  - "taillevent"
  - "le viandier"
  - "medieval banquet"
  - "medieval feast"
  - "castle feast"
  - "cameline sauce"
  - "blanc mengier"
  - "14th century cooking"
vector_profile:
  composition: 2
  transformation: 3
  locality: 2
  richness: 3
  flavour_intensity: 4
---

# Medieval court cuisine

> Make the table show rank: use costly spices, bright colour and many dishes at once, and let each sauce mix sweet, sour and hot.

The kitchen of the late medieval court. Cooks grind spices, thicken sauces with bread and colour the dish with saffron. Sweet, sour and hot flavours meet in one sauce. Le Viandier, first written about 1300 and widened by Taillevent, records it.

**Period:** 1300–1500 · **Era:** Court and banquet · **Domain:** Cuisine · **Also called:** Taillevent cuisine, Late medieval French cuisine

## When to load this skill

Load it when the user asks for: "taillevent", "le viandier", "medieval banquet", "medieval feast", "castle feast", "cameline sauce", "blanc mengier", "14th century cooking".

Good for: a medieval feast scene in a film or a game, a menu for a historical banquet, a food image for a court of 1400.

Do not use it when:
- the brief wants a food of the New World
- the brief wants a plated modern dish
- the brief wants a light or lean dish

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Medieval court cuisine, you MUST:

1. Set a service of many dishes on the table at once, and let each guest take from the dishes that he can reach.
2. Thicken a sauce with bread crumbs that have soaked in broth, vinegar or verjuice.
3. Grind spices in a mortar and add them to most dishes: ginger, cinnamon, clove, pepper and grains of paradise.
4. Colour a dish with saffron for gold, with parsley for green and with sandalwood for red.
5. Sour a sauce with verjuice or vinegar, and sweeten it with sugar or honey.
6. Roast a bird on the spit and serve it with a spiced sauce such as cameline.
7. Keep the Church calendar: cook fish and almond milk on the days without meat.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A sauce thickened with a roux of flour and butter.
- **NEVER:** Tomato, potato, chilli or any food from the New World.
- **NEVER:** A single plated dish for one guest.
- **NEVER:** Plain meat with salt only.
- **NEVER:** A light sauce without spice.
- **NEVER:** Fresh herbs chopped at the end as a garnish.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■□□□` 2/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■□□` 3/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■□□□` 2/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■□□` 3/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■■□` 4/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** Large dishes stand on a long table with the pieces heaped on a platter or in a bowl; guests cut and share.
- **Plate:** A round trencher of stale bread or pewter, shared by two guests, with silver bowls and platters for the high table.
- **Portion:** Each guest takes a piece of 80 to 150 g from a shared dish, with a ladle of sauce on the trencher.
- **Height:** A heaped dish stands 80 to 200 mm high; a roast bird stands taller on its platter.
- **Rules:**
  - Put many dishes on the table in each service, and set the costly dish in front of the lord.
  - Serve a roast bird whole, and carve it at the table.
  - Pour the sauce over the meat or give it in a bowl for dipping.
  - Colour a whole dish in one hue: gold, green, white or red.
  - Dress a roast swan or peacock in its feathers for the feast.
  - Remove the soaked bread trencher at the end and give it to the poor.

## Pantry

- **Primary:** bread · verjuice · ginger · cinnamon · saffron · game-birds
- **Secondary:** black-pepper · clove · grains-of-paradise · nutmeg · cane-sugar · honey · nuts-seeds · wine · vinegar · onion · leek · chicken · pork · venison · cod · egg
- **Avoid:** tomato · potato · maize · chilli · vanilla · cocoa · fine-herbs · soy-sauce
- **Rule:** Build a sauce on bread, verjuice or vinegar and spice, and use the costly spice in the dish of honour.

## Technique

- **Methods:** boiling · spit-roasting · bread-thickening · wood-fire · grilling · salt-curing
- **Bases:** A broth of boiled meat or fish, an almond milk for the days of fasting, and a paste of soaked bread and spice, strained through a cloth.
- **Details:** A sauce strained through linen, a spice ground in a mortar, a dish coloured with saffron, a bird roasted on a spit and glazed with egg yolk.

## Flavour

- **Profile:** Sweet, sour and warm at the same time: ginger and cinnamon with verjuice, sugar and the smell of wood smoke.
- **Balance:** Sour from verjuice and vinegar balances the sweet of sugar, honey and fruit; spice leads in each dish.
- **Fat:** Fat comes from the roast, from lard and from almond milk; butter is for days without a fast, and the share is 25 to 40 per cent.
- **Seasoning:** Ground spice in the mortar, salt late, and no fresh herbs as a finish. Pepper, ginger and cinnamon mark the dish.

## Palette

- **Strategy:** Use the gold of saffron, the brown of the roast and the white of almond cream on a dark wood table, with green and red for the feast.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Saffron gold | `#D9A21B` | sauce and pastry |
| Bread beige | `#D8C29A` | trencher and sauce |
| Roast brown | `#7A4A24` | roast bird |
| Almond white | `#F1EAD7` | blanc manger |
| Parsley green | `#6B7F3A` | green sauce |
| Pewter grey | `#8A8D8F` | plate |
| Wine red | `#7A1F2B` | wine and sandalwood |

## Service & table

- **Format:** Service in removes: each service puts many dishes on the table together, and the guests take what they can reach.
- **Courses:** Two to four services of 6 to 12 dishes each, with a spiced wine and wafers at the end.
- **Tableware:** Bread trenchers, pewter and silver platters, a knife for each guest, spoons, and no fork.
- **Setting:** The great hall of a castle with a high table on a dais, tapestries, torches and a carver at the lord's side.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| entree | Blanc mengier of chicken and almond | chicken | boiling |
| roast | Roast capon with cameline sauce | chicken | spit-roasting |
| main-course | Civé of venison thickened with bread | venison | bread-thickening |
| soup | Porée of leeks | leek | boiling |
| banquet-centrepiece | Roast peacock in its feathers | game-birds | spit-roasting |

## Prompt primer

- **Positive:** medieval court banquet · long wooden table · bread trencher · pewter platter · roast capon in golden sauce · saffron yellow sauce · candlelight and torchlight · stone hall with tapestries · manuscript illumination style · whole roast bird with feathers · spiced almond white stew · overhead view of a feast table
- **Negative:** fork · porcelain plate · tomato · potato · modern restaurant · foam · tweezers garnish · neon light

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Le Viandier | Guillaume Tirel, called Taillevent | 1380 |
| Le Viandier (first Paris printed edition) | Guillaume Tirel, called Taillevent | 1486 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Bread-thickened sauce (process, invented here)

A sauce that a cook binds with soaked and strained bread. The sauce gets body and a soft texture, and it carries spice and acid. Origin: cuisine, Courts of France, c. 1300.

- Soak white bread in broth, vinegar or verjuice for a short time.
- Grind the bread with spice in a mortar and strain the paste through a cloth.
- Heat the sauce gently and serve it beside a roast or over boiled meat.

### Service à la française (process, invented here)

A way to serve a meal: all the dishes of one service stand on the table together, and the guests take from the dishes near them. A new service replaces the old one. Origin: cuisine, Courts of France, c. 1300.

- Set all the dishes of one service on the table at the same time.
- Place the dishes in a symmetric pattern that a plan on paper shows.
- Clear the whole service at once and set the next service in its place.

### Sugar sculpture (skill, invented here)

A table piece that a cook models from sugar paste, marzipan and pastry in the shape of a building or a beast. It shows the wealth and skill of the host. Origin: cuisine, Courts of France and England, c. 1400.

- Boil sugar to the stage that suits the piece and cast or model it in a mould.
- Build the frame of the piece from pastry, wire or wood, and fix the sugar parts to it.
- Set the piece at the centre of the table, and bring it in at the end of a service.

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Le Viandier** (publisher, Paris, 1300–now), published the style. A French cookbook of recipes for the royal and noble table. The oldest copies date from about 1300, and Taillevent widened the text. It was one of the first printed cookbooks.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 3 | 2–4 | service, signatures |
| Negative space (`negative_space`) | 0.1 | 0–0.25 | plating |
| Portion (`portion_g`) | 110 | 70–170 g | plating, service |
| Spice level (`spice_level`) | 2 | 1–3 | flavour, pantry |
| Fat share (`fat_share`) | 0.3 | 0.2–0.45 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #8A8D8F | #8A8D8F, #D8C29A, #6E4B2A | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more Italian, with sugar sculpture and more dishes**: move toward [`renaissance-banquet`](../renaissance-banquet/SKILL.md) (Renaissance banquet). Add a sugar sculpture, a pie of game and a fork at the place, and drop the bread trencher.
- If the user asks for **less spice, with butter and herbs**: move toward [`cuisine-francoise`](../cuisine-francoise/SKILL.md) (Cuisine françoise). Cut the spice to pepper and nutmeg, add fines herbes and make the sauce with a roux and a stock.

- **Led to (go here for a newer version):** [`renaissance-banquet`](../renaissance-banquet/SKILL.md)
- **Was rejected by:** [`cuisine-francoise`](../cuisine-francoise/SKILL.md)
- **Kin in another domain:** [`gothic-architecture`](../gothic-architecture/SKILL.md)
- **Nearest by vector profile:** [`renaissance-banquet`](../renaissance-banquet/SKILL.md), [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md), [`bistronomie`](../bistronomie/SKILL.md)

## Emotional target

Awe at wealth and order: a hall where costly spice, gold colour and a full table show the rank of the host.

**Keywords:** opulent, heaped, spiced, ceremonial, warm · **Brand archetypes:** ruler, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Le Viandier, manuscript of Sion: the recipe for blanc mengier](https://commons.wikimedia.org/wiki/File:Taillevent_MS_de_Sion_Blanc_mengier.jpg) (Unknown scribe, 1300): document, Public domain. Médiathèque Valais, via e-codices and Wikimedia Commons
- [Le livre de Taillevent, Lyon edition: title page](https://commons.wikimedia.org/wiki/File:Livre_de_Taillevent_1545_Lyon_tp.jpg) (Guillaume Tirel, called Taillevent, 1545): document, Public domain. Bibliothèque nationale de France (Gallica), via Wikimedia Commons

## Sources

- [Wikipedia: Taillevent](https://en.wikipedia.org/wiki/Taillevent)
- [Wikipedia: Le Viandier](https://en.wikipedia.org/wiki/Le_Viandier)
- Terence Scully (ed.), The Viandier of Taillevent (1988)

---

Generated from [`data/cuisine/styles/medieval-court-cuisine.json`](../../data/cuisine/styles/medieval-court-cuisine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
