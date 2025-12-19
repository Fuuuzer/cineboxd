import React from 'react'
import { fetchPopularMovies } from '../../services/api';
import './Movies.css'

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  React.useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies(apiKey);
      setMovies(moviesData);
    }

    getMovies()
  }, [apiKey])

  return (
    <div className='movies-container'>
      {movies.map((movie) => (
        <div className='movies' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  )
}

export default Movies