import * as React from "react";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);

/**
 * Base Component
 */
class BaseComponent<
  Props = {},
  State = {},
  Snapshot = {}
> extends React.PureComponent<Props, State, Snapshot> {
  rendereComplete() {
    /**custom render complete function */
  }
  componentDidMount() {
    setTimeout(() => {
      this.rendereComplete();
    });
  }
}

export { BaseComponent };
