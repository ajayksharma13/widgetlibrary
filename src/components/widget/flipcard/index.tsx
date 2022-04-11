import * as React from "react";
import { BaseComponent } from "../../base";
import FlipcardModel from "./model";
import FlipcardProperty from "./property";
import "./style.scss";

/**
 * Flipcard
 */
class FlipcardComponent extends BaseComponent<TProps> {
  /**
   * default state
   */
  state: TState = {
    // currentParamIndex: -1,
  };

  static defaultProps: TProps = {
    model: new FlipcardModel(),
  };

  /**
   * interbal parameter reference
   */
  // intervalParameter: any;

  /**
   * mount component
   */
  componentDidMount() {
    // const { refreshTime, params } = this.props;
    // // parameter length should be greater than 1
    // if (params.length > 1) {
    //   this.intervalParameter = setInterval(() => {
    //     this.setState((prevState: TState) => ({
    //       currentParamIndex:
    //         prevState.currentParamIndex == params.length - 1
    //           ? 0
    //           : ++prevState.currentParamIndex,
    //     }));
    //   }, refreshTime * 1000);
    // }
  }

  /**
   * unmount
   * clear data
   */
  componentWillUnmount() {
    //if (this.intervalParameter) this.intervalParameter.clearInterval();
  }

  render() {
    const { model } = this.props;

    return (
      <div className="flipcard-card widget">
        <div className="widget__box">
          <div className="widget__header">
            <div>NA</div>
            <div className="sub-header">
              <span>
                name <small>unit</small>
              </span>
            </div>
          </div>
          <div className="widget__content">
            <div>value</div>
          </div>
          <div className="widget__footer">
            <div className="footer-title">{model.footerTitle}</div>
            <div className="footer-section">
              <table>
                <tr>
                  <th>AVG</th>
                  <th>MAX</th>
                  <th>MIN</th>
                </tr>
                <tr>
                  <td>avg</td>
                  <td>max</td>
                  <td>min</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

type TProps = {
  // data: any;
  // header: any;
  // refreshTime: number;
  // footer: any;
  // params: Array<any>;
  // footerDataProps: any;

  model: FlipcardModel;
};

type TState = {
  // currentParamIndex: number;
};

export { FlipcardComponent as default, FlipcardModel, FlipcardProperty };
