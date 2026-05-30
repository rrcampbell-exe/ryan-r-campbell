import React from 'react'
import { PageWrapper, SubNav } from '../../components'
import { useDocumentTitle, useScrollToHash } from '../../hooks'

const PRINCIPLES = [
  {
    heading: 'Start with a real problem',
    body: 'AI on its own is not a strategy. It is a toolset. By beginning with definable problems, we ensure we\'re putting those tools to their best use instead of those cited in trend reports or vendor demos.'
  },
  {
    heading: 'AI is a force multiplier',
    body: 'Strong engineering habits, healthy team dynamics, and clear standards are amplified by AI—as are weak practices, messy systems, and cultural shortcomings.'
  },
  {
    heading: 'Experimentation should be strategic',
    body: 'Curiosity matters, but not every experiment deserves the same weight. Teams need room to explore while staying anchored to a clear hypothesis, a bounded problem, and an honest measure of value.'
  },
  {
    heading: 'Enablement is a human problem first',
    body: 'AI adoption lives or dies on trust. People need practical guidance, a shared operating model, and proof that these tools can reduce toil without eroding judgment, craft, or ownership.'
  }
]

const OPERATING_MODEL = [
  {
    heading: 'Build a platform, not a pile of demos',
    body: 'Centralized platforms, curated tools, and shared patterns make adoption safer and more durable than isolated experiments scattered across teams.'
  },
  {
    heading: 'Reward useful curiosity',
    body: 'Give ICs room to test ideas, then ask those ideas to justify themselves. Good experiments teach you something concrete, even when the answer is no.'
  },
  {
    heading: 'Reduce developer toil',
    body: 'The fastest way to convey the benefits of AI is to remove repetitive, low-leverage work so engineers can spend more time on design, judgment, collaboration, and user impact.'
  },
  {
    heading: 'Measure both outcomes and sentiment',
    body: 'Track adoption, quality, and throughput, but also listen for hesitation, confusion, and trust gaps. Quantitative and qualitative signals belong in the same conversation.'
  }
]

const PRACTICES = [
  'Frame AI efforts around explicit hypotheses and revisit them quickly.',
  'Integrate AI into daily workflows instead of isolating it as a novelty.',
  'Use shared guardrails so teams can move faster without guessing where the edges are.',
  'Study logs, real user behavior, and developer pain points to find the next worthwhile use case.',
  'Scale only the experiments that demonstrably improve quality, speed, or user experience.'
]

const AIEnablement = () => {
  useDocumentTitle('Thoughtful AI Enablement | Ryan R. Campbell')
  useScrollToHash()

  return (
    <PageWrapper pageTitle='thoughtful AI enablement'>
      <SubNav sections={['why-thoughtful-ai', 'core-beliefs', 'operating-model', 'in-practice', 'where-i-come-from']} />
      <main className='AI-landing'>
        <section id='why-thoughtful-ai' className='ai-hero'>
          <div className='ai-hero__copy'>
            <p className='section-label'>AI philosophy</p>
            <h1>Thoughtful AI enablement begins with judgment, not hype.</h1>
            <p className='ai-lead'>
              Organizations benefit most from AI when they treat it as a disciplined means of solving real problems,
              not as a performance of innovation. The goal is to make better
              decisions, reduce waste, and help people do higher-leverage work—not to chase trends or check boxes. 
            </p>
            <p className='ai-lead'>
              This requires more than tools. It requires strategy, trust, workflow design, and a culture willing to learn in
              public. When done well, AI becomes a force multiplier for technical craft and organizational clarity. When done poorly, it
              becomes an accelerant for confusion, poor process, and cultural rot.
            </p>
          </div>

          <aside className='ai-hero__panel'>
            <p className='ai-panel__eyebrow'>What I optimize for</p>
            <ul className='ai-panel__list'>
              <li>Definable problems over vague ambition</li>
              <li>Shared systems over one-off wins</li>
              <li>Measured experimentation over trend chasing</li>
              <li>Human judgment over automation theater</li>
            </ul>
          </aside>
        </section>

        <section id='core-beliefs' className='ai-section'>
          <p className='section-label'>Core beliefs</p>
          <div className='ai-section__heading-row'>
            <h2>My philosophy on AI is simple: Be curious. Be strategic. Be honest about what works.</h2>
            <p>
              One-off digital parlor tricks are insufficient. The real challenge is creating the conditions under
              which teams can apply AI well, learn from the results, and iterate as needed rather than for the sake of doing so.
            </p>
          </div>

          <div className='ai-principles-grid'>
            {PRINCIPLES.map((principle) => (
              <article className='ai-card grow-on-hover' key={principle.heading}>
                <h3>{principle.heading}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='operating-model' className='ai-section ai-section--band'>
          <p className='section-label'>Operating model</p>
          <div className='ai-section__heading-row'>
            <h2>How organizations position themselves to benefit from AI</h2>
            <p>
              The organizations that will benefit most are not necessarily the ones making the loudest announcements. They are
              the ones building shared enablement, creating feedback loops, and aligning experiments to real operational needs.
            </p>
          </div>

          <div className='ai-operating-grid'>
            {OPERATING_MODEL.map((item, index) => (
              <article className='ai-operating-card' key={item.heading}>
                <span className='ai-operating-card__index'>0{index + 1}</span>
                <h3>{item.heading}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id='in-practice' className='ai-section'>
          <p className='section-label'>In practice</p>
          <div className='ai-section__heading-row'>
            <h2>What good enablement looks like day to day</h2>
            <p>
              For me, this means treating AI adoption like any other worthwhile engineering effort: identify the problem,
              form a hypothesis, test it in context, measure the result, and refine what deserves to scale.
            </p>
          </div>

          <div className='ai-practice'>
            <div className='ai-practice__rail' aria-hidden='true' />
            <ol className='ai-practice__list'>
              {PRACTICES.map((practice) => (
                <li className='ai-practice__item' key={practice}>
                  <p>{practice}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id='where-i-come-from' className='ai-section ai-section--quote'>
          <p className='section-label'>Where I come from</p>
          <div className='ai-origin'>
            <div className='ai-origin__copy'>
              <h2>This perspective is shaped by building AI enablement for engineers at an enterprise level, not just talking about it.</h2>
              <p>
                In my day-to-day work, I have focused on the systems around adoption as much as the tools themselves, including platform
                strategy, developer experience, content design, experimentation, and organizational communication. That work has
                only reinforced what I long suspected: the best AI programs are less about spectacle and more about thoughtful adoption
                and replicable results.
              </p>
              <p>
                So long as one exercises a healthy dose of skepticism about the hype, AI can remove friction, elevate judgment, 
                and improve outcomes for builders and end users. Hype alone tends to obscure the harder, more valuable work of enablement,
                which is what will separate the organizations that will benefit most from AI from those that will merely talk about it.
              </p>
            </div>

            <div className='ai-origin__highlight'>
              <p>
                Thoughtful AI enablement is about technical architecture, change management, and—most importantly—cultural invitation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}

export default AIEnablement