// The visitor counter of the demo (Yandex.Metrika, counter 114366919). nav.js loads this file on each page.
// A page in an iframe (?embed, or inside another demo page) does not count, so one visit counts once.
(() => {
  if (window.top !== window || new URLSearchParams(location.search).has("embed")) return;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (let j = 0; j < document.scripts.length; j++) if (document.scripts[j].src === r) return;
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=114366919", "ym");
  ym(114366919, "init", { ssr: true, webvisor: true, clickmap: true, ecommerce: "dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });
})();
