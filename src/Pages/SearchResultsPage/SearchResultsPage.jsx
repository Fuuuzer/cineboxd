import React from 'react'
import { Link, useLocation } from 'react-router'
import './SearchResultsPage.css'
import { useMoviesPagination } from '../../hooks/useMoviesPagination';



const SearchResultsPage = ({ apikey }) => {
  const location = useLocation();
  const { searchTerm } = location.state || {};
  const { movies, loading, sentinelRef } = useMoviesPagination(apikey, searchTerm)


  const fallBack = '/fallBackImg.jpg';


  return (

    <div className="search-results-container">
      {movies.map((movie) => {
        const imagePath = movie.poster_path || movie.backdrop_path;
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id} >
            <div className='movie-card-results'>
              <img className='movie-poster' src={imagePath ? `https://image.tmdb.org/t/p/original/${imagePath}` : fallBack} alt={movie.title} />
              {/* <h3>{result.title} <strong>{result.release_date}</strong></h3> */}
            </div>
          </Link>
        )
      })}
      <div ref={sentinelRef} className='sentinel'>
        {loading && <>Carregando filmes</>}
      </div>
    </div >
  )
}

export default SearchResultsPage