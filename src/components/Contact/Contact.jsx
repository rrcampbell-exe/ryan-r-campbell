import React from 'react'
import { ExternalLinkSVG } from '../../assets/svg'

const Contact = () => {
  return (
    <div className='Contact'>
      <h3>tech inquiries</h3>
      <p>campbell.ryan.r</p>
      <h3>author inquiries</h3>
      <p>rrcampbellwrites</p>
      <h3>subscribe</h3>
      <a href='https://ryanrcampbell.substack.com/subscribe' rel='noopener' target='_blank' className='subscription-link'><p>subscribe on Substack <ExternalLinkSVG /></p></a>
      <h3>connect</h3>
      <a href='https://www.linkedin.com/in/ryan-r-campbell/' rel='noopener' target='_blank' className='subscription-link'><p>connect on LinkedIn <ExternalLinkSVG /></p></a>
    </div>
  )
}

export default Contact
