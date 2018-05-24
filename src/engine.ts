import { Block } from "./types";

export class Engine {
  private _observer: MutationObserver;
  private _config: MutationObserverInit;
  private _target: HTMLElement;
  private _blockList: any;

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
    this._blockList = [];

    this._observer.observe(this._target, this._config);
  }

  private _mutationHandler (mutations: MutationRecord[]) : void {
    console.log(mutations);
    console.log(this._blockList);
  }

  public registerBlock (block: Block) : void {
    const foundBlock: Block = this._blockList.find((_block: Block) => _block.xPath === block.xPath);

    if (foundBlock) {
      // Merge its style in case of duplication
      (<any>Object).assign(foundBlock.style, block.style);
    } else {
      this._blockList.push(block);
    }
  }
}
