import React, { useState } from 'react'
import { PageWrapper, SubNav, Contact } from '../../components'
import { ShortStory, LongStory } from './AboutContents'

const GeneralAbout = () => {
  const [isShortStory, setIsShortStory] = useState(false)
  const [hasSelectionBeenMade, setHasSelectionBeenMade] = useState(false)

  const handleToggle = (version) => {
    setIsShortStory(version === 'short')
    setHasSelectionBeenMade(true)
  }

  // TODO: write two versions, populate them dynamically
  // TODO: ensure page sections are updated dynamically as well
  // TODO: when switching between versions, fade out contents first before fading in others

  return (
    <PageWrapper pageTitle='spinner of yarns'>
      <main className='About'>
        <div id='tale-selection' className={hasSelectionBeenMade ? 'display-none' : ''}>
          <h3>Which version would you prefer?</h3>
          <div className={`options-container ${hasSelectionBeenMade ? 'selection-made-container' : ''}`}>
            <div className={`${!hasSelectionBeenMade ? '' : isShortStory ? 'active' : 'inactive'} ${hasSelectionBeenMade ? 'selection-made' : ''}`} onClick={() => handleToggle('short')}>abridged</div>
            <div className={`${!hasSelectionBeenMade ? '' : !isShortStory ? 'active' : 'inactive'} ${hasSelectionBeenMade ? 'selection-made' : ''}`} onClick={() => handleToggle('long')}>extended</div>
          </div>
        </div>
        {hasSelectionBeenMade &&
          <div className={hasSelectionBeenMade ? 'story-contents' : ''}>
            {isShortStory ? <ShortStory /> : <LongStory />}
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
