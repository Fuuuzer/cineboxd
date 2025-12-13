import React from 'react';
import { fetchMovieById, fetchCasting } from '../../services/api'
import { useParams } from 'react-router';
import './Movie.css'


const Movie = () => {
  const [movie, setMovie] = React.useState([]);
  const [movieCasting, setMovieCasting] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [reviewData, setReviewData] = React.useState({
    review: '',
    nota: 0,
  });
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

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleChange(field, value) {
    setReviewData(prev => ({ ...prev, [field]: value }))
  }


  return (
    <>
      {isLoading ? (<p className='loading'>Carregando os dados...</p >) : (
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

      {/* <div className='reviews-container'>
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
      </div> */}

      <div className='reviews-container'>
        <h2>Avaliações</h2>
        <form action="" className='review'>
          <textarea onChange={handleChange} className='text-area' name="avaliacao" placeholder='Escreva sua review' id="avaliacao"></textarea>
          <button type='submit' onClick={handleSubmit}>enviar</button>
        </form>
        <div className='review'>
          <div className='review-user-container'>
            <p className='review-user'>João</p>
            <p className='review-rating'>5 estrelas</p>
          </div>
          <p className='review-comment'>Hahahaha ri demais com iesse filme</p>
        </div>
      </div >
    </>
  )
}


export default Movie