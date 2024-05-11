import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { NotFound } from '../../components'

describe('NotFound', () => {
  test('default snapshot', () => {
    const notFound = render(
      <ContextAndRouterProvider>
        <NotFound />
      </ContextAndRouterProvider>
    )
    expect(notFound).toMatchSnapshot()
  })
  test('should render page not found', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <NotFound />
      </ContextAndRouterProvider>
    )

    const notFound = getByText('page not found')
    expect(notFound).toBeInTheDocument()
  })
  test('should render page not found with content type', () => {
    const contentType = 'test content type'
    const { getByText } = render(
      <ContextAndRouterProvider>
        <NotFound contentType={contentType} />
      </ContextAndRouterProvider>
    )

    const notFound = getByText(`${contentType} not found`)
    expect(notFound).toBeInTheDocument()
  })
  test('should render generic page not found if no content type provided', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <NotFound />
      </ContextAndRouterProvider>
    )

    const notFound = getByText('page not found')
    expect(notFound).toBeInTheDocument()
  })
  test('should link to the home page', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <NotFound />
      </ContextAndRouterProvider>
    )

    const homeLink = container.querySelector('a')
    expect(homeLink).toBeInTheDocument()
    expect(homeLink.getAttribute('href')).toBe('/')
  })
})
