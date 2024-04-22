import React from 'react'
import { PageWrapper, Contact } from '../../../shared/components'
import { useParams } from 'react-router-dom'
import fetchEpisode from '../../../../utils/fetch-episode'
import findEpisodeUUID from '../../../../utils/find-episode-uuid'
import formatDate from '../../../../utils/format-date'

const PodcastEpisode = () => {
  const { slug } = useParams()

  const episode = fetchEpisode(slug)
  const uuid = findEpisodeUUID(episode)

  return (
    <PageWrapper pageTitle='home of the writescast network'>
      <main className='Podcast'>
        <h3>{episode.title}</h3>
        <span className=''>Posted on {formatDate(episode.pubDate)}</span>
        <p>{episode.description}</p>
        <div className='podcast-player'>
          <iframe src={`https://pinecast.com/player/${uuid}?theme=flat`} seamless height="200" style={{ border: '0', borderRadius: '4px' }} class="pinecast-embed" frameborder="0" width="100%"></iframe>
        </div>
        <div id='contact' className='shadow-bg-main-accent section-wrapper'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default PodcastEpisode
