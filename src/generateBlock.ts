import { Block } from "./types";
import { generateClassName } from "./utils";


export default function generateBlock (xPath: XPathExpression, style: Object) : Block {
  const _style: CSSStyleDeclaration = document.createElement('div').style;
  
  return {
    xPath,
    className: generateClassName(),
    style: (<any>Object).assign(_style, style)
  }
}
