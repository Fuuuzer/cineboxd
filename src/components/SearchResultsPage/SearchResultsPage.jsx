import React from 'react'
import { useLocation } from 'react-router'
import './SearchResultsPage.css'


const SearchResultsPage = () => {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  return (
    <div className="search-results-container">
      {results.map((result) => (
        <div key={result.id} className='movie-card-results'>
          <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path || result.backdrop_path}`} alt={result.title} />
          <h3>{result.title} <strong>{result.release_date}</strong></h3>
        </div>
      ))
      }

    </div >
  )
}

export default SearchResultsPage