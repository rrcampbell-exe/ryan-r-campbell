import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon, CloseSVG } from '../../assets/svg'

const NAV_LINKS = [
  { to: '/',        label: 'home' },
  { to: '/about',   label: 'about' },
  { href: 'https://ryanrcampbell.substack.com', label: 'writing' },
  { to: '/books',   label: 'books' },
  { to: '/podcasts', label: 'archive' },
  { to: '/contact', label: 'contact' },
]

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { pathname } = useLocation()

  const linkClass = (to) => pathname === to ? 'hamburger-link active' : 'hamburger-link'

  return (
    <div className={`Hamburger-menu ${menuIsOpen ? 'menu-open' : ''}`} data-testid='menu'>
      <button
        type='button'
        className='hamburger-trigger'
        onClick={() => setMenuIsOpen(true)}
        aria-label='Open navigation menu'
        aria-expanded={menuIsOpen}
        aria-controls='mobile-navigation'
      >
        <HamburgerIcon />
      </button>

      {menuIsOpen && (
        <>
          <div
            className='menu-overlay'
            onClick={() => setMenuIsOpen(false)}
            aria-hidden='true'
          />

          <nav id='mobile-navigation' className='menu-content' aria-label='Site navigation'>
            <div className='icon-container'>
              <button
                type='button'
                className='menu-close-button'
                onClick={() => setMenuIsOpen(false)}
                data-testid='close-button'
                aria-label='Close navigation menu'
              >
                <CloseSVG />
              </button>
            </div>
            <div className='link-container'>
              {NAV_LINKS.map(({ to, href, label }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hamburger-link'
                    onClick={() => setMenuIsOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={to}
                    to={to}
                    className={linkClass(to)}
                    onClick={() => setMenuIsOpen(false)}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </nav>
        </>
      )}
    </div>
  )
}

export default HamburgerMenu

