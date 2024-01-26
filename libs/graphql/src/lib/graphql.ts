import { unstable_cache } from "next/cache";
import { 
  GetPostsByCatDocument, GetPostsByCatQuery, 
  GetPostBySlugDocument, GetPostBySlugQuery,
  SearchPostsDocument, SearchPostsQuery,
  GetImageUrlDocument, GetImageUrlQuery } from "./queries.generated";
import { getClient } from "@the-heights/apollo-client";


export const GetPostsByCat = async (first: number, categoryName: string, tags = ['posts']) => {
  const PostsByCat = unstable_cache(async (first, categoryName) => {
    const { data: { posts } } = await getClient().query<GetPostsByCatQuery>({
      query: GetPostsByCatDocument,
      variables: { first: first, categoryName: categoryName },
    });
    return posts;
    }, ['posts'], {
      tags: tags,
    });
    return await PostsByCat(first, categoryName);
}


export const GetPostBySlug = async (slug: string, tags = ['posts']) => {
  const PostBySlug = unstable_cache(async (slug) => {
    const { data: { postBy} } = await getClient().query<GetPostBySlugQuery>({
      query: GetPostBySlugDocument,
      variables: { slug: slug },
    });
    return postBy;
    }, ['posts'],
    {
      tags: tags,
    });
    return await PostBySlug(slug);
}


export const SearchPosts = async (search: string, first: number, after: string, tags = ['posts']) => {
  const Posts = unstable_cache(async (search, first, after) => {
    const { data: { posts } } = await getClient().query<SearchPostsQuery>({
      query: SearchPostsDocument,
      variables: { search: search, first: first, after: after },
    });
    return posts;
    }, ['posts'],
    {
      tags: tags,
    });
    return await Posts(search, first, after);
}

export const GetImageUrl = async (id: number, tags = ['images']) => {
  const ImageUrl = unstable_cache(async (id) => {
    const { data: { mediaItemBy: sourceUrl } } = await getClient().query<GetImageUrlQuery>({
      query: GetImageUrlDocument,
      variables: { id: id },
    });
    return sourceUrl;
    }, ['images'],
    {
      tags: tags,
    });
  return await ImageUrl(id);
}
