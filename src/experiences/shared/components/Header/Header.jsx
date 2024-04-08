import React from 'react'
import MoonSVG from '../../../../assets/MoonSVG'
import SunSVG from '../../../../assets/SunSVG'

const Header = ({ pageTitle }) => {
  return (
    <header className='page-header'>
      <div>
        <h1>ryan r<span id='header-dot'>.</span> campbell</h1>
        <h2>{pageTitle}</h2>
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
  )
}

export default Header
