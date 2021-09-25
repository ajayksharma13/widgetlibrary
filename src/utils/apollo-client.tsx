import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat, split, from } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloMiddleware } from './apollo-middleware';
import { createUploadLink } from 'apollo-upload-client';

const APOLLO_CLIENT_HTTP_URI = process.env.REACT_APP_APOLLO_CLIENT_HTTP_URI as string;
const APOLLO_CLIENT_WS_URI = process.env.REACT_APP_APOLLO_CLIENT_WS_URI as string;

/**
 * GQL Apollo Utility
 */
class GQLApollo {
  static initClient(uri: string | undefined = APOLLO_CLIENT_HTTP_URI) {
    // websocket link should be used for Subscriptions and Push Notificaitons
    const wsLink = new WebSocketLink({
      uri: APOLLO_CLIENT_WS_URI,
      options: {
        reconnect: true,
      },
    });

    //HttpLink should be used for Queries and Mutations
    // const httpLink = new HttpLink({
    //   uri: APOLLO_CLIENT_HTTP_URI,
    // });

    const uploadLink = createUploadLink({
      uri: APOLLO_CLIENT_HTTP_URI,
    });

    const link = split(
      //Splip based on operation type
      ({ query }) => {
        const defination = getMainDefinition(query);
        return defination.kind === 'OperationDefinition' && defination.operation === 'subscription';
      },
      wsLink,
      (uploadLink as unknown) as ApolloLink,
    );
    // const logoutLink = onError(({ networkError }: any) => {
    //   console.log('response from server');
    //   if (networkError.statusCode === 401) logout();
    // });

    return new ApolloClient({
      link: from([ApolloMiddleware.authLink(), ApolloMiddleware.errorLink(), link]),
      cache: new InMemoryCache(),
    });
  }
}

export { GQLApollo };
function logout() {
  throw new Error('Function not implemented.');
}
