import { GetPostsByCat } from '@the-heights/graphql';
import BigCard from './big-card';
import SmallCard from './small-card';

export interface TopicCardProps {
  category: string;
  numBig: number;
  numSmall: number;
}

export default async function TopicCard(props: TopicCardProps) {
  const numTotal = props.numBig + props.numSmall;

  const { posts } = await GetPostsByCat(
    { first: numTotal, categoryName: props.category },
    [props.category]
  );

  return (
    <div className="h-auto">
      <div className="flex flex-row justify-around items-center gap-4">
        <span />
        <span className="w-full border-t-4 border-t-[#eee] border-solid" />
        <h1 className="text-2xl font-bold">
          {props.category === 'Features'
            ? 'Magazine'
            : props.category === 'Metro'
            ? 'Newton'
            : props.category}
        </h1>
        <span className="w-full border-t-4 border-t-[#eee] border-solid" />
        <span />
      </div>
      <div>
        {posts?.nodes.map((post, index) => {
          if (index < props.numBig) {
            return (
              <BigCard
                post={post}
                key={index}
                imgSize="large"
                imgW={370}
                imgH={202.91}
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
