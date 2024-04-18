import React from 'react'
import PageWrapper from '../../../shared/components/PageWrapper/PageWrapper'
import { Link } from 'react-router-dom'
import { Books, Contact, SubNav, Reviews } from '../../../shared/components'
import { featuredIn, awards } from '../../../../constants'

const AuthorLanding = () => {
  return (
    <PageWrapper pageTitle='international book awards finalist'>
      <SubNav sections={['about', 'books', 'reviews', 'awards', 'featured-in', 'contact']} />
      <main className='Author-landing'>
        <div id='about' className='about-row section-wrapper'>
          <div>
            <img className='author-headshot' src='./2024-ryan-r-campbell-website-headshot.png' />
          </div>
          <div className='section-wrapper about-description'>
            <h2>about</h2>
            <p>
              I'm a two-time International Book Awards finalist, the founder of the Writescast Network, and the co-founder of Kill Your Darlings Candle Company. 
            </p>
            <Link to='/author/about'>learn more</Link>
          </div>
        </div>
        <div id='books' className='shadow-bg-gray section-wrapper'>
          <h2>books</h2>
          <Books />
        </div>
        <div id='reviews' className='section-wrapper'>
          <h2>reviews</h2>
          <Reviews />
        </div>
        <div id='awards' className='section-wrapper shadow-bg-gray'>
          <h2>awards</h2>
          <div className='featured-img-container'>
            {awards.map((award) => (
              <div className={`featured-img ${award.className} grow-on-hover`} >
                <a href={award.link} target='_blank' rel='noopener noreferrer'>
                  <img src={award.src} alt={award.alt}/>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div id='featured-in' className='section-wrapper'>
          <h2>featured in</h2>
          <div className='featured-img-container'>
            {featuredIn.map((feature) => (
              <div className={`featured-img ${feature.className} grow-on-hover`} >
                <a href={feature.link} target='_blank' rel='noopener noreferrer'>
                  <img src={feature.src} alt={feature.alt}/>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div id='contact' className='shadow-bg-main-accent section-wrapper'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default AuthorLanding
