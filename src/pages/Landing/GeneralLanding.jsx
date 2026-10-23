import { Link, useNavigate } from 'react-router-dom'
import { Books, BlogTeaser, PageWrapper } from '../../components'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

const GeneralLanding = ({ pageNotFound }) => {
  const navigate = useNavigate()

  return (
    <PageWrapper pageTitle='Technologist, Strategist & Author'>

      <main className='General-landing'>
        <section className='editorial-hero'>
          <div className='editorial-hero__copy'>
            <p className='section-label'>Technologist · Strategist · Author</p>
            <h1>Ryan R. Campbell</h1>
            <p className='editorial-hero__lede'>
              I build systems, explore difficult questions, and make complex ideas easier to understand. My work moves between technology, writing, teaching, and the strange business of being human.
            </p>
            <div className='editorial-hero__actions'>
              <Link to='/podcasts' className='btn-primary'>Listen to the podcast</Link>
              <a href='https://ryanrcampbell.substack.com' target='_blank' rel='noopener noreferrer' className='btn-secondary'>Read the latest essay</a>
              <Link to='/work' className='text-link'>Explore my work →</Link>
            </div>
            <p className='editorial-hero__byline'>R: On Everything is my podcast and blog about artificial intelligence, creativity, culture, consciousness, and curiosity.</p>
          </div>
          <div className='editorial-hero__art'>
            <img src='./2026-ryan-r-campbell-website-headshot.jpg' alt='Ryan R. Campbell — technical leader, software engineer, and author' width='1199' height='1312' loading='eager' />
          </div>
        </section>

        <section className='editorial-feature'>
          <div className='editorial-section-heading'>
            <div>
              <p className='section-label'>R: On Everything</p>
              <h2>A podcast about staying curious.</h2>
            </div>
            <p>Each episode follows a question wherever it leads, looking for the possibilities hiding between easy extremes.</p>
          </div>
          <div className='editorial-feature__grid'>
            <div className='editorial-feature__copy'>
              <h3>R: On Everything</h3>
              <p>In an ever-changing world, staying human requires more than keeping up. It requires paying attention to what&apos;s changing us.</p>
              <p>Blending personal stories, research, and philosophical inquiry, the show asks how we might live, work, and create with greater curiosity and agency.</p>
              <Link to='/podcasts' className='text-link'>Explore the podcast →</Link>
            </div>
            <iframe title='R: On Everything podcast player' src='https://pinecast.com/embed/player_playlist/r-on-everything?color.primary=%230D1B2E&amp;color.secondary=%23152642&amp;color.accent=%231E3552' height='320' frameBorder='0' width='100%' />
          </div>
        </section>

        <section className='editorial-writing'>
          <div className='editorial-section-heading'>
            <div>
              <p className='section-label'>Writing</p>
              <h2>Latest essays and reflections.</h2>
            </div>
          </div>
          <div className='editorial-writing__grid'>
            <BlogTeaser postsQtyToDisplay={2} isGeneralLandingPage />
            <iframe
              className='editorial-writing__embed'
              title='Subscribe to Ryan R. Campbell&apos;s blog'
              src='https://www.r-on-everything.com/embed?transparent=1&light=1'
              width='480'
              height='320'
              frameBorder='0'
              scrolling='no'
            />
          </div>
          <a href='https://ryanrcampbell.substack.com' target='_blank' rel='noopener noreferrer' className='editorial-section-link text-link'>Read everything on Substack →</a>
        </section>

        <section className='editorial-books'>
          <div className='editorial-section-heading'>
            <div>
              <p className='section-label'>Books</p>
              <h2>Stories and the work behind the questions.</h2>
            </div>
          </div>
          <Books hideEmpathy />
          <Link to='/books' className='editorial-section-link text-link'>Visit the author archive →</Link>
        </section>

        <section className='editorial-work-note'>
          <p className='section-label'>Beyond the publication</p>
          <h2>I also build systems, lead technical work, and help organizations make complex ideas useful.</h2>
          <p>For professional background, selected projects, and evidence of impact, visit the work archive.</p>
          <Link to='/work' className='btn-secondary'>Explore my professional work</Link>
          <Link to='/ai' className='text-link'>Read my AI philosophy →</Link>
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
