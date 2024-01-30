import { BigCard } from '@the-heights/big-card';
import { GetPostsByCat } from '@the-heights/graphql';
import { notFound } from 'next/navigation';

/* eslint-disable-next-line */
export interface SubTopicCardProps {
  slug: string;
}

export async function SubTopicCard(props: SubTopicCardProps) {
  const { posts } = await GetPostsByCat(
    { first: 10, categoryName: props.slug },
    [props.slug]
  );

  if (posts?.nodes.length === 0) {
    // TODO: More work coming soon page
    return notFound();
  }

  return (
    <div className="w-[800px] my-8 mx-auto">
      {props.slug}
      {posts?.nodes.map((post, index) => {
        return (
          <BigCard
            key={index}
            date={post.date || 'Jan 10'}
            imageSrc={
              post.featuredImage?.node?.sourceUrl || '/default-image.jpg'
            }
            excerpt={post.excerpt || 'No Excerpt'}
            imageAlt={post.featuredImage?.node?.caption || 'No Caption'}
            imgW={800}
            imgH={440}
            slug={post.slug || 'default-slug'}
            title={post.title || 'Untitled'}
          />
        );
      })}
    </div>
  );
}

export default SubTopicCard;
