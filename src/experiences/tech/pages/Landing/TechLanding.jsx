import React from 'react'
import PageWrapper from '../../../shared/components/PageWrapper/PageWrapper'
import { Link } from 'react-router-dom'

const TechLanding = () => {
  return (
    <PageWrapper pageTitle='engineer | linguist | stargazer'>
      <main className='section-wrapper'>
        <div className='about-row'>
          <div className='about-col'>
            <img className='author-headshot' src='./2024-ryan-r-campbell-website-headshot.png' />
          </div>
          <div className='about-col'>
            <h2>about</h2>
            <p>
              Ryan R. Campbell is a full-stack (React, Express, Node) software engineer for a Fortune 100 financial services firm. When he isn't squashing bugs or building a better client experience, he's fine-tuning his foreign language repetoire or gazing at the stars.
            </p>
            <Link to='/tech/about'>learn more</Link>
          </div>
        </div>
        <h2>background</h2>
        <h2>blog</h2>
        <h2>projects</h2>
        <h2>follow</h2>
      </main>
    </PageWrapper>
  )
}

export default TechLanding
