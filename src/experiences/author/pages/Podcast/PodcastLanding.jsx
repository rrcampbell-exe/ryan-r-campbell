import React, { useState } from 'react'
import { PageWrapper, Contact } from '../../../shared/components'
import PodcastTeaser from './PodcastTeaser'
import podcasts from '../../../../assets/podcasts/pinecast-podcasts'


const PodcastLanding = () => {
  const [episodesPage, setEpisodesPage] = useState(1)
  const episodesToDisplay = 9

  const totalEpisodesQty = podcasts.length
  const numberOfEpisodesShown = episodesToDisplay * episodesPage
  const allEpisodesShown = numberOfEpisodesShown >= totalEpisodesQty

  const buttonText = allEpisodesShown ? 'all episodes shown' : 'load more episodes'

  return (
    <PageWrapper pageTitle='podcaster | community-builder'>
      <main className='Podcast'>
        <h2>the writescast network</h2>
        <p>Founded in 2016, the Writescast Network reaches tens of thousands of writers and creatives around the globe. It may have ceased broadcasting new episodes in December of 2020, but it lives on here for streaming any time, anywhere.</p>
        <div className='podcast-player'>
          <iframe src='https://pinecast.com/embed/player_playlist/the-writescast-network?color.primary=%23000000&amp;color.secondary=%23cbd3da&amp;color.accent=%23df633b' border='0' style={{ border: '0', borderRadius: '4px' }} height='600'></iframe>
        </div>
        <div className='BlogHub'>
          <h2>episode pages</h2>
          <PodcastTeaser episodesToDisplay={episodesToDisplay} episodesPage={episodesPage}/>
          <div className='blog-hub-nav'>
            <button onClick={() => setEpisodesPage(episodesPage + 1)} disabled={allEpisodesShown}>{buttonText}</button>
          </div>
        </div>
        <div id='contact' className='shadow-bg-main-accent section-wrapper'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default PodcastLanding
