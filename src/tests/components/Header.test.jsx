import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { Header } from '../../components'

describe('Header', () => {
  test('default snapshot', () => {
    const header = render(
      <ContextAndRouterProvider>
        <Header />
      </ContextAndRouterProvider>
    )
    expect(header).toMatchSnapshot()
  })
  test('should render pageTitle', () => {
    const pageTitle = 'Test Page Title'
    const { getByText } = render(
      <ContextAndRouterProvider>
        <Header pageTitle={pageTitle} />
      </ContextAndRouterProvider>
    )

    const title = getByText(pageTitle)
    expect(title).toBeInTheDocument()
  })
  test('should display a theme toggle button', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Header />
      </ContextAndRouterProvider>
    )

    const themeToggle = container.querySelector('.theme-toggle-button')
    expect(themeToggle).toBeInTheDocument()
  })
  test('should show moon svg in dark mode', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Header />
      </ContextAndRouterProvider>
    )

    const sunSVG = container.querySelector('#sun-svg')
    const moonSVG = container.querySelector('#moon-svg')

    expect(moonSVG).toBeInTheDocument()
    expect(sunSVG).not.toBeInTheDocument()
  })
  test('should linkn to the home page', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <Header />
      </ContextAndRouterProvider>
    )

    const homeLink = container.querySelector('.link')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.getAttribute('href')).toBe('/')
  })
})