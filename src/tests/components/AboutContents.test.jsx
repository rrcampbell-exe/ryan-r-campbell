import { ShortStory, LongStory } from '../../pages/About/AboutContents'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('AboutContents', () => {
  test('should render ShortStory', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <ShortStory />
      </ContextAndRouterProvider>
    )

    const shortStory = getByTestId('short-story')
    expect(shortStory).toBeInTheDocument()
  })
  test('ShortStory default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <ShortStory />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render LongStory', () => {
    const { getByTestId } = render(
      <ContextAndRouterProvider>
        <LongStory />
      </ContextAndRouterProvider>
    )

    const longStory = getByTestId('long-story')
    expect(longStory).toBeInTheDocument()
  })
  test('LongStory default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <LongStory />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})