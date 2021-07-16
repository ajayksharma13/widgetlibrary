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
> extends React.PureComponent<Props, State, Snapshot> {}

export { BaseComponent };
