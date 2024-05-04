import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon, CloseSVG } from '../../../../assets/svg'

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { pathname } = useLocation()

  const className = (pathname, linkTo) => pathname === linkTo ? 'hamburger-link active' : 'hamburger-link'

  return (
    <div className={`Hamburger-menu ${menuIsOpen ? 'menu-open' : ''}`} data-testid='menu'>
      <button className='theme-toggle-button' onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <HamburgerIcon />
      </button>
      <div className='menu-content'>
        <div className='icon-container'>
          <button onClick={() => setMenuIsOpen(!menuIsOpen)} data-testid='close-button'>
            <CloseSVG />
          </button>
        </div>
        <div className='link-container'>
          <Link to='/' className={className(pathname, '/')}>home</Link>
          <Link to='/about' className={className(pathname, '/about')}>about</Link>
          <Link to='/blog' className={className(pathname, '/blog')}>blog</Link>
          <Link to='/author' className={className(pathname, '/author')}>author hub</Link>
          <Link to='/tech' className={className(pathname, '/tech')}>tech hub</Link>
          <Link to='/podcasts' className={className(pathname, '/podcasts')}>podcasts</Link>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu

