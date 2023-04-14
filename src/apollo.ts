import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
// import { logErrorMessages } from '@vue/apollo-util'
import AuthService from './services/auth';

interface MakeClientOptions {
  rootUri: string;
  onAuthError: any;
  clientOptions: any;
}

export function makeClient({
  rootUri,
  onAuthError,
  clientOptions = {},
}: MakeClientOptions) {
  const httpLink: ApolloLink = new HttpLink({
    uri: rootUri,
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: AuthService.getAuthorizationHeader(),
      },
    };
  });
  const errorLink = onError((errorResponse) => {
    if (
      errorResponse.graphQLErrors &&
      errorResponse.graphQLErrors.some(
        ({ code }: any) => code === 'unauthorized'
      )
    ) {
      onAuthError();
    } else if (
      errorResponse.networkError &&
      errorResponse.networkError.statusCode === 401
    ) {
      onAuthError();
    } else {
      // TODO: get the react equivalent of this
      // logErrorMessages(errorResponse);
    }
  });
  const link = from([errorLink, authLink, httpLink]);
  const cache = new InMemoryCache({});

  const client = new ApolloClient({
    link,
    cache,
    // This will temporary disable query force-fetching
    ssrForceFetchDelay: 100,
    // Apollo devtools
    connectToDevTools: process.env.NODE_ENV !== 'production',
    ...clientOptions,
  });

  return client;
}

export default makeClient({
  rootUri: 'http://localhost:5050/admin/api/v1/graphql',
  onAuthError: () => {
    AuthService.clearToken();
  },
  clientOptions: {},
});
