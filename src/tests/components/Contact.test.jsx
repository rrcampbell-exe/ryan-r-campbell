import { describe, expect, test } from 'vitest'
import { Contact } from '../../components'
import { render } from '@testing-library/react'

describe('Contact', () => {
  test('default snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
  test('should contain tech inquiries', () => {
    const { getByText } = render(<Contact />)
    const techInquiries = getByText('tech inquiries')
    expect(techInquiries).toBeInTheDocument()
  })
  test('should contain author inquiries', () => {
    const { getByText } = render(<Contact />)
    const authorInquiries = getByText('author inquiries')
    expect(authorInquiries).toBeInTheDocument()
  })
  test('should contain a subscription link', () => {
    const { getByText } = render(<Contact />)
    const subscriptionLink = getByText('subscribe on substack')
    expect(subscriptionLink).toBeInTheDocument()
  })
  test('subscription link should open in a new tab with correct URL', () => {
    const { getByText } = render(<Contact />)
    const subscriptionLink = getByText('subscribe on substack')
    expect(subscriptionLink).toHaveAttribute('rel', 'noopener')
    expect(subscriptionLink).toHaveAttribute('target', '_blank')
    expect(subscriptionLink).toHaveAttribute('href', 'https://ryanrcampbell.substack.com/subscribe')
  })
})
