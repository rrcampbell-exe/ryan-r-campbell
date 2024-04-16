import React from 'react'
import { useNavigate } from 'react-router-dom'
import PopText from '../../components/PopText/PopText'
import popText from '../../../../constants/pop-text'
import { Books, Builds, BlogTeaser, PageWrapper, SubNav, Contact } from '../../../shared/components'

const GeneralLanding = () => {
  const navigate = useNavigate()
  return (
    <PageWrapper pageTitle='author | technologist' >
      <SubNav sections={['blog', 'books', 'builds', 'contact']}/>
      <main className='General-landing'>
        <div id='about' className='shadow-bg-main-accent section-wrapper'>
          <div className='photo-banner'>
            <img className='author-headshot' src='./2024-ryan-r-campbell-website-headshot.png' />
            <div className='pop-text-container'>
              <h2>home of</h2>
              <PopText>
                {popText.map((obj) => (
                  <h2>{obj.text}</h2>
                ))}
              </PopText>
              <h2>ryan r. campbell</h2>
            </div>
          </div>
        </div>
        <div id='blog' className='section-wrapper'>
          <h2>blog</h2>
          <BlogTeaser />
        </div>
        <div id='books' className='section-wrapper shadow-bg-gray'>
          <h2>books</h2>
          <Books />
          <div className='button-container grow-on-hover'>
            <button onClick={() => navigate('/author')}>
                about the author
            </button>
          </div>
        </div>
        <div id='builds' className='section-wrapper'>
          <h2>builds</h2>
          <Builds />
          <div className='button-container grow-on-hover'>
            <button onClick={() => navigate('/technologist')}>
                about the engineer
            </button>
          </div>
        </div>
        <div id='contact' className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <Contact />
          <h2>subscribe</h2>
        </div>
      </main>
    </PageWrapper>
  )
}

export default GeneralLanding
