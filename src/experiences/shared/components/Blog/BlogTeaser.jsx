import React from 'react'
import legacyPosts from '../../../../assets/posts/legacy-posts'
import posts from '../../../../assets/posts/new-posts.jsx'
import { formatDate, buildNavURL } from '../../../../utils'
import { Link, useNavigate } from 'react-router-dom'

const renderTags = (post) => {
  const postDate = new Date(post.date)
  const postYear = postDate.getUTCFullYear().toString()

  if (parseInt(postYear) > 2023) {
    return (
      <div className='teaser-tags'>
        <p>FILED UNDER:</p> 
        <p>{post.tags.join(', ').toUpperCase()}</p>
      </div>
    )
  }
}

const BlogTeaser = ({ postsToDisplay, showCoverImage, postsPage }) => {
  const navigate = useNavigate()
  const maxPostIndex = postsPage * postsToDisplay

  const allPosts = [...posts, ...legacyPosts]

  const teaserPosts = allPosts.slice(0, maxPostIndex)

  return (
    <div className='ContentTeaser' data-testid='blog-teaser'>
      {teaserPosts.map((post) => (
        <div onClick={() => navigate(buildNavURL(post.link))} key={post.id}>
          <div className='content-post grow-on-hover'>
            {showCoverImage && <img className='cover-image' src={post.episode_featured_image} />}
            <h3>{post.title.rendered}</h3>
            <span>Posted on {formatDate(post.date)}</span>
            <p>{post.excerpt.rendered}</p>
            {renderTags(post)}
            <Link to={buildNavURL(post.link)}>read more</Link>
            <div className='content-post-underline' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogTeaser
