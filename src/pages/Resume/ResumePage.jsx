import React from 'react'
import { PageWrapper, SubNav } from '../../components'
import { useDocumentTitle, useMetaTags, useScrollToHash } from '../../hooks'
import { AT_A_GLANCE, COMPETENCY_GROUPS, IMPACT_METRICS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from './resume-data'

const ResumePage = () => {
  useDocumentTitle('Resume | Ryan R. Campbell')
  useScrollToHash()
  useMetaTags([
    { type: 'name', name: 'description', content: 'Recruiter-friendly resume for Ryan R. Campbell, covering software engineering leadership, AI enablement, and platform delivery experience.' },
    { type: 'property', name: 'og:title', content: 'Resume | Ryan R. Campbell' },
    { type: 'property', name: 'og:description', content: 'Senior software engineer and engineering leader with experience in AI enablement, frontend systems, and platform delivery.' },
  ])

  return (
    <PageWrapper pageTitle='resume'>
      <SubNav sections={['competencies', 'selected-impact', 'experience', 'education']} />
      <main className='Resume-page'>
        <section className='resume-hero'>
          <div className='resume-hero__copy'>
            <p className='section-label'>Resume</p>
            <h1>Leader. Engineer.
            </h1>
            <p className='resume-hero__lede'>
              10+ years of experience delivering cross-functional technical, operational, and creative solutions in enterprise software, entrepreneurship, and publishing.
            </p>
            <p className='resume-hero__body'>
              Proven track record of driving enterprise AI adoption, standardizing engineering practices, and delivering
              technical initiatives spanning frontend architecture, developer experience, and platform enablement.
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
              <h2>Built for teams that need technical depth, practical AI fluency, and organizational range.</h2>
            </div>
            <p>
              Strongest in React, TypeScript, GraphQL, Kubernetes, and modern DevOps ecosystems, with a sustained focus on
              engineering productivity, leadership communication, and durable platform systems.
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
              <h2>Recent work has centered on scaled enablement, reusable systems, and measurable adoption.</h2>
            </div>
            <p>
              The most compelling outcomes combine platform usage, engineering leverage, and executive trust. These metrics are the shortest path through the work.
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
              <h2>Roles spanning enterprise software, creative entrepreneurship, and operations design.</h2>
            </div>
            <p>
              The throughline is systems thinking: building products, platforms, and workflows that improve clarity, quality, and operational leverage.
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
              <h2>Formal study in language and communication, paired with leadership and technical certification work.</h2>
            </div>
            <p>
              That mix shows up directly in the work: translating technical systems across teams, enabling adoption, and building with both rigor and clarity.
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
      </main>
    </PageWrapper>
  )
}

export default ResumePage