import React from 'react'
import { PageWrapper, Contact, NotFound } from '../../../shared/components'
import { useParams } from 'react-router-dom'
import { fetchEpisode, findEpisodeUUID, formatDate } from '../../../../utils'

const PodcastEpisode = () => {
  const { slug } = useParams()

  const episode = fetchEpisode(slug)
  const uuid = findEpisodeUUID(episode)

  return (
    <PageWrapper pageTitle='podcaster | community-builder'>
      <main className='Podcast'>
        {episode ? (
          <>
            <h3>{episode.title}</h3>
            <span className=''>Posted on {formatDate(episode.pubDate)}</span>
            <p>{episode.description}</p>
            <div className='podcast-player'>
              <iframe src={`https://pinecast.com/player/${uuid}?theme=flat`} seamless height="200" style={{ border: '0', borderRadius: '4px' }} className="pinecast-embed" frameborder="0" width="100%"></iframe>
            </div>
          </>
          ) : (
          <>
            <NotFound contentType='podcast' />
          </>
        )}
        <div id='contact' className='shadow-bg-main-accent section-wrapper'>
          <h2>contact</h2>
          <Contact />
        </div>
      </main>
    </PageWrapper>
  )
}

export default PodcastEpisode
