import { PostFragment } from '@the-heights/graphql';
import { BigCard, SmallCard, StyledCard } from './cards';

export interface TopicComponentProps {
  type: 'big' | 'small' | 'styled';
  imgSize: 'large' | 'medium' | 'small';
  priority?: boolean;
  showExcerpt: boolean;
  showCategory: boolean;
}

export default function TopicComponent(props: TopicComponentProps & { post: PostFragment }) {
  const { type, ...otherProps } = props;
  switch (type) {
    case 'big':
      return (
        <BigCard
          imgW={638}
          imgH={349.89}
          {...otherProps}
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
          imgW={638}
          imgH={349.89}
          {...otherProps}
        />
      );
    default:
      return null;
  }
}
