import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  margin: 0 auto;
  padding: 0;
`

const PageSubtitle = ({ subtitle }) => {
  return (
    <StyledH2>
      {subtitle}
    </StyledH2>
  )
}

export default PageSubtitle
