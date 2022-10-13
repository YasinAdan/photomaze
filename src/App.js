import React, { useState } from "react";

// global style
import GlobalStyle from "./components/GlobalStyle";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/NavSection";

//state

// pages
import About from "./pages/about";
import Contact from "./pages/contact";
import OurWork from "./pages/ourwork";
import MovieDetail from "./MovieDetail";
import { MovieState } from "./movieState";

function App() {
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<OurWork movies={movies} />} />
          <Route
            path="work/:id"
            element={
              <MovieDetail movies={movies} movie={movie} setMovie={setMovie} />
            }
          />
        </Route>
        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
