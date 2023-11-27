import { gql } from '@apollo/client';

export const POST_FRAGMENT = gql`
  fragment PostFragment on Post {
    title
    author {
      node {
        name
      }
    }
    id
    date
    featuredImage {
      node {
        caption
        sourceUrl(size: ALM_THUMBNAIL)
      }
    }
    excerpt
    slug
    content(format: RENDERED)
  }
`;
