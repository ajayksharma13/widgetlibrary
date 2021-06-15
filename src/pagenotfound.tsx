import React from "react";
import { Header } from "semantic-ui-react";

/**
 * Props
 */
type TProps = {};

/**
 * State
 */
type TState = {};

/**
 * Not found 404
 */
class PageNotFound extends React.Component<TProps, TState> {
  /**
   * default props
   */
  static defaultProps: TProps = {};

  /**
   * default state
   */
  state: Readonly<TState> = {};

  render() {
    return (
      <div className="not-found">
        <Header as="h1">Http 404 Page Not found</Header>
      </div>
    );
  }
}

export { PageNotFound as default };
