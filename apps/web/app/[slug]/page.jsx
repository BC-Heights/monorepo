"use client"

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GET_POST_BY_SLUG } from 'graphql/queries.ts';

import {sanitize} from 'isomorphic-dompurify';

export default function Page({ params }) {
  const { postBy } = useSuspenseQuery(GET_POST_BY_SLUG, {
    variables: { slug: params.slug },
  }).data || {};
    
  const postHTML = sanitize(postBy.content)

  return (
      <div dangerouslySetInnerHTML={{ __html: postHTML}}></div>
  );
}
