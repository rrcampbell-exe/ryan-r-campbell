import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  margin: 0 auto;
  padding: 0;
`

const PageTitle = ({ title }) => {
  return (
    <StyledH1>
      {title}
    </StyledH1>
  )
}

export default PageTitle
