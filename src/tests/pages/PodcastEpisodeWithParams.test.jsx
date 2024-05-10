import PodcastEpisode from '../../experiences/author/pages/Podcast/PodcastEpisode'
import { describe, expect, test } from 'vitest'
import { screen, render, waitFor } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'

describe('PodcastEpisode', () => {
  test('should display a podcast episode when the params are valid', async () => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const actual = await importOriginal()
      return {
        ...actual,
        useParams: () => ({
          slug: 'a-final-conversation-with-dan-schiro-writescast-100'
        })
      }
    })
    render(
      <ContextAndRouterProvider>
        <PodcastEpisode />
      </ContextAndRouterProvider>
    )
    await waitFor(() => {
      expect(screen.queryByText('A Final Conversation with Dan Schiro', { exact: false })).toBeInTheDocument()
    })
  })
})
