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
  error: any;
};

class ErrorBoundary extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = { hasError: false, error: {} };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.log("Error: ", error, " / ErrorInfo: " + errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error-boundary">
          <h2>Please contact to a site administrator.</h2>
          {this.state.error}
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary as default };
