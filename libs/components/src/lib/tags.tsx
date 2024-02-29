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
      <Link href={`/author/${slug}?id=${id}&type=${type}`}>{displayName}</Link>
    );
  }

  return (
    <div className="text-[#b59410] italic font-bold">
      {molonguiAuthors.map((author, index) => {
        return (
          <>
            <span key={index} className="text-nowrap hover:underline">
              {authorLink(author!)}
            </span>
            {authorCount === 2 && index < 1
              ? ' and '
              : authorCount > 2 && index < authorCount - 1
              ? ', '
              : authorCount > 2 && index === authorCount - 1
              ? ', and '
              : ''}
          </>
        );
      })}
    </div>
  );
}

export function Category(props: { post: PostFragment; showCategory: boolean }) {
  const { post, showCategory } = props;
  const category = filterCategories(
    post.categories?.nodes?.map((cat) => cat?.name)
  );

  const catName: string = category[0] ? category[0].toLowerCase() : '';
  return (
    <Link
      href={`/${catName}`}
      className={`text-[#98002E] font-bold hover:underline ${
        showCategory ? '' : 'hidden'
      }`}
    >
      <text>{category}</text>
    </Link>
  );
}
