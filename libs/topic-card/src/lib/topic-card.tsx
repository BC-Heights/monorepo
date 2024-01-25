import { SmallCard } from '@the-heights/small-card';
import { BigCard } from '@the-heights/big-card';

import { GetPostsByCat } from '@the-heights/graphql';


/* eslint-disable-next-line */
export interface TopicCardProps {
  category: string;
  numBig: number;
  numSmall: number;
}

export async function TopicCard(props: TopicCardProps) {
  const numTotal = props.numBig + props.numSmall;

  const posts = await GetPostsByCat(numTotal, props.category);

  return (
      <div className="w-[370px] h-auto">
        <div className="flex flex-row justify-around items-center gap-4">
          <span/>
          <span className="w-full border-t-4 border-t-[#eee] border-solid" />
            <h1 className="text-2xl font-bold">
              {props.category==='Features'? 'Magazine': props.category==='Metro'? 'Newton': props.category}
            </h1>
          <span className="w-full border-t-4 border-t-[#eee] border-solid" />
          <span/>
        </div>
        <div>
          {posts?.nodes.map((post, index) => {
            if (index < props.numBig) {
              return (
                <BigCard
                  key={index}
                  date={post.date || 'Jan 10'}
                  imageSrc={post.featuredImage?.node?.sourceUrl || '/default-image.jpg'}
                  excerpt={props.category==='Multimedia'? '': post.excerpt || 'No Excerpt'}
                  imageAlt={post.featuredImage?.node?.caption || 'No Caption'} 
                  imgW={370}
                  imgH={202.91}
                  slug={post.slug || 'default-slug'} 
                  title={post.title || 'Untitled'}
                />
              );
            } else {
              return (
                <SmallCard
                  key={index}
                  slug={post.slug || 'default-slug'}
                  title={post.title || 'Untitled'}
                  date={post.date || 'Jan 10'}
                />
              );
            }
          })}
        </div>
      </div>
  );
}

export default TopicCard;
