import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      © 2012 - {currentYear} Ryan R. Campbell
    </footer>
  )
}

export default Footer
