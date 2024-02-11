import { CachedGetPostsByCat } from '@the-heights/graphql';
import TopicComponent, { TopicComponentProps } from './topic-component';

export interface TopicCardProps {
  category: string;
  topicComponents: TopicComponentProps[];
}

export default async function TopicCard(props: TopicCardProps) {
  const { posts } = await CachedGetPostsByCat(
    { first: props.topicComponents.length, categoryName: props.category },
    [props.category]
  );

  return (
    <div className="h-auto">
      <div className="flex flex-row items-start gap-4">
        <h1 className="text-2xl text-[#98002E] font-bold">
          {props.category === 'Features'
            ? 'Magazine'
            : props.category === 'Metro'
            ? 'Newton'
            : props.category}
        </h1>
      </div>
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
