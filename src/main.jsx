import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './css/reset.css.js'
import Global from './css/global.css.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Global />
    <App />
  </React.StrictMode>,
)
