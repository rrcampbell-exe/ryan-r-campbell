import React from 'react'
import PageWrapper from '../../../shared/components/PageWrapper/PageWrapper'
import { Link } from 'react-router-dom'
import { Builds, SubNav, Contact } from '../../../shared/components'
import Boasts from './Boasts'

// TODO: build out skills section (see resume, other portfolio) - DO THIS AS A "BUZZWORDCLOUD," MAYBE?

const TechLanding = () => {
  return (
    <PageWrapper pageTitle='engineer | problem-solver | people leader'>
      <SubNav sections={['about', 'builds', 'skills', 'boasts', 'contact']} />
      <main className='Tech-landing'>
        <div id='about' className='about-row section-wrapper'>
          <div>
            <img className='author-headshot' src='./2024-ryan-r-campbell-website-headshot.png' />
          </div>
          <div className='section-wrapper'>
            <h2>about</h2>
            <p>
              I'm a full-stack (React, Express, Node) software engineer for a Fortune 100 insurance and financial services firm. When I'm not squashing bugs or building a better client experience, I'm fine-tuning my foreign language repetoire or gazing at the stars.
            </p>
            <Link to='/tech/about'>learn more</Link>
          </div>
        </div>
        <div id='builds' className='section-wrapper'>
          <h2>builds</h2>
          <Builds />
        </div>
        <div id='skills' className='section-wrapper shadow-bg-gray'>
          <h2>skills</h2>
          <p>With years of experience in fields including <span className='accent-color'>agriculture</span>, <span className='accent-color'>medical devices</span>, <span className='accent-color'>international regulatory affairs</span>, <span className='accent-color'>financial services</span>, and <span className='accent-color'>publishing</span>, I bring a unique, effiency-minded, and outcome-driven perspective to every project and organization.</p>
          <a href=''>view my resume</a>
        </div>
        <div id='boasts' className='section-wrapper'>
          <h2>boasts</h2>
          <Boasts />
        </div>
        <div id='contact' className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default TechLanding
