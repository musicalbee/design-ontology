# Changelog

Release tags are `vX.Y.Z`. `package.json` carries a build counter bumped by a git hook; it is not the release number.

## v0.4.0 — 2026-11-22

Search and language release. The ontology is now crawlable page by page, in three languages.

- **543 styles in 16 domains**, each with its own canonical page: `style/<id>.html`.
- **Russian and Norwegian (Bokmål)**: every style is translated (name, summary, thesis, principles, anti-patterns, palette names), at `ru/style/<id>.html` and `no/style/<id>.html`. Language hubs at `style/`, `ru/`, `no/`.
- **Language switcher** (EN · RU · NO) in the demo bar. On a style it opens that style's page in the chosen language.
- **hreflang** alternates on every page and in the sitemap, `x-default` is English.
- **sitemap.xml**: 1 663 URLs, with `xhtml:link` alternates. Submitted to Google, Bing and Yandex.
- **Open Graph card for every style**: `assets/og/style/<id>.jpg`, 1200×630, name, summary and a preview or the palette.
- JSON-LD `Article` with `inLanguage` on every style page; `robots.txt` with a sitemap line; `llms.txt`.

Code is MIT, data is CC BY 4.0.

## v0.3.0

README counts come from the data. See the git history for earlier changes.
