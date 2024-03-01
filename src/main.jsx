import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  /* using BrowserRouter here to route */
  <BrowserRouter>
    {/* Routes  */}
    <Routes>
      {/* Route -> path is * mean home path, Home page will be <App /> */}
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
)

