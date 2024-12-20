import React from 'react'
import { useNavigate } from 'react-router-dom'
import { posts, legacyPosts } from '../../assets/posts'

const BackToBlog = () => {
  const navigate = useNavigate()
  return (
    <>
      <a onClick={() => navigate('/blog')} title='link back to blog'>back to blog</a>
      <span>Keep Curious</span>
    </>
  )
}

const BlogFooter = ({ post }) => {
  // get current post index
  const { postIndex } = post

  const isLatestPost = postIndex === 0
  const isOldestPost = postIndex === [...posts, ...legacyPosts].length - 1

  // find adjacent blog posts
  const previousPost = postIndex < [...posts, ...legacyPosts].length - 1 ? [...posts, ...legacyPosts][postIndex + 1] : null
  const nextPost = postIndex > 0 ? [...posts, ...legacyPosts][postIndex - 1] : null

  // find adjacent blog post links
  const previousPostLink = previousPost?.link
  const nextPostLink = nextPost?.link

  // remove everything up through .com in the URL
  const cleanPreviousLink = previousPostLink?.replace(/.*\.com/, '')
  const cleanNextLink = nextPostLink?.replace(/.*\.com/, '')

  // find adjacent blog post titles
  const previousPostTitle = previousPost?.title.rendered
  const nextPostTitle = nextPost?.title.rendered

  const navigate = useNavigate()
  return (
    <div className='nav-footer'>
      <div className='post-nav-container previous-post'>
        {!isOldestPost ? (
          <>
            <a onClick={() => navigate(cleanPreviousLink)} title='link to previous post'>&lt; previous post</a>
            <span>{previousPostTitle}</span>
          </>
        ) : (
          <BackToBlog />
        )}
      </div>
      <div className='post-nav-container next-post'>
        {!isLatestPost ? (
          <>
            <a onClick={() => navigate(cleanNextLink)} title='link to next post'>next post &gt;</a>
            <span>{nextPostTitle}</span>
          </>
        ) : (
          <BackToBlog />
        )}
      </div>
    </div>
  )
}

export default BlogFooter
