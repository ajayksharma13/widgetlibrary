import * as React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import { UserContext } from "./context";
import AuthUtil from "./utils/auth";

const BlankLayout = React.lazy(() =>
  import(
    /* webpackPrefetch:true,webpackChunkName:'wpc.blank.layout' */ "./components/layout/blank"
  )
);

const DashboardLayout = React.lazy(() =>
  import(
    /* webpackPrefetch:true,webpackChunkName:'wpc.dashboard.layout' */ "./components/layout/dashboard"
  )
);

const DesignerLayout = React.lazy(() =>
  import(
    /* webpackPrefetch:true,webpackChunkName:'wpc.dashboard.layout' */ "./components/layout/designer"
  )
);

const routes: Array<RouteProps & any> = [
  {
    id: "startup",
    pageName: "flexeSuite",
    layout: BlankLayout,
    exact: true,
    path: "/",
    redirectTo: "/login",
    component: React.lazy(() =>
      import(
        /* webpackPrefetch:true,webpackChunkName:'wpc.start' */ "./components/startup"
      )
    ),
  },
  {
    id: "login",
    pageName: "Login",
    layout: BlankLayout,
    path: "/login",
    component: React.lazy(() =>
      import(
        /* webpackPrefetch:true,webpackChunkName:'wpc.login' */ "./components/login"
      )
    ),
  },
  {
    id: "Register",
    pageName: "Register",
    layout: BlankLayout,
    path: "/register",
    component: React.lazy(() =>
      import(
        /* webpackPrefetch:true,webpackChunkName:'wpc.register' */ "./components/register"
      )
    ),
  },
  {
    id: "SampleForm",
    pageName: "Sample Form",
    layout: DashboardLayout,
    path: "/sample",
    title: "Unstock.club | Sample Form",
    // isPrivateRoute: true,
    component: React.lazy(() =>
      import(
        /* webpackPrefetch:true,webpackChunkName:'wpc.business' */ "./components/sample"
      )
    ),
    nestedRoutes: [
      {
        path: "/",
        exact: true,
        component: React.lazy(() =>
          import(
            /* webpackPrefetch:true,webpackChunkName:'wpc.business.list' */ "./components/sample/list"
          )
        ),
      },
      {
        path: "/form",
        component: React.lazy(() =>
          import(
            /* webpackPrefetch:true,webpackChunkName:'wpc.business.form' */ "./components/sample/form"
          )
        ),
      },
    ],
  },
  {
    id: "Pagenotfound",
    pageName: "Page Not Found",
    layout: BlankLayout,
    path: "*",
    component: React.lazy(() =>
      import(
        /* webpackPrefetch:true,webpackChunkName:'wpc.pagenotfound' */ "./pagenotfound"
      )
    ),
  },
];

/**Router */
class Router extends React.Component<TProps> {
  /**
   * user Context type
   */
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;
  /**
   * render route
   * @param param
   * @param index
   */
  private renderRoute = (
    {
      id,
      layout: Layout,
      component: Component,
      redirectTo,
      nestedRoutes,
      ...rest
    }: RouteProps & any,
    index: number
  ) => (routerProps: RouteComponentProps) => {
    if (redirectTo) {
      return <Redirect to={redirectTo}></Redirect>;
    }

    /**
     * Page Transition
     */
    // <CSSTransition in={routerProps.match != null} timeout={1000} classNames="page" onmountOnExit>
    return (
      <div className="page" id={id}>
        <Layout
          pageId={id}
          {...routerProps}
          isUserLogged={this.context.isUserLogged}
        >
          {(props: any = {}) => {
            /**
             * Render Component
             */
            return (
              <Component
                pageId={id}
                pageName={rest.pageName}
                {...props}
                isUserLogged={this.context.isUserLogged}
              >
                {nestedRoutes && (
                  <Switch>
                    {nestedRoutes.map(
                      (
                        {
                          component: NestedComponent,
                          path,
                          ...rest
                        }: RouteProps & any,
                        index: number
                      ) => (
                        /**
                         * Nested Component
                         */
                        <Route
                          key={index}
                          path={`${routerProps.match.path}${path}`}
                          {...rest}
                        >
                          <NestedComponent
                            {...props}
                            pageId={id}
                            {...routerProps}
                            isUserLogged={this.context.isUserLogged}
                          />
                        </Route>
                      )
                    )}
                  </Switch>
                )}
              </Component>
            );
          }}
        </Layout>
      </div>
    );
    // </CSSTransition>
  };

  public render() {
    return (
      <ReactRouter>
        <Switch>
          {routes.map(
            (
              { isPrivateRoute, ...restProps }: RouteProps & any,
              index: number
            ) => (
              <Route key={index} {...restProps}>
                {(routeProps: RouteComponentProps) =>
                  /**
                   * check route is private or public
                   */
                  isPrivateRoute ? (
                    AuthUtil.isUserLogged() ? (
                      this.renderRoute(restProps, index)(routeProps)
                    ) : (
                      // user not logged then redirect to home page
                      <Redirect to="/" push={true} />
                    )
                  ) : (
                    this.renderRoute(restProps, index)(routeProps)
                  )
                }
              </Route>
            )
          )}
        </Switch>
      </ReactRouter>
    );
  }
}

/**
 * Router props
 */
type TProps = {};

export { Router };
