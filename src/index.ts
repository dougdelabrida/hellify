import { Engine } from "./engine";
import generateBlock from "./generateBlock";

export function hell (callback) : void {
  const engine = new Engine();

  function style (xPath: string, style: Object) : void {
    engine.registerBlock(generateBlock(xPath, style));
  }

  callback(style);
}
