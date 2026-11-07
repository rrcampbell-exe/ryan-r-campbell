import { describe, expect, test } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { SubNav } from '../../components'

describe('SubNav', () => {
  test('default snapshot', () => {
    const subNav = render(
      <ContextAndRouterProvider>
        <SubNav sections={['section-1', 'section-2']} />
      </ContextAndRouterProvider>
    )
    expect(subNav).toMatchSnapshot()
  })
  test('should render SubNav', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <SubNav sections={['section-1', 'section-2']} />
      </ContextAndRouterProvider>
    )

    expect(Array.from(container.querySelectorAll('.SubNav__desktop-links a')).map((link) => link.textContent)).toEqual([
      'Section 1',
      'Section 2',
    ])
    expect(Array.from(container.querySelectorAll('.SubNav__mobile-links a')).map((link) => link.textContent)).toEqual([
      'Section 1',
      'Section 2',
    ])
    expect(screen.getByRole('navigation', { name: 'On this page' })).toBeInTheDocument()
    expect(screen.getByText('On this page')).toBeInTheDocument()
  })

  test('labels résumé sections with their visible page names', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <SubNav sections={['selected-impact', 'experience', 'competencies']} />
      </ContextAndRouterProvider>
    )

    const labels = Array.from(container.querySelectorAll('.SubNav__desktop-links a')).map((link) => link.textContent)
    expect(labels).toEqual(['Selected work', 'Experience', 'Technical skills'])
  })

  test('closes the mobile disclosure and returns focus to its summary after section navigation', () => {
    render(
      <ContextAndRouterProvider>
        <SubNav sections={['selected-impact', 'experience']} />
      </ContextAndRouterProvider>
    )

    const summary = screen.getByText('On this page')
    const details = summary.closest('details')
    details.open = true
    fireEvent.click(details.querySelector('a[href="#experience"]'))

    expect(details).not.toHaveAttribute('open')
    expect(summary).toHaveFocus()
  })
})
