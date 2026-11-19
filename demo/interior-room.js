// The room: the plug-ins of the interior page (encyclopedia.js).
//   InteriorRoom  — one parametric room, 600 x 450 cm, in plan and in the elevation of the focal wall, with
//                   its composition drawn on top (axis, focal point, thirds, clear routes, light layers), the
//                   colour split and the key numbers.
//   InteriorBoard — the six moodboard tiles of the style, under the preview.
//   InteriorViews — the tabs to the other views of the style (InteriorTabs: moodboard.html, objects.html).
//
//   Encyclopedia.page({ domain: "interior", plugins: [Gallery, InteriorViews, InteriorBoard, InteriorRoom] })
(() => {
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  document.head.insertAdjacentHTML("beforeend", `<style>
  .ir { --overlay: #d6336c; --route: #1971c2; --light: #f08c00; display: grid; gap: 16px; }
  .ir-views { display: grid; gap: 16px; grid-template-columns: 1fr; }
  @media (min-width: 1080px) { .ir-views { grid-template-columns: 1fr 1fr; } }
  .ir svg { display: block; width: 100%; height: auto; }
  .ir svg text { font: 11px system-ui, sans-serif; }
  .ir figure { margin: 0; }
  .ir figcaption { margin-top: 10px; font-size: 14px; color: var(--enc-muted, #474a68); }
  .ir[data-off~="axis"] .ov-axis, .ir[data-off~="focal"] .ov-focal, .ir[data-off~="route"] .ov-route,
  .ir[data-off~="light"] .ov-light, .ir[data-off~="thirds"] .ov-thirds { display: none; }
  .ir .sw { width: 10px; height: 10px; border-radius: 2px; display: inline-block; }
  .ir-bar { display: flex; height: 56px; border-radius: 8px; overflow: hidden; border: 1px solid var(--enc-line, #dfe3ef); }
  .ir-bar > div { display: flex; min-width: 0; position: relative; }
  .ir-bar > div > span { flex: 1; }
  .ir-bar b { position: absolute; left: 8px; bottom: 6px; font-size: 12px; padding: 1px 6px; border-radius: 4px; background: rgb(255 255 255 / .88); color: #1d1d1f; white-space: nowrap; }
  .ir-sw { display: flex; flex-wrap: wrap; gap: 8px 14px; margin-top: 12px; font-size: 13px; }
  .ir-sw span { display: inline-flex; align-items: center; gap: 6px; }
  .ir-sw i { width: 14px; height: 14px; border-radius: 3px; border: 1px solid rgb(0 0 0 / .15); }
  .ir-row { display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr)); }
  .ib-grid { display: grid; gap: 8px; grid-template-columns: repeat(3, 1fr); }
  @media (min-width: 760px) { .ib-grid { grid-template-columns: repeat(6, 1fr); } }
  .ib-grid figure { margin: 0; position: relative; aspect-ratio: 1; overflow: hidden; background: #eceef5; border-radius: 6px; }
  .ib-grid img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .ib-grid figcaption { position: absolute; left: 4px; bottom: 4px; font-size: 12px; padding: 1px 6px; border-radius: 3px; background: rgb(255 255 255 / .9); color: #1d1d1f; }
  .ib-cap { margin: 8px 0 0; font-size: 13px; color: var(--enc-muted, #474a68); }
  .ib-cap a { color: inherit; }
  </style>`);
  const W = 600, D = 450, H = 260;

  // Approximate sRGB of a black body at a colour temperature (Tanner Helland fit). Used only as a faint tint.
  function kelvin(k) {
    const t = k / 100;
    const r = t <= 66 ? 255 : 329.7 * (t - 60) ** -0.1332;
    const g = t <= 66 ? 99.47 * Math.log(t) - 161.12 : 288.12 * (t - 60) ** -0.0755;
    const b = t >= 66 ? 255 : t <= 19 ? 0 : 138.52 * Math.log(t - 10) - 305.04;
    const c = (v) => Math.round(Math.min(255, Math.max(0, v)));
    return `rgb(${c(r)} ${c(g)} ${c(b)})`;
  }
  const pick = (cols, ...roles) => { for (const r of roles) { const c = cols.find((x) => x.role === r); if (c) return c.hex; } return "#cccccc"; };
  const all = (cols, role) => cols.filter((c) => c.role === role).map((c) => c.hex);

  function rect(x, y, w, h, fill, extra = "") { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`; }
  function piece(cx, cy, w, h, fill, rot, rx, label) {
    return `<g transform="translate(${cx} ${cy}) rotate(${rot})"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="#00000055" stroke-width="1.5"/>${label ? `<title>${esc(label)}</title>` : ""}</g>`;
  }

  /** Where the focal point sits, in plan cm. The window is on the left wall. */
  function focalXY(c) {
    const p = c.focal_position;
    switch (c.focal_wall) {
      case "left": case "window": return [0, p * D];
      case "right": return [W, p * D];
      case "centre": return [p * W, D * 0.5];
      default: return [p * W, 0];
    }
  }

  function plan(s, box) {
    const c = s.composition, z = s.zoning, L = s.lighting, cols = s.palette.colours, v = s.vectors;
    const wall = pick(cols, "dominant"), floor = pick(cols, "wood", "dominant"), soft = pick(cols, "secondary");
    const soft2 = all(cols, "secondary")[1] ?? soft, dark = pick(cols, "accent", "metal"), acc = all(cols, "accent");
    // radial counts as bilateral: the group sits on the axis around a centre piece
    const free = c.symmetry === "free", bil = c.symmetry === "bilateral" || c.symmetry === "radial", centre = c.focal_wall === "centre";
    const [fx, fy] = focalXY(c);
    const out = [];

    // shell: floor, walls, window on the left, door on the front wall
    out.push(rect(0, 0, W, D, floor, 'opacity=".55"'));
    if (c.rhythm_module_cm >= 10) for (let x = c.rhythm_module_cm; x < W; x += c.rhythm_module_cm) out.push(`<line x1="${x}" y1="0" x2="${x}" y2="${D}" stroke="#00000014" stroke-width="1"/>`);
    out.push(`<path d="M0 0H${W}V${D}H${W * 0.92}M${W * 0.74} ${D}H0Z" fill="none" stroke="${wall}" stroke-width="22" stroke-linejoin="miter"/>`);
    out.push(`<path d="M0 0H${W}V${D}H${W * 0.92}M${W * 0.74} ${D}H0Z" fill="none" stroke="#00000066" stroke-width="2"/>`);
    out.push(rect(-11, D * 0.22, 22, D * 0.5, "#cfe8ff", 'stroke="#00000066" stroke-width="2"'));
    out.push(`<path d="M${W * 0.74} ${D} A${W * 0.18} ${W * 0.18} 0 0 1 ${W * 0.92} ${D - W * 0.18}" fill="none" stroke="#00000044" stroke-dasharray="4 4"/>`);
    out.push(`<text x="${W * 0.83}" y="${D + 34}" text-anchor="middle" fill="#5d5d66">door</text><text x="-34" y="${D * 0.47}" text-anchor="middle" fill="#5d5d66" transform="rotate(-90 -34 ${D * 0.47})">window</text>`);

    // group centre: on the axis (bilateral), on a third (asymmetric) or loose (free)
    const faceRight = c.focal_wall === "right";
    const gx = faceRight ? W * 0.58 : bil ? W / 2 : free ? W * 0.46 : (c.focal_wall === "back" ? fx : W * 0.42);
    const gy = faceRight ? fy : D * 0.5;
    // a side focal wall turns the group: the seats face the left (window) or the right wall
    const faceLeft = c.focal_wall === "left" || c.focal_wall === "window" || faceRight;
    const side = faceRight ? -1 : 1;
    const sofaW = 190 + v.formality * 18, sofaD = 85 + (5 - v.density) * 3;
    const tW = 100 + v.formality * 8, tD = c.symmetry === "free" ? tW : 60;
    const gap = z.seat_to_table_cm;
    const rugPad = 50 + v.density * 6;
    const rot = (a) => (free ? a : 0);

    // seats face the focal point: a back focal wall puts the sofa on the front side of the group
    const items = [];
    if (!faceLeft) {
      const sy = gy + tD / 2 + gap + sofaD / 2;
      const rTop = gy - tD / 2 - 45, rBot = sy + sofaD / 2 + 15;
      items.push(["rug", gx, (rTop + rBot) / 2, sofaW + rugPad * 2, rBot - rTop, pick(cols, "secondary"), rot(-8), 4]);
      // a centre focal piece takes the place of the table
      if (!centre) items.push(["table", gx, gy, tW, tD, pick(cols, "wood", "accent"), rot(10), free ? tW / 2 : 6]);
      items.push(["sofa", gx, sy, sofaW, sofaD, soft, rot(-18), free ? 40 : 10]);
      const chair = (side) => ["chair", gx + side * (tW / 2 + gap + 40), gy - 10, 75, 78, soft2, rot(side * 25) || (free ? 0 : 0), free ? 37 : 8];
      if (bil) items.push(chair(-1), chair(1));
      else items.push(chair(free ? -1 : (gx > W / 2 ? -1 : 1)));
    } else {
      const sx = gx + side * (tW / 2 + gap + sofaD / 2);
      const rL = gx - side * (tD / 2 + 45), rR = sx + side * (sofaD / 2 + 15);
      items.push(["rug", (rL + rR) / 2, gy, Math.abs(rR - rL), sofaW + rugPad * 2, pick(cols, "secondary"), rot(-8), 4]);
      items.push(["table", gx, gy, tD, tW, pick(cols, "wood", "accent"), rot(10), free ? tW / 2 : 6]);
      items.push(["sofa", sx, gy, sofaD, sofaW, soft, rot(-18), 10]);
      items.push(["chair", gx, gy - tW / 2 - gap - 40, 75, 75, soft2, 0, 8]);
      if (bil) items.push(["chair", gx, gy + tW / 2 + gap + 40, 75, 75, soft2, 0, 8]);
    }
    // wall storage and focal piece; more pieces as density grows
    if (c.focal_wall === "centre") items.push(["focal piece", fx, fy, 60, 60, acc[0] ?? dark, rot(-22), 30]);
    else if (faceRight) items.push(["focal piece", W - 28, fy, 40, 160, acc[0] ?? dark, 0, 2]);
    else if (c.focal_wall === "back") items.push(["focal piece", fx, 28, 160, 40, acc[0] ?? dark, rot(-22), 2]);
    // storage stands on the right wall, or on the back wall when the right wall holds the focal point
    if (v.density >= 2) items.push(faceRight ? ["sideboard", W * 0.25, 30, 170, 45, pick(cols, "wood", "secondary"), 0, 2] : ["sideboard", W - 30, D * 0.55, 45, 170, pick(cols, "wood", "secondary"), 0, 2]);
    // the side table stands at the end of the sofa, away from the back wall
    if (v.density >= 3) items.push(faceLeft ? ["side table", gx + side * (tW / 2 + gap + sofaD / 2), gy + (gy < D / 2 ? 1 : -1) * (sofaW / 2 + 35), 40, 40, acc[1] ?? dark, rot(15), 20] : ["side table", gx - sofaW / 2 - 35, gy + tD / 2 + gap + sofaD / 2, 40, 40, acc[1] ?? dark, rot(15), 20]);
    if (bil && !faceLeft) items.push(["side table", gx + sofaW / 2 + 35, gy + tD / 2 + gap + sofaD / 2, 40, 40, acc[1] ?? dark, 0, 20]);
    if (v.density >= 4) items.push(["plant", 45, D - 45, 50, 50, "#6b8f5a", 0, 25], ["chair", W * 0.2, D * 0.82, 70, 70, acc[2] ?? soft2, rot(30), 35]);
    // the rug is a translucent field, so the pieces on it stay readable
    for (const [n, x, y, w, h, f, r, rx] of items) out.push(piece(x, y, w, h, n === "rug" ? f + "80" : f, r, rx, n));

    // overlays
    const ov = [];
    ov.push(`<g class="ov-thirds" stroke="#868e96" stroke-dasharray="2 6" stroke-width="1.5">${[1, 2].map((i) => `<line x1="${(W * i) / 3}" y1="0" x2="${(W * i) / 3}" y2="${D}"/><line x1="0" y1="${(D * i) / 3}" x2="${W}" y2="${(D * i) / 3}"/>`).join("")}</g>`);
    const axes = [];
    if (c.axis_count >= 1) axes.push(faceLeft ? `<line x1="-40" y1="${gy}" x2="${W + 40}" y2="${gy}"/>` : `<line x1="${gx}" y1="-40" x2="${gx}" y2="${D + 40}"/>`);
    if (c.axis_count >= 2) axes.push(faceLeft ? `<line x1="${gx}" y1="-40" x2="${gx}" y2="${D + 40}"/>` : `<line x1="-40" y1="${gy}" x2="${W + 40}" y2="${gy}"/>`);
    if (c.axis_count >= 3) axes.push(`<line x1="-40" y1="-40" x2="${W + 40}" y2="${D + 40}"/>`);
    ov.push(`<g class="ov-axis" stroke="var(--overlay)" stroke-width="2.5" stroke-dasharray="14 6 3 6">${axes.join("")}</g>`);
    ov.push(`<text class="ov-axis" x="${W - 4}" y="-28" text-anchor="end" fill="var(--overlay)">${c.symmetry} · ${c.axis_count} ${c.axis_count === 1 ? "axis" : "axes"}</text>`);
    ov.push(`<g class="ov-focal"><circle cx="${fx}" cy="${fy}" r="22" fill="none" stroke="var(--overlay)" stroke-width="3"/><circle cx="${fx}" cy="${fy}" r="5" fill="var(--overlay)"/><text x="${fx + (fx > W * 0.7 ? -28 : 28)}" y="${fy + (fy < 30 ? 40 : 4)}" text-anchor="${fx > W * 0.7 ? "end" : "start"}" fill="var(--overlay)" font-weight="650">focal ${c.focal_wall} @ ${c.focal_position}</text></g>`);
    // main route: door to the focal wall, drawn at its clear width
    const ry = faceLeft ? D * 0.12 : D * 0.12;
    const route = faceLeft
      ? `M${W * 0.83} ${D + 10} V${D * 0.88} H${W * 0.12}`
      : `M${W * 0.83} ${D + 10} V${ry + 40} H${W * 0.12}`;
    ov.push(`<g class="ov-route"><path d="${route}" fill="none" stroke="var(--route)" stroke-opacity=".18" stroke-width="${z.main_path_clear_cm}" stroke-linejoin="round"/><path d="${route}" fill="none" stroke="var(--route)" stroke-width="2" stroke-dasharray="6 5"/><text x="${W * 0.83 + 8}" y="${D * 0.7}" fill="var(--route)" font-weight="650">${z.main_path_clear_cm} cm clear</text></g>`);
    ov.push(`<g class="ov-route"><circle cx="${gx}" cy="${gy}" r="${z.conversation_diameter_cm / 2}" fill="none" stroke="var(--route)" stroke-width="1.5" stroke-dasharray="2 4"/><text x="${gx}" y="${gy - z.conversation_diameter_cm / 2 - 6}" text-anchor="middle" fill="var(--route)">conversation ⌀ ${z.conversation_diameter_cm} cm</text></g>`);
    // light layers, one marker per layer type
    const tint = kelvin(L.cct_k);
    const lights = [];
    for (const l of L.layers) {
      if (l.layer === "ambient") lights.push(`<circle cx="${W / 2}" cy="${D / 2}" r="${Math.sqrt(L.ambient_lux) * 9}" fill="url(#glow)"/><text x="${W / 2}" y="${D / 2 + 4}" text-anchor="middle" fill="var(--light)" font-weight="650">ambient ${L.ambient_lux} lx</text>`);
      if (l.layer === "task") lights.push(`<circle cx="${gx - sofaW / 2 - 20}" cy="${faceLeft ? gy + 60 : gy + tD / 2 + gap + 10}" r="${Math.sqrt(L.task_lux) * 3}" fill="url(#glow)"/><circle cx="${gx - sofaW / 2 - 20}" cy="${faceLeft ? gy + 60 : gy + tD / 2 + gap + 10}" r="5" fill="var(--light)"/><text x="${gx - sofaW / 2 - 20}" y="${(faceLeft ? gy + 60 : gy + tD / 2 + gap + 10) - 10}" text-anchor="middle" fill="var(--light)">task ${L.task_lux} lx</text>`);
      if (l.layer === "accent") lights.push(`<path d="M${fx} ${fy} L${fx - 40} ${fy + 90} L${fx + 40} ${fy + 90} Z" fill="var(--light)" opacity=".25" transform="${fy > D * 0.3 || faceLeft ? `rotate(${faceLeft ? -90 : 180} ${fx} ${fy})` : ""}"/><text x="${fx}" y="${fy + 105}" text-anchor="middle" fill="var(--light)">accent ${L.accent_ratio}:1</text>`);
      if (l.layer === "daylight") lights.push(`<path d="M0 ${D * 0.22} L${W * 0.3} ${D * 0.1} L${W * 0.3} ${D * 0.84} L0 ${D * 0.72} Z" fill="#a5d8ff" opacity=".22"/>`);
    }
    ov.push(`<g class="ov-light">${lights.join("")}<text x="0" y="-28" fill="var(--light)" font-weight="650">${L.cct_k} K · evening ${L.cct_evening_k} K · CRI ${L.cri_min}+</text></g>`);

    box.querySelector(".ir-plan").innerHTML = `<defs><radialGradient id="glow"><stop offset="0" stop-color="${tint}" stop-opacity=".9"/><stop offset="1" stop-color="${tint}" stop-opacity="0"/></radialGradient></defs>${out.join("")}${ov.join("")}`;
    box.querySelector(".ir-plan-cap").textContent = `${c.plan_logic} Main route ${z.main_path_clear_cm} cm, secondary ${z.secondary_path_clear_cm} cm, seat to table ${z.seat_to_table_cm} cm.`;
  }

  function elevation(s, box) {
    const c = s.composition, L = s.lighting, o = s.objects, f = s.furniture, cols = s.palette.colours, v = s.vectors;
    const wall = pick(cols, "dominant"), floor = pick(cols, "wood", "dominant"), soft = pick(cols, "secondary");
    const acc = all(cols, "accent"), dark = pick(cols, "accent", "metal");
    const y = (cm) => H - cm; // elevation: y down from the ceiling
    const hang = o.hang_centre_cm; // null: the style hangs no art
    const focusAt = hang ?? 120; // the focal marker sits at eye height when there is no art
    const focalOnWall = !["left", "window"].includes(c.focal_wall);
    const fxp = (focalOnWall ? c.focal_position : 0.5) * W;
    const out = [];
    out.push(rect(0, 0, W, H, wall), rect(0, H, W, 18, floor));
    // the rhythm module along the wall: slats for a small module, panels for a large one
    const m = c.rhythm_module_cm;
    if (m < 10) { for (let x = W * 0.72; x < W * 0.72 + 90; x += m) out.push(rect(x, y(200), m / 2, 200, pick(cols, "wood", "secondary"))); }
    else { for (let x = m; x < W; x += m) out.push(`<line x1="${x}" y1="${y(12)}" x2="${x}" y2="${H}" stroke="#00000030"/>`); out.push(rect(0, y(12), W, 12, "#00000010")); }
    if (v.formality >= 4 && m >= 30) for (let x = 0; x + m <= W; x += m) out.push(rect(x + 8, y(90), m - 16, 70, "none", 'stroke="#00000022" stroke-width="2"'));
    // window on the elevation only when the focal wall is the window wall
    if (c.focal_wall === "window") out.push(rect(W * 0.3, y(230), W * 0.4, 150, "#cfe8ff", 'stroke="#00000055" stroke-width="3"'));
    // sideboard or focal piece under the art
    const seat = f.seat_height_cm;
    if (c.focal_wall === "back" || c.focal_wall === "window") out.push(rect(fxp - 80, y(seat + 30), 160, seat + 30, pick(cols, "wood", "secondary"), 'stroke="#00000044"'));
    if (c.focal_wall === "centre") out.push(rect(fxp - 45, y(190), 90, 190, acc[0] ?? dark, 'stroke="#00000044"'), rect(fxp - 45, y(130), 90, 8, acc[1] ?? dark), rect(fxp - 45, y(70), 90, 8, acc[2] ?? dark));
    // art at the hang centre
    if (hang != null && c.focal_wall !== "window") {
      const aw = 60 + v.ornamentation * 12, ah = aw * 0.75;
      out.push(rect(fxp - aw / 2, y(hang + ah / 2), aw, ah, acc[0] ?? soft, 'stroke="#00000066" stroke-width="3"'));
    }
    // seats seen from the side of the room, at their seat height
    out.push(rect(W * 0.08, y(seat + 30), 120, seat + 30, soft, 'rx="6" stroke="#00000044"'), rect(W * 0.08, y(seat), 120, 6, "#00000018"));
    // pendant
    out.push(`<line x1="${W / 2}" y1="0" x2="${W / 2}" y2="${y(190)}" stroke="#333"/><circle cx="${W / 2}" cy="${y(182)}" r="${12 + v.ornamentation * 2}" fill="${dark}"/>`);

    const ov = [];
    ov.push(`<g class="ov-thirds" stroke="#868e96" stroke-dasharray="2 6" stroke-width="1.5">${[1, 2].map((i) => `<line x1="${(W * i) / 3}" y1="0" x2="${(W * i) / 3}" y2="${H}"/><line x1="0" y1="${(H * i) / 3}" x2="${W}" y2="${(H * i) / 3}"/>`).join("")}</g>`);
    if (c.axis_count >= 1 && c.symmetry !== "free") ov.push(`<line class="ov-axis" x1="${c.symmetry === "bilateral" ? W / 2 : fxp}" y1="-20" x2="${c.symmetry === "bilateral" ? W / 2 : fxp}" y2="${H + 18}" stroke="var(--overlay)" stroke-width="2.5" stroke-dasharray="14 6 3 6"/>`);
    ov.push(`<g class="ov-focal"><circle cx="${fxp}" cy="${y(focusAt)}" r="26" fill="none" stroke="var(--overlay)" stroke-width="3"/><text x="${fxp + 32}" y="${y(focusAt) - 18}" fill="var(--overlay)" font-weight="650">focal</text></g>`);
    if (hang != null) ov.push(`<g class="ov-focal"><line x1="-50" y1="${y(hang)}" x2="${W}" y2="${y(hang)}" stroke="var(--overlay)" stroke-dasharray="3 4"/><text x="-8" y="${y(hang) + 4}" text-anchor="end" fill="var(--overlay)">${hang}</text></g>`);
    ov.push(`<g class="ov-route"><line x1="-50" y1="${y(seat)}" x2="${W * 0.08}" y2="${y(seat)}" stroke="var(--route)" stroke-dasharray="3 4"/><text x="-8" y="${y(seat) + 4}" text-anchor="end" fill="var(--route)">seat ${seat}</text></g>`);
    const tint = kelvin(L.cct_k);
    ov.push(`<g class="ov-light" style="mix-blend-mode:multiply"><ellipse cx="${W / 2}" cy="${y(150)}" rx="${Math.sqrt(L.ambient_lux) * 18}" ry="${Math.sqrt(L.ambient_lux) * 10}" fill="url(#eglow)"/><path d="M${fxp - 20} -2 L${fxp - 20 - 9 * L.accent_ratio} ${y(focusAt) + 60} L${fxp + 20 + 9 * L.accent_ratio} ${y(focusAt) + 60} L${fxp + 20} -2 Z" fill="${tint}" opacity="${Math.min(0.55, 0.08 * L.accent_ratio)}"/></g>`);
    ov.push(`<text class="ov-light" x="${W}" y="-12" text-anchor="end" fill="var(--light)" font-weight="650">accent ${L.accent_ratio}:1 on the focal point</text>`);
    out.push(`<text x="-8" y="${y(0) + 4}" text-anchor="end" fill="#5d5d66">0 cm</text><text x="-8" y="${y(H) + 10}" text-anchor="end" fill="#5d5d66">${H} cm</text>`);
    box.querySelector(".ir-elev").innerHTML = `<defs><radialGradient id="eglow"><stop offset="0" stop-color="${tint}" stop-opacity=".7"/><stop offset="1" stop-color="${tint}" stop-opacity="0"/></radialGradient></defs>${out.join("")}${ov.join("")}`;
    box.querySelector(".ir-elev-cap").textContent = `${c.focal_point} ${hang == null ? "No hung art" : `Art centre at ${hang} cm`}, seat at ${seat} cm, rhythm module ${m} cm, ${c.depth_layers} depth layers.`;
  }

  function palette(s, box) {
    const p = s.palette, cols = p.colours;
    const groups = [
      ["Dominant", p.dominant_pct, cols.filter((c) => c.role === "dominant")],
      ["Secondary", p.secondary_pct, cols.filter((c) => c.role === "secondary" || c.role === "wood")],
      ["Accent", p.accent_pct, cols.filter((c) => c.role === "accent" || c.role === "metal")],
    ];
    box.querySelector(".ir-bar").innerHTML = groups.map(([n, pct, cs]) => `<div style="flex:${pct}" title="${n} ${pct}%">${cs.map((c) => `<span style="background:${c.hex}"></span>`).join("")}<b>${n} ${pct}%</b></div>`).join("");
    box.querySelector(".ir-bar").setAttribute("aria-label", `Colour split ${p.dominant_pct}/${p.secondary_pct}/${p.accent_pct}`);
    box.querySelector(".ir-sw").innerHTML = cols.map((c) => `<span><i style="background:${c.hex}"></i>${esc(c.name)} <code>${c.hex}</code> · ${esc(c.surface)}</span>`).join("");
  }

  function facts(s) {
    const L = s.lighting, z = s.zoning, c = s.composition;
    const f = [
      ["Ambient", `${L.ambient_lux} lx`], ["Task", `${L.task_lux} lx`], ["Accent", `${L.accent_ratio}:1`],
      ["Colour temp.", `${L.cct_k} K`], ["Evening", `${L.cct_evening_k} K`], ["CRI", `${L.cri_min}+`],
      ["Main route", `${z.main_path_clear_cm} cm`], ["Seat height", `${s.furniture.seat_height_cm} cm`],
      ["Rhythm module", `${c.rhythm_module_cm} cm`], ["Floor covered", `${z.floor_coverage_pct}%`],
      ["Wall covered", `${z.wall_coverage_pct}%`], ["Per surface", `≤ ${s.objects.max_per_surface}`],
    ];
    return `<dl class="enc-facts">${f.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`;
  }

  let off = new Set();
  window.InteriorRoom = {
    id: "room", label: "Plan and elevation", at: "top",
    lede: "One room, 600 x 450 cm, built from the numbers in the style record. A sketch, not a picture of a real room.",
    render(el, s) {
      if (!el.querySelector(".ir")) {
        el.innerHTML = `<div class="ir">
          <div class="enc-toggles" role="group" aria-label="Overlays">
            <label><input type="checkbox" data-ov="axis" checked><span class="sw" style="background:var(--overlay)"></span>Axis and symmetry</label>
            <label><input type="checkbox" data-ov="focal" checked><span class="sw" style="background:var(--overlay)"></span>Focal point</label>
            <label><input type="checkbox" data-ov="thirds" checked><span class="sw" style="background:#868e96"></span>Thirds</label>
            <label><input type="checkbox" data-ov="route" checked><span class="sw" style="background:var(--route)"></span>Clear routes</label>
            <label><input type="checkbox" data-ov="light" checked><span class="sw" style="background:var(--light)"></span>Light layers</label>
          </div>
          <div class="ir-views">
            <figure class="enc-card"><h3>Plan, 600 x 450 cm</h3><svg class="ir-plan" viewBox="-60 -60 720 580" role="img" aria-label="Plan of the room"></svg><figcaption class="ir-plan-cap"></figcaption></figure>
            <figure class="enc-card"><h3>Elevation of the focal wall</h3><svg class="ir-elev" viewBox="-60 -30 720 340" role="img" aria-label="Elevation of the focal wall"></svg><figcaption class="ir-elev-cap"></figcaption></figure>
          </div>
          <div class="ir-row">
            <div class="enc-card"><h3>Colour split</h3><div class="ir-bar" role="img"></div><div class="ir-sw"></div></div>
            <div class="enc-card"><h3>Key numbers</h3><div class="ir-n"></div></div>
            <div class="enc-card"><h3>Light layers</h3><div class="enc-body"><div class="enc-scroll"><table><thead><tr><th>Layer</th><th>Source</th><th>Position</th></tr></thead><tbody class="ir-l"></tbody></table></div></div></div>
          </div></div>`;
        const ir = el.querySelector(".ir");
        ir.addEventListener("change", (e) => {
          const b = e.target.closest("[data-ov]");
          if (!b) return;
          b.checked ? off.delete(b.dataset.ov) : off.add(b.dataset.ov);
          ir.dataset.off = [...off].join(" ");
        });
      }
      const box = el.querySelector(".ir");
      plan(s, box); elevation(s, box); palette(s, box);
      box.querySelector(".ir-n").innerHTML = facts(s);
      box.querySelector(".ir-l").innerHTML = s.lighting.layers.map((l) => `<tr><td>${esc(l.layer)}</td><td>${esc(l.source)}</td><td>${esc(l.position)}</td></tr>`).join("");
    },
  };

  // The six moodboard tiles of the style (room, materials, furniture, textiles, light, objects).
  let boards = null;
  window.InteriorBoard = {
    id: "board", label: "Moodboard", at: "hero",
    load: (ctx) => { boards = ctx.json("moodboards/interior/manifest.json").then((m) => m || { tiles: [], boards: {} }); },
    render(el, s, ctx) {
      boards.then((m) => {
        if (ctx.current() !== s.id) return;
        const b = m.boards?.[s.id] ?? {};
        const tiles = (m.tiles ?? []).filter((t) => b[t.id]);
        if (!tiles.length) { el.innerHTML = ""; return; }
        const r = b[tiles[0].id];
        el.innerHTML = `<section class="enc-card" aria-label="Moodboard"><div class="ib-grid">${tiles.map((t) => `<figure><img src="moodboards/interior/${esc(b[t.id].file)}" alt="${esc(t.label)}: ${esc(b[t.id].prompt)}" loading="lazy" decoding="async"><figcaption>${esc(t.label)}</figcaption></figure>`).join("")}</div>
          <p class="ib-cap">Moodboard: ${tiles.length} generated tiles, not real rooms. ${esc(r.model)}, ${esc(r.licence)}, seed ${esc(r.seed)}. <a href="moodboard.html#${esc(s.id)}">Open the board with the palette split</a>.</p></section>`;
      });
    },
  };

  window.InteriorViews = {
    id: "views", label: "Views", at: "header",
    render(el, s) {
      if (!el.firstChild) el.innerHTML = InteriorTabs.tabs("room");
      InteriorTabs.set(s.id);
    },
  };
})();
