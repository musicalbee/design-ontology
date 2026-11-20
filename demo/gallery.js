// Gallery: the preview plug-in of the encyclopedia page (encyclopedia.js), for every domain.
// It reads demo/previews/<domain>/manifest.json. A preview with "frames" is a set: a moodboard
// (photography, one frame for each typical subject of the style) or a showreel (film, one frame for
// each shot of the shot list, cut at the rhythm of the shot lengths). A preview with no frames is one
// picture: a generated image, a specimen, a press proof or a board drawn by code. A style with no
// preview shows the bands of its palette.
//
//   Encyclopedia.page({ domain, plugins: [Gallery, …] })
window.Gallery = (() => {
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  document.head.insertAdjacentHTML("beforeend", `<style>
  .g-shot { aspect-ratio: 3 / 2; width: 100%; border-radius: 8px; overflow: hidden; background: #eceef5; display: grid; }
  .g-shot > img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .g-shot.tall { background: #111; grid-template-rows: minmax(0, 1fr); max-height: 78vh; }
  .g-shot.tall > img { object-fit: contain; }
  .g-shot .ph { display: flex; }
  .g-shot .ph span { flex: 1; }
  .g-shot.set { aspect-ratio: auto; background: none; overflow: visible; }
  .g-board { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 240px), 1fr)); gap: 10px; }
  .g-board figure { margin: 0; }
  .g-board img { width: 100%; height: auto; aspect-ratio: 3 / 2; object-fit: cover; border-radius: 6px; display: block; }
  .g-board figcaption { margin-top: 4px; font-size: 13px; color: var(--enc-muted, #474a68); }
  .g-reel .screen { position: relative; aspect-ratio: 3 / 2; background: #111; border-radius: 8px; overflow: hidden; }
  .g-reel .screen img { width: 100%; height: 100%; object-fit: contain; display: block; }
  .g-reel .tc { position: absolute; left: 10px; bottom: 10px; font: 12.5px/1.3 ui-monospace, monospace; color: #fff;
    background: rgb(0 0 0 / .62); padding: 4px 8px; border-radius: 4px; }
  .g-reel .bar { display: flex; gap: 8px; align-items: stretch; margin-top: 10px; }
  .g-reel .play { flex: none; width: 46px; border: 1px solid var(--enc-line, #dfe3ef); border-radius: 8px; background: #fff; cursor: pointer; font-size: 16px; color: inherit; }
  .g-reel .strip { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(104px, 1fr); gap: 6px; overflow-x: auto; flex: 1; }
  .g-reel .strip button { padding: 0; border: 2px solid transparent; border-radius: 6px; background: #fff; cursor: pointer; text-align: left; font: inherit; color: inherit; }
  .g-reel .strip button[aria-current="true"] { border-color: var(--enc-accent, #264fcc); }
  .g-reel .strip img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; display: block; border-radius: 4px 4px 0 0; }
  .g-reel .strip span { display: block; font-size: 12px; line-height: 1.35; padding: 4px 6px; color: var(--enc-muted, #474a68); }
  .g-swap { margin-left: 6px; padding: 3px 12px; border: 1px solid var(--enc-line-strong, #b9bfd6); border-radius: 999px; background: #fff; font: inherit; font-size: 13px; cursor: pointer; color: inherit; }
  </style>`);

  const still = matchMedia("(prefers-reduced-motion: reduce)");
  let DOMAIN, previews = {}, proofs = {}, reel = null;
  const src = (f) => `previews/${DOMAIN}/${esc(f.file)}`;
  const credit = (p) => `${p.model} (${p.licence}), seed ${p.seed}, ${p.steps} steps.`;

  // A moodboard: the same light, lens and grade on different subjects. That is what makes it a style, not a scene.
  function board(box, cap, s, p) {
    box.innerHTML = `<div class="g-board">${p.frames.map((f) =>
      `<figure><img src="${src(f)}" alt="${esc(`${s.name}: ${f.label}`)}" loading="lazy"><figcaption>${esc(f.label)}</figcaption></figure>`).join("")}</div>`;
    cap.textContent = `Moodboard: ${p.frames.length} generated frames, not real works. One frame for each typical subject of the style, with the same light, lens and grade words. ${credit(p)}`;
  }

  // A showreel: hard cuts through the shot list. Each shot holds for a quarter of its length in the record
  // (700 ms to 4 s), so a slow style cuts slowly and a fast style cuts fast.
  function showreel(box, cap, s, p) {
    const F = p.frames, hold = (f) => Math.min(4000, Math.max(700, (f.seconds || 3) * 250));
    F.forEach((f) => { new Image().src = src(f); });
    box.innerHTML = `<div class="g-reel"><div class="screen"><img class="r-img" alt=""><span class="tc"></span></div>
      <div class="bar"><button class="play" type="button"></button>
      <div class="strip">${F.map((f, i) => `<button type="button" data-shot="${i}" aria-label="Shot ${i + 1}: ${esc(f.label)}"><img src="${src(f)}" alt="" data-nozoom="1"><span>${i + 1}. ${esc(f.label)}<br>${esc([f.size, f.lens, f.seconds && f.seconds + " s"].filter(Boolean).join(" · "))}</span></button>`).join("")}</div></div></div>`;
    const img = box.querySelector(".r-img"), tc = box.querySelector(".tc"), play = box.querySelector(".play");
    const r = reel = { i: 0, playing: !still.matches, t: 0 };
    const cut = (i) => {
      clearTimeout(r.t);
      if (reel !== r) return;
      r.i = (i + F.length) % F.length;
      const f = F[r.i];
      img.src = src(f);
      img.alt = `${s.name}, shot ${r.i + 1}: ${f.label}`;
      tc.textContent = `${r.i + 1}/${F.length} · ${[f.size, f.lens, f.movement].filter(Boolean).join(" · ")}`;
      for (const b of box.querySelectorAll("[data-shot]")) b.setAttribute("aria-current", b.dataset.shot == r.i);
      if (r.playing) r.t = setTimeout(() => cut(r.i + 1), hold(f));
    };
    const mark = () => { play.textContent = r.playing ? "❚❚" : "▶"; play.setAttribute("aria-label", r.playing ? "Pause the showreel" : "Play the showreel"); };
    play.onclick = () => { r.playing = !r.playing; mark(); cut(r.i); };
    box.querySelectorAll("[data-shot]").forEach((b) => (b.onclick = () => { r.playing = false; mark(); cut(+b.dataset.shot); }));
    mark(); cut(0);
    cap.textContent = `Showreel: ${F.length} generated stills, not a real film. One frame for each shot of the shot list, cut at the rhythm of the shot lengths${still.matches ? " (paused: reduced motion)" : ""}. ${credit(p)}`;
  }

  const CAPTION = {
    specimen: (p) => `Specimen of ${p.font} (${p.licence}), drawn from the font outlines. No image model.`,
    "press-proof": (p) => `Press proof drawn by code from the process rules of the style. No image model. Subject: ${p.subject}.`,
    "plate-plan": () => "Plate plan drawn by code from the rules of the style and the cuisine vocabulary. No image model. A plan, not a recipe: each element is one primary ingredient, and the time line gives where and when it began.",
    "swatch-board": () => "Swatch board drawn by code from the fabric rules of the style and the fabric vocabulary. No image model. The structure of each cloth is enlarged.",
    "tile-board": () => "Glaze test tiles drawn by code from the clay and glaze rules of the style and the ceramics vocabulary. No image model. Each tile is a body, a glaze and a decoration; the surface is enlarged.",
  };

  // Print: the generated preview first; the press proof drawn by code is a second view of the same style.
  function shot(el, s, found, asProof = false) {
    el.innerHTML = `<div class="g-shot"></div><figcaption></figcaption>`;
    const box = el.firstChild, cap = el.lastChild;
    const p = asProof || !previews[s.id] ? proofs[s.id] ?? previews[s.id] : previews[s.id];
    if (reel) { clearTimeout(reel.t); reel = null; }
    box.classList.toggle("set", !!p?.frames);
    box.classList.toggle("tall", !!p && !p.frames && p.height > p.width);
    if (p?.frames) (p.kind === "reel" ? showreel : board)(box, cap, s, p);
    else if (p) {
      box.innerHTML = `<img src="previews/${DOMAIN}/${esc(p.file)}" fetchpriority="high" decoding="async" alt="${esc(`${s.name}: ${p.subject ?? "generated preview"}`)}">`;
      cap.textContent = CAPTION[p.kind]?.(p) ?? `Generated preview, not a real work. ${credit(p)}${p.subject ? ` Subject: ${p.subject}.` : ""}${p.wordmark ? ` Wordmark "${p.wordmark.brand}"${p.wordmark.fictional ? " (a fictional brand)" : ""} set in ${p.wordmark.font} by ${p.wordmark.maker} (${p.wordmark.licence}).` : ""}`;
      if (proofs[s.id] && previews[s.id]) {
        cap.insertAdjacentHTML("beforeend", ` <button type="button" class="g-swap">${asProof ? "Show the generated print" : "Show the press proof"}</button>`);
        cap.querySelector(".g-swap").onclick = () => shot(el, s, found, !asProof);
      }
    } else {
      const cols = found.hex.slice(0, 8);
      box.innerHTML = `<div class="ph">${cols.map((c) => `<span style="background:${esc(c.hex)}"></span>`).join("")}</div>`;
      cap.textContent = cols.length ? "No preview image yet. The bands are the palette of the style." : "No preview image yet.";
    }
  }

  return {
    id: "preview", label: "Preview", at: "preview",
    load: (ctx) => { DOMAIN = ctx.id; return ctx.json(`previews/${DOMAIN}/manifest.json`).then((m) => { previews = m?.images || {}; proofs = m?.proofs || {}; }); },
    render: (el, s, ctx) => shot(el, s, ctx.walk(s)),
  };
})();
