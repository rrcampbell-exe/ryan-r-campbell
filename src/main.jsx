import React from 'react'
import ReactDOM from 'react-dom/client'
import { GeneralLanding, AuthorLanding, GeneralAbout, TechLanding, BooksLanding, PodcastLanding, PodcastEpisode, ContactPage } from './pages/index.js'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import { SubstackRedirect } from './components/index.js'
import './App.css'
import { ThemeProvider } from './Theme.jsx'

// see if rrcampbellwrites.com is the domain, if so, redirect to ryanrcampbell.com
if (window.location.hostname === 'rrcampbellwrites.com') window.location.replace('https://ryanrcampbell.com' + window.location.pathname + window.location.search + window.location.hash)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralLanding />} />
          <Route path='/author/*' element={<Navigate to='/author' />} />
          <Route path='/author' element={<AuthorLanding />} />
          <Route path='/books/*' element={<Navigate to='/books' />} />
          <Route path='/books' element={<BooksLanding />} />
          <Route path='/about' element={<GeneralAbout />} />
          <Route path='/tech' element={<TechLanding />} />
          <Route path='/:year/:month/:day/:slug/amp?' element={<SubstackRedirect />} />
          <Route path='/blog' element={<SubstackRedirect />} />
          <Route path='/blog/:tag?' element={<SubstackRedirect />} />
          <Route path='/podcasts' element={<PodcastLanding />} />
          <Route path='/podcast/:slug/amp?' element={<PodcastEpisode />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/*' element={<GeneralLanding pageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
