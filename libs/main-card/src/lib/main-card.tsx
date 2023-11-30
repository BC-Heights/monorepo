"use client"

import styles from './main-card.module.scss';

import { MediumCard } from '@the-heights/medium-card';
import { BigCard } from '@the-heights/big-card';

import { Suspense } from 'react'
import Loading from './loading'

import { GetPostsByCatDocument } from 'graphql/queries.generated'

import { useReadQuery, useBackgroundQuery } from '@apollo/experimental-nextjs-app-support/ssr'


export interface MainCardProps {

}


export function MainCard(props: MainCardProps) {
  

  const [queryRef] = useBackgroundQuery(GetPostsByCatDocument, {
    variables: { first: 5, categoryName: "top story" },
    context: {
      fetchOptions: {
        next: { revalidate: 60 }
      }
    }
  })


  const { posts } = useReadQuery(queryRef).data || {};

  const firstPost = posts?.nodes?.[0];


  return (
    <Suspense fallback={<Loading />}>
      <div className={styles['container']}>
        <div className={styles['main-post']}>
          <BigCard
            date={firstPost?.date || "No Date Available"}
            imageSrc={firstPost?.featuredImage?.node.sourceUrl || "/default-image.jpg"}
            imageAlt={firstPost?.featuredImage?.node.caption || "No Image Caption"}
            excerpt={firstPost?.excerpt || "No Excerpt Available"}
            slug={firstPost?.slug || "default-slug"}
            title={firstPost?.title || "Untitled"}
          ></BigCard>
        </div>
        <div className={styles['sub-container']}>
          {posts?.nodes.slice(1).map((post, index) => (
            <MediumCard
              key={index}
              date={post.date || "No Date Available"}
              imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
              imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
              slug={post.slug || "default-slug"}
              title={post.title || "Untitled"}
            ></MediumCard>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default MainCard;
