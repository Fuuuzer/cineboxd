import React from 'react'
import { fetchPopularMovies } from '../../services/api';
import './Movies.css'
import { Link } from 'react-router';

const Movies = ({ apikey }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies(apikey);
      setMovies(moviesData);
    }
    getMovies()
  }, [apikey]);

  return (

    <div className='movies-container'>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} >
          <div className='movies' key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Movies