import GeneralAbout from '../../pages/About/GeneralAbout'
import { describe, expect, test } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
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
    const { getByRole, getByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const abridged = getByRole('button', { name: 'abridged' })
    expect(abridged).toBeInTheDocument()
    expect(abridged).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(abridged)
    expect(abridged).toHaveAttribute('aria-pressed', 'true')
    const shortStory = getByTestId('short-story')
    expect(shortStory).toBeInTheDocument()
  })

  test('should render LongStory when extended button is clicked', () => {
    const { getByRole, getByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const extended = getByRole('button', { name: 'extended' })
    expect(extended).toBeInTheDocument()
    expect(extended).toHaveAttribute('aria-pressed', 'false')
    fireEvent.click(extended)
    expect(extended).toHaveAttribute('aria-pressed', 'true')
    const longStory = getByTestId('long-story')
    expect(longStory).toBeInTheDocument()
  })

  test('should render LongStory after clicking abridged and then extended', () => {
    const { getByRole, getByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const abridged = getByRole('button', { name: 'abridged' })
    const extended = getByRole('button', { name: 'extended' })
    fireEvent.click(abridged)
    fireEvent.click(extended)
    expect(abridged).toHaveAttribute('aria-pressed', 'false')
    expect(extended).toHaveAttribute('aria-pressed', 'true')
    const longStory = getByTestId('long-story')
    expect(longStory).toBeInTheDocument()
  })

  test('should render no story when page is first rendered', () => {
    const { getByRole, getByText, queryByTestId } = render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    expect(getByRole('heading', { name: 'the story so far' })).toBeInTheDocument()
    expect(getByText('Choose the shape of the story')).toBeInTheDocument()
    expect(getByRole('button', { name: 'abridged' })).toHaveAttribute('aria-pressed', 'false')
    expect(getByRole('button', { name: 'extended' })).toHaveAttribute('aria-pressed', 'false')
    const shortStory = queryByTestId('short-story')
    const longStory = queryByTestId('long-story')
    expect(shortStory).not.toBeInTheDocument()
    expect(longStory).not.toBeInTheDocument()
  })

  test('should reserve the hero image with intrinsic dimensions', () => {
    render(
      <ContextAndRouterProvider>
        <GeneralAbout />
      </ContextAndRouterProvider>
    )

    const heroImage = screen.getByAltText('Ryan R. Campbell outdoors with a black baseball cap on')

    expect(heroImage).toHaveAttribute('width', '1104')
    expect(heroImage).toHaveAttribute('height', '1120')
  })
})
