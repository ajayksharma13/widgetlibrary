import ModelBase from "../model.base";

/**
 * Flipcard model cum logic class
 */
class FlipcardModel extends ModelBase {
  private _footerTitle: string = "";
  public get footerTitle(): string {
    return this._footerTitle;
  }
  public set footerTitle(v: string) {
    this._footerTitle = v;
  }

  /**
   * create instance of flipcard
   * @param {object} data
   */
  static instance(data: FlipcardModel = new FlipcardModel()) {
    let instance = Object.assign(new FlipcardModel(), data);
    return instance;
  }

  public changeFooterTitle(title: string): void {
    this._footerTitle = title;
  }
}

export { FlipcardModel as default };
