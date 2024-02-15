'use client';

import { PostFragment } from '@the-heights/graphql';
import { useState } from 'react';
import Posts from './posts';
import PaginationButton from './paginationButton';

export interface ControllerProps {
  posts: PostFragment[];
  numPosts: number;
  postsPerPage: number;
}

export default function Controller(props: ControllerProps) {
  const [page, setPage] = useState(1);
  return (
    <div>
      <Posts {...props} page={page} />
      <PaginationButton
        {...props}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
