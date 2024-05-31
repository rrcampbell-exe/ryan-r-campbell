import React from 'react'
import { CalendarSVG, LightBulbSVG, BullhornSVG } from '../../assets/svg'

const NotificationBanner = ({ title, text, type, colorScheme }) => {

  let svg
  switch(type) {
    case 'tip':
      svg = <LightBulbSVG />
      break
    case 'announcement':
      svg = <BullhornSVG />
      break
    default:
      svg = <CalendarSVG />
  }

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
