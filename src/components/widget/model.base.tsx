/**
 * @class Base class for widget model
 */
class ModelBase {
  private _index: number;
  public get index(): number {
    return this._index;
  }
  public set index(v: number) {
    this._index = v;
  }

  constructor(index: number = -1) {
    this._index = index;
  }
}

export { ModelBase as default };
