import { useContext, useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar/Navbar'
import { ThemeContext } from './lib/ThemeProvider'
import Footer from './components/Footer/Footer'
import Bio from './pages/Bio/Bio'

function App() {
  const { theme } = useContext(ThemeContext);
  const [page, setPage] = useState('/');

  return (
    <>
      <header>
        <Navbar setPage={setPage} />
      </header>
      <main>
        <div className={`container container--${theme}`}>
          {page === '/' && <Home />}
          {page === '/project' && <Project setPage={setPage} />}
          {page === '/bio' && <Bio />}
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
