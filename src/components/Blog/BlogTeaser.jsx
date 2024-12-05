import React from 'react'
import { posts, legacyPosts } from '../../assets/posts'
import { formatDate, buildNavURL } from '../../utils'
import { Link, useNavigate } from 'react-router-dom'

const renderTags = (post) => {
  const postDate = new Date(post.date)
  const postYear = postDate.getUTCFullYear().toString()

  if (parseInt(postYear) > 2020) {
    return (
      <div className='teaser-tags'>
        <p>FILED UNDER:</p> 
        <p>{post.tags.join(', ').toUpperCase()}</p>
      </div>
    )
  }
}

const BlogTeaser = ({ postsQtyToDisplay, showCoverImage, postsPage, isTagSearch, filteredPosts, isGeneralLandingPage }) => {
  const navigate = useNavigate()
  const teaserPostQtyToDisplay = postsQtyToDisplay ? postsQtyToDisplay : 3

  const maxPostIndex = postsPage * teaserPostQtyToDisplay

  const allPosts = [...posts, ...legacyPosts]

  const teaserPosts = isTagSearch ? filteredPosts.slice(0, maxPostIndex) : allPosts.slice(0, maxPostIndex)

  return (
    <div className='ContentTeaser' data-testid='blog-teaser'>
      {teaserPosts.map((post) => (
        <div onClick={() => navigate(buildNavURL(post.link))} key={post.id}>
          <div className='content-post grow-on-hover'>
            {showCoverImage && <img className='cover-image' src={post.episode_featured_image} alt={post.featured_image_alt ? post.featured_image_alt : 'The cover image for a blog post'} />}
            <h3>{post.title.rendered}</h3>
            {!isGeneralLandingPage && <span>Posted on {formatDate(post.date)}</span>}
            <p>{post.excerpt.rendered}</p>
            {!isGeneralLandingPage && renderTags(post)}
            <Link to={buildNavURL(post.link)}>{isGeneralLandingPage ? 'visit me on substack here' : 'read the full post'}</Link>
            {!isGeneralLandingPage && <div className='content-post-underline' />}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogTeaser
