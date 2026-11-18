// One top navigation for every domain demo. Each demo page loads this file first.
(() => {
  const DOMAINS = [
    ["index.html", "Design"], ["architecture.html", "Architecture"], ["interior.html", "Interior"],
    ["photography.html", "Photography"], ["film.html", "Film and video"], ["painting.html", "Painting"], ["graph.html", "Lineage graph"],
  ];
  const here = location.pathname.split("/").pop() || "index.html";
  const css = `
  .do-nav { display: flex; align-items: center; gap: 4px; padding: 0 12px; min-height: 40px; overflow-x: auto;
    background: #0d0d0f; color: #f4f4f5; font: 13px/1.2 system-ui, sans-serif; border-bottom: 1px solid #2a2a30; scrollbar-width: none; }
  .do-nav b { font-weight: 650; margin-right: 10px; white-space: nowrap; }
  .do-nav a { color: #b4b4bc; text-decoration: none; padding: 12px 10px; white-space: nowrap; border-bottom: 2px solid transparent; }
  .do-nav a:hover { color: #fff; }
  .do-nav a[aria-current="page"] { color: #fff; border-bottom-color: #f4f4f5; }
  .do-nav .gh { margin-left: auto; }
  .do-nav a:focus-visible { outline: 3px solid #6aa8ff; outline-offset: -3px; }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.append(style);
  const nav = document.createElement("nav");
  nav.className = "do-nav";
  nav.setAttribute("aria-label", "Domains");
  nav.innerHTML = `<b>Design Ontology</b>` + DOMAINS.map(([href, name]) =>
    `<a href="${href}"${href === here ? ' aria-current="page"' : ""}>${name}</a>`).join("") +
    `<a class="gh" href="https://github.com/musicalbee/design-ontology">GitHub</a>`;
  const mount = () => document.body.prepend(nav);
  document.body ? mount() : addEventListener("DOMContentLoaded", mount);
})();
