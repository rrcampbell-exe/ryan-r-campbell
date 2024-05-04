import GeneralAbout from '../../experiences/shared/pages/About/GeneralAbout'
import { describe, expect, test } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('GeneralAbout', () => {
  test('default snapshot', () => {
    const generalAbout = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )
    expect(generalAbout).toMatchSnapshot()
  })

  test('should render ShortStory when abridged button is clicked', () => {
    const { getByText, getByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const abridged = getByText('abridged')
    expect(abridged).toBeInTheDocument()
    fireEvent.click(abridged)
    const shortStory = getByTestId('short-story')
    expect(shortStory).toBeInTheDocument()
  })

  test('should render LongStory when extended button is clicked', () => {
    const { getByText, getByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const extended = getByText('extended')
    expect(extended).toBeInTheDocument()
    fireEvent.click(extended)
    const longStory = getByTestId('long-story')
    expect(longStory).toBeInTheDocument()
  })

  test('should render LongStory after clicking abridged and then extended', () => {
    const { getByText, getByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const abridged = getByText('abridged')
    const extended = getByText('extended')
    fireEvent.click(abridged)
    fireEvent.click(extended)
    const longStory = getByTestId('long-story')
    expect(longStory).toBeInTheDocument()
  })

  test('should render no story when page is first rendered', () => {
    const { queryByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const shortStory = queryByTestId('short-story')
    const longStory = queryByTestId('long-story')
    expect(shortStory).not.toBeInTheDocument()
    expect(longStory).not.toBeInTheDocument()
  })
})
