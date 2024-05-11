import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../Theme'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Header, Footer } from '../'

const PageWrapper = ({ pageTitle, children }) => {
  const { theme } = useContext(ThemeContext)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(top);
  }, [pathname])

  return (
    <div className={theme}>
      <Header pageTitle={pageTitle} />
        {children}
        <div data-testid='analytics'>
          <Analytics />
        </div>
        <div data-testid='speed-insights'>
          <SpeedInsights />
        </div>
      <Footer />
    </div>
  )
}

export default PageWrapper
