---
name: modernist-cuisine
description: "Apply the Modernist cuisine style (2011–present) when specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph. Load when the user asks for: modernist cuisine, sous vide tasting menu, science-led cooking, edible balloon, precision cooking, cut-section food photograph."
domain: cuisine
era: modernist-and-global
triggers:
  - "modernist cuisine"
  - "sous vide tasting menu"
  - "science-led cooking"
  - "edible balloon"
  - "precision cooking"
  - "cut-section food photograph"
  - "alinea style"
vector_profile:
  composition: 5
  transformation: 5
  locality: 2
  richness: 3
  flavour_intensity: 3
---

# Modernist cuisine

> A cook who knows the physics of heat, water and texture can control the result to the degree, the second and the gram, and can then make food that was not possible before.

A kitchen that cooks by measurement and shows how it works. The six-volume book Modernist Cuisine of 2011 set out the physics of sous-vide, pressure, gels and freezing. Grant Achatz at Alinea in Chicago turned the method into a tasting menu.

**Period:** 2011–present · **Era:** Modernist and global · **Domain:** Cuisine · **Also called:** Modernist cooking, Science-led cuisine, Precision cuisine

## When to load this skill

Load it when the user asks for: "modernist cuisine", "sous vide tasting menu", "science-led cooking", "edible balloon", "precision cooking", "cut-section food photograph", "alinea style".

Good for: a tasting menu that states the time and the temperature of each dish, a food photograph of a clean plate with an exact cooked piece, a recipe book that shows the method and the physics.

Do not use it when:
- the brief wants rustic, foraged or heaped food
- the brief wants a rich classic sauce
- the brief is street or home food

## System directives

When specifying, describing or prompting food and its table: a dish, a menu, a plate, a service, a shop counter or a food photograph in Modernist cuisine, you MUST:

1. Measure the temperature and the time of each dish, and write both in the recipe.
2. Cook in a sealed bag in a water bath so that the whole piece reaches the same exact core temperature.
3. Use a tool of the laboratory when it gives a better result than a tool of the old kitchen: a centrifuge, a pressure cooker, a vacuum.
4. Show the inside: cut the food in half and photograph it, so that the guest and the reader see the structure.
5. Build a dish as a sequence of senses: smell, sound, temperature and touch as well as taste.
6. Share the method in a book, so that any cook can test it.
7. Serve a long menu of exact, small courses in a room that feels like a theatre.

## Guardrails

Each line below breaks the style. Check your output against the list before you return it.

- **NEVER:** A time or a temperature that the cook only guesses.
- **NEVER:** A rustic, uneven plate.
- **NEVER:** A recipe that stays a secret.
- **NEVER:** Technique as a trick, with no gain in taste or texture.
- **NEVER:** A heavy sauce that hides the exact cooking of the main piece.
- **NEVER:** A menu that does not change from year to year.

## Vector profile

| Axis | Score | 1 means | 5 means |
|---|---|---|---|
| Composition | `■■■■■` 5/5 | heaped, shared and family-style | an architectural plate with exact placement and empty space |
| Transformation | `■■■■■` 5/5 | raw or plainly cooked, the ingredient as it grew | technique changes the form, the texture and the temperature |
| Locality | `■■□□□` 2/5 | a global pantry of imported goods | one place and one season, grown or foraged near the kitchen |
| Richness | `■■■□□` 3/5 | broth, acid, raw and steamed | butter, cream, fat and reduction |
| Flavour intensity | `■■■□□` 3/5 | mild, clean and subtle | loud spice, chilli, smoke and ferment |

Hold these scores. If a request moves an axis by 2 points or more, you have left the style: go to "Lineage fallbacks".

## Plating & composition

- **Composition:** An exact, clean composition on a large plate: one cooked piece, a few sauce dots or gels and a small garnish, set in a measured order.
- **Plate:** A large white or black plate, a slate, a glass or a vessel that serves the dish, such as a bowl on a pillow of scent.
- **Portion:** Eight to eighteen courses of 20 to 80 g each; a main piece of 90 g at most.
- **Height:** Low to medium: 15 to 60 mm, with a tall element such as an edible balloon or a frozen sphere on a few courses.
- **Rules:**
  - Cook the main piece to an exact core temperature and cut it so that the even colour shows.
  - Set the parts in a measured order on a clean plate, and leave at least half of the plate empty.
  - Use gels, foams and powders in small parts and give each a clear, separate taste.
  - Serve a course in a surprise vessel or by a surprise route when it adds to the taste.
  - Photograph a cut section of the dish from the side and from above.

## Pantry

- **Primary:** beef · egg · potato · xanthan-gum · agar · liquid-nitrogen · sodium-alginate
- **Secondary:** pork · chicken · salmon · tuna · shellfish · cream · butter · cheese · cocoa · vanilla · orchard-fruit · fine-herbs · olive-oil · soy-lecithin · carrot · wild-plants
- **Avoid:** lard
- **In europe:** no — the values here translate a print style for screen
- **Rule:** Choose the best raw product, cook it by measurement, and add gums, gels and gases only where they give a better texture.

## Technique

- **Methods:** sous-vide · spherification · siphon-foam · cryo-freezing · dehydrating · smoking · plated-service
- **Bases:** Sous-vide stocks and jus, clarified juices from a centrifuge, gels of agar and gellan, and sauces set with xanthan gum.
- **Details:** An edible balloon, a frozen sphere, a powder of fat, a smoke under a glass dome, a drop of a gel.

## Flavour

- **Profile:** Clean, precise and intense: the taste of the product, at its best point of heat and texture.
- **Balance:** One lead taste in each bite, a clear acid, and a contrast of cold and hot or soft and crisp.
- **Fat:** Fat is used on purpose: butter in a sauce, a powder of oil; 20 to 35 per cent of the energy of a course.
- **Seasoning:** Salt by weight, acid from juices and vinegars, and spices and herbs infused in the bag or in the oil.

## Palette

- **Strategy:** Use a clean, high-contrast palette: a white or black plate, true colours of the product, and one bright sauce.

**Colours**

| Name | Hex | Role |
|---|---|---|
| Plate white | `#F2F0EB` | plate |
| Slate black | `#25282C` | plate and slate |
| Medium-rare pink | `#C96A63` | meat |
| Egg-yolk gold | `#E4A82E` | yolk and gel |
| Herb green | `#5E8C3A` | herb oil and garnish |
| Steel grey | `#8D949B` | steel and ice |
| Frost blue | `#BFD8E6` | cold dishes |

## Service & table

- **Format:** A fixed tasting menu with a wine or juice pairing, and a book or a lab for the recipes.
- **Courses:** Ten to twenty small courses; some are served by a surprise route, such as a course eaten from a hanging pin.
- **Tableware:** Plates, glass and special vessels made for single dishes; a clean table with a plain cloth or a bare surface.
- **Setting:** A dining room with theatre, a glass-walled kitchen, and a research kitchen that is open to the guest.

## Signature dishes

**Dishes**

| Course | Dish | Ingredient | Method |
|---|---|---|---|
| main-course | A cheeseburger cooked sous-vide | beef | sous-vide |
| tasting-course | Hot potato, cold potato: a hot soup and a cold cube on a pin | potato | plated-service |
| tasting-course | A sous-vide egg with a yolk set at 63 degrees | egg | sous-vide |
| dessert | An edible balloon of green apple | orchard-fruit | plated-service |
| dessert | A cream frozen in liquid nitrogen at the table | cream | cryo-freezing |

## Prompt primer

- **Positive:** precision tasting menu · sous-vide cut section photograph · edible balloon · frozen sphere · clean black slate plate · laboratory kitchen · exact sauce dots · smoke under a glass dome · overhead food photograph
- **Negative:** rustic plate · heaped portion · heavy cream sauce · foraged garnish · gold rim · family-style dish

**Canonical works**

| Work | Maker | Year |
|---|---|---|
| Modernist Cuisine: The Art and Science of Cooking | Nathan Myhrvold, Chris Young and Maxime Bilet | 2011 |
| Alinea | Grant Achatz | 2008 |
| Modernist Cuisine at Home | Nathan Myhrvold and Maxime Bilet | 2012 |

## Techniques

These techniques started in one domain and moved into this style. Apply the rules as they are written; the full record is in [`TECHNIQUES.md`](../TECHNIQUES.md).

### Siphon foam (tool)

A purée or a liquid loaded into a cream siphon with nitrous oxide comes out as a light, warm or cold foam. Origin: cuisine, Roses, Spain, 1994.

- Strain the liquid or purée so that no solid blocks the nozzle.
- Fill the siphon to half and charge it with one cartridge of nitrous oxide.
- Shake the siphon five times and serve at once from the nozzle.
- Keep a hot foam at 60 °C in a water bath.

### Sous vide (process)

Food is sealed in a bag and cooked in a water bath at an exact low temperature, so that the whole piece reaches the same core heat. Origin: cuisine, Roanne, France, 1974.

- Season the food and seal it in a bag with the air removed.
- Set the water bath to the target core temperature, for example 56 °C for beef.
- Cook for the time that the thickness of the piece needs, from 1 to 48 hours.
- Chill or sear the food just before service.

### Spherification (process)

A liquid dropped into a calcium bath forms a thin skin of alginate gel; the sphere holds its shape on the spoon and bursts in the mouth. Origin: cuisine, Roses, Spain, 2003.

- Mix 0.5 per cent sodium alginate into the flavoured liquid and rest it until the bubbles go.
- Drop the liquid with a spoon into a calcium bath of 1 per cent for 1 to 2 minutes.
- Lift the sphere out and rinse it in clean water.
- Serve within 5 minutes, because the gel keeps setting towards the centre.

## Organisations

The groups, studios, companies, schools, channels and backers that carried this style.

- **Alinea** (company, Chicago, 2005–now), made the style. A restaurant of Grant Achatz in Chicago that serves a tasting menu of exact modernist methods, with scent, edible balloons and theatrical service.
- **Modernist Cuisine** (publisher, Bellevue, Washington, 2011–now), published the style. The six-volume book Modernist Cuisine: The Art and Science of Cooking, written by the team of Nathan Myhrvold at The Cooking Lab, with cut-section photographs.

## Permutations

Each knob varies the style inside a range where it stays itself. Keep each value in its range. `npm run permute -- <id> key=value` writes the tokens for other values.

| Knob | Default | Range | Changes |
|---|---|---|---|
| Course count (`course_count`) | 14 | 8–20 | service, signatures |
| Negative space (`negative_space`) | 0.6 | 0.4–0.85 | plating |
| Portion (`portion_g`) | 60 | 20–120 g | plating, service |
| Spice level (`spice_level`) | 0 | 0–2 | flavour, pantry |
| Fat share (`fat_share`) | 0.25 | 0.15–0.4 | flavour, technique, pantry |
| Plate colour (`plate_colour`) | #F2F0EB | #F2F0EB, #25282C, #8D949B, #BFD8E6 | plating, service, palette |

## Lineage fallbacks

When the user asks for a variation, do not improvise. Blend toward the neighbour named here, and load its skill.

- If the user asks for **more play, less measurement**: move toward [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md) (Molecular gastronomy). Keep the methods; drop the tables of time and temperature and add surprise, humour and a story.
- If the user asks for **more plants and less meat**: move toward [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md) (Plant-based fine dining). Replace the meat with vegetables cooked by measurement, and keep the clean plate and the exact sauces.

- **Came from (go here for a more orthodox version):** [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md)
- **Nearest by vector profile:** [`molecular-gastronomy`](../molecular-gastronomy/SKILL.md), [`plant-based-fine-dining`](../plant-based-fine-dining/SKILL.md), [`pacific-rim-fusion`](../pacific-rim-fusion/SKILL.md)

## Emotional target

The trust that you feel in a cook who knows the exact degree: calm, cold and clear.

**Keywords:** exact, clinical, cold, measured, theatrical · **Brand archetypes:** sage, magician

## Canonical evidence (open licence)

Each item below has an open licence or is in the public domain, so you may show it as a reference.

- [A dish at Alinea, Chicago](https://commons.wikimedia.org/wiki/File:Dish_at_alinea_restaurant_in_chicago.jpg) (Alinea, 2013): image, CC BY 2.0. Jonathan Wisner from Frederick Colorado, via Wikimedia Commons
- [The Modernist Cuisine kitchen at Intellectual Ventures Labs](https://commons.wikimedia.org/wiki/File:The_Modernist_Cuisine_kitchen_deep_in_the_IV_Labs.jpg) (The Cooking Lab, 2016): image, CC BY 2.0. Steve Jurvetson from Menlo Park, USA, via Wikimedia Commons

## Sources

- [Wikipedia: Modernist Cuisine](https://en.wikipedia.org/wiki/Modernist_Cuisine)
- [Wikipedia: Alinea (restaurant)](https://en.wikipedia.org/wiki/Alinea_(restaurant))
- Nathan Myhrvold, Chris Young and Maxime Bilet, Modernist Cuisine (The Cooking Lab, 2011)

---

Generated from [`data/cuisine/styles/modernist-cuisine.json`](../../data/cuisine/styles/modernist-cuisine.json) by [design-ontology](../../README.md). Do not edit this file; change the data and run `npm run build`.
