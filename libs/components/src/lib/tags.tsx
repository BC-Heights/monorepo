import { filterCategories } from '@the-heights/utils';
import { MolonguiAuthor, PostFragment } from '@the-heights/graphql';
import Link from 'next/link';

export function AuthorName(post: PostFragment) {
  const { molonguiAuthors } = post;

  if (!molonguiAuthors) {
    return null;
  }

  const authorCount = molonguiAuthors.length;

  function authorLink(author: MolonguiAuthor) {
    const { displayName, id, type, slug } = author;

    return (
      <Link
        href={`/author/${slug}?id=${id}&type=${type}`}
        className="text-[#b59410] font-style: italic font-bold"
      >
        {displayName}
      </Link>
    );
  }

  return (
    <div className="text-[#b59410] font-style: italic font-bold">
      {molonguiAuthors.map((author, index) => {
        return (
          <span key={index}>
            {authorLink(author!)}
            {authorCount === 2 && index < 1
              ? ' and '
              : authorCount > 2 && index < authorCount - 1
              ? ', '
              : authorCount > 2 && index === authorCount - 1
              ? ', and '
              : ''}
          </span>
        );
      })}
    </div>
  );
}

export function Category(props: { post: PostFragment; showCategory: boolean }) {
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
