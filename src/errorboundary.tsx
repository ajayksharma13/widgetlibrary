import * as React from "react";

/**
 * Error Boundary
 */
type TProps = {};

/**
 * Error Boundary State
 */
type TState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.log("Error: ", error, " / ErrorInfo: " + errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Please contact to a site administrator.</h1>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary as default };
