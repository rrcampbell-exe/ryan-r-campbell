import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Books, Builds, BlogTeaser, PageWrapper, Boasts } from '../../components'
import ReactModal from 'react-modal'
import { Users, Zap, Award, BrainCircuit } from 'lucide-react'

const METRICS = [
  { value: '1,200+', label: 'Weekly views on enterprise AI Hub', icon: BrainCircuit },
  { value: 'Most Innovative', label: 'Developer Experience Hackathon', icon: Zap },
  { value: '2×', label: 'International Book Awards Finalist', icon: Award },
]

const CAPABILITIES = [
  {
    id: 'ai',
    heading: 'AI Enablement & Developer Experience',
    body: "Building the tools and content that help engineers move faster and smarter. Architected Northwestern Mutual's enterprise AI Hub — a Skills Library and MCP Registry serving 1,200+ weekly users and the author of the platform's single most-downloaded skill.",
  },
  {
    id: 'platform',
    heading: 'Frontend Architecture & Platform',
    body: 'React component architecture across 12+ microapps in an enterprise microfrontend ecosystem. GraphQL and Apollo Federation migration. High test coverage in complex, distributed codebases.',
  },
  {
    id: 'leadership',
    heading: 'Technical Leadership & Communication',
    body: "Only SE III selected as a mentor in engineering mentorship program. Chaired the engineering mentee engagement committee. Aspiring Leaders cohort. Presented to CEO on AI enablement impact.",
  },
]

const GeneralLanding = ({ pageNotFound }) => {
  const navigate = useNavigate()

  return (
    <PageWrapper pageTitle='Software Engineer & Author'>

      <main className='General-landing'>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section id='about' className='gl-hero'>
          <div className='gl-hero__content'>
            <p className='gl-hero__eyebrow'>Software Engineer · Author · AI Architect</p>
            <h1 className='gl-hero__name'>Ryan R. Campbell</h1>
            <p className='gl-hero__tagline'>
              Strategic engineer driving thoughtful AI adoption, developer experience, and platform
              modernization at enterprise scale — and an internationally recognized author of fiction.
            </p>
            <div className='gl-hero__ctas'>
              <a href='#impact' className='btn-primary'>See my work</a>
              <a href='#contact' className='btn-secondary'>Get in touch</a>
            </div>
          </div>
          <div className='gl-hero__image'>
            <img
              src='./2026-ryan-r-campbell-website-headshot.jpg'
              alt='Ryan R. Campbell — software engineer and author'
              width='1199'
              height='1312'
              loading='eager'              className='gl-hero__photo'            />
          </div>
        </section>

        {/* ── METRICS STRIP ────────────────────────────────────── */}
        <section className='gl-metrics' aria-label='Key achievements'>
          {METRICS.map((m, i) => (
            <React.Fragment key={m.value}>
              {i > 0 && <div className='gl-metrics__divider' aria-hidden='true' />}
              <div className='gl-metrics__item'>
                <div className='gl-metrics__icon' aria-hidden='true'><m.icon /></div>
                <div className='gl-metrics__text'>
                  <span className='gl-metrics__value'>{m.value}</span>
                  <span className='gl-metrics__label'>{m.label}</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </section>

        {/* ── CAPABILITIES ──────────────────────────────────────── */}
        <section id='capabilities' className='gl-capabilities'>
          <p className='section-label'>What I do</p>
          <p className='gl-capabilities__intro'>
            Engineering is communication — between systems, teams, and ideas. I build the technology,
            the processes, and the people infrastructure that makes organizations move faster.
          </p>
          <div className='gl-capabilities__grid'>
            {CAPABILITIES.map((cap) => (
              <article className='gl-capability-card' key={cap.id}>
                <div className='gl-capability-card__accent' aria-hidden='true' />
                <h3>{cap.heading}</h3>
                <p>{cap.body}</p>
              </article>
            ))}
          </div>
          <div className='gl-capabilities__cta'>
            <p>
              Want the full picture? Learn more about my thoughts on AI adoption, organizational enablement,
              and building systems that help teams use these tools well.
            </p>
            <Link to='/ai' className='btn-secondary'>Read my AI philosophy</Link>
          </div>
        </section>

        {/* ── SELECTED IMPACT ───────────────────────────────────── */}
        <section id='impact' className='gl-impact'>
          <p className='section-label'>Selected impact</p>
          <Boasts />
        </section>

        {/* ── PROJECTS ─────────────────────────────────────────── */}
        <section id='projects' className='gl-projects'>
          <p className='section-label'>Selected projects</p>
          <Builds buildsToDisplay={3} />
          <div className='gl-section-link-row'>
            <a
              href='https://github.com/rrcampbell-exe'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-secondary'
            >
              View more on GitHub
            </a>
          </div>
        </section>

        {/* ── WRITING ──────────────────────────────────────────── */}
        <section id='writing' className='gl-writing'>
          <p className='section-label'>Writing</p>
          <div className='gl-writing__grid'>
            <div className='gl-writing__posts'>
              <BlogTeaser postsQtyToDisplay={2} postsPage={1} isGeneralLandingPage />
              <div className='gl-section-link-row'>
                <a
                  href='https://ryanrcampbell.substack.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-secondary'
                >
                  Read on Substack
                </a>
              </div>
            </div>
            <div className='gl-writing__books'>
              <Books hideEmpathy />
            </div>
          </div>
        </section>

      </main>

      {/* 404 modal — kept intact */}
      <ReactModal
        isOpen={pageNotFound}
        onRequestClose={() => navigate('/')}
      >
        <div className='modal-content'>
          <h2>Welcome to the new site!</h2>
          <div className='image-container'>
            <img src='./2024-ryan-r-campbell-with-hat-on-outdoors.jpg' alt='' />
            <img src='./round-favicon-2024-ryan-r-campbell.png' alt='' />
            <img src='./ryan-r-campbell-bookshelf-background.jpg' alt='' />
          </div>
          <h3>But we couldn&apos;t find the page you were looking for...</h3>
          <p>It might have been moved as part of a recent site migration.</p>
          <p>
            <Link to='/'>homepage</Link> | <Link to='/contact'>contact</Link>
          </p>
        </div>
      </ReactModal>
    </PageWrapper>
  )
}

export default GeneralLanding
