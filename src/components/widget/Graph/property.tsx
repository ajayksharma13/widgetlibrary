
import * as React from "react";
import { DropdownProps, Form, Grid, Header, Input, Select, } from "semantic-ui-react";
import Utils from "../../../utils";
import { BaseComponent } from "../../base";
import { DropDownHelper, TDropdownHelper } from "../../general/dropdown-helper";
import GraphModel from "./model";
import "./style.scss";

/**
 * Flipcard Property
 */
class GraphProperty extends BaseComponent<TProps, TState> {
  /*
   * default state
   */

  state: TState = {
    periodOptions: []
  };
  static defaultProps: TProps = {
    model: new GraphModel(),
    onUpdatePanel: () => { },
  };

  /*public period = [
    {
      'id': '1',
      'name': 'Today',
      'data': [{ x: '1:00', y: '33' }, { x: '2:00', y: '54' }]
    },
    {
      'id': '2',
      'name': 'Daywise',
      'data': [{ x: '23', y: "55" }, { x: '25', y: '57' }]
    },
    {
      'id': '3',
      'name': 'Weekly',
      'data': [{ x: 'Mon', y: '45' }, { x: 'Tue', y: '56' }, { x: 'Wed', y: '34' }]
    }
  ]*/

  componentDidMount() {

  }
  render() {
    const { model, onUpdatePanel } = this.props;

    return (
      <div className="Graph property">
        <div className="property__header">
          <Header as="h4" className="header primary">
            Graph
          </Header>
        </div>
        <div className="property__content">
          <Form>
            <Form.Select
              fluid
              placeholder="Graph Type"
              onChange={(e, { value }) => {
                model.changeGraphType(value);
                onUpdatePanel();
              }}
              value={model.graphType}
              options={[
                {
                  text: "Line Graph",
                  value: "Line",
                },
                {
                  text: "Bar Graph",
                  value: "Column",
                },

              ]}
              name=""
            />

            <Form.Select
              fluid
              placeholder="Period Type"
              onChange={(e, { value }) => {
                model.changePeriodType(value)
                onUpdatePanel()
              }}
              value={model.periodType}
              options={[
                {
                  text: 'Today',
                  value: 'Today',
                },
                {
                  text: 'Daywise',
                  value: 'Daywise',
                },
                {
                  text: 'Weekly',
                  value: 'Weekly',
                },
                {
                  text: 'Monthly',
                  value: 'Monthly',
                },
                {
                  text: 'Yearly',
                  value: 'Yearly',
                }
              ]}

            />


            <Form.Select multiple
              selection
              fluid
              placeholder="Parameters"
              onChange={(e, { value }) => {
                model.changeParameters(value);
                onUpdatePanel();
              }}
              value={model.parameter}
              options={[
                { text: "Temperature", value: 'Temperature' }, { text: "Voltage", value: "Voltage", },
                { text: 'DC Voltage', value: 'DC Voltage ' }, { text: 'Volt', value: 'Volt', },
                { text: "Energy Meter", value: 'Energy Meter' }, { text: 'Over Consumption', value: 'Over Consumption', },
                { text: 'Volt L1', value: 'Volt L1' }, { text: 'Volt L2', value: 'Volt L2' },
                { text: 'Volt L3', value: 'Volt L3' }, { text: 'Total Consumption', value: 'Total Consumption' }]}
            />


            <Form.Input
              fluid
              placeholder="Graph Name"
              autoComplete="off"
              // autoFocus
              onChange={(e) => {
                model.changeFooterTitle(e.target.value);
                onUpdatePanel();
              }}
              value={model.footerTitle}
              name=""
            />
          </Form>
        </div>
      </div>
    );
  }
}

type TProps = {
  model: GraphModel;
  onUpdatePanel: Function;
};

type TState = {
  periodOptions: any;
};

export { GraphProperty as default };
