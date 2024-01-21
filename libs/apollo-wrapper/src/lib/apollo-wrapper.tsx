"use client";

import { HttpLink, ApolloLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

import { StrictTypedTypePolicies } from "./apollo-helpers";

const typePolicies: StrictTypedTypePolicies = {
  RootQuery: {
    fields: {
      post: {
        keyArgs: ["search"],
      }
    }
  }
}

function makeClient() {
  const httpLink = new HttpLink({
      uri: "https://www.bcheights.com/graphql",
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({typePolicies}),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}