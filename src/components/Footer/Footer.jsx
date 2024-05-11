import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div className='site-logo-container'>
        <img src='/favicon-2024-ryan-r-campbell.png' alt='ryan r. campbell logo' />
      </div>
      <span>© 2012 - {currentYear} Ryan R. Campbell</span>
    </footer>
  )
}

export default Footer
