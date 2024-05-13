import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import ContextAndRouterProvider from '../test-utils'
import { PodcastTeaser } from '../../components'

describe('PodcastTeaser', () => {
  test('default snapshot', () => {
    const { asFragment } = render(
      <ContextAndRouterProvider>
        <PodcastTeaser episodesToDisplay={3} episodesPage={1} />
      </ContextAndRouterProvider>
    )
    expect(asFragment()).toMatchSnapshot(`
      <DocumentFragment>
        <div
          class="ContentTeaser"
        >
          <div>
            <div
              class="content-post grow-on-hover"
            >
              <img
                class="cover-image"
                src="https://storage.pinecast.net/podcasts/517076a7-8734-40ed-b67f-c3d3284a137d/image/c383bb8c-ad6d-445f-a783-7bc734d879a2/2020DanSchiroAuthorPhotoWritescastGuest.png"
              />
              <h3>
                A Final Conversation with Dan Schiro - Writescast 100
              </h3>
              <span>
                Released on December 11, 2020
              </span>
              <p>
                Okay, so this isn't the final conversation I'll ever have with Dan Schiro, but it is the final conversation to be broadcast by the Writescast Network. 
              </p>
              <a
                href="https://ryanrcampbell.com/podcast/a-final-conversation-with-dan-schiro-writescast-100/"
              >
                listen here
              </a>
              <div
                class="content-post-underline"
              />
            </div>
          </div>
          <div>
            <div
              class="content-post grow-on-hover"
            >
              <img
                class="cover-image"
                src="https://storage.pinecast.net/podcasts/517076a7-8734-40ed-b67f-c3d3284a137d/image/e759cfd3-56b5-4080-8722-65ff96a377f1/2020WritescastNetworkLaceyPhoto.png"
              />
              <h3>
                A Reader's Perspective with Lacey - Writescast 099
              </h3>
              <span>
                Released on December 4, 2020
              </span>
              <p>
                For the penultimate episode of Writescast Network programming, I'm joined by an avid reader who just so happens to be my wife. Over the course of our discussion, we chat about what gets her to pick a book off a shelf, what keeps her engrossed while reading, and what will have her shelving a book just as fast as she picked it up.
              </p>
              <a
                href="https://ryanrcampbell.com/podcast/a-readers-perspective-with-lacey-writescast-099/"
              >
                listen here
              </a>
              <div
                class="content-post-underline"
              />
            </div>
          </div>
          <div>
            <div
              class="content-post grow-on-hover"
            >
              <img
                class="cover-image"
                src="https://storage.pinecast.net/podcasts/517076a7-8734-40ed-b67f-c3d3284a137d/image/96687bee-289d-4085-b2c3-e80b7f872ca9/2020WritescastSarahSmithAuthorPhoto.png"
              />
              <h3>
                Simmering Down with Sarah Smith - Writescast 098
              </h3>
              <span>
                Released on November 27, 2020
              </span>
              <p>
                Sarah Smith joins the show to discuss her most recent release, SIMMER DOWN, along with what got her into writing romance in the first place, among other topics.
              </p>
              <a
                href="https://ryanrcampbell.com/podcast/simmering-down-with-sarah-smith-writescast-098/"
              >
                listen here
              </a>
              <div
                class="content-post-underline"
              />
            </div>
          </div>
        </div>
      </DocumentFragment>
    `)
  })
  test('should navigate to the correct URL when clicking on a podcast', () => {
    const { getAllByText } = render(
      <ContextAndRouterProvider>
        <PodcastTeaser episodesToDisplay={3} episodesPage={1} />
      </ContextAndRouterProvider>
    )
    const listenHere = getAllByText('listen here')[0]
    expect(listenHere.href).toBe('https://ryanrcampbell.com/podcast/a-final-conversation-with-dan-schiro-writescast-100/')
  })
})
