import React from 'react'
import { fetchPopularMovies } from '../../services/api';
import './Movies.css'

const Movies = ({ apikey }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies(apikey);
      setMovies(moviesData);
    }

    getMovies()
  }, [apikey])

  return (
    <div className='movies-container'>
      {movies.map((movie) => (
        <div className='movies' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  )
}

export default Movies