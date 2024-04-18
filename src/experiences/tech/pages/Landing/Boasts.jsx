import React from 'react'
import { boasts } from '../../../../constants'

const Boasts = () => {
  return (
    <div className='Boasts'>
      {boasts.map((boast) => (
        <div className='boast grow-on-hover'>
          {boast.image}
          <h3 className='boast-category'>{boast.category}</h3>
          {boast.description.map((description) => (
            <p>{description}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Boasts
