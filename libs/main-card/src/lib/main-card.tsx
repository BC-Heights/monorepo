"use client"

import styles from './main-card.module.scss';
import { MediumCard } from '@the-heights/medium-card';
import { BigCard } from '@the-heights/big-card';

import { useRef, useEffect, useState } from 'react'

import { GetPostsByCatDocument } from 'graphql/queries.generated'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import Loading from './loading'


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

      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const { data } = useSuspenseQuery(GetPostsByCatDocument, {
    variables: {first: 5 , categoryName: "top story"},
    context: {
      fetchOptions: {
        next: {revalidate: 10 }
      }
    }
  })

  const posts = data.posts;
  const firstPost = posts?.nodes?.[0];

  const [isLoading, setIsLoading] = useState<boolean>(true); // Add useState for isLoading

  useEffect(() => {
    const delay = 50; // Delay in milliseconds

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading) {
    return <Loading />; // Render a loading state while waiting for the delay, lets layout shift
  }

  return (
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
  );
}

export default MainCard;
