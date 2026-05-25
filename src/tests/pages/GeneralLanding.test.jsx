import GeneralLanding from '../../pages/Landing/GeneralLanding'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

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

    const hero = container.querySelector('.gl-hero')

    expect(hero).toBeInTheDocument()
  })

  test('should render correct number of teasers', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <GeneralLanding />
      </ContextAndRouterProvider>
    )

    const teasers = container.querySelectorAll('.content-post')
    expect(teasers.length).toBe(2)
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
})
