import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/react-hooks';
import * as Apollo from 'apollo-client';
import type React from 'react';
import type { NormalizedCacheObject } from 'apollo-cache-inmemory';
export async function getServerPageGetPosts(
  options: Omit<Apollo.QueryOptions<Types.GetPostsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.GetPostsQuery>({
    ...options,
    query: Operations.GetPostsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetPostsComp = React.FC<{
  data?: Types.GetPostsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetPosts =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetPostsQuery, Types.GetPostsQueryVariables>
  ) =>
  (WrappedComponent: PageGetPostsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetPostsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetPosts = {
  getServerPage: getServerPageGetPosts,
  withPage: withPageGetPosts,
};
export async function getServerPageGetPostIDs(
  options: Omit<Apollo.QueryOptions<Types.GetPostIDsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.GetPostIDsQuery>({
    ...options,
    query: Operations.GetPostIDsDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetPostIDsComp = React.FC<{
  data?: Types.GetPostIDsQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetPostIDs =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetPostIDsQuery, Types.GetPostIDsQueryVariables>
  ) =>
  (WrappedComponent: PageGetPostIDsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetPostIDsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetPostIDs = {
  getServerPage: getServerPageGetPostIDs,
  withPage: withPageGetPostIDs,
};
export async function getServerPageGetPost(
  options: Omit<Apollo.QueryOptions<Types.GetPostQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Types.GetPostQuery>({
    ...options,
    query: Operations.GetPostDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetPostComp = React.FC<{
  data?: Types.GetPostQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageGetPost =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.GetPostQuery, Types.GetPostQueryVariables>
  ) =>
  (WrappedComponent: PageGetPostComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetPostDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetPost = {
  getServerPage: getServerPageGetPost,
  withPage: withPageGetPost,
};
