import React from 'react'
import posts from '../../../../assets/posts/posts'
import { useParams } from 'react-router-dom'
import fetchPost from '../../../../utils/fetch-post'
import extractHTMLContent from '../../../../utils/extract-html'
import PageWrapper from '../PageWrapper/PageWrapper'
import formatDate from '../../../../utils/format-date'
import shortBio from '../../../../constants/short-bio'

// TODO: need to insert category tags (if possible)
// TODO: need to sanitize remaining HTML of comments related to divi
// TODO: need to remove footer contents with book recommendation at the end

const BlogPost = () => {
  const { year, month, day, slug } = useParams()

  const post = fetchPost(year, month, day, slug, posts)

  const { title: { rendered: title }, date, episode_featured_image, content: { rendered: contentToRender } } = post

  const HTMLcontent = extractHTMLContent(contentToRender)

  return (
    <PageWrapper pageTitle='author | technologist'>
      <main>
        <div className='BlogPost'>
          <div className='masthead'>
            <img className='cover-image' src={episode_featured_image} />
            <div>
              <h2 className='title'>{title}</h2>
              <div className='credits'>
                <div className='byline-container'>
                  <div className='author-photo'>
                    <img src='/2024-ryan-r-campbell-website-headshot.png' />
                  </div>
                  <div>
                    <p>Written by Ryan R. Campbell</p> 
                    <p className='posted-on-date'>Posted on {formatDate(date)}</p>
                  </div>
                </div>
                <p className='bio'>{shortBio}</p>
                <div className='blog-post-underline' />
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: HTMLcontent }}/>
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogPost
