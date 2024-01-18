"use client"

import styles from './search-bar.module.css';

import { useState } from 'react';

import SearchCard  from './search-card';

/* eslint-disable-next-line */
export interface SearchBarProps {
  first: number;
 }

export function SearchBar({first}: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [pageCount, setPageCount] = useState(0);
  

  function handleSearch() {
    setSearchValue(inputValue);
    setPageCount(1);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={styles.container}>
      <input 
        type="text" placeholder="Search..." value={inputValue} 
        onChange={handleInputChange} onKeyDown={handleKeyPress} />
      <button type="submit" onClick={handleSearch} style={{ cursor: 'pointer' }}>Search</button>
      {/* {Array.from({ length: pageCount }, (_, i) => ( */}
        <SearchCard key={0} first={first*pageCount} searchValue={searchValue}/>
      {/* ))} */}
      <button 
        type="submit" 
        style={{ cursor: 'pointer' }} 
        onClick={() => setPageCount(pageCount + 1)}>
          Load More
      </button>
    </div>
  );

}

export default SearchBar;
