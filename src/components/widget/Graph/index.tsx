import * as React from "react";
import { BaseComponent } from "../../base";
import GraphModel from "./model";
import GraphProperty from "./property";
import "./style.scss";
import { Browser } from '@syncfusion/ej2-base';
import { Monthly, Daywise, Weekly, Today } from './data'
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  ColumnSeries, Legend, Category, Tooltip, LineSeries, ChartSeriesType, Chart, ILoadedEventArgs,
  DateTime,
  AreaSeries,
}
  from '@syncfusion/ej2-react-charts';
import model from "../flipcard/model";

/**
 * Flipcard
 */
class GraphComponent extends BaseComponent<TProps> {
  /**
   * default state
   */

  propertyRef = React.createRef<any>();
  state: TState = {
    // currentParamIndex: -1,
    propertyStyle: {},

  };
  static defaultProps: TProps = {
    model: new GraphModel(),
  };


  /**
   * interbal parameter reference
   */
  // intervalParameter: any;

  /**
   * mount component
   */
  componentDidMount() {
  }

  /**
   * unmount
   * clear data
   */
  componentWillUnmount() {
    //if (this.intervalParameter) this.intervalParameter.clearInterval();
  }

  public chart: ChartComponent | null = null;
  public colors = ['#E74C3C', '#85C1E9 ', '#16A085', '#F4D03F', '#D35400', '#C39BD3']
  render() {
    const { model } = this.props;
    const { propertyStyle } = this.state;


    return (
      <div className="Graph widget" id='wid2' ref={this.propertyRef} >
        <div className="widget__box">
          <div className="widget__content" id='wid'  >
            <div className='graph__content'>
              <ChartComponent id='charts'
                style={{ textAlign: "center" }}
                ref={chart => { this.chart = chart, this.chart?.refresh() }}
                legendSettings={{
                  visible: true, position: 'Custom', location: { x: 0, y: 0 }, margin: { bottom: 10, right: 5, top: -10 },
                }}
                primaryXAxis={
                  {
                    valueType: 'Category', majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 }, lineStyle: { color: '#1A5276', width: 2 },
                  }
                }
                className='chart_content'
                palettes={this.colors}
                background='transparent'
                primaryYAxis={{
                  minorTickLines: { width: 0 }, minimum: 0,
                  maximum: 100, interval: 20,
                  majorTickLines: { width: 0 }, lineStyle: { width: 0 }, rangePadding: 'None',
                }}
                tooltip={{ enable: true }}
                chartArea={{ border: { width: 0 } }}

              >
                <Inject services={[ColumnSeries, Legend, LineSeries, Category, Tooltip, AreaSeries]} />
                <SeriesCollectionDirective >

                  {model.parameter.length > 0 ?

                    (Weekly.data.map((item: any) => {
                      return (
                        <SeriesDirective xName='x' yName='y' key={item.id} type={model.graphType as ChartSeriesType} dataSource={item.series}
                          name={item.name} width={2} cornerRadius={{ topLeft: 10, topRight: 10 }} marker={{ visible: (model.graphType != 'Line' ? false : true) }} />
                      )
                    }
                    )) : (<SeriesDirective xName='x' yName='y' type={model.graphType as ChartSeriesType} dataSource={model.series} name='Legend' width={1.5}
                      cornerRadius={{ topLeft: 10, topRight: 10 }} marker={{ visible: (model.graphType != 'Line' ? false : true) }} legendShape='Rectangle' //fill='url(#gradient-chart)' border={{ width: 1, color: '#00bdae' }} 
                    />)
                  }

                </SeriesCollectionDirective>
              </ChartComponent>



            </div>
          </div>
          <div className="widget__footer">

            <div className="footer-section">

            </div>
          </div>
        </div>
      </div >
    );
  }
}

type TProps = {
  model: GraphModel;
};

type TState = {
  // currentParamIndex: number;
  propertyStyle: any;
};

export { GraphComponent as default, GraphModel, GraphProperty };
