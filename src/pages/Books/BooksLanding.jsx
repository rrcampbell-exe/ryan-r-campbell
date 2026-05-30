import React from 'react'
import { SubNav, Reviews, PageWrapper } from '../../components'
import { books } from '../../constants'
import Tilt from 'react-parallax-tilt'
import { useScrollToHash } from '../../hooks'

const BooksLanding = () => {
  useScrollToHash()

  return (
    <PageWrapper pageTitle='international book awards finalist'>
      <SubNav sections={['scambait', 'and-ampersand', 'imminent-dawn', 'mourning-dove']} />
      <main className='Books-landing'>
        {books.map((book, index) => (
          <div key={index}>
            <div id={book.id} className='section-wrapper book-section'>
                {book.cover && <div className='book-wrapper'>
                  <div
                    className='book-cover-frame'
                    style={book.coverWidth && book.coverHeight
                      ? { aspectRatio: `${book.coverWidth} / ${book.coverHeight}` }
                      : undefined}
                  >
                    <Tilt
                      className='book-cover-tilt'
                      glareEnable={true}
                      perspective={2000}
                      glareMaxOpacity={0.45}
                      scale={1.05}
                      transitionSpeed={1000}
                    >
                      <img
                        className='book-cover'
                        src={book.cover}
                        alt={book.alt}
                        width={book.coverWidth}
                        height={book.coverHeight}
                      />
                    </Tilt>
                  </div>
                </div>}
              <div className='section-wrapper book-metadata'>
                <h2 className='book-title'><i>{book.title}</i></h2>
                <p className='book-genre'>{book.genre}</p>
                <p><i>{book.shortPromoDescription}</i></p>
                <p>{book.fullDescription.paragraphOne}</p>
                {book.fullDescription.paragraphTwo && <p>{book.fullDescription.paragraphTwo}</p>}
                {book.disclaimer && <p><em>{book.disclaimer}</em></p>}
                <div className='book-cta-button-container'>
                  {book.readMoreLink && <button data-testid={book.id} onClick={() => window.open(`${book.readMoreLink}`, '_blank')}>Read a sample</button>}
                  {book.buyLink && <button data-testid={book.buyLink} onClick={() => window.open(`${book.buyLink}`, '_blank')}>Buy this book</button>}
                  {book.disclaimer && <button data-testid={`${book.id}-disclaimer`}onClick={() => window.open('https://ryanrcampbell.substack.com/p/what-happened-to-the-empathy-series', '_blank')}>Learn more</button>}
                </div>
              </div>
            </div>
            <Reviews selectReviews bookIdToDisplay={book.id} shadowBg id='reviews' />
          </div>
        ))}
      </main>
    </PageWrapper>
  )
}

export default BooksLanding
