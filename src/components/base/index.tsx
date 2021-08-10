import * as React from "react";

/**
 * Base Component
 */
class BaseComponent<
  Props = {},
  State = {},
  Snapshot = {}
> extends React.Component<Props, State, Snapshot> {}

/**
 * Base Pure Component
 */
class BasePureComponent<
  Props = {},
  State = {},
  Snapshot = {}
> extends React.PureComponent<Props, State, Snapshot> {}

export { BaseComponent, BasePureComponent };
