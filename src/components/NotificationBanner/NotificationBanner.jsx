import React from 'react'
import { CalendarSVG, LightBulbSVG } from '../../assets/svg'

const NotificationBanner = ({ title, text, type, colorScheme }) => {

  const svg = type === 'tip' ? <LightBulbSVG /> : <CalendarSVG />

  return (
    <div className={`NotificationBanner ${colorScheme ? colorScheme : ''}`}>
      <div>
        {svg}
      </div>
      <div>
        <p className='banner-title'>{title}</p>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default NotificationBanner
