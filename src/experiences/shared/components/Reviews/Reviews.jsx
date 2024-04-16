import React from 'react'
import reviews from '../../../../constants/reviews'
import QuotesSVG from '../../../../assets/QuotesSVG'
import PopText from '../PopText/PopText'

// TODO: ensure height of section stays consistent, sometimes changes currently due to review length
// TODO: make an issue to do this as a carousel eventually
// TODO: add link to reviews as well, but do this to books page on site with anchor tag, hopefully

const buildReviewerName = (reviewer, reviewerTitle) => `- ${reviewer}${reviewerTitle ? `, ${reviewerTitle}` : ''}`

const Reviews = () => {
  // Schwartzian transform
  let shuffledReviews = reviews
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return (
    <div className='Reviews'>
      <PopText slow>
        {shuffledReviews.map((review) => (
          <div className='review-container grow-on-hover'>
            <QuotesSVG />
            <h3>{review.quote}</h3>
            <p>{buildReviewerName(review.reviewer, review.reviewerTitle)}</p>
            {review.book && <p>on <i>{review.book}</i></p>}
          </div>
        ))}
      </PopText>
    </div>
  )
}

export default Reviews
