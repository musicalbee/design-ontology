---
name: renaissance-banquet
description: "Apply the Renaissance banquet style (1500–1650) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: scappi, renaissance feast, renaissance banquet, italian court banquet, sugar sculpture, trionfo di zucchero."
domain: cuisine
era: court-and-banquet
triggers:
  - "scappi"
  - "renaissance feast"
  - "renaissance banquet"
  - "italian court banquet"
  - "sugar sculpture"
  - "trionfo di zucchero"
  - "papal banquet"
  - "opera dell'arte del cucinare"
vector_profile:
  composition: 3
  transformation: 4
  locality: 2
  richness: 4
  flavour_intensity: 3
---

# Renaissance banquet

> Show the power of the host with the number, the skill and the beauty of the dishes, and let sugar and pastry take the shape of buildings and beasts.

The feast of the Italian court as Bartolomeo Scappi set it down in 1570. A kitchen of many cooks sends out many dishes at once: pies, roasts, candied fruit and sculpture in sugar. The cook uses the fork, the sugar and the spit with great skill.

**Period:** 1500–1650 · **Era:** Court and banquet · **Domain:** Cuisine · **Also called:** Scappi cuisine, Italian court banquet

## When to load this skill

Load it when the user asks for: "scappi", "renaissance feast", "renaissance banquet", "italian court banquet", "sugar sculpture", "trionfo di zucchero", "papal banquet", "opera dell'arte del cucinare".

Good for: a Renaissance feast scene, a menu for a historical dinner of the 16th century, a still life of a banquet table.

Do not use it when:
- the brief wants a New World food
- the brief wants one plate per guest
- the brief wants a lean, plain dish

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Renaissance banquet, you MUST:

1. Set three or four services of up to 30 dishes each, and set them in a pattern on the table.
2. Use sugar in the savoury dish and in the sculpture: marzipan, comfits and candied peel.
3. Bake game and meat in a pastry case, and decorate the case with a pattern of dough.
4. Roast on the spit with a sauce of citrus juice, and dress a roast bird in its own feathers.
5. Carve the roast at the table; a carver trained in the art cuts each bird.
6. Lay a fork, a knife and a spoon at the place of each guest, and a clean napkin.
7. Keep a clean and ordered kitchen: Scappi draws every tool and every station.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A sauce thickened only with bread and heavy spice.
- **NEVER:** A plain dish without decoration.
- **NEVER:** A single course on a bare table.
- **NEVER:** Chilli, potato or maize in a banquet dish.
- **NEVER:** A sauce of roux and butter in the French style of 1651.
- **NEVER:** A dish served by hand with no fork.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■□□` 3/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■■□` 4/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■□□□` 2/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■■□` 4/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** A large platter holds a roast or a pie at its centre, with garnish of citrus, comfits or gilt leaf around it.
- **Plate:** A silver or majolica platter for the dish and a pewter or silver plate for each guest.
- **Portion:** Each guest takes a piece of 100 to 160 g and a spoon of sauce from a dish of 20 or more.
- **Height:** A pie or a sugar piece stands 150 to 400 mm high; a roast bird lies low on its platter.
- **Rules:**
  - Set each service as a pattern of dishes that mirrors across the table.
  - Gild a pie or a sugar piece with gold leaf for the high table.
  - Put a sculpture of sugar at the centre of the table for the dessert service.
  - Serve the fruit and the sweet comfits at the end, with the cheese.
  - Give each guest a fork and a knife, and wipe the rim of each dish.

## Pantry

- **Primary:** cane-sugar · game-birds · veal · butter · cinnamon · lemon · truffle · nuts-seeds
- **Secondary:** black-pepper · clove · nutmeg · saffron · ginger · bitter-orange · artichoke · caviar · oyster · shellfish · cheese · egg · wheat · olive-oil · wine · vinegar
- **Avoid:** chilli · tomato · potato · maize · vanilla · fine-herbs
- **Rule:** Use sugar, citrus and warm spice with game and veal, and let sugar close the meal.

## Technique

- **Methods:** spit-roasting · larding · pate-en-croute · aspic · boiling · deep-frying
- **Bases:** A veal or capon broth, a pastry dough of flour, butter and egg, a boiled sugar syrup and an almond paste.
- **Details:** A larded roast, a pie lid with a pattern of dough, a jelly poured round a cold dish, a fruit candied in syrup, a bird on the spit dressed in feathers.

## Flavour

- **Profile:** Sweet, sour and warm: sugar and cinnamon with lemon and orange juice, with roast meat and rich pastry.
- **Balance:** Citrus juice and vinegar lift the sweet sugar and the rich fat; spice is lighter than in the medieval feast.
- **Fat:** Butter, lard and olive oil give 30 to 45 per cent of the energy of a main dish.
- **Seasoning:** Salt, pepper, cinnamon and sugar, with a squeeze of lemon or bitter orange on a roast.

## Palette

- **Strategy:** Use the white of sugar and linen, the gold of pastry and gilt, and the deep red of wine and silver, in a hall lit by many candles.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Sugar white | `#F4EFE3` | sugar piece and cloth |
| Pastry gold | `#C98B2E` | baked case |
| Roast bronze | `#8C5A2B` | roast bird |
| Gilt leaf | `#D4AF37` | decoration |
| Wine crimson | `#6E1423` | wine and hangings |
| Silver grey | `#B5B7B9` | platter |
| Citron yellow | `#E5C94A` | candied citrus |

## Service & table

- **Format:** Service in removes: many dishes at once in each of three or four services, with a cold service, a hot service and a service of fruit and sugar.
- **Courses:** Three to four services of 10 to 30 dishes, and at a great feast Scappi lists menus of over 100 dishes.
- **Tableware:** A silver or majolica platter, a pewter plate, a fork, a knife, a spoon, a glass and a linen napkin.
- **Setting:** A palace hall or a villa in Rome, with a long table under a canopy, musicians and a carver in the middle.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| entree | Pasticcio of game in a pastry case | game-birds | pate-en-croute |
| roast | Pheasant on the spit, dressed in its feathers | game-birds | spit-roasting |
| roast | Larded veal on the spit with orange juice | veal | larding |
| banquet-centrepiece | Sugar sculpture of a castle with marzipan figures | cane-sugar | boiling |
| petits-fours | Candied lemon peel and comfits | lemon | boiling |

## Prompt primer

- **Positive:** Renaissance banquet table · Italian palace hall · silver platter with game pie · sugar sculpture centrepiece · gilded pastry case · roast pheasant in feathers · fork and knife at the place · linen napkin folded in a shape · candlelight · candied citrus · majolica plate · overhead view of a feast table
- **Negative:** tomato · potato · modern plated dish · foam · white tablecloth of a hotel · neon light · tweezers garnish

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Opera dell'arte del cucinare | Bartolomeo Scappi | 1570 |
| Banquet of the papal conclave | Bartolomeo Scappi | 1549 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Bread-thickened sauce (process)

A sauce that a cook binds with soaked and strained bread. The sauce gets body and a soft texture, and it carries spice and acid. Origin: cuisine, Courts of France, c. 1300.

- Soak white bread in broth, vinegar or verjuice for a short time.
- Grind the bread with spice in a mortar and strain the paste through a cloth.
- Heat the sauce gently and serve it beside a roast or over boiled meat.

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

## Media

The salons, schools, magazines, publishers, galleries and platforms that carried this style.

- **Opera dell'arte del cucinare** (publisher, Venice, 1570–now), published the style. A cookbook of six books by Scappi, with about 1,000 recipes and plates of the tools and the kitchen. It shows the first known picture of a fork.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 4 | 3–6 | service, signatures |
| Negative space (`negative_space`) | 0.1 | 0–0.25 | plating |
| Portion (`portion_g`) | 130 | 80–200 g | plating, service |
| Spice level (`spice_level`) | 2 | 1–3 | flavour, pantry |
| Fat share (`fat_share`) | 0.35 | 0.25–0.5 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #B5B7B9 | #B5B7B9, #F4EFE3, #6E4B2A | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **less sugar, more sauce and herbs**: move toward [`cuisine-francoise`](../cuisine-francoise/SKILL.md) (Cuisine françoise). Drop the sugar from the roast, cut the spice, add fines herbes and make the sauce with a roux and a stock.
- If the user asks for **darker, with heavy spice and bread sauce**: move toward [`medieval-court-cuisine`](../medieval-court-cuisine/SKILL.md) (Medieval court cuisine). Remove the fork, bring back the bread trencher and thicken each sauce with soaked bread and spice.

- **Came from (go here for a more orthodox version):** [`medieval-court-cuisine`](../medieval-court-cuisine/SKILL.md)
- **Led to (go here for a newer version):** [`cuisine-francoise`](../cuisine-francoise/SKILL.md)
- **Kin in another domain:** [`renaissance-architecture`](../renaissance-architecture/SKILL.md)
- **Nearest by vector profile:** [`cuisine-classique`](../cuisine-classique/SKILL.md), [`cuisine-francoise`](../cuisine-francoise/SKILL.md), [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md)

## Emotional target

Delight and wonder at abundance: a table that is a stage, with the pleasure of skill, sugar and show.

**Keywords:** abundant, theatrical, sweet, ornate, festive · **Brand archetypes:** ruler, creator

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [Opera di Bartolomeo Scappi: title page of the Venice edition of 1622](https://commons.wikimedia.org/wiki/File:Scappi_Opera.jpg) (Bartolomeo Scappi, 1622): document, Public domain. Clements Library, University of Michigan, via Wikimedia Commons

## Sources

- [Wikipedia: Bartolomeo Scappi](https://en.wikipedia.org/wiki/Bartolomeo_Scappi)
- [Wikipedia: Opera dell'arte del cucinare](https://en.wikipedia.org/wiki/Opera_dell%27arte_del_cucinare)
- Terence Scully (tr.), The Opera of Bartolomeo Scappi (2008)

---

Generated from [`data/cuisine/styles/renaissance-banquet.json`](../../data/cuisine/styles/renaissance-banquet.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
