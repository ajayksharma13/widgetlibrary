import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { compose } from "recompose";

/**
 * Router HOC
 */
class RouterHOC extends React.Component<TProps> {
  private update = ({
    pathname = this.props.history.location.pathname,
    q = {},
    state = {},
  } = {}) => {
    const currentRoute = this.getCurrentRoute();
    const updateLocation = this.getLocation({
      pathname,
      q: {
        ...currentRoute.q,
        ...q,
        returnUrl: this.props.history.location.pathname,
      },
      state: { ...(currentRoute.state as any), ...state },
    });
    this.props.history.push(updateLocation);
  };

  private getCurrentRoute = () => {
    return {
      pathname: this.props.history.location.pathname,
      q: Object.fromEntries(new URLSearchParams(location.search || "")),
      state: this.props.history.location.state ?? {},
    };
  };

  /**
   * Current location
   * @param param
   * @returns
   */
  private getLocation = ({
    pathname = this.props.history.location.pathname,
    q = this.props.history.location.search,
    state = this.props.history.location.state,
  }: any = {}) => {
    return {
      pathname,
      state,
      search: this.getQueryString(q),
    };
  };

  /**
   * Query string
   * @param q params
   * @returns
   */
  private getQueryString = (q: any = {}) => {
    const qParams = Object.keys(q).filter(
      (param) => ![null, undefined].includes(q[param])
    );
    return qParams.length
      ? "?" +
          qParams
            .map(
              (param) =>
                `${encodeURIComponent(param)}=${encodeURIComponent(q[param])}`
            )
            .join("&")
      : "";
  };

  render() {
    const { WrappedComponent, ...restProps } = this.props as TProps;
    return (
      <WrappedComponent
        update={this.update}
        getQueryString={this.getQueryString}
        getLocation={this.getLocation}
        getCurrentRoute={this.getCurrentRoute}
        {...restProps}
      ></WrappedComponent>
    );
  }
}

/**
 *
 * @param WithRouter HOC
 */
const RouterComponent = compose<TProps, unknown>(withRouter)(RouterHOC);
const withRouterHOC = <T extends {}>(
  WrappedComponent: React.ComponentType<T>
) => {
  return (props: T) => (
    <RouterComponent
      WrappedComponent={WrappedComponent}
      {...props}
    ></RouterComponent>
  );
};

export type TProps = {
  WrappedComponent: React.ComponentType<any | string>;
} & RouteComponentProps;

export { withRouterHOC as default };
