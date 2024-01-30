import { unstable_cache } from 'next/cache';
import {
  GetPostsDocument,
  GetPostsQuery,
  GetPostsQueryVariables,
  GetPostBySlugDocument,
  GetPostBySlugQuery,
  GetPostBySlugQueryVariables,
  GetPostsByCatDocument,
  GetPostsByCatQuery,
  GetPostsByCatQueryVariables,
  GetImageUrlDocument,
  GetImageUrlQuery,
  GetImageUrlQueryVariables,
  SearchPostsDocument,
  SearchPostsQuery,
  SearchPostsQueryVariables,
} from './queries.generated';
import { getClient } from '@the-heights/apollo-client';

export const GetPosts = async (
  { first }: GetPostsQueryVariables,
  tags = ['posts']
) => {
  const GetPosts = unstable_cache(
    async (first) => {
      const { data } = await getClient().query<GetPostsQuery>({
        query: GetPostsDocument,
        variables: { first: first },
      });
      return data;
    },
    ['posts'],
    {
      tags: tags,
    }
  );
  return await GetPosts(first);
};

export const GetPostBySlug = async (
  { slug }: GetPostBySlugQueryVariables,
  tags = ['posts']
) => {
  const GetPostBySlug = unstable_cache(
    async (slug) => {
      const { data } = await getClient().query<GetPostBySlugQuery>({
        query: GetPostBySlugDocument,
        variables: { slug: slug },
      });
      return data;
    },
    ['posts'],
    {
      tags: tags,
    }
  );
  return await GetPostBySlug(slug);
};

export const GetPostsByCat = async (
  { first, categoryName }: GetPostsByCatQueryVariables,
  tags = ['posts']
) => {
  const GetPostsByCat = unstable_cache(
    async (first, categoryName) => {
      const { data } = await getClient().query<GetPostsByCatQuery>({
        query: GetPostsByCatDocument,
        variables: { first: first, categoryName: categoryName },
      });
      return data;
    },
    ['posts'],
    {
      tags: tags,
    }
  );
  return await GetPostsByCat(first, categoryName);
};

export const GetImageUrl = async (
  { mediaItemId }: GetImageUrlQueryVariables,
  tags = ['posts']
) => {
  const GetImageUrl = unstable_cache(
    async (mediaItemId) => {
      const { data } = await getClient().query<GetImageUrlQuery>({
        query: GetImageUrlDocument,
        variables: { mediaItemId: mediaItemId },
      });
      return data;
    },
    ['posts'],
    {
      tags: tags,
    }
  );
  return await GetImageUrl(mediaItemId);
};

export const SearchPosts = async (
  { first, search, after }: SearchPostsQueryVariables,
  tags = ['posts']
) => {
  const SearchPosts = unstable_cache(
    async (first, search, after) => {
      const { data } = await getClient().query<SearchPostsQuery>({
        query: SearchPostsDocument,
        variables: { first: first, search: search, after: after },
      });
      return data;
    },
    ['posts'],
    {
      tags: tags,
    }
  );
  return await SearchPosts(first, search, after);
};
