import React from 'react'
import ReactDOM from 'react-dom/client'
import GeneralLanding from './experiences/shared/pages/Landing/GeneralLanding.jsx'
import AuthorLanding from './experiences/author/pages/Landing/AuthorLanding.jsx'
import GeneralAbout from './experiences/shared/pages/About/GeneralAbout.jsx'
import TechLanding from './experiences/tech/pages/Landing/TechLanding.jsx'
import BooksLanding from './experiences/author/pages/Books/BooksLanding.jsx'
import BlogLanding from './experiences/shared/pages/BlogLanding/BlogLanding.jsx'
import { BlogPost } from './experiences/shared/components/index.js'
import PodcastLanding from './experiences/author/pages/Podcast/PodcastLanding.jsx'
import PodcastEpisode from './experiences/author/pages/Podcast/PodcastEpisode.jsx'

import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralLanding />} />
          <Route path='/author' element={<AuthorLanding />} />
          <Route path='/books/*' element={<Navigate to='/books' />} />
          <Route path='/books' element={<BooksLanding />} />
          <Route path='/about' element={<GeneralAbout />} />
          <Route path='/tech' element={<TechLanding />} />
          <Route path='/:year/:month/:day/:slug/amp?' element={<BlogPost />} />
          <Route path='/blog' element={<BlogLanding />} />
          <Route path='/podcasts' element={<PodcastLanding />} />
          <Route path='/podcast/:slug/amp?' element={<PodcastEpisode />} />
          <Route path='/*' element={<GeneralLanding pageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
