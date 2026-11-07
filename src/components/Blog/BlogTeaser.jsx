import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '../../utils'

const BlogTeaser = ({
  postsQtyToDisplay,
  isGeneralLandingPage,
  onLatestPostChange,
  showFallbackArchiveLink = true,
}) => {
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

  useEffect(() => {
    onLatestPostChange?.(feedPosts[0]?.link || null)
  }, [feedPosts, onLatestPostChange])

  const teaserPosts = feedPosts.slice(0, postsQtyToDisplay || 3)

  return (
    <div className='ContentTeaser' data-testid='blog-teaser'>
      {isLoading && (
        <>
          <p className='ContentTeaser__loadingStatus' role='status'>Loading latest essays...</p>
          {Array.from({ length: postsQtyToDisplay || 3 }, (_, index) => (
            <div key={`loading-${index}`}>
              <div className='content-post content-post--skeleton' aria-hidden='true'>
                <h3 className='content-post-skeleton__title'>
                  <span className='content-post-skeleton__line content-post-skeleton__line--title' />
                  <span className='content-post-skeleton__line content-post-skeleton__line--titleShort' />
                </h3>
                {!isGeneralLandingPage && (
                  <span className='content-post-skeleton__line content-post-skeleton__date' />
                )}
                <p className='content-post-skeleton__excerpt'>
                  <span className='content-post-skeleton__line' />
                  <span className='content-post-skeleton__line' />
                  <span className='content-post-skeleton__line content-post-skeleton__line--excerptShort' />
                </p>
                <span className='content-post-skeleton__line content-post-skeleton__link' />
                {!isGeneralLandingPage && <div className='content-post-underline' />}
              </div>
            </div>
          ))}
        </>
      )}
      {hasError && (
        <p role='alert'>
          Latest essays are unavailable right now.{' '}
          {showFallbackArchiveLink && <a href='https://ryanrcampbell.substack.com/'>Browse the Substack archive.</a>}
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
  onLatestPostChange: PropTypes.func,
  showFallbackArchiveLink: PropTypes.bool,
}

export default BlogTeaser
