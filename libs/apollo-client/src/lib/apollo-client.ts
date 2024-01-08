// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// export const { getClient } = registerApolloClient(() => {
//     return new ApolloClient({
//       cache: new InMemoryCache(),
//       link: new HttpLink({
//         uri: "https://www.bcheights.com/graphql",
//       }),
//       defaultOptions: {
//         query: {
//           fetchPolicy: 'no-cache'
//         },
//       }
//     });
//   });

import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://www.bcheights.com/graphql",
    }),
  });
});