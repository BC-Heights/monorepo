import { unstable_cache } from "next/cache";
import { GetPostsByCatDocument, GetPostsByCatQuery, GetPostBySlugDocument, GetPostBySlugQuery } from "../graphql/queries.generated";
import { getClient } from "./apollo-client";

export const GetPostsByCat = unstable_cache(async (first, categoryName) => {
  const { data: { posts } } = await getClient().query<GetPostsByCatQuery>({
    query: GetPostsByCatDocument,
    variables: { first: first, categoryName: categoryName },
  });
  return posts;
}, ['posts'], {
  tags: ['posts'],
});

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



