import React from 'react'
import { Link, useLocation } from 'react-router'
import './SearchResultsPage.css'



const SearchResultsPage = () => {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  return (

    <div className="search-results-container">
      {results.map((result) => (
        <Link to={`/movies/${result.id}`} key={result.id} >
          <div className='movie-card-results'>
            <img src={`https://image.tmdb.org/t/p/w500/${result.poster_path || result.backdrop_path}`} alt={result.title} />
            {/* <h3>{result.title} <strong>{result.release_date}</strong></h3> */}
          </div>
        </Link>
      ))}
    </div >
  )
}

export default SearchResultsPage