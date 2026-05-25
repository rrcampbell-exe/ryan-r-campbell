import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='Footer' id='contact'>
      <div className='footer-inner'>
        <div className='footer-brand'>
          <Link to='/' className='footer-wordmark' aria-label='Home'>
            ryan r<span className='footer-dot'>.</span> campbell
          </Link>
          <p className='footer-tagline'>Software engineer &amp; author based in Milwaukee, WI.</p>
        </div>

        <nav className='footer-nav' aria-label='Footer navigation'>
          <span className='footer-nav-label'>Navigate</span>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>Writing</Link></li>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/podcasts'>Archive</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>

        <div className='footer-connect'>
          <span className='footer-nav-label'>Connect</span>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/ryan-r-campbell/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://ryanrcampbell.substack.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Substack
              </a>
            </li>
            <li>
              <a
                href='https://github.com/rrcampbell-exe'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className='footer-contact'>
          <span className='footer-nav-label'>Contact (Gmail)</span>
          <div className='footer-contact__grid'>
            <div>
              <p className='footer-contact__label'>tech inquiries</p>
              <p>campbell.ryan.r</p>
            </div>
            <div>
              <p className='footer-contact__label'>author inquiries</p>
              <p>rrcampbellwrites</p>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <span>© 2012 – {currentYear} Ryan R. Campbell</span>
      </div>
    </footer>
  )
}

export default Footer
