import styles from './main-card.module.scss';
import { StyledCard } from '@the-heights/styled-card';
import { BigCard } from '@the-heights/big-card';

import { GetPostsByCatDocument, GetPostsByCatQuery } from 'graphql/queries.generated'
import { getClient } from '@the-heights/apollo-client';


export interface MainCardProps {

}


export async function MainCard() {
  const { data: {posts} } = await getClient().query<GetPostsByCatQuery>({
    query: GetPostsByCatDocument,
    variables: { first: 5, categoryName: 'top story' },
    context: {
      fetchOptions: {
        next: { tags: ["posts"] },
      },
    },
  });

  
  const firstPost = posts?.nodes?.[0];
  

  return (
    <div className={styles['container']}>
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
      <div className={styles['sub-container']}>
        {posts?.nodes.slice(1).map((post, index) => (
            <StyledCard
                key={index}
                date={post.date || "No Date Available"}
                imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
                imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
                imgW={150}
                imgH={82.26}
                excerpt={firstPost?.excerpt || "No Excerpt Available"}
                slug={post.slug || "default-slug"}
                title={post.title || "Untitled"}
              />
        ))}
      </div>
    </div>
  );
}

export default MainCard;
