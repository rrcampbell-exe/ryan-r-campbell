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

    expect(screen.getByRole('heading', { name: /technologist\. strategist\. engineer\./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /technical depth, product thinking, and the range to move ideas from exploration through implementation./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /a career connecting technology, experimentation, communication, and organizational change./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /language, technical practice, and learning across disciplines/i })).toBeInTheDocument()
  })

  test('renders the section navigation and key experience content', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <ResumePage />
      </ContextAndRouterProvider>
    )

    const subNav = container.querySelector('.SubNav')

    expect(subNav).toBeInTheDocument()
    expect(subNav.children.length).toBe(5)
    expect(screen.getAllByText(/enterprise ai hub/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/writescast network/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/natus neurology/i)).toBeInTheDocument()
  })
})