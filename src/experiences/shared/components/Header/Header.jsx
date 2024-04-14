import React, { useContext } from 'react'
import MoonSVG from '../../../../assets/MoonSVG'
import SunSVG from '../../../../assets/SunSVG'
import { ThemeContext } from '../../../../Theme'
import { Link } from 'react-router-dom'

const Header = ({ pageTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header className='Header'>
      <Link to='/' className='link'>
        <div>
          <h1>ryan r<span id='header-dot'>.</span> campbell</h1>
          <h2>{pageTitle}</h2>
        </div>
      </Link>
      <div>
        <button className='theme-toggle-button' onClick={() => toggleTheme()}>
          {theme === 'light-theme' ? <SunSVG /> : <MoonSVG />}
        </button>
      </div>
    </header>
  )
}

export default Header
