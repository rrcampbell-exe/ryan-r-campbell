import PodcastEpisode from '../../experiences/author/pages/Podcast/PodcastEpisode'
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
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
  test('should display the correct episode information', () => {
    const { getByText } = render(
      <ContextAndRouterProvider>
        <PodcastEpisode />
      </ContextAndRouterProvider>
    )
    const episodeTitle = getByText('Episode Title')
    const episodeDescription = getByText('Episode Description')
    const episodeDate = getByText('Posted on 2022-01-01')
    expect(episodeTitle).toBeInTheDocument()
    expect(episodeDescription).toBeInTheDocument()
    expect(episodeDate).toBeInTheDocument()
  })
  // test('should display the correct podcast player', () => {
  //   const { getByTestId } = render(
  //     <ContextAndRouterProvider>
  //       <PodcastEpisode />
  //     </ContextAndRouterProvider>
  //   )
  //   const podcastPlayer = getByTestId('podcast-player')
  //   expect(podcastPlayer).toBeInTheDocument()
  // })
  // test('should display the loading spinner before the podcast player is loaded', () => {
  //   const { getByTestId } = render(
  //     <ContextAndRouterProvider>
  //       <PodcastEpisode />
  //     </ContextAndRouterProvider>
  //   )
  //   const loadingSpinner = getByTestId('loading-spinner')
  //   expect(loadingSpinner).toBeInTheDocument()
  // })
  // test('should display the podcast player after the podcast player is loaded', () => {
  //   const { getByTestId } = render(
  //     <ContextAndRouterProvider>
  //       <PodcastEpisode />
  //     </ContextAndRouterProvider>
  //   )
  //   const podcastPlayer = getByTestId('podcast-player')
  //   expect(podcastPlayer).toBeInTheDocument()
  // })
  // test('should display the contact section', () => {
  //   const { getByTestId } = render(
  //     <ContextAndRouterProvider>
  //       <PodcastEpisode />
  //     </ContextAndRouterProvider>
  //   )
  //   const contactSection = getByTestId('contact-section')
  //   expect(contactSection).toBeInTheDocument()
  // })
})