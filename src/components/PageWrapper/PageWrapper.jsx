import { useContext, useEffect, useLayoutEffect } from 'react'
import { ThemeContext } from '../../Theme'
import { useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import PropTypes from 'prop-types'
import { Header, Footer } from '../'

const PageWrapper = ({ pageTitle, children, className }) => {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()

  // ensures legacy redirects from google display page content correctly
  useEffect(() => {
    if (document.referrer.includes('google.com')) {
      // if window.location.href ends in a slash, remove it without triggering a new navigation
      if (window.location.href.endsWith('/') && location.pathname !== '/') {
        const trimmedUrl = window.location.href.slice(0, -1)
        window.history.replaceState(null, '', trimmedUrl)
      }
    }
  }, [location.pathname])

  useLayoutEffect(() => {
    const header = document.querySelector('.Header')
    const subNav = document.querySelector('.SubNav')
    const rootStyle = document.documentElement.style

    const updateStickyHeights = () => {
      rootStyle.setProperty('--site-header-height', `${header?.getBoundingClientRect().height ?? 0}px`)
      rootStyle.setProperty('--site-subnav-height', `${subNav?.getBoundingClientRect().height ?? 0}px`)
    }

    updateStickyHeights()
    const observer = window.ResizeObserver
      ? new window.ResizeObserver(updateStickyHeights)
      : null

    if (observer && header) observer.observe(header)
    if (observer && subNav) observer.observe(subNav)
    window.addEventListener('resize', updateStickyHeights)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updateStickyHeights)
      rootStyle.removeProperty('--site-header-height')
      rootStyle.removeProperty('--site-subnav-height')
    }
  }, [location.pathname])

  useLayoutEffect(() => {
    const targetId = location.hash.slice(1)
    const target = targetId ? document.getElementById(targetId) : null

    if (target) {
      const heading = target.matches('h1, h2, h3, h4, h5, h6')
        ? target
        : target.querySelector('h1, h2, h3, h4, h5, h6')
      const focusTarget = heading || target

      if (!focusTarget.hasAttribute('tabindex')) {
        focusTarget.setAttribute('tabindex', '-1')
      }

      const scrollToTarget = () => {
        focusTarget.focus({ preventScroll: true })
        target.scrollIntoView?.({ behavior: 'instant', block: 'start' })
      }

      let frameId = window.requestAnimationFrame(() => {
        frameId = window.requestAnimationFrame(scrollToTarget)
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.hash, location.key, location.pathname])

  const classNameString = className ? `${theme} ${className}` : `${theme}`

  return (
    <div className={classNameString}>
      <a className='skip-to-main' href='#main-content'>Skip to main content</a>
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

PageWrapper.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}
