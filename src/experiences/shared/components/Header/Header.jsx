import React, { useContext } from 'react'
import { MoonSVG, SunSVG } from '../../../../assets/svg'
import { ThemeContext } from '../../../../Theme'
import { Link } from 'react-router-dom'
import { HamburgerMenu } from '../'

const Header = ({ pageTitle }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <header className='Header'>
      <Link to='/' className='link'>
        <div className='page-details'>
          <h1>ryan r<span id='header-dot'>.</span> campbell</h1>
          <h2>{pageTitle}</h2>
        </div>
      </Link>
      <div className='header-toggles'>
        <button className='theme-toggle-button' onClick={() => toggleTheme()}>
          {theme === 'light-theme' ? <SunSVG /> : <MoonSVG />}
        </button>
        <HamburgerMenu right />
      </div>
    </header>
  )
}

export default Header
