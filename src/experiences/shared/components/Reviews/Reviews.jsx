import React from 'react'
import { reviews } from '../../../../constants'
import { QuotesSVG } from '../../../../assets/svg'
import Slider from 'react-slick'

const buildReviewerName = (reviewer, reviewerTitle) => `- ${reviewer}${reviewerTitle ? `, ${reviewerTitle}` : ''}`

const Reviews = ({ selectReviews, bookIdToDisplay, shadowBg }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000
  }

  const reviewsToDisplay = selectReviews ? reviews.filter(review => review.id === bookIdToDisplay) : reviews

  // if shadowBg is true, the background of the reviews section will be the shadow bg color
  return (
    <div className={`Reviews ${shadowBg ? 'shadow-bg-gray' : ''}`}>
      <Slider {...settings}>
        {reviewsToDisplay.map((review) => (
          <div className='review-container' key={review.quote}>
            <QuotesSVG />
            <h3 className='quote-contents'>{review.quote}</h3>
            <p>{buildReviewerName(review.reviewer, review.reviewerTitle)}</p>
            {review.book && <p>on <i>{review.book}</i></p>}
          </div>
        ))}
        </Slider>
    </div>
  )
}

export default Reviews
