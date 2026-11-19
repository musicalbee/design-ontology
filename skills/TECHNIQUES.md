# Technique catalogue

A technique is a cut, a motion rule, a motif, a material, a process or a tool. It starts in one domain and moves into others, often decades later. Each row gives the origin and each adoption with its lag in years. Each style skill that uses a technique repeats its rules.

The data is in [`../data/techniques/`](../data/techniques/). A machine-readable copy is in [`../graph/lineage.json`](../graph/lineage.json) (key `techniques`).

## Montage

### Extreme close-up

A frame that holds only a part of a face, such as the eyes; the cut from a wide view to this frame sets a person against the world.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1900 | — | Hove: George Albert Smith inserts magnified close views into Grandma's Reading Glass. | |
| 1 | Film & Video | 1928 | +28 years | Carl Theodor Dreyer fills the frame with the face of Renée Falconetti in The Passion of Joan of Arc. |  |
| 2 | Film & Video | 1964 | +64 years | Sergio Leone cuts between the eyes of gunmen and a wide desert in A Fistful of Dollars, on a Techniscope 2.35:1 frame. | [`spaghetti-western`](./spaghetti-western/SKILL.md) |
| 3 | Painting | 1967 | +67 years | Chuck Close paints a huge frontal head from a photograph in Big Self-Portrait (1967–68). | [`photorealism`](./photorealism/SKILL.md) |

Used by: [`spaghetti-western`](./spaghetti-western/SKILL.md), [`photorealism`](./photorealism/SKILL.md).

- Frame the eyes as a band that fills the width of a 2.35:1 frame; use a lens of 75mm to 100mm.
- Cut from a wide shot to the close-up with no medium shot between them.
- Hold each close-up for 2 to 4 seconds and cut back to the wide view when the look ends.
- In a painting, scale the head to 2 metres or more and keep the focus even over the full face.

Sources: Christopher Frayling, Sergio Leone: Something to Do with Death (Faber, 2000); [Wikipedia: Close-up](https://en.wikipedia.org/wiki/Close-up).

### Jump cut

A cut inside one continuous shot that removes time and leaves the jump in view.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1960 | — | Paris: Jean-Luc Godard cuts inside continuous shots in À bout de souffle and does not hide the jump. | |
| 1 | Film & Video | 1981 | +21 years | MTV starts in 1981; music videos cut on the beat and jump inside one take. | [`music-video`](./music-video/SKILL.md) |
| 2 | Film & Video | c. 2006 | +46 years | Video bloggers on YouTube cut the pauses out of a talk to the camera. | [`creator-vlog`](./creator-vlog/SKILL.md) |
| 3 | Film & Video | c. 2018 | +58 years | Vertical short-form apps make the fast jump cut the default rhythm of a clip. | [`vertical-short-form`](./vertical-short-form/SKILL.md) |

Used by: [`french-new-wave`](./french-new-wave/SKILL.md), [`creator-vlog`](./creator-vlog/SKILL.md), [`vertical-short-form`](./vertical-short-form/SKILL.md), [`music-video`](./music-video/SKILL.md).

- Remove 0.3 to 2 seconds inside one shot and keep the framing within 10% of the frame width, so that the jump shows.
- In a talk to camera, cut on the word and not on the action: one cut every 2 to 4 seconds.

Sources: Richard Neupert, A History of the French New Wave Cinema (University of Wisconsin Press, 2002).

### Long take

A shot that runs for minutes with no visible cut; the camera and the actors carry the scene and the viewer sees real time.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1948 | — | Hollywood: Alfred Hitchcock shoots Rope in takes of about 10 minutes, the length of one reel, and hides each join in a dark back or a close shape. | |
| 1 | Film & Video | c. 1958 | +10 years | Orson Welles opens Touch of Evil with a single crane and tracking shot of about three minutes. | [`one-take-oner`](./one-take-oner/SKILL.md) |
| 2 | Film & Video | 1994 | +46 years | Béla Tarr cuts Sátántangó into 150 shots in 7 hours, many of them takes of several minutes. | [`slow-cinema`](./slow-cinema/SKILL.md) |
| 3 | Film & Video | 2002 | +54 years | Alexander Sokurov makes Russian Ark as one Steadicam take of 96 minutes through the Hermitage. | [`one-take-oner`](./one-take-oner/SKILL.md) |
| 4 | Film & Video | 2014 | +66 years | Birdman, shot by Emmanuel Lubezki, hides its cuts to look like one take. | [`one-take-oner`](./one-take-oner/SKILL.md) |
| 5 | Film & Video | 2019 | +71 years | 1917, shot by Roger Deakins, joins a few long takes into the look of one shot. | [`one-take-oner`](./one-take-oner/SKILL.md) |

Used by: [`one-take-oner`](./one-take-oner/SKILL.md), [`slow-cinema`](./slow-cinema/SKILL.md).

- Plan the take in blocks of 2 to 10 minutes; the length of a reel or a memory card sets the limit.
- Hide a needed cut in a dark surface, a door, a wipe past a wall or a digital stitch, and keep it under 0.5 seconds.
- Move the camera at a steady pace and let the actors enter and leave the frame so that the framing changes by itself.
- Rehearse each move to a few centimetres, because a mistake at minute eight spoils the full take.

Sources: David Bordwell, The Way Hollywood Tells It (University of California Press, 2006); [Wikipedia: Long take](https://en.wikipedia.org/wiki/Long_take).

### Match cut

A cut between two shots whose main forms have the same shape, position or movement, so that the eye carries one form across the cut.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1968 | — | 2001: A Space Odyssey: Graphic matches are older; the reference case is Stanley Kubrick's cut from a thrown bone to a satellite in orbit. | |
| 1 | Graphic & UI Design | 2014 | +46 years | Material motion in Android 5.0 carries one element from screen to screen as a shared-element transition. | [`material-design`](./material-design/SKILL.md) |

Used by: [`material-design`](./material-design/SKILL.md), [`spatial-visionos`](./spatial-visionos/SKILL.md).

- Match the shape, the position and the scale of the main form across the cut within 10% of the frame width.
- In an interface, move the shared element from its old box to its new box in 250 to 350ms while the rest of the screen fades.

Sources: David Bordwell and Kristin Thompson, Film Art: An Introduction (McGraw-Hill).

### Photomontage

Fragments of photographs, cut and joined on one sheet, so that the joins make a statement that no single photograph makes.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 1918 | — | Berlin: Raoul Hausmann and Hannah Höch of Berlin Dada cut press photographs and paste them into one sheet. | |
| 1 | Graphic & UI Design | 1924 | +6 years | Alexander Rodchenko and El Lissitzky use photomontage in Constructivist posters and books. | [`constructivism-web`](./constructivism-web/SKILL.md) |
| 2 | Film & Video | 1925 | +7 years | Sergei Eisenstein carries the collision of fragments into the cut of Strike and Battleship Potemkin. | [`soviet-montage`](./soviet-montage/SKILL.md) |
| 3 | Graphic & UI Design | 1976 | +58 years | Punk zines and record sleeves cut up newspapers with scissors and glue. | [`punk-zine`](./punk-zine/SKILL.md) |
| 4 | Graphic & UI Design | c. 1990 | +72 years | Photoshop makes the cut and the layer digital; early cyberculture prints dense photo-illustration. | [`cyberdelia`](./cyberdelia/SKILL.md) |
| 5 | Graphic & UI Design | c. 2012 | +94 years | Designers cut photographs of objects and clouds into collage scenes, in the line of the Surrealist collages of Max Ernst. | [`surrealism-web`](./surrealism-web/SKILL.md) |
| 6 | Graphic & UI Design | c. 2016 | +98 years | Anti-design sites overlap cut images and text blocks across a broken grid. | [`anti-design`](./anti-design/SKILL.md) |
| 7 | Graphic & UI Design | c. 2018 | +100 years | Scrapbook interfaces lay cut photographs, tape and stickers over each other, as on the page of an album. | [`scrapbook-ui`](./scrapbook-ui/SKILL.md) |

Used by: [`constructivism-web`](./constructivism-web/SKILL.md), [`soviet-montage`](./soviet-montage/SKILL.md), [`punk-zine`](./punk-zine/SKILL.md), [`cyberdelia`](./cyberdelia/SKILL.md), [`grunge-editorial`](./grunge-editorial/SKILL.md), [`surrealism-web`](./surrealism-web/SKILL.md), [`anti-design`](./anti-design/SKILL.md), [`scrapbook-ui`](./scrapbook-ui/SKILL.md).

- Join 3 to 12 photographic fragments on one ground and keep the cut edges hard and visible.
- Vary the scale of the fragments by 4:1 or more, so that the joins read as a claim and not as a scene.
- Set type as one more fragment, turned 0° to 30°, in the same stack of layers.

Sources: Dawn Ades, Photomontage (Thames & Hudson, 1976).

## Animation

### Easing

A move speeds up from rest and slows down before it stops, as a real mass does, instead of a constant speed.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1930 | — | Disney studio, Los Angeles: Animators draw more frames at the start and the end of a move; Thomas and Johnston name it slow in and slow out. | |
| 1 | Graphic & UI Design | 2001 | +71 years | Robert Penner publishes easing equations for Flash, and web motion takes them up. | [`frutiger-aero`](./frutiger-aero/SKILL.md) |
| 2 | Graphic & UI Design | c. 2009 | +79 years | CSS transitions define timing functions such as ease-in-out and cubic-bezier(). | [`material-design`](./material-design/SKILL.md) |

Used by: [`frutiger-aero`](./frutiger-aero/SKILL.md), [`material-design`](./material-design/SKILL.md), [`glassmorphism`](./glassmorphism/SKILL.md).

- Give a move of 200 to 400ms an ease-out curve when an element enters and an ease-in curve when it leaves.
- Use cubic-bezier(0.4, 0, 0.2, 1) as the standard curve for a move inside the screen.
- Put more frames at the two ends of a move than in the middle: 2 to 3 times the density.

Sources: Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); Robert Penner, Programming Macromedia Flash MX (2002).

### Ken Burns effect

A slow pan and zoom across a still image, so that a photograph moves in a film.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1990 | — | The Civil War (PBS): Ken Burns pans and zooms over still photographs in a documentary series; rostrum-camera moves are older. | |
| 1 | Graphic & UI Design | c. 2003 | +13 years | Apple names the pan-and-zoom setting after Burns in its photo and video software. |  |

Used by: [`creator-vlog`](./creator-vlog/SKILL.md).

- Move 5% to 15% of the frame over 4 to 8 seconds on each still.
- Start or end each move on a face or on the key detail.

Sources: Ken Burns, The Civil War (PBS, 1990).

### Multiplane parallax

Flat layers move at different speeds by their distance, so that a flat picture gets depth.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1937 | — | The Old Mill: Disney's multiplane camera moves painted glass layers at different speeds; The Old Mill (1937) is its first film. | |
| 1 | Video game | 1982 | +45 years | Moon Patrol scrolls 3 background layers at different speeds in arcades. |  |
| 2 | Video game | 1990 | +53 years | 16-bit consoles scroll 2 to 4 hardware layers for parallax depth. | [`sixteen-bit-sprite`](./sixteen-bit-sprite/SKILL.md) |
| 3 | Graphic & UI Design | c. 2011 | +74 years | Parallax scroll pages move the background layers slower than the page. | [`flat-design`](./flat-design/SKILL.md) |
| 4 | Graphic & UI Design | 2015 | +78 years | Layered app icons on tvOS, and later visionOS, tilt their layers with parallax. | [`spatial-visionos`](./spatial-visionos/SKILL.md) |

Used by: [`flat-design`](./flat-design/SKILL.md), [`spatial-visionos`](./spatial-visionos/SKILL.md), [`sixteen-bit-sprite`](./sixteen-bit-sprite/SKILL.md).

- Move each layer at a speed in proportion to its distance: a far layer at 20% to 50% of the speed of the front layer.
- Use 3 to 5 layers; more layers add load and no depth.
- Give a reduced-motion setting that stops the shift of the layers.

Sources: Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981).

### Squash and stretch

A moving form changes shape but keeps its volume: it stretches along its path at speed and squashes on impact.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1930 | — | Disney studio, Los Angeles: Disney animators exaggerate the volume of a ball and a face; Frank Thomas and Ollie Johnston name it the first of twelve principles in 1981. | |
| 1 | Film & Video | 1986 | +56 years | John Lasseter applies it to computer animation in Luxo Jr. and in his SIGGRAPH paper of 1987. |  |
| 2 | Graphic & UI Design | 2013 | +83 years | Spring-damped animation in iOS 7 lets interface elements overshoot and settle. | [`flat-design`](./flat-design/SKILL.md) |
| 3 | Graphic & UI Design | c. 2015 | +85 years | 3D motion design renders soft bodies that wobble, inflate and bounce. | [`blob-world`](./blob-world/SKILL.md) |

Used by: [`flat-design`](./flat-design/SKILL.md), [`blob-world`](./blob-world/SKILL.md).

- Keep the volume constant: when the height grows by a factor k, scale the width by 1/k.
- Stretch along the path by 10% to 30% at the highest speed and squash by the same amount on impact.
- In an interface, use a spring with a damping ratio of 0.6 to 0.8, so that an element overshoots once and settles.

Sources: Frank Thomas and Ollie Johnston, The Illusion of Life: Disney Animation (1981); John Lasseter, Principles of Traditional Animation Applied to 3D Computer Animation (SIGGRAPH, 1987).

### Streaming text

Text that appears word by word as the system writes it, so the reader can read the answer before it is complete.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 2022 | — | United States: ChatGPT streams its answers word by word in a single column. | |
| 1 | Graphic & UI Design | 2023 | +1 years | Other chat assistants and search tools copy the streamed answer. |  |

Used by: [`ai-chat-ui`](./ai-chat-ui/SKILL.md).

- Show each new word or token as it comes, with no fade longer than 100 ms.
- Keep the bottom line in view while the text grows; stop the auto-scroll when the reader scrolls up.
- Show one cursor or dot at the end of the text while it is streaming.

Sources: OpenAI, Introducing ChatGPT (2022).

## Motif

### Arch

A curved head over an opening that carries load as compression; inside, a soft frame for a door, a mirror or a niche.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 200 BCE | — | Rome: Roman builders use the semicircular masonry arch at large scale in aqueducts, bridges and gates; the arch itself is older. | |
| 1 | Architecture | 1419 | +1619 years | Filippo Brunelleschi puts round Roman arches on slim columns in the loggia of the Foundling Hospital in Florence. | [`renaissance-architecture`](./renaissance-architecture/SKILL.md) |
| 2 | Interior | c. 1720 | +1920 years | Palladian arched windows and niches frame Georgian rooms. | [`georgian-interior`](./georgian-interior/SKILL.md) |
| 3 | Architecture | 1875 | +2075 years | The Ecole des Beaux-Arts teaches the triumphal arch and the arcade as the main entrance of a public building; the Paris Opera opens in 1875. | [`beaux-arts-architecture`](./beaux-arts-architecture/SKILL.md) |
| 4 | Architecture | c. 1978 | +2178 years | Postmodern facades quote the round arch as a sign, not as a structure. | [`postmodern-architecture`](./postmodern-architecture/SKILL.md) |
| 5 | Graphic & UI Design | c. 2015 | +2215 years | Bohemian websites frame photographs and cards in arch-shaped masks. | [`bohemian-web`](./bohemian-web/SKILL.md) |
| 6 | Interior | c. 2019 | +2219 years | Arched mirrors, headboards, doorways and painted arches become a room motif. | [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`georgian-interior`](./georgian-interior/SKILL.md), [`postmodern-architecture`](./postmodern-architecture/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md), [`renaissance-architecture`](./renaissance-architecture/SKILL.md), [`beaux-arts-architecture`](./beaux-arts-architecture/SKILL.md), [`bohemian-web`](./bohemian-web/SKILL.md).

- Use a semicircular head: the rise is half the span.
- Keep the ratio of height to width of the opening at 1.6:1 to 2:1.
- In a room, repeat the arch in 2 or 3 places, for example a door, a mirror and a niche, and no more.

Sources: John Summerson, The Classical Language of Architecture (1963).

### Checkerboard

A grid of squares in two alternate colours, on a floor, in a picture or on a surface.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1300 | — | Italy: Squares of two colours of marble pave Italian church floors and palace halls. | |
| 1 | Painting | 1435 | +135 years | Leon Battista Alberti builds the perspective of a picture on a squared pavement in De pictura. | [`renaissance-painting`](./renaissance-painting/SKILL.md) |
| 2 | Interior | c. 1925 | +625 years | Black and white floors pave Art Deco halls, bars and bathrooms. | [`art-deco-interior`](./art-deco-interior/SKILL.md) |
| 3 | Interior | c. 1936 | +636 years | Dorothy Draper lays black-and-white marble floors in hotel lobbies and halls. | [`hollywood-regency-interior`](./hollywood-regency-interior/SKILL.md) |
| 4 | Interior | c. 2020 | +720 years | Checker rugs, tiles and painted floors become a motif of colourful rooms. | [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`renaissance-painting`](./renaissance-painting/SKILL.md), [`art-deco-interior`](./art-deco-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md), [`hollywood-regency-interior`](./hollywood-regency-interior/SKILL.md).

- Use squares of one size: 300 to 600mm on a floor, or 1/8 to 1/16 of the width of a picture.
- Lay the grid at 45° to make a small room look wider, or at 0° to show the vanishing point.

Sources: Leon Battista Alberti, De pictura (1435).

### Chinoiserie

European ornament after Chinese and East Asian art: pagodas, figures, birds and branches on lacquer, porcelain and paper.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Interior | 1670 | — | Versailles, France: Louis XIV builds the Trianon de Porcelaine, with blue-and-white tiles after Chinese porcelain. | |
| 1 | Painting | c. 1742 | +72 years | François Boucher paints Chinese scenes for tapestries and decoration. | [`rococo-painting`](./rococo-painting/SKILL.md) |
| 2 | Interior | 2019 | +349 years | Grandmillennial rooms hang hand-painted chinoiserie wallpaper with birds and branches. | [`grandmillennial-interior`](./grandmillennial-interior/SKILL.md) |

Used by: [`rococo-painting`](./rococo-painting/SKILL.md), [`grandmillennial-interior`](./grandmillennial-interior/SKILL.md).

- Paint branches, birds and small figures over a plain ground of 50% or more.
- Use blue and white, or gold on black or red lacquer.
- Put one room or one wall in chinoiserie, not the whole house.

Sources: Hugh Honour, Chinoiserie: The Vision of Cathay (1961).

### Crystal facet

A form broken into flat planes that meet at sharp angles, so that it reads as a crystal or a shard.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1909 | — | Horta de Ebro, La Roche-Guyon and Paris: Picasso and Braque break objects into small flat planes in the first Cubist paintings. | |
| 1 | Painting | c. 1909 | +0 years | Picasso and Braque paint objects as flat planes in landscapes, Picasso at Horta de Ebro and Braque at La Roche-Guyon, and in the Paris still lifes. | [`cubism-painting`](./cubism-painting/SKILL.md) |
| 2 | Architecture | c. 1912 | +3 years | Pavel Janak and Josef Gocar design Czech Cubist buildings with faceted walls, such as the House of the Black Madonna in Prague. |  |
| 3 | Architecture | 1914 | +5 years | Bruno Taut builds the Glass Pavilion for the Werkbund exhibition in Cologne as a crystal dome of glass prisms. | [`expressionist-architecture`](./expressionist-architecture/SKILL.md) |
| 4 | Film & Video | 1920 | +11 years | Hermann Warm, Walter Reimann and Walter Roehrig build the angled, painted sets of The Cabinet of Dr. Caligari. | [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md) |
| 5 | Architecture | 1988 | +79 years | The MoMA exhibition Deconstructivist Architecture shows broken and tilted planes by Gehry, Hadid and Libeskind. | [`deconstructivist-architecture`](./deconstructivist-architecture/SKILL.md) |

Used by: [`cubism-painting`](./cubism-painting/SKILL.md), [`expressionist-architecture`](./expressionist-architecture/SKILL.md), [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md), [`deconstructivist-architecture`](./deconstructivist-architecture/SKILL.md).

- Cut each mass into flat planes; most planes meet at angles between 30° and 120°.
- Use one plane size family: 3 to 5 sizes, with no curve.
- Let the light break on each plane, so that adjacent planes differ in tone by one or two steps.

Sources: [Wikipedia, The Cabinet of Dr. Caligari](https://en.wikipedia.org/wiki/The_Cabinet_of_Dr._Caligari); [Wikipedia, Glass Pavilion (Cologne)](https://en.wikipedia.org/wiki/Glass_Pavilion_(Cologne)).

### Diagonal composition

The main forms lie on a tilted axis, so that the picture seems to move and to cut across the field.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1915 | — | Petrograd: Kazimir Malevich shows tilted, floating shapes in Suprematist paintings at the exhibition 0.10. | |
| 1 | Graphic & UI Design | 1919 | +4 years | El Lissitzky draws Beat the Whites with the Red Wedge: a red wedge cuts into a white circle. | [`constructivism-web`](./constructivism-web/SKILL.md) |
| 2 | Graphic & UI Design | c. 1924 | +9 years | Aleksandr Rodchenko sets the lines of his posters, such as the Books ad, on strong diagonals. | [`constructivism-web`](./constructivism-web/SKILL.md) |
| 3 | Film & Video | c. 1925 | +10 years | Sergei Eisenstein stages frames of Battleship Potemkin along strong diagonals. | [`soviet-montage`](./soviet-montage/SKILL.md) |
| 4 | Graphic & UI Design | c. 1928 | +13 years | Jan Tschichold teaches the asymmetric, diagonal page in Die neue Typographie. | [`swiss-international`](./swiss-international/SKILL.md) |

Used by: [`suprematism`](./suprematism/SKILL.md), [`constructivism-web`](./constructivism-web/SKILL.md), [`soviet-montage`](./soviet-montage/SKILL.md), [`swiss-international`](./swiss-international/SKILL.md).

- Set the main axis at 30° to 60° to the frame edge; 45° is the strongest.
- Let a large form and a small form lie on the same diagonal at a ratio of 4:1 or more.
- Use one saturated colour (red) against a white or black field.
- Leave a clear field around the diagonal: at least 50% of the area stays empty.

Sources: Kazimir Malevich, The Non-Objective World (Bauhausbücher 11, 1927); Jan Tschichold, Die neue Typographie (1928).

### Drop cap

A large first letter that drops down 2 or more lines of text and marks the start of a chapter or an article.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1457 | — | Mainz, Germany: The Mainz Psalter of Fust and Schöffer prints large decorated initials in red and blue. | |
| 1 | Graphic & UI Design | c. 1880 | +423 years | Victorian books and magazines open chapters with engraved, ornamented initials. | [`victorian-web`](./victorian-web/SKILL.md) |
| 2 | Graphic & UI Design | c. 2021 | +564 years | Editorial sites open long articles with a large serif initial over 3 to 4 lines. | [`editorial-serif-revival`](./editorial-serif-revival/SKILL.md) |

Used by: [`victorian-web`](./victorian-web/SKILL.md), [`editorial-serif-revival`](./editorial-serif-revival/SKILL.md).

- Set the drop cap to the height of 3 to 4 body lines; align its top with the cap height of the first line.
- Set the first 3 to 5 words after it in small capitals.
- Use one drop cap for each article or chapter.

Sources: Robert Bringhurst, The Elements of Typographic Style (1992).

### Figura serpentinata

A figure that twists along its height like a snake, with hips, shoulders and head turned in different directions.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1520 | — | Italy: Late works of Michelangelo and the painters after him twist figures in a spiral; Lomazzo names the idea in 1584. | |
| 1 | Painting | c. 1590 | +70 years | El Greco stretches and twists his figures in tall altarpieces in Toledo. | [`mannerism-painting`](./mannerism-painting/SKILL.md) |

Used by: [`mannerism-painting`](./mannerism-painting/SKILL.md).

- Turn the hips, the shoulders and the head each 30 to 90 degrees from the one below.
- Stretch the body to 9 or 10 heads tall.
- Put the weight on one leg, so that the figure seems to spiral up.

Sources: John Shearman, Mannerism (1967).

### Fluting and reeding

Parallel grooves (flutes) or ridges (reeds) on a column, a panel, a leg or a sheet of glass.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 600 BCE | — | Greece: Greek Doric and Ionic columns carry vertical concave grooves; a Doric shaft has 20 flutes. | |
| 1 | Architecture | 1764 | +2364 years | Jacques-Germain Soufflot gives the Pantheon in Paris, begun in 1764, a portico of fluted Corinthian columns. | [`neoclassical-architecture`](./neoclassical-architecture/SKILL.md) |
| 2 | Interior | c. 1790 | +2390 years | Neoclassical and Regency furniture takes fluted and reeded legs and friezes. | [`georgian-interior`](./georgian-interior/SKILL.md) |
| 3 | Interior | c. 1925 | +2525 years | Art Deco rooms use fluted pilasters, fluted glass and fluted wood panels. | [`art-deco-interior`](./art-deco-interior/SKILL.md) |
| 4 | Interior | c. 2018 | +2618 years | Reeded glass and fluted wood or stone cover cabinets, islands and walls. | [`quiet-luxury-interior`](./quiet-luxury-interior/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md) |

Used by: [`art-deco-architecture`](./art-deco-architecture/SKILL.md), [`georgian-interior`](./georgian-interior/SKILL.md), [`art-deco-interior`](./art-deco-interior/SKILL.md), [`quiet-luxury-interior`](./quiet-luxury-interior/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md), [`neoclassical-architecture`](./neoclassical-architecture/SKILL.md).

- Cut 16 to 24 flutes round a column, or set the grooves at 15 to 40mm centres on a flat panel.
- Run the flutes vertical to make a surface look taller.
- Use one fluted surface in each room as an accent.

Sources: John Summerson, The Classical Language of Architecture (1963).

### Hard offset shadow

A solid copy of a letter or a box, set behind it and moved down and to the side, with no blur.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | c. 1815 | — | London, United Kingdom: London type founders cast shaded and shadowed display letters for posters and handbills. | |
| 1 | Graphic & UI Design | c. 2020 | +205 years | Neo-brutalist interfaces give each card and button a solid black shadow offset by 4 to 8 px. | [`neo-brutalism-ui`](./neo-brutalism-ui/SKILL.md) |

Used by: [`neo-brutalism-ui`](./neo-brutalism-ui/SKILL.md).

- Move the shadow 4 to 8 px down and to the right, or 5% to 10% of the letter height.
- Fill the shadow with one solid colour, usually black.
- Use no blur and no transparency.

Sources: Rob Roy Kelly, American Wood Type 1828-1900 (1969).

### Letterspaced capitals

Capital letters set with wide space between them, so that a short word reads as an inscription of rank.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 113 | — | Rome: Carvers cut the spaced roman capitals of the inscription on Trajan's Column. | |
| 1 | Logo | c. 1900 | +1787 years | Badges of clubs, railways and makers set the name in spaced capitals round the ring. | [`emblem-badge`](./emblem-badge/SKILL.md) |
| 2 | Logo | c. 1970 | +1857 years | Fashion and hotel houses set their names in spaced roman capitals. | [`minimal-wordmark`](./minimal-wordmark/SKILL.md) |
| 3 | Typeface | 1989 | +1876 years | Carol Twombly draws the Trajan typeface for Adobe from the column inscription. |  |
| 4 | Graphic & UI Design | c. 2010 | +1897 years | Luxury sites set spaced small-cap labels over a large serif head. | [`luxury-typography-web`](./luxury-typography-web/SKILL.md) |

Used by: [`minimal-wordmark`](./minimal-wordmark/SKILL.md), [`luxury-typography-web`](./luxury-typography-web/SKILL.md), [`emblem-badge`](./emblem-badge/SKILL.md).

- Track capitals at 0.1 to 0.3em; do not track lowercase.
- Set the size small, at 11 to 14px on screen, in a light weight.
- Use roman capitals with strong serifs or a clean geometric sans.
- Keep the line to one to four words.

Sources: [Wikipedia, Trajan (typeface)](https://en.wikipedia.org/wiki/Trajan_(typeface)); [Wikipedia, Trajan's Column](https://en.wikipedia.org/wiki/Trajan%27s_Column).

### Long shadow

A shadow far longer than its object, cast by a low sun, so that a still scene feels strange and charged.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1914 | — | Paris: Giorgio de Chirico paints empty squares with long raking shadows in The Mystery and Melancholy of a Street. | |
| 1 | Film & Video | 1922 | +8 years | F. W. Murnau casts the shadow of the vampire on the stairs in Nosferatu. | [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md) |
| 2 | Painting | c. 1924 | +10 years | Surrealist painters take over the empty, shadowed scene of de Chirico. | [`surrealism-painting`](./surrealism-painting/SKILL.md) |
| 3 | Graphic & UI Design | c. 2013 | +99 years | Flat design adds a 45° long shadow to icons and buttons. | [`flat-design`](./flat-design/SKILL.md) |
| 4 | Graphic & UI Design | c. 2020 | +106 years | Surreal web scenes use long shadows on calm, empty grounds. | [`surrealism-web`](./surrealism-web/SKILL.md) |

Used by: [`surrealism-painting`](./surrealism-painting/SKILL.md), [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md), [`flat-design`](./flat-design/SKILL.md), [`surrealism-web`](./surrealism-web/SKILL.md).

- Cast the shadow at a low angle: the shadow is 2 to 5 times the height of the object.
- Keep one light direction in the whole scene.
- Leave the shadow flat and dark, at 40% to 70% opacity.
- Show the shadow of something outside the frame, to hint at an unseen presence.

Sources: [Wikipedia, The Mystery and Melancholy of a Street](https://en.wikipedia.org/wiki/The_Mystery_and_Melancholy_of_a_Street); [Wikipedia, Nosferatu](https://en.wikipedia.org/wiki/Nosferatu).

### Neoplastic grid

A plane divided by black horizontal and vertical bars into white fields and a few fields of primary colour.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1917 | — | Leiden, Netherlands: Theo van Doesburg starts the magazine De Stijl; Piet Mondrian publishes his ideas on the new plastic in painting there. | |
| 1 | Architecture | 1924 | +7 years | Gerrit Rietveld builds the Schröder House in Utrecht from planes and bars in white, grey and primary colours. |  |
| 2 | Graphic & UI Design | c. 2015 | +98 years | Web pages split the screen with black rules into white and primary-colour fields. | [`de-stijl-web`](./de-stijl-web/SKILL.md) |

Used by: [`de-stijl-painting`](./de-stijl-painting/SKILL.md), [`de-stijl-web`](./de-stijl-web/SKILL.md).

- Use only horizontal and vertical lines; no curves and no diagonals.
- Fill one to three fields with red, yellow or blue; leave the rest white or grey.
- Set the bars at one weight, 1% to 2% of the short side.

Sources: Hans L. C. Jaffé, De Stijl 1917-1931 (1956).

### Primary shapes

The circle, the square and the triangle in flat colour, used as the whole picture or as a sign.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1915 | — | Petrograd, Russia: Kazimir Malevich shows the Black Square and other pure shapes at the 0,10 exhibition. | |
| 1 | Graphic & UI Design | 1923 | +8 years | Wassily Kandinsky asks Bauhaus students to match the circle, the square and the triangle to blue, red and yellow. | [`bauhaus`](./bauhaus/SKILL.md) |
| 2 | Graphic & UI Design | 1961 | +46 years | Yusaku Kamekura puts one red circle over gold type on the poster for the Tokyo 1964 Olympic Games. | [`japanese-graphic-modernism`](./japanese-graphic-modernism/SKILL.md) |
| 3 | Graphic & UI Design | 1981 | +66 years | Memphis Milano sets circles, triangles and squiggles on furniture and prints in loud colour. | [`memphis-design`](./memphis-design/SKILL.md) |

Used by: [`suprematism`](./suprematism/SKILL.md), [`bauhaus`](./bauhaus/SKILL.md), [`japanese-graphic-modernism`](./japanese-graphic-modernism/SKILL.md), [`memphis-design`](./memphis-design/SKILL.md).

- Use 1 to 3 shapes at large size; let one shape fill 30% to 60% of the frame.
- Fill each shape with one flat colour; no gradient and no outline.
- Put the shapes on a plain ground with 30% or more empty space.

Sources: Magdalena Droste, Bauhaus 1919-1933 (1990).

### Roman capital proportions

Capital letters with the proportions of Roman stone inscriptions: some letters wide and round, some narrow, and each one built for the eye, not for one measure.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 113 | — | Rome: The inscription at the base of Trajan's Column sets the model for Roman capitals. | |
| 1 | Typeface | 1470 | +1357 years | Nicolas Jenson prints in Venice with a roman face whose capitals follow Roman inscriptions. | [`garalde-old-style`](./garalde-old-style/SKILL.md) |
| 2 | Typeface | 1916 | +1803 years | Edward Johnston draws the London Underground block letters on the proportions of Roman capitals. | [`humanist-sans`](./humanist-sans/SKILL.md) |
| 3 | Typeface | 1958 | +1845 years | Hermann Zapf releases Optima, a sans serif whose shapes come from stone inscriptions he saw in Florence. | [`humanist-sans`](./humanist-sans/SKILL.md) |

Used by: [`garalde-old-style`](./garalde-old-style/SKILL.md), [`humanist-sans`](./humanist-sans/SKILL.md).

- Draw O as a near circle, and M about as wide as the cap height.
- Draw E, F, L and S at about half the width of O.
- Set the stem at about one tenth of the cap height for a classical weight; for signs, increase it by up to half.
- Cut serifs, or leave them out, but keep the width rules.

Sources: Edward M. Catich, The Origin of the Serif (Catfish Press, 1968).

### Silhouette

A form shown as one solid shape with no inner line, read only from its outer edge.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 700 BCE | — | Corinth: Greek vase painters fill figures with black slip and scratch the detail. | |
| 1 | Graphic & UI Design | c. 1759 | +2459 years | Cut black paper profiles become a fashion in France and take the name of the minister Etienne de Silhouette. |  |
| 2 | Film & Video | 1926 | +2626 years | Lotte Reiniger shows The Adventures of Prince Achmed, a feature film of cut paper silhouettes. |  |
| 3 | Icons | 1972 | +2672 years | Otl Aicher draws the Munich Olympic pictograms as white-on-colour figure silhouettes. |  |
| 4 | Icons | 2012 | +2712 years | Font Awesome 1.0 gives the web a free set of solid glyphs in an icon font. | [`solid-glyph-icon`](./solid-glyph-icon/SKILL.md), [`flat-icon`](./flat-icon/SKILL.md) |

Used by: [`solid-glyph-icon`](./solid-glyph-icon/SKILL.md), [`flat-icon`](./flat-icon/SKILL.md).

- Fill the shape with one colour on a plain ground.
- Choose the most typical side view, so that the edge alone names the object.
- Cut inner detail as gaps of at least 1/16 of the shape width, not as lines.
- Keep the contrast between shape and ground high.

Sources: Lotte Reiniger, Die Abenteuer des Prinzen Achmed (1926).

### Skeuomorph

A detail that copies the material or the form of an older object, though it no longer has that function.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 600 BCE | — | Greece: Doric stone temples carve triglyphs and guttae that copy the beam ends and pegs of earlier timber temples. | |
| 1 | Icons | 2001 | +2601 years | Mac OS X icons draw each application as a real object, such as a stamp, a clock or a disc. | [`skeuomorphic-icon`](./skeuomorphic-icon/SKILL.md) |
| 2 | Graphic & UI Design | 2007 | +2607 years | iPhone OS copies notepads, leather, felt and brushed metal in its applications. | [`skeuomorphism`](./skeuomorphism/SKILL.md) |

Used by: [`skeuomorphic-icon`](./skeuomorphic-icon/SKILL.md), [`skeuomorphism`](./skeuomorphism/SKILL.md).

- Copy one material for each surface: leather, felt, wood, paper or brushed metal.
- Light every surface from one source above, at 90 degrees.
- Keep the old details that tell the use: stitches, page edges, knobs and screws.

Sources: Donald Norman, The Design of Everyday Things (1988).

### Sunburst

Rays from a disc or a half disc: a sign of light and of the new, on a facade, a gate, a mirror or a clock.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1925 | — | Paris: Rays from a half disc appear on Art Deco facades, gates and lift doors around the Paris exposition of decorative arts in 1925. | |
| 1 | Interior | c. 1928 | +3 years | Art Deco furniture, screens and mirrors take the ray motif inside. | [`art-deco-interior`](./art-deco-interior/SKILL.md) |
| 2 | Interior | c. 1935 | +10 years | Hollywood decorators hang sunburst mirrors and starburst lights in the homes and sets of film stars. | [`hollywood-regency-interior`](./hollywood-regency-interior/SKILL.md) |
| 3 | Interior | 1949 | +24 years | George Nelson Associates design ray-form wall clocks for Howard Miller; the starburst mirror follows in the 1950s. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md) |
| 4 | Graphic & UI Design | c. 1957 | +32 years | Space Age signs, packaging and posters use starbursts as a sign of the future. | [`space-age`](./space-age/SKILL.md), [`mid-century-modern`](./mid-century-modern/SKILL.md) |
| 5 | Interior | c. 2015 | +90 years | Neo-deco rooms bring back the fan and the sunburst in brass and glass. | [`neo-deco-interior`](./neo-deco-interior/SKILL.md) |

Used by: [`art-deco-architecture`](./art-deco-architecture/SKILL.md), [`art-deco-interior`](./art-deco-interior/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`space-age`](./space-age/SKILL.md), [`art-deco-web`](./art-deco-web/SKILL.md), [`neo-deco-interior`](./neo-deco-interior/SKILL.md), [`hollywood-regency-interior`](./hollywood-regency-interior/SKILL.md), [`mid-century-modern`](./mid-century-modern/SKILL.md).

- Draw 12 to 36 rays from one centre; alternate long and short rays, or two finishes.
- Keep the centre disc at 15% to 30% of the full diameter.
- In a room, use one sunburst as the focal point of one wall.

Sources: Bevis Hillier, Art Deco of the 20s and 30s (Studio Vista, 1968).

### Whiplash line

A long S-shaped line whose curve changes along its length, drawn from a plant stem; it joins structure and ornament in one stroke.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1893 | — | Brussels: Victor Horta uses curved iron stems on the stair and the ceiling of the Hotel Tassel. | |
| 1 | Interior | 1893 | +0 years | Victor Horta carries the iron whiplash line into the stair, the floor mosaic and the wall paint of the Hotel Tassel in Brussels. | [`art-nouveau-interior`](./art-nouveau-interior/SKILL.md) |
| 2 | Graphic & UI Design | c. 1894 | +1 years | Hermann Obrist shows the Cyclamen wall hanging, an embroidery of one long curved stem. |  |
| 3 | Logo | c. 1896 | +3 years | Jugend and Pan magazines print initials and vignettes in interlaced curved lines. | [`art-nouveau-monogram`](./art-nouveau-monogram/SKILL.md) |
| 4 | Typeface | 1900 | +7 years | Otto Eckmann draws the Eckmann-Schrift with brush-like curved strokes. |  |
| 5 | Architecture | 1900 | +7 years | Hector Guimard designs the iron entrances of the Paris Metro with plant-like curves. | [`art-nouveau-architecture`](./art-nouveau-architecture/SKILL.md) |
| 6 | Graphic & UI Design | 1966 | +73 years | San Francisco concert posters of 1966 to 1968 copy Art Nouveau lettering and whiplash curves. | [`psychedelic`](./psychedelic/SKILL.md) |

Used by: [`art-nouveau-architecture`](./art-nouveau-architecture/SKILL.md), [`art-nouveau-monogram`](./art-nouveau-monogram/SKILL.md), [`art-nouveau-interior`](./art-nouveau-interior/SKILL.md), [`psychedelic`](./psychedelic/SKILL.md).

- Draw each line as an S-curve with a radius that changes along its length.
- Swell the stroke from 1 to 4 units along the curve, as a stem thickens at the base.
- Join letters, frame and plant forms with the same line; leave no straight edge to break the flow.
- Use few colours, 2 to 4, in muted tones.

Sources: Victor Horta, Hotel Tassel, Brussels (1893).

## Material

### Board-marked concrete

Concrete cast in rough timber forms, so that the grain and the joints of the boards stay on the surface.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1952 | — | Marseille, France: Le Corbusier completes the Unité d'Habitation with walls and piers of raw, board-marked concrete. | |
| 1 | Interior | c. 2010 | +58 years | Loft interiors and restaurants cast board-marked concrete walls and counters. | [`industrial-loft-interior`](./industrial-loft-interior/SKILL.md) |

Used by: [`brutalist-architecture`](./brutalist-architecture/SKILL.md), [`industrial-loft-interior`](./industrial-loft-interior/SKILL.md).

- Use sawn boards 100 to 150 mm wide for the formwork.
- Leave the surface as it comes from the form: no paint and no plaster.
- Let the board joints run in one direction on each wall.

Sources: Reyner Banham, The New Brutalism (1966).

### Breeze block

A hollow concrete block with a pierced pattern; a wall of them shades and lets air and light through.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1929 | — | Recife, Brazil: Three engineers in Recife patent the cobogó, a hollow concrete block for screen walls in a hot climate. | |
| 1 | Architecture | c. 1955 | +26 years | Tropical modernism and desert houses in the United States use screen walls; Edward Durell Stone wraps the US Embassy in New Delhi (1959) in a pierced screen. | [`mid-century-modern-architecture`](./mid-century-modern-architecture/SKILL.md) |
| 2 | Interior | c. 2018 | +89 years | Breeze-block room dividers, bar fronts and planters move inside the house. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`mid-century-modern-architecture`](./mid-century-modern-architecture/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md).

- Use blocks of 300 to 400mm square with 40% to 60% open area.
- Stack the blocks in one grid of one pattern; mix no more than 2 patterns in one wall.
- Inside, use the screen to divide zones while it keeps light and air.

Sources: Edward Durell Stone, United States Embassy, New Delhi (1959).

### Chintz

Cotton printed with large flowers and birds, often glazed, used for curtains, covers and walls.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Interior | c. 1600 | — | India: Painted and printed Indian cottons reach Europe through the East India Companies. | |
| 1 | Interior | c. 1850 | +250 years | Victorian parlours cover sofas, curtains and walls in floral chintz. | [`victorian-interior`](./victorian-interior/SKILL.md) |
| 2 | Interior | 2019 | +419 years | Grandmillennial rooms bring back chintz, skirted tables and floral wallpaper. | [`grandmillennial-interior`](./grandmillennial-interior/SKILL.md) |

Used by: [`victorian-interior`](./victorian-interior/SKILL.md), [`grandmillennial-interior`](./grandmillennial-interior/SKILL.md).

- Use one large floral repeat of 40 to 70 cm for curtains and covers.
- Combine it with one stripe or check in a colour of the flowers.
- Repeat the same print on 2 to 3 pieces in the room.

Sources: Rosemary Crill, Chintz: Indian Textiles for the West (2008).

### Laminated timber

Thin boards or veneers glued in layers, so that wood forms long spans, bent shapes and large panels.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1906 | — | Weimar: Otto Hetzer patents glued laminated timber beams for halls and bridges. | |
| 1 | Interior | c. 1932 | +26 years | Alvar Aalto designs the Paimio chair with a frame of bent laminated birch. | [`scandinavian-interior`](./scandinavian-interior/SKILL.md) |
| 2 | Interior | 1946 | +40 years | Charles and Ray Eames put moulded plywood chairs into mass production. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md) |
| 3 | Architecture | c. 1995 | +89 years | Austrian researchers develop cross-laminated timber panels, and builders adopt them for floors and walls. |  |
| 4 | Architecture | 2009 | +103 years | Waugh Thistleton builds Murray Grove in London, a 9-storey block with a CLT frame. | [`mass-timber-architecture`](./mass-timber-architecture/SKILL.md) |

Used by: [`scandinavian-interior`](./scandinavian-interior/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`mass-timber-architecture`](./mass-timber-architecture/SKILL.md).

- Glue boards of 20 to 45mm for glulam; set the grain of all layers in one direction.
- Cross the layers at 90° for a panel (CLT); use 3, 5 or 7 layers.
- Bend veneers of 1 to 3mm in a mould for furniture; glue 5 to 9 layers.
- Leave the layered edge in view as a line pattern.

Sources: [Wikipedia, Glued laminated timber](https://en.wikipedia.org/wiki/Glued_laminated_timber); [Wikipedia, Cross-laminated timber](https://en.wikipedia.org/wiki/Cross-laminated_timber).

### Limewash

A thin wash of slaked lime that dries to a soft, matt white with a faint cloud of brush marks.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 7200 BCE | — | Levant: Builders at Ain Ghazal coat floors and walls with burnt lime plaster; Catalhoyuk later paints its plastered walls. | |
| 1 | Architecture | 1911 | +9111 years | Le Corbusier records the white lime-washed houses of the Aegean on his Journey to the East. |  |
| 2 | Architecture | c. 1960 | +9160 years | Geoffrey Bawa builds white-plastered houses in Sri Lanka. | [`critical-regionalism-architecture`](./critical-regionalism-architecture/SKILL.md) |
| 3 | Interior | c. 1990 | +9190 years | Beach houses in the USA put white-washed walls and boards in summer rooms. | [`coastal-interior`](./coastal-interior/SKILL.md) |
| 4 | Graphic & UI Design | c. 2015 | +9215 years | Wabi-sabi websites use limewash and plaster textures as the page ground. | [`wabi-sabi-web`](./wabi-sabi-web/SKILL.md) |

Used by: [`critical-regionalism-architecture`](./critical-regionalism-architecture/SKILL.md), [`coastal-interior`](./coastal-interior/SKILL.md), [`wabi-sabi-web`](./wabi-sabi-web/SKILL.md).

- Mix slaked lime with water to a thin milk, and apply 2 to 3 coats with a wide brush.
- Cross the brush strokes between coats, and let each coat dry for 4 to 24 hours.
- Keep the finish matt; the surface must take light with no sheen.
- Use pale tints only: white, sand and chalk blue.

Sources: [Wikipedia, Whitewash](https://en.wikipedia.org/wiki/Whitewash); [Wikipedia, Lime plaster](https://en.wikipedia.org/wiki/Lime_plaster).

### Neon glow

Light as a line of coloured gas, with a soft halo that spills onto the dark ground around it.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 1912 | — | Paris: Georges Claude shows his neon tube at the Paris Motor Show in 1910, and a Paris hairdresser installs a neon sign in 1912. | |
| 1 | Architecture | 1972 | +60 years | Venturi, Scott Brown and Izenour study the neon signs of the Las Vegas Strip in Learning from Las Vegas. | [`postmodern-architecture`](./postmodern-architecture/SKILL.md) |
| 2 | Film & Video | 1982 | +70 years | Ridley Scott fills the wet night streets of Blade Runner with neon signs. | [`neon-noir`](./neon-noir/SKILL.md) |
| 3 | Graphic & UI Design | c. 2010 | +98 years | Web designers fake neon with layered text-shadow and box-shadow glows once browsers support CSS3. | [`cyberpunk-web`](./cyberpunk-web/SKILL.md), [`synthwave-web`](./synthwave-web/SKILL.md) |

Used by: [`postmodern-architecture`](./postmodern-architecture/SKILL.md), [`neon-noir`](./neon-noir/SKILL.md), [`cyberpunk-web`](./cyberpunk-web/SKILL.md), [`synthwave-web`](./synthwave-web/SKILL.md).

- Draw the tube as a line of 2 to 6mm in one saturated colour; use no more than 2 colours in one sign.
- Add a halo of 10 to 40px at 30% to 60% opacity in the same hue.
- Set the sign on a ground darker than 10% lightness, so that the halo shows.
- Keep a bright, near-white core inside the line.

Sources: [Wikipedia, Neon lighting](https://en.wikipedia.org/wiki/Neon_lighting); [Wikipedia, Blade Runner](https://en.wikipedia.org/wiki/Blade_Runner).

### Stained glass

Pieces of coloured glass held in lead strips, so that a window becomes a picture of coloured light.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1144 | — | Saint-Denis, France: Coloured window glass is older; the choir that Abbot Suger consecrates at Saint-Denis starts the tall Gothic window of coloured light. | |
| 1 | Interior | c. 1850 | +706 years | Victorian houses put coloured glass in doors, stair windows and fanlights. | [`victorian-interior`](./victorian-interior/SKILL.md) |
| 2 | Interior | c. 1895 | +751 years | Louis Comfort Tiffany and Jacques Gruber make leaded opalescent glass for lamps, ceilings and screens. | [`art-nouveau-interior`](./art-nouveau-interior/SKILL.md) |

Used by: [`gothic-architecture`](./gothic-architecture/SKILL.md), [`victorian-interior`](./victorian-interior/SKILL.md), [`art-nouveau-interior`](./art-nouveau-interior/SKILL.md).

- Cut each piece to one colour; join the pieces with H-section lead 4 to 8 mm wide.
- Paint the lines of faces and folds in dark grisaille and fire them onto the glass.
- Use deep blue and red for the field; keep the clear or yellow pieces under 20% of the window.

Sources: Lawrence Lee, George Seddon and Francis Stephens, Stained Glass (1976).

### Terrazzo

Chips of marble or glass set in a binder and ground flat, so that each chip shows as a cut section.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1500 | — | Venice: Venetian workers set marble offcuts in lime and polish the floor of palaces: terrazzo alla veneziana. | |
| 1 | Architecture | c. 1925 | +425 years | Poured terrazzo with brass strips paves Art Deco lobbies. | [`art-deco-architecture`](./art-deco-architecture/SKILL.md) |
| 2 | Interior | c. 1950 | +450 years | Poured terrazzo floors go into mid-century homes, schools and airports. | [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md) |
| 3 | Graphic & UI Design | 1981 | +481 years | Memphis Milano prints speckled chip patterns on plastic laminates and fabrics. | [`memphis-design`](./memphis-design/SKILL.md) |
| 4 | Interior | c. 2016 | +516 years | Terrazzo moves from the floor to tables, tiles, lamps and small objects. | [`dopamine-decor`](./dopamine-decor/SKILL.md) |

Used by: [`art-deco-architecture`](./art-deco-architecture/SKILL.md), [`mid-century-modern-interior`](./mid-century-modern-interior/SKILL.md), [`dopamine-decor`](./dopamine-decor/SKILL.md), [`memphis-interior`](./memphis-interior/SKILL.md), [`memphis-design`](./memphis-design/SKILL.md).

- Set chips of 5 to 25mm in a binder; the chips cover 40% to 60% of the surface.
- Use 2 to 4 chip colours on one ground colour.
- Grind and polish the surface flat, so that the chip edges show as cut sections.

Sources: Getty Art & Architecture Thesaurus, entry: terrazzo.

## Process

### Cantilever

A beam or slab fixed at one end that carries load beyond its support, so that it seems to hang in the air.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1300 | — | Northern Europe: Builders in northern Europe project the upper floors of timber houses beyond the lower floor on jetties. | |
| 1 | Architecture | 1909 | +609 years | Frank Lloyd Wright carries the roofs of the Robie House 6 m past the wall on steel beams. | [`prairie-school-architecture`](./prairie-school-architecture/SKILL.md) |
| 2 | Interior | 1926 | +626 years | Mart Stam and then Marcel Breuer bend steel tube into a chair that has no back legs. | [`bauhaus-interior`](./bauhaus-interior/SKILL.md) |
| 3 | Architecture | 1926 | +626 years | The studio block of the Bauhaus Dessau has a small cantilevered balcony at each studio. | [`bauhaus-architecture`](./bauhaus-architecture/SKILL.md) |
| 4 | Architecture | 1927 | +627 years | The houses of the Weissenhof Estate in Stuttgart extend slabs past their columns, so that the window band can turn the corner. | [`international-style-architecture`](./international-style-architecture/SKILL.md) |
| 5 | Architecture | 1935 | +635 years | Wright cantilevers the concrete terraces of Fallingwater over a stream in Pennsylvania. | [`organic-architecture`](./organic-architecture/SKILL.md) |

Used by: [`prairie-school-architecture`](./prairie-school-architecture/SKILL.md), [`bauhaus-interior`](./bauhaus-interior/SKILL.md), [`organic-architecture`](./organic-architecture/SKILL.md), [`bauhaus-architecture`](./bauhaus-architecture/SKILL.md), [`international-style-architecture`](./international-style-architecture/SKILL.md).

- Fix the beam at one end and anchor it with a back span of at least 1 part to every 2 parts of the overhang.
- Keep the free end thin; a depth of 1/8 to 1/10 of the span suits steel and concrete.
- Repeat the horizontal line in a run of 2 or 3 projecting planes to give a strong shadow.

Sources: Wikipedia, Cantilever; [Wikipedia, Fallingwater](https://en.wikipedia.org/wiki/Fallingwater).

### Chiaroscuro

A hard contrast of light and dark that models form: one strong source, deep shadow and a small area of light.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1500 | — | Italy: Italian painters model form with strong light and dark from the late 15th century; Caravaggio makes the contrast extreme in The Calling of Saint Matthew (1599–1600). | |
| 1 | Painting | c. 1600 | +100 years | Caravaggio paints figures out of a dark ground with one hard shaft of light, and the Baroque painters follow. | [`baroque-painting`](./baroque-painting/SKILL.md) |
| 2 | Painting | 1766 | +266 years | Joseph Wright of Derby, and the Romantic painters after him, light night scenes from one candle, fire or moon. | [`romanticism-painting`](./romanticism-painting/SKILL.md) |
| 3 | Film & Video | 1915 | +415 years | Cecil B. DeMille and the cameraman Alvin Wyckoff light The Cheat with hard side light and call the result Rembrandt lighting. |  |
| 4 | Film & Video | 1920 | +420 years | The Cabinet of Dr. Caligari uses painted shadows and sharp light to set a mind in a distorted room. | [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md) |
| 5 | Film & Video | 1941 | +441 years | Citizen Kane and The Maltese Falcon use low-key light, deep shadow and hard bars of light; crime films of the 1940s make it a house style. | [`film-noir`](./film-noir/SKILL.md) |
| 6 | Photography | c. 1946 | +446 years | Stills of noir films and press night photographs keep the single hard light and the black ground. | [`film-noir-still`](./film-noir-still/SKILL.md) |
| 7 | Film & Video | 1982 | +482 years | Blade Runner, shot by Jordan Cronenweth for Ridley Scott, cuts shafts of light through smoke and blinds in a colour city. | [`neon-noir`](./neon-noir/SKILL.md) |

Used by: [`baroque-painting`](./baroque-painting/SKILL.md), [`german-expressionist-cinema`](./german-expressionist-cinema/SKILL.md), [`film-noir`](./film-noir/SKILL.md), [`film-noir-still`](./film-noir-still/SKILL.md), [`neon-noir`](./neon-noir/SKILL.md), [`romanticism-painting`](./romanticism-painting/SKILL.md).

- Light the subject from one hard source at 30° to 60° above and to the side; let the shadow side fall to near black.
- Keep the light on 20% to 30% of the frame and let the rest sink into shadow.
- Set the key light to fill light at a ratio of 8:1 or more for a dramatic mood.
- Cut hard shapes into the light with blinds, grilles or foliage so that the shadow becomes a pattern.

Sources: [Wikipedia: Chiaroscuro](https://en.wikipedia.org/wiki/Chiaroscuro); David Bordwell and Kristin Thompson, Film Art: An Introduction (McGraw-Hill).

### Chronophotography

A series of photographs, or many exposures on one plate, that split a movement into steps and lay the steps side by side.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 1878 | — | Palo Alto: Eadweard Muybridge records a galloping horse with a row of cameras; Étienne-Jules Marey takes many exposures on one plate from 1882. | |
| 1 | Photography | 1882 | +4 years | Étienne-Jules Marey makes his chronophotographic gun and fixed plate in Paris. |  |
| 2 | Photography | 1911 | +33 years | Anton Giulio Bragaglia publishes photodynamism, a blurred photograph of movement. |  |
| 3 | Painting | 1912 | +34 years | Giacomo Balla paints Dynamism of a Dog on a Leash with repeated legs and tail. | [`futurism-painting`](./futurism-painting/SKILL.md) |
| 4 | Painting | 1912 | +34 years | Marcel Duchamp paints Nude Descending a Staircase No. 2 in stages. | [`cubism-painting`](./cubism-painting/SKILL.md) |

Used by: [`futurism-painting`](./futurism-painting/SKILL.md), [`cubism-painting`](./cubism-painting/SKILL.md).

- Record 12 to 24 frames each second, or 5 to 20 exposures on one plate.
- Hold the camera and the dark ground still; the body moves against a plain field.
- Show each stage of the movement in a form that overlaps its neighbour by 20% to 50%.
- In a painting, repeat a limb or a form along the path of the movement.

Sources: Marta Braun, Picturing Time: The Work of Étienne-Jules Marey (University of Chicago Press, 1992); Giacomo Balla, Dynamism of a Dog on a Leash (1912).

### Clay look

Forms that look modelled in soft clay: round edges, one matte material and soft, even light.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1908 | — | United States: Early films such as The Sculptor's Nightmare animate figures modelled in clay. | |
| 1 | Icons | c. 2020 | +112 years | Icon sets render each object in 3D with one matte, clay-like material and soft light. | [`clay-3d-icon`](./clay-3d-icon/SKILL.md) |
| 2 | Graphic & UI Design | 2021 | +113 years | Claymorphism gives cards and buttons the round, puffed form of clay. | [`claymorphism`](./claymorphism/SKILL.md) |

Used by: [`clay-3d-icon`](./clay-3d-icon/SKILL.md), [`claymorphism`](./claymorphism/SKILL.md).

- Round every edge; set the fillet at 10% to 20% of the form size.
- Use one matte material with no texture and no specular highlight.
- Light with one large soft source and a soft contact shadow under the form.

Sources: Michael Frierson, Clay Animation: American Highlights 1908 to the Present (1994).

### Coloured gel lighting

A white lamp covered with a sheet of coloured film, so that a set or a face is lit in red, blue or green with no natural cause.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1964 | — | Rome: Mario Bava lights Blood and Black Lace with red, green and blue gels; colour light is older in the theatre and in colour film. | |
| 1 | Film & Video | 1964 | +0 years | Mario Bava uses gelled light in Blood and Black Lace and sets the look of the giallo. | [`giallo`](./giallo/SKILL.md) |
| 2 | Film & Video | 1977 | +13 years | Dario Argento and the cameraman Luciano Tovoli light Suspiria with saturated gels and print it on dye-transfer Technicolor. | [`giallo`](./giallo/SKILL.md) |
| 3 | Film & Video | 2013 | +49 years | Nicolas Winding Refn bathes Only God Forgives in red and blue light. | [`neon-noir`](./neon-noir/SKILL.md) |

Used by: [`giallo`](./giallo/SKILL.md), [`neon-noir`](./neon-noir/SKILL.md).

- Put a saturated gel (red, blue or green) over a hard source; use one colour for each zone of the set.
- Light the face from the side in one colour and the wall behind it in a second colour from the opposite side.
- Keep the key light at one stop or more above the fill so that the colour reads as shadow and as light.
- Do not justify the colour with a lamp in the frame; the colour is the mood.

Sources: Mario Bava, Blood and Black Lace (1964); Dario Argento, Suspiria (1977).

### Construction grid

Letters and marks drawn on a fixed grid of squares and circles, so that each glyph in a set has the same size, weight and corner.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1525 | — | Nuremberg: Albrecht Duerer publishes letters built with ruler and compass on a square grid in Underweysung der Messung. | |
| 1 | Typeface | 1692 | +167 years | The committee of the Academie des Sciences draws the Romain du roi on a grid of 2304 small squares. |  |
| 2 | Graphic & UI Design | 1925 | +400 years | Herbert Bayer draws the Universal alphabet at the Bauhaus with a compass and a ruler. | [`bauhaus`](./bauhaus/SKILL.md) |
| 3 | Typeface | 1927 | +402 years | Paul Renner draws Futura from the circle, the square and the triangle. | [`geometric-sans`](./geometric-sans/SKILL.md) |
| 4 | Icons | 1972 | +447 years | Otl Aicher builds the pictograms of the Munich Olympics on a grid with angles of 45° and 90° only. | [`outline-icon`](./outline-icon/SKILL.md) |
| 5 | Logo | 2012 | +487 years | The Twitter bird is drawn from overlapping circles with set radii. | [`geometric-symbol`](./geometric-symbol/SKILL.md), [`swiss-modernist-mark`](./swiss-modernist-mark/SKILL.md), [`flat-logo`](./flat-logo/SKILL.md) |
| 6 | Icons | 2014 | +489 years | Material Design sets 24 dp icons with a 20 dp live area and keyline shapes. | [`material-symbols-icon`](./material-symbols-icon/SKILL.md) |

Used by: [`outline-icon`](./outline-icon/SKILL.md), [`material-symbols-icon`](./material-symbols-icon/SKILL.md), [`geometric-symbol`](./geometric-symbol/SKILL.md), [`swiss-modernist-mark`](./swiss-modernist-mark/SKILL.md), [`geometric-sans`](./geometric-sans/SKILL.md), [`flat-logo`](./flat-logo/SKILL.md), [`bauhaus`](./bauhaus/SKILL.md).

- Fix one live area inside a square canvas; on a 24 unit canvas, keep a 2 unit margin.
- Define 4 keyline shapes (circle, square, tall and wide rectangle) and fit each glyph to the one that suits it.
- Cut every angle to 45° or 90°, or to one other fixed angle.
- Use one stroke weight for the full set, for example 2 units on a 24 unit canvas.

Sources: Albrecht Duerer, Underweysung der Messung (Nuremberg, 1525); [Google, Material Design system icons guidelines (2014)](https://m3.material.io/styles/icons/overview).

### Dual soft shadow

A light shadow on one side and a dark shadow on the other, on a ground of the same colour, so that a shape seems pressed out of the surface.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 2019 | — | Online (Dribbble): Designers on Dribbble post soft-plastic interface concepts, and the name neumorphism spreads. | |
| 1 | Graphic & UI Design | 2021 | +2 years | Claymorphism adds an inner shadow and a large radius, so that cards look like soft clay. | [`claymorphism`](./claymorphism/SKILL.md) |

Used by: [`neumorphism`](./neumorphism/SKILL.md), [`claymorphism`](./claymorphism/SKILL.md).

- Use the ground colour for the shape; no border.
- Cast a dark shadow 6 to 12 px to the bottom right and a light shadow at the same distance to the top left.
- Blur each shadow by 2 times its distance.

Sources: Michal Malewicz, Neumorphism in user interfaces (2019).

### Exposed joinery

A joint that stays in view, so that the way of making is part of the look.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Interior | c. 2500 BCE | — | Giza: Egyptian carpenters lock the parts of chairs, beds and chests with mortise-and-tenon joints and leave the joints in view. | |
| 1 | Interior | c. 1790 | +4290 years | Shaker joiners show dovetails and tenons on plain chests and chairs. | [`shaker-interior`](./shaker-interior/SKILL.md) |
| 2 | Interior | 1900 | +4400 years | Gustav Stickley sells Craftsman furniture with through-tenons that show on the face. | [`arts-and-crafts-interior`](./arts-and-crafts-interior/SKILL.md) |
| 3 | Architecture | 1908 | +4408 years | Greene and Greene build the Gamble House in Pasadena with pegged and exposed timber joints. | [`arts-and-crafts-architecture`](./arts-and-crafts-architecture/SKILL.md) |
| 4 | Architecture | c. 1996 | +4496 years | Peter Zumthor and other critical regionalists keep the joint and the junction as the only ornament. | [`critical-regionalism-architecture`](./critical-regionalism-architecture/SKILL.md) |
| 5 | Interior | 2016 | +4516 years | Japandi rooms show the joints of oak and ash furniture, as Japanese and Danish joiners do. | [`japandi-interior`](./japandi-interior/SKILL.md) |

Used by: [`shaker-interior`](./shaker-interior/SKILL.md), [`arts-and-crafts-interior`](./arts-and-crafts-interior/SKILL.md), [`arts-and-crafts-architecture`](./arts-and-crafts-architecture/SKILL.md), [`critical-regionalism-architecture`](./critical-regionalism-architecture/SKILL.md), [`japandi-interior`](./japandi-interior/SKILL.md).

- Cut the joint in the main wood: a through-tenon of 6 to 12mm shows beyond the face.
- Peg the joint with a wooden pin of 8 to 12mm; do not hide it with filler or paint.
- Use one joint type in a room or a building; repeat it at each corner.

Sources: [Wikipedia, Mortise and tenon](https://en.wikipedia.org/wiki/Mortise_and_tenon); [Wikipedia, Gamble House](https://en.wikipedia.org/wiki/Gamble_House_(Pasadena,_California)).

### Exposed services

Ducts, pipes, stairs and cables stay in view on the outside or the ceiling, often colour-coded, so the building shows how it works.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1977 | — | Paris, France: The Centre Pompidou of Renzo Piano and Richard Rogers puts its ducts, pipes and escalators on the outside. | |
| 1 | Interior | c. 1990 | +13 years | Loft conversions leave ducts, pipes and cable trays bare on the ceiling. | [`industrial-loft-interior`](./industrial-loft-interior/SKILL.md) |

Used by: [`high-tech-architecture`](./high-tech-architecture/SKILL.md), [`industrial-loft-interior`](./industrial-loft-interior/SKILL.md).

- Leave each duct, pipe and cable tray in view; paint them or leave them raw metal.
- Give each system one colour: for example blue for air, green for water, yellow for electricity.
- Keep the floor plate free; put the services on the facade or the ceiling.

Sources: Kenneth Powell, Richard Rogers: Complete Works (1999).

### Fixed-pitch grid

Every character takes one cell of the same width, so text forms columns without a separate grid and a position is a count of characters.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1874 | — | Ilion, New York: The Sholes and Glidden typewriter by E. Remington and Sons moves the carriage one fixed step for each key, so its type must be monospaced. | |
| 1 | Typeface | 1874 | +0 years | Typewriter faces, then Courier for IBM in 1955. | [`monospace`](./monospace/SKILL.md) |
| 2 | Graphic & UI Design | 1978 | +104 years | Video terminals such as the DEC VT100 draw the whole screen as a grid of 80 by 24 character cells. | [`terminal-tui-web`](./terminal-tui-web/SKILL.md), [`dark-devtool-ui`](./dark-devtool-ui/SKILL.md) |
| 3 | Graphic & UI Design | c. 2014 | +140 years | Brutalist websites set all text in a system monospace face on default browser styles. | [`brutalist-web`](./brutalist-web/SKILL.md) |

Used by: [`monospace`](./monospace/SKILL.md), [`terminal-tui-web`](./terminal-tui-web/SKILL.md), [`dark-devtool-ui`](./dark-devtool-ui/SKILL.md), [`brutalist-web`](./brutalist-web/SKILL.md).

- Give every glyph one advance width, 0.60 em in most fonts, or 10 or 12 characters an inch on a typewriter.
- Align columns with spaces and set tables, code and forms on the cell grid.
- On a screen, size the layout in cells: 80 columns by 24 rows is the classic terminal.

Sources: [Monospaced font (Wikipedia)](https://en.wikipedia.org/wiki/Monospaced_font); [Sholes and Glidden typewriter (Wikipedia)](https://en.wikipedia.org/wiki/Sholes_and_Glidden_typewriter); [VT100 (Wikipedia)](https://en.wikipedia.org/wiki/VT100).

### Glitch

A fault in a signal, kept as an image: torn lines, split colour channels and repeated frames.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 1963 | — | Wuppertal: Nam June Paik bends the picture of television sets with magnets in his first Exposition of Music-Electronic Television. | |
| 1 | Graphic & UI Design | c. 2010 | +47 years | Rosa Menkman writes the Glitch Studies Manifesto; designers copy channel splits and torn bands in posters and sites. | [`cyberpunk-web`](./cyberpunk-web/SKILL.md), [`vaporwave`](./vaporwave/SKILL.md) |
| 2 | Film & Video | c. 2015 | +52 years | Short films and music videos shot on old camcorders keep VHS tracking errors and colour bleed. | [`camcorder-revival`](./camcorder-revival/SKILL.md) |
| 3 | Graphic & UI Design | c. 2020 | +57 years | Cybercore pages add scan lines, split colour channels and torn frames as decoration. | [`cybercore-web`](./cybercore-web/SKILL.md) |

Used by: [`cyberpunk-web`](./cyberpunk-web/SKILL.md), [`vaporwave`](./vaporwave/SKILL.md), [`camcorder-revival`](./camcorder-revival/SKILL.md), [`cybercore-web`](./cybercore-web/SKILL.md).

- Shift the red and blue channels by 2 to 8px in opposite directions.
- Cut bands of 4 to 40px and move them sideways by 10 to 60px.
- Run the effect in bursts of 2 to 6 frames at 24 fps, and leave the image clean between bursts.
- Do not apply it to body text.

Sources: [Wikipedia, Glitch art](https://en.wikipedia.org/wiki/Glitch_art); [Wikipedia, Nam June Paik](https://en.wikipedia.org/wiki/Nam_June_Paik).

### Grid transfer

A grid laid over a subject or a photograph and a matching grid on the canvas; the painter copies the picture square by square.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1435 | — | Florence: Leon Battista Alberti describes a veil of threads that gives a grid over the scene in De pictura. | |
| 1 | Painting | 1525 | +90 years | Albrecht Dürer prints draughtsmen who draw through a frame with a grid in Underweysung der Messung. |  |
| 2 | Painting | 1967 | +532 years | Chuck Close works from a gridded photograph in Big Self-Portrait. | [`photorealism`](./photorealism/SKILL.md) |

Used by: [`photorealism`](./photorealism/SKILL.md).

- Draw a grid of 1 to 5 cm over the reference and a grid of the same ratio on the canvas.
- Copy the contour of each square, one at a time, so that the whole picture stays in the right place.
- Paint each square at the same focus, with an even grain over the full surface.
- Scale up by a fixed ratio, for example 10:1.

Sources: Leon Battista Alberti, De pictura (1435); Albrecht Dürer, Underweysung der Messung (1525).

### Halftone

Tone printed as dots of different size or spacing; at a distance the dots merge into grey or colour.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 1879 | — | New York: Benjamin Day patents a mechanical tint of dots for printers; photographic halftone screens follow in the 1880s. | |
| 1 | Photography | 1880 | +1 years | The Daily Graphic of New York prints a photograph as a halftone. |  |
| 2 | Painting | 1961 | +82 years | Roy Lichtenstein paints enlarged Ben-Day dots by hand in Look Mickey. |  |
| 3 | Graphic & UI Design | c. 1976 | +97 years | Punk zines photocopy halftones until the dots break up. | [`punk-zine`](./punk-zine/SKILL.md) |
| 4 | Icons | 2019 | +140 years | Duotone icon sets print each glyph in two tones of one hue, as a two-screen duotone does in print. | [`duotone-icon`](./duotone-icon/SKILL.md) |

Used by: [`pop-art-web`](./pop-art-web/SKILL.md), [`punk-zine`](./punk-zine/SKILL.md), [`duotone-icon`](./duotone-icon/SKILL.md).

- Set the screen at 10 to 30 lines per cm for a print grain, or enlarge the dots to 4 to 8mm for a Pop effect.
- Turn each colour screen to its own angle: cyan 15°, magenta 75°, yellow 0°, black 45°.

Sources: Roy Lichtenstein, Look Mickey (1961).

### Isometric projection

A drawing with three axes at equal angles and one scale, with no vanishing point, so that sizes can be measured.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1822 | — | Cambridge: William Farish publishes isometrical perspective as a method for engineering drawing. | |
| 1 | Architecture | 1923 | +101 years | Theo van Doesburg and Cornelis van Eesteren show houses in axonometric drawings. |  |
| 2 | Video game | 1982 | +160 years | Sega's Zaxxon is the first arcade game in an isometric view. |  |
| 3 | Video game | 1984 | +162 years | Ultimate's Knight Lore builds rooms as isometric boxes on home computers. | [`isometric-pixel-world`](./isometric-pixel-world/SKILL.md) |
| 4 | Video game | 2014 | +192 years | Monument Valley uses an orthographic isometric view for impossible architecture. | [`impossible-isometric-mobile`](./impossible-isometric-mobile/SKILL.md) |
| 5 | Graphic & UI Design | c. 2015 | +193 years | Isometric illustrations show products, data and offices on tech pages. | [`corporate-memphis`](./corporate-memphis/SKILL.md) |
| 6 | Icons | c. 2015 | +193 years | Icon packs for product pages and dashboards draw small objects on the isometric grid. | [`isometric-icon`](./isometric-icon/SKILL.md) |

Used by: [`corporate-memphis`](./corporate-memphis/SKILL.md), [`bento-grid-ui`](./bento-grid-ui/SKILL.md), [`isometric-icon`](./isometric-icon/SKILL.md), [`isometric-pixel-world`](./isometric-pixel-world/SKILL.md), [`impossible-isometric-mobile`](./impossible-isometric-mobile/SKILL.md).

- Draw the three axes at 120° to each other; on a pixel grid, use a 2:1 slope (26.57°).
- Keep one scale on all three axes and draw no vanishing point.

Sources: William Farish, On Isometrical Perspective (Transactions of the Cambridge Philosophical Society, 1822).

### Line engraving

Lines cut into a metal plate with a burin; thin hairlines and swelling strokes give tone, and the print keeps a sharp, even edge.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1430 | — | Upper Rhine: Goldsmiths engrave copper plates and print them as pictures; the method then spreads across Europe. | |
| 1 | Typeface | 1741 | +311 years | George Bickham engraves the copperplate hands of The Universal Penman (1741) on copper. | [`formal-script`](./formal-script/SKILL.md) |
| 2 | Typeface | 1757 | +327 years | John Baskerville has John Handy cut sharp, high-contrast roman type in Birmingham, and prints it on smooth wove paper. | [`transitional-serif`](./transitional-serif/SKILL.md) |
| 3 | Typeface | 1784 | +354 years | Firmin Didot cuts roman type with hairline serifs and a vertical stress; Giambattista Bodoni follows in Parma. | [`didone-serif`](./didone-serif/SKILL.md) |
| 4 | Typeface | c. 1810 | +380 years | Robert Thorne cuts fat faces that push the engraved contrast of the Didones to an extreme. | [`fat-face-display`](./fat-face-display/SKILL.md) |
| 5 | Logo | 1875 | +445 years | The UK Trade Marks Registration Act starts a register, and firms file engraved vignettes, banners and shaded figures. | [`victorian-trademark`](./victorian-trademark/SKILL.md) |

Used by: [`transitional-serif`](./transitional-serif/SKILL.md), [`didone-serif`](./didone-serif/SKILL.md), [`victorian-trademark`](./victorian-trademark/SKILL.md), [`formal-script`](./formal-script/SKILL.md), [`fat-face-display`](./fat-face-display/SKILL.md).

- Cut a hairline of 0.1 to 0.2mm for light areas; swell the line to 0.5mm or more for dark areas.
- Build shade with parallel lines or cross hatching, and keep the lines at 30° to 45° to each other.
- Print on smooth paper so the hairlines stay clean.

Sources: Alexander Lawson, Anatomy of a Typeface (Godine, 1990).

### Lithography

A print from a flat stone or plate on which a greasy drawing takes ink and water repels it; the artist draws as on paper.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | c. 1796 | — | Munich: Alois Senefelder invents lithography in Bavaria. | |
| 1 | Painting | 1879 | +83 years | Odilon Redon publishes the lithographs of Dans le rêve, black dream visions. | [`symbolism-painting`](./symbolism-painting/SKILL.md) |
| 2 | Graphic & UI Design | 1891 | +95 years | Henri de Toulouse-Lautrec prints the poster Moulin Rouge: La Goulue in colour lithography. | [`art-nouveau-web`](./art-nouveau-web/SKILL.md) |
| 3 | Painting | 1895 | +99 years | Edvard Munch prints The Scream as a lithograph. | [`expressionism-painting`](./expressionism-painting/SKILL.md) |

Used by: [`symbolism-painting`](./symbolism-painting/SKILL.md), [`art-nouveau-web`](./art-nouveau-web/SKILL.md), [`expressionism-painting`](./expressionism-painting/SKILL.md).

- Draw on the stone with a greasy crayon or a tusche wash; the drawing takes ink and the rest stays wet.
- Pull the print in a press at a run of 20 to 200 copies for an artist print, or more for a poster.
- Use one stone for each colour; 3 to 5 stones give a poster.
- Keep the soft crayon grain and the dark, velvet black.

Sources: [Wikipedia: Lithography](https://en.wikipedia.org/wiki/Lithography); Odilon Redon, Dans le rêve (1879).

### Mesh gradient

A colour field built from many points that each hold a colour, so the colours blend in soft, organic shapes.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 1998 | — | United States: Adobe Illustrator 8 adds the gradient mesh tool. | |
| 1 | Graphic & UI Design | 2018 | +20 years | Product sites blur large colour blobs into soft aurora fields behind the hero. | [`aurora-gradient-ui`](./aurora-gradient-ui/SKILL.md) |
| 2 | Graphic & UI Design | 2021 | +23 years | Ethereal pages fade pale pastel fields into each other behind thin type. | [`ethereal-web`](./ethereal-web/SKILL.md) |

Used by: [`aurora-gradient-ui`](./aurora-gradient-ui/SKILL.md), [`ethereal-web`](./ethereal-web/SKILL.md).

- Use 3 to 5 colours of near value; keep the step between them small.
- Blur the field by 80 to 200 px, so that no edge shows.
- Put the field behind the content and give the text a solid or near-solid surface.

Sources: Adobe Illustrator 8 user guide (1998).

### Modular grid

A page or screen divided into equal columns and rows; each element fits a cell or a block of cells, so that the whole layout repeats one measure.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | c. 1958 | — | Zurich: Josef Mueller-Brockmann and the journal Neue Grafik (1958) spread the modular grid for posters and print. | |
| 1 | Logo | c. 1962 | +4 years | Otl Aicher builds the corporate design of Lufthansa on a fixed grid of marks, type and colour. | [`swiss-modernist-mark`](./swiss-modernist-mark/SKILL.md) |
| 2 | Graphic & UI Design | 1970 | +12 years | Unimark issues the New York City Transit Graphics Standards Manual, with sign grids for the whole system. | [`swiss-international`](./swiss-international/SKILL.md) |
| 3 | Graphic & UI Design | 2010 | +52 years | Windows Phone 7 builds its start screen from square and wide live tiles on one grid. | [`metro-ui`](./metro-ui/SKILL.md) |
| 4 | Graphic & UI Design | 2012 | +54 years | Bootstrap 2.0 ships a 12 column fluid grid for web pages. | [`bento-grid-ui`](./bento-grid-ui/SKILL.md), [`minimalism-web`](./minimalism-web/SKILL.md) |
| 5 | Graphic & UI Design | c. 2012 | +54 years | Interfaces that follow the Braun products of Dieter Rams put each control in one cell of a strict grid. | [`rams-functionalism-ui`](./rams-functionalism-ui/SKILL.md) |

Used by: [`swiss-international`](./swiss-international/SKILL.md), [`swiss-modernist-mark`](./swiss-modernist-mark/SKILL.md), [`bento-grid-ui`](./bento-grid-ui/SKILL.md), [`minimalism-web`](./minimalism-web/SKILL.md), [`metro-ui`](./metro-ui/SKILL.md), [`rams-functionalism-ui`](./rams-functionalism-ui/SKILL.md).

- Divide the page into 4 to 12 equal columns with a gutter of 1/10 to 1/5 of a column width.
- Cut the page into rows of the same module height; align each image and text block to the lines.
- Set text on a baseline grid of one line height, and use 1 to 2 type sizes for each level.
- Scale an image by a whole number of modules.

Sources: Josef Mueller-Brockmann, Grid Systems in Graphic Design (Niggli, 1981).

### Optical mixing

Small dots or strokes of pure colour placed side by side, so that the eye mixes them at a distance.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1886 | — | Paris, France: Georges Seurat shows A Sunday on La Grande Jatte at the last Impressionist exhibition. | |
| 1 | Photography | 1907 | +21 years | The Autochrome plate of the Lumière brothers builds colour from dyed starch grains, and pictorialists use it for soft colour pictures. | [`pictorialism`](./pictorialism/SKILL.md) |

Used by: [`pointillism`](./pointillism/SKILL.md), [`pictorialism`](./pictorialism/SKILL.md).

- Put dots of pure colour side by side; do not mix them on the palette.
- Set complementary colours next to each other in the shadows.
- Keep each dot under 0.5% of the picture width.

Sources: Michel-Eugène Chevreul, The Principles of Harmony and Contrast of Colours (1839).

### Perspective grid

Lines that run to one vanishing point on a horizon, so that a flat surface reads as a floor in deep space.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1415 | — | Florence: Filippo Brunelleschi demonstrates linear perspective; Alberti writes the method down in De pictura (1435). | |
| 1 | Film & Video | 1968 | +553 years | Stanley Kubrick sets corridors and rooms on one central vanishing point in 2001: A Space Odyssey; Wes Anderson later builds whole films on the flat, centred frame. | [`planimetric-symmetry`](./planimetric-symmetry/SKILL.md) |
| 2 | Graphic & UI Design | c. 1980 | +565 years | Cassette Futurism screens and sleeves draw wireframe floors to a horizon. | [`cassette-futurism`](./cassette-futurism/SKILL.md) |
| 3 | Film & Video | 1982 | +567 years | Tron draws vector grids that run to a horizon. |  |
| 4 | Graphic & UI Design | 2012 | +597 years | Vaporwave draws neon grid floors under a sunset. | [`vaporwave`](./vaporwave/SKILL.md) |

Used by: [`renaissance-painting`](./renaissance-painting/SKILL.md), [`cassette-futurism`](./cassette-futurism/SKILL.md), [`vaporwave`](./vaporwave/SKILL.md), [`planimetric-symmetry`](./planimetric-symmetry/SKILL.md).

- Put the horizon at 50% to 65% of the height and draw 12 to 24 lines to one vanishing point.
- Space the cross lines so that each gap is about 0.8 of the gap in front of it.

Sources: Leon Battista Alberti, De pictura (1435).

### Pixel grid

A picture or a letter built from square cells that are each on or off, or one flat colour, with no curve and no smooth edge.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1963 | — | Bell Labs, New Jersey: Ken Knowlton writes BEFLIX, a language that draws computer films as grids of cells in a small set of grey tones. | |
| 1 | Icons | c. 1973 | +10 years | The Xerox Alto has a bitmap display, and its programs draw icons cell by cell. |  |
| 2 | Video game | 1983 | +20 years | The Famicom builds every screen from 8×8 tiles in a fixed palette. | [`eight-bit-tile`](./eight-bit-tile/SKILL.md) |
| 3 | Icons | 1984 | +21 years | Susan Kare draws the Macintosh icons and the Chicago bitmap face on a grid of 32 by 32 cells. | [`pixel-icon`](./pixel-icon/SKILL.md) |
| 4 | Video game | 1984 | +21 years | Knight Lore draws isometric rooms cell by cell on the ZX Spectrum. | [`isometric-pixel-world`](./isometric-pixel-world/SKILL.md) |
| 5 | Typeface | 1985 | +22 years | Zuzana Licko draws the Emigre bitmap faces for the 72 dpi screen and the dot-matrix printer. |  |
| 6 | Video game | 1989 | +26 years | The Game Boy limits the grid to 160×144 cells in four shades. | [`four-shade-handheld`](./four-shade-handheld/SKILL.md) |
| 7 | Video game | 1990 | +27 years | The Super Famicom widens the palette to 256 colours on screen. | [`sixteen-bit-sprite`](./sixteen-bit-sprite/SKILL.md) |
| 8 | Graphic & UI Design | c. 1998 | +35 years | The eBoy group publishes pixel illustrations of cities and objects on the web. | [`pixel-art-web`](./pixel-art-web/SKILL.md) |
| 9 | Graphic & UI Design | c. 1999 | +36 years | Japanese portal pages set text at 10 to 12 px in bitmap kanji fonts, so each glyph sits on the pixel grid. | [`japanese-dense-web`](./japanese-dense-web/SKILL.md) |

Used by: [`pixel-icon`](./pixel-icon/SKILL.md), [`pixel-art-web`](./pixel-art-web/SKILL.md), [`japanese-dense-web`](./japanese-dense-web/SKILL.md), [`eight-bit-tile`](./eight-bit-tile/SKILL.md), [`four-shade-handheld`](./four-shade-handheld/SKILL.md), [`sixteen-bit-sprite`](./sixteen-bit-sprite/SKILL.md), [`isometric-pixel-world`](./isometric-pixel-world/SKILL.md).

- Draw an icon on a grid of 16 or 32 cells a side; fill each cell with one colour or leave it empty.
- Limit the palette to 1 to 16 colours; do not blend two colours inside one cell.
- Draw a diagonal as a stair of equal steps, for example 2 cells across for each 1 cell up.
- Show the image at an integer scale (2x, 3x, 4x) so that no cell blurs.

Sources: Susan Kare, Mac icon and font work (Apple Macintosh, 1984); Zuzana Licko, Emigre bitmap typefaces (Emigre, 1985).

### Plein air

Work made outside in front of the subject, in the light of the place and the hour.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1780 | — | Rome and France: Painters such as Pierre-Henri de Valenciennes make small oil sketches outdoors; the collapsible paint tube (John Goffe Rand, 1841) later makes the work practical. | |
| 1 | Painting | c. 1880 | +100 years | The Skagen painters and other Nordic painters work on the beach and in the summer night light. | [`nordic-national-romanticism-painting`](./nordic-national-romanticism-painting/SKILL.md) |
| 2 | Film & Video | 1945 | +165 years | Rome Open City is shot on real streets in daylight, with little added light. | [`italian-neorealism`](./italian-neorealism/SKILL.md) |

Used by: [`realism-painting`](./realism-painting/SKILL.md), [`nordic-national-romanticism-painting`](./nordic-national-romanticism-painting/SKILL.md), [`italian-neorealism`](./italian-neorealism/SKILL.md).

- Work in front of the motif in one session of 1 to 3 hours, before the light moves.
- Take the colour of shadows from the sky and the ground around them; do not paint them black.
- Use the light that is there; add no lamp.

Sources: John House, Impressionism: Paint and Politics (2004).

### Pre-rendered background

Render a room or a street offline in 3D software, then show it as a fixed image behind a real-time figure or a cursor.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | 1993 | — | Spokane, Washington: Cyan's Myst shows its island as a set of pre-rendered still views. | |
| 1 | Video game | 1996 | +3 years | Resident Evil sets polygon figures over pre-rendered rooms on the PlayStation. | [`pre-rendered-backgrounds`](./pre-rendered-backgrounds/SKILL.md) |

Used by: [`pre-rendered-backgrounds`](./pre-rendered-backgrounds/SKILL.md).

- Fix the camera for each view and compose it like a film frame.
- Render the background with offline light: soft shadows and many lamps.
- Paint a depth mask so that the figure can pass behind props.
- Match the figure's light direction to the render.

Sources: [Wikipedia: Pre-rendering](https://en.wikipedia.org/wiki/Pre-rendering); [Wikipedia: Myst](https://en.wikipedia.org/wiki/Myst).

### Roof light

An opening in the roof that lets daylight fall into a room from above.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 125 | — | Rome, Italy: The dome of the Pantheon has an open oculus 8.9 m wide; it is the only source of light. | |
| 1 | Architecture | 1935 | +1810 years | Alvar Aalto cuts many round, deep roof lights into the reading room of the Viipuri Library. | [`nordic-modernism-architecture`](./nordic-modernism-architecture/SKILL.md) |

Used by: [`nordic-modernism-architecture`](./nordic-modernism-architecture/SKILL.md).

- Make each opening 1% to 5% of the floor area under it.
- Splay the sides of a deep opening, so that the light spreads before it reaches the floor.
- Put the roof light over the place of use: a reading table, a stair or the centre of a hall.

Sources: Richard Weston, Alvar Aalto (1995).

### Serial repetition

One motif or one frame, repeated with small changes in a set of works, so that the viewer reads the change and not the object.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1891 | — | Paris: Claude Monet shows a group of Haystacks canvases, each of one motif in a different light. | |
| 1 | Photography | 1928 | +37 years | Karl Blossfeldt's book Urformen der Kunst shows plant forms one by one in a uniform series. | [`new-objectivity`](./new-objectivity/SKILL.md) |
| 2 | Painting | 1958 | +67 years | Frank Stella starts his Black Paintings, in which equal stripes repeat the shape of the canvas. | [`minimalism-painting`](./minimalism-painting/SKILL.md) |
| 3 | Photography | c. 1959 | +68 years | Bernd and Hilla Becher begin their typologies of water towers, blast furnaces and houses on one fixed frame. | [`duesseldorf-school`](./duesseldorf-school/SKILL.md), [`new-topographics`](./new-topographics/SKILL.md) |
| 4 | Painting | 1962 | +71 years | Andy Warhol repeats one soup can or one face in a grid of identical canvases. | [`pop-art-painting`](./pop-art-painting/SKILL.md) |

Used by: [`impressionism`](./impressionism/SKILL.md), [`minimalism-painting`](./minimalism-painting/SKILL.md), [`duesseldorf-school`](./duesseldorf-school/SKILL.md), [`new-topographics`](./new-topographics/SKILL.md), [`pop-art-painting`](./pop-art-painting/SKILL.md), [`new-objectivity`](./new-objectivity/SKILL.md).

- Fix the motif, the format and the viewpoint; change one variable only, such as the hour, the colour or the stripe width.
- Make at least 5 works in the set and show them in one row at one height.
- Keep the spacing between works equal to a fixed unit, such as 10 cm or one panel width.
- Remove the hand: use a mechanical edge, a stencil or a plain lens.

Sources: [Wikipedia: Haystacks (Monet)](https://en.wikipedia.org/wiki/Haystacks_(Monet)); Bernd and Hilla Becher, Typologien industrieller Bauten (1963).

### Shadow gap

A narrow recessed joint between two surfaces that casts a shadow, so that each surface seems to float apart from the next.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | c. 1958 | — | Verona: Carlo Scarpa separates new steel and stone from the old walls with narrow joints in the Castelvecchio museum (1957 to 1964). | |
| 1 | Architecture | 1964 | +6 years | Carlo Scarpa finishes the Castelvecchio in Verona; each new element touches the old fabric along a visible gap. | [`adaptive-reuse-architecture`](./adaptive-reuse-architecture/SKILL.md) |
| 2 | Interior | c. 1990 | +32 years | John Pawson and Claudio Silvestrin set plaster and doors flush, with recessed joints in place of trim. | [`minimalist-interior`](./minimalist-interior/SKILL.md) |
| 3 | Architecture | c. 1996 | +38 years | Peter Zumthor and other critical regionalists use the shadow line between materials as their detail. | [`critical-regionalism-architecture`](./critical-regionalism-architecture/SKILL.md) |

Used by: [`adaptive-reuse-architecture`](./adaptive-reuse-architecture/SKILL.md), [`minimalist-interior`](./minimalist-interior/SKILL.md), [`critical-regionalism-architecture`](./critical-regionalism-architecture/SKILL.md).

- Cut the gap 10 to 25mm wide and 10 to 20mm deep.
- Hold the gap at a constant width along its full length.
- Use it where new meets old: between a wall and a ceiling, a floor and a skirting, or a new insert and a historic wall.

Sources: [Wikipedia, Castelvecchio Museum](https://en.wikipedia.org/wiki/Castelvecchio_Museum).

### Sketch line

Lines with a small jitter and a double stroke, so that a drawing on a screen looks drawn by hand.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 2008 | — | United States: Balsamiq Mockups draws wireframes with hand-drawn lines and a comic font, so that they look unfinished. | |
| 1 | Graphic & UI Design | 2020 | +12 years | Excalidraw and the Rough.js library draw diagrams and interface shapes with a jittered double stroke. | [`conceptual-sketch-ui`](./conceptual-sketch-ui/SKILL.md) |

Used by: [`conceptual-sketch-ui`](./conceptual-sketch-ui/SKILL.md).

- Offset each line by 0.5 to 2 px at random points along its length.
- Draw each line twice with a small change, as a pencil does.
- Fill shapes with hatching at 45 degrees, not with flat colour.

Sources: Rough.js documentation (2019).

### Soak-stain

Thin paint is poured on raw, unprimed canvas that lies on the floor; the cloth drinks the colour and the colour and the weave become one.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | 1952 | — | New York: Helen Frankenthaler pours thinned oil on raw canvas in Mountains and Sea. | |
| 1 | Painting | 1953 | +1 years | Morris Louis and Kenneth Noland visit the studio of Frankenthaler and take up the stain method; Louis turns it into his Veils from 1954. | [`colour-field-painting`](./colour-field-painting/SKILL.md) |
| 2 | Painting | c. 1960 | +8 years | Noland moves from oil to thinned acrylic, which stains the cloth with no halo; Louis stains with thinned Magna acrylic from the first Veils in 1954. | [`colour-field-painting`](./colour-field-painting/SKILL.md) |

Used by: [`colour-field-painting`](./colour-field-painting/SKILL.md), [`abstract-expressionism`](./abstract-expressionism/SKILL.md).

- Thin oil with turpentine, or acrylic with water, until it flows like ink.
- Lay the canvas flat and unprimed on the floor; pour in pools and guide the paint with a sponge or a tilt of the cloth.
- Leave 30% to 60% of the cloth bare so that the raw colour is part of the picture.
- Work at a size of 2 metres or more so that the field is wider than the viewer's sight.

Sources: [Wikipedia: Helen Frankenthaler](https://en.wikipedia.org/wiki/Helen_Frankenthaler); Helen Frankenthaler, Mountains and Sea (1952).

### Three-point lighting

A key light, a fill light and a back light on one subject, so that the face is modelled and stands out from the ground.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1920 | — | Hollywood, United States: In the 1920s Hollywood cameramen light stars with a key, a fill and a back light; in the 1930s the method is the studio standard. | |
| 1 | Photography | c. 1930 | +10 years | George Hurrell and other studio portraitists bring key, fill and back light to portraits for film and fashion magazines. | [`fashion-editorial`](./fashion-editorial/SKILL.md) |

Used by: [`classical-hollywood`](./classical-hollywood/SKILL.md), [`fashion-editorial`](./fashion-editorial/SKILL.md).

- Set the key light 30 to 45 degrees off the camera axis and above eye level.
- Set the fill on the other side at 1/4 to 1/2 of the key.
- Put the back light behind the subject, so that a thin rim of light separates hair and shoulders from the ground.

Sources: Kristin Thompson, David Bordwell and Janet Staiger, The Classical Hollywood Cinema (1985).

### Trompe-l'oeil

Painted perspective that continues the real room, so that a flat wall or ceiling seems to open into space.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Painting | c. 1465 | — | Mantua, Italy: Andrea Mantegna paints an open oculus with figures that look down into the Camera degli Sposi (1465 to 1474). | |
| 1 | Painting | 1532 | +67 years | Giulio Romano paints the Sala dei Giganti in Mantua so that the walls and the vault seem to fall on the viewer. | [`mannerism-painting`](./mannerism-painting/SKILL.md) |
| 2 | Architecture | c. 1685 | +220 years | Andrea Pozzo paints a false dome and an open vault over the nave of Sant'Ignazio in Rome. | [`baroque-architecture`](./baroque-architecture/SKILL.md) |

Used by: [`renaissance-painting`](./renaissance-painting/SKILL.md), [`mannerism-painting`](./mannerism-painting/SKILL.md), [`baroque-architecture`](./baroque-architecture/SKILL.md).

- Set the vanishing point at the eye of a viewer who stands at one marked spot in the room.
- Continue the real cornice, columns and arches in paint for 1 to 3 storeys of false height.
- Paint the sky or the open part with the lightest value; keep the painted frame at the value of the real stone.

Sources: Martin Kemp, The Science of Art (1990); Andrea Pozzo, Perspectiva pictorum et architectorum (1693).

### Wire work

Actors hang on thin steel wires, so that they fly, leap and turn in a fight faster and higher than a body can.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1983 | — | Hong Kong: Hong Kong films hang actors on wires before the 1980s; Zu Warriors from the Magic Mountain (1983) is a landmark of the special-effects wuxia film, not the first use. | |
| 1 | Film & Video | 1999 | +16 years | Yuen Woo-ping choreographs the wire fights of The Matrix for Hollywood. |  |

Used by: [`hong-kong-action`](./hong-kong-action/SKILL.md).

- Hide the wires against the background, or remove them in post-production.
- Cut on the peak of each leap; keep each air shot under 2 s.
- Mix wire shots with ground shots at real speed, so that the flight reads as a skill.

Sources: David Bordwell, Planet Hong Kong (2000).

### Wood type

Large display letters routed from end-grain wood instead of cast in metal, so posters and bills can use letters 5–50 cm high at a low cost.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1828 | — | New York: Darius Wells makes wood type in quantity with a routing machine, and the poster printers take it up at once. | |
| 1 | Typeface | 1828 | +0 years | The first wood type lines are fat faces copied from the London founders. | [`fat-face-display`](./fat-face-display/SKILL.md) |
| 2 | Typeface | c. 1834 | +6 years | Wood type founders add Egyptian slabs and condensed letters for posters. | [`slab-serif`](./slab-serif/SKILL.md), [`grotesque-sans`](./grotesque-sans/SKILL.md) |
| 3 | Logo | c. 1875 | +47 years | Trade cards and shop signs set the name of the firm in heavy wood letters. | [`victorian-trademark`](./victorian-trademark/SKILL.md) |

Used by: [`fat-face-display`](./fat-face-display/SKILL.md), [`slab-serif`](./slab-serif/SKILL.md), [`grotesque-sans`](./grotesque-sans/SKILL.md), [`victorian-trademark`](./victorian-trademark/SKILL.md).

- Use wood type for letters above about 72 pt, where metal is too heavy and too expensive.
- Draw the faces to be loud at a distance: fat face, slab and condensed grotesque, in one weight per line.
- Mix several faces and sizes on one bill and centre each line, as the job printers did.

Sources: [Wood type (Wikipedia)](https://en.wikipedia.org/wiki/Wood_type); [Fat face (Wikipedia)](https://en.wikipedia.org/wiki/Fat_face).

### Woodcut

A print from a block of wood with the white parts cut away; the result is flat colour, hard edges and visible grain.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 868 | — | Dunhuang: The Diamond Sutra, printed in China in 868, is the oldest dated printed book made from woodblocks. | |
| 1 | Painting | 1765 | +897 years | Suzuki Harunobu and his printers make the full-colour nishiki-e print on many blocks. | [`ukiyo-e`](./ukiyo-e/SKILL.md) |
| 2 | Painting | c. 1894 | +1026 years | Paul Gauguin cuts the woodcuts of the Noa Noa series with flat colour and rough cuts. | [`post-impressionism`](./post-impressionism/SKILL.md) |
| 3 | Painting | 1905 | +1037 years | Ernst Ludwig Kirchner, Erich Heckel and Karl Schmidt-Rottluff of Die Brücke cut jagged woodcuts in Dresden. | [`expressionism-painting`](./expressionism-painting/SKILL.md) |
| 4 | Painting | 1906 | +1038 years | André Derain and Maurice de Vlaminck cut woodcuts with flat colour and rough gouge marks. | [`fauvism`](./fauvism/SKILL.md) |

Used by: [`ukiyo-e`](./ukiyo-e/SKILL.md), [`post-impressionism`](./post-impressionism/SKILL.md), [`expressionism-painting`](./expressionism-painting/SKILL.md), [`fauvism`](./fauvism/SKILL.md).

- Cut the block along the grain with a knife and a gouge; leave a line of 1mm to 3mm for the black.
- Use one block for each colour and register them within 1 mm.
- Print with a flat, opaque ink and leave the grain and the knife marks visible.
- Keep the shapes flat, with no more than 3 to 6 tones in a print.

Sources: [British Library: The Diamond Sutra](https://www.bl.uk/collection-items/diamond-sutra); [Wikipedia: Woodcut](https://en.wikipedia.org/wiki/Woodcut).

## Tool

### Aerial drone

A small remote-controlled aircraft that carries a camera, so that a shot can fly over, round and through a scene.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 2013 | — | Shenzhen, China: DJI sells the Phantom, a ready-to-fly drone that carries a small camera. | |
| 1 | Film & Video | 2021 | +8 years | Right Up Our Alley, a one-take FPV flight through a bowling alley, makes the drone a camera that flies through rooms. | [`cinematic-fpv`](./cinematic-fpv/SKILL.md) |

Used by: [`cinematic-fpv`](./cinematic-fpv/SKILL.md).

- Fly at 1 to 3 m from the subject for an FPV shot; fly higher for a survey shot.
- Keep the horizon level in a calm shot; let it bank only for a fast FPV move.
- Plan one continuous route; one take holds the scene.

Sources: Right Up Our Alley, Jay Christensen (2021).

### Airbrush

A pen-sized spray gun that lays paint in soft, even tones; with masks, it makes hard edges and smooth gradients side by side.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 1879 | — | United States: Abner Peeler patents a paint distributor; the airbrush of Charles Burdick (1893) goes into photo studios for retouch. | |
| 1 | Graphic & UI Design | c. 1930 | +51 years | Streamline posters and car advertisements use airbrushed gradients and chrome. |  |
| 2 | Painting | c. 1968 | +89 years | Illustrators airbrush surreal chrome, lightning and X-ray cut-aways for album covers and magazines. | [`airbrush-surrealism`](./airbrush-surrealism/SKILL.md), [`photorealism`](./photorealism/SKILL.md) |
| 3 | Graphic & UI Design | 1990 | +111 years | Photoshop 1.0 ships with an airbrush tool, and the soft spray becomes digital. | [`cyberdelia`](./cyberdelia/SKILL.md) |
| 4 | Graphic & UI Design | 2001 | +122 years | Mac OS X 10.0 ships the Aqua interface, with gel buttons and scroll bars in soft gradients and one white highlight. | [`apple-aqua`](./apple-aqua/SKILL.md) |
| 5 | Logo | c. 2001 | +122 years | Web 2.0 logos take the airbrush gradient and the white specular highlight to the screen as glossy marks. | [`glossy-3d-logo`](./glossy-3d-logo/SKILL.md) |
| 6 | Icons | 2001 | +122 years | Apple Aqua icons in Mac OS X use soft gradients, highlights and cast shadows that echo airbrush work. | [`skeuomorphic-icon`](./skeuomorphic-icon/SKILL.md) |
| 7 | Graphic & UI Design | c. 2004 | +125 years | Glossy interface gradients and highlights take the airbrush look to the screen. | [`frutiger-aero`](./frutiger-aero/SKILL.md) |
| 8 | Graphic & UI Design | 2007 | +128 years | iPhone OS draws glass, chrome and felt with soft gradients and specular highlights. | [`skeuomorphism`](./skeuomorphism/SKILL.md) |

Used by: [`airbrush-surrealism`](./airbrush-surrealism/SKILL.md), [`cyberdelia`](./cyberdelia/SKILL.md), [`frutiger-aero`](./frutiger-aero/SKILL.md), [`y2k-aesthetic`](./y2k-aesthetic/SKILL.md), [`glossy-3d-logo`](./glossy-3d-logo/SKILL.md), [`skeuomorphic-icon`](./skeuomorphic-icon/SKILL.md), [`photorealism`](./photorealism/SKILL.md), [`apple-aqua`](./apple-aqua/SKILL.md), [`skeuomorphism`](./skeuomorphism/SKILL.md).

- Build tone in 3 to 6 thin passes; each pass adds 20% to 40% of the final density.
- Cut a hard mask for each edge that must stay sharp; leave the light soft.
- Put one specular highlight of pure white on each chrome form.

Sources: Seng-gye Tombs Curtis and Christopher Hunt, The Airbrush Book (1980).

### Broad-nib pen

A pen with a flat, square-cut tip held at a fixed angle, so the width of a stroke changes with its direction and the stress of the letter is diagonal.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | c. 1454 | — | Mainz: The pen is older than print; Gutenberg cut his textura from the broad-nib book hand of the scribes, the first record of the pen in type. | |
| 1 | Typeface | c. 1454 | +0 years | Gutenberg's textura for the 42-line Bible copies the broken broad-nib hand. | [`blackletter`](./blackletter/SKILL.md) |
| 2 | Typeface | 1470 | +16 years | Nicolas Jenson cuts a roman with the diagonal stress of the humanist broad-nib hand. | [`garalde-old-style`](./garalde-old-style/SKILL.md) |
| 3 | Typeface | 1916 | +462 years | Edward Johnston, a calligrapher, draws the London Underground sans from broad-nib proportions. | [`humanist-sans`](./humanist-sans/SKILL.md) |

Used by: [`blackletter`](./blackletter/SKILL.md), [`garalde-old-style`](./garalde-old-style/SKILL.md), [`humanist-sans`](./humanist-sans/SKILL.md).

- Hold the nib edge at 30–45° to the baseline and keep that angle for every stroke.
- Make the x-height about 4 nib widths in a round book hand and about 5 in textura; a stem is one nib width wide.
- Let the thin parts fall on the diagonal of the nib angle, so the o has its thinnest points at about 11 and 5 o'clock.

Sources: [Blackletter (Wikipedia)](https://en.wikipedia.org/wiki/Blackletter); [Calligraphy (Wikipedia)](https://en.wikipedia.org/wiki/Calligraphy); [Edward Johnston (Wikipedia)](https://en.wikipedia.org/wiki/Edward_Johnston).

### Diffusion model

A model that learns to turn noise into an image step by step, and makes a new image from a text prompt.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 2015 | — | Stanford and Berkeley: Jascha Sohl-Dickstein and co-authors publish the first diffusion method for images; it is a paper in machine learning. | |
| 1 | Photography | 2020 | +5 years | Jonathan Ho, Ajay Jain and Pieter Abbeel publish Denoising Diffusion Probabilistic Models. |  |
| 2 | Graphic & UI Design | 2022 | +7 years | Midjourney and DALL-E 2 put text-to-image models in the hands of illustrators and designers. |  |
| 3 | Photography | 2022 | +7 years | Stable Diffusion releases its weights in August, and its glossy default look spreads as a recognisable image style. | [`ai-hyperreal`](./ai-hyperreal/SKILL.md) |

Used by: [`ai-hyperreal`](./ai-hyperreal/SKILL.md).

- Start from pure noise and remove it over 20 to 50 steps.
- Steer the result with a text prompt and a guidance scale of 5 to 10.
- Expect smooth skin, even light and a glossy, over-detailed finish when the prompt gives no flaw.
- Add a concrete flaw to the prompt, such as grain, a lens fault or a cluttered ground, to break the sheen.

Sources: [Sohl-Dickstein et al., Deep Unsupervised Learning using Nonequilibrium Thermodynamics (ICML 2015)](https://arxiv.org/abs/1503.03585); [Ho, Jain and Abbeel, Denoising Diffusion Probabilistic Models (2020)](https://arxiv.org/abs/2006.11239).

### Direct flash

A flash on the camera that fires straight at the subject, so that faces are bright, shadows are hard and the background goes dark.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 1929 | — | Germany: The Vacublitz flash bulb replaces flash powder and makes the flash safe to use by hand. | |
| 1 | Photography | c. 1999 | +70 years | Compact digital cameras fire their small built-in flash at each snapshot. | [`y2k-digicam`](./y2k-digicam/SKILL.md) |
| 2 | Photography | c. 2008 | +79 years | Party and nightlife photographers post direct-flash pictures from clubs to blogs. | [`party-flash`](./party-flash/SKILL.md) |

Used by: [`y2k-digicam`](./y2k-digicam/SKILL.md), [`party-flash`](./party-flash/SKILL.md).

- Put the flash on the camera axis; do not bounce it.
- Stand 1 to 3 m from the subject; let the background fall 2 to 4 stops darker.
- Keep the red eye, the shine on skin and the hard shadow behind the subject.

Sources: Weegee, Naked City (1945).

### Handheld camera

A camera that the operator carries on the body, with no tripod or dolly; the shake of the body shows in the frame.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | c. 1960 | — | Paris: Jean Rouch and Edgar Morin shoot Chronique d'un été with the light synchronous-sound camera that Michel Brault operates by hand; earlier handheld shots exist. | |
| 1 | Film & Video | c. 1960 | +0 years | Raoul Coutard shoots À bout de souffle by hand for Jean-Luc Godard. | [`french-new-wave`](./french-new-wave/SKILL.md) |
| 2 | Film & Video | c. 1960 | +0 years | Rouch, Brault and the Direct Cinema crews carry the light 16mm camera and the sound recorder into real rooms. | [`documentary-verite`](./documentary-verite/SKILL.md) |
| 3 | Film & Video | 1969 | +9 years | Easy Rider and other New Hollywood films use light cameras on real roads and locations. | [`new-hollywood`](./new-hollywood/SKILL.md) |
| 4 | Film & Video | 1995 | +35 years | The Dogme 95 Vow of Chastity demands that the camera is hand-held. | [`dogme-95`](./dogme-95/SKILL.md) |
| 5 | Film & Video | 1999 | +39 years | The Blair Witch Project gives the camera to its characters and shows the shake as their fear. | [`found-footage`](./found-footage/SKILL.md) |
| 6 | Film & Video | 2002 | +42 years | Andrew Bujalski shoots Funny Ha Ha with a small camera in plain rooms. | [`mumblecore`](./mumblecore/SKILL.md) |
| 7 | Film & Video | 2015 | +55 years | Sean Baker shoots Tangerine on three iPhone 5S phones with a clip-on anamorphic lens and a small stabiliser. | [`phone-cinema`](./phone-cinema/SKILL.md) |
| 8 | Film & Video | c. 2020 | +60 years | Camcorder revival films shoot on handheld consumer video cameras. | [`camcorder-revival`](./camcorder-revival/SKILL.md) |

Used by: [`french-new-wave`](./french-new-wave/SKILL.md), [`documentary-verite`](./documentary-verite/SKILL.md), [`dogme-95`](./dogme-95/SKILL.md), [`found-footage`](./found-footage/SKILL.md), [`mumblecore`](./mumblecore/SKILL.md), [`phone-cinema`](./phone-cinema/SKILL.md), [`new-hollywood`](./new-hollywood/SKILL.md), [`camcorder-revival`](./camcorder-revival/SKILL.md).

- Use a light camera and a wide lens of 18mm to 35mm so that the shake stays small in the frame.
- Follow the action at the pace of a walking person and let the frame move 2% to 5% off the subject.
- Do not stabilise in post; accept a late refocus and a missed frame as part of the take.
- Shoot long takes of 30 seconds or more, so that the camera seems to live in the room.

Sources: Richard Neupert, A History of the French New Wave Cinema (University of Wisconsin Press, 2002); Dogme 95 Vow of Chastity (1995).

### Pointed pen

A sharp, flexible steel or quill nib: pressure spreads the two tines for a swelling downstroke, and no pressure gives a hairline upstroke.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | 1741 | — | London: George Bickham's The Universal Penman engraves the roundhand of the English writing masters, the model for every later formal script. | |
| 1 | Typeface | 1741 | +0 years | Engraved copybooks of the writing masters, then metal scripts that copy the plates. | [`formal-script`](./formal-script/SKILL.md) |
| 2 | Logo | 1886 | +145 years | Frank Mason Robinson writes the Coca-Cola wordmark in Spencerian, a pointed-pen hand. | [`victorian-trademark`](./victorian-trademark/SKILL.md) |

Used by: [`formal-script`](./formal-script/SKILL.md), [`victorian-trademark`](./victorian-trademark/SKILL.md).

- Slope the letters 50–55° from the baseline and keep one slope for the line.
- Press only on the downstrokes, to 3–8 times the hairline width, and release on the upstrokes and the joins.
- Join each lower-case letter to the next with a hairline from the baseline or the x-height.

Sources: [Copperplate script (Wikipedia)](https://en.wikipedia.org/wiki/Copperplate_script); [Spencerian script (Wikipedia)](https://en.wikipedia.org/wiki/Spencerian_script).

### Tilt-shift

Lens or camera movements that keep vertical lines parallel and move the plane of focus; a building stands upright and sharp.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 1904 | — | Vienna: Theodor Scheimpflug patents the rule for tilted lens and plane of focus. | |
| 1 | Photography | c. 1917 | +13 years | Paul Strand and Alfred Stieglitz use large view cameras for sharp, unretouched prints. | [`straight-photography`](./straight-photography/SKILL.md) |
| 2 | Photography | c. 1932 | +28 years | Group f/64 use large-format view cameras with small stops and sharp focus from front to back. | [`group-f64`](./group-f64/SKILL.md) |
| 3 | Photography | c. 1960 | +56 years | Julius Shulman photographs Case Study House No. 22 on a large-format camera with upright lines. | [`architectural-photography`](./architectural-photography/SKILL.md) |
| 4 | Photography | 1961 | +57 years | Nikon sells the PC-Nikkor 35mm f/3.5, the first shift lens for a 35mm camera. | [`architectural-photography`](./architectural-photography/SKILL.md) |
| 5 | Photography | c. 1975 | +71 years | Stephen Shore and Joel Sternfeld use 8 x 10 in view cameras with movements for large colour prints. | [`new-colour`](./new-colour/SKILL.md) |
| 6 | Photography | c. 2008 | +104 years | Food photographers tilt the plane of focus so that one bite is sharp and the rest falls away. | [`food-photography`](./food-photography/SKILL.md) |
| 7 | Photography | c. 2010 | +106 years | Interior photographers for Nordic magazines and blogs use shift lenses to keep walls vertical. | [`scandinavian-interior-photography`](./scandinavian-interior-photography/SKILL.md) |
| 8 | Graphic & UI Design | 2012 | +108 years | Photoshop CS6 adds the Tilt-Shift blur filter, and the miniature look spreads on the web. |  |
| 9 | Video game | 2018 | +114 years | Octopath Traveler blurs the top and bottom of each frame so the world reads as a miniature. | [`hd-2d-diorama`](./hd-2d-diorama/SKILL.md) |

Used by: [`group-f64`](./group-f64/SKILL.md), [`architectural-photography`](./architectural-photography/SKILL.md), [`straight-photography`](./straight-photography/SKILL.md), [`new-colour`](./new-colour/SKILL.md), [`food-photography`](./food-photography/SKILL.md), [`scandinavian-interior-photography`](./scandinavian-interior-photography/SKILL.md), [`hd-2d-diorama`](./hd-2d-diorama/SKILL.md).

- Keep the back of the camera vertical and shift the lens up by 10 to 20 mm, so that vertical lines stay parallel.
- Tilt the lens by 2° to 8° to turn the plane of focus along the ground for depth at a small stop.
- Close the lens to f/11 to f/22 for full depth of field.
- In an editor, use a narrow band of focus and a strong blur outside it to fake a miniature.

Sources: [Wikipedia: Tilt–shift photography](https://en.wikipedia.org/wiki/Tilt%E2%80%93shift_photography); [Wikipedia: Scheimpflug principle](https://en.wikipedia.org/wiki/Scheimpflug_principle).

## Skill

### Hand-painted texture

Paint the colour, light, shadow and wear of a surface by hand into its texture, so the material reads with little help from the engine.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | c. 2004 | — | Irvine, California: World of Warcraft makes hand-painted, diffuse-only textures the standard of its art team. | |
| 1 | Video game | 2009 | +5 years | Torchlight and League of Legends carry the hand-painted look to other studios and to mobile games. | [`hand-painted-texture`](./hand-painted-texture/SKILL.md) |

Used by: [`hand-painted-texture`](./hand-painted-texture/SKILL.md).

- Paint light from above: lighter top edges and darker bottoms on each element.
- Shift shadows toward cool hues and highlights toward warm hues.
- Paint wear as bright strokes 2–4 px wide on edges.

Sources: [Wikipedia: World of Warcraft](https://en.wikipedia.org/wiki/World_of_Warcraft); [Wikipedia: Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping).

## Technology

### Affine texture warp

Texture mapping with no perspective correction: the texture is spread in a straight line across each triangle, so it bends and swims as the camera moves.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | 1994 | — | Sony, Tokyo: The PlayStation's graphics chip maps textures with no perspective correction. | |
| 1 | Video game | 1994 | +0 years | PlayStation games show warped floors and walls as a side effect of the hardware. | [`fifth-gen-low-poly`](./fifth-gen-low-poly/SKILL.md) |
| 2 | Video game | 2018 | +24 years | Haunted PS1 developers use shaders that copy the warp on purpose. | [`low-poly-ps1-revival`](./low-poly-ps1-revival/SKILL.md) |

Used by: [`fifth-gen-low-poly`](./fifth-gen-low-poly/SKILL.md), [`low-poly-ps1-revival`](./low-poly-ps1-revival/SKILL.md).

- Map textures in screen space with no division by depth.
- Snap vertices to whole pixels so geometry jitters.
- Split large faces into smaller triangles to limit the warp.

Sources: [Wikipedia: Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping); [Wikipedia: PlayStation (console)](https://en.wikipedia.org/wiki/PlayStation_(console)).

### Backdrop blur

A translucent layer that blurs what is behind it, so that a panel reads as frosted glass over the content.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Graphic & UI Design | 2007 | — | Redmond, United States: Windows Vista Aero blurs what is behind the translucent frame of each window. | |
| 1 | Graphic & UI Design | 2013 | +6 years | iOS 7 puts the control centre and the menus on blurred, translucent layers. |  |
| 2 | Graphic & UI Design | c. 2019 | +12 years | CSS backdrop-filter reaches the main browsers, and web pages take up frosted panels. |  |
| 3 | Graphic & UI Design | 2025 | +18 years | Apple's Liquid Glass adds refraction and bright edges to the blurred layer. | [`liquid-glass-ui`](./liquid-glass-ui/SKILL.md) |

Used by: [`liquid-glass-ui`](./liquid-glass-ui/SKILL.md).

- Blur the backdrop by 10 to 40 px.
- Give the panel a white or black tint of 10% to 40% opacity.
- Add a 1 px light edge at 20% to 50% opacity to show the edge of the glass.

Sources: W3C, Filter Effects Module Level 2: backdrop-filter.

### Bloom and HDR

Render light in a high dynamic range, map it down to the screen, and let the brightest areas glow past their edges as on a camera lens.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | 2005 | — | Valve, Bellevue, Washington: Half-Life 2: Lost Coast is made to show HDR rendering. | |
| 1 | Video game | 2006 | +1 years | Gears of War and other HD console games use bloom across whole scenes. | [`seventh-gen-desaturated`](./seventh-gen-desaturated/SKILL.md) |
| 2 | Video game | 2018 | +13 years | HD-2D games use bloom on lamps to make pixel scenes glow. | [`hd-2d-diorama`](./hd-2d-diorama/SKILL.md) |

Used by: [`seventh-gen-desaturated`](./seventh-gen-desaturated/SKILL.md), [`hd-2d-diorama`](./hd-2d-diorama/SKILL.md).

- Render in a floating-point buffer; keep sky and lamps 10–100 times brighter than walls.
- Blur pixels above a threshold and add them back as a glow.
- Map the range to the screen with a tone curve and eye adaptation.

Sources: [Wikipedia: High-dynamic-range rendering](https://en.wikipedia.org/wiki/High-dynamic-range_rendering); [Wikipedia: Bloom (shader effect)](https://en.wikipedia.org/wiki/Bloom_(shader_effect)).

### Cel shading

A render method that maps the light on a 3D surface to 2 or 3 flat tones and draws ink outlines, so 3D looks like a drawn animation cel.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | 2000 | — | Tokyo: Smilebit's Jet Set Radio is the first widely known cel-shaded game. | |
| 1 | Film & Video | c. 2003 | +3 years | Studios render 3D vehicles and sets with toon shaders to match hand-drawn animation. |  |

Used by: [`cel-shaded-3d`](./cel-shaded-3d/SKILL.md).

- Quantise the light value into 2 or 3 bands with a hard edge.
- Draw outlines 1–4 px wide on silhouettes, by an inverted hull or an edge filter.
- Keep base colours flat; carry the shape with the bands and the lines.

Sources: [Wikipedia: Cel shading](https://en.wikipedia.org/wiki/Cel_shading); [Wikipedia: Jet Set Radio](https://en.wikipedia.org/wiki/Jet_Set_Radio).

### Curtain wall

A thin outer wall of glass and metal that hangs on the frame of the building and carries no floor load.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1918 | — | San Francisco, United States: The Hallidie Building of Willis Polk hangs a glass wall in front of a concrete frame. | |
| 1 | Architecture | 1926 | +8 years | The workshop wing of the Bauhaus Dessau hangs a three-storey glass wall in front of its frame. | [`bauhaus-architecture`](./bauhaus-architecture/SKILL.md) |
| 2 | Architecture | 1952 | +34 years | Lever House in New York wraps a slab of offices in green glass and steel. | [`international-style-architecture`](./international-style-architecture/SKILL.md) |
| 3 | Architecture | 1975 | +57 years | Norman Foster hangs a frameless glass wall from the roof of the Willis Faber and Dumas building in Ipswich. | [`high-tech-architecture`](./high-tech-architecture/SKILL.md) |

Used by: [`bauhaus-architecture`](./bauhaus-architecture/SKILL.md), [`international-style-architecture`](./international-style-architecture/SKILL.md), [`high-tech-architecture`](./high-tech-architecture/SKILL.md).

- Carry the floors on columns set 1 to 3 m back from the facade line.
- Hang the glass in a grid of mullions at 1.2 to 1.5 m centres.
- Keep the glass part of the facade above 60%.

Sources: Kenneth Frampton, Modern Architecture: A Critical History (1980).

### Digital colour grade

The whole image is scanned to digital, and its colour is set shot by shot with curves and look-up tables.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 2000 | — | United States: O Brother, Where Art Thou? is the first feature film that is graded as a whole in a digital intermediate. | |
| 1 | Photography | c. 2010 | +10 years | Photographers apply film-look presets and split toning in Lightroom to push skin to orange and shadows to teal. | [`cinematic-teal-orange`](./cinematic-teal-orange/SKILL.md) |

Used by: [`cinematic-teal-orange`](./cinematic-teal-orange/SKILL.md).

- Push skin tones towards orange (hue 25 to 35 degrees) and shadows towards teal (hue 180 to 200 degrees).
- Keep the saturation of skin under 60%.
- Use one look-up table for each scene, so that the shots match.

Sources: Alexis Van Hurkman, Color Correction Handbook (2010).

### Parametric modelling

Form generated by a model of rules and parameters, so that a change to one value updates the whole geometry.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Architecture | 1992 | — | Barcelona, Spain: Parametric CAD comes from engineering (Sketchpad 1963, Pro/ENGINEER 1988); the office of Frank Gehry first uses CATIA in architecture to model and build the Fish in Barcelona. | |
| 1 | Architecture | 2008 | +16 years | Patrik Schumacher names Parametricism at the Venice Architecture Biennale; Zaha Hadid Architects scripts whole facades. | [`parametricism-architecture`](./parametricism-architecture/SKILL.md) |

Used by: [`parametricism-architecture`](./parametricism-architecture/SKILL.md).

- Drive the geometry from 3 to 10 named parameters, not from drawn lines.
- Vary each facade panel by a field value; no two panels need to be equal.
- Keep the curvature continuous between the surfaces.

Sources: Patrik Schumacher, The Autopoiesis of Architecture (2011).

### Phototypesetting

Type set by light through a film negative of each letter onto paper or film, instead of from cast metal.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Typeface | c. 1949 | — | Cambridge, United States: The Lumitype, also called Photon, of René Higonnet and Louis Moyroud sets type from a film disc with light. | |
| 1 | Typeface | 1957 | +8 years | Adrian Frutiger draws Univers as one system of 21 weights and widths, for the Lumitype and for metal. | [`neo-grotesque-sans`](./neo-grotesque-sans/SKILL.md) |

Used by: [`neo-grotesque-sans`](./neo-grotesque-sans/SKILL.md).

- Design each weight and width of a family together, so that the machine can mix them.
- Set display sizes with tight spacing; film letters can touch.
- Draw one master for all sizes; correct the spacing by size.

Sources: Adrian Frutiger, Signs and Symbols (1989).

### Physically based rendering

A render model in which each material has measured albedo, roughness and metalness and conserves energy, so it looks right under any light.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Film & Video | 2012 | — | Walt Disney Animation Studios, Burbank: Brent Burley presents the Disney principled BRDF at SIGGRAPH. | |
| 1 | Video game | 2013 | +1 years | Brian Karis presents the Unreal Engine 4 shading model at SIGGRAPH; engines move to metal-roughness materials. | [`pbr-photoreal`](./pbr-photoreal/SKILL.md) |

Used by: [`pbr-photoreal`](./pbr-photoreal/SKILL.md).

- Keep albedo in a physical range: about 30–240 sRGB for non-metals.
- Set roughness and metalness from measured or scanned samples.
- Light with physical units and a real sky; let light bounce.

Sources: [Wikipedia: Physically based rendering](https://en.wikipedia.org/wiki/Physically_based_rendering); [Karis, Real Shading in Unreal Engine 4, SIGGRAPH 2013](https://blog.selfshadow.com/publications/s2013-shading-course/).

### 35 mm camera

A small, quiet camera that takes 36 frames of 24 x 36 mm on cinema film, so that the photographer can work by hand in the street.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Photography | 1925 | — | Wetzlar, Germany: Leitz sells the Leica I, designed by Oskar Barnack. | |
| 1 | Photography | 1932 | +7 years | Henri Cartier-Bresson starts to photograph streets with a Leica. | [`street-photography`](./street-photography/SKILL.md) |
| 2 | Photography | 1936 | +11 years | Life magazine starts in 1936 and prints picture stories that photographers shoot with small, fast cameras. | [`documentary-photography`](./documentary-photography/SKILL.md) |
| 3 | Photography | c. 2015 | +90 years | Young photographers buy old 35 mm cameras and shoot colour negative and Tri-X film again. | [`film-grain-revival`](./film-grain-revival/SKILL.md) |

Used by: [`street-photography`](./street-photography/SKILL.md), [`documentary-photography`](./documentary-photography/SKILL.md), [`film-grain-revival`](./film-grain-revival/SKILL.md).

- Use a 28 to 50 mm lens and focus by scale, not through the finder.
- Shoot at 1/125 to 1/500 s, from the hand.
- Show the full frame; keep the 2:3 format.

Sources: Ian Jeffrey, Photography: A Concise History (1981).

### Vector display

A cathode-ray tube whose beam draws straight lines from point to point, not a raster of pixels. Lines are sharp at any angle and glow on a black ground.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | 1962 | — | MIT, Cambridge, Massachusetts: Spacewar! runs on the point-plotting display of the PDP-1. | |
| 1 | Video game | 1979 | +17 years | Atari ships Asteroids and Lunar Lander on vector monitors in arcades. | [`vector-display-arcade`](./vector-display-arcade/SKILL.md) |

Used by: [`vector-display-arcade`](./vector-display-arcade/SKILL.md).

- Draw each object as a list of line segments; keep a whole frame under a few thousand segments.
- Keep the ground black; only the lines emit light.
- Use full beam brightness for the player and half for the background.

Sources: [Wikipedia: Vector monitor](https://en.wikipedia.org/wiki/Vector_monitor); [Wikipedia: Spacewar!](https://en.wikipedia.org/wiki/Spacewar!).

### Voxel

A value on a regular 3D grid: the volume version of a pixel. A world of voxels is built, lit and changed cell by cell.

| Step | Domain | Year | Lag | Route | Styles |
|---|---|---|---|---|---|
| Origin | Video game | 1992 | — | NovaLogic, Calabasas, California: Comanche draws its terrain with the Voxel Space engine. | |
| 1 | Video game | 2009 | +17 years | Infiniminer and Minecraft build whole worlds from cube cells. | [`voxel-block-world`](./voxel-block-world/SKILL.md) |

Used by: [`voxel-block-world`](./voxel-block-world/SKILL.md).

- Fix one cell size for the whole world, for example 1 m.
- Keep every surface on the grid; no free rotation.
- Light each cell by the light level of its neighbours.

Sources: [Wikipedia: Voxel](https://en.wikipedia.org/wiki/Voxel); [Wikipedia: Comanche (video game series)](https://en.wikipedia.org/wiki/Comanche_(video_game_series)).

---

Generated by `scripts/compile-skills.ts`. Do not edit this file; change the data and run `npm run build`.
