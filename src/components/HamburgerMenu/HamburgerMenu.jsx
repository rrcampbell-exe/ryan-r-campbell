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
        className='theme-toggle-button'
        onClick={() => setMenuIsOpen(true)}
        aria-label='Open navigation menu'
        aria-expanded={menuIsOpen}
      >
        <HamburgerIcon />
      </button>

      {/* Overlay backdrop */}
      {menuIsOpen && (
        <div
          className='menu-overlay'
          onClick={() => setMenuIsOpen(false)}
          aria-hidden='true'
        />
      )}

      <nav className='menu-content' aria-label='Site navigation' aria-hidden={!menuIsOpen}>
        <div className='icon-container'>
          <button
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
    </div>
  )
}

export default HamburgerMenu


