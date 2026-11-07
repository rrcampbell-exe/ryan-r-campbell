import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import defaultBuilds from '../../constants/builds-data'

const Builds = ({ items = defaultBuilds }) => {
  return (
    <div className={`Builds${items.length === 1 ? ' Builds--single' : ''}`}>
      {items.map((app) => (
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
            {app.link && (app.link.startsWith('/')
              ? (
                <Link to={app.link} className='build-tile__link'>
                  {app.linkText}
                </Link>
              )
              : (
                <a
                  href={app.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='build-tile__link'
                >
                  {app.linkText}
                </a>
              )
            )}
            {app.gitHub && (
              <a
                href={app.gitHub}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={app.gitHubAriaLabel}
                className='build-tile__link build-tile__link--gh'
              >
                {app.gitHubText || 'GitHub'}
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

Builds.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    gitHub: PropTypes.string,
    gitHubText: PropTypes.string,
    gitHubAriaLabel: PropTypes.string,
    isPodcast: PropTypes.bool,
  })),
}

export default Builds
