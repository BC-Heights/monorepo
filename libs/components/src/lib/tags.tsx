import { formatAuthorName, filterCategories } from '@the-heights/utils';
import { PostFragmentFragment } from '@the-heights/graphql';

export function AuthorName(post: PostFragmentFragment) {
  return (
    <text className="text-[#b59410] font-style: italic font-bold">
      {formatAuthorName(post)}
    </text>
  );
}

export function Category(props: {
  post: PostFragmentFragment;
  showCategory: boolean;
}) {
  const { post, showCategory } = props;
  return (
    <div
      className={`mb-2 text-[#98002E] font-bold ${
        showCategory ? '' : 'hidden'
      }`}
    >
      <text>
        {filterCategories(post.categories?.nodes?.map((cat) => cat?.name))}
      </text>
    </div>
  );
}
