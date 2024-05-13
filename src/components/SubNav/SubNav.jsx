import React from 'react'

const SubNav = ({ sections }) => {
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
