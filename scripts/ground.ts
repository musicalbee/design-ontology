/**
 * The ground of a style: the field behind the first screen of a page.
 * Each kind is a stack of CSS gradients that reads the colour tokens of the style, so one recipe
 * gives a different ground for each palette. The compiler writes the result as the --ground token.
 * A ground does not keep any area quiet: shapes and textures can run behind the copy.
 * The copy is legible because it stands on a backing, not on the ground. Put the class `ground-copy`
 * on each text block of the first screen: it gives the block the field colour (--color-bg) and a soft
 * edge. The compiler checks --color-on-bg and the muted text against --color-bg (4.5:1), so that check
 * also covers the copy on a ground.
 */
import { contrast, flat } from "./pack.js";

export const GROUND_KINDS = [
  "paper", "frame", "primaries", "mondrian", "wedge", "sun", "swiss-grid", "halftone", "rays", "swirl",
  "horizon", "scanlines", "pixel", "aurora", "orbs", "confetti", "soft", "linen", "pinstripe", "dot-grid",
  "xerox", "blocks", "tiles", "sky", "bubbles", "rules", "grille", "raw",
] as const;
export type GroundKind = (typeof GROUND_KINDS)[number];

const v = (n: string) => `var(--color-${n})`;
/** A token colour at a share of its strength. */
const t = (n: string, pct: number) => `color-mix(in oklab, var(--color-${n}) ${pct}%, transparent)`;
const svg = (body: string, w = 220, h = 220) =>
  `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>${body}</svg>`)}")`;
/** Film grain. Dark grain on a light field, light grain on a dark field. */
const grain = (dark: boolean, strength = 1) =>
  svg(
    `<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 ${dark ? 1 : 0} 0 0 0 0 ${dark ? 1 : 0} 0 0 0 0 ${dark ? 1 : 0} ${(0.22 * strength).toFixed(2)} 0 0 0 0'/></filter><rect width='100%' height='100%' filter='url(#n)'/>`,
  ) + " 0 0 / 220px 220px repeat";
/** A block of one colour at a place. */
const box = (c: string, x: string, y: string, w: string, h: string) => `linear-gradient(${c}, ${c}) ${x} ${y} / ${w} ${h} no-repeat`;
/** A disc with a hard edge. */
const disc = (c: string, at: string, r: string) => `radial-gradient(circle at ${at}, ${c} 0 ${r}, transparent calc(${r} + 1px))`;
/** A quiet zone for the copy: the field colour on the left, open on the right. */
const hush = (from = 30, to = 62, angle = 100) => `linear-gradient(${angle}deg, ${v("bg")} ${from}%, transparent ${to}%)`;

export function groundCss(kind: GroundKind, css: Record<string, string>): string {
  const bg = flat(css["--color-bg"]);
  const dark = contrast(bg, "#000000") < contrast(bg, "#FFFFFF");
  const B = v("bg");
  const H = css["--color-highlight"] ? "highlight" : "primary";
  const layers: Record<GroundKind, string[]> = {
    paper: [
      `radial-gradient(130% 95% at 50% 0%, transparent 58%, ${t("on-bg", 9)})`,
      grain(dark),
      `radial-gradient(circle at 90% 112%, ${t("accent", 34)} 0 34vmin, transparent calc(34vmin + 1px))`,
      `radial-gradient(circle at 90% 112%, transparent 0 40vmin, ${t("primary", 30)} 40vmin calc(40vmin + 2px), transparent calc(40vmin + 2px))`,
      `radial-gradient(55% 60% at 88% 18%, ${t("accent", 22)}, transparent 70%)`,
      `radial-gradient(45% 50% at 70% 95%, ${t("primary", 16)}, transparent 70%)`,
      B,
    ],
    frame: [
      box(v("primary"), "22px", "22px", "calc(100% - 44px)", "2px"),
      box(v("primary"), "22px", "calc(100% - 22px)", "calc(100% - 44px)", "2px"),
      box(v("primary"), "22px", "22px", "2px", "calc(100% - 44px)"),
      box(v("primary"), "calc(100% - 22px)", "22px", "2px", "calc(100% - 44px)"),
      box(v("accent"), "32px", "32px", "calc(100% - 64px)", "1px"),
      box(v("accent"), "32px", "calc(100% - 32px)", "calc(100% - 64px)", "1px"),
      box(v("accent"), "32px", "32px", "1px", "calc(100% - 64px)"),
      box(v("accent"), "calc(100% - 32px)", "32px", "1px", "calc(100% - 64px)"),
      `radial-gradient(60% 70% at 85% 50%, ${t("accent", 18)}, transparent 70%)`,
      grain(dark),
      B,
    ],
    primaries: [
      disc(v("accent"), "100% 0%", "26vmin"),
      `linear-gradient(-28deg, transparent calc(50% - .8vmin), ${v("on-bg")} calc(50% - .8vmin) calc(50% + .8vmin), transparent calc(50% + .8vmin)) 100% 100% / 70vmin 40vmin no-repeat`,
      disc(v("primary"), "86% 82%", "24vmin"),
      `linear-gradient(to top right, ${v(H)} 50%, transparent 50.5%) 58% 100% / 22vmin 22vmin no-repeat`,
      grain(dark, 0.6),
      B,
    ],
    mondrian: [
      box(v("on-bg"), "62%", "0", "1.2vmin", "100%"),
      box(v("on-bg"), "88%", "0", "1.2vmin", "100%"),
      box(v("on-bg"), "100%", "34%", "calc(38% + 1vmin)", "1.2vmin"),
      box(v("on-bg"), "100%", "78%", "calc(38% + 1vmin)", "1.2vmin"),
      box(v("accent"), "100%", "0", "12%", "34%"),
      box(v("primary"), "75%", "100%", "26%", "22%"),
      box(v(H), "100%", "100%", "12%", "22%"),
      B,
    ],
    wedge: [
      `linear-gradient(118deg, transparent 64%, ${v("on-bg")} 64% 65.6%, transparent 65.6%)`,
      `conic-gradient(from 196deg at 100% 0%, ${v("primary")} 0 34deg, transparent 0)`,
      disc(v("on-bg"), "92% 86%", "7vmin"),
      grain(dark, 0.9),
      B,
    ],
    sun: [
      `repeating-radial-gradient(circle at 78% 42%, transparent 0 33vmin, ${t("accent", 30)} 33vmin calc(33vmin + 1px), transparent calc(33vmin + 1px) 37vmin)`,
      disc(v("primary"), "78% 42%", "28vmin"),
      grain(dark, 0.5),
      B,
    ],
    "swiss-grid": [
      box(v("accent"), "100%", "0", "8.33%", "38%"),
      box(v("on-bg"), "0", "100%", "100%", "3px"),
      `repeating-linear-gradient(90deg, ${t("on-bg", 9)} 0 1px, transparent 1px 8.333%)`,
      `repeating-linear-gradient(0deg, ${t("on-bg", 5)} 0 1px, transparent 1px 24px)`,
      B,
    ],
    halftone: [
      hush(28, 60),
      `radial-gradient(circle, ${v("accent")} 34%, transparent 36%) 0 0 / 22px 22px`,
      `repeating-conic-gradient(from 0deg at 84% 30%, ${t(H, 70)} 0 9deg, transparent 9deg 18deg)`,
      B,
    ],
    rays: [
      `radial-gradient(70% 60% at 50% 105%, transparent 30%, ${B} 75%)`,
      `repeating-conic-gradient(from -90deg at 50% 108%, ${t("primary", 34)} 0 4deg, transparent 4deg 9deg)`,
      `repeating-radial-gradient(circle at 50% 108%, transparent 0 18vmin, ${t("primary", 40)} 18vmin calc(18vmin + 2px), transparent calc(18vmin + 2px) 24vmin)`,
      B,
    ],
    swirl: [
      hush(26, 58),
      `repeating-conic-gradient(from 0deg at 82% 62%, ${v("primary")} 0 12deg, ${v("accent")} 12deg 24deg, ${v(H)} 24deg 36deg)`,
      B,
    ],
    horizon: [
      `repeating-linear-gradient(to bottom, transparent 0 1.6vmin, ${B} 1.6vmin 2.2vmin) 76% 46% / 34vmin 15vmin no-repeat`,
      `radial-gradient(circle at 50% 100%, ${v("accent")} 0 16vmin, transparent calc(16vmin + 1px)) 76% 46% / 34vmin 17vmin no-repeat`,
      `linear-gradient(to bottom, transparent 0 55%, ${t("primary", 55)} 55% calc(55% + 2px), transparent calc(55% + 2px))`,
      `repeating-linear-gradient(90deg, ${t("primary", 28)} 0 1px, transparent 1px 7vmin) 0 100% / 100% 45% no-repeat`,
      `repeating-linear-gradient(0deg, ${t("primary", 28)} 0 1px, transparent 1px 5vmin) 0 100% / 100% 45% no-repeat`,
      `linear-gradient(to bottom, ${B} 10%, ${t("primary", 30)} 55%, ${B} 55%)`,
      B,
    ],
    scanlines: [
      `repeating-linear-gradient(0deg, ${t("primary", 7)} 0 1px, transparent 1px 3px)`,
      `radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,.55))`,
      `radial-gradient(50% 55% at 72% 40%, ${t("primary", 16)}, transparent 70%)`,
      `radial-gradient(35% 40% at 20% 85%, ${t("accent", 10)}, transparent 70%)`,
      B,
    ],
    pixel: [
      `radial-gradient(2px 2px at 12% 18%, ${v(H)} 99%, transparent)`,
      `radial-gradient(2px 2px at 64% 12%, ${v("on-bg")} 99%, transparent)`,
      `radial-gradient(2px 2px at 82% 34%, ${v(H)} 99%, transparent)`,
      `radial-gradient(2px 2px at 44% 28%, ${v("on-bg")} 99%, transparent)`,
      `radial-gradient(2px 2px at 92% 8%, ${v("on-bg")} 99%, transparent)`,
      box(v("accent"), "0", "100%", "100%", "6vh"),
      box(v("accent"), "70%", "calc(100% - 6vh)", "24%", "6vh"),
      box(v("accent"), "75%", "calc(100% - 12vh)", "12%", "6vh"),
      box(v("primary"), "92%", "26%", "8vmin", "8vmin"),
      `conic-gradient(${t("on-bg", 4)} 25%, transparent 0 50%, ${t("on-bg", 4)} 0 75%, transparent 0) 0 0 / 32px 32px`,
      B,
    ],
    aurora: [
      `radial-gradient(40% 55% at 78% 30%, ${t("primary", 55)}, transparent 70%)`,
      `radial-gradient(45% 50% at 95% 75%, ${t("accent", 45)}, transparent 70%)`,
      `radial-gradient(35% 45% at 55% 95%, ${t(H, 35)}, transparent 70%)`,
      `radial-gradient(30% 35% at 10% 0%, ${t("accent", 18)}, transparent 70%)`,
      grain(dark, 0.4),
      B,
    ],
    orbs: [
      disc(t("accent", 92), "84% 26%", "17vmin"),
      disc(t(H, 85), "62% 86%", "12vmin"),
      disc(t("primary", 90), "98% 82%", "22vmin"),
      `radial-gradient(60% 70% at 80% 50%, ${t("primary", 30)}, transparent 70%)`,
      B,
    ],
    confetti: [
      hush(30, 56),
      disc(v("primary"), "66% 22%", "3.4vmin"),
      `radial-gradient(circle at 92% 64%, transparent 0 4vmin, ${v("accent")} 4vmin 5.6vmin, transparent 5.8vmin)`,
      `linear-gradient(to top right, ${v(H)} 50%, transparent 51%) 80% 12% / 7vmin 7vmin no-repeat`,
      `repeating-linear-gradient(45deg, ${v("on-bg")} 0 3px, transparent 3px 12px) 86% 88% / 14vmin 5vmin no-repeat`,
      disc(v("accent"), "56% 78%", "1.8vmin"),
      box(v("primary"), "97%", "36%", "3vmin", "12vmin"),
      `radial-gradient(circle, ${t("on-bg", 22)} 1.6px, transparent 2px) 0 0 / 26px 26px`,
      B,
    ],
    soft: [
      disc(B, "80% 46%", "20vmin"),
      `radial-gradient(circle at calc(80% + 3vmin) calc(46% + 3vmin), ${t("on-bg", 16)} 0 18vmin, transparent 27vmin)`,
      `radial-gradient(circle at calc(80% - 3vmin) calc(46% - 3vmin), rgba(255,255,255,.85) 0 18vmin, transparent 27vmin)`,
      `radial-gradient(35% 40% at 96% 92%, ${t("accent", 35)}, transparent 70%)`,
      `radial-gradient(30% 35% at 60% 4%, ${t("primary", 22)}, transparent 70%)`,
      B,
    ],
    linen: [
      `repeating-linear-gradient(90deg, ${t("on-bg", 40)} 0 8px, transparent 8px 14px) 0 16px / 100% 1px no-repeat`,
      `repeating-linear-gradient(90deg, ${t("on-bg", 40)} 0 8px, transparent 8px 14px) 0 calc(100% - 16px) / 100% 1px no-repeat`,
      `linear-gradient(to bottom, rgba(255,255,255,.4), transparent 30%, rgba(0,0,0,.14))`,
      `radial-gradient(50% 60% at 82% 45%, ${t("primary", 18)}, transparent 70%)`,
      `repeating-linear-gradient(0deg, ${t("on-bg", 9)} 0 1px, transparent 1px 3px)`,
      `repeating-linear-gradient(90deg, ${t("on-bg", 7)} 0 1px, transparent 1px 3px)`,
      grain(dark, 0.7),
      B,
    ],
    pinstripe: [
      `radial-gradient(circle at 80% 40%, rgba(255,255,255,.75) 0 2vmin, transparent 6vmin)`,
      `radial-gradient(circle at 84% 46%, ${t("primary", 70)} 0 15vmin, ${t("primary", 25)} 21vmin, transparent 22vmin)`,
      `radial-gradient(80% 45% at 70% 100%, ${t("primary", 40)}, transparent 70%)`,
      `linear-gradient(to bottom, rgba(255,255,255,.55), transparent 40%)`,
      `repeating-linear-gradient(0deg, ${t("on-bg", 9)} 0 2px, transparent 2px 4px)`,
      B,
    ],
    "dot-grid": [
      hush(18, 52),
      `radial-gradient(circle, ${t("on-bg", 30)} 1.1px, transparent 1.6px) 0 0 / 24px 24px`,
      `radial-gradient(55% 60% at 82% 40%, ${t("primary", 26)}, transparent 70%)`,
      B,
    ],
    xerox: [
      `linear-gradient(-7deg, transparent 0 42%, ${t("accent", 85)} 42% 58%, transparent 58%) 88% 14% / 42vmin 14vmin no-repeat`,
      box(v("on-bg"), "96%", "66%", "28vmin", "22vmin"),
      `radial-gradient(circle, ${v("on-bg")} 30%, transparent 33%) 74% 96% / 9px 9px`,
      hush(36, 64),
      grain(dark, 2.2),
      B,
    ],
    blocks: [
      box(v("primary"), "86%", "22%", "26vmin", "26vmin"),
      box(v("on-bg"), "calc(86% + 14px)", "calc(22% + 14px)", "26vmin", "26vmin"),
      box(v("accent"), "68%", "82%", "18vmin", "14vmin"),
      box(v("on-bg"), "calc(68% + 10px)", "calc(82% + 10px)", "18vmin", "14vmin"),
      `repeating-linear-gradient(-45deg, ${t("on-bg", 8)} 0 2px, transparent 2px 14px)`,
      B,
    ],
    tiles: [
      box(v("primary"), "100%", "0", "17vmin", "17vmin"),
      box(v("accent"), "calc(100% - 18vmin)", "0", "17vmin", "17vmin"),
      box(t("primary", 70), "100%", "18vmin", "35vmin", "17vmin"),
      box(t("accent", 60), "calc(100% - 18vmin)", "36vmin", "17vmin", "35vmin"),
      box(v("surface"), "100%", "36vmin", "17vmin", "17vmin"),
      B,
    ],
    sky: [
      `radial-gradient(9vmin 5vmin at 78% 24%, rgba(255,255,255,.95) 98%, transparent)`,
      `radial-gradient(7vmin 4.5vmin at 84% 21%, rgba(255,255,255,.95) 98%, transparent)`,
      `radial-gradient(11vmin 4vmin at 72% 27%, rgba(255,255,255,.95) 98%, transparent)`,
      `radial-gradient(6vmin 3.5vmin at 93% 58%, rgba(255,255,255,.85) 98%, transparent)`,
      `radial-gradient(8vmin 3vmin at 88% 61%, rgba(255,255,255,.85) 98%, transparent)`,
      `linear-gradient(to bottom, transparent 78%, ${t("accent", 55)} 78% calc(78% + 2px), ${t("primary", 18)} calc(78% + 2px))`,
      `linear-gradient(to bottom, ${t("accent", 18)}, transparent 78%)`,
      B,
    ],
    bubbles: [
      `radial-gradient(circle at 82% 30%, rgba(255,255,255,.7) 0 1.4vmin, transparent 1.6vmin)`,
      `radial-gradient(circle at 86% 34%, transparent 0 7vmin, rgba(255,255,255,.75) 7vmin 7.5vmin, rgba(255,255,255,.15) 7.6vmin 8vmin, transparent 8.2vmin)`,
      `radial-gradient(circle at 66% 18%, transparent 0 3.6vmin, rgba(255,255,255,.7) 3.6vmin 4vmin, transparent 4.2vmin)`,
      `radial-gradient(circle at 95% 62%, transparent 0 4.6vmin, rgba(255,255,255,.7) 4.6vmin 5vmin, transparent 5.2vmin)`,
      `radial-gradient(130% 55% at 70% 130%, ${v("accent")} 0 55%, transparent 55.4%)`,
      `radial-gradient(90% 45% at 10% 125%, ${t("accent", 70)} 0 55%, transparent 55.4%)`,
      `linear-gradient(to bottom, rgba(255,255,255,.45), transparent 60%)`,
      B,
    ],
    rules: [
      box(v("primary"), "0", "0", "100%", "6px"),
      box(v("accent"), "0", "8px", "100%", "2px"),
      box(v("accent"), "66%", "0", "2px", "100%"),
      box(t("primary", 8), "100%", "0", "34%", "100%"),
      `repeating-linear-gradient(0deg, ${t("on-bg", 12)} 0 1px, transparent 1px 1.6rem)`,
      `repeating-linear-gradient(90deg, ${t("on-bg", 10)} 0 1px, transparent 1px 25%)`,
      B,
    ],
    grille: [
      disc(v("accent"), "88% 18%", "2.4vmin"),
      `radial-gradient(circle, ${t("on-bg", 26)} 30%, transparent 34%) 82% 62% / 2.2vmin 2.2vmin`,
      `linear-gradient(90deg, ${B} 0 60%, transparent 60%)`,
      `linear-gradient(to bottom, ${B} 0 36%, transparent 36% 92%, ${B} 92%)`,
      B,
    ],
    raw: [
      box(v("accent"), "0", "0", "100%", "6px"),
      `repeating-linear-gradient(0deg, ${v("on-bg")} 0 1px, transparent 1px 2.5rem) 100% 0 / 14px 100% no-repeat`,
      `repeating-linear-gradient(0deg, ${v("on-bg")} 0 2px, transparent 2px 10rem) 100% 0 / 28px 100% no-repeat`,
      B,
    ],
  };
  return layers[kind].join(",\n    ");
}
