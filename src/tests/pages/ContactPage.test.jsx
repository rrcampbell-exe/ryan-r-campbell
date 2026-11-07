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
  test('should show the professional Gmail username', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    expect(screen.getByText('campbell.ryan.r (gmail)')).toBeInTheDocument()
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
    const subscribeLink = screen.getByText('Substack', { selector: 'a' })
    expect(subscribeLink).toBeInTheDocument()
  })
  test('should have a link to connect on LinkedIn', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )
    const connectLink = screen.getByText('LinkedIn', { selector: 'a' })
    expect(connectLink).toBeInTheDocument()
  })

  test('should label the contact page', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  test('uses the pheasant hat portrait on the contact page', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )

    const portrait = screen.getByRole('img', {
      name: 'Ryan R. Campbell wearing a cap with a pheasant design and a black hoodie.',
    })

    expect(portrait).toHaveAttribute(
      'src',
      '/personal-photos/ryan_r_campbell-pheasant_hat-black_sweatshirt.jpg'
    )
    expect(portrait).toHaveAttribute('width', '1086')
    expect(portrait).toHaveAttribute('height', '1448')
  })

  test('sets a contact-specific document title', () => {
    render(
      <ContextAndRouterProvider>
        <ContactPage />
      </ContextAndRouterProvider>
    )

    expect(document.title).toBe('Contact | Ryan R. Campbell')
  })
})
