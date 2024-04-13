import React from 'react'
import posts from '../../../../assets/posts/posts'
import formatDate from '../../../../utils/format-date'

const BlogTeaser = () => {
  const teaserPosts = posts.slice(0, 3)

  console.log('these are the teaserPosts', teaserPosts)

  return (
    <div>
      {teaserPosts.map((post) => (
        <>
          <h3>{post.title.rendered}</h3>
          <span>Posted on {formatDate(post.date)}</span>
          <p>{post.excerpt.rendered}</p>
          <a href={post.link} target='_blank'>read more</a>
        </>
      ))}
    </div>
  )
}

export default BlogTeaser
