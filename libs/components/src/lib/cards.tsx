import { PostFragment } from '@the-heights/graphql';
export { default as MainCard } from './main-card';
export { default as StyledCard } from './styled-card';
export { default as BigCard } from './big-card';
export { default as SmallCard } from './small-card';
export { default as SubTopicCard } from './subtopic-card';
export { default as TopicCard } from './topic-card';
export { default as ArtsCard } from './arts-card';

/* eslint-disable-next-line */
export interface CardsProps {
  post: PostFragment;
  imgSize: string;
  imgW: number;
  imgH: number;
  priority?: boolean;
}

export function Cards(props: CardsProps) {
  return (
    <div >
      <h1>Welcome to Cards!</h1>
    </div>
  );
}

export default Cards;

