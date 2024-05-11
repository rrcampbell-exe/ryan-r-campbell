import React, { useState, useEffect } from 'react'
import { legacyPosts, posts } from '../../assets/posts'
import { useParams } from 'react-router-dom'
import { fetchPost, formatDate, extractHTMLContent } from '../../utils'
import { shortBio } from '../../constants'
import { NotFound, Contact, PageWrapper, NotificationBanner, BlogTags } from '../../components'

// TODO: need to sanitize remaining HTML of comments related to divi
// TODO: need to remove footer contents with book recommendation at the end

const BlogPost = () => {
  const { year, month, day, slug } = useParams()
  const [jsxContent, setJsxContent] = useState(null)
  const [isError, setIsError] = useState(false)

  const postsArr = parseInt(year) < 2023 ? legacyPosts : posts

  const post = fetchPost(year, month, day, slug, postsArr)

  // fetch JSX content for new posts, which requires async import of JSX file, ergo: useEffect
  useEffect(() => {
    if (parseInt(year) > 2023) {
      // fetch JSX content for new posts, set JSX content to state
      const fetchJsx = async () => {
        try {
          const module = await import(`../../assets/posts/post-jsx/${year}/${month}/${slug}.jsx`)
          setJsxContent(module.default)
        } catch (error) {
          setIsError(true)
        }
      }

      fetchJsx()
    }
  }, [year, month, slug])

  if (!post || isError) return (
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

  // destructuring post object
  const { title: { rendered: title }, date, episode_featured_image, content: { rendered: contentToRender } } = post

  // if post is a legacy post, render the content as is; otherwise, fetch JSX for new post
  const postContent = year < 2023 ? extractHTMLContent(contentToRender) : jsxContent

  return (
    <PageWrapper pageTitle='author | technologist'>
      <main>
        <div className='Post'>
          <div className='masthead'>
            <img className='cover-image' src={episode_featured_image} />
            {year < 2023 && <NotificationBanner title='This is a legacy post.' text='Content may be formatted awkwardly until long-term fixes are in place. Thank you for your patience, and thanks for visiting.' />}
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
          {year > 2023 ? (
            <article data-testid='article'>{jsxContent ? jsxContent : <p>Loading...</p>}</article>
          ) : (
            <article data-testid='article' dangerouslySetInnerHTML={{ __html: postContent }}/>
          )}
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
