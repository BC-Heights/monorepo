import React from 'react'
import styles from './page.module.scss'

import { getClient } from '@the-heights/apollo-client';
import { GetPostBySlugDocument, GetPostBySlugQuery, GetImageUrlDocument, GetImageUrlQuery } from 'graphql/queries.generated'

import Image from 'next/image'

import parse, { DOMNode, Element, HTMLReactParserOptions, domToReact } from 'html-react-parser'
import { formatDate, formatTime } from '@the-heights/format-date'


export async function getImageUrl(id: number) {
  const { data: { mediaItemBy: sourceUrl } } = await getClient().query<GetImageUrlQuery>({
    query: GetImageUrlDocument,
    variables: { mediaItemId: id },
  })

  return sourceUrl;
}

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
    const imageIdRegex = /(vc_single_image image=&#8221;(\d+)&#8243;)/;
    let match = postBy.content.match(imageIdRegex);
    console.log(match);
    console.log(postBy.content)
    while ((match = postBy.content.match(imageIdRegex)) !== null) {
      const imageUrl = await getImageUrl(Number(match[2])); // Map the ids to an array of image URLs
      console.log(match[1]); // Log the array of image URLs
      postBy.content = postBy.content.replace(match[1], `<img src="${imageUrl?.sourceUrl || 'urmom.png'}" alt="No Image Found" width="300" height="300" />`);
    }

    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode instanceof Element && domNode.name === 'p') {
          const hasAnchor = domNode.children.some(child => child instanceof Element && child.name === 'a');
          if (hasAnchor) {
            const updatedChildren = domNode.children.map((child, index) => {
              if (child instanceof Element && child.name === 'a') {
                // Maps absoulte link from database to relative link
                const href = child.attribs.href;
                const lastSlashIndex = href.lastIndexOf('/');
                const secondToLastSlashIndex = href.lastIndexOf('/', lastSlashIndex - 1);
                const newHref = href.substring(secondToLastSlashIndex === -1 ? lastSlashIndex + 1 : secondToLastSlashIndex + 1);

                const isBCHeights = href.includes("bcheights");
                
                const updatedHref = isBCHeights ? newHref : href;
                
                return <a key={index} href={updatedHref}>{domToReact(child.children as DOMNode[])}</a>;
              }

              return child;
            });
            domNode.children = updatedChildren as DOMNode[];
          }
        }

        return domNode;
      }
    };

    postHTML = parse(postBy.content, options) || <div>No Post Found</div>;
  }


  return (
    <div className={styles['container']}> 
      <div className={styles['article-container']}>
        <div>
          <div className={styles['img-container']}>
            <Image 
              src={postBy?.featuredImage?.node?.sourceUrl || '/images/placeholder.png'} 
              alt={postBy?.featuredImage?.node?.caption  || 'No Image Found'} 
              fill={true}
              priority={true} />
          </div>
          <h1 className={styles['title']}>{postBy?.title}</h1>
          <div className={styles['author']}>By {postBy?.author?.node.name || ''}</div>
          <div className={styles['date']}>
            <span>{formatDate(postBy?.date || '')}</span> 
            <span>Updated {formatDate(postBy?.modifiedGmt || '')} at {formatTime(postBy?.modifiedGmt || '')}</span>
          </div>
        </div>
        {/* post content */}
        <div className={styles['article']}>{postHTML}</div>
        {/* commented so it's clear where it is */}
      </div>
      <div className={styles['sidebar']}></div>
    </div>
  );
}
