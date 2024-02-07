import { formatAuthorName } from '@the-heights/utils';
import { PostFragmentFragment } from '@the-heights/graphql';

export default function AuthorName(post: PostFragmentFragment) {
  return <text className="text-[#b59410]">{formatAuthorName(post)}</text>;
}
