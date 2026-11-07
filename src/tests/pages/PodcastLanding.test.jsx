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
    fireEvent.click(screen.getByRole('tab', { name: 'The Writescast Network' }))
    const loadMoreEpisodesButton = screen.getByText('Load more episodes')

    const numberOfClicks = 16
    for (let i = 0; i < numberOfClicks; i++) {
      fireEvent.click(loadMoreEpisodesButton)
    }
    expect(screen.getByText('All episodes shown')).toBeInTheDocument()
  })
  test('should show the R: On Everything teaser by default', () => {
    render(
      <ContextAndRouterProvider>
        <PodcastLanding />
      </ContextAndRouterProvider>
    )

    expect(screen.getByRole('tab', { name: 'R: On Everything' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('heading', { name: 'R: On Everything' })).toBeInTheDocument()
    expect(screen.getByAltText('R: On Everything podcast cover art')).toBeInTheDocument()
    expect(screen.getByText('In an ever-changing world, staying human requires more than keeping up. It requires paying attention to what\'s changing us.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit R: On Everything' })).toHaveAttribute('href', 'https://www.r-on-everything.com/')
    expect(screen.queryByTitle('A playlist of the 100 most-recent Writescast Network episodes')).not.toBeInTheDocument()
  })
  test('should show the Writescast Network archive when selected', () => {
    render(
      <ContextAndRouterProvider>
        <PodcastLanding />
      </ContextAndRouterProvider>
    )

    fireEvent.click(screen.getByRole('tab', { name: 'The Writescast Network' }))

    expect(screen.getByRole('tab', { name: 'The Writescast Network' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Founded in 2016, the Writescast Network reaches tens of thousands of writers and creatives around the globe. It may have ceased broadcasting new episodes in December of 2020, but it lives on here for streaming any time, anywhere.')).toBeInTheDocument()
    expect(screen.getByTitle('A playlist of the 100 most-recent Writescast Network episodes')).toBeInTheDocument()
  })

  test('moves between podcast tabs with the arrow keys', () => {
    render(
      <ContextAndRouterProvider>
        <PodcastLanding />
      </ContextAndRouterProvider>
    )

    const rOnEverything = screen.getByRole('tab', { name: 'R: On Everything' })
    const writescast = screen.getByRole('tab', { name: 'The Writescast Network' })
    fireEvent.keyDown(rOnEverything, { key: 'ArrowRight' })

    expect(writescast).toHaveAttribute('aria-selected', 'true')
    expect(writescast).toHaveFocus()
    expect(screen.getByRole('tabpanel', { name: 'The Writescast Network' })).toBeInTheDocument()

    fireEvent.keyDown(writescast, { key: 'ArrowLeft' })
    expect(rOnEverything).toHaveAttribute('aria-selected', 'true')
    expect(rOnEverything).toHaveFocus()
    expect(screen.getByRole('tabpanel', { name: 'R: On Everything' })).toBeInTheDocument()
  })

  test('sets a descriptive browser title', async () => {
    render(
      <ContextAndRouterProvider>
        <PodcastLanding />
      </ContextAndRouterProvider>
    )

    await screen.findByRole('heading', { name: 'R: On Everything' })
    expect(document.title).toBe('Podcasts | Ryan R. Campbell')
  })
})
