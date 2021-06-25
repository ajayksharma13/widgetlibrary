// import * as React from "react";
import React from "react";
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
  childToggle2: any[] = Array(this.props.gaugeCount)
    .fill({})
    .map((_, i) => React.createRef());
  /**
   * default state
   */
  state: TState = {
    // currentParamIndex: -1,
    toggle: false,
  };

  static defaultProps: TProps = {
    data: {},
    renderData: {},
    gaugeCount: 1,
    model: new GaugeModel(),
    width: "",
    height: "",
    ref: React.createRef(),
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

  handleToggle2 = () => {
    for (let i = 0; i < this.props.gaugeCount; i++) {
      this.childToggle2[i].current.handleToggle3();
    }
    this.setState({ toggle: !this.state.toggle });
  };

  setHeight2 = () => {
    for (let i = 0; i < this.props.gaugeCount; i++) {
      this.childToggle2[i].current.setHeight3();
    }
  };

  setWidth2 = () => {
    for (let i = 0; i < this.props.gaugeCount; i++) {
      this.childToggle2[i].current.setWidth3();
    }
  };

  drawStats = (data: any, renderData: any, footerData: any) => {
    const stats = this.props.model.statOptions;
    return (
      <table>
        <tr>
          {stats.map((stat, i) => {
            return <th>{footerData[stat].title}</th>;
          })}
        </tr>
        <tr>
          {stats.map((stat, i) => {
            return (
              <td>
                {this.state.toggle ? data[stat] + " " + renderData.unit : "N/A"}
              </td>
            );
          })}
        </tr>
      </table>
    );
  };

  render() {
    const { model, height, width, gaugeCount } = this.props;
    const gaugeRenderData = this.props.renderData.params;
    const gaugeData = this.props.data;
    const footerData = this.props.renderData.footerDataProps;
    const arr = Array.apply(null, Array(this.props.gaugeCount)).map(
      (val, idx) => idx + 1
    );
    return (
      <div className="flipcard-card widget">
        <Grid>
          <Grid.Row columns={gaugeCount}>
            {arr.map((val, idx) => {
              let data = gaugeData[model.selectedParams[idx]];
              let renderData = gaugeRenderData[model.selectedParams[idx] - 1];
              return (
                <Grid.Column>
                  <div className="widget__box">
                    <div className="widget__header">
                      <div>{renderData ? renderData.unitName : "N/A"}</div>
                      <div className="sub-header">
                        <span>{renderData ? renderData.unit : "N/A"}</span>
                      </div>
                    </div>
                    <div className="widget__content">
                      <div>
                        <CircularGaugeBase
                          gaugeRenderData={gaugeRenderData}
                          gaugeData={gaugeData}
                          model={model}
                          ref={this.childToggle2[idx]}
                          height={height}
                          width={width}
                          index={idx}
                        />
                      </div>
                    </div>
                    {data ? (
                      <div className="widget__footer">
                        <div className="footer-title">
                          <b>{model.footerTitle}</b>
                        </div>
                        <div className="footer-section">
                          {this.drawStats(data, renderData, footerData)}
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
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
  gaugeCount: number;
  model: GaugeModel;
  height: string;
  width: string;
  ref: any;
};

type TState = { toggle: boolean };

export { GaugeComponent as default, GaugeModel, GaugeProperty };
