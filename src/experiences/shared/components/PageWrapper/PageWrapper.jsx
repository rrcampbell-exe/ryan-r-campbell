import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { ThemeContext } from '../../../../Theme'
import { useLocation } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"

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
        <Analytics />
      <Footer />
    </div>
  )
}

export default PageWrapper
