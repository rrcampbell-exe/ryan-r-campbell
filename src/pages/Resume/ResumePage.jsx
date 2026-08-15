import { PageWrapper, SubNav } from '../../components'
import { useDocumentTitle, useMetaTags, useScrollToHash } from '../../hooks'
import { AT_A_GLANCE, COMPETENCY_GROUPS, IMPACT_METRICS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from './resume-data'

const ResumePage = () => {
  useDocumentTitle('Resume | Ryan R. Campbell')
  useScrollToHash()
  useMetaTags([
    { type: 'name', name: 'description', content: 'Evergreen resume for Ryan R. Campbell, a technical leader and software engineer with experience across technology, education, experimentation, communication, and organizational enablement.' },
    { type: 'property', name: 'og:title', content: 'Resume | Ryan R. Campbell' },
    { type: 'property', name: 'og:description', content: 'Technical leader and software engineer with experience across technical delivery, product thinking, education, entrepreneurship, and organizational enablement.' },
  ])

  return (
    <PageWrapper pageTitle='resume'>
      <SubNav sections={['competencies', 'selected-impact', 'experience', 'education', 'get-in-touch']} />
      <main className='Resume-page'>
        <section className='resume-hero'>
          <div className='resume-hero__copy'>
            <p className='section-label'>Resume</p>
            <h1>Technologist. Strategist. Engineer.
            </h1>
            <p className='resume-hero__lede'>
              Technical leader and software engineer with 15+ years of experience working across technology, experimentation, education, communication, and organizational change.
            </p>
            <p className='resume-hero__body'>
              With a career spanning software engineering, education, publishing, entrepreneurship, and organizational change, I build systems, explore ambiguous problems, and help people make sense of complex ideas.
            </p>
          </div>

          <aside className='resume-hero__panel'>
            <p className='resume-panel__eyebrow'>At a glance</p>
            <ul className='resume-panel__list'>
              {AT_A_GLANCE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section id='competencies' className='resume-section'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Core competencies</p>
              <h2>Technical depth, product thinking, and the range to move ideas from exploration through implementation.</h2>
            </div>
            <p>
              My work connects business goals, technical systems, experiments, and the people who need to use them. AI and
              emerging technology are important areas of expertise alongside software engineering, education, communication,
              and program delivery.
            </p>
          </div>

          <div className='resume-competency-grid'>
            {COMPETENCY_GROUPS.map((group) => (
              <article className='resume-card' key={group.title}>
                <h3>{group.title}</h3>
                <ul className='resume-chip-list'>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id='selected-impact' className='resume-section resume-section--band'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Selected impact</p>
              <h2>A career connecting technology, experimentation, communication, and organizational change.</h2>
            </div>
            <p>
              The work spans enterprise platforms, mentorship, publishing, education, and product experimentation. These
              measures provide a quick view of the scale and variety of that work.
            </p>
          </div>

          <div className='resume-impact-grid'>
            {IMPACT_METRICS.map((metric) => (
              <article className='resume-impact-card' key={metric.label}>
                <p className='resume-impact-card__value'>{metric.value}</p>
                <p className='resume-impact-card__label'>{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='experience' className='resume-section'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Experience</p>
              <h2>Technology, education, entrepreneurship, and operations.</h2>
            </div>
            <p>
              The throughline is making complicated work clearer and more useful — building products, platforms, programs,
              and workflows while helping the people around them adopt and improve them.
            </p>
          </div>

          <div className='resume-experience-list'>
            {EXPERIENCE.map((role) => (
              <article className='resume-role' key={`${role.company}-${role.period}`}>
                <div className='resume-role__header'>
                  <div>
                    <h3>{role.title}</h3>
                    <p className='resume-role__company'>{role.company}</p>
                  </div>
                  <div className='resume-role__meta'>
                    <span>{role.period}</span>
                    <span>{role.location}</span>
                  </div>
                </div>

                <p className='resume-role__emphasis'>{role.emphasis}</p>

                <ul className='resume-role__tags' aria-label={`${role.company} focus areas`}>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <ul className='resume-role__bullets'>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id='education' className='resume-section resume-section--education'>
          <div className='resume-section__heading-row'>
            <div>
              <p className='section-label'>Education & certifications</p>
              <h2>Language, technical practice, and learning across disciplines.</h2>
            </div>
            <p>
              That mix shows up directly in the work: translating technical systems across teams, designing learning
              experiences, enabling adoption, and building with both rigor and clarity.
            </p>
          </div>

          <div className='resume-education-grid'>
            <article className='resume-card'>
              <h3>Education</h3>
              <ul className='resume-detail-list'>
                {EDUCATION.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </article>

            <article className='resume-card'>
              <h3>Certifications & programs</h3>
              <ul className='resume-detail-list'>
                {CERTIFICATIONS.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
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