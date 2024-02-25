import { GetPostsByCat } from '@the-heights/graphql';
import  { TopicComponentProps } from './topic-component';
import { formatHrefDate } from '@the-heights/utils';
import Link from 'next/link';


export interface ArtsCardProps{
  category: string;
  topicComponents: TopicComponentProps[];
 
}

export default async function ArtsCard(props: ArtsCardProps) {
  const numberOfPostsToFetch = props.topicComponents.length;


  const { posts } = await GetPostsByCat(
    { first: numberOfPostsToFetch, categoryName: props.category },
    [props.category]
  );


  return (
    <div className="h-auto">
      <div className="flex flex-row items-start gap-4">
        <h1 className="text-2xl text-[#98002E] font-bold">{props.category}</h1>
      </div>
      <div>
        {posts?.nodes.map((post, index) => {
          return (
            <div className='flex flex-wrap '>
              <div className='relative h-1/2 w-1/2 p-1'>
                <Link href={`/${formatHrefDate(post.date!)}/${post.slug!}`}>
                  <div className="group relative">
                    <img className="object-cover group-hover:grayscale" src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'} alt={post.featuredImage?.node.caption || 'No Alt'} />
                      <div className="absolute inset-0 flex items-center justify-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-800 bg-opacity-0 group-hover:bg-opacity-30 h-1/2">
                        <p className="text-white text-lg font-bold">{post.title}</p>
                      </div>
                  </div>
                </Link>
              </div>

              <div className='relative h-1/2 w-1/2 p-1'>
                <Link href={`/${formatHrefDate(post.date!)}/${post.slug!}`}>
                  <div className="group relative">
                    <img className="object-cover group-hover:grayscale" src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'} alt={post.featuredImage?.node.caption || 'No Alt'} />
                      <div className="absolute inset-0 flex items-center justify-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-800 bg-opacity-0 group-hover:bg-opacity-30 h-1/2">
                        <p className="text-white text-lg font-bold">{post.title}</p>
                      </div>
                  </div>
                </Link>
              </div>

              <div className='relative h-1/2 w-1/2 p-1'>
                <Link href={`/${formatHrefDate(post.date!)}/${post.slug!}`}>
                  <div className="group relative">
                    <img className="object-cover group-hover:grayscale" src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'} alt={post.featuredImage?.node.caption || 'No Alt'} />
                      <div className="absolute inset-0 flex items-center justify-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-800 bg-opacity-0 group-hover:bg-opacity-30 h-1/2">
                        <p className="text-white text-lg font-bold">{post.title}</p>
                      </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
