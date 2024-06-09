import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../Theme'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Header, Footer } from '../'

const PageWrapper = ({ pageTitle, children, className }) => {
  const { theme } = useContext(ThemeContext)
  const { pathname } = useLocation()

  // ensures legacy redirects from google display page content correctly
  useEffect(() => {
    // if window.location.href ends in a slash, remove it
    if (window.location.href.endsWith('/') && pathname !== '/') {
      // remove ending slash from window.location.href and update the history
      window.location.href = window.location.href.slice(0, -1)
      window.history.replaceState(null, '', newUrl)
    }
  }, [pathname])

  useEffect(() => {
    window.scrollTo(top);
  }, [pathname])

  const classNameString = className ? `${theme} ${className}` : `${theme}`

  return (
    <div className={classNameString}>
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
