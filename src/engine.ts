import { Block } from "./types";
import { getStyleElement } from "./utils";

export class Engine {
  private _observer: MutationObserver;
  private _config: MutationObserverInit;
  private _target: HTMLElement;
  private _blockList: any = [];

  constructor(
    target: HTMLElement = document.body,
    config: MutationObserverInit = {
      characterData: true,
      childList: true,
      subtree: true,
  })
  {
    this._observer = new MutationObserver(this._mutationHandler);

    this._target = target;
    this._config = config;

    this._observer.observe(this._target, this._config);
  }

  private _mutationHandler = (mutations: MutationRecord[]) => {
    this._blockList.forEach((block: Block) => {
      let xpathResult: XPathResult = document.evaluate(block.xPath, this._target, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  
      for (let i = 0; i < xpathResult.snapshotLength; i++) {
        let element: Element = (<Element>xpathResult.snapshotItem(i));
        element.classList.add(block.className);
      }
    });
  }

  public registerBlock (block: Block) : void {
    const foundBlock: Block = this._blockList.find((_block: Block) => _block.xPath === block.xPath);
    
    if (foundBlock) {
      // TODO: Implements
      // Merge its style in case of duplication
      (<any>Object).assign(foundBlock.style, block.style);
    } else {
      const style = getStyleElement(block);

      document.head.insertBefore(style, document.head.lastChild);

      this._blockList.push(block);
    }
  }
}
