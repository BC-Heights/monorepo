import { BigCard } from '@the-heights/big-card';
import { GetPostsByCatDocument, GetPostsByCatQuery } from 'graphql/queries.generated'
import { getClient } from '@the-heights/apollo-client';
import { notFound } from 'next/navigation';

/* eslint-disable-next-line */
export interface SubTopicCardProps {
  slug: string;
}

export async function SubTopicCard(props: SubTopicCardProps) {
  const { data: { posts }} = await getClient().query<GetPostsByCatQuery>({
    query: GetPostsByCatDocument,
    variables: { first: 5, categoryName: props.slug },
    context: {
      fetchOptions: {
        next: { tags: ["posts"] },
      },
    },
  });

  if (posts?.nodes.length === 0) {
    // TODO: More work coming soon page
    return notFound();
  }

  return (
    <div style={{ width: '800px', margin: '32px auto' }}>
      {posts?.nodes.map((post, index) => {
        return(
            <BigCard
              key={index}
              date={post.date || 'Jan 10'}
              imageSrc={post.featuredImage?.node?.sourceUrl || '/default-image.jpg'}
              excerpt={ post.excerpt || 'No Excerpt'}
              imageAlt={post.featuredImage?.node?.caption || 'No Caption'} 
              imgW={800}
              imgH={440}
              slug={post.slug || 'default-slug'} 
              title={post.title || 'Untitled'}
            />
        );
      })}
    </div>
  )
}

export default SubTopicCard;