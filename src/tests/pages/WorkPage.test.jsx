import { describe, expect, test } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import WorkPage from '../../pages/Work/WorkPage'
import ContextAndRouterProvider from '../test-utils'

describe('WorkPage', () => {
  test('organizes employer work into software/product and AI adoption/teaching sections', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <WorkPage />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('heading', { name: 'Selected work' })).toBeInTheDocument()
    expect(container.querySelector('.work-hero .section-label')).toHaveTextContent('Work')
    expect(container.querySelector('.work-hero__lede')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View résumé' })).toHaveAttribute('href', '/resume')
    expect(within(container.querySelector('.work-hero__actions')).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')

    expect(Array.from(container.querySelector('#software-and-product').querySelectorAll('.work-story')).map((story) => story.id)).toEqual([
      'authenticated-client-redesign',
      'shared-react-components',
      'money-movement-application-migration',
      'eight-repositories-to-one-monorepo',
    ])
    expect(Array.from(container.querySelector('#ai-adoption-and-teaching').querySelectorAll('.work-story')).map((story) => story.id)).toEqual([
      'ai-adoption-survey',
      'internal-ai-hub',
      'designer-ai-workshops',
    ])
    expect(Array.from(container.querySelector('#business-and-writing').querySelectorAll('.work-story')).map((story) => story.id)).toEqual([
      'kyd-candle-co',
      'writescast-network',
    ])

    expect(screen.getByText(/shared findings and recommendations with senior leaders/i)).toBeInTheDocument()
    expect(screen.getByText(/coordinating the React frontend, converting a Node\.js API to a GraphQL API, and hosting changes/i)).toBeInTheDocument()
    expect(screen.getByText(/three workshops for nearly 100 UX\/UI designers and design managers/i)).toBeInTheDocument()
    expect(screen.getByText(/688 orders and generated nearly \$20,000/i)).toBeInTheDocument()
  })

  test('orders project cards and provides distinct accessible source links', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <WorkPage />
      </ContextAndRouterProvider>
    )
    expect(screen.getByText('Public projects')).toBeInTheDocument()
    expect(Array.from(container.querySelectorAll('.build-tile__title')).map((heading) => heading.textContent)).toEqual([
      'Real Fake Birds',
      'This website',
      'The Druids Den',
      'R: On Everything',
    ])
    expect(screen.getByRole('link', { name: 'Play Real Fake Birds' })).toHaveAttribute('href', 'https://www.realfakebirds.app/')
    expect(screen.getByRole('link', { name: 'View source for Real Fake Birds on GitHub' })).toHaveAttribute('href', 'https://github.com/rrcampbell-exe/real-fake-birds')
    expect(screen.getByRole('link', { name: 'View source for This website on GitHub' })).toHaveAttribute('href', 'https://github.com/rrcampbell-exe/ryan-r-campbell')
    expect(screen.getByRole('link', { name: 'View source for This website on GitHub' })).toHaveTextContent('View source')
    expect(screen.queryByRole('link', { name: 'Visit the website' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit The Druids Den' })).toHaveAttribute('href', 'https://www.druidsdenwi.com/')
    expect(screen.getByRole('link', { name: 'View source for The Druids Den on GitHub' })).toHaveAttribute('href', 'https://github.com/rrcampbell-exe/druids-den')
    expect(screen.getByText(/website for our cabin in the heart of Wisconsin's northwoods/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Listen to the podcast' })).toHaveAttribute('href', '/podcasts')

    expect(Array.from(container.querySelectorAll('.build-tile__link--gh')).map((link) => link.textContent.trim())).toEqual([
      'View source',
      'View source',
      'View source',
    ])

    const realFakeBirdsCard = Array.from(container.querySelectorAll('.build-tile')).find((card) => card.querySelector('.build-tile__title').textContent === 'Real Fake Birds')
    expect(within(realFakeBirdsCard).getByText('Some are real. Some are fake. Tell them apart.')).toBeInTheDocument()
    expect(within(realFakeBirdsCard).getByText('The real names come from eBird. The game saves progress on your device and can sync it if you sign in.')).toBeInTheDocument()
    expect(within(realFakeBirdsCard).getByText('Next.js, TypeScript, eBird, OpenAI APIs')).toBeInTheDocument()
  })

  test('sets the work-specific document title and share metadata', async () => {
    render(
      <ContextAndRouterProvider>
        <WorkPage />
      </ContextAndRouterProvider>
    )

    await waitFor(() => {
      expect(document.title).toBe('Selected Work | Ryan R. Campbell')
      expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', 'Selected Work | Ryan R. Campbell')
      expect(document.querySelector('meta[name="description"]').getAttribute('content')).toContain('AI adoption')
    })
  })
})
