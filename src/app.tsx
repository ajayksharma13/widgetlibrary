import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import { Loader } from "semantic-ui-react";
import { Router } from "./app.route";
import { ThemeProvider } from "./context";
import BasicStyleSheet from "./data/stylesheet/basic.json";
import ErrorBoundary from "./errorboundary";

import 'semantic-ui-less/semantic.less';
import "./app.scss";
import { ApolloProvider } from "react-apollo";
import { GQLApollo } from "./utils/apollo-client";

const ApolloClient = GQLApollo.initClient();

/**
 * Props
 */
type Props = {};


/**
 * App component
 */
class App extends Component<Props> {
  render() {
    return (
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="page-loading">
              <Loader size="big" active inline>
                Loading...
              </Loader>
            </div>
          }
        >
          <ApolloProvider client={ApolloClient}>
            <ThemeProvider value={BasicStyleSheet}>
              <Router></Router>
            </ThemeProvider>
          </ApolloProvider>
        </Suspense>
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
