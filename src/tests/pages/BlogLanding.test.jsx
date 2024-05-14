import { BlogLanding } from '../../pages'
import { describe, expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('BlogLanding', () => {
  test('default snapshot', () => {
    const blogLanding = render(
      <ContextAndRouterProvider>
        <BlogLanding />
      </ContextAndRouterProvider>
    )
    expect(blogLanding).toMatchSnapshot()
  })
  test('should render BlogTeaser', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <BlogLanding />
      </ContextAndRouterProvider>
    )

    const blogTeaser = getByTestId('blog-teaser')
    expect(blogTeaser).toBeInTheDocument()
  })
  test('should render correct number of posts', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BlogLanding />
      </ContextAndRouterProvider>
    )

    const posts = container.querySelectorAll('.content-post')
    expect(posts.length).toBe(9)
  })
  test('should load more posts when button is clicked', () => {
    const { getByText, container } = render(
      <ContextAndRouterProvider>
        <BlogLanding />
      </ContextAndRouterProvider>
    )

    const button = getByText('load more posts')
    fireEvent.click(button)

    const posts = container.querySelectorAll('.content-post')
    expect(posts.length).toBe(18)
  })
  test('should show all posts when button is clicked', () => {
    const { getByText, container } = render(
      <ContextAndRouterProvider>
        <BlogLanding />
      </ContextAndRouterProvider>
    )

    const button = getByText('load more posts')

    const numberOfClicks = 100
    for (let i = 0; i < numberOfClicks; i++) {
      fireEvent.click(button)
    }

    const updatedButton = getByText('all blog posts shown')
    expect(updatedButton).toBeInTheDocument()
  })
})
