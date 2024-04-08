import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const PageWrapper = ({ pageTitle, children }) => {
  return (
    <body>
      <Header pageTitle={pageTitle} />
        {children}
      <Footer />
    </body>
  )
}

export default PageWrapper
