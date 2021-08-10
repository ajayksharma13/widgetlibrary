import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { StoreUtil } from ".";
import { alert } from "../hoc/with-toast";
import AuthUtil from "./auth";

const REACT_APP_ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY || "";

/**
 * Apollo middleware
 */
class ApolloMiddleware {
  /**
   * pre post link
   */
  static authLink() {
    return new ApolloLink((operation: any, forward: any) => {
      const token = StoreUtil.get(REACT_APP_ACCESS_TOKEN_KEY);

      // add the authorization to the headers
      operation.setContext({
        headers: {
          Authorization: token && `Bearer ${token}`,
          "Accept-Encoding": "gzip",
        },
      });

      // forward operation
      return forward(operation).map((response: any) => {
        // post operation
        return response;
      });
    });
  }

  /**
   * error link
   */
  static errorLink(): ApolloLink {
    return onError(({ graphQLErrors, networkError, operation, forward }) => {
      (async () => {
        if (graphQLErrors) {
          for (let error of graphQLErrors) {
            const { extensions } = error as any;
            switch ((extensions as any).code) {
              // Apollo Server sets code to UNAUTHENTICATED
              // when an AuthenticationError is thrown in a resolver
              case "UNAUTHENTICATED" && error.message == "Token_expired": {
                // Modify the operation context with a new token
                await AuthUtil.refreshToken();

                //const token = StoreUtil.get(REACT_APP_ACCESS_TOKEN_KEY);
                // const oldHeaders = operation.getContext().headers;
                // operation.setContext({
                //   headers: {
                //     ...oldHeaders,
                //     Authorization: token && `Bearer ${token}`,
                //   },
                // });
                // Retry the request, returning the new observable

                return forward(operation);
                break;
              }

              case "UNAUTHENTICATED": {
                //await AuthUtil.logout(true);
                StoreUtil.removeAll();
                break;
              }

              case "ARGUMENT_VALIDATION_ERROR": {
                return forward(operation);
                break;
              }
              case "INTERNAL_SERVER_ERROR":
              case "500": {
                alert({
                  title: "warning",
                  description: "Oops, something went wrong..",
                });
                console.error(
                  `Error : ${error.message} \n for detail error see server log`
                );
                break;
              }
            }
          }
        }

        // To retry on network errors, we recommend the RetryLink
        // instead of the onError link. This just logs the error.
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      })();
    });
  }
}

export { ApolloMiddleware };
