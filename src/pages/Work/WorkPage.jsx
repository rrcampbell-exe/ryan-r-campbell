import React from 'react'
import { Link } from 'react-router-dom'
import { Award, BrainCircuit, Zap } from 'lucide-react'
import { Builds, Boasts, PageWrapper } from '../../components'
import { AT_A_GLANCE } from '../Resume/resume-data'

const METRICS = [
  { value: '1,500+', label: 'Weekly views on the enterprise AI Hub', icon: BrainCircuit },
  { value: 'Most Innovative', label: 'Developer Experience Hackathon', icon: Zap },
  { value: '2×', label: 'International Book Awards Finalist', icon: Award },
]

const CAPABILITIES = [
  ['Technical Leadership', 'Understanding how things work and making them work better defines what I do: building software, shaping technical architecture, and leading initiatives that span systems, teams, and organizations, from enterprise platforms to emerging technologies.'],
  ['Product & Experimentation', "I thrive in the messy space between \"something isn't working\" and \"here's a better way.\" Experimentation, feedback, prototyping, and iteration lead us to better answers."],
  ['Education & Communication', "Making complicated things easier to understand has been the beating heart of my career. I care about clarity without flattening the complexity that makes an idea interesting."],
  ['Organizational Enablement', "Technology doesn't change organizations. People do. I help teams navigate the space between a new idea and the people who have to make it real."],
]

const WorkPage = () => (
  <PageWrapper pageTitle='work'>
    <main className='Work-page'>
      <section className='work-hero'>
        <div className='work-hero__copy'>
          <p className='section-label'>Professional work</p>
          <h1>Technology, strategy, and the work of making ideas real.</h1>
          <p className='work-hero__lede'>I build systems, explore ambiguous problems, and help people make sense of complex ideas across technical, creative, and organizational domains.</p>
          <div className='work-hero__actions'>
            <a href='/resume' className='btn-primary'>View my resume</a>
            <Link to='/contact' className='btn-secondary'>Get in touch</Link>
          </div>
        </div>
        <aside className='work-hero__panel'>
          <p className='work-panel__eyebrow'>At a glance</p>
          <ul className='work-panel__list'>
            {AT_A_GLANCE.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <Link to='/resume' className='work-panel__link'>See the full resume →</Link>
        </aside>
      </section>

      <section className='work-metrics' aria-label='Selected professional metrics'>
        {METRICS.map(({ value, label, icon: Icon }, index) => (
          <React.Fragment key={label}>
            {index > 0 && <div className='work-metrics__divider' aria-hidden='true' />}
            <article className='work-metric'>
              <div className='work-metric__icon' aria-hidden='true'><Icon /></div>
              <div className='work-metric__text'>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </article>
          </React.Fragment>
        ))}
      </section>

      <section className='work-section'>
        <div className='work-section__heading'>
          <div><p className='section-label'>What I do</p><h2>Technical depth with a human point of view.</h2></div>
          <p>My work connects business goals, technical systems, experiments, and the people who drive them.</p>
        </div>
        <div className='work-capabilities'>
          {CAPABILITIES.map(([heading, body]) => <article key={heading}><h3>{heading}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className='work-section work-section--band'>
        <div className='work-section__heading'>
          <div><p className='section-label'>Selected impact</p><h2>The work is varied. The underlying questions are often the same.</h2></div>
          <p>Technology, communication, education, and experimentation are most useful when they help people move with more clarity.</p>
        </div>
        <Boasts />
      </section>

      <section className='work-section'>
        <div className='work-section__heading'>
          <div><p className='section-label'>Selected projects</p><h2>Things I&apos;ve built and helped bring into the world.</h2></div>
          <p>Some projects are software. Others are publications, learning experiences, or experiments in public.</p>
        </div>
        <Builds />
      </section>
    </main>
  </PageWrapper>
)

export default WorkPage