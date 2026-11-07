import { Link } from 'react-router-dom'
import { PageWrapper, SubNav } from '../../components'
import { useDocumentTitle, useMetaTags } from '../../hooks'
import {
  CERTIFICATIONS,
  EARLIER_EXPERIENCE,
  EDUCATION,
  NORTHWESTERN_MUTUAL_ROLES,
  SELECTED_WORK,
  TECHNICAL_SKILLS,
} from './resume-data'

const ResumePage = () => {
  useDocumentTitle('Résumé | Ryan R. Campbell')
  useMetaTags([
    { type: 'name', name: 'description', content: 'Ryan R. Campbell is a Software Engineer III with experience in frontend applications, APIs, infrastructure, AI adoption research, teaching, and small business operations.' },
    { type: 'property', name: 'og:title', content: 'Résumé | Ryan R. Campbell' },
    { type: 'property', name: 'og:description', content: 'A résumé spanning client software, APIs, infrastructure, AI adoption, workshops, and business ownership.' },
    { type: 'property', name: 'twitter:title', content: 'Résumé | Ryan R. Campbell' },
    { type: 'property', name: 'twitter:description', content: 'A résumé spanning client software, APIs, infrastructure, AI adoption, workshops, and business ownership.' },
  ])

  return (
    <PageWrapper pageTitle='Software Engineer'>
      <SubNav sections={['selected-impact', 'experience', 'competencies', 'additional-experience', 'education', 'get-in-touch']} />
      <main id='main-content' tabIndex={-1} className='Resume-page'>
        <section className='resume-hero'>
          <div className='resume-hero__copy'>
            <p className='section-label'>Résumé</p>
            <h1>Professional experience</h1>
            <p className='resume-hero__lede'>
              In my current software engineering role, I&apos;ve shipped changes across web interfaces, APIs, and infrastructure. I&apos;ve also led research on AI adoption, taught workshops for designers and engineers, and facilitated panels for C-suite executives. Beyond my work as a software engineer, my background includes running a small business, teaching writing, and publishing.
            </p>
            <p className='resume-location'>Milwaukee, Wisconsin</p>
            <nav className='resume-hero__actions' aria-label='Professional links'>
              <Link to='/work' className='btn-primary'>Selected work</Link>
              <a href='https://github.com/rrcampbell-exe' target='_blank' rel='noopener noreferrer' className='btn-secondary'>GitHub</a>
              <a href='https://www.linkedin.com/in/ryan-r-campbell/' target='_blank' rel='noopener noreferrer' className='btn-secondary'>LinkedIn</a>
            </nav>
          </div>
        </section>

        <section id='selected-impact' className='resume-section resume-section--selected'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Selected work</p>
              <h2>Software delivery, AI adoption, and an independent business.</h2>
            </div>
          </div>
          <ul className='resume-selected-work'>
            {SELECTED_WORK.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
                <span>{item.evidence}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id='experience' className='resume-section'>
          <div className='resume-section__heading-row'>
            <div className='resume-section__employer'>
              <p className='section-label'>Experience</p>
              <div className='resume-section__employer-heading'>
                <h2>Northwestern Mutual</h2>
                <span>Milwaukee, WI</span>
              </div>
            </div>
          </div>
          <div className='resume-experience-list'>
            <div className='resume-role resume-role--employer'>
              {NORTHWESTERN_MUTUAL_ROLES.map((role) => (
                <section className='resume-role__position' key={role.title}>
                  <div className='resume-role__header'>
                    <h3>{role.title}</h3>
                    <span className='resume-role__period'>{role.period}</span>
                  </div>
                  <ul className='resume-role__bullets'>
                    {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id='competencies' className='resume-section'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Technical skills</p>
              <h2>Tools and practices I use to build and ship web applications.</h2>
            </div>
          </div>
          <div className='resume-skills-grid'>
            {TECHNICAL_SKILLS.map((group) => (
              <article className='resume-card' key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='additional-experience' className='resume-section'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Additional experience</p>
              <h2>Business ownership, writing, procurement, and operations.</h2>
            </div>
          </div>
          <div className='resume-earlier-work'>
            {EARLIER_EXPERIENCE.map((role) => (
              <article className='resume-earlier-role' key={role.company}>
                <div>
                  <h3>{role.company}</h3>
                  <p>{role.location ? `${role.title} · ${role.location}` : role.title}</p>
                </div>
                <p className='resume-earlier-role__period'>{role.period}</p>
                <p className='resume-earlier-role__detail'>{role.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='education' className='resume-section resume-section--education'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Education &amp; credentials</p>
              <h2>Formal study and continued learning.</h2>
            </div>
          </div>
          <div className='resume-education-grid'>
            <article className='resume-card'>
              <h3>Education</h3>
              <ul className='resume-detail-list'>
                {EDUCATION.map((entry) => <li key={entry}>{entry}</li>)}
              </ul>
            </article>
            <article className='resume-card'>
              <h3>Certifications &amp; programs</h3>
              <ul className='resume-detail-list'>
                {CERTIFICATIONS.map((entry) => <li key={entry}>{entry}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section id='get-in-touch' className='resume-section get-in-touch'>
          <div>
            <p className='section-label'>Get in touch</p>
            <h2>I&apos;m interested in work that demands technical expertise, strategic thinking, and a multidisciplinary perspective.</h2>
          </div>
          <div>
            <p>If you think there might be a fit, please reach out. I&apos;m happy to share more about my experience, approach, and perspective.</p>
            <button onClick={() => window.open('https://www.linkedin.com/in/ryan-r-campbell/', '_blank')}>
              Get in touch on LinkedIn
            </button>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}

export default ResumePage
