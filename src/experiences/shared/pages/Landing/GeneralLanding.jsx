import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
 
const GeneralLanding = () => {
  const navigate = useNavigate()
  return (
    <PageWrapper pageTitle='author | technologist' >
      <main className='section-wrapper'>
        <div className='card-container'>
          <div className='card' onClick={() => navigate('/author')}>
            <h2>asdf</h2>
            <p>author</p>
          </div>
          <div className='card'>
            <h2>{"</>"}</h2>
            <p>technologist</p>
          </div>
        </div>
        <div className='experience-selection'>
          <p>choose your experience</p>
        </div>
      </main>
    </PageWrapper>
  )
}

export default GeneralLanding
