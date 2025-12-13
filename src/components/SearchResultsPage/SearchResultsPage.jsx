import React from 'react'
import { useLocation } from 'react-router'


const SearchResultsPage = () => {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  return (
    <div className="search-results-container">
      {console.log(results)}

    </div>
  )
}

export default SearchResultsPage