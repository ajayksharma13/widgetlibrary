import setDayWithOptions from "date-fns/esm/fp/setDayWithOptions/index.js";
import { Formik, FormikProps } from "formik";
import { arrayOf } from "prop-types";
import * as React from "react";

import {
  Form,
  Grid,
  Header,
  Input,
  Segment,
  Table,
  Dropdown,
  Radio,
} from "semantic-ui-react";
import { BaseComponent } from "../../base";
import model from "./model";
import GaugeModel from "./model";
import "./style.scss";

/**
 * Flipcard Property
 */
class GaugeProperty extends BaseComponent<TProps, TState> {
  setOptions = () => {
    const params = this.props.renderData.params;
    let arr = [];
    for (let i = 0; i < params.length; i++) {
      arr.push({
        value: params[i].id,
        text: params[i].unitName,
      });
    }
    return arr;
  };
  /*
   * default state
   */
  state: TState = {
    options: this.setOptions(),
    statOptions: [
      { value: "min", text: "Minimum" },
      { value: "max", text: "Maximum" },
      { value: "avg", text: "Average" },
      { value: "tot", text: "Total" },
    ],
    gaugeChoice: this.props.gaugeCount === 1 ? "uno" : "tres",
  };

  static defaultProps: TProps = {
    model: new GaugeModel(),
    onUpdatePanel: () => {},
    renderData: {},
    gaugeCount: 1,
  };

  handleParamSelect = (event: any, data: any, index: number) => {
    this.props.model.assignSelectedParams(index, data.value);
    this.props.onUpdatePanel();
  };

  handleStatSelect = (event: any, data: any) => {
    this.props.model.assignStatOptions(data.value);
    this.props.onUpdatePanel();
  };

  setGaugeChoice = async (e: any) => {
    await this.setState({ gaugeChoice: e.value });
    this.props.setGaugeChoice(this.state.gaugeChoice === "uno" ? 1 : 3);
  };

  render() {
    const { model, onUpdatePanel } = this.props;
    let arr = Array.apply(null, Array(this.props.gaugeCount)).map(
      (val, idx) => idx + 1
    );
    return (
      <div className="flipcard-card property">
        <div className="property__header">
          <Header as="h4" className="header primary">
            Circular Gauge Options
          </Header>
        </div>
        <div className="property__content">
          <Form>
            <p>
              <b>Gauge Type</b>
            </p>
            <Form.Field>
              <Radio
                label="Single Gauge"
                name="radioGroup"
                value="uno"
                checked={this.state.gaugeChoice === "uno"}
                onChange={(e, value) => this.setGaugeChoice(value)}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Triple Gauge"
                name="radioGroup"
                value="tres"
                checked={this.state.gaugeChoice === "tres"}
                onChange={(e, value) => this.setGaugeChoice(value)}
              />
            </Form.Field>
            <p>
              <b>Footer Header</b>
            </p>
            <Form.Input
              fluid
              placeholder="Footer title"
              autoComplete="off"
              // autoFocus
              onChange={(e) => {
                model.changeFooterTitle(e.target.value);
                onUpdatePanel();
              }}
              value={model.footerTitle}
              name=""
            />
            {arr.map((val, i) => {
              return (
                <div>
                  <p>
                    <b>Select Parameter To be Displayed</b>
                  </p>
                  <Dropdown
                    className="ui selection dropdown"
                    onChange={(e, data) => this.handleParamSelect(e, data, i)}
                    options={this.state.options}
                    value={model.selectedParams[i]}
                    placeholder={`Select Parameter ${val}`}
                  />
                </div>
              );
            })}
            <p>
              <b>Select Statistics To be Displayed</b>
            </p>
            <Dropdown
              selection
              multiple
              onChange={(event, data) => this.handleStatSelect(event, data)}
              // onAddItem={(event, data) => this.handleStatSelect(event, data)}
              options={this.state.statOptions}
              value={model.statOptions}
            />
          </Form>
        </div>
      </div>
    );
  }
}

type TProps = {
  model: GaugeModel;
  onUpdatePanel: Function;
  renderData: any;
  gaugeCount: number;
  setGaugeChoice?: Function;
};

type TState = {
  options: any[];
  statOptions: any[];
  gaugeChoice: string;
};

export { GaugeProperty as default };
