import './App.css'
import { ThemeContext, ThemeProvider } from '../lib/ThemeProvider';
import Home from './Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useContext, useState } from 'react';
import Bio from './Bio/Bio';
import Project from './Project/Project';
import Blog from './Blog/Blog';

const App = () => {

  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState('/');

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <header>
        <Navbar setPage={setPage} />
      </header>
      <main id="main">
        <div className={`container container--${theme}`}>
          {page === '/' && <Home />}
          {page === '/project' && <Project setPage={setPage} />}
          {page === '/bio' && <Bio />}
          {page === '/blog' && <Blog />}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
