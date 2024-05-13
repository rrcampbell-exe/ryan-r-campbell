import { describe, expect, test, vi } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { PageWrapper } from '../../components'

describe('PageWrapper', () => {
  test('default snapshot', () => {
    const pageWrapper = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )
    expect(pageWrapper).toMatchSnapshot()
  })
  test('should render children', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <PageWrapper>
          <div data-testid='test-children' />
        </PageWrapper>
      </ContextAndRouterProvider>
    )

    const children = getByTestId('test-children')
    expect(children).toBeInTheDocument()
  })
  test('should render Analytics', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const analytics = getByTestId('analytics')
    expect(analytics).toBeInTheDocument()
  })
  test('should render SpeedInsights', () => {
    const { container, getByTestId } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const speedInsights = getByTestId('speed-insights')
    expect(speedInsights).toBeInTheDocument()
  })
  test('should render Header', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const header = container.querySelector('Header')
    expect(header).toBeInTheDocument()
  })
  test('should render Footer', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <PageWrapper />
      </ContextAndRouterProvider>
    )

    const footer = container.querySelector('Footer')
    expect(footer).toBeInTheDocument()
  })
})
