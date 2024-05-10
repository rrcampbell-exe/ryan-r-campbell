import { BlogPost } from '../../experiences/shared/components'
import { describe, expect, test } from 'vitest'
import { screen, render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('BlogPost', () => {
  test('default snapshot', () => {
    const blogPost = render(
      <ContextAndRouterProvider>
        <BlogPost />
      </ContextAndRouterProvider>
    )
    expect(blogPost).toMatchSnapshot()
  })
  test('should display a not found message when the post is not found', () => {
    render(
      <ContextAndRouterProvider>
        <BlogPost />
      </ContextAndRouterProvider>
    )
    expect(screen.getByText('I couldn\'t find the blog post you were looking for. It might have been moved or relocated as part of a recent site migration.')).toBeInTheDocument()
  })
})