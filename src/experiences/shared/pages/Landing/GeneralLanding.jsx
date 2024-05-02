import React from 'react'
import { useNavigate } from 'react-router-dom'
import PopText from '../../components/PopText/PopText'
import { popText } from '../../../../constants'
import { Books, Builds, BlogTeaser, PageWrapper, SubNav, Contact, NotFound } from '../../../shared/components'

const GeneralLanding = ({ pageNotFound }) => {
  const navigate = useNavigate()
  return (
    <PageWrapper pageTitle='author | technologist' >
      {pageNotFound ? (
        <main>
          <NotFound />
          <div id='contact' className='section-wrapper shadow-bg-main-accent'>
              <h2>contact</h2>
              <Contact />
            </div>
        </main>
      ) : (
        <>
          <SubNav sections={['blog', 'books', 'builds', 'contact']}/>
          <main className='General-landing'>
            <div id='about' className='shadow-bg-main-accent'>
              <div className='photo-banner'>
                <img className='about-img' src='./2024-ryan-r-campbell-website-headshot.png' />
                <div className='pop-text-container'>
                  <h2>home of</h2>
                  <PopText>
                    {popText.map((obj) => (
                      <h2 key={obj.id}>{obj.text}</h2>
                    ))}
                  </PopText>
                  <h2>ryan r. campbell</h2>
                </div>
              </div>
            </div>
            <div id='blog' className='section-wrapper'>
              <h2>blog</h2>
              <BlogTeaser postsToDisplay={3} postsPage={1} />
              <div className='button-container grow-on-hover'>
                <button onClick={() => { navigate('/blog'); window.scrollTo(top) }}>
                    to the blog
                </button>
              </div>
            </div>
            <div id='books' className='section-wrapper shadow-bg-gray'>
              <h2>books</h2>
              <Books />
              <div className='button-container grow-on-hover'>
                <button onClick={() => { navigate('/author'); window.scrollTo(top) }}>
                    about the author
                </button>
              </div>
            </div>
            <div id='builds' className='section-wrapper'>
              <h2>builds</h2>
              <Builds buildsToDisplay={3}/>
              <div className='button-container grow-on-hover'>
                <button onClick={() => { navigate('/tech'); window.scrollTo(top) }}>
                    about the engineer
                </button>
              </div>
            </div>
            <div id='contact' className='section-wrapper shadow-bg-main-accent'>
              <h2>contact</h2>
              <Contact />
            </div>
          </main>
        </>
      )}

    </PageWrapper>
  )
}

export default GeneralLanding
