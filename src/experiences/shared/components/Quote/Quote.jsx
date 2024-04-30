import React from 'react'
import { QuotesSVG } from '../../../../assets/svg'

const Quote = ({ text }) => {
  return (
    <div className='Quote'>
      <div>
        <QuotesSVG />
        <h3><em>{text}</em></h3>
      </div>
    </div>
  )
}

export default Quote
