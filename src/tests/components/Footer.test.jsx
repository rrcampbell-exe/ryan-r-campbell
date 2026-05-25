import { describe, expect, test } from 'vitest'
import { Footer } from '../../components'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('Footer', () => {
  test('default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <Footer />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('should contain the current year', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <Footer />
      </ContextAndRouterProvider>
    )
    const currentYear = new Date().getFullYear()
    expect(getByText(`© 2012 – ${currentYear} Ryan R. Campbell`)).toBeInTheDocument()
  })
  test('should render navigation links', () => {
    const { getAllByRole } = render(
      <ContextAndRouterProvider>
        <Footer />
      </ContextAndRouterProvider>
    )
    const links = getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})

