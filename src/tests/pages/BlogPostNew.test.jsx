import { BlogPost } from '../../experiences/shared/components'
import { describe, expect, test, vi } from 'vitest'
import { screen, render, waitFor } from '@testing-library/react'
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
  test('should display a new blog post when the slug year is more recent than 2023', async () => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const actual = await importOriginal()
      return {
        ...actual,
        useParams: () => ({
          year: '2024',
          month: '05',
          day: '03',
          slug: 'welcome-to-the-new-ryan-r-campbell'
        })
      }
    })
    render(
      <ContextAndRouterProvider>
        <BlogPost />
      </ContextAndRouterProvider>
    )
    await waitFor(() => {
      expect(screen.queryByText('This is a legacy post.')).not.toBeInTheDocument()
      expect(screen.queryByText("Well, I'm Back")).toBeInTheDocument()
    })
  })
})