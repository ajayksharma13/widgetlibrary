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
  AreaSeries,
  SplineAreaSeries,
}
  from '@syncfusion/ej2-react-charts';
import model from "../flipcard/model";
import { element } from "prop-types";

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
  public colors = ['#ae35b9', '#ec4d4d', '#f0f359',]
  public palette = ['#78c9e2  ', '#F7DC6F', '#F1948A', '#8AF19E', '#FE8536']
  render() {
    const { model } = this.props;
    const { propertyStyle } = this.state;
    const graphValue = model.graphType == 'Line'
      && model.parameter.length <= 0 ? 'Double' : 'Category'
    const marker = model.graphType == 'Line' ? true : false
    model.accessSeries(model.series)
    return (
      <div className="Graph widget" id='wid2' ref={this.propertyRef} >
        <div className="widget__box">
          <div className="widget__header">
          </div>
          <div className="widget__content"  >

            {model.graphType != 'Area multiple' ? (
              <div>
                <ChartComponent id='charts'
                  //width='100%'
                  //height='100%'
                  style={propertyStyle}
                  ref={chart => { this.chart = chart, this.chart?.refresh() }}
                  legendSettings={{
                    visible: true, position: 'Custom', location: { x: -8, y: 5 }, margin: { bottom: 10, right: 4, left: -20 },
                    textStyle: { size: '14px' }
                  }}
                  primaryXAxis={
                    {
                      edgeLabelPlacement: 'Shift', valueType: graphValue,
                      visible: true, majorGridLines: { color: '#E5E4E2' },
                      majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, lineStyle: { width: 0 },
                      labelStyle: { color: 'Grey', size: '11px', fontStyle: 'Serif' }
                    }
                  }
                  className='chart_content'
                  palettes={this.palette}
                  background='transparent'
                  primaryYAxis={{
                    minorTickLines: { width: 0 }, visible: false, minimum: 0, maximum: 100,
                    majorTickLines: { width: 0 }, lineStyle: { width: 0 }, rangePadding: 'None',
                  }}
                  tooltip={{ enable: true }}
                  margin={{ top: 62, bottom: 10 }}
                  chartArea={{ border: { width: 0 }, }}

                >
                  <Inject services={[ColumnSeries, Legend, LineSeries, Category, Tooltip, SplineAreaSeries]} />
                  <SeriesCollectionDirective >

                    {model.parameter.length > 0 ?

                      (Weekly.data.map((item: any) => {
                        if (model.parameter.find(element => element == item.name)) {

                          return (
                            <SeriesDirective xName='x' yName='y' key={item.id} type={model.graphType as ChartSeriesType}
                              dataSource={item.series} cornerRadius={{ bottomLeft: 5, bottomRight: 5, topLeft: 5, topRight: 5 }}
                              name={item.name} width={2} marker={{ visible: marker }} opacity={model.graphType == 'SplineArea' ? 0.75 : 1}
                              legendShape='Circle'
                            />
                          )
                        }
                      }
                      )) : (<SeriesDirective xName='x' yName='y' type={model.graphType as ChartSeriesType}
                        dataSource={model.series} name='Legend' width={2} cornerRadius={{ bottomLeft: 5, bottomRight: 5, topLeft: 5, topRight: 5 }}
                        marker={{ visible: marker }} fill={model.graphType == 'SplineArea' ? 'url(#gradient-chart)' : ''}
                        legendShape='Circle'
                      />

                      )
                    }
                  </SeriesCollectionDirective>
                </ChartComponent>
              </div>) : (
              <div className='area3-chart' >
                {model.yseries.map((item, index) => {
                  model.accessSeries(item.series);
                  return (
                    <div className='area3'>
                      <ChartComponent
                        className='chartArea'
                        key={index}
                        background='transparent'
                        primaryXAxis={{ valueType: 'Category', visible: false }}
                        primaryYAxis={{ visible: false }}
                        chartArea={{ border: { width: 0 } }}
                        titleStyle={{ color: 'Grey', size: '15px', fontStyle: 'Serif' }}
                        legendSettings={{ visible: false, position: 'Top' }}
                        title={item.name}
                      >
                        <Inject services={[ColumnSeries, Legend, LineSeries, Category, Tooltip, SplineAreaSeries]} />
                        <SeriesCollectionDirective>
                          <SeriesDirective xName='x' yName='y' type='SplineArea' dataSource={item.series} name={item.name} width={2}
                            fill={`url(#gradient-chart-${index})`} border={{ width: 2, color: this.colors[index] }}
                          />
                        </SeriesCollectionDirective>
                        <svg style={{ height: '0' }}>
                          <defs>
                            <linearGradient id={`gradient-chart-${index}`} x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0" />
                              <stop offset="1" />
                            </linearGradient>
                          </defs>
                        </svg>

                      </ChartComponent>
                      <div>
                        <div className='features'>
                          {model.featureList.map((feature: any, key: any) => {
                            return (
                              <div key={key} className='featurelist2'>
                                <p id='text'>{feature.text}</p>
                                <p id='value'>{feature.value}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )

                })}
              </div>)}

            <svg style={{ height: '0' }}>
              <defs>
                <linearGradient id="gradient-chart" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" />
                  <stop offset="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="widget__footer">
            {model.graphType != 'Area multiple' ? (
              <div className='features'>
                {model.featureList.map((feature: any, key: any) => {
                  return (
                    <div key={key} className='featurelist'>
                      <p id='text'>{feature.text}</p>
                      <p id='value'>{feature.value}</p>
                    </div>
                  )
                })}
              </div>
            ) : (
              <table >
              </table>)}
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
