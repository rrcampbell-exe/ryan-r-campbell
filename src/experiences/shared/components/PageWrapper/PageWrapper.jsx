import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { ThemeContext } from '../../../../Theme'
import { useLocation } from 'react-router-dom'

const PageWrapper = ({ pageTitle, children }) => {
  const { theme } = useContext(ThemeContext)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className={theme}>
      <Header pageTitle={pageTitle} />
        {children}
      <Footer />
    </div>
  )
}

export default PageWrapper
