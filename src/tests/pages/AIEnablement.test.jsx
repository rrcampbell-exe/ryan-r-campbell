import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import AIEnablement from '../../pages/AI/AIEnablement'
import ContextAndRouterProvider from '../test-utils'

describe('AIEnablement', () => {
  test('renders the page heading and core sections', () => {
    render(
      <ContextAndRouterProvider>
        <AIEnablement />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('heading', { name: /thoughtful ai enablement begins by looking inward/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /how organizations position themselves to benefit from ai/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what good enablement looks like day to day/i })).toBeInTheDocument()
  })

  test('renders the section navigation', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <AIEnablement />
      </ContextAndRouterProvider>
    )

    const subNav = container.querySelector('.SubNav')

    expect(subNav).toBeInTheDocument()
    expect(subNav.children.length).toBe(5)
  })

  test('renders practical guidance for AI enablement', () => {
    render(
      <ContextAndRouterProvider>
        <AIEnablement />
      </ContextAndRouterProvider>
    )

    expect(screen.getByText(/build a platform, not a pile of demos/i)).toBeInTheDocument()
    expect(screen.getByText(/measure both outcomes and sentiment/i)).toBeInTheDocument()
  })
})