import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { BlogTeaser } from '../../experiences/shared/components'
import posts from '../../assets/posts/new-posts'
import { formatDate } from '../../utils'

const latestPost = posts[posts.length - 1]

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
  test('should render tags for posts newer than 2023', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogTeaser postsToDisplay={1} postsPage={1} />
      </ContextAndRouterProvider>
    )

    const tags = container.querySelector('.teaser-tags')
    expect(tags).toBeInTheDocument()
  })
  test('should not render tags for posts older than 2023', () => {
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