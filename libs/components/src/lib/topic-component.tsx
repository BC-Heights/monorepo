import { PostFragmentFragment } from '@the-heights/graphql';
import { BigCard, SmallCard, StyledCard } from './cards';

export interface TopicComponentProps {
  type: 'big' | 'small' | 'styled';
  post: PostFragmentFragment;
  imgSize: 'large' | 'medium' | 'small';
  priority?: boolean;
  excerpt?: boolean;
  category?: boolean;
}

export default function TopicComponent(props: TopicComponentProps) {
  switch (props.type) {
    case 'big':
      return (
        <BigCard
          post={props.post}
          imgSize={props.imgSize}
          imgW={638}
          imgH={349.89}
          priority={props.priority}
          excerpt={props.excerpt}
          category={props.category}
        />
      );
    case 'small':
      return (
        <SmallCard
          slug={props.post.slug!}
          title={props.post.title!}
          date={props.post.date!}
        />
      );
    case 'styled':
      return (
        <StyledCard
          post={props.post}
          imgSize={props.imgSize}
          imgW={638}
          imgH={349.89}
          priority={props.priority}
        />
      );
    default:
      return null;
  }
}
