import { describe, expect, test, vi } from 'vitest'
import { BlogFooter } from '../../components'
import { posts, legacyPosts } from '../../assets/posts'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

const mockNavigate = vi.fn()

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

const allPosts = [...posts, ...legacyPosts]

describe('BlogFooter', () => {
  test('default snapshot', () => {
    const blogFooter = render(
      <ContextAndRouterProvider>
        <BlogFooter post={allPosts[1]} />
      </ContextAndRouterProvider>
    )
    expect(blogFooter).toMatchSnapshot()
  })
  test('should render BackToBlog on latest post', () => {
    allPosts[0].postIndex = 0
    const { getByText } = render(
      <ContextAndRouterProvider>
        <BlogFooter post={allPosts[0]} />
      </ContextAndRouterProvider>
    )

    const backToBlog = getByText('back to blog')
    expect(backToBlog).toBeInTheDocument()
  })
  test('should render BackToBlog on oldest post', () => {
    allPosts[allPosts.length - 1].postIndex = allPosts.length - 1
    const { getByText } = render(
      <ContextAndRouterProvider>
        <BlogFooter post={allPosts[allPosts.length - 1]} />
      </ContextAndRouterProvider>
    )

    const backToBlog = getByText('back to blog')
    expect(backToBlog).toBeInTheDocument()
  })
  test('should navigate to previous post', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <BlogFooter post={allPosts[1]} />
      </ContextAndRouterProvider>
    )

    const previousPost = getByText('< previous post')
    const nextPost = getByText('next post >')
    previousPost.click()
    nextPost.click()
    expect(mockNavigate).toHaveBeenCalledTimes(2)
  })
  test('should not display previous post on oldest post', () => {
    allPosts[allPosts.length - 1].postIndex = allPosts.length - 1
    const { queryByText } = render(
      <ContextAndRouterProvider>
        <BlogFooter post={allPosts[allPosts.length - 1]} />
      </ContextAndRouterProvider>
    )

    const previousPost = queryByText('< previous post')
    expect(previousPost).toBeNull()
  })
  test('should not display next post on latest post', () => {
    allPosts[0].postIndex = 0
    const { queryByText } = render(
      <ContextAndRouterProvider>
        <BlogFooter post={allPosts[0]} />
      </ContextAndRouterProvider>
    )

    const nextPost = queryByText('next post >')
    expect(nextPost).toBeNull()
  })
})
