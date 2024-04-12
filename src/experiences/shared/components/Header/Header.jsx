import React, { useContext } from 'react'
import MoonSVG from '../../../../assets/MoonSVG'
import SunSVG from '../../../../assets/SunSVG'
import { ThemeContext } from '../../../../Theme'

const Header = ({ pageTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header className='page-header'>
      <div>
        <h1>ryan r<span id='header-dot'>.</span> campbell</h1>
        <h2>{pageTitle}</h2>
      </div>
      <div>
        <button className='theme-toggle-button' onClick={() => toggleTheme()}>
          {theme === 'light-theme' ? <SunSVG /> : <MoonSVG />}
        </button>
      </div>
    </header>
  )
}

export default Header
