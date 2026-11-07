import GeneralLanding from '../../pages/Landing/GeneralLanding'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

afterEach(() => vi.unstubAllGlobals())

describe('GeneralLanding', () => {
  test('default snapshot', () => {
    const generalLanding = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )
    expect(generalLanding).toMatchSnapshot()
  })

  test('should render a header nav with site sections', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const headerNav = container.querySelector('.header-nav')

    expect(headerNav).toBeInTheDocument()
    expect(headerNav.children.length).toBeGreaterThanOrEqual(4)
  })

  test('should render a hero section', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const hero = container.querySelector('.editorial-hero')

    expect(hero).toBeInTheDocument()
  })

  test('should reserve the hero image with intrinsic dimensions', () => {
    render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const heroImage = screen.getByAltText('Portrait of Ryan R. Campbell')

    expect(heroImage).toHaveAttribute('width', '1199')
    expect(heroImage).toHaveAttribute('height', '1312')
  })

  test('uses the latest essay permalink in the editorial hero and keeps work and résumé in navigation', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{
        id: 'latest',
        title: { rendered: 'Latest essay' },
        excerpt: { rendered: 'Latest excerpt' },
        link: 'https://www.r-on-everything.com/p/latest-essay',
      }],
    }))

    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )
    await screen.findByRole('link', { name: 'Read the latest essay' })

    expect(screen.getByRole('heading', { name: 'Ryan R. Campbell', level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Software Engineer & Author')).toBeInTheDocument()
    expect(screen.getByText('My work moves between technology, writing, teaching, and the strange business of being human.')).toBeInTheDocument()

    const heroLinks = Array.from(container.querySelectorAll('.editorial-hero__actions a'))
    expect(heroLinks.map((link) => link.textContent.trim())).toEqual([
      'Listen to the podcast',
      'Read the latest essay',
      'Explore my work →',
    ])
    await waitFor(() => {
      expect(heroLinks[1]).toHaveAttribute('href', 'https://www.r-on-everything.com/p/latest-essay')
    })
    expect(heroLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/podcasts',
      'https://www.r-on-everything.com/p/latest-essay',
      '/work',
    ])
    expect(heroLinks[1]).toHaveAttribute('target', '_blank')
    expect(heroLinks[1]).toHaveAttribute('rel', 'noopener noreferrer')

    const headerNav = within(container.querySelector('.header-nav'))
    expect(headerNav.getByRole('link', { name: 'résumé' })).toHaveAttribute('href', '/resume')
    expect(headerNav.getByRole('link', { name: 'contact' })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: 'Financial software migration →' })).toHaveAttribute('href', '/work#money-movement-application-migration')
    expect(screen.getByRole('link', { name: 'AI adoption research →' })).toHaveAttribute('href', '/work#ai-adoption-survey')
    expect(screen.getByRole('link', { name: 'Independent projects →' })).toHaveAttribute('href', '/work#public-projects')
  })

  test('keeps a single Substack archive action when the feed is unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))

    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Latest essays are unavailable right now.')
    expect(within(alert).queryByRole('link')).not.toBeInTheDocument()

    const archiveLinks = container.querySelectorAll('.editorial-writing a[href^="https://ryanrcampbell.substack.com"]')
    expect(archiveLinks).toHaveLength(1)
    const archiveLink = archiveLinks[0]
    expect(archiveLink).toHaveTextContent('Read more on Substack →')
  })

  test('should render correct number of teasers', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 'latest', title: { rendered: 'Latest essay' }, excerpt: { rendered: 'Latest excerpt' }, link: 'https://www.r-on-everything.com/p/latest' },
        { id: 'previous', title: { rendered: 'Previous essay' }, excerpt: { rendered: 'Previous excerpt' }, link: 'https://www.r-on-everything.com/p/previous' }
      ]
    }))

    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    await waitFor(() => {
      const teasers = container.querySelectorAll('.content-post')
      expect(teasers.length).toBe(2)
    })
    expect(screen.getByRole('link', { name: 'Read the latest essay' })).toHaveAttribute(
      'href',
      'https://www.r-on-everything.com/p/latest'
    )
  })

  test('should render a link to GitHub', () => {
    const { getAllByRole } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const links = getAllByRole('link')
    const githubLink = links.find(l => l.href.includes('github.com'))
    expect(githubLink).toBeInTheDocument()
  })

  test('should render a link to Substack', () => {
    const { getAllByRole } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const links = getAllByRole('link')
    const substackLink = links.find(l => l.href.includes('substack.com'))
    expect(substackLink).toBeInTheDocument()
  })

  test('should surface the AI page in navigation', () => {
    render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const aiLinks = screen.getAllByRole('link', { name: 'AI' })
    expect(aiLinks.length).toBeGreaterThanOrEqual(1)
    expect(aiLinks.every((link) => link.getAttribute('href') === '/ai')).toBe(true)
  })
})
