'use client'

import { HttpLink, ApolloLink } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
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
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        posts: relayStylePagination(),
        },
    }),
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
        fetchPolicy: "network-only",
      },
    },
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
