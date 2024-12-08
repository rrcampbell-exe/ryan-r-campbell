import { BooksLanding } from '../../pages'
import { describe, expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('BooksLanding', () => {
  test('default snapshot', () => {
    const booksLanding = render(
      <ContextAndRouterProvider>
        <BooksLanding />
      </ContextAndRouterProvider>
    )
    expect(booksLanding).toMatchSnapshot()
  })

  test('renders the correct number of books', () => {
    const { container } = render(
      <ContextAndRouterProvider>
        <BooksLanding />
      </ContextAndRouterProvider>
    )
    const books = container.querySelectorAll('.book-cover')
    expect(books.length).toBe(2)
  })

  test('clicking read a sample button opens the correct URL in a new tab', () => { 
    vi.spyOn(window, 'open') 
    // Render the component
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <BooksLanding />
      </ContextAndRouterProvider>
    )
  
    // Find the button using the data-testid attribute
    const scambaitSampleButton = getByTestId('scambait')
    const andAmpersandSampleButton = getByTestId('and-ampersand')
  
    // Simulate a click event on the button, verify correct URL is opened
    fireEvent.click(scambaitSampleButton)
    expect(window.open).toHaveBeenCalledWith('./books/scambait/scambait-teaser-chapters.pdf', '_blank')

    fireEvent.click(andAmpersandSampleButton)
    expect(window.open).toHaveBeenCalledWith('./books/and-ampersand/glassed-excerpt-from-and-ampersand.pdf', '_blank')
  })

  test('clicking buy this book button opens the correct URL in a new tab', () => { 
    vi.spyOn(window, 'open') 
    // Render the component
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <BooksLanding />
      </ContextAndRouterProvider>
    )
  
    // Find the button using the data-testid attribute, which for this button is the URL itself
    const scambaitBuyNowButton = getByTestId('https://www.amazon.com/dp/B09SY4P6FR')
    const andAmpersandBuyNowButton = getByTestId('https://www.amazon.com/dp/1736387111')
  
    // Simulate a click event on the button, verify correct URL is opened
    fireEvent.click(scambaitBuyNowButton)
    expect(window.open).toHaveBeenCalledWith('https://www.amazon.com/dp/B09SY4P6FR', '_blank')

    fireEvent.click(andAmpersandBuyNowButton)
    expect(window.open).toHaveBeenCalledWith('https://www.amazon.com/dp/1736387111', '_blank')
  })

  test('clicking the learn more button opens the correct URL in a new tab', () => { 
    vi.spyOn(window, 'open') 
    // Render the component
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <BooksLanding />
      </ContextAndRouterProvider>
    )
  
    // Find the button using the data-testid attribute, which for this button is the URL itself
    const imminentDawnLearnMoreButton = getByTestId('imminent-dawn-disclaimer')
    const mourningDoveLearnMoreButton = getByTestId('mourning-dove-disclaimer')
  
    // Simulate a click event on the button, verify correct URL is opened
    fireEvent.click(imminentDawnLearnMoreButton)
    expect(window.open).toHaveBeenCalledWith('https://ryanrcampbell.substack.com/p/what-happened-to-the-empathy-series', '_blank')

    fireEvent.click(mourningDoveLearnMoreButton)
    expect(window.open).toHaveBeenCalledWith('https://ryanrcampbell.substack.com/p/what-happened-to-the-empathy-series', '_blank')
  })
})
