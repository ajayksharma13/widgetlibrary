import ModelBase from "../model.base";

/**
 * Flipcard model cum logic class
 */
class GaugeModel extends ModelBase {
  footerTitle: string = "Summary";
  vlRangeColor: string = "#82b944";
  lRangeColor: string = "#ddec12";
  hRangeColor: string = "#ff6000";
  vhRangeColor: string = "red";

  /**
   * create instance of flipcard
   * @param {object} data
   */
  static instance(data: GaugeModel = new GaugeModel()) {
    let instance = Object.assign(new GaugeModel(), data);
    return instance;
  }

  public changeFooterTitle(title: string): void {
    this.footerTitle = title;
  }

  public changeVLColor(color: string): void {
    this.vlRangeColor = color;
  }

  public changeLColor(color: string): void {
    this.lRangeColor = color;
  }

  public changeHColor(color: string): void {
    this.hRangeColor = color;
  }

  public changeVHColor(color: string): void {
    this.vhRangeColor = color;
  }
}

export { GaugeModel as default };
