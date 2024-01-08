import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  ApolloNextAppProvider
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import React = require("react");

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://www.bcheights.com/graphql",
    }),
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache"
      }
    }
  });
});

export function ApolloClient({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={getClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
