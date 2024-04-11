import React from 'react'
import PageWrapper from '../../../shared/components/PageWrapper/PageWrapper'
import { Link } from 'react-router-dom'

const AuthorLanding = () => {
  return (
    <PageWrapper pageTitle='two-time international book awards finalist'>
      <main className='section-wrapper'>
        <div className='about-row'>
          <div className='about-col'>
            <img className='author-headshot' src='./2024-ryan-r-campbell-website-headshot.png' />
          </div>
          <div className='about-col'>
            <h2>about</h2>
            <p>
              I'm a two-time International Book Awards finalist, the founder of the Writescast Network, and the co-founder of Kill Your Darlings Candle Company. 
            </p>
            <Link to='/author/about'>learn more</Link>
          </div>
        </div>
        <h2>books</h2>
        <h2>follow</h2>
      </main>
    </PageWrapper>
  )
}

export default AuthorLanding
