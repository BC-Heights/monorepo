import { GetPostsByCat } from '@the-heights/graphql';
import TopicComponent, { TopicComponentProps } from './topic-component';
import Link from 'next/link';

export interface TopicCardProps {
  category: string;
  topicComponents: TopicComponentProps[];
  className?: string;
}

export default async function TopicCard(props: TopicCardProps) {
  const { posts } = await GetPostsByCat(
    { first: props.topicComponents.length, categoryName: props.category },
    [props.category],
  );

  const category =
    props.category === 'Features'
      ? 'Magazine'
      : props.category === 'Metro'
        ? 'Newton'
        : props.category;

  return (
    <div className={`h-auto ${props.className}`}>
      <Link
        href={`/${category.toLowerCase()}`}
        className="flex w-fit flex-row items-start gap-4"
      >
        <h1 className="text-2xl font-bold text-[#98002E] hover:underline">
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
