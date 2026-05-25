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
  test('should link to the home page', () => {
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