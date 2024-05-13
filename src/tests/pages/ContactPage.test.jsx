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
    const techInquiries = screen.getByText('campbell [dot] ryan [dot] r [at] gmail [dot] com')
    expect(techInquiries).toBeInTheDocument()
  })
  test('should have an email for author inquiries', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    const authorInquiries = screen.getByText('rrcampbellwrites [at] gmail [dot] com')
    expect(authorInquiries).toBeInTheDocument()
  })
  test('should have a link to subscribe to the newsletter', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    const subscribeLink = screen.getByText('subscribe to my newsletter')
    expect(subscribeLink).toBeInTheDocument()
  })
})
