import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './lib/ThemeProvider.jsx'
import ScrollObserver from './lib/ScrollObserver.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollObserver>
        <App />
      </ScrollObserver>
    </ThemeProvider>
  </React.StrictMode>,
)
