import React from 'react'
import { fetchPopularMovies } from '../services/api';
fetchPopularMovies

export const useMoviesPagination = (apikey, maxPages = 15) => {
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);


  const sentinelRef = React.useRef(null);

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

  React.useEffect(() => {
    if (loading) return

    const observer = new IntersectionObserver((entries) => {
      //entries eh um array com todos elementos que o observer ta observando
      const target = entries[0];

      //isIntersecting verifica se o elemento observado ficou na área visível
      if (target.isIntersecting) {
        setPage(prev => prev + 1)
      }
    });


    // serve para o observer "vigiar" tal elemento HTML
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    //funcao de limpeza
    return () => {
      if (sentinelRef.current) {
        observer.disconnect() // desconectar o obersevr
      }

    }

  }, [loading, page, maxPages])

  return { movies, loading, sentinelRef }
}
