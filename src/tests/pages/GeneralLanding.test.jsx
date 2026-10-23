import GeneralLanding from '../../pages/Landing/GeneralLanding'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
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

    const heroImage = screen.getByAltText('Ryan R. Campbell — technical leader, software engineer, and author')

    expect(heroImage).toHaveAttribute('width', '1199')
    expect(heroImage).toHaveAttribute('height', '1312')
  })

  test('should link the primary work CTA to the work page', () => {
    render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('link', { name: 'Explore my professional work' })).toHaveAttribute('href', '/work')
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

  test('should surface the AI page in navigation and content', () => {
    render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    expect(screen.getAllByRole('link', { name: 'AI' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /read my ai philosophy/i })).toHaveAttribute('href', '/ai')
  })
})
