import React from 'react'

const SubNav = ({ sections, tabs, activeTab, onTabChange }) => {
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
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <nav className='SubNav'>
      {sections.map((section) => (
        <div className='section' key={section}>
          <a href={`#${section}`}>
            {section.replace(/-/g, ' ')}
          </a>
        </div>
      ))}
    </nav>
  )
}

export default SubNav
