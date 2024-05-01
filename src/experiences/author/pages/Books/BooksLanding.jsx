import React from 'react'
import PageWrapper from '../../../shared/components/PageWrapper/PageWrapper'
import { Contact, SubNav, Reviews } from '../../../shared/components'
import { books } from '../../../../constants'

const BooksLanding = () => {
  return (
    <PageWrapper pageTitle='international book awards finalist'>
      <SubNav sections={['scambait', 'and-ampersand', 'imminent-dawn', 'mourning-dove', 'reviews', 'contact']} />
      <main className='Books-landing'>
        {books.map((book) => (
          <div id={book.id} className='section-wrapper book-section' key={book.id}>
            <div className='book-wrapper'>
              <img className='book-cover' src={book.cover} />
            </div>
            <div className='section-wrapper book-metadata'>
              <h2 className='book-title'><i>{book.title.toLowerCase()}</i></h2>
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
        ))}
        <div id='reviews' className='section-wrapper'>
          <h2>reviews</h2>
          <Reviews />
        </div>
        <div id='contact' className='shadow-bg-main-accent section-wrapper'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BooksLanding
