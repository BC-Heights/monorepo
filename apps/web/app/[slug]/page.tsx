"use client"

import React from 'react'

import styles from './page.module.scss'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { GetPostBySlugDocument } from 'graphql/queries.generated'

import Image from 'next/image'

import parse, { DOMNode, Element, HTMLReactParserOptions, domToReact } from 'html-react-parser'
import { formatDate, formatTime } from '@the-heights/format-date'


export default function Page({ params }: { params: { slug: string } }) {
  const { data: { postBy } } = useSuspenseQuery(GetPostBySlugDocument, {
    variables: {slug: params.slug }
  })

  
  let postHTML;

  if (postBy?.content) {
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
                
                // If it doesn't contain "bcheights", make it an absolute link
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
        <div className={styles['article']}>{postHTML}</div>
      </div>
      <div className={styles['sidebar']}></div>
  </div>
  );
}
