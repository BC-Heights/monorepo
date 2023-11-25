import { createApolloClient } from '@the-heights/apollo-client';
import { ApolloProvider } from '@apollo/client';
import { useGetPostsQuery } from 'generated/graphql';

/* eslint-disable-next-line */
export interface PostsProps {
}

  
export function Posts(props: PostsProps) {
  const { loading, error, data } = useGetPostsQuery({
    variables: {
      first: 5
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <ApolloProvider client={createApolloClient()}>
      <div>
        <h1>Welcome to posts!</h1>
        {/*map each of the posts here*/}
        {data?.posts?.nodes.map((post) => (
          <div key={post?.id}>
            {post?.featuredImage?.node?.sourceUrl && (
              <img src={post.featuredImage.node.sourceUrl} alt="Your Alt Text" />
            )}
            <h1>{post?.title}</h1>
            <h1>{post?.date}</h1>
          </div>))}
       </div>

    </ApolloProvider>

  );
}

export default Posts;
