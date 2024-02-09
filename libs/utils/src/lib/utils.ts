import { PostFragmentFragment } from '@the-heights/graphql';

export function getUrlByName(data: PostFragmentFragment, name: string) {
  const sizes = data.featuredImage?.node.mediaDetails?.sizes || [];
  const size = sizes.find((item) => item?.name === name);
  return size ? size.sourceUrl : null;
}

export function formatAuthorName(data: PostFragmentFragment) {
  let authorNames = data.molonguiAuthors
    ?.map((author) => author?.displayName)
    .join(', ');

  if (!authorNames) {
    return '';
  }

  const commaCount = (authorNames.match(/,/g) || []).length;

  if (commaCount >= 2) {
    authorNames = authorNames.replace(/,([^,]*)$/, ', and$1');
  } else if (commaCount === 1) {
    authorNames = authorNames.replace(',', ' and');
  }
  return authorNames;
}

export function filterCategories(
  categories: (string | null | undefined)[] | undefined
): string[] {
  if (!categories) {
    return [];
  }
  const allowedCategories = [
    'News',
    'Sports',
    'Arts',
    'Magazine',
    'Opinions',
    'Newton',
    'Metro',
  ];
  if (categories.includes('Newton') || categories.includes('Metro')) {
    return ['Newton'];
  }
  return categories
    .map((category) => {
      if (category === 'Features') {
        return 'Magazine';
      }
      return category as string;
    })
    .filter((category) => allowedCategories.includes(category));
}

export { formatDate, formatHrefDate, formatTime } from './date-utils';
