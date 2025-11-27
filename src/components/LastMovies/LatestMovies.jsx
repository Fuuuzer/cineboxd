import React from 'react'
import './LatestMovies.css'
import { fetchPopularMovies } from '../../services/api'
import { Link } from 'react-router'

const LatestMovies = () => {
  const [movies, setMovies] = React.useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  React.useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchPopularMovies(apiKey);
      setMovies(moviesData)
    };

    getMovies()
  }, [apiKey])

  function handleClick() {
  }

  return (
    <div className='latest-movies'>

      {movies.map((movie) => (

        <Link to={`/movies/${movie.id}`} key={movie.id} >
          <div onClick={handleClick} key={movie.id} className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.backdrop_path}`} alt={movie.title} />
            <div className='latest-movies-statistics'>
              <p><span><svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d3d3d3"><path d="M3 13C6.6 5 17.4 5 21 13" stroke="#d3d3d3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z" stroke="#d3d3d3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>{movie.popularity.toFixed()}k</p>
              <p><span><svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#d3d3d3"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#d3d3d3" strokeWidth="1.5" strokeLinejoin="round"></path></svg></span>{movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
        </Link>
      ))}

    </div>
  )
}

export default LatestMovies