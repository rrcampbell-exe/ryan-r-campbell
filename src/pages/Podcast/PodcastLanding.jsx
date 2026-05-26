import React, { useState } from 'react'
import { PageWrapper, SubNav, Loading, PodcastTeaser } from '../../components'
import podcasts from '../../assets/podcasts/pinecast-podcasts'

const PodcastLanding = () => {
  const [episodesPage, setEpisodesPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const episodesToDisplay = 9

  const totalEpisodesQty = podcasts.length
  const numberOfEpisodesShown = episodesToDisplay * episodesPage
  const allEpisodesShown = numberOfEpisodesShown >= totalEpisodesQty

  const buttonText = allEpisodesShown ? 'All episodes shown' : 'Load more episodes'

  return (
    <PageWrapper pageTitle='podcaster | community-builder'>
      <SubNav sections={['about', 'podcast-player', 'all-episodes']} />
      <main className='Podcast'>
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
      </main>
    </PageWrapper>
  )
}

export default PodcastLanding
