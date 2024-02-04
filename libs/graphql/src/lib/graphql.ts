
    
import { unstable_cache } from "next/cache";
import { 
  GetPostsDocument, GetPostsQuery, GetPostsQueryVariables,
GetPostBySlugDocument, GetPostBySlugQuery, GetPostBySlugQueryVariables,
GetPostsByCatDocument, GetPostsByCatQuery, GetPostsByCatQueryVariables,
GetImageUrlDocument, GetImageUrlQuery, GetImageUrlQueryVariables,
SearchPostsDocument, SearchPostsQuery, SearchPostsQueryVariables,
GetPostAuthorsDocument, GetPostAuthorsQuery, GetPostAuthorsQueryVariables
} from "./queries.generated";
import { getClient } from "@the-heights/apollo-client";
  
    
  export const GetPosts = async ({first, imgSize}: GetPostsQueryVariables, tags = ['posts']) => {
    const GetPosts = unstable_cache(async (first, imgSize) => {
      const { data } = await getClient().query<GetPostsQuery>({
        query: GetPostsDocument,
        variables: { first: first, imgSize: imgSize },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await GetPosts(first, imgSize);
  }
    

  export const GetPostBySlug = async ({slug, imgSize}: GetPostBySlugQueryVariables, tags = ['posts']) => {
    const GetPostBySlug = unstable_cache(async (slug, imgSize) => {
      const { data } = await getClient().query<GetPostBySlugQuery>({
        query: GetPostBySlugDocument,
        variables: { slug: slug, imgSize: imgSize },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await GetPostBySlug(slug, imgSize);
  }
    

  export const GetPostsByCat = async ({first, categoryName, imgSize}: GetPostsByCatQueryVariables, tags = ['posts']) => {
    const GetPostsByCat = unstable_cache(async (first, categoryName, imgSize) => {
      const { data } = await getClient().query<GetPostsByCatQuery>({
        query: GetPostsByCatDocument,
        variables: { first: first, categoryName: categoryName, imgSize: imgSize },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await GetPostsByCat(first, categoryName, imgSize);
  }
    

  export const GetImageUrl = async ({mediaItemId}: GetImageUrlQueryVariables, tags = ['posts']) => {
    const GetImageUrl = unstable_cache(async (mediaItemId) => {
      const { data } = await getClient().query<GetImageUrlQuery>({
        query: GetImageUrlDocument,
        variables: { mediaItemId: mediaItemId },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await GetImageUrl(mediaItemId);
  }
    

  export const SearchPosts = async ({first, search, after, imgSize}: SearchPostsQueryVariables, tags = ['posts']) => {
    const SearchPosts = unstable_cache(async (first, search, after, imgSize) => {
      const { data } = await getClient().query<SearchPostsQuery>({
        query: SearchPostsDocument,
        variables: { first: first, search: search, after: after, imgSize: imgSize },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await SearchPosts(first, search, after, imgSize);
  }
    

  export const GetPostAuthors = async ({first}: GetPostAuthorsQueryVariables, tags = ['posts']) => {
    const GetPostAuthors = unstable_cache(async (first) => {
      const { data } = await getClient().query<GetPostAuthorsQuery>({
        query: GetPostAuthorsDocument,
        variables: { first: first },
      });
      return data;
      }, ['posts'], {
        tags: tags,
      });
      return await GetPostAuthors(first);
  }
    
    