import * as React from "react";
import compose from "recompose/compose";
import { Icon, Ref, Sidebar } from "semantic-ui-react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import withRouterHOC from "../../hoc/with-router";
import withToastHOC from "../../hoc/with-toast";
import { TClientRoute, TRouteProps } from "../../types";
import Utils, { ScreenUtil, SCREEN_BREAKPOINT, LOGO_URL } from "../../utils";
import { AppHeader } from "../section";
import "./style.scss";

/**
 * Designer layout
 */
class Designer extends React.Component<
  TClientRoute<TProps> & TRouteProps,
  TState
> {
  segmentRef: React.MutableRefObject<any> = React.createRef();
  /**
   * default state
   */
  state: Readonly<TState> = {
    SidebarArgs: {},
    isShowSidebar: false,
  };

  /**
   * sidebar component
   */
  onLoadSidebar = (
    isShowSidebar = !this.state.isShowSidebar,
    SidebarComponent: React.ComponentClass<any, any> | undefined = undefined,
    SidebarArgs: any = {},
    SidebarCallBack: Function | undefined = undefined
  ) => {
    this.setState({
      isShowSidebar,
      SidebarArgs,
      SidebarComponent,
      SidebarCallBack,
    });
    this.props.update({
      q: { sidebar: SidebarComponent?.displayName || SidebarComponent?.name },
    });

    //hide scroll when sidebar show
    window.scroll({ top: 0 });
    setTimeout(
      () =>
        ((document.getElementsByTagName(
          "body"
        ) as any)[0].style.overflow = isShowSidebar ? "hidden" : "auto")
    );
  };

  /**
   * change state
   * @param value
   */
  private onChangeLayoutState = async (value: any = {}) => {
    await Utils.asyncState(this, value);
  };

  render() {
    const {
      isShowSidebar,
      SidebarArgs,
      SidebarComponent,
      SidebarCallBack,
    } = this.state as TState;
    const { width = "screen half" } = SidebarArgs;
    const isTabNMobile =
      ScreenUtil.getWindowDimension().width < SCREEN_BREAKPOINT.tablet;

    const { children, ...restProps } = this.props;
    return (
      <Sidebar.Pushable as={Segment} className="basic sidebar-section">
        <Sidebar
          as="div"
          className={isTabNMobile ? "wide sidebar-bg" : `sidebar-bg ${width}`}
          animation="overlay"
          onHide={() => this.onLoadSidebar(false, undefined)}
          vertical="true"
          width="wide"
          direction="right"
          visible={isShowSidebar}
          target={isTabNMobile ? undefined : this.segmentRef}
        >
          <Segment basic className="sidebar-section p-0">
            <React.Suspense fallback={<div>loading...</div>}>
              {SidebarComponent && (
                <SidebarComponent
                  {...SidebarArgs}
                  SidebarCallBack={SidebarCallBack}
                  onChangeSidebar={this.onLoadSidebar}
                  onChangeLayoutState={this.onChangeLayoutState}
                ></SidebarComponent>
              )}
            </React.Suspense>
            <Icon
              link
              title="Close"
              onClick={() => this.onLoadSidebar(false)}
              className="sidebar-close-icon"
              name="close"
            />
          </Segment>
        </Sidebar>
        <Sidebar.Pusher dimmed={isShowSidebar}>
          <div className="designer-layout">
            <Ref innerRef={this.segmentRef}>
              <AppHeader
                {...restProps}
                onChangeSidebar={this.onLoadSidebar}
                currentSidebarComponent={
                  SidebarComponent?.displayName || SidebarComponent?.name
                }
                currentLayout="designer"
              />
            </Ref>
            <Segment basic className="content-section">
              {children({
                ...this.state,
                onChangeSidebar: this.onLoadSidebar,
                ...restProps,
              })}
            </Segment>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
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
type TState = {
  isShowSidebar: boolean;
  SidebarComponent?: React.ComponentClass<any, any>;
  SidebarArgs: any;
  SidebarCallBack?: Function;
};

const DesignerLayout = compose<TClientRoute<TProps> & TRouteProps, TProps>(
  withRouterHOC,
  withToastHOC
)(Designer);
export { DesignerLayout as default };
