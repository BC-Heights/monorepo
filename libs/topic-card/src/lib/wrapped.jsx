"use client"

import { SmallCard } from '@the-heights/small-card';
import { BigCard } from '@the-heights/big-card';

import { GET_POSTS_BY_CATEGORY } from 'graphql/queries';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default function Wrapped(props) {
  const numTotal = props.numMedium + props.numSmall;

  const { posts } = useSuspenseQuery(GET_POSTS_BY_CATEGORY, {
    variables: { first: numTotal, categoryName: props.category },
  }).data || {};

  console.log(posts);


  return (
    <div>
      {posts?.nodes.map((post, index) => {
        if (index < 2) {
          return (
            <BigCard
              key={index}
              date={post.date}
              imageSrc={post.featuredImage.node.sourceUrl}
              imageAlt={post.featuredImage.node.caption}
              slug={post.slug}
              title={post.title}
            />
          );
        } else {
          return (
            <SmallCard
              key={index}
              slug={post.slug}
              title={post.title}
            />
          );
        }
      })}

    </div>
  );
}
