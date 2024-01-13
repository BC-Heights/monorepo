'use client'

import { HttpLink } from "@apollo/client";
import { ApolloLink } from "@apollo/client/core";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";


function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://www.bcheights.com/graphql",
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
    defaultOptions: {
      query: {
        fetchPolicy: "no-cache",
      },
    }
  });
}

/* eslint-disable-next-line */
export interface ApolloWrapperProps {
  children: React.ReactNode;
}

export function ApolloWrapper(props: ApolloWrapperProps) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {props.children}
    </ApolloNextAppProvider>
  );
}

export default ApolloWrapper;
