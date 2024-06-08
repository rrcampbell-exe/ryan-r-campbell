import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogTags = ({ tags }) => {
  const navigate = useNavigate()

  const transformTag = (tag) => {
    return tag.replace(/ /g, '-').toLowerCase()
  }
  return (
    <div className='Blog-tags'>
      <div className='content-post-underline' />
      <p>FILED UNDER:</p>
      <div className='tags-container'>
        {tags.map(tag => (
          <span key={tag} className='tag grow-on-hover' onClick={() => navigate(`/blog/${transformTag(tag)}`)}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default BlogTags
