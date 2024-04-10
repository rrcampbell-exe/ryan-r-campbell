import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralLanding from './experiences/shared/pages/Landing/GeneralLanding.jsx'
import AuthorLanding from './experiences/author/pages/Landing/AuthorLanding.jsx'
import GeneralAbout from './experiences/shared/pages/About/GeneralAbout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Theme.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralLanding />
  },
  {
    path: '/author',
    element: <AuthorLanding />
  },
  {
    path: '/about',
    element: <GeneralAbout />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
