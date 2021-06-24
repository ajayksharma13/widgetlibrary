import * as React from "react";
import { Grid } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import { CircularGaugeBase } from "./CircularGaugePanel";
import GaugeModel from "./model";
import GaugeProperty from "./property";
import "./style.scss";

/**
 * Flipcard
 */
class GaugeComponent extends BaseComponent<TProps> {
  /**
   * default state
   */
  state: TState = {
    // currentParamIndex: -1,
  };

  static defaultProps: TProps = {
    data: {},
    renderData: {},
    model: new GaugeModel(),
    toggle: false,
    width: "",
    height: "",
  };

  /**
   * mount component
   */
  componentDidMount() {}

  /**
   * unmount
   * clear data
   */
  componentWillUnmount() {}

  render() {
    const { model, toggle, height, width } = this.props;
    const gaugeRenderData = this.props.renderData.params;
    const gaugeData = this.props.data;
    const footerData = this.props.renderData.footerDataProps;

    return (
      <div className="flipcard-card widget">
        <Grid>
          <Grid.Row columns={gaugeRenderData.length}>
            {gaugeRenderData.map((param: any) => {
              return (
                <Grid.Column>
                  <div className="widget__box">
                    <div className="widget__header">
                      <div>{param.unitName}</div>
                      <div className="sub-header">
                        <span>{param.unit}</span>
                      </div>
                    </div>
                    <div className="widget__content">
                      <div>
                        <CircularGaugeBase
                          gaugeRenderData={param}
                          gaugeFooterData={footerData}
                          gaugeData={gaugeData[param.id]}
                          toggle={toggle}
                          model={model}
                          height={height}
                          width={width}
                        />
                      </div>
                    </div>
                    <div className="widget__footer">
                      <div className="footer-title">
                        <b>{model.footerTitle}</b>
                      </div>
                      <div className="footer-section">
                        <table>
                          <tr>
                            <th>{footerData.left.title}</th>
                            <th>{footerData.middle.title}</th>
                            <th>{footerData.right.title}</th>
                          </tr>
                          <tr>
                            <td>
                              {toggle ? gaugeData[param.id].min : "N/A"}{" "}
                              {param.unit}
                            </td>
                            <td>
                              {toggle ? gaugeData[param.id].avg : "N/A"}{" "}
                              {param.unit}
                            </td>
                            <td>
                              {toggle ? gaugeData[param.id].max : "N/A"}{" "}
                              {param.unit}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

type TProps = {
  data: any;
  renderData: any;
  model: GaugeModel;
  toggle: boolean;
  height: string;
  width: string;
};

type TState = {};

export { GaugeComponent as default, GaugeModel, GaugeProperty };
