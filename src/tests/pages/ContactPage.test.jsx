import { ContactPage } from '../../pages'
import { describe, expect, test } from 'vitest'
import { screen, render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('ContactPage', () => {
  test('default snapshot', () => {
    const contactPage = render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    expect(contactPage).toMatchSnapshot()
  })
  test('should have an email for tech inquiries', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    const techInquiries = screen.getAllByText('campbell.ryan.r')
    expect(techInquiries[0]).toBeInTheDocument()
  })
  test('should have an email for author inquiries', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    const authorInquiries = screen.getAllByText('rrcampbellwrites')
    expect(authorInquiries[0]).toBeInTheDocument()
  })
  test('should have a link to subscribe on substack', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    const subscribeLink = screen.getByText('subscribe on substack')
    expect(subscribeLink).toBeInTheDocument()
  })
})
