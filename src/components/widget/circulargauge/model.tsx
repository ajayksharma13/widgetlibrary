import ModelBase from "../model.base";

/**
 * Flipcard model cum logic class
 */
class GaugeModel extends ModelBase {
  footerTitle: string = "Summary";
  paramCount: number = 1;
  selectedParams: any;
  statOptions: string[] = [];
  // gaugeChoice: number = 1;

  /**
   * create instance of flipcard
   * @param {object} data
   */
  static instance(count: number, data: GaugeModel = new GaugeModel()) {
    let instance = Object.assign(new GaugeModel(), data);
    instance.assignParamCount(count);
    return instance;
  }

  public changeFooterTitle(title: string): void {
    this.footerTitle = title;
  }

  public assignSelectedParams(index: number, value: number): void {
    this.selectedParams[index] = value;
    console.log(this.selectedParams);
  }

  public assignParamCount(count: number): void {
    this.paramCount = count;
    this.selectedParams = new Array(this.paramCount).fill({}).map(() => {});
  }

  public assignStatOptions(data: string[]): void {
    this.statOptions = data;
    if (this.statOptions.length > 3) {
      this.statOptions.splice(0, 1);
    }
    console.log(this.statOptions);
  }

  // public assignGaugeChoice(choice: string): void {
  //   this.gaugeChoice = choice === "uno" ? 1 : 3;
  // }
}

export { GaugeModel as default };
