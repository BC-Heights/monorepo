import { GetPostsByCat } from '@the-heights/graphql';
import BigCard from './big-card';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { headers } from 'next/headers'

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const domain = headers().get('x-forwarded-host');
  return {
    title: domain,
    description: domain,
    verification: { google: process.env.GOOGLE_SEARCH_CONSOLE },
  };
}

/* eslint-disable-next-line */
export interface SubTopicCardProps {
  slug: string;
}

export default async function SubTopicCard(props: SubTopicCardProps) {
  const { posts } = await GetPostsByCat(
    { first: 10, categoryName: props.slug },
    [props.slug],
  );

  if (posts?.nodes.length === 0) {
    // TODO: More work coming soon page
    return notFound();
  }

  return (
    <div className="mx-auto my-8 w-[800px]">
      {props.slug}
      {posts?.nodes.map((post, index) => {
        return (
          <BigCard
            post={post}
            key={index}
            imgSize="large"
            imgW={800}
            imgH={440}
            showCategory={true}
            showExcerpt={true}
          />
        );
      })}
    </div>
  );
}
