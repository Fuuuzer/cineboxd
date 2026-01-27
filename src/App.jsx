import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Movie from "./Pages/MoviePage/Movie";
import Footer from "./components/Footer/Footer";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";
import Movies from "./Pages/Movies/Movies";



function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [modalAtivo, setmodalAtivo] = React.useState(false);
  const toggleModal = () => setmodalAtivo(prev => !prev);

  return (
    <BrowserRouter>
      <div className="layout">
        <Header apikey={apiKey} ativo={modalAtivo} toggleModal={toggleModal} />
        <Routes>
          <Route path="/" element={<Home apikey={apiKey} ativo={modalAtivo} toggleModal={toggleModal} />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies" element={<Movies apikey={apiKey} />} />
          <Route path="/resultados" element={<SearchResultsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
