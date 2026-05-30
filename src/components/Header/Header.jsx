import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HamburgerMenu } from '../'

const NAV_LINKS = [
  { to: '/',         label: 'home' },
  { to: '/about',    label: 'about' },
  { to: '/ai',       label: 'AI' },
  { href: 'https://ryanrcampbell.substack.com', label: 'writing' },
  { to: '/books',    label: 'books' },
  { to: '/podcasts', label: 'archive' },
]

const Header = ({ pageTitle }) => {
  return (
    <header className='Header'>
      <Link to='/' className='link wordmark-link' aria-label='Home'>
        <span className='wordmark'>
          ryan r<span className='wordmark-dot'>.</span> campbell
        </span>
        {pageTitle && (
          <span className='page-subtitle' aria-hidden='true'>{pageTitle}</span>
        )}
      </Link>

      <nav className='header-nav' aria-label='Site navigation'>
        {NAV_LINKS.map(({ to, href, label }) =>
          href ? (
            <a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='header-nav__link'
            >
              {label}
            </a>
          ) : (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `header-nav__link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          )
        )}
      </nav>

      <div className='header-toggles'>
        <HamburgerMenu />
      </div>
    </header>
  )
}
export default Header

