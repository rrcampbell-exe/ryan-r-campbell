import React from 'react'
import { books } from '../../constants'
import { Link } from 'react-router-dom'

const Books = ({ hideEmpathy }) => {
  // if hideEmpathy is true, hide the EMPATHY series book covers
  const booksToDisplay = hideEmpathy ? books.filter((book) => book.id !== 'imminent-dawn' && book.id !== 'mourning-dove') : books
  return (
    <div className='Books' data-testid='books'>
      {booksToDisplay.map((book) => (
        <Link to={'/books'} state={{ hash: book.id }} key={book.id}>
          <div>
            <div className='book-container grow-on-hover'>
              {book.cover && (
                <div
                  className='book-cover-frame'
                  style={book.coverWidth && book.coverHeight
                    ? { aspectRatio: `${book.coverWidth} / ${book.coverHeight}` }
                    : undefined}
                >
                  <img
                    data-testid='book-cover'
                    className='book-cover'
                    src={book.cover}
                    alt={book.alt}
                    width={book.coverWidth}
                    height={book.coverHeight}
                  />
                </div>
              )}
              <h3 className='book-title'>{book.title}</h3>
              <p>{book.summary}</p>
              <button className='btn-secondary'>
                <Link to={'/books'} state={{ hash: book.id }}>Read more</Link>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Books
