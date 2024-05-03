import React from 'react'
import { books } from '../../../../constants'
import { Link, useNavigate } from 'react-router-dom'

const Books = () => {
  const navigate = useNavigate()
  return (
    <div className='Books'>
      {books.map((book) => (
        <div key={book.id} onClick={() => navigate('/books')}>
          <div className='book grow-on-hover'>
            <img data-testid='book-cover' className='book-cover' src={book.cover} alt={book.alt} />
            <h3 className='book-title'>{book.title}</h3>
            <p>{book.summary}</p>
            <Link to={'/books'}>read more</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Books
