import React from 'react'
import { RobotSVG } from '../../assets/svg'
import { Link } from 'react-router-dom'

const NotFound = ({ contentType }) => {
  const content = contentType ? contentType : 'page' 

  return (
    <div className='NotFound'>
      <div className='media-text-row section-wrapper'>
        <div>
          <RobotSVG />
        </div>
        <div className='media-text-row__body'>
          <h2>{content} not found</h2>
          <p>I couldn't find the {content} you were looking for. It might have been moved or relocated as part of a recent site migration.</p>
          <Link to='/'>return to the homepage here.</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
