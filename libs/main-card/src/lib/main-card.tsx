"use client"

import styles from './main-card.module.scss';

import { MediumCard } from '@the-heights/medium-card';
import { BigCard } from '@the-heights/big-card';

import { Suspense, useRef, useEffect, useState } from 'react'
import Loading from './loading'

import { GetPostsByCatDocument } from 'graphql/queries.generated'

import { useReadQuery, useBackgroundQuery } from '@apollo/experimental-nextjs-app-support/ssr'


export interface MainCardProps {

}


export function MainCard(props: MainCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const subContainerRef = useRef<HTMLDivElement | null>(null);
  
  const [isWindowWide, setIsWindowWide] = useState<boolean | null>(true);
  
  
  useEffect(() => {
    const handleResize = () => {
      setIsWindowWide(window.innerWidth > 1136);
    };
  
    
    if (typeof window !== 'undefined') {
      handleResize();

      window.addEventListener('load', handleResize);
      window.addEventListener('resize', handleResize);
    }
  
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', handleResize);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);


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
      <div className={styles['container']} ref={containerRef}>
        <div className={styles['main-post']}>
          <BigCard
            date={firstPost?.date || "No Date Available"}
            imageSrc={firstPost?.featuredImage?.node.sourceUrl || "/default-image.jpg"}
            imageAlt={firstPost?.featuredImage?.node.caption || "No Image Caption"}
            imgW={638}
            imgH={349.89}
            priority={true}
            excerpt={firstPost?.excerpt || "No Excerpt Available"}
            slug={firstPost?.slug || "default-slug"}
            title={firstPost?.title || "Untitled"}
          ></BigCard>
        </div>
        <div className={styles['sub-container']}
            ref={subContainerRef}>
          {posts?.nodes.slice(1).map((post, index) => (
              isWindowWide ? (
                <MediumCard
                  key={index}
                  date={post.date || "No Date Available"}
                  imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
                  imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
                  imgW={150}
                  imgH={82.26}
                  slug={post.slug || "default-slug"}
                  title={post.title || "Untitled"}
                />
              ) : (
                <BigCard
                  key={index}
                  date={post.date || "No Date Available"}
                  excerpt={post.excerpt || "No Excerpt Available"}
                  imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
                  imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
                  imgW={638}
                  imgH={349.89}
                  slug={post.slug || "default-slug"}
                  title={post.title || "Untitled"}
                />
              )
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default MainCard;
