import React from 'react';
import { fetchMovieById } from '../../services/api'
import { useParams } from 'react-router';
import './Movie.css'



const Movie = () => {
  const [movie, setMovie] = React.useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();

  React.useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovieById(apiKey, id);
      console.log(movieData)
      setMovie(movieData)
    }
    getMovies()
  }, [id])


  return (
    <div className='movie'>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
      <div>
        <p>{movie.overview}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  )
}

export default Movie