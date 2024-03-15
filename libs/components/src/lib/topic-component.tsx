import { PostFragment } from '@the-heights/graphql';
import { BigCard, SmallCard, StyledCard, DefaultOptions } from './cards';

export interface TopicComponentProps extends Partial<DefaultOptions> {
  type: 'big' | 'small' | 'styled';
  imgSize: 'large' | 'medium' | 'small';
}

export default function TopicComponent(
  props: TopicComponentProps & { post: PostFragment },
) {
  const { type, options, ...otherProps } = props;
  switch (type) {
    case 'big':
      return <BigCard imgW={638} imgH={349.89} {...otherProps} />;
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
        <StyledCard imgW={638} imgH={349.89} {...options} {...otherProps} />
      );
    default:
      return null;
  }
}
