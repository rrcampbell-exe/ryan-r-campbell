import React from 'react'
import { builds } from '../../constants'

const Builds = ({ buildsToDisplay }) => {
  const buildsToRender = buildsToDisplay ? builds.slice(1, buildsToDisplay + 1) : builds
  return (
    <div className='Builds'>
      {buildsToRender.map((app) => (
        <div className='build grow-on-hover' key={app.logo} data-testid='build'>
          <div className='app-overview'>
            <img className='app-logo' src={app.logo} alt={app.alt} />
            <h3 className='app-title'>{app.title}</h3>
            <i className='app-teaser'>{app.teaser}</i>
            <p>{app.description}</p>
            <div className='app-overview-underline' />
          </div>
          <div className='app-details'>
            <p><b>Technologies used: </b>{app.technologies}</p>
            <p><a href={app.link} target={app.link && app.link.includes('ryanrcampbell.com') ? '' : '_blank'} rel='noopener'>{app.linkText}</a></p>
            <p><a href={app.gitHub} target='_blank' rel='noopener noreferrer'>view {app.title.toLowerCase()} on github</a></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Builds
