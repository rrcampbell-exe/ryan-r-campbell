import React from 'react'
import ReactDOM from 'react-dom/client'
import { GeneralLanding, AuthorLanding, GeneralAbout, TechLanding, BooksLanding, BlogLanding, BlogPost, PodcastLanding, PodcastEpisode, ContactPage } from './pages/index.js'
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
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/*' element={<GeneralLanding pageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
