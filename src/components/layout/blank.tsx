import * as React from "react";
import "./layout.scss";

/**
 * Blank layout
 */
class BlankLayout extends React.Component<TProps, TState> {
  render() {
    const { children } = this.props;
    return <div>{children(this.state)}</div>;
  }
}

/**
 * props
 */
type TProps = {
  children(data: object): React.ReactNode;
};

/**
 * state
 */
type TState = {};

export { BlankLayout as default };
