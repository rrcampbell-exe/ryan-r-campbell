import React from 'react'
import books from '../../../../constants/book-data'

const Books = () => {
  return (
    <div className='Books'>
      {books.map((book) => (
        <div className='book grow-on-hover'>
          <img className='book-cover' src={book.cover} alt={book.alt} />
          <h3 className='book-title'>{book.title}</h3>
          <p>{book.summary}</p>
          <a href={book.readMoreLink}>read more</a>
        </div>
      ))}
    </div>
  )
}

export default Books
