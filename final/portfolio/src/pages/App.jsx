import './App.css'
import { ThemeProvider } from '../lib/ThemeProvider';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import ScrollObserver from '../lib/ScrollObserver';

const App = () => {

  return (
    <ThemeProvider>
      <ScrollObserver>
        <Layout>
          <Home />
        </Layout>
      </ScrollObserver>
    </ThemeProvider>
  )
}

export default App
