import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HamburgerIcon from '../../../../assets/HamburgerIcon'

// TODO: need icon to update on menu open, change of theme
// TODO: styles for menu, including animation
// TODO: ensure all pages accounted for in menu

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='Hamburger-menu'>
      <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <HamburgerIcon />
      </button>
      {menuIsOpen &&
        <>
          <div onClick={() => navigate('/about')}>about</div>
          <div onClick={() => navigate('/author')}>author</div>
          <div onClick={() => navigate('/books')}>books</div>
          <div onClick={() => navigate('/tech')}>technologist</div>
          <div onClick={() => navigate('/blog')}>blog</div>
          <div onClick={() => navigate('/podcasts')}>podcasts</div>
        </>
      }
    </div>
  )
}

export default HamburgerMenu

