import React from 'react'
import './Movies.css'
import { Link } from 'react-router';
import { useMoviesPagination } from '../../hooks/useMoviesPagination';

const Movies = ({ apikey, searchTerm, location }) => {

  const { movies, loading, sentinelRef } = useMoviesPagination(apikey);

  const fallBack = '/fallBackImg.jpg';

  return (


    <div className='movies-container'>
      {movies.map((movie) => {

        const imagePath = movie.poster_path || movie.backdrop_path;
        console.log(imagePath)
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id} >
            <div className='movies' key={movie.id}>
              <img src={imagePath
                ? `https://image.tmdb.org/t/p/original/${imagePath}` : fallBack} alt={movie.title} />
            </div>
          </Link>
        )
      })}

      <div ref={sentinelRef} className='sentinel'>
        {loading && <>Carregando filmes</>}
      </div>
    </div>
  )
}

export default Movies