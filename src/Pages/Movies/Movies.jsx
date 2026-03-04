import React from 'react'
import './Movies.css'
import { Link } from 'react-router';
import { useMoviesPagination } from '../../hooks/useMoviesPagination';

const Movies = ({ apikey }) => {

  const { movies, loading, sentinelRef } = useMoviesPagination(apikey)

  return (

    <div className='movies-container'>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} >
          <div className='movies' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
          </div>
        </Link>
      ))}
      <div ref={sentinelRef} className='sentinel'>sentinel div</div>
    </div>
  )
}

export default Movies