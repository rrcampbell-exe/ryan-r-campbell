import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Books, Builds, BlogTeaser, PageWrapper, Boasts } from '../../components'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import { Zap, Award, BrainCircuit } from 'lucide-react'

const METRICS = [
  { value: '1,500+', label: 'Weekly views on the enterprise AI Hub', icon: BrainCircuit },
  { value: 'Most Innovative', label: 'Developer Experience Hackathon', icon: Zap },
  { value: '2×', label: 'International Book Awards Finalist', icon: Award },
]

const CAPABILITIES = [
  {
    id: 'technical-leadership',
    heading: 'Technical Leadership',
    body: "Understanding how things work and making them work better defines what I do: building software, shaping technical architecture, and leading initiatives that span systems, teams, and organizations, from enterprise platforms to emerging technologies.",
  },
  {
    id: 'product-experimentation',
    heading: 'Product & Experimentation',
    body: "I thrive in the messy space between \"something isn't working\" and \"here's a better way.\" Experimentation, feedback, prototyping, and iteration lead us to better answers, clarifying which ideas deserve attention—and which are better left behind.",
  },
  {
    id: 'education-communication',
    heading: 'Education & Communication',
    body: "Making complicated things easier to understand has been the beating heart of my career. Whether I'm teaching, writing, publishing, designing workshops, or creating learning experiences for unique audiences, I care about clarity without flattening the complexity that makes an idea interesting.",
  },
  {
    id: 'organizational-enablement',
    heading: 'Organizational Enablement',
    body: "Technology doesn't change organizations. People do. I help teams navigate the space between a new idea and the people who have to make it real—through mentorship, collaboration, communication, and thoughtful adoption.",
  },
]

const GeneralLanding = ({ pageNotFound }) => {
  const navigate = useNavigate()

  return (
    <PageWrapper pageTitle='Technologist, Strategist & Author'>

      <main className='General-landing'>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section id='about' className='gl-hero'>
          <div className='gl-hero__content'>
            <p className='gl-hero__eyebrow'>Technologist · Strategist · Author</p>
            <h1 className='gl-hero__name'>Ryan R. Campbell</h1>
            <p className='gl-hero__tagline'>
              From enabling enterprise technology and AI adoption to authoring internationally recognized 
              fiction, my work is driven by curiosity, experimentation, and a fascination with making 
              complex ideas easier to understand.
            </p>
            <div className='gl-hero__ctas'>
              <a href='/resume' className='btn-primary'>View my resume</a>
              <a href='#impact' className='btn-secondary'>See my work</a>
              <a href='/contact' className='btn-secondary'>Get in touch</a>
            </div>
          </div>
          <div className='gl-hero__image'>
            <img
              src='./2026-ryan-r-campbell-website-headshot.jpg'
              alt='Ryan R. Campbell — technical leader, software engineer, and author'
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
            Systems, people, ideas, and possibilities — the boundaries between these blend best when connected by thoughtful communication. I build the technology, explore the 
            questions, and create the conditions for meaningful exchange across all frontiers.
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
              AI has become one of the most interesting places where these threads converge. What happens when powerful technology meets real people, real organizations, and imperfect 
              systems? The answer depends on adopting it without losing sight of good judgment, trust, or the humans doing the work.
            </p>
            <Link to='/ai' className='btn-secondary'>Read my AI philosophy</Link>
          </div>
        </section>

        {/* ── SELECTED IMPACT ───────────────────────────────────── */}
        <section id='impact' className='gl-impact'>
          <p className='section-label'>Selected impact</p>
          <p className='gl-impact__intro'>
            The work is varied. The underlying questions are often the same.
          </p>
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
              <iframe
                className='gl-writing__embed'
                src='https://www.r-on-everything.com/embed?transparent=1&light=1'
                width='480'
                height='320'
                style={{ border: '0', background: 'transparent' }}
                frameBorder='0'
                scrolling='no'
              />
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

GeneralLanding.propTypes = {
  pageNotFound: PropTypes.bool,
}
