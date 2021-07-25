import ModelBase from "../model.base";

/**
 * Flipcard model cum logic class
 */
class TabularModel extends ModelBase {
  gridName: string = "";
  paramselect:string="";
  

  /**
   * create instance of flipcard
   * @param {object} data
   */
  static instance(data: TabularModel = new TabularModel()) {
    let instance = Object.assign(new TabularModel(), data);
    return instance;
  }

  public assigngridtype(gridName: any): void {
    this.gridName = gridName;
    console.log(this.gridName);
  }
  public assignparamsselect(paramselect: any): void {
    this.paramselect = paramselect; 
    console.log(this.paramselect);
  }
   
 
}
export { TabularModel as default };
