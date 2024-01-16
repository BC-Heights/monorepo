import React from 'react'
import styles from './page.module.scss'

import { getClient } from '@the-heights/apollo-client';
import { GetPostBySlugDocument, GetPostBySlugQuery, 
         GetPostTitleBySlugDocument, GetPostTitleBySlugQuery, GetPostsQuery } 
         from 'graphql/queries.generated'

import Image from 'next/image'

import parse from 'html-react-parser'
import { formatDate, formatTime } from '@the-heights/format-date'
import { multiMediaRegex, mainOptions } from './parser';

import { Metadata } from 'next'
import { notFound } from 'next/navigation';


export interface PageProps {
  post: GetPostsQuery
}

 
export const generateMetadata = async ({ params }: { params: { slug: string[] } }): Promise<Metadata> => {
  // Check if the slug conforms to the year/month/day/postName format
  const slugString = params.slug.join('/');
  const regex = /^\d{4}\/\d{2}\/\d{2}\/[\w-]+$/;
  if (!regex.test(slugString)) {
    return notFound();
  }

  const { data: { postBy } } = await getClient().query<GetPostTitleBySlugQuery>({
    query: GetPostTitleBySlugDocument,
    variables: { slug: params.slug[params.slug.length -1] },
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const metadata: Metadata = {
    title: `${postBy?.title} \u2014 The Heights` || '...',
    description: `${postBy?.title} \u2014 The Heights` || '...',
  };

  return metadata;
};


export default async function Page({ params }: { params: { slug: string[] } }) {
  const { data: { postBy } } = await getClient().query<GetPostBySlugQuery>({
    query: GetPostBySlugDocument,
    variables: {slug: params.slug[params.slug.length - 1] },
    context: {
      fetchOptions: {
        next: { revalidate: 5, },
      },
    }
  })

  let postHTML;

  if (postBy?.content) {
    const hasMultimediaCategory = postBy.categories?.nodes.some(node => node.name === 'Multimedia');
    if (hasMultimediaCategory) {
      postBy.content = await multiMediaRegex(postBy.content)
    }

    postHTML = parse(postBy.content, mainOptions) || <div>No Post Found</div>;


  return (
    <div className={styles['container']}> 
      <div className={styles['article-container']}>
        <div>
          <div className={styles['img-container']}>
            <Image 
              src={postBy.featuredImage?.node?.sourceUrl || '/images/placeholder.png'} 
              alt={postBy.featuredImage?.node?.caption  || 'No Image Found'} 
              fill={true}
              priority={true} />
          </div>
          <h1 className={styles['title']}>{postBy.title}</h1>
          <div className={styles['author']}>By {postBy.author?.node.name || ''}</div>
          <div className={styles['date']}>
            <span>{formatDate(postBy.date || '')}</span> 
            <span>Updated {formatDate(postBy.modifiedGmt || '')} at {formatTime(postBy.modifiedGmt || '')}</span>
          </div>
        </div>
        {/* post content */}
        <div className={styles['article']}>{postHTML}</div>
      </div>
    </div>
  );
  } else {
    return notFound();
  }
}
