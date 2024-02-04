import { PostFragmentFragment }  from "@the-heights/graphql";

export function getUrlByName(data: PostFragmentFragment, name: string) {
  const sizes = data.featuredImage?.node.mediaDetails?.sizes || [];
  const size = sizes.find(item => item?.name === name);
  return size ? size.sourceUrl : null;
}


export { formatDate, formatHrefDate, formatTime } from './date-utils';

