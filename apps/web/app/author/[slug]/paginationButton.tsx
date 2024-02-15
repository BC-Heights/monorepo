'use client';

import { Pagination } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface PaginationButtonProps {
  numPosts: number | undefined;
  postsPerPage: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function PaginationButton(props: PaginationButtonProps) {
  function handleChange(event: ChangeEvent<unknown>, page: number): void {
    props.setPage(page);
  }

  return (
    <div className="flex justify-center">
      <div className="flex gap-2">
        <Pagination
          shape={'rounded'}
          count={Math.ceil(props.numPosts! / props.postsPerPage)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
