import { unstable_cache } from "next/cache";
import { 
  GetPostsByCatDocument, GetPostsByCatQuery, 
  GetPostBySlugDocument, GetPostBySlugQuery,
  SearchPostsDocument, SearchPostsQuery,
  GetImageUrlDocument, GetImageUrlQuery } from "../graphql/queries.generated";
import { getClient } from "./apollo-client";

export const GetPostsByCat = unstable_cache(async (first, categoryName) => {
  const { data: { posts } } = await getClient().query<GetPostsByCatQuery>({
    query: GetPostsByCatDocument,
    variables: { first: first, categoryName: categoryName },
  });
  return posts;
  }, ['posts'], {
    tags: ['posts'],
  }
);

export const GetPostBySlug = unstable_cache(async (slug) => {
  const { data: { postBy} } = await getClient().query<GetPostBySlugQuery>({
    query: GetPostBySlugDocument,
    variables: { slug: slug },
  });
  return postBy;
  }, ['posts'],
  {
    tags: ['posts'],
  }
);

export const SearchPosts = unstable_cache(async (search, first, after) => {
  const { data: { posts } } = await getClient().query<SearchPostsQuery>({
    query: SearchPostsDocument,
    variables: { search: search, first: first, after: after },
  });
  return posts;
  }, ['posts'],
  {
    tags: ['posts'],
  }
);

export const GetImageUrl = unstable_cache(async (id) => {
  const { data: { mediaItemBy: sourceUrl } } = await getClient().query<GetImageUrlQuery>({
    query: GetImageUrlDocument,
    variables: { id: id },
  });
  return sourceUrl;
  }, ['images'],
  {
    tags: ['images'],
  }
);