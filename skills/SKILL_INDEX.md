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
| [`art-nouveau-web`](./art-nouveau-web/SKILL.md) | Fin de Siècle | art nouveau, jugendstil, mucha, botanical, floral ornament | botanical and tea brands, wedding and boutique sites, museum exhibition pages | organic, romantic, crafted | 5 | 2 | 2 | 2 | 4 |
| [`de-stijl-web`](./de-stijl-web/SKILL.md) | Modernist | de stijl, mondrian, neoplasticism, primary colours, rietveld | art and design museum sites, portfolios, bento-like dashboards with a strong identity | rational, balanced, abstract | 1 | 1 | 5 | 1 | 2 |
| [`bauhaus`](./bauhaus/SKILL.md) | Modernist | bauhaus, primary colours, geometric shapes, form follows function, dessau | posters, design school sites, museum and exhibition pages | geometric, functional, constructive | 2 | 2 | 4 | 1 | 3 |
| [`constructivism-web`](./constructivism-web/SKILL.md) | Modernist | constructivism, rodchenko, el lissitzky, soviet poster, agitprop | campaign and activist sites, event posters and festivals, music and club promotion | urgent, militant, dynamic | 3 | 2 | 3 | 1 | 5 |
| [`art-deco-web`](./art-deco-web/SKILL.md) | Modernist | art deco, gatsby, 1920s, jazz age, gold and black | luxury hotels and bars, event and gala sites, jewellery and watches | glamorous, luxurious, symmetric | 4 | 2 | 5 | 2 | 4 |
| [`mid-century-modern`](./mid-century-modern/SKILL.md) | Modernist | mid-century, mid century modern, mcm, atomic age, 1950s modern | lifestyle brands, furniture and home stores, cafes and restaurants | warm, optimistic, playful | 3 | 2 | 3 | 2 | 3 |
| [`swiss-international`](./swiss-international/SKILL.md) | Modernist | swiss, swiss style, international style, helvetica, grid-based | editorial sites, documentation, annual reports | objective, precise, calm | 1 | 1 | 5 | 1 | 2 |
| [`rams-functionalism-ui`](./rams-functionalism-ui/SKILL.md) | Modernist | dieter rams, braun, less but better, good design, functionalism | audio and hardware product pages, smart home and device apps, calculators and tools | honest, quiet, functional | 1 | 2 | 5 | 2 | 1 |
| [`pop-art-web`](./pop-art-web/SKILL.md) | Modernist | pop art, warhol, lichtenstein, halftone, comic style | campaign and launch pages, fashion and music brands, kids and snack products | loud, ironic, playful | 4 | 2 | 2 | 1 | 4 |
| [`psychedelic`](./psychedelic/SKILL.md) | Modernist | psychedelic, 60s poster, acid, trippy, tie-dye | music festival posters, album covers, event and club sites | trippy, liberated, vibrating | 5 | 2 | 1 | 1 | 5 |
| [`punk-zine`](./punk-zine/SKILL.md) | Postmodern & Early Digital | punk, zine, xerox, cut and paste, ransom note | music and gig sites, independent publishers, protest and activist pages | raw, defiant, DIY | 4 | 1 | 1 | 2 | 5 |
| [`memphis-design`](./memphis-design/SKILL.md) | Postmodern & Early Digital | memphis, memphis design, memphis milano, 80s, eighties | music and event posters, youth brands, landing pages for creative tools | playful, loud, irreverent | 5 | 2 | 1 | 1 | 4 |
| [`grunge-editorial`](./grunge-editorial/SKILL.md) | Postmodern & Early Digital | grunge, david carson, ray gun, emigre, distressed type | music magazines, zines, event posters | raw, noisy, rebellious | 4 | 2 | 1 | 2 | 5 |
| [`y2k-aesthetic`](./y2k-aesthetic/SKILL.md) | Postmodern & Early Digital | y2k, 2000s, millennium, chrome, cyber | music and fashion sites, tech product launches, nostalgia campaigns | futuristic, glossy, optimistic | 4 | 3 | 3 | 3 | 3 |
| [`japanese-dense-web`](./japanese-dense-web/SKILL.md) | Postmodern & Early Digital | japanese web, japanese portal, dense layout, yahoo japan, rakuten | commerce and marketplace portals, news and media portals, price and review comparison sites | abundant, convenient, busy | 4 | 1 | 4 | 1 | 3 |
| [`apple-aqua`](./apple-aqua/SKILL.md) | Postmodern & Early Digital | aqua, mac os x, gel buttons, pinstripe, glossy buttons | retro software and Mac themes, web 2.0 revival pages, nostalgia and portfolio sites | glossy, friendly, liquid | 3 | 4 | 4 | 4 | 2 |
| [`frutiger-aero`](./frutiger-aero/SKILL.md) | Postmodern & Early Digital | frutiger aero, aero, web 2.0, windows vista, aqua | nostalgia campaigns, consumer software landing pages, music and media players | glossy, fresh, optimistic | 3 | 4 | 3 | 4 | 2 |
| [`skeuomorphism`](./skeuomorphism/SKILL.md) | Touchscreen | skeuomorphic, skeuomorphism, ios 6, real-world textures, leather texture | music and audio apps, notes and journal apps, games with a table or board | tactile, familiar, warm | 4 | 4 | 3 | 5 | 3 |
| [`metro-ui`](./metro-ui/SKILL.md) | Touchscreen | metro, windows phone, modern ui, live tiles, tile ui | dashboards of tiles, kiosk and signage apps, news and feed readers | clear, fast, typographic | 1 | 2 | 5 | 1 | 3 |
| [`flat-design`](./flat-design/SKILL.md) | Touchscreen | flat design, flat ui, flat style, no gradients, no shadows | marketing landing pages, mobile apps, dashboards | direct, light, bright | 1 | 1 | 4 | 1 | 2 |
| [`vaporwave`](./vaporwave/SKILL.md) | Touchscreen | vaporwave, aesthetic, retro 80s, retro 90s, neon sunset | music and label sites, art projects and NFT-era galleries, game and retro tech pages | nostalgic, dreamy, ironic | 4 | 3 | 2 | 3 | 4 |
| [`brutalist-web`](./brutalist-web/SKILL.md) | Touchscreen | brutalist website, brutalist web, raw html, default browser style, anti-design web | personal sites and blogs, art and archive projects, documentation with no frills | raw, honest, austere | 1 | 1 | 2 | 1 | 2 |
| [`material-design`](./material-design/SKILL.md) | Touchscreen | material design, material ui, google material, elevation, floating action button | Android applications, admin dashboards, web apps with many components | bold, layered, responsive | 2 | 3 | 4 | 2 | 2 |
| [`anti-design`](./anti-design/SKILL.md) | Touchscreen | anti-design, ugly design, broken grid, chaotic layout, clashing type | creative studios and portfolios, music and fashion brands, art and festival sites | rebellious, chaotic, loud | 4 | 1 | 1 | 1 | 5 |
| [`dark-devtool-ui`](./dark-devtool-ui/SKILL.md) | Touchscreen | dark mode, developer tool, dev tool, linear style, command palette | developer tools and CLIs, SaaS for engineers, observability and infra dashboards | focused, fast, precise | 1 | 2 | 4 | 1 | 2 |
| [`corporate-memphis`](./corporate-memphis/SKILL.md) | Touchscreen | corporate memphis, alegria, flat people, big tech illustration, tiny heads long arms | SaaS landing pages, onboarding screens, empty states | friendly, inclusive, playful | 3 | 1 | 3 | 1 | 2 |
| [`terminal-tui-web`](./terminal-tui-web/SKILL.md) | Touchscreen | terminal, tui, command line, cli aesthetic, monospace ui | CLI and developer tool sites, documentation for command-line tools, hacker, security and CTF pages | technical, fast, honest | 2 | 1 | 5 | 1 | 3 |
| [`aurora-gradient-ui`](./aurora-gradient-ui/SKILL.md) | Touchscreen | aurora gradient, mesh gradient, gradient background, stripe style, ai landing page | fintech and payments landing pages, AI product pages, app launch and waitlist pages | glowing, futuristic, calm | 3 | 3 | 3 | 2 | 2 |
| [`neumorphism`](./neumorphism/SKILL.md) | Contemporary & Spatial | neumorphism, neumorphic, soft ui, extruded, embossed buttons | smart home controls, music players, calculators | soft, tactile, calm | 1 | 3 | 3 | 3 | 1 |
| [`glassmorphism`](./glassmorphism/SKILL.md) | Contemporary & Spatial | glassmorphism, frosted glass, glass ui, translucent panels, backdrop blur | music and media players, weather apps, crypto and fintech dashboards | translucent, airy, layered | 2 | 3 | 3 | 3 | 2 |
| [`neo-brutalism-ui`](./neo-brutalism-ui/SKILL.md) | Contemporary & Spatial | neo-brutalism, neubrutalism, neobrutalist, brutalist ui, thick black borders | creator-economy products, indie SaaS landing pages, developer tool sites | loud, raw, honest | 3 | 2 | 3 | 1 | 4 |
| [`claymorphism`](./claymorphism/SKILL.md) | Contemporary & Spatial | claymorphism, clay, 3d clay, soft 3d, inflated | kids and education apps, consumer wellness and finance for young users, app landing pages | playful, soft, friendly | 3 | 4 | 2 | 3 | 3 |
| [`editorial-serif-revival`](./editorial-serif-revival/SKILL.md) | Contemporary & Spatial | editorial, serif, magazine, new york times style, fraunces | publishing and newsletters, agency and studio sites, founder and brand stories | literary, warm, confident | 2 | 1 | 3 | 1 | 4 |
| [`ai-chat-ui`](./ai-chat-ui/SKILL.md) | Contemporary & Spatial | chat ui, chatbot, ai assistant, llm interface, prompt box | AI assistants and copilots, support and onboarding chat, search with answers | calm, conversational, focused | 1 | 1 | 3 | 1 | 2 |
| [`bento-grid-ui`](./bento-grid-ui/SKILL.md) | Contemporary & Spatial | bento, bento grid, bento box layout, card grid, feature grid | product feature pages, SaaS landing pages, personal portfolios | organised, compact, scannable | 2 | 2 | 5 | 2 | 3 |
| [`spatial-visionos`](./spatial-visionos/SKILL.md) | Contemporary & Spatial | visionos, vision pro, spatial ui, spatial computing, glass window | Vision Pro apps, mixed-reality productivity tools, spatial media viewers | spatial, luminous, calm | 2 | 5 | 3 | 4 | 2 |
| [`liquid-glass-ui`](./liquid-glass-ui/SKILL.md) | Contemporary & Spatial | liquid glass, ios 26, apple glass, refractive, frosted glass new | mobile and OS-style apps, media, photo and map apps, product pages of premium hardware | fluid, light, refractive | 2 | 4 | 3 | 3 | 2 |

## Architecture

Vector axes, each 1 to 5: **ORN** ornamentation (no applied ornament → ornament covers the surface) · **STRUC** structural expression (structure hidden → structure is the image) · **GEOM** geometric rigidity (organic / free-form → strict orthogonal module) · **RAW** material rawness (finished and coated → raw and unfinished) · **MONU** monumentality (domestic human scale → monumental).

| Skill | Era | Load when | Good for | Feels | ORN | STRUC | GEOM | RAW | MONU |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`art-nouveau-architecture`](./art-nouveau-architecture/SKILL.md) | Fin de Siècle | art nouveau, jugendstil, whiplash curve, horta, guimard | townhouse and hotel renders, metro and rail entrances, cafés and shopfronts | organic, sinuous, crafted | 5 | 3 | 1 | 2 | 2 |
| [`bauhaus-architecture`](./bauhaus-architecture/SKILL.md) | Modern Movement | bauhaus architecture, bauhaus building, dessau, gropius, hannes meyer | school and campus renders, social housing studies, workshop and studio buildings | functional, asymmetric, didactic | 1 | 4 | 5 | 2 | 2 |
| [`art-deco-architecture`](./art-deco-architecture/SKILL.md) | Modern Movement | art deco, stepped skyscraper, zigzag moderne, chevron relief, chrysler building | hotel and cinema renders, office towers, lobby and entrance design | glamorous, symmetric, vertical | 4 | 2 | 4 | 1 | 4 |
| [`international-style-architecture`](./international-style-architecture/SKILL.md) | Modern Movement | international style, modernist architecture, miesian, glass box, white villa | concept renders, office buildings, private villas | rational, light, universal | 1 | 3 | 5 | 2 | 3 |
| [`mid-century-modern-architecture`](./mid-century-modern-architecture/SKILL.md) | Modern Movement | mid-century modern, mid century house, case study house, post and beam, eichler | house and villa renders, real-estate staging, residential interiors | warm, horizontal, open | 1 | 3 | 4 | 3 | 1 |
| [`brutalist-architecture`](./brutalist-architecture/SKILL.md) | Modern Movement | brutalist, brutalism, béton brut, raw concrete, barbican | concept renders, cultural buildings, university campuses | monumental, honest, severe | 1 | 5 | 4 | 5 | 5 |
| [`postmodern-architecture`](./postmodern-architecture/SKILL.md) | Postmodern and After | postmodern architecture, postmodernism, michael graves, venturi, broken pediment | office and civic building renders, retail and hospitality fronts, game and film sets | playful, ironic, colourful | 4 | 1 | 3 | 1 | 3 |
| [`high-tech-architecture`](./high-tech-architecture/SKILL.md) | Postmodern and After | high-tech architecture, pompidou, rogers and piano, norman foster, hsbc building | museum and library renders, corporate headquarters, airport and station design | technical, transparent, flexible | 1 | 5 | 4 | 2 | 3 |
| [`deconstructivist-architecture`](./deconstructivist-architecture/SKILL.md) | Postmodern and After | deconstructivism, deconstructivist architecture, frank gehry, zaha hadid early, libeskind | museum and gallery renders, landmark concept art, film and game environments | fractured, dynamic, unstable | 2 | 3 | 1 | 3 | 3 |

## Interior

Vector axes, each 1 to 5: **ORN** ornamentation (plain surfaces, no applied decoration → pattern and ornament on every surface) · **DENS** density (few objects, wide empty floor → full floor, full walls, layered objects) · **FORM** formality (free asymmetric placement → axial, mirrored placement) · **NAT** material naturalness (synthetic, lacquered, plastic → raw wood, stone, linen, clay) · **CHROMA** chromatic intensity (neutral, low chroma → saturated colour fields).

| Skill | Era | Load when | Good for | Feels | ORN | DENS | FORM | NAT | CHROMA |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`georgian-interior`](./georgian-interior/SKILL.md) | Classical house | georgian, georgian interior, palladian, regency drawing room, adam style | period house restoration, formal dining rooms, boutique hotels in old buildings | ordered, dignified, proportioned | 3 | 2 | 5 | 4 | 2 |
| [`shaker-interior`](./shaker-interior/SKILL.md) | Industrial century | shaker, shaker style, peg rail, ladder-back chair, shaker kitchen | kitchens, bedrooms, boot rooms | ordered, plain, honest | 1 | 1 | 4 | 5 | 2 |
| [`victorian-interior`](./victorian-interior/SKILL.md) | Industrial century | victorian, victorian parlour, victorian interior, gothic parlour, dark academia room | period restoration, bars and members clubs, themed hotels | opulent, dense, enclosed | 5 | 5 | 4 | 3 | 4 |
| [`arts-and-crafts-interior`](./arts-and-crafts-interior/SKILL.md) | Industrial century | arts and crafts, craftsman, mission style, william morris, inglenook | bungalow restoration, libraries and studies, country inns | handmade, honest, warm | 3 | 3 | 2 | 5 | 2 |
| [`art-nouveau-interior`](./art-nouveau-interior/SKILL.md) | Modern reform | art nouveau, jugendstil, liberty style, whiplash curves, horta interior | cafés and restaurants, boutique hotels, jewellery and perfume retail | organic, flowing, sensual | 5 | 3 | 3 | 4 | 3 |
| [`bauhaus-interior`](./bauhaus-interior/SKILL.md) | Modern reform | bauhaus interior, bauhaus room, tubular steel, cantilever chair, dessau | studios and workspaces, design museum rooms, small flats | rational, functional, clear | 1 | 2 | 2 | 2 | 3 |
| [`art-deco-interior`](./art-deco-interior/SKILL.md) | Modern reform | art deco, deco interior, 1920s interior, jazz age, gatsby | cocktail bars, hotel lobbies, theatres and cinemas | glamorous, bold, geometric | 4 | 3 | 5 | 2 | 3 |
| [`hollywood-regency-interior`](./hollywood-regency-interior/SKILL.md) | Post-war modern | hollywood regency, regency moderne, dorothy draper, old hollywood, glam interior | hotel lobbies and bars, dressing rooms, beauty and fashion retail | glamorous, bold, theatrical | 4 | 3 | 4 | 2 | 4 |
| [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md) | Post-war modern | mid-century modern, mid-century, mcm, 1950s living room, eames | living rooms, open-plan homes, boutique hotels | optimistic, warm, relaxed | 2 | 2 | 2 | 3 | 3 |
| [`scandinavian-interior`](./scandinavian-interior/SKILL.md) | Post-war modern | scandinavian, scandi, nordic, danish design, hygge | family homes, small flats, cafés | bright, calm, natural | 1 | 2 | 3 | 4 | 1 |
| [`industrial-loft-interior`](./industrial-loft-interior/SKILL.md) | Post-war modern | industrial, loft, warehouse, exposed brick, factory style | coffee shops and restaurants, co-working spaces, creative studios | raw, spacious, urban | 1 | 3 | 1 | 4 | 2 |
| [`memphis-interior`](./memphis-interior/SKILL.md) | Post-war modern | memphis, memphis milano, sottsass, 1980s postmodern, squiggle pattern | retail and pop-up stores, creative offices, bars and cafés | playful, ironic, loud | 5 | 3 | 1 | 1 | 5 |
| [`minimalist-interior`](./minimalist-interior/SKILL.md) | Global minimal | minimalist, minimal interior, white minimalism, pawson, less is more | galleries and showrooms, luxury retail, spa bathrooms | pure, calm, precise | 1 | 1 | 4 | 3 | 1 |
| [`japandi-interior`](./japandi-interior/SKILL.md) | Networked home | japandi, japanese scandinavian, japanordic, zen minimal, wabi-sabi light | bedrooms, living rooms, spas and wellness | serene, grounded, natural | 1 | 1 | 3 | 5 | 1 |
| [`grandmillennial-interior`](./grandmillennial-interior/SKILL.md) | Networked home | grandmillennial, granny chic, new traditional, chintz, blue and white porcelain | family living rooms, bedrooms and guest rooms, country hotels and B&Bs | nostalgic, cheerful, cosy | 4 | 4 | 3 | 3 | 3 |
| [`neo-deco-interior`](./neo-deco-interior/SKILL.md) | Networked home | neo deco, new deco, modern art deco, curved sofa, fluted wood | restaurants and bars, boutique hotels, beauty salons | curved, warm, glamorous | 4 | 3 | 4 | 2 | 3 |
| [`dopamine-decor`](./dopamine-decor/SKILL.md) | Networked home | dopamine decor, colourful interior, colorful room, colour drenching, joyful maximalism | children's and teen rooms, creative offices, cafés and bars | joyful, playful, bold | 4 | 4 | 1 | 2 | 5 |
| [`quiet-luxury-interior`](./quiet-luxury-interior/SKILL.md) | Networked home | quiet luxury, stealth wealth, old money interior, understated luxury, tonal interior | high-end residences, hotel suites, luxury retail | understated, refined, tonal | 2 | 2 | 4 | 4 | 1 |

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

## Film & Video

Vector axes, each 1 to 5: **CAM** camera mobility (locked off, tripod → handheld, gimbal or free flight) · **CUT** cutting rate (long take, average shot over 20 s → rapid montage, average shot under 2 s) · **STAGE** staging (found, unplanned → fully constructed) · **GRADE** grade stylisation (natural, neutral colour → heavily stylised colour) · **FRAME** frame width (vertical 9:16 → anamorphic 2.39:1 or wider).

| Skill | Era | Load when | Good for | Feels | CAM | CUT | STAGE | GRADE | FRAME |
|---|---|---|---|---|:-:|:-:|:-:|:-:|:-:|
| [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md) | The silent era | expressionist film, caligari, nosferatu, silent horror, german expressionism | horror and thriller titles and trailers, music video with a gothic set, title sequences | uncanny, gothic, anxious | 2 | 2 | 5 | 4 | 2 |
| [`soviet-montage`](./soviet-montage/SKILL.md) | The silent era | soviet montage, eisenstein, kuleshov, intellectual montage, propaganda film look | manifesto and campaign films, music video with a hard rhythm, brand film about industry or labour | urgent, rhythmic, political | 3 | 5 | 4 | 2 | 2 |
| [`french-new-wave`](./french-new-wave/SKILL.md) | Portable cameras and the new waves | french new wave, nouvelle vague, godard, truffaut, jump cut | fashion and lifestyle films, music video on location, independent short film | restless, cool, free | 4 | 3 | 2 | 1 | 3 |
| [`dogme-95`](./dogme-95/SKILL.md) | Lightweight digital and the manifesto | dogme, dogme 95, vow of chastity, handheld naturalism, no lighting | a drama on one location, documentary-style brand story, actor-led short film | raw, honest, uncomfortable | 5 | 3 | 1 | 1 | 2 |
| [`creator-vlog`](./creator-vlog/SKILL.md) | Platform and creator video | vlog, youtube vlog, jump cut, talking head, creator video | creator and influencer channels, brand explainers with a person, product reviews and unboxing | personal, fast, casual | 4 | 4 | 2 | 2 | 4 |
| [`vertical-short-form`](./vertical-short-form/SKILL.md) | Platform and creator video | tiktok, reels, shorts, vertical video, 9:16 | social ads and paid creative, creator and brand channels, product demos under 30 s | fast, punchy, playful | 4 | 5 | 3 | 3 | 1 |
| [`cinematic-fpv`](./cinematic-fpv/SKILL.md) | Platform and creator video | fpv, fpv drone, drone dive, one take flight, cinewhoop | automotive and sport launch films, real estate and travel flythroughs, music video with a one-take flight | exhilarating, fluid, immersive | 5 | 1 | 3 | 3 | 4 |
| [`camcorder-revival`](./camcorder-revival/SKILL.md) | Platform and creator video | camcorder, vhs look, home video, tape look, y2k camcorder | music video and artist content, fashion and youth brand campaigns, found-footage horror | nostalgic, raw, intimate | 4 | 2 | 1 | 4 | 2 |

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
