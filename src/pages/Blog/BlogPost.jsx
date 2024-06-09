import React, { useState, useEffect, useRef } from 'react'
import { legacyPosts, posts } from '../../assets/posts'
import { useParams } from 'react-router-dom'
import { fetchPost, formatDate, extractHTMLContent } from '../../utils'
import { shortBio } from '../../constants'
import { NotFound, Contact, PageWrapper, NotificationBanner, BlogTags, BlogFooter } from '../../components'
import { useMetaTags, useDocumentTitle } from '../../hooks'

// TODO: need to sanitize remaining HTML of comments related to divi
// TODO: need to remove footer contents with book recommendation at the end

const BlogPost = () => {
  const { year, month, day, slug } = useParams()
  const [jsxContent, setJsxContent] = useState(null)
  const [isError, setIsError] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const articleRef = useRef(null)

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

  // destructuring post object with default values
  const { 
    title: { rendered: title = '' } = {}, 
    date, 
    episode_featured_image = '', 
    featured_image_alt = '', 
    content: { rendered: contentToRender = '' } = {}, 
    excerpt: { rendered: excerpt = '' } = {}
  } = post || {}

  // set document title for blog post
  useDocumentTitle(title)

  // set meta tags for blog post
  useMetaTags([
    { type: 'name', name: 'description', content: excerpt },
    // designate og:title, og:description, og:site_name, og:url, and og:image for open graph protocol
    { type: 'property', name: 'og:title', content: title },
    { type: 'property', name: 'og:description', content: excerpt },
    { type: 'property', name: 'og:site_name', content: 'Ryan R. Campbell - Keep Curious' },
    { type: 'property', name: 'og:url', content: `https://www.ryanrcampbell.com/${slug}` },
    { type: 'property', name: 'og:image', content: `https://www.ryanrcampbell.com/${episode_featured_image}` },
    // designate properties for twitter
    { type: 'property', name: 'twitter:card', content: 'summary_large_image' },
    { type: 'property', name: 'twitter:title', content: title },
    { type: 'property', name: 'twitter:description', content: excerpt },
    { type: 'property', name: 'twitter:image', content: `https://www.ryanrcampbell.com/${episode_featured_image}` },
    // designate properties for pinterest
    { type: 'property', name: 'pinterest:title', content: title },
    { type: 'property', name: 'pinterest:description', content: excerpt },
    { type: 'property', name: 'pinterest:image', content: `https://www.ryanrcampbell.com/${episode_featured_image}` },
    // designate properties for google
    { type: 'property', name: 'google:title', content: title },
    { type: 'property', name: 'google:description', content: excerpt }
  ])

  // if post is a legacy post, render the content as is; otherwise, fetch JSX for new post
  const postContent = year < 2023 ? extractHTMLContent(contentToRender) : jsxContent

    // see if page is longer than viewport height
    const checkOverflow = () => {
      if (articleRef.current) {
        const articleHeight = articleRef.current.scrollHeight
        const viewportHeight = window.innerHeight
        setIsOverflowing(articleHeight > viewportHeight)
      }
    }
  
    useEffect(() => {
      // Check overflow on initial render
      checkOverflow()
  
      // Check overflow on window resize
      window.addEventListener('resize', checkOverflow)
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkOverflow)
      }
    }, [postContent, jsxContent])

  return (
    <PageWrapper pageTitle='author | technologist'>
      <main>
        <div className='Post'>
          <div className='masthead'>
            <img className='cover-image' src={episode_featured_image} alt={featured_image_alt ? featured_image_alt : 'The cover image for a blog post'}/>
            {year < 2023 && <NotificationBanner title='This is a legacy post.' text='Content may be formatted awkwardly until long-term fixes are in place. Thank you for your patience, and thanks for visiting.' />}
            <div>
              <h2 className='title'>{title}</h2>
              <div className='credits'>
                <div className='byline-container'>
                  <div className='author-photo'>
                    <img src='/2024-ryan-r-campbell-website-headshot.png' alt='A headshot of Ryan R. Campbell'/>
                  </div>
                  <div>
                    <p>Written by Ryan R. Campbell</p> 
                    <p className='posted-on-date'>Posted on {formatDate(date)}</p>
                  </div>
                </div>
                <p className='bio'>{shortBio}</p>
                <div className='content-post-underline' />
              </div>
              <BlogTags tags={post.tags} year={year} tagsQty={post.tags.length} />
            </div>
          </div>
          {year > 2023 ? (
            <article data-testid='article' ref={articleRef}>{jsxContent ? jsxContent : <p>Loading...</p>}</article>
          ) : (
            <article data-testid='article' ref={articleRef} dangerouslySetInnerHTML={{ __html: postContent }}/>
          )}
          {isOverflowing && <BlogTags tags={post.tags} year={year} tagsQty={post.tags.length} />}
          <BlogFooter post={post} />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogPost
