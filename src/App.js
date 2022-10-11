// global style
import GlobalStyle from "./components/GlobalStyle";

import { Routes, Route } from "react-router-dom";

import Nav from "./components/NavSection";

// pages
import About from "./pages/about";
import Contact from "./pages/contact";
import OurWork from "./pages/ourwork";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ourwork" element={<OurWork />} />
        </Route>
        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
