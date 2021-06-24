import { Formik, FormikProps } from "formik";
import * as React from "react";
import {
  Form,
  Grid,
  Header,
  Input,
  Segment,
  Table,
  Dropdown,
} from "semantic-ui-react";
import { BaseComponent } from "../../base";
import model from "./model";
import GaugeModel from "./model";
import "./style.scss";

/**
 * Flipcard Property
 */
class GaugeProperty extends BaseComponent<TProps, TState> {
  /*
   * default state
   */
  state: TState = {};

  static defaultProps: TProps = {
    model: new GaugeModel(),
    onUpdatePanel: () => {},
  };

  options = [
    {
      text: "Green",
      value: "#82b944",
    },
    {
      text: "Yellow",
      value: "#ddec12",
    },
    {
      text: "Light Red",
      value: "#ff6000",
    },
    {
      text: "Red",
      value: "red",
    },
  ];

  handleVLSelect = (event: any, data: any) => {
    this.props.model.changeVLColor(data.value);
    this.props.onUpdatePanel();
  };

  handleLSelect = (event: any, data: any) => {
    this.props.model.changeLColor(data.value);
    this.props.onUpdatePanel();
  };

  handleHSelect = (event: any, data: any) => {
    this.props.model.changeHColor(data.value);
    this.props.onUpdatePanel();
  };

  handleVHSelect = (event: any, data: any) => {
    this.props.model.changeVHColor(data.value);
    this.props.onUpdatePanel();
  };

  render() {
    const { model, onUpdatePanel } = this.props;
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

            <p>
              <b>Very Low Range Color</b>
            </p>
            <Dropdown
              className="ui selection dropdown"
              onChange={this.handleVLSelect}
              options={this.options}
              value={model.vlRangeColor}
              placeholder="Very Low Range Color"
            />
            <p>
              <b>Low Range Color</b>
            </p>
            <Dropdown
              className="ui selection dropdown"
              onChange={this.handleLSelect}
              options={this.options}
              value={model.lRangeColor}
              placeholder="Low Range Color"
            />
            <p>
              <b>High Range Color</b>
            </p>
            <Dropdown
              className="ui selection dropdown"
              onChange={this.handleHSelect}
              options={this.options}
              value={model.hRangeColor}
              placeholder="High Range Color"
            />
            <p>
              <b>Very High Range Color</b>
            </p>
            <Dropdown
              className="ui selection dropdown"
              onChange={this.handleVHSelect}
              options={this.options}
              value={model.vhRangeColor}
              placeholder="Very High Range Color"
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
};

type TState = {};

export { GaugeProperty as default };
