import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { Books } from '../../components'

describe('Books', () => {
  test('should render Books', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <Books />
      </ContextAndRouterProvider>
    )

    const books = getByTestId('books')
    expect(books).toBeInTheDocument()
  })
  test('Books default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <Books />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  test('should render available book covers with intrinsic dimensions', () => {
    const { getAllByTestId } = render(
      <ContextAndRouterProvider>
        <Books />
      </ContextAndRouterProvider>
    )

    const bookCovers = getAllByTestId('book-cover')

    expect(bookCovers).toHaveLength(2)
    expect(bookCovers[0]).toHaveAttribute('width', '1650')
    expect(bookCovers[0]).toHaveAttribute('height', '2400')
    expect(bookCovers[1]).toHaveAttribute('width', '1800')
    expect(bookCovers[1]).toHaveAttribute('height', '2700')
  })
  test('links each book card to its section on /books', () => {
    const { getAllByTestId } = render(
      <ContextAndRouterProvider>
        <Books />
      </ContextAndRouterProvider>
    )

    const bookLinks = getAllByTestId('book-cover').map((cover) => cover.closest('a'))
    expect(bookLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/books#scambait',
      '/books#and-ampersand',
    ])
  })
})
