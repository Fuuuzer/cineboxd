import React from 'react'
import { fetchPopularMovies } from '../../services/api';
import './Movies.css'
import { Link } from 'react-router';

const Movies = ({ apikey }) => {
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const sentinelRef = React.useRef(null);
  const maxPages = 15;

  React.useEffect(() => {
    const controller = new AbortController();

    const getMovies = async () => {
      try {
        setLoading(true);

        const moviesData = await fetchPopularMovies(
          apikey,
          page,
          controller.signal
        );
        if (!moviesData) return;
        setMovies(prev => [...prev, ...moviesData.results]);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    getMovies()

    return () => {
      controller.abort()
    }
  }, [apikey, page]);

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