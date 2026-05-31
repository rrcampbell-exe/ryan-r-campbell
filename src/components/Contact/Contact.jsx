import React from 'react'
import { ExternalLinkSVG } from '../../assets/svg'

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contact-option'>
        <h3>tech inquiries</h3>
        <p>campbell.ryan.r</p>
      </div>
      <div className='contact-option'>
        <h3>author inquiries</h3>
        <p>rrcampbellwrites</p>
      </div>
      <div className='contact-option'>
        <h3>subscribe</h3>
        <a href='https://ryanrcampbell.substack.com/subscribe' rel='noopener' target='_blank' className='subscription-link'><p>Subscribe on Substack <ExternalLinkSVG /></p></a>
      </div>
      <div className='contact-option'>
        <h3>connect</h3>
        <a href='https://www.linkedin.com/in/ryan-r-campbell/' rel='noopener' target='_blank' className='subscription-link'><p>Connect on LinkedIn <ExternalLinkSVG /></p></a>
      </div>
    </div>
  )
}

export default Contact
