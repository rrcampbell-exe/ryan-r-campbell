import React, { useEffect } from 'react'
import { Contact, SubNav, Reviews, PageWrapper } from '../../components'
import { books } from '../../constants'
import { useLocation } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

const BooksLanding = () => {
  const { state } = useLocation()

  useEffect(() => {
    if (state && state.hash) {
      const element = document.getElementById(state.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo(top)
      }
    }
  }, [])

  return (
    <PageWrapper pageTitle='international book awards finalist'>
      <SubNav sections={['scambait', 'and-ampersand', 'imminent-dawn', 'mourning-dove', 'contact']} />
      <main className='Books-landing'>
        {books.map((book, index) => (
          <div key={index}>
            <div id={book.id} className='section-wrapper book-section'>
                <div className='book-wrapper'>
                  <Tilt 
                    glareEnable={true}
                    perspective={2000}
                    glareMaxOpacity={0.45}
                    scale={1.05}
                    transitionSpeed={1000}
                  >
                    <img className='book-cover' src={book.cover} />
                  </Tilt>
                </div>
              <div className='section-wrapper book-metadata'>
                <h2 className='book-title'><i>{book.title}</i></h2>
                <p className='book-genre'>{book.genre}</p>
                <p><i>{book.shortPromoDescription}</i></p>
                <p>{book.fullDescription.paragraphOne}</p>
                {book.fullDescription.paragraphTwo && <p>{book.fullDescription.paragraphTwo}</p>}
                <div className='book-cta-button-container'>
                  <button data-testid={book.id} onClick={() => window.open(`${book.readMoreLink}`, '_blank')}>read a sample</button>
                  <button data-testid={book.buyLink} onClick={() => window.open(`${book.buyLink}`, '_blank')}>buy this book</button>
                </div>
              </div>
            </div>
            <Reviews selectReviews bookIdToDisplay={book.id} shadowBg id='reviews' />
          </div>
        ))}
        <div id='contact' className='shadow-bg-main-accent section-wrapper'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BooksLanding
