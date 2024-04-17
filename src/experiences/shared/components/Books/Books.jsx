import React from 'react'
import { books } from '../../../../constants'
import { Link } from 'react-router-dom'

const Books = () => {
  return (
    <div className='Books'>
      {books.map((book) => (
        <div className='book grow-on-hover'>
          <img className='book-cover' src={book.cover} alt={book.alt} />
          <h3 className='book-title'>{book.title}</h3>
          <p>{book.summary}</p>
          <Link to={'/books'}>read more</Link>
        </div>
      ))}
    </div>
  )
}

export default Books
