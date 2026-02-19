import React from 'react'
import { Link, useLocation } from 'react-router'
import './SearchResultsPage.css'



const SearchResultsPage = () => {
  const location = useLocation();
  const { results, searchTerm } = location.state || {};

  const fallBack = '/fallBackImg.jpg';

  return (

    <div className="search-results-container">
      {results.map((result) => {
        const imagePath = result.poster_path || result.backdrop_path;
        return (
          <Link to={`/movies/${result.id}`} key={result.id} >
            <div className='movie-card-results'>
              {console.log(imagePath)}
              <img src={imagePath ? `https://image.tmdb.org/t/p/original/${imagePath}` : fallBack} alt={result.title} />
              {/* <h3>{result.title} <strong>{result.release_date}</strong></h3> */}
            </div>
          </Link>
        )
      })}
    </div >
  )
}

export default SearchResultsPage