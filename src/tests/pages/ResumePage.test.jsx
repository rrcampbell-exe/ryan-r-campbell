import { describe, expect, test } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import ResumePage from '../../pages/Resume/ResumePage'
import ContextAndRouterProvider from '../test-utils'

describe('ResumePage', () => {
  test('renders the hero and primary resume sections', () => {
    render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('heading', { name: 'Professional experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /software delivery, ai adoption, and an independent business/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tools and practices i use to build and ship web applications/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /business ownership, writing, procurement, and operations/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /formal study and continued learning/i })).toBeInTheDocument()
  })

  test('renders the section navigation and key experience content', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    const subNav = container.querySelector('.SubNav__desktop-links')

    expect(subNav).toBeInTheDocument()
    expect(subNav.children.length).toBe(6)
    expect(Array.from(subNav.querySelectorAll('a')).map((link) => link.textContent)).toEqual([
      'Selected work',
      'Experience',
      'Technical skills',
      'Additional experience',
      'Education & credentials',
      'Get in touch',
    ])
    expect(screen.getByRole('heading', { name: 'Software Engineer III' })).toBeInTheDocument()
    expect(screen.getByText(/founded writescast network and produced more than 120 episodes/i)).toBeInTheDocument()
    expect(screen.getByText(/led research into how engineers used ai tools/i)).toBeInTheDocument()
    expect(screen.getByText(/designed and taught three ux\/ui designer workshops/i)).toBeInTheDocument()
    expect(screen.getByText(/fulfilled 688 orders and generated nearly \$20,000/i)).toBeInTheDocument()
    expect(screen.getByText(/natus neurology/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sun Nuclear / Gammex' })).toBeInTheDocument()
    expect(screen.getByText('Procurement Assistant · Middleton, WI')).toBeInTheDocument()
    expect(screen.getByText('2018–2021')).toBeInTheDocument()
    expect(screen.getByText(/managed purchase orders and approved-supplier records, supported supplier audits, and coordinated returns of nonconforming materials/i)).toBeInTheDocument()
    expect(screen.getByText(/reduce cost of goods sold by 2% quarter over quarter/i)).toBeInTheDocument()

    const earlierEmployers = Array.from(container.querySelectorAll('.resume-earlier-role h3')).map((heading) => heading.textContent)
    expect(earlierEmployers.indexOf('KYD Candle Co.')).toBeLessThan(earlierEmployers.indexOf('Sun Nuclear / Gammex'))
    expect(earlierEmployers.indexOf('Sun Nuclear / Gammex')).toBeLessThan(earlierEmployers.indexOf('Natus Neurology'))
  })

  test('links selected work across software, AI adoption, and business to Work anchors', () => {
    render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('link', { name: 'Financial application migration' })).toHaveAttribute('href', '/work#money-movement-application-migration')
    expect(screen.getByRole('link', { name: 'AI adoption research' })).toHaveAttribute('href', '/work#ai-adoption-survey')
    expect(screen.getByRole('link', { name: 'KYD Candle Co.' })).toHaveAttribute('href', '/work#kyd-candle-co')
  })

  test('keeps backend APIs distinct from frontend and testing/operations skills', () => {
    render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('heading', { name: 'Frontend' })).toBeInTheDocument()
    expect(screen.getByText(/React · TypeScript/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Backend and APIs' })).toBeInTheDocument()
    expect(screen.getByText('Node.js · GraphQL · Apollo Federation · REST APIs')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testing and operations' })).toBeInTheDocument()
  })

  test('offers LinkedIn contact in the final section', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    const contactSection = container.querySelector('#get-in-touch')
    expect(contactSection).toHaveTextContent('Get in touch')
    expect(within(contactSection).getByRole('button', { name: 'Get in touch on LinkedIn' })).toBeInTheDocument()
  })

  test('sets the résumé title and broad experience metadata', async () => {
    render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    await waitFor(() => {
      expect(document.title).toBe('Résumé | Ryan R. Campbell')
      expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', 'Résumé | Ryan R. Campbell')
      expect(document.querySelector('meta[name="description"]').getAttribute('content')).toContain('AI adoption research')
    })
  })
})