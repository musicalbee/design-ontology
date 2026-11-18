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

## Photography

Vector axes, each 1 to 5: **STAGE** staging (found, unplanned → fully constructed) · **TONE** tonal contrast (flat, narrow range → hard, black to white) · **CHROMA** colour saturation (monochrome or muted → saturated) · **DOF** depth of field (deep, all sharp → shallow, subject isolated) · **PROX** proximity (distant, context first → intimate, close to the subject).

| Skill | Era | Load when | Good for | Feels | STAGE | TONE | CHROMA | DOF | PROX |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`pictorialism`](./pictorialism/SKILL.md) | Photography as art | pictorialism, pictorialist, soft focus, platinum print, gum print | period portraits, heritage and archive brands, book covers | dreamy, soft, wistful | 4 | 2 | 2 | 4 | 2 |
| [`straight-photography`](./straight-photography/SKILL.md) | Photography as art | straight photography, f/64, large format, zone system, ansel adams | landscape and nature prints, still life and product art, book and gallery imagery | precise, clear, monumental | 2 | 4 | 1 | 1 | 3 |
| [`street-photography`](./street-photography/SKILL.md) | The small camera | street photography, candid, decisive moment, cartier-bresson, leica | editorial city stories, campaign imagery with a raw feel, photo books | candid, urgent, witty | 1 | 4 | 1 | 2 | 4 |
| [`new-colour`](./new-colour/SKILL.md) | Colour and the topographic turn | new colour, new color, eggleston, stephen shore, dye transfer | lifestyle and fashion backdrops, editorial colour stories, retro campaign imagery | vivid, ordinary, deadpan | 1 | 3 | 4 | 2 | 3 |
| [`new-topographics`](./new-topographics/SKILL.md) | Colour and the topographic turn | new topographics, deadpan, typology, suburban landscape, flat light | architecture and real estate documentation, urban research, catalogue and archive imagery | deadpan, neutral, exact | 2 | 2 | 1 | 1 | 1 |
| [`y2k-digicam`](./y2k-digicam/SKILL.md) | Digital and the grade | y2k digicam, digicam, early digital camera, ccd, 2000s photo | fashion and music campaigns with a nostalgic tone, social media content, album and zine artwork | nostalgic, casual, lo-fi | 2 | 3 | 3 | 1 | 3 |
| [`cinematic-teal-orange`](./cinematic-teal-orange/SKILL.md) | Digital and the grade | teal and orange, orange and teal, cinematic, film still, blockbuster grade | film and trailer stills, automotive and tech campaigns, thumbnails and key art | cinematic, dramatic, polished | 5 | 4 | 4 | 4 | 3 |
| [`party-flash`](./party-flash/SKILL.md) | Digital and the grade | party flash, flash photography, direct flash, on-camera flash, snapshot | fashion and music campaigns, nightlife and event coverage, social media content | raw, rowdy, intimate | 2 | 5 | 3 | 2 | 4 |

---

Generated by `scripts/compile-skills.ts`. Do not edit this file; change the data and run `npm run build`.
