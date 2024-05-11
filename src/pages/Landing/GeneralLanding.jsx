import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { popText } from '../../constants'
import { Books, Builds, BlogTeaser, PageWrapper, SubNav, Contact, PopText } from '../../components'
import ReactModal from 'react-modal'

const GeneralLanding = ({ pageNotFound }) => {
  const navigate = useNavigate()
  return (
    <PageWrapper pageTitle='author | technologist' >
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
      <ReactModal
        isOpen={pageNotFound}
        onRequestClose={() => navigate('/')}
      >
        <div className='modal-content'>
          <h2>Welcome to the new site!</h2>
          <div className='image-container'>
            <img src='./2024-ryan-r-campbell-with-hat-on-outdoors.jpg' />
            <img src='./round-favicon-2024-ryan-r-campbell.png' />
            <img src='./ryan-r-campbell-bookshelf-background.jpg' />
          </div>
          <h3>But we couldn't find the page you were looking for...</h3>
          <p>It might have been moved as part of a recent site migration.</p>
          <p><Link to='/'>homepage</Link> | <Link to='mailto:campbell.ryan.r@gmail.com'>contact</Link></p>
        </div>
      </ReactModal>
    </PageWrapper>
  )
}

export default GeneralLanding
