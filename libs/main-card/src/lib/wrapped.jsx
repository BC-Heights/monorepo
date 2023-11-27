'use client';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import styles from './main-card.module.scss';
import { GET_POSTS } from 'graphql/queries.ts';

import { MediumCard } from '@the-heights/medium-card';
import { BigCard } from '@the-heights/big-card';

export function Wrapped(props) {
  const { posts } =
    useSuspenseQuery(GET_POSTS, {
      variables: { first: 5 },
      context: { fetchOptions: { cache: 'force-cache' } },
    }).data || {};

  const firstPost = posts?.nodes?.[0];

  return (
    <div>
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
          {posts?.nodes.slice(1).map((post, index) => (
            <MediumCard
              key={index}
              date={post.date}
              imageSrc={post.featuredImage.node.sourceUrl}
              imageAlt={post.featuredImage.node.caption}
              slug={post.slug}
              title={post.title}
            ></MediumCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wrapped;
