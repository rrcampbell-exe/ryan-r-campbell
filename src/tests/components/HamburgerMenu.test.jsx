import { describe, expect, test } from 'vitest'
import { HamburgerMenu } from '../../experiences/shared/components'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('HamburgerMenu', () => {
  test('default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <HamburgerMenu />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('should close the menu when the close button is clicked', () => {
    const { getByTestId, queryByTestId } = render(
      <ContextAndRouterProvider>
        <HamburgerMenu />
      </ContextAndRouterProvider>
    )
    const closeButton = getByTestId('close-button')
    closeButton.click()
    const menu = queryByTestId('menu')
    expect(menu).not.toHaveClass('menu-open')
  })
  test('should have six link components', () => {
    const { getAllByRole } = render(
      <ContextAndRouterProvider>
        <HamburgerMenu />
      </ContextAndRouterProvider>
    )
    const links = getAllByRole('link')
    expect(links.length).toBe(6)
  })
  test('should show the active link', () => {
    const { getAllByRole } = render(
      <ContextAndRouterProvider>
        <HamburgerMenu />
      </ContextAndRouterProvider>
    )
    const links = getAllByRole('link')
    const activeLink = links.find(link => link.classList.contains('active'))
    expect(activeLink).toBeInTheDocument()
  })
})
