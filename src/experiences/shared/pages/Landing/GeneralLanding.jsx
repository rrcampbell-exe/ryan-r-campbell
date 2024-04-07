import React from 'react'
import { useNavigate } from 'react-router-dom'

// TODO: add toggle for theme
// TODO: pivot to using sass or make some shared components for header, etc.
// TODO: add animation (or something fun?) to colorful dot in banner

const GeneralLanding = () => {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()
  return (
    <body>
      <header className='page-banner'>
        <h1>ryan r<span id='banner-dot'>.</span> campbell</h1>
        <h2>author | technologist</h2>
      </header>
      <main className='section-wrapper'>
        <div className='card-container'>
          <div className='card' onClick={() => navigate('/author')}>
            <h2>asdf</h2>
            <p>author</p>
          </div>
          <div className='card'>
            <h2>{"</>"}</h2>
            <p>technologist</p>
          </div>
        </div>
        <div className='experience-selection'>
          <p>choose your experience</p>
        </div>
      </main>
      <footer>
        © 2012 - {currentYear} Ryan R. Campbell
      </footer>
    </body>
  )
}

export default GeneralLanding
