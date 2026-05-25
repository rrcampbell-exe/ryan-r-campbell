import React from 'react'
import { boasts } from '../../constants'

const Boasts = () => {
  return (
    <div className='Boasts' data-testid='boasts'>
      {boasts.map((boast) => (
        <div className='boast-row' key={boast.category}>
          <div className='boast-row__header'>
            <div className='boast-row__icon' aria-hidden='true'>{boast.image}</div>
            <h3 className='boast-row__category'>{boast.category}</h3>
          </div>
          <ul className='boast-row__achievements'>
            {boast.description.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Boasts
