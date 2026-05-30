import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import ResumePage from '../../pages/Resume/ResumePage'
import ContextAndRouterProvider from '../test-utils'

describe('ResumePage', () => {
  test('renders the hero and primary resume sections', () => {
    render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('heading', { name: /leader. engineer./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /recent work has centered on scaled enablement, reusable systems, and measurable adoption/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /roles spanning enterprise software, creative entrepreneurship, and operations design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /formal study in language and communication/i })).toBeInTheDocument()
  })

  test('renders the section navigation and key experience content', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    const subNav = container.querySelector('.SubNav')

    expect(subNav).toBeInTheDocument()
    expect(subNav.children.length).toBe(4)
    expect(screen.getByText(/enterprise ai hub/i)).toBeInTheDocument()
    expect(screen.getByText(/writescast network/i)).toBeInTheDocument()
  })
})