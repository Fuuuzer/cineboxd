import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Movie from "./Pages/MoviePage/Movie";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
