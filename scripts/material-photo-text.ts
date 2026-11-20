// The words of a material photo: the prompt for the renderer, and the subject that the vision check expects.
import type { Material } from "./materials.js";

export const photoPrompt = (subject: string) =>
  `studio product photograph of ${subject}, alone in the centre of the frame on a seamless pure white background, soft even studio light from above, a faint soft contact shadow, sharp focus, true natural colour, no text, no labels, no props`;

export const photoExpect = (m: Material) =>
  `${m.name}, shown as ${m.photo ?? m.name.toLowerCase()}${m.summary ? `. ${m.summary}` : ""}`;

// The file name of the photo of a process: "cuisine.methods:grilling" → "cuisine.methods--grilling.webp".
export const processFile = (key: string) => `${key.replace(":", "--")}.webp`;
