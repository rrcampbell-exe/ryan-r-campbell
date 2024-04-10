import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { ThemeContext } from '../../../../Theme'

const PageWrapper = ({ pageTitle, children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme}>
      <Header pageTitle={pageTitle} />
        {children}
      <Footer />
    </div>
  )
}

export default PageWrapper
