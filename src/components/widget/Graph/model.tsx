import ModelBase from "../model.base";
import { Weekly } from './data'

/**
 * Flipcard model cum logic class
 */
class GraphModel extends ModelBase {
  public footerTitle: string = "";           // footer 
  public graphType: string = "Line";
  public periodType = 'Today';
  public parameter = [];
  public series: any[] = [
    { x: '2005', y: 21 }, { x: '2006', y: 24 },
    { x: '2007', y: 36 }, { x: '2008', y: 38 },
    { x: '2009', y: 54 }, { x: '2010', y: 57 },
    { x: '2011', y: 70 }
  ];
  //public month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //public week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  //public year = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  //public period: string[] = this.month
  public yseries: any[] = []
  public mainlist: Object[] = []
  public elementfind: any
  public type: any
  public daydata: any = []
  public graphDetail: string = '';

  /**
   * create instance of flipcard
   * @param {object} data
   */
  static instance(data: GraphModel = new GraphModel()) {
    let instance = Object.assign(new GraphModel(), data);
    return instance;
  }
  public changeFooterTitle(text: string): void {
    this.footerTitle = text;
  }


  //gives periodtype
  public changePeriodType(data: any): void {
    this.periodType = data;

  }

  public changeGraphType(graph: any): void {
    this.graphType = graph;
  }

  //gives parameters selected
  public changeParameters(params: any): void {
    this.parameter = params;
  }



}
export { GraphModel as default };
