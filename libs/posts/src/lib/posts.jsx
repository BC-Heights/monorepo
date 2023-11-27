"use client"

import { BigCard } from '@the-heights/big-card';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

import styles from './posts.module.scss';
import {GET_POSTS} from 'graphql/queries.ts'

  
export function Posts(props) {
  const { posts } = useSuspenseQuery(GET_POSTS, {
    variables: { first: 5 },
  }).data || {};

  console.log(posts)
  const firstPost = posts?.nodes?.[0];
  
  return (
      <div className={styles['container']}>
        <div className={styles['main-post']}>
          <BigCard
            author={firstPost?.author?.node.name}
            date={firstPost?.date}
            imageSrc={firstPost?.featuredImage?.node.sourceUrl}
            imageAlt={firstPost?.featuredImage?.node.caption}
            excerpt={firstPost?.excerpt}
            slug={firstPost?.slug}
            title={firstPost?.title}
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
  );
}

export default Posts;
