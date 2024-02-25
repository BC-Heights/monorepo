import { GetPostsByCat } from '@the-heights/graphql';
import { formatHrefDate } from '@the-heights/utils';
import Link from 'next/link';
import { AuthorName } from './tags';

export interface ArtsCardProps {
  category: string;
}

export default async function ArtsCard(props: ArtsCardProps) {
  const numberOfPostsToFetch = 4;

  const { posts } = await GetPostsByCat(
    { first: numberOfPostsToFetch, categoryName: props.category },
    [props.category],
  );

  return (
    <div className="h-auto">
      <div className="flex flex-row items-start gap-4">
        <h1 className="text-2xl font-bold text-[#98002E]">{props.category}</h1>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {posts?.nodes.map((post, index) => (
          <div key={index} className="relative">
            <Link href={`/${formatHrefDate(post.date!)}/${post.slug!}`}>
              <div className="group relative">
                <img
                  className="object-cover group-hover:grayscale"
                  src={
                    post.featuredImage?.node.sourceUrl || '/default-image.jpg'
                  }
                  alt={post.featuredImage?.node.caption || 'No Alt'}
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center 
                           bg-[#98002E] bg-opacity-40 opacity-100 transition-opacity duration-300 
                           sm:bg-opacity-0 sm:opacity-0
                             group-hover:bg-opacity-40 group-hover:opacity-100"
                >
                  <p className="text-center text-lg font-bold text-white">
                    {post.title}
                  </p>
                  <AuthorName {...post} />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
