import React from 'react'
import ReactDOM from 'react-dom/client'
import Clock from './Clock.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('clock')).render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
)
