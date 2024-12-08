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
              <img data-testid='book-cover' className='book-cover' src={book.cover} alt={book.alt} />
              <h3 className='book-title'>{book.title}</h3>
              <p>{book.summary}</p>
              <Link to={'/books'} state={{ hash: book.id }}>read more about {book.title.toLowerCase()}</Link>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Books
