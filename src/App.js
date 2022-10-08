// global style
import GlobalStyle from './components/GlobalStyle';

import Nav from './components/NavSection';

// pages
import About from './pages/about'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <About />
    </div>
  );
}

export default App;