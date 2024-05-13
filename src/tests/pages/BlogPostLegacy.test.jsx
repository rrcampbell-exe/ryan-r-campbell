import { BlogPost } from '../../pages'
import { describe, expect, test, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('BlogPost', () => {
  test('should display a legacy blog post when the slug year is less than 2023', () => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const actual = await importOriginal()
      return {
        ...actual,
        useParams: () => ({
          year: '2022',
          month: '05',
          day: '19',
          slug: 'from-conference-to-coffee-on-the-beach'
        })
      }
    })
    render(
      <ContextAndRouterProvider>
        <BlogPost />
      </ContextAndRouterProvider>
    )
    expect(screen.getByText('This is a legacy post.')).toBeInTheDocument()
  })
})