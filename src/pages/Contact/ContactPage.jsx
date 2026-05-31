import React from 'react'
import { PageWrapper, Contact } from '../../components'

const ContactPage = () => {
  return (
    <PageWrapper pageTitle='inquirer & inquiree' className='Contact-Page'>
      <div className='contact-container'>
        <div id='contact' className='section-wrapper'>
          <h2>contact (gmail)</h2>
          <Contact />
        </div>
        <div className='section-wrapper'>
          <img className='contact-photo' src='./ryan-r-campbell-bookshelf-background.jpg' alt='Ryan R. Campbell in front of a blurry bookshelf' />
        </div>
      </div>
    </PageWrapper>
  )
}

export default ContactPage
