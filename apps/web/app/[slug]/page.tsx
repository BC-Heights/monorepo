"use client"

import { useReadQuery, useBackgroundQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GetPostBySlugDocument } from 'graphql/queries.generated'

// import {sanitize} from 'isomorphic-dompurify';

export default function Page({ params }: { params: { slug: string } }) {
  const [queryRef] = useBackgroundQuery(GetPostBySlugDocument, {
    variables: {slug: params.slug }
  })

  const { postBy } = useReadQuery(queryRef).data || {};

  let postHTML = `<div>Post not found</div>`;

  if (postBy?.content) {
    postHTML =(postBy?.content)
  } 

  
  return (
      <div dangerouslySetInnerHTML={{ __html: postHTML}}></div>
  );
}
