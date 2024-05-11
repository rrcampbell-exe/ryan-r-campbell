import React from 'react'
import { MicrophoneSVG } from '../../assets/svg'

const Loading = ({ height }) => {
  return (
    <div className='Loading' style={{ height }}>
      <div className='loader-content'>
        <MicrophoneSVG />
        <p>loading...</p>
      </div>
    </div>
  )
}

export default Loading