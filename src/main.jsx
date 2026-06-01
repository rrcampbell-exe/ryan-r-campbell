import React from 'react'
import ReactDOM from 'react-dom/client'
import { GeneralLanding, AIEnablement, GeneralAbout, BooksLanding, PodcastLanding, PodcastEpisode, ResumePage, ContactPage } from './pages/index.js'
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import { SubstackRedirect } from './components/index.js'
import './App.css'
import { ThemeProvider } from './Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GeneralLanding />} />
          <Route path='/author/*' element={<Navigate to='/books' />} />
          <Route path='/author' element={<BooksLanding />} />
          <Route path='/books/*' element={<Navigate to='/books' />} />
          <Route path='/books' element={<BooksLanding />} />
          <Route path='/ai' element={<AIEnablement />} />
          <Route path='/about' element={<GeneralAbout />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/tech' element={<Navigate to={{ pathname: '/', hash: '#impact' }} replace />} />
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
