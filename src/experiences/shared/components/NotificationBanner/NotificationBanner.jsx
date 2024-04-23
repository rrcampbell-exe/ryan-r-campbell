import React from 'react'
import { CalendarSVG } from '../../../../assets/svg'

const NotificationBanner = ({ title, text }) => {
  return (
    <div className='NotificationBanner'>
      <div>
        <CalendarSVG />
      </div>
      <div>
        <p className='banner-title'>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default NotificationBanner
