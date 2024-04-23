import React, { useState } from 'react'
import { PageWrapper, BlogTeaser, Contact } from '../../components'
import posts from '../../../../assets/posts/posts'

const BlogLanding = () => {
  const [postsPage, setPostsPage] = useState(1)

  const totalPostsQty = posts.length
  const postsToDisplay = 9
  const numberOfPostsShown = postsToDisplay * postsPage
  const allBlogPostsShown = numberOfPostsShown >= totalPostsQty

  const buttonText = allBlogPostsShown ? 'all blog posts shown' : 'load more posts'

  return (
    <PageWrapper pageTitle='blogger'>
      <main className='ContentHub'>
        <BlogTeaser postsToDisplay={postsToDisplay} showCoverImage postsPage={postsPage} />
        <div className='content-hub-nav'>
          <button onClick={() => setPostsPage(postsPage + 1)} disabled={allBlogPostsShown}>{buttonText}</button>
        </div>
        <div id='contact' className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogLanding
