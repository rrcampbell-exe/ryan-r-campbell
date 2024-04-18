import React, { useState } from 'react'
import { PageWrapper, BlogTeaser, Contact } from '../../components'

const BlogHub = () => {
  const [postsPage, setPostsPage] = useState(1)

  return (
    <PageWrapper pageTitle='blogger'>
      <main className='BlogHub'>
        <BlogTeaser postsToDisplay={9} showCoverImage postsPage={postsPage} />
        <div className='blog-hub-nav'>
          <button onClick={() => setPostsPage(postsPage + 1)}>load more posts</button>
        </div>
        <div id='contact' className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogHub
