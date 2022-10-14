import React, { useState } from "react";

// global style
import GlobalStyle from "./components/GlobalStyle";

import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/NavSection";

// pages
import About from "./pages/about";
import Contact from "./pages/contact";
import OurWork from "./pages/ourwork";
import MovieDetail from "./MovieDetail";
import { MovieState } from "./movieState";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [movies, setMovies] = useState(MovieState());
  const [movie, setMovie] = useState(null);
  const {pathname, key} = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={pathname} key={key}>
          <Route path="/">
            <Route index element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="work" element={<OurWork movies={movies} />} />
            <Route
              path="work/:id"
              element={
                <MovieDetail
                  movies={movies}
                  movie={movie}
                  setMovie={setMovie}
                />
              }
            />
          </Route>
          <Route path="*" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
