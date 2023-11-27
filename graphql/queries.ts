import { gql } from '@apollo/client';
import { POST_FRAGMENT } from './fragments';

// Define the PostFragment


// Use the PostFragment in queries
export const GET_POSTS = gql`
  query GetPosts($first: Int!) {
    posts(first: $first, where: {}) {
      nodes {
        ...PostFragment
      }
    }
  }

  ${POST_FRAGMENT}
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      ...PostFragment
    }
  }

  ${POST_FRAGMENT}
`;
