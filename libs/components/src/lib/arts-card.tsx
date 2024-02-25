import { GetPostsByCat } from '@the-heights/graphql';
import { formatHrefDate } from '@the-heights/utils';
import Link from 'next/link';
import { AuthorName } from './tags';


export interface ArtsCardProps{
  category: string;
}

export default async function ArtsCard(props: ArtsCardProps) {
  const numberOfPostsToFetch = 6;


  const { posts } = await GetPostsByCat(
    { first: numberOfPostsToFetch, categoryName: props.category },
    [props.category]
  );


  return (
    <div className="h-auto">
      <div className="flex flex-row items-start gap-4">
        <h1 className="text-2xl text-[#98002E] font-bold">{props.category}</h1>
      </div>
      <div className='grid grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {posts?.nodes.map((post, index) => (
          <div key={index} className='relative'>
            <Link href={`/${formatHrefDate(post.date!)}/${post.slug!}`}>
              <div className="group relative">
                <img className="object-cover group-hover:grayscale" src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'} alt={post.featuredImage?.node.caption || 'No Alt'} />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#98002E] bg-opacity-0 group-hover:bg-opacity-40">
                  <p className="text-white text-lg font-bold text-center">{post.title}</p>
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
