import { Block } from "./types";

export function generateClassName () : string {
  return `hell_${Math.random().toString(36).substring(2, 8)}`;
}

export function getStyleElement (block: Block) : HTMLElement {
  const style = document.createElement('style');

  (<any>Object).assign(style, {
    id: `id_${block.className}`,
    type: "text/css",
    innerHTML: `
      .${block.className} {
        ${block.style.cssText}
      }
    `
  });

  return style;
}