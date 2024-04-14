import React from 'react'

const SubNav = ({ sections }) => {
  return (
    <nav className='SubNav'>
      {sections.map((section) => (
        <div className='section' >
          <a href={`#${section}`}>
            {section}
          </a>
        </div>
      ))}
    </nav>
  )
}

export default SubNav
