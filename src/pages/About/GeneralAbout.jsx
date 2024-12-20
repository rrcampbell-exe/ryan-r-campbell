import React, { useState } from 'react'
import { PageWrapper, Contact } from '../../components'
import { ShortStory, LongStory } from './AboutContents'

const GeneralAbout = () => {
  const [isShortStory, setIsShortStory] = useState(false)
  const [hasSelectionBeenMade, setHasSelectionBeenMade] = useState(false)

  const handleToggle = (version) => {
    setIsShortStory(version === 'short')
    setHasSelectionBeenMade(true)
  }

  return (
    <PageWrapper pageTitle='spinner of yarns'>
      <main className='About'>
        <div className='about-container'>
          <img className='about-img' src='./2024-ryan-r-campbell-with-hat-on-outdoors.jpg' alt='Ryan R. Campbell outdoors with a black baseball cap on' />
          <h2>the story (so far)</h2>
        </div>
        <div id='tale-selection' className={hasSelectionBeenMade ? 'display-none' : ''}>
          <h3>Which version would you prefer?</h3>
          <div className={`options-container ${hasSelectionBeenMade ? 'selection-made-container' : ''}`}>
            <div className={`${!hasSelectionBeenMade ? '' : isShortStory ? 'active' : 'inactive'} ${hasSelectionBeenMade ? 'selection-made' : ''}`} onClick={() => handleToggle('short')}>abridged</div>
            <div className={`${!hasSelectionBeenMade ? '' : !isShortStory ? 'active' : 'inactive'} ${hasSelectionBeenMade ? 'selection-made' : ''}`} onClick={() => handleToggle('long')}>extended</div>
          </div>
        </div>
        {hasSelectionBeenMade &&
          <div className={hasSelectionBeenMade ? 'story-contents' : ''}>
            {isShortStory ? <ShortStory setIsShortStory={setIsShortStory} /> : <LongStory />}
          </div>
        }
      </main>
      <div id='contact' className='shadow-bg-main-accent section-wrapper'>
        <h2>contact</h2>
        <Contact />
      </div>
    </PageWrapper>
  )
}

export default GeneralAbout
