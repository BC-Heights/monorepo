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
  GetAuthorInfoDocument,
  GetAuthorInfoQuery,
  GetAuthorInfoQueryVariables,
  GetAuthorPostsDocument,
  GetAuthorPostsQuery,
  GetAuthorPostsQueryVariables,
} from './queries.generated';
import { getClient } from '@the-heights/apollo-client';

import {
  PostBaseFragment,
  PostPageFragment,
  PostCardFragment,
} from './fragments.generated';

export type PostFragment = PostBaseFragment &
  PostPageFragment &
  PostCardFragment;

export const GetPosts = async (
  { first, imgSize }: GetPostsQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<GetPostsQuery>({
    query: GetPostsDocument,
    variables: { first: first, imgSize: imgSize },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};

export const GetPostBySlug = async (
  { slug, imgSize }: GetPostBySlugQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<GetPostBySlugQuery>({
    query: GetPostBySlugDocument,
    variables: { slug: slug, imgSize: imgSize },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};

export const GetPostsByCat = async (
  { first, categoryName, imgSize }: GetPostsByCatQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<GetPostsByCatQuery>({
    query: GetPostsByCatDocument,
    variables: { first: first, categoryName: categoryName, imgSize: imgSize },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};

export const GetImageUrl = async (
  { mediaItemId }: GetImageUrlQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<GetImageUrlQuery>({
    query: GetImageUrlDocument,
    variables: { mediaItemId: mediaItemId },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};

export const SearchPosts = async (
  { first, search, after, imgSize }: SearchPostsQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<SearchPostsQuery>({
    query: SearchPostsDocument,
    variables: { first: first, search: search, after: after, imgSize: imgSize },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};

export const GetAuthorInfo = async (
  { id, type }: GetAuthorInfoQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<GetAuthorInfoQuery>({
    query: GetAuthorInfoDocument,
    variables: { id: id, type: type },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};

export const GetAuthorPosts = async (
  { id, type, imgSize }: GetAuthorPostsQueryVariables,
  tags?: string[]
) => {
  const { data } = await getClient().query<GetAuthorPostsQuery>({
    query: GetAuthorPostsDocument,
    variables: { id: id, type: type, imgSize: imgSize },
    context: tags ? { next: { tags: tags } } : undefined,
  });
  return data;
};
