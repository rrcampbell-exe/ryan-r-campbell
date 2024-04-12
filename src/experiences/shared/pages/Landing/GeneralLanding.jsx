import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import PopText from './PopText'
import Books from '../../../shared/components/Books/Books'
import Builds from '../../../shared/components/Builds/Builds'
import popText from '../../../../constants/pop-text'

const GeneralLanding = () => {
  const navigate = useNavigate()
  return (
    <PageWrapper pageTitle='author | technologist' >
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
        <div className='section-wrapper'>
          <h2>blog</h2>
        </div>
        <div className='section-wrapper shadow-bg-gray'>
          <h2>books</h2>
          <Books />
        </div>
        <div className='section-wrapper'>
          <h2>builds</h2>
          <Builds />
        </div>
        <div className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <h2>subscribe</h2>
        </div>
        {/* <div className='card-container section-wrapper'>
          <div className='card' onClick={() => navigate('/author')}>
            <h2>asdf</h2>
            <p>author</p>
          </div>
          <div className='card' onClick={() => navigate('/tech')}>
            <h2>{"</>"}</h2>
            <p>technologist</p>
          </div>
        </div>
        <div className='experience-selection'>
          <p>choose your experience</p>
        </div> */}
      </main>
    </PageWrapper>
  )
}

export default GeneralLanding
