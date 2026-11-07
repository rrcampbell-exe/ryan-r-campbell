import { useRef } from 'react'
import PropTypes from 'prop-types'

const SECTION_LABELS = {
  'selected-impact': 'Selected work',
  competencies: 'Technical skills',
  'additional-experience': 'Additional experience',
  education: 'Education & credentials',
  'get-in-touch': 'Get in touch',
  'featured-in': 'Featured in',
  'and-ampersand': 'And ampersand',
  'why-thoughtful-ai': 'Why thoughtful AI',
  'core-beliefs': 'Core beliefs',
  'operating-model': 'Operating model',
  'in-practice': 'In practice',
  'where-i-come-from': 'Where I come from',
}

const getSectionLabel = (section) =>
  SECTION_LABELS[section] || section.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())

const SubNav = ({ sections, tabs, activeTab, onTabChange }) => {
  const disclosureRef = useRef(null)

  if (tabs) {
    return (
      <nav className='SubNav' aria-label='Podcast selection'>
        <div className='SubNav__tabs' role='tablist'>
          {tabs.map(({ id, label }) => (
            <button
              className='header-nav__link'
              id={`${id}-tab`}
              key={id}
              onClick={() => onTabChange(id)}
              role='tab'
              aria-controls={`${id}-panel`}
              aria-selected={activeTab === id}
              tabIndex={activeTab === id ? 0 : -1}
              type='button'
              onKeyDown={(event) => {
                if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

                event.preventDefault()
                const currentIndex = tabs.findIndex((tab) => tab.id === id)
                const direction = event.key === 'ArrowRight' ? 1 : -1
                const nextIndex = (currentIndex + direction + tabs.length) % tabs.length
                const nextTab = tabs[nextIndex]

                onTabChange(nextTab.id)
                document.getElementById(`${nextTab.id}-tab`)?.focus()
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    )
  }

  const closeDisclosure = () => {
    if (disclosureRef.current?.open) {
      disclosureRef.current.open = false
      disclosureRef.current.querySelector('summary')?.focus()
    }
  }

  return (
    <nav className='SubNav SubNav--sections' aria-label='On this page'>
      <div className='SubNav__desktop-links'>
        {sections.map((section) => (
          <div className='section' key={section}>
            <a href={`#${section}`} onClick={closeDisclosure}>{getSectionLabel(section)}</a>
          </div>
        ))}
      </div>
      <details className='SubNav__disclosure' ref={disclosureRef}>
        <summary>On this page</summary>
        <div className='SubNav__mobile-links'>
          {sections.map((section) => (
            <a href={`#${section}`} key={section} onClick={closeDisclosure}>
              {getSectionLabel(section)}
            </a>
          ))}
        </div>
      </details>
    </nav>
  )
}

export default SubNav

SubNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string),
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  activeTab: PropTypes.string,
  onTabChange: PropTypes.func,
}
