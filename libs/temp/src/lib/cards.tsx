import { PostFragmentFragment } from '@the-heights/graphql';

/* eslint-disable-next-line */
export interface CardsProps {
  post: PostFragmentFragment;
  imgSize: string;
  imgW: number;
  imgH: number;
  priority?: boolean;
}

export function Cards(props: CardsProps) {
  return <h1>Welcome to Cards!</h1>;
}

export default Cards;
