import React from 'react'
import { PageWrapper, Contact } from '../../../shared/components'

// TODO: build out podcast episode pages instead (use data in podcast data or via ryan r campbell site to handle routing)
// TODO: issue is only up through episode 91 of the writescast is there data to map onto... need to see what happened with data transfer from xml --> json

const PodcastLanding = () => {
  return (
    <PageWrapper pageTitle='podcaster | community-builder'>
      <main className='Podcast-landing'>
        <h2>the writescast network</h2>
        <p>Founded in 2016, the Writescast Network reaches tens of thousands of writers and creatives around the globe. It may have ceased broadcasting new episodes in December of 2020, but it lives on here for streaming any time, anywhere.</p>
        <div className='podcast-player'>
          <iframe src='https://pinecast.com/embed/player_playlist/the-writescast-network?color.primary=%23000000&amp;color.secondary=%23cbd3da&amp;color.accent=%23df633b' border='0' style={{ border: '0', borderRadius: '4px' }} height='600'></iframe>
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
