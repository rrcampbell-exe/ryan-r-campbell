import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils'

const BlogTeaser = ({ postsQtyToDisplay, isGeneralLandingPage }) => {
  const [feedPosts, setFeedPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetch('/api/latest-posts')
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('The latest-posts API returned an invalid response')
        setFeedPosts(data)
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false))
  }, [])

  const teaserPosts = feedPosts.slice(0, postsQtyToDisplay || 3)

  return (
    <div className='ContentTeaser' data-testid='blog-teaser'>
      {isLoading && <p role='status'>Loading latest essays...</p>}
      {hasError && (
        <p role='alert'>
          Latest essays are unavailable right now.{' '}
          <a href='https://www.r-on-everything.com'>Read them on Substack.</a>
        </p>
      )}
      {teaserPosts.map((post) => (
        <div key={post.id}>
          <div className='content-post grow-on-hover'>
            <h3>{post.title.rendered}</h3>
            {!isGeneralLandingPage && <span>Posted on {formatDate(post.date)}</span>}
            <p>{post.excerpt.rendered}</p>
            <a href={post.link}>{isGeneralLandingPage ? 'Visit me on Substack here' : 'Read the full post'}</a>
            {!isGeneralLandingPage && <div className='content-post-underline' />}
          </div>
        </div>
      ))}
    </div>
  )
}

BlogTeaser.propTypes = {
  postsQtyToDisplay: PropTypes.number,
  isGeneralLandingPage: PropTypes.bool,
}

export default BlogTeaser
