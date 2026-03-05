import axios, { all } from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

export const fetchPopularMovies = async (apiKey, page, signal) => {
  try {
    const res = await api.get(
      `popular?api_key=${apiKey}&language=pt-BR&page=${page}`,
      { signal },
    );
    return {
      results: res.data.results,
      totalPages: res.data.total_pages,
    };
  } catch (error) {
    if (error.name === "CanceledError") {
      return null;
    }

    console.error(error);
    return null;
  }
};

export const fetchMovieById = async (apiKey, movieId) => {
  try {
    const res = await api.get(`${movieId}?api_key=${apiKey}&language=pt-BR`);
    const movieData = res.data;
    return movieData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCasting = async (apiKey, movieId) => {
  try {
    const res = await api.get(
      `${movieId}/credits?api_key=${apiKey}&language=pt-BR`,
    );
    const movieData = res.data;
    return movieData.cast.slice(0, 4); // Limita em 4 o numero de atores que retorna
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieByName = async (apiKey, movieName, page) => {
  try {
    const res = await api.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}&page=${page}`,
    );
    const movieData = res.data;
    //  movieData.results;
    return movieData.results;
  } catch (error) {
    console.log(error);
  }
};
