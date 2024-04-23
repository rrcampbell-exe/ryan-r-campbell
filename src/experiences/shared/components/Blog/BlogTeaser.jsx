import React from 'react'
import posts from '../../../../assets/posts/posts'
import { formatDate, buildNavURL } from '../../../../utils'
import { Link, useNavigate } from 'react-router-dom'

const BlogTeaser = ({ postsToDisplay, showCoverImage, postsPage }) => {
  const navigate = useNavigate()
  const maxPostIndex = postsPage * postsToDisplay

  const teaserPosts = posts.slice(0, maxPostIndex)

  return (
    <div className='ContentTeaser'>
      {teaserPosts.map((post) => (
        <div onClick={() => navigate(buildNavURL(post.link))} key={post.id}>
          <div className='content-post grow-on-hover'>
            {showCoverImage && <img className='cover-image' src={post.episode_featured_image} />}
            <h3>{post.title.rendered}</h3>
            <span>Posted on {formatDate(post.date)}</span>
            <p>{post.excerpt.rendered}</p>
            <Link to={buildNavURL(post.link)}>read more</Link>
            <div className='content-post-underline' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogTeaser
