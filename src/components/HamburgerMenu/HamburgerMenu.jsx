import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HamburgerIcon, CloseSVG } from '../../assets/svg'

const NAV_LINKS = [
  { to: '/',        label: 'home' },
  { to: '/podcasts', label: 'listen' },
  { href: 'https://ryanrcampbell.substack.com', label: 'read' },
  { to: '/books',   label: 'books' },
  { to: '/work',    label: 'work' },
  { to: '/about',   label: 'about' },
  { to: '/resume',   label: 'résumé' },
  { to: '/ai',      label: 'AI' },
  { to: '/contact', label: 'contact' },
]

const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const { pathname } = useLocation()

  const linkClass = (to) => pathname === to ? 'hamburger-link active' : 'hamburger-link'
  const closeMenu = () => {
    setMenuIsOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div className={`Hamburger-menu ${menuIsOpen ? 'menu-open' : ''}`} data-testid='menu'>
      <button
        type='button'
        className='hamburger-trigger'
        onClick={() => setMenuIsOpen(true)}
        ref={triggerRef}
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
            onClick={closeMenu}
            aria-hidden='true'
          />

          <nav
            id='mobile-navigation'
            className='menu-content'
            aria-label='Site navigation'
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault()
                closeMenu()
              }
            }}
          >
            <div className='icon-container'>
              <button
                type='button'
                className='menu-close-button'
                onClick={closeMenu}
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
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={to}
                    to={to}
                    className={linkClass(to)}
                    onClick={closeMenu}
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
