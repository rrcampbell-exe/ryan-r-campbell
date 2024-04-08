import React from 'react'
import { useNavigate } from 'react-router-dom'
import MoonSVG from '../../../../assets/MoonSVG'
import SunSVG from '../../../../assets/SunSVG'
 
// TODO: add toggle for theme
// TODO: update size of svgs, flex appropriately
// TODO: pivot to using sass or make some shared components for header, etc.
// TODO: add animation (or something fun?) to colorful dot in banner

const GeneralLanding = () => {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()
  return (
    <body>
      <header className='page-banner'>
        <div>
          <h1>ryan r<span id='banner-dot'>.</span> campbell</h1>
          <h2>author | technologist</h2>
        </div>
        <div>
          <button className='theme-toggle-button'>
            <SunSVG />
          </button>
          <button className='theme-toggle-button'>
            <MoonSVG />
          </button>
        </div>
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
