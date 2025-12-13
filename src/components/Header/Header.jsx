import React from 'react'
import './Header.css'
import { fetchMovieByName } from '../../services/api';
const apiKey = import.meta.env.VITE_API_KEY;

const Header = () => {
  const [movieName, setMovieName] = React.useState('');

  function handleKey(e) {
    if (e.key === 'Enter') {
      fetchMovieByName(apiKey, movieName)
    }
  }

  function handleChange(e) {
    setMovieName(e.target.value)
  }

  return (
    <header>
      <nav>
        <h1><a href="/">CineBoxd</a></h1>
        <ul>
          <li>Entrar</li>
          <li>Criar conta</li>
          <li>Filmes</li>
          <li>Membros</li>
          <li>Sobre</li>
        </ul>
        <input type="text" value={movieName} onChange={handleChange} onKeyDown={handleKey} />
      </nav>
    </header>
  )
}

export default Header