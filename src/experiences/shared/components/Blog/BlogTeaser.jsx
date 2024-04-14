import React from 'react'
import posts from '../../../../assets/posts/posts'
import formatDate from '../../../../utils/format-date'
import { Link } from 'react-router-dom'
import buildBlogParams from '../../../../utils/build-blog-params'

const BlogTeaser = () => {
  const teaserPosts = posts.slice(0, 3)

  return (
    <div className='BlogTeaser'>
      {teaserPosts.map((post) => (
        <div className='blog-post grow-on-hover'>
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
