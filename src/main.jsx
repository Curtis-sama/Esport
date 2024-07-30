import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './route.jsx'
import './Content/home/index.jsx'
import { RouterProvider } from 'react-router-dom'
import './app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
