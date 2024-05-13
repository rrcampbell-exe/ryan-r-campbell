import React from 'react'
import { PageWrapper, Contact } from '../../components'

const ContactPage = () => {
  return (
    <PageWrapper pageTitle='inquirer | inquiree' className='Contact-Page'>
      <div className='about-container'>
        <img className='about-img' src='./ryan-r-campbell-bookshelf-background.jpg' alt='Ryan R. Campbell in front of a blurry bookshelf' />
      </div>
      <div id='contact' className='section-wrapper contact-container'>
        <h2>contact</h2>
        <Contact />
      </div>
    </PageWrapper>
  )
}

export default ContactPage
