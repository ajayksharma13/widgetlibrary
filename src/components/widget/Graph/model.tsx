import model from "../flipcard/model";
import ModelBase from "../model.base";
import { Monthly, Daywise, Weekly, Today } from './data'

/**
 * graph model cum logic class
 */
class GraphModel extends ModelBase {
  public footerTitle: string = "Graph Title";           // footer 
  public graphType: string = "Line";
  public periodType = 'Today';
  public parameter = [];
  public series: any[] = [{ x: '2009', y: 35 }, { x: '2010', y: 20 },
  { x: '2011', y: 41 }, { x: '2012', y: 29 },
  { x: '2013', y: 56 }, { x: '2014', y: 38 },
  { x: '2015', y: 74 }, { x: '2016', y: 75 },
  { x: '2017', y: 60 }, { x: '2018', y: 66 }, { x: '2019', y: 45 },
  { x: '2020', y: 54 }, { x: '2021', y: 45 },
  ];
  //public month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //public week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  //public year = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  //public period: string[] = this.month
  public yseries: any[] = [
    {
      'name': 'Parameter1',
      'series': [{ x: '1', y: 53 }, { x: '2', y: 44 }, { x: '3', y: 60 }, { x: '4', y: 46 }, { x: '5', y: 51 },
      { x: '6', y: 50 }, { x: '7', y: 46 }, { x: '8', y: 52 }]
    },
    {
      'name': 'Parameter2',
      'series': [{ x: '1', y: 53 }, { x: '2', y: 41 }, { x: '3', y: 57 }, { x: '4', y: 50 }, { x: '5', y: 60 },
      { x: '6', y: 50 }, { x: '7', y: 46 }, { x: '8', y: 52 }],
    },
    {
      'name': 'Parameter3',
      'series': [{ x: '1', y: 50 }, { x: '2', y: 44 }, { x: '3', y: 60 }, { x: '4', y: 46 }, { x: '5', y: 51 },
      { x: '6', y: 60 }, { x: '7', y: 40 }, { x: '8', y: 52 }],
    }
  ]
  public mainlist: Object[] = []
  public feature: any = []
  public average: any
  public minimum: any
  public maximum: any
  public featureList: any = []



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
    this.feature = [];
    this.featureList = [];
  }

  //gives parameters selected
  public changeParameters(params: any): void {
    this.parameter = params;
  }


  public changeGraphFeatures(feature: any): void {
    this.feature = feature;
    this.featureList = [];
  }

  public accessSeries(series: any): void {
    this.featureList = [];
    this.Average(series);
    this.Minimum(series);
    this.Maximum(series);
  }

  public Average(aseries: any): void {
    let sum = 0;
    if (this.feature.includes('Average')) {
      for (let i = 0; i < aseries.length; i++) {
        sum += aseries[i].y
      }
      this.average = (sum / aseries.length).toFixed(2);
      this.featureList.push({ text: 'Average', value: this.average })
    }
    else {
      this.average = null;
    }
  }

  public Minimum(bseries: any): void {
    let min = bseries[0].y
    if (this.feature.includes('Minimum')) {
      for (let i = 1; i < bseries.length; i++) {
        if (bseries[i].y < min) {
          min = bseries[i].y
        }
      }
      this.minimum = min;
      this.featureList.push({ text: 'Minimum', value: this.minimum })
    }
    else {
      this.minimum = null;
    }
  }

  public Maximum(cseries: any): void {
    let max = cseries[0].y
    if (this.feature.includes('Maximum')) {
      for (let i = 1; i < cseries.length; i++) {
        if (cseries[i].y > max) {
          max = cseries[i].y
        }
      }
      this.maximum = max;
      this.featureList.push({ text: 'Maximum', value: this.maximum })
    }
    else {
      this.maximum = null;
    }
  }


}
export { GraphModel as default };
