"use client"

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GET_POST_BY_SLUG } from 'graphql/queries.ts';


export default function Page({ params }) {
  const { postBy } = useSuspenseQuery(GET_POST_BY_SLUG, {
    variables: { slug: params.slug },
  }).data || {};

  return (
      <div dangerouslySetInnerHTML={{ __html: postBy.content }}></div>
  );
}
