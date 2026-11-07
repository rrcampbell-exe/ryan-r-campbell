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
    const { getAllByRole, getByRole } = render(
      <ContextAndRouterProvider>
        <Footer />
      </ContextAndRouterProvider>
    )
    const links = getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    expect(getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/resume')
    expect(getByRole('link', { name: 'Read' })).toHaveAttribute('href', 'https://r-on-everything.com')
  })

  test('should display the professional and author Gmail usernames', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <Footer />
      </ContextAndRouterProvider>
    )

    expect(getByText('campbell.ryan.r')).toBeInTheDocument()
    expect(getByText('rrcampbellwrites')).toBeInTheDocument()
  })

  test('should display the software engineer and author tagline', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <Footer />
      </ContextAndRouterProvider>
    )

    expect(getByText('software engineer & author.')).toBeInTheDocument()
  })
})
