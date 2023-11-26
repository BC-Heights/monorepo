import { createApolloClient } from '@the-heights/apollo-client';
import { ApolloProvider } from '@apollo/client';
import { useGetPostsQuery } from 'generated/graphql';
import { BigCard } from '@the-heights/big-card';
import Loading from './loading';

import styles from './posts.module.scss'; //ignore error, compiles just fine

/* eslint-disable-next-line */
export interface PostsProps {
}

  
export function Posts(props: PostsProps) {
  const { loading, error, data } = useGetPostsQuery({
    variables: {
      first: 5
    }
  });
  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  console.log(data);
  const { posts } = data || {};
  const firstPost = posts?.nodes?.[0];
  
  return (
    <ApolloProvider client={createApolloClient()}>
      <div className={styles['container']}>
        <div className={styles['main-post']}>
          <BigCard
            title={firstPost?.title || 'Default Title'}
            author={firstPost?.author?.node.name || 'Joe Smith'}
            date={firstPost?.date || 'January 10'}
            imageSrc={firstPost?.featuredImage?.node.sourceUrl || 'gif.jpg'}
            imageAlt={firstPost?.featuredImage?.node.caption || 'super cool pic'}
            excerpt={firstPost?.excerpt || 'This is a super cool excerpt'}
          ></BigCard>
        </div>
        <div className={styles['sub-container']}>
        {posts?.nodes.slice(1).map((post) => (
          <div className={styles['sub-post']} key={post?.id}>
            {post?.featuredImage?.node?.sourceUrl && post?.featuredImage?.node?.caption && (
              <img className={styles['large-image']}
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.caption} />
            )}
            <h1>{post?.title}</h1>
            <h1>{post?.date}</h1>
          </div>))}
        </div>
       </div>

    </ApolloProvider>

  );
}

export default Posts;
