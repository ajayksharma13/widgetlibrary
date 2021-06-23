import ModelBase from "../model.base";

/**
 * Flipcard model cum logic class
 */
class FlipcardModel extends ModelBase {
  footerTitle: string = "";

  /**
   * create instance of flipcard
   * @param {object} data
   */
  static instance(data: FlipcardModel = new FlipcardModel()) {
    let instance = Object.assign(new FlipcardModel(), data);
    return instance;
  }

  public changeFooterTitle(title: string): void {
    this.footerTitle = title;
  }
}

export { FlipcardModel as default };
