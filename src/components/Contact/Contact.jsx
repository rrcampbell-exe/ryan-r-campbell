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
      <a href='http://eepurl.com/dhBxcv' rel='noopener' target='_blank' className='subscription-link'>subscribe to my newsletter <ExternalLinkSVG /></a>
    </div>
  )
}

export default Contact
