import React from 'react'
import { Link } from 'react-router-dom'
import { Builds, SubNav, Contact, PageWrapper, Boasts, SkillsCloud } from '../../components'

const TechLanding = () => {
  return (
    <PageWrapper pageTitle='engineer | problem-solver | communicator'>
      <SubNav sections={['about', 'builds', 'skills', 'boasts', 'contact']} />
      <main className='Tech-landing'>
        <div id='about' className='about-row section-wrapper shadow-bg-gray'>
          <div>
            <img className='about-img' src='./2024-ryan-r-campbell-website-headshot.png' />
          </div>
          <div className='section-wrapper about-description'>
            <h2>about</h2>
            <p>
              I'm a full-stack (React, Express, Node) software engineer for a Fortune 100 insurance and financial services firm. When I'm not squashing bugs or building a better client experience, I'm fine-tuning my foreign language repetoire or gazing at the stars.
            </p>
            <Link to='/about'>learn more</Link>
          </div>
        </div>
        <div id='builds' className='section-wrapper'>
          <h2>builds</h2>
          <Builds />
        </div>
        <div id='skills' className='section-wrapper shadow-bg-gray'>
          <h2>skills</h2>
          <div>
            <SkillsCloud />
          </div>
          <p>This is a sample of some of the <span className='accent-color'>technical skills</span> I bring to the table. Resume available upon request.</p>
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
