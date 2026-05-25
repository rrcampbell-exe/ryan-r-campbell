import React from 'react'
import { reviews } from '../../constants'
import { QuotesSVG } from '../../assets/svg'

const buildReviewerName = (reviewer, reviewerTitle) => `— ${reviewer}${reviewerTitle ? `, ${reviewerTitle}` : ''}`

const Reviews = ({ selectReviews, bookIdToDisplay, shadowBg }) => {
  const reviewsToDisplay = selectReviews ? reviews.filter(review => review.id === bookIdToDisplay) : reviews

  return (
    <div className={`Reviews ${shadowBg ? 'shadow-bg-gray' : ''}`}>
      <div className='reviews-grid'>
        {reviewsToDisplay.map((review) => (
          <blockquote className='review-card' key={review.quote}>
            <QuotesSVG />
            <p className='review-card__quote'>{review.quote}</p>
            <footer className='review-card__attribution'>
              <cite>{buildReviewerName(review.reviewer, review.reviewerTitle)}</cite>
              {review.book && <span className='review-card__book'>on <i>{review.book}</i></span>}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}

export default Reviews
