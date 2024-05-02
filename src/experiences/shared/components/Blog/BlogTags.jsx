import React from 'react'

const BlogTags = ({ tags }) => {
  return (
    <div className='Blog-tags'>
      <div className='content-post-underline' />
      <p>FILED UNDER:</p>
      <div className='tags-container'>
        {tags.map(tag => (
          <span key={tag} className='tag'>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default BlogTags
