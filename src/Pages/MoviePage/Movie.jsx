import React from 'react';
import { fetchMovieById, fetchCasting } from '../../services/api'
import { useParams } from 'react-router';
import './Movie.css'



const Movie = () => {
  const [movie, setMovie] = React.useState([]);
  const [movieCasting, setMovieCasting] = React.useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();

  React.useEffect(() => {
    const getMovie = async () => {
      const movieData = await fetchMovieById(apiKey, id);
      setMovie(movieData)
    }

    const getCasting = async () => {
      const castingData = await fetchCasting(apiKey, id);
      console.log(castingData)
      // setMovie(movieData)
    }

    getMovie();
    getCasting()
  }, [id])


  return (
    <div className='movie'>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
      <div className='movie-infos'>
        <h2>{movie.title}</h2>
        <p><strong>Data de Lançamento: </strong>{movie.release_date}</p>
        <p className='movie-sinopse'>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Movie