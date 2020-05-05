import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <header className="header-container">
      <h1 className="whats-new-header">
        What's New?
      </h1>
      <input className="search-input" type="text" placeholder="SEARCH ARTICLES HERE"></input>
      <button className="search-button">Search</button>
    </header>
  )
}

export default SearchForm;