import { GetPostsByCat } from '@the-heights/graphql';
import TopicComponent, { TopicComponentProps } from './topic-component';
import Link from 'next/link';

export interface TopicCardProps {
  category: string;
  topicComponents: TopicComponentProps[];
}

export default async function TopicCard(props: TopicCardProps) {
  const { posts } = await GetPostsByCat(
    { first: props.topicComponents.length, categoryName: props.category },
    [props.category]
  );

  const category =
    props.category === 'Features'
      ? 'Magazine'
      : props.category === 'Metro'
      ? 'Newton'
      : props.category;

  return (
    <div className="h-auto">
      <Link href={`/${category.toLowerCase()}`} className="flex flex-row items-start w-fit gap-4">
        <h1 className="text-2xl text-[#98002E] font-bold hover:underline">
          {category}
        </h1>
      </Link>
      <div>
        {posts?.nodes.map((post, index) => {
          return (
            <TopicComponent
              key={index}
              post={post}
              {...props.topicComponents[index]}
            />
          );
        })}
      </div>
    </div>
  );
}
