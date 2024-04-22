import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralLanding from './experiences/shared/pages/Landing/GeneralLanding.jsx'
import AuthorLanding from './experiences/author/pages/Landing/AuthorLanding.jsx'
import GeneralAbout from './experiences/shared/pages/About/GeneralAbout.jsx'
import TechLanding from './experiences/tech/pages/Landing/TechLanding.jsx'
import BooksLanding from './experiences/author/pages/Books/BooksLanding.jsx'
import BlogHub from './experiences/shared/pages/BlogHub/BlogHub.jsx'
import { BlogPost } from './experiences/shared/components/index.js'
import PodcastLanding from './experiences/author/pages/Podcast/PodcastLanding.jsx'
import PodcastEpisode from './experiences/author/pages/Podcast/PodcastEpisode.jsx'

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
    path: '/books',
    element: <BooksLanding />
  },
  {
    path: '/about',
    element: <GeneralAbout />
  },
  {
    path: '/tech',
    element: <TechLanding />
  },
  {
    path: '/:year/:month/:day/:slug',
    element: <BlogPost />
  },
  {
    path: '/blog',
    element: <BlogHub />
  },
  {
    path: '/podcasts',
    element: <PodcastLanding />
  },
  {
    path: '/podcast/:slug',
    element: <PodcastEpisode />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
