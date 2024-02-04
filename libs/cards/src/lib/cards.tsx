import { PostFragmentFragment } from '@the-heights/graphql';
import MainCard from './main-card';
import StyledCard from './styled-card';
import BigCard from './big-card';
import SmallCard from './small-card';
import SubTopicCard from './subtopic-card';
import TopicCard from './topic-card';

/* eslint-disable-next-line */
export interface CardsProps {
  post: PostFragmentFragment;
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

export { MainCard, StyledCard, BigCard, SmallCard, SubTopicCard, TopicCard };
