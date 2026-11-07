import { useState } from 'react'
import { PageWrapper, NotFound, Loading } from '../../components'
import { useParams } from 'react-router-dom'
import { fetchEpisode, findEpisodeUUID, formatDate } from '../../utils'
import { useDocumentTitle } from '../../hooks'

const PodcastEpisode = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const { slug } = useParams()

  const episode = fetchEpisode(slug)
  const uuid = findEpisodeUUID(episode)
  useDocumentTitle(episode?.title
    ? `${episode.title} | R: On Everything | Ryan R. Campbell`
    : 'Podcasts | Ryan R. Campbell')

  return (
    <PageWrapper pageTitle='podcaster | community-builder'>
      <main id='main-content' tabIndex={-1} className='Podcast'>
        {(episode && uuid) ? (
          <>
            <h3>{episode.title}</h3>
            <span className=''>Posted on {formatDate(episode.pubDate)}</span>
            <p>{episode.description}</p>
            <div className='podcast-player' data-testid='podcast-player'>
              {!isLoaded && <Loading height='200px' />}
              <iframe onLoad={() => setIsLoaded(true)} src={`https://pinecast.com/player/${uuid}?theme=flat`} seamless height={isLoaded ? '200' : '0' } style={{ border: '0', borderRadius: '4px' }} className="pinecast-embed" frameBorder="0" width="100%"></iframe>
            </div>
          </>
          ) : (
          <>
            <NotFound contentType='podcast' />
          </>
        )}
      </main>
    </PageWrapper>
  )
}

export default PodcastEpisode
