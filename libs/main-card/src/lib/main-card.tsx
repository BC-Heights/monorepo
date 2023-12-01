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
  
  const [isWrapped, setIsWrapped] = useState(false);
  const [isWindowWide, setIsWindowWide] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (containerRef.current) {
          let isWrapped = true;
          let prevBottom = 0;
          Array.from(containerRef.current.children).forEach((child) => {
            const offsetTop = (child as HTMLElement).offsetTop;
            const offsetHeight = (child as HTMLElement).offsetHeight;
  
            if (offsetTop < prevBottom) {
              isWrapped = false;
            } else {
              prevBottom = offsetTop + offsetHeight;
            }
          });
  
          setIsWrapped(isWrapped);
          console.log(isWrapped ? 'get wrapped' : 'no wrapping:(');
          setIsWindowWide(window.innerWidth > 1116);
        }
      }, 0); // Delay the execution until after the browser has completed the reflow process
    };
  
    const handleLoad = () => {
      handleResize();
  
      setIsWindowWide(window.innerWidth > 1102);
    };
  
    if (typeof window !== 'undefined') {
      handleResize();
      setIsWindowWide(window.innerWidth > 1102);
  
      window.addEventListener('resize', handleResize);
      window.addEventListener('load', handleLoad);
    }
  
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('load', handleLoad);
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
            excerpt={firstPost?.excerpt || "No Excerpt Available"}
            slug={firstPost?.slug || "default-slug"}
            title={firstPost?.title || "Untitled"}
          ></BigCard>
        </div>
        <div style={{ width: isWindowWide? '432px': '670px' }}>
          <div className={styles['sub-container']}
          ref={subContainerRef}
          >
            
            {posts?.nodes.slice(1).map((post, index) => (
                isWrapped ? (
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
                ) : (
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
                )
              
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default MainCard;
