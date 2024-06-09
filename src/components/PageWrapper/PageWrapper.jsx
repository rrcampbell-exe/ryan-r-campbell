import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../Theme'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Header, Footer } from '../'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <title>Ryan R. Campbell - Author & Technologist</title>
        <meta name="description" content="Ryan R. Campbell is a technologist and two-time International Book Awards finalist for his novels Scambait and EMPATHY: Imminent Dawn." />
        <meta property="image" content="https://www.ryanrcampbell.com/2024-keep-curious-site-cover-img.png" />
        <meta property="og:title" content="Ryan R. Campbell - Author & Technologist" />
        <meta property="og:description" content="Ryan R. Campbell is a technologist and two-time International Book Awards finalist for his novels Scambait and EMPATHY: Imminent Dawn." />
        <meta property="og:image" content="https://www.ryanrcampbell.com/2024-keep-curious-site-cover-img.png" />
        <meta property="og:site_name" content="Ryan R. Campbell - Author & Technologist" />
        <meta property="og:url" content="https://www.ryanrcampbell.com" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ryan R. Campbell - Author & Technologist" />
        <meta property="twitter:description" content="Ryan R. Campbell is a technologist and two-time International Book Awards finalist for his novels Scambait and EMPATHY: Imminent Dawn." />
        <meta property="twitter:image" content="https://www.ryanrcampbell.com/2024-keep-curious-site-cover-img.png"/>
        <meta property="pinterest:title" content="Ryan R. Campbell - Author & Technologist" />
        <meta property="pinterest:description" content="Ryan R. Campbell is a technologist and two-time International Book Awards finalist for his novels Scambait and EMPATHY: Imminent Dawn." />
        <meta property="pinterest:image" content="https://www.ryanrcampbell.com/2024-keep-curious-site-cover-img.png" />
        <meta property="google:title" content="Ryan R. Campbell - Author & Technologist"/>
        <meta property="google:description" content="Ryan R. Campbell is a technologist and two-time International Book Awards finalist for his novels Scambait and EMPATHY: Imminent Dawn." />
      </Helmet>
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
