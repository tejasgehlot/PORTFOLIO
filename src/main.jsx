import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SmoothScroll from './components/SmoothScroll'
import Cursor from './components/Cursor'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScroll>
      <Cursor />
      <App />
    </SmoothScroll>
  </React.StrictMode>
)
