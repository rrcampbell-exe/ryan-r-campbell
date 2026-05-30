import React, { useState } from 'react'
import { PageWrapper } from '../../components'
import { ShortStory, LongStory } from './AboutContents'

const STORY_OPTIONS = [
  {
    id: 'short',
    label: 'abridged',
    description: 'A quicker pass through the major turns and themes.',
  },
  {
    id: 'long',
    label: 'extended',
    description: 'The full winding path, with every detour intact.',
  },
]

const GeneralAbout = () => {
  const [selectedStory, setSelectedStory] = useState(null)

  const handleSelectStory = (version, shouldScroll = false) => {
    setSelectedStory(version)

    if (shouldScroll && typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        document.getElementById('story-contents')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      })
    }
  }

  return (
    <PageWrapper pageTitle='spinner of yarns'>
      <main className='About'>
        <section className='about-hero'>
          <div className='about-hero__content'>
            <p className='section-label'>About</p>
            <h1>the story so far</h1>
            <p className='about-hero__lede'>
              A career built on curiosity, reinvention, and a stubborn refusal to limit myself to one lane.
            </p>
            <p className='about-hero__body'>
              Rather than move from one title to the next, the throughline is wonder,
              language, creative work, and engineering all braided together.
            </p>

            <div id='tale-selection' className='about-story-selector'>
              <p className='about-story-selector__label'>Choose the shape of the story</p>
              <div className='about-story-selector__controls' role='group' aria-label='Choose story length'>
                {STORY_OPTIONS.map((option) => {
                  const isActive = selectedStory === option.id

                  return (
                    <button
                      key={option.id}
                      type='button'
                      className={['about-story-selector__button', isActive ? 'active' : ''].filter(Boolean).join(' ')}
                      aria-pressed={isActive}
                      onClick={() => handleSelectStory(option.id)}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
              <p className='about-story-selector__note'>
                {selectedStory
                  ? STORY_OPTIONS.find((option) => option.id === selectedStory)?.description
                  : 'Abridged is the quick arc. Extended invites you along the whole winding path.'}
              </p>
            </div>
          </div>

          <div className='about-hero__image'>
            <img
              className='about-hero__photo'
              src='./2024-ryan-r-campbell-with-hat-on-outdoors.jpg'
              alt='Ryan R. Campbell outdoors with a black baseball cap on'
            />
          </div>
        </section>

        {selectedStory
          ? (
            <section id='story-contents' className='about-story-shell'>
              <div className='story-contents'>
                {selectedStory === 'short'
                  ? <ShortStory onSelectStory={handleSelectStory} />
                  : <LongStory />}
              </div>
            </section>
            )
          : null}
      </main>
    </PageWrapper>
  )
}

export default GeneralAbout
