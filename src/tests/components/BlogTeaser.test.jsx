import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { BlogTeaser } from '../../components'

const feedPosts = [
  {
    id: 'latest-post',
    date: '2026-10-22T14:04:33.000Z',
    link: 'https://www.r-on-everything.com/p/latest-post',
    title: { rendered: 'Latest essay' },
    excerpt: { rendered: 'The latest essay excerpt.' }
  },
  {
    id: 'previous-post',
    date: '2026-10-08T14:07:06.000Z',
    link: 'https://www.r-on-everything.com/p/previous-post',
    title: { rendered: 'Previous essay' },
    excerpt: { rendered: 'The previous essay excerpt.' }
  }
]

const renderTeaser = (props = {}) =>
  render(
    <ContextAndRouterProvider>
      <BlogTeaser isGeneralLandingPage postsQtyToDisplay={2} {...props} />
    </ContextAndRouterProvider>
  )

describe('BlogTeaser', () => {
  afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
  })

  test('renders the latest posts returned by the feed API', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => feedPosts
    }))

    renderTeaser()

    expect(await screen.findByRole('heading', { name: 'Latest essay' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Previous essay' })).toBeInTheDocument()
    expect(screen.getByText('The latest essay excerpt.')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Visit me on Substack here' })[0]).toHaveAttribute('href', feedPosts[0].link)
    expect(fetch).toHaveBeenCalledWith('/api/latest-posts')
  })

  test('limits displayed posts to the requested quantity', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => feedPosts
    }))

    renderTeaser({ postsQtyToDisplay: 1 })

    expect(await screen.findByRole('heading', { name: 'Latest essay' })).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByRole('heading', { name: 'Previous essay' })).not.toBeInTheDocument())
  })

  test('shows an error with a Substack link when the feed request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))

    renderTeaser()

    expect(await screen.findByRole('alert')).toHaveTextContent('Latest essays are unavailable right now.')
    expect(screen.getByRole('link', { name: 'Read them on Substack.' })).toHaveAttribute('href', 'https://www.r-on-everything.com')
  })
})
