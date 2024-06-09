import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogTags = ({ tags, year, tagsQty }) => {
  const navigate = useNavigate()

  const transformTag = (tag) => {
    return tag.replace(/ /g, '-').toLowerCase()
  }

  if (tagsQty === 0 || year < 2021) return null

  return (
    <div className='tags'>
      <div className='Blog-tags'>
        <div className='content-post-underline' />
        <p>FILED UNDER:</p>
        <div className='tags-container'>
          {tags.map(tag => (
            <span key={tag} className='tag grow-on-hover' onClick={() => navigate(`/blog/${transformTag(tag)}`)}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogTags
