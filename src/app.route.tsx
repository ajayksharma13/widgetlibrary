import * as React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";

const BlankLayout = React.lazy(() =>
  import(
    /* webpackPrefetch:true,webpackChunkName:'wpc.blank.layout' */ "./components/layout/blank"
  )
);

const routes: Array<RouteProps & any> = [
  {
    id: "widget",
    pageName: "Widget Template",
    layout: BlankLayout,
    exact: true,
    path: "/",
    component: React.lazy(() =>
      import(
        /* webpackPrefetch:true,webpackChunkName:'wpc.start' */ "./components/startup"
      )
    ),
  },
  // // {
  // //   id: "login",
  // //   pageName: "Login",
  // //   layout: BlankLayout,
  // //   path: "/login",
  // //   component: React.lazy(() =>
  // //     import(
  // //       /* webpackPrefetch:true,webpackChunkName:'wpc.login' */ "./components/login"
  // //     )
  // //   ),
  // // },
  // {
  //   id: "Register",
  //   pageName: "Register",
  //   layout: BlankLayout,
  //   path: "/register",
  //   component: React.lazy(() =>
  //     import(
  //       /* webpackPrefetch:true,webpackChunkName:'wpc.register' */ "./components/register"
  //     )
  //   ),
  // },
  // {
  //   id: "Dashboard",
  //   pageName: "Dashboard",
  //   layout: DashboardLayout,
  //   path: "/dashboard",
  //   component: React.lazy(() =>
  //     import(
  //       /* webpackPrefetch:true,webpackChunkName:'wpc.dashboard' */ "./components/dashboard"
  //     )
  //   ),
  // },
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
  public render() {
    return (
      <ReactRouter>
        <Switch>
          {routes.map(
            (
              {
                layout: Layout,
                component: Component,
                ...routeProps
              }: RouteProps & any,
              index: number
            ) => (
              <Route key={index} {...routeProps}>
                <Layout>{(props: any = {}) => <Component {...props} />}</Layout>
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
