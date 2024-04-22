import React from 'react'
import podcasts from '../../../../assets/podcasts/pinecast-podcasts'
import { Link, useNavigate } from 'react-router-dom'
import formatDate from '../../../../utils/format-date'
import buildBlogParams from '../../../../utils/build-blog-params'

const PodcastTeaser = ({ episodesToDisplay, episodesPage }) => {
  const navigate = useNavigate()

  const maxPostIndex = episodesPage * episodesToDisplay

  const teaserEpisodes = podcasts.slice(0, maxPostIndex)

  return (
    <div className='BlogTeaser'>
      {teaserEpisodes.map((episode) => (
        <div onClick={() => navigate(buildBlogParams(episode.link))} key={episode.link}>
          <div className='blog-post grow-on-hover'>
            <img className='cover-image' src={episode.image._href} />
            <h3>{episode.title}</h3>
            <span>Posted on {formatDate(episode.pubDate)}</span>
            <p>{episode.description}</p>
            <Link to={episode.link}>listen here</Link>
            <div className='blog-post-underline' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PodcastTeaser
