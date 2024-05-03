import React from 'react'
import legacyPosts from '../../../../assets/posts/legacy-posts'
import posts from '../../../../assets/posts/new-posts.jsx'
import { useParams } from 'react-router-dom'
import { fetchPost, formatDate, extractHTMLContent } from '../../../../utils'
import { shortBio } from '../../../../constants'
import { NotFound, Contact, PageWrapper, NotificationBanner, BlogTags } from '../'

// TODO: need to sanitize remaining HTML of comments related to divi
// TODO: need to remove footer contents with book recommendation at the end

const BlogPost = () => {
  const { year, month, day, slug } = useParams()

  const postsArr = parseInt(year) < 2023 ? legacyPosts : posts

  const post = fetchPost(year, month, day, slug, postsArr)

  if (!post) return (
    <PageWrapper pageTitle='author | technologist'>
      <main>
        <div>
          <NotFound contentType='blog post' />
        </div>
        <div className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )

  const { title: { rendered: title }, date, episode_featured_image, content: { rendered: contentToRender } } = post

  const HTMLcontent = extractHTMLContent(contentToRender)

  return (
    <PageWrapper pageTitle='author | technologist'>
      <main>
        <div className='Post'>
          <div className='masthead'>
            <img className='cover-image' src={episode_featured_image} />
            {year <= 2022 && <NotificationBanner title='This is a legacy post.' text='Content may be formatted awkwardly until long-term fixes are in place. Thank you for your patience, and thanks for visiting.' />}
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
                <div className='content-post-underline' />
              </div>
            </div>
          </div>
          <article dangerouslySetInnerHTML={{ __html: HTMLcontent }}/>
          {year > 2023 && post.tags.length > 0 && (
            <div className='tags'>
              <BlogTags tags={post.tags} />
            </div>
          )}
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogPost
