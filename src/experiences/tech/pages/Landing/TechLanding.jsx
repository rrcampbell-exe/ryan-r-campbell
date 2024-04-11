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
              I'm a full-stack (React, Express, Node) software engineer for a Fortune 100 insurance and financial services firm. When I'm not squashing bugs or building a better client experience, I'm fine-tuning my foreign language repetoire or gazing at the stars.
            </p>
            <Link to='/tech/about'>learn more</Link>
          </div>
        </div>
        <h2>background</h2>
        <p>With years of experience in fields including <span className='accent-color'>agriculture</span>, <span className='accent-color'>medical devices</span>, <span className='accent-color'>international regulatory affairs</span>, <span className='accent-color'>financial services</span>, and <span className='accent-color'>publishing</span>, I bring a unique, effiency-minded, and outcome-driven perspective to every project.</p>
        <a href=''>view my resume</a>
        <h2>blog</h2>
        <p>Sometimes I write about tech. Sometimes I write about the stars (think space, not celebrities). Sometimes I write about odd linguistic minutiae I encounter in my everyday life.</p>
        <p>What I'm trying to say here is <i>I write</i>. The latest posts on these topics and more can be found below.</p>
        <h2>projects</h2>
        <ul>
          <li>Real Fake Birds</li>
          <li>Yarnsworth's Tales</li>
          <li>This Very Site</li>
        </ul>
        <h2>follow</h2>
      </main>
    </PageWrapper>
  )
}

export default TechLanding
