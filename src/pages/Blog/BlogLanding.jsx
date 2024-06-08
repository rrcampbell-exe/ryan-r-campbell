import React, { useState } from 'react'
import { PageWrapper, BlogTeaser, Contact } from '../../components'
import { legacyPosts, posts } from '../../assets/posts'
import { useParams } from 'react-router-dom'

const BlogLanding = () => {
  const [postsPage, setPostsPage] = useState(1)
  const { tag } = useParams()

  const unpackTag = (tag, isHeader) => {
    // if tag is undefined, return early
    if (!tag) return
    // if tag is defined and isHeader is true, return lower-case tag
    if (isHeader) return tag.replace(/-/g, ' ')
    // remove hyphens from tags, capitalize first letter of each word
    return tag.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  const allPosts = [...posts, ...legacyPosts]

  const filteredPosts = allPosts.filter((post) => post.tags.includes(unpackTag(tag)))

  const totalPostsQty = legacyPosts.length + posts.length

  const postsQtyToDisplay = (tag, filteredPosts) => {
    if (!tag) return 9
    if (filteredPosts.length < 9) return filteredPosts.length
    if (filteredPosts.length >= 9) return 9
    return 9
  }
  const numberOfPostsShown = postsQtyToDisplay(tag, filteredPosts) * postsPage
  const allBlogPostsShown = !tag ? numberOfPostsShown >= totalPostsQty : numberOfPostsShown >= filteredPosts.length

  const buttonText = allBlogPostsShown ? 'all blog posts shown' : 'load more posts'

  return (
    <PageWrapper pageTitle={tag ? `on ${unpackTag(tag, true)}` : 'blogger'}>
      <main className='ContentHub'>
        <BlogTeaser postsQtyToDisplay={postsQtyToDisplay(tag, filteredPosts)} showCoverImage postsPage={postsPage} isTagSearch={tag} filteredPosts={filteredPosts} allPosts={allPosts} />
        {/* if tag is undefined or if a tag *is* defined and there are more than 9 posts associated with it, then display load more button */}
        {(!tag || (tag && postsQtyToDisplay(tag, filteredPosts) < filteredPosts.length)) &&
          <div className='content-hub-nav'>
            <button onClick={() => setPostsPage(postsPage + 1)} disabled={allBlogPostsShown}>{buttonText}</button>
          </div>
        }
        <div id='contact' className='section-wrapper shadow-bg-main-accent'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default BlogLanding
