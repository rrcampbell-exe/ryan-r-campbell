import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HamburgerIcon, CloseSVG } from '../../../../assets/svg'

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className={`Hamburger-menu ${menuIsOpen ? 'menu-open' : ''}`}>
      <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <HamburgerIcon />
      </button>
      <div className='menu-content'>
        <div className='icon-container'>
          <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <CloseSVG />
          </button>
        </div>
        <div className='link-container'>
          <Link to='/' className='hamburger-link'>home</Link>
          <Link to='/about' className='hamburger-link'>about</Link>
          <Link to='/blog' className='hamburger-link'>blog</Link>
          <Link to='/author' className='hamburger-link'>author hub</Link>
          <Link to='/tech' className='hamburger-link'>tech hub</Link>
          <Link to='/podcasts' className='hamburger-link'>podcasts</Link>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu

