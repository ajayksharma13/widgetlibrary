import * as React from "react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Sidebar, {
  StrictSidebarProps,
} from "semantic-ui-react/dist/commonjs/modules/Sidebar";
import Menu from "semantic-ui-react/dist/commonjs/collections/Menu";
import { MenuItemProps } from "semantic-ui-react/dist/commonjs/collections/Menu/MenuItem";

import { AppHeader, AppSidebar } from "../section";
import "./style.scss";
import { TClientRoute, TRouteProps } from "../../types";
import Utils, { ScreenUtil, SCREEN_BREAKPOINT } from "../../utils";
import { Icon, Ref } from "semantic-ui-react";
import { compose } from "recompose";
import withRouterHOC from "../../hoc/with-router";
import withToastHOC from "../../hoc/with-toast";

/**
 * Dashboard layout
 */
class CompactDashboard extends React.Component<
  TClientRoute<TProps> & TRouteProps,
  TState
> {
  segmentRef: React.MutableRefObject<any> = React.createRef();
  childFn: any = {};
  state = {
    sidebar: {
      visible: true,
    },
    SidebarArgs: {},
    isShowSidebar: false,
    searchedParts: [],
  };

  /**
   * toggle sidebar
   */
  private onToggleMenuSidebar = (event: any, menuProps: MenuItemProps) => {
    const { sidebar } = this.state;
    this.setState({
      sidebar: {
        visible: !sidebar.visible,
      },
    });
  };

  // refresh child component
  refreshChildFn = () => {
    this.childFn.refresh?.();
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

    // hide scroll when sidebar show
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

  public render() {
    const { children, ...restProps } = this.props as any;
    const {
      sidebar,
      isShowSidebar,
      SidebarArgs,
      SidebarComponent,
      SidebarCallBack,
    } = this.state as TState;
    const { width = "screen half" } = SidebarArgs;
    const isTabNMobile =
      ScreenUtil.getWindowDimension().width < SCREEN_BREAKPOINT.tablet;
    return (
      <Sidebar.Pushable as={Segment} className="basic sidebar-section">
        <Sidebar
          as="div"
          className={isTabNMobile ? "bg-white wide" : `bg-white ${width}`}
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
          <div className="dashboard-layout">
            <Ref innerRef={this.segmentRef}>
              <AppHeader
                {...restProps}
                onChangeSidebar={this.onLoadSidebar}
                onToggleMenuSidebar={this.onToggleMenuSidebar}
                currentSidebarComponent={
                  SidebarComponent?.displayName || SidebarComponent?.name
                }
                currentLayout="dashboard"
              />
            </Ref>

            <Segment basic className="content-section">
              <Sidebar.Pushable className="dashboard-section" as="div">
                <Sidebar
                  className="menu-sidebar"
                  as={Menu}
                  animation="push"
                  vertical="true"
                  direction="left"
                  onHidden={this.refreshChildFn}
                  onShow={this.refreshChildFn}
                  visible={sidebar.visible}
                >
                  <AppSidebar
                    isUserLogged={restProps.isUserLogged}
                  ></AppSidebar>
                </Sidebar>
                <Sidebar.Pusher>
                  <div>
                    {children({
                      ...this.state,
                      ...restProps,
                      childFn: this.childFn,
                      onChangeSidebar: this.onLoadSidebar,
                    })}
                  </div>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
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
  sidebar: StrictSidebarProps;
  isShowSidebar: boolean;
  SidebarComponent?: React.ComponentClass<any, any>;
  SidebarArgs: any;
  SidebarCallBack?: Function;
};

const CompactDashboardLayout = compose<
  TClientRoute<TProps> & TRouteProps,
  TProps
>(
  withRouterHOC,
  withToastHOC
)(CompactDashboard);

export { CompactDashboardLayout as default };
