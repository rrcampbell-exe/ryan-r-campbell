import React from 'react'
import { builds } from '../../constants'

const Builds = ({}) => {
  return (
    <div className='Builds'>
      {builds.map((app) => (
        <article className='build-tile' key={app.logo} data-testid='build'>
          <div className='build-tile__logo-wrap'>
            <img className='build-tile__logo' src={app.logo} alt={app.alt} />
          </div>
          <div className='build-tile__body'>
            <h3 className='build-tile__title'>{app.title}</h3>
            <p className='build-tile__teaser'>{app.teaser}</p>
            <p className='build-tile__desc'>{app.description}</p>
            <p className='build-tile__tech'>{app.technologies}</p>
            {app.isPodcast && (
              <iframe src='https://pnc.st/s/r-on-everything/embed' seamless scrolling='no' height={24} className='pinecast-embed' frameBorder='0' width='100%'></iframe>
            )}
          </div>
          <div className='build-tile__links'>
            {app.link && (() => {
              const opensInNewTab = !app.link.includes('ryanrcampbell.com')

              return (
                <a
                  href={app.link}
                  target={opensInNewTab ? '_blank' : undefined}
                  rel={opensInNewTab ? 'noopener noreferrer' : undefined}
                  className='build-tile__link'
                >
                  {app.linkText}
                </a>
              )
            })()}
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
