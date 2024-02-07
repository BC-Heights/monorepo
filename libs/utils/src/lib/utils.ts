import { PostFragmentFragment } from '@the-heights/graphql';

export function getUrlByName(data: PostFragmentFragment, name: string) {
  const sizes = data.featuredImage?.node.mediaDetails?.sizes || [];
  const size = sizes.find((item) => item?.name === name);
  return size ? size.sourceUrl : null;
}

export function formatAuthorName(data: PostFragmentFragment) {
  return data.authors
    ?.map((author) => author?.displayName)
    .join(', ')
    .replace(/,([^,]*)$/, ', and$1');
}

export function filterCategories(categories: (string|null|undefined)[] | undefined): string[] {
  if (!categories) {
    return [];
  }
  const allowedCategories = ['News', 'Sports', 'Arts', 'Magazine', 'Opinions', 'Newton', 'Metro'];
  if (categories.includes('Newton') || categories.includes('Metro')) {
    return ['Newton'];
  }
  return categories.map((category) => {
    if (category === 'Features') {
      return 'Magazine';
    }
    return category as string;
  }).filter((category) => allowedCategories.includes(category));
}

export { formatDate, formatHrefDate, formatTime } from './date-utils';
