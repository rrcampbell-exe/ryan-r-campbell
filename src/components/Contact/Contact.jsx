import React from 'react'
import { ExternalLinkSVG } from '../../assets/svg'

const Contact = () => {
  return (
    <div className='Contact'>
      <h4>tech inquiries</h4>
      <p>campbell [dot] ryan [dot] r [at] gmail [dot] com</p>
      <h4>author inquiries</h4>
      <p>rrcampbellwrites [at] gmail [dot] com</p>
      <h4>subscribe</h4>
      <a href='http://eepurl.com/dhBxcv' rel='noopener' target='_blank' className='subscription-link'>subscribe to my newsletter <ExternalLinkSVG /></a>
    </div>
  )
}

export default Contact
