import React, { useState } from 'react'
import { PageWrapper, SubNav, Loading, PodcastTeaser } from '../../components'
import podcasts from '../../assets/podcasts/pinecast-podcasts'

const PodcastLanding = () => {
  const [activePodcast, setActivePodcast] = useState('r-on-everything')
  const [episodesPage, setEpisodesPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const episodesToDisplay = 9

  const totalEpisodesQty = podcasts.length
  const numberOfEpisodesShown = episodesToDisplay * episodesPage
  const allEpisodesShown = numberOfEpisodesShown >= totalEpisodesQty

  const buttonText = allEpisodesShown ? 'All episodes shown' : 'Load more episodes'

  return (
    <PageWrapper pageTitle='podcaster | community builder'>
      <SubNav
        tabs={[
          { id: 'r-on-everything', label: 'R: On Everything' },
          { id: 'writescast-network', label: 'The Writescast Network' },
        ]}
        activeTab={activePodcast}
        onTabChange={setActivePodcast}
      />
      <main className='Podcast'>
        {activePodcast === 'r-on-everything' ? (
          <section id='r-on-everything-panel' className='Podcast__announcement media-text-row section-wrapper section-band' role='tabpanel' aria-labelledby='r-on-everything-tab'>
            <div>
              <img className='feature-img' src='./podcasts/r-on-everything-podcast-cover-art.png' alt='R: On Everything podcast cover art' />
            </div>
            <div className='section-wrapper media-text-row__body'>
              <p className='Podcast__eyebrow'>Coming soon</p>
              <h1>R: On Everything</h1>
              <p>At the intersection of technology, work, creativity, and culture.</p>
              <p>The podcast debuts on September 17, 2026. Watch for the trailer on September 10, 2026.</p>
              <a className='btn-secondary' href='https://www.r-on-everything.com/' target='_blank' rel='noopener noreferrer'>Visit R: On Everything</a>
            </div>
          </section>
        ) : (
          <div id='writescast-network-panel' role='tabpanel' aria-labelledby='writescast-network-tab'>
            <div id='about' className='media-text-row section-wrapper section-band'>
              <div>
                <img className='feature-img' src='./podcasts/writescast-network-circle-logo.png' alt='The Writescast Network logo' />
              </div>
              <div className='section-wrapper media-text-row__body'>
                <h2>about</h2>
                <p>Founded in 2016, the Writescast Network reaches tens of thousands of writers and creatives around the globe. It may have ceased broadcasting new episodes in December of 2020, but it lives on here for streaming any time, anywhere.</p>
              </div>
            </div>
            <div id='podcast-player' className='podcast-player'>
              {!isLoaded && <Loading height='400px'/>}
              <iframe title='A playlist of the 100 most-recent Writescast Network episodes' onLoad={() => setIsLoaded(true)} src='https://pinecast.com/embed/player_playlist/the-writescast-network?color.primary=%23000000&amp;color.secondary=%23cbd3da&amp;color.accent=%23df633b' border='0' style={{ border: '0', borderRadius: '4px' }} height={isLoaded ? '400' : '0'}></iframe>
            </div>
            <div id='all-episodes' className='ContentHub'>
              <PodcastTeaser episodesToDisplay={episodesToDisplay} episodesPage={episodesPage}/>
              <div className='content-hub-nav'>
                <button onClick={() => setEpisodesPage(episodesPage + 1)} disabled={allEpisodesShown}>{buttonText}</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageWrapper>
  )
}

export default PodcastLanding
