"use client";

import styles from './search-bar.module.css';

import { SearchPostsDocument, SearchPostsQuery } from 'graphql/queries.generated';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { StyledCard } from '@the-heights/styled-card';

/* eslint-disable-next-line */
export interface SearchBarProps {

  
}

export function SearchBar(props: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const [executeSearch, { data, loading, fetchMore, refetch } ]= useLazyQuery<SearchPostsQuery>(SearchPostsDocument,
    {
      variables: { first: 4, search: searchValue },
    });
  

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleSearch() {
    refetch({ first: 4, search: searchValue });
    console.log(searchValue)
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleLoadMore() {
    fetchMore({ variables: { first: 4, after: data?.posts?.pageInfo?.endCursor } });
    refetch({ first: 8, search: searchValue });
    console.log(data)
  }


  return (
    <div className={styles.searchBar} style={{ maxHeight: '800px', overflowY: 'auto' }}>
      <input type="text" placeholder="Search..." value={searchValue} onChange={handleInputChange} onKeyDown={handleKeyPress}/>
      <button type="submit" onClick={handleSearch} style={{ cursor: 'pointer' }}>Search</button>
      {loading && <div>Loading...</div>}
      {}
      {data?.posts?.nodes.map((post, i) => (
        <StyledCard
          key={i}
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
      <button type="submit" style={{ cursor: 'pointer' }} onClick={handleLoadMore}>Load More</button>
    </div>
  );
}

export default SearchBar;

