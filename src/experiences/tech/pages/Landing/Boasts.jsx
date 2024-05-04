import React from 'react'
import { boasts } from '../../../../constants'

const Boasts = () => {
  return (
    <div className='Boasts' data-testid='boasts'>
      {boasts.map((boast) => (
        <div className='boast grow-on-hover' key={boast.category}>
          {boast.image}
          <h3 className='boast-category'>{boast.category}</h3>
          {boast.description.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Boasts
