import { PodcastLanding } from '../../pages'
import { describe, expect, test } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('PodcastLanding', () => {
  test('default snapshot', () => {
    const podcastLanding = render(
      <ContextAndRouterProvider>
        <PodcastLanding />
      </ContextAndRouterProvider>
    )
    expect(podcastLanding).toMatchSnapshot()
  })
  test('should load more episodes when the load more episodes button is clicked', () => {
    render(
      <ContextAndRouterProvider>
        <PodcastLanding />
      </ContextAndRouterProvider>
    )
    const loadMoreEpisodesButton = screen.getByText('load more episodes')

    const numberOfClicks = 16
    for (let i = 0; i < numberOfClicks; i++) {
      fireEvent.click(loadMoreEpisodesButton)
    }
    expect(screen.getByText('all episodes shown')).toBeInTheDocument()
  })
})
