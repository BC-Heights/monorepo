"use client"

// @ts-expect-error ts-migrate(2307): nx monorepo issue, compiles fine but IDE complains
import styles from './topic-card.module.scss';

import { SmallCard } from '@the-heights/small-card';
import { BigCard } from '@the-heights/big-card';

import { useReadQuery, useBackgroundQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GetPostsByCatDocument } from 'graphql/queries.generated'


/* eslint-disable-next-line */
export interface TopicCardProps {
  category: string;
  numBig: number;
  numSmall: number;
}

export function TopicCard(props: TopicCardProps) {
  const numTotal = props.numBig + props.numSmall;

  const [queryRef] = useBackgroundQuery(GetPostsByCatDocument, {
    variables: { first: numTotal, categoryName: props.category }
  })

  const { posts } = useReadQuery(queryRef).data || {};

  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <span></span>
        <span className={styles['line']} />
        <h1 className={styles['title']}>{props.category}</h1>
        <span className={styles['line']} />
        <span></span>
      </div>
      <div>
        {posts?.nodes.map((post, index) => {
          if (index < props.numBig) {
            return (
              <BigCard
                key={index}
                date={post.date || 'Jan 10'}
                imageSrc={post.featuredImage?.node?.sourceUrl || '/default-image.jpg'}
                excerpt={post.excerpt || 'No Excerpt'}
                imageAlt={post.featuredImage?.node?.caption || 'No Caption'} 
                slug={post.slug || 'default-slug'} 
                title={post.title || 'Untitled'}
              />
            );
          } else {
            return (
              <SmallCard
                key={index}
                slug={post.slug || 'default-slug'}
                title={post.title || 'Untitled'}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TopicCard;
