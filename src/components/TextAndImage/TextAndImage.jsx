import React from 'react'

const TextAndImage = ({ jsx, src, caption, imageOnLeft }) => {
  return (
    <div className={`Text-And-Image-Container ${imageOnLeft ? 'image-on-left' : ''}`}>
      <div className='text-block' dangerouslySetInnerHTML={{ __html: jsx }} />
      <div className='image-block'>
        <img src={src} />
        <div className='caption-container'>
          <span>{caption}</span>
        </div>
      </div>
    </div>
  )
}

export default TextAndImage
