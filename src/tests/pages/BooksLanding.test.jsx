import BooksLanding from '../../experiences/author/pages/Books/BooksLanding'
import { describe, expect, test } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
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
    expect(books.length).toBe(4)
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
    const imminentDawnSampleButton = getByTestId('imminent-dawn')
    const mourningDoveSampleButton = getByTestId('mourning-dove')
  
    // Simulate a click event on the button, verify correct URL is opened
    fireEvent.click(scambaitSampleButton)
    expect(window.open).toHaveBeenCalledWith('./books/scambait/scambait-teaser-chapters.pdf', '_blank')

    fireEvent.click(andAmpersandSampleButton)
    expect(window.open).toHaveBeenCalledWith('./books/and-ampersand/glassed-excerpt-from-and-ampersand.pdf', '_blank')

    fireEvent.click(imminentDawnSampleButton)
    expect(window.open).toHaveBeenCalledWith('./books/imminent-dawn/imminent-dawn-sample-chapter.pdf', '_blank')

    fireEvent.click(mourningDoveSampleButton)
    expect(window.open).toHaveBeenCalledWith('./books/mourning-dove/mourning-dove-sample-chapter.pdf', '_blank')
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
    const imminentDawnBuyNowButton = getByTestId('https://www.amazon.com/dp/B07N1Q8C6G')
    const mourningDoveBuyNowButton = getByTestId('https://www.amazon.com/dp/B07QZGSDX6')
  
    // Simulate a click event on the button, verify correct URL is opened
    fireEvent.click(scambaitBuyNowButton)
    expect(window.open).toHaveBeenCalledWith('https://www.amazon.com/dp/B09SY4P6FR', '_blank')

    fireEvent.click(andAmpersandBuyNowButton)
    expect(window.open).toHaveBeenCalledWith('https://www.amazon.com/dp/1736387111', '_blank')

    fireEvent.click(imminentDawnBuyNowButton)
    expect(window.open).toHaveBeenCalledWith('https://www.amazon.com/dp/B07N1Q8C6G', '_blank')

    fireEvent.click(mourningDoveBuyNowButton)
    expect(window.open).toHaveBeenCalledWith('https://www.amazon.com/dp/B07QZGSDX6', '_blank')
  })
})
