import { Formik, FormikProps } from "formik";
import * as React from "react";
import { Form, Grid, Header, Input, Segment, Table } from "semantic-ui-react";
import { BaseComponent } from "../../base";
import model from "./model";
import FlipcardModel from "./model";
import "./style.scss";

/**
 * Flipcard Property
 */
class FlipcardProperty extends BaseComponent<TProps, TState> {
  /*
   * default state
   */
  state: TState = {};

  static defaultProps: TProps = {
    model: new FlipcardModel(),
    onUpdatePanel: () => {},
  };

  render() {
    const { model, onUpdatePanel } = this.props;
    return (
      <div className="flipcard-card property">
        <div className="property__header">
          <Header as="h4" className="header primary">
            Flipcard
          </Header>
        </div>
        <div className="property__content">
          <Form>
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
            <Form.Select
              fluid
              placeholder="Footer title"
              options={[
                {
                  text: "Option 1",
                  value: "Option 1",
                },
                {
                  text: "Option 2",
                  value: "Option 2",
                },
              ]}
              name=""
            />
            <Form.Select
              fluid
              placeholder="Footer title"
              options={[
                {
                  text: "Option 1",
                  value: "Option 1",
                },
                {
                  text: "Option 2",
                  value: "Option 2",
                },
              ]}
              name=""
            />
          </Form>
        </div>
      </div>
    );
  }
}

type TProps = {
  model: FlipcardModel;
  onUpdatePanel: Function;
};

type TState = {};

export { FlipcardProperty as default };
