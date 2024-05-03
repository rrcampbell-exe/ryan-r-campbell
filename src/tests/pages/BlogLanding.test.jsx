import BlogLanding from '../../experiences/shared/pages/BlogLanding/BlogLanding'
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
})