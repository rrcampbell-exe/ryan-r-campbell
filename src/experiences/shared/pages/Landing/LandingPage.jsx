import React from 'react'
import PageTitle from '../../components/PageTitle'
import PageSubtitle from '../../components/PageSubtitle'
import Card from '../../components/Card'

// TODO: need styled component for shared header; text will vary, but structure should be same

const LandingPage = () => {
  return (
    <div>
      <PageTitle title='ryan r. campbell' />
      <PageSubtitle subtitle='author | technologist' />
      <Card>hi</Card>
    </div>
  )
}

export default LandingPage
