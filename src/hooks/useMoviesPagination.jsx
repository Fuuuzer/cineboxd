import React from 'react'
import { fetchMovieByName, fetchPopularMovies } from '../services/api';
fetchPopularMovies

export const useMoviesPagination = (apikey, searchTerm, maxPages = 15) => {
  const [movies, setMovies] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);


  const sentinelRef = React.useRef(null);



  React.useEffect(() => {
    const controller = new AbortController();


    const getMovies = async () => {
      try {
        setLoading(true);
        let currentResults = [];
        if (searchTerm) {
          const searchData = await fetchMovieByName(apikey, searchTerm, page);
          currentResults = searchData
        } else {
          const popularData = await fetchPopularMovies(
            apikey,
            page,
            controller.signal
          );
          currentResults = popularData?.results || [];
        }

        if (!currentResults) return;
        setMovies(prev => (page === 1 ? currentResults : [...prev, ...currentResults]));

      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      } finally {
        setLoading(false);
      };
    }

    getMovies()
    return () => {
      controller.abort()
    }
  }, [apikey, page, searchTerm]);

  React.useEffect(() => {
    console.log(page)
    setMovies([]);
    setPage(1)
  }, [searchTerm]);

  React.useEffect(() => {
    if (loading) return

    const observer = new IntersectionObserver((entries) => {
      //entries eh um array com todos elementos que o observer ta observando
      const target = entries[0];

      //isIntersecting verifica se o elemento observado ficou na área visível
      if (target.isIntersecting && !loading && movies.length > 0) {
        console.log(`sentinvel visible ${page}`)
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
