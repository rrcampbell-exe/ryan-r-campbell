import PodcastEpisode from '../../experiences/author/pages/Podcast/PodcastEpisode'
import { describe, expect, test } from 'vitest'
import { screen, render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('PodcastEpisode', () => {
  test('default snapshot', () => {
    const podcastEpisode = render(
      <ContextAndRouterProvider>
        <PodcastEpisode />
      </ContextAndRouterProvider>
    )
    expect(podcastEpisode).toMatchSnapshot()
  })
  test('should display a not found message when the episode is not found', () => {
    render(
      <ContextAndRouterProvider>
        <PodcastEpisode />
      </ContextAndRouterProvider>
    )
    expect(screen.getByText('I couldn\'t find the podcast you were looking for. It might have been moved or relocated as part of a recent site migration.')).toBeInTheDocument()
  })
})