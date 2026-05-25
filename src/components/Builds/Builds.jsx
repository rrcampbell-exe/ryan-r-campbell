import React from 'react'
import { builds } from '../../constants'

const Builds = ({ buildsToDisplay }) => {
  const buildsToRender = buildsToDisplay ? builds.slice(1, buildsToDisplay + 1) : builds
  return (
    <div className='Builds'>
      {buildsToRender.map((app) => (
        <article className='build-tile' key={app.logo} data-testid='build'>
          <div className='build-tile__logo-wrap'>
            <img className='build-tile__logo' src={app.logo} alt={app.alt} />
          </div>
          <div className='build-tile__body'>
            <h3 className='build-tile__title'>{app.title}</h3>
            <p className='build-tile__teaser'>{app.teaser}</p>
            <p className='build-tile__desc'>{app.description}</p>
            <p className='build-tile__tech'>{app.technologies}</p>
          </div>
          <div className='build-tile__links'>
            {app.link && (
              <a
                href={app.link}
                target={app.link.includes('ryanrcampbell.com') ? '' : '_blank'}
                rel='noopener noreferrer'
                className='build-tile__link'
              >
                {app.linkText}
              </a>
            )}
            {app.gitHub && (
              <a
                href={app.gitHub}
                target='_blank'
                rel='noopener noreferrer'
                className='build-tile__link build-tile__link--gh'
              >
                GitHub
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

export default Builds
