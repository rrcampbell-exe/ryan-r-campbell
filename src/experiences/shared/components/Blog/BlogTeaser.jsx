import React, { useEffect } from 'react'
import posts from '../../../../assets/posts/posts'
import formatDate from '../../../../utils/format-date'
import { Link } from 'react-router-dom'
import buildBlogParams from '../../../../utils/build-blog-params'

const BlogTeaser = ({ postsToDisplay, showCoverImage, postsPage }) => {
  const maxPostIndex = postsPage * postsToDisplay

  const teaserPosts = posts.slice(0, maxPostIndex)

  return (
    <div className='BlogTeaser'>
      {teaserPosts.map((post) => (
        <div className='blog-post grow-on-hover'>
          {showCoverImage && <img className='cover-image' src={post.episode_featured_image} />}
          <h3>{post.title.rendered}</h3>
          <span>Posted on {formatDate(post.date)}</span>
          <p>{post.excerpt.rendered}</p>
          <Link to={buildBlogParams(post.link)}>read more</Link>
          <div className='blog-post-underline' />
        </div>
      ))}
    </div>
  )
}

export default BlogTeaser
