import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
});

 export const fetchPopularMovies = async (apiKey) => {
  try {
    const res = await api.get(`popular?api_key=${apiKey}&language=pt-BR&page=1`);
    const allPopularMovies = res.data.results;
    return allPopularMovies.slice(0, 5); //limita para apenas 5 filmes
  } catch (error) {
    console.log(error)
  }
}

export const fetchMovieById = async (apiKey, movieId) => {
  try {
    const res = await api.get(`${movieId}?api_key=${apiKey}&language=pt-BR`);
    const movieData = res.data;
    return movieData
  } catch (error) {
    console.log(error)
  }
};

export const fetchCasting = async (apiKey, movieId) => {
  try {
    const res = await api.get(`${movieId}/credits?api_key=${apiKey}&language=pt-BR`);
    const movieData = res.data;
    return movieData.cast.slice(0, 4) // Limita em 3 o numero de atores que retorna
  } catch (error) {
    console.log(error)
  }
};

export const fetchMovieByName = async (apiKey, movieName) => {
   try {
    const res = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`);
    const movieData = res.data;
    //  movieData.results;
    return movieData.results
  } catch (error) {
    console.log(error)
  }
}
