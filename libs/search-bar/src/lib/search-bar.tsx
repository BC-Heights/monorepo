"use client";

import React, { useState } from 'react';

import { SearchPostsDocument, SearchPostsQuery } from 'libs/graphql/src/lib/queries.generated';
import { useLazyQuery, NetworkStatus } from '@apollo/client';
import { StyledCard } from '@the-heights/styled-card';

/* eslint-disable-next-line */
export interface SearchBarProps {
  first: number;
 }

export function SearchBar({first}: SearchBarProps) {
  const [search, setSearch] = useState('');
  const [getPosts, { data, loading, fetchMore, networkStatus }] = useLazyQuery(SearchPostsDocument,
    {
      variables: {
        first: first,
        after: null,
        search: search
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
    }
  );

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPosts({ variables: { first, search }});
  }

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        after: data?.posts?.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }): SearchPostsQuery => {
        if (!fetchMoreResult) return prev;
        if (!fetchMoreResult.posts) return prev;
        if (!prev.posts) return prev;
        return {
          ...prev,
          posts: {
            ...prev.posts,
            pageInfo: {
              ...prev.posts?.pageInfo,
              endCursor: fetchMoreResult.posts.pageInfo.endCursor,
              hasNextPage: fetchMoreResult.posts.pageInfo.hasNextPage,
            },
            nodes: [
              ...prev.posts.nodes,
              ...fetchMoreResult.posts.nodes,
            ],
          },
        };
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {data?.posts?.nodes && (
        <div>
          {data.posts.nodes.map((post, index) => (
            <StyledCard
              key={index}
              date={post.date || "No Date Available"}
              imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
              imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
              imgW={150}
              imgH={82.26}
              excerpt={post.excerpt || "No Excerpt Available"}
              slug={post.slug || "default-slug"}
              title={post.title || "Untitled"}
            />
          ))}
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
      {(loading && !(networkStatus===NetworkStatus.fetchMore)) && <p>Loading...</p>}
      {networkStatus === NetworkStatus.fetchMore && 
      <p>Loading more...</p>}

    </div>
  );
}

export default SearchBar;
