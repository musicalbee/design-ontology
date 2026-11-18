# Skill index

Read this file first. It is the router: one row for each style skill. Pick a row, then load `skills/<id>/SKILL.md`. Load one skill at a time.

How to pick:

1. Match the words of the user against **Load when**.
2. If there is no match, match the product against **Good for** and the mood against **Feels**.
3. If two rows match, compare the vector scores with the request ("minimal" = low ORN, "3D" = high DIM) and take the nearer row.
4. If the user asks for a variation of a style ("softer", "bolder"), load that style and follow its "Lineage fallbacks" section.

A machine-readable copy of this table is in [`index.json`](./index.json). The relations between styles are in [`../graph/lineage.json`](../graph/lineage.json).

## Graphic & UI Design

Vector axes, each 1 to 5: **ORN** ornamentation (pure minimal → maximalist) · **DIM** dimensionality (strictly 2D → full 3D / spatial) · **GRID** grid rigidity (chaotic / organic → strict mathematical grid) · **REAL** skeuomorphic realism (abstract digital → photorealistic material) · **TYPE** typographic expressiveness (neutral / invisible → experimental / illustrative).

| Skill | Era | Load when | Good for | Feels | ORN | DIM | GRID | REAL | TYPE |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`bauhaus`](./bauhaus/SKILL.md) | Modernist | bauhaus, primary colours, geometric shapes, form follows function, dessau | posters, design school sites, museum and exhibition pages | geometric, functional, constructive | 2 | 2 | 4 | 1 | 3 |
| [`mid-century-modern`](./mid-century-modern/SKILL.md) | Modernist | mid-century, mid century modern, mcm, atomic age, 1950s modern | lifestyle brands, furniture and home stores, cafes and restaurants | warm, optimistic, playful | 3 | 2 | 3 | 2 | 3 |
| [`swiss-international`](./swiss-international/SKILL.md) | Modernist | swiss, swiss style, international style, helvetica, grid-based | editorial sites, documentation, annual reports | objective, precise, calm | 1 | 1 | 5 | 1 | 2 |
| [`psychedelic`](./psychedelic/SKILL.md) | Modernist | psychedelic, 60s poster, acid, trippy, tie-dye | music festival posters, album covers, event and club sites | trippy, liberated, vibrating | 5 | 2 | 1 | 1 | 5 |
| [`memphis-design`](./memphis-design/SKILL.md) | Postmodern & Early Digital | memphis, memphis design, memphis milano, 80s, eighties | music and event posters, youth brands, landing pages for creative tools | playful, loud, irreverent | 5 | 2 | 1 | 1 | 4 |
| [`grunge-editorial`](./grunge-editorial/SKILL.md) | Postmodern & Early Digital | grunge, david carson, ray gun, emigre, distressed type | music magazines, zines, event posters | raw, noisy, rebellious | 4 | 2 | 1 | 2 | 5 |
| [`y2k-aesthetic`](./y2k-aesthetic/SKILL.md) | Postmodern & Early Digital | y2k, 2000s, millennium, chrome, cyber | music and fashion sites, tech product launches, nostalgia campaigns | futuristic, glossy, optimistic | 4 | 3 | 3 | 3 | 3 |
| [`frutiger-aero`](./frutiger-aero/SKILL.md) | Postmodern & Early Digital | frutiger aero, aero, web 2.0, windows vista, aqua | nostalgia campaigns, consumer software landing pages, music and media players | glossy, fresh, optimistic | 3 | 4 | 3 | 4 | 2 |
| [`skeuomorphism`](./skeuomorphism/SKILL.md) | Touchscreen | skeuomorphic, skeuomorphism, ios 6, real-world textures, leather texture | music and audio apps, notes and journal apps, games with a table or board | tactile, familiar, warm | 4 | 4 | 3 | 5 | 3 |
| [`flat-design`](./flat-design/SKILL.md) | Touchscreen | flat design, flat ui, flat style, no gradients, no shadows | marketing landing pages, mobile apps, dashboards | direct, light, bright | 1 | 1 | 4 | 1 | 2 |
| [`material-design`](./material-design/SKILL.md) | Touchscreen | material design, material ui, google material, elevation, floating action button | Android applications, admin dashboards, web apps with many components | bold, layered, responsive | 2 | 3 | 4 | 2 | 2 |
| [`corporate-memphis`](./corporate-memphis/SKILL.md) | Touchscreen | corporate memphis, alegria, flat people, big tech illustration, tiny heads long arms | SaaS landing pages, onboarding screens, empty states | friendly, inclusive, playful | 3 | 1 | 3 | 1 | 2 |
| [`neumorphism`](./neumorphism/SKILL.md) | Contemporary & Spatial | neumorphism, neumorphic, soft ui, extruded, embossed buttons | smart home controls, music players, calculators | soft, tactile, calm | 1 | 3 | 3 | 3 | 1 |
| [`glassmorphism`](./glassmorphism/SKILL.md) | Contemporary & Spatial | glassmorphism, frosted glass, glass ui, translucent panels, backdrop blur | music and media players, weather apps, crypto and fintech dashboards | translucent, airy, layered | 2 | 3 | 3 | 3 | 2 |
| [`neo-brutalism-ui`](./neo-brutalism-ui/SKILL.md) | Contemporary & Spatial | neo-brutalism, neubrutalism, neobrutalist, brutalist ui, thick black borders | creator-economy products, indie SaaS landing pages, developer tool sites | loud, raw, honest | 3 | 2 | 3 | 1 | 4 |
| [`bento-grid-ui`](./bento-grid-ui/SKILL.md) | Contemporary & Spatial | bento, bento grid, bento box layout, card grid, feature grid | product feature pages, SaaS landing pages, personal portfolios | organised, compact, scannable | 2 | 2 | 5 | 2 | 3 |
| [`spatial-visionos`](./spatial-visionos/SKILL.md) | Contemporary & Spatial | visionos, vision pro, spatial ui, spatial computing, glass window | Vision Pro apps, mixed-reality productivity tools, spatial media viewers | spatial, luminous, calm | 2 | 5 | 3 | 4 | 2 |

## Architecture

Vector axes, each 1 to 5: **ORN** ornamentation (no applied ornament → ornament covers the surface) · **STRUC** structural expression (structure hidden → structure is the image) · **GEOM** geometric rigidity (organic / free-form → strict orthogonal module) · **RAW** material rawness (finished and coated → raw and unfinished) · **MONU** monumentality (domestic human scale → monumental).

| Skill | Era | Load when | Good for | Feels | ORN | STRUC | GEOM | RAW | MONU |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`international-style-architecture`](./international-style-architecture/SKILL.md) | Modern Movement | international style, modernist architecture, miesian, glass box, white villa | concept renders, office buildings, private villas | rational, light, universal | 1 | 3 | 5 | 2 | 3 |
| [`brutalist-architecture`](./brutalist-architecture/SKILL.md) | Modern Movement | brutalist, brutalism, béton brut, raw concrete, barbican | concept renders, cultural buildings, university campuses | monumental, honest, severe | 1 | 5 | 4 | 5 | 5 |

## Painting

Vector axes, each 1 to 5: **ABS** abstraction (illusionistic depiction → pure abstraction) · **BRU** brushwork visibility (no trace of the hand → each stroke and gesture shown) · **CHR** chromatic intensity (muted, tonal → saturated, high-key) · **DEP** depth illusion (flat picture plane → deep perspectival space) · **LIN** line dominance (colour and mass carry the image → line carries the image).

| Skill | Era | Load when | Good for | Feels | ABS | BRU | CHR | DEP | LIN |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`renaissance-painting`](./renaissance-painting/SKILL.md) | Early modern | renaissance, quattrocento, italian renaissance, madonna and child, sfumato | allegorical illustration, book and album covers, image prompts for classical portraits | serene, ordered, ideal | 1 | 1 | 3 | 5 | 4 |
| [`baroque-painting`](./baroque-painting/SKILL.md) | Early modern | baroque, chiaroscuro, tenebrism, caravaggio, rembrandt | moody portraits, editorial illustration, game and film concept art | dramatic, intense, theatrical | 1 | 3 | 2 | 5 | 2 |
| [`ukiyo-e`](./ukiyo-e/SKILL.md) | Early modern | ukiyo-e, japanese woodblock, hokusai, hiroshige, great wave | posters and packaging, travel and food branding, editorial and book illustration | graphic, elegant, fleeting | 2 | 1 | 3 | 2 | 5 |
| [`impressionism`](./impressionism/SKILL.md) | Nineteenth century | impressionism, impressionist, monet, plein air, broken colour | landscape and garden illustration, hospitality and wellness art direction, wall art and greeting cards | luminous, fleeting, airy | 2 | 5 | 4 | 3 | 1 |
| [`nordic-national-romanticism-painting`](./nordic-national-romanticism-painting/SKILL.md) | Nineteenth century | national romanticism, nordic painting, carl larsson, gallen-kallela, kalevala | Nordic heritage and tourism art direction, book illustration for myth and legend, calm interior and home brands | quiet, northern, homely | 2 | 3 | 3 | 3 | 3 |
| [`cubism-painting`](./cubism-painting/SKILL.md) | Avant-garde | cubism, cubist, picasso, braque, analytic cubism | editorial and cultural poster art, album and book covers, portrait illustration with a modern edge | analytical, fragmented, modern | 4 | 3 | 2 | 2 | 4 |
| [`de-stijl-painting`](./de-stijl-painting/SKILL.md) | Avant-garde | de stijl, mondrian, neoplasticism, primary colours grid, geometric abstraction | identity and packaging graphics, layout and dashboard grid inspiration, poster and album art | rational, pure, balanced | 5 | 1 | 4 | 1 | 5 |
| [`abstract-expressionism`](./abstract-expressionism/SKILL.md) | Avant-garde | abstract expressionism, action painting, pollock, rothko, de kooning | album and festival art, editorial backgrounds and textures, cultural and gallery identity | raw, energetic, monumental | 5 | 5 | 3 | 2 | 2 |

---

Generated by `scripts/compile-skills.ts`. Do not edit this file; change the data and run `npm run build`.
