import { Link } from 'react-router-dom'
import { Builds, PageWrapper } from '../../components'
import { otherProjects, publicProjects } from '../../constants'
import { useDocumentTitle, useMetaTags } from '../../hooks'

const SOFTWARE_AND_PRODUCT_STORIES = [
  {
    id: 'authenticated-client-redesign',
    title: 'Redesigning authenticated client experiences',
    description: 'I represent Engineering on redesigns of the authenticated insurance landing page and document experience. With Product, Design, and Architecture, I clarify requirements and work through technical tradeoffs.',
  },
  {
    id: 'shared-react-components',
    title: 'Shared React components',
    description: 'I built React components based on our design system so teams could reuse the same interface patterns across more than a dozen client applications.',
  },
  {
    id: 'money-movement-application-migration',
    title: 'Money-movement application migration',
    description: 'I led a money-movement application migration to AWS S3 static hosting, coordinating the React frontend, converting a Node.js API to a GraphQL API, and hosting changes across more than a dozen tickets.',
  },
  {
    id: 'eight-repositories-to-one-monorepo',
    title: 'Eight repositories to one monorepo',
    description: 'I consolidated eight repositories supporting seven applications into one monorepo. By creating and using a bespoke AI migration skill during the migration, I accelerated the migration work of other engineers involved in the process.',
  },
]

const AI_ADOPTION_AND_TEACHING_STORIES = [
  {
    id: 'ai-adoption-survey',
    title: 'How engineers were using AI',
    description: 'I led a survey to learn where AI was helping engineers and what made it harder to use. I shared findings and recommendations with senior leaders, including where people struggled to find tools, trust outputs, or fit them into their workflows.',
  },
  {
    id: 'internal-ai-hub',
    title: 'Internal AI Hub',
    description: 'I led the first implementation of an internal hub where engineers can find and share AI workflows. I helped build the Skills Library and MCP Registry and wrote reusable engineering workflows.',
    link: '/ai',
    linkText: 'Read the AI enablement essay',
  },
  {
    id: 'designer-ai-workshops',
    title: 'AI workshops for designers',
    description: 'I designed and taught three workshops for nearly 100 UX/UI designers and design managers on using GitHub Copilot and Figma MCP in VS Code.',
  },
]

const BUSINESS_AND_WRITING_STORIES = [
  {
    id: 'kyd-candle-co',
    title: 'KYD Candle Co.',
    description: 'Customer feedback and prototype testing helped us decide what to sell. I co-founded the business and ran operations, including the online store and fulfillment. We filled 688 orders and generated nearly $20,000 in about 18 months.',
  },
  {
    id: 'writescast-network',
    title: 'Writing, publishing, and teaching',
    description: 'I founded the Writescast Network and produced more than 120 episodes. I publish books and have taught writing workshops for UW Continuing Studies and writers’ conferences.',
  },
]

const WorkPage = () => {
  useDocumentTitle('Selected Work | Ryan R. Campbell')
  useMetaTags([
    { type: 'name', name: 'description', content: 'Selected work by Ryan R. Campbell across client software, APIs, AI adoption, workshops, independent business, and public projects.' },
    { type: 'property', name: 'og:title', content: 'Selected Work | Ryan R. Campbell' },
    { type: 'property', name: 'og:description', content: 'Examples of software and product work, AI adoption research and teaching, business ownership, and public projects.' },
    { type: 'property', name: 'twitter:title', content: 'Selected Work | Ryan R. Campbell' },
    { type: 'property', name: 'twitter:description', content: 'Examples of software and product work, AI adoption research and teaching, business ownership, and public projects.' },
  ])

  return (
    <PageWrapper pageTitle='engineer | problem-solver | communicator'>
      <main id='main-content' tabIndex={-1} className='Work-page'>
        <section className='work-hero'>
          <div className='work-hero__copy'>
            <p className='section-label'>Work</p>
            <h1>Selected work</h1>
            <div className='work-hero__actions'>
              <Link to='/resume' className='btn-primary'>View résumé</Link>
              <Link to='/contact' className='btn-secondary'>Contact</Link>
            </div>
          </div>
        </section>

        <section id='software-and-product' className='work-section'>
          <div className='work-section__heading'>
            <div>
              <p className='section-label'>Northwestern Mutual</p>
              <h2>Software and product</h2>
            </div>
            <p>Client experiences, shared interfaces, application migrations, and platform changes.</p>
          </div>
          <div className='work-stories'>
            {SOFTWARE_AND_PRODUCT_STORIES.map((story, index) => (
              <article className='work-story' id={story.id} key={story.id}>
                <p className='work-story__index'>{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  {story.link && <Link to={story.link} className='text-link'>{story.linkText} →</Link>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id='ai-adoption-and-teaching' className='work-section work-section--band'>
          <div className='work-section__heading'>
            <div>
              <p className='section-label'>Northwestern Mutual</p>
              <h2>AI adoption and teaching</h2>
            </div>
            <p>Research, implementation, and practical instruction for teams adopting new tools.</p>
          </div>
          <div className='work-stories'>
            {AI_ADOPTION_AND_TEACHING_STORIES.map((story, index) => (
              <article className='work-story' id={story.id} key={story.id}>
                <p className='work-story__index'>{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  {story.link && <Link to={story.link} className='text-link'>{story.linkText} →</Link>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id='business-and-writing' className='work-section'>
          <div className='work-section__heading'>
            <div>
              <p className='section-label'>Independent work</p>
              <h2>Running a business and teaching writing</h2>
            </div>
            <p>Product decisions, day-to-day operations, publishing, and workshops.</p>
          </div>
          <div className='work-stories'>
            {BUSINESS_AND_WRITING_STORIES.map((story, index) => (
              <article className='work-story' id={story.id} key={story.id}>
                <p className='work-story__index'>{String(index + 1).padStart(2, '0')}</p>
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id='public-projects' className='work-section work-section--band'>
          <div className='work-section__heading'>
            <div>
              <p className='section-label'>Public projects</p>
              <h2>Projects you can explore.</h2>
            </div>
          </div>
          <Builds items={[...publicProjects, ...otherProjects]} />
        </section>
      </main>
    </PageWrapper>
  )
}

export default WorkPage
