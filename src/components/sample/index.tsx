import * as React from "react";
import { BaseComponent } from "../base";
import { withApollo } from "react-apollo";

import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";

import { compose } from "recompose";
import { TClientRoute } from "../../types";
import { GQLSample } from "./gql";

/**
 * Sample Form Component
 */
class SampleComponent extends BaseComponent<TClientRoute<TProps>, TState> {
  /**
   * declare default state value
   */
  state: Readonly<TState> = {};

  static defaultProps: TProps = {
    pageName: "Sample",
  };

  render() {
    const { children, pageName } = this.props;
    return (
      <div className="sample-section inner__page">
        <Header as="h2" className="primary inner__page__header">
          {pageName}
        </Header>
        <div className="inner__page__section">{children}</div>
      </div>
    );
  }
}

/**
 * default props
 */
type TProps = {
  children?: React.ReactNode;
  pageName: string;
};

/**
 * default state
 */
type TState = {};

const Sample = compose<TClientRoute<TProps>, TProps>(withApollo)(
  SampleComponent
);
export { Sample as default, GQLSample };
