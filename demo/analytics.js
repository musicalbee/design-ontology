// The visitor analytics of the demo: PostHog, EU cloud (project "design-ontology demo"), and a consent banner.
// nav.js loads this file on each page. A page in an iframe (?embed, or inside another demo page) does not count.
//
// Consent:
//   no choice / "Decline"  PostHog keeps its id in memory only: no cookie, no localStorage, no session replay.
//                          Each page load is a new anonymous visitor. IP addresses are anonymised in the project.
//   "Accept"               PostHog stores its id (localStorage + a first-party cookie), so a visit is one journey,
//                          and the session replay can start (see below).
// The choice itself is kept in localStorage "do-consent" ("yes" or "no"). "Privacy" in the top bar, or ?privacy
// in the URL, shows the banner again.
//
// Key indicators (custom events; UTM parameters, referrer, page views, page leave and scroll depth come from PostHog):
//   style_view  a style opens by its deep link (#id or ?style=id), or the visitor steps to another style
//   repo_click  a link to the GitHub repository (the step before a star)
//   skill_open  a link to a SKILL.md, a tokens.css or a raw skill file
//   skill_copy  a copy button (an install command, a skill id, a moodboard)
//
// Session replay is on demand: it is off when a page loads, and it starts only after "Accept" and then only for an
// engaged visitor (repo_click, skill_open, skill_copy, or a step to another style), or when the URL has ?replay.
// Once started, it continues on the next demo pages of the same tab (sessionStorage "do-replay").
(() => {
  if (window.top !== window || new URLSearchParams(location.search).has("embed")) return;

  const KEY = "phc_BGbuY5G9YAHZrfQ74qGcbquEnPU3H6bryMKhMi7K4noJ"; // a public project key, write-only
  const HOST = "https://eu.i.posthog.com";
  const local = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
  const tab = { get: (k) => { try { return sessionStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} } };
  const params = new URLSearchParams(location.search);
  const consent = () => local.get("do-consent");

  // Calls before the library loads wait in a queue.
  const queue = [];
  let ph = null;
  const call = (fn, ...args) => (ph ? ph[fn](...args) : queue.push([fn, args]));

  const page = location.pathname.replace(/^.*\/demo\//, "") || "index.html";
  const event = (name, props = {}) => { call("capture", name, { page, ...props }); if (name !== "style_view" || !props.landing) engaged(); };

  let styles = 0, steps = 0; // all style views; the ones the visitor made
  const replay = () => {
    if (consent() !== "yes") return;
    tab.set("do-replay", "1");
    call("startSessionRecording");
  };
  const engaged = () => { if (consent() === "yes" && !tab.get("do-replay")) replay(); };

  const script = document.createElement("script");
  script.src = "https://eu-assets.i.posthog.com/static/array.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.onload = () => {
    window.posthog.init(KEY, {
      api_host: HOST,
      ui_host: "https://eu.posthog.com",
      defaults: "2025-05-24", // page views on history changes, page leave with scroll depth
      person_profiles: "identified_only",
      persistence: consent() === "yes" ? "localStorage+cookie" : "memory",
      disable_session_recording: true, // on demand: startSessionRecording() only
      session_recording: { maskAllInputs: true },
      disable_surveys: true,
      loaded: (p) => {
        ph = p;
        p.register({ demo_page: page });
        for (const [fn, args] of queue.splice(0)) p[fn](...args);
        if (consent() === "yes" && (tab.get("do-replay") || params.has("replay"))) replay();
      },
    });
  };
  document.head.append(script);

  addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
    if (!a) return;
    const href = a.href;
    if (/SKILL\.md|tokens\.css|raw\.githubusercontent\.com\/musicalbee\/design-ontology|\/skills\//.test(href)) event("skill_open", { href });
    else if (/github\.com\/musicalbee\/design-ontology/.test(href)) event("repo_click", { href });
  }, true);

  const write = navigator.clipboard?.writeText?.bind(navigator.clipboard);
  if (write) navigator.clipboard.writeText = (text) => { event("skill_copy", { chars: String(text).length }); return write(text); };

  // A style change before the first click or key press is the page itself (an unknown id falls back to the first
  // style), so it still counts as the landing style, not as a step by the visitor.
  let seen = "", acted = false;
  for (const t of ["pointerdown", "keydown"]) addEventListener(t, () => { acted = true; }, { capture: true, once: true });
  const style = () => {
    const id = location.hash.slice(1) || params.get("style") || "";
    if (!/^[a-z0-9-]+$/.test(id) || id === seen) return;
    seen = id;
    styles += 1;
    if (acted) steps += 1;
    event("style_view", { style: id, landing: !acted, nth: styles });
  };
  for (const k of ["pushState", "replaceState"]) {
    const orig = history[k].bind(history);
    history[k] = (...args) => { const r = orig(...args); style(); return r; };
  }
  addEventListener("hashchange", () => style());
  style();

  // The banner.
  const css = `
  .do-consent { position: fixed; z-index: 2000; left: 16px; right: 16px; bottom: 16px; max-width: 560px; margin: 0 auto;
    display: flex; flex-wrap: wrap; align-items: center; gap: 10px 16px; padding: 14px 16px; border-radius: 16px;
    background: #FFFFFF; color: #1F1F45; border: 1px solid #DEE3F2; box-shadow: 0 18px 44px rgba(31, 31, 69, .14);
    font: 14px/1.4 "Onest", "Helvetica Neue", Arial, sans-serif; letter-spacing: 0; text-transform: none; }
  .do-consent p { flex: 1 1 260px; margin: 0; }
  .do-consent a { color: #264FCC; }
  .do-consent div { display: flex; gap: 8px; }
  .do-consent button { font: inherit; cursor: pointer; padding: 7px 16px; border-radius: 999px; border: 1px solid #7F87AE; background: #FFFFFF; color: #1F1F45; }
  .do-consent button.do-yes { background: #264FCC; border-color: #264FCC; color: #FFFFFF; }
  .do-consent button:focus-visible { outline: 3px solid #2589FF; outline-offset: 3px; }
  @media (prefers-color-scheme: dark) { .do-consent { background: #1B1C36; color: #E8EAF6; border-color: #34365C; }
    .do-consent a { color: #9DB4FF; } .do-consent button { background: transparent; color: #E8EAF6; border-color: #6C7099; } }
  .do-privacy { background: none; border: 0; cursor: pointer; }`;
  const banner = () => {
    if (document.querySelector(".do-consent")) return;
    const el = document.createElement("section");
    el.className = "do-consent";
    el.setAttribute("aria-label", "Privacy choice");
    el.innerHTML = `<p>This demo counts visits without cookies. If you accept, PostHog (EU) keeps an id in your browser and can record this session, so we see which styles people use. <a href="https://posthog.com/privacy" target="_blank" rel="noopener">PostHog privacy</a></p>` +
      `<div><button type="button" class="do-no">Decline</button><button type="button" class="do-yes">Accept</button></div>`;
    el.addEventListener("click", (e) => {
      const yes = e.target.closest(".do-yes"), no = e.target.closest(".do-no");
      if (!yes && !no) return;
      local.set("do-consent", yes ? "yes" : "no");
      el.remove();
      if (yes) {
        call("set_config", { persistence: "localStorage+cookie" });
        call("capture", "consent_given", { page });
        if (params.has("replay") || steps > 0) replay();
      } else {
        call("stopSessionRecording");
        call("set_config", { persistence: "memory" });
        try { sessionStorage.removeItem("do-replay"); } catch {}
        // A visitor who accepted before and now declines: remove what PostHog stored.
        try { for (const k of Object.keys(localStorage)) if (k.startsWith("ph_")) localStorage.removeItem(k); } catch {}
        for (const c of document.cookie.split(";")) {
          const n = c.split("=")[0].trim();
          if (n.startsWith("ph_")) document.cookie = `${n}=; Max-Age=0; path=/`;
        }
      }
    });
    document.body.append(el);
    el.querySelector(".do-yes").focus({ preventScroll: true });
  };
  const ready = () => {
    document.head.append(Object.assign(document.createElement("style"), { textContent: css }));
    if (!consent() || params.has("privacy")) banner();
    const gh = document.querySelector(".do-bar .do-gh");
    if (gh) gh.after(Object.assign(document.createElement("button"), { className: "do-gh do-privacy", type: "button", textContent: "Privacy", onclick: banner }));
  };
  if (document.body && document.querySelector(".do-bar")) ready();
  else addEventListener("DOMContentLoaded", ready);
})();
