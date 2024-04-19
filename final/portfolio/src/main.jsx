import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import ScrollObserver from './lib/ScrollObserver.jsx'
import { ThemeProvider } from './lib/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollObserver>
        <App />
      </ScrollObserver>
    </ThemeProvider>
  </React.StrictMode>,
)
