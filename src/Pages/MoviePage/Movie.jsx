import React from 'react';
import { fetchMovieById, fetchCasting } from '../../services/api'
import { useParams } from 'react-router';
import './Movie.css'

const reviews = [
  { user: 'João', rating: 5, comment: 'Amei!' },
  { user: 'Maria', rating: 4, comment: 'Muito bom' },
];

const Movie = () => {
  const [movie, setMovie] = React.useState([]);
  const [movieCasting, setMovieCasting] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const apiKey = import.meta.env.VITE_API_KEY;

  const { id } = useParams();

  React.useEffect(() => {
    setIsLoading(true);

    const getMovie = async () => {
      const movieData = await fetchMovieById(apiKey, id);
      setMovie(movieData)
      setIsLoading(false);
    }

    const getCasting = async () => {
      const castingData = await fetchCasting(apiKey, id);
      setMovieCasting(castingData)
      setIsLoading(false);
    }

    getMovie();
    getCasting()
  }, [id]);


  return (
    <>
      {isLoading ? (<p className='loading'>Loading...</p >) : (
        <div className='movie'>
          <div className='movie-container'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
            <div className='movie-infos'>

              <h2>{movie.title}</h2>
              <p><strong>Duração </strong>{movie.runtime} min</p>
              <p><strong>Data de Lançamento: </strong>{movie.release_date}</p>
              <p className='movie-sinopse'>{movie.overview}</p>
              <div className='casting'>
                <h3>Casting</h3>
                <div>
                  {movieCasting.map((casting) => {
                    return <p key={casting.name}>{casting.name}</p>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='reviews-container'>
        <h2>Avaliações</h2>
        {reviews.map((review) => (
          <div id={review.user} className='review'>
            <div className='review-user-container'>
              <p className='review-user'>{review.user}</p>
              <p className='review-rating'>{review.rating} estrelas</p>
            </div>
            <p className='review-comment'>{review.comment}</p>
          </div>
        ))}
      </div>
    </>
  )
}


export default Movie