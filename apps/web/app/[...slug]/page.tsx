import React from 'react'
import styles from './page.module.scss'

import { GetPostBySlug } from '@the-heights/graphql';
import Image from 'next/image'

import parse from 'html-react-parser'
import { formatDate, formatTime } from '@the-heights/format-date'
import { multiMediaRegex, mainOptions } from './parser';

import { Metadata } from 'next'
import { notFound } from 'next/navigation';


export interface PageProps { }

 
export const generateMetadata = async ({ params }: { params: { slug: string[] } }): Promise<Metadata> => {
  // Check if the slug conforms to the year/month/day/postName format
  // There's probably a better way to do this with middleware
  const slugString = params.slug.join('/');
  const regex = /^\d{4}\/\d{2}\/\d{2}\/[\w-]+$/;
  if (!regex.test(slugString)) {
    return notFound();
  }

  const post = await GetPostBySlug(params.slug[params.slug.length - 1]);

  const metadata: Metadata = {
    title: `${post?.title} \u2014 The Heights` || '...',
    description: `${post?.title} \u2014 The Heights` || '...',
  };

  return metadata;
};


export default async function Page({ params }: { params: { slug: string[] } }) {
  const post = await GetPostBySlug(params.slug[params.slug.length - 1]);


  let postHTML;

  if (post?.content) {
    const hasMultimediaCategory = post.categories?.nodes.some(node => node.name === 'Multimedia');
    if (hasMultimediaCategory) {
      post.content = await multiMediaRegex(post.content)
    }

    postHTML = parse(post.content, mainOptions) || <div>No Post Found</div>;


  return (
    <div className={styles['container']}> 
      <div className={styles['article-container']}>
        <div>
          <div className={styles['img-container']}>
            <Image 
              src={post.featuredImage?.node?.sourceUrl || '/images/placeholder.png'} 
              alt={post.featuredImage?.node?.caption  || 'No Image Found'} 
              fill={true}
              priority={true} />
          </div>
          <h1 className={styles['title']}>{post.title}</h1>
          <div className={styles['author']}>By {post.author?.node.name || ''}</div>
          <div className={styles['date']}>
            <span>{formatDate(post.date || '')}</span> 
            <span>Updated {formatDate(post.modifiedGmt || '')} at {formatTime(post.modifiedGmt || '')}</span>
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
