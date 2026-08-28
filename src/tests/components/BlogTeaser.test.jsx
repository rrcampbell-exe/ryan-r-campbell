import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { BlogTeaser } from '../../components'
import { posts } from '../../assets/posts'
import { formatDate } from '../../utils'

const latestPost = posts[0]

describe('BlogTeaser', () => {
  test('default snapshot', () => {
    const blogTeaser = render(
      <ContextAndRouterProvider>
        <BlogTeaser />
      </ContextAndRouterProvider>
    )
    expect(blogTeaser).toMatchSnapshot()
  })
  test('should render correct number of posts', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={3} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const posts = container.querySelectorAll('.content-post')
    expect(posts.length).toBe(3)
  })
  test('should show the latest posts on the general landing page', () => {
    const expectedPosts = posts.filter(post => post.slug !== 'all-blog-posts-now-on-substack').slice(0, 2)
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsQtyToDisplay={2} postsPage={1} isGeneralLandingPage />
      </ContextAndRouterProvider>
    )

    const teaserTitles = Array.from(container.querySelectorAll('.content-post h3')).map(title => title.textContent)

    expect(teaserTitles).toEqual(expectedPosts.map(post => post.title.rendered))
  })
  test('should display cover image when showCoverImage is true', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} showCoverImage />
      </ContextAndRouterProvider>
    )

    const coverImage = container.querySelector('.cover-image')
    expect(coverImage).toBeInTheDocument()
  })
  test('should not display cover image when showCoverImage is false', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const coverImage = container.querySelector('.cover-image')
    expect(coverImage).not.toBeInTheDocument()
  })
  test('should render tags for posts newer than 2020', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const tags = container.querySelector('.teaser-tags')
    expect(tags).toBeInTheDocument()
  })
  test('should not render tags for posts older than 2021', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const tags = container.querySelectorAll('.teaser-tags')
    expect(tags).not.toHaveLength(posts.length + 1)
  })
  test('should point to the correct post', () => {
    render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} />
      </ContextAndRouterProvider>
    )

    expect(latestPost.link).toContain(window.location.pathname)
  })
  test('should link flagged posts directly to Substack', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsQtyToDisplay={2} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const substackPost = Array.from(container.querySelectorAll('.content-post')).find(post => post.querySelector('h3').textContent === 'The Gospel of Inevitability')

    expect(substackPost.querySelector('a').getAttribute('href')).toBe('https://www.r-on-everything.com/p/the-gospel-of-inevitability')
  })
  test('should show a properly formatted date', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const date = container.querySelector('span')
    expect(date.textContent).toContain(formatDate(latestPost.date))
  })
})