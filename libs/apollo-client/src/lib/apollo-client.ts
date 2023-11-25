import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'


const httpLink = createHttpLink({
  uri: 'https://www.bcheights.com/graphql/',
  fetchOptions: {
    mode: 'cors',
  }
});


export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/graphql/',
    },
  });
}




