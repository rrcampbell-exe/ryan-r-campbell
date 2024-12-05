import React from 'react'
import { ExternalLinkSVG } from '../../assets/svg'

const Contact = () => {
  return (
    <div className='Contact'>
      <h3>tech inquiries</h3>
      <p>campbell [dot] ryan [dot] r [at] gmail [dot] com</p>
      <h3>author inquiries</h3>
      <p>rrcampbellwrites [at] gmail [dot] com</p>
      <h3>subscribe</h3>
      <a href='https://ryanrcampbell.substack.com/subscribe' rel='noopener' target='_blank' className='subscription-link'>subscribe on substack <ExternalLinkSVG /></a>
    </div>
  )
}

export default Contact
